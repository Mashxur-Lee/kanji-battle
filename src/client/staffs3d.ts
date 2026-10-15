// The magic staffs, ported from the Blender models (scripts/staffs: verdant, ember, tide, storm, void).
// Each builder below follows its Blender script — the same shapes, numbers and animations — with fewer polygons
// for the game ("MINI/LITE" quality) and the drivers turned into code in update():
//   Verdant — gnarled bark shaft with roots, a twisting branch cradle and two climbing vines; every leaf sways.
//   Ember   — stone shaft with lava channels, a crown of flame petals round the core; lava drips from the rim.
//   Tide    — steel and silver with a water ribbon climbing the shaft; two crescent waves that every few seconds
//             melt into a stream, whirl round the orb and flow back; splash droplets.
//   Storm   — a Tesla-coil handle: shock rings race up it, arcs jump between the collars, bolts crackle round the
//             orb; two rings turn and six plumbob gems orbit.
//   Void    — nine floating spindles on an energy thread, silver ribbons wrapping the orb, three turning rings;
//             stars and sparkles are pulled into the core.
// The script models are Z-up, in metres, the orb at z≈3; here a group turns them Y-up and scales them so the
// orb (the gem) sits at GEM_Y above the hand. Seasonal staffs are a classic staff, recoloured.

import * as THREE from 'three';
import { staffOf } from '../shared/progress';
import { Batch, Tube, crystalGeo, helix, interp, mergeGeos, noiseTex, ringGeo, seeded, sheetGeo, spow, tubeGeo, veinTex, wave, clamp01, type P3, type Rng } from './geokit';

export const GEM_Y = 1.13;
const S = 0.66; // Blender metres → staff units: the foot (z=0) ends up at y≈-0.85, the orb (z=3) at GEM_Y

export interface Staff {
  group: THREE.Group;
  gem: THREE.Mesh;
  gemMat: THREE.MeshStandardMaterial;
  glow: THREE.Sprite;
  color: THREE.Color; // the gem colour
  /** every material except the gem (characters tint them when hurt / frozen) */
  materials: THREE.MeshStandardMaterial[];
  /** the animations (leaves sway, lava drips, waves whirl, bolts crackle…) — faster while charging */
  update(time: number, dt: number, charge: number): void;
}

type Anim = (f: number, dt: number) => void;
interface Orb { z: number; r: number; glass: THREE.Color; hot: THREE.Color; mid: THREE.Color; style?: 'calm' | 'flicker' }
interface Kit {
  B: THREE.Group; batch: Batch; rng: Rng;
  /** a still part (merged with the others of the same material) */
  stat(geo: THREE.BufferGeometry, mat: THREE.Material, pos?: P3, rot?: THREE.Euler, scale?: number | P3): void;
  /** a moving part */
  mesh(geo: THREE.BufferGeometry, mat: THREE.Material, pos?: P3): THREE.Mesh;
  inst(geo: THREE.BufferGeometry, mat: THREE.Material, count: number): THREE.InstancedMesh;
  anim(fn: Anim): void;
  m: Mats;
}
const col = (r: number, g: number, b: number) => new THREE.Color(r, g, b);

// ── materials (the scripts' node materials, simplified) ─────────────────────────────────────────────────────
function mats(list: THREE.MeshStandardMaterial[], glassy: THREE.Material[]) {
  const keep = (m: THREE.MeshStandardMaterial, tintable = true) => { if (tintable) list.push(m); else glassy.push(m); return m; };
  const lift = (c: THREE.Color, k = 1.7) => c.clone().multiplyScalar(k); // the game's lights are dimmer than the render's
  const ei = (strength: number) => Math.min(2.4, 0.55 + strength * 0.13);
  return {
    bark: (dark: THREE.Color, light: THREE.Color) => keep(new THREE.MeshStandardMaterial({ color: lift(light, 1.5), map: noiseTex(4, [3, 2]), roughness: 0.9, emissive: dark.clone().multiplyScalar(0.4) })),
    plain: (c: THREE.Color, rough = 0.5) => keep(new THREE.MeshStandardMaterial({ color: lift(c), roughness: rough })),
    leaf: (c0: THREE.Color, c1: THREE.Color) => keep(new THREE.MeshStandardMaterial({ color: lift(c1, 1.6), map: noiseTex(1, [2, 2], 0.45), roughness: 0.45, side: THREE.DoubleSide, emissive: c0.clone().multiplyScalar(0.6) })),
    metal: (c: THREE.Color, rough = 0.28) => keep(new THREE.MeshStandardMaterial({ color: lift(c, 1.25), metalness: 0.55, roughness: rough + 0.12 })),
    veins: (rock: THREE.Color, hot: THREE.Color, strength: number, cells = 6, width = 0.11, metal = 0.1) =>
      keep(new THREE.MeshStandardMaterial({ color: lift(rock, 2.4), map: noiseTex(1, [3, 2]), emissive: hot, emissiveMap: veinTex(cells, width, [4, 2]), emissiveIntensity: ei(strength), roughness: 0.6, metalness: metal })),
    lava: () => keep(new THREE.MeshStandardMaterial({ color: col(0.3, 0.05, 0), emissive: col(1, 0.22, 0.015), emissiveMap: noiseTex(2, [6, 1], 0.55), emissiveIntensity: 1.6, roughness: 0.6 })),
    core: (hot: THREE.Color, mid: THREE.Color, strength: number, side: THREE.Side = THREE.FrontSide) =>
      keep(new THREE.MeshStandardMaterial({ color: mid, emissive: hot, emissiveMap: noiseTex(1, [2, 2], 0.6), emissiveIntensity: ei(strength), roughness: 0.4, side })),
    emissive: (c: THREE.Color, strength: number) => keep(new THREE.MeshStandardMaterial({ color: c.clone().multiplyScalar(0.15), emissive: c, emissiveIntensity: ei(strength), roughness: 0.4 })),
    crystal: (c: THREE.Color, glow: number) => keep(new THREE.MeshStandardMaterial({ color: lift(c, 1.3), emissive: c, emissiveIntensity: 0.35 + glow * 0.15, roughness: 0.08, metalness: 0.1, flatShading: true, transparent: true, opacity: 0.9 })),
    glass: (c: THREE.Color, opacity = 0.3) => keep(new THREE.MeshStandardMaterial({ color: c, emissive: c.clone().multiplyScalar(0.25), roughness: 0.04, metalness: 0.3, transparent: true, opacity, depthWrite: false }), false),
    water: () => keep(new THREE.MeshStandardMaterial({ color: col(0.55, 0.82, 1), map: noiseTex(2, [4, 1], 0.7), emissive: col(0.1, 0.5, 1), emissiveIntensity: 0.45, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.72 }), false),
  };
}
type Mats = ReturnType<typeof mats>;

// ── script helpers ──────────────────────────────────────────────────────────────────────────────────────────
const P = (x: number) => Math.max(8, Math.round(x * 0.5)); // path points
const N = (x: number) => Math.max(1, Math.round(x * 0.45)); // decorations
const fract = (x: number) => x - Math.floor(x);
/** spring-driven kick: every `period` frames the part is flung round `turns` turns, overshoots and settles */
function occasionalSpin(f: number, period: number, turns: number, offset: number, dir: number, damp = 0.09, w = 0.1) {
  const ff = f + offset, s = ((ff % period) + period) % period;
  return dir * 2 * Math.PI * turns * (Math.floor(ff / period) + 1 - Math.exp(-damp * s) * (Math.cos(w * s) + (damp / w) * Math.sin(w * s)));
}
/** 0 → 1 in the first `up` frames of each period, back to 0 between `hold` and `hold+down` */
function morph(f: number, period: number, off: number, up = 8, hold = 10, down = 20) {
  const s = (((f + off) % period) + period) % period;
  return (0.5 - 0.5 * Math.cos(Math.PI * Math.min(1, s / up))) * (0.5 + 0.5 * Math.cos(Math.PI * Math.min(1, Math.max(0, (s - hold) / down))));
}
function scatterSphere(r: Rng, n: number, r0: number, r1: number): P3[] {
  const out: P3[] = [];
  for (let i = 0; i < n; i++) {
    const d = new THREE.Vector3(r.gauss(), r.gauss(), r.gauss());
    if (d.lengthSq() < 1e-9) d.set(0, 0, 1);
    d.normalize().multiplyScalar(r.uniform(r0, r1));
    out.push([d.x, d.y, d.z]);
  }
  return out;
}
/** a jagged lightning bolt from a to b (tapering) */
function boltGeo(r: Rng, a: P3, b: P3, segs: number, jag: number, radius: number) {
  const pts: P3[] = [a];
  for (let i = 1; i < segs; i++) pts.push([0, 1, 2].map((d) => a[d] + (b[d] - a[d]) * (i / segs) + r.uniform(-1, 1) * jag) as P3);
  pts.push(b);
  return tubeGeo(pts, pts.map((_, i) => radius * (1 - (0.7 * i) / segs)), { sharp: true, per: 1, radial: 4 });
}
/** a broad, rounded flame lick: a cupped, curling sheet */
function flamePetalGeo(a0: number, z0: number, H: number, W: number, reach: number, curl: number, twist: number, base = 0.45) {
  return sheetGeo(4, 10, (u, t) => {
    const s = 2 * u - 1;
    const r = 0.07 + reach * Math.sin((Math.min(t * 1.5, 1) * Math.PI) / 2) - curl * t ** 3;
    const z = z0 + H * t, a = a0 + twist * t;
    const w = W * Math.max(0.03, spow(1 - t ** 2.4, 0.5)) * (base + (1 - base) * Math.min(1, t * 4));
    const rr = r - Math.abs(s) * w * 0.5, off = s * w, ca = Math.cos(a), sa = Math.sin(a);
    return [rr * ca - off * sa, rr * sa + off * ca, z];
  });
}
function leafGeo(length = 0.14, width = 0.055) {
  return sheetGeo(3, 6, (u, t) => {
    const s = 2 * u - 1, w = width * (0.04 + spow(Math.sin(Math.PI * t ** 0.75), 0.9));
    return [s * w, t * length, -Math.abs(s) * w * 0.45 - 0.18 * length * t * t];
  });
}
const dummy = new THREE.Object3D();
function setInst(m: THREE.InstancedMesh, i: number, p: P3, s: number | P3, rot?: [number, number, number]) {
  dummy.position.set(p[0], p[1], p[2]);
  if (typeof s === 'number') dummy.scale.setScalar(Math.max(1e-5, s)); else dummy.scale.set(Math.max(1e-5, s[0]), Math.max(1e-5, s[1]), Math.max(1e-5, s[2]));
  if (rot) dummy.rotation.set(rot[0], rot[1], rot[2], 'ZYX'); else dummy.rotation.set(0, 0, 0);
  dummy.updateMatrix();
  m.setMatrixAt(i, dummy.matrix);
}
const ICO = new THREE.IcosahedronGeometry(1, 1);
const flow = (k: Kit, mat: THREE.MeshStandardMaterial, speed: number) => {
  const maps = [mat.map, mat.emissiveMap].filter(Boolean) as THREE.Texture[];
  k.anim((_f, dt) => { for (const t of maps) t.offset.x -= dt * speed; });
};

// ── 1. VERDANT ──────────────────────────────────────────────────────────────────────────────────────────────
function buildVerdant(k: Kit): Orb {
  const { rng, m } = k;
  const bark = m.bark(col(0.045, 0.028, 0.014), col(0.3, 0.19, 0.1));
  const vine = m.plain(col(0.1, 0.3, 0.05), 0.55);
  const leaf = m.leaf(col(0.015, 0.14, 0.02), col(0.1, 0.34, 0.045));
  const W = 0.022, C = (z: number) => wave(z, W);
  const zs = [0, 0.14, 0.5, 0.95, 1.4, 1.85, 2.2, 2.42, 2.55], rs = [0.02, 0.052, 0.058, 0.05, 0.056, 0.05, 0.06, 0.072, 0.078];
  // (the shaft ends in a low dome inside the branch bundle — no flat cut and no spike between the branches)
  k.stat(tubeGeo([...zs, 2.6, 2.63].map((z) => [...C(z), z] as P3), [...rs, 0.06, 0.015], { radial: 8, per: 5 }), bark); // a rounded top, hidden in the branches
  for (let i = 0; i < 5; i++) { // roots at the foot
    const a = (2 * Math.PI * i) / 5 + rng.uniform(-0.3, 0.3), c = Math.cos(a), s = Math.sin(a);
    k.stat(tubeGeo([[0.03 * c, 0.03 * s, 0.3], [0.06 * c, 0.06 * s, 0.17], [0.1 * c, 0.1 * s, 0.07], [0.14 * c, 0.14 * s, 0.012]], [0.04, 0.026, 0.016, 0.006], { radial: 6 }), bark);
  }
  const leaves: Array<{ p: P3; rx: number; ry: number; rz: number; s: number; ph: number }> = [];
  const placeLeaf = (p: P3, out: number, s: number) => {
    leaves.push({ p, rx: rng.uniform(0.2, 0.9), ry: rng.uniform(-0.3, 0.3), rz: out - Math.PI / 2 + rng.uniform(-0.5, 0.5), s, ph: rng.uniform(0, 6.28) });
  };
  // the twisting branch cradle round the orb
  // the cradle: rising out of the shaft and curling in over the orb (the tips meet above it rather than poking out)
  const rr = [0.015, 0.09, 0.2, 0.235, 0.185, 0.06], zz = [2.42, 2.6, 2.8, 3.02, 3.22, 3.33];
  for (let b = 0; b < 6; b++) {
    const a0 = (2 * Math.PI * b) / 6 + rng.uniform(-0.15, 0.15);
    const pts = rr.map((r, i) => { const a = a0 + 0.22 * i; return [r * Math.cos(a), r * Math.sin(a), zz[i] + rng.uniform(-0.02, 0.02)] as P3; });
    k.stat(tubeGeo(pts, [0.034, 0.028, 0.022, 0.017, 0.011, 0.004], { radial: 6, per: 6 }), bark);
    for (const i of [2, 4]) placeLeaf(pts[i], Math.atan2(pts[i][1], pts[i][0]), rng.uniform(0.6, 1));
  }
  // the climbing vines
  ([[0.32, 2.42, 5.5, 0.4, 0.013], [0.9, 2.1, 3.0, 3.4, 0.008]] as const).forEach(([z0, z1, turns, ph, r0]) => {
    const n = P(56);
    const pts = helix((t) => interp(zs, rs, z0 + (z1 - z0) * t) + 0.018, z0, z1, turns, n, ph, 0.004, rng, C);
    k.stat(tubeGeo(pts, pts.map((_, i) => r0 * (1 - (0.55 * i) / (n - 1))), { radial: 5, per: 3 }), vine);
    for (let i = 2; i < n - 2; i += Math.max(1, Math.floor((n - 4) / N(22)))) {
      const p = pts[i], c = C(p[2]);
      placeLeaf(p, Math.atan2(p[1] - c[1], p[0] - c[0]), rng.uniform(0.7, 1.3));
    }
  });
  const lm = k.inst(leafGeo(), leaf, leaves.length);
  k.anim((f) => { // every leaf sways in the wind, each at its own pace
    leaves.forEach((l, i) => setInst(lm, i, l.p, l.s, [l.rx + 0.16 * Math.sin(f * 0.2094 + l.ph), l.ry, l.rz + 0.1 * Math.sin(f * 0.1309 + l.ph * 1.7)]));
    lm.instanceMatrix.needsUpdate = true;
  });
  return { z: 3.0, r: 0.16, glass: col(0.45, 1, 0.35), hot: col(0.7, 1, 0.3), mid: col(0.15, 0.8, 0.05) };
}

// ── 2. EMBER ────────────────────────────────────────────────────────────────────────────────────────────────
function buildEmber(k: Kit): Orb {
  const { rng, m } = k;
  const stone = m.veins(col(0.085, 0.065, 0.055), col(1, 0.3, 0.03), 2, 7, 0.06, 0);
  stone.roughness = 0.9;
  const lava = m.lava();
  const fire = m.core(col(1, 0.36, 0.04), col(0.9, 0.12, 0.01), 2, THREE.DoubleSide);
  flow(k, lava, 0.25); flow(k, fire, -0.18);
  const W = 0.014, C = (z: number) => wave(z, W);
  const zs = [0, 0.12, 0.45, 0.9, 1.35, 1.8, 2.2, 2.42, 2.55], rs = [0.03, 0.07, 0.05, 0.062, 0.052, 0.066, 0.056, 0.07, 0.085];
  k.stat(tubeGeo(zs.map((z) => [...C(z), z] as P3), rs, { radial: 8, per: 5 }), stone);
  const shr = (t: number, z0 = 0.3, z1 = 2.35) => interp(zs, rs, z0 + (z1 - z0) * t);
  // two raised stone ridges spiral up the shaft, glowing lava flows in the channels between them
  for (let i = 0; i < 2; i++) {
    const n = P(60);
    const pts = helix((t) => shr(t) + 0.004, 0.3, 2.35, 4.5, n, i * Math.PI, 0, undefined, C);
    k.stat(tubeGeo(pts, pts.map((_, j) => 0.012 + 0.003 * Math.sin(j * 0.5)), { radial: 5, per: 3 }), stone);
  }
  for (let i = 0; i < 2; i++) {
    const n = P(60);
    const pts = helix((t) => shr(t) - 0.002, 0.3, 2.35, 4.5, n, Math.PI / 2 + i * Math.PI, 0, undefined, C);
    k.stat(tubeGeo(pts, pts.map((_, j) => 0.0085 + 0.002 * Math.sin(j * 0.7)), { radial: 5, per: 3 }), lava);
  }
  { // a thin cross-flow running the other way
    const pts = helix((t) => shr(t, 0.5, 2.2) - 0.001, 0.5, 2.2, -3.0, P(50), 0.8, 0, undefined, C);
    k.stat(tubeGeo(pts, 0.0055, { radial: 4, per: 3 }), lava);
  }
  // stone collar with a lava ring under the crown
  k.stat(ringGeo(0.088, [0, 0, 0], 0.016, 10, 0.2), stone, [0, 0, 2.5]);
  k.stat(ringGeo(0.082, [0, 0, 0], 0.008, 10, 0), lava, [0, 0, 2.55]);
  // the crown: light-orange fire petals growing out of the shaft and curling round the core
  for (let i = 0; i < 5; i++) rng.uniform(0.62, 0.86);
  for (let i = 0; i < 8; i++) k.stat(flamePetalGeo((2 * Math.PI * i) / 8 + 0.1, 2.5, rng.uniform(0.62, 0.85) + 0.12, 0.04, 0.13, 0.08, 0.6, 0.9), fire);
  // a lava rim round the core's border, and lava dripping from it
  k.stat(ringGeo(0.165, [0, 0, 0], 0.007, 14, 0), lava, [0, 0, 2.86]);
  const nd = 6, drips: Array<{ p: P3; s: number; ph: number }> = [];
  for (let i = 0; i < nd; i++) {
    const a = (2 * Math.PI * i) / nd + rng.uniform(-0.2, 0.2), r = rng.uniform(0.16, 0.2);
    drips.push({ p: [r * Math.cos(a), r * Math.sin(a), 2.9], s: rng.uniform(0.01, 0.016), ph: rng.random() });
  }
  const dm = k.inst(ICO, m.emissive(col(1, 0.45, 0.05), 10), nd);
  k.anim((f) => {
    drips.forEach((d, i) => {
      const u = fract(f / 60 + d.ph), w = d.s * Math.min(1, u * 6) * (1 - 0.6 * u);
      setInst(dm, i, [d.p[0], d.p[1], 2.9 - 0.8 * u ** 1.6], [0.85 * w, 0.85 * w, 7 * w]);
    });
    dm.instanceMatrix.needsUpdate = true;
  });
  return { z: 2.95, r: 0.14, glass: col(1, 0.45, 0.1), hot: col(1, 0.7, 0.15), mid: col(1, 0.25, 0.02) };
}

// ── 3. TIDE ─────────────────────────────────────────────────────────────────────────────────────────────────
function buildTide(k: Kit): Orb {
  const { rng, m } = k;
  const steel = m.metal(col(0.1, 0.12, 0.16), 0.3), silver = m.metal(col(0.78, 0.84, 0.9), 0.18);
  const water = m.water(), gem = m.crystal(col(0.2, 0.7, 1), 2.5);
  const droplet = m.crystal(col(0.4, 0.8, 1), 1.5);
  flow(k, water, 0.3);
  const W = 0.006, C = (z: number) => wave(z, W);
  const zs = [0.3, 0.6, 1.2, 1.8, 2.2, 2.4, 2.55], rs = [0.036, 0.036, 0.034, 0.036, 0.04, 0.052, 0.06];
  k.stat(tubeGeo(zs.map((z) => [...C(z), z] as P3), rs, { radial: 8, per: 5 }), steel);
  // socket cap and three claws holding the orb
  k.stat(ringGeo(0.066, [0, 0, 0], 0.012, 10, 0), silver, [0, 0, 2.56]);
  for (let i = 0; i < 3; i++) {
    const ca = Math.cos((2 * Math.PI * i) / 3 + 0.5), sa = Math.sin((2 * Math.PI * i) / 3 + 0.5);
    k.stat(tubeGeo([[0.04 * ca, 0.04 * sa, 2.55], [0.085 * ca, 0.085 * sa, 2.68], [0.12 * ca, 0.12 * sa, 2.82], [0.13 * ca, 0.13 * sa, 2.93]], [0.016, 0.012, 0.009, 0.004], { radial: 6 }), silver);
  }
  for (let i = 0; i < 2; i++) k.stat(tubeGeo(helix(0.05, 0.4, 2.45, 7, P(72), i * Math.PI, 0, undefined, C), 0.0075, { radial: 4, per: 3 }), silver);
  { // the water ribbon climbing the shaft: swells travel up it
    const n = P(64);
    const pts = helix((t) => 0.058 + 0.012 * Math.sin(t * 20), 0.45, 2.5, 3.2, n, 1.0, 0, undefined, C);
    const rad = pts.map((_, i) => 0.012 + 0.014 * (0.5 + 0.5 * Math.sin(i * 0.45)));
    const tube = new Tube(n, { radial: 6, per: 3 });
    tube.set(pts, rad);
    k.mesh(tube.geo, water);
    const now = rad.slice();
    k.anim((f) => { for (let i = 0; i < n; i++) now[i] = rad[i] * (1 + 0.6 * Math.sin(f * 0.2618 - i * 0.7)); tube.set(pts, now); });
  }
  // glowing runes
  [0.7, 1.0, 1.35, 1.7, 2.05].forEach((z, i) => { const a = i * 2.1; k.stat(crystalGeo(0.035, 0.035, 0.014, 4, [0, 0, a]), gem, [0.047 * Math.cos(a), 0.047 * Math.sin(a), z]); });
  // the crescent waves: at rest a tapered crescent; when the spin starts it melts into an even stream circling
  // the core, and when the spin ends it flows back into the crescent
  ([['main', 0.34, 0.2, 250, 15, 0.05, 0, 0.3, 300, 0.022], ['inner', 0.26, 0.17, 215, 55, 0.032, -0.05, 0.22, 250, 0.015]] as const).forEach(([, R0, R1, a0, a1, thick, yo, Rs, spanS, ru], wi) => {
    const n = 40, off = 20 + wi * 50, dirn = wi === 0 ? 1 : -1, sgn = a1 < a0 ? -1 : 1;
    const deg = Math.PI / 180;
    const base = Array.from({ length: n }, (_, i) => {
      const t = i / (n - 1);
      return { a: (a0 + (a1 - a0) * t) * deg, b: a0 * deg + sgn * spanS * deg * t, R: R0 + (R1 - R0) * t, y: yo + 0.04 * Math.sin(t * 6), r: 0.004 + thick * spow(Math.sin(Math.PI * t), 0.8) };
    });
    // random waves for every point: [amp, speed, phase, per-kick shuffle]
    const term = (amp: number, speed: number, wl: number, i: number) => [amp * rng.uniform(0.35, 1.4), speed * rng.uniform(0.8, 1.2), -i * wl + rng.uniform(-1.4, 1.4), rng.uniform(1, 5)];
    const terms = base.map((_, i) => [term(0.07, 0.35, 0.9, i), term(0.035, 0.7, 1.7, i), term(0.03, 0.3, 1, i), term(0.015, 0.6, 1.8, i), term(0.32, 0.45, 0.9, i), term(0.2, 0.8, 1.6, i), term(0.1, 1.3, 2.3, i)]);
    const tube = new Tube(n, { radial: 6, per: 2 });
    const pts: P3[] = base.map(() => [0, 0, 0]), rad = base.map(() => 0);
    const mesh = k.mesh(tube.geo, water, [0, 0, 3]);
    mesh.renderOrder = 2;
    const step = (f: number) => {
      const sp = occasionalSpin(f, 120, 1, off, dirn), mm = morph(f, 120, off, 12), kk = Math.floor((f + off) / 120);
      const T = (x: number[]) => x[0] * Math.sin(f * x[1] + x[2] + kk * x[3]);
      base.forEach((p, i) => {
        const tt = terms[i];
        const ang = p.a * (1 - mm) + p.b * mm + sp;
        const rr = p.R * (1 - mm) + Rs * (1 + mm * (T(tt[0]) + T(tt[1]))) * mm;
        pts[i][0] = rr * Math.cos(ang); pts[i][2] = rr * Math.sin(ang);
        pts[i][1] = p.y * (1 - mm) + (yo + T(tt[2]) + T(tt[3])) * mm;
        rad[i] = p.r * (1 + 0.3 * (1 - mm) * Math.sin(f * 0.2618 - i * 0.8)) * (1 - mm) + ru * mm * Math.max(0.3, 1 + mm * (T(tt[4]) + T(tt[5]) + T(tt[6])));
      });
      tube.set(pts, rad);
    };
    step(0);
    k.anim(step);
  });
  // splash droplets thrown off the water fly in an arc and fall back; a few more hang along the shaft
  const spl: Array<{ start: P3; vel: P3; s: number; per: number; ph: number }> = [];
  for (let i = 0; i < 10; i++) {
    const a = rng.uniform(0, 2 * Math.PI), d = [Math.cos(a), 0, Math.sin(a)], r0 = rng.uniform(0.2, 0.34), v = rng.uniform(0.12, 0.3);
    spl.push({ start: [d[0] * r0, 0, 3 + d[2] * r0], vel: [d[0] * v + rng.uniform(-0.05, 0.05), rng.uniform(-0.1, 0.1), d[2] * v + rng.uniform(0.3, 0.6)], s: rng.uniform(0.006, 0.016), per: 0, ph: 0 });
  }
  for (const s of spl) { s.per = rng.choice([60, 80, 96]); s.ph = rng.random(); }
  const far = Array.from({ length: N(10) }, () => ({ p: [rng.uniform(-0.15, 0.15), rng.uniform(-0.1, 0.1), rng.uniform(0.6, 2.4)] as P3, s: rng.uniform(0.006, 0.018) }));
  const dm = k.inst(ICO, droplet, spl.length + far.length);
  far.forEach((d, i) => setInst(dm, spl.length + i, d.p, d.s));
  k.anim((f) => {
    spl.forEach((s, i) => {
      const u = fract(f / s.per + s.ph), tau = u * 0.9;
      setInst(dm, i, [s.start[0] + s.vel[0] * tau, s.start[1] + s.vel[1] * tau, s.start[2] + s.vel[2] * tau - 0.9 * tau * tau], s.s * Math.min(1, u * 10) * Math.min(1, (1 - u) * 5));
    });
    dm.instanceMatrix.needsUpdate = true;
  });
  // the crystal foot
  k.stat(crystalGeo(0.1, 0.32, 0.045, 6), gem, [0, 0, 0.32]);
  for (let i = 0; i < 3; i++) { const a = (2 * Math.PI * i) / 3; k.stat(crystalGeo(0.02, 0.12, 0.016, 4, [Math.sin(a) * 0.4, -Math.cos(a) * 0.4, 0]), gem, [0.045 * Math.cos(a), 0.045 * Math.sin(a), 0.36]); }
  return { z: 3.0, r: 0.145, glass: col(0.3, 0.75, 1), hot: col(0.5, 0.95, 1), mid: col(0.05, 0.4, 1) };
}

// ── 4. STORM ────────────────────────────────────────────────────────────────────────────────────────────────
function buildStorm(k: Kit): Orb {
  const { rng, m } = k;
  const vein = m.veins(col(0.03, 0.02, 0.06), col(0.85, 0.6, 1), 3, 6, 0.09, 0.5);
  const silver = m.metal(col(0.62, 0.58, 0.72), 0.2), gem = m.crystal(col(0.35, 0.15, 1), 3);
  const boltM = m.emissive(col(0.65, 0.4, 1), 4), rod = m.emissive(col(0.6, 0.3, 1), 3);
  // the handle is a Tesla coil: a cracked-obsidian grip, a glowing violet rod, a silver coil and collars
  k.stat(tubeGeo([[0, 0, 0.3], [0, 0, 0.55], [0, 0, 0.92]], [0.03, 0.037, 0.037], { radial: 8 }), vein);
  for (const z of [0.46, 0.62, 0.78]) k.stat(ringGeo(0.04, [0, 0, 0], 0.007, 10, 0), silver, [0, 0, z]);
  k.stat(tubeGeo([[0, 0, 0.85], [0, 0, 1.7], [0, 0, 2.55]], [0.017, 0.017, 0.02], { radial: 6 }), rod);
  k.stat(tubeGeo(helix(0.052, 0.98, 2.36, 9, 46), 0.0075, { radial: 4, per: 3 }), silver);
  const zc = [0.95, 1.35, 1.75, 2.15, 2.45];
  zc.forEach((z, i) => k.stat(ringGeo(i === 0 || i === 4 ? 0.064 : 0.058, [0, 0, 0], 0.011, 10, 0), silver, [0, 0, z]));
  // electro waves: shock rings race up the handle (growing and fading)…
  const shockGeo = ringGeo(0.075, [0, 0, 0], 0.0045, 10, 0);
  for (let i = 0; i < 4; i++) {
    const em = m.emissive(col(0.65, 0.4, 1), 4), full = em.emissiveIntensity;
    em.transparent = true;
    const sh = k.mesh(shockGeo, em);
    k.anim((f) => {
      const u = fract(f / 60 + i / 4);
      sh.position.z = 0.95 + 1.45 * u; sh.scale.set(1 + 0.3 * u, 1 + 0.3 * u, 1);
      const a = Math.min(1, u * 8) * Math.min(1, (1 - u) * 3);
      em.emissiveIntensity = full * a; em.opacity = a;
    });
  }
  const flick = (f: number, ph: number, cut: number) => clamp01((Math.sin(f * 0.9 + ph) + Math.sin(f * 0.37 + ph * 2.3) - cut) * 3);
  // …and electric arcs jump between the collars
  for (let i = 0; i < zc.length - 1; i++) {
    const a = rng.uniform(0, 6.28);
    const p0: P3 = [0.07 * Math.cos(a), 0.07 * Math.sin(a), zc[i]], p1: P3 = [0.07 * Math.cos(a + 0.9), 0.07 * Math.sin(a + 0.9), zc[i + 1]];
    const mid: P3 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2, (p0[2] + p1[2]) / 2];
    const arc = k.mesh(boltGeo(rng, [p0[0] - mid[0], p0[1] - mid[1], p0[2] - mid[2]], [p1[0] - mid[0], p1[1] - mid[1], p1[2] - mid[2]], 6, 0.012, 0.005), boltM, mid);
    const ph = rng.uniform(0, 6.28);
    k.anim((f) => { arc.scale.setScalar(Math.max(1e-4, flick(f, ph, 0.3))); });
  }
  // lightning along the shaft and round the orb
  for (let i = 0; i < 3; i++) {
    const a = (2 * Math.PI * i) / 3, r = 0.066;
    k.stat(boltGeo(rng, [r * Math.cos(a), r * Math.sin(a), 0.95], [r * Math.cos(a + 0.6), r * Math.sin(a + 0.6), 2.35], 22, 0.012, 0.0045), boltM);
  }
  for (let i = 0; i < 4; i++) {
    const d = new THREE.Vector3(rng.gauss(), rng.gauss(), rng.gauss()).normalize(), far = rng.uniform(0.32, 0.5);
    const b = k.mesh(boltGeo(rng, [d.x * 0.16, d.y * 0.16, d.z * 0.16], [d.x * far, d.y * far, d.z * far], 7, 0.03, 0.005), boltM, [0, 0, 3]);
    const ph = rng.uniform(0, 6.28);
    k.anim((f) => { // crackle: re-aim every few frames, and flicker
      b.rotation.set(Math.floor(f / 5 + ph) * 1.7, 0, Math.floor(f / 4 + ph) * 2.4, 'ZYX');
      b.scale.setScalar(Math.max(1e-4, flick(f, ph, 0.5)));
    });
  }
  // silver prongs hugging the orb
  for (let i = 0; i < 3; i++) {
    const a0 = (2 * Math.PI * i) / 3, rr = [0.03, 0.12, 0.23, 0.23, 0.15], zz = [2.5, 2.66, 2.85, 3.08, 3.22];
    k.stat(tubeGeo(rr.map((r, j) => [r * Math.cos(a0 + 0.3 * j), r * Math.sin(a0 + 0.3 * j), zz[j]] as P3), [0.03, 0.024, 0.018, 0.012, 0.004], { radial: 6, per: 6 }), silver);
  }
  // two turning rings and the central spike
  ([[0.3, [75, 10, 20], 0.011, 0.02618], [0.23, [-25, 15, 60], 0.009, -0.05236]] as const).forEach(([rad, eu, th, sp]) => {
    const rg = k.mesh(ringGeo(rad, eu.map((d) => (d * Math.PI) / 180) as P3, th, 10), silver, [0, 0, 3]);
    k.anim((f) => { rg.rotation.z = f * sp; });
  });
  k.stat(crystalGeo(0.58, 0.06, 0.03, 4), silver, [0, 0, 3.14]);
  // plumbob gems glide round the core on 3 tilted orbits, staying upright
  const planes = [new THREE.Vector3(0, 0.6, 0.8), new THREE.Vector3(0.7, -0.3, 0.65), new THREE.Vector3(-0.45, 0.5, 0.75)];
  const speeds = [1, -2, 3];
  const bobs = Array.from({ length: 6 }, (_, i) => {
    const nv = planes[i % 3].clone().normalize(), ref = Math.abs(nv.z) < 0.9 ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(1, 0, 0);
    const e1 = nv.clone().cross(ref).normalize(), e2 = nv.clone().cross(e1);
    return { e1, e2, R: rng.uniform(0.32, 0.5), th0: Math.floor(i / 3) * Math.PI + rng.uniform(-0.3, 0.3), w: speeds[i % 3] * 0.02618, ph: rng.uniform(0, 6.28) };
  });
  const pm = k.inst(crystalGeo(0.11, 0.11, 0.035, 4), gem, bobs.length);
  k.anim((f) => {
    bobs.forEach((b, i) => {
      const th = b.th0 + f * b.w, r = b.R * (1 + 0.12 * Math.sin(f * 0.05236 + b.ph));
      setInst(pm, i, [r * (b.e1.x * Math.cos(th) + b.e2.x * Math.sin(th)), r * (b.e1.y * Math.cos(th) + b.e2.y * Math.sin(th)), 3 + r * (b.e1.z * Math.cos(th) + b.e2.z * Math.sin(th))], 1);
    });
    pm.instanceMatrix.needsUpdate = true;
  });
  k.stat(crystalGeo(0.1, 0.3, 0.04, 5), gem, [0, 0, 0.32]);
  return { z: 3.0, r: 0.15, glass: col(0.6, 0.3, 1), hot: col(0.7, 0.5, 1), mid: col(0.4, 0.1, 1), style: 'flicker' };
}

// ── 5. VOID ─────────────────────────────────────────────────────────────────────────────────────────────────
function buildVoid(k: Kit): Orb {
  const { rng, m } = k;
  const vein = m.veins(col(0.02, 0.03, 0.05), col(0.5, 0.85, 1), 6, 6, 0.06, 0.15);
  vein.flatShading = true;
  const silver = m.metal(col(0.8, 0.86, 0.95), 0.15), gem = m.crystal(col(0.25, 0.65, 1), 4);
  const star = m.emissive(col(0.7, 0.9, 1), 14), energy = m.emissive(col(0.3, 0.7, 1), 9);
  // the handle: nine floating obsidian spindles strung on a glowing thread, silver rings drifting in the gaps
  k.stat(tubeGeo([[0, 0, 0.3], [0, 0, 1.4], [0, 0, 2.55]], [0.01, 0.01, 0.013], { radial: 6 }), energy);
  for (let i = 0; i < 9; i++) k.stat(crystalGeo(0.092, 0.092, 0.03 + 0.0045 * i, 6, [0, 0, i * 0.5]), vein, [0, 0, 0.55 + 0.21 * i]);
  for (let i = 0; i < 4; i++) {
    const rg = k.mesh(ringGeo(0.058 + 0.006 * i, [0, 0, 0], 0.006, 12, 0.6), silver, [0, 0, 0.655 + 0.42 * i]);
    k.anim((f) => { rg.rotation.z = f * (i % 2 === 0 ? 1 : -1) * 0.05236; });
  }
  // two big silver ribbons spiral up and wrap the orb
  const rfn = (t: number) => { const top = Math.max(0, (t - 0.7) / 0.3); return 0.05 + 0.26 * spow(Math.sin((top * Math.PI) / 2), 1.5); };
  for (let i = 0; i < 2; i++) {
    const n = P(110);
    k.stat(tubeGeo(helix(rfn, 0.4, 3.2, 6, n, i * Math.PI), Array.from({ length: n }, (_, j) => 0.0085 + 0.004 * Math.sin(j * 0.55 + i)), { radial: 5, per: 3 }), silver);
  }
  // three turning rings
  ([[0.36, [72, 10, 0], 0.01, 0.02618], [0.31, [-35, 0, 40], 0.009, -0.03927], [0.27, [100, 0, 75], 0.008, 0.05236]] as const).forEach(([rad, eu, th, sp]) => {
    const rg = k.mesh(ringGeo(rad, eu.map((d) => (d * Math.PI) / 180) as P3, th, 10), silver, [0, 0, 3]);
    k.anim((f) => { rg.rotation.z = f * sp; });
  });
  k.stat(crystalGeo(0.62, 0.05, 0.032, 4), gem, [0, 0, 3.17]); // the spire above the orb
  // every star and every white sparkle is pulled into the core, over and over
  const rels = scatterSphere(rng, N(110), 0.35, 0.85);
  for (let i = 0; i < N(40); i++) rels.push([rng.uniform(-0.12, 0.12), rng.uniform(-0.12, 0.12), rng.uniform(-1.2, 0.35)]);
  const absorbers = (list: P3[], size: () => number) => list.map((rel) => ({ rel, s: size(), per: rng.choice([48, 60, 80, 96, 120]), ph: rng.random() }));
  const stars = absorbers(rels, () => rng.uniform(0.004, 0.011));
  const sparkles = absorbers(scatterSphere(rng, Math.max(N(30), 8), 0.4, 0.9), () => rng.uniform(0.02, 0.045));
  const sparkGeo = mergeGeos([crystalGeo(1, 1, 0.14, 4), crystalGeo(1, 1, 0.14, 4, [Math.PI / 2, 0, 0])].map((g) => { g.setIndex(Array.from({ length: g.attributes.position.count }, (_, i) => i)); return g; }));
  const sm = k.inst(ICO, star, stars.length), km = k.inst(sparkGeo, star, sparkles.length);
  const absorb = (im: THREE.InstancedMesh, list: typeof stars, f: number) => {
    list.forEach((a, i) => {
      const u = fract(f / a.per + a.ph), k2 = (1 - u) ** 1.6;
      setInst(im, i, [a.rel[0] * k2, a.rel[1] * k2, 3 + a.rel[2] * k2], a.s * Math.min(1, u * 8) * (1 - u) ** 0.5);
    });
    im.instanceMatrix.needsUpdate = true;
  };
  k.anim((f) => { absorb(sm, stars, f); absorb(km, sparkles, f); });
  // the crystal foot with silver claws
  k.stat(crystalGeo(0.08, 0.31, 0.05, 6), gem, [0, 0, 0.33]);
  for (let i = 0; i < 3; i++) {
    const a = (2 * Math.PI * i) / 3 + 0.4, c = Math.cos(a), s = Math.sin(a);
    k.stat(tubeGeo([[0.035 * c, 0.035 * s, 0.52], [0.07 * c, 0.07 * s, 0.44], [0.11 * c, 0.11 * s, 0.34], [0.1 * c, 0.1 * s, 0.24]], [0.02, 0.016, 0.011, 0.003], { radial: 6 }), silver);
  }
  return { z: 3.0, r: 0.17, glass: col(0.05, 0.25, 1), hot: col(0.2, 0.5, 1), mid: col(0, 0.05, 0.4) };
}

const BUILDERS: Record<string, (k: Kit) => Orb> = { verdant: buildVerdant, ember: buildEmber, tide: buildTide, storm: buildStorm, void: buildVoid };
const SEEDS: Record<string, number> = { verdant: 7, ember: 8, tide: 9, storm: 10, void: 11 };

export function buildStaff(id: string | null | undefined, glowTex: THREE.Texture): Staff {
  const skin = staffOf(id);
  const kind = BUILDERS[skin.base ?? skin.id] ? (skin.base ?? skin.id) : 'verdant';
  const group = new THREE.Group();
  const B = new THREE.Group(); // Blender space: Z up, metres
  B.rotation.x = -Math.PI / 2; B.scale.setScalar(S); B.position.y = GEM_Y - 3 * S;
  group.add(B);
  const materials: THREE.MeshStandardMaterial[] = [], glassy: THREE.Material[] = [];
  const anims: Anim[] = [];
  const batch = new Batch();
  const kit: Kit = {
    B, batch, rng: seeded(SEEDS[kind]), m: mats(materials, glassy),
    stat: (geo, mat, pos, rot, scale) => batch.add(geo, mat, pos, rot, scale),
    mesh: (geo, mat, pos) => { const o = new THREE.Mesh(geo, mat); if (pos) o.position.set(...pos); B.add(o); return o; },
    inst: (geo, mat, count) => { const o = new THREE.InstancedMesh(geo, mat, count); o.frustumCulled = false; B.add(o); return o; },
    anim: (fn) => { anims.push(fn); },
  };
  const orb = BUILDERS[kind](kit);
  batch.build(B);

  const color = new THREE.Color(skin.gem);
  const tint = skin.tint ? new THREE.Color(skin.tint) : null;
  // the orb = the gem: a glass ball with a glowing core that breathes (or flickers, on the Storm staff).
  // It is what the cast launches, so it lives outside the Blender group, in staff units.
  const gemMat = new THREE.MeshStandardMaterial({ color: tint ? orb.glass.clone().lerp(color, 0.6) : orb.glass, emissive: color, emissiveIntensity: 1.2, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.5, depthWrite: false });
  const gem = new THREE.Mesh(new THREE.SphereGeometry(orb.r * S, 20, 14), gemMat);
  gem.position.y = GEM_Y + (orb.z - 3) * S;
  gem.renderOrder = 1;
  group.add(gem);
  const coreMat = kit.m.core(tint ? orb.hot.clone().lerp(color, 0.7) : orb.hot, tint ? orb.mid.clone().lerp(color, 0.5) : orb.mid, 6);
  const core = new THREE.Mesh(new THREE.SphereGeometry(orb.r * S * 0.6, 14, 10), coreMat);
  gem.add(core);
  const coreEI = coreMat.emissiveIntensity;
  anims.push((f) => {
    if (orb.style === 'flicker') {
      const w = Math.abs(Math.sin(f * 0.9) * Math.sin(f * 0.37 + 1.1));
      core.scale.setScalar(1 + 0.1 * w); coreMat.emissiveIntensity = coreEI * (0.55 + 0.45 * w) * 1.6;
    } else core.scale.setScalar(1 + 0.05 * Math.sin(f * 0.1309));
  });
  materials.splice(materials.indexOf(coreMat), 1); // the core glows whatever happens to the wizard

  if (tint) {
    for (const m of [...materials, ...glassy] as THREE.MeshStandardMaterial[]) {
      m.color.lerp(tint, 0.55);
      if (m.emissive.getHex() !== 0) m.emissive.lerp(tint, 0.7);
    }
  }
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: color.getHex(), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.5 }));
  glow.scale.setScalar(0.45);
  glow.position.y = gem.position.y;
  group.add(glow);

  let clock = Math.random() * 20; // staffs in the same arena don't move in step
  const step = (dt: number, charge: number) => { clock += dt * (1 + charge * 1.5); const f = clock * 24; for (const a of anims) a(f, dt); };
  step(0, 0);
  return {
    group, gem, gemMat, glow, color, materials,
    update(_time, dt, charge) { step(dt, charge); },
  };
}

/** for the tests and the preview: how many draw calls a staff costs */
export function staffDrawCalls(s: Staff) { let n = 0; s.group.traverse((o) => { if ((o as THREE.Mesh).isMesh || (o as THREE.Sprite).isSprite) n++; }); return n; }
