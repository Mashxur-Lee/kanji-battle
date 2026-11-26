// 0.9.9.9.9.6: Kanji chess between two friends — a room with a 4-letter code; the server keeps the game (every move
// checked with the shared rules), the clocks (a turn's time is counted here, not by the players) and the result.
import { findMove, makeMove, outcome, parseFen, posKey, START_FEN, type Position } from '../shared/chess';
import type { ChessRoomView, ServerMessage } from '../shared/protocol';

interface Player { id: string; name: string }
interface Room {
  id: string; code: string; white: Player | null; black: Player | null; host: Player; moves: string[];
  pos: Position; keys: string[]; clocks: { w: number; b: number }; turnSince: number; base: number; inc: number;
  status: 'waiting' | 'playing' | 'over'; result?: { winner: 'w' | 'b' | null; reason: string }; drawOffer: 'w' | 'b' | null;
  timer?: ReturnType<typeof setTimeout>; endedAt?: number;
}
const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
/** the clocks a game may have: none, or 1–60 minutes with 0–30 s added a move */
export function cleanTime(base: unknown, inc: unknown): { base: number; inc: number } {
  const b = Number(base), i = Number(inc);
  const bb = Number.isFinite(b) && b >= 60_000 ? Math.min(3_600_000, Math.round(b / 1000) * 1000) : 0;
  return { base: bb, inc: bb && Number.isFinite(i) ? Math.max(0, Math.min(30_000, Math.round(i / 1000) * 1000)) : 0 };
}

export class ChessHub {
  private rooms = new Map<string, Room>();
  private byCode = new Map<string, string>();
  constructor(private readonly send: (userId: string, msg: ServerMessage) => void, private readonly now: () => number = Date.now, private readonly rnd: () => number = Math.random) {}

  handle(user: Player, msg: Record<string, unknown>) {
    this.sweep();
    const err = (error: string) => this.send(user.id, { type: 'chess_error', error });
    const room = typeof msg.id === 'string' ? this.rooms.get(msg.id) : undefined;
    const seat = room ? (room.white?.id === user.id ? 'w' : room.black?.id === user.id ? 'b' : room.host.id === user.id ? 'host' : null) : null;
    switch (msg.type) {
      case 'chess_new': {
        const { base, inc } = cleanTime(msg.base, msg.inc);
        let code = '';
        do code = Array.from({ length: 4 }, () => LETTERS[Math.floor(this.rnd() * LETTERS.length)]).join(''); while (this.byCode.has(code));
        const r: Room = { id: `c${Math.floor(this.rnd() * 1e12).toString(36)}${this.now().toString(36)}`, code, white: null, black: null, host: user, moves: [], pos: parseFen(START_FEN), keys: [], clocks: { w: base, b: base }, turnSince: 0, base, inc, status: 'waiting', drawOffer: null };
        this.rooms.set(r.id, r); this.byCode.set(code, r.id);
        return this.push(r);
      }
      case 'chess_join': {
        const id = this.byCode.get(String(msg.code ?? '').trim().toUpperCase());
        const r = id ? this.rooms.get(id) : undefined;
        if (!r || r.status === 'over') return err('No game with that code');
        if ([r.white?.id, r.black?.id, r.host.id].includes(user.id) && r.status !== 'waiting') return this.push(r);
        if (r.host.id === user.id) return this.push(r);
        if (r.status !== 'waiting') return err('That game has already started');
        // colours by lot
        const hostWhite = this.rnd() < 0.5;
        r.white = hostWhite ? r.host : user; r.black = hostWhite ? user : r.host;
        r.status = 'playing'; r.turnSince = this.now();
        this.arm(r);
        return this.push(r);
      }
      case 'chess_sync': return room && seat ? this.push(room, user.id) : err('That game is over');
      case 'chess_move': {
        if (!room || room.status !== 'playing' || (seat !== 'w' && seat !== 'b')) return err('Not your game');
        if (room.pos.turn !== seat) return err('Not your turn');
        if (this.flagged(room)) return;
        const m = findMove(room.pos, String(msg.uci ?? ''));
        if (!m) return err('That move isn\'t allowed');
        if (room.base) room.clocks[seat] = room.clocks[seat] - (this.now() - room.turnSince) + room.inc;
        room.keys.push(posKey(room.pos));
        room.pos = makeMove(room.pos, m);
        room.moves.push(String(msg.uci));
        room.turnSince = this.now();
        room.drawOffer = null;
        const o = outcome(room.pos, room.keys);
        if (o.over) this.end(room, o.winner, o.reason); else { this.arm(room); this.push(room); }
        return;
      }
      case 'chess_resign':
        if (!room || room.status !== 'playing' || (seat !== 'w' && seat !== 'b')) return;
        return this.end(room, seat === 'w' ? 'b' : 'w', 'resigned');
      case 'chess_draw':
        if (!room || room.status !== 'playing' || (seat !== 'w' && seat !== 'b')) return;
        if (msg.offer === false) { if (room.drawOffer && room.drawOffer !== seat) { room.drawOffer = null; this.push(room); } return; }
        if (room.drawOffer && room.drawOffer !== seat) return this.end(room, null, 'agreed');
        room.drawOffer = seat; return this.push(room);
      case 'chess_leave':
        if (!room || !seat) return;
        if (room.status === 'waiting') { this.rooms.delete(room.id); this.byCode.delete(room.code); return; }
        if (room.status === 'playing' && (seat === 'w' || seat === 'b')) return this.end(room, seat === 'w' ? 'b' : 'w', 'left');
        return;
    }
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
    this.byCode.delete(r.code);
    this.push(r);
  }
  view(r: Room, userId: string): ChessRoomView {
    return {
      id: r.id, code: r.code, you: r.white?.id === userId ? 'w' : r.black?.id === userId ? 'b' : null,
      white: r.white, black: r.black, moves: r.moves, clocks: { ...r.clocks }, turnSince: r.turnSince, now: this.now(), base: r.base, inc: r.inc,
      status: r.status, ...(r.result ? { result: r.result } : {}), drawOffer: r.drawOffer,
    };
  }
  private push(r: Room, only?: string) {
    const ids = only ? [only] : [...new Set([r.host.id, r.white?.id, r.black?.id].filter((x): x is string => !!x))];
    for (const id of ids) this.send(id, { type: 'chess', room: this.view(r, id) });
  }
  /** finished games go after 10 minutes; a room nobody joined after an hour */
  private sweep() {
    const t = this.now();
    for (const r of this.rooms.values()) {
      if ((r.status === 'over' && t - (r.endedAt ?? t) > 600_000) || (r.status === 'waiting' && t - Number.parseInt(r.id.slice(-8), 36) > 3_600_000)) { this.rooms.delete(r.id); this.byCode.delete(r.code); }
    }
  }
  get size() { return this.rooms.size; }
}
