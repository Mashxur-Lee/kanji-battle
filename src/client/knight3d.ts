// The Knight, low poly, after the character concept sheet (0.9.9.2): ~1.8 m, athletic, in full plate the colour
// of old ivory; a great helm with a visor slit and a red plume; round pauldrons with a disc rivet; brown leather
// straps crossing the chest; an olive sash; a white tabard skirt with red stripes over a dark brown under-skirt;
// gauntlets, plated legs and pointed sabatons; a sword on the back. Same rig as the others (charkit.ts).

import * as THREE from 'three';
import type { Character, Side } from './models3d';
import { C, type V3, surf, lathe, tube, box, painted, materialKit, add, holdStaff, handMesh, EYE_COLORS, glowEyes, tri, mixC, ARM_REST } from './charkit';

const PAL = {
  plate: C(0xd6cfbf), plateHi: C(0xe8e2d4), plateLo: C(0xa9a291), plateDark: C(0x7c7668),
  white: C(0xf0ece2), whiteLo: C(0xd8d2c4), under: C(0x4a3122), leather: C(0x6e4426), leatherLo: C(0x4f2f19),
  sash: C(0x6f6a3a), sashLo: C(0x575330), slit: C(0x15120f), steel: C(0xc9ccd0), grip: C(0x4a2c18), brass: C(0xc39a48),
};

export function buildKnight(side: Side, glowTex: THREE.Texture, staffSkin?: string): Character {
  const { materials, mat } = materialKit();
  const cloth = mat(0xffffff, { vc: true, double: true });
  const plate = mat(0xffffff, { vc: true, metal: 0.25, rough: 0.42, double: true });
  // the plume and the tabard's stripes: red (the concept), green for allies
  const red = side === 'ally' ? C(0x2f9a6c) : C(0xc2302c), redLo = side === 'ally' ? C(0x22744f) : C(0x8e1f1d);
  const P = (u: number, v: number, k = 6) => mixC(PAL.plate, tri(u * k) > 0.5 ? PAL.plateHi : PAL.plateLo, 0.35 + 0.15 * v); // faceted plate shading

  const root = new THREE.Group(), body = new THREE.Group();
  root.add(body);

  // ── legs: sabatons, greaves, knee cops, cuisses ──
  for (const sx of [-1, 1]) {
    const x = sx * 0.105;
    // the sabaton: overlapping lames to a point
    add(surf(8, 4, (u, v) => {
      const a = u * Math.PI * 2, z = -0.07 + v * 0.25, y = 0.06 - v * 0.035, w = 0.058 * (1 - 0.7 * v ** 1.6);
      return [x + Math.cos(a) * w, Math.max(0.005, y + Math.sin(a) * w * 0.75), z];
    }, (u, v) => (Math.floor(v * 4) % 2 ? PAL.plateLo : PAL.plate), true), plate, body);
    // the greave
    add(tube([[x, 0.08, -0.01], [x, 0.22, 0.0], [x, 0.36, 0.0], [x, 0.5, 0.005]], (t) => 0.058 + 0.016 * Math.sin(t * 2.6), 8, (t, a) => P(a, t)), plate, body);
    // the knee: a cop with a side wing
    add(painted(new THREE.SphereGeometry(0.065, 8, 6), PAL.plateHi), plate, body, [x, 0.53, 0.025]).scale.set(1, 0.9, 0.85);
    add(painted(new THREE.ConeGeometry(0.05, 0.03, 6).rotateZ(-sx * Math.PI / 2), PAL.plateLo), plate, body, [x + sx * 0.06, 0.53, 0.02]);
    // the cuisse (thigh)
    add(tube([[x, 0.56, 0.0], [x * 1.02, 0.72, 0.0], [x * 0.98, 0.9, -0.005]], (t) => 0.068 + 0.022 * t, 8, (t, a) => P(a, t)), plate, body);
  }

  // ── the skirts: a dark brown under-skirt, the white tabard skirt over it with red stripes near the hem ──
  add(lathe([[1.0, 0.19], [0.8, 0.22], [0.6, 0.25], [0.5, 0.26]], 16, (u) => mixC(PAL.under, PAL.leatherLo, 0.4 * tri(u * 8)), 1.1, 0.85), cloth, body);
  // the tabard: front and back panels (split at the sides, so the legs move), a slightly ragged hem
  for (const back of [false, true]) {
    add(surf(8, 10, (u, v) => {
      const a = (back ? Math.PI : 0) + (u - 0.5) * 2.2, y = 1.36 - v * 0.76 - 0.02 * tri(u * 4) * v;
      const r = (v < 0.45 ? 0.2 + 0.03 * Math.sin(v * 7) : 0.2 + 0.12 * (v - 0.45)) + 0.012;
      return [Math.sin(a) * r * 1.12, y, Math.cos(a) * r * 0.86];
    }, (u, v) => (v > 0.82 && v < 0.87) || (v > 0.91 && v < 0.96) ? red : mixC(PAL.white, PAL.whiteLo, 0.35 * tri(u * 4) * v)), cloth, body);
  }

  // ── the torso: a breastplate with a centre ridge, faulds below, a gorget at the neck ──
  add(lathe([[1.58, 0.11], [1.53, 0.2], [1.42, 0.245], [1.28, 0.23], [1.14, 0.2], [1.02, 0.205]], 16, (u, v) => {
    const ridge = u < 0.04 || u > 0.96;
    return ridge ? PAL.plateHi : P(u, v, 8);
  }, 1.12, 0.84), plate, body);
  for (let i = 0; i < 3; i++) add(lathe([[1.02 - i * 0.045, 0.205 + i * 0.008], [0.975 - i * 0.045, 0.215 + i * 0.008]], 14, (u) => (i % 2 ? PAL.plateLo : PAL.plate), 1.12, 0.86), plate, body);
  add(lathe([[1.66, 0.06], [1.62, 0.075], [1.57, 0.12]], 12, (u, v) => P(u, v)), plate, body);
  // the olive sash round the waist, knotted on the left hip, its ends hanging
  add(tube(Array.from({ length: 15 }, (_, i) => { const a = (i / 14) * Math.PI * 2; return [Math.sin(a) * 0.235, 1.07 + 0.03 * Math.cos(a + 0.6), Math.cos(a) * 0.19] as V3; }), () => 0.03, 6, (t, a) => mixC(PAL.sash, PAL.sashLo, tri(a * 3 + t * 5) * 0.6), [1, 1.4, 1]), cloth, body);
  for (const k of [0, 1]) add(tube([[-0.2, 1.06, 0.1], [-0.22 - k * 0.02, 0.95, 0.12], [-0.21 - k * 0.04, 0.82 - k * 0.04, 0.12]], (t) => 0.025 * (1 - 0.3 * t), 5, (t) => mixC(PAL.sash, PAL.sashLo, t), [1.4, 1, 0.5]), cloth, body);
  // the leather straps crossing the chest (they carry the sword), a brass buckle where they meet
  for (const sx of [-1, 1]) {
    const spine: V3[] = Array.from({ length: 9 }, (_, i) => {
      const t = i / 8, a = -0.9 + t * 4.6; // round the torso, over one shoulder, under the other arm
      const y = 1.52 - 0.48 * t;
      return [sx * Math.sin(a) * 0.285, y + 0.06 * Math.sin(t * Math.PI), Math.cos(a) * 0.222];
    });
    add(tube(spine, () => 0.016, 4, (t) => mixC(PAL.leather, PAL.leatherLo, 0.4 * tri(t * 4)), [1, 1.5, 1]), cloth, body);
  }
  add(box([0.06, 0.06, 0.02], PAL.brass, [0.0, 1.46, 0.235], [0, 0, Math.PI / 4]), cloth, body);

  // ── the sword on the back: the hilt over the left shoulder ──
  const sword = new THREE.Group(); sword.position.set(0, 1.18, -0.24); sword.rotation.z = 0.55; body.add(sword);
  add(box([0.055, 0.82, 0.012], PAL.steel, [0, -0.12, 0]), plate, sword);
  add(painted(new THREE.ConeGeometry(0.039, 0.07, 4).rotateX(Math.PI).rotateY(Math.PI / 4), PAL.steel), plate, sword, [0, -0.565, 0]).scale.set(1, 1, 0.22);
  add(box([0.24, 0.03, 0.035], PAL.brass, [0, 0.3, 0]), cloth, sword);
  add(painted(new THREE.CylinderGeometry(0.018, 0.018, 0.16, 6), PAL.grip), cloth, sword, [0, 0.39, 0]);
  add(painted(new THREE.SphereGeometry(0.03, 6, 4), PAL.brass), cloth, sword, [0, 0.48, 0]);
  add(lathe([[0.32, 0.02], [-0.5, 0.05], [-0.6, 0.03]], 6, () => PAL.leatherLo, 1, 0.5), cloth, sword); // the scabbard

  // ── the head: a great helm, visor slit, breaths, a ridge, the red plume ──
  const head = new THREE.Group();
  head.position.set(0, 1.73, 0);
  body.add(head);
  add(lathe([[0.13, 0.0], [0.125, 0.06], [0.105, 0.105], [0.045, 0.122], [0.025, 0.124], [0.005, 0.125], [-0.06, 0.125], [-0.125, 0.12], [-0.135, 0.11]], 14, (u, v) => {
    if (Math.floor(v * 8) === 4 && (u < 0.2 || u > 0.8)) return PAL.slit; // the eye slit
    return u < 0.025 || u > 0.975 ? PAL.plateHi : P(u, v, 6);
  }, 1, 1.06), plate, head);
  for (let i = 0; i < 4; i++) add(box([0.012, 0.012, 0.01], PAL.slit, [0.035 + (i % 2) * 0.025, -0.05 - Math.floor(i / 2) * 0.03, 0.128], [0, 0.3, 0]), cloth, head);
  for (const sx of [-1, 1]) add(painted(new THREE.CylinderGeometry(0.014, 0.014, 0.01, 8).rotateZ(Math.PI / 2), PAL.brass), cloth, head, [sx * 0.128, -0.01, 0]);
  add(box([0.03, 0.025, 0.05], PAL.brass, [0, 0.13, -0.01]), cloth, head); // the plume holder
  for (let k = 0; k < 7; k++) {
    const s = (k - 3) / 3, len = 0.42 - Math.abs(s) * 0.08;
    const spine: V3[] = Array.from({ length: 7 }, (_, i) => { const t = i / 6, a = t * 2.2; return [s * 0.03 * (1 + t), 0.14 + Math.sin(a) * 0.14 * len / 0.42, -0.01 - (1 - Math.cos(a)) * len * 0.45 + 0.06 * t]; });
    add(tube(spine, (t) => 0.026 * (1 - t) ** 0.7 + 0.004, 5, (t, a) => mixC(red, redLo, 0.3 * tri(a * 2) + 0.4 * t)), cloth, head);
  }

  // ── arms: rerebrace, elbow cop, vambrace, gauntlet; round pauldrons with a disc rivet ──
  const armPlates = (g: THREE.Group, fwd: number) => {
    add(tube([[0, -0.02, 0], [0, -0.14, 0.0], [0, -0.26, fwd * 0.3]], (t) => 0.056 - 0.006 * t, 7, (t, a) => P(a, t)), plate, g);
    add(painted(new THREE.SphereGeometry(0.05, 7, 5), PAL.plateHi), plate, g, [0, -0.27, fwd * 0.3 - 0.01]);
  };
  for (const sx of [-1, 1]) {
    const pd = new THREE.Group(); pd.position.set(sx * 0.27, 1.5, 0); pd.rotation.z = -sx * 0.5; body.add(pd);
    add(lathe([[0.075, 0.0], [0.06, 0.07], [0.02, 0.12], [-0.03, 0.135], [-0.07, 0.13]], 10, (u, v) => (v > 0.85 ? PAL.plateLo : P(u, v, 5)), 1, 1.0), plate, pd);
    add(lathe([[-0.06, 0.13], [-0.1, 0.12]], 10, () => PAL.plateLo), plate, pd);
    add(painted(new THREE.CylinderGeometry(0.035, 0.04, 0.02, 10).rotateZ(-sx * Math.PI / 2), PAL.plateHi), plate, pd, [sx * 0.125, -0.03, 0]);
    add(painted(new THREE.SphereGeometry(0.014, 6, 4), PAL.brass), cloth, pd, [sx * 0.137, -0.03, 0]);
  }
  const left = new THREE.Group(); left.position.set(-0.26, 1.44, 0); left.rotation.set(-0.3, 0, -0.08); body.add(left); // 0.9.9.6.1: a little forward
  armPlates(left, 0.1);
  add(tube([[0, -0.28, 0.02], [0, -0.42, 0.05], [0, -0.52, 0.06]], (t) => 0.048 + 0.008 * t, 7, (t, a) => P(a, t)), plate, left);
  const leftHand = handMesh(PAL.plateHi, plate, false, PAL.plateLo, 1.15); leftHand.position.set(0, -0.53, 0.06); left.add(leftHand); // 0.9.9.6.1: the hand moves, not the arm (add() returns the parent — the whole arm sat under the floor) // the gauntlet
  const arm = new THREE.Group(); arm.position.set(0.26, 1.44, 0.02); arm.rotation.z = ARM_REST; body.add(arm);
  add(tube([[0, -0.02, 0], [0, -0.12, 0.0], [0, -0.22, 0.04]], (t) => 0.056 - 0.006 * t, 7, (t, a) => P(a, t)), plate, arm);
  add(painted(new THREE.SphereGeometry(0.05, 7, 5), PAL.plateHi), plate, arm, [0, -0.24, 0.05]);
  add(tube([[0, -0.25, 0.07], [0, -0.33, 0.15], [0, -0.39, 0.21]], (t) => 0.045 + 0.01 * t, 7, (t, a) => P(a, t)), plate, arm);
  const { staffPivot, staff, crystal, crystalMat, glow } = holdStaff(arm, [0, -0.43, 0.25], materials, glowTex, staffSkin, handMesh(PAL.plateHi, plate, true, PAL.plateLo, 1.15));
  const eyes = glowEyes(head, [[-0.035, 0.016, 0.128], [0.035, 0.016, 0.128]], EYE_COLORS.knight, glowTex); // in the visor slit
  return { root, body, head, arm, staffPivot, crystal, crystalMat, glow, staff, height: 2.0, materials, eyes };
}
