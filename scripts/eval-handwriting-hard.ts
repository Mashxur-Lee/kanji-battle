/**
 * Harder simulation of real mouse writing: characters off-centre and spilling over the cell dividers,
 * low-frequency wobble, strokes run together, a few strokes drawn backwards or out of order.
 * Reports where words fail: in splitting the strokes into characters, or in recognising a character.
 * Run: npx tsx scripts/eval-handwriting-hard.ts [samples] [length]
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { Recognizer } from '../src/server/handwriting/recognizer';
import { createWritingJudge, isWritable, judgeChar } from '../src/server/handwriting/judge';
import { VOCAB } from '../src/server/vocab';

type P = Array<Array<[number, number]>>;
const refs = JSON.parse(readFileSync(path.resolve(__dirname, '../data/kanji-patterns.json'), 'utf8')) as Array<[string, number, P]>;
const byCh = new Map(refs.map((r) => [r[0], r[2]]));
let seed = Number(process.env.SEED ?? 777);
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const between = (a: number, b: number) => a + rnd() * (b - a);

export function drawCharHard(ch: string, i: number): P {
  const ref = byCh.get(ch)!;
  const xs = ref.flat().map((p) => p[0]), ys = ref.flat().map((p) => p[1]);
  const x0 = Math.min(...xs), y0 = Math.min(...ys), w = Math.max(1, Math.max(...xs) - x0), h = Math.max(1, Math.max(...ys) - y0);
  const kana = !/\p{Script=Han}/u.test(ch);
  const size = (kana ? between(0.35, 0.6) : between(0.55, 1.0)) * 600; // okurigana are usually written small
  const sx = (size / Math.max(w, h)) * between(0.8, 1.2), sy = (size / Math.max(w, h)) * between(0.8, 1.2);
  const shear = between(-0.2, 0.2), rot = between(-0.12, 0.12);
  const cx = i * 600 + (kana ? 220 : 300) + between(-0.22, 0.22) * 600, cy = 300 + between(-70, 70);
  const ph = [between(0, 6), between(0, 6)], amp = between(4, 14);
  let strokes: P = ref.map((s) => {
    const dx = between(-15, 15), dy = between(-15, 15);
    const out = s.map(([x, y], k) => {
      let u = (x - x0 - w / 2) * sx, v = (y - y0 - h / 2) * sy;
      u += shear * v;
      const ru = u * Math.cos(rot) - v * Math.sin(rot), rv = u * Math.sin(rot) + v * Math.cos(rot);
      const t = k / Math.max(1, s.length - 1);
      return [Math.round(cx + ru + dx + amp * Math.sin(ph[0] + 5 * t)), Math.round(cy + rv + dy + amp * Math.sin(ph[1] + 4 * t))] as [number, number];
    });
    return rnd() < 0.08 ? out.reverse() : out;
  });
  if (strokes.length > 2 && rnd() < 0.25) { const k = Math.floor(rnd() * (strokes.length - 1)); [strokes[k], strokes[k + 1]] = [strokes[k + 1], strokes[k]]; }
  for (let m = 0; m < 2; m++) if (strokes.length > 3 && rnd() < 0.4) {
    const k = Math.floor(rnd() * (strokes.length - 1));
    strokes = [...strokes.slice(0, k), strokes[k].concat(strokes[k + 1]), ...strokes.slice(k + 2)];
  }
  return strokes;
}

const rec = Recognizer.fromFile();
const ok = isWritable(rec);
const n = Number(process.argv[2] ?? 60);
const lens = process.argv[3] ? [Number(process.argv[3])] : [1, 2, 3];
const normal = createWritingJudge(rec), lenient = createWritingJudge(rec, { lenient: true });
for (const len of lens) {
  const words = VOCAB.filter((v) => [...v.kanji].length === len && ok(v) && /\p{Script=Han}/u.test(v.kanji));
  let an = 0, al = 0, oracle = 0, fn = 0, fl = 0, chars = 0, charOk = 0;
  for (let i = 0; i < n; i++) {
    const w = words[Math.floor(rnd() * words.length)];
    const parts = [...w.kanji].map((c, j) => drawCharHard(c, Math.min(j, 3)));
    const d = parts.flat();
    if (normal(w, [d]).correct) an++;
    if (lenient(w, [d]).correct) al++;
    // oracle: the characters already split correctly
    const per = [...w.kanji].map((c, j) => judgeChar(rec, parts[j], c).ok);
    chars += per.length; charOk += per.filter(Boolean).length;
    if (per.every(Boolean)) oracle++;
    const other = words[Math.floor(rnd() * words.length)];
    if (other.kanji !== w.kanji) {
      const od = [...other.kanji].flatMap((c, j) => drawCharHard(c, Math.min(j, 3)));
      if (normal(w, [od]).correct) fn++;
      if (lenient(w, [od]).correct) fl++;
    }
  }
  const pct = (x: number, of = n) => `${Math.round((100 * x) / of)}%`;
  console.log(`${len} chars: normal ${pct(an)} lenient ${pct(al)} | split-oracle normal ${pct(oracle)} (per char ${pct(charOk, chars)}) | wrong accepted normal ${pct(fn)} lenient ${pct(fl)}`);
}
