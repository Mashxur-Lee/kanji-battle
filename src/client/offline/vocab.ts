// The word list in the browser (0.9.9.4): stands in for server/vocab.ts inside the offline engine (see
// scripts/build-client.mjs). Same data, same re-sorting — loaded from /vocab.json (cached for offline use).
import type { VocabEntry } from '../../shared/protocol';
import { rebinByStrokes } from '../../shared/rebin';
import type { FactsOf, KanjiFacts } from '../../shared/fakes';

export { JLPT_WEIGHT, rebinByStrokes } from '../../shared/rebin';
export const VOCAB: VocabEntry[] = [];
export const VOCAB_BY_ID = new Map<string, VocabEntry>();

/** 0.9.9.9.5: each kanji's readings and parts, from kanji.json (the quiz's made-up near misses; none until loaded) */
const FACTS = new Map<string, KanjiFacts>();
export const kanjiFacts: FactsOf = (ch) => FACTS.get(ch);
type KanjiRow = [string, string, string, string, Array<[string, string, string]>, string, string, Array<number> | null];
let facts: Promise<void> | null = null;
function loadFacts() {
  facts ??= fetch('/kanji.json').then((r) => (r.ok ? r.json() : {})).then((rows: Record<string, KanjiRow>) => {
    for (const [c, d] of Object.entries(rows)) {
      FACTS.set(c, { on: d[2] ? d[2].split('、') : [], kun: d[3] ? d[3].split('、') : [], parts: d[4].map((x) => x[0]).filter(Boolean), strokes: d[7]?.length ?? 0 });
    }
  }).catch(() => { facts = null; });
  return facts;
}

let loading: Promise<void> | null = null;
export function loadVocab(): Promise<void> {
  void loadFacts(); // (not waited for: without it the quiz just uses real words)
  loading ??= fetch('/vocab.json').then((r) => {
    if (!r.ok) throw new Error(`vocab ${r.status}`);
    return r.json();
  }).then((raw: VocabEntry[]) => {
    VOCAB.length = 0;
    VOCAB.push(...rebinByStrokes(raw));
    VOCAB_BY_ID.clear();
    for (const v of VOCAB) VOCAB_BY_ID.set(v.id, v);
  }).catch((e) => { loading = null; throw e; });
  return loading;
}
