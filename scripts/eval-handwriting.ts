/**
 * Measures how often correctly written whole words are accepted (and wrong ones rejected), with
 * simulated sloppy mouse writing on the real pad layout (one 600 px cell per character, up to 4).
 * Run: npx tsx scripts/eval-handwriting.ts [samplesPerLength]
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { Recognizer } from '../src/server/handwriting/recognizer';
import { createWritingJudge, isWritable } from '../src/server/handwriting/judge';
import { VOCAB } from '../src/server/vocab';

type P = Array<Array<[number, number]>>;
const refs = JSON.parse(readFileSync(path.resolve(__dirname, '../data/kanji-patterns.json'), 'utf8')) as Array<[string, number, P]>;
const byCh = new Map(refs.map((r) => [r[0], r[2]]));
let seed = 12345;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const between = (a: number, b: number) => a + rnd() * (b - a);

/** One character, drawn sloppily into cell i of a pad with `cells` cells of 600 px. */
function drawChar(ch: string, i: number, sloppiness: number): P {
  const ref = byCh.get(ch)!;
  const xs = ref.flat().map((p) => p[0]), ys = ref.flat().map((p) => p[1]);
  const x0 = Math.min(...xs), y0 = Math.min(...ys), w = Math.max(1, Math.max(...xs) - x0), h = Math.max(1, Math.max(...ys) - y0);
  const size = between(0.5, 0.88) * 600;
  const sx = (size / Math.max(w, h)) * between(1 - 0.2 * sloppiness, 1 + 0.2 * sloppiness);
  const sy = (size / Math.max(w, h)) * between(1 - 0.2 * sloppiness, 1 + 0.2 * sloppiness);
  const shear = between(-0.18, 0.18) * sloppiness, rot = between(-0.12, 0.12) * sloppiness;
  const cx = i * 600 + 300 + between(-0.16, 0.16) * 600 * sloppiness, cy = 300 + between(-60, 60) * sloppiness;
  let strokes: P = ref.map((s) => {
    // stroke-level wobble
    const dx = between(-12, 12) * sloppiness, dy = between(-12, 12) * sloppiness;
    return s.map(([x, y]) => {
      let u = (x - x0 - w / 2) * sx, v = (y - y0 - h / 2) * sy;
      u += shear * v;
      const ru = u * Math.cos(rot) - v * Math.sin(rot), rv = u * Math.sin(rot) + v * Math.cos(rot);
      return [Math.round(cx + ru + dx + between(-5, 5) * sloppiness), Math.round(cy + rv + dy + between(-5, 5) * sloppiness)] as [number, number];
    });
  });
  // a mouse user sometimes drags two strokes into one
  if (strokes.length > 3 && rnd() < 0.35 * sloppiness) {
    const k = Math.floor(rnd() * (strokes.length - 1));
    strokes = [...strokes.slice(0, k), strokes[k].concat(strokes[k + 1]), ...strokes.slice(k + 2)];
  }
  return strokes;
}
const drawWord = (kanji: string, sloppiness: number): P => [...kanji].flatMap((ch, i) => drawChar(ch, Math.min(i, 3), sloppiness));

const rec = Recognizer.fromFile();
const ok = isWritable(rec);
const n = Number(process.argv[2] ?? 60);
const sl = Number(process.argv[3] ?? 1);
const normal = createWritingJudge(rec), lenient = createWritingJudge(rec, { lenient: true });
for (const len of [1, 2, 3, 4]) {
  const words = VOCAB.filter((v) => [...v.kanji].length === len && ok(v) && /\p{Script=Han}/u.test(v.kanji));
  const pick = Array.from({ length: n }, () => words[Math.floor(rnd() * words.length)]);
  let an = 0, al = 0, fn = 0, fl = 0;
  const t0 = Date.now();
  for (let i = 0; i < pick.length; i++) {
    const w = pick[i];
    const d = drawWord(w.kanji, sl);
    if (normal(w, [d]).correct) an++;
    if (lenient(w, [d]).correct) al++;
    // false accepts: a different word of the same length
    const other = pick[(i + 1) % pick.length];
    if (other.kanji !== w.kanji) {
      const od = drawWord(other.kanji, sl);
      if (normal(w, [od]).correct) fn++;
      if (lenient(w, [od]).correct) fl++;
    }
  }
  const pct = (x: number) => `${Math.round((100 * x) / pick.length)}%`;
  console.log(`${len} chars: accepted normal ${pct(an)} lenient ${pct(al)} | wrong accepted normal ${pct(fn)} lenient ${pct(fl)} | ${Math.round((Date.now() - t0) / pick.length / 2)} ms/word`);
}
