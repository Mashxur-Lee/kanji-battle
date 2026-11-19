// 0.9.9.9.7.2: handwriting is judged here, on a thread of its own (pool.ts) — the same judge as before, but a big
// drawing no longer holds up the server: one whole word on a single pad took most of a second, and every battle
// waited for it.
import { parentPort } from 'node:worker_threads';
import type { DrawnChar, VocabEntry } from '../../shared/protocol';
import { createWritingJudge } from './judge';
import { Recognizer } from './recognizer';

const rec = Recognizer.fromFile();
rec.shapeRank([[[0, 0], [1, 1]]], '一'); // (the shape index is built now, not on the first answer)
const judges = { normal: createWritingJudge(rec), lenient: createWritingJudge(rec, { lenient: true }) };

parentPort!.on('message', (m: { id: number; lenient: boolean; entry: VocabEntry; chars: DrawnChar[] }) => {
  try { parentPort!.postMessage({ id: m.id, result: (m.lenient ? judges.lenient : judges.normal)(m.entry, m.chars) }); }
  catch (e) { parentPort!.postMessage({ id: m.id, error: (e as Error)?.message ?? String(e) }); }
});
