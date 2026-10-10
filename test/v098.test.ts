import assert from 'node:assert/strict';
import { test } from 'node:test';
import { VOCAB, rebinByStrokes } from '../src/server/vocab';
import { isCorrectWriting, writeTargets, writeTemplate } from '../src/shared/kana';
import { isoWeek, isKanaBeginner, KANA_BEGINNER, levelsFor, STAFFS } from '../src/shared/progress';
import type { VocabEntry } from '../src/shared/protocol';

test('levels are re-sorted by stroke count: an N5 word is never more complex than an N1 word', () => {
  const order = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;
  const maxOf = (l: string) => Math.max(...VOCAB.filter((v) => v.level === l).map((v) => v.strokes ?? 0));
  const minOf = (l: string) => Math.min(...VOCAB.filter((v) => v.level === l).map((v) => v.strokes ?? 0));
  for (let i = 0; i + 1 < order.length; i++) assert.ok(maxOf(order[i]) <= minOf(order[i + 1]), `${order[i]} ≤ ${order[i + 1]}`);
  // sizes per level are kept, and the JLPT list is remembered
  const w = (id: string, level: VocabEntry['level'], strokes: number): VocabEntry => ({ id, kanji: '漢', reading: 'かん', meaning: '', level, difficulty: 0, strokes });
  const out = rebinByStrokes([w('a', 'N5', 20), w('b', 'N1', 3), w('k', 'KANA', 0)]);
  assert.deepEqual(out.map((v) => [v.id, v.level, v.jlpt]), [['a', 'N1', 'N5'], ['b', 'N5', 'N1'], ['k', 'KANA', undefined]]);
  assert.ok(VOCAB.filter((v) => v.level === 'KANA').every((v) => !v.jlpt));
});

test('writing: only the kanji are written, the kana are filled in', () => {
  assert.deepEqual(writeTargets('必ず'), ['必']);
  assert.deepEqual(writeTargets('食べ物'), ['食', '物']);
  assert.deepEqual(writeTargets('ねこ'), ['ね', 'こ'], 'hiragana practice words are written whole');
  assert.equal(writeTemplate('必ず'), '□ず');
  assert.deepEqual(writeTargets(writeTemplate('食べ物')), ['□', '□']);
  // typed with an IME: the kanji alone counts, so does the whole word
  assert.ok(isCorrectWriting('必', '必ず', 'かならず'));
  assert.ok(isCorrectWriting('必ず', '必ず', 'かならず'));
  assert.ok(!isCorrectWriting('心', '必ず', 'かならず'));
  // 3+ kanji: one kanji picked wrong from the IME list is forgiven; 2 kanji: not
  assert.ok(isCorrectWriting('図書官', '図書館', 'としょかん'));
  assert.ok(!isCorrectWriting('科学', '化学', 'かがく'));
});

test('hiragana beginners play only かな until they say they have mastered it', () => {
  assert.equal(isKanaBeginner([]), false);
  assert.equal(isKanaBeginner([KANA_BEGINNER]), true);
  assert.deepEqual(levelsFor(['N5', 'N3'], true), ['KANA']);
  assert.deepEqual(levelsFor(['KANA', 'N5'], false), ['KANA', 'N5']);
});

test('seasonal staffs recolour only Verdant, Ember and Tide (Storm and Void stay exclusive)', () => {
  for (const s of STAFFS.filter((x) => x.base)) assert.ok(['verdant', 'ember', 'tide'].includes(s.base!), s.id);
});

test('ISO week numbers for the activity calendar', () => {
  assert.equal(isoWeek('2026-01-01'), 1);
  assert.equal(isoWeek('2026-10-11'), 41);
  assert.equal(isoWeek('2026-10-12'), 42);
  assert.equal(isoWeek('2024-12-30'), 1);
  assert.equal(isoWeek('2021-01-03'), 53);
});
