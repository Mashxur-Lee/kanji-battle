import { CHAT_MAX_LENGTH, LEVELS, MODE_LABEL, MODES, type ClientMessage, type GameMode, type Level, type PublicUser, type ServerMessage } from '../shared/protocol';
import type { AuthService } from './auth/AuthService';
import { toPublic } from './auth/AuthService';
import { sanitizeDrawing } from './handwriting/judge';
import type { Client, MemberProfile, Room } from './Room';
import type { Matchmaker } from './Matchmaker';
import type { RoomManager } from './RoomManager';
import { picUrl, type StudyService } from './study/StudyService';
import type { SocialService } from './study/SocialService';
import { MODE_LEVEL, modeUnlocked } from '../shared/progress';

const MAX_ANSWER_LENGTH = 40;
const MAX_WRITTEN_CHARS = 8;
const PING_EVERY_MS = 3_000;

/** Keep only known levels, in canonical order. */
function parseLevels(raw: unknown): Level[] {
  return Array.isArray(raw) ? LEVELS.filter((l) => raw.includes(l)) : [];
}

/** Tracks the one live session per account (newest wins), so we can kick on ban / second tab. */
export interface Presence { online: boolean; activity?: string; since?: number; lastSeen?: number }

export class SessionHub {
  private byUser = new Map<string, Session>();
  private onlineSince = new Map<string, number>();
  private lastSeen = new Map<string, number>(); // since the server started
  /** Admin → Users: is this player connected right now, and what are they doing? */
  presence(userId: string): Presence {
    const s = this.byUser.get(userId);
    if (!s) return { online: false, lastSeen: this.lastSeen.get(userId) };
    return { online: true, activity: s.activity(), since: this.onlineSince.get(userId) };
  }
  get onlineCount() { return this.byUser.size; }
  claim(userId: string, s: Session) {
    const old = this.byUser.get(userId);
    this.byUser.set(userId, s);
    if (!old) this.onlineSince.set(userId, Date.now());
    if (old && old !== s) old.kick('You opened Kanji Battle somewhere else.');
  }
  release(userId: string, s: Session) {
    if (this.byUser.get(userId) !== s) return;
    this.byUser.delete(userId);
    this.onlineSince.delete(userId);
    this.lastSeen.set(userId, Date.now());
  }
  kick(userId: string, message: string) { this.byUser.get(userId)?.kick(message); }
  /** A message to one player, if they're connected (friend requests, invites). */
  sendTo(userId: string, msg: ServerMessage) { const s = this.byUser.get(userId); if (s) s.send(msg); return !!s; }
}

/** One per socket connection: authenticates, validates untrusted input, routes it to the right Room. */
/** Why a friend can't be invited right now (null = go ahead): already here, mid-game, or just invited. */
export function inviteRefusal(o: { inRoom: boolean; activity?: string; lastAt?: number; now: number }): string | null {
  if (o.inRoom) return 'Your friend is already in this room';
  if (o.activity?.startsWith('Playing')) return 'Your friend is in a game right now — invite them when it\'s over';
  const wait = INVITE_COOLDOWN_MS - (o.now - (o.lastAt ?? -Infinity));
  if (wait > 0) return `Wait ${Math.ceil(wait / 1000)} s before inviting them again`;
  return null;
}
/** A host can invite the same friend again after this long (e.g. they missed it, or left another room first). */
export const INVITE_COOLDOWN_MS = 10_000;

export class Session implements Client {
  private user?: PublicUser;
  private invitedAt = new Map<string, number>();
  private room?: Room;

  constructor(
    private readonly rooms: RoomManager,
    private readonly auth: AuthService,
    private readonly hub: SessionHub,
    private readonly study: StudyService,
    private readonly out: (json: string) => void,
    private readonly close: () => void,
    private readonly matchmaker?: Matchmaker,
    private readonly social?: SocialService,
  ) {}

  /** New players start with Reading and Rapid; the other modes unlock with levels (to create or queue). */
  private async modeLock(modes: GameMode[]): Promise<string | null> {
    if (this.user?.role === 'admin') return null;
    const rec = await this.auth.store.findById(this.user!.id);
    const locked = modes.find((m) => !modeUnlocked(m, rec?.xp ?? 0));
    return locked ? `${MODE_LABEL[locked]} unlocks at level ${MODE_LEVEL[locked]} — win a few games first (or join a friend's room).` : null;
  }

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

    // too many struggling spells waiting: study first (checked on the server, so it can't be skipped)
    if (msg.type === 'queue' || msg.type === 'create' || msg.type === 'join') {
      const lock = await this.study.playLock(user);
      if (lock) return this.send({ type: 'error', message: lock });
    }
    if (msg.type === 'queue') {
      if (!this.matchmaker) return;
      const wanted = (Array.isArray(msg.modes) ? msg.modes : []).filter((m): m is GameMode => MODES.includes(m as GameMode));
      const lock = await this.modeLock(wanted);
      if (lock) return this.send({ type: 'error', message: lock });
      const err = this.matchmaker.enqueue(user.id, this, msg.modes, msg.levels);
      if (err) this.send({ type: 'error', message: err });
      return;
    }
    if (msg.type === 'queue_cancel') return this.matchmaker?.cancel(user.id);
    if (msg.type === 'queue_accept') return this.matchmaker?.accept(user.id, msg.matchId);

    if (msg.type === 'create') {
      this.matchmaker?.cancel(user.id, false);
      if (this.room) return;
      const mode: GameMode = MODES.includes(msg.mode as GameMode) ? (msg.mode as GameMode) : 'reading';
      const lock = await this.modeLock([mode]);
      if (lock) return this.send({ type: 'error', message: lock });
      return await this.enter(this.rooms.create(mode, msg.tutorial === true && mode === 'reading'), parseLevels(msg.levels));
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
    if (msg.type === 'invite') {
      const friendId = String(msg.friendId ?? '');
      if (room.stage !== 'lobby') return this.send({ type: 'error', message: 'Invite friends from the lobby' });
      if (!this.social || !(await this.social.areFriends(user.id, friendId))) return this.send({ type: 'error', message: 'You can only invite friends' });
      const refused = inviteRefusal({ inRoom: room.has(friendId), activity: this.hub.presence(friendId).activity, lastAt: this.invitedAt.get(friendId), now: Date.now() });
      if (refused) return this.send({ type: 'notice', message: refused });
      this.invitedAt.set(friendId, Date.now());
      if (!this.hub.sendTo(friendId, { type: 'invite', fromId: user.id, from: user.username, code: room.code, mode: room.mode })) return this.send({ type: 'error', message: 'Your friend is offline' });
      return;
    }
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
      case 'deck_cast_ready': return room.deckCastReady(user.id, msg.castId);
      case 'deck_cast_go': return room.deckCastGo(user.id, msg.castId);
      case 'deck_ink': {
        // the whole drawing so far, as one group (same limits as a submitted word)
        const ink = Array.isArray(msg.strokes) && msg.strokes.length === 0 ? [[]] : sanitizeDrawing([msg.strokes], 1);
        if (typeof msg.castId === 'number' && typeof msg.cells === 'number' && ink) room.deckInk(user.id, msg.castId, ink[0], msg.cells);
        return;
      }
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

  /** What the player is doing (for admins): menus, searching, or in a room of some mode. */
  activity(): string {
    if (this.room) {
      const mode = MODE_LABEL[this.room.mode] ?? this.room.mode;
      return this.room.stage === 'game' ? `Playing ${mode}` : this.room.stage === 'results' ? `Results · ${mode}` : `Lobby · ${mode}`;
    }
    if (this.user && this.matchmaker?.isQueued(this.user.id)) return 'In the online queue';
    return 'In the menus';
  }

  /** Crit chance and XP shown in rooms (crit comes from learned flashcards). */
  private async profile(): Promise<MemberProfile> {
    const rec = await this.auth.store.findById(this.user!.id);
    return { crit: await this.study.crit(this.user!.id), xp: rec?.xp ?? 0, pic: rec ? picUrl(rec) : null, flame: rec?.flame ?? 'blue', staff: rec?.staff ?? 'verdant' };
  }

  private async enter(room: Room, levels: Level[]) {
    const user = this.user!;
    const result = room.join(user.id, user.username, this, levels, await this.profile());
    if (!result.ok) return this.send({ type: 'error', message: result.error });
    this.room = room;
    this.rooms.seat(user.id, room);
  }
}
