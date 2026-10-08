import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Recognizer } from '../src/server/handwriting/recognizer';
import { createWritingJudge, isWritable, sanitizeDrawing } from '../src/server/handwriting/judge';
import { VOCAB } from '../src/shared/vocab';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const rec = Recognizer.fromFile();
const refs = JSON.parse(readFileSync(path.resolve(__dirname, '../data/kanji-patterns.json'), 'utf8')) as Array<[string, number, Array<Array<[number, number]>>]>;
const drawn = (ch: string) => {
  // a reference shape, scaled/shifted as if drawn on a 300px pad
  const r = refs.find((x) => x[0] === ch)!;
  return r[2].map((s) => s.map(([x, y]): [number, number] => [x * 1.1 + 15, y * 1.1 + 10]));
};

test('recogniser knows kanji and hiragana', () => {
  for (const ch of ['山', '懸', '念', 'あ', 'を', 'ん']) assert.ok(rec.knows(ch), ch);
  for (const ch of ['山', '懸', 'ね']) assert.equal(rec.recognize(drawn(ch), 5)[0], ch, ch);
  // look-alikes (水/氷, 憂/慶, こ/二) may swap places at the top — the game accepts the top 5
  for (const ch of ['水', '憂', 'こ']) assert.ok(rec.recognize(drawn(ch), 5).includes(ch), ch);
});

test('writing judge: right characters pass, wrong ones fail and report what was read', () => {
  const judge = createWritingJudge(rec);
  const kenen = VOCAB.find((v) => v.kanji === '懸念')!;
  assert.deepEqual(judge(kenen, [drawn('懸'), drawn('念')]), { correct: true, recognized: '懸念' });
  const bad = judge(kenen, [drawn('懸'), drawn('山')]);
  assert.equal(bad.correct, false);
  assert.equal(bad.recognized, '懸山');
  assert.equal(judge(kenen, [drawn('懸')]).correct, false, 'missing a character');
});

test('writable words exist for every level; small kana words are excluded', () => {
  const ok = isWritable(rec);
  for (const lv of ['KANA', 'N5', 'N4', 'N3', 'N2', 'N1']) assert.ok(VOCAB.filter((v) => v.level === lv && ok(v)).length >= 30, lv);
  assert.equal(ok(VOCAB.find((v) => v.kanji === 'きゃ')!), false);
});

test('stroke data from the client is validated', () => {
  assert.ok(sanitizeDrawing([[[[1, 2], [3, 4]]]], 4));
  assert.equal(sanitizeDrawing('x', 4), null);
  assert.equal(sanitizeDrawing([[[[1, 'a']]]], 4), null);
  assert.equal(sanitizeDrawing([[[[1, Infinity]]]], 4), null);
  assert.equal(sanitizeDrawing(Array(9).fill([[[1, 2]]]), 8), null);
});
