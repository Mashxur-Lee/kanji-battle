import { reportServerError } from './errors';
import { CHAT_MAX_LENGTH, LEVELS, MODE_LABEL, MODES, type ClientMessage, type Device, type GameMode, type Level, type PublicUser, type ServerMessage } from '../shared/protocol';
import type { AuthService } from './auth/AuthService';
import { AuthError, toPublic } from './auth/AuthService';
import { isTransientDbError, retryDelay } from './db/transient';
import { Bucket } from './security';
import { sanitizeDrawing } from './handwriting/judge';
import type { Client, MemberProfile, Room } from './Room';
import type { Matchmaker } from './Matchmaker';
import type { RoomManager } from './RoomManager';
import { picUrl, type StudyService } from './study/StudyService';
import type { SocialService } from './study/SocialService';
import { characterOf, isKanaBeginner, levelsFor, MODE_LEVEL, modeUnlocked, poseOf } from '../shared/progress';

const MAX_ANSWER_LENGTH = 40;
const MAX_WRITTEN_CHARS = 8;
const PING_EVERY_MS = 3_000;

/** Keep only known levels, in canonical order. */
function parseLevels(raw: unknown): Level[] {
  return Array.isArray(raw) ? LEVELS.filter((l) => raw.includes(l)) : [];
}

/** Tracks the one live session per account (newest wins), so we can kick on ban / second tab. */
/** party (0.9.9.9.5.5): the room they're in — how many, how many fit, and its code when the host opened it to friends */
export interface Party { size: number; max: number; mode: string; code?: string }
export interface Presence { online: boolean; away?: boolean; activity?: string; since?: number; lastSeen?: number; device?: Device; party?: Party }

/** 0.9.9.9.2: what someone plays on (friends see a small icon): the Android app, the PC app, or a browser */
export function deviceOf(userAgent: string | undefined): Device {
  if (/KanjiWizardsAndroid/.test(userAgent ?? '')) return 'phone';
  if (/KanjiWizardsDesktop/.test(userAgent ?? '')) return 'pc';
  return 'web';
}
/** after the app goes to the background (and closes its connection), friends still see "Away" this long */
export const AWAY_KEEP_MS = 15 * 60_000;

export class SessionHub {
  private byUser = new Map<string, Session>();
  private onlineSince = new Map<string, number>();
  private lastSeen = new Map<string, number>(); // since the server started
  /** 0.9.9.9: saves when someone leaves (friends see "last online …" across server restarts) */
  constructor(private readonly onLeave?: (userId: string, at: number) => void) {}
  /** Admin → Users: is this player connected right now, and what are they doing? */
  presence(userId: string): Presence {
    const s = this.byUser.get(userId);
    if (!s) {
      // 0.9.9.9.2: in the background the app closes its connection (a "snapshot"): still away, not offline, for a while
      const p = this.parked.get(userId);
      if (p && Date.now() - p.at < AWAY_KEEP_MS) return { online: true, away: true, device: p.device, lastSeen: p.at };
      return { online: false, lastSeen: this.lastSeen.get(userId) };
    }
    return { online: true, away: s.away, activity: s.activity(), since: this.onlineSince.get(userId), device: s.device, party: s.party?.() };
  }
  private parked = new Map<string, { at: number; device: Device }>();
  get onlineCount() { return this.byUser.size; }

  // ── 0.9.9.9.5: invites that wait, push, and "declined" ─────────────────────
  /** invites not yet answered, per invitee (the app in the background had no connection: they come on reconnect) */
  private invites = new Map<string, Array<{ msg: InviteMsg; at: number }>>();
  /** `${inviter}>${invitee}` → when the invitee declined (the inviter can't invite them again for a while) */
  private declines = new Map<string, number>();
  private notifier: ((userId: string, data: Record<string, string>) => Promise<boolean>) | null = null;
  /** index.ts: how to push to someone's phone (Firebase); without it nothing is pushed */
  setNotifier(fn: (userId: string, data: Record<string, string>) => Promise<boolean>) { this.notifier = fn; }
  /** a push to the player's phone(s) — true when at least one got it */
  async notify(userId: string, data: Record<string, string>): Promise<boolean> {
    try { return this.notifier ? await this.notifier(userId, data) : false; } catch { return false; }
  }
  /** `${inviter}>${invitee}` → when they were last invited (a decline counts only for a real invite) */
  private asked = new Map<string, number>();
  addInvite(to: string, msg: InviteMsg, now = Date.now()) {
    this.asked.set(`${msg.fromId}>${to}`, now);
    for (const [k, at] of this.asked) if (now - at > DECLINE_ANSWER_MS) this.asked.delete(k);
    const list = (this.invites.get(to) ?? []).filter((x) => now - x.at < INVITE_KEEP_MS && x.msg.fromId !== msg.fromId);
    this.invites.set(to, [...list, { msg, at: now }].slice(-3));
  }
  /** invites still waiting for this player (newest last), for rooms still open — then forgotten */
  takeInvites(to: string, open: (code: string) => boolean, now = Date.now()): InviteMsg[] {
    const list = (this.invites.get(to) ?? []).filter((x) => now - x.at < INVITE_KEEP_MS && open(x.msg.code));
    this.invites.delete(to);
    return list.map((x) => x.msg);
  }
  dropInvites(to: string, fromId?: string) {
    if (!fromId) { this.invites.delete(to); return; }
    const list = (this.invites.get(to) ?? []).filter((x) => x.msg.fromId !== fromId);
    if (list.length) this.invites.set(to, list); else this.invites.delete(to);
  }
  /** `who` declined `fromId`'s invite: they can't be invited by them again for 2 minutes (0.9.9.9.5.1; it was 5); the inviter is told */
  decline(who: string, whoName: string, fromId: string, now = Date.now()) {
    if (!fromId || fromId === who) return;
    // only an invite they really got can be declined (no "X declined your invite" out of nowhere)
    const at = this.asked.get(`${fromId}>${who}`);
    if (at === undefined || now - at > DECLINE_ANSWER_MS) return;
    this.asked.delete(`${fromId}>${who}`);
    this.dropInvites(who, fromId);
    this.declines.set(`${fromId}>${who}`, now);
    for (const [k, at] of this.declines) if (now - at > DECLINE_BLOCK_MS) this.declines.delete(k);
    this.sendTo(fromId, { type: 'invite_declined', friendId: who, name: whoName, until: now + DECLINE_BLOCK_MS });
  }
  declinedAt(fromId: string, who: string) { return this.declines.get(`${fromId}>${who}`); }
  /** 0.9.9.9.5.3: index.ts — someone came online / went offline: their friends are told (friend_presence) */
  private presenceHook: ((userId: string, online: boolean) => void) | null = null;
  setPresenceHook(fn: (userId: string, online: boolean) => void) { this.presenceHook = fn; }
  claim(userId: string, s: Session) {
    this.parked.delete(userId);
    const old = this.byUser.get(userId);
    this.byUser.set(userId, s);
    if (!old) this.onlineSince.set(userId, Date.now());
    if (!old) this.presenceHook?.(userId, true); // (back from the background too: away → online)
    if (old && old !== s) old.kick('You opened Kanji Battle somewhere else.');
  }
  release(userId: string, s: Session) {
    if (this.byUser.get(userId) !== s) return;
    this.byUser.delete(userId);
    this.onlineSince.delete(userId);
    const now = Date.now();
    this.lastSeen.set(userId, now);
    if (s.away) this.parked.set(userId, { at: now, device: s.device });
    this.onLeave?.(userId, now);
    this.presenceHook?.(userId, false);
  }
  kick(userId: string, message: string) { this.byUser.get(userId)?.kick(message); }
  /** A message to one player, if they're connected (friend requests, invites). */
  sendTo(userId: string, msg: ServerMessage) { const s = this.byUser.get(userId); if (s) s.send(msg); return !!s; }
  /** A message to everyone connected (e.g. "the game is updating"). */
  broadcast(msg: ServerMessage) { for (const s of this.byUser.values()) s.send(msg); }
}

/** One per socket connection: authenticates, validates untrusted input, routes it to the right Room. */
/** Why a friend can't be invited right now (null = go ahead): already here, mid-game, or just invited. */
/** What friends and admins see while someone is outside a room (0.9.9.4.3). */
export const SCREEN_ACTIVITY: Record<string, string> = {
  study: 'Studying spells', review: 'Studying spells', deck: 'Studying spells', quiz: 'Taking a JLPT quiz', onoquiz: 'Taking an onomatopoeia quiz', passage: 'Reading a passage',
  daily: 'Playing the daily challenge', customize: 'Customizing', progress: 'Looking at their progress', history: 'Looking at match history', friends: 'With friends',
  // 0.9.9.9.5.4: the Kana section (it showed "In the menus"), the Quizzes page, the dictionary
  kana: 'Studying kana', kanaplay: 'Studying kana', quizzes: 'Choosing a quiz', dict: 'In the dictionary',
};
export function inviteRefusal(o: { inRoom: boolean; activity?: string; lastAt?: number; declinedAt?: number; now: number }): string | null {
  if (o.inRoom) return 'Your friend is already in this room';
  if (o.activity?.startsWith('Playing')) return 'Your friend is in a game right now — invite them when it\'s over';
  // 0.9.9.9.5: they said no — no asking again and again
  const block = DECLINE_BLOCK_MS - (o.now - (o.declinedAt ?? -Infinity));
  if (block > 0) return `They declined your invite — you can invite them again in ${Math.ceil(block / 60_000)} min`;
  const wait = INVITE_COOLDOWN_MS - (o.now - (o.lastAt ?? -Infinity));
  if (wait > 0) return `Wait ${Math.ceil(wait / 1000)} s before inviting them again`;
  return null;
}
/** A host can invite the same friend again after this long (e.g. they missed it, or left another room first). */
export const INVITE_COOLDOWN_MS = 10_000;
/** 0.9.9.9.5: after "Decline", the same friend can't invite you again for this long */
export const DECLINE_BLOCK_MS = 2 * 60_000;
/** an invite the friend couldn't get right away (app in the background) waits this long for them */
export const INVITE_KEEP_MS = 2 * 60_000;
/** how long after an invite its Decline still counts (the notification can sit on the phone a while) */
const DECLINE_ANSWER_MS = 10 * 60_000;
type InviteMsg = Extract<ServerMessage, { type: 'invite' }>;

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

  /** Every mode is open from the start (0.9.9.3.4); kept as a hook in case a mode ever needs a level again. */
  private async modeLock(modes: GameMode[]): Promise<string | null> {
    if (this.user?.role === 'admin') return null;
    const rec = await this.auth.store.findById(this.user!.id);
    const locked = modes.find((m) => !modeUnlocked(m, rec?.xp ?? 0));
    return locked ? `${MODE_LABEL[locked]} unlocks at level ${MODE_LEVEL[locked]} — win a few games first (or join a friend's room).` : null;
  }

  /** Levels this player may play: a hiragana beginner gets only かな (Settings → "I've mastered hiragana"). */
  private async allowedLevels(levels: Level[]): Promise<Level[]> {
    if (this.user?.role === 'admin') return levels;
    const rec = await this.auth.store.findById(this.user!.id);
    return isKanaBeginner(rec?.unlocks) ? levelsFor(levels, true) : levels;
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
    this.queue = this.queue.then(() => this.handle(raw)).catch((e) => reportServerError('session error', e));
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
    if (msg.type === 'where') { this.screen = typeof msg.screen === 'string' && msg.screen in SCREEN_ACTIVITY ? msg.screen : ''; return; }
    // 0.9.9.9: the app went to the background (or came back): friends see you as away (orange)
    if (msg.type === 'away') { this.away = msg.on === true; return; }

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
      const err = this.matchmaker.enqueue(user.id, this, msg.modes, await this.allowedLevels(parseLevels(msg.levels)));
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
      this.hub.dropInvites(user.id); // (answered by joining)
      return await this.enter(room, parseLevels(msg.levels));
    }

    // 0.9.9.9.5: "Decline" on a friend's invite (you may be in no room at all)
    if (msg.type === 'invite_decline') { this.hub.decline(user.id, user.name ?? user.username, String(msg.fromId ?? '')); return; }
    const room = this.room;
    if (!room) return;
    if (msg.type === 'invite') {
      const friendId = String(msg.friendId ?? '');
      if (room.stage !== 'lobby') return this.send({ type: 'error', message: 'Invite friends from the lobby' });
      if (!this.social || !(await this.social.areFriends(user.id, friendId))) return this.send({ type: 'error', message: 'You can only invite friends' });
      const presence = this.hub.presence(friendId);
      const refused = inviteRefusal({ inRoom: room.has(friendId), activity: presence.activity, lastAt: this.invitedAt.get(friendId), declinedAt: this.hub.declinedAt(user.id, friendId), now: Date.now() });
      if (refused) return this.send({ type: 'notice', message: refused });
      this.invitedAt.set(friendId, Date.now());
      const invite: InviteMsg = { type: 'invite', fromId: user.id, from: user.name ?? user.username, code: room.code, mode: room.mode };
      // 0.9.9.9.5: it waits for them (an app in the background has no connection — it comes when they're back), and
      // a phone that isn't connected (or is in the background) gets a notification
      this.hub.addInvite(friendId, invite);
      const live = this.hub.sendTo(friendId, invite);
      // 0.9.9.9.5.1: a friend on the phone app gets the push even when their connection looks live — Android can
      // freeze the app with the connection still open (the app shows no notification while it's on screen)
      if (live && !presence.away && presence.device !== 'phone') return;
      // (0.9.9.9.5.4: "fromName", not "from" — Google refuses the whole push for that key: no invite push ever went out)
      const pushed = await this.hub.notify(friendId, { kind: 'invite', fromId: user.id, fromName: invite.from, code: room.code, mode: MODE_LABEL[room.mode] });
      if (!live) this.send(pushed ? { type: 'notice', message: 'Invite sent — they get a notification on their phone' } : { type: 'error', message: 'Your friend is offline' });
      return;
    }
    switch (msg.type) {
      case 'levels': {
        const levels = await this.allowedLevels(parseLevels(msg.levels));
        if (levels.length > 0) room.setLevels(user.id, levels);
        break;
      }
      case 'pause': {
        const err = room.setPaused(user.id, msg.on === true);
        if (err) this.send({ type: 'error', message: err });
        break;
      }
      case 'leave':
        room.leave(user.id);
        this.room = undefined;
        this.send({ type: 'left' });
        break;
      case 'forfeit': return room.forfeit(user.id);
      case 'leave_game': return room.leaveGame(user.id);
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
      case 'typing': return room.typing(user.id, msg.on === true);
      case 'chat_typing': return room.chatTyping(user.id, msg.on === true);
      case 'set_open': return room.setOpen(user.id, msg.open === true);
      case 'look':
        if (typeof msg.yaw === 'number' && typeof msg.pitch === 'number') room.look(user.id, msg.yaw, msg.pitch);
        break;
      case 'chat':
        // (0.9.9.9.5: 6 messages at once, then one every 2 s — no flooding the room)
        if (typeof msg.text === 'string') {
          if (!this.chatBucket.take()) { this.send({ type: 'error', message: 'Slow down a little — wait a moment before chatting again.' }); break; }
          room.chat(user.id, msg.text.slice(0, CHAT_MAX_LENGTH * 2));
        }
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
      // 0.9.9.9.5: the database waking up is not a bad login — tried again, and if it's still asleep the connection
      // is closed so the app simply reconnects. (Any error here used to answer "auth_error", which LOGGED THE PLAYER
      // OUT — one of the reasons the app got stuck offline or showed the login again.)
      let rec: Awaited<ReturnType<AuthService['authenticate']>> | undefined;
      for (let attempt = 0; !rec; attempt++) {
        try { rec = await this.auth.authenticate(token); } catch (e) {
          if (!isTransientDbError(e)) throw e;
          if (attempt >= 2) { this.close(); return; }
          await retryDelay(attempt);
        }
      }
      this.user = toPublic(rec);
      this.hub.claim(rec.id, this);
      this.send({ type: 'welcome', user: this.user });
      this.startPings();
      // 0.9.9.9.5: invites that came while the app was closed / in the background
      for (const inv of this.hub.takeInvites(rec.id, (code) => this.rooms.get(code)?.stage === 'lobby')) this.send(inv);
      // Back from the background / a refresh: take the seat back.
      const room = this.rooms.roomOf(rec.id);
      if (room) { this.room = room; room.setProfile(rec.id, await this.profile()); room.reconnect(rec.id, this); }
    } catch (e) {
      if (e instanceof AuthError) this.send({ type: 'auth_error', message: e.message });
      else { reportServerError('hello', e); this.close(); } // a fault of ours: reconnect, never a logout
    }
  }

  private detach() {
    if (this.user && this.room) this.room.disconnect(this.user.id, this);
    this.room = undefined;
  }

  /** the screen the app says it's on (outside rooms) */
  private screen = '';
  /** 0.9.9.9: the app is in the background */
  away = false;
  private readonly chatBucket = new Bucket(6, 0.5);
  /** the Android app, the PC app or a browser (from the connection's User-Agent; set by index.ts) */
  device: Device = 'web';
  /** What the player is doing (for admins): menus, searching, or in a room of some mode. */
  activity(): string {
    if (this.room) {
      const mode = MODE_LABEL[this.room.mode] ?? this.room.mode;
      return this.room.stage === 'game' ? `Playing ${mode}` : this.room.stage === 'results' ? `Results · ${mode}` : `Lobby · ${mode}`;
    }
    if (this.user && this.matchmaker?.isQueued(this.user.id)) return 'In the online queue';
    return SCREEN_ACTIVITY[this.screen] ?? 'In the menus';
  }

  /** 0.9.9.9.5.5: the room they're in, for their friends ("+1" beside them; "Join lobby" when it's open) */
  party(): Party | undefined {
    const r = this.room;
    if (!r) return undefined;
    return { size: r.size, max: r.maxPlayers, mode: MODE_LABEL[r.mode] ?? r.mode, ...(r.open && r.stage === 'lobby' && r.size < r.maxPlayers ? { code: r.code } : {}) };
  }

  /** Crit chance and XP shown in rooms (crit comes from learned flashcards). */
  private async profile(): Promise<MemberProfile> {
    const rec = await this.auth.store.findById(this.user!.id);
    return { crit: await this.study.crit(this.user!.id), xp: rec?.xp ?? 0, pic: rec ? picUrl(rec) : null, flame: rec?.flame ?? 'blue', staff: rec?.staff ?? 'verdant', border: rec?.border ?? 'none', pose: poseOf(rec?.unlocks), character: characterOf(rec?.unlocks) };
  }

  private async enter(room: Room, levels: Level[]) {
    const user = this.user!;
    const result = room.join(user.id, user.name ?? user.username, this, levels.length ? await this.allowedLevels(levels) : levels, await this.profile());
    if (!result.ok) return this.send({ type: 'error', message: result.error });
    this.room = room;
    this.rooms.seat(user.id, room);
  }
}
