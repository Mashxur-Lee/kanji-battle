import assert from 'node:assert/strict';
import { test } from 'node:test';
import { isCorrectReading, normalizeAnswer, romajiToHiragana } from '../src/shared/kana';
import { VOCAB } from '../src/shared/vocab';

test('romaji → hiragana covers Hepburn, Kunrei and IME-style typing', () => {
  const cases: Record<string, string> = {
    yuuutsu: 'ゆううつ', chuucho: 'ちゅうちょ', tyuutyo: 'ちゅうちょ', kenen: 'けねん', ken: 'けん',
    kekka: 'けっか', gakkou: 'がっこう', shinpai: 'しんぱい', sinpai: 'しんぱい', kanna: 'かんな',
    konnichiha: 'こんにちは', konnnichiha: 'こんにちは', "ken'en": 'けんえん', fun: 'ふん', hun: 'ふん',
    jiyuu: 'じゆう', zyuunbi: 'じゅうんび', junbi: 'じゅんび', zyunbi: 'じゅんび', matcha: 'まっちゃ',
    sakujo: 'さくじょ', fun_iki: 'ふん_いき', ninngen: 'にんげん', kinyuu: 'きにゅう',
  };
  for (const [romaji, kana] of Object.entries(cases)) assert.equal(romajiToHiragana(romaji), kana, romaji);
});

test('normalizeAnswer accepts IME kana, katakana, full-width and stray whitespace', () => {
  assert.equal(normalizeAnswer('ゆううつ'), 'ゆううつ');
  assert.equal(normalizeAnswer('ユウウツ'), 'ゆううつ');
  assert.equal(normalizeAnswer('ｙｕｕｕｔｓｕ'), 'ゆううつ');
  assert.equal(normalizeAnswer(' YUUUTSU '), 'ゆううつ');
  assert.equal(normalizeAnswer('ゆう うつ'), 'ゆううつ');
});

test('isCorrectReading', () => {
  assert.ok(isCorrectReading('ちゅうちょ', ['ちゅうちょ']));
  assert.ok(isCorrectReading('chuucho', ['ちゅうちょ']));
  assert.ok(!isCorrectReading('chucho', ['ちゅうちょ']));
  assert.ok(!isCorrectReading('', ['ちゅうちょ']));
  assert.ok(!isCorrectReading('躊躇', ['ちゅうちょ'])); // typing the kanji itself is not the reading
});

test('every vocab reading is pure hiragana and reachable by romaji typing', () => {
  const ids = new Set<string>();
  for (const v of VOCAB) {
    assert.match(v.reading, /^[ぁ-ゖー]+$/, `${v.kanji} reading should be hiragana`);
    assert.ok(!ids.has(v.id), `duplicate id ${v.id}`);
    ids.add(v.id);
    assert.ok(v.difficulty > 0 && v.difficulty <= 100);
  }
  assert.ok(VOCAB.length >= 100);
});
