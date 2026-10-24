// The word list's levels re-sorted by how hard each word looks (shared since 0.9.9.4: the app's offline
// engine loads the same data/vocab.json and must end up with the same levels as the server).
import type { Level, VocabEntry } from './protocol';
import { LEVEL_DIFFICULTY } from './vocab';

const KANJI = /[一-鿿㐀-䶿々]/;
const JLPT_ORDER: Level[] = ['N5', 'N4', 'N3', 'N2', 'N1'];
export const JLPT_WEIGHT = 3;

/**
 * 0.9.8: the levels N5 → N1 are re-sorted by how hard the word looks — its total stroke count (since 0.9.8.5 with
 * a little weight on the word's JLPT list) — so an "N5" word is almost never more complex than an "N1" one. Each level keeps its size; ties keep the JLPT order. The
 * word's own JLPT list stays in `jlpt`. Hiragana words (かな) are untouched. Damage (`difficulty`) follows
 * the new level, adjusted by strokes and word length as before (scripts/build-vocab.ts).
 */
export function rebinByStrokes(words: readonly VocabEntry[]): VocabEntry[] {
  const kanjiWords = words.filter((w) => w.level !== 'KANA');
  const sizes = JLPT_ORDER.map((l) => kanjiWords.filter((w) => w.level === l).length);
  const rank = (w: VocabEntry) => JLPT_ORDER.indexOf(w.level);
  // mostly stroke count, with a little of the JLPT list (+3 per step from N5 to N1: up to +12 "strokes"),
  // so very common long words (意味, 朝御飯) don't all land in N1
  const score = (w: VocabEntry) => (w.strokes ?? 0) + JLPT_WEIGHT * rank(w);
  const sorted = [...kanjiWords].sort((a, b) => score(a) - score(b) || rank(a) - rank(b) || a.kanji.length - b.kanji.length || a.id.localeCompare(b.id));
  const next = new Map<string, Level>();
  let i = 0;
  sizes.forEach((n, li) => { for (const w of sorted.slice(i, i + n)) next.set(w.id, JLPT_ORDER[li]); i += n; });
  return words.map((w) => {
    const level = next.get(w.id);
    if (!level) return w;
    const ks = [...w.kanji].filter((c) => KANJI.test(c)).length;
    const total = w.strokes ?? 12;
    const adj = Math.max(-6, Math.min(10, (total - 12) * 0.45)) + (ks >= 3 ? 2 : 0);
    return { ...w, level, jlpt: w.level, difficulty: Math.round(Math.max(5, Math.min(100, LEVEL_DIFFICULTY[level] + adj))) };
  });
}
