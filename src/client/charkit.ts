// Shared kit for the concept-sheet characters (0.9.9.2: Wizard, Knight, Goblin — the Witch has her own file):
// faceted grid surfaces and tubes with per-facet colours, a sculpted head with a painted face, crescents and
// gems, and the standard rig (left arm hanging, right arm a shoulder pivot holding the staff) that arena3d
// animates. Everything is built Y-up, the character facing +z, in metres.

import * as THREE from 'three';
import { buildStaff } from './staffs3d';
import type { Character } from './models3d';

export type V3 = [number, number, number];
export const C = (hex: number) => new THREE.Color(hex);
export const tri = (x: number) => 1 - Math.abs((((x % 1) + 1) % 1) * 2 - 1); // 0 → 1 → 0 zig-zag
export const mixC = (a: THREE.Color, b: THREE.Color, t: number) => a.clone().lerp(b, Math.max(0, Math.min(1, t)));
export const gauss = (d: number, s: number) => Math.exp(-(d * d) / (s * s));
export const ramp = (a: number, b: number, x: number) => Math.max(0, Math.min(1, (x - a) / (b - a)));
export const smooth = (a: number, b: number, x: number) => { const t = ramp(a, b, x); return t * t * (3 - 2 * t); };

/** A grid surface (u across, v down), one colour per facet (crisp low-poly colour bands). `closed` wraps u. */
export function surf(nu: number, nv: number, pos: (u: number, v: number) => V3, col: (u: number, v: number) => THREE.Color, closed = false) {
  const p: number[] = [], c: number[] = [];
  const P = (i: number, j: number) => pos(closed ? (i % nu) / nu : i / nu, j / nv);
  const facet = (a: [number, number], b: [number, number], d: [number, number]) => {
    const uu = (a[0] + b[0] + d[0]) / 3, vv = (a[1] + b[1] + d[1]) / 3;
    const k = col(closed ? ((uu / nu) % 1) : uu / nu, vv / nv);
    for (const [i, j] of [a, b, d]) { p.push(...P(i, j)); c.push(k.r, k.g, k.b); }
  };
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) { facet([i, j], [i, j + 1], [i + 1, j + 1]); facet([i, j], [i + 1, j + 1], [i + 1, j]); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
  g.computeVertexNormals();
  return g;
}
/** a ring-section body of revolution: profile [y, r] top→bottom, squashed in x/z, coloured by (u, v) */
export function lathe(prof: Array<[number, number]>, sides: number, col: (u: number, v: number) => THREE.Color, sx = 1, sz = 1, u0 = 0, u1 = 1) {
  const n = prof.length - 1;
  return surf(sides, n, (u, v) => {
    const k = Math.min(n - 1, Math.floor(v * n)), t = v * n - k;
    const y = prof[k][0] + (prof[k + 1][0] - prof[k][0]) * t, r = prof[k][1] + (prof[k + 1][1] - prof[k][1]) * t;
    const a = (u0 + u * (u1 - u0)) * Math.PI * 2;
    return [Math.sin(a) * r * sx, y, Math.cos(a) * r * sz];
  }, col, u0 === 0 && u1 === 1);
}
/** a tube along a spine with a radius per point, coloured per ring */
export function tube(spine: V3[], radius: (t: number) => number, sides: number, col: (t: number, a: number) => THREE.Color, squash: V3 = [1, 1, 1]) {
  const n = spine.length;
  const T = spine.map((_, i) => new THREE.Vector3(...spine[Math.min(n - 1, i + 1)]).sub(new THREE.Vector3(...spine[Math.max(0, i - 1)])).normalize());
  let N = new THREE.Vector3(1, 0, 0);
  const frames = T.map((t) => { N = N.clone().addScaledVector(t, -N.dot(t)); if (N.lengthSq() < 1e-6) N = new THREE.Vector3(0, 0, 1).cross(t); N.normalize(); return [N.clone(), t.clone().cross(N)]; });
  return surf(sides, n - 1, (u, v) => {
    const i = Math.round(v * (n - 1)), a = u * Math.PI * 2, r = radius(v), [nn, bb] = frames[i], s = spine[i];
    return [s[0] + (Math.cos(a) * nn.x + Math.sin(a) * bb.x) * r * squash[0], s[1] + (Math.cos(a) * nn.y + Math.sin(a) * bb.y) * r * squash[1], s[2] + (Math.cos(a) * nn.z + Math.sin(a) * bb.z) * r * squash[2]];
  }, (u, v) => col(v, u), true);
}
/** a box (centre, size), faceted, one colour; optional rotation */
export function box(size: V3, color: THREE.Color, at: V3 = [0, 0, 0], rot: V3 = [0, 0, 0]) {
  const g = new THREE.BoxGeometry(...size).toNonIndexed();
  g.rotateX(rot[0]); g.rotateY(rot[1]); g.rotateZ(rot[2]); g.translate(...at);
  const n = g.attributes.position.count, c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { c[i * 3] = color.r; c[i * 3 + 1] = color.g; c[i * 3 + 2] = color.b; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return g;
}
/** any three.js geometry, painted one colour (for the vertex-coloured cloth material) */
export function painted(geo: THREE.BufferGeometry, color: THREE.Color) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const n = g.attributes.position.count, c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { c[i * 3] = color.r; c[i * 3 + 1] = color.g; c[i * 3 + 2] = color.b; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  g.computeVertexNormals();
  return g;
}

export interface HeadShape { w: number; h: number; d: number; jaw: number; chin: number; nose: number; brow: number }
/** A head sculpted from a sphere (+z is the face); the front's UVs project onto the painted face. */
export function sculptedHead(s: HeadShape) {
  const g = new THREE.SphereGeometry(1, 28, 22);
  const pos = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const front = Math.max(0, z);
    let X = x * s.w, Y = y * s.h, Z = z * s.d;
    if (y < 0) { const t = -y; X *= 1 - s.jaw * t ** 1.25; Z *= 1 - 0.12 * t; Y *= 1 + s.chin * t; }
    X *= 1 + 0.04 * gauss(y + 0.02, 0.22) * front;
    if (y > 0.2) X *= 1 - 0.08 * (y - 0.2);
    for (const sx of [-1, 1]) Z -= 0.009 * gauss(x - sx * 0.38, 0.2) * gauss(y - 0.06, 0.13) * front;
    Z += s.brow * gauss(y - 0.27, 0.08) * gauss(x, 0.5) * front;
    Z += s.nose * gauss(x, 0.11) * front * ramp(0.2, -0.2, y) * ramp(-0.4, -0.27, y);
    Z += 0.004 * gauss(x, 0.24) * gauss(y + 0.5, 0.07) * front;
    if (z < 0) Z *= 1.06;
    pos.setXYZ(i, X, Y, Z);
    if (z > 0.05) uv.setXY(i, 0.5 + x * 0.5, 0.5 + y * 0.5); else uv.setXY(i, 0.02, 0.97);
  }
  g.computeVertexNormals();
  return g;
}
export interface FaceStyle {
  skin: string; shade: string; // base and contour colours
  iris: string; eyeW: number; eyeH: number; lid: number; // eye size (unit face coords), how low the upper lid sits (0..1)
  brow: string; browW: number; browTilt: number; // brow colour, thickness (px at 512), slant down towards the nose
  lips: string; lipW: number; snarl?: boolean; // snarl: bared teeth (the goblin)
  wrinkles?: boolean; glowEyes?: boolean;
}
/** A painted face (512², u = 0.5 + x/2, v = 0.5 + y/2 on the unit head). */
export function faceTexture(f: FaceStyle) {
  const N = 512, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d')!;
  const P = (x: number, y: number): [number, number] => [(0.5 + x * 0.5) * N, (0.5 - y * 0.5) * N];
  g.fillStyle = f.skin; g.fillRect(0, 0, N, N);
  const blob = (x: number, y: number, rx: number, ry: number, col: string, a: number) => {
    const [cx, cy] = P(x, y), r = rx * N * 0.5;
    g.save(); g.translate(cx, cy); g.scale(1, ry / rx);
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, r);
    gr.addColorStop(0, col.replace('A', String(a))); gr.addColorStop(1, col.replace('A', '0'));
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, r, 0, Math.PI * 2); g.fill(); g.restore();
  };
  for (const sx of [-1, 1]) blob(sx * 0.62, -0.18, 0.22, 0.3, f.shade, 0.35);
  blob(0, -0.72, 0.3, 0.12, f.shade, 0.3);
  blob(0.07, -0.12, 0.05, 0.2, f.shade, 0.25);
  for (const sx of [-1, 1]) {
    const ex = sx * 0.38, ey = 0.06;
    blob(ex, ey + 0.04, 0.26, 0.12, f.shade, 0.45); // the socket shadow
    const [cx, cy] = P(ex, ey), w = f.eyeW * N * 0.5, h = f.eyeH * N * 0.5;
    g.save(); g.translate(cx, cy); g.scale(sx, 1);
    g.beginPath(); g.moveTo(-w, 0); g.quadraticCurveTo(-w * 0.1, -h * 1.1, w, -h * 0.15); g.quadraticCurveTo(w * 0.2, h * 1.05, -w, 0); g.closePath();
    g.fillStyle = f.glowEyes ? '#ffd23a' : '#ece6ee'; g.fill();
    g.save(); g.clip();
    g.fillStyle = f.iris; g.beginPath(); g.arc(-w * 0.1, h * 0.1, h * 1.05, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#120c14'; g.beginPath(); f.glowEyes ? g.ellipse(-w * 0.1, h * 0.1, h * 0.22, h * 0.8, 0, 0, Math.PI * 2) : g.arc(-w * 0.1, h * 0.1, h * 0.5, 0, Math.PI * 2); g.fill();
    g.fillStyle = 'rgba(255,255,255,.8)'; g.beginPath(); g.arc(-w * 0.26, -h * 0.25, h * 0.2, 0, Math.PI * 2); g.fill();
    g.fillStyle = 'rgba(40,25,35,.6)'; g.fillRect(-w, -h * 1.3, w * 2, h * (0.3 + f.lid)); // the upper lid
    g.restore();
    g.strokeStyle = '#1c1418'; g.lineCap = 'round'; g.lineWidth = N * 0.009;
    g.beginPath(); g.moveTo(-w * 1.02, 0.02 * h); g.quadraticCurveTo(-w * 0.1, -h * (1.15 - f.lid * 0.6), w * 1.08, -h * 0.3); g.stroke();
    g.strokeStyle = 'rgba(80,55,60,.5)'; g.lineWidth = N * 0.004;
    g.beginPath(); g.moveTo(-w * 0.7, h * 0.55); g.quadraticCurveTo(0, h * 1.0, w * 0.8, h * 0.25); g.stroke();
    if (f.wrinkles) { // crow's feet and the bags of an old wise man
      g.strokeStyle = 'rgba(120,90,90,.45)'; g.lineWidth = N * 0.004;
      for (const k of [-1, 0, 1]) { g.beginPath(); g.moveTo(w * 1.15, k * h * 0.4); g.lineTo(w * 1.5, k * h * 0.8 - h * 0.1); g.stroke(); }
      g.beginPath(); g.moveTo(-w * 0.6, h * 1.4); g.quadraticCurveTo(0, h * 2.0, w * 0.7, h * 1.2); g.stroke();
    }
    // the brow: slanted down towards the nose
    g.strokeStyle = f.brow; g.lineWidth = f.browW;
    g.beginPath(); g.moveTo(-w * 1.0, -h * (2.3 - f.browTilt)); g.quadraticCurveTo(w * 0.15, -h * 3.2, w * 1.15, -h * (2.6 + f.browTilt)); g.stroke();
    g.restore();
  }
  if (f.wrinkles) { g.strokeStyle = 'rgba(120,90,90,.4)'; g.lineWidth = N * 0.004; for (const y of [0.42, 0.5]) { const [a, b] = P(-0.25, y), [c2, d] = P(0.25, y); g.beginPath(); g.moveTo(a, b); g.quadraticCurveTo((a + c2) / 2, b - 6, c2, d); g.stroke(); } }
  g.fillStyle = 'rgba(80,50,55,.5)';
  for (const sx of [-1, 1]) { const [nx, ny] = P(sx * 0.06, -0.32); g.beginPath(); g.ellipse(nx, ny, N * 0.012, N * 0.006, 0, 0, Math.PI * 2); g.fill(); }
  const [lx, ly] = P(0, -0.52), lw = f.lipW * N * 0.5, lh = 0.05 * N * 0.5;
  if (f.snarl) { // bared teeth, a grimace
    g.fillStyle = '#2a1416'; g.beginPath(); g.ellipse(lx, ly, lw, lh * 1.3, 0, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#e8e0c8'; g.fillRect(lx - lw * 0.85, ly - lh * 0.9, lw * 1.7, lh * 0.8); g.fillRect(lx - lw * 0.7, ly + lh * 0.25, lw * 1.4, lh * 0.6);
    g.strokeStyle = '#2a1416'; g.lineWidth = 2; for (let k = -3; k <= 3; k++) { g.beginPath(); g.moveTo(lx + k * lw * 0.24, ly - lh); g.lineTo(lx + k * lw * 0.24, ly + lh); g.stroke(); }
    g.strokeStyle = f.lips; g.lineWidth = N * 0.008; g.beginPath(); g.ellipse(lx, ly, lw, lh * 1.3, 0, 0, Math.PI * 2); g.stroke();
  } else {
    g.fillStyle = f.lips;
    g.beginPath(); g.moveTo(lx - lw, ly); g.quadraticCurveTo(lx, ly - lh * 0.9, lx + lw, ly); g.quadraticCurveTo(lx, ly + lh * 1.2, lx - lw, ly); g.fill();
    g.strokeStyle = 'rgba(40,20,25,.7)'; g.lineWidth = N * 0.005; g.beginPath(); g.moveTo(lx - lw, ly); g.quadraticCurveTo(lx, ly + lh * 0.3, lx + lw, ly); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

/** materials for a character; every one is registered for the hurt / frost / burn tints */
export function materialKit() {
  const materials: Character['materials'] = [];
  const mat = (color: number | THREE.Color, o: { vc?: boolean; metal?: number; rough?: number; emissive?: number; double?: boolean; flat?: boolean } = {}) => {
    const m = new THREE.MeshStandardMaterial({
      color: o.vc ? 0xffffff : color, vertexColors: !!o.vc, metalness: o.metal ?? 0.04, roughness: o.rough ?? 0.8, flatShading: o.flat ?? true,
      // a faint self-light so the cloth still reads on the dark (night) arenas — 0.9.9.2: the witch was hard to see
      emissive: o.emissive ?? (o.vc ? 0x14111c : 0x000000), transparent: true, side: o.double ? THREE.DoubleSide : THREE.FrontSide,
    });
    materials.push({ mat: m, color: m.color.clone(), emissive: m.emissive.clone() });
    return m;
  };
  return { materials, mat };
}
export const add = (g: THREE.BufferGeometry, m: THREE.Material, parent: THREE.Object3D, at: V3 = [0, 0, 0]) => { const o = new THREE.Mesh(g, m); o.position.set(...at); parent.add(o); return o; };

/**
 * The staff, held in the right hand (the arm pivot is at the shoulder; arena3d raises and swings it). The staff
 * leans away from the body so hats and sleeves don't cut through it.
 */
/**
 * The staff arm's resting angle, out from the body. 0.9.9.6.1: positive (it was −0.35, and −0.85 in 0.9.9.6 —
 * both swung the hand inwards, to the belly); now the arm hangs out to the side and the fist holds the staff
 * beside the body. arena3d swings the arm around this.
 */
export const ARM_REST = 0.3;
export function holdStaff(arm: THREE.Group, hand: V3, materials: Character['materials'], glowTex: THREE.Texture, skin?: string, fist?: THREE.Object3D) {
  const staffPivot = new THREE.Group();
  staffPivot.position.set(...hand);
  staffPivot.rotation.z = -0.68; // with the arm's own ARM_REST: the staff leans out ~20°
  arm.add(staffPivot);
  // arena3d drives staffPivot.rotation.x (the cast thrust), so the resting forward lean sits in its own group
  const lean = new THREE.Group();
  lean.rotation.x = 0.3; // the top tips forward, out of the sleeve
  staffPivot.add(lean);
  const staff = buildStaff(skin, glowTex);
  staff.group.position.set(0, 0.24, 0.02);
  staff.group.scale.setScalar(0.8); // 0.9.9.3.3: a staff about as tall as its bearer, not towering over them
  lean.add(staff.group);
  // the hand grips the staff wherever it leans — 0.9.9.6: a bigger fist, so it reads as a hand at a distance
  if (fist) { fist.position.set(0, 0, 0.02); fist.scale.multiplyScalar(1.7); lean.add(fist); }
  for (const m of staff.materials) materials.push({ mat: m, color: m.color.clone(), emissive: m.emissive.clone() });
  return { staffPivot, staff, crystal: staff.gem, crystalMat: staff.gemMat, glow: staff.glow };
}

/** a crescent moon (extruded, centred) */
export function crescent(R: number, depth: number) {
  const s = new THREE.Shape();
  s.absarc(0, 0, R, Math.PI * 0.18, Math.PI * 1.82, false);
  s.absarc(R * 0.38, 0, R * 0.78, Math.PI * 1.7, Math.PI * 0.3, true);
  return new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: depth * 0.4, bevelSize: R * 0.08, bevelSegments: 1, curveSegments: 6 }).center();
}
/** a four-pointed (diamond) star, extruded and centred, facing +z */
export function star4(R: number, r: number, depth: number) {
  const s = new THREE.Shape();
  for (let i = 0; i < 8; i++) {
    const a = Math.PI / 2 + (i * Math.PI) / 4, k = i % 2 ? r : R;
    if (i) s.lineTo(Math.cos(a) * k, Math.sin(a) * k); else s.moveTo(Math.cos(a) * k, Math.sin(a) * k);
  }
  s.closePath();
  return new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: depth * 0.3, bevelSize: R * 0.06, bevelSegments: 1 }).center();
}
/** a diamond lattice in a band: t across the band (0..1), u around (repeats k times) → on a gold line? */
export const lattice = (u: number, t: number, k: number) => { const d = tri(u * k); return Math.abs(d - t) < 0.2 || Math.abs(d - (1 - t)) < 0.2; };

/**
 * A low-poly hand (0.9.9.3 — the old ones were a ball, lost behind the staff). `grip`: a fist round the staff,
 * which runs along y through the origin (the palm outside, four curled fingers, the thumb over them);
 * otherwise a relaxed hand hanging down (fingers along −y). `tips`: another colour for the fingers (fingerless
 * gloves, a gauntlet's lames). For the vertex-coloured cloth or plate material.
 */
export function handMesh(color: THREE.Color, m: THREE.Material, grip: boolean, tips = color, size = 1) {
  const g = new THREE.Group();
  const P = (geo: THREE.BufferGeometry, c: THREE.Color, at: V3, rot: V3 = [0, 0, 0], sc: V3 = [1, 1, 1]) => {
    const o = add(painted(geo, c), m, g, at); o.rotation.set(...rot); o.scale.set(...sc); return o;
  };
  if (grip) {
    P(new THREE.BoxGeometry(0.03, 0.085, 0.07), color, [0.04, 0, -0.005]); // the back of the hand, outside the staff
    for (let i = 0; i < 4; i++) {
      const y = 0.03 - i * 0.02, r = 0.028 - i * 0.001;
      const f = new THREE.TorusGeometry(r, 0.011, 4, 7, Math.PI * 1.25);
      f.rotateX(Math.PI / 2); // round the staff (the y axis), from the palm side over the front
      P(f, tips, [0.012, y, 0], [0, -0.35, 0]);
    }
    P(new THREE.CapsuleGeometry(0.011, 0.04, 2, 5), color, [0.02, 0.048, 0.03], [0.2, 0, 1.2]); // the thumb over the fingers
  } else {
    P(new THREE.BoxGeometry(0.06, 0.07, 0.028), color, [0, -0.035, 0]); // the palm
    for (let i = 0; i < 4; i++) P(new THREE.BoxGeometry(0.013, 0.05 - Math.abs(i - 1.5) * 0.007, 0.016), tips, [-0.022 + i * 0.0145, -0.092 + Math.abs(i - 1.5) * 0.003, 0.006], [0.25, 0, 0]);
    P(new THREE.BoxGeometry(0.014, 0.04, 0.016), tips, [0.034, -0.045, 0.012], [0.2, 0, -0.5]); // the thumb, forward
  }
  g.scale.setScalar(size);
  return g;
}

/** The eyes' glow colour per character (0.9.9.3.1): shown on fire — a combo, or a Deck Duel Omnipotence. */
export const EYE_COLORS: Record<string, number> = { goblin: 0xff3a24, witch: 0xb86bff, wizard: 0x49a8ff, knight: 0xff3030 };
/** Two glowing eyes on a head (hidden until arena3d turns them on): a hot core and an additive halo each. */
export function glowEyes(head: THREE.Object3D, eyes: V3[], color: number, glowTex: THREE.Texture) {
  const g = new THREE.Group();
  g.name = 'eyes';
  g.visible = false;
  const core = new THREE.MeshBasicMaterial({ color: new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.3), transparent: true, depthWrite: false });
  // normal blending: a coloured glow even over pale skin (additive light washes out to white there)
  const halo = new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, opacity: 0.8, depthWrite: false });
  for (const p of eyes) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.011, 8, 6), core);
    m.position.set(...p); m.scale.set(1.6, 0.75, 0.5);
    g.add(m);
    const s = new THREE.Sprite(halo);
    s.position.set(p[0], p[1], p[2] + 0.012); s.scale.setScalar(0.06);
    g.add(s);
  }
  head.add(g);
  return g;
}
