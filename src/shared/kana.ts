// Answer normalisation: players may type kana via a Japanese IME, or romaji on a plain keyboard.
// Everything is converted to hiragana and compared against the vocabulary reading.

const BASE: Record<string, string> = {
  a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お',
  ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ',
  sa: 'さ', si: 'し', shi: 'し', su: 'す', se: 'せ', so: 'そ',
  ta: 'た', ti: 'ち', chi: 'ち', tu: 'つ', tsu: 'つ', te: 'て', to: 'と',
  na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の',
  ha: 'は', hi: 'ひ', hu: 'ふ', fu: 'ふ', he: 'へ', ho: 'ほ',
  ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も',
  ya: 'や', yu: 'ゆ', yo: 'よ',
  ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ',
  la: 'ら', li: 'り', lu: 'る', le: 'れ', lo: 'ろ',
  wa: 'わ', wo: 'を', wi: 'うぃ', we: 'うぇ',
  ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご',
  za: 'ざ', zi: 'じ', ji: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ',
  da: 'だ', di: 'ぢ', du: 'づ', de: 'で', do: 'ど',
  ba: 'ば', bi: 'び', bu: 'ぶ', be: 'べ', bo: 'ぼ',
  pa: 'ぱ', pi: 'ぴ', pu: 'ぷ', pe: 'ぺ', po: 'ぽ',
  va: 'ゔぁ', vi: 'ゔぃ', vu: 'ゔ', ve: 'ゔぇ', vo: 'ゔぉ',
  fa: 'ふぁ', fi: 'ふぃ', fe: 'ふぇ', fo: 'ふぉ',
  xa: 'ぁ', xi: 'ぃ', xu: 'ぅ', xe: 'ぇ', xo: 'ぉ',
  xya: 'ゃ', xyu: 'ゅ', xyo: 'ょ', lya: 'ゃ', lyu: 'ゅ', lyo: 'ょ',
  xtu: 'っ', ltu: 'っ', xtsu: 'っ', ltsu: 'っ',
  '-': 'ー',
};

// Y-combinations: kya, sha/sya, cha/tya/cya, ja/jya/zya, …
const YOON: Array<[string[], string]> = [
  [['ky'], 'き'], [['gy'], 'ぎ'], [['sh', 'sy'], 'し'], [['j', 'jy', 'zy'], 'じ'],
  [['ch', 'ty', 'cy'], 'ち'], [['dy'], 'ぢ'], [['ny'], 'に'], [['hy'], 'ひ'],
  [['by'], 'び'], [['py'], 'ぴ'], [['my'], 'み'], [['ry', 'ly'], 'り'],
];
const SMALL: Record<string, string> = { a: 'ゃ', u: 'ゅ', o: 'ょ' };
for (const [prefixes, kana] of YOON) {
  for (const p of prefixes) {
    for (const [v, small] of Object.entries(SMALL)) BASE[p + v] ??= kana + small;
    if (p === 'sh' || p === 'ch' || p === 'j') BASE[p + 'e'] ??= kana + 'ぇ'; // she, che, je
  }
}

const VOWELS = new Set(['a', 'i', 'u', 'e', 'o']);

export function romajiToHiragana(input: string): string {
  const s = input.toLowerCase();
  let out = '';
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    const next = s[i + 1];

    // n → ん when followed by a non-vowel, by "n'", or at the end ("kanna" → かんな, "konnichiha" → こんにちは)
    if (c === 'n') {
      if (next === "'") { out += 'ん'; i += 2; continue; }
      if (next === undefined) { out += 'ん'; i += 1; continue; }
      if (next === 'n') {
        const after = s[i + 2];
        out += 'ん';
        i += after !== undefined && (VOWELS.has(after) || after === 'y') ? 1 : 2;
        continue;
      }
      if (!VOWELS.has(next) && next !== 'y') { out += 'ん'; i += 1; continue; }
    }
    // doubled consonant → っ ("kekka" → けっか, "matcha" → まっちゃ)
    if (c >= 'a' && c <= 'z' && !VOWELS.has(c) && (next === c || (c === 't' && next === 'c'))) {
      out += 'っ';
      i += 1;
      continue;
    }
    let matched = false;
    for (let len = 4; len >= 1; len--) {
      const kana = BASE[s.slice(i, i + len)];
      if (kana) { out += kana; i += len; matched = true; break; }
    }
    if (!matched) { out += c; i += 1; } // pass through (already-kana input, stray letters)
  }
  return out;
}

export const katakanaToHiragana = (s: string) =>
  s.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));

/** Normalise any player input (IME kana, katakana, romaji, full-width letters) to hiragana. */
export function normalizeAnswer(input: string): string {
  const halfWidth = input.normalize('NFKC'); // full-width ｙｕｕ → yuu
  const cleaned = halfWidth.replace(/[\s・.,。、]/g, '');
  return romajiToHiragana(katakanaToHiragana(cleaned));
}

export function isCorrectReading(input: string, readings: readonly string[]): boolean {
  const answer = normalizeAnswer(input);
  return answer.length > 0 && readings.some((r) => katakanaToHiragana(r) === answer);
}

/** Hiragana practice must be answered in romaji (typing the shown kana back via IME would be trivial). */
export const isRomajiInput = (input: string) => /^[a-z' \-]+$/i.test(input.normalize('NFKC').trim());

const HAN = /[\p{Script=Han}々〆ヶ]/u;

/**
 * A word typed with a Japanese IME. Besides the exact dictionary spelling, accept the spellings an IME
 * commonly gives where some kanji are written in kana instead (朝御飯 → 朝ご飯, 御菓子 → お菓子), as
 * long as at least one kanji is still written and the kana match the word's reading.
 */
export function isCorrectWriting(input: string, kanji: string, reading: string): boolean {
  const typed = input.normalize('NFKC').replace(/\s+/g, '');
  if (typed === kanji) return true;
  if (!HAN.test(typed)) return false;
  const T = [...kanji], X = [...katakanaToHiragana(typed)], R = [...katakanaToHiragana(reading)];
  const hira = (s: string) => katakanaToHiragana(s);
  const go = (ti: number, xi: number, ri: number): boolean => {
    if (ti === T.length) return xi === X.length && ri === R.length;
    const t = T[ti];
    if (!HAN.test(t)) {
      const k = hira(t);
      return X[xi] === k && R[ri] === k && go(ti + 1, xi + 1, ri + 1);
    }
    // this kanji reads as R[ri .. ri+len): either it is written as itself, or as exactly that kana
    for (let len = 1; ri + len <= R.length; len++) {
      if (X[xi] === t && go(ti + 1, xi + 1, ri + len)) return true;
      if (X.slice(xi, xi + len).join('') === R.slice(ri, ri + len).join('') && go(ti + 1, xi + len, ri + len)) return true;
    }
    return false;
  };
  return go(0, 0, 0);
}
