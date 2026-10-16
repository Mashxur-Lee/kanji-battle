// The Wizard, low poly, after the character concept sheet (0.9.9.2): ~1.75 m, lean, pale, long white wavy hair
// and a long beard, calm narrowed eyes; a tall blue pointed hat with a bent tip, a gold band and a gold diamond
// star; a blue hooded cloak with a round gold clasp, cream trim and gold diamond lattice on the hem and sleeves;
// a blue robe with a cream front panel; a brown belt with a long hanging tail and a gold diamond buckle; wide
// bell sleeves with cream cuffs; blue boots. Built with the shared kit (charkit.ts), same rig as the others.

import * as THREE from 'three';
import type { Character, Side } from './models3d';
import { C, type V3, surf, lathe, tube, painted, sculptedHead, faceTexture, materialKit, add, holdStaff, handMesh, EYE_COLORS, glowEyes, tri, mixC, star4, lattice } from './charkit';

const PAL = {
  robe: C(0x3463c8), robeDeep: C(0x274c9c), cream: C(0xf1e7cf), creamDeep: C(0xd9cdb0), gold: C(0xe4b84c), goldDeep: C(0xb08630),
  skin: C(0xf2ddcf), hair: C(0xf4f2ee), hairShade: C(0xcfccc6), leather: C(0x75492a), leatherDeep: C(0x553319), boot: C(0x2c4f9c),
};
const HEAD = { w: 0.088, h: 0.122, d: 0.106, jaw: 0.42, chin: 0.06, nose: 0.022, brow: 0.008 };

export function buildWizard(side: Side, glowTex: THREE.Texture, staffSkin?: string): Character {
  const { materials, mat } = materialKit();
  const cloth = mat(0xffffff, { vc: true, double: true });
  const skin = mat(PAL.skin, { rough: 0.7 });
  const gold = mat(PAL.gold, { metal: 0.3, rough: 0.35, emissive: 0x2a1e08 });
  // allies wear green, everyone else the concept's blue
  const ally = side === 'ally';
  const robe = ally ? C(0x2f9070) : PAL.robe, robeDeep = ally ? C(0x226a52) : PAL.robeDeep;
  const goldBand = (u: number, t: number, k: number, base: THREE.Color) => (lattice(u, t, k) ? PAL.gold : base);

  const root = new THREE.Group(), body = new THREE.Group();
  root.add(body);

  // ── boots: rounded blue toes under the robe ──
  for (const sx of [-1, 1]) {
    add(painted(new THREE.SphereGeometry(0.06, 7, 5), PAL.boot), cloth, body, [sx * 0.09, 0.05, 0.08]).scale.set(0.9, 0.75, 1.6);
  }

  // ── the robe: blue with a cream front panel, a gold lattice band above the hem ──
  add(lathe([[1.46, 0.1], [1.4, 0.165], [1.24, 0.18], [1.04, 0.165], [0.7, 0.21], [0.36, 0.255], [0.3, 0.26], [0.24, 0.266], [0.18, 0.272], [0.12, 0.278], [0.04, 0.29]], 36, (u, v) => {
    const front = u < 0.06 || u > 0.94, row = Math.floor(v * 10);
    if (row === 9) return PAL.cream;
    if (row >= 6) return goldBand(u, (row - 5.5) / 3, 12, front ? PAL.creamDeep : robeDeep);
    return front ? mixC(PAL.cream, PAL.creamDeep, 0.3 * v) : mixC(robe, robeDeep, 0.3 * tri(u * 12) * v);
  }, 1.1, 0.8), cloth, body);

  // ── the cloak: open at the front, from the shoulders to the ankles, cream edges, gold lattice at the hem ──
  const cloak = surf(48, 30, (u, v) => {
    const gap = 0.55 + 0.35 * v ** 1.3;
    const phi = gap + u * (Math.PI * 2 - 2 * gap);
    const S = 0.13;
    let y: number, r: number, sq: number;
    if (v < S) { const t = v / S; y = 1.58 - 0.15 * t ** 0.8; r = 0.1 + 0.15 * t ** 0.7; sq = 0.74; }
    else { const t = (v - S) / (1 - S); y = 1.43 - t * 1.3; r = 0.25 + 0.14 * t ** 1.2; sq = 0.74 + 0.16 * t; }
    r *= 1 + 0.05 * Math.sin(phi * 7) * Math.max(0, v - S);
    return [Math.sin(phi) * r * 1.1, y, Math.cos(phi) * r * sq - 0.03 * v];
  }, (u, v) => {
    if (u < 0.03 || u > 0.97 || v > 0.95) return PAL.cream;
    if (v > 0.8) return goldBand(u, (v - 0.8) / 0.15, 16, robeDeep);
    return mixC(robe, robeDeep, 0.25 + 0.3 * tri(u * 9));
  });
  add(cloak, cloth, body);
  // the hood, down: a soft roll round the back of the neck and a fold hanging between the shoulders
  add(surf(6, 4, (u, v) => { const x = (u - 0.5) * (0.26 - 0.2 * v); return [x, 1.56 - v * 0.3, -0.15 - 0.04 * Math.cos((u - 0.5) * 3) - 0.03 * v]; },
    (u, v) => (v > 0.85 ? PAL.cream : mixC(robeDeep, robe, 0.3 * tri(u * 2)))), cloth, body);
  // the round gold clasp at the collar
  add(new THREE.CylinderGeometry(0.035, 0.035, 0.014, 10).rotateX(Math.PI / 2), gold, body, [0, 1.47, 0.135]);
  add(new THREE.TorusGeometry(0.035, 0.007, 4, 10), gold, body, [0, 1.47, 0.142]);
  for (const sx of [-1, 1]) add(new THREE.CylinderGeometry(0.012, 0.012, 0.06, 5).rotateZ(Math.PI / 2), gold, body, [sx * 0.065, 1.48, 0.125]);

  // ── the belt: brown, a gold diamond buckle, the long tail hanging down the front ──
  add(lathe([[1.08, 0.172], [1.02, 0.17]], 16, () => PAL.leather, 1.1, 0.82), cloth, body);
  const buckle = add(new THREE.OctahedronGeometry(0.04, 0), gold, body, [0.0, 1.05, 0.145]); buckle.scale.set(0.9, 1.1, 0.35);
  add(painted(new THREE.OctahedronGeometry(0.02, 0), PAL.leatherDeep), cloth, body, [0.0, 1.05, 0.158]).scale.set(0.9, 1.1, 0.3);
  add(surf(1, 6, (u, v) => [0.03 + (u - 0.5) * 0.045 + 0.02 * Math.sin(v * 3), 1.03 - v * 0.48, 0.15 + 0.035 * v + 0.012 * Math.sin(v * 6)], (_, v) => (v > 0.9 ? PAL.gold : mixC(PAL.leather, PAL.leatherDeep, 0.3 * v))), cloth, body);

  // ── the head: pale, calm narrowed eyes, white brows; long wavy hair, a long beard; the hat ──
  add(new THREE.CylinderGeometry(0.043, 0.052, 0.12, 7), skin, body, [0, 1.53, 0]);
  const head = new THREE.Group();
  head.position.set(0, 1.66, 0);
  body.add(head);
  const faceMat = mat(0xffffff, { rough: 0.7, flat: false });
  faceMat.map = faceTexture({ skin: '#f2ddcf', shade: 'rgba(160,120,115,A)', iris: '#5d7590', eyeW: 0.2, eyeH: 0.07, lid: 0.55, brow: '#f0eee8', browW: 15, browTilt: 0.2, lips: '#b77a72', lipW: 0.2, wrinkles: true });
  add(sculptedHead(HEAD), faceMat, head);
  // hair: a cap over the crown (under the hat), the long wavy mass down the back, locks over the shoulders
  const hairCol = (u: number, v: number) => mixC(PAL.hair, PAL.hairShade, 0.2 + 0.5 * tri(u * 9) * (0.3 + 0.7 * v));
  add(surf(18, 3, (u, v) => {
    const phi = -Math.PI + u * Math.PI * 2, a = Math.abs(phi);
    const line = a < 1.0 ? 0.62 - 0.3 * (a / 1.0) : 0.32 - 0.6 * ((a - 1.0) / (Math.PI - 1.0));
    const el = Math.PI / 2 - v * (Math.PI / 2 - line), k = 1.09;
    return [Math.sin(phi) * Math.cos(el) * HEAD.w * k, Math.sin(el) * HEAD.h * k, Math.cos(phi) * Math.cos(el) * HEAD.d * k];
  }, hairCol, true), cloth, head);
  add(surf(18, 10, (u, v) => {
    const phi = Math.PI * 0.4 + u * Math.PI * 1.2;
    const y = 0.08 - v * (0.72 + 0.1 * tri(u * 6 + 0.3));
    const r = v < 0.25 ? 0.12 + v * 0.26 : 0.185 + 0.04 * Math.sin(v * 3.1);
    const wave = 0.02 * Math.sin(v * 14 + phi * 3) * v;
    return [Math.sin(phi) * (r + wave) * 1.05, y, Math.cos(phi) * (r + wave) * 0.8 - 0.02 - 0.05 * v];
  }, hairCol), cloth, head);
  for (const sx of [-1, 1]) {
    const spine: V3[] = Array.from({ length: 8 }, (_, i) => { const t = i / 7; return [sx * (0.095 + 0.05 * t + 0.02 * Math.sin(t * 9)), 0.02 - t * 0.5, 0.0 + 0.05 * t - 0.025 * Math.sin(t * 7)]; });
    add(tube(spine, (t) => 0.03 * (1 - 0.6 * t) + 0.008, 5, (t, a) => hairCol(a, t), [1, 1, 0.6]), cloth, head);
  }
  // the beard: full on the cheeks, long and wavy, to a point over the belt; a moustache over the lips
  add(surf(10, 12, (u, v) => {
    const x0 = u - 0.5, top = -0.02 - 0.06 * (1 - Math.abs(x0) * 2) ** 2; // sideburns high, below the lips in the middle
    const y = top - v * (0.56 + 0.06 * tri(u * 3 + 0.5)) ;
    const w = (0.09 + 0.02 * Math.sin(Math.PI * Math.min(1, v * 1.6))) * (1 - 0.75 * v ** 1.6);
    const x = x0 * 2 * w + 0.008 * Math.sin(v * 12 + u * 4);
    const z = 0.065 + 0.04 * Math.cos(x0 * Math.PI) + 0.085 * v ** 0.8 - (v < 0.08 ? 0.03 * Math.abs(x0) * 2 : 0);
    return [x, y, z];
  }, (u, v) => mixC(PAL.hair, PAL.hairShade, 0.15 + 0.45 * tri(u * 5) * v)), cloth, head);
  for (const sx of [-1, 1]) add(tube([[sx * 0.004, -0.045, 0.108], [sx * 0.035, -0.055, 0.106], [sx * 0.06, -0.075, 0.095], [sx * 0.07, -0.11, 0.088]], (t) => 0.014 * (1 - 0.6 * t) + 0.004, 5, () => PAL.hair), cloth, head);
  // the hat: a modest brim, a tall crown bent back at the tip, a gold band and the diamond star
  const hat = new THREE.Group();
  hat.position.set(0, 0.075, -0.005);
  hat.rotation.set(-0.08, 0, -0.05);
  head.add(hat);
  add(surf(20, 3, (u, v) => { const a = u * Math.PI * 2, r = 0.13 + v * 0.17; return [Math.sin(a) * r, 0.02 - 0.04 * v * v, Math.cos(a) * r]; },
    (u, v) => mixC(robe, robeDeep, v > 0.85 ? 0.4 : 0.2 * tri(u * 5)), true), cloth, hat);
  const crown: V3[] = [[0, 0.01, 0], [0, 0.2, -0.01], [0.0, 0.38, -0.04], [-0.02, 0.52, -0.09], [-0.07, 0.6, -0.16], [-0.13, 0.6, -0.21], [-0.18, 0.55, -0.23]];
  add(tube(crown, (t) => 0.15 * (1 - t) ** 1.3 + 0.004, 8, (t, a) => mixC(robe, robeDeep, 0.25 * tri(a * 4) + 0.2 * t)), cloth, hat);
  add(surf(16, 1, (u, v) => { const a = u * Math.PI * 2, r = 0.153 - 0.005 * v; return [Math.sin(a) * r, 0.025 + v * 0.05, Math.cos(a) * r]; }, (u) => (tri(u * 16) > 0.5 ? PAL.gold : PAL.goldDeep), true), cloth, hat);
  add(star4(0.055, 0.018, 0.01), gold, hat, [0, 0.08, 0.15]).rotation.x = -0.1;

  // ── sleeves: wide bells, cream cuffs with a gold lattice band; the right arm holds the staff ──
  const sleeve = (len: number, bend: number, bell: number) => surf(14, 8, (u, v) => {
    const a = u * Math.PI * 2, r = 0.06 + bell * Math.max(0, (v - 0.25) / 0.75) ** 1.3;
    return [Math.cos(a) * r, -(v * len), Math.sin(a) * r * 0.9 + bend * v * v];
  }, (u, v) => (v > 0.88 ? PAL.cream : v > 0.72 ? goldBand(u, (v - 0.72) / 0.16, 5, robeDeep) : mixC(robe, robeDeep, 0.3 * tri(u * 3))), true);
  const left = new THREE.Group(); left.position.set(-0.22, 1.42, 0); left.rotation.set(0.05, 0, 0.12); body.add(left);
  add(sleeve(0.58, 0.05, 0.13), cloth, left);
  left.add(handMesh(PAL.skin, cloth, false)).position.set(0, -0.56, 0.04);
  const arm = new THREE.Group(); arm.position.set(0.22, 1.42, 0.02); arm.rotation.z = -0.35; body.add(arm);
  add(sleeve(0.4, 0, 0.065), cloth, arm).rotation.x = -0.5;
  add(new THREE.CylinderGeometry(0.03, 0.033, 0.12, 6), skin, arm, [0, -0.38, 0.19]).rotation.x = -0.5;
  const { staffPivot, staff, crystal, crystalMat, glow } = holdStaff(arm, [0, -0.43, 0.24], materials, glowTex, staffSkin, handMesh(PAL.skin, cloth, true));
  const eyes = glowEyes(head, [-1, 1].map((sx) => [sx * 0.38 * HEAD.w, 0.06 * HEAD.h, 0.9 * HEAD.d]) as V3[], EYE_COLORS.wizard, glowTex);
  return { root, body, head, arm, staffPivot, crystal, crystalMat, glow, staff, height: 2.0, materials, eyes };
}

