// Builds data/dict.json — the in-game dictionary (0.9.9.7) — from JMdict (jmdict-simplified "all" JSON):
//   node scripts/build-dict.mjs path/to/jmdict-all-*.json
// Keeps every common word plus every word of the game's own word list, with English and Russian meanings.
// JMdict © the Electronic Dictionary Research and Development Group, CC BY-SA 4.0 (see CREDITS.md).
import { readFileSync, writeFileSync } from 'node:fs';

const src = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const vocab = JSON.parse(readFileSync('data/vocab.json', 'utf8'));
const ours = new Set(vocab.map((v) => `${v.kanji}|${v.reading}`));
const POS_KEEP = new Set();
const out = [];
for (const w of src.words) {
  const kanji = w.kanji.filter((k) => !k.tags.includes('sK') && !k.tags.includes('iK'));
  const kana = w.kana.filter((k) => !k.tags.includes('sk') && !k.tags.includes('ik'));
  const common = w.kanji.some((k) => k.common) || w.kana.some((k) => k.common);
  const mine = kanji.some((k) => kana.some((r) => ours.has(`${k.text}|${r.text}`))) || kana.some((r) => ours.has(`${r.text}|${r.text}`));
  if (!common && !mine) continue;
  const en = [], ru = [];
  for (const s of w.sense) {
    const g = s.gloss.filter((x) => x.lang === 'eng').map((x) => x.text);
    const gr = s.gloss.filter((x) => x.lang === 'rus').map((x) => x.text);
    if (g.length) { en.push([s.partOfSpeech, g.slice(0, 8).join('; '), [...s.field, ...s.misc].slice(0, 3), s.info.slice(0, 1).join('')]); s.partOfSpeech.forEach((p) => POS_KEEP.add(p)); [...s.field, ...s.misc].forEach((p) => POS_KEEP.add(p)); }
    if (gr.length) ru.push(gr.slice(0, 6).join('; '));
  }
  if (!en.length) continue;
  const e = { k: kanji.slice(0, 4).map((k) => k.text), r: kana.slice(0, 4).map((k) => k.text), s: en.slice(0, 8) };
  if (ru.length) e.ru = ru.slice(0, 5);
  if (common) e.c = 1;
  out.push(e);
}
const tags = Object.fromEntries([...POS_KEEP].sort().map((t) => [t, src.tags[t] ?? t]));
writeFileSync('data/dict.json', JSON.stringify({ source: `JMdict ${src.dictDate}`, tags, words: out }));
console.log(out.length, 'words');
