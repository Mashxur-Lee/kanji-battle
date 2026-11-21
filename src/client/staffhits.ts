// 0.9.9.9.9.1: what a staff's spell does when it lands, remade — in the colours of the staff that cast it (a Jade
// staff's fire is green, a Blossom staff's branches flower pink, an Abyss staff's ice is deep blue).
//   Verdant — the ground cracks and five gnarled branches burst out of it, lash and curl in on them, leaves opening
//             along them as they grow; when the branches sink back the leaves come loose and fall.
//   Ember   — a ring of fire runs out over the ground, a column of flames roars up round them, embers rise and smoke
//             drifts off.
//   Tide    — water splashes up in a crown, a ring runs out over the ground, and ice shards grow out of them, hold,
//             and shatter.
//   Storm   — forked lightning from the sky, struck twice; the ground is scorched, a shockwave runs out and arcs
//             crawl over them for a moment.
//   Void    — a black hole opens on them: a disc of light spins round a dark core, stars spiral in from far around,
//             the light bends in a ring that closes; it collapses, flashes, and a shockwave throws the stars out.
// The arena (arena3d.ts) calls impact(); step() runs every frame (a paused game stands still: it isn't called).

import * as THREE from 'three';
import { isSword } from './swords3d';

export interface HitDeps {
  scene: THREE.Scene;
  camera: THREE.Camera;
  sparkTex: THREE.Texture;
  lite: () => boolean;
  spark(at: THREE.Vector3, color: THREE.ColorRepresentation, o?: { size?: number; vel?: THREE.Vector3; life?: number; grow?: number; gravity?: number; opacity?: number; solid?: boolean }): void;
  burst(at: THREE.Vector3, color: THREE.ColorRepresentation, n?: number, speed?: number, size?: number): void;
  flash(color: THREE.ColorRepresentation, at: THREE.Vector3, power: number, ms: number): void;
}
export interface HitAt {
  /** where they stand (the ground under them) and their chest */
  ground: THREE.Vector3;
  chest: THREE.Vector3;
  /** how tall they are (world units) */
  height: number;
  /** the staff's gem colour, and its seasonal tint (the gem colour for a classic staff) */
  main: THREE.Color;
  tint: THREE.Color;
  /** a seasonal colour (the bark and smoke take its tint) */
  seasonal: boolean;
  /** at you, in first person: smaller, in front of the camera (nothing grows through it) */
  firstPerson: boolean;
}

const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const ease = (x: number) => 1 - (1 - Math.min(1, Math.max(0, x))) ** 3;
const smooth = (x: number) => { const t = Math.min(1, Math.max(0, x)); return t * t * (3 - 2 * t); };
const back = (x: number) => { const t = Math.min(1, Math.max(0, x)), c = 1.7; return 1 + (c + 1) * (t - 1) ** 3 + c * (t - 1) ** 2; };

// ── textures, drawn once ────────────────────────────────────────────────────────────────────────────────────────
function tex(draw: (g: CanvasRenderingContext2D, s: number) => void, size = 256) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  draw(c.getContext('2d')!, size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
let T: ReturnType<typeof makeTextures> | null = null;
function makeTextures() {
  return {
    /** a soft ring (shockwaves, the ring of fire, the water ring) — white, tinted by the material */
    ring: tex((g, s) => {
      const h = s / 2, grd = g.createRadialGradient(h, h, h * 0.55, h, h, h);
      grd.addColorStop(0, 'rgba(255,255,255,0)'); grd.addColorStop(0.55, 'rgba(255,255,255,.9)'); grd.addColorStop(0.7, 'rgba(255,255,255,.35)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd; g.fillRect(0, 0, s, s);
    }),
    /** the black hole's disc: a bright inner rim, swirling streaks fading outwards, a hole in the middle */
    disk: tex((g, s) => {
      const h = s / 2;
      const grd = g.createRadialGradient(h, h, h * 0.26, h, h, h);
      grd.addColorStop(0, 'rgba(255,255,255,0)'); grd.addColorStop(0.04, 'rgba(255,255,255,1)'); grd.addColorStop(0.22, 'rgba(255,255,255,.55)'); grd.addColorStop(0.6, 'rgba(255,255,255,.14)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd; g.fillRect(0, 0, s, s);
      g.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 70; i++) {
        const r = h * (0.3 + Math.random() * 0.62), a0 = Math.random() * Math.PI * 2, len = 0.4 + Math.random() * 1.2;
        g.strokeStyle = `rgba(255,255,255,${(0.05 + Math.random() * 0.22) * (1 - (r / h - 0.3))})`; g.lineWidth = 1 + Math.random() * 2.5;
        g.beginPath(); g.arc(h, h, r, a0, a0 + len); g.stroke();
      }
    }, 512),
    /** cracked, thrown-up earth (normal blending, dark) */
    crack: tex((g, s) => {
      const h = s / 2;
      const grd = g.createRadialGradient(h, h, 0, h, h, h);
      grd.addColorStop(0, 'rgba(30,18,10,.9)'); grd.addColorStop(0.35, 'rgba(45,28,14,.65)'); grd.addColorStop(0.75, 'rgba(60,40,20,.2)'); grd.addColorStop(1, 'rgba(60,40,20,0)');
      g.fillStyle = grd; g.fillRect(0, 0, s, s);
      g.strokeStyle = 'rgba(12,6,2,.9)'; g.lineCap = 'round';
      for (let i = 0; i < 11; i++) {
        let a = (i / 11) * Math.PI * 2 + Math.random() * 0.4, r = h * 0.12, x = h + Math.cos(a) * r, y = h + Math.sin(a) * r;
        g.lineWidth = 4; g.beginPath(); g.moveTo(x, y);
        while (r < h * (0.65 + Math.random() * 0.3)) { r += 10 + Math.random() * 16; a += rnd(-0.35, 0.35); x = h + Math.cos(a) * r; y = h + Math.sin(a) * r; g.lineTo(x, y); g.lineWidth = Math.max(1, g.lineWidth - 0.5); }
        g.stroke();
      }
      for (let i = 0; i < 26; i++) { g.fillStyle = `rgba(${40 + Math.random() * 40},${24 + Math.random() * 24},${10 + Math.random() * 12},.85)`; g.beginPath(); g.arc(h + rnd(-h, h) * 0.7, h + rnd(-h, h) * 0.7, 2 + Math.random() * 6, 0, Math.PI * 2); g.fill(); }
    }),
    /** a leaf, white (tinted by the material), with its middle vein */
    leaf: tex((g, s) => {
      g.translate(s / 2, s / 2); g.rotate(-0.6);
      g.fillStyle = '#fff'; g.beginPath(); g.moveTo(0, -s * 0.42); g.bezierCurveTo(s * 0.28, -s * 0.2, s * 0.24, s * 0.22, 0, s * 0.4); g.bezierCurveTo(-s * 0.24, s * 0.22, -s * 0.28, -s * 0.2, 0, -s * 0.42); g.fill();
      g.strokeStyle = 'rgba(0,0,0,.28)'; g.lineWidth = s * 0.025; g.beginPath(); g.moveTo(0, -s * 0.36); g.lineTo(0, s * 0.42); g.stroke();
    }, 128),
    /** a tongue of flame: white-hot at the foot, fading up */
    flame: tex((g, s) => {
      const grd = g.createRadialGradient(s / 2, s * 0.72, 0, s / 2, s * 0.6, s * 0.5);
      grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.35, 'rgba(255,255,255,.75)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd; g.beginPath(); g.moveTo(s / 2, 0); g.bezierCurveTo(s * 0.9, s * 0.45, s * 0.85, s, s / 2, s); g.bezierCurveTo(s * 0.15, s, s * 0.1, s * 0.45, s / 2, 0); g.fill();
    }, 128),
    /** a puff of smoke */
    smoke: tex((g, s) => {
      for (let i = 0; i < 7; i++) {
        const x = s / 2 + rnd(-s, s) * 0.16, y = s / 2 + rnd(-s, s) * 0.16, r = s * rnd(0.18, 0.3);
        const grd = g.createRadialGradient(x, y, 0, x, y, r); grd.addColorStop(0, 'rgba(255,255,255,.5)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = grd; g.fillRect(0, 0, s, s);
      }
    }, 128),
  };
}

const SHARD = new THREE.OctahedronGeometry(1, 0);
const CORE = new THREE.SphereGeometry(1, 24, 16);
const DISK = new THREE.RingGeometry(0.35, 1.6, 72, 1);
const FLAT = new THREE.PlaneGeometry(1, 1);

export function createHits(d: HitDeps) {
  T ??= makeTextures();
  const tx = T;
  const { scene } = d;
  type Fx = { t: number; dur: number; step: (t: number, dt: number) => void; end: () => void };
  const live: Fx[] = [];
  const add = (dur: number, step: Fx['step'], end: Fx['end'] = () => {}) => { live.push({ t: 0, dur, step, end }); step(0, 0); };
  const n = (x: number) => Math.max(1, Math.round(d.lite() ? x * 0.5 : x));
  const kill = (...objs: THREE.Object3D[]) => {
    for (const o of objs) {
      scene.remove(o);
      const m = (o as THREE.Mesh).material as THREE.Material | THREE.Material[] | undefined;
      for (const x of Array.isArray(m) ? m : m ? [m] : []) x.dispose();
      const geo = (o as THREE.Mesh).geometry;
      if ((o as THREE.Sprite).isSprite) continue; // (a sprite's quad is shared by every sprite)
      if (geo && geo !== SHARD && geo !== CORE && geo !== DISK && geo !== FLAT) geo.dispose();
    }
  };
  const additive = (map: THREE.Texture, color: THREE.ColorRepresentation, opacity = 1) => new THREE.MeshBasicMaterial({ map, color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  const sprite = (map: THREE.Texture, color: THREE.ColorRepresentation, at: THREE.Vector3, size: number, blending: THREE.Blending = THREE.AdditiveBlending, opacity = 1) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map, color, blending, transparent: true, depthWrite: false, opacity }));
    s.position.copy(at); s.scale.setScalar(size); scene.add(s); return s;
  };
  /** a flat decal on the ground (or a ring), growing and fading */
  function groundMark(at: THREE.Vector3, map: THREE.Texture, color: THREE.ColorRepresentation, size: [number, number], dur: number, normal = false, peak = 1) {
    const mat = normal ? new THREE.MeshBasicMaterial({ map, color, transparent: true, depthWrite: false, opacity: 0, polygonOffset: true, polygonOffsetFactor: -2 }) : additive(map, color, 0);
    const m = new THREE.Mesh(FLAT, mat);
    m.rotation.x = -Math.PI / 2; m.position.set(at.x, 0.03, at.z); m.renderOrder = 2;
    scene.add(m);
    add(dur, (t) => {
      const k = t / dur;
      m.scale.setScalar(size[0] + (size[1] - size[0]) * ease(k * 1.6));
      mat.opacity = peak * (k < 0.12 ? k / 0.12 : 1 - smooth((k - 0.45) / 0.55));
    }, () => kill(m));
  }
  /** a ring facing the camera, running out (a shockwave) */
  function shockwave(at: THREE.Vector3, color: THREE.ColorRepresentation, from: number, to: number, dur: number, opacity = 0.9) {
    const s = sprite(tx.ring, color, at, from, THREE.AdditiveBlending, opacity);
    add(dur, (t) => { const k = t / dur; s.scale.setScalar(from + (to - from) * ease(k)); s.material.opacity = opacity * (1 - k) ** 1.5; }, () => kill(s));
  }

  // ── 0.9.9.9.9.5: a sword's slash — two bright cuts crossing on them (an X), flashing out and fading, sparks of the
  // blade's colour flying off, a ring of light; at you (first person) only the cut across the screen and the sparks ──
  let streakTex: THREE.Texture | null = null;
  const streak = () => streakTex ??= (() => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 32;
    const g = c.getContext('2d')!;
    const grd = g.createLinearGradient(0, 0, 256, 0);
    grd.addColorStop(0, 'rgba(255,255,255,0)'); grd.addColorStop(0.5, 'rgba(255,255,255,1)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.beginPath(); g.moveTo(0, 16); g.quadraticCurveTo(128, 2, 256, 16); g.quadraticCurveTo(128, 30, 0, 16); g.fill();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  function slash(h: HitAt) {
    const col = h.main.clone();
    const cuts = h.firstPerson ? [0.55] : [0.7, -0.7];
    cuts.forEach((ang, i) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.16), additive(streak(), col.clone().lerp(new THREE.Color(0xffffff), 0.45)));
      m.position.copy(h.chest); m.lookAt(d.camera.position); m.rotateZ(ang);
      m.renderOrder = 6; scene.add(m);
      const len = (h.firstPerson ? 1.4 : 1.25) * Math.max(1, h.height / 1.6);
      add(0.42, (t) => {
        const k = Math.max(0, t - i * 0.07) / 0.35;
        m.scale.set(0.1 + len * ease(Math.min(1, k * 2.6)), 1 + 0.6 * k, 1);
        (m.material as THREE.MeshBasicMaterial).opacity = k <= 0 ? 0 : (1 - Math.min(1, k)) ** 1.2;
      }, () => kill(m));
    });
    if (!h.firstPerson) shockwave(h.chest, col, 0.3, 1.8, 0.4, 0.7);
    for (let k = 0; k < n(h.firstPerson ? 18 : 30); k++) d.spark(h.chest.clone().add(new THREE.Vector3(rnd(-0.2, 0.2), rnd(-0.2, 0.2), rnd(-0.1, 0.1))), k % 3 ? col : 0xffffff, { size: rnd(0.03, 0.08), vel: new THREE.Vector3(rnd(-2.6, 2.6), rnd(-0.6, 2.2), rnd(-1, 1)), life: rnd(0.25, 0.55), gravity: -6 });
    d.flash(col, h.chest, 22, 160);
  }

  // ── Verdant ──────────────────────────────────────────────────────────────────────────────────────────────────
  const barkMats = new Map<string, THREE.MeshStandardMaterial>();
  function verdant(h: HitAt) {
    const leafCol = h.main.clone();
    if (h.firstPerson) {
      // (at you: leaves whirl up round the hit and a green flash — branches would grow through the camera)
      for (let k = 0; k < n(26); k++) d.spark(h.chest.clone().add(new THREE.Vector3(rnd(-0.7, 0.7), rnd(-0.7, -0.1), 0)), k % 4 ? leafCol : 0x6a4a2a, { size: rnd(0.05, 0.13), vel: new THREE.Vector3(rnd(-1.2, 1.2), rnd(1, 2.6), rnd(-0.3, 0.3)), life: rnd(0.6, 1), gravity: -4 });
      d.flash(leafCol, h.chest, 30, 220);
      return;
    }
    const bark = h.seasonal ? h.tint.clone().lerp(new THREE.Color(0x3a2a1a), 0.6) : new THREE.Color(0x4a3220);
    const key = bark.getHexString() + leafCol.getHexString();
    let mat = barkMats.get(key);
    if (!mat) { mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88, flatShading: true, emissive: leafCol.clone().multiplyScalar(0.06) }); barkMats.set(key, mat); }
    groundMark(h.ground, tx.crack, 0xffffff, [0.9, 2.6], 1.5, true, 0.85);
    d.flash(leafCol, h.chest, 26, 260);
    const tip0 = bark.clone().lerp(leafCol, 0.35).multiplyScalar(1.25), root = bark.clone().multiplyScalar(0.55);
    const count = n(5), a0 = Math.random() * Math.PI * 2;
    for (let i = 0; i < count; i++) {
      const a = a0 + (i * Math.PI * 2) / count + rnd(-0.25, 0.25);
      const r = rnd(0.7, 1.05);
      const base = new THREE.Vector3(h.ground.x + Math.cos(a) * r, -0.08, h.ground.z + Math.sin(a) * r * 0.85);
      const tip = h.chest.clone().add(new THREE.Vector3(rnd(-0.2, 0.2), rnd(-0.3, 0.25), rnd(-0.15, 0.15)));
      // up out of the ground, bending outwards, then curling in onto them
      const p1 = base.clone().add(new THREE.Vector3(Math.cos(a) * 0.4, 0.6, Math.sin(a) * 0.3));
      const p2 = base.clone().lerp(tip, 0.62).add(new THREE.Vector3(Math.cos(a) * 0.5, 0.6, Math.sin(a) * 0.35));
      const curve = new THREE.CatmullRomCurve3([base, p1, p2, tip]);
      const SEG = 30, RAD = 7;
      const geo = new THREE.TubeGeometry(curve, SEG, 0.075, RAD, false);
      // thick and dark at the root, thin and lighter at the tip, knobbly along the way
      const pos = geo.attributes.position as THREE.BufferAttribute, cols = new Float32Array(pos.count * 3);
      for (let v = 0; v < pos.count; v++) {
        const seg = Math.floor(v / (RAD + 1)) / SEG, c = curve.getPointAt(Math.min(1, seg));
        const k = (1.35 - seg * 1.1) * (1 + 0.12 * Math.sin(seg * 40 + i));
        pos.setXYZ(v, c.x + (pos.getX(v) - c.x) * k - base.x, c.y + (pos.getY(v) - c.y) * k - base.y, c.z + (pos.getZ(v) - c.z) * k - base.z);
        const col = root.clone().lerp(tip0, seg ** 1.4).multiplyScalar(0.85 + Math.random() * 0.3);
        cols[v * 3] = col.r; cols[v * 3 + 1] = col.g; cols[v * 3 + 2] = col.b;
      }
      geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
      geo.computeVertexNormals();
      geo.setDrawRange(0, 0);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(base);
      scene.add(mesh);
      const total = geo.index!.count;
      // the lash: it swings round its root as it strikes, and settles
      const axis = new THREE.Vector3(-Math.sin(a), 0, Math.cos(a)).normalize();
      // leaves opening along it as it grows, falling when it sinks back
      const leaves = Array.from({ length: n(7) }, (_, j) => {
        const u = 0.3 + (j / 7) * 0.65 + rnd(-0.04, 0.04);
        const s = sprite(tx.leaf, leafCol.clone().multiplyScalar(rnd(0.8, 1.15)), curve.getPointAt(u), 0.001, THREE.NormalBlending);
        s.material.rotation = rnd(0, Math.PI * 2);
        return { s, u, size: rnd(0.13, 0.2), off: new THREE.Vector3(rnd(-0.08, 0.08), rnd(-0.04, 0.08), rnd(-0.08, 0.08)), fall: null as THREE.Vector3 | null, spin: rnd(-6, 6) };
      });
      const delay = i * 0.045;
      const q = new THREE.Quaternion(), dur = 1.25;
      add(dur + delay, (t, dt) => {
        const tt = t - delay;
        const grow = back(tt / 0.26), sink = smooth((tt - 0.78) / 0.32);
        const k = Math.max(0, Math.min(1, grow) - sink);
        mesh.geometry.setDrawRange(0, Math.floor((total / 6) * k) * 6);
        const lash = tt > 0 ? 0.16 * Math.sin(tt * 19) * Math.exp(-tt * 4.5) : 0;
        mesh.quaternion.copy(q.setFromAxisAngle(axis, lash));
        mesh.scale.setScalar(tt < 0.26 ? 0.9 + 0.1 * grow : 1);
        for (const l of leaves) {
          if (!l.fall && tt > 0.76) { l.fall = new THREE.Vector3(rnd(-0.5, 0.5), rnd(0.2, 0.8), rnd(-0.5, 0.5)); }
          if (l.fall) {
            l.fall.y -= 2.6 * dt; l.fall.multiplyScalar(0.985);
            l.s.position.addScaledVector(l.fall, dt); l.s.material.rotation += l.spin * dt;
            l.s.material.opacity = Math.max(0, 1 - (tt - 0.76) / (dur - 0.76));
            l.s.position.x += Math.sin(tt * 7 + l.spin) * dt * 0.4;
          } else {
            const open = back((k - l.u) / 0.22);
            l.s.scale.setScalar(Math.max(0.001, l.size * open));
            l.s.position.copy(curve.getPointAt(l.u)).sub(base).applyQuaternion(mesh.quaternion).add(base).add(l.off);
            l.s.material.rotation += Math.sin(tt * 9 + l.spin) * dt * 0.8;
          }
        }
      }, () => { kill(mesh); for (const l of leaves) kill(l.s); });
      // the earth it breaks out of
      for (let k = 0; k < n(9); k++) d.spark(base.clone().setY(0.05), k % 3 ? 0x5a3c22 : leafCol, { size: rnd(0.06, 0.15), vel: new THREE.Vector3(rnd(-0.7, 0.7), rnd(1.2, 2.8), rnd(-0.7, 0.7)), life: rnd(0.45, 0.8), gravity: -7, solid: k % 3 !== 0 });
    }
    // a burst of light and leaves where they meet
    setTimeout(() => { for (let k = 0; k < n(16); k++) d.spark(h.chest.clone(), k % 2 ? leafCol : 0xffffff, { size: rnd(0.05, 0.12), vel: new THREE.Vector3(rnd(-1.4, 1.4), rnd(-0.4, 1.6), rnd(-1, 1)), life: rnd(0.4, 0.7), gravity: -2 }); }, 250);
  }

  // ── Ember ────────────────────────────────────────────────────────────────────────────────────────────────────
  function ember(h: HitAt) {
    const fire = h.main.clone(), hot = fire.clone().lerp(new THREE.Color(0xffffff), 0.55);
    d.flash(fire, h.chest, 55, 320);
    d.burst(h.chest, fire, n(30), 3.4, 0.22);
    if (h.firstPerson) {
      for (let k = 0; k < n(18); k++) d.spark(h.chest.clone().add(new THREE.Vector3(rnd(-0.6, 0.6), rnd(-0.6, 0), 0)), k % 3 ? fire : hot, { size: rnd(0.08, 0.2), vel: new THREE.Vector3(rnd(-0.4, 0.4), rnd(1, 2.4), 0), life: rnd(0.4, 0.8), grow: -0.6 });
      return;
    }
    groundMark(h.ground, tx.ring, fire, [0.3, 3.2], 0.75, false, 0.95);
    groundMark(h.ground, tx.crack, 0x2a1a10, [1, 1.8], 1.6, true, 0.6); // (scorched)
    // the column of flame: tongues rising round them, white-hot at the foot
    const H = h.height;
    for (let k = 0; k < n(14); k++) {
      const a = rnd(0, Math.PI * 2), r = rnd(0.15, 0.55);
      const at = new THREE.Vector3(h.ground.x + Math.cos(a) * r, rnd(0, H * 0.3), h.ground.z + Math.sin(a) * r * 0.7);
      const s = sprite(tx.flame, k % 3 ? fire : hot, at, 0.01);
      const size = rnd(0.5, 1.0) * (0.6 + H * 0.3), rise = rnd(1.2, 2.2), delay = rnd(0, 0.35), life = rnd(0.55, 0.85);
      add(delay + life, (t, dt) => {
        const tt = t - delay;
        if (tt < 0) { s.visible = false; return; }
        s.visible = true;
        const k2 = tt / life;
        s.position.y += rise * dt * (1 - k2 * 0.5);
        s.scale.set(size * 0.6 * (1 - k2 * 0.5), size * (0.3 + back(k2 * 3) * 0.7) * (1 - k2 * 0.4), 1);
        s.material.opacity = (k2 < 0.15 ? k2 / 0.15 : 1 - smooth((k2 - 0.35) / 0.65)) * 0.95;
      }, () => kill(s));
    }
    // embers rising, smoke drifting off
    for (let k = 0; k < n(26); k++) d.spark(h.ground.clone().add(new THREE.Vector3(rnd(-0.6, 0.6), rnd(0.1, H * 0.8), rnd(-0.4, 0.4))), k % 2 ? hot : fire, { size: rnd(0.03, 0.07), vel: new THREE.Vector3(rnd(-0.3, 0.3), rnd(1.2, 2.6), rnd(-0.3, 0.3)), life: rnd(0.8, 1.4), gravity: 0.8 });
    const smokeCol = h.seasonal ? h.tint.clone().lerp(new THREE.Color(0x1a1418), 0.75) : new THREE.Color(0x231a16);
    for (let k = 0; k < n(6); k++) {
      const s = sprite(tx.smoke, smokeCol, h.ground.clone().add(new THREE.Vector3(rnd(-0.4, 0.4), H * rnd(0.5, 0.9), rnd(-0.3, 0.3))), 0.4, THREE.NormalBlending, 0);
      const drift = new THREE.Vector3(rnd(-0.2, 0.2), rnd(0.5, 0.9), rnd(-0.1, 0.1)), delay = 0.2 + k * 0.07;
      add(delay + 1.4, (t, dt) => { const tt = t - delay; if (tt < 0) return; s.position.addScaledVector(drift, dt); s.scale.setScalar(0.4 + tt * 0.9); s.material.opacity = 0.5 * Math.min(1, tt * 4) * (1 - tt / 1.4); }, () => kill(s));
    }
  }

  // ── Tide ─────────────────────────────────────────────────────────────────────────────────────────────────────
  function tide(h: HitAt) {
    const water = h.tint.clone(), deep = h.main.clone();
    d.flash(deep, h.chest, 30, 240);
    // the splash: a crown of drops thrown up and out
    for (let k = 0; k < n(30); k++) {
      const a = (k / 30) * Math.PI * 2 + rnd(-0.1, 0.1), v = rnd(1.4, 2.6);
      d.spark(h.chest.clone().add(new THREE.Vector3(0, -0.15, 0)), k % 3 ? water : 0xffffff, { size: rnd(0.04, 0.1), vel: new THREE.Vector3(Math.cos(a) * v, rnd(1.4, 3), Math.sin(a) * v * 0.6), life: rnd(0.5, 0.9), gravity: -8, solid: k % 4 === 0 });
    }
    d.burst(h.chest, deep, n(16), 2.2, 0.16);
    if (h.firstPerson) { for (let k = 0; k < n(14); k++) d.spark(h.chest.clone().add(new THREE.Vector3(rnd(-0.6, 0.6), rnd(-0.5, 0.4), 0)), 0xffffff, { size: rnd(0.03, 0.07), vel: new THREE.Vector3(0, rnd(-0.6, -0.2), 0), life: rnd(0.6, 1) }); return; }
    groundMark(h.ground, tx.ring, water, [0.4, 3], 0.9, false, 0.85);
    // ice shards grow out of them, hold, and shatter
    const mat = new THREE.MeshStandardMaterial({ color: water.clone().lerp(new THREE.Color(0xffffff), 0.45), emissive: deep, emissiveIntensity: 0.45, roughness: 0.05, metalness: 0.15, transparent: true, opacity: 0.85, flatShading: true });
    const H = h.height;
    const shards = Array.from({ length: n(9) }, () => {
      const a = rnd(0, Math.PI * 2), y = rnd(H * 0.1, H * 0.85);
      const m = new THREE.Mesh(SHARD, mat);
      m.position.set(h.ground.x + Math.cos(a) * rnd(0.12, 0.3), y, h.ground.z + Math.sin(a) * rnd(0.1, 0.24));
      const out = new THREE.Vector3(Math.cos(a), rnd(-0.3, 0.8), Math.sin(a)).normalize();
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), out);
      m.scale.setScalar(0.001);
      scene.add(m);
      return { m, out, len: rnd(0.22, 0.42), w: rnd(0.05, 0.09), delay: rnd(0, 0.12) };
    });
    add(1.0, (t) => {
      for (const s of shards) {
        const k = back((t - s.delay) / 0.18);
        s.m.scale.set(s.w * Math.max(0.01, k), s.len * Math.max(0.01, k), s.w * Math.max(0.01, k));
      }
    }, () => {
      for (const s of shards) {
        const p = s.m.position.clone().addScaledVector(s.out, s.len * 0.5);
        for (let k = 0; k < (d.lite() ? 3 : 6); k++) d.spark(p, k % 2 ? 0xffffff : water, { size: rnd(0.03, 0.07), vel: s.out.clone().multiplyScalar(rnd(0.6, 1.8)).add(new THREE.Vector3(rnd(-0.5, 0.5), rnd(0, 1), rnd(-0.5, 0.5))), life: rnd(0.4, 0.7), gravity: -6, solid: k % 3 === 0 });
        scene.remove(s.m);
      }
      mat.dispose();
    });
    // a cold mist rolls out at their feet
    for (let k = 0; k < n(5); k++) {
      const s = sprite(tx.smoke, water.clone().lerp(new THREE.Color(0xffffff), 0.6), h.ground.clone().add(new THREE.Vector3(rnd(-0.3, 0.3), 0.2, rnd(-0.2, 0.2))), 0.5, THREE.NormalBlending, 0);
      const v = new THREE.Vector3(rnd(-0.6, 0.6), 0.05, rnd(-0.3, 0.3));
      add(1.3, (t, dt) => { s.position.addScaledVector(v, dt); s.scale.setScalar(0.5 + t * 0.9); s.material.opacity = 0.4 * Math.min(1, t * 5) * (1 - t / 1.3); }, () => kill(s));
    }
  }

  // ── Storm ────────────────────────────────────────────────────────────────────────────────────────────────────
  function storm(h: HitAt, lightning: (to: THREE.Vector3, color: THREE.ColorRepresentation, core: THREE.ColorRepresentation) => void) {
    const bolt = h.main.clone().lerp(new THREE.Color(0xffffff), 0.35);
    const head = h.chest.clone().add(new THREE.Vector3(0, h.firstPerson ? 0 : h.height * 0.25, 0));
    lightning(head, bolt, h.main);
    setTimeout(() => lightning(head.clone().add(new THREE.Vector3(rnd(-0.1, 0.1), 0, 0)), bolt, h.main), 110); // (struck twice)
    if (h.firstPerson) return;
    groundMark(h.ground, tx.crack, 0x1a1420, [0.8, 1.6], 1.6, true, 0.7); // (scorched)
    groundMark(h.ground, tx.ring, bolt, [0.3, 3.4], 0.6, false, 1);
    shockwave(h.chest, bolt, 0.3, 2.6, 0.45, 0.7);
    // arcs crawling over them for a moment
    const arcs = Array.from({ length: n(5) }, () => {
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(Array.from({ length: 6 }, () => new THREE.Vector3())), new THREE.LineBasicMaterial({ color: bolt, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      scene.add(line); return line;
    });
    let next = 0;
    add(0.6, (t) => {
      if (t < next) return;
      next = t + 0.05;
      for (const l of arcs) {
        const p = l.geometry.attributes.position as THREE.BufferAttribute;
        let x = h.ground.x + rnd(-0.25, 0.25), y = rnd(0.2, h.height * 0.9), z = h.ground.z + rnd(-0.2, 0.2);
        for (let i = 0; i < 6; i++) { p.setXYZ(i, x, y, z); x += rnd(-0.12, 0.12); y += rnd(-0.12, 0.12); z += rnd(-0.08, 0.08); }
        p.needsUpdate = true;
        (l.material as THREE.LineBasicMaterial).opacity = Math.random() < 0.7 ? 1 - t / 0.6 : 0.1;
      }
    }, () => kill(...arcs));
  }

  // ── Void ─────────────────────────────────────────────────────────────────────────────────────────────────────
  function voidHit(h: HitAt) {
    const c = h.main.clone(), pale = c.clone().lerp(new THREE.Color(0xffffff), 0.5);
    // (at you, in first person, it opens small and to the side, without its dark core: up close it covered the screen)
    const at = h.chest.clone(), S = h.firstPerson ? 0.3 : 1;
    const PULL = 0.62;
    // the dark core, its glow, the disc of light spinning round it, the ring where the light bends
    const core = new THREE.Mesh(CORE, new THREE.MeshBasicMaterial({ color: 0x020008 }));
    core.position.copy(at); core.scale.setScalar(0.01); core.renderOrder = 6; core.visible = !h.firstPerson; scene.add(core);
    const halo = sprite(d.sparkTex, c, at, 0.1); halo.renderOrder = 5;
    const disk = new THREE.Mesh(DISK, additive(tx.disk, c, 0));
    disk.position.copy(at); disk.renderOrder = 7; scene.add(disk);
    const lens = sprite(tx.ring, pale, at, 2.8 * S, THREE.AdditiveBlending, 0); lens.renderOrder = 7;
    // stars spiralling in from far around
    const starMat = new THREE.SpriteMaterial({ map: d.sparkTex, color: pale, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false });
    const starMat2 = new THREE.SpriteMaterial({ map: d.sparkTex, color: c, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false });
    const stars = Array.from({ length: n(64) }, (_, i) => {
      const s = new THREE.Sprite(i % 3 ? starMat2 : starMat);
      const r0 = rnd(1.4, 3.2) * S, a0 = rnd(0, Math.PI * 2), y0 = rnd(-1, 1) * S * 0.8, size = rnd(0.04, 0.1) * (i % 7 ? 1 : 1.8);
      s.scale.setScalar(size); scene.add(s);
      return { s, r0, a0, y0, size, delay: rnd(0, 0.18), w: rnd(5, 9) * (Math.random() < 0.85 ? 1 : -1) };
    });
    d.flash(c, at, 20, PULL * 1000);
    const right = new THREE.Vector3(), up = new THREE.Vector3(), fwd = new THREE.Vector3();
    add(PULL, (t, dt) => {
      const k = t / PULL;
      core.scale.setScalar(Math.max(0.01, 0.34 * S * ease(k * 1.4)));
      halo.scale.setScalar((0.9 + 0.25 * Math.sin(t * 30)) * S * ease(k * 2));
      halo.material.opacity = 0.75;
      // the disc faces you, tipped back like a planet's ring, and turns fast
      disk.quaternion.copy(d.camera.quaternion);
      disk.rotateX(-1.15); disk.rotateZ(t * 9);
      disk.scale.setScalar(S * (0.55 + 0.5 * ease(k * 2.2) - 0.25 * k));
      (disk.material as THREE.MeshBasicMaterial).opacity = Math.min(1, k * 4) * 0.95;
      lens.scale.setScalar((2.8 - 2.3 * ease(k)) * S);
      lens.material.opacity = 0.55 * Math.sin(Math.PI * Math.min(1, k * 1.1));
      d.camera.matrixWorld.extractBasis(right, up, fwd);
      for (const s of stars) {
        const tt = Math.max(0, t - s.delay), u = Math.min(1, tt / (PULL - s.delay));
        const r = s.r0 * (1 - u ** 1.3), a = s.a0 + s.w * tt * (1 + 2 * u);
        s.s.position.copy(at).addScaledVector(right, Math.cos(a) * r).addScaledVector(fwd, Math.sin(a) * r * 0.5).addScaledVector(up, s.y0 * (1 - u) + Math.sin(a) * r * 0.25);
        s.s.scale.setScalar(s.size * (0.6 + 0.8 * u) * (tt > 0 ? 1 : 0.001));
      }
      void dt;
    }, () => {
      kill(lens, halo);
      for (const s of stars) scene.remove(s.s);
      starMat.dispose(); starMat2.dispose();
      // it collapses — a flash, and the shockwave throws the stars back out
      d.flash(pale, at, 90, 180);
      shockwave(at, c, 0.2 * S, 3.6 * S, 0.55, 0.95);
      setTimeout(() => shockwave(at, pale, 0.1 * S, 2.2 * S, 0.45, 0.6), 90);
      d.burst(at, c, n(40), 4.4 * S, 0.18);
      d.spark(at, 0xffffff, { size: 1.1 * S, grow: 6, life: 0.28, opacity: 0.95 });
      for (let k = 0; k < n(22); k++) d.spark(at.clone().add(new THREE.Vector3(rnd(-1, 1), rnd(-0.8, 0.8), rnd(-0.6, 0.6)).multiplyScalar(S)), k % 2 ? c : pale, { size: rnd(0.03, 0.07), vel: new THREE.Vector3(rnd(-0.2, 0.2), rnd(0.05, 0.4), rnd(-0.2, 0.2)), life: rnd(1, 1.6) }); // (motes linger)
      const dm = disk.material as THREE.MeshBasicMaterial;
      add(0.16, (t) => { const k = t / 0.16; core.scale.setScalar(Math.max(0.01, 0.34 * S * (1 - k))); disk.scale.multiplyScalar(0.8); dm.opacity = 0.9 * (1 - k); }, () => kill(core, disk));
    });
  }

  return {
    impact(kind: string, h: HitAt, lightning: (to: THREE.Vector3, color: THREE.ColorRepresentation, core: THREE.ColorRepresentation) => void) {
      if (isSword(kind)) slash(h);
      else if (kind === 'verdant') verdant(h);
      else if (kind === 'ember') ember(h);
      else if (kind === 'tide') tide(h);
      else if (kind === 'storm') storm(h, lightning);
      else if (kind === 'void') voidHit(h);
    },
    step(dt: number) {
      for (let i = live.length - 1; i >= 0; i--) {
        const f = live[i];
        f.t += dt;
        if (f.t >= f.dur) { live.splice(i, 1); f.end(); } else f.step(f.t, dt);
      }
    },
    /** how many effects are running (for the tests) */
    get running() { return live.length; },
  };
}
