import assert from 'node:assert/strict';
import { test } from 'node:test';
import { exactMatch } from '../src/shared/dict';
import { toRomaji } from '../src/shared/kana';

test('0.9.9.9.4: a word typed in romaji is an exact dictionary match (the gold glow)', () => {
  const sensei = { kanji: ['先生'], kana: ['せんせい'], senses: [[['n'], 'teacher; master']] } as never;
  const kouhii = { kanji: [], kana: ['コーヒー'], senses: [[['n'], 'coffee']] } as never;
  assert.equal(exactMatch(sensei, 'sensei'), true);
  assert.equal(exactMatch(sensei, ' Sensei'), true);
  assert.equal(exactMatch(sensei, 'sense'), false, 'a part of the reading is not exact');
  assert.equal(exactMatch(sensei, 'teacher'), true);
  assert.equal(exactMatch(kouhii, 'koohii'), true, 'katakana words too');
});

test('0.9.9.9.4: a miss shows the reading in romaji', () => {
  assert.equal(toRomaji('せんせい'), 'sensei');
  assert.equal(toRomaji('がっこう'), 'gakkou');
});
