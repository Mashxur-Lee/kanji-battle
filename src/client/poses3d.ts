import * as THREE from 'three';
// Combo poses (0.9.9.7, Customize → Combo pose): what your character does while it's on fire (5+ in a row, or
// Omnipotence). Each pose blends in over the normal stance (k: 0 → 1) and is applied after the frame's own
// animation, so casting still moves the staff arm.
import type { Character } from './models3d';

import { type PoseId } from '../shared/progress';
export { POSES, POSE_DEFS, isPose, type PoseId } from '../shared/progress';

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const DOWN = new THREE.Vector3(0, -1, 0);
/** the staff's own axis inside its pivot (holdStaff tips it forward by 0.3) */
const STAFF_AXIS = new THREE.Vector3(0, Math.cos(0.3), Math.sin(0.3));
const q1 = new THREE.Quaternion(), q2 = new THREE.Quaternion();
/** turn a limb (pivot at the shoulder, hanging along −y) so its hand points at `target` (in `space`'s coordinates) */
function reach(limb: THREE.Object3D, space: THREE.Object3D, target: THREE.Vector3, k: number) {
  const parent = limb.parent!;
  space.updateMatrixWorld(true);
  const t = parent.worldToLocal(space.localToWorld(target.clone()));
  const dir = t.sub(limb.position).normalize();
  q1.setFromUnitVectors(DOWN, dir);
  limb.quaternion.slerp(q1, k);
}
/** turn the staff so it runs along `dir` (in the character's own facing: +y up, +z towards the opponent) */
function pointStaff(m: Character, dir: THREE.Vector3, k: number) {
  m.root.updateMatrixWorld(true);
  const parent = m.staffPivot.parent!;
  parent.getWorldQuaternion(q2).invert();
  m.root.getWorldQuaternion(q1);
  const want = new THREE.Quaternion().setFromUnitVectors(STAFF_AXIS, dir.clone().normalize()).premultiply(q1).premultiply(q2);
  m.staffPivot.quaternion.slerp(want, k);
}
const ease = (k: number) => k * k * (3 - 2 * k);

/** Bend the model into the pose (k = how far, 0–1). `time` drives the gentle floating bob. */
export function applyPose(m: Character, pose: PoseId, kRaw: number, time: number) {
  const k = ease(Math.max(0, Math.min(1, kRaw)));
  const [legL, legR] = m.legs ?? [];
  const reset = () => {
    m.root.position.y = 0;
    for (const l of m.legs ?? []) { l.hip.rotation.set(0, 0, 0); l.knee.rotation.set(0, 0, 0); }
    m.staffPivot.rotation.z = STAFF_Z(m);
    if (m.leftArm) m.leftArm.rotation.set(LEFT_REST.x(m), 0, LEFT_REST.z(m));
  };
  reset();
  if (pose === 'none' || k <= 0.001) return;
  const bob = Math.sin(time * 1.7) * 0.05;
  const float = (h: number) => { m.root.position.y = (h + bob) * k; };
  const twoHands = (lift = 0) => {
    // the staff upright in the middle of the body: the right fist low, the left hand above it
    reach(m.arm, m.body, new THREE.Vector3(0.03, 1.02 + lift, 0.3), k);
    if (m.leftArm) reach(m.leftArm, m.body, new THREE.Vector3(-0.01, 1.24 + lift, 0.32), k);
    pointStaff(m, new THREE.Vector3(0, 1, 0.04), k);
  };
  if (pose === 'float') {
    float(0.32);
    if (legL) { legL.hip.rotation.x = -0.32 * k; legL.knee.rotation.x = 1.15 * k; }
    if (legR) { legR.hip.rotation.x = -0.06 * k; legR.knee.rotation.x = 0.18 * k; }
    if (m.leftArm) m.leftArm.rotation.z = lerp(LEFT_REST.z(m), -0.55, k);
  } else if (pose === 'aim') {
    // side-on: the right shoulder towards the opponent, the arm straight out at them, the core of the staff first
    m.body.rotation.y = lerp(m.body.rotation.y, -1.2, k);
    m.head.rotation.y = lerp(m.head.rotation.y, 1.05, k);
    m.root.updateMatrixWorld(true);
    const toFront = m.body.worldToLocal(m.root.localToWorld(new THREE.Vector3(0.25, 1.42, 2)));
    reach(m.arm, m.body, toFront, k);
    pointStaff(m, new THREE.Vector3(0, 0.08, 1), k);
    if (m.leftArm) { m.leftArm.rotation.x = lerp(LEFT_REST.x(m), 0.25, k); m.leftArm.rotation.z = lerp(LEFT_REST.z(m), -0.35, k); }
    if (legL) legL.hip.rotation.x = 0.22 * k;
    if (legR) legR.hip.rotation.x = -0.2 * k;
  } else if (pose === 'twohand') {
    twoHands();
  } else if (pose === 'lotus') {
    float(0.5);
    // thighs forward and out, shins crossed in front
    if (legL) { legL.hip.rotation.set(-1.45 * k, 0, -0.55 * k); legL.knee.rotation.set(2.2 * k, 0, 0); }
    if (legR) { legR.hip.rotation.set(-1.45 * k, 0, 0.55 * k); legR.knee.rotation.set(2.2 * k, 0, 0); }
    twoHands();
  }
}

// the rest values the models are built with (their staff tilt and left arm), read the first time a model is posed
const rest = new WeakMap<Character, { staffZ: number; leftX: number; leftZ: number }>();
const restOf = (m: Character) => {
  let r = rest.get(m);
  if (!r) { r = { staffZ: m.staffPivot.rotation.z, leftX: m.leftArm?.rotation.x ?? -0.38, leftZ: m.leftArm?.rotation.z ?? -0.15 }; rest.set(m, r); }
  return r;
};
const STAFF_Z = (m: Character) => restOf(m).staffZ;
const LEFT_REST = { x: (m: Character) => restOf(m).leftX, z: (m: Character) => restOf(m).leftZ };
/** remember a fresh model's rest pose (call right after building it, before anything moves it) */
export function notePose(m: Character) { restOf(m); }
