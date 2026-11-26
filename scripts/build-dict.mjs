// Builds public/dict.json (0.9.9.7.1: shipped with the app — the dictionary works offline) — the in-game dictionary (0.9.9.7) — from JMdict (jmdict-simplified "all" JSON):
//   node scripts/build-dict.mjs path/to/jmdict-all-*.json
// Keeps every common word plus every word of the game's own word list, with English and Russian meanings.
// JMdict © the Electronic Dictionary Research and Development Group, CC BY-SA 4.0 (see CREDITS.md).
import { readFileSync, writeFileSync } from 'node:fs';

const src = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const vocab = JSON.parse(readFileSync('data/vocab.json', 'utf8'));
const ours = new Set(vocab.map((v) => `${v.kanji}|${v.reading}`));
// 0.9.9.7.1: the game's own Russian meanings, for its words JMdict has no Russian for
const ruOf = JSON.parse(readFileSync('public/meanings-ru.json', 'utf8'));
const ruByWord = new Map(vocab.filter((v) => ruOf[v.meaning]).map((v) => [`${v.kanji}|${v.reading}`, ruOf[v.meaning]]));
const POS_KEEP = new Set();
const out = [];
for (const w of src.words) {
  const kanji = w.kanji.filter((k) => !k.tags.includes('sK') && !k.tags.includes('iK'));
  const kana = w.kana.filter((k) => !k.tags.includes('sk') && !k.tags.includes('ik'));
  const common = w.kanji.some((k) => k.common) || w.kana.some((k) => k.common);
  const mine = kanji.some((k) => kana.some((r) => ours.has(`${k.text}|${r.text}`))) || kana.some((r) => ours.has(`${r.text}|${r.text}`));
  // 0.9.9.7.2: and every expression / phrase (〜を呼ぶ, 気をつける …)
  const phrase = w.sense.some((x) => x.partOfSpeech.includes('exp'));
  if (!common && !mine && !phrase) continue;
  const en = [], ru = [];
  // 0.9.9.9.9.6: the words JMdict links to — its antonyms, and its "see also" (related words)
  const ant = new Set(), rel = new Set();
  const xref = (x) => x.filter((v) => typeof v === 'string').slice(0, 1).join('');
  for (const s of w.sense) {
    for (const x of s.antonym ?? []) { const t = xref(x); if (t) ant.add(t); }
    for (const x of s.related ?? []) { const t = xref(x); if (t) rel.add(t); }
    const g = s.gloss.filter((x) => x.lang === 'eng').map((x) => x.text);
    const gr = s.gloss.filter((x) => x.lang === 'rus').map((x) => x.text);
    if (g.length) { en.push([s.partOfSpeech, g.slice(0, 8).join('; '), [...s.field, ...s.misc].slice(0, 3), s.info.slice(0, 1).join('')]); s.partOfSpeech.forEach((p) => POS_KEEP.add(p)); [...s.field, ...s.misc].forEach((p) => POS_KEEP.add(p)); }
    if (gr.length) ru.push(gr.slice(0, 6).join('; '));
  }
  if (!en.length) continue;
  const e = { k: kanji.slice(0, 4).map((k) => k.text), r: kana.slice(0, 4).map((k) => k.text), s: en.slice(0, 8) };
  if (!ru.length) { const r = kanji.flatMap((k) => kana.map((x) => ruByWord.get(`${k.text}|${x.text}`))).find(Boolean) ?? kana.map((x) => ruByWord.get(`${x.text}|${x.text}`)).find(Boolean); if (r) ru.push(r); }
  if (ru.length) e.ru = ru.slice(0, 5);
  if (common) e.c = 1;
  if (ant.size) e.a = [...ant].slice(0, 6);
  if (rel.size) e.y = [...rel].filter((t) => !ant.has(t)).slice(0, 6);
  if (e.y && !e.y.length) delete e.y;
  if (phrase) { e.x = 1; e.s = e.s.slice(0, 4); }
  out.push(e);
}
const tags = Object.fromEntries([...POS_KEEP].sort().map((t) => [t, src.tags[t] ?? t]));
writeFileSync('public/dict.json', JSON.stringify({ source: `JMdict ${src.dictDate}`, tags, words: out }));
console.log(out.length, 'words');
