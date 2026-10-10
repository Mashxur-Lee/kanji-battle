import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { Level, VocabEntry } from '../shared/protocol';
import { LEVEL_DIFFICULTY } from '../shared/vocab';

const KANJI = /[一-鿿㐀-䶿々]/;
const JLPT_ORDER: Level[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

/**
 * 0.9.8: the levels N5 → N1 are re-sorted by how hard the word looks — its total stroke count — so an "N5"
 * word is never more complex than an "N1" one. Each level keeps its size; ties keep the JLPT order. The
 * word's own JLPT list stays in `jlpt`. Hiragana words (かな) are untouched. Damage (`difficulty`) follows
 * the new level, adjusted by strokes and word length as before (scripts/build-vocab.ts).
 */
export function rebinByStrokes(words: readonly VocabEntry[]): VocabEntry[] {
  const kanjiWords = words.filter((w) => w.level !== 'KANA');
  const sizes = JLPT_ORDER.map((l) => kanjiWords.filter((w) => w.level === l).length);
  const rank = (w: VocabEntry) => JLPT_ORDER.indexOf(w.level);
  const sorted = [...kanjiWords].sort((a, b) => (a.strokes ?? 0) - (b.strokes ?? 0) || rank(a) - rank(b) || a.kanji.length - b.kanji.length || a.id.localeCompare(b.id));
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

/** All words (built by scripts/build-vocab.ts), levels re-sorted by stroke count. Loaded once at startup. */
export const VOCAB: readonly VocabEntry[] = rebinByStrokes(JSON.parse(readFileSync(path.resolve(__dirname, '../../data/vocab.json'), 'utf8')));
export const VOCAB_BY_ID: ReadonlyMap<string, VocabEntry> = new Map(VOCAB.map((v) => [v.id, v]));
