// 0.9.9.9.9.6 (round 4): importing words the way Quizlet does ("we need import like in quizlet"): paste your data,
// say what separates a term from its definition (Tab, Comma, or your own) and one card from the next (New line,
// Semicolon, or your own), and see the cards before they go in. A definition may carry the reading too
// ("ねこ - cat", "ねこ, cat", "(ねこ) cat"), the term may carry it as furigana (猫[ねこ], 猫（ねこ）), and a card
// written the other way round (cat → 猫) is turned over.
export type TermSep = 'tab' | 'comma' | 'dash' | { custom: string };
export type CardSep = 'newline' | 'semicolon' | 'blank' | { custom: string };
export interface ImportCard { kanji: string; reading: string; meaning: string }

const JA = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}々ー]/u;
const KANA = /^[\p{Script=Hiragana}\p{Script=Katakana}ー・]+$/u;
const sepOf = (s: TermSep | CardSep): string | RegExp =>
  s === 'tab' ? '\t' : s === 'comma' ? ',' : s === 'dash' ? ' - ' : s === 'newline' ? /\r?\n/ : s === 'semicolon' ? ';' : s === 'blank' ? /\r?\n\s*\r?\n/
    : (s.custom.replace(/\\t/g, '\t').replace(/\\n/g, '\n') || '\t');

/** the text → [term, definition] pairs, by the separators chosen */
export function splitCards(text: string, term: TermSep, card: CardSep, max = 1000): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  const ts = sepOf(term);
  for (const raw of text.split(sepOf(card))) {
    const c = raw.trim();
    if (!c || c.startsWith('#')) continue; // (Anki's text export starts with #separator:tab and the like)
    const i = typeof ts === 'string' ? c.indexOf(ts) : -1;
    const [t, d] = i < 0 ? [c, ''] : [c.slice(0, i), c.slice(i + (ts as string).length)];
    out.push([t.trim().replace(/^"(.*)"$/s, '$1'), d.trim().replace(/^"(.*)"$/s, '$1')]);
    if (out.length >= max) break;
  }
  return out;
}

/** a reading in the term: 猫[ねこ], 猫（ねこ）, 猫(ねこ) — or Anki's furigana 漢字[かんじ] inside a longer word */
function termReading(t: string): { kanji: string; reading: string } {
  const paren = /^(.+?)\s*[（(]\s*([\p{Script=Hiragana}\p{Script=Katakana}ー・]+)\s*[）)]$/u.exec(t);
  if (paren && JA.test(paren[1])) return { kanji: paren[1].trim(), reading: paren[2] };
  if (/\[[^\]]+\]/.test(t)) {
    const kanji = t.replace(/\[[^\]]*\]/g, '').replace(/\s+/g, '');
    const reading = t.replace(/\s*([^\s[\]]+?)\[([^\]]+)\]/g, (_m, _b, r) => r).replace(/\s+/g, '');
    if (KANA.test(reading)) return { kanji, reading };
  }
  return { kanji: t, reading: KANA.test(t.replace(/\s/g, '')) ? t.replace(/[\s・]/g, '') : '' };
}
/** a definition that starts with the reading: "ねこ - cat", "ねこ, cat", "ねこ; cat", "(ねこ) cat", "ねこ cat" */
function defReading(d: string): { reading: string; meaning: string } {
  const m = /^[(（[]?\s*([\p{Script=Hiragana}\p{Script=Katakana}ー・]+)\s*[)）\]]?\s*(?:[-–—:;,/|]\s*|\s+)(.*)$/su.exec(d);
  if (m && m[2] && !JA.test(m[2])) return { reading: m[1].replace(/・/g, ''), meaning: m[2].trim() };
  if (KANA.test(d)) return { reading: d.replace(/・/g, ''), meaning: '' };
  return { reading: '', meaning: JA.test(d) ? d.replace(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}々ー・]+/gu, ' ').replace(/^[\s\-–—:;,/|]+|[\s\-–—:;,/|]+$/g, '').replace(/\s+/g, ' ') : d };
}
/** one card → the word, its reading and its meaning (null: no Japanese on either side) */
export function cardRow(term: string, def: string): ImportCard | null {
  let t = term.trim(), d = def.trim();
  if (!JA.test(t) && JA.test(d)) [t, d] = [d, t]; // cat → 猫: turned over
  if (!JA.test(t)) return null;
  let { kanji, reading } = termReading(t);
  const r = defReading(d);
  if (!reading && r.reading) reading = r.reading;
  kanji = kanji.replace(/\s+/g, '').slice(0, 16);
  return kanji ? { kanji, reading: reading.slice(0, 32), meaning: r.meaning.slice(0, 120) } : null;
}
/** the text → cards, ready for the preview */
export function parseCards(text: string, term: TermSep, card: CardSep, max = 1000): ImportCard[] {
  return splitCards(text, term, card, max).flatMap(([t, d]) => { const r = cardRow(t, d); return r ? [r] : []; });
}
/** what separates a term from its definition in this text, at a guess (the first choice offered) */
export function guessTermSep(text: string): TermSep {
  const lines = text.split(/\r?\n/).filter((l) => l.trim()).slice(0, 20);
  if (lines.some((l) => l.includes('\t'))) return 'tab';
  if (lines.length && lines.every((l) => l.includes(' - '))) return 'dash';
  if (lines.length && lines.every((l) => l.includes(','))) return 'comma';
  return 'tab';
}
