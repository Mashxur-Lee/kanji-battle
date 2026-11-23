// 0.9.9.9.9.1: a replay's tape as a clip — its own clock (a pause in the game cut out, a long silence shortened),
// the watched side's messages, the hits and misses of both sides for the timeline, and the battle as it stood at
// any moment (what jumping there rebuilds). No screen code: watch.ts plays it.
import type { BattleEvent, ChallengeMsg, GameMode, PlayerId, PlayerView, ServerMessage } from '../shared/protocol';

export type TapeEntry = [number, PlayerId | null, ServerMessage];
type Msg<T extends ServerMessage['type']> = Extract<ServerMessage, { type: T }>;

/** the battle as it stood at a moment of a replay: what main.ts rebuilds when you jump there */
export interface ReplayState {
  start: Msg<'battle_start'>;
  players: PlayerView[];
  boss: Msg<'battle_update'>['boss'];
  challenge: ChallengeMsg | null;
  answer: Msg<'answer_result'> | null;
  over: Msg<'game_over'> | null;
}

/** a stretch with nothing on the tape is cut to this (someone away from the game a long while) */
const SILENCE_MS = 15000;
// 0.9.9.9.9.5: a replay ends on the fall — the defeated one goes down and it stops there (it went on to the results
// screen: the owner: "the replay should stop at the enemy being defeated moment")
const RESULTS_MS = 1900;
interface Cue { vt: number; m: ServerMessage }
/** a mark on the timeline: one of the watched side's hits or misses (mine), or the other side's */
export interface Mark { vt: number; mine: boolean; hit: boolean; crit?: boolean; kanji?: string; damage?: number }
export interface Clip { side: PlayerId; mode: GameMode; cues: Cue[]; start: number; end: number; marks: Mark[] }

export function sidesOf(tape: TapeEntry[]): PlayerView[] {
  const start = tape.find(([, , m]) => m.type === 'battle_start')?.[2] as Msg<'battle_start'> | undefined;
  return start?.players ?? [];
}

/**
 * The tape from one side, on a clock of its own: a pause in the game is cut out (the game's clocks stood still
 * too), and so is a long silence. Only the watched side's own words and answers are kept, with what everyone saw.
 */
export function clipOf(tape: TapeEntry[], mode: GameMode, side: PlayerId): Clip {
  const cues: Cue[] = [], marks: Mark[] = [];
  let cut = 0, pausedAt = -1, prev = -1;
  for (const [t, to, m] of tape) {
    if (m.type === 'paused') { // (not played: the clip's own play / pause is the only one)
      if (m.on && pausedAt < 0) pausedAt = t;
      else if (!m.on && pausedAt >= 0) { cut += t - pausedAt; pausedAt = -1; }
      continue;
    }
    if (pausedAt >= 0) { cut += t - pausedAt; pausedAt = t; } // (still paused: what came meanwhile is at the pause)
    let vt = t - cut;
    if (prev >= 0 && vt - prev > SILENCE_MS) { cut += vt - prev - SILENCE_MS; vt = t - cut; }
    prev = vt;
    // the marks: every hit and miss, both sides (Rapid's wrong guesses are private: they come from the answers)
    if (m.type === 'battle_update') markOf(m.event, vt, side, mode, marks);
    if (m.type === 'answer_result' && mode === 'rapid' && to !== null && !m.correct && !m.beaten) marks.push({ vt, mine: to === side, hit: false, kanji: m.kanji });
    if (to !== null && to !== side) continue;
    cues.push({ vt, m });
  }
  const first = cues.find((c) => c.m.type === 'battle_start');
  const over = cues.find((c) => c.m.type === 'game_over');
  const start = first?.vt ?? 0;
  const end = Math.max(start, over ? over.vt + RESULTS_MS : (cues[cues.length - 1]?.vt ?? start));
  return { side, mode, cues, start, end, marks };
}
function markOf(e: BattleEvent, vt: number, side: PlayerId, mode: GameMode, out: Mark[]) {
  if (e.kind === 'hit' || e.kind === 'miss') {
    const mine = e.playerId === side;
    if (!mine && mode === 'boss') return; // (Boss: the other row is the dragon's)
    out.push({ vt, mine, hit: e.kind === 'hit', kanji: e.kanji, ...(e.kind === 'hit' ? { damage: e.damage, crit: !!e.crit } : {}) });
  } else if (mode === 'boss' && ((e.kind === 'claw' && e.playerId === side) || (e.kind === 'breath' && (e.victims ?? []).includes(side)))) {
    out.push({ vt, mine: false, hit: true, damage: e.damage });
  }
}

/** the battle at `at` on the clip: the last of each thing that had happened by then */
export function stateAt(clip: Clip, at: number): ReplayState | null {
  let first: Cue | null = null, lastStart: Cue | null = null, view: { players: PlayerView[]; boss: ReplayState['boss'] } | null = null;
  let challenge: Cue | null = null, answer: Msg<'answer_result'> | null = null, over: Msg<'game_over'> | null = null;
  for (const c of clip.cues) {
    if (c.vt > at) break;
    const m = c.m;
    if (m.type === 'battle_start') { first ??= c; lastStart = c; view = { players: m.players, boss: m.boss }; }
    else if (m.type === 'battle_update') view = { players: m.players, boss: m.boss };
    else if (m.type === 'challenge') { challenge = c; answer = null; }
    else if (m.type === 'answer_result' && challenge && m.challengeId === (challenge.m as ChallengeMsg).id && !m.retry) answer = m;
    else if (m.type === 'game_over') over = m;
  }
  if (!first || !lastStart || !view) return null;
  const s0 = first.m as Msg<'battle_start'>, s = lastStart.m as Msg<'battle_start'>;
  // the clocks as they were at that moment: what is left of the 3-2-1, and of the battle
  const since = at - lastStart.vt;
  const countdownMs = s.resume ? 0 : Math.max(0, s.countdownMs - since);
  const durationMs = Math.max(0, s.durationMs - Math.max(0, since - (s.resume ? 0 : s.countdownMs)));
  const start: Msg<'battle_start'> = { ...s0, players: view.players, boss: view.boss, countdownMs, durationMs, resume: false };
  let ch: ChallengeMsg | null = null;
  if (challenge && !over) {
    const c = challenge.m as ChallengeMsg;
    ch = { ...c, timeLimitMs: c.timeLimitMs, leftMs: Math.max(0, c.timeLimitMs - (at - challenge.vt)), flashMs: c.flashMs !== undefined ? Math.max(0, c.flashMs - (at - challenge.vt)) : undefined } as ChallengeMsg;
  }
  return { start, players: view.players, boss: view.boss, challenge: ch, answer: over ? null : answer, over };
}

