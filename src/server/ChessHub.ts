// 0.9.9.9.9.6: Kanji chess between two friends — a room with a 4-letter code; the server keeps the game (every move
// checked with the shared rules), the clocks (a turn's time is counted here, not by the players) and the result.
// Round 4: a lobby like the private rooms' (both players, Ready, the host sets the clock, a chat that goes on in the
// game), Play again back to the lobby, a challenge from a friend's profile, each finished game kept in both players'
// match history, how long each move took.
import { findMove, makeMove, outcome, parseFen, posKey, START_FEN, type Position } from '../shared/chess';
import type { ChessRoomView, ServerMessage } from '../shared/protocol';

interface Player { id: string; name: string }
interface Room {
  id: string; code: string; host: Player; guest: Player | null; white: Player | null; black: Player | null; moves: string[]; times: number[];
  pos: Position; keys: string[]; clocks: { w: number; b: number }; turnSince: number; base: number; inc: number; createdAt: number;
  status: 'waiting' | 'lobby' | 'playing' | 'over'; result?: { winner: 'w' | 'b' | null; reason: string }; drawOffer: 'w' | 'b' | null;
  ready: Set<string>; chat: Array<{ from: string; name: string; text: string; at: number }>; lastChat: Map<string, number>;
  timer?: ReturnType<typeof setTimeout>; endedAt?: number;
  /** (round 5) a game started by a room (the private lobby, the online queue): it gets the end; ranked from the queue */
  bound?: { onEnd: () => void; ranked: boolean; ratings?: Record<string, { before: number; after: number; games: number }> };
}
/** a finished game, for each player's match history */
export interface ChessRecord { at: number; vs: string; vsBot?: string; ranked?: boolean; color: 'w' | 'b'; result: 'win' | 'loss' | 'draw'; reason: string; moves: string[]; times: number[]; base: number; inc: number }
const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
/** the clocks a game may have: none, or 1–60 minutes with 0–30 s added a move */
export function cleanTime(base: unknown, inc: unknown): { base: number; inc: number } {
  const b = Number(base), i = Number(inc);
  const bb = Number.isFinite(b) && b >= 60_000 ? Math.min(3_600_000, Math.round(b / 1000) * 1000) : 0;
  return { base: bb, inc: bb && Number.isFinite(i) ? Math.max(0, Math.min(30_000, Math.round(i / 1000) * 1000)) : 0 };
}

export interface ChessHooks {
  /** a challenge from a friend's profile: tell them (false: they aren't online) */
  invite?: (friendId: string, from: Player, code: string) => boolean;
  /** may this player challenge that one (friends only) */
  mayInvite?: (fromId: string, toId: string) => Promise<boolean>;
  /** a game finished: kept in a player's history */
  record?: (userId: string, game: ChessRecord) => void;
  /** (round 5) a ranked game ended: the ratings move (winner: 'w' / 'b' / null for a draw) */
  rate?: (whiteId: string, blackId: string, winner: 'w' | 'b' | null) => Promise<Record<string, { before: number; after: number; games: number }>>;
}

export class ChessHub {
  private rooms = new Map<string, Room>();
  private byCode = new Map<string, string>();
  constructor(private readonly send: (userId: string, msg: ServerMessage) => void, private readonly now: () => number = Date.now, private readonly rnd: () => number = Math.random, private readonly hooks: ChessHooks = {}) {}

  async handle(user: Player, msg: Record<string, unknown>) {
    this.sweep();
    const err = (error: string) => this.send(user.id, { type: 'chess_error', error });
    const room = typeof msg.id === 'string' ? this.rooms.get(msg.id) : undefined;
    const inRoom = !!room && (room.host.id === user.id || room.guest?.id === user.id);
    const seat = room && room.status !== 'waiting' && room.status !== 'lobby' ? (room.white?.id === user.id ? 'w' : room.black?.id === user.id ? 'b' : null) : null;
    switch (msg.type) {
      case 'chess_new': {
        const { base, inc } = cleanTime(msg.base, msg.inc);
        const invite = typeof msg.invite === 'string' ? msg.invite : '';
        if (invite && this.hooks.mayInvite && !(await this.hooks.mayInvite(user.id, invite))) return err('You can challenge your friends');
        let code = '';
        do code = Array.from({ length: 4 }, () => LETTERS[Math.floor(this.rnd() * LETTERS.length)]).join(''); while (this.byCode.has(code));
        const r: Room = { id: `c${Math.floor(this.rnd() * 1e12).toString(36)}${this.now().toString(36)}`, code, host: user, guest: null, white: null, black: null, moves: [], times: [], pos: parseFen(START_FEN), keys: [], clocks: { w: base, b: base }, turnSince: 0, base, inc, createdAt: this.now(), status: 'waiting', drawOffer: null, ready: new Set(), chat: [], lastChat: new Map() };
        this.rooms.set(r.id, r); this.byCode.set(code, r.id);
        this.push(r);
        if (invite && this.hooks.invite && !this.hooks.invite(invite, user, code)) err('Your friend isn\'t online right now - send them the code');
        return;
      }
      case 'chess_join': {
        const id = this.byCode.get(String(msg.code ?? '').trim().toUpperCase());
        const r = id ? this.rooms.get(id) : undefined;
        if (!r || r.status === 'over') return err('No game with that code');
        if (r.host.id === user.id || r.guest?.id === user.id) return this.push(r, user.id);
        if (r.guest) return err('That game already has two players');
        r.guest = user; r.status = 'lobby'; r.ready.clear();
        this.say(r, null, 'joined', user);
        return this.push(r);
      }
      case 'chess_sync': return room && inRoom ? this.push(room, user.id) : err('That game is over');
      case 'chess_ready': {
        if (!room || !inRoom || room.status !== 'lobby') return;
        if (msg.on === false) room.ready.delete(user.id); else room.ready.add(user.id);
        if (room.guest && room.ready.has(room.host.id) && room.ready.has(room.guest.id)) return this.start(room);
        return this.push(room);
      }
      case 'chess_time': {
        if (!room || room.host.id !== user.id || (room.status !== 'lobby' && room.status !== 'waiting')) return;
        const t = cleanTime(msg.base, msg.inc);
        room.base = t.base; room.inc = t.inc; room.ready.clear();
        return this.push(room);
      }
      case 'chess_chat': {
        if (!room || !inRoom) return;
        const text = String(msg.text ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, 200);
        if (!text) return;
        const last = room.lastChat.get(user.id) ?? 0;
        if (this.now() - last < 600) return err('Not so fast');
        room.lastChat.set(user.id, this.now());
        this.say(room, user, text);
        return this.push(room);
      }
      case 'chess_again': {
        if (room?.bound) return; // (round 5: the room's lobby)
        if (!room || !inRoom || room.status !== 'over' || !room.guest) return;
        room.status = 'lobby'; room.ready.clear(); room.moves = []; room.times = []; room.pos = parseFen(START_FEN); room.keys = [];
        room.result = undefined; room.drawOffer = null; room.clocks = { w: room.base, b: room.base }; room.white = null; room.black = null;
        this.byCode.set(room.code, room.id);
        return this.push(room);
      }
      case 'chess_move': {
        if (!room || room.status !== 'playing' || !seat) return err('Not your game');
        if (room.pos.turn !== seat) return err('Not your turn');
        if (this.flagged(room)) return;
        const m = findMove(room.pos, String(msg.uci ?? ''));
        if (!m) return err('That move isn\'t allowed');
        const spent = this.now() - room.turnSince;
        if (room.base) room.clocks[seat] = room.clocks[seat] - spent + room.inc;
        room.keys.push(posKey(room.pos));
        room.pos = makeMove(room.pos, m);
        room.moves.push(String(msg.uci));
        room.times.push(spent);
        room.turnSince = this.now();
        room.drawOffer = null;
        const o = outcome(room.pos, room.keys);
        if (o.over) this.end(room, o.winner, o.reason); else { this.arm(room); this.push(room); }
        return;
      }
      case 'chess_resign':
        if (!room || room.status !== 'playing' || !seat) return;
        return this.end(room, seat === 'w' ? 'b' : 'w', 'resigned');
      case 'chess_draw':
        if (!room || room.status !== 'playing' || !seat) return;
        if (msg.offer === false) { if (room.drawOffer && room.drawOffer !== seat) { room.drawOffer = null; this.push(room); } return; }
        if (room.drawOffer && room.drawOffer !== seat) return this.end(room, null, 'agreed');
        room.drawOffer = seat; return this.push(room);
      case 'chess_leave': {
        if (!room || !inRoom) return;
        if (room.bound && room.status !== 'playing') return; // (round 5: after the game, the room's lobby is where they are)
        if (room.status === 'playing' && seat) return this.end(room, seat === 'w' ? 'b' : 'w', 'left');
        // out of the lobby (or after the game): the host leaving closes the room; the guest leaving frees the seat
        if (room.host.id === user.id) { this.close(room, 'The host left the room', user.id); return; }
        room.guest = null; room.ready.clear(); room.status = room.status === 'over' ? 'over' : 'waiting';
        this.say(room, null, 'left', user);
        return this.push(room);
      }
    }
  }

  /**
   * 0.9.9.9.9.6 (round 5): a game for two players a room brought together (its lobby is the private game's, or the
   * online queue matched them): sides by lot, the clock the host chose; the room hears when it ends
   */
  startMatch(a: Player, b: Player, base: number, inc: number, ranked: boolean, onEnd: () => void): string {
    const t = cleanTime(base, inc);
    for (const r of [...this.rooms.values()]) if (r.status === 'over' && [r.host.id, r.guest?.id].some((x) => x === a.id || x === b.id)) { this.rooms.delete(r.id); this.byCode.delete(r.code); }
    const r: Room = { id: `c${Math.floor(this.rnd() * 1e12).toString(36)}${this.now().toString(36)}`, code: '', host: a, guest: b, white: null, black: null, moves: [], times: [], pos: parseFen(START_FEN), keys: [], clocks: { w: t.base, b: t.base }, turnSince: 0, base: t.base, inc: t.inc, createdAt: this.now(), status: 'lobby', drawOffer: null, ready: new Set(), chat: [], lastChat: new Map(), bound: { onEnd, ranked } };
    this.rooms.set(r.id, r);
    this.start(r);
    return r.id;
  }
  /** (round 5) someone left the room during a game it started: they lose it */
  leaveUser(userId: string) {
    for (const r of this.rooms.values()) {
      if (!r.bound || r.status !== 'playing') continue;
      const seat = r.white?.id === userId ? 'w' : r.black?.id === userId ? 'b' : null;
      if (seat) this.end(r, seat === 'w' ? 'b' : 'w', 'left');
    }
  }
  /** (round 5) a game being played by this player (the room's "Playing Kanji chess") */
  playing(userId: string) { return [...this.rooms.values()].some((r) => r.status === 'playing' && (r.white?.id === userId || r.black?.id === userId)); }

  private start(r: Room) {
    const hostWhite = this.rnd() < 0.5;
    r.white = hostWhite ? r.host : r.guest; r.black = hostWhite ? r.guest : r.host;
    r.status = 'playing'; r.turnSince = this.now(); r.moves = []; r.times = []; r.pos = parseFen(START_FEN); r.keys = [];
    r.clocks = { w: r.base, b: r.base }; r.ready.clear();
    this.byCode.delete(r.code); // (nobody else can come in now)
    this.arm(r);
    this.push(r);
  }
  // (a line from the room itself — "Ann joined" — has no sender, the player it is about as its name, and the words to translate)
  private say(r: Room, from: Player | null, text: string, about?: Player) {
    r.chat.push({ from: from?.id ?? '', name: from?.name ?? about?.name ?? '', text, at: this.now() });
    if (r.chat.length > 40) r.chat.splice(0, r.chat.length - 40);
  }
  private close(r: Room, why: string, by?: string) {
    if (r.timer) clearTimeout(r.timer);
    for (const id of [r.host.id, r.guest?.id].filter((x): x is string => !!x && x !== by)) this.send(id, { type: 'chess_error', error: why });
    this.rooms.delete(r.id); this.byCode.delete(r.code);
  }
  /** out of time: the other side wins (a draw if it has nothing left to mate with) */
  private flagged(r: Room): boolean {
    if (!r.base || r.status !== 'playing') return false;
    const side = r.pos.turn;
    if (r.clocks[side] - (this.now() - r.turnSince) > 0) return false;
    r.clocks[side] = 0;
    const them = side === 'w' ? 'b' : 'w';
    const mating = r.pos.board.some((x) => x && (them === 'w' ? x === x.toUpperCase() : x === x.toLowerCase()) && x.toLowerCase() !== 'k');
    this.end(r, mating ? them : null, 'time');
    return true;
  }
  private arm(r: Room) {
    if (r.timer) clearTimeout(r.timer);
    if (!r.base || r.status !== 'playing') return;
    const left = Math.max(0, r.clocks[r.pos.turn] - (this.now() - r.turnSince));
    r.timer = setTimeout(() => this.flagged(r), left + 50);
    (r.timer as { unref?: () => void }).unref?.();
  }
  private end(r: Room, winner: 'w' | 'b' | null, reason: string) {
    if (r.timer) clearTimeout(r.timer);
    if (r.base && r.status === 'playing') { const side = r.pos.turn; r.clocks[side] = Math.max(0, r.clocks[side] - (this.now() - r.turnSince)); r.turnSince = this.now(); }
    r.status = 'over'; r.result = { winner, reason }; r.drawOffer = null; r.endedAt = this.now();
    // kept in both players' match history
    if (this.hooks.record && r.white && r.black) {
      for (const [p, c, o] of [[r.white, 'w', r.black], [r.black, 'b', r.white]] as const) {
        this.hooks.record(p.id, { at: this.now(), ...(r.bound?.ranked ? { ranked: true } : {}), vs: o.name, color: c, result: winner === null ? 'draw' : winner === c ? 'win' : 'loss', reason, moves: [...r.moves], times: [...r.times], base: r.base, inc: r.inc });
      }
    }
    this.push(r);
    if (r.bound) {
      const b = r.bound;
      if (b.ranked && this.hooks.rate && r.white && r.black && reason !== 'agreed') void this.hooks.rate(r.white.id, r.black.id, winner).then((ch) => { b.ratings = ch; this.push(r); }).catch(() => { /* not rated */ });
      b.onEnd();
    }
  }
  view(r: Room, userId: string): ChessRoomView {
    return {
      id: r.id, code: r.code, you: r.white?.id === userId ? 'w' : r.black?.id === userId ? 'b' : null,
      white: r.white, black: r.black, host: r.host, guest: r.guest, ready: [...r.ready], chat: r.chat, times: r.times,
      moves: r.moves, clocks: { ...r.clocks }, turnSince: r.turnSince, now: this.now(), base: r.base, inc: r.inc,
      status: r.status, ...(r.result ? { result: r.result } : {}), drawOffer: r.drawOffer,
      ...(r.bound ? { bound: true, ranked: r.bound.ranked, ...(r.bound.ratings ? { ratings: r.bound.ratings } : {}) } : {}),
    };
  }
  private push(r: Room, only?: string) {
    const ids = only ? [only] : [...new Set([r.host.id, r.guest?.id].filter((x): x is string => !!x))];
    for (const id of ids) this.send(id, { type: 'chess', room: this.view(r, id) });
  }
  /** finished games go after 10 minutes; a room nobody played in after an hour */
  private sweep() {
    const t = this.now();
    for (const r of this.rooms.values()) {
      if ((r.status === 'over' && t - (r.endedAt ?? t) > 600_000) || ((r.status === 'waiting' || r.status === 'lobby') && t - r.createdAt > 3_600_000)) { this.rooms.delete(r.id); this.byCode.delete(r.code); }
    }
  }
  get size() { return this.rooms.size; }
}
