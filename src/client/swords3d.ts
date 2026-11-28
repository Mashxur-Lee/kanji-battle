// 0.9.9.9.9.5: the swords — five blades unlocked by level. They are "staffs" to the rest of the game (the same Staff:
// a group, a gem, a glow, a colour, materials, update), so the hand, the hits, the tints and the previews all work.
// 0.9.9.9.9.7 (round 5, the owner: "they all should be gray and should receive its colour as the user types; they all
// look very alike, their design is very plain, the sword is thick and short; the helixes are weird — they don't come
// from a good spot"): remade.
//   · Grey steel at rest, every one of them; as you write, the colour runs into the blade, the guard, the gem and the
//     grip (the charge), the light grows, and on a cast the light leaves with the slash and the steel goes grey again.
//   · Thinner and longer, and each its own silhouette:
//       Iron Blade         a straight arming sword: a fuller down the middle, a plain crossguard, a disc pommel
//       Crystal Longsword  a crystal blade with shards growing from its base, a guard of crystal spikes
//       Amethyst Saber     a curved single-edged saber that widens near the tip, a knuckle-bow guard
//       Halo Blade         a katana: a gentle curve, a glowing hamon along its edge, a round tsuba, a long wrapped grip
//       Celestial Blade    a wavy flame blade, a winged crown guard with a great gem, a halo
//   · The streams of light (the old helixes) leave the guard's gem, hug the blade's flat and run up it to the tip — a
//     comet of light travelling, faster as the charge grows — and a band of light sweeps up the blade.
// Staff units: the hand grips the middle of the handle at y = 0; the blade points up (+y), its flat facing ±z, its
// edge(s) towards ±x (a single-edged blade has its edge at +x and curves back towards -x).
import * as THREE from 'three';
import type { Staff } from './staffs3d';

type P2 = readonly [number, number];
type Guard = 'cross' | 'crystal' | 'knuckle' | 'tsuba' | 'crown';
export interface SwordDef {
  id: string; level: number;
  /** the colours it fills with as you write */
  blade: string; edge: string; glow: string; guard: string; gem: string; grip: string; stripe: string;
  /** blade length (from the guard) and width at its base */
  len: number; width: number;
  /** how far the blade bends back (single-edged), a wavy edge (flame), single-edged */
  curve: number; wave: number; single: boolean;
  tip: number; // where the point starts (0–1 of the blade)
  guardKind: Guard; gripLen: number; pommel: 'disc' | 'crystal' | 'cap' | 'ring' | 'gem';
  fuller?: boolean; hamon?: boolean; shards?: number;
  streams: string[]; ring?: string; sparkles: number;
}
/** the five, weakest first */
export const SWORD_LOOKS: Record<string, SwordDef> = {
  iron: {
    id: 'iron', level: 3, blade: '#c9cfdc', edge: '#f2f4f9', glow: '#b48cff', guard: '#8d7a5c', gem: '#b07cff', grip: '#4a3424', stripe: '#c9a46a',
    len: 1.2, width: 0.085, curve: 0, wave: 0, single: false, tip: 0.86, guardKind: 'cross', gripLen: 0.27, pommel: 'disc',
    fuller: true, streams: ['#c9a8ff'], sparkles: 3,
  },
  longsword: {
    id: 'longsword', level: 6, blade: '#9fdcff', edge: '#eafaff', glow: '#4fdcff', guard: '#7fb2d6', gem: '#49d6ff', grip: '#1f2c4a', stripe: '#5fe2ff',
    len: 1.3, width: 0.09, curve: 0, wave: 0, single: false, tip: 0.8, guardKind: 'crystal', gripLen: 0.3, pommel: 'crystal',
    shards: 5, streams: ['#7fefff', '#bff6ff'], sparkles: 6,
  },
  saber: {
    id: 'saber', level: 10, blade: '#b79cf0', edge: '#f1e9ff', glow: '#b46cff', guard: '#c9b06a', gem: '#c08cff', grip: '#2b1d40', stripe: '#d9b85f',
    len: 1.28, width: 0.075, curve: 0.13, wave: 0, single: true, tip: 0.88, guardKind: 'knuckle', gripLen: 0.27, pommel: 'cap',
    streams: ['#d29cff'], sparkles: 7,
  },
  katana: {
    id: 'katana', level: 15, blade: '#e1eaf8', edge: '#ffffff', glow: '#7fefff', guard: '#2c2f3a', gem: '#4fdcff', grip: '#1b2140', stripe: '#e8edf8',
    len: 1.4, width: 0.07, curve: 0.09, wave: 0, single: true, tip: 0.9, guardKind: 'tsuba', gripLen: 0.4, pommel: 'ring',
    hamon: true, streams: ['#8ff0ff'], ring: '#cdbcff', sparkles: 9,
  },
  dragonfang: {
    id: 'dragonfang', level: 20, blade: '#e3dcff', edge: '#ffffff', glow: '#b48cff', guard: '#d8c27a', gem: '#a8e2ff', grip: '#2a1d44', stripe: '#e9d38a',
    len: 1.46, width: 0.1, curve: 0, wave: 0.2, single: false, tip: 0.84, guardKind: 'crown', gripLen: 0.32, pommel: 'gem',
    streams: ['#b48cff', '#8fe6ff', '#ffe7a3'], ring: '#d6caff', sparkles: 14,
  },
};
export const isSword = (id: string | null | undefined) => !!id && id in SWORD_LOOKS;

/** the steel every sword is at rest (the owner: "they all should be gray") */
const GREY = { blade: '#a9afba', edge: '#e4e7ec', guard: '#7d828c', gem: '#9ba0aa', grip: '#2e3037', stripe: '#6f747e' };

const guardY = (d: SwordDef) => d.gripLen / 2 + 0.02;
const smooth = (x: number) => { const k = Math.max(0, Math.min(1, x)); return k * k * (3 - 2 * k); };

/** the blade's cross-section at t (0 at the guard … 1 at the tip): its edges, its ridge, how thick */
function section(d: SwordDef, t: number) {
  const w = d.width / 2;
  const point = t < d.tip ? 1 : Math.max(0, 1 - (t - d.tip) / (1 - d.tip)) ** (d.single ? 0.75 : 1.1);
  const off = -d.curve * t * t; // (a single-edged blade bends back, towards its spine)
  if (d.single) {
    // the spine at -x (thick), the edge at +x (sharp); a saber widens near its tip
    const swell = d.guardKind === 'knuckle' ? 1 + 0.28 * Math.sin(Math.min(1, t / 0.92) * Math.PI * 0.85) : 1 - 0.12 * t;
    const spine = off - w * 0.42 * swell * (0.35 + 0.65 * point), edge = off + w * 0.95 * swell * point;
    const th = w * 0.34 * swell * (0.25 + 0.75 * point);
    return { xL: spine, xR: edge, ridge: spine + (edge - spine) * 0.32, th, sL: th * 0.62, sR: 0, off };
  }
  const wave = d.wave ? 1 + d.wave * Math.sin(t * Math.PI * 11) * (t < d.tip ? 1 : 0.4) : 1;
  const half = w * (1 - 0.16 * t) * wave * point;
  const th = (d.guardKind === 'crystal' ? w * 0.36 : w * 0.24) * (0.3 + 0.7 * point);
  return { xL: off - half, xR: off + half, ridge: off, th, sL: 0, sR: 0, off };
}

/** the blade: ten points round its section (edge, bevel, ridge, bevel, edge on each face), flat-shaded facets */
function bladeGeo(d: SwordDef, scaleW = 1) {
  const N = 48, pos: number[] = [], gy = guardY(d) + 0.012;
  const ring = (t: number): Array<[number, number, number]> => {
    const s = section(d, t), y = gy + t * d.len;
    const xL = s.off + (s.xL - s.off) * scaleW, xR = s.off + (s.xR - s.off) * scaleW;
    const bL = xL + (s.ridge - xL) * 0.42, bR = s.ridge + (xR - s.ridge) * 0.58;
    return [[xL, y, s.sL], [bL, y, s.th * 0.8], [s.ridge, y, s.th], [bR, y, s.th * 0.8], [xR, y, s.sR],
      [xR, y, -s.sR], [bR, y, -s.th * 0.8], [s.ridge, y, -s.th], [bL, y, -s.th * 0.8], [xL, y, -s.sL]];
  };
  for (let i = 0; i < N; i++) {
    const a = ring(i / N), b = ring((i + 1) / N);
    for (let k = 0; k < 10; k++) {
      const k2 = (k + 1) % 10;
      pos.push(...a[k], ...a[k2], ...b[k2], ...a[k], ...b[k2], ...b[k]);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

/** a shape mirrored from its right half, extruded with a bevel */
function mirrored(half: P2[], depth: number, bevel = 0.005) {
  const s = new THREE.Shape();
  s.moveTo(half[0][0], half[0][1]);
  for (const [x, y] of half.slice(1)) s.lineTo(x, y);
  for (const [x, y] of [...half].reverse().slice(1)) s.lineTo(-x, y);
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 4 });
  g.translate(0, 0, -depth / 2);
  return g;
}

/**
 * a stream of light: from the guard's gem out to the blade's flat, then winding gently up it, close to the steel, to
 * the tip (the old helixes started in the middle of the guard and looped wide round the blade)
 */
function streamGeo(d: SwordDef, phase: number) {
  const gy = guardY(d), pts: THREE.Vector3[] = [new THREE.Vector3(0, gy + 0.005, 0)];
  for (let i = 0; i <= 70; i++) {
    const t = 0.02 + (i / 70) * 0.93, s = section(d, t);
    const a = phase + t * Math.PI * 3.2;
    const half = (s.xR - s.xL) / 2, mid = (s.xR + s.xL) / 2;
    pts.push(new THREE.Vector3(mid + Math.cos(a) * (half + 0.012), gy + 0.012 + t * d.len, Math.sin(a) * (s.th + 0.016)));
  }
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 140, 0.0042, 5, false);
}

/** the hamon: the wavy line of hardened steel along a katana's edge — it glows as the charge rises */
function hamonGeo(d: SwordDef, side: number) {
  const gy = guardY(d) + 0.012, pts: THREE.Vector3[] = [];
  for (let i = 0; i <= 60; i++) {
    const t = 0.03 + (i / 60) * 0.86, s = section(d, t);
    const x = s.ridge + (s.xR - s.ridge) * (0.45 + 0.12 * Math.sin(t * 46)), z = side * s.th * 0.55;
    pts.push(new THREE.Vector3(x, gy + t * d.len, z));
  }
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 90, 0.0028, 4, false);
}

export function buildSword(id: string, glowTex: THREE.Texture): Staff {
  const d = SWORD_LOOKS[id] ?? SWORD_LOOKS.iron;
  const gy = guardY(d);
  const group = new THREE.Group();
  const materials: THREE.MeshStandardMaterial[] = [];
  const glowCol = new THREE.Color(d.glow);
  /** a part that is grey at rest and takes its colour with the charge */
  const tinted: Array<{ m: THREE.MeshStandardMaterial; rest: THREE.Color; full: THREE.Color; glow: number }> = [];
  const part = (rest: string, full: string, o: Partial<THREE.MeshStandardMaterialParameters> = {}, glow = 0) => {
    const m = new THREE.MeshStandardMaterial({ color: rest, roughness: 0.36, metalness: 0.55, flatShading: true, ...o });
    materials.push(m);
    tinted.push({ m, rest: new THREE.Color(rest), full: new THREE.Color(full), glow });
    return m;
  };
  const shine = (c: string, k = 1.4) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(k), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, side: THREE.DoubleSide });
  const add = (g: THREE.BufferGeometry, m: THREE.Material, y = 0) => { const o = new THREE.Mesh(g, m); o.position.y = y; group.add(o); return o; };
  const glowing: THREE.MeshBasicMaterial[] = []; // (light that only shows with the charge)
  const lit = (c: string, k = 1.4) => { const m = shine(c, k); glowing.push(m); return m; };

  // ── the blade, its bright edge (a hair wider, flattened behind it) ──
  const bladeMat = part(GREY.blade, d.blade, { roughness: 0.24, metalness: 0.7, emissive: glowCol, emissiveIntensity: 0 }, 0.42);
  add(bladeGeo(d), bladeMat);
  const edgeMat = part(GREY.edge, d.edge, { roughness: 0.18, metalness: 0.5, emissive: new THREE.Color(d.edge), emissiveIntensity: 0 }, 0.45);
  const edge = add(bladeGeo(d, 1.09), edgeMat);
  edge.scale.z = 0.3;
  // the fuller: a dark groove down the middle of each face
  if (d.fuller) {
    const fm = part('#4a4e57', '#5d4f7a', { roughness: 0.5, metalness: 0.4 });
    for (const z of [-1, 1]) {
      const pts = Array.from({ length: 30 }, (_, i) => { const t = 0.03 + (i / 29) * 0.62, s = section(d, t); return new THREE.Vector3(s.ridge, gy + 0.012 + t * d.len, z * s.th * 0.98); });
      add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, d.width * 0.1, 4, false), fm).scale.z = 0.35;
    }
  }
  // crystal shards growing from the base of the crystal blade
  if (d.shards) {
    const sm = part('#b8c2cf', d.blade, { roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.85, emissive: glowCol, emissiveIntensity: 0 }, 1.2);
    for (let i = 0; i < d.shards; i++) {
      const side = i % 2 ? 1 : -1, t = 0.04 + i * 0.045, s = section(d, t);
      const sh = add(new THREE.OctahedronGeometry(0.022, 0), sm, gy + 0.03 + t * d.len);
      sh.position.x = side * (s.xR - s.off) * 0.9; sh.position.z = (i % 3 - 1) * 0.012;
      sh.scale.set(0.55, 2.2 - i * 0.25, 0.55); sh.rotation.z = side * -0.5;
    }
  }
  // the hamon of the katana
  let hamon: THREE.MeshBasicMaterial | null = null;
  if (d.hamon) { hamon = lit(d.glow, 1.5); for (const z of [-1, 1]) add(hamonGeo(d, z), hamon); }

  // ── the guard ──
  const guardMat = part(GREY.guard, d.guard, { roughness: 0.3, metalness: 0.75 });
  const gemDecoMat = part(GREY.gem, d.gem, { roughness: 0.12, metalness: 0.1, emissive: new THREE.Color(d.gem), emissiveIntensity: 0 }, 1.6);
  const gem = (size: number, y: number, z = 0) => { const g = add(new THREE.OctahedronGeometry(size, 0), gemDecoMat, y); g.position.z = z; g.scale.set(0.85, 1.3, 0.6); return g; };
  if (d.guardKind === 'cross') {
    // a straight bar, its ends turned down a little; a small boss with the gem
    add(mirrored([[0, 0.022], [0.15, 0.018], [0.175, 0.005], [0.18, -0.02], [0.165, -0.012], [0.14, -0.018], [0, -0.024]], 0.032), guardMat, gy - 0.004);
    add(new THREE.CylinderGeometry(0.03, 0.03, 0.04, 8).rotateX(Math.PI / 2), guardMat, gy);
    gem(0.016, gy, 0.022); gem(0.016, gy, -0.022);
  } else if (d.guardKind === 'crystal') {
    // crystal spikes fanning out and up from a crystal heart
    const cm = part('#a6b0be', d.guard, { roughness: 0.08, metalness: 0.15, transparent: true, opacity: 0.9, emissive: new THREE.Color(d.gem), emissiveIntensity: 0 }, 0.8);
    for (const side of [-1, 1]) for (const [a, l, r] of [[0.55, 0.15, 0.022], [0.95, 0.12, 0.018], [0.25, 0.09, 0.016]] as const) {
      const c = add(new THREE.ConeGeometry(r, l, 5), cm, gy);
      c.rotation.z = -side * (Math.PI / 2 - a);
      c.position.x = side * Math.cos(a) * l * 0.55; c.position.y = gy + Math.sin(a) * l * 0.5 - 0.01;
    }
    gem(0.034, gy + 0.01);
  } else if (d.guardKind === 'knuckle') {
    // a small quillon, and the knuckle-bow sweeping from it down to the pommel on the edge's side
    add(mirrored([[0, 0.02], [0.08, 0.018], [0.11, 0.03], [0.12, 0.012], [0.09, -0.02], [0, -0.026]], 0.03), guardMat, gy - 0.003);
    const bow = new THREE.CatmullRomCurve3([new THREE.Vector3(0.1, gy - 0.005, 0), new THREE.Vector3(0.15, gy - 0.08, 0), new THREE.Vector3(0.13, -d.gripLen / 2 + 0.02, 0), new THREE.Vector3(0.05, -d.gripLen / 2 - 0.035, 0)]);
    add(new THREE.TubeGeometry(bow, 40, 0.009, 6, false), guardMat);
    gem(0.022, gy, 0.02); gem(0.022, gy, -0.02);
  } else if (d.guardKind === 'tsuba') {
    // the round tsuba (four openings) and the habaki collar above it
    const disc = new THREE.Shape(); disc.absarc(0, 0, 0.07, 0, Math.PI * 2, false);
    for (let k = 0; k < 4; k++) { const h = new THREE.Path(); const a = k * Math.PI / 2 + Math.PI / 4; h.absellipse(Math.cos(a) * 0.045, Math.sin(a) * 0.045, 0.012, 0.007, 0, Math.PI * 2, false, a); disc.holes.push(h); }
    const tg = new THREE.ExtrudeGeometry(disc, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 1, curveSegments: 24 });
    tg.rotateX(-Math.PI / 2); tg.translate(0, -0.006, 0);
    add(tg, guardMat, gy);
    add(new THREE.CylinderGeometry(d.width * 0.36, d.width * 0.4, 0.04, 8), part('#b9a26a', '#e8c86a', { roughness: 0.25, metalness: 0.9 }), gy + 0.03);
    gem(0.012, gy, 0.05); gem(0.012, gy, -0.05);
  } else {
    // the crown: two swept wings, three spikes rising round the base of the blade, a great gem in the middle
    add(mirrored([[0, 0.03], [0.05, 0.04], [0.1, 0.09], [0.16, 0.16], [0.22, 0.2], [0.2, 0.12], [0.17, 0.06], [0.24, 0.07], [0.19, 0.0], [0.1, -0.03], [0, -0.05]], 0.03), guardMat, gy - 0.01);
    for (const [x, h] of [[0, 0.12], [-0.04, 0.08], [0.04, 0.08]] as const) { const c = add(new THREE.ConeGeometry(0.012, h, 4), guardMat, gy + 0.035 + h / 2); c.position.x = x; c.position.z = 0.022; }
    gem(0.042, gy + 0.005, 0.02); gem(0.042, gy + 0.005, -0.02);
  }

  // ── the grip and the pommel ──
  const gripMat = part(GREY.grip, d.grip, { roughness: 0.8, metalness: 0.05 });
  add(new THREE.CylinderGeometry(0.026, 0.029, d.gripLen, 10), gripMat, 0);
  const stripeMat = part(GREY.stripe, d.stripe, { roughness: 0.35, metalness: 0.6 });
  const wrap = (dir: number) => Array.from({ length: 50 }, (_, i) => { const t = i / 49, a = dir * t * Math.PI * (d.hamon ? 9 : 7); return new THREE.Vector3(Math.cos(a) * 0.0285, -d.gripLen / 2 + t * d.gripLen, Math.sin(a) * 0.0285); });
  add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(wrap(1)), 80, 0.0042, 4, false), stripeMat);
  if (d.hamon) add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(wrap(-1)), 80, 0.0042, 4, false), stripeMat); // (the katana's diamond wrap)
  const py = -d.gripLen / 2 - 0.02;
  if (d.pommel === 'disc') add(new THREE.CylinderGeometry(0.038, 0.038, 0.022, 14).rotateX(Math.PI / 2), guardMat, py - 0.012);
  else if (d.pommel === 'crystal') { const p = add(new THREE.OctahedronGeometry(0.034, 0), gemDecoMat, py - 0.02); p.scale.set(0.8, 1.5, 0.8); }
  else if (d.pommel === 'cap') add(new THREE.SphereGeometry(0.032, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI), guardMat, py + 0.004);
  else if (d.pommel === 'ring') add(new THREE.TorusGeometry(0.026, 0.007, 6, 16), guardMat, py - 0.018);
  else { add(new THREE.ConeGeometry(0.03, 0.05, 6).rotateX(Math.PI), guardMat, py - 0.02); gem(0.024, py - 0.055); }

  // ── the light: streams up the blade, the band sweeping it, the halo, the sparkles, the glint at the tip ──
  const streams = d.streams.map((c, i) => { const m = lit(c, 1.6); const s = add(streamGeo(d, (i / d.streams.length) * Math.PI * 2), m); s.visible = false; return { s, m, n: s.geometry.index?.count ?? 0, ph: i / d.streams.length }; });
  const sweepMat = lit(d.edge, 1.1);
  sweepMat.map = glowTex; // (a soft band, not a hard bar)
  const sweep = add(new THREE.PlaneGeometry(d.width * 1.6, 0.16), sweepMat);
  let ring: THREE.Mesh | null = null, ring2: THREE.Mesh | null = null;
  if (d.ring) {
    ring = add(new THREE.TorusGeometry(0.16, 0.0035, 6, 56), lit(d.ring, 1.1), gy + 0.06);
    ring2 = add(new THREE.TorusGeometry(0.19, 0.003, 4, 56), lit(d.ring, 0.9), gy + 0.06);
    ring2.rotation.x = 0.35;
  }
  const sparkMat = lit(d.glow, 1.7);
  const sparks = Array.from({ length: d.sparkles }, (_, i) => {
    const s = add(new THREE.OctahedronGeometry(0.011 + 0.006 * ((i * 37) % 3), 0), sparkMat);
    const t = 0.12 + ((i * 0.618) % 1) * 0.8, side = i % 2 ? 1 : -1, sec = section(d, t);
    s.userData = { x: (side > 0 ? sec.xR : sec.xL) + side * (0.03 + ((i * 0.37) % 1) * 0.05), y: gy + t * d.len, ph: i * 1.7 };
    s.scale.set(1, 1.6, 1);
    return s;
  });
  const glint = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: new THREE.Color(d.edge).getHex(), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
  const tipSec = section(d, 0.985);
  glint.position.set(tipSec.off, gy + 0.985 * d.len, 0); glint.scale.setScalar(0.12);
  group.add(glint);

  // the "gem" the game knows: an unseen point in the middle of the blade (the slash wave leaves from there)
  const color = glowCol.clone();
  const gemMat = new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: color, transparent: true, opacity: 0, depthWrite: false });
  const mid = section(d, 0.55);
  const gemPt = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 4), gemMat);
  gemPt.position.set(mid.off, gy + d.len * 0.55, 0);
  group.add(gemPt);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: color.getHex(), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
  glow.visible = false; // (no light at the tip: the blade itself fills with it)
  group.add(glow);

  let clock = Math.random() * 10, shown = 0;
  return {
    group, gem: gemPt, gemMat, glow, color, materials,
    update(_time, dt, charge, fury = 0) {
      clock += dt;
      // the charge runs into the steel as you write; on a cast, a miss or the time running out it drains at once
      const want = Math.max(charge, fury * 0.35);
      if (dt <= 0) shown = want; // (a still picture: the thumbnails)
      else shown += (want - shown) * Math.min(1, dt * (want > shown ? 5 : 12));
      const c = smooth(shown * 1.15), pulse = 0.5 + 0.5 * Math.sin(clock * 3);
      // the colour: grey steel → the sword's own, part by part
      for (const p of tinted) {
        p.m.color.copy(p.rest).lerp(p.full, c);
        if (p.glow) p.m.emissiveIntensity = p.glow * c * (0.75 + 0.25 * pulse) + (p.m === bladeMat ? c * c * 0.18 : 0); // (round 5: its colour shows, not a white glare)
      }
      for (const m of glowing) m.opacity = 0;
      // streams of light running up the blade — a comet each, faster as the charge grows
      for (const st of streams) {
        st.s.visible = c > 0.04;
        if (!st.s.visible) continue;
        const seg = 0.32 + 0.2 * c, head = ((clock * (0.35 + c * 0.9) + st.ph) % (1 + seg));
        const from = Math.max(0, head - seg), to = Math.min(1, head);
        const a = Math.floor((st.n * from) / 3) * 3, b = Math.floor((st.n * to) / 3) * 3;
        st.s.geometry.setDrawRange(a, Math.max(0, b - a));
        st.m.opacity = (0.35 + 0.6 * c) * Math.min(1, (to - from) / seg + 0.2);
      }
      // a band of light sweeping up the blade
      const u = (clock * (0.5 + c * 0.8)) % 1.2, su = Math.min(1, u), ss = section(d, su);
      sweep.position.set(ss.off, gy + 0.012 + su * d.len, 0);
      sweep.scale.x = Math.max(0.2, (ss.xR - ss.xL) / (d.width * 1.2));
      sweepMat.opacity = c * 0.7 * (u < 1 ? Math.sin(u * Math.PI) : 0);
      if (hamon) hamon.opacity = 0.15 + 0.75 * c * (0.7 + 0.3 * Math.sin(clock * 6));
      if (ring && ring2) {
        (ring.material as THREE.MeshBasicMaterial).opacity = 0.08 + 0.5 * c; (ring2.material as THREE.MeshBasicMaterial).opacity = 0.05 + 0.35 * c;
        ring.rotation.z = clock * (0.3 + c); ring2.rotation.y = clock * (0.8 + c * 2);
      }
      sparkMat.opacity = c * 0.95;
      for (const s of sparks) {
        const uu = s.userData as { x: number; y: number; ph: number };
        s.position.set(uu.x + Math.sin(clock * 1.3 + uu.ph) * 0.012, uu.y + Math.sin(clock * 0.9 + uu.ph) * 0.03, Math.cos(clock * 1.1 + uu.ph) * 0.02);
        s.rotation.y = clock * 2 + uu.ph;
        const tw = 0.5 + 0.5 * Math.sin(clock * 3 + uu.ph * 2);
        s.scale.set(0.5 + 0.6 * tw * c, (0.5 + 0.6 * tw * c) * 1.6, 1);
      }
      // full: a star at the tip
      const full = smooth((shown - 0.75) / 0.25);
      (glint.material as THREE.SpriteMaterial).opacity = full * (0.6 + 0.4 * pulse);
      glint.scale.setScalar(0.08 + full * (0.1 + 0.05 * pulse));
      glint.material.rotation = clock * 1.5;
    },
  };
}
