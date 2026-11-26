// 0.9.9.9.9.6: Kanji chess — the rules of chess (every legal move, check, mate, stalemate, castling, en passant,
// promotion, the 50-move rule, threefold repetition, too little to mate), a position's worth, a search, and the four
// bot wizards. Shared: the app plays the bots with it (offline too), the server checks friends' games with it.
// Each piece is shown as its kanji: 王 king, 后 queen, 城 rook (the castle), 僧 bishop (a monk), 馬 knight, 兵 pawn.

export type Color = 'w' | 'b';
/** upper case white, lower case black; '' an empty square */
export type Piece = '' | 'P' | 'N' | 'B' | 'R' | 'Q' | 'K' | 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
export type Kind = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
export interface Move { from: number; to: number; piece: Piece; captured: Piece; promo?: Kind; castle?: 'k' | 'q'; ep?: boolean; double?: boolean }
export interface Position { board: Piece[]; turn: Color; castling: string; ep: number; half: number; full: number }

export const PIECE_KANJI: Record<Kind, string> = { k: '王', q: '后', r: '城', b: '僧', n: '馬', p: '兵' };
export const PIECE_READING: Record<Kind, string> = { k: 'おう', q: 'きさき', r: 'しろ', b: 'そう', n: 'うま', p: 'へい' };
export const PIECE_NAME: Record<Kind, string> = { k: 'king', q: 'queen', r: 'rook', b: 'bishop', n: 'knight', p: 'pawn' };

export const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
// squares: 0 = a8 … 7 = h8, 56 = a1 … 63 = h1
export const sqName = (i: number) => `${'abcdefgh'[i % 8]}${8 - Math.floor(i / 8)}`;
export const sqIndex = (n: string) => (/^[a-h][1-8]$/.test(n) ? (8 - Number(n[1])) * 8 + 'abcdefgh'.indexOf(n[0]) : -1);
export const colorOf = (p: Piece): Color | null => (!p ? null : p === p.toUpperCase() ? 'w' : 'b');
export const kindOf = (p: Piece) => p.toLowerCase() as Kind;
const opp = (c: Color): Color => (c === 'w' ? 'b' : 'w');
const fileOf = (i: number) => i % 8, rankOf = (i: number) => Math.floor(i / 8);

export function parseFen(fen: string): Position {
  const [rows, turn, castling, ep, half, full] = fen.trim().split(/\s+/);
  const board: Piece[] = [];
  for (const ch of rows.replace(/\//g, '')) {
    if (/\d/.test(ch)) for (let i = 0; i < Number(ch); i++) board.push('');
    else board.push(ch as Piece);
  }
  if (board.length !== 64) throw new Error('bad FEN');
  return { board, turn: turn === 'b' ? 'b' : 'w', castling: castling === '-' ? '' : castling, ep: ep && ep !== '-' ? sqIndex(ep) : -1, half: Number(half) || 0, full: Number(full) || 1 };
}
export function toFen(p: Position): string {
  let rows = '';
  for (let r = 0; r < 8; r++) {
    let empty = 0;
    for (let f = 0; f < 8; f++) { const x = p.board[r * 8 + f]; if (!x) empty++; else { if (empty) rows += empty; empty = 0; rows += x; } }
    if (empty) rows += empty;
    if (r < 7) rows += '/';
  }
  return `${rows} ${p.turn} ${p.castling || '-'} ${p.ep >= 0 ? sqName(p.ep) : '-'} ${p.half} ${p.full}`;
}
/** the position without the move counters (for repetition) */
export const posKey = (p: Position) => toFen(p).split(' ').slice(0, 4).join(' ');

const KNIGHT = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
const KING = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
const DIAG = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
const ORTHO = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const at = (r: number, f: number) => (r >= 0 && r < 8 && f >= 0 && f < 8 ? r * 8 + f : -1);

/** is square `sq` attacked by colour `by`? */
export function attacked(b: Piece[], sq: number, by: Color): boolean {
  const r = rankOf(sq), f = fileOf(sq);
  const is = (i: number, k: Kind) => i >= 0 && b[i] !== '' && colorOf(b[i]) === by && kindOf(b[i]) === k;
  // pawns: a white pawn attacks up the board (towards rank 0)
  const pr = by === 'w' ? r + 1 : r - 1;
  if (is(at(pr, f - 1), 'p') || is(at(pr, f + 1), 'p')) return true;
  for (const [dr, df] of KNIGHT) if (is(at(r + dr, f + df), 'n')) return true;
  for (const [dr, df] of KING) if (is(at(r + dr, f + df), 'k')) return true;
  for (const [dirs, kinds] of [[DIAG, ['b', 'q']], [ORTHO, ['r', 'q']]] as const) {
    for (const [dr, df] of dirs) {
      let rr = r + dr, ff = f + df;
      while (rr >= 0 && rr < 8 && ff >= 0 && ff < 8) {
        const x = b[rr * 8 + ff];
        if (x) { if (colorOf(x) === by && (kinds as readonly string[]).includes(kindOf(x))) return true; break; }
        rr += dr; ff += df;
      }
    }
  }
  return false;
}
const kingSq = (b: Piece[], c: Color) => b.indexOf(c === 'w' ? 'K' : 'k');
export const inCheck = (p: Position, c: Color = p.turn) => { const k = kingSq(p.board, c); return k >= 0 && attacked(p.board, k, opp(c)); };

/** every move by the side to move, legal or not (it may leave its king in check) */
function pseudo(p: Position): Move[] {
  const out: Move[] = [];
  const b = p.board, us = p.turn;
  const add = (from: number, to: number, extra: Partial<Move> = {}) => out.push({ from, to, piece: b[from], captured: b[to], ...extra });
  for (let i = 0; i < 64; i++) {
    const x = b[i];
    if (!x || colorOf(x) !== us) continue;
    const r = rankOf(i), f = fileOf(i), k = kindOf(x);
    if (k === 'p') {
      const dir = us === 'w' ? -1 : 1, startRank = us === 'w' ? 6 : 1, lastRank = us === 'w' ? 0 : 7;
      const one = at(r + dir, f);
      const push = (to: number, extra: Partial<Move> = {}) => { if (rankOf(to) === lastRank) for (const pr of ['q', 'r', 'b', 'n'] as Kind[]) add(i, to, { ...extra, promo: pr }); else add(i, to, extra); };
      if (one >= 0 && !b[one]) {
        push(one);
        const two = at(r + 2 * dir, f);
        if (r === startRank && !b[two]) add(i, two, { double: true });
      }
      for (const df of [-1, 1]) {
        const t = at(r + dir, f + df);
        if (t < 0) continue;
        if (b[t] && colorOf(b[t]) !== us) push(t);
        else if (t === p.ep) add(i, t, { ep: true, captured: us === 'w' ? 'p' : 'P' });
      }
    } else if (k === 'n' || k === 'k') {
      for (const [dr, df] of k === 'n' ? KNIGHT : KING) { const t = at(r + dr, f + df); if (t >= 0 && colorOf(b[t]) !== us) add(i, t); }
      if (k === 'k') {
        const home = us === 'w' ? 60 : 4, them = opp(us);
        const can = (s: string) => p.castling.includes(us === 'w' ? s.toUpperCase() : s);
        if (i === home && !attacked(b, home, them)) {
          if (can('k') && !b[home + 1] && !b[home + 2] && b[home + 3] === (us === 'w' ? 'R' : 'r') && !attacked(b, home + 1, them) && !attacked(b, home + 2, them)) add(i, home + 2, { castle: 'k' });
          if (can('q') && !b[home - 1] && !b[home - 2] && !b[home - 3] && b[home - 4] === (us === 'w' ? 'R' : 'r') && !attacked(b, home - 1, them) && !attacked(b, home - 2, them)) add(i, home - 2, { castle: 'q' });
        }
      }
    } else {
      const dirs = k === 'b' ? DIAG : k === 'r' ? ORTHO : [...DIAG, ...ORTHO];
      for (const [dr, df] of dirs) {
        let rr = r + dr, ff = f + df;
        while (rr >= 0 && rr < 8 && ff >= 0 && ff < 8) {
          const t = rr * 8 + ff;
          if (!b[t]) add(i, t);
          else { if (colorOf(b[t]) !== us) add(i, t); break; }
          rr += dr; ff += df;
        }
      }
    }
  }
  return out;
}

/** the position after a move (a new one — the old is left as it was) */
export function makeMove(p: Position, m: Move): Position {
  const b = p.board.slice();
  const us = p.turn;
  b[m.to] = m.promo ? ((us === 'w' ? m.promo.toUpperCase() : m.promo) as Piece) : b[m.from];
  b[m.from] = '';
  if (m.ep) b[m.to + (us === 'w' ? 8 : -8)] = '';
  if (m.castle) {
    const home = us === 'w' ? 60 : 4;
    if (m.castle === 'k') { b[home + 1] = b[home + 3]; b[home + 3] = ''; } else { b[home - 1] = b[home - 4]; b[home - 4] = ''; }
  }
  let castling = p.castling;
  const drop = (s: string) => { castling = castling.replace(s, ''); };
  if (m.piece === 'K') { drop('K'); drop('Q'); }
  if (m.piece === 'k') { drop('k'); drop('q'); }
  for (const sq of [m.from, m.to]) { if (sq === 63) drop('K'); if (sq === 56) drop('Q'); if (sq === 7) drop('k'); if (sq === 0) drop('q'); }
  return {
    board: b, turn: opp(us), castling,
    ep: m.double ? (m.from + m.to) / 2 : -1,
    half: kindOf(m.piece) === 'p' || m.captured ? 0 : p.half + 1,
    full: us === 'b' ? p.full + 1 : p.full,
  };
}

export function legalMoves(p: Position): Move[] {
  return pseudo(p).filter((m) => !inCheck(makeMove(p, m), p.turn));
}
export const moveUci = (m: Move) => `${sqName(m.from)}${sqName(m.to)}${m.promo ?? ''}`;
export function findMove(p: Position, uci: string): Move | null {
  return legalMoves(p).find((m) => moveUci(m) === uci) ?? null;
}

/** the move in standard notation, with its piece as a kanji (馬f3, 兵xd5 → exd5, O-O, 后h5+) */
export function moveSan(p: Position, m: Move, kanji = false): string {
  if (m.castle) return m.castle === 'k' ? 'O-O' : 'O-O-O';
  const k = kindOf(m.piece);
  const cap = m.captured ? 'x' : '';
  let s = '';
  if (k === 'p') s = `${cap ? 'abcdefgh'[fileOf(m.from)] : ''}${cap}${sqName(m.to)}${m.promo ? `=${kanji ? PIECE_KANJI[m.promo] : m.promo.toUpperCase()}` : ''}`;
  else {
    const others = legalMoves(p).filter((o) => o.to === m.to && o.piece === m.piece && o.from !== m.from);
    let dis = '';
    if (others.length) dis = others.some((o) => fileOf(o.from) === fileOf(m.from)) ? (others.some((o) => rankOf(o.from) === rankOf(m.from)) ? sqName(m.from) : sqName(m.from)[1]) : 'abcdefgh'[fileOf(m.from)];
    s = `${kanji ? PIECE_KANJI[k] : k.toUpperCase()}${dis}${cap}${sqName(m.to)}`;
  }
  const after = makeMove(p, m);
  if (inCheck(after)) s += legalMoves(after).length ? '+' : '#';
  return s;
}

export type Outcome = { over: false } | { over: true; winner: Color | null; reason: 'checkmate' | 'stalemate' | 'fifty' | 'repetition' | 'material' };
/** too little to mate: kings alone, or with one bishop or one knight */
function deadDraw(b: Piece[]): boolean {
  const rest = b.filter((x) => x && kindOf(x) !== 'k');
  return rest.length === 0 || (rest.length === 1 && ['b', 'n'].includes(kindOf(rest[0])));
}
export function outcome(p: Position, history: string[] = []): Outcome {
  if (!legalMoves(p).length) return inCheck(p) ? { over: true, winner: opp(p.turn), reason: 'checkmate' } : { over: true, winner: null, reason: 'stalemate' };
  if (p.half >= 100) return { over: true, winner: null, reason: 'fifty' };
  if (deadDraw(p.board)) return { over: true, winner: null, reason: 'material' };
  const key = posKey(p);
  if (history.filter((h) => h === key).length >= 2) return { over: true, winner: null, reason: 'repetition' };
  return { over: false };
}

/** a game from its moves: every position, the keys for repetition, the result */
export function replay(uci: string[], fen = START_FEN): { positions: Position[]; moves: Move[]; ok: boolean } {
  const positions = [parseFen(fen)];
  const moves: Move[] = [];
  for (const u of uci) {
    const m = findMove(positions[positions.length - 1], u);
    if (!m) return { positions, moves, ok: false };
    moves.push(m);
    positions.push(makeMove(positions[positions.length - 1], m));
  }
  return { positions, moves, ok: true };
}

// ── what a position is worth (centipawns, for the side to move) ──────────────────────────────────────────────────
const VALUE: Record<Kind, number> = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 0 };
// piece-square tables, from white's side (a8 first) — the simplified evaluation function
const PST: Record<Kind, number[]> = {
  p: [0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 10, 10, 20, 30, 30, 20, 10, 10, 5, 5, 10, 25, 25, 10, 5, 5, 0, 0, 0, 20, 20, 0, 0, 0, 5, -5, -10, 0, 0, -10, -5, 5, 5, 10, 10, -20, -20, 10, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0],
  n: [-50, -40, -30, -30, -30, -30, -40, -50, -40, -20, 0, 0, 0, 0, -20, -40, -30, 0, 10, 15, 15, 10, 0, -30, -30, 5, 15, 20, 20, 15, 5, -30, -30, 0, 15, 20, 20, 15, 0, -30, -30, 5, 10, 15, 15, 10, 5, -30, -40, -20, 0, 5, 5, 0, -20, -40, -50, -40, -30, -30, -30, -30, -40, -50],
  b: [-20, -10, -10, -10, -10, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 10, 10, 5, 0, -10, -10, 5, 5, 10, 10, 5, 5, -10, -10, 0, 10, 10, 10, 10, 0, -10, -10, 10, 10, 10, 10, 10, 10, -10, -10, 5, 0, 0, 0, 0, 5, -10, -20, -10, -10, -10, -10, -10, -10, -20],
  r: [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 10, 10, 10, 10, 10, 5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 5, 5, 0, 0, 0],
  q: [-20, -10, -10, -5, -5, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 5, 5, 5, 0, -10, -5, 0, 5, 5, 5, 5, 0, -5, 0, 0, 5, 5, 5, 5, 0, -5, -10, 5, 5, 5, 5, 5, 0, -10, -10, 0, 5, 0, 0, 0, 0, -10, -20, -10, -10, -5, -5, -10, -10, -20],
  k: [-30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -20, -30, -30, -40, -40, -30, -30, -20, -10, -20, -20, -20, -20, -20, -20, -10, 20, 20, 0, 0, 0, 0, 20, 20, 20, 30, 10, 0, 0, 10, 30, 20],
};
const KING_END = [-50, -40, -30, -20, -20, -30, -40, -50, -30, -20, -10, 0, 0, -10, -20, -30, -30, -10, 20, 30, 30, 20, -10, -30, -30, -10, 30, 40, 40, 30, -10, -30, -30, -10, 30, 40, 40, 30, -10, -30, -30, -10, 20, 30, 30, 20, -10, -30, -30, -30, 0, 0, 0, 0, -30, -30, -50, -30, -30, -30, -30, -30, -30, -50];
export function evaluate(p: Position): number {
  let score = 0, queens = 0, minors = 0;
  for (const x of p.board) if (x) { const k = kindOf(x); if (k === 'q') queens++; if (k === 'n' || k === 'b' || k === 'r') minors++; }
  const endgame = queens === 0 || (queens <= 2 && minors <= 2);
  for (let i = 0; i < 64; i++) {
    const x = p.board[i];
    if (!x) continue;
    const k = kindOf(x), white = colorOf(x) === 'w';
    const sq = white ? i : (7 - rankOf(i)) * 8 + fileOf(i);
    const v = VALUE[k] + (k === 'k' && endgame ? KING_END[sq] : PST[k][sq]);
    score += white ? v : -v;
  }
  return p.turn === 'w' ? score : -score;
}

// ── the search: negamax with alpha-beta, captures first, a capture-only search at the end ─────────────────────────
const MATE = 100000;
function ordered(p: Position, moves: Move[]): Move[] {
  const val = (m: Move) => (m.captured ? 10 * VALUE[kindOf(m.captured)] - VALUE[kindOf(m.piece)] : 0) + (m.promo ? VALUE[m.promo] : 0);
  return moves.map((m) => [val(m), m] as const).sort((a, b) => b[0] - a[0]).map(([, m]) => m);
}
interface Budget { nodes: number; max: number; until: number }
/** out of nodes or of time (a phone must not freeze while the bot thinks) */
const spent = (b: Budget) => b.nodes > b.max || ((b.nodes & 1023) === 0 && Date.now() > b.until && (b.max = 0, true));
function quiesce(p: Position, alpha: number, beta: number, q: number, bud: Budget): number {
  bud.nodes++;
  const stand = evaluate(p);
  if (stand >= beta) return beta;
  if (alpha < stand) alpha = stand;
  if (q <= 0 || spent(bud)) return alpha;
  for (const m of ordered(p, legalMoves(p).filter((x) => x.captured || x.promo))) {
    const s = -quiesce(makeMove(p, m), -beta, -alpha, q - 1, bud);
    if (s >= beta) return beta;
    if (s > alpha) alpha = s;
  }
  return alpha;
}
function negamax(p: Position, depth: number, alpha: number, beta: number, ply: number, bud: Budget): number {
  bud.nodes++;
  const moves = legalMoves(p);
  if (!moves.length) return inCheck(p) ? -MATE + ply : 0;
  if (p.half >= 100) return 0;
  if (depth <= 0 || spent(bud)) return quiesce(p, alpha, beta, 4, bud);
  for (const m of ordered(p, moves)) {
    const s = -negamax(makeMove(p, m), depth - 1, -beta, -alpha, ply + 1, bud);
    if (s >= beta) return beta;
    if (s > alpha) alpha = s;
  }
  return alpha;
}
/** every move with its worth for the side to move, best first (searched `depth` plies) */
export function scoreMoves(p: Position, depth: number, maxNodes = 200_000, maxMs = 1200): Array<{ move: Move; score: number }> {
  const bud: Budget = { nodes: 0, max: maxNodes, until: Date.now() + maxMs };
  const out = ordered(p, legalMoves(p)).map((m) => ({ move: m, score: -negamax(makeMove(p, m), depth - 1, -MATE, MATE, 1, bud) }));
  return out.sort((a, b) => b.score - a.score);
}
export const isMateScore = (s: number) => Math.abs(s) > MATE - 1000;

// ── the bot wizards ───────────────────────────────────────────────────────────────────────────────────────────────
export type BotId = 'goblin' | 'knight' | 'witch' | 'wizard';
export interface BotDef { id: BotId; elo: number; name: string; jp: string; reading: string }
export const BOTS: BotDef[] = [
  { id: 'goblin', elo: 200, name: 'Goblin', jp: '小鬼', reading: 'こおに' },
  { id: 'knight', elo: 400, name: 'Knight', jp: '騎士', reading: 'きし' },
  { id: 'witch', elo: 800, name: 'Witch', jp: '魔女', reading: 'まじょ' },
  { id: 'wizard', elo: 1600, name: 'Wizard', jp: '魔法使い', reading: 'まほうつかい' },
];
/**
 * A bot's move. How strong: how far it looks ahead, how much it misjudges, how often it just blunders.
 * Goblin (200) mostly plays any move and grabs what it can; Knight (400) sees one move and errs a lot; Witch (800)
 * looks two moves ahead; Wizard (1600) three, with the captures to the end, and rarely slips.
 */
export function botMove(p: Position, bot: BotId, rnd: () => number = Math.random): Move | null {
  const moves = legalMoves(p);
  if (!moves.length) return null;
  const pick = <T,>(a: T[]) => a[Math.floor(rnd() * a.length)];
  if (bot === 'goblin') {
    // takes a mate in one if it sees it now and then, grabs captures half the time, otherwise any move
    if (rnd() < 0.3) { const mate = moves.find((m) => { const a = makeMove(p, m); return inCheck(a) && !legalMoves(a).length; }); if (mate) return mate; }
    const caps = moves.filter((m) => m.captured);
    if (caps.length && rnd() < 0.5) return pick(caps);
    return pick(moves);
  }
  const cfg = bot === 'knight' ? { depth: 1, noise: 160, blunder: 0.3 } : bot === 'witch' ? { depth: 2, noise: 60, blunder: 0.08 } : { depth: 3, noise: 15, blunder: 0.02 };
  if (rnd() < cfg.blunder) return pick(moves);
  const scored = scoreMoves(p, cfg.depth, bot === 'wizard' ? 250_000 : 100_000, bot === 'wizard' ? 900 : 500).map((x) => ({ ...x, score: x.score + (isMateScore(x.score) ? 0 : (rnd() * 2 - 1) * cfg.noise) }));
  scored.sort((a, b) => b.score - a.score);
  return scored[0].move;
}

/** how good a move was, from the side that played it: the best it could have got, minus what it got */
export type Quality = 'best' | 'good' | 'inaccuracy' | 'mistake' | 'blunder';
export function judgeMove(p: Position, m: Move, depth = 2): { quality: Quality; loss: number; best: Move } {
  const scored = scoreMoves(p, depth, 60_000, 400);
  const best = scored[0];
  const mine = scored.find((x) => moveUci(x.move) === moveUci(m)) ?? scored[scored.length - 1];
  const loss = Math.max(0, best.score - mine.score);
  const quality: Quality = loss <= 15 ? 'best' : loss <= 60 ? 'good' : loss <= 140 ? 'inaccuracy' : loss <= 320 ? 'mistake' : 'blunder';
  return { quality, loss, best: best.move };
}
