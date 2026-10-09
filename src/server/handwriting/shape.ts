import { momentNormalize, type Pattern, type RefPattern } from './recognizer';

/**
 * A second opinion that only looks at the overall shape: the drawing and every reference kanji are
 * drawn into small blurred 32×32 pictures and compared. Unlike stroke matching it doesn't care about
 * stroke count or order, so strokes run together, a missing stroke or a wobbly line hurt much less.
 * Used to make Deck Duel casting forgiving (see judge.ts).
 */
const N = 32;

function raster(p: Pattern): Float32Array {
  const m = momentNormalize(p.filter((s) => s.length > 0));
  let img = new Float32Array(N * N);
  const put = (x: number, y: number) => {
    const X = Math.round((x / 256) * (N - 1)), Y = Math.round((y / 256) * (N - 1));
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const a = X + dx, b = Y + dy;
      if (a >= 0 && b >= 0 && a < N && b < N) img[b * N + a] = Math.max(img[b * N + a], dx === 0 && dy === 0 ? 1 : 0.5);
    }
  };
  for (const s of m) for (let i = 0; i < s.length; i++) {
    const [x0, y0] = s[i], [x1, y1] = s[Math.min(i + 1, s.length - 1)];
    const steps = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 4));
    for (let t = 0; t <= steps; t++) put(x0 + ((x1 - x0) * t) / steps, y0 + ((y1 - y0) * t) / steps);
  }
  for (let k = 0; k < 2; k++) {
    const out = new Float32Array(N * N);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      let sum = 0, c = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        const a = x + dx, b = y + dy;
        if (a >= 0 && b >= 0 && a < N && b < N) { sum += img[b * N + a]; c++; }
      }
      out[y * N + x] = sum / c;
    }
    img = out;
  }
  // unit length, so a dot product is the cosine similarity
  let norm = 0;
  for (const v of img) norm += v * v;
  norm = Math.sqrt(norm) || 1;
  for (let i = 0; i < img.length; i++) img[i] /= norm;
  return img;
}

export class ShapeIndex {
  private chars: string[] = [];
  private pics: Float32Array[] = [];
  private byChar = new Map<string, number>();

  constructor(private readonly refs: readonly RefPattern[]) {}

  /** Built on first use (~9 MB), so servers that never judge Deck Duel don't pay for it. */
  private build() {
    if (this.pics.length) return;
    this.refs.forEach((r, i) => { this.chars.push(r[0]); this.pics.push(raster(r[2])); this.byChar.set(r[0], i); });
  }

  /** How many reference characters look more like the drawing than `target` does (0 = best match). */
  rank(drawn: Pattern, target: string): number {
    this.build();
    const t = this.byChar.get(target);
    if (t === undefined || drawn.every((s) => s.length === 0)) return Infinity;
    const v = raster(drawn);
    const sim = (p: Float32Array) => { let d = 0; for (let i = 0; i < p.length; i++) d += p[i] * v[i]; return d; };
    const ts = sim(this.pics[t]);
    let rank = 0;
    for (const p of this.pics) if (sim(p) > ts) rank++;
    return rank;
  }
}
