import type { DrawnChar, VocabEntry } from '../../shared/protocol';
import type { WritingJudge } from '../Game';
import type { Recognizer } from './recognizer';

export const MAX_STROKES_PER_CHAR = 40;
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
  return (entry: VocabEntry, chars: DrawnChar[]) => {
    const target = [...entry.kanji];
    let recognized = '';
    let correct = chars.length === target.length;
    for (let i = 0; i < chars.length; i++) {
      const r = judgeChar(recognizer, chars[i], target[i] ?? '');
      recognized += r.read;
      if (!r.ok) correct = false;
    }
    return { correct, recognized };
  };
}

/** Validate untrusted stroke data from the client; returns null if malformed. */
export function sanitizeDrawing(raw: unknown, maxChars: number): DrawnChar[] | null {
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > maxChars) return null;
  const out: DrawnChar[] = [];
  for (const ch of raw) {
    if (!Array.isArray(ch) || ch.length === 0 || ch.length > MAX_STROKES_PER_CHAR) return null;
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
