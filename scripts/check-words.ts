// 0.9.9.9.9.7: every word with furigana that the game shows (the chess wizards' lines, the grammar examples and
// questions) is looked up the way a tap looks it up — the ones not found are listed. Run: npx tsx scripts/check-words.ts
import { readFileSync } from 'node:fs';
import { LINES, parseLine } from '../src/shared/chesslines';
import { GRAMMAR, filledQuestion } from '../src/shared/grammar';
import { Dictionary } from '../src/shared/dict';
import { dictionaryQueries, EXTRA_WORDS, findInVocab, numberWord, pickDictWord, PREFIXED, splitCompound } from '../src/shared/wordlookup';

const vocab = JSON.parse(readFileSync('data/vocab.json', 'utf8'));
const dict = new Dictionary(JSON.parse(readFileSync('public/dict.json', 'utf8')), vocab);

/** the words of a line: each furigana word with the kana right after it */
export function wordsOf(jp: string): Array<{ base: string; reading: string; after: string }> {
  const parts = parseLine(jp);
  return parts.flatMap((p, i) => (p.reading ? [{ base: p.text, reading: p.reading, after: (parts[i + 1] && !parts[i + 1].reading ? parts[i + 1].text : '').slice(0, 4) }] : []));
}
export function lookup(base: string, reading: string, after: string): string | null {
  if (EXTRA_WORDS[`${base}|${reading}`]) return base;
  if (numberWord(base)) return base;
  if (PREFIXED[`${base}|${reading}`]) return PREFIXED[`${base}|${reading}`];
  if (!/\p{Script=Han}/u.test(base)) return base; // (kana written over kana)
  const v = findInVocab(vocab, base, reading, after);
  if (v) return v.kanji;
  for (const q of dictionaryQueries(base, after)) { const w = pickDictWord(dict.search(q, 12), q, base, reading); if (w) return w.kanji[0]; }
  const split = splitCompound(base, (part) => (vocab.find((v: { kanji: string }) => v.kanji === part) || dict.search(part, 8).find((w) => w.kanji.includes(part)) ? part : null));
  return split ? split.parts.join('+') : null;
}

const lines = [
  ...Object.values(LINES).flatMap((m) => Object.values(m).flatMap((l) => (l ?? []).map((x) => x.jp))),
  ...GRAMMAR.flatMap((g) => [...g.examples.map((e) => e.jp), ...g.questions.map((q) => filledQuestion(q))]),
];
const missing = new Map<string, string>();
let n = 0;
for (const jp of lines) for (const w of wordsOf(jp)) { n++; if (!lookup(w.base, w.reading, w.after)) missing.set(`${w.base}|${w.reading}|${w.after}`, jp); }
console.log(`${n} words, ${missing.size} not found`);
for (const [k] of [...missing].slice(0, 60)) console.log('  ', k);
