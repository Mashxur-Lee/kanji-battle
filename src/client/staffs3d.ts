// The magic staffs (skins), built from simple shapes like the characters. One staff, five looks:
//   Verdant (vines and leaves) · Ember (obsidian with lava veins and flame prongs) · Tide (crystal spiral and
//   a wave crescent) · Storm (rune rings, orbiting shards, a spike) · Void (silver ribbons, two orbiting rings,
//   stars).
// The gem keeps the same shape on every staff; only its colour changes. Origin = where the hand holds it;
// the staff points up (+y) and the gem sits at GEM_Y.

import * as THREE from 'three';
import { staffOf } from '../shared/progress';

export const GEM_Y = 1.13;

export interface Staff {
  group: THREE.Group;
  gem: THREE.Mesh;
  gemMat: THREE.MeshStandardMaterial;
  glow: THREE.Sprite;
  color: THREE.Color; // the gem colour
  /** every material except the gem (characters tint them when hurt / frozen) */
  materials: THREE.MeshStandardMaterial[];
  /** moving parts: rings turn, shards and droplets orbit, stars twinkle */
  update(time: number, dt: number, charge: number): void;
}

export function buildStaff(id: string | null | undefined, glowTex: THREE.Texture): Staff {
  const skin = staffOf(id);
  const group = new THREE.Group();
  const materials: THREE.MeshStandardMaterial[] = [];
  const mat = (color: number, o: { metal?: number; rough?: number; emissive?: number; ei?: number; opacity?: number } = {}) => {
    const m = new THREE.MeshStandardMaterial({
      color, metalness: o.metal ?? 0.05, roughness: o.rough ?? 0.75, flatShading: true,
      emissive: o.emissive ?? 0x000000, emissiveIntensity: o.ei ?? 1, transparent: true, opacity: o.opacity ?? 1,
    });
    materials.push(m);
    return m;
  };
  const add = (g: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0, parent: THREE.Object3D = group) => {
    const o = new THREE.Mesh(g, m); o.position.set(x, y, z); parent.add(o); return o;
  };
  /** a spiral wrapped around the shaft */
  const helix = (r: number, y0: number, y1: number, turns: number, tube: number, m: THREE.Material, phase = 0) => {
    const pts: THREE.Vector3[] = [];
    const n = Math.ceil(turns * 16);
    for (let i = 0; i <= n; i++) {
      const t = i / n, a = phase + t * turns * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * r, y0 + (y1 - y0) * t, Math.sin(a) * r));
    }
    return add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), n * 2, tube, 5), m);
  };
  /** a curved prong / branch through the given points */
  const prong = (pts: Array<[number, number, number]>, r: number, m: THREE.Material) =>
    add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p))), 14, r, 5), m);
  const around = (n: number, fn: (a: number, i: number) => void) => { for (let i = 0; i < n; i++) fn((i / n) * Math.PI * 2, i); };

  const color = new THREE.Color(skin.gem);
  const spin: Array<{ o: THREE.Object3D; axis: 'x' | 'y' | 'z'; speed: number }> = [];
  const orbit: Array<{ o: THREE.Object3D; r: number; y: number; speed: number; phase: number; bob: number }> = [];
  const stars: THREE.Sprite[] = [];
  const sprite = (c: number, size: number, opacity = 0.9) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: c, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity }));
    s.scale.setScalar(size);
    return s;
  };

  switch (skin.id) {
    case 'verdant': {
      const wood = mat(0x6b4a2a, { rough: 0.95 }), vine = mat(0x3f8f34), leaf = mat(0x6ad04e, { rough: 0.6 });
      add(new THREE.CylinderGeometry(0.03, 0.042, 1.85, 7), wood, 0, 0.08, 0);
      for (const y of [-0.45, 0.2, 0.62]) add(new THREE.SphereGeometry(0.045, 6, 4), wood, 0.01, y, 0).scale.set(1, 0.7, 1); // knots
      helix(0.042, -0.7, 0.98, 3.2, 0.01, vine);
      for (let i = 0; i < 9; i++) {
        const y = -0.55 + i * 0.19, a = i * 2.1;
        const l = add(new THREE.OctahedronGeometry(0.05, 0), leaf, Math.cos(a) * 0.075, y, Math.sin(a) * 0.075);
        l.scale.set(0.35, 0.12, 1); l.rotation.set(0.4, -a, 0.5);
      }
      // three branches curl up around the gem
      around(3, (a) => {
        const c = Math.cos(a), s = Math.sin(a);
        prong([[0, 0.94, 0], [c * 0.1, 1.04, s * 0.1], [c * 0.13, 1.17, s * 0.13], [c * 0.06, 1.3, s * 0.06]], 0.017, wood);
        const l = add(new THREE.OctahedronGeometry(0.045, 0), leaf, c * 0.15, 1.12, s * 0.15); l.scale.set(0.3, 0.12, 1); l.rotation.set(0.3, -a, 0.9);
      });
      break;
    }
    case 'ember': {
      const rock = mat(0x2a1c18, { rough: 0.9 }), lava = mat(0xff5a1a, { emissive: 0xff4a10, ei: 1.6 }), fire = mat(0xff8a2a, { emissive: 0xff5a10, ei: 1.3, rough: 0.5 });
      add(new THREE.CylinderGeometry(0.032, 0.04, 1.85, 6), rock, 0, 0.08, 0);
      helix(0.036, -0.75, 0.95, 4, 0.008, lava);
      helix(0.036, -0.75, 0.95, 4, 0.008, lava, Math.PI);
      add(new THREE.ConeGeometry(0.04, 0.16, 6), rock, 0, -0.9, 0).rotation.x = Math.PI; // spiked foot
      add(new THREE.TorusGeometry(0.07, 0.022, 5, 10), rock, 0, 0.98, 0).rotation.x = Math.PI / 2;
      // flame-shaped prongs curling up around the gem
      around(5, (a, i) => {
        const c = Math.cos(a), s = Math.sin(a), h = i % 2 ? 0.2 : 0.3;
        prong([[c * 0.06, 0.98, s * 0.06], [c * 0.12, 1.08, s * 0.12], [c * 0.1, 1.08 + h * 0.6, s * 0.1], [c * 0.03, 1.08 + h, s * 0.03]], 0.014, i % 2 ? rock : fire);
      });
      const tip = add(new THREE.ConeGeometry(0.035, 0.22, 5), fire, 0, 1.36, 0); spin.push({ o: tip, axis: 'y', speed: 1 });
      break;
    }
    case 'tide': {
      const steel = mat(0x3a4250, { metal: 0.3, rough: 0.45 }), silver = mat(0xc8d4e4, { metal: 0.3, rough: 0.35 });
      const crystal = mat(0x6fd0ff, { emissive: 0x1f8fff, ei: 0.9, rough: 0.15, opacity: 0.85 });
      add(new THREE.CylinderGeometry(0.026, 0.034, 1.85, 8), steel, 0, 0.08, 0);
      helix(0.04, -0.7, 0.95, 3, 0.011, silver);
      helix(0.04, -0.7, 0.95, 3, 0.008, crystal, Math.PI);
      const foot = add(new THREE.OctahedronGeometry(0.05, 0), crystal, 0, -0.95, 0); foot.scale.set(0.8, 3, 0.8);
      // a wave crescent curling around the gem
      const wave = add(new THREE.TorusGeometry(0.15, 0.028, 6, 22, Math.PI * 1.45), crystal, 0, GEM_Y, 0);
      wave.rotation.set(0, Math.PI / 2, -0.4);
      const wave2 = add(new THREE.TorusGeometry(0.1, 0.016, 5, 16, Math.PI * 1.2), silver, 0, GEM_Y - 0.03, 0);
      wave2.rotation.set(0, Math.PI / 2, 2.4);
      add(new THREE.ConeGeometry(0.04, 0.12, 6), silver, 0, 0.98, 0).rotation.x = Math.PI;
      for (let i = 0; i < 5; i++) { // droplets
        const d = add(new THREE.SphereGeometry(0.016, 6, 4), crystal);
        orbit.push({ o: d, r: 0.2 + (i % 2) * 0.05, y: GEM_Y + 0.05 - i * 0.04, speed: 1.3 + i * 0.2, phase: i * 1.3, bob: 0.04 });
      }
      break;
    }
    case 'storm': {
      const dark = mat(0x2a2440, { metal: 0.3, rough: 0.5 }), steel = mat(0x8c86a8, { metal: 0.3, rough: 0.4 });
      const rune = mat(0xb26bff, { emissive: 0x8a3cff, ei: 1.5 }), shard = mat(0xc89aff, { emissive: 0x8a3cff, ei: 1.1, rough: 0.2 });
      add(new THREE.CylinderGeometry(0.027, 0.036, 1.85, 6), dark, 0, 0.08, 0);
      helix(0.034, -0.7, 0.95, 5, 0.007, rune);
      for (const y of [-0.55, -0.1, 0.35, 0.8]) add(new THREE.TorusGeometry(0.04, 0.01, 4, 10), steel, 0, y, 0).rotation.x = Math.PI / 2;
      const foot = add(new THREE.OctahedronGeometry(0.045, 0), shard, 0, -0.93, 0); foot.scale.set(0.8, 2.6, 0.8);
      around(4, (a) => { const c = Math.cos(a), s = Math.sin(a); prong([[c * 0.03, 0.95, s * 0.03], [c * 0.11, 1.05, s * 0.11], [c * 0.09, 1.2, s * 0.09], [c * 0.02, 1.32, s * 0.02]], 0.011, steel); });
      const spike = add(new THREE.ConeGeometry(0.03, 0.36, 4), steel, 0, 1.5, 0);
      spin.push({ o: spike, axis: 'y', speed: 0.6 });
      const ring = new THREE.Group(); ring.position.y = GEM_Y; group.add(ring);
      add(new THREE.TorusGeometry(0.2, 0.01, 4, 28), steel, 0, 0, 0, ring).rotation.x = 1.2;
      spin.push({ o: ring, axis: 'y', speed: 1.4 });
      for (let i = 0; i < 3; i++) {
        const sh = add(new THREE.OctahedronGeometry(0.03, 0), shard); sh.scale.set(0.6, 2, 0.6);
        orbit.push({ o: sh, r: 0.24, y: GEM_Y, speed: 1.8, phase: (i / 3) * Math.PI * 2, bob: 0.06 });
      }
      break;
    }
    case 'void': {
      const silver = mat(0xd4dae8, { metal: 0.35, rough: 0.3 }), steel = mat(0x5a6688, { metal: 0.3, rough: 0.4 });
      const ice = mat(0x8fc8ff, { emissive: 0x3a7dff, ei: 1.4, rough: 0.15, opacity: 0.9 });
      add(new THREE.CylinderGeometry(0.026, 0.034, 1.85, 8), steel, 0, 0.08, 0);
      helix(0.045, -0.75, 1.0, 2.6, 0.012, silver);
      helix(0.045, -0.75, 1.0, 2.6, 0.012, silver, Math.PI);
      helix(0.03, -0.6, 0.9, 6, 0.005, ice, 0.7);
      const foot = add(new THREE.OctahedronGeometry(0.055, 0), ice, 0, -0.97, 0); foot.scale.set(0.8, 3.2, 0.8);
      around(3, (a) => { const f = add(new THREE.OctahedronGeometry(0.03, 0), silver, Math.cos(a) * 0.05, -0.86, Math.sin(a) * 0.05); f.scale.set(0.6, 1.8, 0.6); f.rotation.z = Math.cos(a) * 0.6; });
      around(3, (a) => { const c = Math.cos(a), s = Math.sin(a); prong([[c * 0.03, 0.97, s * 0.03], [c * 0.12, 1.06, s * 0.12], [c * 0.1, 1.22, s * 0.1], [c * 0.02, 1.34, s * 0.02]], 0.012, silver); });
      const spike = add(new THREE.OctahedronGeometry(0.045, 0), ice, 0, 1.55, 0); spike.scale.set(0.7, 4.2, 0.7);
      spin.push({ o: spike, axis: 'y', speed: 0.8 });
      for (const [r, tilt, speed] of [[0.22, 1.1, 1.2], [0.27, -0.8, -0.9]] as const) {
        const g = new THREE.Group(); g.position.y = GEM_Y; group.add(g);
        const t = add(new THREE.TorusGeometry(r, 0.009, 4, 32), r < 0.25 ? silver : ice, 0, 0, 0, g); t.rotation.x = tilt;
        spin.push({ o: g, axis: 'y', speed });
      }
      for (let i = 0; i < 7; i++) {
        const s = sprite(0xbfe0ff, 0.06 + Math.random() * 0.05);
        group.add(s); stars.push(s);
        orbit.push({ o: s, r: 0.18 + Math.random() * 0.18, y: GEM_Y + (Math.random() - 0.4) * 0.4, speed: 0.4 + Math.random() * 0.6, phase: Math.random() * 6, bob: 0.05 });
      }
      break;
    }
  }

  // the gem: the same shape on every staff, in the staff's colour
  const gemMat = new THREE.MeshStandardMaterial({ color: skin.id === 'void' ? 0x223a9a : color, emissive: color, emissiveIntensity: 1.2, roughness: 0.15, metalness: 0.1, flatShading: true });
  const gem = add(new THREE.OctahedronGeometry(0.085, 0), gemMat, 0, GEM_Y, 0);
  gem.scale.set(1, 1.5, 1);
  const glow = sprite(color.getHex(), 0.45, 0.5);
  glow.position.y = GEM_Y;
  group.add(glow);

  return {
    group, gem, gemMat, glow, color, materials,
    update(time, dt, charge) {
      const k = 1 + charge * 2.5;
      for (const s of spin) s.o.rotation[s.axis] += s.speed * dt * k;
      for (const o of orbit) {
        const a = o.phase + time * o.speed * k;
        o.o.position.set(Math.cos(a) * o.r, o.y + Math.sin(a * 1.7) * o.bob, Math.sin(a) * o.r);
        o.o.rotation.y = -a;
      }
      stars.forEach((s, i) => { (s.material as THREE.SpriteMaterial).opacity = 0.35 + 0.65 * Math.abs(Math.sin(time * 2.3 + i * 1.7)); });
    },
  };
}
