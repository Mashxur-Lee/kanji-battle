import type { DrawnChar, VocabEntry } from '../../shared/protocol';
import type { WritingJudge } from '../Game';
import type { Recognizer } from './recognizer';
import { segmentCandidates } from './segment';

export const MAX_STROKES_PER_CHAR = 40;
/** a whole word drawn on one wide pad arrives as a single group */
export const MAX_STROKES_PER_WORD = 120;
export const MAX_POINTS_PER_STROKE = 64;

/**
 * Forgiving on purpose (people draw with a mouse): a character counts if the target is in the top 10
 * guesses, or its distance is within 1.5× of the best guess, or it is simply close in absolute terms.
 * Measured on deliberately sloppy drawings (tilted, stretched, shaky, strokes run together):
 * accepts ~85% of correct characters (top-5 alone: 56%) and ~3% of wrong ones (mostly look-alikes).
 */
export const JUDGE = { topK: 10, ratio: 1.5, absolute: 58 };

export function judgeChar(recognizer: Recognizer, drawn: DrawnChar, target: string): { ok: boolean; read: string } {
  const cands = recognizer.recognizeScored(drawn, JUDGE.topK);
  const best = cands[0];
  if (cands.some((c) => c.ch === target)) return { ok: true, read: target };
  const d = recognizer.distanceTo(drawn, target);
  const ok = d <= JUDGE.absolute || (best !== undefined && d <= best.dist * JUDGE.ratio);
  return { ok, read: ok ? target : best?.ch ?? '?' };
}

export function createWritingJudge(recognizer: Recognizer): WritingJudge {
  const judgeGroups = (target: string[], chars: DrawnChar[]) => {
    let recognized = '';
    let ok = 0;
    for (let i = 0; i < chars.length; i++) {
      const r = judgeChar(recognizer, chars[i], target[i] ?? '');
      recognized += r.read;
      if (r.ok) ok++;
    }
    return { correct: chars.length === target.length && ok === target.length, recognized, ok };
  };
  return (entry: VocabEntry, chars: DrawnChar[]) => {
    const target = [...entry.kanji];
    // The whole word written on one pad: try the most likely ways to split it into characters.
    if (chars.length === 1 && target.length > 1) {
      const splits = segmentCandidates(chars[0], target.length);
      if (splits.length === 0) return { correct: false, recognized: '' };
      let best = judgeGroups(target, splits[0]);
      for (const s of splits) {
        const r = judgeGroups(target, s);
        if (r.correct) return { correct: true, recognized: r.recognized };
        if (r.ok > best.ok) best = r;
      }
      return { correct: false, recognized: best.recognized };
    }
    const r = judgeGroups(target, chars);
    return { correct: r.correct, recognized: r.recognized };
  };
}

/** Validate untrusted stroke data from the client; returns null if malformed. */
export function sanitizeDrawing(raw: unknown, maxChars: number): DrawnChar[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > maxChars) return null;
  const out: DrawnChar[] = [];
  for (const ch of raw) {
    if (!Array.isArray(ch) || ch.length === 0 || ch.length > (raw.length === 1 ? MAX_STROKES_PER_WORD : MAX_STROKES_PER_CHAR)) return null;
    const strokes: DrawnChar = [];
    for (const st of ch) {
      if (!Array.isArray(st) || st.length === 0 || st.length > MAX_POINTS_PER_STROKE) return null;
      const pts: Array<[number, number]> = [];
      for (const pt of st) {
        if (!Array.isArray(pt) || pt.length !== 2) return null;
        const [x, y] = pt;
        if (typeof x !== 'number' || typeof y !== 'number' || !Number.isFinite(x) || !Number.isFinite(y) || Math.abs(x) > 4096 || Math.abs(y) > 4096) return null;
        pts.push([x, y]);
      }
      strokes.push(pts);
    }
    out.push(strokes);
  }
  return out;
}

/** Words usable in writing mode: every character must be one the recogniser knows. */
export const isWritable = (recognizer: Recognizer) => (v: VocabEntry) => [...v.kanji].every((c) => recognizer.knows(c));
