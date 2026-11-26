// 0.9.9.9.9.6 (round 4): Grammar Clash — a grammar quiz for 2 to 8 players, like a classroom quiz show ("Kahoot
// like: random grammar quiz with 4 options, faster answers more points, combos, 2x questions, a leaderboard after
// every question, a timer, each player's 2D character as their avatar, in ranked too").
//   · A room by code (a lobby: everyone's character, Ready, the host picks the level and how many questions, a chat),
//     or Quick match / Ranked: the queue gathers 2–8 players and starts on its own.
//   · Each question: a sentence with a gap and four choices, 20 seconds. Right: 500–1000 points, the faster the more;
//     a streak of right answers adds a combo bonus (+100 a step, up to +500); every fifth question and the last are
//     worth double. Then the answer, what everyone picked, and the leaderboard.
//   · The server keeps the clock and the score (an answer says only which choice; its time is the server's).
//   · Ranked: the final order moves everyone's rating — each pair of players counts as one game between them.
import { REAL_TIMERS, type TimerHandle, type Timers } from './clock';
import { GRAMMAR, grammarOf, shuffled, type GrammarLevel, type GrammarQuestion } from '../shared/grammar';
import type { ClashView, ClientMessage, ServerMessage } from '../shared/protocol';

export interface ClashPlayer { id: string; name: string; avatar: string; staff: string; guest?: boolean }
export interface ClashHooks {
  /** ranked: the final order (best first) → each player's rating change */
  settle?: (order: string[]) => Promise<Record<string, { before: number; after: number; games: number }>>;
  /** a friend asked to a room */
  invite?: (to: string, from: { id: string; name: string }, code: string) => boolean;
}
export const CLASH = { questionMs: 20_000, revealMs: 3_500, boardMs: 4_000, startMs: 4_000, gatherMs: 8_000, maxPlayers: 8, minPlayers: 2 };
export type ClashLevel = GrammarLevel | 'mix';
const COUNTS = [5, 10, 15, 20];
const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';

/** a right answer's points: 500–1000 by how fast (×2 on a double question), plus the combo bonus */
export function clashPoints(ms: number, limitMs: number, streak: number, double: boolean): number {
  const speed = Math.round(1000 * (1 - Math.min(1, Math.max(0, ms / limitMs)) / 2));
  const combo = Math.min(500, Math.max(0, streak - 1) * 100);
  return (speed + combo) * (double ? 2 : 1);
}
/** every fifth question and the last are double */
export const isDouble = (i: number, total: number) => (i + 1) % 5 === 0 || i === total - 1;

interface Seat extends ClashPlayer { ready: boolean; score: number; streak: number; best: number; right: number; left: boolean; last?: { k: number | null; right: boolean; points: number } }
interface Q { q: GrammarQuestion; options: string[]; answer: number; double: boolean }
interface Room {
  id: string; code: string; host: string; seats: Map<string, Seat>; quick: boolean; ranked: boolean;
  status: 'lobby' | 'starting' | 'question' | 'reveal' | 'board' | 'over';
  level: ClashLevel; count: number; qs: Q[]; i: number; startedAt: number; endsAt: number; picks: Map<string, { k: number; ms: number }>;
  chat: Array<{ from: string; name: string; text: string; at: number }>; lastChat: Map<string, number>; timer?: TimerHandle;
  ratings?: Record<string, { before: number; after: number; games: number }>; createdAt: number;
}

export class GrammarHub {
  private rooms = new Map<string, Room>();
  private byCode = new Map<string, string>();
  private byUser = new Map<string, string>();
  private queues: Record<'quick' | 'ranked', ClashPlayer[]> = { quick: [], ranked: [] };
  private gather: Partial<Record<'quick' | 'ranked', TimerHandle>> = {};

  constructor(
    private readonly send: (userId: string, m: ServerMessage) => void,
    private readonly now: () => number = Date.now,
    private readonly rnd: () => number = Math.random,
    private readonly timers: Timers = REAL_TIMERS,
    private readonly hooks: ClashHooks = {},
  ) {}

  async handle(user: ClashPlayer, msg: ClientMessage | Record<string, unknown>) {
    const m = msg as Record<string, unknown>;
    const err = (error: string) => this.send(user.id, { type: 'clash_error', error });
    const room = this.rooms.get(this.byUser.get(user.id) ?? '');
    const seat = room?.seats.get(user.id);
    switch (m.type) {
      case 'clash_new': {
        this.leaveAll(user.id);
        const r = this.make(user, false, false, cleanLevel(m.level), cleanCount(m.count));
        this.push(r);
        if (typeof m.invite === 'string' && this.hooks.invite && !this.hooks.invite(m.invite, user, r.code)) err('Your friend isn\'t online right now - send them the code');
        return;
      }
      case 'clash_join': {
        const r = this.rooms.get(this.byCode.get(String(m.code ?? '').trim().toUpperCase()) ?? '');
        if (!r) return err('No game with that code');
        if (r.seats.has(user.id)) return this.push(r, user.id);
        if (r.status !== 'lobby') return err('That game has already started');
        if (r.seats.size >= CLASH.maxPlayers) return err('That game is full');
        this.leaveAll(user.id);
        this.seat(r, user);
        this.say(r, null, 'joined', user);
        return this.push(r);
      }
      case 'clash_queue': {
        const kind = m.ranked === true ? 'ranked' : 'quick';
        for (const k of ['quick', 'ranked'] as const) this.queues[k] = this.queues[k].filter((p) => p.id !== user.id);
        if (m.on === false) { this.send(user.id, { type: 'clash_queue', on: false, waiting: 0, ranked: kind === 'ranked' }); return; }
        if (kind === 'ranked' && user.guest) return err('Save your account to play ranked');
        this.leaveAll(user.id);
        this.queues[kind].push(user);
        this.queueTick(kind);
        return;
      }
      case 'clash_sync': return room ? this.push(room, user.id) : err('That game is over');
      case 'clash_ready': {
        if (!room || !seat || room.status !== 'lobby') return;
        seat.ready = m.on !== false;
        return this.push(room);
      }
      case 'clash_settings': {
        if (!room || room.host !== user.id || room.status !== 'lobby' || room.quick) return;
        room.level = cleanLevel(m.level ?? room.level); room.count = cleanCount(m.count ?? room.count);
        return this.push(room);
      }
      case 'clash_start': {
        if (!room || room.host !== user.id || room.status !== 'lobby') return;
        const here = [...room.seats.values()].filter((s) => !s.left);
        if (here.length < CLASH.minPlayers) return err('Two players at least');
        if (here.some((s) => s.id !== room.host && !s.ready)) return err('Not everyone is ready');
        return this.begin(room);
      }
      case 'clash_answer': {
        if (!room || !seat || seat.left || room.status !== 'question' || Number(m.i) !== room.i || room.picks.has(user.id)) return;
        const k = Number(m.k);
        if (!Number.isInteger(k) || k < 0 || k > 3) return;
        room.picks.set(user.id, { k, ms: Math.max(0, this.now() - room.startedAt) });
        const live = [...room.seats.values()].filter((s) => !s.left);
        if (live.every((s) => room.picks.has(s.id))) return this.reveal(room); // everyone has answered: no waiting
        return this.push(room);
      }
      case 'clash_chat': {
        if (!room || !seat) return;
        const text = String(m.text ?? '').replace(/\s+/g, ' ').trim().slice(0, 200);
        const last = room.lastChat.get(user.id) ?? 0;
        if (!text || this.now() - last < 600) return;
        room.lastChat.set(user.id, this.now());
        this.say(room, user, text);
        return this.push(room);
      }
      case 'clash_again': {
        if (!room || room.status !== 'over' || room.quick) return;
        if (room.host !== user.id) return;
        for (const [id, s] of room.seats) if (s.left) { room.seats.delete(id); this.byUser.delete(id); }
        room.status = 'lobby'; room.qs = []; room.i = 0; room.ratings = undefined;
        for (const s of room.seats.values()) Object.assign(s, { ready: false, score: 0, streak: 0, best: 0, right: 0, last: undefined });
        return this.push(room);
      }
      case 'clash_leave': return this.leave(user.id);
    }
  }
  /** gone (closed the app): out of the queues; a game goes on without them */
  disconnect(userId: string) {
    for (const k of ['quick', 'ranked'] as const) this.queues[k] = this.queues[k].filter((p) => p.id !== userId);
  }

  // ── rooms ──
  private make(host: ClashPlayer, quick: boolean, ranked: boolean, level: ClashLevel, count: number): Room {
    let code = '';
    do code = Array.from({ length: 4 }, () => LETTERS[Math.floor(this.rnd() * LETTERS.length)]).join(''); while (this.byCode.has(code));
    const r: Room = { id: `g${Math.floor(this.rnd() * 1e12).toString(36)}${this.now().toString(36)}`, code, host: host.id, seats: new Map(), quick, ranked, status: 'lobby', level, count, qs: [], i: 0, startedAt: 0, endsAt: 0, picks: new Map(), chat: [], lastChat: new Map(), createdAt: this.now() };
    this.rooms.set(r.id, r); this.byCode.set(code, r.id);
    this.seat(r, host);
    return r;
  }
  private seat(r: Room, p: ClashPlayer) {
    r.seats.set(p.id, { ...p, ready: false, score: 0, streak: 0, best: 0, right: 0, left: false });
    this.byUser.set(p.id, r.id);
  }
  private leaveAll(userId: string) { if (this.byUser.has(userId)) this.leave(userId); }
  private leave(userId: string) {
    const r = this.rooms.get(this.byUser.get(userId) ?? '');
    this.byUser.delete(userId);
    if (!r) return;
    const s = r.seats.get(userId);
    if (!s) return;
    if (r.status === 'lobby' || r.status === 'over') {
      r.seats.delete(userId);
      if (!r.seats.size) return this.close(r);
      if (r.host === userId) r.host = [...r.seats.keys()][0];
      this.say(r, null, 'left', s);
    } else {
      // in a game: their score stays on the board (ranked: they finish last)
      s.left = true;
      this.say(r, null, 'left', s);
      const live = [...r.seats.values()].filter((x) => !x.left);
      if (!live.length) return this.finish(r);
      if (r.status === 'question' && live.every((x) => r.picks.has(x.id))) return this.reveal(r);
    }
    this.push(r);
  }
  private close(r: Room) {
    this.timers.clearTimeout(r.timer);
    this.rooms.delete(r.id); this.byCode.delete(r.code);
    for (const id of r.seats.keys()) if (this.byUser.get(id) === r.id) this.byUser.delete(id);
  }
  private say(r: Room, from: ClashPlayer | null, text: string, about?: ClashPlayer) {
    r.chat.push({ from: from?.id ?? '', name: from?.name ?? about?.name ?? '', text, at: this.now() });
    if (r.chat.length > 40) r.chat.splice(0, r.chat.length - 40);
  }

  // ── the queue: 2–8 players gathered, then the game starts by itself ──
  private queueTick(kind: 'quick' | 'ranked') {
    const q = this.queues[kind];
    for (const p of q) this.send(p.id, { type: 'clash_queue', on: true, waiting: q.length, ranked: kind === 'ranked' });
    if (q.length >= CLASH.maxPlayers) return this.matchQueue(kind);
    if (q.length >= CLASH.minPlayers && this.gather[kind] === undefined) this.gather[kind] = this.timers.setTimeout(() => this.matchQueue(kind), CLASH.gatherMs);
  }
  private matchQueue(kind: 'quick' | 'ranked') {
    this.timers.clearTimeout(this.gather[kind]); this.gather[kind] = undefined;
    const take = this.queues[kind].splice(0, CLASH.maxPlayers);
    if (take.length < CLASH.minPlayers) { this.queues[kind].unshift(...take); return; }
    const r = this.make(take[0], true, kind === 'ranked', 'mix', 10);
    for (const p of take.slice(1)) this.seat(r, p);
    for (const p of take) this.send(p.id, { type: 'clash_queue', on: false, waiting: 0, ranked: kind === 'ranked' });
    this.begin(r);
    if (this.queues[kind].length) this.queueTick(kind);
  }

  // ── the game ──
  private pickQuestions(level: ClashLevel, count: number): Q[] {
    const pool = (level === 'mix' ? GRAMMAR : grammarOf(level)).flatMap((g) => g.questions);
    const bag = [...pool];
    for (let i = bag.length - 1; i > 0; i--) { const j = Math.floor(this.rnd() * (i + 1)); [bag[i], bag[j]] = [bag[j], bag[i]]; }
    const n = Math.min(count, bag.length);
    return bag.slice(0, n).map((q, i) => ({ q, ...shuffled(q, this.rnd), double: isDouble(i, n) }));
  }
  private begin(r: Room) {
    r.qs = this.pickQuestions(r.level, r.count);
    r.i = -1; r.status = 'starting'; r.endsAt = this.now() + CLASH.startMs;
    for (const s of r.seats.values()) Object.assign(s, { score: 0, streak: 0, best: 0, right: 0, last: undefined });
    this.push(r);
    this.later(r, CLASH.startMs, () => this.ask(r));
  }
  private later(r: Room, ms: number, fn: () => void) {
    this.timers.clearTimeout(r.timer);
    r.timer = this.timers.setTimeout(() => { if (this.rooms.has(r.id)) fn(); }, ms);
  }
  private ask(r: Room) {
    r.i++;
    if (r.i >= r.qs.length) return this.finish(r);
    r.status = 'question'; r.picks = new Map(); r.startedAt = this.now(); r.endsAt = r.startedAt + CLASH.questionMs;
    this.push(r);
    this.later(r, CLASH.questionMs, () => this.reveal(r));
  }
  private reveal(r: Room) {
    if (r.status !== 'question') return;
    const q = r.qs[r.i];
    for (const s of r.seats.values()) {
      const p = r.picks.get(s.id);
      const right = !!p && p.k === q.answer;
      s.streak = right ? s.streak + 1 : 0;
      s.best = Math.max(s.best, s.streak);
      const points = right ? clashPoints(p!.ms, CLASH.questionMs, s.streak, q.double) : 0;
      if (right) s.right++;
      s.score += points;
      s.last = { k: p ? p.k : null, right, points };
    }
    r.status = 'reveal'; r.endsAt = this.now() + CLASH.revealMs;
    this.push(r);
    this.later(r, CLASH.revealMs, () => {
      if (r.i >= r.qs.length - 1) return this.finish(r);
      r.status = 'board'; r.endsAt = this.now() + CLASH.boardMs;
      this.push(r);
      this.later(r, CLASH.boardMs, () => this.ask(r));
    });
  }
  /** the order at the end: the score; ties by right answers; anyone who left after those still here */
  order(r: Room): string[] {
    return [...r.seats.values()].sort((a, b) => Number(a.left) - Number(b.left) || b.score - a.score || b.right - a.right).map((s) => s.id);
  }
  private finish(r: Room) {
    this.timers.clearTimeout(r.timer);
    r.status = 'over'; r.endsAt = 0;
    this.push(r);
    if (r.ranked && this.hooks.settle) {
      void this.hooks.settle(this.order(r)).then((ch) => { r.ratings = ch; this.push(r); }).catch(() => { /* not rated */ });
    }
    // a quick match's room is done when it ends; a room by code stays for Play again
    if (r.quick) this.timers.setTimeout(() => this.close(r), 10 * 60_000);
  }

  view(r: Room, me: string): ClashView {
    const q = r.qs[r.i];
    const showQ = q && (r.status === 'question' || r.status === 'reveal' || r.status === 'board');
    const reveal = r.status === 'reveal' || r.status === 'board' || r.status === 'over';
    return {
      id: r.id, code: r.code, host: r.host, status: r.status, quick: r.quick, ranked: r.ranked, level: r.level, count: r.count,
      now: this.now(), endsAt: r.endsAt, limitMs: CLASH.questionMs, n: Math.max(0, r.i) + 1, total: r.qs.length || r.count,
      players: [...r.seats.values()].map((s) => ({ id: s.id, name: s.name, avatar: s.avatar, staff: s.staff, ready: s.ready, score: s.score, streak: s.streak, best: s.best, right: s.right, left: s.left, answered: r.status === 'question' && r.picks.has(s.id), ...(reveal && s.last ? { last: s.last } : {}) })),
      ...(showQ ? { q: { jp: q.q.jp, options: q.options, double: q.double, ...(r.status !== 'question' ? { answer: q.answer, filled: q.q.options[0], en: q.q.en, ru: q.q.ru } : {}), ...(r.picks.has(me) ? { mine: r.picks.get(me)!.k } : {}) } } : {}),
      ...(r.status === 'over' ? { order: this.order(r) } : {}),
      ...(r.ratings ? { ratings: r.ratings } : {}),
      chat: r.chat,
    };
  }
  private push(r: Room, only?: string) {
    for (const id of only ? [only] : r.seats.keys()) if (!r.seats.get(id)?.left || id === only) this.send(id, { type: 'clash', room: this.view(r, id) });
  }
  /** rooms nobody has touched for an hour (a lobby left open) go */
  sweep() {
    const t = this.now();
    for (const r of this.rooms.values()) if (r.status === 'lobby' && t - r.createdAt > 3_600_000) this.close(r);
  }
}
const cleanLevel = (v: unknown): ClashLevel => (['N5', 'N4', 'N3', 'N2', 'N1', 'mix'].includes(String(v)) && (v === 'mix' || grammarOf(v as GrammarLevel).length) ? v as ClashLevel : 'N5');
const cleanCount = (v: unknown): number => (COUNTS.includes(Number(v)) ? Number(v) : 10);
