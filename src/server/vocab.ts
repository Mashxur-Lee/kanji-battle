import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { VocabEntry } from '../shared/protocol';

/** All words (built by scripts/build-vocab.ts). Loaded once at startup. */
export const VOCAB: readonly VocabEntry[] = JSON.parse(readFileSync(path.resolve(__dirname, '../../data/vocab.json'), 'utf8'));
export const VOCAB_BY_ID: ReadonlyMap<string, VocabEntry> = new Map(VOCAB.map((v) => [v.id, v]));
