// The word list in the browser (0.9.9.4): stands in for server/vocab.ts inside the offline engine (see
// scripts/build-client.mjs). Same data, same re-sorting — loaded from /vocab.json (cached for offline use).
import type { VocabEntry } from '../../shared/protocol';
import { rebinByStrokes } from '../../shared/rebin';

export { JLPT_WEIGHT, rebinByStrokes } from '../../shared/rebin';
export const VOCAB: VocabEntry[] = [];
export const VOCAB_BY_ID = new Map<string, VocabEntry>();

let loading: Promise<void> | null = null;
export function loadVocab(): Promise<void> {
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
