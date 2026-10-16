// The Goblin, low poly, after the character concept sheet (0.9.9.2): ~1.6 m, lean and wiry, olive-green skin,
// short messy dark hair, long pointed ears, glaring yellow-red eyes and bared teeth; a red scarf with its hood
// down, a leather pad on one shoulder, straps crossing the chest with a buckle; a belt, dark shorts and a torn
// red loincloth; wrapped leather bracers and gloves, wrapped shins and bare feet. Same rig (charkit.ts).

import * as THREE from 'three';
import type { Character, Side } from './models3d';
import { C, type V3, surf, lathe, tube, box, painted, sculptedHead, faceTexture, materialKit, add, holdStaff, handMesh, tri, mixC } from './charkit';

const PAL = {
  skin: C(0x84933f), skinLo: C(0x66752e), skinHi: C(0x9aaa52), hair: C(0x2c2420), hairHi: C(0x45392f),
  red: C(0xb3352b), redLo: C(0x82231c), leather: C(0x7a4e2c), leatherLo: C(0x553419), wrap: C(0xa88a62), wrapLo: C(0x7d6545),
  shorts: C(0x3a332f), shortsLo: C(0x29231f), brass: C(0xb99245), nail: C(0x3c3a22), ear: C(0xa36a5a),
};
const HEAD = { w: 0.096, h: 0.112, d: 0.106, jaw: 0.22, chin: 0.02, nose: 0.036, brow: 0.016 };

export function buildGoblin(side: Side, glowTex: THREE.Texture, staffSkin?: string): Character {
  const { materials, mat } = materialKit();
  const cloth = mat(0xffffff, { vc: true, double: true });
  const skin = mat(PAL.skin, { rough: 0.75 });
  // the scarf and loincloth: red (the concept), green-teal for allies (and the skin stays olive)
  const red = side === 'ally' ? C(0x2c8f8a) : PAL.red, redLo = side === 'ally' ? C(0x1f6966) : PAL.redLo;
  const S = (u: number, v: number, k = 5) => mixC(PAL.skin, tri(u * k) > 0.5 ? PAL.skinHi : PAL.skinLo, 0.35 + 0.1 * v); // faceted skin

  const root = new THREE.Group(), body = new THREE.Group();
  root.add(body);

  // ── bare feet, wrapped shins, skinny legs ──
  for (const sx of [-1, 1]) {
    const x = sx * 0.095;
    add(surf(7, 4, (u, v) => {
      const a = u * Math.PI * 2, z = -0.06 + v * 0.23, w = 0.05 * (1 - 0.35 * v) * (v > 0.75 ? 1 - (v - 0.75) * 1.6 : 1);
      return [x + sx * 0.012 * v + Math.cos(a) * w, Math.max(0.004, 0.035 + Math.sin(a) * w * 0.55 - 0.01 * v), z];
    }, (u, v) => S(u, v), true), cloth, body);
    for (let k = 0; k < 3; k++) add(painted(new THREE.SphereGeometry(0.016, 5, 4), PAL.skinLo), cloth, body, [x + sx * 0.012 + (k - 1) * 0.022, 0.016, 0.165 - Math.abs(k - 1) * 0.01]);
    add(tube([[x, 0.05, -0.01], [x, 0.3, -0.005], [x * 1.03, 0.48, 0.01], [x * 1.05, 0.65, 0.0], [x, 0.8, -0.005]], (t) => 0.04 + 0.022 * t + 0.008 * Math.sin(t * 7), 7, (t, a) => S(a, t)), cloth, body);
    // the wraps, round and round the shin, in bands
    add(tube([[x, 0.08, -0.01], [x, 0.2, -0.008], [x, 0.32, -0.004], [x * 1.02, 0.44, 0.005]], (t) => 0.048 + 0.008 * t, 7, (t, a) => (tri(t * 6 + a * 0.5) > 0.5 ? PAL.wrap : PAL.wrapLo)), cloth, body);
  }

  // ── dark shorts, a belt with a buckle, the torn red loincloth ──
  add(lathe([[0.96, 0.17], [0.86, 0.19], [0.74, 0.21], [0.66, 0.2]], 14, (u, v) => mixC(PAL.shorts, PAL.shortsLo, 0.5 * tri(u * 6) * v), 1.08, 0.82), cloth, body);
  add(lathe([[1.0, 0.175], [0.94, 0.178]], 14, (u) => (tri(u * 7) > 0.85 ? PAL.leatherLo : PAL.leather), 1.08, 0.84), cloth, body);
  add(box([0.06, 0.05, 0.02], PAL.brass, [0.0, 0.97, 0.15]), cloth, body);
  add(box([0.035, 0.028, 0.024], PAL.leatherLo, [0.0, 0.97, 0.152]), cloth, body);
  for (const back of [false, true]) {
    add(surf(6, 6, (u, v) => {
      const a = (back ? Math.PI : 0) + (u - 0.5) * 0.9, r = 0.19 + 0.06 * v;
      const hem = 0.42 + 0.1 * tri(u * 3.5 + 0.2) + 0.04 * Math.sin(u * 17); // torn
      return [Math.sin(a) * r * 1.08, 0.96 - v * hem, Math.cos(a) * r * 0.86 + (back ? -0.01 : 0.01)];
    }, (u, v) => mixC(red, redLo, 0.25 + 0.35 * tri(u * 3) * v)), cloth, body);
  }

  // ── a lean bare torso: chest, abs (faceted), the straps crossing, a buckle; the pad on the left shoulder ──
  add(lathe([[1.36, 0.075], [1.32, 0.155], [1.24, 0.18], [1.13, 0.155], [1.02, 0.14], [0.94, 0.152]], 14, (u, v) => {
    const front = Math.min(u, 1 - u) < 0.12;
    return front && v > 0.4 ? (tri(v * 6) > 0.5 ? PAL.skinHi : PAL.skinLo) : S(u, v, 7);
  }, 1.1, 0.74), cloth, body);
  for (const sx of [-1, 1]) {
    const spine: V3[] = Array.from({ length: 9 }, (_, i) => { const t = i / 8, a = -0.9 + t * 4.4; return [sx * Math.sin(a) * 0.212, 1.33 - 0.36 * t + 0.04 * Math.sin(t * Math.PI), Math.cos(a) * 0.145]; });
    add(tube(spine, () => 0.014, 4, (t) => mixC(PAL.leather, PAL.leatherLo, 0.4 * tri(t * 4)), [1, 2, 1]), cloth, body);
  }
  add(box([0.05, 0.05, 0.02], PAL.brass, [0, 1.27, 0.15], [0, 0, Math.PI / 4]), cloth, body);
  const pad = new THREE.Group(); pad.position.set(-0.2, 1.31, 0); pad.rotation.z = 0.55; pad.scale.setScalar(0.8); body.add(pad);
  add(lathe([[0.06, 0.0], [0.045, 0.06], [0.0, 0.1], [-0.05, 0.11], [-0.08, 0.1]], 9, (u, v) => (v > 0.8 ? PAL.leatherLo : tri(u * 9) > 0.8 ? PAL.leatherLo : PAL.leather), 1, 1.1), cloth, pad);

  // ── the red scarf round the neck, the hood down behind it, two tails hanging down the back ──
  add(tube(Array.from({ length: 11 }, (_, i) => { const a = (i / 10) * Math.PI * 2; return [Math.sin(a) * 0.088, 1.375 + 0.02 * Math.cos(a), Math.cos(a) * 0.08] as V3; }), () => 0.03, 7, (t, a) => mixC(red, redLo, 0.5 * tri(a * 2 + t * 6))), cloth, body);
  add(surf(8, 5, (u, v) => {
    const a = Math.PI + (u - 0.5) * (2.4 - 1.2 * v), r = 0.13 - 0.02 * v;
    return [Math.sin(a) * r * 1.1, 1.42 - v * 0.2 + 0.03 * Math.cos((u - 0.5) * 6), Math.cos(a) * r - 0.04 * v];
  }, (u, v) => mixC(red, redLo, 0.2 + 0.4 * tri(u * 3) * (1 - v))), cloth, body);
  for (const k of [0, 1]) add(tube([[-0.04 + k * 0.05, 1.36, -0.1], [-0.07 + k * 0.03, 1.22, -0.15], [-0.09 + k * 0.05, 1.08, -0.16]], (t) => 0.035 * (1 - 0.3 * t), 5, (t) => mixC(red, redLo, t), [1.4, 1, 0.45]), cloth, body);

  // ── the head: olive, a heavy brow, glaring eyes, bared teeth; long ears; messy dark hair ──
  add(new THREE.CylinderGeometry(0.04, 0.05, 0.1, 7), skin, body, [0, 1.4, 0]);
  const head = new THREE.Group();
  head.position.set(0, 1.51, 0.01);
  body.add(head);
  const faceMat = mat(0xffffff, { rough: 0.75, flat: false });
  faceMat.map = faceTexture({ skin: '#84933f', shade: 'rgba(60,72,24,A)', iris: '#d2401c', eyeW: 0.2, eyeH: 0.075, lid: 0.2, brow: '#2a221c', browW: 22, browTilt: 1.0, lips: '#4e3a22', lipW: 0.34, snarl: true, glowEyes: true });
  add(sculptedHead(HEAD), faceMat, head);
  for (const sx of [-1, 1]) {
    const ear: V3[] = [[sx * 0.075, 0.0, -0.01], [sx * 0.14, 0.03, -0.03], [sx * 0.21, 0.07, -0.05], [sx * 0.27, 0.105, -0.07]];
    add(tube(ear, (t) => 0.035 * (1 - t) ** 0.9 + 0.002, 6, (t, a) => S(a, t, 3), [1, 1, 0.35]), cloth, head);
    add(tube(ear.map(([x, y, z]) => [x * 0.98, y, z + 0.008] as V3).slice(0, 3), (t) => 0.02 * (1 - t) + 0.002, 5, () => PAL.ear, [1, 1, 0.3]), cloth, head);
  }
  // messy hair: a dark cap with spiky tufts
  add(surf(16, 3, (u, v) => {
    const phi = -Math.PI + u * Math.PI * 2, a = Math.abs(phi);
    const line = a < 0.9 ? 0.55 : 0.55 - 0.65 * ((a - 0.9) / (Math.PI - 0.9));
    const el = Math.PI / 2 - v * (Math.PI / 2 - line), k = 1.08 + 0.03 * tri(u * 8);
    return [Math.sin(phi) * Math.cos(el) * HEAD.w * k, Math.sin(el) * HEAD.h * k, Math.cos(phi) * Math.cos(el) * HEAD.d * k];
  }, (u, v) => mixC(PAL.hair, PAL.hairHi, 0.4 * tri(u * 8 + v)), true), cloth, head);
  for (let i = 0; i < 13; i++) {
    const phi = -Math.PI + (i / 13) * Math.PI * 2 + 0.2 * Math.sin(i * 7.3), el = 0.55 + 0.5 * ((i * 0.37) % 1);
    const n = new THREE.Vector3(Math.sin(phi) * Math.cos(el), Math.sin(el), Math.cos(phi) * Math.cos(el));
    const at = new THREE.Vector3(n.x * HEAD.w, n.y * HEAD.h, n.z * HEAD.d);
    const tuft = add(painted(new THREE.ConeGeometry(0.022, 0.07 + 0.03 * ((i * 0.61) % 1), 4), i % 3 ? PAL.hair : PAL.hairHi), cloth, head, [at.x, at.y, at.z]);
    tuft.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n.add(new THREE.Vector3(0, 0, -0.5)).normalize());
  }

  // ── arms: wiry, bracers wrapped in bands, leather gloves; the right holds the staff ──
  const bracer = (g: THREE.Group, a: V3, b: V3) => add(tube([a, [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2], b], (t) => 0.042 - 0.006 * t, 7, (t, u) => (tri(t * 4 + u * 0.4) > 0.5 ? PAL.leather : PAL.leatherLo)), cloth, g);
  const left = new THREE.Group(); left.position.set(-0.2, 1.3, 0); left.rotation.set(0.05, 0, 0.14); body.add(left);
  add(tube([[0, 0, 0], [0, -0.14, 0.0], [0, -0.26, 0.02], [0, -0.4, 0.05], [0, -0.5, 0.06]], (t) => 0.042 - 0.012 * t + 0.006 * Math.sin(t * 6), 7, (t, a) => S(a, t)), cloth, left);
  bracer(left, [0, -0.32, 0.04], [0, -0.48, 0.06]);
  left.add(handMesh(PAL.leather, cloth, false, PAL.skin, 1.05)).position.set(0, -0.5, 0.065); // fingerless leather gloves
  const arm = new THREE.Group(); arm.position.set(0.2, 1.3, 0.02); arm.rotation.z = -0.35; body.add(arm);
  add(tube([[0, 0, 0], [0, -0.12, 0.0], [0, -0.22, 0.04], [0, -0.3, 0.12], [0, -0.38, 0.2]], (t) => 0.042 - 0.012 * t, 7, (t, a) => S(a, t)), cloth, arm);
  bracer(arm, [0, -0.28, 0.1], [0, -0.38, 0.19]);
  const { staffPivot, staff, crystal, crystalMat, glow } = holdStaff(arm, [0, -0.42, 0.23], materials, glowTex, staffSkin, handMesh(PAL.leather, cloth, true, PAL.skin, 1.05));
  return { root, body, head, arm, staffPivot, crystal, crystalMat, glow, staff, height: 1.75, materials };
}
