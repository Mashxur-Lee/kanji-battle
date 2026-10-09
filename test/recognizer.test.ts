import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Recognizer } from '../src/server/handwriting/recognizer';
import { createWritingJudge, isWritable, judgeChar, sanitizeDrawing } from '../src/server/handwriting/judge';
import { VOCAB } from '../src/server/vocab';
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

test('handwriting is forgiving: tilted, stretched, strokes run together still counts; a different kanji does not', () => {
  const sloppy = (ch: string) => {
    const s = drawn(ch).map((st) => st.map(([x, y]): [number, number] => [x * 1.15 + y * 0.12 + 7, y * 0.9 - x * 0.05 + 3]));
    // a mouse user drags two strokes into one
    return [s[0].concat(s[1]), ...s.slice(2)];
  };
  assert.equal(judgeChar(rec, sloppy('念'), '念').ok, true);
  assert.equal(judgeChar(rec, sloppy('語'), '語').ok, true);
  assert.equal(judgeChar(rec, sloppy('山'), '念').ok, false);
  assert.equal(judgeChar(rec, drawn('海'), '念').ok, false);
});

test('whole word on one pad: the strokes are split into characters', () => {
  const judge = createWritingJudge(rec);
  const words = VOCAB.filter((v) => [...v.kanji].length >= 2 && [...v.kanji].length <= 3 && isWritable(rec)(v)).filter((_, i) => i % 97 === 0).slice(0, 25);
  assert.ok(words.length >= 20);
  // written left to right in one go, cells ~300px wide, a bit uneven
  const wordDrawing = (kanji: string) => [...kanji].flatMap((ch, i) => drawn(ch).map((s) => s.map(([x, y]): [number, number] => [x + i * (290 + (i % 2) * 25), y + (i % 2) * 18])));
  let ok = 0;
  for (const w of words) if (judge(w, [wordDrawing(w.kanji)]).correct) ok++;
  assert.ok(ok >= words.length - 1, `${ok}/${words.length} words recognised when written whole`);
  // a different word of the same length is still wrong
  const [a, b] = words.filter((w) => [...w.kanji].length === 2);
  assert.equal(judge(a, [wordDrawing(b.kanji)]).correct, false);
  // a dot added at the very end (stroke order out of sequence) still splits correctly
  const strokes = wordDrawing(a.kanji);
  const firstLen = drawn([...a.kanji][0]).length;
  if (firstLen > 2) {
    const moved = [...strokes.slice(0, firstLen - 1), ...strokes.slice(firstLen), strokes[firstLen - 1]];
    assert.equal(judge(a, [moved]).correct, true);
  }
});

test('a whole-word drawing may have more strokes than one character', () => {
  const big = Array.from({ length: 70 }, (_, i) => [[i, 0], [i, 10]]);
  assert.ok(sanitizeDrawing([big], 8), 'one group of 70 strokes is a word');
  assert.equal(sanitizeDrawing([big, big], 8), null, 'but not per character');
});
