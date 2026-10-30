// The Witch, low poly, after the character concept sheet (0.9.9.1): tall and slim (~1.8 m), pale, long wavy
// grey-purple hair, a wide purple hat with a bent tip and a crescent moon on its band, a long open purple coat
// with bell sleeves and a pointed (zig-zag) hem with a lighter trim, a black dress with a front slit, a belt
// with a crescent buckle, tall heeled boots. Faceted (flat shaded) like the concept, the cloth in one
// vertex-coloured mesh per part so it stays cheap. Same rig as the other characters (models3d.ts): the right
// arm is a pivot at the shoulder holding the staff, the head turns for the mouse look.

import * as THREE from 'three';
import type { Character, Side } from './models3d';
import { EYE_COLORS, glowEyes, holdStaff, handMesh, ARM_REST } from './charkit';

type V3 = [number, number, number];
const C = (hex: number) => new THREE.Color(hex);
// 0.9.9.2: a lighter palette (the first one was near-black on the night arenas)
const PAL = {
  robe: C(0x7a56bd), robeDeep: C(0x5c3f96), trim: C(0xab8de6), dress: C(0x352d44), dressHi: C(0x4b4160), lining: C(0x6a5a70),
  skin: C(0xeedcd8), hair: C(0xcfc2e4), hairDark: C(0x9b8cb6), hat: C(0x6c4aac), hatBand: C(0x9c80d6), boot: C(0x3b3446),
  belt: C(0x40344c), moon: C(0xf0e6c0), lips: C(0x5a3550), eye: C(0x1a1420),
};

/**
 * A grid surface (u across, v down) with per-vertex colours, flat shaded. `closed` wraps u round.
 */
function surf(nu: number, nv: number, pos: (u: number, v: number) => V3, col: (u: number, v: number) => THREE.Color, closed = false) {
  const p: number[] = [], c: number[] = [];
  const P = (i: number, j: number) => pos(closed ? (i % nu) / nu : i / nu, j / nv);
  const K = (i: number, j: number) => col(closed ? (((i % nu) + nu) % nu) / nu : i / nu, j / nv);
  // one colour per facet (taken at its centre): crisp low-poly colour bands, like the concept's trim
  const facet = (a: [number, number], b: [number, number], d: [number, number]) => {
    const k = K((a[0] + b[0] + d[0]) / 3, (a[1] + b[1] + d[1]) / 3);
    for (const [i, j] of [a, b, d]) { p.push(...P(i, j)); c.push(k.r, k.g, k.b); }
  };
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    facet([i, j], [i, j + 1], [i + 1, j + 1]);
    facet([i, j], [i + 1, j + 1], [i + 1, j]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
  g.computeVertexNormals();
  return g;
}
/** a tube along a spine with a radius per point (rings of `sides`), coloured per ring */
function tube(spine: V3[], radius: (t: number) => number, sides: number, col: (t: number, a: number) => THREE.Color, squash: V3 = [1, 1, 1]) {
  const n = spine.length;
  const T = spine.map((_, i) => new THREE.Vector3(...spine[Math.min(n - 1, i + 1)]).sub(new THREE.Vector3(...spine[Math.max(0, i - 1)])).normalize());
  let N = new THREE.Vector3(1, 0, 0);
  const frames = T.map((t) => { N = N.clone().addScaledVector(t, -N.dot(t)); if (N.lengthSq() < 1e-6) N = new THREE.Vector3(0, 0, 1).cross(t); N.normalize(); return [N.clone(), t.clone().cross(N)]; });
  return surf(sides, n - 1, (u, v) => {
    const i = Math.round(v * (n - 1)), a = u * Math.PI * 2, r = radius(v), [nn, bb] = frames[i], s = spine[i];
    return [s[0] + (Math.cos(a) * nn.x + Math.sin(a) * bb.x) * r * squash[0], s[1] + (Math.cos(a) * nn.y + Math.sin(a) * bb.y) * r * squash[1], s[2] + (Math.cos(a) * nn.z + Math.sin(a) * bb.z) * r * squash[2]];
  }, (u, v) => col(v, u), true);
}
const tri = (x: number) => 1 - Math.abs(((x % 1) + 1) % 1 * 2 - 1); // 0 → 1 → 0 zig-zag
const mixC = (a: THREE.Color, b: THREE.Color, t: number) => a.clone().lerp(b, Math.max(0, Math.min(1, t)));

/** the head's half-sizes (metres): slim and a little long */
const HEAD = { w: 0.087, h: 0.126, d: 0.108 };
const gauss = (d: number, s: number) => Math.exp(-(d * d) / (s * s));
const ramp = (a: number, b: number, x: number) => Math.max(0, Math.min(1, (x - a) / (b - a)));
/** The witch's head, sculpted from a sphere (+z is the face); UVs project the front onto the painted face. */
function sculptedHead() {
  const g = new THREE.SphereGeometry(1, 28, 22);
  const pos = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const front = Math.max(0, z);
    let X = x * HEAD.w, Y = y * HEAD.h, Z = z * HEAD.d;
    if (y < 0) { const t = -y; X *= 1 - 0.55 * t ** 1.25; Z *= 1 - 0.12 * t; Y *= 1 + 0.08 * t; } // a narrow jaw to a pointed chin
    X *= 1 + 0.04 * gauss(y + 0.02, 0.22) * front; // high cheekbones
    if (y > 0.2) X *= 1 - 0.1 * (y - 0.2); // a narrower brow and temples
    for (const sx of [-1, 1]) Z -= 0.008 * gauss(x - sx * 0.38, 0.2) * gauss(y - 0.06, 0.13) * front; // eye sockets
    Z += 0.006 * gauss(y - 0.3, 0.07) * gauss(x, 0.5) * front; // brow ridge
    const nose = gauss(x, 0.1) * front * ramp(0.2, -0.2, y) * ramp(-0.38, -0.26, y); // a straight nose, tip at y≈-0.24
    Z += 0.017 * nose;
    Z += 0.005 * gauss(x, 0.24) * gauss(y + 0.5, 0.07) * front; // the lips
    Z -= 0.004 * gauss(x, 0.3) * gauss(y + 0.38, 0.05) * front; // under the nose
    if (z < 0) { Z *= 1.06; } // a rounder back of the skull
    pos.setXYZ(i, X, Y, Z);
    if (z > 0.05) uv.setXY(i, 0.5 + x * 0.5, 0.5 + y * 0.5); else uv.setXY(i, 0.02, 0.97); // the back: plain skin
  }
  g.computeVertexNormals();
  return g;
}
/** The painted face, after the concept: heavy-lidded dark eyes with lashes and a little purple shadow, slim
 *  stern brows, a soft nose, dark mauve lips, a touch of blush and contour. (u, v) = (0.5 + x/2, 0.5 + y/2). */
function faceTexture() {
  const N = 512, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d')!;
  const P = (x: number, y: number): [number, number] => [(0.5 + x * 0.5) * N, (0.5 - y * 0.5) * N];
  g.fillStyle = '#e9d7d3'; g.fillRect(0, 0, N, N);
  const blob = (x: number, y: number, rx: number, ry: number, col: string, a: number) => {
    const [cx, cy] = P(x, y), r = rx * N * 0.5;
    g.save(); g.translate(cx, cy); g.scale(1, ry / rx);
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, r); gr.addColorStop(0, col.replace('A', String(a))); gr.addColorStop(1, col.replace('A', '0'));
    g.fillStyle = gr; g.beginPath(); g.arc(0, 0, r, 0, Math.PI * 2); g.fill(); g.restore();
  };
  // contour and blush
  for (const sx of [-1, 1]) { blob(sx * 0.62, -0.18, 0.22, 0.3, 'rgba(150,110,130,A)', 0.28); blob(sx * 0.42, -0.2, 0.16, 0.1, 'rgba(220,140,150,A)', 0.22); }
  blob(0, -0.72, 0.3, 0.12, 'rgba(140,100,120,A)', 0.25); // under the chin
  for (const sx of [-1, 1]) {
    const ex = sx * 0.38, ey = 0.06;
    // eyeshadow
    blob(ex, ey + 0.06, 0.28, 0.12, 'rgba(120,85,140,A)', 0.55);
    // the eye: an almond, the upper lid low (heavy-lidded, a calm stern look)
    const [cx, cy] = P(ex, ey), w = 0.21 * N * 0.5, h = 0.082 * N * 0.5;
    g.save(); g.translate(cx, cy); g.scale(sx, 1);
    g.beginPath(); g.moveTo(-w, 0); g.quadraticCurveTo(-w * 0.1, -h * 1.1, w, -h * 0.15); g.quadraticCurveTo(w * 0.2, h * 1.05, -w, 0); g.closePath();
    g.fillStyle = '#efe9f2'; g.fill();
    g.save(); g.clip();
    g.fillStyle = '#4a3a5c'; g.beginPath(); g.arc(-w * 0.12, h * 0.12, h * 1.05, 0, Math.PI * 2); g.fill(); // iris (looking a little to the side)
    g.fillStyle = '#1a1220'; g.beginPath(); g.arc(-w * 0.12, h * 0.12, h * 0.5, 0, Math.PI * 2); g.fill(); // pupil
    g.fillStyle = 'rgba(255,255,255,.85)'; g.beginPath(); g.arc(-w * 0.28, -h * 0.25, h * 0.2, 0, Math.PI * 2); g.fill();
    g.fillStyle = 'rgba(60,40,70,.55)'; g.fillRect(-w, -h * 1.2, w * 2, h * 0.55); // the lid's shadow on the eye
    g.restore();
    // upper lid line + lashes
    g.strokeStyle = '#1c1420'; g.lineCap = 'round'; g.lineWidth = N * 0.01;
    g.beginPath(); g.moveTo(-w * 1.02, 0.02 * h); g.quadraticCurveTo(-w * 0.1, -h * 1.15, w * 1.12, -h * 0.35); g.stroke();
    g.lineWidth = N * 0.006;
    for (let k = 0; k < 4; k++) { const t = 0.55 + k * 0.15; g.beginPath(); g.moveTo(w * (t * 2 - 1), -h * (0.95 - k * 0.15)); g.lineTo(w * (t * 2 - 1) + w * 0.18, -h * (1.35 - k * 0.12)); g.stroke(); }
    // the crease above, the lower lid
    g.strokeStyle = 'rgba(90,60,90,.55)'; g.lineWidth = N * 0.004;
    g.beginPath(); g.moveTo(-w * 0.9, -h * 0.9); g.quadraticCurveTo(0, -h * 2.0, w * 0.95, -h * 1.0); g.stroke();
    g.strokeStyle = 'rgba(90,60,90,.4)'; g.beginPath(); g.moveTo(-w * 0.6, h * 0.55); g.quadraticCurveTo(w * 0.1, h * 1.05, w * 0.85, h * 0.2); g.stroke();
    // a slim brow, low and slanted down towards the nose (stern)
    g.strokeStyle = '#4a3a55'; g.lineWidth = N * 0.011;
    g.beginPath(); g.moveTo(-w * 0.95, -h * 2.7); g.quadraticCurveTo(w * 0.2, -h * 3.4, w * 1.15, -h * 2.6); g.stroke();
    g.restore();
  }
  // the nose: a soft shadow down one side, the nostrils
  blob(0.07, -0.12, 0.05, 0.2, 'rgba(160,120,135,A)', 0.22);
  g.fillStyle = 'rgba(110,70,90,.55)';
  for (const sx of [-1, 1]) { const [nx, ny] = P(sx * 0.06, -0.31); g.beginPath(); g.ellipse(nx, ny, N * 0.012, N * 0.006, 0, 0, Math.PI * 2); g.fill(); }
  // the lips: dark mauve, the upper lip darker, a little shine on the lower
  const [lx, ly] = P(0, -0.5), lw = 0.25 * N * 0.5, lh = 0.065 * N * 0.5;
  g.fillStyle = '#5b2f50';
  g.beginPath(); g.moveTo(lx - lw, ly); g.quadraticCurveTo(lx - lw * 0.5, ly - lh * 1.2, lx - lw * 0.1, ly - lh * 0.9); g.lineTo(lx, ly - lh * 0.6); g.lineTo(lx + lw * 0.1, ly - lh * 0.9); g.quadraticCurveTo(lx + lw * 0.5, ly - lh * 1.2, lx + lw, ly); g.closePath(); g.fill();
  g.fillStyle = '#7b4468';
  g.beginPath(); g.moveTo(lx - lw, ly); g.quadraticCurveTo(lx, ly + lh * 2.0, lx + lw, ly); g.closePath(); g.fill();
  g.strokeStyle = '#3a1c33'; g.lineWidth = N * 0.006; g.beginPath(); g.moveTo(lx - lw, ly); g.quadraticCurveTo(lx, ly + lh * 0.35, lx + lw, ly); g.stroke();
  blob(0.03, -0.535, 0.05, 0.02, 'rgba(255,220,235,A)', 0.4);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export function buildWitch(side: Side, glowTex: THREE.Texture, staffSkin?: string): Character {
  const materials: Character['materials'] = [];
  const mat = (color: number | THREE.Color, o: { vc?: boolean; metal?: number; rough?: number; emissive?: number; double?: boolean } = {}) => {
    const m = new THREE.MeshStandardMaterial({ color: o.vc ? 0xffffff : color, vertexColors: !!o.vc, metalness: o.metal ?? 0.04, roughness: o.rough ?? 0.82, flatShading: true, emissive: o.emissive ?? (o.vc ? 0x1a1424 : 0x000000), transparent: true, side: o.double ? THREE.DoubleSide : THREE.FrontSide });
    materials.push({ mat: m, color: m.color.clone(), emissive: m.emissive.clone() });
    return m;
  };
  const cloth = mat(0xffffff, { vc: true, double: true });
  const skin = mat(PAL.skin, { rough: 0.7 });
  const dark = mat(PAL.eye, { rough: 0.5 });
  const moon = mat(PAL.moon, { metal: 0.35, rough: 0.35, emissive: 0x2a2410 });
  const M = (g: THREE.BufferGeometry, m: THREE.Material, parent: THREE.Object3D, at: V3 = [0, 0, 0]) => { const o = new THREE.Mesh(g, m); o.position.set(...at); parent.add(o); return o; };
  // allies wear a greener coat, opponents keep the concept's purple (as in the other models' robe colours)
  const robe = side === 'ally' ? C(0x3a9a7c) : PAL.robe, robeDeep = side === 'ally' ? C(0x2a7058) : PAL.robeDeep, trim = side === 'ally' ? C(0x74d0ae) : PAL.trim;

  const root = new THREE.Group(), body = new THREE.Group();
  root.add(body);

  // ── boots with heels and slim legs (seen through the dress slit) ──
  for (const sx of [-1, 1]) {
    const x = sx * 0.075;
    M(tube([[x, 0.98, 0], [x * 1.05, 0.62, 0.01], [x * 1.1, 0.3, 0.0], [x * 1.1, 0.13, -0.01]], (t) => 0.068 - 0.03 * t, 7, () => PAL.boot), cloth, body);
    // foot: a pointed shoe, the heel raised on a thin spike
    const foot = surf(6, 2, (u, v) => {
      const a = u * Math.PI * 2, along = v; // heel → toe
      const z = -0.05 + along * 0.2, y = 0.13 - along * 0.11, w = 0.045 * (1 - 0.65 * along * along);
      return [x + Math.cos(a) * w, y + Math.sin(a) * w * 0.55, z];
    }, () => PAL.boot, true);
    M(foot, cloth, body);
    M(new THREE.CylinderGeometry(0.012, 0.006, 0.12, 5), dark, body, [x, 0.06, -0.045]);
  }

  // ── the black dress: a long skirt with a front slit, a fitted bodice with a high collar ──
  const skirt = surf(14, 8, (u, v) => {
    const gap = v < 0.25 ? 0.02 : 0.02 + (v - 0.25) * 0.55; // the slit opens towards the hem
    const phi = gap + u * (Math.PI * 2 - 2 * gap);
    const y = 1.1 - v * 0.82 - (u > 0.35 && u < 0.65 ? 0 : 0.04 * v) + 0.03 * tri(u * 7) * v;
    const r = 0.165 + 0.15 * v ** 1.2;
    return [Math.sin(phi) * r, y, Math.cos(phi) * r * 0.82];
  }, (u, v) => mixC(PAL.dress, PAL.dressHi, 0.6 * tri(u * 7) * v));
  M(skirt, cloth, body);
  // the lining in the slit (a lighter, dusty panel behind the legs' front)
  M(surf(4, 4, (u, v) => { const a = -0.35 + u * 0.7, r = 0.15 + 0.09 * v; return [Math.sin(a) * r, 0.86 - v * 0.6, Math.cos(a) * r * 0.62 - 0.02]; }, () => PAL.lining), cloth, body);
  const bodice = surf(10, 5, (u, v) => {
    const prof: Array<[number, number]> = [[1.08, 0.16], [1.24, 0.165], [1.38, 0.19], [1.48, 0.18], [1.56, 0.1], [1.67, 0.052]];
    const k = v * (prof.length - 1), i = Math.min(prof.length - 2, Math.floor(k)), t = k - i;
    const y = prof[i][0] + (prof[i + 1][0] - prof[i][0]) * t, r = prof[i][1] + (prof[i + 1][1] - prof[i][1]) * t;
    const a = u * Math.PI * 2;
    return [Math.sin(a) * r * 1.08, y, Math.cos(a) * r * 0.78];
  }, (u, v) => mixC(PAL.dress, PAL.dressHi, v > 0.8 ? 0.5 : 0.15 * tri(u * 4)), true);
  M(bodice, cloth, body);
  // the belt and its crescent-moon buckle
  M(surf(14, 1, (u, v) => { const a = u * Math.PI * 2, r = 0.172 + 0.006 * v; return [Math.sin(a) * r * 1.08, 1.04 + v * 0.11, Math.cos(a) * r * 0.82]; }, () => PAL.belt, true), cloth, body);
  const crescent = (R: number, depth: number) => {
    const s = new THREE.Shape();
    s.absarc(0, 0, R, Math.PI * 0.18, Math.PI * 1.82, false);
    s.absarc(R * 0.38, 0, R * 0.78, Math.PI * 1.7, Math.PI * 0.3, true);
    const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: depth * 0.4, bevelSize: R * 0.08, bevelSegments: 1, curveSegments: 6 });
    g.center();
    return g;
  };
  const buckle = M(new THREE.TorusGeometry(0.05, 0.012, 4, 10), moon, body, [0, 1.095, 0.152]);
  buckle.scale.set(1, 0.85, 0.6);
  M(crescent(0.042, 0.012), moon, body, [0, 1.095, 0.162]).rotation.z = 0.5;

  // ── the long open coat: flared, folded, open at the front, pointed hem with a lighter trim ──
  const TEETH = 9;
  const coat = surf(28, 14, (u, v) => {
    const gap = 0.36 + 0.48 * v ** 1.2; // half-opening at the front: a V at the chest, wide at the hem
    const phi = gap + u * (Math.PI * 2 - 2 * gap);
    const hem = 0.07 + 0.16 * tri(u * TEETH + 0.5) + (u < 0.06 || u > 0.94 ? 0.08 : 0); // zig-zag hem, the front corners a bit shorter
    const S = 0.14; // the first rows wrap over the shoulders, from the neck out
    let y: number, r: number, sq: number;
    if (v < S) { const t = v / S; y = 1.61 - 0.14 * t ** 0.8; r = 0.1 + 0.155 * t ** 0.7; sq = 0.72; }
    else { const t = (v - S) / (1 - S); y = 1.47 - t * (1.47 - hem); r = 0.255 + 0.25 * t ** 1.3; sq = 0.72 + 0.22 * t; }
    r *= 1 + 0.07 * Math.sin(phi * 8) * Math.max(0, v - S); // folds in the cloth
    return [Math.sin(phi) * r * (1.12 - 0.1 * v), y, Math.cos(phi) * r * sq - 0.03 * v];
  }, (u, v) => {
    const edge = v > 0.89 || u < 0.03 || u > 0.97; // trim along the hem and the front edges
    const shade = mixC(robe, robeDeep, 0.35 * tri(u * 8 + 0.25) + (u > 0.3 && u < 0.7 ? 0.15 : 0));
    return edge ? trim : shade;
  });
  M(coat, cloth, body);
  // a collar standing up behind the neck
  M(surf(10, 2, (u, v) => { const a = Math.PI * 0.55 + u * Math.PI * 0.9, r = 0.105 + 0.045 * v; return [Math.sin(a) * r * 1.1, 1.58 + v * 0.13, Math.cos(a) * r * 0.85]; }, (_, v) => mixC(robe, trim, v > 0.6 ? 1 : 0)), cloth, body);

  // ── the head: pale, slim face, dark eyes, stern brows, dark lips; long wavy hair; the hat ──
  M(new THREE.CylinderGeometry(0.045, 0.055, 0.12, 7), skin, body, [0, 1.63, 0]);
  const head = new THREE.Group();
  head.position.set(0, 1.76, 0);
  body.add(head);
  // a sculpted head: a sphere pushed into a slim face — forehead and brow ridge, eye sockets, high cheekbones, a
  // narrow jaw and pointed chin, a straight nose, soft lips — faceted; eyes, lashes, brows and lips are painted on
  const faceMat = mat(0xffffff, { rough: 0.7 });
  faceMat.map = faceTexture();
  faceMat.flatShading = false; // the face is smooth; the rest stays faceted
  M(sculptedHead(), faceMat, head);
  // the hair over the forehead, parted in the middle and swept to the sides under the hat
  M(surf(20, 4, (u, v) => {
    const phi = -Math.PI + u * Math.PI * 2; // 0 = the front
    const a = Math.abs(phi);
    const line = a < 0.08 ? 0.72 : a < 0.95 ? 0.6 - 0.42 * ((a - 0.08) / 0.87) ** 0.8 : 0.18 - 0.5 * ((a - 0.95) / (Math.PI - 0.95)); // the hairline (elevation)
    const el = Math.PI / 2 - v * (Math.PI / 2 - line);
    const k = 1.085 + 0.015 * Math.sin(phi * 9);
    return [Math.sin(phi) * Math.cos(el) * HEAD.w * k, Math.sin(el) * HEAD.h * k + 0.004, Math.cos(phi) * Math.cos(el) * HEAD.d * k];
  }, (u, v) => mixC(PAL.hair, PAL.hairDark, 0.15 + 0.4 * tri(u * 14) * v), true), cloth, head);
  // hair: a long wavy mass down the back, locks falling over both shoulders
  const hairCol = (u: number, v: number) => mixC(PAL.hair, PAL.hairDark, 0.25 + 0.5 * tri(u * 9) * (0.4 + 0.6 * v));
  M(surf(18, 10, (u, v) => {
    const phi = Math.PI * 0.42 + u * Math.PI * 1.16; // round the back of the head
    const y = 0.1 - v * (0.95 + 0.14 * tri(u * 6 + 0.3)); // to the middle of the back, in pointed locks
    const r = v < 0.25 ? 0.13 + v * 0.28 : 0.2 + 0.05 * Math.sin(v * 3.1);
    const wave = 0.022 * Math.sin(v * 15 + phi * 3) * v;
    return [Math.sin(phi) * (r + wave) * 1.05, y, Math.cos(phi) * (r + wave) * 0.85 - 0.02 - 0.05 * v];
  }, hairCol), cloth, head);
  for (const sx of [-1, 1]) for (const k of [0, 1]) {
    const x0 = sx * (0.098 + k * 0.03), z0 = 0.035 - k * 0.05;
    const spine: V3[] = Array.from({ length: 8 }, (_, i) => { const t = i / 7; return [x0 + sx * (0.06 * t + 0.025 * Math.sin(t * 9 + k)), 0.04 - t * (0.55 + 0.08 * k), z0 + 0.06 * t - 0.03 * Math.sin(t * 7)]; });
    M(tube(spine, (t) => 0.035 * (1 - 0.6 * t) + 0.008, 5, (t, a) => hairCol(a, t), [1, 1, 0.55]), cloth, head);
  }
  // the hat: a wide, slightly drooping brim; a tall crown whose tip bends back; a band with a crescent moon
  const hat = new THREE.Group();
  hat.position.set(0, 0.075, -0.005);
  hat.rotation.set(-0.12, 0, 0.07);
  head.add(hat);
  M(surf(20, 3, (u, v) => {
    const a = u * Math.PI * 2, r = 0.14 + v * 0.24; // 0.9.9.2: a little narrower, clear of the staff
    return [Math.sin(a) * r, 0.02 - 0.075 * v * v + 0.012 * Math.sin(a * 3) * v, Math.cos(a) * r];
  }, (u, v) => mixC(PAL.hat, robeDeep, v > 0.9 ? 0.25 : 0.2 * tri(u * 5)), true), cloth, hat);
  const crown: V3[] = [[0, 0.01, 0], [0, 0.17, -0.015], [0.01, 0.31, -0.05], [0.04, 0.42, -0.11], [0.1, 0.48, -0.18], [0.17, 0.47, -0.23], [0.22, 0.42, -0.25]];
  M(tube(crown, (t) => 0.165 * (1 - t) ** 1.35 + 0.004, 8, (t, a) => mixC(PAL.hat, robeDeep, 0.25 * tri(a * 4) + 0.15 * t)), cloth, hat);
  M(surf(16, 1, (u, v) => { const a = u * Math.PI * 2, r = 0.168 - 0.006 * v; return [Math.sin(a) * r, 0.025 + v * 0.06, Math.cos(a) * r]; }, () => PAL.hatBand, true), cloth, hat);
  const hatMoon = M(crescent(0.04, 0.012), moon, hat, [0, 0.055, 0.172]);
  hatMoon.rotation.z = 0.5;

  // ── arms: wide bell sleeves; the left hangs, the right (pivot) holds the staff ──
  const sleeve = (len: number, bend: number, bell = 0.15) => surf(10, 6, (u, v) => {
    const a = u * Math.PI * 2;
    const r = 0.065 + bell * Math.max(0, (v - 0.3) / 0.7) ** 1.4; // a bell from the elbow down
    const cuff = v < 0.99 ? 0 : 0.07 * tri(u * 4); // a pointed cuff
    const y = -(v * len) - cuff, z = bend * v * v;
    return [Math.cos(a) * r, y, Math.sin(a) * r * 0.9 + z];
  }, (u, v) => (v > 0.85 ? trim : mixC(robe, robeDeep, 0.3 * tri(u * 3))), true);
  const left = new THREE.Group(); left.position.set(-0.23, 1.47, 0); left.rotation.set(-0.42, 0, -0.2); body.add(left); // 0.9.9.6.1: a little forward and out, in front of the cape
  M(sleeve(0.6, 0.06), cloth, left);
  const leftHand = handMesh(PAL.skin, cloth, false); leftHand.position.set(0, -0.58, 0.05); left.add(leftHand); // 0.9.9.6.1: the hand moves, not the arm (add() returns the parent — the whole arm sat under the floor)
  const arm = new THREE.Group(); arm.position.set(0.23, 1.47, 0.02); arm.rotation.z = ARM_REST; body.add(arm);
  // the staff arm: a shorter, narrower bell that stops above the wrist, so the staff never cuts through it
  const rs = M(sleeve(0.4, 0.0, 0.07), cloth, arm); rs.rotation.x = -0.5;
  const wrist = M(new THREE.CylinderGeometry(0.03, 0.034, 0.12, 6), skin, arm, [0, -0.38, 0.19]); wrist.rotation.x = -0.5;
  const { staffPivot, staff, crystal, crystalMat, glow } = holdStaff(arm, [0, -0.43, 0.24], materials, glowTex, staffSkin, handMesh(PAL.skin, cloth, true));
  const eyes = glowEyes(head, [-1, 1].map((sx) => [sx * 0.38 * HEAD.w, 0.06 * HEAD.h, 0.9 * HEAD.d]) as V3[], EYE_COLORS.witch, glowTex);
  return { root, body, head, arm, staffPivot, crystal, crystalMat, glow, staff, height: 2.0, materials, eyes };
}
