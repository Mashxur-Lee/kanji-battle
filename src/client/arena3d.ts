// The 2.5D arena: the duel seen from just behind your character, drawn with Three.js behind the normal
// game UI.
//
// Your character (a low-poly 3D model holding a magic staff — wizard, witch, goblin, knight, apprentice or
// adventurer) stands in the foreground; the opponent faces you across a torch-lit stone arena; your chosen
// background is painted far behind, with grass and trees bridging it to the ground. The camera follows the
// mouse a little (parallax). Your staff glows and moves while you write or type. Spells are kanji that fly
// across with a trail; hits flash and shake the camera; Deck Duel cards have their own effects (lightning,
// frost, fire).
//
// This file is bundled on its own (public/arena3d.js) and only loaded when the 3D arena is switched on,
// so the menus stay light. It knows nothing about the game rules: the UI calls the effects below.

import * as THREE from 'three';
import { buildCharacter, kindFor, type Character } from './models3d';

export type Who = 'me' | 'opp' | 'boss' | `ally:${string}`;
export type TimeOfDay = 'day' | 'sunset' | 'night';
/** A fighter: a 3D character model (character = deck hero or level avatar), or a pixel sprite (the dragon). */
export interface FighterArt { id: string; name?: string; character?: string; svg?: string; flame?: string }
export interface ArenaSetup {
  /** battle screens: you stand left, the opponent right of the centre panel; Deck Duel: you bottom-right */
  layout: 'battle' | 'deck';
  bgSvg: string; // the chosen background (full SVG markup), shown far behind the arena
  bgKey: string;
  time: TimeOfDay;
  me: FighterArt;
  opp: FighterArt | null;
  allies: FighterArt[];
  boss: FighterArt | null; // the dragon
}
export type SpellFx = 'bolt' | 'frost' | 'fire';
export interface ArenaApi {
  setup(s: ArenaSetup): void;
  setActive(on: boolean): void;
  cast(from: Who, to: Who, kanji: string, o?: { damage?: number; crit?: boolean; kind?: 'attack' | 'heal' | 'mana'; fx?: SpellFx }): Promise<void>;
  fizzle(who: Who): void;
  ko(who: Who): void;
  /** combo flames (5+ in a row) or a Deck Duel power: flames in the player's colour around them */
  onfire(who: Who, on: boolean, color?: string): void;
  channel(level: number): void;
  /** you drew a stroke / typed a letter: the staff moves */
  twitch(): void;
  /** "CAST!" pressed: the staff thrusts forward with a flash (the spell itself comes on the answer) */
  thrust(): void;
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


interface Fighter {
  key: string;
  group: THREE.Group; // position on the floor
  model: Character | null; // 3D character …
  sprite: THREE.Sprite | null; // … or a pixel sprite (the dragon)
  spriteMat: THREE.SpriteMaterial | null;
  height: number;
  ko: boolean;
  flame: THREE.Color | null; // combo flames / power aura
  aura: THREE.Sprite;
  hurtUntil: number; lungeUntil: number; frostUntil: number; burnUntil: number;
  frosted: boolean;
}
interface Particle { sprite: THREE.Sprite; vel: THREE.Vector3; life: number; max: number; grow: number; gravity: number }

const TREE_BGS = ['forest', 'swamp', 'worldtree'];

export function createArena(canvas: HTMLCanvasElement): ArenaApi | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  } catch { return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x1a1630, 20, 58);
  const camera = new THREE.PerspectiveCamera(55, 16 / 9, 0.05, 200);
  const CAM = new THREE.Vector3(0, 1.75, 7.2);
  const LOOK = new THREE.Vector3(0, 1.45, 0);
  camera.position.copy(CAM);
  scene.add(camera);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 1);
  const sun = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(hemi, sun);
  const fill = new THREE.PointLight(0xffffff, 6, 9, 2); // lights your character from the camera side
  fill.position.set(0, 3, 7.5);
  scene.add(fill);

  // ── far background: the player's chosen scene on a huge curved screen, its own ground at the horizon ──
  const bgMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false, side: THREE.DoubleSide });
  const bgMesh = new THREE.Mesh(new THREE.CylinderGeometry(70, 70, 66, 48, 1, true, Math.PI - 0.95, 1.9), bgMat);
  bgMesh.scale.set(-1, 1, 1);
  bgMesh.position.set(0, 13, 6);
  scene.add(bgMesh);

  // ── ground: grass all around the arena, fading into the fog ──
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x2a3a24, roughness: 1 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(90, 48), groundMat);
  ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02;
  scene.add(ground);
  const grassMat = new THREE.MeshStandardMaterial({ color: 0x4f7a3a, roughness: 0.9, flatShading: true });
  const GRASS = 2600;
  const grass = new THREE.InstancedMesh(new THREE.ConeGeometry(0.05, 0.42, 3), grassMat, GRASS);
  {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sc = new THREE.Vector3();
    const col = new THREE.Color();
    for (let i = 0; i < GRASS; i++) {
      const r = 9.9 + Math.pow(Math.random(), 0.7) * 30, a = Math.random() * Math.PI * 2;
      v.set(Math.cos(a) * r, 0.18, Math.sin(a) * r - 1);
      e.set(rnd(-0.25, 0.25), Math.random() * 3, rnd(-0.25, 0.25)); q.setFromEuler(e);
      const k = rnd(0.7, 1.6); sc.set(k, k * rnd(0.8, 1.5), k);
      m.compose(v, q, sc); grass.setMatrixAt(i, m);
      grass.setColorAt(i, col.setHSL(rnd(0.22, 0.32), rnd(0.35, 0.6), rnd(0.3, 0.5)));
    }
  }
  scene.add(grass);
  // trees / bushes / rocks between the grass and the painted background, so nothing seems to float
  const propsGroup = new THREE.Group();
  scene.add(propsGroup);
  const treeMat = new THREE.MeshStandardMaterial({ color: 0x1e3b2a, roughness: 1, flatShading: true });
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3a2a1c, roughness: 1 });
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x5c5866, roughness: 1, flatShading: true });
  function buildProps(bgId: string) {
    propsGroup.clear();
    const trees = TREE_BGS.includes(bgId);
    const n = trees ? 70 : 34;
    for (let i = 0; i < n; i++) {
      const a = rnd(Math.PI * 1.08, Math.PI * 1.92); // the far side (in view)
      const r = rnd(24, 48);
      const x = Math.cos(a) * r, z = Math.sin(a) * r - 1;
      if (trees) {
        const h = rnd(6, 13);
        const t = new THREE.Group();
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.4, h * 0.3, 6), trunkMat); trunk.position.y = h * 0.15;
        t.add(trunk);
        for (let k = 0; k < 3; k++) { const c = new THREE.Mesh(new THREE.ConeGeometry(h * (0.32 - k * 0.07), h * 0.5, 7), treeMat); c.position.y = h * (0.42 + k * 0.2); t.add(c); }
        t.position.set(x, 0, z);
        propsGroup.add(t);
      } else {
        const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(rnd(0.8, 2.6), 0), Math.random() < 0.5 ? rockMat : treeMat);
        rock.position.set(x, 0.3, z); rock.scale.y = rnd(0.5, 0.9); rock.rotation.y = Math.random() * 3;
        propsGroup.add(rock);
      }
    }
  }

  // ── the stone arena ──
  const floor = new THREE.Mesh(new THREE.CircleGeometry(9.5, 64), new THREE.MeshStandardMaterial({ map: floorTexture(), roughness: 0.92, metalness: 0.02 }));
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(9.5, 0.18, 8, 96), new THREE.MeshStandardMaterial({ color: 0x4b4656, roughness: 0.85 }));
  rim.rotation.x = Math.PI / 2; rim.position.y = 0.05;
  scene.add(rim);
  const rune = new THREE.Mesh(new THREE.PlaneGeometry(9, 9), new THREE.MeshBasicMaterial({ map: ringTexture('#a98bff'), transparent: true, opacity: 0.38, blending: THREE.AdditiveBlending, depthWrite: false }));
  rune.rotation.x = -Math.PI / 2; rune.position.y = 0.03; rune.scale.x = -1;
  scene.add(rune);

  // pillars with torches around the far half
  const pillarMat = new THREE.MeshStandardMaterial({ color: 0x5a5466, roughness: 0.9 });
  const fireGlow = glowTexture('rgba(255,170,80,1)', 'rgba(255,120,40,0)');
  const torches: Array<{ light: THREE.PointLight; flame: THREE.Sprite; base: number; phase: number }> = [];
  for (const a of [-2.35, -1.65, -1.15, 1.15, 1.65, 2.35]) {
    const ang = a - Math.PI / 2;
    const x = Math.cos(ang) * 10.4, z = Math.sin(ang) * 10.4 - 1.5;
    const p = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 4.2, 10), pillarMat); shaft.position.y = 2.1;
    const cap = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 1.2), pillarMat); cap.position.y = 4.35;
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.22, 0.3, 10), new THREE.MeshStandardMaterial({ color: 0x2d2a33, metalness: 0.6, roughness: 0.4 })); bowl.position.y = 4.65;
    const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: fireGlow, color: 0xffb060, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    flame.position.y = 5.05; flame.scale.set(1.3, 1.8, 1);
    const light = new THREE.PointLight(0xff9a4a, 10, 14, 2); light.position.y = 5.1;
    p.add(shaft, cap, bowl, flame, light);
    p.position.set(x, 0, z);
    scene.add(p);
    torches.push({ light, flame, base: 1, phase: Math.random() * 10 });
  }

  // drifting motes
  const MOTES = 260;
  const moteGeo = new THREE.BufferGeometry();
  const motePos = new Float32Array(MOTES * 3), moteSeed = new Float32Array(MOTES);
  for (let i = 0; i < MOTES; i++) { motePos[i * 3] = rnd(-14, 14); motePos[i * 3 + 1] = rnd(0, 7); motePos[i * 3 + 2] = rnd(-12, 6); moteSeed[i] = Math.random() * 100; }
  moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
  const moteMat = new THREE.PointsMaterial({ size: 0.12, map: glowTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffffff, sizeAttenuation: true });
  scene.add(new THREE.Points(moteGeo, moteMat));

  // ── fighters ───────────────────────────────────────────────────────────────
  const sparkTex = glowTexture();
  const shadowTex = glowTexture('rgba(0,0,0,0.75)', 'rgba(0,0,0,0)');
  const auraTex = glowTexture('rgba(150,120,255,1)', 'rgba(120,80,255,0)');
  const fighters = new Map<string, Fighter>(); // 'me', 'opp', 'boss', 'ally:<id>'
  function makeFighter(key: string, art: FighterArt): Fighter {
    const group = new THREE.Group();
    let model: Character | null = null, sprite: THREE.Sprite | null = null, spriteMat: THREE.SpriteMaterial | null = null;
    let height = 1.95;
    if (art.svg) {
      height = 4.6;
      spriteMat = new THREE.SpriteMaterial({ transparent: true, alphaTest: 0.05 });
      sprite = new THREE.Sprite(spriteMat);
      sprite.center.set(0.5, 0);
      sprite.scale.set(height * 1.33, height, 1);
      svgTexture(art.svg, (t, aspect) => { spriteMat!.map = t; spriteMat!.needsUpdate = true; sprite!.scale.set(height * aspect, height, 1); });
      group.add(sprite);
    } else {
      model = buildCharacter(kindFor(art.character ?? 'wizard'), key === 'me' ? 'me' : key.startsWith('ally:') ? 'ally' : 'opp', sparkTex);
      height = model.height;
      group.add(model.root);
    }
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(height * 0.7, height * 0.32), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.02;
    group.add(shadow);
    if (key !== 'me') {
      const circle = new THREE.Mesh(new THREE.PlaneGeometry(height * 1.1, height * 1.1), new THREE.MeshBasicMaterial({ map: ringTexture(key === 'boss' ? '#5dff8a' : '#ff8a8a'), transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false }));
      circle.rotation.x = -Math.PI / 2; circle.position.y = 0.04; circle.name = 'circle';
      group.add(circle);
    }
    const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: auraTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
    aura.scale.set(height * 1.2, height * 1.2, 1); aura.position.y = height * 0.5;
    group.add(aura);
    scene.add(group);
    const f: Fighter = { key, group, model, sprite, spriteMat, height, ko: false, flame: null, aura, hurtUntil: 0, lungeUntil: 0, frostUntil: 0, burnUntil: 0, frosted: false };
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

  // ── you, in first person: your hand and staff (styled after your character) ──
  const fp = new THREE.Group();
  camera.add(fp);
  const FP_BATTLE = new THREE.Vector3(0.95, -0.92, -1.65), FP_DECK = new THREE.Vector3(1.05, -1.2, -1.65); // Deck Duel: below the chat
  fp.scale.setScalar(0.78);
  const fpBase = FP_BATTLE.clone();
  const wood = new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.75, flatShading: true });
  const gold = new THREE.MeshStandardMaterial({ color: 0xc9a227, metalness: 0.3, roughness: 0.35 });
  const gemMat = new THREE.MeshStandardMaterial({ color: 0xb48cff, emissive: 0x8a5cff, emissiveIntensity: 1.2, roughness: 0.15, flatShading: true });
  const sleeveMat = new THREE.MeshStandardMaterial({ color: 0x3d5ad6, roughness: 0.9, flatShading: true, side: THREE.DoubleSide });
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xf0c49a, roughness: 0.8, flatShading: true });
  const staffGroup = new THREE.Group(); // pivots at the hand
  fp.add(staffGroup);
  const staffMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.04, 1.9, 8), wood); staffMesh.position.y = 0.15;
  const crown = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.015, 6, 16), gold); crown.position.y = 1.02; crown.rotation.y = Math.PI / 2;
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.085, 0), gemMat); gem.position.y = 1.13; gem.scale.set(1, 1.5, 1);
  const gemGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: sparkTex, color: 0xb48cff, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.5 }));
  gemGlow.position.copy(gem.position); gemGlow.scale.setScalar(0.45);
  const gemLight = new THREE.PointLight(0xa070ff, 0.6, 4, 2); gemLight.position.copy(gem.position);
  const fist = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), skinMat); fist.scale.set(1, 1.25, 1); fist.position.set(0, -0.02, 0.03);
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.19, 0.95, 10, 1, true), sleeveMat);
  sleeve.position.set(0.2, -0.42, 0.18); sleeve.rotation.set(-0.3, 0, 0.8);
  const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.03, 6, 14), gold); cuff.position.set(0.03, -0.1, 0.05); cuff.rotation.set(Math.PI / 2 - 0.3, 0.8, 0);
  staffGroup.add(staffMesh, crown, gem, gemGlow, gemLight, fist);
  fp.add(sleeve, cuff);
  const handLight = new THREE.PointLight(0xffffff, 1.4, 3, 2); handLight.position.set(0.3, 0.3, -0.5); camera.add(handLight);
  const HANDS: Record<string, { sleeve: number; skin: number }> = {
    wizard: { sleeve: 0x3d5ad6, skin: 0xf0c49a }, witch: { sleeve: 0x5b2a86, skin: 0x9ad07a }, goblin: { sleeve: 0x7a5a2e, skin: 0x6fbf4a },
    knight: { sleeve: 0xc4ccd8, skin: 0xb8c0cc }, kid: { sleeve: 0xd8662f, skin: 0xf0c49a }, human: { sleeve: 0x8a5a33, skin: 0xf0c49a },
  };
  // launching the gem: the staff thrusts forward and its gem flies off with the spell, then grows back
  let thrustAt = -1e9, gemGoneAt = -1e9;
  let myFlame: THREE.Color | null = null;

  const tmp = new THREE.Vector3();
  function pointOf(who: Who, part: 'chest' | 'head' | 'staff' | 'mouth' = 'chest'): THREE.Vector3 {
    if (who === 'me') {
      if (part === 'staff' || part === 'head') { gem.getWorldPosition(tmp); return tmp.clone(); }
      return camera.localToWorld(new THREE.Vector3(rnd(-0.15, 0.15), -0.1, -1.4)); // spells at you fly at the camera
    }
    const f = fighters.get(who);
    if (!f) return new THREE.Vector3(0, 1.4, -3);
    if (f.model && part === 'staff') { f.model.crystal.getWorldPosition(tmp); return tmp.clone(); }
    const p = f.group.position.clone();
    const h = f.height * f.group.scale.y;
    if (who === 'boss' && part === 'mouth') return p.add(new THREE.Vector3(-f.height * 0.55, f.height * 0.62, 0.3));
    return p.add(new THREE.Vector3(0, h * (part === 'head' ? 0.85 : 0.6), 0));
  }

  // ── short-lived effects ─────────────────────────────────────────────────────
  const particles: Particle[] = [];
  function spark(at: THREE.Vector3, color: THREE.ColorRepresentation, o: { size?: number; vel?: THREE.Vector3; life?: number; grow?: number; gravity?: number; opacity?: number; solid?: boolean } = {}) {
    // solid: normal blending (shows on bright daylight scenes); otherwise an additive glow
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: sparkTex, color, blending: o.solid ? THREE.NormalBlending : THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: o.opacity ?? 1 }));
    s.position.copy(at); s.scale.setScalar(o.size ?? 0.25);
    scene.add(s);
    particles.push({ sprite: s, vel: o.vel ?? new THREE.Vector3(), life: 0, max: o.life ?? 0.6, grow: o.grow ?? 0, gravity: o.gravity ?? 0 });
  }
  function burst(at: THREE.Vector3, color: THREE.ColorRepresentation, n = 26, speed = 3.2, size = 0.22) {
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3(rnd(-1, 1), rnd(-0.6, 1.2), rnd(-1, 1)).normalize().multiplyScalar(rnd(speed * 0.4, speed));
      spark(at, color, { vel: v, size: rnd(size * 0.6, size * 1.4), life: rnd(0.4, 0.9), gravity: -3 });
    }
    spark(at, color, { size: 0.6, grow: 6, life: 0.35, opacity: 0.9 });
  }
  /** flames rising around a fighter (combo / power / Inferno) */
  function flames(f: Fighter, color: THREE.ColorRepresentation, amount = 1) {
    const base = f.group.position;
    const w = f.model ? 0.45 : f.height * 0.35;
    for (let i = 0; i < amount; i++) {
      const k = f.group.scale.y;
      // tongues of flame: big soft blobs that rise, shrink and fade, with bright sparks in between
      spark(new THREE.Vector3(base.x + rnd(-w, w) * k, base.y + rnd(0.05, f.height * 0.45) * k, base.z + rnd(-w, w) * 0.5 * k), color,
        { size: rnd(0.35, 0.7) * k, vel: new THREE.Vector3(rnd(-0.1, 0.1), rnd(1.4, 2.6), 0), life: rnd(0.35, 0.65), grow: -0.9, opacity: 0.75, solid: true });
      spark(new THREE.Vector3(base.x + rnd(-w, w) * 0.6 * k, base.y + rnd(0.05, f.height * 0.35) * k, base.z), color, { size: rnd(0.3, 0.5) * k, vel: new THREE.Vector3(0, rnd(1.2, 2), 0), life: 0.4, grow: -1 });
      if (Math.random() < 0.5) spark(new THREE.Vector3(base.x + rnd(-w, w) * k, base.y + rnd(0.2, f.height * 0.9) * k, base.z), 0xffffff, { size: rnd(0.05, 0.1) * k, vel: new THREE.Vector3(0, rnd(1.5, 3), 0), life: 0.5 });
    }
  }
  // lightning bolts (Bolt card)
  const bolts: Array<{ line: THREE.Line; life: number }> = [];
  function lightning(to: THREE.Vector3) {
    for (let k = 0; k < 2; k++) {
      const pts: THREE.Vector3[] = [];
      const top = to.clone().add(new THREE.Vector3(rnd(-1.5, 1.5), 9, rnd(-1, 1)));
      for (let i = 0; i <= 12; i++) {
        const p = top.clone().lerp(to, i / 12);
        if (i > 0 && i < 12) p.add(new THREE.Vector3(rnd(-0.45, 0.45), rnd(-0.2, 0.2), rnd(-0.3, 0.3)));
        pts.push(p);
      }
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: k ? 0xffffff : 0x9fd8ff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      scene.add(line);
      bolts.push({ line, life: 0 });
      // lines are 1 px in WebGL: glowing beads along the bolt give it body
      for (let i = 0; i < pts.length - 1; i++) {
        const seg = pts[i].distanceTo(pts[i + 1]);
        for (let d = 0; d < seg; d += 0.09) {
          spark(pts[i].clone().lerp(pts[i + 1], d / seg), k ? 0xffffff : 0x8fd0ff, { size: k ? 0.12 : 0.3, life: 0.28, opacity: k ? 1 : 0.7 });
        }
      }
    }
    const flash = new THREE.PointLight(0xbfe6ff, 60, 16, 2); flash.position.copy(to).add(new THREE.Vector3(0, 2, 1));
    scene.add(flash);
    setTimeout(() => scene.remove(flash), 160);
    burst(to, 0xbfe6ff, 30, 4, 0.18);
  }
  const floats: Array<{ sprite: THREE.Sprite; life: number }> = [];
  function float(who: Who, text: string, color = '#ffd479') {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: numberTexture(text, color), transparent: true, depthWrite: false, depthTest: false }));
    s.position.copy(pointOf(who, 'head')).add(new THREE.Vector3(rnd(-0.3, 0.3), 0.4, 0.3));
    const sc = who === 'me' ? 0.9 : 1.3;
    s.scale.set(sc, sc / 2, 1);
    s.renderOrder = 10;
    scene.add(s);
    floats.push({ sprite: s, life: 0 });
  }

  // screen overlays for hits on you
  const overlay = document.createElement('div');
  overlay.className = 'arena3d-hit';
  document.body.append(overlay);
  function screenHit(color = '255,40,60', cls = '') {
    overlay.style.setProperty('--hit', color);
    overlay.className = 'arena3d-hit';
    void overlay.offsetWidth;
    overlay.className = `arena3d-hit on ${cls}`;
  }
  let shake = 0;
  const kick = (amount: number) => { if (!reduced()) shake = Math.max(shake, amount); };

  // spells in flight
  interface Flight { sprite: THREE.Sprite; from: THREE.Vector3; to: THREE.Vector3; mid: THREE.Vector3; t: number; dur: number; color: THREE.Color; size: number; done: () => void; trailAt: number; gem?: THREE.Mesh }
  const flights: Flight[] = [];
  function fly(from: THREE.Vector3, to: THREE.Vector3, kanji: string, color: string, size: number, dur: number): Promise<void> {
    const { tex, aspect } = textTexture(kanji, color);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
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
  let twitchAmp = 0;
  const twitchRot = new THREE.Euler(), twitchTarget = new THREE.Euler();
  let oppChannelOn = false;
  let inhaling = false;
  let spriteTint = new THREE.Color(0xffffff);
  let current: ArenaSetup | null = null;

  function screenSpot(fx: number, depthZ: number) {
    const dist = CAM.z - depthZ;
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * dist;
    return fx * halfH * camera.aspect;
  }
  /** Places everyone (and turns them to face their foe), whatever the window size. */
  function placeFighters() {
    if (!current) return;
    const s = current;
    const opp = fighters.get('opp');
    if (opp?.model) opp.group.scale.setScalar(1.3); // across the arena: a little larger than life, so you can see them
    if (opp) opp.group.position.set(screenSpot(s.layout === 'deck' ? 0.36 : 0.58, -2.2), 0, -2.2);
    const boss = fighters.get('boss');
    if (boss) boss.group.position.set(screenSpot(0.5, -5.5), 0, -5.5);
    s.allies.forEach((a, i) => {
      const f = fighters.get(`ally:${a.id}`);
      if (f) f.group.position.set(screenSpot(-0.36 + i * 0.13, -0.6 - i * 1.1), 0, -0.6 - i * 1.1);
    });
    // everyone faces their target: you face the opponent / dragon, the opponent faces you
    const foe = (boss ?? opp)?.group.position;
    for (const [key, f] of fighters) {
      if (!f.model) continue;
      const target = key === 'opp' ? CAM : foe ?? new THREE.Vector3(0, 0, -3);
      f.model.root.rotation.y = Math.atan2(target.x - f.group.position.x, target.z - f.group.position.z);
    }
  }

  function setup(s: ArenaSetup) {
    current = s;
    layout = s.layout;
    clearFighters();
    const hand = HANDS[kindFor(s.me.character ?? 'wizard')] ?? HANDS.wizard;
    sleeveMat.color.set(hand.sleeve); skinMat.color.set(hand.skin);
    skinMat.metalness = s.me.character === 'knight' ? 0.3 : 0; // a gauntlet
    fpBase.copy(s.layout === 'deck' ? FP_DECK : FP_BATTLE);
    if (s.opp) makeFighter('opp', s.opp);
    if (s.boss) makeFighter('boss', s.boss);
    for (const a of s.allies) makeFighter(`ally:${a.id}`, a);
    placeFighters();
    const L = LIGHT[s.time];
    hemi.color.set(L.sky); hemi.groundColor.set(L.ground); hemi.intensity = L.hemi;
    sun.color.set(L.sun); sun.intensity = L.sunInt; sun.position.set(...L.sunPos);
    fill.intensity = s.time === 'night' ? 9 : 5;
    for (const t of torches) t.base = L.torch;
    moteMat.color.set(L.motes);
    spriteTint = new THREE.Color(L.spriteTint);
    if (bgKey !== s.bgKey) {
      bgKey = s.bgKey;
      buildProps(s.bgKey.split('-')[0]);
      backgroundTexture(s.bgSvg, (tex, groundCol, skyCol) => {
        bgMat.map?.dispose(); bgMat.map = tex; bgMat.needsUpdate = true;
        (scene.fog as THREE.Fog).color.copy(groundCol).lerp(skyCol, 0.35);
        groundMat.color.copy(groundCol).multiplyScalar(0.9);
        grassMat.color.copy(groundCol).lerp(new THREE.Color(0x4f8a3a), 0.45).multiplyScalar(1.15);
        treeMat.color.copy(groundCol).lerp(new THREE.Color(0x173a24), 0.5);
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
    camera.fov = camera.aspect < 1.3 ? 66 : 55;
    camera.updateProjectionMatrix();
    placeFighters();
  }
  addEventListener('resize', resize);

  // ── materials on a model: hurt flash, frost, burning ───────────────────────
  const RED = new THREE.Color(0xff2a2a), ICE = new THREE.Color(0x8fdcff), ICE_GLOW = new THREE.Color(0x2a7cff), BURN = new THREE.Color(0xff6a1a);
  function tintModel(f: Fighter, now: number) {
    const hurt = now < f.hurtUntil, frost = now < f.frostUntil, burn = now < f.burnUntil;
    if (f.model) {
      if (frost !== f.frosted) {
        f.frosted = frost;
        for (const m of f.model.materials) { m.mat.opacity = frost ? 0.5 : 1; m.mat.depthWrite = !frost; }
      }
      for (const m of f.model.materials) {
        m.mat.color.copy(m.color);
        if (frost) m.mat.color.lerp(ICE, 0.75);
        if (hurt) { m.mat.emissive.copy(RED); m.mat.emissiveIntensity = 0.6; }
        else if (frost) { m.mat.emissive.copy(ICE_GLOW); m.mat.emissiveIntensity = 0.45; }
        else if (burn) { m.mat.color.lerp(BURN, 0.35); m.mat.emissive.copy(BURN); m.mat.emissiveIntensity = 0.55 + 0.3 * Math.sin(now / 40); }
        else { m.mat.emissive.copy(m.emissive); m.mat.emissiveIntensity = 1; }
      }
    } else if (f.spriteMat) {
      f.spriteMat.color.copy(hurt ? new THREE.Color(1, 0.35, 0.35) : frost ? ICE : burn ? new THREE.Color(1, 0.7, 0.5) : spriteTint);
      f.spriteMat.opacity = frost ? 0.6 : f.ko ? f.spriteMat.opacity : 1;
    }
  }

  // ── the frame loop ─────────────────────────────────────────────────────────
  let active = false, raf = 0, last = performance.now(), time = 0;
  function frame(nowMs: number) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (nowMs - last) / 1000); last = nowMs; time += dt;
    const now = performance.now();
    const still = reduced();

    look.lerp(mouse, still ? 1 : 0.05);
    const sway = still ? 0 : Math.sin(time * 0.7) * 0.025;
    camera.position.set(CAM.x + look.x * 0.45, CAM.y - look.y * 0.22 + sway, CAM.z);
    camera.lookAt(LOOK.clone().add(new THREE.Vector3(look.x * 0.25, -look.y * 0.1, 0)));
    if (shake > 0) {
      camera.position.add(new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), 0).multiplyScalar(shake));
      camera.rotation.z += rnd(-1, 1) * shake * 0.15;
      shake = Math.max(0, shake - dt * 1.1);
    }

    channelShown += (channelLevel - channelShown) * Math.min(1, dt * 6);
    twitchAmp = Math.max(0, twitchAmp - dt * 2.2);
    twitchRot.x += (twitchTarget.x - twitchRot.x) * Math.min(1, dt * 14);
    twitchRot.y += (twitchTarget.y - twitchRot.y) * Math.min(1, dt * 14);
    twitchRot.z += (twitchTarget.z - twitchRot.z) * Math.min(1, dt * 14);
    if (twitchAmp <= 0) twitchTarget.set(0, 0, 0);
    const pulse = 0.5 + 0.5 * Math.sin(time * 6);

    // your hand and staff: charging (writing / typing) tilts the staff back and makes the gem glow;
    // a cast thrusts it forward and launches the gem; little random moves while you write
    {
      const th = Math.max(0, 1 - (now - thrustAt) / 380); // 1 → 0 after a thrust
      const thrust = th > 0 ? Math.sin(th * Math.PI) : 0;
      const charge = Math.min(1, channelShown);
      fp.position.set(fpBase.x - look.x * 0.04, fpBase.y + look.y * 0.03 + (still ? 0 : Math.sin(time * 1.6) * 0.008) + charge * 0.04, fpBase.z - thrust * 0.35);
      staffGroup.rotation.set(
        charge * 0.38 - thrust * 0.75 + twitchRot.x * 0.6 + (charge > 0.3 && !still ? Math.sin(time * 11) * 0.015 * charge : 0),
        twitchRot.y * 0.6,
        -0.2 + twitchRot.z * 0.6 + charge * 0.06,
      );
      const regrow = Math.min(1, Math.max(0, (now - gemGoneAt - 250) / 550));
      gem.scale.set(regrow, 1.5 * regrow, regrow);
      gemMat.emissiveIntensity = 1.2 + charge * (3 + pulse * 2) + thrust * 4;
      gemLight.intensity = 0.6 + charge * 6 + thrust * 8;
      gemGlow.scale.setScalar((0.45 + charge * (0.55 + pulse * 0.3) + thrust * 0.8) * Math.max(0.3, regrow));
      (gemGlow.material as THREE.SpriteMaterial).opacity = 0.45 + charge * 0.5;
      gem.rotation.y += dt * (0.8 + charge * 6);
      if (charge > 0.2 && regrow > 0.9 && !still && Math.random() < charge * 0.9) {
        // energy gathering into the gem
        gem.getWorldPosition(tmp);
        const from = tmp.clone().add(new THREE.Vector3(rnd(-0.35, 0.35), rnd(-0.35, 0.35), rnd(-0.35, 0.35)));
        spark(from, 0xc8a8ff, { size: rnd(0.02, 0.05), vel: tmp.clone().sub(from).multiplyScalar(2.6), life: 0.38 });
      }
      if (myFlame && !still && Math.random() < 0.9) {
        const p = camera.localToWorld(new THREE.Vector3(rnd(-1.5, 1.5), -0.98, -1.5));
        spark(p, myFlame, { size: rnd(0.12, 0.3), vel: new THREE.Vector3(0, rnd(0.8, 1.6), 0), life: rnd(0.3, 0.6), solid: Math.random() < 0.5, opacity: 0.85 });
      }
    }

    for (const [key, f] of fighters) {
      const circle = f.group.getObjectByName('circle');
      if (circle) circle.rotation.z += dt * 0.4;
      tintModel(f, now);
      if (f.ko) continue;
      const lunge = Math.max(0, f.lungeUntil - now) / 450;
      if (f.model) {
        const m = f.model;
        m.body.position.y = still ? 0 : Math.sin(time * 2 + f.height * 3) * 0.02;
        m.body.rotation.x = lunge * 0.18;
        // the staff arm: raised to cast, held forward while writing, with little random moves as you write
        const writing = key === 'me' ? channelShown : key === 'opp' && oppChannelOn ? 0.7 : 0;
        const ax = -0.15 - writing * 0.75 - lunge * 1.2 + (key === 'me' ? twitchRot.x : 0);
        m.arm.rotation.x += (ax - m.arm.rotation.x) * Math.min(1, dt * 10);
        m.arm.rotation.z = -0.35 + (key === 'me' ? twitchRot.z : 0) + (writing ? Math.sin(time * 9) * 0.05 * writing : 0);
        m.arm.rotation.y = key === 'me' ? twitchRot.y : 0;
        const glowLevel = key === 'me' ? channelShown : writing;
        m.crystalMat.emissiveIntensity = 1.2 + glowLevel * (3 + pulse * 2) + lunge * 3;
        m.glow.scale.setScalar(0.45 + glowLevel * (0.5 + pulse * 0.3) + lunge * 0.6);
        (m.glow.material as THREE.SpriteMaterial).opacity = 0.45 + glowLevel * 0.5;
        m.crystal.rotation.y += dt * (0.8 + glowLevel * 6);
        if (glowLevel > 0.3 && Math.random() < glowLevel * 0.6) {
          m.crystal.getWorldPosition(tmp);
          spark(tmp.clone().add(new THREE.Vector3(rnd(-0.1, 0.1), rnd(-0.1, 0.1), rnd(-0.1, 0.1))), (m.crystalMat.color as THREE.Color).getHex(), { size: rnd(0.03, 0.08), vel: new THREE.Vector3(rnd(-0.2, 0.2), rnd(0.2, 0.6), 0), life: 0.7 });
        }
      } else if (f.sprite) {
        f.sprite.position.y = still ? 0 : Math.abs(Math.sin(time * 2)) * 0.05;
        f.sprite.position.z = lunge * 0.4;
      }
      const auraOn = (key === 'opp' && oppChannelOn) || (key === 'boss' && inhaling);
      const am = f.aura.material as THREE.SpriteMaterial;
      am.opacity += ((auraOn ? 0.55 + 0.2 * Math.sin(time * 5) : f.flame ? 0.35 : 0) - am.opacity) * Math.min(1, dt * 5);
      am.color.copy(key === 'boss' ? new THREE.Color(0xff7a2a) : f.flame ?? new THREE.Color(0xb48cff));
      if (f.flame) flames(f, f.flame, 2);
      if (now < f.burnUntil) flames(f, Math.random() < 0.5 ? 0xff5a1a : 0xffb030, 3);
      if (now < f.frostUntil && Math.random() < 0.3) flames(f, 0xcff2ff, 1);
      if (key === 'boss' && inhaling && Math.random() < 0.8) {
        const mo = pointOf('boss', 'mouth');
        const from = mo.clone().add(new THREE.Vector3(rnd(-1.5, 1.5), rnd(-1, 1), rnd(-1, 1)));
        spark(from, 0xff9a3a, { size: 0.12, vel: mo.clone().sub(from).multiplyScalar(1.6), life: 0.55 });
      }
    }

    for (const t of torches) {
      const k = 0.85 + 0.15 * Math.sin(time * 9 + t.phase) + 0.08 * Math.sin(time * 23 + t.phase * 2);
      t.light.intensity = t.base * k;
      t.flame.scale.set(1.2 * k, 1.8 * (0.9 + 0.2 * k), 1);
    }
    rune.rotation.z += dt * 0.05;

    const pos = moteGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < MOTES; i++) {
      let y = pos.getY(i) + dt * (0.12 + (moteSeed[i] % 1) * 0.2);
      if (y > 7.5) y = 0;
      pos.setY(i, y);
      pos.setX(i, pos.getX(i) + Math.sin(time * 0.5 + moteSeed[i]) * dt * 0.15);
    }
    pos.needsUpdate = true;
    moteMat.opacity = 0.55 + 0.35 * Math.sin(time * 1.3);

    for (let i = flights.length - 1; i >= 0; i--) {
      const fl = flights[i];
      fl.t += dt / fl.dur;
      const t = Math.min(1, fl.t);
      const e = t * t * (1.6 - 0.6 * t);
      const a = fl.from.clone().lerp(fl.mid, e), b = fl.mid.clone().lerp(fl.to, e);
      fl.sprite.position.copy(a.lerp(b, e));
      if (fl.gem) { fl.gem.position.copy(fl.sprite.position); fl.gem.rotation.y += dt * 12; fl.gem.rotation.x += dt * 7; }
      const grow = 0.55 + e * 0.8;
      const mat = fl.sprite.material as THREE.SpriteMaterial;
      const img = mat.map?.image as HTMLCanvasElement | undefined;
      const asp = img ? img.width / img.height : 1;
      fl.sprite.scale.set(fl.size * asp * 0.4 * grow, fl.size * 0.4 * grow, 1);
      fl.trailAt -= dt;
      if (fl.trailAt <= 0 && !still) {
        fl.trailAt = 0.016;
        spark(fl.sprite.position, fl.color, { size: rnd(0.05, 0.13) * fl.size, life: 0.35, opacity: 0.8, vel: new THREE.Vector3(rnd(-0.3, 0.3), rnd(-0.3, 0.3), rnd(-0.3, 0.3)) });
      }
      if (t >= 1) {
        scene.remove(fl.sprite); mat.map?.dispose(); mat.dispose();
        if (fl.gem) scene.remove(fl.gem);
        flights.splice(i, 1);
        fl.done();
      }
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life += dt;
      if (p.life >= p.max) { scene.remove(p.sprite); (p.sprite.material as THREE.Material).dispose(); particles.splice(i, 1); continue; }
      p.vel.y += p.gravity * dt;
      p.sprite.position.addScaledVector(p.vel, dt);
      if (p.grow) p.sprite.scale.multiplyScalar(1 + p.grow * dt);
      (p.sprite.material as THREE.SpriteMaterial).opacity = 1 - p.life / p.max;
    }
    for (let i = bolts.length - 1; i >= 0; i--) {
      const b = bolts[i];
      b.life += dt;
      (b.line.material as THREE.LineBasicMaterial).opacity = b.life < 0.08 || (b.life > 0.14 && b.life < 0.2) ? 1 : 0.15;
      if (b.life > 0.32) { scene.remove(b.line); b.line.geometry.dispose(); (b.line.material as THREE.Material).dispose(); bolts.splice(i, 1); }
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

  /** what a Deck Duel card does to its target, on impact */
  function cardEffect(to: Who, fx: SpellFx | undefined, at: THREE.Vector3) {
    const t = fighters.get(to);
    const now = performance.now();
    if (fx === 'bolt') { lightning(t ? pointOf(to, 'head') : at); if (to === 'me') screenHit('190,230,255', 'bolt'); }
    if (fx === 'frost') { if (t) t.frostUntil = now + 1100; burst(at, 0xcff2ff, 30, 2.5, 0.16); if (to === 'me') screenHit('140,210,255', 'frost'); }
    if (fx === 'fire') { if (t) t.burnUntil = now + 1100; burst(at, 0xff7a2a, 36, 3.4, 0.24); if (to === 'me') screenHit('255,120,30', 'fire'); }
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
      const color = kind === 'heal' ? '#5dffa8' : kind === 'mana' ? '#ffd479' : o.fx === 'bolt' ? '#bfe6ff' : o.fx === 'frost' ? '#8fdcff' : o.fx === 'fire' ? '#ff8a3a' : friendly ? '#a98bff' : '#ff6b6b';
      const caster = fighters.get(from);
      if (caster) caster.lungeUntil = performance.now() + 450;
      if (from === 'me') { channelShown = 0; channelLevel = 0; }
      if (kind !== 'attack') {
        const at = pointOf(from);
        for (let i = 0; i < 30; i++) spark(at.clone().add(new THREE.Vector3(rnd(-0.5, 0.5), rnd(-0.8, 0.2), rnd(-0.3, 0.3))), color, { size: rnd(0.08, 0.2), vel: new THREE.Vector3(rnd(-0.2, 0.2), rnd(0.8, 1.8), 0), life: rnd(0.6, 1.1) });
        if (from === 'me') screenHit(kind === 'heal' ? '80,255,160' : '255,212,121');
        if (o.damage) float(from, `+${o.damage}`, color);
        return;
      }
      const start = pointOf(from, from === 'boss' ? 'mouth' : 'staff');
      const end = pointOf(to, 'chest');
      const size = (o.crit ? 1.5 : 1) * 1.15;
      const flight = fly(start, end, kanji, color, size, 0.85);
      if (from === 'me') {
        // your staff thrusts and its gem launches forward with the spell (a new one grows back)
        thrustAt = performance.now(); gemGoneAt = thrustAt;
        const g = new THREE.Mesh(gem.geometry, gemMat); g.scale.set(1.4, 2.1, 1.4); g.position.copy(start);
        scene.add(g);
        flights[flights.length - 1].gem = g;
      }
      await flight;
      burst(end, color, o.crit ? 46 : 28, o.crit ? 4.4 : 3.2, 0.2);
      const t = fighters.get(to);
      if (t) t.hurtUntil = performance.now() + 450;
      cardEffect(to, o.fx, end);
      if (to === 'me') { if (!o.fx) screenHit(); kick(o.crit ? 0.16 : 0.09); }
      else kick(o.crit ? 0.07 : 0.035);
      if (o.damage) float(to, `−${o.damage}${o.crit ? '!' : ''}`, to === 'me' ? '#ff6b81' : o.crit ? '#ff9a3a' : '#ffd479');
    },
    fizzle(who) {
      const at = pointOf(who, who === 'boss' ? 'head' : 'staff');
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
        if (f.model) f.model.root.rotation.x = -(Math.PI / 2) * t * 0.95;
        else if (f.spriteMat) { f.spriteMat.rotation = (Math.PI / 2) * t * -1; f.spriteMat.opacity = 1 - t * 0.6; }
        if (t < 1) requestAnimationFrame(fall);
      };
      fall();
      burst(pointOf(who), 0xffffff, 40, 3, 0.25);
    },
    onfire(who, on, color) {
      if (who === 'me') { myFlame = on ? new THREE.Color(color ?? '#6ee7ff') : null; return; }
      const f = fighters.get(who);
      if (f) f.flame = on ? new THREE.Color(color ?? '#6ee7ff') : null;
    },
    channel(level) { channelLevel = Math.max(0, Math.min(1, level)); },
    twitch() {
      if (reduced()) return;
      twitchAmp = 0.35;
      twitchTarget.set(rnd(-0.35, 0.25), rnd(-0.25, 0.25), rnd(-0.3, 0.3));
      if (Math.random() < 0.6) { gem.getWorldPosition(tmp); spark(tmp.clone(), 0xd8c4ff, { size: rnd(0.04, 0.09), vel: new THREE.Vector3(rnd(-0.6, 0.6), rnd(0.2, 0.9), rnd(-0.3, 0.3)), life: 0.5 }); }
    },
    thrust() {
      thrustAt = performance.now();
      gem.getWorldPosition(tmp);
      burst(tmp.clone(), 0xc8a8ff, 18, 1.6, 0.08);
    },
    oppChannel(on) { oppChannelOn = on; },
    inhale(on) { inhaling = on; },
    breath(victims, damage) {
      inhaling = false;
      const mo = pointOf('boss', 'mouth');
      for (let i = 0; i < 160; i++) {
        setTimeout(() => {
          const target = victims.length ? pointOf(victims[i % victims.length]) : camera.localToWorld(new THREE.Vector3(0, -0.2, -1));
          const v = target.clone().add(new THREE.Vector3(rnd(-1.5, 1.5), rnd(-0.8, 0.8), 0)).sub(mo).normalize().multiplyScalar(rnd(7, 11));
          spark(mo, Math.random() < 0.4 ? 0xffd25a : 0xff5a1a, { size: rnd(0.3, 0.7), vel: v, life: rnd(0.6, 0.9), grow: 1.2 });
        }, i * 5);
      }
      setTimeout(() => {
        for (const v of victims) { const f = fighters.get(v); if (f) { f.hurtUntil = performance.now() + 500; f.burnUntil = performance.now() + 900; } float(v, `−${damage}`, '#ff9a3a'); }
        if (victims.includes('me')) { screenHit('255,120,30'); kick(0.16); }
      }, 450);
    },
    claw(victim, damage) {
      const b = fighters.get('boss');
      if (b) b.lungeUntil = performance.now() + 450;
      setTimeout(() => {
        const f = fighters.get(victim);
        if (f) f.hurtUntil = performance.now() + 450;
        if (victim === 'me') { screenHit('255,40,60', 'claw'); kick(0.13); }
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
