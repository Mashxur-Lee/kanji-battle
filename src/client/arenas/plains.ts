// PLAINS arena (port of Plains.txt): a raised round stone platform with glowing rings, rune dots and stripes,
// four braziers, mirrored rune monoliths, rocks, grass and flowers on a rolling plain, ringed by 3D ridged
// mountains with snow and haze — and TWO suns (or moons), one on each side, so both players see one.
import * as THREE from 'three';
import {
  MB, clamp01, dayTheme, disposeGroup, drifters, emitMat, fbm2, flameGeo, glowMat, grass, ground, lerp3, mul3, noise2, pingpong, rad, rand, ridged2,
  skyFn, skyRig, sph, sstep, tone, vcMat, type C3, type Env, type P3, type Theme,
} from './kit';

const THEMES: Record<'SUNSET' | 'NIGHT', Theme> = {
  SUNSET: {
    body: 'sun', body_az: 90, body_el: 8, body_r: 0.03, exposure: 1,
    stops: [[-90, [0.05, 0.03, 0.07]], [-2, [0.3, 0.1, 0.12]], [0, [0.55, 0.17, 0.14]], [3, [0.9, 0.32, 0.1]], [8, [0.75, 0.22, 0.18]], [16, [0.5, 0.14, 0.28]], [30, [0.26, 0.08, 0.34]], [55, [0.08, 0.035, 0.24]], [90, [0.02, 0.012, 0.12]]],
    glow: [[0.55, 0.35, [1, 0.3, 0.06]], [0.16, 0.6, [1, 0.48, 0.12]], [0.045, 1.6, [1, 0.75, 0.35]]],
    hw0: 0.55, anti: 0.3, anti_col: [0.5, 0.2, 0.34], stars: 0.3, star_n: 1800, milky: 0,
    far1: [0.2, 0.08, 0.18], far2: [0.11, 0.05, 0.14],
    cloud_scale: 1.7, cov0: 0.5, cov1: 0.72, cloud_opacity: 0.9,
    cloud_lit_near: [1, 0.5, 0.16], cloud_lit_far: [0.7, 0.28, 0.5], cloud_shadow: [0.1, 0.04, 0.17], cloud_rim: [1, 0.65, 0.25],
    g_near: [0.07, 0.16, 0.11], g_far: [0.16, 0.07, 0.22], g_alt: [0.1, 0.1, 0.07],
    rock_lo: [0.07, 0.045, 0.08], rock_hi: [0.22, 0.15, 0.2], veg: [0.035, 0.085, 0.07],
    snow: [0.85, 0.7, 0.8], light_col: [1, 0.52, 0.22], amb: [0.16, 0.1, 0.24], haze_gain: 1, haze_dist: 62,
    stone: [[0.22, 0.17, 0.32], [0.26, 0.2, 0.36], [0.19, 0.15, 0.28], [0.3, 0.24, 0.4]], moss: [0.05, 0.11, 0.07],
    grass_tip: [[0.18, 0.55, 0.3], [0.62, 0.82, 0.28]], grass_rim: [1, 0.55, 0.2],
    flower: [[1, 0.45, 0.15], [0.95, 0.25, 0.55], [0.9, 0.7, 0.2]], flower_emit: 0.9,
    emit: 1, embers: 36, sparkles: 22, world: [0.2, 0.08, 0.3], fog: [0.35, 0.1, 0.25],
    key_col: [1, 0.58, 0.3], key_e: 3.5, fill_col: [0.55, 0.4, 1],
  },
  NIGHT: {
    body: 'moon', body_az: 90, body_el: 32, body_r: 0.04, exposure: 1,
    stops: [[-90, [0.002, 0.003, 0.008]], [0, [0.007, 0.011, 0.032]], [5, [0.0045, 0.0075, 0.024]], [15, [0.0028, 0.005, 0.017]], [35, [0.0014, 0.0026, 0.0095]], [90, [0.0005, 0.001, 0.0045]]],
    glow: [[0.5, 0.004, [0.3, 0.4, 0.9]], [0.11, 0.03, [0.5, 0.62, 1]], [0.03, 0.09, [0.7, 0.8, 1]]],
    hw0: 0.8, anti: 0, anti_col: [0, 0, 0], stars: 1, star_n: 6500, milky: 0.01,
    far1: [0.004, 0.007, 0.02], far2: [0.0018, 0.003, 0.009],
    cloud_scale: 1.5, cov0: 0.56, cov1: 0.78, cloud_opacity: 0.55,
    cloud_lit_near: [0.045, 0.06, 0.12], cloud_lit_far: [0.014, 0.02, 0.045], cloud_shadow: [0.002, 0.003, 0.009], cloud_rim: [0.06, 0.08, 0.15],
    g_near: [0.02, 0.05, 0.07], g_far: [0.03, 0.02, 0.07], g_alt: [0.03, 0.04, 0.04],
    rock_lo: [0.015, 0.02, 0.04], rock_hi: [0.07, 0.08, 0.13], veg: [0.01, 0.03, 0.04],
    snow: [0.55, 0.62, 0.85], light_col: [0.45, 0.55, 1], amb: [0.03, 0.04, 0.09], haze_gain: 1, haze_dist: 75,
    stone: [[0.11, 0.1, 0.19], [0.13, 0.12, 0.22], [0.095, 0.09, 0.17], [0.16, 0.14, 0.25]], moss: [0.02, 0.05, 0.05],
    grass_tip: [[0.04, 0.2, 0.2], [0.18, 0.45, 0.5]], grass_rim: [0.45, 0.55, 1],
    flower: [[0.45, 0.55, 1], [0.75, 0.4, 1], [0.35, 0.95, 0.95]], flower_emit: 3,
    emit: 1.6, embers: 60, sparkles: 64, world: [0.01, 0.015, 0.05], fog: [0.04, 0.06, 0.15],
    key_col: [0.55, 0.68, 1], key_e: 1.5, fill_col: [0.2, 0.25, 0.5],
  },
};

const TOP = 2.3;

export function buildPlains(time: 'day' | 'sunset' | 'night', lite: boolean): Env {
  const T = time === 'night' ? THEMES.NIGHT : time === 'day' ? { ...dayTheme(THEMES.SUNSET), light_col: [1, 0.95, 0.85], amb: [0.35, 0.4, 0.5], snow: [0.95, 0.97, 1], embers: 0, flower_emit: 0.3, grass_rim: [1, 0.95, 0.75] } : THEMES.SUNSET;
  const E = T.emit;
  const R = rand(7);
  const group = new THREE.Group();
  const BODIES = [sph(T.body_az, T.body_el), sph(T.body_az + 180, T.body_el)]; // TWIN: a sun / moon on each side
  const sky = skyFn(T, BODIES);
  const gh = (x: number, y: number) => { const k = clamp01((Math.hypot(x, y) - 13) / 10); return k * 0.25 * (Math.sin(x * 0.22) + Math.cos(y * 0.27) + 0.5 * Math.sin((x + y) * 0.5)); };
  const groundColor = (x: number, y: number): C3 => {
    const t = clamp01((Math.hypot(x, y) - 10) / 50), v = 0.9 + 0.2 * (Math.sin(x * 0.5) * Math.cos(y * 0.5) * 0.5 + 0.5);
    let base = lerp3(T.g_near, T.g_far, t);
    base = lerp3(base, T.g_alt, clamp01((fbm2(x * 0.09 + 3, y * 0.09 - 7, 3) - 0.45) * 2.2) * 0.6);
    return mul3(base, v * (0.9 + 0.25 * noise2(x * 1.7, y * 1.7)));
  };
  const stoneColor = (base: readonly number[], t: number, n: number) => lerp3(mul3(base, (0.6 + 0.4 * clamp01(t) ** 0.7) * (0.88 + 0.24 * n)), T.moss, clamp01(1 - t * 3) * 0.55);
  group.add(new THREE.Mesh(ground([0, 4, 8, 10, 12, 13, 14, 16, 18, 21, 24, 28, 33, 40, 46, 52], 64, gh, groundColor), vcMat({ flat: false })));

  { // 3D ridged mountains with baked light, snow, valley mist and aerial perspective
    const nseg = lite ? 96 : 144, rr = [46, 48, 51, 54, 58, 62, 66, 71, 76, 82, 88, 95, 102, 110, 118, 126, 134];
    const P: P3[][] = rr.map((r) => Array.from({ length: nseg }, (_, j) => {
      const th = (2 * Math.PI * j) / nseg, X = r * Math.cos(th), Y = r * Math.sin(th);
      let notch = 1;
      for (const a0 of [rad(T.body_az), rad(T.body_az + 180)]) { const dl = Math.abs(((th - a0 + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI); notch *= 1 - 0.8 * Math.exp(-((dl / rad(17)) ** 2)); }
      const amp = (4 + 42 * sstep(50, 102, r)) * (1 - 0.65 * sstep(112, 134, r));
      let h = amp * (0.12 + 1.15 * ridged2(X * 0.032, Y * 0.032, 5)) * (0.55 + 0.9 * fbm2(X * 0.01 + 5, Y * 0.01 - 3, 3)) * notch + 1.2 * fbm2(X * 0.09, Y * 0.09, 3) * sstep(46, 60, r);
      h *= sstep(45.5, 52, r);
      return [X, Y, gh(X, Y) + 0.03 + h];
    }));
    const mb = new MB();
    const vid: number[][] = [];
    const lightDirs = BODIES;
    rr.forEach((r, i) => {
      vid.push([]);
      for (let j = 0; j < nseg; j++) {
        const p = P[i][j], th = (2 * Math.PI * j) / nseg;
        const a = P[i][(j + 1) % nseg], b = P[i][(j - 1 + nseg) % nseg], c = P[Math.min(i + 1, rr.length - 1)][j], d = P[Math.max(i - 1, 0)][j];
        const n = new THREE.Vector3(c[0] - d[0], c[1] - d[1], c[2] - d[2]).cross(new THREE.Vector3(a[0] - b[0], a[1] - b[1], a[2] - b[2])).normalize();
        if (n.z < 0) n.multiplyScalar(-1);
        const zn = p[2] / 45, slope = 1 - n.z, nz1 = fbm2(p[0] * 0.12, p[1] * 0.12, 3);
        let col = mul3(lerp3(T.rock_lo, T.rock_hi, clamp01(clamp01(zn) ** 0.7 + 0.25 * (nz1 - 0.5))), 0.8 + 0.4 * nz1);
        col = lerp3(col, T.veg, clamp01((9 - p[2]) / 9) * clamp01(1 - slope * 2.4) * 0.85);
        col = lerp3(col, T.snow, sstep(0.55, 0.78, zn + 0.22 * (fbm2(p[0] * 0.07, p[1] * 0.07, 3) - 0.5)) * clamp01(1 - slope * 1.7));
        let lit = 0;
        for (const L of lightDirs) lit = Math.max(lit, clamp01(n.x * L[0] + n.y * L[1] + n.z * L[2]));
        lit = lit ** 1.2;
        col = [col[0] * (T.amb[0] + T.light_col[0] * lit * 1.6), col[1] * (T.amb[1] + T.light_col[1] * lit * 1.6), col[2] * (T.amb[2] + T.light_col[2] * lit * 1.6)];
        const haze = sky(Math.cos(th) * Math.cos(0.02), Math.sin(th) * Math.cos(0.02), Math.sin(0.02)).map((v) => tone(v, T.exposure) * T.haze_gain) as C3;
        const hz = Math.min(0.97, Math.max(0, 1 - Math.exp(-(r - 40) / T.haze_dist) + 0.5 * Math.exp(-Math.max(p[2], 0) / 9) * sstep(55, 100, r)));
        col = lerp3(col, haze, hz);
        col = lerp3(groundColor(p[0], p[1]), col, sstep(46, 58, r)).map(clamp01) as C3;
        vid[i].push(mb.v(p, col));
      }
    });
    for (let i = 0; i < rr.length - 1; i++) for (let j = 0; j < nseg; j++) { const j2 = (j + 1) % nseg; mb.f(vid[i][j], vid[i][j2], vid[i + 1][j2], vid[i + 1][j]); }
    const mm = glowMat({ fog: false, gain: 0.95 });
    group.add(new THREE.Mesh(mb.geo(), mm));
  }

  // ── the platform ──
  const stone = new MB(), plain2 = new MB(), plain1 = new MB(), ring = new MB(), dots = new MB(), rune = new MB();
  const lathe = (mb: MB, prof: Array<[number, number]>, segs: number, at: P3, color: (p: P3) => readonly number[], capTop = true) => {
    const rows = prof.map(([h, r]) => Array.from({ length: segs }, (_, i) => { const p: P3 = [at[0] + r * Math.cos((2 * Math.PI * i) / segs), at[1] + r * Math.sin((2 * Math.PI * i) / segs), at[2] + h]; return mb.v(p, color(p)); }));
    for (let k = 0; k < rows.length - 1; k++) for (let i = 0; i < segs; i++) { const i2 = (i + 1) % segs; mb.f(rows[k][i], rows[k][i2], rows[k + 1][i2], rows[k + 1][i]); }
    if (capTop) { const top = rows[rows.length - 1].map((v) => mb.v(mb.pos.slice(v * 3, v * 3 + 3), mb.col.slice(v * 3, v * 3 + 3))); mb.f(...top); }
  };
  const torus = (mb: MB, major: number, minor: number, segs: number, msegs: number, z: number, sz = 1, c: readonly number[] = [1, 1, 1]) => {
    const rows = Array.from({ length: segs }, (_, i) => { const a = (2 * Math.PI * i) / segs; return Array.from({ length: msegs }, (_, j) => { const b = (2 * Math.PI * j) / msegs, r = major + minor * Math.cos(b); return mb.v([r * Math.cos(a), r * Math.sin(a), z + minor * sz * Math.sin(b)], c); }); });
    for (let i = 0; i < segs; i++) for (let j = 0; j < msegs; j++) { const i2 = (i + 1) % segs, j2 = (j + 1) % msegs; mb.f(rows[i][j], rows[i2][j], rows[i2][j2], rows[i][j2]); }
  };
  const box = (mb: MB, c: P3, size: P3, rotz: number, color: (local: P3, t: number) => readonly number[], jitter = 0) => {
    const cz = Math.cos(rotz), sz = Math.sin(rotz);
    const jit = new Map<string, P3>();
    const W = (lx: number, ly: number, lz: number) => {
      const key = `${lx},${ly},${lz}`;
      let j = jit.get(key);
      if (!j) { j = jitter ? [R.uniform(-0.03, 0.03), R.uniform(-0.03, 0.03), R.uniform(-0.02, 0.02)] : [0, 0, 0]; jit.set(key, j); }
      const x = lx * size[0] + j[0], y = ly * size[1] + j[1], z = lz * size[2] + j[2];
      return mb.v([c[0] + x * cz - y * sz, c[1] + x * sz + y * cz, c[2] + z], color([x, y, z], lz + 0.5));
    };
    const faces: Array<Array<[number, number, number]>> = [
      [[-0.5, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, 0.5, 0.5], [-0.5, 0.5, 0.5]], [[-0.5, 0.5, -0.5], [0.5, 0.5, -0.5], [0.5, -0.5, -0.5], [-0.5, -0.5, -0.5]],
      [[-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, -0.5, 0.5], [-0.5, -0.5, 0.5]], [[0.5, 0.5, -0.5], [-0.5, 0.5, -0.5], [-0.5, 0.5, 0.5], [0.5, 0.5, 0.5]],
      [[0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [0.5, 0.5, 0.5], [0.5, -0.5, 0.5]], [[-0.5, 0.5, -0.5], [-0.5, -0.5, -0.5], [-0.5, -0.5, 0.5], [-0.5, 0.5, 0.5]],
    ];
    for (const f of faces) mb.f(...f.map(([x, y, z]) => W(x, y, z)));
  };
  const stoneBox = (c: P3, size: P3, rotz: number, base: readonly number[]) => { const seed = R.uniform(0, 50); box(stone, c, size, rotz, (l, t) => stoneColor(base, t, noise2(l[0] * 2.5 + seed, l[1] * 2.5 + l[2] * 1.7)), 1); };
  const stoneCyl = (r: number, z0: number, h: number, base: readonly number[]) => { const seed = R.uniform(0, 50); lathe(stone, [[0, r], [h, r]], 48, [0, 0, z0], (p) => stoneColor(base, (p[2] - z0) / h, noise2(p[0] * 1.2 + seed, p[1] * 1.2))); };
  stoneCyl(8.2, 0, 1.4, T.stone[0]); stoneCyl(7.2, 1.4, 0.5, T.stone[3]); stoneCyl(6.6, 1.9, TOP - 1.9, T.stone[0]);
  torus(plain2, 6.6, 0.18, 48, 6, TOP, 1, T.stone[3]);
  const NW = 28;
  for (let i = 0; i < NW; i++) { const a = (2 * Math.PI * i) / NW, h = 1.4 + R.uniform(-0.08, 0.08); stoneBox([8.45 * Math.cos(a), 8.45 * Math.sin(a), h / 2], [1, 1.95, h], a, R.choice(T.stone)); }
  for (const [radius, h] of [[9.8, 0.9], [11, 0.55], [12.2, 0.3]]) for (let i = 0; i < 14; i++) {
    if (R.random() < 0.2) continue;
    const a = (2 * Math.PI * i) / 14 + R.uniform(-0.08, 0.08);
    stoneBox([radius * Math.cos(a), radius * Math.sin(a), h / 2], [1.3, 2.6, h], a + R.uniform(-0.1, 0.1), R.choice(T.stone));
  }
  for (const r of [5.8, 4.2, 2.6, 1.2]) torus(ring, r, 0.08, 48, 6, TOP + 0.02, 0.6);
  for (let i = 0; i < 16; i++) { const a = (2 * Math.PI * i) / 16 + Math.PI / 16; lathe(dots, [[0, 0.14], [0.04, 0.14]], 8, [5 * Math.cos(a), 5 * Math.sin(a), TOP], () => [1, 1, 1]); }
  // braziers on four of the wall blocks
  const flames: Array<{ m: THREE.Mesh; keys: Array<[number, number, number]> }> = [];
  const flameG = flameGeo(), flameM = glowMat({ gain: 1.05 });
  const lights: Env['lights'] = [];
  for (const i of [3, 10, 17, 24]) {
    const a = (2 * Math.PI * i) / NW, x = 8.45 * Math.cos(a), y = 8.45 * Math.sin(a), z = 1.4;
    lathe(plain2, [[0, 0.28], [0.9, 0.28]], 12, [x, y, z], () => T.stone[3]);
    lathe(plain1, [[0, 0.2], [0.35, 0.5]], 12, [x, y, z + 0.9], () => T.stone[0]);
    const m = new THREE.Mesh(flameG, flameM); m.position.set(x, y, z + 1.25); group.add(m);
    flames.push({ m, keys: Array.from({ length: 451 }, () => [R.uniform(0.7, 0.95), R.uniform(0.7, 0.95), R.uniform(1.3, 1.9)]) });
    lights.push({ pos: [x, y, z + 1.9], color: [1, 0.55, 0.2], intensity: time === 'night' ? 0.9 : 0.6, dist: 9, flicker: 0.25 });
  }
  // the monoliths (mirrored, so both players see the same scenery), runes glowing on their faces
  const monolith = (angDeg: number, radius: number, h: number, w = 1.8, d = 1.2) => {
    const a = rad(angDeg), x0 = radius * Math.cos(a), y0 = radius * Math.sin(a), z0 = gh(x0, y0) - 0.4, rz = a - Math.PI / 2;
    const base: C3 = R.choice(T.stone), seed = R.uniform(0, 50);
    const jit = new Map<string, P3>();
    const cz = Math.cos(rz), sz = Math.sin(rz);
    const vert = (u: number, v: number, wv: number) => { // u, v, w in -0.5..0.5 (cube grid with 3 cuts)
      const key = `${u},${v},${wv}`;
      let j = jit.get(key);
      if (!j) { j = [R.uniform(-0.07, 0.07), R.uniform(-0.07, 0.07), R.uniform(-0.05, 0.05)]; jit.set(key, j); }
      let lx = u * w, ly = v * d;
      const lz = (wv + 0.5) * h;
      if (lz > h * 0.5) { const f = 1 - 0.18 * ((lz - h * 0.5) / (h * 0.5)); lx *= f; ly *= f; }
      lx += j[0]; ly += j[1];
      const z = lz + j[2];
      const n = 0.5 * noise2(lx * 2.2 + seed, z * 0.7) + 0.5 * noise2(lx * 6 + seed, z * 0.25);
      return stone.v([x0 + lx * cz - ly * sz, y0 + lx * sz + ly * cz, z0 + z], stoneColor(base, z / h, n));
    };
    const G = 4; // 3 cuts → 4 cells
    const g = (k: number) => -0.5 + k / G;
    const face = (fn: (i: number, j: number) => [number, number, number]) => {
      for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) stone.f(vert(...fn(i, j)), vert(...fn(i + 1, j)), vert(...fn(i + 1, j + 1)), vert(...fn(i, j + 1)));
    };
    face((i, j) => [g(i), -0.5, g(j)]); face((i, j) => [g(j), 0.5, g(i)]);
    face((i, j) => [-0.5, g(j), g(i)]); face((i, j) => [0.5, g(i), g(j)]);
    face((i, j) => [g(j), g(i), 0.5]); face((i, j) => [g(i), g(j), -0.5]);
    for (const [zf, rw, rh] of [[0.32, 0.5, 0.07], [0.42, 0.12, 0.45], [0.55, 0.6, 0.07], [0.66, 0.12, 0.3]]) {
      const lx = 0, ly = -d / 2 - 0.02, lz = h * zf;
      box(rune, [x0 + lx * cz - ly * sz, y0 + lx * sz + ly * cz, z0 + lz], [rw, 0.1, rh], rz, () => [1, 1, 1]);
    }
  };
  for (const [ang, r, h] of [[172, 15, 8], [145, 14, 6.5], [118, 15, 9.5], [90, 16, 11], [62, 15, 8.5], [35, 14, 6.5], [8, 15, 8]]) { monolith(ang, r, h); monolith(ang + 180, r, h); }
  // rocks (on the camera side, framing the view)
  for (let i = 0; i < 12; i++) {
    const ang = rad(R.choice([R.uniform(195, 245), R.uniform(295, 345)])), r = R.uniform(13, 18), s = R.uniform(1, 2.2);
    const base: C3 = R.choice(T.stone), seed = R.uniform(0, 50), x = r * Math.cos(ang), y = r * Math.sin(ang), rz = R.uniform(0, 6.28);
    const geo = new THREE.IcosahedronGeometry(1, 1), q = geo.attributes.position;
    const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, gh(x, y) + 0.3 * s), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rz), new THREE.Vector3(s, s * 0.9, s * 0.7));
    const jit = new Map<string, number>();
    for (let k = 0; k < q.count; k += 3) {
      stone.f(...[0, 1, 2].map((j) => {
        const lx = q.getX(k + j), ly = q.getY(k + j), lz = q.getZ(k + j), key = `${lx.toFixed(3)},${ly.toFixed(3)},${lz.toFixed(3)}`;
        let jj = jit.get(key); if (jj === undefined) { jj = R.uniform(0.8, 1.2); jit.set(key, jj); }
        const v = new THREE.Vector3(lx * jj, ly * jj, lz * jj).applyMatrix4(m);
        return stone.v([v.x, v.y, v.z], stoneColor(base, (lz + 1) / 2, noise2(lx * 2 + seed, ly * 2 + lz)));
      }));
    }
    geo.dispose();
  }
  group.add(new THREE.Mesh(stone.geo(), vcMat()));
  group.add(new THREE.Mesh(plain2.geo(), vcMat({ flat: false })), new THREE.Mesh(plain1.geo(), vcMat()));
  const rings = new THREE.Mesh(ring.geo(), emitMat([1, 0.92, 0.75], 0.75 * Math.min(1.6, E)));
  rings.name = 'centre-pattern';
  group.add(rings, new THREE.Mesh(dots.geo(), emitMat([1, 0.92, 0.75], 0.75 * Math.min(1.6, E))));
  group.add(new THREE.Mesh(rune.geo(), emitMat([1, 0.3, 0.1], 1.1 * Math.min(1.4, E))));

  // grass (two halves that sway in turn) and flowers
  const SUN_AZ = rad(T.body_az);
  const grassMat = vcMat({ emit: 0.25 * (time === 'night' ? 1.4 : 1), double: true, morph: true });
  const grassHalves = [0, 1].map(() => {
    let tip0: C3 = T.grass_tip[0], lastR = -1;
    const g = grass({
      r: R, tufts: lite ? 120 : 200, rmin: 12.9, rspan: 34, gh,
      base: (r) => { const f = 1 - 0.55 * clamp01((r - 13) / 34); return [0.03 * f, 0.1 * f, 0.1 * f]; },
      tip: (r, ang) => {
        if (r !== lastR) { lastR = r; tip0 = lerp3(T.grass_tip[0], T.grass_tip[1], R.random()); }
        return mul3(lerp3(tip0, T.grass_rim, 0.3 * Math.abs(Math.cos(ang - SUN_AZ)) * (time === 'night' ? 0.5 : 1)), 1 - 0.55 * clamp01((r - 13) / 34));
      },
    });
    const m = new THREE.Mesh(g, grassMat); m.morphTargetInfluences = [0]; group.add(m); return m;
  });
  {
    const mb = new MB();
    for (let i = 0; i < (lite ? 40 : 70); i++) {
      const r = 14 + 22 * R.random(), a = R.uniform(0, 2 * Math.PI), x = r * Math.cos(a), y = r * Math.sin(a), z0 = gh(x, y), h = R.uniform(0.35, 0.7);
      const top: P3 = [x + R.uniform(-0.06, 0.06), y + R.uniform(-0.06, 0.06), z0 + h];
      mb.f(mb.v([x - 0.012, y, z0], [0.02, 0.07, 0.05]), mb.v([x + 0.012, y, z0], [0.02, 0.07, 0.05]), mb.v([top[0] + 0.012, top[1], top[2]], [0.08, 0.25, 0.12]), mb.v([top[0] - 0.012, top[1], top[2]], [0.08, 0.25, 0.12]));
      const pc: C3 = R.choice(T.flower as C3[]);
      const ctr = mb.v([top[0], top[1], top[2] + 0.02], [1, 0.9, 0.5]);
      const rg = Array.from({ length: 6 }, (_, k) => { const b = (2 * Math.PI * k) / 6; return mb.v([top[0] + 0.05 * Math.cos(b), top[1] + 0.05 * Math.sin(b), top[2] + 0.025], pc); });
      for (let k = 0; k < 6; k++) mb.f(ctr, rg[k], rg[(k + 1) % 6]);
    }
    group.add(new THREE.Mesh(mb.geo(), vcMat({ emit: T.flower_emit, double: true })));
  }
  const embers = drifters({ r: R, n: lite ? Math.round(T.embers * 0.6) : T.embers, at: () => { const a = R.uniform(0, 6.283), r = R.uniform(4, 26); return [r * Math.cos(a), r * Math.sin(a), R.uniform(1.5, 10)]; }, move: () => [R.uniform(-1, 1), 0, R.uniform(1.5, 3.5)], col: [1, 0.55, 0.15], size: 0.4 });
  if (T.embers > 0) group.add(embers.obj);

  const rig = skyRig({ th: T, W: lite ? 512 : 1024, bodies: BODIES, body: { kind: T.body, r: T.body_r }, sparkles: T.sparkles ?? 0, bigShare: 0.25, sparkleSize: { big: [1.5 * 2.18, 0.26 * 2.18], small: [0.6 * 2.18, 0.1 * 2.18], el: [30, 86] } });
  group.add(rig.group);
  return {
    group, floor: TOP,
    update(f) {
      rig.update(f);
      grassHalves.forEach((m, i) => { m.morphTargetInfluences![0] = pingpong(f, 45, 0, 1, i); });
      const ff = f % 3600, k = Math.floor(ff / 8), t = (ff - k * 8) / 8, e = t * t * (3 - 2 * t);
      for (const fl of flames) { const a = fl.keys[k % 450], b = fl.keys[(k + 1) % 450]; fl.m.scale.set(a[0] + (b[0] - a[0]) * e, a[1] + (b[1] - a[1]) * e, a[2] + (b[2] - a[2]) * e); }
      embers.update(f);
    },
    key: { dir: sph(T.body_az, T.body_el), color: T.key_col, intensity: T.key_e },
    ambient: { sky: mul3(T.fill_col, 0.6), ground: T.g_near, intensity: time === 'night' ? 0.45 : time === 'day' ? 0.8 : 0.6 },
    fog: { color: T.fog, near: 60, far: 140 },
    lights: [{ pos: [0, 0, TOP + 4], color: time === 'night' ? [0.75, 0.7, 1] : [1, 0.85, 0.6], intensity: 0.5, dist: 16 }, { pos: [0, 0, TOP + 0.5], color: [1, 0.5, 0.2], intensity: 0.35, dist: 8 }, ...lights],
    dispose() { rig.dispose(); disposeGroup(group); },
  };
}
