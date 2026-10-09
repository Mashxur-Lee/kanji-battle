// The 2.5D arena: a first-person view of the duel, drawn with Three.js behind the normal game UI.
//
// You see the fight through your wizard's eyes: your staff in the foreground (it glows while you write),
// the opponent standing across a stone arena, your chosen background far behind, torches, drifting
// embers and fireflies. The camera follows the mouse a little (parallax), spells are kanji that fly
// across with a trail, hits shake the camera. The fighters are the same pixel characters as in 2D,
// as billboards in the 3D space (the classic "2.5D" look).
//
// This file is bundled on its own (public/arena3d.js) and only loaded when the 3D arena is switched on,
// so the menus stay light. It knows nothing about the game rules: the UI calls the effects below.

import * as THREE from 'three';

export type Who = 'me' | 'opp' | 'boss' | `ally:${string}`;
export type TimeOfDay = 'day' | 'sunset' | 'night';
export interface FighterArt { id: string; svg: string; name?: string }
export interface ArenaSetup {
  /** where the opponent stands on screen: battle screens keep it right of the centre panel, Deck Duel a bit nearer the middle */
  layout: 'battle' | 'deck';
  bgSvg: string; // the chosen background (full SVG markup), shown far behind the arena
  bgKey: string;
  time: TimeOfDay;
  opp: FighterArt | null;
  allies: FighterArt[];
  boss: FighterArt | null; // the dragon
  robe: string; // colour of your sleeve
}
export interface ArenaApi {
  setup(s: ArenaSetup): void;
  setActive(on: boolean): void;
  cast(from: Who, to: Who, kanji: string, o?: { damage?: number; crit?: boolean; kind?: 'attack' | 'heal' | 'mana' }): Promise<void>;
  fizzle(who: Who): void;
  ko(who: Who): void;
  onfire(who: Who, on: boolean): void;
  channel(level: number): void;
  oppChannel(on: boolean): void;
  inhale(on: boolean): void;
  breath(victims: Who[], damage: number): void;
  claw(victim: Who, damage: number): void;
  float(who: Who, text: string, color?: string): void;
  dispose(): void;
}

const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── textures drawn on canvases ──────────────────────────────────────────────
function canvasTex(c: HTMLCanvasElement, pixel = false) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (pixel) { t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; }
  return t;
}
function glowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, inner); grd.addColorStop(0.25, inner.replace(/[\d.]+\)$/, '.55)')); grd.addColorStop(1, outer);
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  return canvasTex(c);
}
function ringTexture(color: string) {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const g = c.getContext('2d')!;
  g.translate(256, 256);
  g.strokeStyle = color; g.shadowColor = color; g.shadowBlur = 18; g.lineWidth = 5;
  g.beginPath(); g.arc(0, 0, 230, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 2.5; g.beginPath(); g.arc(0, 0, 196, 0, Math.PI * 2); g.stroke();
  // runes around the ring
  g.font = '900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif';
  g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle';
  const runes = '火水木金土日月山風雷光闇星天地夢';
  for (let i = 0; i < runes.length; i++) {
    g.save(); g.rotate((i / runes.length) * Math.PI * 2); g.fillText(runes[i], 0, -213); g.restore();
  }
  // a star in the middle
  g.lineWidth = 2; g.beginPath();
  for (let i = 0; i <= 5; i++) { const a = (i * 4 * Math.PI) / 5 - Math.PI / 2; const x = Math.cos(a) * 180, y = Math.sin(a) * 180; i ? g.lineTo(x, y) : g.moveTo(x, y); }
  g.stroke();
  return canvasTex(c);
}
function textTexture(text: string, color: string, size = 160) {
  const c = document.createElement('canvas');
  const n = [...text].length;
  c.width = Math.max(256, Math.ceil(n * size * 1.05 + 80)); c.height = size + 80;
  const g = c.getContext('2d')!;
  g.font = `900 ${size}px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif CJK JP",serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.shadowColor = color; g.shadowBlur = 34;
  g.fillStyle = color; g.fillText(text, c.width / 2, c.height / 2);
  g.shadowBlur = 10; g.fillStyle = '#ffffff'; g.fillText(text, c.width / 2, c.height / 2);
  return { tex: canvasTex(c), aspect: c.width / c.height };
}
function numberTexture(text: string, color: string) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 128;
  const g = c.getContext('2d')!;
  g.font = '900 84px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 10; g.strokeStyle = 'rgba(0,0,0,.75)'; g.strokeText(text, 128, 64);
  g.fillStyle = color; g.fillText(text, 128, 64);
  return canvasTex(c);
}
/** Stone tiles for the arena floor, with a worn glowing circle. */
function floorTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 1024;
  const g = c.getContext('2d')!;
  g.fillStyle = '#6d6a72'; g.fillRect(0, 0, 1024, 1024);
  for (let ring = 0; ring < 9; ring++) {
    const r0 = ring * 56, r1 = r0 + 56, n = 6 + ring * 6;
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2;
      const shade = 88 + Math.random() * 40;
      g.fillStyle = `rgb(${shade},${shade - 4},${shade + 6})`;
      g.beginPath(); g.arc(512, 512, r1, a0, a1); g.arc(512, 512, Math.max(r0, 1), a1, a0, true); g.closePath(); g.fill();
      g.strokeStyle = 'rgba(30,26,40,.85)'; g.lineWidth = 4; g.stroke();
    }
  }
  // speckles / wear
  for (let i = 0; i < 9000; i++) { g.fillStyle = `rgba(${Math.random() < 0.5 ? '0,0,0' : '255,255,255'},${Math.random() * 0.08})`; g.fillRect(Math.random() * 1024, Math.random() * 1024, 2, 2); }
  const t = canvasTex(c);
  t.anisotropy = 4;
  return t;
}
/** Pixel-art SVG → texture (async: the image has to load). */
function svgTexture(svg: string, onReady: (t: THREE.Texture, aspect: number) => void) {
  const vb = /viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(svg);
  const w = vb ? Number(vb[1]) : 16, h = vb ? Number(vb[2]) : 20;
  const scale = Math.max(1, Math.floor(512 / Math.max(w, h)));
  const url = URL.createObjectURL(new Blob([svg.replace('<svg ', `<svg xmlns="http://www.w3.org/2000/svg" width="${w * scale}" height="${h * scale}" `)], { type: 'image/svg+xml' }));
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas'); c.width = w * scale; c.height = h * scale;
    const g = c.getContext('2d')!; g.imageSmoothingEnabled = false; g.drawImage(img, 0, 0, c.width, c.height);
    URL.revokeObjectURL(url);
    onReady(canvasTex(c, true), w / h);
  };
  img.onerror = () => URL.revokeObjectURL(url);
  img.src = url;
}
/** The 2D background as a big picture (and the average colour of its ground, for the fog). */
function backgroundTexture(svg: string, onReady: (t: THREE.Texture, ground: THREE.Color, sky: THREE.Color) => void) {
  const url = URL.createObjectURL(new Blob([svg.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')], { type: 'image/svg+xml' }));
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas'); c.width = 2048; c.height = 1152;
    const g = c.getContext('2d')!; g.drawImage(img, 0, 0, 2048, 1152);
    URL.revokeObjectURL(url);
    const avg = (y0: number, y1: number) => {
      const d = g.getImageData(0, y0, 2048, y1 - y0).data;
      let r = 0, gg = 0, b = 0, n = 0;
      for (let i = 0; i < d.length; i += 4 * 37) { r += d[i]; gg += d[i + 1]; b += d[i + 2]; n++; }
      return new THREE.Color(r / n / 255, gg / n / 255, b / n / 255).convertSRGBToLinear();
    };
    onReady(canvasTex(c), avg(980, 1150), avg(40, 300));
  };
  img.onerror = () => URL.revokeObjectURL(url);
  img.src = url;
}

// ── lighting presets per time of day ────────────────────────────────────────
const LIGHT: Record<TimeOfDay, { sky: number; ground: number; hemi: number; sun: number; sunInt: number; sunPos: [number, number, number]; spriteTint: number; torch: number; motes: number; bloom: string }> = {
  day: { sky: 0xdbe9ff, ground: 0x5a4a38, hemi: 1.6, sun: 0xfff1d6, sunInt: 2.2, sunPos: [6, 12, 4], spriteTint: 0xffffff, torch: 6, motes: 0xfff6d8, bloom: '255,250,230' },
  sunset: { sky: 0xffb38a, ground: 0x3a2440, hemi: 1.15, sun: 0xff9a5c, sunInt: 2.0, sunPos: [-10, 4, -6], spriteTint: 0xffe2cc, torch: 14, motes: 0xffc27a, bloom: '255,190,120' },
  night: { sky: 0x5a6cc0, ground: 0x10101c, hemi: 0.55, sun: 0x9fb4ff, sunInt: 0.8, sunPos: [-6, 10, -8], spriteTint: 0xb9c2e8, torch: 26, motes: 0xd8ff8a, bloom: '200,255,150' },
};

interface Fighter { group: THREE.Group; sprite: THREE.Sprite; mat: THREE.SpriteMaterial; height: number; baseY: number; ko: boolean; fire: THREE.Group | null; aura: THREE.Sprite; hurtUntil: number; lungeUntil: number }
interface Particle { sprite: THREE.Sprite; vel: THREE.Vector3; life: number; max: number; grow: number; gravity: number }

export function createArena(canvas: HTMLCanvasElement): ArenaApi | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  } catch { return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x1a1630, 18, 46);
  const camera = new THREE.PerspectiveCamera(55, 16 / 9, 0.05, 200);
  const CAM = new THREE.Vector3(0, 1.75, 7.2);
  const LOOK = new THREE.Vector3(0, 1.45, 0);
  camera.position.copy(CAM);
  scene.add(camera); // the staff is attached to the camera

  // lights
  const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 1);
  const sun = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(hemi, sun);

  // far background: the player's chosen scene, on a huge slightly curved screen
  const bgMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false });
  const bgMesh = new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 60, 48, 1, true, Math.PI - 0.95, 1.9), bgMat);
  bgMesh.scale.set(-1, 1, 1); // look at the inside
  bgMesh.position.set(0, 20.5, 6);
  bgMat.side = THREE.BackSide;
  scene.add(bgMesh);

  // the ground far away (fades into the background with the fog), and the stone arena
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x23202e, roughness: 1 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(80, 48), groundMat);
  ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02;
  scene.add(ground);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(9.5, 64), new THREE.MeshStandardMaterial({ map: floorTexture(), roughness: 0.92, metalness: 0.02 }));
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(9.5, 0.16, 8, 96), new THREE.MeshStandardMaterial({ color: 0x4b4656, roughness: 0.85 }));
  rim.rotation.x = Math.PI / 2; rim.position.y = 0.04;
  scene.add(rim);
  // a big glowing rune circle in the middle of the arena
  const rune = new THREE.Mesh(new THREE.PlaneGeometry(9, 9), new THREE.MeshBasicMaterial({ map: ringTexture('#a98bff'), transparent: true, opacity: 0.38, blending: THREE.AdditiveBlending, depthWrite: false }));
  rune.rotation.x = -Math.PI / 2; rune.position.y = 0.03; rune.scale.x = -1; // readable from where you stand
  scene.add(rune);

  // pillars with torches around the back half of the arena
  const pillarMat = new THREE.MeshStandardMaterial({ color: 0x5a5466, roughness: 0.9 });
  const glow = glowTexture('rgba(255,170,80,1)', 'rgba(255,120,40,0)');
  const torches: Array<{ light: THREE.PointLight; flame: THREE.Sprite; base: number; phase: number }> = [];
  for (const a of [-2.35, -1.65, -1.15, 1.15, 1.65, 2.35]) {
    const ang = a - Math.PI / 2; // spread around the far side
    const x = Math.cos(ang) * 10.4, z = Math.sin(ang) * 10.4 - 1.5;
    const p = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 4.2, 10), pillarMat); shaft.position.y = 2.1;
    const cap = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 1.2), pillarMat); cap.position.y = 4.35;
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.22, 0.3, 10), new THREE.MeshStandardMaterial({ color: 0x2d2a33, metalness: 0.6, roughness: 0.4 })); bowl.position.y = 4.65;
    const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0xffb060, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    flame.position.y = 5.05; flame.scale.set(1.3, 1.8, 1);
    const light = new THREE.PointLight(0xff9a4a, 10, 14, 2); light.position.y = 5.1;
    p.add(shaft, cap, bowl, flame, light);
    p.position.set(x, 0, z);
    scene.add(p);
    torches.push({ light, flame, base: 1, phase: Math.random() * 10 });
  }

  // drifting motes (dust by day, embers at sunset, fireflies at night)
  const MOTES = 260;
  const moteGeo = new THREE.BufferGeometry();
  const motePos = new Float32Array(MOTES * 3), moteSeed = new Float32Array(MOTES);
  for (let i = 0; i < MOTES; i++) { motePos[i * 3] = rnd(-14, 14); motePos[i * 3 + 1] = rnd(0, 7); motePos[i * 3 + 2] = rnd(-12, 6); moteSeed[i] = Math.random() * 100; }
  moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
  const moteMat = new THREE.PointsMaterial({ size: 0.12, map: glowTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffffff, sizeAttenuation: true });
  scene.add(new THREE.Points(moteGeo, moteMat));

  // ── your staff and sleeve, in front of the camera ───────────────────────────
  const hand = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.75 });
  const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.04, 1.9, 10), wood);
  staff.position.set(0, -0.15, 0);
  const crown = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.016, 6, 16), new THREE.MeshStandardMaterial({ color: 0xc9a227, metalness: 0.8, roughness: 0.3 }));
  crown.position.set(0, 0.84, 0); crown.rotation.y = Math.PI / 2;
  const crystalMat = new THREE.MeshStandardMaterial({ color: 0xb48cff, emissive: 0x8a5cff, emissiveIntensity: 1.2, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.92 });
  const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.085, 0), crystalMat);
  crystal.position.set(0, 0.95, 0); crystal.scale.set(1, 1.5, 1);
  const crystalGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(190,150,255,1)', 'rgba(140,90,255,0)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.55 }));
  crystalGlow.position.copy(crystal.position); crystalGlow.scale.setScalar(0.5);
  const crystalLight = new THREE.PointLight(0xa070ff, 0.6, 4, 2); crystalLight.position.copy(crystal.position);
  const robeMat = new THREE.MeshStandardMaterial({ color: 0x3d4fb8, roughness: 0.9 });
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.2, 0.9, 12, 1, true), robeMat);
  sleeve.material.side = THREE.DoubleSide;
  sleeve.position.set(0.16, -0.55, 0.12); sleeve.rotation.z = 0.75; sleeve.rotation.x = -0.25;
  const fist = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 10), new THREE.MeshStandardMaterial({ color: 0xf0c9a0, roughness: 0.8 }));
  fist.position.set(0, -0.2, 0.02); fist.scale.set(1, 1.25, 1);
  hand.add(staff, crown, crystal, crystalGlow, crystalLight, sleeve, fist);
  const HAND_BATTLE = new THREE.Vector3(0.78, -0.86, -1.6);
  const HAND_DECK = new THREE.Vector3(1.02, -1.16, -1.6); // Deck Duel: below the chat panel
  const HAND_POS = HAND_BATTLE.clone();
  hand.position.copy(HAND_POS);
  hand.scale.setScalar(0.8);
  hand.rotation.set(0.1, 0, -0.18);
  camera.add(hand);
  const handLight = new THREE.PointLight(0xffffff, 1.2, 3, 2); handLight.position.set(0.3, 0.2, -0.4); camera.add(handLight);

  // ── fighters (billboards of the pixel characters) ──────────────────────────
  const shadowTex = glowTexture('rgba(0,0,0,0.75)', 'rgba(0,0,0,0)');
  const auraTex = glowTexture('rgba(150,120,255,1)', 'rgba(120,80,255,0)');
  const fighters = new Map<string, Fighter>(); // 'opp', 'boss', 'ally:<id>'
  function makeFighter(art: FighterArt, height: number, pos: THREE.Vector3, key: string): Fighter {
    const group = new THREE.Group();
    const mat = new THREE.SpriteMaterial({ transparent: true, alphaTest: 0.5, color: 0xffffff });
    const sprite = new THREE.Sprite(mat);
    sprite.center.set(0.5, 0);
    sprite.scale.set(height * 0.8, height, 1);
    svgTexture(art.svg, (t, aspect) => { mat.map = t; mat.needsUpdate = true; sprite.scale.set(height * aspect, height, 1); });
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(height * 0.9, height * 0.32), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.02;
    const circle = new THREE.Mesh(new THREE.PlaneGeometry(height * 1.1, height * 1.1), new THREE.MeshBasicMaterial({ map: ringTexture(key === 'boss' ? '#5dff8a' : '#ff8a8a'), transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
    circle.rotation.x = -Math.PI / 2; circle.position.y = 0.04; circle.name = 'circle';
    const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: auraTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
    aura.scale.set(height * 1.2, height * 1.2, 1); aura.position.y = height * 0.5;
    group.add(shadow, circle, aura, sprite);
    group.position.copy(pos);
    scene.add(group);
    const f: Fighter = { group, sprite, mat, height, baseY: pos.y, ko: false, fire: null, aura, hurtUntil: 0, lungeUntil: 0 };
    fighters.set(key, f);
    return f;
  }
  function clearFighters() {
    for (const f of fighters.values()) {
      scene.remove(f.group);
      f.group.traverse((o) => { const m = o as THREE.Mesh; m.geometry?.dispose?.(); const mm = m.material as THREE.Material | undefined; mm?.dispose?.(); });
    }
    fighters.clear();
  }

  // where something is, in the world
  const tmp = new THREE.Vector3();
  function pointOf(who: Who, part: 'chest' | 'head' | 'mouth' = 'chest'): THREE.Vector3 {
    if (who === 'me') {
      if (part === 'chest') return camera.localToWorld(new THREE.Vector3(0, -0.15, -0.9));
      crystal.getWorldPosition(tmp); return tmp.clone();
    }
    const f = fighters.get(who);
    if (!f) return new THREE.Vector3(0, 1.4, -3);
    const p = f.group.position.clone();
    if (who === 'boss' && part === 'mouth') return p.add(new THREE.Vector3(-f.height * 0.55, f.height * 0.62, 0.3));
    return p.add(new THREE.Vector3(0, f.height * (part === 'head' ? 0.85 : 0.55), 0.2));
  }

  // ── short-lived effects ─────────────────────────────────────────────────────
  const particles: Particle[] = [];
  const sparkTex = glowTexture();
  function spark(at: THREE.Vector3, color: THREE.ColorRepresentation, o: { size?: number; vel?: THREE.Vector3; life?: number; grow?: number; gravity?: number; opacity?: number } = {}) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: sparkTex, color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: o.opacity ?? 1 }));
    s.position.copy(at); s.scale.setScalar(o.size ?? 0.25);
    scene.add(s);
    particles.push({ sprite: s, vel: o.vel ?? new THREE.Vector3(), life: 0, max: o.life ?? 0.6, grow: o.grow ?? 0, gravity: o.gravity ?? 0 });
  }
  function burst(at: THREE.Vector3, color: THREE.ColorRepresentation, n = 26, speed = 3.2, size = 0.22) {
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3(rnd(-1, 1), rnd(-0.6, 1.2), rnd(-1, 1)).normalize().multiplyScalar(rnd(speed * 0.4, speed));
      spark(at, color, { vel: v, size: rnd(size * 0.6, size * 1.4), life: rnd(0.4, 0.9), gravity: -3 });
    }
    spark(at, color, { size: 0.6, grow: 6, life: 0.35, opacity: 0.9 }); // flash
  }
  const floats: Array<{ sprite: THREE.Sprite; life: number }> = [];
  function float(who: Who, text: string, color = '#ffd479') {
    if (who === 'me') { domFloat(text, color); return; }
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: numberTexture(text, color), transparent: true, depthWrite: false, depthTest: false }));
    s.position.copy(pointOf(who, 'head')).add(new THREE.Vector3(rnd(-0.3, 0.3), 0.3, 0.4));
    s.scale.set(1.3, 0.65, 1);
    s.renderOrder = 10;
    scene.add(s);
    floats.push({ sprite: s, life: 0 });
  }

  // screen overlays for hits on you (red vignette, numbers near the bottom)
  const overlay = document.createElement('div');
  overlay.className = 'arena3d-hit';
  document.body.append(overlay);
  function domFloat(text: string, color: string) {
    const el = document.createElement('div');
    el.className = 'arena3d-float'; el.textContent = text; el.style.color = color;
    el.style.left = `${45 + rnd(-6, 6)}%`;
    document.body.append(el);
    setTimeout(() => el.remove(), 1200);
  }
  function screenHit(color = '255,40,60') {
    overlay.style.setProperty('--hit', color);
    overlay.classList.remove('on'); void overlay.offsetWidth; overlay.classList.add('on');
  }
  let shake = 0;
  const kick = (amount: number) => { if (!reduced()) shake = Math.max(shake, amount); };

  // spells in flight
  interface Flight { sprite: THREE.Sprite; from: THREE.Vector3; to: THREE.Vector3; mid: THREE.Vector3; t: number; dur: number; color: THREE.Color; size: number; done: () => void; trailAt: number }
  const flights: Flight[] = [];
  function fly(from: THREE.Vector3, to: THREE.Vector3, kanji: string, color: string, size: number, dur: number): Promise<void> {
    const { tex, aspect } = textTexture(kanji, color);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.NormalBlending }));
    s.scale.set(size * aspect * 0.4, size * 0.4, 1);
    s.position.copy(from);
    s.renderOrder = 5;
    scene.add(s);
    const mid = from.clone().lerp(to, 0.5).add(new THREE.Vector3(rnd(-0.6, 0.6), 1.2 + from.distanceTo(to) * 0.08, 0));
    return new Promise((done) => flights.push({ sprite: s, from, to, mid, t: 0, dur: reduced() ? 0.4 : dur, color: new THREE.Color(color), size, done, trailAt: 0 }));
  }

  // ── state set by the game ───────────────────────────────────────────────────
  let layout: ArenaSetup['layout'] = 'battle';
  let bgKey = '';
  let channelLevel = 0, channelShown = 0;
  let oppChannelOn = false;
  let inhaling = false;
  let myFire: THREE.Group | null = null;
  let spriteTint = new THREE.Color(0xffffff);
  let current: ArenaSetup | null = null;

  /** Where the opponent stands: a fixed spot on screen (beside the centre panel), whatever the window size. */
  function screenSpot(fx: number, depthZ: number) {
    const dist = CAM.z - depthZ;
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * dist;
    return fx * halfH * camera.aspect;
  }
  function placeFighters() {
    if (!current) return;
    const s = current;
    const opp = fighters.get('opp');
    if (opp) opp.group.position.set(screenSpot(s.layout === 'deck' ? 0.36 : 0.56, -2.2), 0, -2.2);
    const boss = fighters.get('boss');
    if (boss) boss.group.position.set(screenSpot(0.42, -4.5), 0, -4.5);
    s.allies.forEach((a, i) => {
      const f = fighters.get(`ally:${a.id}`);
      if (f) f.group.position.set(screenSpot(-0.66 + i * 0.16, -0.6 - i * 0.9), 0, -0.6 - i * 0.9);
    });
  }

  function setup(s: ArenaSetup) {
    current = s;
    layout = s.layout;
    HAND_POS.copy(layout === 'deck' ? HAND_DECK : HAND_BATTLE);
    clearFighters();
    if (myFire) { camera.remove(myFire); myFire = null; }
    if (s.opp) makeFighter(s.opp, 2.3, new THREE.Vector3(2, 0, -2.2), 'opp');
    if (s.boss) makeFighter(s.boss, 4.4, new THREE.Vector3(2, 0, -4.5), 'boss');
    for (const a of s.allies) makeFighter(a, 1.7, new THREE.Vector3(-3, 0, -1), `ally:${a.id}`);
    placeFighters();
    robeMat.color.set(s.robe);
    const L = LIGHT[s.time];
    hemi.color.set(L.sky); hemi.groundColor.set(L.ground); hemi.intensity = L.hemi;
    sun.color.set(L.sun); sun.intensity = L.sunInt; sun.position.set(...L.sunPos);
    for (const t of torches) t.base = L.torch;
    moteMat.color.set(L.motes);
    spriteTint = new THREE.Color(L.spriteTint);
    for (const f of fighters.values()) f.mat.color.copy(spriteTint);
    if (bgKey !== s.bgKey) {
      bgKey = s.bgKey;
      backgroundTexture(s.bgSvg, (tex, groundCol, skyCol) => {
        bgMat.map?.dispose(); bgMat.map = tex; bgMat.needsUpdate = true;
        (scene.fog as THREE.Fog).color.copy(groundCol).lerp(skyCol, 0.25);
        groundMat.color.copy(groundCol).multiplyScalar(0.8);
        renderer.setClearColor(skyCol);
      });
    }
  }

  // ── input: the camera follows the mouse a little ───────────────────────────
  const mouse = new THREE.Vector2(), look = new THREE.Vector2();
  const onMove = (e: PointerEvent) => { mouse.set((e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1); };
  addEventListener('pointermove', onMove, { passive: true });

  function resize() {
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // narrower windows: step back so the arena still fits
    camera.fov = camera.aspect < 1.3 ? 66 : 55;
    camera.updateProjectionMatrix();
    placeFighters();
  }
  addEventListener('resize', resize);

  // ── the frame loop ─────────────────────────────────────────────────────────
  let active = false, raf = 0, last = performance.now(), time = 0;
  function frame(now: number) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now; time += dt;
    const still = reduced();

    // camera: parallax + breathing + shake
    look.lerp(mouse, still ? 1 : 0.05);
    const sway = still ? 0 : Math.sin(time * 0.7) * 0.025;
    camera.position.set(CAM.x + look.x * 0.45, CAM.y - look.y * 0.22 + sway, CAM.z);
    const target = LOOK.clone().add(new THREE.Vector3(look.x * 0.25, -look.y * 0.1, 0));
    camera.lookAt(target);
    if (shake > 0) {
      camera.position.add(new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), 0).multiplyScalar(shake));
      camera.rotation.z += rnd(-1, 1) * shake * 0.15;
      shake = Math.max(0, shake - dt * 1.1);
    }
    // the staff sways with the mouse (closer things move more)
    hand.position.set(HAND_POS.x - look.x * 0.04, HAND_POS.y + look.y * 0.03 + Math.sin(time * 1.6) * 0.008, HAND_POS.z);
    channelShown += (channelLevel - channelShown) * Math.min(1, dt * 6);
    const pulse = 0.5 + 0.5 * Math.sin(time * 6);
    crystalMat.emissiveIntensity = 1.2 + channelShown * (3 + pulse * 2);
    crystalLight.intensity = 0.6 + channelShown * 6;
    crystalGlow.scale.setScalar(0.45 + channelShown * (0.5 + pulse * 0.25));
    (crystalGlow.material as THREE.SpriteMaterial).opacity = 0.45 + channelShown * 0.5;
    crystal.rotation.y += dt * (0.8 + channelShown * 5);
    if (channelShown > 0.3 && Math.random() < channelShown * 0.6) {
      const p = pointOf('me', 'head');
      spark(p.clone().add(new THREE.Vector3(rnd(-0.12, 0.12), rnd(-0.1, 0.1), rnd(-0.12, 0.12))), 0xb48cff, { size: rnd(0.03, 0.07), vel: new THREE.Vector3(rnd(-0.2, 0.2), rnd(0.2, 0.6), 0), life: 0.7 });
    }

    // fighters: bob, hurt flash, lunge, auras, magic circles
    for (const [key, f] of fighters) {
      const circle = f.group.getObjectByName('circle');
      if (circle) circle.rotation.z += dt * 0.4;
      if (f.ko) continue;
      const bob = still ? 0 : Math.abs(Math.sin(time * 2 + f.height)) * 0.05;
      f.sprite.position.y = bob;
      const hurt = now < f.hurtUntil;
      f.mat.color.copy(hurt ? new THREE.Color(1, 0.35, 0.35) : spriteTint);
      const lunge = Math.max(0, f.lungeUntil - now) / 450;
      f.sprite.position.z = lunge * 0.4;
      const auraOn = (key === 'opp' && oppChannelOn) || (key === 'boss' && inhaling);
      const am = f.aura.material as THREE.SpriteMaterial;
      am.opacity += ((auraOn ? 0.55 + 0.2 * Math.sin(time * 5) : 0) - am.opacity) * Math.min(1, dt * 5);
      am.color.set(key === 'boss' ? 0xff7a2a : 0xb48cff);
      if (f.fire && Math.random() < 0.7) {
        const base = f.group.position;
        spark(new THREE.Vector3(base.x + rnd(-0.5, 0.5) * f.height * 0.35, rnd(0.1, f.height * 0.6), base.z + 0.2), Math.random() < 0.5 ? 0xff7a2a : 0xffc04a, { size: rnd(0.15, 0.35), vel: new THREE.Vector3(0, rnd(1.2, 2.4), 0), life: rnd(0.4, 0.8) });
      }
      if (key === 'boss' && inhaling && Math.random() < 0.8) {
        const m = pointOf('boss', 'mouth');
        const from = m.clone().add(new THREE.Vector3(rnd(-1.5, 1.5), rnd(-1, 1), rnd(-1, 1)));
        spark(from, 0xff9a3a, { size: 0.12, vel: m.clone().sub(from).multiplyScalar(1.6), life: 0.55 });
      }
    }
    if (myFire && Math.random() < 0.8) {
      const p = camera.localToWorld(new THREE.Vector3(rnd(-1.4, 1.4), -0.95, -1.4));
      spark(p, Math.random() < 0.5 ? 0xff7a2a : 0xffc04a, { size: rnd(0.12, 0.3), vel: new THREE.Vector3(0, rnd(0.8, 1.6), 0), life: rnd(0.3, 0.6) });
    }

    // torches flicker
    for (const t of torches) {
      const f = 0.85 + 0.15 * Math.sin(time * 9 + t.phase) + 0.08 * Math.sin(time * 23 + t.phase * 2);
      t.light.intensity = t.base * f;
      t.flame.scale.set(1.2 * f, 1.8 * (0.9 + 0.2 * f), 1);
    }
    rune.rotation.z += dt * 0.05;

    // motes drift up and wander
    const pos = moteGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < MOTES; i++) {
      let y = pos.getY(i) + dt * (0.12 + (moteSeed[i] % 1) * 0.2);
      if (y > 7.5) y = 0;
      pos.setY(i, y);
      pos.setX(i, pos.getX(i) + Math.sin(time * 0.5 + moteSeed[i]) * dt * 0.15);
    }
    pos.needsUpdate = true;
    moteMat.opacity = 0.55 + 0.35 * Math.sin(time * 1.3);

    // spells
    for (let i = flights.length - 1; i >= 0; i--) {
      const fl = flights[i];
      fl.t += dt / fl.dur;
      const t = Math.min(1, fl.t);
      const e = t * t * (1.6 - 0.6 * t); // speeds up into the hit
      const a = fl.from.clone().lerp(fl.mid, e), b = fl.mid.clone().lerp(fl.to, e);
      fl.sprite.position.copy(a.lerp(b, e));
      const grow = 0.55 + e * 0.8;
      const mat = fl.sprite.material as THREE.SpriteMaterial;
      const asp = mat.map ? (mat.map.image as HTMLCanvasElement).width / (mat.map.image as HTMLCanvasElement).height : 1;
      fl.sprite.scale.set(fl.size * asp * 0.4 * grow, fl.size * 0.4 * grow, 1);
      fl.trailAt -= dt;
      if (fl.trailAt <= 0 && !still) {
        fl.trailAt = 0.016;
        spark(fl.sprite.position, fl.color, { size: rnd(0.05, 0.13) * fl.size, life: 0.35, opacity: 0.8, vel: new THREE.Vector3(rnd(-0.3, 0.3), rnd(-0.3, 0.3), rnd(-0.3, 0.3)) });
      }
      if (t >= 1) {
        scene.remove(fl.sprite); mat.map?.dispose(); mat.dispose();
        flights.splice(i, 1);
        fl.done();
      }
    }
    // particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life += dt;
      if (p.life >= p.max) { scene.remove(p.sprite); (p.sprite.material as THREE.Material).dispose(); particles.splice(i, 1); continue; }
      p.vel.y += p.gravity * dt;
      p.sprite.position.addScaledVector(p.vel, dt);
      if (p.grow) p.sprite.scale.multiplyScalar(1 + p.grow * dt);
      (p.sprite.material as THREE.SpriteMaterial).opacity = 1 - p.life / p.max;
    }
    for (let i = floats.length - 1; i >= 0; i--) {
      const f = floats[i];
      f.life += dt;
      f.sprite.position.y += dt * 0.8;
      (f.sprite.material as THREE.SpriteMaterial).opacity = Math.min(1, 2.2 - f.life * 2);
      if (f.life > 1.1) { scene.remove(f.sprite); (f.sprite.material as THREE.SpriteMaterial).map?.dispose(); (f.sprite.material as THREE.Material).dispose(); floats.splice(i, 1); }
    }
    renderer.render(scene, camera);
  }

  const api: ArenaApi = {
    setup,
    setActive(on) {
      if (on === active) return;
      active = on;
      canvas.classList.toggle('on', on);
      if (on) { resize(); last = performance.now(); raf = requestAnimationFrame(frame); }
      else cancelAnimationFrame(raf);
    },
    async cast(from, to, kanji, o = {}) {
      const kind = o.kind ?? 'attack';
      const friendly = from === 'me' || from.startsWith('ally:');
      const color = kind === 'heal' ? '#5dffa8' : kind === 'mana' ? '#ffd479' : friendly ? '#a98bff' : '#ff6b6b';
      const caster = fighters.get(from);
      if (caster) caster.lungeUntil = performance.now() + 450;
      if (from === 'me') channelShown = Math.max(channelShown, 1.6); // the crystal flares
      if (kind !== 'attack') {
        // heals and mana: a rising swirl on the caster
        const at = pointOf(from);
        for (let i = 0; i < 30; i++) spark(at.clone().add(new THREE.Vector3(rnd(-0.6, 0.6), rnd(-0.8, 0.2), rnd(-0.3, 0.3))), color, { size: rnd(0.08, 0.2), vel: new THREE.Vector3(rnd(-0.2, 0.2), rnd(0.8, 1.8), 0), life: rnd(0.6, 1.1) });
        if (from === 'me') screenHit(kind === 'heal' ? '80,255,160' : '255,212,121');
        if (o.damage) float(from, `+${o.damage}`, color);
        return;
      }
      const start = pointOf(from, from === 'me' ? 'head' : from === 'boss' ? 'mouth' : 'chest');
      const end = to === 'me' ? camera.localToWorld(new THREE.Vector3(rnd(-0.2, 0.2), 0.05, -1.3)) : pointOf(to);
      const size = (o.crit ? 1.5 : 1) * (to === 'me' ? 1.3 : 1.15);
      await fly(start, end, kanji, color, size, 0.85);
      burst(end, color, o.crit ? 46 : 28, o.crit ? 4.4 : 3.2, to === 'me' ? 0.12 : 0.22);
      if (to === 'me') { screenHit(); kick(o.crit ? 0.18 : 0.11); }
      else { const t = fighters.get(to); if (t) t.hurtUntil = performance.now() + 450; kick(o.crit ? 0.07 : 0.035); }
      if (o.damage) float(to, `−${o.damage}${o.crit ? '!' : ''}`, to === 'me' ? '#ff6b81' : o.crit ? '#ff9a3a' : '#ffd479');
    },
    fizzle(who) {
      const at = pointOf(who, 'head');
      for (let i = 0; i < 14; i++) spark(at, 0x9a9aa8, { size: rnd(0.1, 0.25), vel: new THREE.Vector3(rnd(-0.6, 0.6), rnd(0.3, 1), rnd(-0.3, 0.3)), life: 0.8, opacity: 0.6 });
      if (who === 'me') channelShown = 0;
    },
    ko(who) {
      const f = fighters.get(who);
      if (!f || f.ko) return;
      f.ko = true;
      const start = performance.now();
      const fall = () => {
        const t = Math.min(1, (performance.now() - start) / 700);
        f.mat.rotation = (Math.PI / 2) * t * (who === 'boss' ? -1 : 1);
        f.mat.opacity = 1 - t * 0.6;
        f.sprite.position.y = -t * f.height * 0.2;
        if (t < 1) requestAnimationFrame(fall);
      };
      fall();
      burst(pointOf(who), 0xffffff, 40, 3, 0.25);
    },
    onfire(who, on) {
      if (who === 'me') {
        if (on && !myFire) { myFire = new THREE.Group(); camera.add(myFire); }
        else if (!on && myFire) { camera.remove(myFire); myFire = null; }
        return;
      }
      const f = fighters.get(who);
      if (f) f.fire = on ? (f.fire ?? new THREE.Group()) : null;
    },
    channel(level) { channelLevel = Math.max(0, Math.min(1, level)); },
    oppChannel(on) { oppChannelOn = on; },
    inhale(on) { inhaling = on; },
    breath(victims, damage) {
      inhaling = false;
      const m = pointOf('boss', 'mouth');
      const dest = camera.localToWorld(new THREE.Vector3(0, -0.2, -1));
      for (let i = 0; i < 160; i++) {
        setTimeout(() => {
          const v = dest.clone().add(new THREE.Vector3(rnd(-2.5, 2.5), rnd(-1, 1), 0)).sub(m).normalize().multiplyScalar(rnd(7, 11));
          spark(m, Math.random() < 0.4 ? 0xffd25a : 0xff5a1a, { size: rnd(0.3, 0.7), vel: v, life: rnd(0.6, 0.9), grow: 1.2 });
        }, i * 5);
      }
      setTimeout(() => {
        if (victims.includes('me')) { screenHit('255,120,30'); kick(0.16); float('me', `−${damage}`, '#ff9a3a'); }
        for (const v of victims) if (v !== 'me') { const f = fighters.get(v); if (f) f.hurtUntil = performance.now() + 500; float(v, `−${damage}`, '#ff9a3a'); }
      }, 450);
    },
    claw(victim, damage) {
      const b = fighters.get('boss');
      if (b) b.lungeUntil = performance.now() + 450;
      setTimeout(() => {
        if (victim === 'me') { screenHit(); kick(0.13); overlay.classList.add('claw'); setTimeout(() => overlay.classList.remove('claw'), 500); }
        else { const f = fighters.get(victim); if (f) f.hurtUntil = performance.now() + 450; }
        float(victim, `−${damage}`, '#ff6b81');
      }, 200);
    },
    float,
    dispose() {
      api.setActive(false);
      removeEventListener('pointermove', onMove);
      removeEventListener('resize', resize);
      overlay.remove();
      renderer.dispose();
    },
  };
  resize();
  return api;
}

// The bundle is loaded with a <script> tag; main.ts picks this up.
(globalThis as unknown as { KWArena3D: typeof createArena }).KWArena3D = createArena;
