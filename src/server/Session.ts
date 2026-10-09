import { CHAT_MAX_LENGTH, LEVELS, MODES, type ClientMessage, type GameMode, type Level, type PublicUser, type ServerMessage } from '../shared/protocol';
import type { AuthService } from './auth/AuthService';
import { toPublic } from './auth/AuthService';
import { sanitizeDrawing } from './handwriting/judge';
import type { Client, MemberProfile, Room } from './Room';
import type { Matchmaker } from './Matchmaker';
import type { RoomManager } from './RoomManager';
import { picUrl, type StudyService } from './study/StudyService';

const MAX_ANSWER_LENGTH = 40;
const MAX_WRITTEN_CHARS = 8;
const PING_EVERY_MS = 3_000;

/** Keep only known levels, in canonical order. */
function parseLevels(raw: unknown): Level[] {
  return Array.isArray(raw) ? LEVELS.filter((l) => raw.includes(l)) : [];
}

/** Tracks the one live session per account (newest wins), so we can kick on ban / second tab. */
export class SessionHub {
  private byUser = new Map<string, Session>();
  claim(userId: string, s: Session) {
    const old = this.byUser.get(userId);
    this.byUser.set(userId, s);
    if (old && old !== s) old.kick('You opened Kanji Battle somewhere else.');
  }
  release(userId: string, s: Session) { if (this.byUser.get(userId) === s) this.byUser.delete(userId); }
  kick(userId: string, message: string) { this.byUser.get(userId)?.kick(message); }
}

/** One per socket connection: authenticates, validates untrusted input, routes it to the right Room. */
export class Session implements Client {
  private user?: PublicUser;
  private room?: Room;

  constructor(
    private readonly rooms: RoomManager,
    private readonly auth: AuthService,
    private readonly hub: SessionHub,
    private readonly study: StudyService,
    private readonly out: (json: string) => void,
    private readonly close: () => void,
    private readonly matchmaker?: Matchmaker,
  ) {}

  /** Matchmaker seats a matched player (exactly like joining with the code). */
  async joinMatched(room: Room, levels: Level[]): Promise<boolean> {
    if (!this.user || this.room) return false;
    await this.enter(room, levels);
    return this.room === room;
  }
  inRoom() { return !!this.room; }

  send(msg: ServerMessage) { this.out(JSON.stringify(msg)); }

  /** Connection quality: ping every few seconds, the room shows everyone's round-trip time. */
  private pingTimer?: ReturnType<typeof setInterval>;
  private startPings() {
    clearInterval(this.pingTimer);
    const ping = () => this.send({ type: 'ping', t: Date.now() });
    ping();
    this.pingTimer = setInterval(ping, PING_EVERY_MS);
    this.pingTimer.unref?.();
  }
  private onPong(t: unknown) {
    const rtt = Date.now() - Number(t);
    if (!Number.isFinite(rtt) || rtt < 0 || rtt > 60_000) return;
    if (this.user && this.room) this.room.setRtt(this.user.id, rtt);
  }

  kick(message: string) {
    if (this.user) this.matchmaker?.cancel(this.user.id, false);
    this.send({ type: 'kicked', message });
    this.detach();
    this.close();
  }

  private queue: Promise<void> = Promise.resolve();

  /** Messages are handled strictly in order (login is async, and later messages depend on it). */
  onRaw(raw: string): Promise<void> {
    this.queue = this.queue.then(() => this.handle(raw)).catch((e) => console.error('session error', e));
    return this.queue;
  }

  private async handle(raw: string) {
    let msg: Partial<ClientMessage> & Record<string, unknown>;
    try { msg = JSON.parse(raw); } catch { return; }
    if (!msg || typeof msg !== 'object' || typeof msg.type !== 'string') return;

    if (msg.type === 'hello') return this.hello(msg.token);
    const user = this.user;
    if (!user) return this.send({ type: 'auth_error', message: 'Please log in' });
    if (msg.type === 'pong') return this.onPong(msg.t);

    if (msg.type === 'queue') {
      if (!this.matchmaker) return;
      const err = this.matchmaker.enqueue(user.id, this, msg.modes, msg.levels);
      if (err) this.send({ type: 'error', message: err });
      return;
    }
    if (msg.type === 'queue_cancel') return this.matchmaker?.cancel(user.id);

    if (msg.type === 'create') {
      this.matchmaker?.cancel(user.id, false);
      if (this.room) return;
      const mode: GameMode = MODES.includes(msg.mode as GameMode) ? (msg.mode as GameMode) : 'reading';
      return await this.enter(this.rooms.create(mode), parseLevels(msg.levels));
    }
    if (msg.type === 'join') {
      if (this.room) return;
      this.matchmaker?.cancel(user.id, false);
      const room = this.rooms.get(String(msg.code ?? ''));
      if (!room) return this.send({ type: 'error', message: 'Room not found' });
      return await this.enter(room, parseLevels(msg.levels));
    }

    const room = this.room;
    if (!room) return;
    switch (msg.type) {
      case 'levels': {
        const levels = parseLevels(msg.levels);
        if (levels.length > 0) room.setLevels(user.id, levels);
        break;
      }
      case 'leave':
        room.leave(user.id);
        this.room = undefined;
        this.send({ type: 'left' });
        break;
      case 'forfeit': return room.forfeit(user.id);
      case 'deck_character': return room.deckCharacter(user.id, msg.character);
      case 'deck_pick': return room.deckPick(user.id, msg.cardId);
      case 'deck_play': return room.deckPlay(user.id, msg.cardId);
      case 'deck_ability': return room.deckAbility(user.id);
      case 'back_to_lobby': return room.backToLobby(user.id);
      case 'start': return room.start(user.id);
      case 'ready': return room.ready(user.id);
      case 'lobby_ready': return room.setLobbyReady(user.id, !!msg.ready);
      case 'add_bot': return room.addBot(user.id, msg.level);
      case 'remove_bot': return room.removeBot(user.id, msg.id);
      case 'chat':
        if (typeof msg.text === 'string') room.chat(user.id, msg.text.slice(0, CHAT_MAX_LENGTH * 2));
        break;
      case 'answer':
        if (typeof msg.challengeId === 'number' && typeof msg.text === 'string') {
          room.answer(user.id, msg.challengeId, msg.text.slice(0, MAX_ANSWER_LENGTH));
        }
        break;
      case 'write': {
        const chars = sanitizeDrawing(msg.chars, MAX_WRITTEN_CHARS);
        if (typeof msg.challengeId === 'number' && chars) room.write(user.id, msg.challengeId, chars);
        break;
      }
      case 'skip':
        if (typeof msg.challengeId === 'number') room.skip(user.id, msg.challengeId);
        break;
      case 'rematch': return room.rematch(user.id);
    }
  }

  /** Socket closed: keep the seat for a grace period so the player can come back. */
  onClose() {
    clearInterval(this.pingTimer);
    if (this.user) this.matchmaker?.cancel(this.user.id, false);
    if (this.user && this.room) this.room.disconnect(this.user.id, this);
    if (this.user) this.hub.release(this.user.id, this);
  }

  private async hello(token: unknown) {
    try {
      const rec = await this.auth.authenticate(token);
      this.user = toPublic(rec);
      this.hub.claim(rec.id, this);
      this.send({ type: 'welcome', user: this.user });
      this.startPings();
      // Back from the background / a refresh: take the seat back.
      const room = this.rooms.roomOf(rec.id);
      if (room) { this.room = room; room.setProfile(rec.id, await this.profile()); room.reconnect(rec.id, this); }
    } catch (e) {
      this.send({ type: 'auth_error', message: (e as Error).message });
    }
  }

  private detach() {
    if (this.user && this.room) this.room.disconnect(this.user.id, this);
    this.room = undefined;
  }

  /** Crit chance and XP shown in rooms (crit comes from learned flashcards). */
  private async profile(): Promise<MemberProfile> {
    const rec = await this.auth.store.findById(this.user!.id);
    return { crit: await this.study.crit(this.user!.id), xp: rec?.xp ?? 0, pic: rec ? picUrl(rec) : null };
  }

  private async enter(room: Room, levels: Level[]) {
    const user = this.user!;
    const result = room.join(user.id, user.username, this, levels, await this.profile());
    if (!result.ok) return this.send({ type: 'error', message: result.error });
    this.room = room;
    this.rooms.seat(user.id, room);
  }
}
