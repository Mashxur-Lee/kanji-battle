// CASTLE arena (port of Castle.txt): a glowing slab arena in the middle of a battlefield — a castle on each
// side (both players see one) with lit windows, gate torches and waving flags, a road to each gate, braziers
// and red banners round the arena, duelling warrior silhouettes that clash, the fallen, a distant army that
// surges forward, dead grass and drifting embers.
import * as THREE from 'three';
import {
  MB, clamp01, dayTheme, disposeGroup, drifters, emitMat, fbm2, flameGeo, glowMat, grass, ground, lerp3, mul3, noise2, pingpong, rad, rand,
  skyRig, slabArena, sph, sstep, stoneAt, vcMat, type C3, type Env, type P3, type Theme,
} from './kit';

const THEMES: Record<'SUNSET' | 'NIGHT', Theme> = {
  SUNSET: {
    body: 'sun', body_az: 62, body_el: 6, body_r: 0.055, body_span: 4.8, body_tint: [1, 0.72, 0.5], body_halo: [0.8, 0.15, 0.1], body_rings: [[2.4, 0.14], [4.5, 0.08]], exposure: 1,
    stops: [[-90, [0.03, 0.01, 0.02]], [-2, [0.1, 0.04, 0.05]], [0, [0.3, 0.12, 0.14]], [3, [0.4, 0.1, 0.08]], [8, [0.3, 0.05, 0.06]], [16, [0.12, 0.02, 0.04]], [30, [0.05, 0.008, 0.025]], [55, [0.02, 0.005, 0.02]], [90, [0.012, 0.004, 0.015]]],
    glow: [[0.6, 0.22, [0.8, 0.15, 0.08]], [0.2, 0.45, [0.9, 0.3, 0.12]], [0.06, 1.2, [1, 0.6, 0.3]]],
    hw0: 0.6, anti: 0, anti_col: [0, 0, 0], stars: 0.15, star_n: 800,
    far1: [0.12, 0.08, 0.1], far2: [0.07, 0.04, 0.06],
    cloud_scale: 1.6, cov0: 0.52, cov1: 0.72, cloud_opacity: 0.9, cloud_max: 0.7,
    cloud_lit_near: [0.45, 0.16, 0.15], cloud_lit_far: [0.3, 0.1, 0.13], cloud_shadow: [0.1, 0.03, 0.06], cloud_rim: [0.6, 0.25, 0.2],
    g_near: [0.03, 0.014, 0.024], g_far: [0.008, 0.004, 0.01], g_road: [0.06, 0.035, 0.035],
    stone: [[0.2, 0.15, 0.18], [0.24, 0.18, 0.21], [0.17, 0.13, 0.16], [0.27, 0.21, 0.23]], rim_stone: [0.25, 0.19, 0.21], moss: [0.04, 0.025, 0.025],
    cs_stone: [0.045, 0.032, 0.045], cs_roof: [0.02, 0.012, 0.022], win_col: [1, 0.65, 0.2], win_emit: 3, flag_col: [0.45, 0.03, 0.07], torch_col: [1, 0.45, 0.12],
    sil: [0.012, 0.006, 0.012], sil_rim: [0.3, 0.1, 0.07], banner: [0.4, 0.03, 0.06],
    glow_col: [0.95, 0.35, 0.1], line_col: [1, 0.5, 0.15], rune_col: [1, 0.72, 0.3],
    grass_tip: [0.12, 0.05, 0.06], grass_base: [0.02, 0.01, 0.015], ember_col: [1, 0.5, 0.15],
    emit: 0.9, sparkles: 5, world: [0.15, 0.06, 0.08], fog: [0.3, 0.12, 0.14],
    key_col: [1, 0.5, 0.25], key_e: 3, fill_col: [0.55, 0.3, 0.6], arena_col: [1, 0.55, 0.25],
  },
  NIGHT: {
    body: 'moon', body_az: 62, body_el: 38, body_r: 0.034, body_span: 3.5, body_tint: [1, 0.88, 0.72], body_halo: [0.55, 0.45, 0.7], body_rings: [[1.75, 0.1], [3.25, 0.06]], exposure: 1,
    stops: [[-90, [0.004, 0.003, 0.01]], [-2, [0.02, 0.02, 0.05]], [0, [0.06, 0.05, 0.12]], [5, [0.04, 0.03, 0.1]], [15, [0.02, 0.015, 0.07]], [40, [0.008, 0.006, 0.04]], [90, [0.003, 0.002, 0.02]]],
    glow: [[0.5, 0.006, [0.45, 0.4, 0.8]], [0.11, 0.012, [0.7, 0.62, 0.85]], [0.03, 0.04, [0.9, 0.8, 0.8]]],
    hw0: 0.8, anti: 0, anti_col: [0, 0, 0], stars: 1, star_n: 4000,
    far1: [0.025, 0.022, 0.055], far2: [0.012, 0.01, 0.03],
    cloud_scale: 1.6, cov0: 0.55, cov1: 0.76, cloud_opacity: 0.6, cloud_max: 0.7,
    cloud_lit_near: [0.1, 0.1, 0.2], cloud_lit_far: [0.05, 0.05, 0.12], cloud_shadow: [0.01, 0.01, 0.03], cloud_rim: [0.14, 0.14, 0.26],
    g_near: [0.014, 0.012, 0.028], g_far: [0.004, 0.004, 0.012], g_road: [0.03, 0.026, 0.045],
    stone: [[0.14, 0.13, 0.2], [0.17, 0.16, 0.24], [0.12, 0.11, 0.17], [0.2, 0.18, 0.27]], rim_stone: [0.17, 0.16, 0.23], moss: [0.02, 0.03, 0.03],
    cs_stone: [0.03, 0.026, 0.05], cs_roof: [0.012, 0.01, 0.025], win_col: [1, 0.7, 0.25], win_emit: 4, flag_col: [0.25, 0.02, 0.05], torch_col: [1, 0.5, 0.15],
    sil: [0.006, 0.005, 0.012], sil_rim: [0.08, 0.09, 0.2], banner: [0.2, 0.02, 0.05],
    glow_col: [0.3, 0.4, 1], line_col: [0.4, 0.55, 1], rune_col: [0.65, 0.8, 1],
    grass_tip: [0.05, 0.07, 0.15], grass_base: [0.01, 0.01, 0.03], ember_col: [1, 0.5, 0.15],
    emit: 1, sparkles: 8, world: [0.01, 0.01, 0.04], fog: [0.05, 0.05, 0.12],
    key_col: [0.6, 0.65, 1], key_e: 1.2, fill_col: [0.3, 0.25, 0.6], arena_col: [0.55, 0.6, 1],
  },
};

const CASTLE_DIST = 78, CASTLE_ANGLES = [90, 270];

export function buildCastle(time: 'day' | 'sunset' | 'night', lite: boolean): Env {
  const TH = time === 'night' ? THEMES.NIGHT : time === 'day'
    ? { ...dayTheme(THEMES.SUNSET), win_emit: 1, sil_rim: [0.35, 0.35, 0.4], sil: [0.05, 0.05, 0.06], banner: [0.55, 0.05, 0.08], flag_col: [0.6, 0.05, 0.1], glow_col: [0.95, 0.5, 0.2], grass_tip: [0.3, 0.28, 0.15], grass_base: [0.08, 0.07, 0.04], g_near: [0.14, 0.12, 0.08], g_far: [0.1, 0.1, 0.08], g_road: [0.2, 0.16, 0.11], cs_stone: [0.22, 0.2, 0.22], cs_roof: [0.12, 0.08, 0.1] }
    : THEMES.SUNSET;
  const E = TH.emit, G = E * 0.75;
  const R = rand(13), R2 = rand(41);
  const group = new THREE.Group();
  const BODIES = [sph(TH.body_az, TH.body_el)];
  const CPOS = CASTLE_ANGLES.map((a) => [CASTLE_DIST * Math.cos(rad(a)), CASTLE_DIST * Math.sin(rad(a))]);
  const SUN_AZ = rad(TH.body_az), SUN_H = [Math.cos(SUN_AZ), Math.sin(SUN_AZ)];
  const WIND: P3 = (() => { const v = new THREE.Vector3(0.8, 0.6, 0).normalize(); return [v.x, v.y, 0]; })();
  const lane = (deg: number, r: number, rmin: number) => { const d = ((deg % 360) + 360) % 360; return d > 255 && d < 285 && r > rmin; };
  const STONES: C3[] = TH.stone;
  const gh = (x: number, y: number) => {
    const r = Math.hypot(x, y);
    let h = clamp01((r - 12) / 10) * 0.35 * (Math.sin(x * 0.09) + Math.cos(y * 0.11) + 0.5 * Math.sin((x + y) * 0.19));
    h += clamp01((r - 60) / 60) * 3 * Math.sin(x * 0.05 + 1) * Math.cos(y * 0.04);
    for (const [cx, cy] of CPOS) h *= sstep(22, 40, Math.hypot(x - cx, y - cy));
    return h;
  };
  const roadW = (x: number, y: number) => {
    let w = 0;
    for (const deg of CASTLE_ANGLES) {
      const a = rad(deg), dx = Math.cos(a), dy = Math.sin(a), al = x * dx + y * dy, lat = Math.abs(-x * dy + y * dx);
      if (al > 9) w = Math.max(w, Math.exp(-((lat / 4) ** 2)) * sstep(9, 16, al) * (1 - sstep(CASTLE_DIST - 10, CASTLE_DIST - 2, al)));
    }
    return w;
  };
  const groundColor = (x: number, y: number): C3 => {
    const t = clamp01((Math.hypot(x, y) - 10) / 70) ** 0.8, n = fbm2(x * 0.06 + 3, y * 0.06 - 7, 3);
    return lerp3(mul3(lerp3(TH.g_near, TH.g_far, t), 0.75 + 0.5 * n), TH.g_road, roadW(x, y) * 0.8);
  };
  group.add(new THREE.Mesh(ground([0, 4, 8, 10, 12, 13, 14, 16, 18, 21, 24, 28, 33, 40, 48, 57, 65, 72, 90, 110, 140], 64, gh, groundColor), vcMat({ flat: false })));

  // ── the arena, braziers, banners ──
  group.add(slabArena({ th: TH, r: R2, z0: -0.4, h: 1, rimZ0: -0.6, rimH: 0.95, glowZ0: -0.3, glowH: 0.75, lineCol: TH.line_col, runeCol: TH.rune_col, glowCol: TH.glow_col, glow: G }));
  const stone = new MB();
  const cyl = (r: number, z0: number, h: number, seg: number, base: readonly number[], at: [number, number]) => {
    const seed = R2.uniform(0, 50);
    const col = (p: P3, t: number) => stoneAt(base, t, p[0], p[1], seed, TH.moss);
    const ring = (z: number, t: number) => Array.from({ length: seg }, (_, s) => { const a = (2 * Math.PI * s) / seg, p: P3 = [at[0] + r * Math.cos(a), at[1] + r * Math.sin(a), z]; return stone.v(p, col(p, t)); });
    const b = ring(z0, 0), t = ring(z0 + h, 1), b2 = ring(z0, 0), t2 = ring(z0 + h, 1);
    for (let s = 0; s < seg; s++) { const s2 = (s + 1) % seg; stone.f(b2[s], b2[s2], t2[s2], t2[s]); }
    stone.f(...t); stone.f(...[...b].reverse());
  };
  const flames: Array<{ m: THREE.Mesh; keys: Array<[number, number, number]> }> = [];
  const flameG = flameGeo(), flameM = glowMat({ gain: 1.05 });
  const lights: Env['lights'] = [];
  for (const deg of [45, 135, 225, 315]) {
    const a = rad(deg), x = 9.35 * Math.cos(a), y = 9.35 * Math.sin(a);
    cyl(0.4, 0.3, 1.1, 12, STONES[3], [x, y]); cyl(0.55, 1.4, 0.3, 12, STONES[0], [x, y]);
    const m = new THREE.Mesh(flameG, flameM); m.position.set(x, y, 1.75); group.add(m);
    flames.push({ m, keys: Array.from({ length: 451 }, () => [R.uniform(0.7, 0.95), R.uniform(0.7, 0.95), R.uniform(1.3, 1.9)]) });
    lights.push({ pos: [x, y, 2.5], color: TH.torch_col, intensity: 0.7, dist: 9, flicker: 0.25 });
  }
  const poles = new MB(), cloth = new MB(false, 2);
  const boxInto = (mb: MB, c: P3, s: P3, rotz: number, col: (p: P3) => readonly number[]) => {
    const cz = Math.cos(rotz), sz = Math.sin(rotz);
    const V = (x: number, y: number, z: number) => { const lx = x * s[0], ly = y * s[1]; const p: P3 = [c[0] + lx * cz - ly * sz, c[1] + lx * sz + ly * cz, c[2] + z * s[2]]; return mb.v(p, col(p)); };
    for (const f of [[[-0.5, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, 0.5, 0.5], [-0.5, 0.5, 0.5]], [[-0.5, 0.5, -0.5], [0.5, 0.5, -0.5], [0.5, -0.5, -0.5], [-0.5, -0.5, -0.5]], [[-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, -0.5, 0.5], [-0.5, -0.5, 0.5]], [[0.5, 0.5, -0.5], [-0.5, 0.5, -0.5], [-0.5, 0.5, 0.5], [0.5, 0.5, 0.5]], [[0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [0.5, 0.5, 0.5], [0.5, -0.5, 0.5]], [[-0.5, 0.5, -0.5], [-0.5, -0.5, -0.5], [-0.5, -0.5, 0.5], [-0.5, 0.5, 0.5]]]) mb.f(...f.map(([x, y, z]) => V(x, y, z)));
  };
  const nBanners = lite ? 6 : 10;
  for (let i = 0; i < nBanners; i++) {
    const a = (2 * Math.PI * (i + R2.uniform(-0.2, 0.2))) / nBanners, r = R2.uniform(14, 20), x = r * Math.cos(a), y = r * Math.sin(a), z0 = gh(x, y), H = R2.uniform(6, 9);
    const sc = () => TH.cs_stone;
    boxInto(poles, [x, y, z0 + (H - 0.2) / 2], [0.2, 0.2, H + 0.2], Math.PI / 4, sc);
    const ang = R2.uniform(0, 3.14), tang = [-Math.sin(ang), Math.cos(ang)], nrm = [Math.cos(ang), Math.sin(ang)];
    boxInto(poles, [x, y, z0 + H - 0.2], [0.08, 1.3, 0.08], ang, sc);
    const top: P3 = [x, y, z0 + H - 0.3];
    const wave = (rr: number, ph: number): [number, number, number] => { const k = (0.35 * Math.sin(1.4 * rr + ph) * rr) / 5; return [nrm[0] * k + WIND[0] * (0.15 * rr) / 5, nrm[1] * k + WIND[1] * (0.15 * rr) / 5, 0]; };
    const rows = Array.from({ length: 6 }, (_, rr) => Array.from({ length: 3 }, (_, c) => cloth.v([top[0] + tang[0] * (c - 1) * 0.6, top[1] + tang[1] * (c - 1) * 0.6, top[2] - rr * 0.6], mul3(TH.banner, 1 - (0.35 * rr) / 5), [wave(rr, 0), wave(rr, Math.PI)])));
    const tip = cloth.v([top[0], top[1], top[2] - 3.6], mul3(TH.banner, 0.6), [wave(6, 0), wave(6, Math.PI)]);
    for (let rr = 0; rr < 5; rr++) for (let c = 0; c < 2; c++) cloth.f(rows[rr][c], rows[rr][c + 1], rows[rr + 1][c + 1], rows[rr + 1][c]);
    cloth.f(rows[5][0], rows[5][1], tip); cloth.f(rows[5][1], rows[5][2], tip);
  }
  const clothMat = vcMat({ double: true, morph: true });
  const banners = new THREE.Mesh(cloth.geo(), clothMat); banners.morphTargetInfluences = [0, 0];
  group.add(new THREE.Mesh(poles.geo(), vcMat()), banners, new THREE.Mesh(stone.geo(), vcMat()));

  // ── the castles: three towers, crenellated wall, gate, windows, torches, flags ──
  const castleFlags: THREE.Mesh[] = [];
  CASTLE_ANGLES.forEach((deg, idx) => {
    const body = new MB(), roofs = new MB(), wins = new MB(), gate = new MB(), torches = new MB(), flags = new MB(false, 2);
    const a = rad(deg), loc: P3 = [CASTLE_DIST * Math.cos(a), CASTLE_DIST * Math.sin(a), 0], rz = a - Math.PI / 2, cz = Math.cos(rz), sz = Math.sin(rz);
    const W = (p: P3): P3 => [loc[0] + p[0] * cz - p[1] * sz, loc[1] + p[0] * sz + p[1] * cz, p[2]];
    const scol = (p: P3): C3 => { const n = noise2(p[0] * 0.8 + idx * 10, p[2] * 0.8), ao = 0.6 + 0.4 * clamp01(p[2] / 6); return mul3(TH.cs_stone, ao * (0.75 + 0.5 * n) * (0.8 + 0.4 * clamp01(p[2] / 30))); };
    const box = (mb: MB, c: P3, s: P3, col: (p: P3) => readonly number[]) => {
      for (const f of [[[-0.5, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, 0.5, 0.5], [-0.5, 0.5, 0.5]], [[-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, -0.5, 0.5], [-0.5, -0.5, 0.5]], [[0.5, 0.5, -0.5], [-0.5, 0.5, -0.5], [-0.5, 0.5, 0.5], [0.5, 0.5, 0.5]], [[0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [0.5, 0.5, 0.5], [0.5, -0.5, 0.5]], [[-0.5, 0.5, -0.5], [-0.5, -0.5, -0.5], [-0.5, -0.5, 0.5], [-0.5, 0.5, 0.5]]]) {
        mb.f(...f.map(([x, y, z]) => { const lp: P3 = [c[0] + x * s[0], c[1] + y * s[1], c[2] + z * s[2]]; return mb.v(W(lp), col(lp)); }));
      }
    };
    const pyramid = (cx: number, cy: number, z: number, half: number, h: number) => {
      const bs: P3[] = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([sx, sy]) => [cx + sx * half, cy + sy * half, z]);
      const ap: P3 = [cx, cy, z + h];
      const rc = (p: P3) => mul3(TH.cs_roof, 0.8 + 0.4 * clamp01((p[2] - 22) / 22));
      for (let i = 0; i < 4; i++) { const p0 = bs[i], p1 = bs[(i + 1) % 4]; roofs.f(roofs.v(W(p0), rc(p0)), roofs.v(W(p1), rc(p1)), roofs.v(W(ap), rc(ap))); }
    };
    box(body, [0, 0, 6], [40, 4, 12], scol);
    for (let x = -18; x <= 18; x += 2.6) if (Math.abs(x) > 4.6) for (const yy of [-1.6, 1.6]) box(body, [x, yy, 12.7], [1.4, 0.8, 1.4], scol);
    for (const tx of [-20, 20]) {
      box(body, [tx, 0, 11], [8, 8, 22], scol);
      for (const zz of [12, 20]) box(body, [tx, 0, zz], [8.6, 8.6, 0.6], scol);
      pyramid(tx, 0, 22, 4.7, 9);
      box(body, [tx, 0, 31], [0.12, 0.12, 9], scol);
    }
    box(body, [0, 0, 17], [7, 7, 34], scol);
    for (const zz of [13, 24]) box(body, [0, 0, zz], [7.6, 7.6, 0.6], scol);
    pyramid(0, 0, 34, 4.3, 10);
    box(body, [0, 0, 46.5], [0.12, 0.12, 5], scol);
    for (const sx of [-2.9, 2.9]) box(body, [sx, -3.75, 3.8], [0.9, 0.6, 7.6], scol);
    box(body, [0, -3.75, 7.7], [6.8, 0.6, 0.9], scol);
    const gcol = (p: P3): C3 => (p[1] < -4.5 ? [0.04, 0.025, 0.02] : [0.006, 0.005, 0.008]);
    box(gate, [0, -3.6, 3.6], [4.6, 0.3, 7.2], gcol);
    for (let k = 0; k < 7; k++) box(gate, [-2.1 + 0.7 * k, -3.85, 3.7], [0.12, 0.2, 7.2], () => [0.02, 0.016, 0.014]);
    for (const zz of [2, 4.5, 6.8]) box(gate, [0, -3.85, zz], [4.6, 0.2, 0.12], () => [0.02, 0.016, 0.014]);
    { // the arch over the gate and the ramp down to the road
      const poly = Array.from({ length: 9 }, (_, k) => [2.3 * Math.cos((Math.PI * k) / 8), 7.2 + 2.3 * Math.sin((Math.PI * k) / 8)]);
      gate.f(...poly.map(([px, pz]) => gate.v(W([px, -3.75, pz]), [0.006, 0.005, 0.008])));
      const rp: P3[] = [[-3, -3.8, 0.45], [3, -3.8, 0.45], [5, -11, 0.03], [-5, -11, 0.03]];
      gate.f(...[...rp].reverse().map((p) => gate.v(W(p), [0.04, 0.025, 0.02])));
    }
    for (const z of [9.5, 15, 20.5, 26, 31]) box(wins, [0, -3.62, z], [0.8, 0.3, 1.7], () => [1, 1, 1]);
    for (const tx of [-20, 20]) for (const z of [5, 10, 15, 20]) box(wins, [tx, -4.12, z], [0.8, 0.3, 1.7], () => [1, 1, 1]);
    for (const sx of [-4.3, 4.3]) {
      box(body, [sx, -3.8, 4.2], [0.15, 0.15, 1], scol);
      const ico = new THREE.IcosahedronGeometry(0.35, 1), q = ico.attributes.position;
      for (let k = 0; k < q.count; k += 3) torches.f(...[0, 1, 2].map((j) => torches.v(W([sx + q.getX(k + j), -3.8 + q.getY(k + j), 5.1 + q.getZ(k + j) * 1.5]), [1, 1, 1])));
      ico.dispose();
      const tp = W([sx, -4.6, 5.3]);
      if (idx === 0) lights.push({ pos: tp, color: TH.torch_col, intensity: 0.6, dist: 12, flicker: 0.3 });
    }
    for (const [x0, y0, z0, w, h] of [[-20, 0, 31, 3, 1.5], [20, 0, 31, 3, 1.5], [0, 0, 46.8, 4, 2]]) { // swallow-tail flags
      const us = [0, 0.2, 0.4, 0.6, 0.82];
      const dl = (u: number, ph: number): [number, number, number] => { const wv = 0.5 * h * Math.sin(7 * u + ph) * u, wz = 0.1 * h * Math.sin(5 * u + ph) * u; return [-wv * sz, wv * cz, wz]; };
      const V = (x: number, z: number, u: number) => flags.v(W([x, y0, z]), TH.flag_col, [dl(u, 0), dl(u, Math.PI)]);
      const top = us.map((u) => V(x0 + w * u, z0 + h, u)), bot = us.map((u) => V(x0 + w * u, z0, u));
      const tt = V(x0 + w, z0 + h, 1), tb = V(x0 + w, z0, 1), nt = V(x0 + 0.9 * w, z0 + h / 2, 0.9);
      for (let k = 0; k < 4; k++) flags.f(bot[k], bot[k + 1], top[k + 1], top[k]);
      flags.f(top[4], tt, nt); flags.f(bot[4], nt, tb); flags.f(top[4], nt, bot[4]);
    }
    group.add(new THREE.Mesh(body.geo(), vcMat()), new THREE.Mesh(roofs.geo(), vcMat()), new THREE.Mesh(gate.geo(), vcMat({ double: true })));
    group.add(new THREE.Mesh(wins.geo(), emitMat(TH.win_col, Math.min(1.6, 0.5 + 0.3 * TH.win_emit * E))), new THREE.Mesh(torches.geo(), emitMat(TH.torch_col, 1.5)));
    const fm = new THREE.Mesh(flags.geo(), vcMat({ double: true, morph: true })); fm.morphTargetInfluences = [0, 0];
    group.add(fm); castleFlags.push(fm);
  });

  // ── warriors: duelling silhouettes (clash), the fallen, the distant army (surge) ──
  class Sil {
    mb: MB; war: Array<{ team: number; f: THREE.Vector3; axis: THREE.Vector3; pivot: THREE.Vector3 }> = [];
    constructor(readonly mode: 'clash' | 'surge' | null) { this.mb = new MB(false, mode === 'clash' ? 2 : mode === 'surge' ? 1 : 0); }
    pending: Array<{ p: P3; c: C3; wi: number; arm: boolean }> = [];
    faces: number[][] = [];
    part(c: THREE.Vector3, p0: THREE.Vector3, p1: THREE.Vector3, r0: number, r1: number, sides: number, wi = -1, arm = false) {
      const d = p1.clone().sub(p0); if (d.length() < 1e-6) return;
      const T = d.normalize(), ref = Math.abs(T.z) < 0.9 ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(1, 0, 0);
      const N = T.clone().cross(ref).normalize(), B = T.clone().cross(N);
      const rings = [[p0, r0], [p1, r1]].map(([p, r]) => Array.from({ length: sides }, (_, s) => {
        const a = (2 * Math.PI * s) / sides, v = (p as THREE.Vector3).clone().addScaledVector(N, Math.cos(a) * (r as number)).addScaledVector(B, Math.sin(a) * (r as number));
        const off = new THREE.Vector2(v.x - c.x, v.y - c.y), lit = off.length() > 1e-6 ? 0.5 + 0.5 * off.normalize().dot(new THREE.Vector2(SUN_H[0], SUN_H[1])) : 0.5;
        return this.add([v.x, v.y, v.z], lerp3(TH.sil, TH.sil_rim, 0.45 * lit * lit), wi, arm);
      }));
      for (let s = 0; s < sides; s++) { const s2 = (s + 1) % sides; this.faces.push([rings[0][s], rings[0][s2], rings[1][s2], rings[1][s]]); }
      this.faces.push([...rings[0]].reverse()); this.faces.push(rings[1]);
    }
    add(p: P3, c: C3, wi: number, arm: boolean) { this.pending.push({ p, c, wi, arm }); return this.pending.length - 1; }
    warrior(pos: THREE.Vector3, yaw: number, kind: string, team: number) {
      const wi = this.war.length, Rm = new THREE.Matrix4().makeRotationZ(yaw - Math.PI / 2);
      const P = (x: number, y: number, z: number) => pos.clone().add(new THREE.Vector3(x, y, z).applyMatrix4(Rm));
      const c = pos.clone().add(new THREE.Vector3(0, 0, 1));
      const add = (a: P3, b: P3, r0: number, r1: number, s: number, arm = false) => this.part(c, P(...a), P(...b), r0, r1, s, wi, arm);
      for (const [sx, foot, knee] of [[-1, [-0.22, 0.38, 0], [-0.17, 0.35, 0.5]], [1, [0.22, -0.3, 0], [0.17, -0.05, 0.5]]] as const) { add([(sx as number) * 0.11, 0, 0.95], knee as unknown as P3, 0.1, 0.075, 4); add(knee as unknown as P3, foot as unknown as P3, 0.075, 0.06, 4); }
      add([0, 0, 0.95], [0, 0.1, 1.48], 0.2, 0.23, 6); add([0, 0.16, 1.58], [0, 0.16, 1.74], 0.11, 0.11, 6); add([0, 0.16, 1.74], [0, 0.16, 1.92], 0.12, 0.02, 6);
      add([-0.27, 0.1, 1.42], [-0.4, 0.38, 1.25], 0.07, 0.06, 4); add([-0.4, 0.38, 1.25], [-0.3, 0.62, 1.3], 0.06, 0.05, 4);
      if (kind !== 'spear') add([-0.35, 0.62, 1.2], [-0.35, 0.7, 1.2], 0.42, 0.42, 8);
      add([0.27, 0.1, 1.42], [0.42, 0.3, 1.6], 0.07, 0.06, 4, true); add([0.42, 0.3, 1.6], [0.3, 0.5, 1.85], 0.06, 0.05, 4, true);
      if (kind === 'sword') add([0.3, 0.5, 1.85], [0.3, 1.25, 2.45], 0.03, 0.02, 4, true);
      else if (kind === 'axe') { add([0.3, 0.5, 1.7], [0.3, 1, 2.35], 0.035, 0.035, 4, true); add([0.3, 0.95, 2.28], [0.3, 1.12, 2.45], 0.16, 0.02, 4, true); }
      else { add([0.3, -0.2, 1.4], [0.3, 2, 2.1], 0.03, 0.025, 4, true); add([0.3, 2, 2.1], [0.3, 2.3, 2.2], 0.06, 0, 4, true); }
      const cape = ([[-0.22, -0.05, 1.45], [0.22, -0.05, 1.45], [0.28, -0.55, 0.8], [-0.28, -0.55, 0.8]] as P3[]).map((q) => { const v = P(...q); return this.add([v.x, v.y, v.z], TH.sil, wi, false); });
      this.faces.push(cape);
      this.war.push({ team, f: new THREE.Vector3(0, 1, 0).applyMatrix4(Rm), axis: new THREE.Vector3(1, 0, 0).applyMatrix4(Rm), pivot: P(0.27, 0.1, 1.42) });
    }
    finish() {
      const idx = this.pending.map((q) => {
        const deltas: number[][] = [];
        const co = new THREE.Vector3(...q.p);
        if (this.mode === 'clash') for (const lead of [0, 1]) {
          if (q.wi < 0) { deltas.push([0, 0, 0]); continue; }
          const w = this.war[q.wi], atk = w.team === lead, d = w.f.clone().multiplyScalar(atk ? 0.32 : -0.22);
          let p = co.clone().add(d);
          if (q.arm) p = w.pivot.clone().add(d).add(co.clone().sub(w.pivot).applyAxisAngle(w.axis, rad(atk ? -60 : 25)));
          deltas.push([p.x - co.x, p.y - co.y, p.z - co.z]);
        }
        if (this.mode === 'surge') { const w = this.war[q.wi]; deltas.push([w.f.x * 0.5, w.f.y * 0.5, q.arm ? 0.3 : 0]); }
        return this.mb.v(q.p, q.c, deltas);
      });
      for (const f of this.faces) this.mb.f(...f.map((i) => idx[i]));
      return this.mb.geo();
    }
  }
  const silMat = vcMat({ morph: true, double: true });
  // every duel is its own mesh with its own rhythm (speed, phase, pauses and how hard each side presses),
  // so the battlefield never moves in step
  const duels: Array<{ m: THREE.Mesh; w: number; w2: number; w3: number; p: number; p2: number; p3: number; bias: number }> = [];
  const nCl = lite ? 5 : 8;
  for (let i = 0; i < nCl; i++) {
    let ang = (2 * Math.PI * (i + R2.uniform(-0.3, 0.3))) / nCl;
    const r = R2.uniform(17, 36);
    if (lane((ang * 180) / Math.PI, r, 15)) ang += 0.6;
    const cx = r * Math.cos(ang), cy = r * Math.sin(ang);
    for (let k = 0; k < 3; k++) {
      const s = new Sil('clash');
      const a = R2.uniform(0, 6.283), dc = new THREE.Vector3(cx + R2.uniform(-4.5, 4.5), cy + R2.uniform(-4.5, 4.5), 0), dirv = new THREE.Vector3(Math.cos(a), Math.sin(a), 0), gap = R2.uniform(0.9, 1.1);
      for (const [team, sg] of [[0, -1], [1, 1]]) { const pos = dc.clone().addScaledVector(dirv, gap * sg); pos.z = gh(pos.x, pos.y); s.warrior(pos, team === 0 ? a : a + Math.PI, R2.choice(['sword', 'sword', 'axe', 'spear']), team); }
      const m = new THREE.Mesh(s.finish(), silMat); m.morphTargetInfluences = [0, 0]; group.add(m);
      duels.push({ m, w: (2 * Math.PI) / R.uniform(40, 95), w2: (2 * Math.PI) / R.uniform(110, 260), w3: (2 * Math.PI) / R.uniform(150, 400), p: R.uniform(0, 6.28), p2: R.uniform(0, 6.28), p3: R.uniform(0, 6.28), bias: R.uniform(-0.35, 0.35) });
    }
  }
  { // the fallen
    const s = new Sil(null);
    for (let i = 0; i < 16; i++) {
      const a = R2.uniform(0, 6.283), r = R2.uniform(13, 45);
      if (lane((a * 180) / Math.PI, r, 14)) continue;
      const pos = new THREE.Vector3(r * Math.cos(a), r * Math.sin(a), 0); pos.z = gh(pos.x, pos.y);
      const Rz = new THREE.Matrix4().makeRotationZ(R2.uniform(0, 6.283)), P = (x: number, y: number, z: number) => pos.clone().add(new THREE.Vector3(x, y, z).applyMatrix4(Rz)), c = pos.clone().add(new THREE.Vector3(0, 0, 0.2));
      s.part(c, P(0, -0.4, 0.18), P(0, 0.45, 0.2), 0.2, 0.22, 6); s.part(c, P(0, 0.55, 0.18), P(0, 0.7, 0.2), 0.11, 0.11, 6);
      s.part(c, P(-0.1, -0.4, 0.12), P(-0.2, -1.2, 0.1), 0.09, 0.07, 4); s.part(c, P(0.1, -0.4, 0.12), P(0.25, -1.1, 0.12), 0.09, 0.07, 4);
      s.part(c, P(-0.25, 0.35, 0.18), P(-0.6, 0.1, 0.12), 0.06, 0.05, 4); s.part(c, P(0.25, 0.35, 0.18), P(0.55, 0.7, 0.1), 0.06, 0.05, 4);
      s.part(c, P(0.7, 0.2, 0), P(0.9, 0.2, 1.8), 0.03, 0.025, 4); s.part(c, P(-0.9, 0, 0.05), P(-0.9, 0, 0.12), 0.4, 0.4, 8);
    }
    group.add(new THREE.Mesh(s.finish(), vcMat({ double: true })));
  }
  const armies: Array<{ m: THREE.Mesh; w: number; p: number; w2: number; p2: number }> = [];
  { // the distant army, in clumps — each clump surges forward on its own
    const clumps: THREE.Vector3[] = [];
    for (let k = 0; k < 6; k++) { let a = R2.uniform(0, 6.283); const r = R2.uniform(45, 90); if (lane((a * 180) / Math.PI, r, 40)) a += 0.8; clumps.push(new THREE.Vector3(r * Math.cos(a), r * Math.sin(a), 0)); }
    const n = lite ? 70 : 120, sils = clumps.map(() => new Sil('surge'));
    for (let i = 0; i < n; i++) {
      const s = sils[i % clumps.length], cc = clumps[i % clumps.length], pos = cc.clone().add(new THREE.Vector3(R2.uniform(-9, 9), R2.uniform(-9, 9), 0)); pos.z = gh(pos.x, pos.y);
      const yaw = Math.atan2(cc.y - pos.y, cc.x - pos.x) + R2.uniform(-0.5, 0.5), wi = s.war.length, Rm = new THREE.Matrix4().makeRotationZ(yaw - Math.PI / 2);
      const P = (x: number, y: number, z: number) => pos.clone().add(new THREE.Vector3(x, y, z).applyMatrix4(Rm)), c = pos.clone().add(new THREE.Vector3(0, 0, 0.9));
      s.part(c, P(0, 0, 0), P(0, 0, 1.45), 0.28, 0.22, 4, wi); s.part(c, P(0, 0.05, 1.45), P(0, 0.05, 1.65), 0.12, 0.12, 4, wi); s.part(c, P(0.3, -0.3, 0.9), P(0.3, 2, 2.4), 0.03, 0.025, 4, wi, true);
      s.war.push({ team: 0, f: new THREE.Vector3(0, 1, 0).applyMatrix4(Rm), axis: new THREE.Vector3(1, 0, 0).applyMatrix4(Rm), pivot: P(0, 0, 1.4) });
    }
    for (const s of sils) { const m = new THREE.Mesh(s.finish(), silMat); m.morphTargetInfluences = [0, 0]; group.add(m); armies.push({ m, w: (2 * Math.PI) / R.uniform(90, 170), p: R.uniform(0, 6.28), w2: (2 * Math.PI) / R.uniform(300, 600), p2: R.uniform(0, 6.28) }); }
  }

  // ── dead grass, embers ──
  const grassM = new THREE.Mesh(grass({ r: R, tufts: lite ? 320 : 600, rmin: 11.5, rspan: 55, gh, h: [0.45, 1.1], skip: (deg, r) => lane(deg, r, 16), base: (r) => mul3(TH.grass_base, 1 - 0.6 * clamp01((r - 12) / 55)), tip: (r) => mul3(TH.grass_tip, 1 - 0.6 * clamp01((r - 12) / 55)) }), vcMat({ emit: 0.1, double: true, morph: true }));
  grassM.morphTargetInfluences = [0]; group.add(grassM);
  const embers = drifters({ r: R2, n: lite ? 24 : 40, at: () => { const a = R2.uniform(0, 6.283), r = 30 * Math.sqrt(R2.random()); return [r * Math.cos(a), r * Math.sin(a), R2.uniform(0.5, 9)]; }, move: () => [R2.uniform(-1, 1), 0, R2.uniform(1.5, 3.5)], col: TH.ember_col, size: 0.4 });
  if (time !== 'day') group.add(embers.obj);

  const rig = skyRig({ th: TH, W: lite ? 512 : 1024, bodies: BODIES, body: { kind: TH.body, r: TH.body_r, span: TH.body_span, size: 384, opts: { tint: TH.body_tint, halo: TH.body_halo, rings: TH.body_rings, sunInner: [0.9, 0.5, 0.32], sunHalo: 0.5, moonGain: 1.15 } }, sparkles: TH.sparkles ?? 0, bigShare: 0.25 });
  group.add(rig.group);
  return {
    group, floor: 0.6,
    update(f) {
      rig.update(f);
      for (const d of duels) {
        // who presses wanders irregularly; sometimes both hold back for a moment
        const x = Math.sin(f * d.w + d.p + 1.4 * Math.sin(f * d.w2 + d.p2)) + d.bias, k = 0.55 + 0.45 * Math.sin(f * d.w3 + d.p3);
        const ia = clamp01(x) * k, ib = clamp01(-x) * k;
        d.m.morphTargetInfluences![0] = ia * ia * (3 - 2 * ia); d.m.morphTargetInfluences![1] = ib * ib * (3 - 2 * ib);
      }
      for (const a of armies) a.m.morphTargetInfluences![0] = clamp01(0.5 + 0.6 * Math.sin(f * a.w + a.p) * (0.6 + 0.4 * Math.sin(f * a.w2 + a.p2)));
      const w = pingpong(f, 90);
      banners.morphTargetInfluences![0] = w; banners.morphTargetInfluences![1] = 1 - w;
      for (const fm of castleFlags) { fm.morphTargetInfluences![0] = w; fm.morphTargetInfluences![1] = 1 - w; }
      grassM.morphTargetInfluences![0] = pingpong(f, 45);
      const ff = f % 3600, k = Math.floor(ff / 8), t = (ff - k * 8) / 8, e = t * t * (3 - 2 * t);
      for (const fl of flames) { const a = fl.keys[k % 450], b = fl.keys[(k + 1) % 450]; fl.m.scale.set(a[0] + (b[0] - a[0]) * e, a[1] + (b[1] - a[1]) * e, a[2] + (b[2] - a[2]) * e); }
      embers.update(f);
    },
    key: { dir: BODIES[0], color: TH.key_col, intensity: TH.key_e },
    ambient: { sky: mul3(TH.fill_col, 0.6), ground: TH.g_near, intensity: time === 'night' ? 0.45 : time === 'day' ? 0.8 : 0.55 },
    fog: { color: TH.fog, near: 60, far: 160 },
    lights: [{ pos: [0, 0, 3.5], color: TH.arena_col, intensity: 0.45, dist: 14 }, ...lights],
    dispose() { rig.dispose(); disposeGroup(group); },
  };
}
