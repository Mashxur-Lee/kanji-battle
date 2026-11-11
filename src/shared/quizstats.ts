// 0.9.9.9.5.5: your quiz records (the Quizzes screen) — kept on the server with your account, so every device shows
// the same (they were in each device's own storage: a phone and a computer showed different numbers).
export type QuizKind = 'jlpt' | 'ono' | 'passage';
export const QUIZ_KINDS: readonly QuizKind[] = ['jlpt', 'ono', 'passage'];
/** one quiz's record: best and last score, plays, the average (correct out of 10) and the times */
export interface QuizRecord {
  best: number; bestOf: number; last: number; lastOf: number; plays: number; at: number;
  sum10?: number; bestMs?: number; lastMs?: number; sumMs?: number; timed?: number;
}
export type QuizStats = Partial<Record<QuizKind, QuizRecord>>;

export const isQuizKind = (k: unknown): k is QuizKind => typeof k === 'string' && (QUIZ_KINDS as readonly string[]).includes(k);

/** a finished quiz added to its record (a new record object; `rec` is left as it was) */
export function addPlay(rec: QuizRecord | undefined, score: number, total: number, ms = 0, at = Date.now()): QuizRecord {
  const r: QuizRecord = rec ? { ...rec } : { best: 0, bestOf: total, last: 0, lastOf: total, plays: 0, at: 0 };
  // (records from 0.9.9.9.5.2 had no average: it starts from what they had, the last score for each play)
  if (r.sum10 === undefined) r.sum10 = r.plays * (r.last / Math.max(1, r.lastOf)) * 10;
  if (r.plays === 0 || score / total > r.best / Math.max(1, r.bestOf)) { r.best = score; r.bestOf = total; }
  r.last = score; r.lastOf = total; r.plays++; r.at = at;
  r.sum10 += (score / total) * 10;
  // a time that makes sense (not a quiz left open overnight)
  if (ms > 2000 && ms < 45 * 60_000) {
    r.lastMs = ms; r.bestMs = Math.min(r.bestMs ?? Infinity, ms);
    r.sumMs = (r.sumMs ?? 0) + ms; r.timed = (r.timed ?? 0) + 1;
  }
  return r;
}

const num = (v: unknown, max = 1e9) => (typeof v === 'number' && Number.isFinite(v) && v >= 0 ? Math.min(v, max) : undefined);
/** a record as sent by a device, checked (anything odd is dropped) */
export function cleanRecord(x: unknown): QuizRecord | null {
  if (!x || typeof x !== 'object') return null;
  const o = x as Record<string, unknown>;
  const plays = num(o.plays, 1e6), bestOf = num(o.bestOf, 1000), lastOf = num(o.lastOf, 1000);
  if (!plays || !bestOf || !lastOf) return null;
  const best = Math.min(num(o.best, 1000) ?? 0, bestOf), last = Math.min(num(o.last, 1000) ?? 0, lastOf);
  const r: QuizRecord = { best, bestOf, last, lastOf, plays: Math.round(plays), at: num(o.at, 1e14) ?? 0 };
  const sum10 = num(o.sum10, plays * 10); if (sum10 !== undefined) r.sum10 = sum10;
  const timed = num(o.timed, plays);
  if (timed) {
    r.timed = Math.round(timed);
    const bm = num(o.bestMs, 45 * 60_000), lm = num(o.lastMs, 45 * 60_000), sm = num(o.sumMs, timed * 45 * 60_000);
    if (bm) r.bestMs = bm; if (lm) r.lastMs = lm; if (sm) r.sumMs = sm;
  }
  return r;
}
export function cleanStats(x: unknown): QuizStats {
  const out: QuizStats = {};
  if (!x || typeof x !== 'object') return out;
  for (const k of QUIZ_KINDS) { const r = cleanRecord((x as Record<string, unknown>)[k]); if (r) out[k] = r; }
  return out;
}

/** two records of the same quiz (another device's) as one: plays add up, the best is the better, the last the latest */
export function mergeRecord(a: QuizRecord | undefined, b: QuizRecord | undefined): QuizRecord | undefined {
  if (!a?.plays) return b?.plays ? { ...b } : a;
  if (!b?.plays) return { ...a };
  const avg = (r: QuizRecord) => r.sum10 ?? r.plays * (r.last / Math.max(1, r.lastOf)) * 10;
  const better = b.best / Math.max(1, b.bestOf) > a.best / Math.max(1, a.bestOf) ? b : a;
  const later = b.at > a.at ? b : a;
  const r: QuizRecord = { best: better.best, bestOf: better.bestOf, last: later.last, lastOf: later.lastOf, plays: a.plays + b.plays, at: later.at, sum10: avg(a) + avg(b) };
  const timed = (a.timed ?? 0) + (b.timed ?? 0);
  if (timed) {
    r.timed = timed; r.sumMs = (a.sumMs ?? 0) + (b.sumMs ?? 0);
    const bm = Math.min(a.bestMs ?? Infinity, b.bestMs ?? Infinity); if (Number.isFinite(bm)) r.bestMs = bm;
    const lm = later.lastMs ?? (later === a ? b : a).lastMs; if (lm) r.lastMs = lm;
  }
  return r;
}
export function mergeStats(a: QuizStats, b: QuizStats): QuizStats {
  const out: QuizStats = {};
  for (const k of QUIZ_KINDS) { const r = mergeRecord(a[k], b[k]); if (r?.plays) out[k] = r; }
  return out;
}
