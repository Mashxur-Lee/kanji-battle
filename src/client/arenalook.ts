// 0.9.9.9.9.1: the 3D arena, better looking — on High (Low and the Customize previews keep the plain look, light
// enough for phones):
//   · light that glows: everything bright (the runes, the torches, the staffs' gems, the spells, the hits) blooms
//     softly into the air round it, and the edges of the picture darken a little, like a lens;
//   · soft shadows: the fighters, their staffs and the props near the arena cast shadows from the sun or the moon;
//   · light from all round (a soft studio light, reflected): metal and stone are no longer flat colours;
//   · the weather of the place, in 3D (as in the menu): rain, a thunderstorm with lightning far off, snow, falling
//     leaves or petals, seeds and spores drifting.
// The arena (arena3d.ts) owns the renderer, the scene and the camera; this adds to them.

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const VIGNETTE = {
  uniforms: { tDiffuse: { value: null as THREE.Texture | null }, uAmount: { value: 0.32 } },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      float v = smoothstep(0.85, 0.25, length(d * vec2(1.0, 0.82)));
      gl_FragColor = vec4(c.rgb * mix(1.0 - uAmount, 1.0, v), c.a);
    }`,
};

/** the glow and the lens (High only): render() draws the frame through them */
export function createPost(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const gl2 = renderer.capabilities.isWebGL2;
  const target = new THREE.WebGLRenderTarget(Math.max(1, size.x), Math.max(1, size.y), { type: THREE.HalfFloatType, samples: gl2 ? 4 : 0 });
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.6, 0.5, 1.0); // (only what is brighter than white glows: lights, gems, spells)
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  composer.addPass(new ShaderPass(VIGNETTE));
  return {
    bloom,
    render() { composer.render(); },
    setSize(w: number, h: number) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h); },
    dispose() { composer.dispose(); target.dispose(); },
  };
}
export type Post = ReturnType<typeof createPost>;

/** light from all round: a soft studio, reflected in metal and stone (made once, a small cube texture) */
let envTex: THREE.Texture | null = null;
export function roomLight(renderer: THREE.WebGLRenderer): THREE.Texture {
  if (envTex) return envTex;
  const pm = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  envTex = pm.fromScene(room, 0.04).texture;
  room.traverse((o) => { const m = o as THREE.Mesh; m.geometry?.dispose?.(); (m.material as THREE.Material | undefined)?.dispose?.(); });
  pm.dispose();
  return envTex;
}

/** shadows: what casts and what takes them (big things far out — the sky, the hills — neither) */
export function shadowsFor(root: THREE.Object3D, near = 16) {
  const box = new THREE.Box3(), sphere = new THREE.Sphere();
  root.updateMatrixWorld(true);
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh || (m as unknown as THREE.InstancedMesh).isInstancedMesh) return;
    const mat = (Array.isArray(m.material) ? m.material[0] : m.material) as THREE.Material & { lights?: boolean };
    if (!mat || mat.transparent || (mat as THREE.MeshBasicMaterial).isMeshBasicMaterial || (mat as THREE.ShaderMaterial).isShaderMaterial) return;
    if (!m.geometry.boundingSphere) m.geometry.computeBoundingSphere();
    box.setFromObject(m); box.getBoundingSphere(sphere);
    if (sphere.radius > 40) return;
    m.receiveShadow = true;
    m.castShadow = sphere.radius < 9 && Math.hypot(sphere.center.x, sphere.center.z + 1) < near;
  });
}

// ── the weather ─────────────────────────────────────────────────────────────────────────────────────────────
export type Weather3D = 'clear' | 'leaves' | 'rain' | 'storm' | 'snow' | 'petals' | 'seeds' | 'spores';
const LEAF_COLS: Record<string, number[]> = { leaves: [0xe8914a, 0xd9573a, 0xf2c14a, 0x9bd16a], petals: [0xffc2dc, 0xffd6e7, 0xff9ec7, 0xfff0f6] };

function dotTex(soft = true) {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d')!, grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(soft ? 0.35 : 0.7, 'rgba(255,255,255,.7)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

/** the weather round the arena: `update` every frame; `flash` (a storm) lights the sky now and then */
export function createWeather(scene: THREE.Scene, kind: Weather3D, lite: boolean, flash: (power: number) => void) {
  const group = new THREE.Group();
  scene.add(group);
  const box = { x: 22, y: 14, z0: -24, z1: 9 };
  const k = lite ? 0.4 : 1;
  const disposers: Array<() => void> = [];
  let step: (dt: number, t: number) => void = () => {};
  if (kind === 'rain' || kind === 'storm') {
    const n = Math.round((kind === 'storm' ? 1600 : 1000) * k);
    const pos = new Float32Array(n * 6), speed = new Float32Array(n);
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const len = kind === 'storm' ? 0.55 : 0.4, wind = kind === 'storm' ? 0.22 : 0.08;
    const reset = (i: number, y = Math.random() * box.y) => {
      const x = (Math.random() * 2 - 1) * box.x, z = box.z0 + Math.random() * (box.z1 - box.z0);
      pos.set([x, y, z, x + wind * len, y + len, z], i * 6); speed[i] = 14 + Math.random() * 8;
    };
    for (let i = 0; i < n; i++) reset(i);
    const mat = new THREE.LineBasicMaterial({ color: 0xb8cdf5, transparent: true, opacity: kind === 'storm' ? 0.42 : 0.34, depthWrite: false });
    const lines = new THREE.LineSegments(geo, mat); lines.frustumCulled = false; group.add(lines);
    disposers.push(() => { geo.dispose(); mat.dispose(); });
    let nextFlash = 3 + Math.random() * 6;
    step = (dt, t) => {
      for (let i = 0; i < n; i++) {
        const dy = speed[i] * dt;
        pos[i * 6 + 1] -= dy; pos[i * 6 + 4] -= dy; pos[i * 6] -= dy * wind; pos[i * 6 + 3] -= dy * wind;
        if (pos[i * 6 + 1] < 0) reset(i, box.y);
      }
      geo.attributes.position.needsUpdate = true;
      if (kind === 'storm' && t > nextFlash) { nextFlash = t + 6 + Math.random() * 8; flash(1); setTimeout(() => flash(0.6), 140); }
    };
  } else if (kind === 'snow' || kind === 'seeds' || kind === 'spores') {
    const n = Math.round((kind === 'snow' ? 1100 : 220) * k);
    const pos = new Float32Array(n * 3), seed = new Float32Array(n);
    for (let i = 0; i < n; i++) { pos.set([(Math.random() * 2 - 1) * box.x, Math.random() * box.y, box.z0 + Math.random() * (box.z1 - box.z0)], i * 3); seed[i] = Math.random() * 100; }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const tex = dotTex(kind !== 'snow');
    const mat = new THREE.PointsMaterial({ map: tex, size: kind === 'snow' ? 0.1 : kind === 'seeds' ? 0.14 : 0.12, transparent: true, depthWrite: false, color: kind === 'snow' ? 0xffffff : kind === 'seeds' ? 0xfffbe8 : 0x9dffb8, blending: kind === 'spores' ? THREE.AdditiveBlending : THREE.NormalBlending, opacity: kind === 'snow' ? 0.9 : 0.8 });
    const pts = new THREE.Points(geo, mat); pts.frustumCulled = false; group.add(pts);
    disposers.push(() => { geo.dispose(); mat.dispose(); tex.dispose(); });
    const fall = kind === 'snow' ? 1.1 : kind === 'seeds' ? 0.15 : -0.12;
    step = (dt, t) => {
      for (let i = 0; i < n; i++) {
        const s = seed[i];
        pos[i * 3] += (Math.sin(t * 0.7 + s) * 0.35 + (kind === 'seeds' ? 0.6 : 0.1)) * dt;
        pos[i * 3 + 1] -= (fall * (0.7 + (s % 1) * 0.6)) * dt;
        pos[i * 3 + 2] += Math.cos(t * 0.5 + s) * 0.2 * dt;
        if (pos[i * 3 + 1] < 0) pos[i * 3 + 1] = box.y;
        if (pos[i * 3 + 1] > box.y) pos[i * 3 + 1] = 0;
        if (pos[i * 3] > box.x) pos[i * 3] = -box.x;
      }
      geo.attributes.position.needsUpdate = true;
    };
  } else if (kind === 'leaves' || kind === 'petals') {
    const n = Math.round((kind === 'petals' ? 220 : 160) * k);
    const shape = new THREE.Shape(); shape.moveTo(0, -0.5); shape.bezierCurveTo(0.42, -0.2, 0.36, 0.3, 0, 0.5); shape.bezierCurveTo(-0.36, 0.3, -0.42, -0.2, 0, -0.5);
    const geo = new THREE.ShapeGeometry(shape, 4);
    const mat = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: 0.7 });
    const im = new THREE.InstancedMesh(geo, mat, n); im.frustumCulled = false; group.add(im);
    const cols = LEAF_COLS[kind], col = new THREE.Color();
    const L = Array.from({ length: n }, (_, i) => {
      im.setColorAt(i, col.setHex(cols[i % cols.length]).multiplyScalar(0.8 + Math.random() * 0.3));
      return { p: new THREE.Vector3((Math.random() * 2 - 1) * box.x, Math.random() * box.y, box.z0 + Math.random() * (box.z1 - box.z0)), r: new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6), w: new THREE.Vector3(Math.random() * 3 - 1.5, Math.random() * 3 - 1.5, Math.random() * 3 - 1.5), s: (kind === 'petals' ? 0.1 : 0.16) * (0.7 + Math.random() * 0.6), fall: 0.5 + Math.random() * 0.6, ph: Math.random() * 10 };
    });
    disposers.push(() => { geo.dispose(); mat.dispose(); im.dispose(); });
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3();
    step = (dt, t) => {
      L.forEach((l, i) => {
        l.p.y -= l.fall * dt; l.p.x += (Math.sin(t * 0.8 + l.ph) * 0.6 + 0.35) * dt; l.p.z += Math.cos(t * 0.6 + l.ph) * 0.25 * dt;
        l.r.x += l.w.x * dt; l.r.y += l.w.y * dt; l.r.z += l.w.z * dt;
        if (l.p.y < 0.02) { l.p.y = box.y; l.p.x = (Math.random() * 2 - 1) * box.x; }
        if (l.p.x > box.x) l.p.x = -box.x;
        m4.compose(l.p, q.setFromEuler(l.r), sc.setScalar(l.s)); im.setMatrixAt(i, m4);
      });
      im.instanceMatrix.needsUpdate = true;
    };
  }
  let time = 0;
  return {
    kind,
    update(dt: number) { time += dt; step(Math.min(dt, 0.05), time); },
    dispose() { scene.remove(group); for (const d of disposers) d(); },
  };
}
export type Weather = ReturnType<typeof createWeather>;

/**
 * 0.9.9.9.9.1: wear on the arena floor, over every arena: grime in the cracks and the hollows, fine cracks, darker
 * towards the rim (where the light doesn't reach) — the floor was one flat colour
 */
export function floorWear(radius = 9.3): THREE.Mesh {
  const S = 1024, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d')!, h = S / 2;
  let seed = 7; const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  // darker towards the rim
  const rim = g.createRadialGradient(h, h, h * 0.55, h, h, h);
  rim.addColorStop(0, 'rgba(10,8,14,0)'); rim.addColorStop(0.75, 'rgba(10,8,14,.28)'); rim.addColorStop(1, 'rgba(10,8,14,.5)');
  g.fillStyle = rim; g.fillRect(0, 0, S, S);
  // grime: soft blotches
  for (let i = 0; i < 260; i++) {
    const x = r() * S, y = r() * S, rr = 10 + r() * 60, a = 0.04 + r() * 0.09;
    const gr = g.createRadialGradient(x, y, 0, x, y, rr); gr.addColorStop(0, `rgba(18,14,10,${a})`); gr.addColorStop(1, 'rgba(18,14,10,0)');
    g.fillStyle = gr; g.fillRect(x - rr, y - rr, rr * 2, rr * 2);
  }
  // fine cracks
  g.lineCap = 'round';
  for (let i = 0; i < 70; i++) {
    let x = r() * S, y = r() * S, a = r() * Math.PI * 2;
    g.strokeStyle = `rgba(8,6,6,${0.18 + r() * 0.25})`; g.lineWidth = 0.8 + r() * 1.6;
    g.beginPath(); g.moveTo(x, y);
    const n = 4 + Math.floor(r() * 9);
    for (let k = 0; k < n; k++) { a += (r() - 0.5) * 1.1; x += Math.cos(a) * (6 + r() * 16); y += Math.sin(a) * (6 + r() * 16); g.lineTo(x, y); }
    g.stroke();
  }
  // specks of grit
  for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${r() < 0.5 ? '0,0,0' : '255,250,240'},${0.05 + r() * 0.08})`; g.fillRect(r() * S, r() * S, 1 + r() * 2, 1 + r() * 2); }
  // keep it inside the circle
  g.globalCompositeOperation = 'destination-in';
  const cut = g.createRadialGradient(h, h, h * 0.96, h, h, h); cut.addColorStop(0, 'rgba(0,0,0,1)'); cut.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = cut; g.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  const m = new THREE.Mesh(new THREE.CircleGeometry(radius, 72), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }));
  m.rotation.x = -Math.PI / 2; m.renderOrder = 1;
  return m;
}
