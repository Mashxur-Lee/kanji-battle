// FOREST arena (port of Forest.txt): a cracked glowing slab floor in a clearing of giant gnarled trees that
// sway — some with red eyes that blink — bushes, flowers, grass, far trunks in the haze, light shafts.
import * as THREE from 'three';
import {
  MB, additiveMat, backdropLayer, beam, clamp01, dayTheme, disposeGroup, drifters, fbm2, glowMat, grass, ground, lerp3, mul3, noise2, pingpong, rad, rand,
  skyFn, skyRig, slabArena, sph, sstep, vcMat, wash, type C3, type Env, type P3, type Theme,
} from './kit';

const THEMES: Record<'SUNSET' | 'NIGHT', Theme> = {
  SUNSET: {
    body: 'sun', body_az: 90, body_el: 15, body_r: 0.03, exposure: 1,
    stops: [[-90, [0.05, 0.03, 0.07]], [-2, [0.3, 0.1, 0.12]], [0, [0.55, 0.17, 0.14]], [3, [0.9, 0.32, 0.1]], [8, [0.75, 0.22, 0.18]], [16, [0.5, 0.14, 0.28]], [30, [0.26, 0.08, 0.34]], [55, [0.08, 0.035, 0.24]], [90, [0.02, 0.012, 0.12]]],
    glow: [[0.55, 0.35, [1, 0.3, 0.06]], [0.16, 0.6, [1, 0.48, 0.12]], [0.045, 1.6, [1, 0.75, 0.35]]],
    hw0: 0.55, anti: 0.3, anti_col: [0.5, 0.2, 0.34], stars: 0.3, star_n: 1800, milky: 0,
    far1: [0.2, 0.08, 0.18], far2: [0.11, 0.05, 0.14],
    cloud_scale: 1.7, cov0: 0.5, cov1: 0.72, cloud_opacity: 0.9,
    cloud_lit_near: [1, 0.5, 0.16], cloud_lit_far: [0.7, 0.28, 0.5], cloud_shadow: [0.1, 0.04, 0.17], cloud_rim: [1, 0.65, 0.25],
    g_near: [0.24, 0.17, 0.3], g_far: [0.05, 0.03, 0.1], g_alt: [0.2, 0.15, 0.16],
    stone: [[0.26, 0.22, 0.4], [0.3, 0.25, 0.44], [0.22, 0.19, 0.36], [0.34, 0.28, 0.48]],
    rim_stone: [0.34, 0.28, 0.46], moss: [0.05, 0.1, 0.08],
    bark_dark: [0.05, 0.035, 0.14], bark_lit: [0.3, 0.2, 0.55], bark_sun: [1, 0.5, 0.2], bark_sun_k: 0.55,
    back_lit: [[0.12, 0.09, 0.26], [0.09, 0.1, 0.28]], back_dark: [[0.02, 0.015, 0.07], [0.07, 0.07, 0.2]],
    back_haze: [0.3, 0.5, 0.7], back_h: 0.5, back_w: 0.7, back_rim: [1, 0.55, 0.22], back_rim_k: 1,
    bush_lo: [0.04, 0.025, 0.09], bush_hi: [0.3, 0.22, 0.4],
    grass_tip: [[0.12, 0.32, 0.42], [0.5, 0.62, 0.45]], grass_base: [0.04, 0.03, 0.1], grass_rim: [1, 0.55, 0.2], grass_emit: 0.2,
    flower: [[1, 0.45, 0.15], [0.95, 0.25, 0.55], [0.9, 0.7, 0.2]], flower_emit: 0.9,
    emit: 0.7, beam_col: [1, 0.7, 0.35], beam_gain: 1.3,
    firefly_col: [1, 0.75, 0.35], firefly_n: 40, sparkles: 14,
    world: [0.14, 0.07, 0.22], fog: [0.35, 0.1, 0.25],
    key_col: [1, 0.58, 0.3], key_e: 3.5, fill_col: [0.55, 0.4, 1], fill_e: 1,
    arena_col: [0.35, 0.55, 1], ring_col: [0.1, 0.35, 1],
  },
  NIGHT: {
    body: 'moon', body_az: 90, body_el: 58, body_r: 0.04, exposure: 1,
    stops: [[-90, [0.004, 0.004, 0.015]], [0, [0.02, 0.022, 0.075]], [5, [0.014, 0.016, 0.058]], [15, [0.009, 0.011, 0.04]], [35, [0.0045, 0.0055, 0.02]], [90, [0.0015, 0.002, 0.009]]],
    glow: [[0.5, 0.004, [0.3, 0.4, 0.9]], [0.11, 0.03, [0.5, 0.62, 1]], [0.03, 0.09, [0.7, 0.8, 1]]],
    hw0: 0.8, anti: 0, anti_col: [0, 0, 0], stars: 1, star_n: 6500, milky: 0.01,
    far1: [0.004, 0.007, 0.02], far2: [0.0018, 0.003, 0.009],
    cloud_scale: 1.5, cov0: 0.56, cov1: 0.78, cloud_opacity: 0.55,
    cloud_lit_near: [0.09, 0.12, 0.24], cloud_lit_far: [0.03, 0.04, 0.09], cloud_shadow: [0.004, 0.006, 0.018], cloud_rim: [0.12, 0.16, 0.3],
    g_near: [0.2, 0.18, 0.38], g_far: [0.03, 0.025, 0.09], g_alt: [0.12, 0.14, 0.3],
    stone: [[0.18, 0.2, 0.42], [0.22, 0.24, 0.48], [0.16, 0.17, 0.36], [0.25, 0.27, 0.52]],
    rim_stone: [0.3, 0.28, 0.5], moss: [0.02, 0.06, 0.07],
    bark_dark: [0.05, 0.035, 0.14], bark_lit: [0.3, 0.2, 0.55], bark_sun: [0.3, 0.4, 0.85], bark_sun_k: 0.25,
    back_lit: [[0.12, 0.09, 0.26], [0.09, 0.1, 0.28]], back_dark: [[0.02, 0.015, 0.07], [0.07, 0.07, 0.2]],
    back_haze: [0, 0, 0], back_h: 1, back_w: 1, back_rim: [0.35, 0.45, 0.9], back_rim_k: 0.25,
    bush_lo: [0.03, 0.02, 0.09], bush_hi: [0.16, 0.2, 0.42],
    grass_tip: [[0.1, 0.25, 0.45], [0.3, 0.55, 0.8]], grass_base: [0.03, 0.03, 0.12], grass_rim: [0.45, 0.55, 1], grass_emit: 0.35,
    flower: [[0.45, 0.55, 1], [0.75, 0.4, 1], [0.35, 0.95, 0.95]], flower_emit: 3,
    emit: 1, beam_col: [0.35, 0.6, 1], beam_gain: 1,
    firefly_col: [0.35, 0.75, 1], firefly_n: 70, sparkles: 30,
    world: [0.02, 0.02, 0.08], fog: [0.04, 0.06, 0.15],
    key_col: [0.4, 0.5, 1], key_e: 1.2, fill_col: [0.2, 0.25, 0.5], fill_e: 0,
    arena_col: [0.25, 0.5, 1], ring_col: [0.1, 0.35, 1],
  },
};

export function buildForest(time: 'day' | 'sunset' | 'night', lite: boolean): Env {
  const TH = time === 'night' ? THEMES.NIGHT : time === 'day' ? { ...dayTheme(THEMES.SUNSET), beam_col: [1, 0.95, 0.8], firefly_n: 0, flower_emit: 0.3, grass_rim: [1, 0.95, 0.75], grass_emit: 0.05 } : THEMES.SUNSET;
  const E = TH.emit, G = E * 0.75;
  const R = rand(11), R2 = rand(99);
  const group = new THREE.Group();
  const SUN_AZ = rad(TH.body_az), SUN_H = [Math.cos(SUN_AZ), Math.sin(SUN_AZ)];
  const WIND = (() => { const v = new THREE.Vector3(0.8, 0.6, 0).normalize(); return [v.x, v.y, 0] as P3; })();
  const gh = (x: number, y: number) => { const k = clamp01((Math.hypot(x, y) - 12) / 10); return k * 0.25 * (Math.sin(x * 0.22) + Math.cos(y * 0.27) + 0.5 * Math.sin((x + y) * 0.5)); };
  const groundColor = (x: number, y: number): C3 => {
    const t = clamp01((Math.hypot(x, y) - 6) / 34) ** 0.7;
    const v = 0.9 + 0.2 * (Math.sin(x * 0.5) * Math.cos(y * 0.5) * 0.5 + 0.5);
    const patch = fbm2(x * 0.09 + 3, y * 0.09 - 7, 3), speck = noise2(x * 1.7, y * 1.7);
    let c = lerp3(TH.g_near, TH.g_far, t);
    c = lerp3(c, TH.g_alt, clamp01((patch - 0.45) * 2.2) * 0.6 * (1 - 0.5 * t));
    return mul3(c, v * (1 + 0.25 * (speck - 0.5) * (1 - t)));
  };
  const sky = skyFn(TH, [sph(TH.body_az, TH.body_el)]);

  // ground
  group.add(new THREE.Mesh(ground([0, 4, 8, 10, 12, 13, 14, 16, 18, 21, 24, 28, 33, 40, 48, 57, 65, 72, 90, 110, 140], 64, gh, groundColor), vcMat({ flat: false })));

  // the arena: slab floor with light baked into the stone tops under the shafts
  const BEAMS: Array<[P3, P3]> = [[[14, 14, 32], [3, 4, 0.6]], [[20, 8, 32], [4, 0, 0.6]]];
  const TARGETS = BEAMS.map(([, t]) => [t[0], t[1]]);
  const bake = (p: P3) => {
    const g = TARGETS.reduce((s, [tx, ty]) => s + Math.exp(-((Math.hypot(p[0] - tx, p[1] - ty) / 5.5) ** 2)), 0);
    const w = (0.55 + 0.45 * Math.min(1, g)) * (1 - 0.4 * clamp01((Math.hypot(p[0], p[1]) - 5) / 5)) * 0.2 * 0.5 * TH.beam_gain;
    return mul3(TH.beam_col, w);
  };
  group.add(slabArena({ th: TH, r: R, z0: 0, h: 0.6, rimZ0: 0, rimH: 0.35, glowZ0: 0, glowH: 0.45, lineCol: [0.15, 0.5, 1], runeCol: [0.35, 0.8, 1], glowCol: [0.1, 0.4, 1], glow: G, patchy: false, bake }));
  { // rocks
    const mb = new MB();
    for (let i = 0; i < 10; i++) {
      const ang = R.uniform(0, 6.283), r = R.uniform(11.5, 17), s = R.uniform(0.8, 2), base: C3 = R.choice(TH.stone as C3[]), seed = R2.uniform(0, 50);
      const geo = new THREE.IcosahedronGeometry(1, 1);
      const p = geo.attributes.position;
      for (let k = 0; k < p.count; k++) { const j = R.uniform(0.8, 1.2); p.setXYZ(k, p.getX(k) * j, p.getY(k) * j, p.getZ(k) * j); }
      const x = r * Math.cos(ang), y = r * Math.sin(ang), rz = R.uniform(0, 6.28);
      const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, gh(x, y) + 0.3 * s), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), rz), new THREE.Vector3(s, s * 0.9, s * 0.7));
      const ni = geo.index ? geo.toNonIndexed() : geo;
      const q = ni.attributes.position;
      for (let k = 0; k < q.count; k += 3) {
        const vs: number[] = [];
        for (let j = 0; j < 3; j++) {
          const lx = q.getX(k + j), ly = q.getY(k + j), lz = q.getZ(k + j);
          const v = new THREE.Vector3(lx, ly, lz).applyMatrix4(m);
          const ao = 0.6 + 0.4 * clamp01((lz + 1) / 2) ** 0.7, n = noise2(lx * 2 + seed, ly * 2 + lz);
          vs.push(mb.v([v.x, v.y, v.z], lerp3(mul3(base, ao * (0.88 + 0.24 * n)), TH.moss, clamp01(1 - ((lz + 1) / 2) * 3) * 0.55)));
        }
        mb.f(...vs);
      }
      ni.dispose();
    }
    group.add(new THREE.Mesh(mb.geo(), vcMat()));
  }

  // trees that sway, some with red eyes that blink
  const placed: Array<[number, number]> = [];
  const spot = (rmin: number, rmax: number, front: boolean): [number, number] | null => {
    for (let k = 0; k < 300; k++) {
      const a = R.uniform(0, 360);
      if (front && a > 245 && a < 295) continue;
      const r = R.uniform(rmin, rmax), x = r * Math.cos(rad(a)), y = r * Math.sin(rad(a));
      if (placed.every(([px, py]) => Math.hypot(x - px, y - py) > 5.5)) { placed.push([x, y]); return [x, y]; }
    }
    return null;
  };
  const barkMat = vcMat({ morph: true }), eyeMat = glowMat({ gain: 2.2 });
  const trees: Array<{ mesh: THREE.Mesh; eyes: THREE.Mesh | null; P: number; flip: number; blinks: number[] }> = [];
  const nNear = lite ? 12 : 18, nFar = lite ? 6 : 10;
  for (let i = 0; i < nNear + nFar; i++) {
    const near = i < nNear;
    const p = near ? spot(15, 26, true) : spot(32, 46, false);
    if (!p) continue;
    const H = near ? R.uniform(20, 32) : R.uniform(30, 40), br = near ? R.uniform(1.1, 2) : R.uniform(2.2, 3.2);
    const hasEyes = near && R.random() < 0.25;
    const t = makeTree(p[0], p[1], H, br, hasEyes);
    const mesh = new THREE.Mesh(t.bark.geo(), barkMat);
    mesh.morphTargetInfluences = [0, 0];
    group.add(mesh);
    let eyes: THREE.Mesh | null = null;
    if (hasEyes) { eyes = new THREE.Mesh(t.eyes.geo(), eyeMat); eyes.morphTargetInfluences = [0, 0]; group.add(eyes); }
    const blinks: number[] = [];
    if (hasEyes) { const pool = Array.from({ length: Math.floor((3600 - 120) / 20) }, (_, k) => 60 + k * 20); for (let k = 0; k < 5; k++) blinks.push(pool.splice(R.int(0, pool.length - 1), 1)[0]); blinks.sort((a, b) => a - b); }
    trees.push({ mesh, eyes, P: R.choice([100, 120, 150, 180, 200]), flip: R.int(0, 1), blinks });
  }
  function makeTree(bx: number, by: number, H: number, baseR: number, eyes: boolean) {
    const bark = new MB(false, 2), eyeMb = new MB(false, 2);
    const toC = new THREE.Vector3(-bx, -by, 0).normalize();
    const amp = R.uniform(1.2, 2.4);
    const lean = new THREE.Vector3(R.uniform(-1, 1), R.uniform(-1, 1), 0).normalize().multiplyScalar(R.uniform(0.03, 0.1));
    const ph = R.uniform(0, 6.28), wob = R.uniform(0.4, 1), lobes = R.choice([3, 4, 5]), lph = R.uniform(0, 6.28);
    const center = (z: number) => new THREE.Vector3(bx + lean.x * z + wob * Math.sin(0.28 * z + ph), by + lean.y * z + wob * Math.cos(0.23 * z + ph), z);
    const RR = (z: number, th: number) => {
      const zz = Math.max(z, 0), r = baseR * (1 - 0.62 * clamp01(zz / H)) * (1 + 1.1 * Math.exp(-zz / 1.6)), th2 = th + 0.06 * zz;
      return r * (1 + 0.28 * Math.cos(lobes * th2 + lph) * Math.exp(-zz / 3.5) + 0.07 * Math.cos(2 * th2 + ph));
    };
    const sway = (z: number) => { const k = amp * clamp01(Math.max(z, 0) / H) ** 2; return [WIND[0] * k, WIND[1] * k, 0]; };
    const barkCol = (d: THREE.Vector3, z: number, s_: number): C3 => {
      const h = new THREE.Vector3(d.x, d.y, 0); if (h.lengthSq() > 1e-12) h.normalize();
      const lit = Math.max(0, h.x * toC.x + h.y * toC.y), s = 0.6 + 0.4 * Math.sin(s_);
      let c = lerp3(TH.bark_dark, TH.bark_lit, clamp01(0.85 * lit * s * (1 - 0.3 * clamp01(z / H))));
      const sun = Math.max(0, h.x * SUN_H[0] + h.y * SUN_H[1]);
      c = lerp3(c, TH.bark_sun, clamp01(TH.bark_sun_k * sun * (0.5 + 0.5 * s) * (1 - 0.5 * clamp01(z / H))));
      c = mul3(c, 0.72 + 0.28 * clamp01(z / 1.6));
      const mo = clamp01(1 - z / 2.2) * 0.55 * noise2(d.x * 3 + bx, d.y * 3 + z * 0.8);
      return lerp3(c, TH.moss, mo);
    };
    const V = (p: THREE.Vector3, c: readonly number[]) => bark.v([p.x, p.y, p.z], c, [sway(p.z), [0, 0, 0]]);
    const ROWS = lite ? 10 : 14, SIDES = lite ? 8 : 12;
    const rows: number[][] = [];
    for (let k = 0; k < ROWS; k++) {
      const z = -0.5 + (H + 0.5) * (k / (ROWS - 1)) ** 1.15, c = center(z), row: number[] = [];
      for (let s = 0; s < SIDES; s++) {
        const th = (2 * Math.PI * s) / SIDES, d = new THREE.Vector3(Math.cos(th), Math.sin(th), 0);
        row.push(V(c.clone().addScaledVector(d, RR(z, th)), barkCol(d, z, th * 7 + z * 0.4)));
      }
      rows.push(row);
    }
    for (let k = 0; k < ROWS - 1; k++) for (let s = 0; s < SIDES; s++) { const s2 = (s + 1) % SIDES; bark.f(rows[k][s], rows[k][s2], rows[k + 1][s2], rows[k + 1][s]); }
    const top = V(center(H).add(new THREE.Vector3(0, 0, 0.3)), TH.bark_dark);
    for (let s = 0; s < SIDES; s++) bark.f(top, rows[ROWS - 1][s], rows[ROWS - 1][(s + 1) % SIDES]);
    const nb = R.int(2, 4);
    for (let b = 0; b < nb; b++) { // gnarled branches
      const z0 = H * R.uniform(0.35, 0.85), th = R.uniform(0, 6.28), d0 = new THREE.Vector3(Math.cos(th), Math.sin(th), 0);
      const start = center(z0).addScaledVector(d0, RR(z0, th) * 0.7);
      const dirv = d0.clone().add(new THREE.Vector3(0, 0, R.uniform(0.4, 1))).normalize();
      const Lb = R.uniform(3.5, 7.5), side = new THREE.Vector3(-d0.y, d0.x, 0);
      const pts = [0, 1, 2, 3, 4].map((i) => start.clone().addScaledVector(dirv, Lb * (i / 4)).add(new THREE.Vector3(0, 0, 0.35 * Lb * (i / 4) ** 2)).addScaledVector(side, Math.sin((i / 4) * 3 + b) * 0.5));
      const rb = RR(z0, th) * 0.32;
      const brows = pts.map((p, i) => {
        const Tn = pts[Math.min(i + 1, 4)].clone().sub(pts[Math.max(i - 1, 0)]).normalize();
        let Nn = Tn.clone().cross(new THREE.Vector3(0, 0, 1));
        if (Nn.length() < 1e-3) Nn = new THREE.Vector3(1, 0, 0);
        Nn.normalize();
        const B2 = Tn.clone().cross(Nn);
        return Array.from({ length: 6 }, (_, s) => { const a = (2 * Math.PI * s) / 6, dd = Nn.clone().multiplyScalar(Math.cos(a)).addScaledVector(B2, Math.sin(a)); return V(p.clone().addScaledVector(dd, rb * (1 - (0.85 * i) / 4)), barkCol(dd, p.z, a * 5 + i)); });
      });
      for (let i = 0; i < 4; i++) for (let s = 0; s < 6; s++) { const s2 = (s + 1) % 6; bark.f(brows[i][s], brows[i][s2], brows[i + 1][s2], brows[i + 1][s]); }
    }
    if (eyes) { // red eyes in a dark hollow
      const ze = R.uniform(2.2, 9), the = Math.atan2(toC.y, toC.x) + R.uniform(-0.6, 0.6);
      const n = new THREE.Vector3(Math.cos(the), Math.sin(the), 0), t = new THREE.Vector3(-n.y, n.x, 0);
      const surf = center(ze).addScaledVector(n, RR(ze, the));
      const sc = R.uniform(0.18, 0.32), sep = sc * 1.25;
      const P = (u: number, v: number, off: number) => surf.clone().addScaledVector(n, off).addScaledVector(t, u).add(new THREE.Vector3(0, 0, v));
      const hol = Array.from({ length: 10 }, (_, q) => V(P(Math.cos((2 * Math.PI * q) / 10) * (sep + sc * 1.7), Math.sin((2 * Math.PI * q) / 10) * sc * 1.7, 0.07), [0.004, 0.003, 0.02]));
      bark.f(...hol);
      const base: Array<[number, number]> = [[-1, -0.25], [0.15, -0.3], [1, 0.35], [-0.1, 0.28]];
      for (const sg of [1, -1]) {
        let pp = base.map(([x, y]) => [sg * (sep + x * sc), y * sc]);
        if (sg === -1) pp = pp.reverse();
        const vs = pp.map(([u, v]) => { const p = P(u, v, 0.11); return eyeMb.v([p.x, p.y, p.z], [1, 0.04, 0.04], [sway(p.z), [0, 0, ze - p.z]]); });
        eyeMb.f(...vs);
      }
    }
    return { bark, eyes: eyeMb };
  }

  // grass (two halves that sway in turn), flowers, bushes
  const tA: C3[] = TH.grass_tip;
  const grassMat = vcMat({ emit: TH.grass_emit, double: true, morph: true });
  const tufts = lite ? 260 : 500;
  const grassHalves = [0, 1].map(() => {
    const tip0Cache = new Map<number, C3>();
    const g = grass({
      r: R, tufts, rmin: 10.6, rspan: 34, gh,
      base: (r) => mul3(TH.grass_base, 1 - 0.6 * clamp01((r - 11) / 34)),
      tip: (r, ang) => {
        const key = Math.round(r * 1000);
        let tip0 = tip0Cache.get(key);
        if (!tip0) { tip0 = lerp3(tA[0], tA[1], R.random()); tip0Cache.set(key, tip0); }
        const rim = 0.3 * Math.abs(Math.cos(ang - SUN_AZ)) * (time === 'night' ? 0.5 : 1);
        return mul3(lerp3(tip0, TH.grass_rim, rim), 1 - 0.6 * clamp01((r - 11) / 34));
      },
    });
    const m = new THREE.Mesh(g, grassMat); m.morphTargetInfluences = [0];
    group.add(m);
    return m;
  });
  { // flowers
    const mb = new MB();
    for (let i = 0; i < (lite ? 40 : 70); i++) {
      const r = 14 + 22 * R2.random(), a = R2.uniform(0, 2 * Math.PI), x = r * Math.cos(a), y = r * Math.sin(a), z0 = gh(x, y);
      const top: P3 = [x + R2.uniform(-0.06, 0.06), y + R2.uniform(-0.06, 0.06), z0 + R2.uniform(0.35, 0.7)];
      mb.f(mb.v([x - 0.012, y, z0], [0.02, 0.07, 0.05]), mb.v([x + 0.012, y, z0], [0.02, 0.07, 0.05]), mb.v([top[0] + 0.012, top[1], top[2]], [0.08, 0.25, 0.12]), mb.v([top[0] - 0.012, top[1], top[2]], [0.08, 0.25, 0.12]));
      const pc: C3 = R2.choice(TH.flower as C3[]);
      const ctr = mb.v([top[0], top[1], top[2] + 0.02], [1, 0.9, 0.5]);
      const ring = Array.from({ length: 6 }, (_, k) => { const b = (2 * Math.PI * k) / 6; return mb.v([top[0] + 0.05 * Math.cos(b), top[1] + 0.05 * Math.sin(b), top[2] + 0.025], pc); });
      for (let k = 0; k < 6; k++) mb.f(ctr, ring[k], ring[(k + 1) % 6]);
    }
    group.add(new THREE.Mesh(mb.geo(), vcMat({ emit: TH.flower_emit, double: true })));
  }
  { // bushes
    const mb = new MB();
    for (let i = 0; i < 14; i++) {
      const a = rad(R.choice([R.uniform(195, 245), R.uniform(295, 345), R.uniform(0, 360)])), r = R.uniform(16, 34), s = R.uniform(1, 1.8);
      const x = r * Math.cos(a), y = r * Math.sin(a), z = gh(x, y);
      for (let k = 0; k < 4; k++) {
        const off = [R.uniform(-1.4, 1.4), R.uniform(-1, 1), R.uniform(0.2, 1)], rr = R.uniform(0.9, 1.6);
        const geo = new THREE.IcosahedronGeometry(rr, 1);
        const q = geo.attributes.position;
        for (let j = 0; j < q.count; j += 3) {
          const vs: number[] = [];
          for (let m = 0; m < 3; m++) {
            const lz = q.getZ(j + m) + off[2];
            vs.push(mb.v([x + (q.getX(j + m) + off[0]) * s, y + (q.getY(j + m) + off[1]) * s, z + lz * s * 0.75], lerp3(TH.bush_lo, TH.bush_hi, clamp01((lz + 0.3) / 2.6) * 0.8)));
          }
          mb.f(...vs);
        }
        geo.dispose();
      }
    }
    group.add(new THREE.Mesh(mb.geo(), vcMat()));
  }
  { // far trunks in the haze
    const mb = new MB();
    ([[52, 70, 50, 70], [59, 80, 55, 75], [66, 90, 60, 80]] as const).forEach(([radius, count, hmin, hmax], idx) => backdropLayer(mb, { r: R, idx, radius, count: lite ? Math.round(count * 0.6) : count, hmin, hmax, th: TH, sky, sunAz: SUN_AZ }));
    const back = glowMat({ fog: false, gain: time === 'night' ? 0.45 : 0.6 }); back.toneMapped = false;
    group.add(new THREE.Mesh(mb.geo(), back));
  }
  // light: soft shafts and the wash over the arena
  const beams = new MB(true);
  BEAMS.forEach(([top, tgt]) => { for (const [sc, gn] of [[1, 0.45], [0.7, 0.6], [0.4, 0.8]]) beam(beams, top, tgt, sc, gn, TH.beam_col, 0.35 * TH.beam_gain, 2.6); });
  const washMb = new MB(true);
  wash(washMb, 9.4, 0.7, (x, y) => { const g = TARGETS.reduce((s, [tx, ty]) => s + Math.exp(-((Math.hypot(x - tx, y - ty) / 5.5) ** 2)), 0); return (0.55 + 0.45 * Math.min(1, g)) * sstep(0, 3, 9.4 - Math.hypot(x, y)); }, TH.beam_col, 0.3 * 0.5 * TH.beam_gain);
  const beamMesh = new THREE.Mesh(beams.geo(), additiveMat());
  group.add(beamMesh, new THREE.Mesh(washMb.geo(), additiveMat()));
  const flies = drifters({ r: R, n: lite ? Math.round(TH.firefly_n * 0.6) : TH.firefly_n, at: () => { const a = R.uniform(0, 6.283), r = R.uniform(0, 22); return [r * Math.cos(a), r * Math.sin(a), R.uniform(0.8, 7)]; }, move: () => { const d = R.uniform(-1.5, 1.5); return [d, d * 0.5, R.uniform(1, 3)]; }, col: TH.firefly_col, size: 0.45, twinkle: true });
  if (TH.firefly_n > 0) group.add(flies.obj);

  const rig = skyRig({ th: TH, W: lite ? 512 : 1024, bodies: [sph(TH.body_az, TH.body_el)], body: { kind: TH.body, r: TH.body_r }, sparkles: TH.sparkles ?? 0 });
  group.add(rig.group);

  return {
    group, floor: 0.62,
    update(f) {
      rig.update(f);
      for (const t of trees) {
        const s = pingpong(f, t.P / 2, 0.15, 1, t.flip);
        let blink = 0;
        for (const b of t.blinks) if (Math.abs((f % 3600) - b) < 3) blink = 1 - Math.abs((f % 3600) - b) / 3;
        t.mesh.morphTargetInfluences![0] = s; t.mesh.morphTargetInfluences![1] = blink;
        if (t.eyes) { t.eyes.morphTargetInfluences![0] = s; t.eyes.morphTargetInfluences![1] = blink; }
      }
      grassHalves.forEach((m, i) => { m.morphTargetInfluences![0] = pingpong(f, 45, 0, 1, i); });
      const k = pingpong(f, 450);
      beamMesh.rotation.set(0.03 * k * 0.1, 0.02 * k * 0.1, 0);
      flies.update(f);
    },
    key: { dir: sph(TH.body_az, TH.body_el), color: TH.key_col, intensity: TH.key_e },
    ambient: { sky: mul3(TH.fill_col, 0.5), ground: TH.g_near, intensity: time === 'night' ? 0.25 : time === 'day' ? 0.7 : 0.4 },
    fog: { color: TH.fog, near: 45, far: 140 },
    lights: [{ pos: [0, 0, 3.5], color: TH.arena_col, intensity: 0.6, dist: 16 }, { pos: [0, 0, 0.9], color: TH.ring_col, intensity: 0.35, dist: 8 }],
    dispose() { rig.dispose(); disposeGroup(group); },
  };
}
