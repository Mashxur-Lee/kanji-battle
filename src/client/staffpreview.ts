// Customize → Magic staff: a slowly turning 3D staff, and close-up thumbnails of every staff's head.
// Part of the arena bundle (public/arena3d.js), so Three.js is only loaded when it's needed.

import * as THREE from 'three';
import { buildStaff, GEM_Y, type Staff } from './staffs3d';

export interface StaffPreview {
  show(id: string): void;
  /** PNG data URLs, one per staff: the head of the staff, three-quarter view */
  thumbs(ids: readonly string[], w: number, h: number): string[];
  dispose(): void;
}

function glowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.25, 'rgba(255,255,255,.55)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function createStaffPreview(canvas: HTMLCanvasElement): StaffPreview | null {
  let renderer: THREE.WebGLRenderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true }); } catch { return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xdfe6ff, 0x2a2040, 1.4));
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(2, 3, 4); scene.add(key);
  const rim = new THREE.DirectionalLight(0x9f8cff, 2); rim.position.set(-3, 2, -3); scene.add(rim);
  const gemLight = new THREE.PointLight(0xffffff, 3, 3, 2); scene.add(gemLight);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  const glowTex = glowTexture();
  const holder = new THREE.Group(); holder.rotation.z = 0.12;
  scene.add(holder);

  let staff: Staff | null = null, shownId = '';
  function use(id: string) {
    if (staff && shownId === id) return staff;
    if (staff) { holder.remove(staff.group); staff.group.traverse((o) => (o as THREE.Mesh).geometry?.dispose?.()); }
    staff = buildStaff(id, glowTex);
    shownId = id;
    holder.add(staff.group);
    gemLight.color.copy(staff.color); gemLight.position.set(0.3, GEM_Y + 0.2, 0.6);
    return staff;
  }
  function size() {
    const w = canvas.clientWidth || 300, h = canvas.clientHeight || 420;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // the whole staff fits, whatever the box's shape
    const d = 1.55 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / Math.min(1, camera.aspect * 1.6);
    camera.position.set(0, 0.35, d); camera.lookAt(0, 0.3, 0);
    camera.updateProjectionMatrix();
  }

  let raf = 0, last = performance.now(), time = 0;
  const visible = () => canvas.isConnected && !canvas.closest('[hidden]') && canvas.clientWidth > 0;
  function frame(now: number) {
    if (!visible()) { raf = 0; return; }
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now; time += dt;
    if (!staff) return;
    holder.rotation.y += dt * 0.6;
    holder.position.y = Math.sin(time * 1.3) * 0.04;
    staff.gem.rotation.y += dt * 1.5;
    staff.gemMat.emissiveIntensity = 1.4 + Math.sin(time * 3) * 0.4;
    staff.update(time, dt, 0.25);
    renderer.render(scene, camera);
  }

  return {
    show(id) {
      use(id);
      size();
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
    },
    thumbs(ids, w, h) {
      const out: string[] = [];
      const keep = shownId;
      const rot = holder.rotation.y, py = holder.position.y;
      renderer.setPixelRatio(1);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.set(0.35, GEM_Y + 0.12, 1.6); camera.lookAt(0, GEM_Y - 0.02, 0);
      camera.updateProjectionMatrix();
      holder.rotation.y = 0.6; holder.position.y = 0;
      for (const id of ids) {
        const s = use(id);
        s.update(1.2, 0, 0);
        renderer.render(scene, camera);
        out.push(canvas.toDataURL('image/png'));
      }
      holder.rotation.y = rot; holder.position.y = py;
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
      if (keep) use(keep);
      size();
      return out;
    },
    dispose() { cancelAnimationFrame(raf); raf = 0; renderer.dispose(); },
  };
}
