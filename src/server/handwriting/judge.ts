import type { DrawnChar, VocabEntry } from '../../shared/protocol';
import type { WritingJudge } from '../Game';
import type { Recognizer } from './recognizer';

export const MAX_STROKES_PER_CHAR = 40;
export const MAX_POINTS_PER_STROKE = 64;

/** Handwriting varies, so a character counts if the target is among the recogniser's top `topK` guesses. */
export function createWritingJudge(recognizer: Recognizer, topK = 5): WritingJudge {
  return (entry: VocabEntry, chars: DrawnChar[]) => {
    const target = [...entry.kanji];
    let recognized = '';
    let correct = chars.length === target.length;
    for (let i = 0; i < chars.length; i++) {
      const candidates = recognizer.recognize(chars[i], topK);
      const ok = candidates.includes(target[i]);
      recognized += ok ? target[i] : (candidates[0] ?? '?');
      if (!ok) correct = false;
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
