import assert from 'node:assert/strict';
import { test } from 'node:test';
import { VOCAB } from '../src/server/vocab';
import { isCorrectReading } from '../src/shared/kana';
import { levelsFor } from '../src/shared/progress';
import { progressOf } from '../src/server/study/ProgressService';
import { recalledOp, rememberOp } from '../src/server/http';
import { buildQuiz } from '../src/shared/quiz';

test('0.9.9.4.2: hiragana and katakana levels — letters and combinations only', () => {
  const hira = VOCAB.filter((v) => v.level === 'KANA'), kata = VOCAB.filter((v) => v.level === 'KATA');
  assert.equal(hira.length, 104);
  assert.equal(kata.length, 104);
  assert.ok(hira.every((v) => /^hiragana/.test(v.meaning) && v.romaji), 'no words like ねこ');
  assert.ok(kata.every((v) => /^[ァ-ヶ]+$/.test(v.kanji) && /^katakana/.test(v.meaning) && v.romaji));
  for (const [k, r] of [['カ', 'ka'], ['シャ', 'sha'], ['ヂ', 'ji'], ['ピョ', 'pyo']]) {
    const v = kata.find((x) => x.kanji === k)!;
    assert.ok(isCorrectReading(r, [v.reading, ...(v.altReadings ?? [])]), `${k} = ${r}`);
  }
});

test('a kana beginner may pick katakana too', () => {
  assert.deepEqual(levelsFor(['KATA', 'N5'], true), ['KATA']);
  assert.deepEqual(levelsFor(['N5'], true), ['KANA']);
});

test('katakana quiz questions are asked by romaji', () => {
  const k = VOCAB.filter((v) => v.level === 'KATA').slice(0, 4);
  for (const q of buildQuiz(k, VOCAB, () => 0.4)) {
    assert.equal(q.kind, 'reading');
    assert.ok(q.choices.every((c) => /^[a-z]+$/.test(c)), q.choices.join(','));
  }
});

test('mastery progress: 0 → 100 at a three-week interval', () => {
  assert.equal(progressOf(null), 0);
  assert.ok(progressOf({ state: 'new', intervalDays: 0, reps: 0 }) < progressOf({ state: 'learning', intervalDays: 0, reps: 1 }));
  assert.ok(progressOf({ state: 'review', intervalDays: 3, reps: 4 }) < progressOf({ state: 'review', intervalDays: 10, reps: 5 }));
  assert.equal(progressOf({ state: 'review', intervalDays: 21, reps: 6 }), 100);
  assert.equal(progressOf({ state: 'review', intervalDays: 90, reps: 9 }), 100);
});

test('a repeated change id gets the first answer back', () => {
  rememberOp('tok:abc12345', { status: 200, body: { ok: 1 } });
  assert.deepEqual(recalledOp('tok:abc12345'), { status: 200, body: { ok: 1 } });
  assert.equal(recalledOp('tok:other123'), null);
  assert.equal(recalledOp('tok:abc12345', Date.now() + 2 * 3_600_000), null, 'forgotten after an hour');
});
