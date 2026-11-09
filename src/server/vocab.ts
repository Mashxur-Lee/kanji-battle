import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { VocabEntry } from '../shared/protocol';
import { rebinByStrokes } from '../shared/rebin';
import type { FactsOf, KanjiFacts } from '../shared/fakes';

export { JLPT_WEIGHT, rebinByStrokes } from '../shared/rebin';

/** All words (built by scripts/build-vocab.ts), levels re-sorted by stroke count. Loaded once at startup. */
export const VOCAB: readonly VocabEntry[] = rebinByStrokes(JSON.parse(readFileSync(path.resolve(__dirname, '../../data/vocab.json'), 'utf8')));
export const VOCAB_BY_ID: ReadonlyMap<string, VocabEntry> = new Map(VOCAB.map((v) => [v.id, v]));

/** 0.9.9.9.5: each kanji's readings and parts (KANJIDIC / KanjiVG) — the quiz's made-up near misses */
const KANJI: Record<string, { on: string[]; kun: string[]; p: string[]; s?: number[] | null }> = JSON.parse(readFileSync(path.resolve(__dirname, '../../data/kanji/base.json'), 'utf8')).kanji;
const FACTS = new Map<string, KanjiFacts>();
export const kanjiFacts: FactsOf = (ch) => {
  let f = FACTS.get(ch);
  const d = KANJI[ch];
  if (!f && d) FACTS.set(ch, (f = { on: d.on, kun: d.kun, parts: d.p.filter((x) => !x.startsWith('CDP')), strokes: d.s?.length ?? 0 }));
  return f;
};
