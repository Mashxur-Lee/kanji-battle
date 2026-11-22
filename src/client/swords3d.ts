// 0.9.9.9.9.5: the swords — five blades unlocked by level, each grander than the last, after the owner's concept art:
//   Iron Blade         a plain steel blade, a simple guard with a violet gem, a wrapped grip
//   Crystal Longsword  an ice-blue crystal blade, a winged guard, a cyan gem, sparkles
//   Amethyst Saber     a violet blade, a horned guard, a ribbon of light winding up the blade
//   Halo Blade         a pale moonlit blade, a halo ring behind the guard, a cyan ribbon
//   Celestial Blade    a glowing violet blade, a crown of spikes, the halo, two ribbons, a swarm of sparkles
// They are "staffs" to the rest of the game (the same Staff: a group, a gem, a glow, a colour, materials, update), so
// the hand, the hits, the tints and the previews all work. What differs:
//   · no light at the tip — the BLADE fills with light as you write (`charge`), and the cast's slash wave is that light
//     leaving it (the arena drops the charge on a cast, a miss or a timeout: the blade goes back to normal);
//   · the "gem" is an unseen point in the middle of the blade, where the wave comes from;
//   · how they are swung (arena3d: a tremor while you write, three slashes taking turns).
// Staff units: the hand grips the middle of the handle at y = 0; the blade points up (+y), its flat facing ±z.
import * as THREE from 'three';
import type { Staff } from './staffs3d';

type P2 = readonly [number, number];
export interface SwordDef {
  id: string; level: number;
  blade: string; edge: string; glow: string; base: number; // the blade's colour, its bright edge, its light and how much it glows at rest
  guard: string; gem: string; grip: string; stripe: string;
  len: number; width: number; profile: 'straight' | 'crystal' | 'fang' | 'slender' | 'grand';
  guardShape: P2[]; // the guard's right half (x ≥ 0), round from the top centre to the bottom centre
  ribbons: string[]; ring?: string; sparkles: number; crown?: boolean;
}
/** the five, weakest first */
export const SWORD_LOOKS: Record<string, SwordDef> = {
  iron: {
    id: 'iron', level: 3, blade: '#c3c7d2', edge: '#eef0f6', glow: '#c9a8ff', base: 0.04,
    guard: '#a3a6b6', gem: '#b07cff', grip: '#2b2440', stripe: '#cfcae0',
    len: 1.08, width: 0.13, profile: 'straight',
    guardShape: [[0, 0.03], [0.1, 0.028], [0.17, 0.012], [0.19, 0], [0.17, -0.012], [0.1, -0.03], [0, -0.034]],
    ribbons: [], sparkles: 3,
  },
  longsword: {
    id: 'longsword', level: 6, blade: '#a9dcff', edge: '#e9f8ff', glow: '#5fe2ff', base: 0.1,
    guard: '#aab2c6', gem: '#49d6ff', grip: '#232848', stripe: '#5fe2ff',
    len: 1.14, width: 0.14, profile: 'crystal',
    guardShape: [[0, 0.045], [0.08, 0.04], [0.15, 0.06], [0.22, 0.1], [0.2, 0.03], [0.12, -0.02], [0.05, -0.045], [0, -0.06]],
    ribbons: [], sparkles: 6,
  },
  saber: {
    id: 'saber', level: 10, blade: '#b49ae8', edge: '#efe6ff', glow: '#b46cff', base: 0.16,
    guard: '#9893ab', gem: '#c08cff', grip: '#251b3a', stripe: '#b98cff',
    len: 1.16, width: 0.155, profile: 'fang',
    guardShape: [[0, 0.055], [0.06, 0.055], [0.11, 0.09], [0.17, 0.2], [0.2, 0.26], [0.19, 0.15], [0.155, 0.06], [0.2, 0.02], [0.14, -0.03], [0.07, -0.05], [0, -0.075]],
    ribbons: ['#c58cff'], sparkles: 7,
  },
  katana: {
    id: 'katana', level: 15, blade: '#dce7f8', edge: '#ffffff', glow: '#7fefff', base: 0.22,
    guard: '#aab0c6', gem: '#4fdcff', grip: '#1f2442', stripe: '#8ff0ff',
    len: 1.2, width: 0.13, profile: 'slender',
    guardShape: [[0, 0.05], [0.09, 0.045], [0.17, 0.07], [0.23, 0.05], [0.18, 0.0], [0.1, -0.035], [0, -0.07]],
    ribbons: ['#8ff0ff'], ring: '#cdbcff', sparkles: 9,
  },
  dragonfang: {
    id: 'dragonfang', level: 20, blade: '#e8e2ff', edge: '#ffffff', glow: '#b48cff', base: 0.3,
    guard: '#bcb7d0', gem: '#a8e2ff', grip: '#241d3c', stripe: '#c9b4ff',
    len: 1.26, width: 0.145, profile: 'grand',
    guardShape: [[0, 0.06], [0.05, 0.07], [0.08, 0.15], [0.105, 0.065], [0.15, 0.13], [0.165, 0.055], [0.25, 0.1], [0.22, 0.0], [0.13, -0.04], [0.06, -0.055], [0, -0.09]],
    ribbons: ['#b48cff', '#8fe6ff'], ring: '#d6caff', sparkles: 14, crown: true,
  },
};
export const isSword = (id: string | null | undefined) => !!id && id in SWORD_LOOKS;

const GUARD_Y = 0.17, GRIP_LEN = 0.3;

/** half the blade's width at t (0 at the guard … 1 at the tip) */
function halfWidth(d: SwordDef, t: number) {
  const w = d.width / 2;
  const point = (from: number, pow = 1) => (t < from ? 1 : Math.max(0, 1 - ((t - from) / (1 - from)) ** pow));
  switch (d.profile) {
    case 'straight': return w * (1 - 0.12 * t) * point(0.82);
    case 'crystal': return w * (t < 0.08 ? 1.18 : 1 - 0.1 * t) * point(0.8, 0.9);
    case 'fang': return w * (t < 0.12 ? 1.25 - t : t < 0.2 ? 0.9 : 1 - 0.15 * t) * point(0.78, 0.8);
    case 'slender': return w * (t < 0.06 ? 1.1 : 0.92 - 0.12 * t) * point(0.82, 0.7);
    default: return w * (t < 0.1 ? 1.3 : t < 0.16 ? 1 : 1.08 - 0.15 * t) * point(0.8, 0.85);
  }
}

/** the blade: a diamond in section (edge, ridge, edge, ridge) — flat-shaded, its facets catch the light like the art */
function bladeGeo(d: SwordDef) {
  const N = 26, pos: number[] = [], L = d.len - GUARD_Y;
  const ring = (t: number) => {
    const y = GUARD_Y + 0.01 + t * L, w = halfWidth(d, t), th = Math.max(0.004, w * 0.32);
    return [[-w, y, 0], [0, y, th], [w, y, 0], [0, y, -th]] as const;
  };
  for (let i = 0; i < N; i++) {
    const a = ring(i / N), b = ring((i + 1) / N);
    for (let k = 0; k < 4; k++) {
      const k2 = (k + 1) % 4;
      pos.push(...a[k], ...a[k2], ...b[k2], ...a[k], ...b[k2], ...b[k]);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

/** a shape mirrored from its right half, extruded with a bevel */
function mirrored(half: P2[], depth: number, bevel = 0.006) {
  const s = new THREE.Shape();
  s.moveTo(half[0][0], half[0][1]);
  for (const [x, y] of half.slice(1)) s.lineTo(x, y);
  for (const [x, y] of [...half].reverse().slice(1)) s.lineTo(-x, y);
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1, curveSegments: 2 });
  g.translate(0, 0, -depth / 2);
  return g;
}

/** a thin tube winding round the blade (a ribbon of light) */
function ribbonGeo(d: SwordDef, phase: number) {
  const L = d.len - GUARD_Y, pts: THREE.Vector3[] = [];
  for (let i = 0; i <= 60; i++) {
    const t = 0.04 + (i / 60) * 0.78, a = phase + t * Math.PI * 4.2, r = halfWidth(d, t) * 1.5 + 0.02 * Math.sin(t * Math.PI);
    pts.push(new THREE.Vector3(Math.cos(a) * r, GUARD_Y + t * L, Math.sin(a) * r * 0.9));
  }
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 80, 0.0065, 5, false);
}

export function buildSword(id: string, glowTex: THREE.Texture): Staff {
  const d = SWORD_LOOKS[id] ?? SWORD_LOOKS.iron;
  const group = new THREE.Group();
  const materials: THREE.MeshStandardMaterial[] = [];
  const glowCol = new THREE.Color(d.glow);
  const solid = (c: string, o: Partial<THREE.MeshStandardMaterialParameters> = {}) => { const m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.38, metalness: 0.25, flatShading: true, ...o }); materials.push(m); return m; };
  const shine = (c: string, k = 1.4) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k), transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false });
  const add = (g: THREE.BufferGeometry, m: THREE.Material, y = 0) => { const o = new THREE.Mesh(g, m); o.position.y = y; group.add(o); return o; };

  // the blade, and its bright edge (a slightly bigger outline just behind it)
  const bladeMat = solid(d.blade, { roughness: 0.28, metalness: 0.3, emissive: glowCol, emissiveIntensity: d.base });
  add(bladeGeo(d), bladeMat);
  const edgeMat = solid(d.edge, { roughness: 0.2, metalness: 0.2, emissive: new THREE.Color(d.edge), emissiveIntensity: 0.18 });
  const edge = add(bladeGeo({ ...d, width: d.width * 1.12 }), edgeMat);
  edge.scale.set(1, 1, 0.35);
  // a line of light down the middle of the better blades
  let core: THREE.Mesh | null = null;
  if (d.base >= 0.1) {
    const L = d.len - GUARD_Y;
    core = add(new THREE.PlaneGeometry(d.width * 0.12, L * 0.7), shine(d.glow, 1.2), GUARD_Y + L * 0.38);
    (core.material as THREE.MeshBasicMaterial).side = THREE.DoubleSide;
  }

  // the guard, its gem, the crown of spikes on the grandest
  const guardMat = solid(d.guard, { roughness: 0.32, metalness: 0.45 });
  add(mirrored(d.guardShape, 0.045), guardMat, GUARD_Y - 0.01);
  const gemMatDeco = new THREE.MeshStandardMaterial({ color: d.gem, emissive: new THREE.Color(d.gem), emissiveIntensity: 0.9, roughness: 0.15, flatShading: true });
  const gemDeco = add(new THREE.OctahedronGeometry(0.04, 0), gemMatDeco, GUARD_Y + 0.005);
  gemDeco.scale.set(0.9, 1.35, 0.6);
  for (const z of [-1, 1]) { const g2 = add(new THREE.OctahedronGeometry(0.04, 0), gemMatDeco, GUARD_Y + 0.005); g2.scale.set(0.9, 1.35, 0.6); g2.position.z = z * 0.026; }
  if (d.crown) for (const [x, h] of [[0, 0.11], [-0.045, 0.07], [0.045, 0.07]] as const) { const c = add(new THREE.ConeGeometry(0.018, h, 4), guardMat, GUARD_Y + 0.06 + h / 2); c.position.x = x; }

  // the grip: wrapped, a stripe winding round it; the pointed pommel
  const gripMat = solid(d.grip, { roughness: 0.75, metalness: 0.05 });
  add(new THREE.CylinderGeometry(0.029, 0.032, GRIP_LEN, 8), gripMat, 0);
  const stripePts = Array.from({ length: 40 }, (_, i) => { const t = i / 39, a = t * Math.PI * 7; return new THREE.Vector3(Math.cos(a) * 0.03, -GRIP_LEN / 2 + t * GRIP_LEN, Math.sin(a) * 0.03); });
  add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(stripePts), 60, 0.0045, 4, false), solid(d.stripe, { roughness: 0.3, metalness: 0.5, emissive: new THREE.Color(d.stripe), emissiveIntensity: 0.15 }));
  const pommel = add(new THREE.OctahedronGeometry(0.045, 0), guardMat, -GRIP_LEN / 2 - 0.05);
  pommel.scale.set(0.8, 1.5, 0.8);

  // ribbons of light winding up the blade, the halo behind the guard, the sparkles round it
  const spinners: THREE.Object3D[] = [];
  // (0.9.9.9.9.5: the ribbons only while you write — they wind up the blade from the guard as it powers up, and are
  // gone when its light leaves)
  const ribbons = d.ribbons.map((c, i) => { const r = add(ribbonGeo(d, i * Math.PI), shine(c, 1.5)); r.visible = false; spinners.push(r); return r; });
  let ring: THREE.Mesh | null = null;
  if (d.ring) {
    ring = add(new THREE.TorusGeometry(0.17, 0.008, 6, 48), shine(d.ring, 1.3), GUARD_Y + 0.05);
    const ring2 = add(new THREE.TorusGeometry(0.2, 0.004, 4, 48), shine(d.ring, 0.9), GUARD_Y + 0.05);
    ring2.rotation.x = 0.35; spinners.push(ring2);
  }
  const sparkMat = shine(d.glow, 1.6);
  const sparks = Array.from({ length: d.sparkles }, (_, i) => {
    const s = add(new THREE.OctahedronGeometry(0.014 + 0.008 * ((i * 37) % 3), 0), sparkMat);
    const t = 0.1 + ((i * 0.618) % 1) * 0.8, side = i % 2 ? 1 : -1;
    s.userData = { x: side * (halfWidth(d, t) + 0.05 + ((i * 0.37) % 1) * 0.07), y: GUARD_Y + t * (d.len - GUARD_Y), ph: i * 1.7 };
    s.scale.set(1, 1.6, 1);
    return s;
  });

  // the "gem" the game knows: an unseen point in the middle of the blade (the wave leaves from there)
  const color = glowCol.clone();
  const gemMat = new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: color, transparent: true, opacity: 0, depthWrite: false });
  const gem = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 4), gemMat);
  gem.position.set(0, GUARD_Y + (d.len - GUARD_Y) * 0.55, 0);
  group.add(gem);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: color.getHex(), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
  glow.visible = false; // (no light at the tip: the blade itself glows)
  group.add(glow);

  let clock = Math.random() * 10, shown = 0;
  return {
    group, gem, gemMat, glow, color, materials,
    update(_time, dt, charge, fury = 0) {
      clock += dt;
      // the light builds up in the blade as you write and drains at once when the arena drops the charge (a cast, a
      // miss, the time running out)
      const want = Math.max(charge, fury * 0.35);
      shown += (want - shown) * Math.min(1, dt * (want > shown ? 6 : 14));
      const pulse = 0.5 + 0.5 * Math.sin(clock * 2.4);
      bladeMat.emissiveIntensity = d.base * (0.85 + 0.3 * pulse) + shown * 1.9;
      edgeMat.emissiveIntensity = 0.18 + shown * 1.2;
      if (core) (core.material as THREE.MeshBasicMaterial).opacity = 0.35 + 0.25 * pulse + shown * 0.6;
      gemMatDeco.emissiveIntensity = 0.9 + 0.4 * pulse + shown * 1.5;
      for (const [i, r] of spinners.entries()) r.rotation.y = clock * (0.9 + 0.5 * i) * (1 + shown * 2) * (i % 2 ? -1 : 1);
      const up = Math.min(1, shown * 1.6), grow = up * up * (3 - 2 * up);
      for (const r of ribbons) {
        r.visible = grow > 0.02;
        const n = r.geometry.index ? r.geometry.index.count : 0;
        r.geometry.setDrawRange(0, Math.floor((n * grow) / 3) * 3);
        (r.material as THREE.MeshBasicMaterial).opacity = 0.4 + 0.5 * grow;
      }
      if (ring) ring.rotation.z = clock * 0.3;
      for (const s of sparks) {
        const u = s.userData as { x: number; y: number; ph: number };
        s.position.set(u.x + Math.sin(clock * 1.3 + u.ph) * 0.012, u.y + Math.sin(clock * 0.9 + u.ph) * 0.03, Math.cos(clock * 1.1 + u.ph) * 0.02);
        s.rotation.y = clock * 2 + u.ph;
        const tw = 0.5 + 0.5 * Math.sin(clock * 3 + u.ph * 2);
        s.scale.set(0.6 + 0.6 * tw + shown * 0.5, (0.6 + 0.6 * tw + shown * 0.5) * 1.6, 1);
      }
    },
  };
}
