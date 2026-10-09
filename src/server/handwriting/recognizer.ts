// Stroke-order-free Japanese handwriting recognition.
// TypeScript port of the recognition core of KanjiCanvas by Dominik Klein (MIT licence, see
// KANJICANVAS-LICENSE.txt; https://github.com/asdfjkl/kanjicanvas). Runs on the server so the
// result of a handwritten answer cannot be faked by the browser.
//
// Reference patterns live in data/kanji-patterns.json as [char, strokeCount, features].

import { ShapeIndex } from './shape';
import { readFileSync } from 'node:fs';
import path from 'node:path';

export type Point = [number, number];
export type Stroke = Point[];
export type Pattern = Stroke[];
export type RefPattern = [char: string, strokeCount: number, features: Pattern];

const SIZE = 256;

// ── normalisation & features ─────────────────────────────────────────────────

function aran(width: number, height: number): number {
  const r1 = height > width ? width / height : height / width;
  return Math.sqrt(Math.sin((Math.PI / 2) * r1));
}

/** Moment normalisation into a 256×256 box (KanjiCanvas.momentNormalize). */
export function momentNormalize(pattern: Pattern): Pattern {
  let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;
  for (const s of pattern) for (const [x, y] of s) {
    if (x < xMin) xMin = x; if (x > xMax) xMax = x;
    if (y < yMin) yMin = y; if (y > yMax) yMax = y;
  }
  const oldH = Math.abs(yMax - yMin);
  const oldW = Math.abs(xMax - xMin);
  const r2 = aran(oldW, oldH);
  let aranW = SIZE, aranH = SIZE;
  if (oldH > oldW) aranW = r2 * SIZE; else aranH = r2 * SIZE;
  const xOffset = (SIZE - aranW) / 2;
  const yOffset = (SIZE - aranH) / 2;

  let m00 = 0, m10 = 0, m01 = 0;
  for (const s of pattern) { m00 += s.length; for (const [x, y] of s) { m10 += x; m01 += y; } }
  const xc = m10 / m00, yc = m01 / m00;
  let mu20 = 0, mu02 = 0;
  for (const s of pattern) for (const [x, y] of s) { mu20 += (x - xc) ** 2; mu02 += (y - yc) ** 2; }
  const alpha = aranW / (4 * Math.sqrt(mu20 / m00)) || 0;
  const beta = aranH / (4 * Math.sqrt(mu02 / m00)) || 0;
  return pattern.map((s) => s.map(([x, y]): Point => [alpha * (x - xc) + aranW / 2 + xOffset, beta * (y - yc) + aranH / 2 + yOffset]));
}

const euclid = (a: Point, b: Point) => Math.hypot(a[0] - b[0], a[1] - b[1]);

/** Resample each stroke to points `interval` apart (KanjiCanvas.extractFeatures). */
export function extractFeatures(pattern: Pattern, interval = 20): Pattern {
  return pattern.map((stroke) => {
    const out: Stroke = [];
    let dist = 0;
    for (let j = 0; j < stroke.length; j++) {
      if (j === 0) out.push(stroke[0]);
      if (j > 0) dist += euclid(stroke[j - 1], stroke[j]);
      if (dist >= interval && j > 1) { dist -= interval; out.push(stroke[j]); }
    }
    if (out.length === 1) out.push(stroke[stroke.length - 1]);
    else if (dist > 0.75 * interval) out.push(stroke[stroke.length - 1]);
    return out;
  });
}

// ── distances ────────────────────────────────────────────────────────────────

type Metric = (a: Stroke | undefined, b: Stroke | undefined) => number;

const endPointDistance: Metric = (p1, p2) => {
  const l1 = p1?.length ?? 0, l2 = p2?.length ?? 0;
  if (l1 === 0 || l2 === 0) return 0;
  return Math.abs(p1![0][0] - p2![0][0]) + Math.abs(p1![0][1] - p2![0][1])
    + Math.abs(p1![l1 - 1][0] - p2![l2 - 1][0]) + Math.abs(p1![l1 - 1][1] - p2![l2 - 1][1]);
};

const initialDistance: Metric = (p1, p2) => {
  const l1 = p1!.length, l2 = p2!.length;
  const lmin = Math.min(l1, l2), lmax = Math.max(l1, l2);
  let dist = 0;
  for (let i = 0; i < lmin; i++) dist += Math.abs(p1![i][0] - p2![i][0]) + Math.abs(p1![i][1] - p2![i][1]);
  return dist * (lmax / lmin);
};

function largerAndSize<T>(p1: T[] | undefined, p2: T[] | undefined): [T[], T[], number, number] {
  const l1 = p1?.length ?? 0, l2 = p2?.length ?? 0;
  return l1 < l2 ? [p2!, p1!, l2, l1] : [p1!, p2!, l1, l2];
}

const wholeWholeDistance: Metric = (p1, p2) => {
  const [k1, k2, n, m] = largerAndSize(p1, p2);
  let dist = 0;
  for (let i = 0; i < m; i++) {
    const j = Math.trunc(Math.trunc(n / m) * i);
    dist += Math.abs(k1[j][0] - k2[i][0]) + Math.abs(k1[j][1] - k2[i][1]);
  }
  return Math.trunc(dist / m);
};

// ── stroke maps ──────────────────────────────────────────────────────────────

function initStrokeMap(p1: Pattern, p2: Pattern, metric: Metric): number[] {
  const [k1, k2, n, m] = largerAndSize(p1, p2);
  const map = new Array<number>(n).fill(-1);
  const free = new Array<boolean>(n).fill(true);
  for (let i = 0; i < m; i++) {
    let minDist = 10_000_000, minJ = -1;
    for (let j = 0; j < n; j++) {
      if (!free[j]) continue;
      const d = metric(k1[j], k2[i]);
      if (d < minDist) { minDist = d; minJ = j; }
    }
    free[minJ] = false;
    map[minJ] = i;
  }
  return map;
}

function getMap(p1: Pattern, p2: Pattern, metric: Metric): number[] {
  const [k1, k2] = largerAndSize(p1, p2);
  const map = initStrokeMap(k1, k2, metric);
  for (let l = 0; l < 3; l++) {
    for (let i = 0; i < map.length; i++) {
      if (map[i] === -1) continue;
      let dii = metric(k1[i], k2[map[i]]);
      for (let j = 0; j < map.length; j++) {
        if (map[i] === -1) continue;
        if (map[j] !== -1) {
          const djj = metric(k1[j], k2[map[j]]);
          const dij = metric(k1[j], k2[map[i]]);
          const dji = metric(k1[i], k2[map[j]]);
          if (dji + dij < dii + djj) {
            const mapj = map[j]; map[j] = map[i]; map[i] = mapj;
            dii = dij;
          }
        } else {
          const dij = metric(k1[j], k2[map[i]]);
          if (dij < dii) { map[j] = map[i]; map[i] = -1; dii = dij; }
        }
      }
    }
  }
  return map;
}

function completeMap(p1: Pattern, p2: Pattern, metric: Metric, map: number[]): number[] {
  const [k1, k2] = largerAndSize(p1, p2);
  if (!map.includes(-1)) return map;
  let lastUnassigned = map.length;
  let mapLastTo = -1;
  for (let i = map.length - 1; i >= 0; i--) {
    if (map[i] === -1) lastUnassigned = i;
    else { mapLastTo = map[i]; break; }
  }
  for (let i = lastUnassigned; i < map.length; i++) map[i] = mapLastTo;
  let firstUnassigned = -1, mapFirstTo = -1;
  for (let i = 0; i < map.length; i++) {
    if (map[i] === -1) firstUnassigned = i;
    else { mapFirstTo = map[i]; break; }
  }
  for (let i = 0; i <= firstUnassigned; i++) map[i] = mapFirstTo;
  for (let i = 0; i < map.length; i++) {
    if (i + 1 < map.length && map[i + 1] === -1) {
      const start = i;
      let stop = i + 1;
      while (stop < map.length && map[stop] === -1) stop++;
      let div = start, maxDist = 1_000_000;
      for (let j = start; j < stop; j++) {
        let ab = k1[start];
        for (let t = start + 1; t <= j; t++) ab = ab.concat(k1[t]);
        let bc = k1[j + 1];
        for (let t = j + 2; t <= stop; t++) bc = bc.concat(k1[t] ?? []);
        const d = metric(ab, k2[map[start]]) + metric(bc, k2[map[stop]]);
        if (d < maxDist) { div = j; maxDist = d; }
      }
      for (let j = start; j <= div; j++) map[j] = map[start];
      for (let j = div + 1; j < stop; j++) map[j] = map[stop];
    }
  }
  return map;
}

function computeDistance(p1: Pattern, p2: Pattern, metric: Metric, map: number[]): number {
  const [k1, k2, n] = largerAndSize(p1, p2);
  let dist = 0, idx = 0;
  while (idx < n) {
    const strokeIdx = k2[map[idx]];
    const start = idx;
    let stop = start + 1;
    while (stop < map.length && map[stop] === map[idx]) stop++;
    let concat = k1[start];
    for (let t = start + 1; t < stop; t++) concat = concat.concat(k1[t]);
    dist += metric(strokeIdx, concat);
    idx = stop;
  }
  return dist;
}

function computeWholeDistanceWeighted(p1: Pattern, p2: Pattern, map: number[]): number {
  const [k1, k2, n] = largerAndSize(p1, p2);
  let dist = 0, idx = 0;
  while (idx < n) {
    const strokeIdx = k2[map[idx]];
    const start = idx;
    let stop = start + 1;
    while (stop < map.length && map[stop] === map[idx]) stop++;
    let concat = k1[start];
    for (let t = start + 1; t < stop; t++) concat = concat.concat(k1[t]);
    let d = wholeWholeDistance(strokeIdx, concat);
    if (stop > start + 1) {
      let mm = strokeIdx?.length ?? 0, nn = concat.length;
      if (nn < mm) [nn, mm] = [mm, nn];
      d *= nn / mm;
    }
    dist += d;
    idx = stop;
  }
  return dist;
}

// ── classification ───────────────────────────────────────────────────────────

export class Recognizer {
  private readonly byChar = new Set<string>();

  constructor(private readonly refs: RefPattern[]) {
    for (const r of refs) this.byChar.add(r[0]);
  }

  static fromFile(file = path.resolve(__dirname, '../../../data/kanji-patterns.json')): Recognizer {
    return new Recognizer(JSON.parse(readFileSync(file, 'utf8')) as RefPattern[]);
  }

  private shapes?: ShapeIndex;
  /** Shape-only rank of `ch` for this drawing (see shape.ts). */
  shapeRank(raw: Pattern, ch: string): number {
    this.shapes ??= new ShapeIndex(this.refs);
    return this.shapes.rank(raw, ch);
  }

  /** Whether this character can be recognised at all. */
  knows(ch: string) { return this.byChar.has(ch); }

  private readonly index = new Map<string, number>();

  /** Fine distance between a drawing and one specific character (no stroke-count filter). */
  distanceTo(raw: Pattern, ch: string): number {
    const strokes = raw.filter((s) => s.length > 0);
    const i = this.refIndex(ch);
    if (strokes.length === 0 || i < 0) return Infinity;
    const input = extractFeatures(momentNormalize(strokes), 20);
    const ref = this.refs[i][2];
    const map = completeMap(ref, input, wholeWholeDistance, getMap(ref, input, initialDistance));
    const d = computeWholeDistanceWeighted(ref, input, map) / Math.min(ref.length, input.length);
    // stroke-count mismatch is common with a mouse (strokes run together), so penalise it only mildly
    return d * (1 + 0.06 * Math.abs(ref.length - input.length));
  }

  private refIndex(ch: string) {
    if (this.index.size === 0) this.refs.forEach((r, i) => this.index.set(r[0], i));
    return this.index.get(ch) ?? -1;
  }

  /** Top candidates for a raw drawn character (any coordinate space), best first. */
  recognize(raw: Pattern, top = 10): string[] {
    return this.recognizeScored(raw, top).map((c) => c.ch);
  }

  /** Like recognize(), with distances (lower = closer). */
  recognizeScored(raw: Pattern, top = 10): Array<{ ch: string; dist: number }> {
    const strokes = raw.filter((s) => s.length > 0);
    if (strokes.length === 0) return [];
    const input = extractFeatures(momentNormalize(strokes), 20);
    const n = input.length;

    // coarse: endpoint distance against every pattern with a similar stroke count
    const coarse: Array<[number, number]> = [];
    for (let i = 0; i < this.refs.length; i++) {
      const [, len, ref] = this.refs[i];
      if (!(n < len + 2 && n > len - 3)) continue;
      const map = completeMap(ref, input, endPointDistance, getMap(ref, input, endPointDistance));
      const dist = computeDistance(ref, input, endPointDistance, map);
      let m = len, nn = ref.length;
      if (nn < m) [nn, m] = [m, nn];
      coarse.push([i, dist * (m / nn)]);
    }
    coarse.sort((a, b) => a[1] - b[1]);

    // fine: whole-stroke distance on the best 100
    const fine: Array<[number, number]> = [];
    for (let c = 0; c < Math.min(coarse.length, 100); c++) {
      const i = coarse[c][0];
      const [, len, ref] = this.refs[i];
      if (!(n < len + 2 && n > len - 3)) continue;
      const map = completeMap(ref, input, wholeWholeDistance, getMap(ref, input, initialDistance));
      const dist = computeWholeDistanceWeighted(ref, input, map) / Math.min(ref.length, n);
      fine.push([i, dist]);
    }
    fine.sort((a, b) => a[1] - b[1]);
    return fine.slice(0, top).map(([i, dist]) => ({ ch: this.refs[i][0], dist }));
  }
}
