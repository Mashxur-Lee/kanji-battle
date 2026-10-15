// Small geometry kit for the procedural 3D models (staffs and arenas). These are ports of the helpers in the
// Blender scripts the staffs and arenas were modelled with: bevelled curves with a radius per point (tubes),
// rings, faceted crystals, sheets, and a merge so that many still parts cost one draw call per material.
// Everything is built in Blender's coordinates (Z up); a parent group turns it into three.js (Y up).

import * as THREE from 'three';

export type P3 = [number, number, number];

/** a seeded random source (the same staff / arena every time) */
export function seeded(seed: number) {
  let s = seed >>> 0 || 1;
  const random = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const uniform = (a: number, b: number) => a + (b - a) * random();
  const gauss = () => { let u = 0; while (u === 0) u = random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * random()); };
  const choice = <T>(xs: readonly T[]) => xs[Math.floor(random() * xs.length) % xs.length];
  return { random, uniform, gauss, choice };
}
export type Rng = ReturnType<typeof seeded>;

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
export const spow = (x: number, e: number) => Math.max(0, x) ** e;
/** piecewise-linear lookup, like the scripts' interp() */
export function interp(xs: readonly number[], ys: readonly number[], x: number) {
  if (x <= xs[0]) return ys[0];
  for (let i = 1; i < xs.length; i++) if (x <= xs[i]) return ys[i - 1] + (ys[i] - ys[i - 1]) * ((x - xs[i - 1]) / (xs[i] - xs[i - 1]));
  return ys[ys.length - 1];
}
/** Blender's rotation_euler (XYZ) as a three.js Euler */
export const bEuler = (x: number, y: number, z: number) => new THREE.Euler(x, y, z, 'ZYX');

// ── tubes: a smooth curve through points, with a radius per point ───────────────────────────────────────────
export interface TubeOpts { closed?: boolean; sharp?: boolean; per?: number; radial?: number; caps?: boolean }
export class Tube {
  readonly geo = new THREE.BufferGeometry();
  private readonly per: number; private readonly radial: number; private readonly closed: boolean; private readonly sharp: boolean; private readonly caps: boolean;
  private readonly samples: number;
  private readonly pos: Float32Array; private readonly nor: Float32Array;
  constructor(readonly n: number, o: TubeOpts = {}) {
    this.per = o.per ?? 4; this.radial = o.radial ?? 6; this.closed = !!o.closed; this.sharp = !!o.sharp; this.caps = o.caps ?? !o.closed;
    const spans = this.closed ? n : n - 1;
    this.samples = spans * this.per + 1; // closed: the last ring repeats the first
    const ringV = this.radial + 1, verts = this.samples * ringV + (this.caps ? 2 : 0);
    this.pos = new Float32Array(verts * 3); this.nor = new Float32Array(verts * 3);
    const uv = new Float32Array(verts * 2);
    const idx: number[] = [];
    for (let i = 0; i < this.samples; i++) for (let j = 0; j <= this.radial; j++) { uv[(i * ringV + j) * 2] = i / (this.samples - 1); uv[(i * ringV + j) * 2 + 1] = j / this.radial; }
    for (let i = 0; i < this.samples - 1; i++) for (let j = 0; j < this.radial; j++) {
      const a = i * ringV + j, b = a + ringV;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
    if (this.caps) {
      const s0 = this.samples * ringV, s1 = s0 + 1, last = (this.samples - 1) * ringV;
      for (let j = 0; j < this.radial; j++) { idx.push(s0, j + 1, j); idx.push(s1, last + j, last + j + 1); }
    }
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geo.setAttribute('normal', new THREE.BufferAttribute(this.nor, 3));
    this.geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    this.geo.setIndex(idx);
  }
  /** (re)shape the tube: `pts` and `radii` must have `n` entries */
  set(pts: readonly P3[], radii: readonly number[] | number) {
    const { n, per, radial, closed, samples } = this;
    const P = new Float32Array(samples * 3), R = new Float32Array(samples);
    const at = (k: number) => pts[closed ? ((k % n) + n) % n : Math.min(n - 1, Math.max(0, k))];
    const rad = (k: number) => typeof radii === 'number' ? radii : radii[closed ? ((k % n) + n) % n : Math.min(n - 1, Math.max(0, k))];
    for (let s = 0; s < samples; s++) {
      let k = Math.floor(s / per), u = (s % per) / per;
      if (!closed && k >= n - 1) { k = n - 2; u = 1; }
      const p1 = at(k), p2 = at(k + 1);
      for (let d = 0; d < 3; d++) {
        if (this.sharp) P[s * 3 + d] = p1[d] + (p2[d] - p1[d]) * u;
        else {
          // Catmull-Rom (Blender's "auto" handles are close to this)
          const p0 = closed || k > 0 ? at(k - 1)[d] : 2 * p1[d] - p2[d];
          const p3 = closed || k + 2 < n ? at(k + 2)[d] : 2 * p2[d] - p1[d];
          const u2 = u * u, u3 = u2 * u;
          P[s * 3 + d] = 0.5 * (2 * p1[d] + (-p0 + p2[d]) * u + (2 * p0 - 5 * p1[d] + 4 * p2[d] - p3) * u2 + (-p0 + 3 * p1[d] - 3 * p2[d] + p3) * u3);
        }
      }
      R[s] = Math.max(1e-4, Math.abs(rad(k) + (rad(k + 1) - rad(k)) * u));
    }
    // frames by parallel transport
    const T = new THREE.Vector3(), N = new THREE.Vector3(), B = new THREE.Vector3(), tmp = new THREE.Vector3();
    const tangent = (s: number) => {
      const a = closed ? (s - 1 + samples - 1) % (samples - 1) : Math.max(0, s - 1), b = closed ? (s + 1) % (samples - 1) : Math.min(samples - 1, s + 1);
      T.set(P[b * 3] - P[a * 3], P[b * 3 + 1] - P[a * 3 + 1], P[b * 3 + 2] - P[a * 3 + 2]);
      if (T.lengthSq() < 1e-12) T.set(0, 0, 1);
      return T.normalize();
    };
    tangent(0);
    tmp.set(Math.abs(T.x) < 0.9 ? 1 : 0, Math.abs(T.x) < 0.9 ? 0 : 1, 0);
    N.crossVectors(T, tmp).normalize();
    const ringV = radial + 1;
    for (let s = 0; s < samples; s++) {
      tangent(s);
      N.addScaledVector(T, -N.dot(T));
      if (N.lengthSq() < 1e-10) { tmp.set(0, 1, 0); N.crossVectors(T, tmp); if (N.lengthSq() < 1e-10) N.set(1, 0, 0); }
      N.normalize(); B.crossVectors(T, N);
      for (let j = 0; j <= radial; j++) {
        const a = (j / radial) * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a);
        const nx = c * N.x + sn * B.x, ny = c * N.y + sn * B.y, nz = c * N.z + sn * B.z, v = (s * ringV + j) * 3;
        this.nor[v] = nx; this.nor[v + 1] = ny; this.nor[v + 2] = nz;
        this.pos[v] = P[s * 3] + R[s] * nx; this.pos[v + 1] = P[s * 3 + 1] + R[s] * ny; this.pos[v + 2] = P[s * 3 + 2] + R[s] * nz;
      }
      if (this.caps && (s === 0 || s === samples - 1)) {
        const v = (samples * ringV + (s ? 1 : 0)) * 3, sg = s ? 1 : -1;
        this.pos[v] = P[s * 3]; this.pos[v + 1] = P[s * 3 + 1]; this.pos[v + 2] = P[s * 3 + 2];
        this.nor[v] = T.x * sg; this.nor[v + 1] = T.y * sg; this.nor[v + 2] = T.z * sg;
      }
    }
    (this.geo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.attributes.normal as THREE.BufferAttribute).needsUpdate = true;
    this.geo.computeBoundingSphere();
    return this;
  }
}
export function tubeGeo(pts: readonly P3[], radii: readonly number[] | number, o: TubeOpts = {}) {
  return new Tube(pts.length, o).set(pts, radii).geo;
}
/** a ring of radius `radius`, turned by a Blender euler, its thickness wobbling 3× round (the scripts' ring()) */
export function ringGeo(radius: number, euler: P3, thick: number, n = 12, wob = 0.35, o: TubeOpts = {}) {
  const m = new THREE.Matrix4().makeRotationFromEuler(bEuler(...euler));
  const pts: P3[] = [], rad: number[] = [];
  const v = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    const a = (2 * Math.PI * i) / n;
    v.set(radius * Math.cos(a), radius * Math.sin(a), 0).applyMatrix4(m);
    pts.push([v.x, v.y, v.z]); rad.push(thick * (1 + wob * Math.sin(3 * a)));
  }
  return tubeGeo(pts, rad, { closed: true, per: 6, ...o });
}
/** points on a helix round the Z axis (optionally round a wobbling centre-line) */
export function helix(r: number | ((t: number) => number), z0: number, z1: number, turns: number, n: number, phase = 0, wob = 0, rnd?: Rng, center?: (z: number) => [number, number]): P3[] {
  const f = typeof r === 'number' ? () => r : r;
  const out: P3[] = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1), a = phase + 2 * Math.PI * turns * t, z = z0 + (z1 - z0) * t;
    const rr = f(t) + (rnd && wob ? rnd.uniform(-wob, wob) : 0);
    const [cx, cy] = center ? center(z) : [0, 0];
    out.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a), z]);
  }
  return out;
}
/** a gentle wobble of a shaft's centre-line */
export const wave = (z: number, w: number, f: [number, number] = [7, 5]): [number, number] => [w * Math.sin(z * f[0]), w * Math.cos(z * f[1] + 1)];

/** a faceted bi-pyramid (gem, spike, shard) — flat shaded */
export function crystalGeo(up: number, down: number, width: number, sides: number, rot?: P3) {
  const pos: number[] = [];
  const ring = (i: number): P3 => { const a = (2 * Math.PI * i) / sides; return [width * Math.cos(a), width * Math.sin(a), 0]; };
  for (let i = 0; i < sides; i++) {
    const a = ring(i), b = ring(i + 1);
    pos.push(...a, ...b, 0, 0, up);
    pos.push(...b, ...a, 0, 0, -down);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(new Array((pos.length / 3) * 2).fill(0.5), 2));
  if (rot) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(bEuler(...rot)));
  g.computeVertexNormals();
  return g;
}
/** a grid sheet from a function (u, v in 0..1) → point */
export function sheetGeo(nu: number, nv: number, fn: (u: number, v: number, i: number, j: number) => P3) {
  const pos: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) { pos.push(...fn(i / nu, j / nv, i, j)); uv.push(i / nu, j / nv); }
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    const a = j * (nu + 1) + i, b = a + nu + 1;
    idx.push(a, a + 1, b + 1, a, b + 1, b);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// ── merging: every still part with the same material becomes one mesh ────────────────────────────────────────
export class Batch {
  private parts = new Map<THREE.Material, THREE.BufferGeometry[]>();
  add(geo: THREE.BufferGeometry, mat: THREE.Material, pos?: P3 | THREE.Vector3, rot?: THREE.Euler, scale?: number | P3) {
    const g = geo.index ? geo : withIndex(geo);
    const m = new THREE.Matrix4().compose(
      pos ? (Array.isArray(pos) ? new THREE.Vector3(...pos) : pos) : new THREE.Vector3(),
      new THREE.Quaternion().setFromEuler(rot ?? new THREE.Euler()),
      scale === undefined ? new THREE.Vector3(1, 1, 1) : typeof scale === 'number' ? new THREE.Vector3(scale, scale, scale) : new THREE.Vector3(...scale),
    );
    const c = g === geo ? g.clone() : g;
    c.applyMatrix4(m);
    const list = this.parts.get(mat) ?? [];
    list.push(c); this.parts.set(mat, list);
  }
  build(parent: THREE.Object3D) {
    const out: THREE.Mesh[] = [];
    for (const [mat, list] of this.parts) {
      const mesh = new THREE.Mesh(mergeGeos(list), mat);
      parent.add(mesh); out.push(mesh);
      for (const g of list) g.dispose();
    }
    this.parts.clear();
    return out;
  }
}
function withIndex(g: THREE.BufferGeometry) {
  const c = g.clone();
  const n = c.attributes.position.count;
  c.setIndex(Array.from({ length: n }, (_, i) => i));
  return c;
}
export function mergeGeos(list: THREE.BufferGeometry[]) {
  let verts = 0, tris = 0;
  for (const g of list) { verts += g.attributes.position.count; tris += g.index!.count; }
  const pos = new Float32Array(verts * 3), nor = new Float32Array(verts * 3), uv = new Float32Array(verts * 2);
  const hasColor = list.some((g) => g.attributes.color);
  const col = hasColor ? new Float32Array(verts * 3).fill(1) : null;
  const idx = verts > 65535 ? new Uint32Array(tris) : new Uint16Array(tris);
  let vo = 0, io = 0;
  for (const g of list) {
    const n = g.attributes.position.count;
    pos.set(g.attributes.position.array as Float32Array, vo * 3);
    if (!g.attributes.normal) g.computeVertexNormals();
    nor.set(g.attributes.normal.array as Float32Array, vo * 3);
    if (g.attributes.uv) uv.set(g.attributes.uv.array as Float32Array, vo * 2);
    if (col && g.attributes.color) col.set(g.attributes.color.array as Float32Array, vo * 3);
    const ix = g.index!.array;
    for (let i = 0; i < ix.length; i++) idx[io + i] = ix[i] + vo;
    vo += n; io += ix.length;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  if (col) out.setAttribute('color', new THREE.BufferAttribute(col, 3));
  out.setIndex(new THREE.BufferAttribute(idx, 1));
  out.computeBoundingSphere();
  return out;
}

// ── procedural textures (the scripts' noise / voronoi shader nodes, baked into small canvases) ─────────────
const texCache = new Map<string, THREE.CanvasTexture>();
function hash2(x: number, y: number, s: number) {
  let h = (x * 374761393 + y * 668265263 + s * 2147483647) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
/** tileable value-noise fbm, 0..1 */
export function fbm(x: number, y: number, period: number, octaves = 4, seed = 1) {
  let sum = 0, amp = 0.5, norm = 0, p = period, fx = x, fy = y;
  for (let o = 0; o < octaves; o++) {
    const xi = Math.floor(fx), yi = Math.floor(fy), tx = fx - xi, ty = fy - yi;
    const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
    const h = (a: number, b: number) => hash2(((a % p) + p) % p, ((b % p) + p) % p, seed + o);
    const v = lerp(lerp(h(xi, yi), h(xi + 1, yi), sx), lerp(h(xi, yi + 1), h(xi + 1, yi + 1), sx), sy);
    sum += v * amp; norm += amp; amp *= 0.5; fx *= 2; fy *= 2; p *= 2;
  }
  return sum / norm;
}
function canvasTex(key: string, size: number, paint: (img: ImageData) => void, repeat: [number, number] = [1, 1]) {
  let t = texCache.get(key);
  if (!t) {
    const c = document.createElement('canvas'); c.width = c.height = size;
    const ctx = c.getContext('2d')!;
    const img = ctx.createImageData(size, size);
    paint(img);
    ctx.putImageData(img, 0, 0);
    t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    texCache.set(key, t);
  }
  const out = t.clone(); out.repeat.set(...repeat); out.needsUpdate = true;
  return out;
}
const px = (img: ImageData, i: number, r: number, g: number, b: number) => { img.data[i * 4] = r; img.data[i * 4 + 1] = g; img.data[i * 4 + 2] = b; img.data[i * 4 + 3] = 255; };
/** grey noise (multiplies a material colour): `streak` stretches it along the tube (bark) */
export function noiseTex(streak = 1, repeat: [number, number] = [1, 1], lo = 0.35, hi = 1.25) {
  return canvasTex(`noise${streak}`, 128, (img) => {
    for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) {
      const v = fbm(x / (16 * streak), y / 8, 128 / (16 * streak), 4, 3);
      const k = Math.round(255 * Math.min(1, lerp(lo, hi, v) / 1.25));
      px(img, y * 128 + x, k, k, k);
    }
  }, repeat);
}
/** glowing crack lines (voronoi edges): white on the cracks, black elsewhere — use as an emissive map */
export function veinTex(cells = 6, width = 0.11, repeat: [number, number] = [1, 1]) {
  return canvasTex(`vein${cells}:${width}`, 128, (img) => {
    const pts: Array<[number, number]> = [];
    for (let j = 0; j < cells; j++) for (let i = 0; i < cells; i++) pts.push([(i + hash2(i, j, 9)) / cells, (j + hash2(i, j, 11)) / cells]);
    for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) {
      // a little noise bends the cracks, like the script's noise-offset voronoi
      const u = x / 128 + (fbm(x / 16, y / 16, 8, 2, 5) - 0.5) * 0.08, v = y / 128 + (fbm(x / 16 + 7, y / 16, 8, 2, 6) - 0.5) * 0.08;
      let d1 = 9, d2 = 9;
      for (const [cx, cy] of pts) for (let oy = -1; oy <= 1; oy++) for (let ox = -1; ox <= 1; ox++) {
        const dx = u - cx - ox, dy = v - cy - oy, d = Math.sqrt(dx * dx + dy * dy);
        if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
      }
      const edge = (d2 - d1) * cells * 0.5; // 0 on the crack
      const k = edge < width * 0.45 ? 1 : edge < width ? 1 - (edge - width * 0.45) / (width * 0.55) : 0;
      const g = Math.round(255 * k * k);
      px(img, y * 128 + x, g, g, g);
    }
  }, repeat);
}
