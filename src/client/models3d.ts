// Low-poly 3D characters for the arena, each holding a magic staff. Built from simple shapes (no model
// files), flat-shaded so they read like a stylised 3D version of the pixel characters:
//   wizard (pointed hat, beard) · witch (crooked hat, green skin) · goblin (big ears) ·
//   knight (helmet with plume) · kid (apprentice: cap) · human (adventurer: hair, leather)
// The right arm is on a pivot at the shoulder, so the game can raise it to cast and wiggle it while you write.

import * as THREE from 'three';

export type CharKind = 'wizard' | 'witch' | 'goblin' | 'knight' | 'kid' | 'human';
export type Side = 'me' | 'opp' | 'ally';

export interface Character {
  root: THREE.Group; // stands on the floor at y = 0, faces +z
  body: THREE.Group; // everything above the feet (bobs, leans)
  arm: THREE.Group; // right arm pivot (shoulder), holds the staff
  crystal: THREE.Mesh;
  crystalMat: THREE.MeshStandardMaterial;
  glow: THREE.Sprite;
  height: number;
  materials: Array<{ mat: THREE.MeshStandardMaterial; color: THREE.Color; emissive: THREE.Color }>;
}

const ROBES: Record<Side, number> = { me: 0x3d5ad6, opp: 0xc23a4c, ally: 0x2f9f74 };

export function buildCharacter(kind: CharKind, side: Side, glowTex: THREE.Texture): Character {
  const materials: Character['materials'] = [];
  const mat = (color: number, o: { metal?: number; rough?: number; emissive?: number; ei?: number } = {}) => {
    // transparent from the start (opacity 1), so Frost can fade the model without a shader recompile hitch
    const m = new THREE.MeshStandardMaterial({ color, metalness: o.metal ?? 0.05, roughness: o.rough ?? 0.8, flatShading: true, emissive: o.emissive ?? 0x000000, emissiveIntensity: o.ei ?? 1, transparent: true });
    materials.push({ mat: m, color: m.color.clone(), emissive: m.emissive.clone() });
    return m;
  };
  const mesh = (g: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); return o; };

  const small = kind === 'goblin' || kind === 'kid';
  const s = small ? 0.78 : 1; // overall scale
  const skin = mat(kind === 'goblin' ? 0x6fbf4a : kind === 'witch' ? 0x9ad07a : 0xf0c49a);
  const dark = mat(0x1c1726);
  const robeColor = kind === 'witch' ? 0x5b2a86 : kind === 'goblin' ? 0x7a5a2e : kind === 'knight' ? 0x2f4f9e : kind === 'kid' ? 0xd8662f : kind === 'human' ? 0x8a5a33 : ROBES[side];
  const robe = mat(robeColor);
  const trim = mat(kind === 'witch' ? 0x9b59ff : 0xffd479, { metal: 0.2, rough: 0.4 });
  const metal = mat(0xc4ccd8, { metal: 0.3, rough: 0.45 }); // (no reflections in the scene: real metalness would look black)

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  // ── lower body ──
  if (kind === 'wizard' || kind === 'witch') {
    body.add(mesh(new THREE.CylinderGeometry(0.27, 0.46, 1.0, 9), robe, 0, 0.5, 0)); // long robe
    body.add(mesh(new THREE.CylinderGeometry(0.47, 0.47, 0.05, 9), trim, 0, 0.03, 0));
  } else {
    const legM = kind === 'knight' ? metal : dark;
    body.add(mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.6, 6), legM, -0.12, 0.3, 0));
    body.add(mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.6, 6), legM, 0.12, 0.3, 0));
    body.add(mesh(new THREE.BoxGeometry(0.16, 0.08, 0.26), dark, -0.12, 0.04, 0.05));
    body.add(mesh(new THREE.BoxGeometry(0.16, 0.08, 0.26), dark, 0.12, 0.04, 0.05));
    body.add(mesh(new THREE.CylinderGeometry(0.3, 0.34, 0.32, 8), robe, 0, 0.72, 0)); // tunic skirt
  }
  // ── torso ──
  const torsoM = kind === 'knight' ? metal : robe;
  body.add(mesh(new THREE.CylinderGeometry(0.24, 0.29, 0.55, 8), torsoM, 0, 1.12, 0));
  body.add(mesh(new THREE.TorusGeometry(0.26, 0.035, 5, 12), trim, 0, 0.88, 0).rotateX(Math.PI / 2));
  if (kind === 'knight') {
    const tabard = mesh(new THREE.BoxGeometry(0.34, 0.6, 0.04), robe, 0, 1.0, 0.27); body.add(tabard);
    body.add(mesh(new THREE.SphereGeometry(0.13, 6, 4), metal, -0.3, 1.36, 0)); // pauldrons
    body.add(mesh(new THREE.SphereGeometry(0.13, 6, 4), metal, 0.3, 1.36, 0));
  }
  if (kind === 'human') body.add(mesh(new THREE.BoxGeometry(0.5, 0.06, 0.06), dark, 0, 1.2, 0.2).rotateZ(0.7)); // strap

  // ── head ──
  const head = new THREE.Group();
  head.position.set(0, 1.58, 0);
  body.add(head);
  head.add(mesh(new THREE.IcosahedronGeometry(0.2, 1), skin));
  for (const x of [-0.07, 0.07]) head.add(mesh(new THREE.SphereGeometry(0.028, 6, 4), dark, x, 0.02, 0.18));
  if (kind === 'wizard') {
    const white = mat(0xeeeef4);
    head.add(mesh(new THREE.ConeGeometry(0.17, 0.42, 7), white, 0, -0.2, 0.1).rotateX(Math.PI)); // beard
    head.add(mesh(new THREE.BoxGeometry(0.4, 0.34, 0.14), white, 0, -0.06, -0.13)); // long hair (seen from behind)
    head.add(mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.04, 12), robe, 0, 0.15, 0)); // brim
    const hat = mesh(new THREE.ConeGeometry(0.24, 0.62, 9), robe, 0, 0.47, 0); hat.rotation.z = 0.12; head.add(hat);
    head.add(mesh(new THREE.TorusGeometry(0.21, 0.025, 5, 12), trim, 0, 0.2, 0).rotateX(Math.PI / 2));
  } else if (kind === 'witch') {
    const hatM = mat(0x2a1f3d);
    head.add(mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.03, 12), hatM, 0, 0.14, 0));
    const hat = mesh(new THREE.ConeGeometry(0.22, 0.7, 8), hatM, 0.04, 0.5, -0.03); hat.rotation.set(-0.25, 0, 0.3); head.add(hat);
    head.add(mesh(new THREE.TorusGeometry(0.2, 0.03, 5, 12), trim, 0, 0.19, 0).rotateX(Math.PI / 2));
    head.add(mesh(new THREE.ConeGeometry(0.035, 0.12, 5), skin, 0, -0.02, 0.22).rotateX(Math.PI / 2)); // nose
    head.add(mesh(new THREE.BoxGeometry(0.42, 0.3, 0.12), mat(0x3a2a4a), 0, -0.08, -0.14)); // hair
  } else if (kind === 'goblin') {
    for (const sx of [-1, 1]) { const ear = mesh(new THREE.ConeGeometry(0.07, 0.34, 5), skin, sx * 0.24, 0.05, 0); ear.rotation.z = -sx * 1.25; head.add(ear); }
    head.add(mesh(new THREE.ConeGeometry(0.05, 0.14, 5), skin, 0, -0.02, 0.22).rotateX(Math.PI / 2));
  } else if (kind === 'knight') {
    head.add(mesh(new THREE.IcosahedronGeometry(0.235, 1), metal));
    head.add(mesh(new THREE.BoxGeometry(0.3, 0.05, 0.05), dark, 0, 0.02, 0.21)); // visor slit
    head.add(mesh(new THREE.ConeGeometry(0.06, 0.4, 6), mat(0xd64545), 0, 0.3, -0.06).rotateX(-0.5)); // plume
  } else if (kind === 'kid') {
    head.add(mesh(new THREE.BoxGeometry(0.38, 0.2, 0.12), mat(0x5a3a22), 0, -0.02, -0.13));
    head.add(mesh(new THREE.SphereGeometry(0.215, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x3d7bd8), 0, 0.03, 0));
    head.add(mesh(new THREE.BoxGeometry(0.2, 0.025, 0.16), mat(0x3d7bd8), 0, 0.05, 0.2));
  } else if (kind === 'human') {
    const hair = mat(0x5a3a22);
    head.add(mesh(new THREE.SphereGeometry(0.215, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2.2), hair, 0, 0.02, -0.01));
    head.add(mesh(new THREE.BoxGeometry(0.4, 0.22, 0.12), hair, 0, -0.04, -0.13));
  }

  // ── arms: left hangs, right (pivot) holds the staff ──
  const sleeveM = kind === 'knight' ? metal : robe;
  const left = new THREE.Group(); left.position.set(-0.3, 1.34, 0); left.rotation.z = 0.25; body.add(left);
  left.add(mesh(new THREE.CylinderGeometry(0.075, 0.1, 0.55, 6), sleeveM, 0, -0.27, 0));
  left.add(mesh(new THREE.SphereGeometry(0.07, 6, 4), skin, 0, -0.58, 0));
  const arm = new THREE.Group(); arm.position.set(0.3, 1.34, 0.02); arm.rotation.z = -0.35; body.add(arm);
  arm.add(mesh(new THREE.CylinderGeometry(0.075, 0.1, 0.5, 6), sleeveM, 0, -0.22, 0.05).rotateX(-0.5));
  const hand = mesh(new THREE.SphereGeometry(0.07, 6, 4), skin, 0, -0.42, 0.22); arm.add(hand);
  // the staff: through the hand, leaning out a little so its crystal shows beside the head
  const staff = new THREE.Group(); staff.position.set(0, -0.42, 0.22); staff.rotation.z = 0.28; arm.add(staff);
  staff.add(mesh(new THREE.CylinderGeometry(0.025, 0.035, 2.0, 7), mat(0x6b4423), 0, 0.32, 0));
  staff.add(mesh(new THREE.TorusGeometry(0.07, 0.016, 5, 12), trim, 0, 1.33, 0));
  const crystalColor = side === 'opp' ? 0xff6b8a : side === 'ally' ? 0x6dffb0 : 0xb48cff;
  const crystalMat = new THREE.MeshStandardMaterial({ color: crystalColor, emissive: crystalColor, emissiveIntensity: 1.2, roughness: 0.15, metalness: 0.1, flatShading: true });
  const crystal = mesh(new THREE.OctahedronGeometry(0.1, 0), crystalMat, 0, 1.45, 0); crystal.scale.set(1, 1.5, 1);
  staff.add(crystal);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: crystalColor, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.5 }));
  glow.position.copy(crystal.position); glow.scale.setScalar(0.45);
  staff.add(glow);

  root.scale.setScalar(s);
  return { root, body, arm, crystal, crystalMat, glow, height: 1.95 * s, materials };
}

/** Which model a player gets: Deck Duel heroes, or the level avatar in the other modes. */
export function kindFor(character: string): CharKind {
  return (['wizard', 'witch', 'goblin', 'knight', 'kid', 'human'] as const).find((k) => k === character) ?? 'wizard';
}
