import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { VocabEntry } from '../shared/protocol';
import { rebinByStrokes } from '../shared/rebin';

export { JLPT_WEIGHT, rebinByStrokes } from '../shared/rebin';

/** All words (built by scripts/build-vocab.ts), levels re-sorted by stroke count. Loaded once at startup. */
export const VOCAB: readonly VocabEntry[] = rebinByStrokes(JSON.parse(readFileSync(path.resolve(__dirname, '../../data/vocab.json'), 'utf8')));
export const VOCAB_BY_ID: ReadonlyMap<string, VocabEntry> = new Map(VOCAB.map((v) => [v.id, v]));
