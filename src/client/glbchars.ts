// 0.9.9.9.5.2: the characters (Goblin, Knight, Witch, Wizard) and the Black Dragon as rigged models
// (public/models/*.glb, made for the game). They replace the shapes built in code (wizard3d.ts …), which stay as
// the fallback while a model loads or if it can't.
//
// The models stand in their rest pose with every bone at rest = no rotation, so a bone turns just like the old
// models' groups did. Where the game drives a part (the staff arm, the free arm, the head, the hips and knees) a
// pivot group is put in above the bone at its joint: the game turns the group, the bone (and the skin) follows.
// The arms hang straight down when their pivot is at rest — the game's own rest angle (ARM_REST) then swings them
// out, as before. The staff is held where the staff hand is (the model's left hand: +x, as before).

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import type { Character, Side } from './models3d';
import { ARM_REST, EYE_COLORS, glowEyes, holdStaff, type Leg, type V3 } from './charkit';

export type GlbKind = 'goblin' | 'knight' | 'witch' | 'wizard' | 'dragon';
const FILES: Record<GlbKind, string> = {
  goblin: '/models/goblin.glb', knight: '/models/knight.glb', witch: '/models/witch.glb', wizard: '/models/wizard.glb', dragon: '/models/dragon.glb',
};
interface Template { scene: THREE.Object3D; height: number }
const templates = new Map<GlbKind, Template>();
const loading = new Map<GlbKind, Promise<boolean>>();
const listeners = new Set<(k: GlbKind) => void>();

/** a model finished loading (the arena swaps the stand-in for it) */
export function onModelLoaded(fn: (k: GlbKind) => void) { listeners.add(fn); return () => listeners.delete(fn); }
export const modelReady = (k: GlbKind) => templates.has(k);

const v = (location.search.match(/[?&]v=([^&]+)/)?.[1] ?? document.documentElement.dataset.v ?? '');
export function loadModel(k: GlbKind): Promise<boolean> {
  if (templates.has(k)) return Promise.resolve(true);
  let p = loading.get(k);
  if (!p) {
    p = new GLTFLoader().loadAsync(`${FILES[k]}${v ? `?v=${encodeURIComponent(v)}` : ''}`).then((gltf) => {
      const scene = gltf.scene;
      scene.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(scene);
      templates.set(k, { scene, height: box.max.y });
      for (const fn of listeners) fn(k);
      return true;
    }).catch(() => { loading.delete(k); return false; });
    loading.set(k, p);
  }
  return p;
}
/** all the characters (the dragon too, with `boss`) — started when the arena bundle loads */
export function preloadModels(boss = true) {
  const kinds: GlbKind[] = ['goblin', 'knight', 'witch', 'wizard'];
  if (boss) kinds.push('dragon');
  return Promise.all(kinds.map(loadModel));
}

/** bones by name (the loader turns "UpperArm.L" into "UpperArm_L"; a clash with a mesh's name adds "_1") */
function boneFinder(root: THREE.Object3D) {
  const bones = new Map<string, THREE.Bone>();
  root.traverse((o) => { if ((o as THREE.Bone).isBone) bones.set(o.name, o as THREE.Bone); });
  return (name: string): THREE.Bone => {
    const s = THREE.PropertyBinding.sanitizeNodeName(name);
    const b = bones.get(s) ?? [...bones.values()].find((x) => x.name.startsWith(`${s}_`));
    if (!b) throw new Error(`model: no bone ${name}`);
    return b;
  };
}

/** a group put in above the bone, at its joint: turning the group turns the bone and everything below it */
function pivotAbove(b: THREE.Object3D): THREE.Group {
  const g = new THREE.Group();
  g.name = `${b.name}:pivot`;
  b.parent!.add(g);
  g.position.copy(b.position); g.quaternion.copy(b.quaternion); g.scale.copy(b.scale);
  b.position.set(0, 0, 0); b.quaternion.identity(); b.scale.set(1, 1, 1);
  g.add(b);
  return g;
}
/** the bone turned so its child (the next joint) is straight below it */
function hangDown(b: THREE.Object3D, child: THREE.Object3D, k = 1) {
  const dir = child.position.clone().normalize();
  const q = new THREE.Quaternion().setFromUnitVectors(dir, new THREE.Vector3(0, -1, 0));
  b.quaternion.copy(new THREE.Quaternion().slerp(q, k));
}

/** the model's own materials (each fighter tints and fades its own), a little self-light so dark cloth reads at night */
function ownMaterials(scene: THREE.Object3D, tweak: (name: string, m: THREE.MeshStandardMaterial) => void) {
  const materials: Character['materials'] = [];
  const copies = new Map<THREE.Material, THREE.MeshStandardMaterial>();
  scene.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    mesh.frustumCulled = false; // (posed, a skinned mesh can leave the box it was measured in)
    mesh.geometry.userData.shared = true; // (shared by every copy: the arena must not dispose of it)
    const src = mesh.material as THREE.MeshStandardMaterial;
    let m = copies.get(src);
    if (!m) {
      m = src.clone();
      m.transparent = true; // (Frost fades a model: transparent from the start, no shader recompile then)
      tweak(src.name, m);
      copies.set(src, m);
      materials.push({ mat: m, color: m.color.clone(), emissive: m.emissive.clone() });
    }
    mesh.material = m;
  });
  return materials;
}
const lift = (m: THREE.MeshStandardMaterial, k: number) => { m.emissive.copy(m.color).multiplyScalar(k).add(new THREE.Color(0x0c0a14)); };

/** where a mesh's vertices are (bind pose, model space): the centres of its left and right halves */
function eyeSpots(scene: THREE.Object3D, names: string[], top = 0): THREE.Vector3[] {
  for (const n of names) {
    const meshes: THREE.Mesh[] = [];
    scene.traverse((o) => { if ((o as THREE.Mesh).isMesh && (((o as THREE.Mesh).material as THREE.Material).name === n || o.name === n)) meshes.push(o as THREE.Mesh); });
    if (!meshes.length) continue;
    const sides = [new THREE.Vector3(), new THREE.Vector3()], count = [0, 0];
    // (`top`: only the highest band of it — the knight's visor has its eye slit above the breathing holes)
    let maxY = -Infinity;
    if (top) for (const m of meshes) { const pos = m.geometry.getAttribute('position'); for (let i = 0; i < pos.count; i++) maxY = Math.max(maxY, pos.getY(i)); }
    for (const m of meshes) {
      const pos = m.geometry.getAttribute('position');
      for (let i = 0; i < pos.count; i++) {
        if (top && pos.getY(i) < maxY - top) continue;
        const x = pos.getX(i), s = x < 0 ? 0 : 1;
        sides[s].add(new THREE.Vector3(x, pos.getY(i), pos.getZ(i))); count[s]++;
      }
    }
    if (!count[0] || !count[1]) continue;
    return sides.map((p, i) => p.divideScalar(count[i]));
  }
  return [];
}

/**
 * 0.9.9.9.6.3: the middle of a hand — where the vertices that move with the hand bone are, in that bone's own space
 * (bind pose). Null if no vertex follows it.
 */
function palmOf(scene: THREE.Object3D, hand: THREE.Object3D): THREE.Vector3 | null {
  const sum = new THREE.Vector3(), v = new THREE.Vector3();
  let n = 0;
  scene.traverse((o) => {
    const m = o as THREE.SkinnedMesh;
    if (!m.isSkinnedMesh || !m.skeleton) return;
    const bi = m.skeleton.bones.indexOf(hand as THREE.Bone);
    if (bi < 0) return;
    const g = m.geometry, attr = (n: string) => g.getAttribute(n) as THREE.BufferAttribute | undefined;
    const pos = attr('position'), si = attr('skinIndex'), sw = attr('skinWeight');
    if (!pos || !si || !sw) return;
    const inv = m.skeleton.boneInverses[bi];
    for (let i = 0; i < pos.count; i++) {
      let w = 0;
      for (let k = 0; k < 4; k++) if (si.getComponent(i, k) === bi) w += sw.getComponent(i, k);
      if (w < 0.6) continue;
      v.fromBufferAttribute(pos, i).applyMatrix4(m.bindMatrix).applyMatrix4(inv);
      sum.add(v); n++;
    }
  });
  return n ? sum.divideScalar(n) : null;
}

// ── the four characters ──────────────────────────────────────────────────────
/**
 * per character: how bright the cloth is lifted, where the eyes are (`eyesTop`: only the top band of that mesh).
 * 0.9.9.9.5.3: allies keep their own colours (they wore green).
 */
const LOOK: Record<Exclude<GlbKind, 'dragon'>, { lift: number; eyes: string[]; eyesTop?: number; brighten?: Record<string, number> }> = {
  goblin: { lift: 0.1, eyes: ['Pupil', 'Eye'] },
  knight: { lift: 0.08, eyes: ['Slit'], eyesTop: 0.03 }, // (the visor's eye slit, not its breathing holes)
  // (the witch's black dress and hat vanished on the night arenas: a touch lighter)
  witch: { lift: 0.16, eyes: ['Iris'], brighten: { Dress: 2.4, DressPanel: 2, Boots: 2, Robe: 1.5, Hat: 1.4, Belt: 1.6 } },
  wizard: { lift: 0.1, eyes: ['Iris'] },
};

/** A character from its model, or null while the model isn't loaded. */
export function buildGlbCharacter(kind: Exclude<GlbKind, 'dragon'>, _side: Side, glowTex: THREE.Texture, staffSkin?: string): Character | null {
  const tpl = templates.get(kind);
  if (!tpl) return null;
  const look = LOOK[kind];
  const scene = cloneSkinned(tpl.scene);
  const materials = ownMaterials(scene, (name, m) => {
    const b = look.brighten?.[name];
    if (b) m.color.multiplyScalar(b);
    lift(m, look.lift);
  });
  // (0.9.9.9.6.3: `ground` sits between the root and the body — it lifts the body when a pose, a bob or the kneel would
  // put a foot or a knee under the floor)
  const root = new THREE.Group(), ground = new THREE.Group(), body = new THREE.Group();
  root.add(ground); ground.add(body); body.add(scene);
  const bone = boneFinder(scene);

  // the staff arm (the model's left: +x) and the free arm hang straight down at rest
  const upL = bone('UpperArm.L'), lowL = bone('LowerArm.L'), handL = bone('Hand.L');
  const upR = bone('UpperArm.R'), lowR = bone('LowerArm.R');
  const arm = pivotAbove(upL), leftArm = pivotAbove(upR);
  hangDown(upL, lowL); hangDown(upR, lowR);
  // the staff forearm comes forward (the hand in front, holding the staff up), the free one bends a little
  lowL.rotation.x = -1.0;
  lowR.rotation.x = -0.35;
  scene.updateMatrixWorld(true);
  // 0.9.9.9.6.3: the staff goes through the middle of the hand (the palm), not the wrist joint where the hand bone
  // starts — the models have no finger bones, so the palm is where the hand's own vertices are
  const palm = palmOf(scene, handL);
  const hand = arm.worldToLocal(palm ? handL.localToWorld(palm) : handL.getWorldPosition(new THREE.Vector3()));
  arm.rotation.z = ARM_REST;
  leftArm.rotation.set(-0.3, 0, -0.16);
  const { staffPivot, staff, crystal, crystalMat, glow } = holdStaff(arm, [hand.x, hand.y, hand.z + 0.02], materials, glowTex, staffSkin);

  // the head turns where they look; hips and knees bend for the combo poses
  const headBone = bone('Head');
  const headAt = headBone.getWorldPosition(new THREE.Vector3());
  const head = pivotAbove(headBone);
  const legs: Leg[] = (['R', 'L'] as const).map((s) => { // (left to right along x, as the old models)
    const thigh = bone(`UpperLeg.${s}`), shin = bone(`LowerLeg.${s}`);
    const hip = pivotAbove(thigh), knee = pivotAbove(shin);
    return { hip, knee, thigh: thigh as unknown as THREE.Group, shin: shin as unknown as THREE.Group };
  });
  // glowing eyes (on fire), where the model's eyes are
  const spots = eyeSpots(tpl.scene, look.eyes, look.eyesTop).map((p) => [p.x, p.y - headAt.y, p.z - headAt.z + 0.01] as V3);
  const eyes = spots.length ? glowEyes(head, spots, EYE_COLORS[kind], glowTex) : undefined;
  // 0.9.9.9.5.4: breathing — the chest swells a little, the shoulders lift, the neck follows; each fighter at their own pace
  const chest = bone('Chest'), spine = bone('Spine'), neck = bone('Neck');
  const shoulders = [bone('Shoulder.L'), bone('Shoulder.R')];
  const pace = 1.7 + Math.random() * 0.35, phase = Math.random() * 6;
  const breathe = (t: number) => {
    const b = Math.sin(t * pace + phase), in_ = Math.max(0, b);
    chest.scale.set(1 + 0.022 * b, 1 + 0.014 * b, 1 + 0.035 * b);
    spine.rotation.x = -0.018 * b;
    neck.rotation.x = 0.016 * b;
    shoulders[0].rotation.z = 0.035 * in_; shoulders[1].rotation.z = -0.035 * in_;
  };
  // 0.9.9.9.5.5: knocked out — down on one knee: the right foot planted in front (thigh level, shin upright), the left
  // knee on the ground (thigh upright, shin flat behind); the body drops by what that leaves, leans in, the head bows
  root.updateMatrixWorld(true);
  const wy = (o: THREE.Object3D) => o.getWorldPosition(new THREE.Vector3()).y;
  const hipY = wy(legs[0].hip), kneeY = wy(legs[0].knee), footY = wy(bone('Foot.R'));
  const thighLen = Math.max(0.01, hipY - kneeY), shinLen = Math.max(0.01, kneeY - footY);
  const back = 0.12; // (the kneeling thigh, a little back)
  const hipDown = thighLen * Math.cos(back) + footY * 0.6; // where the hips end up
  const drop = Math.max(0, hipY - hipDown);
  const front = Math.acos(Math.max(-1, Math.min(1, (hipDown - shinLen - footY * 0.6) / thighLen)));
  const kneel = (k: number) => {
    const e = Math.max(0, Math.min(1, k));
    const [fr, bk] = legs; // (R in front, L kneeling)
    fr.hip.rotation.set(-front * e, 0, -0.08 * e); fr.knee.rotation.set(front * e, 0, 0);
    bk.hip.rotation.set(back * e, 0, 0.06 * e); bk.knee.rotation.set((Math.PI / 2 - back) * e, 0, 0);
    root.position.y = -drop * e;
    chest.scale.set(1, 1, 1);
    spine.rotation.x = 0.32 * e;
    neck.rotation.x = 0.28 * e;
    head.rotation.set(0.4 * e, 0, 0);
    shoulders[0].rotation.z = -0.06 * e; shoulders[1].rotation.z = 0.06 * e; // (slumped)
    leftArm.rotation.set(lerpN(-0.3, -0.75, e), 0, lerpN(-0.16, 0.05, e)); // the free hand on the front knee
    arm.rotation.set(lerpN(arm.rotation.x, 0.2, e), 0, ARM_REST); // the staff arm hangs, the staff leaning on the ground
  };
  // 0.9.9.9.6.3: feet on the floor — after every pose, the lowest foot sole (or a kneeling knee) is kept at or above
  // the floor (y = 0 under the root): the body lifts by whatever would have gone under it
  const feet = [bone('Foot.L'), bone('Foot.R')];
  const sole = footY; // the ankle's height over the floor, standing
  const kneeR = sole * 0.85;
  const tv = new THREE.Vector3(), ts = new THREE.Vector3();
  const groundFix = () => {
    ground.position.y = 0;
    root.updateMatrixWorld(true);
    const floor = root.parent ? root.parent.localToWorld(tv.set(root.position.x, 0, root.position.z)).y : 0;
    const sc = root.getWorldScale(ts).y || 1;
    let low = Infinity;
    for (const f of feet) low = Math.min(low, (f.getWorldPosition(tv).y - floor) / sc - sole);
    for (const l of legs) low = Math.min(low, (l.knee.getWorldPosition(tv).y - floor) / sc - kneeR);
    if (low < -0.002) { ground.position.y = -low; root.updateMatrixWorld(true); }
  };
  return { root, body, head, arm, staffPivot, crystal, crystalMat, glow, staff, height: tpl.height, materials, eyes, leftArm, legs, breathe, kneel, groundFix };
}
const lerpN = (a: number, b: number, t: number) => a + (b - a) * t;

// ── the Black Dragon (Boss Elimination) ─────────────────────────────────────
export interface Dragon {
  root: THREE.Group;
  height: number;
  materials: Character['materials'];
  /** the frame: breathing, neck, tail and wings; `inhale` (0–1): rearing back for its fire; `breath` (0–1): jaws wide, head thrust out; `lunge` (0–1): a claw strike */
  update(time: number, dt: number, s: { inhale: number; breath: number; lunge: number; still: boolean }): void;
  /** where the fire comes from (world space) */
  mouth(out: THREE.Vector3): THREE.Vector3;
  head(out: THREE.Vector3): THREE.Vector3;
  /** 0.9.9.9.5.5: beaten (0 → 1): it lies down on its stomach — legs folded out, neck and head on the ground, wings spread flat */
  ko(k: number): void;
}
export function buildDragon(): Dragon | null {
  const tpl = templates.get('dragon');
  if (!tpl) return null;
  const scene = cloneSkinned(tpl.scene);
  const materials = ownMaterials(scene, (name, m) => {
    if (name === 'Eye') { m.emissive.setRGB(0.35, 1, 0.3); m.emissiveIntensity = 1.4; return; } // (eyes that glow in the dark)
    if (name === 'Mouth') { m.emissive.setRGB(0.5, 0.12, 0.02); return; }
    m.color.multiplyScalar(name.startsWith('Membrane') ? 2.2 : 1.8); // (black on a night arena was a hole: dark grey-violet)
    lift(m, 0.14);
  });
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body); body.add(scene);
  const bone = boneFinder(scene);
  const chest = bone('Chest'), jaw = bone('Jaw'), headB = bone('Head');
  const necks = [1, 2, 3, 4].map((i) => bone(`Neck${i}`));
  const tail = [1, 2, 3, 4, 5, 6].map((i) => bone(`Tail${i}`));
  const wings = (['L', 'R'] as const).map((s) => ({ s: s === 'L' ? 1 : -1, arm: bone(`WingArm.${s}`), fore: bone(`WingForearm.${s}`), f: [1, 2, 3].map((i) => bone(`WingFinger${i}.${s}`)) }));
  const fronts = (['L', 'R'] as const).map((s) => bone(`FrontUpper.${s}`));
  const mouthAt = new THREE.Vector3(0, -0.05, 0.75); // (in the head bone: between the jaws, in front)
  const hinds = (['L', 'R'] as const).map((s) => ({ s: s === 'L' ? 1 : -1, up: bone(`HindUpper.${s}`), low: bone(`HindLower.${s}`) }));
  const frontLow = (['L', 'R'] as const).map((s) => bone(`FrontLower.${s}`));
  root.updateMatrixWorld(true);
  const hipsY = bone('Hips').getWorldPosition(new THREE.Vector3()).y; // (how far the belly comes down)
  return {
    root, height: tpl.height, materials,
    update(time, dt, st) {
      const t = st.still ? 0 : time;
      const breathe = Math.sin(t * 1.6);
      chest.scale.set(1 + breathe * 0.025, 1 + breathe * 0.02, 1 + breathe * 0.025);
      body.position.y = breathe * 0.03;
      // the neck sways; rearing back to inhale, thrust forward to breathe fire
      const sway = Math.sin(t * 0.7) * 0.06;
      necks.forEach((n, i) => {
        n.rotation.set(-0.1 * st.inhale * (i + 1) * 0.6 + 0.12 * st.breath * (i < 2 ? 1 : 0.5) + Math.sin(t * 1.1 + i * 0.5) * 0.02, sway * (0.5 + i * 0.25), 0);
      });
      headB.rotation.set(-0.25 * st.inhale + 0.18 * st.breath + Math.sin(t * 1.3) * 0.03, sway * 0.6, 0);
      // the jaw: a slow breath through the teeth, half open while it inhales, wide open on the fire
      jaw.rotation.x = Math.max(0.04 + 0.04 * Math.max(0, breathe), 0.35 * st.inhale, 0.75 * st.breath);
      tail.forEach((b, i) => { b.rotation.set(Math.sin(t * 1.2 + i * 0.6) * 0.03, Math.sin(t * 0.9 - i * 0.55) * (0.08 + i * 0.03), 0); });
      // wings: folded, breathing with it; spread wide and beating while it rears up for fire
      const open = Math.max(st.inhale, st.breath * 0.8);
      const beat = Math.sin(t * (2 + open * 4)) * (0.06 + open * 0.3);
      for (const w of wings) {
        w.arm.rotation.set(-0.15 * open, 0, w.s * (beat - 0.25 * open));
        w.fore.rotation.set(0, 0, w.s * (0.12 * open + beat * 0.5));
        w.f.forEach((f, i) => { f.rotation.z = w.s * (open * 0.15 * (i - 1) + beat * 0.3); });
      }
      // a claw strike: the front legs and the chest lunge
      for (const [i, f] of fronts.entries()) f.rotation.x = -0.9 * st.lunge * (i === 0 ? 1 : 0.6);
      body.rotation.x = -0.12 * st.inhale + 0.1 * st.lunge;
      body.position.z = 0.4 * st.lunge + 0.25 * st.breath;
      void dt;
    },
    mouth(out) { return headB.localToWorld(out.copy(mouthAt)); },
    head(out) { return headB.getWorldPosition(out); },
    ko(k) {
      const e = Math.max(0, Math.min(1, k));
      chest.scale.set(1, 1, 1);
      body.position.set(0, -hipsY * 0.62 * e, 0);
      body.rotation.set(0.04 * e, 0, 0);
      // the legs fold out to the sides, the feet flat
      for (const [i, f] of fronts.entries()) { const sd = i === 0 ? 1 : -1; f.rotation.set(-0.55 * e, 0, sd * 0.95 * e); frontLow[i].rotation.set(0.9 * e, 0, -sd * 0.35 * e); }
      for (const h of hinds) { h.up.rotation.set(0.35 * e, 0, h.s * 0.9 * e); h.low.rotation.set(-0.4 * e, 0, -h.s * 0.3 * e); }
      // the neck lowers, the head comes to rest on the ground in front, jaws a little open
      necks.forEach((n, i) => n.rotation.set((i < 2 ? 0.42 : 0.18) * e, 0, 0));
      headB.rotation.set(-0.15 * e, 0.12 * e, 0);
      jaw.rotation.x = 0.12 * e;
      // the tail lies along the ground, curled a little
      tail.forEach((b, i) => b.rotation.set(-0.06 * e, (0.08 + i * 0.03) * e, 0));
      // the wings: half open and flat on the ground
      for (const w of wings) {
        w.arm.rotation.set(0.1 * e, 0, w.s * -0.55 * e);
        w.fore.rotation.set(0, 0, w.s * 0.35 * e);
        w.f.forEach((f, i) => { f.rotation.z = w.s * 0.12 * (i - 1) * e; });
      }
    },
  };
}
