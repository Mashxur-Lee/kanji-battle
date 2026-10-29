// The arena kit: ports of the shared parts of the Blender arena scripts (Forest, Swamp, Plains, Castle, World tree).
//   · the painted sky: colour stops by elevation, the sun / moon glow, stars, a Milky Way, painted far ridges,
//     and a separate dome of lit clouds that drifts round — baked into canvases like the scripts bake images
//   · the sun / moon picture, sparkle stars that twinkle
//   · a ground of rings with vertex colours, the slab floor (wedges in three rings, glowing lines and runes)
//   · grass that sways, light shafts and the light "wash", fireflies / embers, far backdrop layers
// Everything is built in Blender coordinates (Z up, metres) inside a group that turns it Y-up; shape keys
// become morph targets and the keyframed animations are functions of the frame (30 fps, like the scripts).

import * as THREE from 'three';

export type C3 = [number, number, number];
export type P3 = [number, number, number];
/** a theme straight from the scripts (linear RGB colours) */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Theme = Record<string, any>;

// ── random, maths ───────────────────────────────────────────────────────────────────────────────────────────
export function rand(seed: number) {
  let s = seed >>> 0 || 1;
  const random = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return {
    random,
    uniform: (a: number, b: number) => a + (b - a) * random(),
    int: (a: number, b: number) => a + Math.floor(random() * (b - a + 1)),
    choice: <T>(xs: readonly T[]) => xs[Math.floor(random() * xs.length) % xs.length],
    gauss: () => { let u = 0; while (u === 0) u = random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * random()); },
  };
}
export type Rand = ReturnType<typeof rand>;
export const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
export const sstep = (a: number, b: number, x: number) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const lerp3 = (a: readonly number[], b: readonly number[], t: number): C3 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
export const mul3 = (a: readonly number[], k: number): C3 => [a[0] * k, a[1] * k, a[2] * k];
export const tone = (x: number, ex: number) => 1 - Math.exp(-x * ex);
export const angdiff = (a: number, b: number) => { let d = (a - b + Math.PI) % (2 * Math.PI); if (d < 0) d += 2 * Math.PI; return d - Math.PI; };
export const rad = (d: number) => (d * Math.PI) / 180;
export function sph(azDeg: number, elDeg: number): P3 {
  const a = rad(azDeg), e = rad(elDeg);
  return [Math.cos(e) * Math.cos(a), Math.cos(e) * Math.sin(a), Math.sin(e)];
}
/** the scripts' np.interp over (position, value) stops */
export function interpStops(stops: ReadonlyArray<readonly [number, readonly number[]]>, x: number): C3 {
  if (x <= stops[0][0]) return [...stops[0][1]] as C3;
  for (let i = 1; i < stops.length; i++) if (x <= stops[i][0]) return lerp3(stops[i - 1][1], stops[i][1], (x - stops[i - 1][0]) / (stops[i][0] - stops[i - 1][0]));
  return [...stops[stops.length - 1][1]] as C3;
}

// ── noise (value noise on a 256×256 table, like the scripts) ───────────────────────────────────────────────
const TAB = (() => { const r = rand(7), t = new Float32Array(65536); for (let i = 0; i < t.length; i++) t[i] = r.random(); return t; })();
export function noise2(x: number, y: number) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const x0 = xi & 255, x1 = (xi + 1) & 255, y0 = (yi & 255) << 8, y1 = ((yi + 1) & 255) << 8;
  const a = TAB[y0 + x0], b = TAB[y0 + x1], c = TAB[y1 + x0], d = TAB[y1 + x1];
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}
const FCA = Math.cos(0.55), FSA = Math.sin(0.55);
export function fbm2(x: number, y: number, octaves = 5, lac = 2.03, gain = 0.5) {
  let s = 0, amp = 1, tot = 0;
  for (let o = 0; o < octaves; o++) {
    s += amp * noise2(x + 17.3 * o, y - 9.1 * o);
    tot += amp;
    const nx = (x * FCA - y * FSA) * lac, ny = (x * FSA + y * FCA) * lac;
    x = nx; y = ny; amp *= gain;
  }
  return s / tot;
}
const RCA = Math.cos(0.7), RSA = Math.sin(0.7);
export function ridged2(x: number, y: number, octaves = 5, lac = 2.1, gain = 0.52) {
  let s = 0, amp = 1, tot = 0, w = 1;
  for (let o = 0; o < octaves; o++) {
    let n = 1 - Math.abs(2 * noise2(x + 31.7 * o, y + 5.3 * o) - 1);
    n = n * n * w;
    s += n * amp; tot += amp;
    w = clamp01(n * 2);
    const nx = (x * RCA - y * RSA) * lac, ny = (x * RSA + y * RCA) * lac;
    x = nx; y = ny; amp *= gain;
  }
  return s / tot;
}
const T1 = new Map<string, Float32Array>();
function tnoise1(t: number, n: number, seed: number) {
  const key = `${n}:${seed}`;
  let v = T1.get(key);
  if (!v) { const r = rand(seed * 977 + n); v = new Float32Array(n); for (let i = 0; i < n; i++) v[i] = r.random(); T1.set(key, v); }
  const x = t * n, i = Math.floor(x), f = x - i, s = f * f * (3 - 2 * f);
  return v[((i % n) + n) % n] * (1 - s) + v[(((i + 1) % n) + n) % n] * s;
}
/** a looping 1-D fbm (t in 0..1 wraps round): the painted ridges */
export function tfbm1(t: number, octaves = 5, base = 3, seed = 1, gain = 0.5) {
  let s = 0, a = 1, tot = 0;
  for (let o = 0; o < octaves; o++) { s += a * tnoise1(t, base * 2 ** o, seed + o); tot += a; a *= gain; }
  return s / tot;
}

// ── the painted sky ────────────────────────────────────────────────────────────────────────────────────────
export interface SkyOpts {
  /** directions of the sun / moon (one, or two in TWIN mode) */
  bodies: P3[];
  /** azimuths (deg) where the ridges dip, so the sun / moon sits in a valley */
  notchAz: number[];
  /** painted far ridges: [base height, amplitude, seed, haze, colour] */
  ridges?: Array<[number, number, number, number, C3]>;
  /** the colour under the horizon */
  below?: C3;
  /** 'trees': a low, bumpy painted tree line instead of mountain ridges (the swamp) */
  ridgeKind?: 'mountains' | 'trees';
}
export function skyFn(th: Theme, bodies: P3[]) {
  const stops: Array<[number, C3]> = th.stops;
  return (dx: number, dy: number, dz: number): C3 => {
    const eg = (Math.asin(Math.max(-1, Math.min(1, dz))) * 180) / Math.PI;
    const col = interpStops(stops, eg);
    const hw = th.hw0 + (1 - th.hw0) * Math.exp(-Math.max(eg, 0) / 22);
    for (const b of bodies) {
      const g = Math.acos(Math.max(-1, Math.min(1, dx * b[0] + dy * b[1] + dz * b[2])));
      for (const [scale, inten, c] of th.glow as Array<[number, number, C3]>) {
        const k = Math.exp(-g / scale) * inten * hw;
        col[0] += k * c[0]; col[1] += k * c[1]; col[2] += k * c[2];
      }
      if (th.anti > 0) {
        const ga = Math.acos(Math.max(-1, Math.min(1, -dx * b[0] - dy * b[1] + dz * b[2])));
        const k = Math.exp(-ga / 0.9) * Math.exp(-Math.max(eg, 0) / 9) * th.anti;
        col[0] += k * th.anti_col[0]; col[1] += k * th.anti_col[1]; col[2] += k * th.anti_col[2];
      }
    }
    return col;
  };
}
const toByte = (x: number, ex: number) => Math.round(255 * Math.pow(clamp01(tone(x, ex)), 1 / 2.2));

function makeCanvas(W: number, H: number) {
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d')!;
  return { c, g, img: g.createImageData(W, H) };
}
function finishTex(c: HTMLCanvasElement, clamp = false) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (clamp) { t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; } else { t.wrapS = THREE.RepeatWrapping; }
  t.anisotropy = 2;
  return t;
}

/** The sky dome picture (equirectangular: u = azimuth, v = elevation), like bake_sky(). */
export function paintSky(th: Theme, W: number, o: SkyOpts) {
  const H = W / 2;
  const { c, g, img } = makeCanvas(W, H);
  const sky = skyFn(th, o.bodies);
  const ex = th.exposure ?? 1;
  const px = Math.PI / H;
  const ridges = o.ridges ?? [[0.03, 0.095, 31, 0.5, th.far1], [0.01, 0.055, 47, 0.25, th.far2]];
  const below: C3 = o.below ?? mul3(th.far2, 0.8);
  // per column: the haze colour at the horizon and the ridge heights
  const haze: C3[] = [], hgt: number[][] = ridges.map(() => []);
  for (let x = 0; x < W; x++) {
    const u = (x + 0.5) / W, az = u * 2 * Math.PI;
    haze.push(sky(Math.cos(az) * Math.cos(0.012), Math.sin(az) * Math.cos(0.012), Math.sin(0.012)));
    let notch = 1;
    for (const a0 of o.notchAz) { const dl = Math.abs(angdiff(az, rad(a0))); notch *= 1 - 0.85 * Math.exp(-((dl / rad(20)) ** 2)); }
    ridges.forEach(([b0, amp, seed], i) => {
      if (o.ridgeKind === 'trees') { hgt[i].push(b0 + amp * tfbm1(u, 6, 18, seed, 0.62) ** 1.5); return; }
      const rid = 1 - Math.abs(2 * tfbm1(u, 7, 4, seed, 0.56) - 1); hgt[i].push((b0 + amp * rid ** 1.3) * (0.35 + 0.65 * notch));
    });
  }
  const mtn = new Float32Array(W * H), lum = new Float32Array(W * H);
  // Milky Way (night): a band of dusty light
  let ng: P3 | null = null, e1: P3 = [0, 0, 0], e2: P3 = [0, 0, 0];
  if ((th.milky ?? 0) > 0) {
    const n = new THREE.Vector3(0.25, -0.55, 0.8).normalize(), a = n.clone().cross(new THREE.Vector3(0, 0, 1)).normalize(), b = n.clone().cross(a);
    ng = [n.x, n.y, n.z]; e1 = [a.x, a.y, a.z]; e2 = [b.x, b.y, b.z];
  }
  for (let row = 0; row < H; row++) {
    const el = ((row + 0.5) / H - 0.5) * Math.PI, ce = Math.cos(el), se = Math.sin(el);
    const y = H - 1 - row;
    for (let x = 0; x < W; x++) {
      const az = ((x + 0.5) / W) * 2 * Math.PI, dx = ce * Math.cos(az), dy = ce * Math.sin(az), dz = se;
      let col = sky(dx, dy, dz);
      if (ng && el > 0) {
        const lat = Math.asin(Math.max(-1, Math.min(1, dx * ng[0] + dy * ng[1] + dz * ng[2])));
        const lon = Math.atan2(dx * e2[0] + dy * e2[1] + dz * e2[2], dx * e1[0] + dy * e1[1] + dz * e1[2]);
        const gx = 3 * Math.cos(lon), gy = 3 * Math.sin(lon);
        const st = fbm2(gx + 9 * lat, gy + 4 * lat, 4);
        const dust = sstep(0.5, 0.75, fbm2(gx * 1.7 + 17 + 14 * lat, gy * 1.7 - 5 + 6 * lat, 3));
        const mw = Math.exp(-((lat / (th.milky_w ?? 0.2)) ** 2)) * (0.25 + 1.3 * st) * (1 - 0.65 * dust) * th.milky, mc = th.milky_col ?? [0.55, 0.58, 0.85];
        col = [col[0] + mw * mc[0], col[1] + mw * mc[1], col[2] + mw * mc[2]];
      }
      let m = 0;
      ridges.forEach(([, , , hz, cc], i) => {
        const mm = clamp01((hgt[i][x] - el) / px + 0.5);
        if (mm <= 0) return;
        const h = haze[x];
        const cb = lerp3(cc, h, hz);
        const ch = lerp3(cb, h, Math.exp(-Math.max(el, 0) / 0.025) * 0.55);
        col = lerp3(col, ch, mm);
        m = Math.max(m, mm);
      });
      const bl = clamp01(-el / px + 0.5);
      if (bl > 0) col = lerp3(col, below, bl);
      const i = (y * W + x) * 4;
      img.data[i] = toByte(col[0], ex); img.data[i + 1] = toByte(col[1], ex); img.data[i + 2] = toByte(col[2], ex); img.data[i + 3] = 255;
      mtn[y * W + x] = m; lum[y * W + x] = (img.data[i] + img.data[i + 1] + img.data[i + 2]) / 765;
    }
  }
  const stars = (th.stars ?? 0) > 0 ? starList(W, H, th.star_n, th.stars, mtn, lum) : null;
  g.putImageData(img, 0, 0);
  return { tex: finishTex(c), stars };
}
/** the painted star field, as points (crisp at any screen size): position on the dome, colour */
function starList(W: number, H: number, n: number, vis: number, mtn: Float32Array, lum: Float32Array) {
  const r = rand(5);
  const tints: C3[] = [[0.8, 0.86, 1], [1, 0.96, 0.86], [1, 0.8, 0.7], [0.9, 0.9, 1]];
  const pos: number[] = [], col: number[] = [], size: number[] = [];
  for (let k = 0; k < n; k++) {
    const z = r.uniform(0.04, 1), az = r.uniform(0, 2 * Math.PI), el = Math.asin(z);
    const xi = Math.floor((az / (2 * Math.PI)) * W) % W, yi = Math.min(H - 1, Math.floor((el / Math.PI + 0.5) * H)), cy = H - 1 - yi;
    const f = (1 - mtn[cy * W + xi]) * clamp01(1 - lum[cy * W + xi] * 3);
    const mag = r.random() ** 6, tint = tints[r.int(0, 3)];
    if (f <= 0.01) continue;
    const inten = Math.min(1.6, (0.1 + 0.95 * mag) * vis * f * 2.2);
    const R = 140;
    pos.push(R * Math.cos(el) * Math.cos(az), R * Math.cos(el) * Math.sin(az), R * Math.sin(el));
    col.push(tint[0] * inten, tint[1] * inten, tint[2] * inten);
    size.push(1 + mag * 2.5);
  }
  return { pos, col, size };
}
/** The cloud dome picture, lit from the sun / moon (bake_clouds()). */
export function paintClouds(th: Theme, W: number, body: P3) {
  const H = W / 2;
  const { c, g, img } = makeCanvas(W, H);
  const ex = th.exposure ?? 1, cmax = th.cloud_max ?? 99;
  const hs = Math.max(1e-3, Math.hypot(body[0], body[1])), sx = body[0] / hs * 0.22, sy = body[1] / hs * 0.22;
  for (let row = 0; row < H; row++) {
    const el = ((row + 0.5) / H - 0.5) * Math.PI;
    const y = H - 1 - row;
    if (el < 0.02) continue; // transparent below
    const ce = Math.cos(el), up = Math.sin(el), k = 1 / (up + 0.16);
    const fade = cmax < 50 ? sstep(0.02, 0.1, el) * (1 - sstep(cmax * 0.6, cmax, el)) : sstep(0.02, 0.16, el);
    if (fade <= 0) continue;
    for (let x = 0; x < W; x++) {
      const az = ((x + 0.5) / W) * 2 * Math.PI, dx = ce * Math.cos(az), dy = ce * Math.sin(az);
      const px = dx * k * th.cloud_scale, py = dy * k * th.cloud_scale;
      const wx = fbm2(px * 0.6 + 9, py * 0.6 + 2, 3) - 0.5;
      const qx = px + wx * 1.4, qy = py + wx * 1.1;
      const t = fbm2(qx, qy, 5);
      const dens = sstep(th.cov0, th.cov1, t);
      if (dens <= 0.002) continue;
      const t2 = fbm2(qx + sx, qy + sy, 5);
      const lit = clamp01(0.55 - (t2 - t) * 3.4) * (1 - 0.4 * dens);
      const prox = Math.exp(-Math.acos(Math.max(-1, Math.min(1, dx * body[0] + dy * body[1] + up * body[2]))) / 1.1);
      const litC = lerp3(th.cloud_lit_far, th.cloud_lit_near, prox), sh = mul3(th.cloud_shadow, 0.6 + 0.4 * prox);
      const col = lerp3(sh, litC, lit), rim = dens * (1 - dens) * 4 * prox * 0.6;
      const i = (y * W + x) * 4;
      img.data[i] = toByte(col[0] + rim * th.cloud_rim[0], ex); img.data[i + 1] = toByte(col[1] + rim * th.cloud_rim[1], ex); img.data[i + 2] = toByte(col[2] + rim * th.cloud_rim[2], ex);
      img.data[i + 3] = Math.round(255 * dens * fade * th.cloud_opacity);
    }
  }
  g.putImageData(img, 0, 0);
  return finishTex(c);
}
export interface BodyOpts { span?: number; tint?: C3; halo?: C3; rings?: Array<[number, number]>; sunInner?: C3; sunHalo?: number; moonGain?: number }
/** The sun (a glowing disc) or the moon (a cratered disc), with halo rings (body_image()). */
export function paintBody(kind: 'sun' | 'moon', size: number, o: BodyOpts = {}) {
  const span = o.span ?? 1.4;
  const { c, g, img } = makeCanvas(size, size);
  const tint = o.tint ?? (kind === 'sun' ? [1, 0.97, 0.88] : [0.96, 0.98, 1.05]);
  const halo = o.halo ?? (kind === 'sun' ? [1, 0.7, 0.3] : [0.5, 0.62, 1]);
  const L: P3 = [Math.sin(0.45), 0.15, Math.cos(0.45)];
  for (let yy = 0; yy < size; yy++) for (let xx = 0; xx < size; xx++) {
    const X = ((xx + 0.5) / size * 2 - 1) * span, Y = -((yy + 0.5) / size * 2 - 1) * span;
    const r = Math.hypot(X, Y);
    const disc = clamp01((1 - r) / ((span * 2) / size) + 0.5), mu = Math.sqrt(clamp01(1 - r * r));
    let ha = 0;
    for (const [rr, aa] of o.rings ?? []) ha = Math.max(ha, aa * (1 - sstep(rr - 0.1, rr, r)));
    let d: C3;
    if (kind === 'sun') {
      d = lerp3(o.sunInner ?? [1, 0.62, 0.25], tint, Math.pow(mu, 0.5));
      ha = Math.max(ha, (o.sunHalo ?? 0.55) * Math.exp(-Math.max(r - 1, 0) / 0.12));
    } else {
      const lam = clamp01(X * L[0] + Y * L[1] + mu * L[2]);
      const maria = sstep(0.5, 0.6, fbm2(X * 1.9 + 4, Y * 1.9 - 2, 5)) * 0.42, crat = sstep(0.62, 0.8, noise2(X * 14, Y * 14)) * 0.12;
      const shade = (0.04 + lam ** 0.8) * (0.6 + 0.4 * mu) * (0.9 - maria - crat) * (o.moonGain ?? 1.55);
      d = mul3(tint, shade);
      ha = Math.max(ha, (o.rings ? 0 : 0.3) * Math.exp(-Math.max(r - 1, 0) / 0.2));
    }
    ha *= 1 - sstep(span * 0.86, span, r);
    const a = disc + (1 - disc) * ha;
    const col = a > 1e-4 ? [0, 1, 2].map((k) => (disc * d[k] + (1 - disc) * ha * halo[k]) / a) : [0, 0, 0];
    const i = (yy * size + xx) * 4;
    img.data[i] = Math.round(255 * Math.pow(clamp01(col[0]), 1 / 2.2)); img.data[i + 1] = Math.round(255 * Math.pow(clamp01(col[1]), 1 / 2.2)); img.data[i + 2] = Math.round(255 * Math.pow(clamp01(col[2]), 1 / 2.2));
    img.data[i + 3] = Math.round(255 * clamp01(a));
  }
  g.putImageData(img, 0, 0);
  return finishTex(c, true);
}

// ── mesh building with vertex colours (and shape keys → morph targets) ─────────────────────────────────────
export class MB {
  pos: number[] = []; col: number[] = []; idx: number[] = [];
  morph: number[][] = [];
  constructor(readonly alpha = false, nMorph = 0) { for (let i = 0; i < nMorph; i++) this.morph.push([]); }
  get count() { return this.pos.length / 3; }
  v(p: readonly number[], c: readonly number[], deltas?: ReadonlyArray<readonly number[]>) {
    this.pos.push(p[0], p[1], p[2]);
    if (this.alpha) this.col.push(c[0], c[1], c[2], c[3] ?? 1); else this.col.push(c[0], c[1], c[2]);
    this.morph.forEach((m, k) => { const d = deltas?.[k]; m.push(d ? d[0] : 0, d ? d[1] : 0, d ? d[2] : 0); });
    return this.count - 1;
  }
  /** a polygon (fan) */
  f(...vs: number[]) { for (let i = 1; i < vs.length - 1; i++) this.idx.push(vs[0], vs[i], vs[i + 1]); }
  geo() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, this.alpha ? 4 : 3));
    g.setIndex(this.idx);
    if (this.morph.length) { g.morphAttributes.position = this.morph.map((m) => new THREE.Float32BufferAttribute(m, 3)); g.morphTargetsRelative = true; }
    g.computeVertexNormals();
    g.computeBoundingSphere();
    return g;
  }
}

// ── materials ──────────────────────────────────────────────────────────────────────────────────────────────
/** vertex-coloured, lit; `emit` adds the vertex colour as glow (the scripts' vc_mat(emit=…)) */
export function vcMat(o: { emit?: number; flat?: boolean; double?: boolean; morph?: boolean } = {}) {
  const m = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: o.flat ?? true, side: o.double ? THREE.DoubleSide : THREE.FrontSide });
  const emit = o.emit ?? 0;
  if (emit > 0) {
    m.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>\n totalEmissiveRadiance += vColor.rgb * ${emit.toFixed(3)};`); };
    m.customProgramCacheKey = () => `vcemit${emit}`;
  }
  return m;
}
/** unlit, vertex-coloured: things that glow by themselves (backdrops, flames, windows) */
export const glowMat = (o: { alpha?: boolean; additive?: boolean; gain?: number; fog?: boolean; toneMapped?: boolean } = {}) => {
  const m = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, transparent: !!o.alpha, depthWrite: !o.alpha, blending: o.additive ? THREE.AdditiveBlending : THREE.NormalBlending, fog: o.fog ?? true, toneMapped: o.toneMapped ?? false });
  if (o.gain && o.gain !== 1) m.color.setScalar(o.gain);
  return m;
};
/** a flat emissive colour (lines, runes, eyes, windows) */
export const emitMat = (c: readonly number[], k = 1) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c[0] * k, c[1] * k, c[2] * k), side: THREE.DoubleSide, toneMapped: false });

// ── the sky rig: dome, clouds, sun / moon, sparkle stars ───────────────────────────────────────────────────
function domeGeo(radius: number, segs: number, rings: number) {
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let i = 0; i <= rings; i++) {
    const el = (Math.PI * i) / rings - Math.PI / 2;
    for (let j = 0; j <= segs; j++) {
      const az = (2 * Math.PI * j) / segs;
      pos.push(radius * Math.cos(el) * Math.cos(az), radius * Math.cos(el) * Math.sin(az), radius * Math.sin(el));
      uv.push(j / segs, i / rings);
    }
  }
  for (let i = 0; i < rings; i++) for (let j = 0; j < segs; j++) {
    const a = i * (segs + 1) + j, b = a + segs + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}
const skyMat = (map: THREE.Texture, alpha = false) => new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide, fog: false, toneMapped: false, depthWrite: false, transparent: alpha });
function sparkleGeo(L: number, w: number) {
  const mb = new MB();
  const one = (L: number, w: number, rot: number, z: number) => {
    const c = Math.cos(rot), s = Math.sin(rot), ring: number[] = [];
    for (const [tx, ty, ix, iy] of [[L, 0, w, w], [0, L, -w, w], [-L, 0, -w, -w], [0, -L, w, -w]]) {
      ring.push(mb.v([tx * c - ty * s, tx * s + ty * c, z], [1, 1, 1]));
      ring.push(mb.v([ix * c - iy * s, ix * s + iy * c, z], [1, 1, 1]));
    }
    const ctr = mb.v([0, 0, z], [1, 1, 1]);
    for (let i = 0; i < 8; i++) mb.f(ctr, ring[i], ring[(i + 1) % 8]);
  };
  one(L, w, 0, 0); one(L * 0.55, w * 0.9, Math.PI / 4, 0.002);
  return mb.geo();
}
export interface SkyRig { group: THREE.Group; update(f: number): void; dispose(): void; /** the sky as a reflection map (water) */ envMap(): THREE.Texture }
export interface SkyRigOpts {
  th: Theme; W: number; bodies: P3[]; body: { kind: 'sun' | 'moon'; r: number; span?: number; opts?: BodyOpts; size?: number };
  sparkles: number; bigShare?: number; sparkleSize?: { big: [number, number]; small: [number, number]; el?: [number, number] }; ridges?: SkyOpts['ridges']; ridgeKind?: SkyOpts['ridgeKind']; below?: C3; seed?: number; clouds?: boolean;
}
export function skyRig(o: SkyRigOpts): SkyRig {
  const group = new THREE.Group();
  const disposables: Array<{ dispose(): void }> = [];
  const painted = paintSky(o.th, o.W, { bodies: o.bodies, notchAz: [o.th.body_az, o.th.body_az + 180], ridges: o.ridges, below: o.below, ridgeKind: o.ridgeKind });
  const skyTex = painted.tex;
  const dome = new THREE.Mesh(domeGeo(150, 48, 24), skyMat(skyTex));
  dome.renderOrder = -10; dome.frustumCulled = false;
  group.add(dome);
  disposables.push(skyTex, dome.geometry, dome.material as THREE.Material);
  if (painted.stars && painted.stars.pos.length) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(painted.stars.pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(painted.stars.col, 3));
    g.setAttribute('size', new THREE.Float32BufferAttribute(painted.stars.size, 1));
    const m = new THREE.ShaderMaterial({
      vertexShader: 'attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }',
      fragmentShader: 'varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }',
      vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const pts = new THREE.Points(g, m); pts.renderOrder = -9.5; pts.frustumCulled = false;
    group.add(pts); disposables.push(g, m);
  }
  let clouds: THREE.Mesh | null = null;
  if (o.clouds !== false) {
    const cloudTex = paintClouds(o.th, Math.min(1024, o.W), o.bodies[0]);
    clouds = new THREE.Mesh(domeGeo(138, 48, 24), skyMat(cloudTex, true));
    clouds.renderOrder = -9; clouds.frustumCulled = false;
    group.add(clouds);
    disposables.push(cloudTex, clouds.geometry, clouds.material as THREE.Material);
  }
  // the sun / moon: a picture on a quad facing the centre
  const span = o.body.span ?? 1.4;
  const bodyTex = paintBody(o.body.kind, o.body.size ?? 256, { span, ...o.body.opts });
  const bodyMat = skyMat(bodyTex, true);
  disposables.push(bodyTex, bodyMat);
  for (const d of o.bodies) {
    const R = 146, half = R * Math.tan(o.body.r) * span;
    const dv = new THREE.Vector3(...d);
    let right = dv.clone().cross(new THREE.Vector3(0, 0, 1));
    if (right.lengthSq() < 1e-8) right = new THREE.Vector3(1, 0, 0);
    right.normalize();
    const up = right.clone().cross(dv).normalize(), c = dv.clone().multiplyScalar(R);
    const g = new THREE.BufferGeometry();
    const corners = [c.clone().addScaledVector(right, -half).addScaledVector(up, -half), c.clone().addScaledVector(right, half).addScaledVector(up, -half), c.clone().addScaledVector(right, half).addScaledVector(up, half), c.clone().addScaledVector(right, -half).addScaledVector(up, half)];
    g.setAttribute('position', new THREE.Float32BufferAttribute(corners.flatMap((p) => [p.x, p.y, p.z]), 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2));
    g.setIndex([0, 1, 2, 0, 2, 3]);
    const q = new THREE.Mesh(g, bodyMat); q.renderOrder = -8; q.frustumCulled = false;
    group.add(q); disposables.push(g);
  }
  // sparkle stars that twinkle
  const r = rand(o.seed ?? 21);
  const stars: Array<{ m: THREE.Mesh; big: boolean; pulses: number[] }> = [];
  const nbig = Math.round(o.sparkles * (o.bigShare ?? 0.27));
  const bigM = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.8, 0.9, 1).multiplyScalar(1.6), fog: false, toneMapped: false, side: THREE.DoubleSide });
  const smM = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.65, 0.8, 1).multiplyScalar(1.3), fog: false, toneMapped: false, side: THREE.DoubleSide });
  const ss = o.sparkleSize ?? { big: [2.4 * 1.35, 0.42 * 1.35], small: [1.35, 0.16 * 1.35] };
  const bigG = sparkleGeo(...ss.big), smG = sparkleGeo(...ss.small);
  disposables.push(bigM, smM, bigG, smG);
  for (let i = 0; i < o.sparkles; i++) {
    const big = i < nbig;
    let az = r.uniform(0, 360);
    const el = r.uniform(...(ss.el ?? [35, 88]));
    const d = sph(az, el);
    if (o.bodies.concat([sph(o.th.body_az + 180, o.th.body_el)]).some((b) => d[0] * b[0] + d[1] * b[1] + d[2] * b[2] > Math.cos(rad(24)))) az += 45;
    const p = sph(az, el).map((v) => v * 135) as P3;
    const m = new THREE.Mesh(big ? bigG : smG, big ? bigM : smM);
    m.position.set(...p);
    m.lookAt(0, 0, 0);
    m.renderOrder = -7;
    group.add(m);
    const pulses = big ? 24 : 12;
    stars.push({ m, big, pulses: Array.from({ length: pulses }, (_, k) => Math.round(((k + 0.5) * 3600) / pulses + r.int(-15, 15))) });
  }
  let env: THREE.Texture | null = null;
  return {
    group,
    envMap() {
      if (env) return env;
      // three.js reads equirectangular maps Y-up with the azimuth running the other way: mirror the picture
      const img = skyTex.image as HTMLCanvasElement, c = document.createElement('canvas');
      c.width = img.width; c.height = img.height;
      const g = c.getContext('2d')!;
      g.translate(c.width * 0.5, 0); g.scale(-1, 1); g.drawImage(img, 0, 0); g.drawImage(img, -img.width, 0); // C(u) = sky(0.5 − u)
      env = new THREE.CanvasTexture(c); env.colorSpace = THREE.SRGBColorSpace; env.mapping = THREE.EquirectangularReflectionMapping;
      disposables.push(env);
      return env;
    },
    update(f) {
      if (clouds) clouds.rotation.z = ((f % 3600) / 3600) * Math.PI * 2; // the clouds drift one full turn per loop
      const ff = f % 3600;
      for (const s of stars) {
        let sc = 1;
        for (const c of s.pulses) {
          if (ff < c - 18 || ff > c + 14) continue;
          const keys: Array<[number, number]> = [[c - 18, 1], [c - 9, s.big ? 1.35 : 1.2], [c, s.big ? 0.2 : 0.35], [c + 14, 1]];
          for (let k = 0; k < 3; k++) if (ff >= keys[k][0] && ff <= keys[k + 1][0]) { const t = (ff - keys[k][0]) / (keys[k + 1][0] - keys[k][0]); sc = lerp(keys[k][1], keys[k + 1][1], t * t * (3 - 2 * t)); }
        }
        s.m.scale.setScalar(sc);
      }
    },
    dispose() { for (const d of disposables) d.dispose(); },
  };
}

// ── keyframe helpers ───────────────────────────────────────────────────────────────────────────────────────
/** a value that eases between `a` and `b` every `half` frames (the scripts' alternating keyframes) */
export function pingpong(f: number, half: number, a = 0, b = 1, flip = 0) {
  const n = Math.floor(f / half), t = (f - n * half) / half, e = t * t * (3 - 2 * t);
  const from = (n + flip) % 2 ? b : a, to = (n + flip) % 2 ? a : b;
  return lerp(from, to, e);
}
/** 0 → 1 → 0 over the loop (fireflies and embers drifting out and back) */
export const drift = (f: number, end = 3600) => { const t = ((f % end) + end) % end / end; return 0.5 - 0.5 * Math.cos(t * 2 * Math.PI); };

// ── shared builders ─────────────────────────────────────────────────────────────────────────────────────────
/** ground of rings round the centre, heights from gh() and colours from colour() */
export function ground(rings: readonly number[], seg: number, gh: (x: number, y: number) => number, color: (x: number, y: number) => readonly number[]) {
  const mb = new MB();
  const grid: number[][] = [];
  for (const r of rings) {
    if (r === 0) { const v = mb.v([0, 0, gh(0, 0)], color(0, 0)); grid.push(Array(seg).fill(v)); continue; }
    const row: number[] = [];
    for (let s = 0; s < seg; s++) { const a = (2 * Math.PI * s) / seg, x = r * Math.cos(a), y = r * Math.sin(a); row.push(mb.v([x, y, gh(x, y)], color(x, y))); }
    grid.push(row);
  }
  for (let ri = 1; ri < rings.length; ri++) for (let s = 0; s < seg; s++) {
    const s2 = (s + 1) % seg;
    if (ri === 1) mb.f(grid[0][0], grid[1][s], grid[1][s2]);
    else mb.f(grid[ri][s], grid[ri][s2], grid[ri - 1][s2], grid[ri - 1][s]);
  }
  return mb.geo();
}
export function stoneColor(base: readonly number[], t: number, n: number, moss: readonly number[], p = 0): C3 {
  const ao = 0.6 + 0.4 * clamp01(t) ** 0.7;
  const c = mul3(base, ao * (0.88 + 0.24 * n));
  return lerp3(c, moss, clamp01(clamp01(1 - t * 3) * 0.55 + p * 0.75));
}
export function stoneAt(base: readonly number[], t: number, x: number, y: number, seed: number, moss: readonly number[], patchy = true): C3 {
  const n = noise2(x * 2.5 + seed, y * 2.5 + seed);
  const p = patchy ? clamp01((noise2(x * 0.7 + seed, y * 0.7 - seed) - 0.5) * 2.5) : 0;
  return stoneColor(base, t, n, moss, p);
}
/** a capped cylinder (cyl()) into a builder */
export function cyl(mb: MB, r: number, z0: number, h: number, seg: number, color: (p: P3, t: number) => readonly number[], at: P3 = [0, 0, 0], r2 = r) {
  const bot: number[] = [], top: number[] = [];
  const cb = mb.v([at[0], at[1], at[2] + z0], color([at[0], at[1], z0], 0)), ct = mb.v([at[0], at[1], at[2] + z0 + h], color([at[0], at[1], z0 + h], 1));
  for (let s = 0; s < seg; s++) {
    const a = (2 * Math.PI * s) / seg;
    const pb: P3 = [at[0] + r * Math.cos(a), at[1] + r * Math.sin(a), at[2] + z0], pt: P3 = [at[0] + r2 * Math.cos(a), at[1] + r2 * Math.sin(a), at[2] + z0 + h];
    bot.push(mb.v(pb, color(pb, 0))); top.push(mb.v(pt, color(pt, 1)));
  }
  // separate rim verts for the sides, so they shade apart from the caps
  const sb: number[] = [], st: number[] = [];
  for (let s = 0; s < seg; s++) { sb.push(mb.v(mb.pos.slice(bot[s] * 3, bot[s] * 3 + 3), mb.col.slice(bot[s] * 3, bot[s] * 3 + 3))); st.push(mb.v(mb.pos.slice(top[s] * 3, top[s] * 3 + 3), mb.col.slice(top[s] * 3, top[s] * 3 + 3))); }
  for (let s = 0; s < seg; s++) {
    const s2 = (s + 1) % seg;
    mb.f(cb, bot[s2], bot[s]); mb.f(ct, top[s], top[s2]);
    mb.f(sb[s], sb[s2], st[s2], st[s]);
  }
}
/** a wedge of the slab floor (a ring sector with a gap round it) */
export function wedge(mb: MB, r0: number, r1: number, a0: number, a1: number, z0: number, h: number, color: (p: P3, t: number) => readonly number[], steps = 3, gap = 0.12) {
  const da = gap / ((r0 + r1) / 2);
  a0 += da / 2; a1 -= da / 2; r0 += gap / 2; r1 -= gap / 2;
  const P = (r: number, a: number, z: number): P3 => [r * Math.cos(a), r * Math.sin(a), z];
  const V = (p: P3) => mb.v(p, color(p, (p[2] - z0) / h));
  const quad = (a: P3, b: P3, c: P3, d: P3) => mb.f(V(a), V(b), V(c), V(d));
  for (let k = 0; k < steps; k++) {
    const aa = a0 + ((a1 - a0) * k) / steps, ab = a0 + ((a1 - a0) * (k + 1)) / steps;
    quad(P(r0, aa, z0 + h), P(r1, aa, z0 + h), P(r1, ab, z0 + h), P(r0, ab, z0 + h)); // top
    quad(P(r1, aa, z0 + h), P(r1, aa, z0), P(r1, ab, z0), P(r1, ab, z0 + h)); // outer side
    quad(P(r0, ab, z0 + h), P(r0, ab, z0), P(r0, aa, z0), P(r0, aa, z0 + h)); // inner side
  }
  quad(P(r0, a0, z0 + h), P(r0, a0, z0), P(r1, a0, z0), P(r1, a0, z0 + h));
  quad(P(r1, a1, z0 + h), P(r1, a1, z0), P(r0, a1, z0), P(r0, a1, z0 + h));
}
/** a flat ribbon along a 2-D polyline (glowing lines, runes) */
export function strip(mb: MB, pts: ReadonlyArray<readonly [number, number]>, w: number, z: number, c: readonly number[] = [1, 1, 1]) {
  const L: number[] = [], R: number[] = [];
  pts.forEach((p, i) => {
    const a = pts[Math.max(i - 1, 0)], b = pts[Math.min(i + 1, pts.length - 1)];
    const tx = b[0] - a[0], ty = b[1] - a[1], l = Math.hypot(tx, ty) || 1, nx = -ty / l, ny = tx / l;
    L.push(mb.v([p[0] + (nx * w) / 2, p[1] + (ny * w) / 2, z], c)); R.push(mb.v([p[0] - (nx * w) / 2, p[1] - (ny * w) / 2, z], c));
  });
  for (let i = 0; i < pts.length - 1; i++) mb.f(L[i], R[i], R[i + 1], L[i + 1]);
}
export const circlePts = (r: number, n = 40): Array<[number, number]> => Array.from({ length: n + 1 }, (_, k) => [r * Math.cos((2 * Math.PI * k) / n), r * Math.sin((2 * Math.PI * k) / n)]);
function glyphPolys(kind: number): Array<Array<[number, number]>> {
  if (kind === 0) {
    const up: Array<[number, number]> = [], lo: Array<[number, number]> = [];
    for (let a = 20; a <= 270; a += 15) up.push([0.4 * Math.cos(rad(a)), 0.4 + 0.4 * Math.sin(rad(a))]);
    for (let a = 90; a >= -160; a -= 15) lo.push([0.4 * Math.cos(rad(a)), -0.4 + 0.4 * Math.sin(rad(a))]);
    return [[...up, ...lo]];
  }
  if (kind === 1) return [circlePts(0.45, 20), [[0, -0.8], [0, 0.8]]];
  return [[[0, 0.6], [-0.55, -0.4], [0.55, -0.4], [0, 0.6]], circlePts(0.5, 12).map(([x, y]) => [(0.1 * x) / 0.5, -0.05 + (0.1 * y) / 0.5] as [number, number])];
}
export function placeGlyph(mb: MB, kind: number, phi: number, rg: number, sc: number, z: number, w: number) {
  const rot = phi + Math.PI / 2, cr = Math.cos(rot), sr = Math.sin(rot), cx = rg * Math.cos(phi), cy = rg * Math.sin(phi);
  for (const poly of glyphPolys(kind)) strip(mb, poly.map(([x, y]) => [cx + sc * (x * cr - y * sr), cy + sc * (x * sr + y * cr)] as [number, number]), w, z);
}
/** the slab arena shared by most arenas: glow base, rim, centre slab, 36 wedges, lines and runes */
export function slabArena(o: { th: Theme; r: Rand; z0: number; h: number; rimZ0: number; rimH: number; glowZ0: number; glowH: number; ztop?: number; lineCol: readonly number[]; runeCol: readonly number[]; glowCol: readonly number[]; glow: number; patchy?: boolean; bake?: (p: P3) => readonly number[] }) {
  const { th, r } = o;
  const stones: C3[] = th.stone;
  const stone = new MB();
  const tint = (c: C3, p: P3) => { if (!o.bake || p[2] < 0.2) return c; const b = o.bake(p); return [c[0] + b[0], c[1] + b[1], c[2] + b[2]] as C3; };
  const seeded = (base: readonly number[]) => { const seed = r.uniform(0, 50); return (p: P3, t: number) => tint(stoneAt(base, t, p[0], p[1], seed, th.moss, o.patchy ?? true), p); };
  cyl(stone, 9.9, o.rimZ0, o.rimH, 48, seeded(th.rim_stone));
  cyl(stone, 2.44, o.z0, o.h + 0.02, 32, seeded(stones[1]));
  ([[2.5, 4.9, 8], [4.9, 7.3, 12], [7.3, 9.2, 16]] as const).forEach(([r0, r1, cnt], ri) => {
    const off = ri * 0.23;
    for (let i = 0; i < cnt; i++) wedge(stone, r0, r1, off + (2 * Math.PI * i) / cnt, off + (2 * Math.PI * (i + 1)) / cnt, o.z0, o.h + r.uniform(0, 0.04), seeded(r.choice(stones)));
  });
  const glow = new MB();
  cyl(glow, 9.3, o.glowZ0, o.glowH, 48, () => [1, 1, 1]);
  const ZT = o.ztop ?? 0.68;
  const lines = new MB();
  for (let k = 0; k < 6; k++) {
    const A = (Math.PI / 3) * k, ca = Math.cos(A), sa = Math.sin(A);
    strip(lines, [[0.3 * ca, 0.3 * sa], [2.2 * ca, 2.2 * sa]], 0.07, ZT);
    for (const sg of [-1, 1]) { const B = A + sg * rad(35); strip(lines, [[1.3 * ca, 1.3 * sa], [1.3 * ca + 0.7 * Math.cos(B), 1.3 * sa + 0.7 * Math.sin(B)]], 0.05, ZT); }
  }
  strip(lines, circlePts(2.3), 0.06, ZT); strip(lines, circlePts(6), 0.05, ZT);
  const runes = new MB();
  for (let i = 0; i < 8; i++) {
    const phi = rad(45 * i);
    if (i === 6) placeGlyph(runes, 0, phi, 7.4, 0.95, ZT + 0.01, 0.13);
    else placeGlyph(runes, i % 3, phi, 8.2, 0.55, ZT + 0.01, 0.09);
  }
  const g = new THREE.Group();
  g.add(new THREE.Mesh(stone.geo(), vcMat()));
  g.add(new THREE.Mesh(glow.geo(), emitMat(o.glowCol, o.glow * 1.1)));
  const lineMesh = new THREE.Mesh(lines.geo(), emitMat(o.lineCol, o.glow * 1.3));
  lineMesh.name = 'centre-pattern'; // hidden in the game: the classic rotating kanji circle is drawn there instead
  g.add(lineMesh);
  g.add(new THREE.Mesh(runes.geo(), emitMat(o.runeCol, o.glow * 1.6)));
  return g;
}

/** grass tufts: blades with a base→tip colour that sway in the wind (a morph target) */
export function grass(o: { r: Rand; tufts: number; rmin: number; rspan: number; pow?: number; gh: (x: number, y: number) => number; base: (r: number) => readonly number[]; tip: (r: number, ang: number) => readonly number[]; skip?: (deg: number, r: number) => boolean; h?: [number, number]; wind?: P3; spread?: number }) {
  const { r } = o;
  const W = o.wind ?? (() => { const v = new THREE.Vector3(0.8, 0.6, 0).normalize(); return [v.x, v.y, 0] as P3; })();
  const mb = new MB(false, 1);
  for (let t = 0; t < o.tufts; t++) {
    const rr = o.rmin + o.rspan * r.random() ** (o.pow ?? 1.1), a = r.uniform(0, 2 * Math.PI);
    if (o.skip?.((a * 180) / Math.PI, rr)) continue;
    const cx = rr * Math.cos(a), cy = rr * Math.sin(a);
    const n = r.int(3, 5);
    for (let b = 0; b < n; b++) {
      const x = cx + r.uniform(-0.25, 0.25) * (o.spread ?? 1), y = cy + r.uniform(-0.25, 0.25) * (o.spread ?? 1);
      const hh = r.uniform(o.h?.[0] ?? 0.45, o.h?.[1] ?? 1), w = r.uniform(0.035, 0.06), ang = r.uniform(0, 6.283), bend = r.uniform(0.1, 0.4);
      const d = [Math.cos(ang), Math.sin(ang)], sd = [-Math.sin(ang), Math.cos(ang)], z0 = o.gh(x, y);
      const cb = o.base(rr), ct = o.tip(rr, ang), cm = lerp3(cb, ct, 0.55);
      const p0: P3 = [x, y, z0], p1: P3 = [x + d[0] * bend * 0.3, y + d[1] * bend * 0.3, z0 + hh * 0.55], p2: P3 = [x + d[0] * bend, y + d[1] * bend, z0 + hh];
      const V = (p: P3, c: readonly number[]) => { const vh = p[2] - z0, k = 0.32 * vh * vh; return mb.v(p, c, [[W[0] * k, W[1] * k, 0]]); };
      const v0 = V([p0[0] - sd[0] * w, p0[1] - sd[1] * w, p0[2]], cb), v1 = V([p0[0] + sd[0] * w, p0[1] + sd[1] * w, p0[2]], cb);
      const v2 = V([p1[0] - sd[0] * w * 0.65, p1[1] - sd[1] * w * 0.65, p1[2]], cm), v3 = V([p1[0] + sd[0] * w * 0.65, p1[1] + sd[1] * w * 0.65, p1[2]], cm);
      const v4 = V(p2, ct);
      mb.f(v0, v1, v3, v2); mb.f(v2, v3, v4);
    }
  }
  return mb.geo();
}

/** a soft light shaft: a cone from the sky down through the floor (vertex alpha, additive) */
export function beam(mb: MB, top: P3, target: P3, scale: number, gain: number, col: readonly number[], bright: number, grow: number) {
  const vec = new THREE.Vector3(target[0] - top[0], target[1] - top[1], target[2] - top[2]);
  const T = vec.clone().normalize(), N = T.clone().cross(new THREE.Vector3(0, 0, 1)).normalize(), B = T.clone().cross(N);
  const SIDES = 12, g = bright * gain;
  const prof: Array<[number, number]> = [[0, 0], [0.25, 0.15], [0.5, 0.26], [0.8, 0.24], [1, 0.12], [1.09, 0]];
  const rings = prof.map(([frac, al]) => {
    const rr = (0.45 + 3 * grow * frac ** 1.6) * scale;
    return Array.from({ length: SIDES }, (_, s) => {
      const a = (2 * Math.PI * s) / SIDES;
      const p = vec.clone().multiplyScalar(frac).addScaledVector(N, Math.cos(a) * rr).addScaledVector(B, Math.sin(a) * rr);
      return mb.v([top[0] + p.x, top[1] + p.y, top[2] + p.z], [col[0], col[1], col[2], al * g]);
    });
  });
  for (let k = 0; k < prof.length - 1; k++) for (let s = 0; s < SIDES; s++) { const s2 = (s + 1) % SIDES; mb.f(rings[k][s], rings[k][s2], rings[k + 1][s2], rings[k + 1][s]); }
}
/** the soft glowing carpet of light over the arena, fading at the rim */
export function wash(mb: MB, radius: number, z: number, alphaAt: (x: number, y: number) => number, col: readonly number[], k: number, radii = [1.5, 3, 4.5, 6, 7.5, 8.5]) {
  const SEGS = 40;
  const cen = mb.v([0, 0, z], [col[0], col[1], col[2], alphaAt(0, 0) * k]);
  const rows = [...radii, radius].map((r) => Array.from({ length: SEGS }, (_, s) => { const a = (2 * Math.PI * s) / SEGS, x = r * Math.cos(a), y = r * Math.sin(a); return mb.v([x, y, z], [col[0], col[1], col[2], alphaAt(x, y) * k]); }));
  for (let s = 0; s < SEGS; s++) mb.f(cen, rows[0][s], rows[0][(s + 1) % SEGS]);
  for (let i = 0; i < rows.length - 1; i++) for (let s = 0; s < SEGS; s++) { const s2 = (s + 1) % SEGS; mb.f(rows[i][s], rows[i + 1][s], rows[i + 1][s2], rows[i][s2]); }
}
export const additiveMat = () => new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false });

/** little lights that drift (fireflies, embers, orbs): glowing points with a soft halo */
let dotTex: THREE.Texture | null = null;
function dotTexture() {
  if (dotTex) return dotTex;
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d')!, grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.18, 'rgba(255,255,255,.9)'); grd.addColorStop(0.45, 'rgba(255,255,255,.25)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  dotTex = new THREE.CanvasTexture(c);
  return dotTex;
}
export interface Drifters { obj: THREE.Points; update(f: number): void }
export function drifters(o: { r: Rand; n: number; at: () => P3; col: readonly number[]; size: number; move: () => P3; twinkle?: boolean }): Drifters {
  const base: P3[] = [], mv: P3[] = [], ph: number[] = [];
  for (let i = 0; i < o.n; i++) { base.push(o.at()); mv.push(o.move()); ph.push(o.r.uniform(0, 6.28)); }
  const pos = new Float32Array(o.n * 3);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const m = new THREE.PointsMaterial({ map: dotTexture(), color: new THREE.Color(o.col[0], o.col[1], o.col[2]), size: o.size, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, fog: false });
  const obj = new THREE.Points(g, m); obj.frustumCulled = false;
  const update = (f: number) => {
    const k = drift(f);
    for (let i = 0; i < o.n; i++) {
      const w = o.twinkle ? Math.sin(f * 0.05 + ph[i]) * 0.15 : 0;
      pos[i * 3] = base[i][0] + mv[i][0] * k + w; pos[i * 3 + 1] = base[i][1] + mv[i][1] * k; pos[i * 3 + 2] = base[i][2] + mv[i][2] * k + Math.sin(f * 0.04 + ph[i]) * 0.12;
    }
    g.attributes.position.needsUpdate = true;
  };
  update(0);
  return { obj, update };
}

/** glowing wisp orbs: a bright core with a soft halo, bobbing slowly */
export function orbs(o: { list: Array<{ p: P3; k: number; amp: number }>; col: readonly number[]; gain?: number }) {
  const n = o.list.length;
  const mk = (size: number, c: THREE.Color, opacity: number) => {
    const pos = new Float32Array(n * 3);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const m = new THREE.PointsMaterial({ map: dotTexture(), color: c, size, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity, fog: false });
    const p = new THREE.Points(g, m); p.frustumCulled = false;
    return { p, pos, g };
  };
  const k = o.gain ?? 1;
  const avg = o.list.reduce((s, q) => s + q.k, 0) / Math.max(1, n);
  const halo = mk(2.2 * avg, new THREE.Color(o.col[0] * k, o.col[1] * k, o.col[2] * k), 0.55);
  const core = mk(0.45 * avg, new THREE.Color(1, 1, 1).lerp(new THREE.Color(o.col[0], o.col[1], o.col[2]), 0.3), 1);
  const group = new THREE.Group(); group.add(halo.p, core.p);
  const update = (f: number) => {
    const d = drift(f);
    o.list.forEach((q, i) => { for (const a of [halo.pos, core.pos]) { a[i * 3] = q.p[0]; a[i * 3 + 1] = q.p[1]; a[i * 3 + 2] = q.p[2] + q.amp * d; } });
    halo.g.attributes.position.needsUpdate = true; core.g.attributes.position.needsUpdate = true;
  };
  update(0);
  return { group, update };
}

/** far-away layers of silhouettes (trunks, hills) on a ring, lit at the bottom and fading up */
export function backdropLayer(mb: MB, o: { r: Rand; idx: number; radius: number; count: number; hmin: number; hmax: number; th: Theme; sky: (dx: number, dy: number, dz: number) => C3; sunAz: number; wmin?: number; wmax?: number }) {
  const { r, idx, th } = o;
  const t = idx / 2;
  const colLit = lerp3(th.back_lit[0], th.back_lit[1], t), colDark = lerp3(th.back_dark[0], th.back_dark[1], t);
  const hz = th.back_haze[idx] ?? 0;
  for (let i = 0; i < o.count; i++) {
    const a = (2 * Math.PI * (i + r.uniform(-0.4, 0.4))) / o.count + idx * 0.5;
    const c: P3 = [o.radius * Math.cos(a), o.radius * Math.sin(a), 0], tv = [-Math.sin(a), Math.cos(a)];
    const H = r.uniform(o.hmin, o.hmax) * (th.back_h ?? 1), w0 = r.uniform(o.wmin ?? 1.6, o.wmax ?? 3.6) * (0.8 + 0.5 * idx) * (th.back_w ?? 1);
    const ph = r.uniform(0, 6.28), lean = r.uniform(-0.12, 0.12);
    const hzC = o.sky(Math.cos(a) * Math.cos(0.02), Math.sin(a) * Math.cos(0.02), Math.sin(0.02)).map((v) => tone(v, th.exposure ?? 1)) as C3;
    const rimw = Math.exp(-((angdiff(a, o.sunAz) / 0.5) ** 2)) * (th.back_rim_k ?? 0);
    const rows: Array<[number, number]> = [];
    for (let k = 0; k < 7; k++) {
      const u = k / 6, z = -2 + (H + 2) * u, wd = w0 * (1 - 0.55 * u) * (1 + 0.5 * Math.exp(-Math.max(z, 0) / 3));
      const off = Math.sin(u * 4 + ph) * 1.2 + lean * z, p: P3 = [c[0] + tv[0] * off, c[1] + tv[1] * off, z];
      const fade = 1 - 0.75 * u * u;
      let cl = mul3(colLit, fade), cd = mul3(colDark, fade);
      if (hz > 0) { cl = lerp3(cl, hzC, hz * 0.6 * (1 - 0.5 * u)); cd = lerp3(cd, hzC, hz * 0.6 * (1 - 0.5 * u)); }
      if (rimw > 0.01) { cl = lerp3(cl, th.back_rim, 0.6 * rimw * (1 - u)); cd = lerp3(cd, th.back_rim, 0.6 * rimw * (1 - u)); }
      rows.push([mb.v([p[0] - (tv[0] * wd) / 2, p[1] - (tv[1] * wd) / 2, z], cl), mb.v([p[0] + (tv[0] * wd) / 2, p[1] + (tv[1] * wd) / 2, z], cd)]);
    }
    for (let k = 0; k < 6; k++) mb.f(rows[k][0], rows[k][1], rows[k + 1][1], rows[k + 1][0]);
  }
}

/** a tapered flame (white-yellow base → orange → red tip), unit size, vertex-coloured */
export function flameGeo(): THREE.BufferGeometry {
  const mb = new MB();
  const prof: Array<[number, number]> = [[0, 0.26], [0.12, 0.36], [0.35, 0.3], [0.62, 0.17], [0.9, 0.07]];
  const stops: Array<[number, C3]> = [[0, [1, 0.95, 0.55]], [0.35, [1, 0.62, 0.15]], [0.8, [1, 0.28, 0.05]], [1.2, [0.8, 0.1, 0.02]]];
  const segs = 8;
  const col = (z: number) => interpStops(stops, z);
  const rows = prof.map(([h, rr]) => Array.from({ length: segs }, (_, i) => mb.v([0.07 * h * h + rr * Math.cos((2 * Math.PI * i) / segs), rr * Math.sin((2 * Math.PI * i) / segs), h], col(h))));
  const tip = mb.v([0.07 * 1.12 * 1.12, 0, 1.12], col(1.12));
  for (let k = 0; k < rows.length - 1; k++) for (let i = 0; i < segs; i++) { const i2 = (i + 1) % segs; mb.f(rows[k][i], rows[k][i2], rows[k + 1][i2], rows[k + 1][i]); }
  for (let i = 0; i < segs; i++) mb.f(rows[rows.length - 1][i], rows[rows.length - 1][(i + 1) % segs], tip);
  return mb.geo();
}

/** what an arena gives the renderer */
export interface Env {
  group: THREE.Group;
  /** height of the arena floor's top (Blender z): the fighters stand there */
  floor: number;
  /** frame = seconds × 30 (the scripts' timeline) */
  update(frame: number): void;
  /** the sun / moon as a light: direction (Blender coords, towards the light), colour, strength */
  key: { dir: P3; color: C3; intensity: number };
  ambient: { sky: C3; ground: C3; intensity: number };
  fog: { color: C3; near: number; far: number };
  /** point lights: braziers, glow over the arena (Blender coords) */
  lights: Array<{ pos: P3; color: C3; intensity: number; dist: number; flicker?: number }>;
  dispose(): void;
}
export function disposeGroup(g: THREE.Object3D) {
  g.traverse((o) => {
    const m = o as THREE.Mesh;
    m.geometry?.dispose?.();
    const mats = Array.isArray(m.material) ? m.material : m.material ? [m.material] : [];
    for (const mm of mats) mm.dispose();
  });
}

/** daylight for a "day" arena, from its SUNSET theme: a high sun, a blue sky, white clouds, neutral stone */
export function dayTheme(s: Theme): Theme {
  const neutral = (c: C3, k = 1.0, sat = 0.5): C3 => { const l = (c[0] + c[1] + c[2]) / 3; return mul3(lerp3([l, l, l], c, sat), k); };
  const out: Theme = { ...s };
  out.body = 'sun'; out.body_el = 48; out.body_r = 0.03; out.exposure = 1.2;
  out.stops = [[-90, [0.05, 0.06, 0.08]], [-2, [0.4, 0.46, 0.55]], [0, [0.62, 0.72, 0.86]], [6, [0.48, 0.62, 0.86]], [18, [0.3, 0.46, 0.8]], [45, [0.16, 0.3, 0.68]], [90, [0.08, 0.18, 0.52]]];
  out.glow = [[0.5, 0.12, [1, 0.95, 0.85]], [0.12, 0.4, [1, 0.97, 0.9]], [0.04, 1.4, [1, 1, 0.95]]];
  out.hw0 = 0.7; out.anti = 0; out.stars = 0; out.milky = 0; out.sparkles = 0;
  out.far1 = [0.3, 0.38, 0.5]; out.far2 = [0.22, 0.3, 0.42];
  out.cov0 = (s.cov0 ?? 0.5) + 0.04; out.cloud_opacity = 0.85;
  out.cloud_lit_near = [1, 0.98, 0.94]; out.cloud_lit_far = [0.86, 0.9, 0.96]; out.cloud_shadow = [0.42, 0.48, 0.6]; out.cloud_rim = [1, 1, 0.96];
  out.fog = [0.62, 0.72, 0.86]; out.world = [0.4, 0.5, 0.65];
  out.key_col = [1, 0.96, 0.88]; out.key_e = 2.2; out.fill_col = [0.6, 0.7, 1];
  out.body_tint = [1, 0.98, 0.92]; out.body_halo = [1, 0.95, 0.8]; out.body_rings = [];
  for (const k of Object.keys(s)) {
    const v = s[k];
    if (/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(k) && Array.isArray(v)) {
      out[k] = Array.isArray(v[0]) ? v.map((c: C3) => neutral(c)) : neutral(v as C3);
    }
  }
  out.emit = (s.emit ?? 1) * 0.6;
  out.back_haze = (s.back_haze ?? [0, 0, 0]).map((h: number) => Math.min(0.8, h + 0.3));
  out.daylight = true;
  return out;
}
