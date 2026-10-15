// WORLD TREE arena (port of "World tree.txt"): the arena sits on a small round of earth on top of a giant tree —
// a trunk with bark ridges and faint glowing veins falls away into seas of cloud, far tree crowns rise out
// of them; six standing stones with orbs, round bushes and a dark hedge along the edge, fireflies.
import * as THREE from 'three';
import {
  MB, additiveMat, clamp01, dayTheme, disposeGroup, drifters, emitMat, fbm2, lerp3, mul3, noise2, orbs, pingpong, rad, rand,
  skyFn, skyRig, slabArena, sph, sstep, stoneAt, tone, vcMat, wash, type C3, type Env, type P3, type Theme,
} from './kit';

const THEMES: Record<'SUNSET' | 'NIGHT', Theme> = {
  NIGHT: {
    body: 'moon', body_az: 62, body_el: 47, body_r: 0.034, body_span: 3.5, body_tint: [1, 0.88, 0.72], body_halo: [0.55, 0.5, 0.7], exposure: 1,
    stops: [[-90, [0.01, 0.008, 0.015]], [-2, [0.05, 0.07, 0.1]], [0, [0.085, 0.12, 0.17]], [4, [0.06, 0.08, 0.15]], [10, [0.035, 0.035, 0.11]], [22, [0.018, 0.01, 0.07]], [40, [0.01, 0.004, 0.045]], [65, [0.006, 0.003, 0.028]], [90, [0.004, 0.002, 0.02]]],
    glow: [[0.5, 0.006, [0.45, 0.4, 0.7]], [0.11, 0.012, [0.7, 0.62, 0.75]], [0.03, 0.04, [0.9, 0.8, 0.7]]],
    hw0: 0.8, anti: 0, anti_col: [0, 0, 0], stars: 1, star_n: 3800, milky: 0.018, milky_w: 0.3, milky_col: [0.2, 0.5, 0.5], far1: [0.012, 0.02, 0.03], far2: [0.012, 0.02, 0.03],
    cloud_scale: 2, cov0: 0.62, cov1: 0.8, cloud_opacity: 0.55, cloud_max: 0.42,
    cloud_lit_near: [0.12, 0.13, 0.22], cloud_lit_far: [0.07, 0.08, 0.15], cloud_shadow: [0.02, 0.02, 0.05], cloud_rim: [0.15, 0.16, 0.26],
    bark: [0.04, 0.026, 0.03], bark_hi: [0.1, 0.075, 0.075], vein: [0.1, 0.8, 0.55], moss: [0.015, 0.07, 0.045],
    earth_a: [0.012, 0.008, 0.01], earth_b: [0.03, 0.02, 0.022], bush_lo: [0.01, 0.075, 0.05], bush_hi: [0.03, 0.2, 0.13],
    hedge_lo: [0.004, 0.022, 0.018], hedge_hi: [0.012, 0.06, 0.045], can_col: [0.006, 0.028, 0.022], sea_col: [0.1, 0.12, 0.22], sea_a: 0.45,
    stone: [[0.16, 0.15, 0.22], [0.19, 0.18, 0.26], [0.13, 0.12, 0.19], [0.22, 0.2, 0.29]], rim_stone: [0.19, 0.18, 0.25],
    glow_col: [0.1, 0.6, 0.42], line_col: [0.15, 0.75, 0.52], rune_col: [0.3, 1, 0.75],
    fire_col: [0.55, 0.95, 0.8], fire_k: 1, orb_col: [0.55, 0.95, 0.8], orb_k: 1,
    emit: 1, sparkles: 8, world: [0.012, 0.008, 0.03], fog: [0.18, 0.2, 0.32],
    key_col: [0.85, 0.75, 0.65], key_e: 1.1, fill_col: [0.3, 0.22, 0.6], arena_col: [0.35, 0.85, 0.65], orb_light_col: [0.5, 0.95, 0.8], wash_col: [0.55, 0.85, 0.75],
  },
  SUNSET: {
    body: 'sun', body_az: 62, body_el: 9, body_r: 0.03, body_span: 1.4, body_tint: [1, 0.8, 0.5], body_halo: [1, 0.6, 0.3], exposure: 1,
    stops: [[-90, [0.02, 0.015, 0.03]], [-2, [0.25, 0.12, 0.12]], [0, [0.55, 0.22, 0.15]], [3, [0.8, 0.3, 0.14]], [8, [0.55, 0.2, 0.22]], [16, [0.28, 0.1, 0.28]], [30, [0.1, 0.05, 0.22]], [55, [0.03, 0.02, 0.1]], [90, [0.01, 0.008, 0.05]]],
    glow: [[0.55, 0.3, [1, 0.35, 0.1]], [0.16, 0.55, [1, 0.5, 0.15]], [0.045, 1.5, [1, 0.75, 0.4]]],
    hw0: 0.55, anti: 0.25, anti_col: [0.4, 0.15, 0.3], stars: 0.25, star_n: 1000, milky: 0, milky_w: 0.3, milky_col: [0.2, 0.5, 0.5], far1: [0.08, 0.05, 0.07], far2: [0.08, 0.05, 0.07],
    cloud_scale: 1.8, cov0: 0.55, cov1: 0.76, cloud_opacity: 0.8, cloud_max: 0.5,
    cloud_lit_near: [1, 0.45, 0.18], cloud_lit_far: [0.55, 0.22, 0.35], cloud_shadow: [0.07, 0.03, 0.1], cloud_rim: [1, 0.6, 0.25],
    bark: [0.06, 0.035, 0.035], bark_hi: [0.3, 0.15, 0.08], vein: [0.5, 0.8, 0.3], moss: [0.03, 0.08, 0.04],
    earth_a: [0.02, 0.012, 0.012], earth_b: [0.06, 0.035, 0.03], bush_lo: [0.015, 0.08, 0.05], bush_hi: [0.06, 0.22, 0.12],
    hedge_lo: [0.01, 0.03, 0.025], hedge_hi: [0.03, 0.08, 0.05], can_col: [0.02, 0.04, 0.035], sea_col: [0.6, 0.3, 0.3], sea_a: 0.4,
    stone: [[0.26, 0.22, 0.28], [0.3, 0.26, 0.31], [0.22, 0.19, 0.25], [0.33, 0.29, 0.34]], rim_stone: [0.3, 0.25, 0.28],
    glow_col: [0.2, 0.7, 0.4], line_col: [0.3, 0.85, 0.5], rune_col: [0.6, 1, 0.6],
    fire_col: [1, 0.85, 0.35], fire_k: 0.8, orb_col: [1, 0.85, 0.35], orb_k: 0.8,
    emit: 0.7, sparkles: 5, world: [0.15, 0.07, 0.12], fog: [0.4, 0.2, 0.2],
    key_col: [1, 0.58, 0.3], key_e: 3, fill_col: [0.5, 0.35, 0.7], arena_col: [0.7, 0.9, 0.5], orb_light_col: [1, 0.85, 0.35], wash_col: [1, 0.75, 0.5],
  },
};

const PR = 24, RT = PR + 1.6, TRUNK_DEPTH = 160;

export function buildWorldTree(time: 'day' | 'sunset' | 'night', lite: boolean): Env {
  const TH = time === 'night' ? THEMES.NIGHT : time === 'day'
    ? { ...dayTheme(THEMES.SUNSET), sea_col: [0.92, 0.94, 0.98], sea_a: 0.55, fire_k: 0, orb_k: 0.4, vein: [0.4, 0.75, 0.3], wash_col: [1, 0.97, 0.85] }
    : THEMES.SUNSET;
  const E = TH.emit, G = E * 0.75;
  const R = rand(31), R2 = rand(55);
  const group = new THREE.Group();
  const BODIES = [sph(TH.body_az, TH.body_el)];
  const sky = skyFn(TH, BODIES);
  const hzA = rad(TH.body_az + 180);
  const HAZE_C = sky(Math.cos(hzA) * Math.cos(0.02), Math.sin(hzA) * Math.cos(0.02), Math.sin(0.02)).map((v) => tone(v, TH.exposure)) as C3;
  const MA = rad(TH.body_az);
  const WIND: P3 = (() => { const v = new THREE.Vector3(0.8, 0.6, 0).normalize(); return [v.x, v.y, 0]; })();
  const STONES: C3[] = TH.stone;
  const rig = skyRig({ th: TH, W: lite ? 512 : 1024, bodies: BODIES, ridges: [], body: { kind: TH.body, r: TH.body_r, span: TH.body_span, size: TH.body === 'moon' ? 384 : 256, opts: TH.body === 'moon' ? { tint: TH.body_tint, halo: TH.body_halo, rings: [[1.75, 0.1], [3.25, 0.06]], moonGain: 1.15 } : { tint: [1, 0.97, 0.88] } }, sparkles: TH.sparkles ?? 0, bigShare: 0.25 });
  group.add(rig.group);

  // ── the earth on top of the tree, the giant trunk, the cloud seas ──
  const trunkR = (z: number) => RT * (1 + 0.25 * (1 - Math.exp(z / 60)));
  const earthH = (x: number, y: number) => 0.12 * Math.sin(x * 0.33) * Math.cos(y * 0.29) * sstep(8, 14, Math.hypot(x, y));
  const earthColor = (x: number, y: number) => lerp3(lerp3(TH.earth_a, TH.earth_b, clamp01(fbm2(x * 0.12 + 5, y * 0.12 - 3, 3) * 1.4 - 0.2)), TH.moss, clamp01((noise2(x * 0.4, y * 0.4) - 0.62) * 3) * 0.6);
  {
    const mb = new MB();
    const RR = [8, 10, 12, 14, 16, 18, 20, 22, PR - 1, PR, PR + 0.6, PR + 1.2, PR + 1.6], LIP: Record<number, number> = { [PR + 0.6]: 0.3, [PR + 1.2]: 0.15, [PR + 1.6]: -0.4 }, WS = 72;
    const rows = RR.map((r) => Array.from({ length: WS }, (_, s) => {
      const a = (2 * Math.PI * s) / WS, x = r * Math.cos(a), y = r * Math.sin(a);
      return mb.v([x, y, LIP[r] ?? earthH(x, y)], r <= PR + 0.01 ? earthColor(x, y) : lerp3(TH.bark, TH.moss, 0.5 + 0.3 * noise2(x * 0.5, y * 0.5)));
    }));
    for (let k = 0; k < RR.length - 1; k++) for (let s = 0; s < WS; s++) { const s2 = (s + 1) % WS; mb.f(rows[k][s], rows[k + 1][s], rows[k + 1][s2], rows[k][s2]); }
    group.add(new THREE.Mesh(mb.geo(), vcMat({ flat: false })));
  }
  {
    const mb = new MB();
    const N = lite ? 28 : 40, TS = lite ? 48 : 72;
    const rows = Array.from({ length: N }, (_, k) => {
      const z = -0.4 - TRUNK_DEPTH * (k / (N - 1)) ** 1.6;
      return Array.from({ length: TS }, (_, s) => {
        const th = (2 * Math.PI * s) / TS, r = trunkR(z) * (1 + 0.04 * Math.sin(14 * th + 0.8 * Math.sin(0.05 * z)) + 0.025 * Math.sin(5 * th + 0.02 * z));
        const rid = Math.sin(14 * th + 0.8 * Math.sin(0.05 * z));
        let c = lerp3(TH.bark, TH.bark_hi, clamp01(0.5 + 0.5 * rid) * 0.5);
        c = lerp3(c, TH.bark_hi, 0.4 * Math.max(0, Math.cos(th - MA)));
        c = lerp3(c, TH.moss, clamp01(1 + z / 25) * clamp01((noise2(th * 3, z * 0.15) - 0.4) * 2.5) * 0.8);
        const s7 = Math.abs(Math.sin(7 * th + 1.5 * Math.sin(0.04 * z + 3 * th)));
        c = lerp3(c, TH.vein, clamp01(1 - s7 * 7) * (0.4 + 0.6 * noise2(z * 0.05, th * 2)) * 0.9);
        return mb.v([r * Math.cos(th), r * Math.sin(th), z], lerp3(c, mul3(HAZE_C, 0.6), clamp01((-z - 15) / 110) ** 1.2));
      });
    });
    for (let k = 0; k < N - 1; k++) for (let s = 0; s < TS; s++) { const s2 = (s + 1) % TS; mb.f(rows[k][s], rows[k + 1][s], rows[k + 1][s2], rows[k][s2]); }
    group.add(new THREE.Mesh(mb.geo(), vcMat({ emit: 0.3, flat: false })));
  }
  const seas: Array<{ m: THREE.Mesh; s: number }> = [];
  ([[-26, TH.sea_a], [-52, TH.sea_a * 0.8]] as const).forEach(([z, alpha], idx) => {
    const mb = new MB(true), rin = trunkR(z) - 0.3;
    const RR = [rin, rin + 4, rin + 10, rin + 20, rin + 32, rin + 46, rin + 64, rin + 84, rin + 106, 150], SG = 64;
    const rows = RR.map((r) => Array.from({ length: SG }, (_, s) => {
      const a = (2 * Math.PI * s) / SG, x = r * Math.cos(a), y = r * Math.sin(a);
      const al = alpha * (0.55 + 0.45 * fbm2(x * 0.03 + idx * 7, y * 0.03, 3)) * sstep(0, 6, r - rin);
      return mb.v([x, y, z], [...lerp3(TH.sea_col, HAZE_C, sstep(60, 150, r)), al]);
    }));
    for (let k = 0; k < RR.length - 1; k++) for (let s = 0; s < SG; s++) { const s2 = (s + 1) % SG; mb.f(rows[k][s], rows[k + 1][s], rows[k + 1][s2], rows[k][s2]); }
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false, toneMapped: false });
    mat.color.setScalar(1.7);
    const m = new THREE.Mesh(mb.geo(), mat); m.renderOrder = 2;
    group.add(m); seas.push({ m, s: R2.choice([-1, 1]) * R2.uniform(0.15, 0.3) });
  });

  // ── the arena, six standing stones with glowing runes ──
  group.add(slabArena({ th: TH, r: R2, z0: -0.4, h: 1, rimZ0: -0.6, rimH: 0.95, glowZ0: -0.3, glowH: 0.75, lineCol: TH.line_col, runeCol: TH.rune_col, glowCol: TH.glow_col, glow: G }));
  const stone = new MB(), rune = new MB();
  const monoTops: P3[] = [];
  for (const deg of [0, 60, 120, 180, 240, 300]) {
    const a = rad(deg), radius = 12.5, h = R2.uniform(5, 8), w = 1.8, d = 1.2;
    const x0 = radius * Math.cos(a), y0 = radius * Math.sin(a), z0 = -0.4, rz = a - Math.PI / 2, cz = Math.cos(rz), sz = Math.sin(rz);
    const base: C3 = R2.choice(STONES), seed = R2.uniform(0, 50);
    const jit = new Map<string, P3>();
    const vert = (u: number, v: number, wv: number) => {
      const key = `${u},${v},${wv}`;
      let j = jit.get(key); if (!j) { j = [R2.uniform(-0.07, 0.07), R2.uniform(-0.07, 0.07), R2.uniform(-0.05, 0.05)]; jit.set(key, j); }
      let lx = u * w, ly = v * d; const lz = (wv + 0.5) * h;
      if (lz > h * 0.5) { const f = 1 - 0.18 * ((lz - h * 0.5) / (h * 0.5)); lx *= f; ly *= f; }
      lx += j[0]; ly += j[1]; const z = lz + j[2];
      return stone.v([x0 + lx * cz - ly * sz, y0 + lx * sz + ly * cz, z0 + z], stoneAt(base, z / h, lx, z * 0.7, seed, TH.moss));
    };
    const Gd = 4, g = (k: number) => -0.5 + k / Gd;
    const face = (fn: (i: number, j: number) => [number, number, number]) => { for (let i = 0; i < Gd; i++) for (let j = 0; j < Gd; j++) stone.f(vert(...fn(i, j)), vert(...fn(i + 1, j)), vert(...fn(i + 1, j + 1)), vert(...fn(i, j + 1))); };
    face((i, j) => [g(i), -0.5, g(j)]); face((i, j) => [g(j), 0.5, g(i)]); face((i, j) => [-0.5, g(j), g(i)]); face((i, j) => [0.5, g(i), g(j)]); face((i, j) => [g(j), g(i), 0.5]);
    for (const [zf, rw, rh] of [[0.32, 0.5, 0.07], [0.42, 0.12, 0.45], [0.55, 0.6, 0.07], [0.66, 0.12, 0.3]]) {
      const ly = -d / 2 - 0.02, lz = h * zf, cx = x0 - ly * sz, cy = y0 + ly * cz;
      rune.f(...[[-rw / 2, -rh / 2], [rw / 2, -rh / 2], [rw / 2, rh / 2], [-rw / 2, rh / 2]].map(([ux, uz]) => rune.v([cx + ux * cz, cy + ux * sz, z0 + lz + uz], [1, 1, 1])));
    }
    monoTops.push([x0, y0, h - 0.4]);
  }
  group.add(new THREE.Mesh(stone.geo(), vcMat()), new THREE.Mesh(rune.geo(), emitMat(TH.rune_col, 1.4 * G)));

  // ── bushes on the earth, the hedge along the edge, far crowns out of the clouds ──
  const dome = (mb: MB, c: P3, rx: number, ry: number, rz: number, segs: number, rows: number, col: (t: number, th: number) => readonly number[], sway = true) => {
    const rings = Array.from({ length: rows }, (_, i) => {
      const el = ((Math.PI / 2) * i) / rows, t = i / rows;
      return Array.from({ length: segs }, (_, j) => { const th = (2 * Math.PI * j) / segs, k = 0.1 * t * t * rz; return mb.v([c[0] + rx * Math.cos(el) * Math.cos(th), c[1] + ry * Math.cos(el) * Math.sin(th), c[2] + rz * Math.sin(el)], col(t, th), sway ? [[WIND[0] * k, WIND[1] * k, 0]] : undefined); });
    });
    const apex = mb.v([c[0], c[1], c[2] + rz], col(1, 0), sway ? [[WIND[0] * 0.1 * rz, WIND[1] * 0.1 * rz, 0]] : undefined);
    for (let i = 0; i < rows - 1; i++) for (let j = 0; j < segs; j++) { const j2 = (j + 1) % segs; mb.f(rings[i][j], rings[i][j2], rings[i + 1][j2], rings[i + 1][j]); }
    for (let j = 0; j < segs; j++) mb.f(rings[rows - 1][j], rings[rows - 1][(j + 1) % segs], apex);
  };
  const bushes = (items: Array<[number, number, number, number]>, lo: readonly number[], hi: readonly number[], segs: number, rows: number) => {
    const mb = new MB(false, 1);
    for (const [cx, cy, br, np] of items) {
      const tint = R2.uniform(0.85, 1.15), z0 = earthH(cx, cy) - 0.2;
      const col = (t: number, th: number) => mul3(lerp3(lo, hi, clamp01(t * (0.75 + 0.25 * Math.cos(th - MA))) ** 0.9), tint);
      for (let p = 0; p < np; p++) {
        const ang = R2.uniform(0, 6.283), dd = p ? R2.uniform(0, 0.6) * br : 0, rr = br * R2.uniform(0.7, 1);
        dome(mb, [cx + dd * Math.cos(ang), cy + dd * Math.sin(ang), z0], rr, rr, rr * 0.85, segs, rows, col);
      }
    }
    const m = new THREE.Mesh(mb.geo(), vcMat({ flat: false, morph: true })); m.morphTargetInfluences = [0]; group.add(m); return m;
  };
  const items: Array<[number, number, number, number]> = [];
  for (let tries = 0; items.length < (lite ? 40 : 70) && tries < 3000; tries++) {
    const a = R2.uniform(0, 2 * Math.PI), r = R2.uniform(11.5, PR - 1.5);
    if (((a * 180) / Math.PI) % 360 > 255 && ((a * 180) / Math.PI) % 360 < 285 && r > 15) continue;
    const x = r * Math.cos(a), y = r * Math.sin(a);
    if (monoTops.some(([mx, my]) => Math.hypot(x - mx, y - my) < 2.8)) continue;
    items.push([x, y, R2.uniform(1, 2.2), R2.int(2, 4)]);
  }
  const bushM = bushes(items, TH.bush_lo, TH.bush_hi, 12, 3);
  const hedge: Array<[number, number, number, number]> = Array.from({ length: 30 }, (_, i) => { const a = (2 * Math.PI * (i + R2.uniform(-0.3, 0.3))) / 30, r = PR - 0.6 + R2.uniform(-0.8, 0.8); return [r * Math.cos(a), r * Math.sin(a), R2.uniform(2, 3.5), 2]; });
  const hedgeM = bushes(hedge, TH.hedge_lo, TH.hedge_hi, 16, 4);
  {
    const mb = new MB();
    ([62, 85, 112, 140] as const).forEach((radius, idx) => {
      const k_ = 1 + 0.25 * idx;
      for (let i = 0; i < (lite ? 12 : 20); i++) {
        const a = (2 * Math.PI * (i + R.uniform(-0.4, 0.4))) / 20 + idx * 0.4, r = radius + R.uniform(-6, 6);
        for (let p = 0; p < 2; p++) {
          const off = p ? R.uniform(-9, 9) : 0, cx = r * Math.cos(a) - off * Math.sin(a), cy = r * Math.sin(a) + off * Math.cos(a);
          const rr = R.uniform(9, 16) * k_ * (p ? 0.7 : 1), rz = R.uniform(28, 46) * k_ * (p ? 0.75 : 1), hz = 0.35 + 0.15 * idx, tint = R.uniform(0.85, 1.15);
          dome(mb, [cx, cy, -30], rr, rr, rz, 14, 7, (t) => lerp3(mul3(TH.can_col, tint), mul3(HAZE_C, 0.7), clamp01(hz + 0.25 * t)), false);
        }
      }
    });
    group.add(new THREE.Mesh(mb.geo(), vcMat({ emit: 0.85, flat: false })));
  }

  // ── light: orbs over the stones and the earth, fireflies above and below the edge, the veil ──
  const orbList: Array<{ p: P3; k: number; amp: number }> = [];
  for (let i = 0; i < Math.round(18 * TH.orb_k * (lite ? 0.6 : 1)); i++) { const a = R2.uniform(0, 6.283), r = 10.5 + (PR - 8.5) * Math.sqrt(R2.random()); orbList.push({ p: [r * Math.cos(a), r * Math.sin(a), R2.uniform(1, 6)], k: R2.uniform(0.8, 1.5), amp: R2.uniform(0.15, 0.4) }); }
  for (const [px, py, pz] of monoTops) orbList.push({ p: [px, py, pz + 0.9], k: 1.4, amp: R2.uniform(0.15, 0.4) });
  const wisps = orbs({ list: orbList, col: TH.orb_col, gain: 1.2 });
  group.add(wisps.group);
  const nf = Math.round(160 * TH.fire_k * (lite ? 0.5 : 1)), nb = Math.round(40 * TH.fire_k * (lite ? 0.5 : 1));
  let fi = 0;
  const flies = drifters({ r: R2, n: nf + nb, at: () => {
    if (fi++ < nf) { const a = R2.uniform(0, 6.283), r = (PR + 4) * Math.sqrt(R2.random()); return [r * Math.cos(a), r * Math.sin(a), 0.3 + 8.7 * R2.random() ** 1.6]; }
    const a = R2.uniform(0, 6.283), r = R2.uniform(PR + 2, PR + 14); return [r * Math.cos(a), r * Math.sin(a), R2.uniform(-45, -2)];
  }, move: () => [R2.uniform(-2, 2), R2.uniform(-2, 2), R2.uniform(0.3, 1.2)], col: TH.fire_col, size: 0.3, twinkle: true });
  if (nf + nb > 0) group.add(flies.obj);
  const washMb = new MB(true);
  wash(washMb, 9.4, 0.7, (x, y) => { const r = Math.hypot(x, y); return r < 0.01 ? 1 : sstep(0, 3, 9.4 - r) * (0.7 + 0.3 * noise2(r * 0.4, Math.atan2(y, x) * 6.4)); }, TH.wash_col, 0.28 * 0.5);
  group.add(new THREE.Mesh(washMb.geo(), additiveMat()));

  return {
    group, floor: 0.6,
    update(f) {
      rig.update(f);
      bushM.morphTargetInfluences![0] = pingpong(f, 60, 0.15, 1, 1);
      hedgeM.morphTargetInfluences![0] = pingpong(f, 90, 0.15, 1, 1);
      const d = Math.sin(((f % 3600) / 3600) * Math.PI);
      for (const s of seas) s.m.rotation.z = s.s * d;
      wisps.update(f); flies.update(f);
    },
    key: { dir: BODIES[0], color: TH.key_col, intensity: TH.key_e },
    ambient: { sky: mul3(TH.fill_col, 0.6), ground: TH.earth_b, intensity: time === 'night' ? 0.4 : time === 'day' ? 0.8 : 0.5 },
    fog: { color: TH.fog, near: 50, far: 150 },
    lights: [{ pos: [0, 0, 3.5], color: TH.arena_col, intensity: 0.45, dist: 14 }, ...monoTops.slice(0, 4).map((p) => ({ pos: [p[0], p[1], p[2] + 0.9] as P3, color: TH.orb_light_col as C3, intensity: 0.35, dist: 8, flicker: 0.2 }))],
    dispose() { rig.dispose(); disposeGroup(group); },
  };
}
