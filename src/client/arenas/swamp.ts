// SWAMP arena (port of Swaps.txt): mossy cracked slabs on dark still water with ripples and drifting mist,
// four broken pillars with a wisp floating over each, stepping stones, dry trees with hanging moss on mud
// mounds, cattails, lily pads, frogs whose eyes blink, faint far trees in the fog, fireflies.
import * as THREE from 'three';
import {
  MB, additiveMat, angdiff, clamp01, dayTheme, disposeGroup, drifters, emitMat, fbm2, glowMat, lerp3, mul3, noise2, orbs, pingpong, rad, rand,
  skyFn, skyRig, slabArena, sph, sstep, stoneAt, tone, vcMat, wash, type C3, type Env, type P3, type Theme,
} from './kit';

const THEMES: Record<'SUNSET' | 'NIGHT', Theme> = {
  NIGHT: {
    body: 'moon', body_az: 112, body_el: 40, body_r: 0.034, body_span: 3.5, body_tint: [1, 0.97, 0.7], exposure: 1,
    stops: [[-90, [0.004, 0.006, 0.008]], [-2, [0.03, 0.04, 0.042]], [0, [0.07, 0.08, 0.085]], [5, [0.04, 0.05, 0.06]], [15, [0.014, 0.018, 0.032]], [40, [0.004, 0.006, 0.016]], [90, [0.0015, 0.002, 0.008]]],
    glow: [[0.5, 0.004, [0.4, 0.5, 0.5]], [0.11, 0.01, [0.6, 0.7, 0.55]], [0.03, 0.04, [0.8, 0.85, 0.6]]],
    hw0: 0.8, anti: 0, anti_col: [0, 0, 0], stars: 0.9, star_n: 4500, milky: 0.006,
    far1: [0.022, 0.028, 0.03], far2: [0.014, 0.018, 0.02],
    cloud_scale: 1.5, cov0: 0.6, cov1: 0.8, cloud_opacity: 0.35,
    cloud_lit_near: [0.06, 0.07, 0.06], cloud_lit_far: [0.02, 0.025, 0.025], cloud_shadow: [0.004, 0.005, 0.008], cloud_rim: [0.08, 0.09, 0.07],
    water_lo: [0.005, 0.01, 0.01], water_hi: [0.02, 0.032, 0.03],
    stone: [[0.13, 0.15, 0.16], [0.15, 0.17, 0.18], [0.11, 0.13, 0.14], [0.17, 0.19, 0.19]], rim_stone: [0.15, 0.17, 0.16], moss: [0.03, 0.08, 0.03],
    bark_dark: [0.01, 0.011, 0.018], bark_lit: [0.035, 0.04, 0.05], bark_rim: [0.25, 0.3, 0.38], bark_rim_k: 0.35,
    vine_a: [0.03, 0.05, 0.025], vine_b: [0.06, 0.09, 0.04], mud: [0.02, 0.025, 0.018], reed: [0.012, 0.018, 0.012], cat: [0.016, 0.011, 0.009],
    lily: [[0.03, 0.07, 0.035], [0.04, 0.085, 0.04], [0.025, 0.055, 0.03]],
    back_col: [0.02, 0.025, 0.028], mist_col: [0.3, 0.36, 0.34], mist_a: 0.1,
    fire_col: [0.55, 0.75, 0.15], fire_k: 1, orb_col: [0.55, 0.75, 0.15], orb_k: 1, eye_col: [0.6, 0.85, 0.2],
    glow_col: [0.3, 0.75, 0.2], line_col: [0.4, 0.85, 0.25], rune_col: [0.65, 0.95, 0.35],
    emit: 1, sparkles: 10, world: [0.008, 0.012, 0.015], fog: [0.06, 0.07, 0.07],
    key_col: [0.65, 0.75, 0.65], key_e: 1, fill_col: [0.2, 0.3, 0.35],
    arena_col: [0.55, 0.9, 0.4], orb_light_col: [0.6, 0.9, 0.3], wash_col: [0.55, 0.8, 0.55],
  },
  SUNSET: {
    body: 'sun', body_az: 90, body_el: 7, body_r: 0.03, body_span: 1.4, body_tint: [1, 0.8, 0.5], exposure: 1,
    stops: [[-90, [0.02, 0.02, 0.025]], [-2, [0.2, 0.12, 0.08]], [0, [0.45, 0.25, 0.12]], [3, [0.7, 0.32, 0.12]], [8, [0.45, 0.22, 0.15]], [16, [0.2, 0.15, 0.2]], [30, [0.07, 0.07, 0.14]], [55, [0.025, 0.03, 0.08]], [90, [0.008, 0.012, 0.04]]],
    glow: [[0.55, 0.25, [1, 0.4, 0.1]], [0.16, 0.5, [1, 0.5, 0.15]], [0.045, 1.4, [1, 0.75, 0.4]]],
    hw0: 0.55, anti: 0.25, anti_col: [0.35, 0.2, 0.2], stars: 0.2, star_n: 1200, milky: 0,
    far1: [0.14, 0.09, 0.08], far2: [0.08, 0.06, 0.06],
    cloud_scale: 1.7, cov0: 0.52, cov1: 0.74, cloud_opacity: 0.8,
    cloud_lit_near: [0.9, 0.4, 0.15], cloud_lit_far: [0.4, 0.2, 0.25], cloud_shadow: [0.06, 0.04, 0.08], cloud_rim: [0.9, 0.5, 0.2],
    water_lo: [0.012, 0.02, 0.02], water_hi: [0.05, 0.06, 0.05],
    stone: [[0.2, 0.2, 0.2], [0.24, 0.23, 0.22], [0.17, 0.17, 0.17], [0.27, 0.26, 0.24]], rim_stone: [0.24, 0.22, 0.2], moss: [0.05, 0.1, 0.04],
    bark_dark: [0.02, 0.016, 0.018], bark_lit: [0.07, 0.055, 0.055], bark_rim: [1, 0.5, 0.2], bark_rim_k: 0.5,
    vine_a: [0.06, 0.09, 0.03], vine_b: [0.1, 0.12, 0.04], mud: [0.05, 0.04, 0.03], reed: [0.03, 0.035, 0.02], cat: [0.04, 0.02, 0.015],
    lily: [[0.05, 0.1, 0.04], [0.07, 0.12, 0.05], [0.04, 0.08, 0.04]],
    back_col: [0.1, 0.07, 0.07], mist_col: [0.9, 0.55, 0.35], mist_a: 0.12,
    fire_col: [0.9, 0.85, 0.25], fire_k: 0.6, orb_col: [0.9, 0.85, 0.25], orb_k: 0.6, eye_col: [0.9, 0.85, 0.25],
    glow_col: [0.4, 0.75, 0.25], line_col: [0.5, 0.85, 0.3], rune_col: [0.8, 0.95, 0.45],
    emit: 0.7, sparkles: 6, world: [0.1, 0.06, 0.07], fog: [0.35, 0.2, 0.15],
    key_col: [1, 0.6, 0.3], key_e: 3, fill_col: [0.5, 0.45, 0.7],
    arena_col: [0.7, 0.9, 0.4], orb_light_col: [0.8, 0.9, 0.3], wash_col: [1, 0.75, 0.45],
  },
};

export function buildSwamp(time: 'day' | 'sunset' | 'night', lite: boolean): Env {
  const TH = time === 'night' ? THEMES.NIGHT : time === 'day'
    ? { ...dayTheme(THEMES.SUNSET), water_lo: [0.03, 0.05, 0.05], water_hi: [0.09, 0.12, 0.11], mist_col: [0.85, 0.9, 0.9], mist_a: 0.1, fire_k: 0, orb_k: 0.4, bark_rim: [1, 0.95, 0.8], back_col: [0.3, 0.36, 0.38], wash_col: [1, 0.97, 0.85] }
    : THEMES.SUNSET;
  const E = TH.emit, G = E * 0.75;
  const R = rand(21), R2 = rand(77);
  const group = new THREE.Group();
  const BODIES = [sph(TH.body_az, TH.body_el)];
  const sky = skyFn(TH, BODIES);
  const hz = rad(TH.body_az + 180);
  const HAZE_C = sky(Math.cos(hz) * Math.cos(0.02), Math.sin(hz) * Math.cos(0.02), Math.sin(0.02)).map((v) => tone(v, TH.exposure)) as C3;
  const STONES: C3[] = TH.stone;
  const rig = skyRig({ th: TH, W: lite ? 512 : 1024, bodies: BODIES, ridgeKind: 'trees', ridges: [[0.012, 0.03, 31, 0.45, TH.far1], [0.004, 0.02, 47, 0.25, TH.far2]], body: { kind: TH.body, r: TH.body_r, span: TH.body_span, size: TH.body === 'moon' ? 384 : 256, opts: TH.body === 'moon' ? { tint: TH.body_tint, halo: [0.75, 0.8, 0.58], rings: [[1.75, 0.1], [3.25, 0.06]], moonGain: 1.15 } : { tint: [1, 0.97, 0.88] } }, sparkles: TH.sparkles ?? 0, bigShare: 0.25 });
  group.add(rig.group);

  // ── water with ripples, low mist ──
  const waterColor = (x: number, y: number): C3 => {
    const r = Math.hypot(x, y);
    let c = lerp3(TH.water_lo, TH.water_hi, clamp01(fbm2(x * 0.05 + 2, y * 0.05, 3) * 1.2 - 0.15));
    const spill = Math.exp(-(((r - 9.9) / 3) ** 2)) * 0.12 * 0.75;
    c = [c[0] + TH.glow_col[0] * spill, c[1] + TH.glow_col[1] * spill, c[2] + TH.glow_col[2] * spill];
    return lerp3(c, mul3(HAZE_C, 0.5), sstep(32, 150, r) ** 1.2);
  };
  let water: THREE.Mesh;
  {
    const mb = new MB(false, 2);
    const RR = [8, 10, 12, 14, 17, 20, 24, 28, 33, 40, 48, 57, 68, 82, 100, 125, 150], WS = lite ? 48 : 72;
    const rows = RR.map((r) => Array.from({ length: WS }, (_, s) => {
      const x = r * Math.cos((2 * Math.PI * s) / WS), y = r * Math.sin((2 * Math.PI * s) / WS), f = sstep(9, 13, r) * Math.exp(-r / 90);
      return mb.v([x, y, 0], waterColor(x, y), [[0, 0, 0.06 * Math.sin(0.45 * x + 0.33 * y) * f], [0, 0, 0.06 * Math.sin(0.38 * x - 0.41 * y + 2) * f]]);
    }));
    for (let k = 0; k < RR.length - 1; k++) for (let s = 0; s < WS; s++) { const s2 = (s + 1) % WS; mb.f(rows[k][s], rows[k + 1][s], rows[k + 1][s2], rows[k][s2]); }
    const m = new THREE.MeshLambertMaterial({ vertexColors: true, envMap: rig.envMap(), reflectivity: time === 'night' ? 0.55 : 0.45, combine: THREE.MixOperation });
    water = new THREE.Mesh(mb.geo(), m);
    water.morphTargetInfluences = [0, 0];
    group.add(water);
  }
  const mists: Array<{ m: THREE.Mesh; s: number }> = [];
  ([0.35, 0.9, 1.7] as const).slice(0, lite ? 2 : 3).forEach((z, idx) => {
    const mb = new MB(true);
    const RR = [10.5, 12, 15, 19, 24, 30, 38, 48, 60], SG = 48;
    const rows = RR.map((r) => Array.from({ length: SG }, (_, s) => {
      const a = (2 * Math.PI * s) / SG, x = r * Math.cos(a), y = r * Math.sin(a);
      const al = TH.mist_a * clamp01((fbm2(x * 0.07 + idx * 9, y * 0.07, 3) - 0.38) * 2.6) * sstep(0, 3, r - 10.5) * sstep(0, 15, 60 - r);
      return mb.v([x, y, z + 0.12 * Math.sin(0.3 * x + idx)], [...TH.mist_col, al]);
    }));
    for (let k = 0; k < RR.length - 1; k++) for (let s = 0; s < SG; s++) { const s2 = (s + 1) % SG; mb.f(rows[k][s], rows[k + 1][s], rows[k + 1][s2], rows[k][s2]); }
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
    mat.color.setScalar(1 + 0.7); // the scripts' mist glows a little (emit 0.7)
    const m = new THREE.Mesh(mb.geo(), mat); m.renderOrder = 3;
    group.add(m);
    mists.push({ m, s: R2.choice([-1, 1]) * R2.uniform(0.15, 0.3) });
  });

  // ── the arena ──
  group.add(slabArena({ th: TH, r: R2, z0: -0.4, h: 1, rimZ0: -0.6, rimH: 0.95, glowZ0: -0.3, glowH: 0.75, lineCol: TH.line_col, runeCol: TH.rune_col, glowCol: TH.glow_col, glow: G }));
  const stone = new MB(), rune = new MB();
  const pillarTops: P3[] = [];
  for (const deg of [45, 135, 225, 315]) { // four broken pillars on the rim (a wisp floats over each)
    const a = rad(deg), h = R2.uniform(1.6, 2.6), base: C3 = R2.choice(STONES), seed = R2.uniform(0, 50);
    const px = 9.35 * Math.cos(a), py = 9.35 * Math.sin(a);
    const seg = 10, z0 = 0.3;
    const bot: number[] = [], top: number[] = [];
    const topZ = Array.from({ length: seg }, () => z0 + h - R2.uniform(0, 0.45));
    for (let s = 0; s < seg; s++) {
      const t = (2 * Math.PI * s) / seg, jx = R2.uniform(-0.05, 0.05), jy = R2.uniform(-0.05, 0.05), jx2 = R2.uniform(-0.05, 0.05), jy2 = R2.uniform(-0.05, 0.05);
      const pb: P3 = [px + 0.62 * Math.cos(t) + jx, py + 0.62 * Math.sin(t) + jy, z0], pt: P3 = [px + 0.5 * Math.cos(t) + jx2, py + 0.5 * Math.sin(t) + jy2, topZ[s]];
      bot.push(stone.v(pb, stoneAt(base, 0, pb[0] - px, pb[1] - py, seed, TH.moss))); top.push(stone.v(pt, stoneAt(base, (pt[2] - z0) / h, pt[0] - px, pt[1] - py, seed, TH.moss)));
    }
    for (let s = 0; s < seg; s++) { const s2 = (s + 1) % seg; stone.f(bot[s], bot[s2], top[s2], top[s]); }
    stone.f(...top);
    // the rune on the inner face
    const rx = px - 0.55 * Math.cos(a), ry = py - 0.55 * Math.sin(a), rz = a - Math.PI / 2, c = Math.cos(rz), sn = Math.sin(rz);
    const hw = 0.06, hh = (h * 0.45) / 2, zc = 0.3 + h * 0.5;
    rune.f(...[[-hw, -0.03, -hh], [hw, -0.03, -hh], [hw, -0.03, hh], [-hw, -0.03, hh]].map(([x, y, z]) => rune.v([rx + x * c - y * sn, ry + x * sn + y * c, zc + z], [1, 1, 1])));
    pillarTops.push([px, py, 0.3 + h]);
  }
  const box = (cx: number, cy: number, cz: number, sx: number, sy: number, sz: number, rotz: number, base: C3) => {
    const seed = R2.uniform(0, 50), c = Math.cos(rotz), sn = Math.sin(rotz);
    const corners = new Map<string, number>();
    const V = (lx: number, ly: number, lz: number) => {
      const x = lx * sx + R2.uniform(-0.03, 0.03), y = ly * sy + R2.uniform(-0.03, 0.03), z = lz * sz;
      return stone.v([cx + x * c - y * sn, cy + x * sn + y * c, cz + z], stoneAt(base, lz + 0.5, x, y, seed, TH.moss));
    };
    void corners;
    for (const f of [[[-0.5, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, 0.5, 0.5], [-0.5, 0.5, 0.5]], [[-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, -0.5, 0.5], [-0.5, -0.5, 0.5]], [[0.5, 0.5, -0.5], [-0.5, 0.5, -0.5], [-0.5, 0.5, 0.5], [0.5, 0.5, 0.5]], [[0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [0.5, 0.5, 0.5], [0.5, -0.5, 0.5]], [[-0.5, 0.5, -0.5], [-0.5, -0.5, -0.5], [-0.5, -0.5, 0.5], [-0.5, 0.5, 0.5]]]) stone.f(...f.map(([x, y, z]) => V(x, y, z)));
  };
  for (const deg0 of [270, 90]) for (let k = 0; k < 5; k++) { // stepping stones out into the water
    const r = 11 + k * 1.7 + R2.uniform(-0.2, 0.2), a = rad(deg0 + R2.uniform(-5, 5)), sz = R2.uniform(1.2, 1.7);
    box(r * Math.cos(a), r * Math.sin(a), -0.13, sz, sz * R2.uniform(0.8, 1.1), 0.5, R2.uniform(0, 3.14), R2.choice(STONES));
  }
  for (let i = 0; i < 12; i++) { // half-sunk rocks round the rim
    let ang = R2.uniform(0, 2 * Math.PI);
    if (Math.min(Math.abs(angdiff(ang, Math.PI / 2)), Math.abs(angdiff(ang, (3 * Math.PI) / 2))) < 0.18) ang += 0.5;
    const r = R2.uniform(10.5, 15), s = R2.uniform(0.7, 1.8), base: C3 = R2.choice(STONES), seed = R2.uniform(0, 50), rz = R2.uniform(0, 6.28);
    const geo = new THREE.IcosahedronGeometry(1, 1), q = geo.attributes.position;
    const m = new THREE.Matrix4().compose(new THREE.Vector3(r * Math.cos(ang), r * Math.sin(ang), 0.05), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rz), new THREE.Vector3(s, s * 0.9, s * 0.7));
    for (let k = 0; k < q.count; k += 3) stone.f(...[0, 1, 2].map((j) => { const v = new THREE.Vector3(q.getX(k + j), q.getY(k + j), q.getZ(k + j)); const lz = v.z; v.applyMatrix4(m); return stone.v([v.x, v.y, v.z], stoneAt(base, (lz + 1) / 2, q.getX(k + j), q.getY(k + j), seed, TH.moss)); }));
    geo.dispose();
  }
  group.add(new THREE.Mesh(stone.geo(), vcMat()), new THREE.Mesh(rune.geo(), emitMat(TH.rune_col, 1.4 * G)));

  // ── dry trees with hanging moss, on mud mounds ──
  const WIND: P3 = (() => { const v = new THREE.Vector3(0.8, 0.6, 0).normalize(); return [v.x, v.y, 0]; })();
  const MA = rad(TH.body_az), MOON_H = [Math.cos(MA), Math.sin(MA)];
  const placed: Array<[number, number]> = [];
  const spot = (rmin: number, rmax: number, front: boolean): [number, number] | null => {
    for (let k = 0; k < 300; k++) {
      const a = R.uniform(0, 360);
      if (front && a > 245 && a < 295) continue;
      const r = R.uniform(rmin, rmax), x = r * Math.cos(rad(a)), y = r * Math.sin(rad(a));
      if (placed.every(([qx, qy]) => Math.hypot(x - qx, y - qy) > 6)) { placed.push([x, y]); return [x, y]; }
    }
    return null;
  };
  const barkMat = vcMat({ morph: true });
  const trees: Array<{ m: THREE.Mesh; P: number; flip: number }> = [];
  const treePts: Array<[number, number]> = [], moundItems: P3[] = [];
  const nNear = lite ? 6 : 9, nFar = lite ? 4 : 7;
  for (let i = 0; i < nNear + nFar; i++) {
    const near = i < nNear, p = near ? spot(16, 32, true) : spot(38, 62, false);
    if (!p) continue;
    const H = near ? R.uniform(9, 15) : R.uniform(16, 24), br = near ? R.uniform(0.28, 0.42) : R.uniform(0.5, 0.8);
    const m = new THREE.Mesh(makeTree(p[0], p[1], H, br), barkMat); m.morphTargetInfluences = [0];
    group.add(m);
    trees.push({ m, P: R.choice([100, 120, 150, 180, 200]), flip: R.int(0, 1) });
    treePts.push(p); moundItems.push([p[0], p[1], 2.2 * br + 0.7]);
  }
  function makeTree(bx: number, by: number, H: number, baseR: number) {
    const mb = new MB(false, 1);
    const toC = new THREE.Vector3(-bx, -by, 0).normalize(), amp = R.uniform(0.6, 1.4);
    const lean = new THREE.Vector3(R.uniform(-1, 1), R.uniform(-1, 1), 0).normalize().multiplyScalar(R.uniform(0.02, 0.07)), ph = R.uniform(0, 6.28);
    const center = (z: number) => new THREE.Vector3(bx + lean.x * z + 0.25 * Math.sin(0.5 * z + ph), by + lean.y * z + 0.25 * Math.cos(0.4 * z + ph), z);
    const RR = (z: number) => { const zz = Math.max(z, 0); return baseR * (1 - 0.55 * clamp01(zz / H)) * (1 + 0.7 * Math.exp(-zz / 0.8)); };
    const V = (p: THREE.Vector3, c: readonly number[], extra = 0) => { const k = amp * clamp01(Math.max(p.z, 0) / H) ** 2 + extra; return mb.v([p.x, p.y, p.z], c, [[WIND[0] * k, WIND[1] * k, 0]]); };
    const bark = (dd: THREE.Vector3, z: number): C3 => {
      const h = new THREE.Vector3(dd.x, dd.y, 0); if (h.lengthSq() > 1e-12) h.normalize();
      let c = lerp3(TH.bark_dark, TH.bark_lit, 0.6 * Math.max(0, h.x * toC.x + h.y * toC.y));
      c = lerp3(c, TH.bark_rim, clamp01(TH.bark_rim_k * Math.max(0, h.x * MOON_H[0] + h.y * MOON_H[1]) * (1 - 0.4 * clamp01(z / H))));
      return lerp3(c, TH.moss, clamp01(1 - z / 1.8) * 0.6 * noise2(dd.x * 3 + bx, z * 0.8 + by));
    };
    const tube = (pts: THREE.Vector3[], radii: number[], sides: number, col: (i: number, dd: THREE.Vector3) => readonly number[], vine?: (i: number) => number) => {
      const n = pts.length;
      const Ts = pts.map((_, i) => pts[Math.min(i + 1, n - 1)].clone().sub(pts[Math.max(i - 1, 0)]).normalize());
      let Nv = Ts[0].clone().cross(Math.abs(Ts[0].z) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 0, 1)).normalize();
      const rws = pts.map((p, i) => {
        const T = Ts[i];
        Nv = Nv.clone().addScaledVector(T, -Nv.dot(T)).normalize();
        const Bv = T.clone().cross(Nv);
        return Array.from({ length: sides }, (_, s) => { const a = (2 * Math.PI * s) / sides, dd = Nv.clone().multiplyScalar(Math.cos(a)).addScaledVector(Bv, Math.sin(a)); return V(p.clone().addScaledVector(dd, radii[i]), col(i, dd), vine ? vine(i) : 0); });
      });
      for (let i = 0; i < n - 1; i++) for (let s = 0; s < sides; s++) { const s2 = (s + 1) % sides; mb.f(rws[i][s], rws[i][s2], rws[i + 1][s2], rws[i + 1][s]); }
    };
    const ROWS = 11, SIDES = 8;
    const rows = Array.from({ length: ROWS }, (_, k) => {
      const z = -0.4 + ((H + 0.4) * k) / (ROWS - 1), c = center(z);
      return Array.from({ length: SIDES }, (_, s) => { const th = (2 * Math.PI * s) / SIDES, d = new THREE.Vector3(Math.cos(th), Math.sin(th), 0); return V(c.clone().addScaledVector(d, RR(z) * (1 + 0.06 * Math.sin(3 * th + z))), bark(d, z)); });
    });
    for (let k = 0; k < ROWS - 1; k++) for (let s = 0; s < SIDES; s++) { const s2 = (s + 1) % SIDES; mb.f(rows[k][s], rows[k][s2], rows[k + 1][s2], rows[k + 1][s]); }
    mb.f(...rows[ROWS - 1]);
    const anchors: THREE.Vector3[] = [];
    const nb = R.int(3, 5);
    for (let b = 0; b < nb; b++) { // stiff diagonal branches
      const z0 = H * R.uniform(0.42, 0.9), th = R.uniform(0, 6.28), d0 = new THREE.Vector3(Math.cos(th), Math.sin(th), 0);
      const start = center(z0).addScaledVector(d0, RR(z0) * 0.6), dirv = d0.clone().add(new THREE.Vector3(0, 0, R.uniform(0.5, 1.1))).normalize();
      const Lb = R.uniform(2, 5) * (H / 12) * (1.1 - (0.5 * z0) / H);
      const bp = Array.from({ length: 6 }, (_, i) => start.clone().addScaledVector(dirv, Lb * (i / 5)).add(new THREE.Vector3(0, 0, -0.12 * Lb * (i / 5) ** 2)));
      const rb = RR(z0) * 0.4;
      tube(bp, bp.map((_, i) => rb * (1 - (0.88 * i) / 5) + 0.01), 5, (i, dd) => bark(dd, bp[i].z));
      anchors.push(...bp.slice(2, 5));
    }
    const nm = R.int(4, 8);
    for (let k = 0; k < nm; k++) { // hanging moss strands
      const a0 = R.choice(anchors), L = R.uniform(0.8, 2.2), pv = R.uniform(0, 6.28);
      const vp = Array.from({ length: 6 }, (_, j) => a0.clone().add(new THREE.Vector3((0.06 * Math.sin(pv + j) * j) / 5, (0.06 * Math.cos(pv + j * 0.8) * j) / 5, (-L * j) / 5)));
      tube(vp, vp.map((_, j) => 0.022 * (1 - (0.8 * j) / 5) + 0.003), 3, (i) => lerp3(TH.vine_a, TH.vine_b, i / 5), (i) => 0.45 * (i / 5) ** 1.5);
    }
    return mb.geo();
  }
  { // mud mounds
    const mb = new MB();
    const prof: Array<[number, number]> = [[1.35, -0.25], [1, 0.02], [0.72, 0.28], [0.4, 0.46]];
    for (const [x, y, r] of moundItems) {
      const rows = prof.map(([f, h]) => Array.from({ length: 14 }, (_, s) => {
        const a = (2 * Math.PI * s) / 14, rr = r * f * (1 + 0.12 * Math.sin(3 * a + x));
        const p: P3 = [x + rr * Math.cos(a), y + rr * Math.sin(a), h + 0.05 * Math.sin(5 * a + y)];
        return mb.v(p, lerp3(TH.mud, TH.moss, clamp01(0.3 + 0.6 * noise2(p[0] * 0.8, p[1] * 0.8))));
      }));
      const top = mb.v([x, y, 0.52], TH.moss);
      for (let k = 0; k < rows.length - 1; k++) for (let s = 0; s < 14; s++) { const s2 = (s + 1) % 14; mb.f(rows[k][s], rows[k][s2], rows[k + 1][s2], rows[k + 1][s]); }
      for (let s = 0; s < 14; s++) mb.f(top, rows[rows.length - 1][s], rows[rows.length - 1][(s + 1) % 14]);
    }
    group.add(new THREE.Mesh(mb.geo(), vcMat()));
  }

  // ── cattails, lily pads, frogs ──
  const reedMat = vcMat({ morph: true, double: true });
  const reeds = [0, 1].map((half) => {
    const mb = new MB(false, 1);
    const count = (lite ? 160 : 300) / 2;
    const ring = (c: P3, rr: number, sides: number, col: readonly number[], sw: number) => Array.from({ length: sides }, (_, s) => { const a = (2 * Math.PI * s) / sides; return mb.v([c[0] + rr * Math.cos(a), c[1] + rr * Math.sin(a), c[2]], col, [[WIND[0] * sw, WIND[1] * sw, 0]]); });
    const link = (r0: number[], r1: number[]) => { for (let s = 0; s < r0.length; s++) { const s2 = (s + 1) % r0.length; mb.f(r0[s], r0[s2], r1[s2], r1[s]); } };
    let made = 0;
    while (made < count) {
      let x: number, y: number;
      if (treePts.length && R2.random() < 0.6) { const [bx, by] = R2.choice(treePts), a = R2.uniform(0, 6.283), d = R2.uniform(1, 4.5); x = bx + d * Math.cos(a); y = by + d * Math.sin(a); }
      else { const a = R2.uniform(0, 6.283), r = R2.uniform(11.5, 48); x = r * Math.cos(a); y = r * Math.sin(a); }
      if (Math.hypot(x, y) < 11) continue;
      made++;
      const h = R2.uniform(1.2, 3), lx = R2.uniform(-0.25, 0.25) * h * 0.5, ly = R2.uniform(-0.25, 0.25) * h * 0.5;
      const P = (u: number): P3 => [x + lx * u * u, y + ly * u * u, -0.3 + (h + 0.3) * u], sw = (u: number) => 0.12 * h * u * u;
      const stem = [0, 0.37, 0.74].map((u) => ring(P(u), 0.018 - 0.008 * u, 3, TH.reed, sw(u)));
      link(stem[0], stem[1]); link(stem[1], stem[2]);
      const head = ([[0.75, 0.012], [0.83, 0.055], [0.92, 0.045]] as const).map(([u, rr]) => ring(P(u), rr, 5, TH.cat, sw(u)));
      link(head[0], head[1]); link(head[1], head[2]);
      const tip = mb.v(P(1), TH.cat, [[WIND[0] * sw(1), WIND[1] * sw(1), 0]]);
      for (let s = 0; s < 5; s++) mb.f(head[2][s], head[2][(s + 1) % 5], tip);
    }
    void half;
    const m = new THREE.Mesh(mb.geo(), reedMat); m.morphTargetInfluences = [0]; group.add(m); return m;
  });
  {
    const mb = new MB();
    for (let i = 0; i < (lite ? 36 : 60); i++) {
      const a = R2.uniform(0, 6.283), r = R2.uniform(11.5, 44), x = r * Math.cos(a), y = r * Math.sin(a), rr = R2.uniform(0.3, 0.7), notch = R2.int(0, 11), col: C3 = R2.choice(TH.lily);
      const cen = mb.v([x, y, 0.04], col);
      const ring = Array.from({ length: 12 }, (_, q) => { const a2 = (2 * Math.PI * q) / 12; return mb.v([x + rr * Math.cos(a2), y + rr * 0.9 * Math.sin(a2), 0.04], mul3(col, 0.8)); });
      for (let q = 0; q < 12; q++) if (q !== notch) mb.f(cen, ring[q], ring[(q + 1) % 12]);
    }
    group.add(new THREE.Mesh(mb.geo(), vcMat({ double: true })));
  }
  const frogEyes = new MB(false, 1), frogBody = new MB();
  for (let i = 0; i < 8; i++) {
    const a = R2.uniform(0, 6.283), r = R2.uniform(12, 36), yaw = R2.uniform(0, 6.283);
    const c = new THREE.Vector3(r * Math.cos(a), r * Math.sin(a), 0.05), Rz = new THREE.Matrix4().makeRotationZ(yaw);
    const ico = new THREE.IcosahedronGeometry(1, 1), q = ico.attributes.position;
    const m = new THREE.Matrix4().makeTranslation(c.x, c.y, c.z).multiply(Rz).multiply(new THREE.Matrix4().makeScale(0.22, 0.3, 0.13));
    for (let k = 0; k < q.count; k += 3) frogBody.f(...[0, 1, 2].map((j) => { const v = new THREE.Vector3(q.getX(k + j), q.getY(k + j), q.getZ(k + j)).applyMatrix4(m); return frogBody.v([v.x, v.y, v.z], [0.008, 0.012, 0.009]); }));
    ico.dispose();
    for (const sx of [-1, 1]) {
      const ec = c.clone().add(new THREE.Vector3(sx * 0.09, 0.12, 0.12).applyMatrix4(Rz));
      const dirs: P3[] = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
      const vs = dirs.map((d) => frogEyes.v([ec.x + d[0] * 0.035, ec.y + d[1] * 0.035, ec.z + d[2] * 0.035], [1, 1, 1], [[0, 0, d[2] * 0.035 * (0.08 - 1)]]));
      for (const [a_, b_] of [[0, 2], [2, 1], [1, 3], [3, 0]]) { frogEyes.f(vs[a_], vs[b_], vs[4]); frogEyes.f(vs[b_], vs[a_], vs[5]); }
    }
  }
  group.add(new THREE.Mesh(frogBody.geo(), vcMat()));
  const eyes = new THREE.Mesh(frogEyes.geo(), emitMat(TH.eye_col, 1.8)); eyes.morphTargetInfluences = [0]; group.add(eyes);
  const pool = Array.from({ length: Math.floor((3600 - 120) / 20) }, (_, k) => 60 + k * 20), blinks: number[] = [];
  for (let k = 0; k < 6; k++) blinks.push(pool.splice(R2.int(0, pool.length - 1), 1)[0]);

  { // faint far trees in the fog
    const mb = new MB();
    ([[70, 46, 14, 22], [95, 58, 18, 30]] as const).forEach(([radius, count, hmin, hmax], idx) => {
      const base = lerp3(TH.back_col, HAZE_C, 0.55 + 0.2 * idx);
      for (let i = 0; i < count; i++) {
        const a = (2 * Math.PI * (i + R.uniform(-0.4, 0.4))) / count + idx * 0.5, c = [radius * Math.cos(a), radius * Math.sin(a)], tv = [-Math.sin(a), Math.cos(a)];
        const H = R.uniform(hmin, hmax), w0 = R.uniform(0.35, 0.9) * (1 + 0.5 * idx), ph = R.uniform(0, 6.28), lean = R.uniform(-0.06, 0.06);
        const pt = (u: number): P3 => { const z = -2 + (H + 2) * u, off = Math.sin(u * 3 + ph) * 0.5 + lean * z; return [c[0] + tv[0] * off, c[1] + tv[1] * off, z]; };
        const rows = Array.from({ length: 6 }, (_, k) => { const u = k / 5, wd = w0 * (1 - 0.5 * u), col = lerp3(base, HAZE_C, clamp01(u * u * 0.9)), p = pt(u); return [mb.v([p[0] - (tv[0] * wd) / 2, p[1] - (tv[1] * wd) / 2, p[2]], col), mb.v([p[0] + (tv[0] * wd) / 2, p[1] + (tv[1] * wd) / 2, p[2]], col)]; });
        for (let k = 0; k < 5; k++) mb.f(rows[k][0], rows[k][1], rows[k + 1][1], rows[k + 1][0]);
        for (const sg of [-1, 1]) {
          const p0 = pt(R.uniform(0.55, 0.8)), p1: P3 = [p0[0] + tv[0] * sg * H * 0.16, p0[1] + tv[1] * sg * H * 0.16, p0[2] + H * 0.12], col = lerp3(base, HAZE_C, 0.6);
          mb.f(mb.v([p0[0], p0[1], p0[2] - 0.1], col), mb.v([p0[0], p0[1], p0[2] + 0.1], col), mb.v([p1[0], p1[1], p1[2] + 0.04], col), mb.v([p1[0], p1[1], p1[2] - 0.04], col));
        }
      }
    });
    group.add(new THREE.Mesh(mb.geo(), glowMat({ fog: false })));
  }
  // ── light: wisp orbs, fireflies, the moonlight veil ──
  const orbList: Array<{ p: P3; k: number; amp: number }> = [];
  for (let i = 0; i < Math.round(14 * TH.orb_k * (lite ? 0.6 : 1)); i++) { const a = R2.uniform(0, 6.283), r = R2.uniform(12, 42); orbList.push({ p: [r * Math.cos(a), r * Math.sin(a), R2.uniform(1, 3.2)], k: R2.uniform(0.8, 1.5), amp: R2.uniform(0.15, 0.4) }); }
  for (const [px, py, pz] of pillarTops) orbList.push({ p: [px, py, pz + 0.9], k: 1.4, amp: R2.uniform(0.15, 0.4) });
  const wisps = orbs({ list: orbList, col: TH.orb_col, gain: 1.2 });
  group.add(wisps.group);
  const flies = drifters({ r: R2, n: Math.round(50 * TH.fire_k * (lite ? 0.6 : 1)), at: () => { const a = R2.uniform(0, 6.283), r = R2.uniform(4, 44); return [r * Math.cos(a), r * Math.sin(a), R2.uniform(0.6, 4)]; }, move: () => [R2.uniform(-1.5, 1.5), R2.uniform(-1.5, 1.5), R2.uniform(0.3, 1)], col: TH.fire_col, size: 0.3, twinkle: true });
  if (TH.fire_k > 0) group.add(flies.obj);
  const washMb = new MB(true);
  wash(washMb, 9.4, 0.7, (x, y) => { const r = Math.hypot(x, y); return r < 0.01 ? 1 : sstep(0, 3, 9.4 - r) * (0.7 + 0.3 * noise2(r * 0.4, Math.atan2(y, x) * 6.4)); }, TH.wash_col, 0.28 * 0.5);
  group.add(new THREE.Mesh(washMb.geo(), additiveMat()));

  return {
    group, floor: 0.6,
    update(f) {
      rig.update(f);
      for (const t of trees) t.m.morphTargetInfluences![0] = pingpong(f, t.P / 2, 0.15, 1, t.flip);
      reeds.forEach((m, i) => { m.morphTargetInfluences![0] = pingpong(f, 60, 0, 1, i); });
      water.morphTargetInfluences![0] = pingpong(f, 90, 0, 1, 0); water.morphTargetInfluences![1] = pingpong(f, 90, 0, 1, 1);
      const d = Math.sin(((f % 3600) / 3600) * Math.PI);
      for (const m of mists) m.m.rotation.z = m.s * d;
      let blink = 0;
      for (const b of blinks) if (Math.abs((f % 3600) - b) < 3) blink = 1 - Math.abs((f % 3600) - b) / 3;
      eyes.morphTargetInfluences![0] = blink;
      wisps.update(f); flies.update(f);
    },
    key: { dir: BODIES[0], color: TH.key_col, intensity: TH.key_e },
    ambient: { sky: mul3(TH.fill_col, 0.6), ground: TH.water_hi, intensity: time === 'night' ? 0.35 : time === 'day' ? 0.75 : 0.5 },
    fog: { color: TH.fog, near: 40, far: 140 },
    lights: [{ pos: [0, 0, 3.5], color: TH.arena_col, intensity: 0.45, dist: 14 }, ...pillarTops.map((p) => ({ pos: [p[0], p[1], p[2] + 0.9] as P3, color: TH.orb_light_col as C3, intensity: 0.4, dist: 7, flicker: 0.2 }))],
    dispose() { rig.dispose(); disposeGroup(group); },
  };
}
