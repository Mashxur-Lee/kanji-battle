// One-off: convert KanjiCanvas hiragana stroke XMLs into reference patterns and append them to
// data/kanji-patterns.json. Usage: npx tsx scripts/build-kana-patterns.ts <kanjicanvas>/hiragana
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { extractFeatures, momentNormalize, type Pattern, type RefPattern } from '../src/server/handwriting/recognizer';

/** The <unicode> tag is unreliable in some source files, so the file name (e.g. 3042.xml) wins. */
export function parseXml(xml: string, fileName?: string): { char: string; pattern: Pattern } {
  const code = fileName ? path.basename(fileName, '.xml') : /<unicode>([0-9A-Fa-f]+)<\/unicode>/.exec(xml)![1];
  const pattern = [...xml.matchAll(/<stroke>([\s\S]*?)<\/stroke>/g)].map((m) =>
    [...m[1].matchAll(/x="(-?\d+)"\s+y="(-?\d+)"/g)].map((p): [number, number] => [Number(p[1]), Number(p[2])]));
  return { char: String.fromCodePoint(parseInt(code, 16)), pattern };
}

if (require.main === module) {
  const dir = process.argv[2];
  const file = path.resolve(__dirname, '../data/kanji-patterns.json');
  const refs = JSON.parse(readFileSync(file, 'utf8')) as RefPattern[];
  const have = new Set(refs.map((r) => r[0]));
  let added = 0;
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.xml'))) {
    const { char, pattern } = parseXml(readFileSync(path.join(dir, f), 'utf8'), f);
    if (have.has(char)) continue;
    const feats = extractFeatures(momentNormalize(pattern), 20).map((s) => s.map(([x, y]): [number, number] => [Math.round(x), Math.round(y)]));
    refs.push([char, feats.length, feats]);
    added++;
  }
  writeFileSync(file, JSON.stringify(refs));
  console.log(`added ${added} patterns, total ${refs.length}`);
}
