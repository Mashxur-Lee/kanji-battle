// The 3D arena, in first person, drawn with Three.js behind the normal game UI.
//
// You see your own hand holding your magic staff (your chosen skin); the opponent (a low-poly 3D model —
// wizard, witch, goblin, knight, apprentice or adventurer — holding their staff) faces you across a
// torch-lit stone arena; your chosen background is painted far behind, with grass and trees bridging it to
// the ground. The camera follows the mouse a little (parallax). While you write or type, the staff charges
// and traces a figure-eight; a cast launches its gem with the spell. Spells are kanji that fly across with a
// trail; hits flash and shake the camera; Deck Duel cards have their own effects (lightning, frost, fire).
//
// This file is bundled on its own (public/arena3d.js) and only loaded when the 3D arena is switched on,
// so the menus stay light. It knows nothing about the game rules: the UI calls the effects below.

import { ARM_REST } from './charkit';
import * as THREE from 'three';
import { buildCharacter, kindFor, type Character } from './models3d';
import { buildDragon, buildGlbCharacter, onModelLoaded, preloadModels, type Dragon, type GlbKind } from './glbchars';
import { buildStaff, GEM_Y, type Staff } from './staffs3d';
import { createHits } from './staffhits';
import { createPost, createWeather, floorWear, roomLight, shadowsFor, type Post, type Weather, type Weather3D } from './arenalook';
import { staffOf } from '../shared/progress';
import { createStaffPreview } from './staffpreview';
import { buildEnv, type Env } from './arenas';
import { wetStone } from './arenas/kit';
import { isSword } from './swords3d';
import { applyPose, isPose, notePose, type PoseId } from './poses3d';

export type Who = 'me' | 'opp' | 'boss' | `ally:${string}`;
export type TimeOfDay = 'day' | 'sunset' | 'night';
/** A fighter: a 3D character model (character = deck hero or level avatar), or a pixel sprite (the dragon). */
export interface FighterArt { id: string; name?: string; character?: string; svg?: string; flame?: string; staff?: string; pose?: string; bot?: boolean }
export interface ArenaSetup {
  /** battle screens: you stand left, the opponent right of the centre panel; Deck Duel: you bottom-right */
  layout: 'battle' | 'deck';
  bgSvg: string; // the chosen background: the painted picture's address (0.9.9.9.5.1) or SVG markup, shown far behind the arena
  bgKey: string;
  time: TimeOfDay;
  me: FighterArt;
  opp: FighterArt | null;
  allies: FighterArt[];
  boss: FighterArt | null; // the dragon
  /** 0.9.9.9.9.1: the place's weather (as in the menu): rain, snow, leaves… in 3D round the arena */
  weather?: string;
}
export type SpellFx = 'bolt' | 'frost' | 'fire';
export interface ArenaApi {
  setup(s: ArenaSetup): void;
  /** 0.9.9.9.7.3: build the coming battle's arena now, unseen (the study phase) — its first frames are quick then */
  prime(s: ArenaSetup): void;
  /** 0.9.9.9.7.3: the first word is up: a fly-in still going glides into your eyes now */
  endIntro(): void;
  setActive(on: boolean): void;
  cast(from: Who, to: Who, kanji: string, o?: { damage?: number; crit?: boolean; kind?: 'attack' | 'heal' | 'mana'; fx?: SpellFx }): Promise<void>;
  fizzle(who: Who): void;
  /** knocked out: lies down (you, in first person: your staff is gone) */
  ko(who: Who): void;
  /** 0.9.9.9.9.1: how close their enemy is to falling (0 … 1): their staff feels it */
  fury(who: Who, k: number): void;
  /** combo flames (5+ in a row) or a Deck Duel power: flames in the player's colour around them */
  onfire(who: Who, on: boolean, color?: string): void;
  /** 0.9.9.7: change someone's combo pose (Customize preview) */
  setPose(who: Who, pose: string): void;
  /** Customize preview: bring the camera up close to the opponent (no hand and staff in view) */
  focusOpp(on: boolean): void;
  /** 0.9.9.9.5.3: Customize (the Hero Locker): you turn slowly, as on a pedestal */
  spin(on: boolean): void;
  /** 0.9.9.9.5.5: Customize with nothing picked — the camera swings slowly round you (with focusOpp) */
  orbit?(on: boolean): void;
  /** 0.9.9.7.1: Customize → Combo pose: a small first-person view in the corner, next to you seen from outside */
  setInset(on: boolean): void;
  /** change only the arena and the time of day (the fighters stay) */
  setBackground(bgKey: string, time: TimeOfDay, bgSvg: string): void;
  /** Customize: build these arenas ahead, one at a time while the browser is idle, so picking one is instant */
  prewarm(arenas: string[], time: TimeOfDay): void;
  /** a burst of light from their glowing eyes (a Deck Duel Omnipotence going off) */
  flashEyes(who: Who): void;
  channel(level: number): void;
  /** you drew a stroke / typed a letter: the staff moves */
  twitch(): void;
  /** "CAST!" pressed: the staff thrusts forward with a flash (the spell itself comes on the answer) */
  thrust(): void;
  oppChannel(on: boolean): void;
  /** 0.9.9.7.2: one player typing / writing (their staff traces ∞ only then); `auto`: always (the AI) */
  typing(who: Who, on: boolean): void;
  inhale(on: boolean): void;
  /** 0.9.9.9.5.3: the whole arena trembles (someone reached a 30× combo — Godlike) */
  tremble(seconds: number): void;
  breath(victims: Who[], damage: number): void;
  claw(victim: Who, damage: number): void;
  float(who: Who, text: string, color?: string): void;
  /** where another player is looking (their mouse look, from the network): their model turns its head */
  look(who: Who, yaw: number, pitch: number): void;
  /** lighter rendering for small screens / phones (less grass and particles, lower resolution) */
  setLite(on: boolean): void;
  dispose(): void;
}

const rnd = (a: number, b: number) => a + Math.random() * (b - a);
// 0.9.9.9.6.2: nothing follows the system's reduce-motion setting any more (Windows "animation effects: off"),
// not even the screen shake — players with it off asked for every animation

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
/** SVG → texture (async: the image has to load). */
function svgTexture(svg: string, onReady: (t: THREE.Texture, aspect: number) => void) {
  const vb = /viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(svg);
  const w = vb ? Number(vb[1]) : 16, h = vb ? Number(vb[2]) : 20;
  const scale = 1024 / Math.max(w, h); // (0.9.9.3: the sprites are vector paintings now — draw them big and smooth)
  const url = URL.createObjectURL(new Blob([svg.replace('<svg ', `<svg xmlns="http://www.w3.org/2000/svg" width="${w * scale}" height="${h * scale}" `)], { type: 'image/svg+xml' }));
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas'); c.width = w * scale; c.height = h * scale;
    const g = c.getContext('2d')!; g.drawImage(img, 0, 0, c.width, c.height);
    URL.revokeObjectURL(url);
    onReady(canvasTex(c), w / h);
  };
  img.onerror = () => URL.revokeObjectURL(url);
  img.src = url;
}
/** The 2D background as a big picture (and the average colour of its ground, for the fog) — the classic arena's backdrop: an SVG scene, or (0.9.9.9.5.1) the painted picture's address */
function backgroundTexture(svg: string, onReady: (t: THREE.Texture, ground: THREE.Color, sky: THREE.Color) => void) {
  const picture = svg.startsWith('/');
  const url = picture ? svg : URL.createObjectURL(new Blob([svg.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')], { type: 'image/svg+xml' }));
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas'); c.width = 2048; c.height = 1152;
    const g = c.getContext('2d')!; g.drawImage(img, 0, 0, 2048, 1152);
    if (!picture) URL.revokeObjectURL(url);
    const avg = (y0: number, y1: number) => {
      const d = g.getImageData(0, y0, 2048, y1 - y0).data;
      let r = 0, gg = 0, b = 0, n = 0;
      for (let i = 0; i < d.length; i += 4 * 37) { r += d[i]; gg += d[i + 1]; b += d[i + 2]; n++; }
      return new THREE.Color(r / n / 255, gg / n / 255, b / n / 255).convertSRGBToLinear();
    };
    onReady(canvasTex(c), avg(980, 1150), avg(40, 300));
  };
  img.onerror = () => { if (!picture) URL.revokeObjectURL(url); };
  img.src = url;
}

// ── lighting presets per time of day ────────────────────────────────────────
const LIGHT: Record<TimeOfDay, { sky: number; ground: number; hemi: number; sun: number; sunInt: number; sunPos: [number, number, number]; spriteTint: number; torch: number; motes: number; bloom: string }> = {
  day: { sky: 0xdbe9ff, ground: 0x5a4a38, hemi: 1.6, sun: 0xfff1d6, sunInt: 2.2, sunPos: [6, 12, 4], spriteTint: 0xffffff, torch: 6, motes: 0xfff6d8, bloom: '255,250,230' },
  sunset: { sky: 0xffb38a, ground: 0x3a2440, hemi: 1.15, sun: 0xff9a5c, sunInt: 2.0, sunPos: [-10, 4, -6], spriteTint: 0xffeadb, torch: 14, motes: 0xffc27a, bloom: '255,190,120' },
  night: { sky: 0x5a6cc0, ground: 0x10101c, hemi: 0.55, sun: 0x9fb4ff, sunInt: 0.8, sunPos: [-6, 10, -8], spriteTint: 0xd0d6f2, torch: 26, motes: 0xd8ff8a, bloom: '200,255,150' },
};


interface Fighter {
  key: string;
  group: THREE.Group; // position on the floor
  model: Character | null; // 3D character …
  sprite: THREE.Sprite | null; // … or a pixel sprite (the dragon, until its model has loaded)
  /** 0.9.9.9.5.2: the Black Dragon's model */
  dragon?: Dragon | null;
  /** what they look like (to swap the stand-in for the model once it has loaded), and whether the model is in */
  art: FighterArt; glb: boolean;
  spriteMat: THREE.SpriteMaterial | null;
  height: number;
  ko: boolean;
  flame: THREE.Color | null; // combo flames / power aura
  aura: THREE.Sprite;
  hurtUntil: number; lungeUntil: number; frostUntil: number; burnUntil: number;
  /** 0.9.9.9.7: hit by a spell — when, how hard, and which way it pushed them (they lean back and step away) */
  hitAt: number; hitPow: number; hitDir: THREE.Vector3;
  /** 0.9.9.9.7.3: the leg that steps back (0 / 1 — the other one each hit) */
  hitLeg: number;
  /** 0.9.9.9.7.4: the staff arm's eased turn (a hit's jolt goes on top of it, not into it) */
  armX?: number;
  frosted: boolean;
  /** 0.9.9.8.2: their staff (its attack effect) and the colours a staff's fire / frost tints them with */
  staffId?: string; burnTint?: THREE.Color; frostTint?: THREE.Color;
  /** 0.9.9.9.9.1: how close their enemy is to falling — their staff feels it */
  fury?: number;
  /** glowing eyes: a bright flash until then (an Omnipotence going off) */
  eyesFlashUntil: number;
  /** where they look: target (from the network, or an idle wander) and the current, eased head turn */
  look: { yaw: number; pitch: number; at: number; curYaw: number; curPitch: number; seed: number };
  /** 0.9.9.7: the combo pose and how far into it they are (0 → 1) */
  pose: PoseId; poseK: number;
  /** 0.9.9.7.2: typing / writing right now (the AI: always while a word is up) */
  typing: boolean;
}
interface Particle { sprite: THREE.Sprite; vel: THREE.Vector3; life: number; max: number; grow: number; gravity: number }

const TREE_BGS = ['forest', 'swamp', 'worldtree'];
/** 0.9.9.9.5.2: the dragon model (4.5 m tall, 8.5 m nose to tail) a little bigger in the arena: it is far back */
const DRAGON_SCALE = 1.2;
/** 0.9.9.9.6.8: filming the trailer (localStorage kb:filming = 1): a steady camera and full quality all the way */
const filming = (() => { try { return localStorage.getItem('kb:filming') === '1'; } catch { return false; } })();

export function createArena(canvas: HTMLCanvasElement, opts: { lite?: boolean; preview?: boolean } = {}): ArenaApi | null {
  let renderer: THREE.WebGLRenderer;
  let lite = !!opts.lite;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: !lite, powerPreference: lite ? 'default' : 'high-performance' });
    // 0.9.9.9.7.4: no shader error check outside ?debug3d — it reads every shader's compile log, so each one is waited
    // for in turn (the profile of opening Customize on a phone: most of its time in getProgramInfoLog / getShaderInfoLog)
    renderer.debug.checkShaderErrors = location.search.includes('debug3d');
  } catch { return null; }
  let lowRes = false; // slow even in Lite: render at ¾ resolution
  const pixelRatio = () => (lowRes ? 0.75 : lite ? 1 : Math.min(devicePixelRatio || 1, 1.5));
  renderer.setPixelRatio(pixelRatio());
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15; // 0.9.7.1: a little brighter
  // 0.9.9.9.9.1: soft shadows (High only — the lights cast them then; see look())
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  // 0.9.9.9.9.1: light from all round (a soft studio, reflected): metal and stone aren't flat colours any more
  try { scene.environment = roomLight(renderer); scene.environmentIntensity = 0.3; } catch { /* without it */ }
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
  // a soft stage light from the front, so the opponent, your party and the dragon read clearly (strongest at night)
  const stage = new THREE.DirectionalLight(0xfff4e6, 0.8);
  stage.position.set(1.5, 5, 9); stage.target.position.set(0, 1, -3);
  scene.add(stage, stage.target);

  // the classic arena (a painted background, grass, a tiled floor, torch pillars) — used when the background
  // has no 3D arena; the five arenas built from the Blender models replace all of it
  const classic = new THREE.Group();
  scene.add(classic);
  // ── far background: the player's chosen scene on a huge curved screen, its own ground at the horizon ──
  const bgMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false, side: THREE.DoubleSide });
  const bgMesh = new THREE.Mesh(new THREE.CylinderGeometry(70, 70, 66, 48, 1, true, Math.PI - 0.95, 1.9), bgMat);
  bgMesh.scale.set(-1, 1, 1);
  bgMesh.position.set(0, 13, 6);
  classic.add(bgMesh);

  // ── ground: grass all around the arena, fading into the fog ──
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x2a3a24, roughness: 1 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(90, 48), groundMat);
  ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02;
  classic.add(ground);
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
  classic.add(grass);
  // trees / bushes / rocks between the grass and the painted background, so nothing seems to float
  const propsGroup = new THREE.Group();
  classic.add(propsGroup);
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
  classic.add(floor);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(9.5, 0.18, 8, 96), new THREE.MeshStandardMaterial({ color: 0x4b4656, roughness: 0.85 }));
  rim.rotation.x = Math.PI / 2; rim.position.y = 0.05;
  classic.add(rim);
  // (0.9.9.9.9.5: drawn white, coloured by the arena — blue in the forest, gold at the castle… as in the paintings)
  const RUNE_PURPLE = new THREE.Color('#a98bff');
  const rune = new THREE.Mesh(new THREE.PlaneGeometry(9, 9), new THREE.MeshBasicMaterial({ map: ringTexture('#ffffff'), color: RUNE_PURPLE, transparent: true, opacity: 0.38, blending: THREE.AdditiveBlending, depthWrite: false }));
  rune.rotation.x = -Math.PI / 2; rune.position.y = 0.03; rune.scale.x = -1;
  scene.add(rune); // the rotating kanji circle the fighters stand on — kept in the 3D arenas too
  const wear = floorWear(); // (0.9.9.9.9.1: wear on the floor, every arena)
  wear.position.y = 0.012;
  scene.add(wear);

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
    classic.add(p);
    torches.push({ light, flame, base: 1, phase: Math.random() * 10 });
  }

  // drifting motes
  const MOTES = 260;
  const moteGeo = new THREE.BufferGeometry();
  const motePos = new Float32Array(MOTES * 3), moteSeed = new Float32Array(MOTES);
  for (let i = 0; i < MOTES; i++) { motePos[i * 3] = rnd(-14, 14); motePos[i * 3 + 1] = rnd(0, 7); motePos[i * 3 + 2] = rnd(-12, 6); moteSeed[i] = Math.random() * 100; }
  moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
  const moteMat = new THREE.PointsMaterial({ size: 0.12, map: glowTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffffff, sizeAttenuation: true });
  classic.add(new THREE.Points(moteGeo, moteMat));

  // ── 0.9.9.9.9.1: the look on High — the glow, the shadows (Low and the previews: as before) ──
  let post: Post | null = null;
  function applyLook() {
    const high = !lite && !opts.preview;
    if (high && !post) { try { post = createPost(renderer, scene, camera); } catch { post = null; } }
    if (!high && post) { post.dispose(); post = null; }
    for (const l of [envKey, sun]) {
      l.castShadow = high;
      l.shadow.mapSize.set(2048, 2048);
      const c = l.shadow.camera as THREE.OrthographicCamera;
      c.left = -15; c.right = 15; c.top = 15; c.bottom = -15; c.near = 1; c.far = 150; c.updateProjectionMatrix();
      l.shadow.bias = -0.0005; l.shadow.normalBias = 0.04;
    }
    if (post) { const sz = renderer.getSize(new THREE.Vector2()); post.setSize(sz.x, sz.y); }
  }
  // the weather of the place, round the arena (not in the Customize previews)
  let weather: Weather | null = null;
  const WEATHERS = new Set(['clear', 'leaves', 'rain', 'storm', 'snow', 'petals', 'seeds', 'spores']);
  function setWeather(w: string | undefined) {
    const kind = (opts.preview || !w || !WEATHERS.has(w) ? 'clear' : w) as Weather3D;
    if (weather?.kind === kind) return;
    weather?.dispose(); weather = null;
    if (kind !== 'clear') weather = createWeather(scene, kind, lite, (p) => { const was = hemi.intensity; hemi.intensity = was * (1 + 2.5 * p); setTimeout(() => { hemi.intensity = was; }, 110); });
  }

  // ── fighters ───────────────────────────────────────────────────────────────
  const sparkTex = glowTexture();
  const shadowTex = glowTexture('rgba(0,0,0,0.75)', 'rgba(0,0,0,0)');
  const auraTex = glowTexture('rgba(150,120,255,1)', 'rgba(120,80,255,0)');
  const fighters = new Map<string, Fighter>(); // 'me', 'opp', 'boss', 'ally:<id>'
  function makeFighter(key: string, art: FighterArt): Fighter {
    const group = new THREE.Group();
    let model: Character | null = null, sprite: THREE.Sprite | null = null, spriteMat: THREE.SpriteMaterial | null = null;
    let dragon: Dragon | null = null;
    let height = 1.95, glb = false;
    // 0.9.9.9.5.2: the dragon as a model (its picture until the model has loaded)
    if (key === 'boss' && (dragon = buildDragon())) {
      dragon.root.scale.setScalar(DRAGON_SCALE);
      height = dragon.height * DRAGON_SCALE; glb = true;
      group.add(dragon.root);
    } else if (art.svg) {
      height = 4.6;
      spriteMat = new THREE.SpriteMaterial({ transparent: true, alphaTest: 0.05 });
      sprite = new THREE.Sprite(spriteMat);
      sprite.center.set(0.5, 0);
      sprite.scale.set(height * 1.33, height, 1);
      svgTexture(art.svg, (t, aspect) => { spriteMat!.map = t; spriteMat!.needsUpdate = true; sprite!.scale.set(height * aspect, height, 1); });
      group.add(sprite);
    } else {
      const built = buildModel(key, art);
      model = built; glb = !!built.glb;
      notePose(built);
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
    castFrom(group);
    const f: Fighter = { key, group, model, sprite, spriteMat, height, ko: false, flame: null, aura, hurtUntil: 0, lungeUntil: 0, frostUntil: 0, burnUntil: 0, hitAt: -1e9, hitPow: 1, hitDir: new THREE.Vector3(0, 0, -1), hitLeg: 0, frosted: false, eyesFlashUntil: 0, look: { yaw: 0, pitch: 0, at: -1e9, curYaw: 0, curPitch: 0, seed: Math.random() * 100 }, pose: isPose(art.pose) ? art.pose : 'none', poseK: 0, typing: !!art.bot, staffId: art.staff, dragon, art, glb };
    fighters.set(key, f);
    return f;
  }
  function clearFighters() {
    for (const f of fighters.values()) {
      scene.remove(f.group);
      disposeTree(f.group);
    }
    fighters.clear();
  }
  // (a model's shape is shared by every copy of it: only its own materials go)
  function disposeTree(o: THREE.Object3D) {
    o.traverse((x) => { const m = x as THREE.Mesh; if (!m.geometry?.userData?.shared) m.geometry?.dispose?.(); const mm = m.material as THREE.Material | undefined; mm?.dispose?.(); });
  }
  /** 0.9.9.9.5.2: a character from its model (the shapes built in code while it loads) */
  function buildModel(key: string, art: FighterArt): Character & { glb?: boolean } {
    // (0.9.9.9.5.3: allies look like you — no green team clothes)
    const kind = kindFor(art.character ?? 'wizard'), side = key === 'me' || key.startsWith('ally:') ? 'me' : 'opp';
    const m = kind === 'kid' || kind === 'human' ? null : buildGlbCharacter(kind, side, sparkTex, art.staff);
    return m ? Object.assign(m, { glb: true }) : buildCharacter(kind, side, sparkTex, art.staff);
  }
  // a model that arrives after the battle started: the stand-in is swapped for it where it stands
  onModelLoaded((k: GlbKind) => {
    for (const [key, f] of fighters) {
      if (f.glb || f.ko) continue;
      if (k === 'dragon' && key === 'boss' && f.sprite) {
        const d = buildDragon();
        if (!d) continue;
        d.root.scale.setScalar(DRAGON_SCALE);
        f.group.remove(f.sprite); f.spriteMat?.map?.dispose(); f.spriteMat?.dispose();
        f.sprite = null; f.spriteMat = null; f.dragon = d; f.glb = true;
        f.group.add(d.root);
        placeFighters();
      } else if (f.model && k !== 'dragon' && kindFor(f.art.character ?? 'wizard') === k) {
        const old = f.model;
        const m = buildModel(key, f.art);
        if (!m.glb) continue;
        notePose(m);
        m.root.rotation.copy(old.root.rotation);
        m.staff.group.visible = old.staff.group.visible;
        f.group.remove(old.root); disposeTree(old.root);
        f.group.add(m.root);
        castFrom(m.root);
        f.model = m; f.glb = true; f.frosted = false;
        if (m.eyes && old.eyes) m.eyes.visible = old.eyes.visible;
      }
    }
  });
  void preloadModels();
  /** 0.9.9.9.9.1: a fighter (and the staff in their hand) casts a shadow */
  function castFrom(o: THREE.Object3D) { o.traverse((x) => { const m = x as THREE.Mesh; if (m.isMesh && !(m.material as THREE.Material).transparent) m.castShadow = true; }); }

  // ── you, in first person: your hand holding your staff (sleeve and skin after your character) ──
  const fp = new THREE.Group();
  camera.add(fp);
  // Deck Duel: smaller, in the free corner under the chat
  const FP_BATTLE = new THREE.Vector3(1.08, -0.52, -1.6), FP_DECK = new THREE.Vector3(1.14, -0.6, -1.6);
  fp.scale.setScalar(0.72);
  const fpBase = FP_BATTLE.clone();
  const gold = new THREE.MeshStandardMaterial({ color: 0xc9a227, metalness: 0.3, roughness: 0.35, flatShading: true });
  const sleeveMat = new THREE.MeshStandardMaterial({ color: 0x3d5ad6, roughness: 0.9, flatShading: true, side: THREE.DoubleSide });
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xf0c49a, roughness: 0.75, flatShading: true });
  const staffGroup = new THREE.Group(); // pivots at the hand: the staff and the fingers around it
  const fpArm = new THREE.Group(), fpArmRest = new THREE.Quaternion();
  let fpSleeve: THREE.Mesh | null = null;
  fp.add(staffGroup);
  let staff: Staff = buildStaff('verdant', sparkTex);
  let staffSkin = 'verdant';
  staffGroup.add(staff.group);
  const gemLight = new THREE.PointLight(staff.color, 0.6, 4, 2); gemLight.position.y = GEM_Y;
  staffGroup.add(gemLight);
  function setStaffSkin(id: string) {
    if (id === staffSkin) return;
    staffSkin = id;
    staffGroup.remove(staff.group);
    staff.group.traverse((o) => { (o as THREE.Mesh).geometry?.dispose?.(); });
    staff = buildStaff(id, sparkTex);
    if (isSword(id)) staff.group.rotation.y = -1.15; // (0.9.9.9.9.5: your blade shows you its flat, not its edge)
    staffGroup.add(staff.group);
    gemLight.color.copy(staff.color);
    gemLight.position.y = staff.gem.position.y; // (0.9.9.9.9.5: at a sword's tip)
  }
  {
    // the hand: the back of the hand on the right of the staff, four fingers curled round it (tips towards
    // you), the thumb over them
    const part = (g: THREE.BufferGeometry, m: THREE.Material, parent: THREE.Object3D, x: number, y: number, z: number) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); parent.add(o); return o; };
    const palm = part(new THREE.CapsuleGeometry(0.046, 0.075, 4, 10), skinMat, staffGroup, 0.066, -0.004, 0.014);
    palm.scale.set(0.82, 1, 1.12); palm.rotation.set(0, 0.25, -0.08);
    [0.052, 0.018, -0.016, -0.048].forEach((y, i) => {
      const r = 0.05 - i * 0.002;
      const finger = part(new THREE.TorusGeometry(r, 0.019 - i * 0.001, 6, 14, Math.PI * 1.32), skinMat, staffGroup, 0, y, 0);
      finger.rotation.x = -Math.PI / 2; // from the palm round the far side, the tip comes back towards you
      const a = Math.PI * 1.32;
      part(new THREE.SphereGeometry(0.019 - i * 0.001, 6, 5), skinMat, staffGroup, Math.cos(a) * r, y, -Math.sin(a) * r); // fingertip
    });
    const thumb = part(new THREE.CapsuleGeometry(0.021, 0.075, 4, 8), skinMat, staffGroup, 0.022, 0.074, 0.05);
    thumb.rotation.set(0.3, 0, 1.25);
    // the forearm runs from the wrist down to the bottom-right corner (it doesn't turn with the staff)
    const arm = fpArm; arm.position.set(0.09, -0.08, 0.03); arm.rotation.set(-0.55, 0, 0.62); fp.add(arm);
    fpArmRest.copy(arm.quaternion);
    part(new THREE.CylinderGeometry(0.05, 0.062, 0.2, 10), skinMat, arm, 0, -0.08, 0); // wrist
    fpSleeve = part(new THREE.CylinderGeometry(0.1, 0.16, 0.95, 10, 1, true), sleeveMat, arm, 0, -0.6, 0); // sleeve
    part(new THREE.TorusGeometry(0.1, 0.028, 6, 14), gold, arm, 0, -0.14, 0).rotation.x = Math.PI / 2; // cuff
  }
  // 0.9.9.7: your other hand — it comes up onto the staff in the two-handed combo poses
  const fpLeft = new THREE.Group();
  {
    const part = (g: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); fpLeft.add(o); return o; };
    const palm = part(new THREE.CapsuleGeometry(0.046, 0.075, 4, 10), skinMat, -0.066, 0, 0.014);
    palm.scale.set(0.82, 1, 1.12); palm.rotation.set(0, -0.25, 0.08);
    [0.052, 0.018, -0.016, -0.048].forEach((y, i) => {
      const finger = part(new THREE.TorusGeometry(0.05 - i * 0.002, 0.019 - i * 0.001, 6, 14, Math.PI * 1.32), skinMat, 0, y, 0);
      finger.rotation.set(-Math.PI / 2, 0, Math.PI - Math.PI * 0.32);
    });
    const fore = new THREE.Group(); fore.position.set(-0.09, -0.08, 0.03); fore.rotation.set(-0.5, 0, -0.75); fpLeft.add(fore);
    const p2 = (g: THREE.BufferGeometry, m: THREE.Material, y: number) => { const o = new THREE.Mesh(g, m); o.position.set(0, y, 0); fore.add(o); return o; };
    p2(new THREE.CylinderGeometry(0.05, 0.062, 0.2, 10), skinMat, -0.08);
    p2(new THREE.CylinderGeometry(0.1, 0.16, 0.95, 10, 1, true), sleeveMat, -0.6);
    p2(new THREE.TorusGeometry(0.1, 0.028, 6, 14), gold, -0.14).rotation.x = Math.PI / 2;
    fpLeft.position.set(0, 0.26, 0);
    fpLeft.visible = false;
    staffGroup.add(fpLeft);
  }
  const handLight = new THREE.PointLight(0xffffff, 1.4, 3, 2); handLight.position.set(0.3, 0.3, -0.5); camera.add(handLight);
  const HANDS: Record<string, { sleeve: number; skin: number }> = {
    wizard: { sleeve: 0x3463c8, skin: 0xf2ddcf }, witch: { sleeve: 0x7a56bd, skin: 0xeedcd8 }, goblin: { sleeve: 0x7a4e2c, skin: 0x84933f },
    knight: { sleeve: 0xd6cfbf, skin: 0xe4dece }, kid: { sleeve: 0xd8662f, skin: 0xf0c49a }, human: { sleeve: 0x8a5a33, skin: 0xf0c49a },
  };
  // the gem: launched with each spell, then gone until you start writing / typing again, when it builds up
  let thrustAt = -1e9;
  // 0.9.9.9.9.5: a sword's three slashes — from / to: [x, y, roll, pitch(, yaw)] offsets of your hand and blade
  // 0.9.9.9.9.5: a FULL swing — the whole arm, not the wrist: the hand lifts the sword up and back over the shoulder
  // (wind-up), sweeps across most of the screen as the arm rolls through (the cut), holds, and comes back to the guard.
  // Each pose: [hand x, hand y (offsets in the hand's space, ~1.6 to the screen's edge), arm roll, blade pitch];
  // `tilt`: the angle of the cut — the wave it sends flies at that angle
  const SWING_MS = 900;
  const SWINGS = [
    // (round two, from the owner's reference video of first-person sword attacks: the cut there is ~0.1 s and huge — the
    // hand goes up off the top right, then the whole arm crosses the screen and leaves it at the bottom, the wrist leading
    // with the blade still up and then whipping down past it; the arm stays out of view a moment, then rises back to the
    // guard. Mine was a slow 0.2 s sweep inside the screen with a fixed wrist: "it just moves the arm, I don't feel it".)
    // `wp`/`wr`: the wrist's pitch and roll [cocked on the wind-up, whipped at the end of the cut]; `lean`: the view's lean
    { from: [0.25, 1.15, 0.2, 0.25], to: [-1.3, -1.95, -0.25, -0.7], tilt: -1.25, wp: [0.35, -1.6], wr: [0.15, -0.2], lean: 0.6 },   // an overhead chop, top right to bottom middle
    { from: [0.5, 1.2, 0.8, 0.2], to: [-2.6, -2.0, -0.95, -0.7], tilt: -0.62, wp: [0.3, -1.1], wr: [0.9, -1.5], lean: 1 },       // a diagonal cut, top right to bottom left
    { from: [0.55, 0.4, 1.5, 0.15], to: [-3.4, -0.9, 1.45, -0.8], tilt: 0, wp: [0.1, -0.6], wr: [1.1, -1.8], lean: 1 },              // a flat sweep, right to left, out of view
  ] as const;
  // the swing's beats (fractions of SWING_MS): wind-up ends, the cut starts, the cut ends (the hand off the screen), it
  // starts coming back
  const SW_UP = 0.2, SW_CUT = 0.27, SW_END = 0.4, SW_BACK = 0.6;
  // the light the blade leaves through the air on a cut: a ribbon between its base and tip over the last frames
  const TRAIL_N = 14;
  const trailPos = new Float32Array(TRAIL_N * 2 * 3), trailCol = new Float32Array(TRAIL_N * 2 * 4);
  const trailGeo = new THREE.BufferGeometry();
  trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
  trailGeo.setAttribute('color', new THREE.BufferAttribute(trailCol, 4));
  trailGeo.setIndex(Array.from({ length: TRAIL_N - 1 }, (_, i) => [i * 2, i * 2 + 1, i * 2 + 3, i * 2, i * 2 + 3, i * 2 + 2]).flat());
  const trail = new THREE.Mesh(trailGeo, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false }));
  trail.frustumCulled = false; trail.renderOrder = 6; trail.visible = false;
  scene.add(trail);
  const trailPts: Array<[THREE.Vector3, THREE.Vector3]> = [];
  let swingNo = 0, swingW = 0; // (how far your arm is into a swing: the forearm reaches back to the shoulder)
  let gemState: 'ready' | 'gone' | 'growing' = 'ready';
  let growAt = 0;
  const GROW_MS = 900;
  const wantGem = () => { if (gemState === 'gone') { gemState = 'growing'; growAt = performance.now(); } };
  // the figure-eight (∞) the staff traces while you cast
  let eightAmp = 0, eightPhase = 0;
  let myFlame: THREE.Color | null = null;
  let myPose: PoseId = 'none', myPoseK = 0; // 0.9.9.7: your combo pose, in first person
  let inset = false;
  let meDown = false;

  // ── your flames (5× combo / Omnipotence): mana fire flowing along the bottom of the screen ──
  const fireU = {
    uTime: { value: 0 }, uAmount: { value: 0 },
    uC0: { value: new THREE.Color() }, uC1: { value: new THREE.Color() }, uC2: { value: new THREE.Color() }, uC3: { value: new THREE.Color() },
  };
  const fireBand = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({
    uniforms: fireU, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `
      uniform float uTime, uAmount; uniform vec3 uC0, uC1, uC2, uC3; varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y); }
      float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; } return v; }
      void main() {
        vec2 uv = vUv;
        // tongues of fire licking upwards, and a current of mana running sideways along the bottom
        float tongues = fbm(vec2(uv.x * 9.0, uv.y * 1.6 - uTime * 2.3));
        float flow = fbm(vec2(uv.x * 4.0 - uTime * 1.2, uv.y * 2.2 - uTime * 0.9));
        float wisps = fbm(vec2(uv.x * 16.0 + uTime * 0.5, uv.y * 4.0 - uTime * 3.0));
        float f = (1.0 - uv.y) * 1.6 + (tongues - 0.5) * 1.6 + (flow - 0.5) * 0.9 + (wisps - 0.5) * 0.5 - 0.38;
        f = smoothstep(0.0, 0.85, f);
        float heat = f * (0.6 + 0.4 * tongues); // brighter in the tongues, not a flat band
        vec3 col = mix(uC3, uC2, smoothstep(0.0, 0.35, heat));
        col = mix(col, uC1, smoothstep(0.3, 0.6, heat));
        col = mix(col, uC0, smoothstep(0.7, 0.95, heat));
        gl_FragColor = vec4(col * min(f, 0.75) * uAmount * 0.55, 1.0); // added on top of the scene: glows, never hides it
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  }));
  fireBand.renderOrder = 30;
  fireBand.frustumCulled = false;
  camera.add(fireBand);
  function placeFireBand() {
    const d = 1.2, halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * d;
    const h = halfH * 0.55; // the lower ~quarter of the screen
    fireBand.scale.set(halfH * camera.aspect * 2.05, h, 1);
    fireBand.position.set(0, -halfH + h / 2, -d);
  }
  function setFireColor(c: THREE.Color) {
    const hsl = { h: 0, s: 0, l: 0 }; c.getHSL(hsl);
    fireU.uC0.value.setHSL(hsl.h, 1, 0.82); // bright tips
    fireU.uC1.value.setHSL(hsl.h, 1, 0.6);
    fireU.uC2.value.setHSL(hsl.h, 0.95, 0.45);
    fireU.uC3.value.setHSL((hsl.h + 0.03) % 1, 0.9, 0.22); // deep base
  }

  const tmp = new THREE.Vector3();
  function pointOf(who: Who, part: 'chest' | 'head' | 'staff' | 'mouth' = 'chest'): THREE.Vector3 {
    if (who === 'me') {
      // (0.9.9.9.9.5: during a cinematic the camera — and your hand on it — is elsewhere: a spell of yours still leaves
      // from where you stand, bottom-right of your own view; it flew in from the cinematic's side)
      if ((part === 'staff' || part === 'head') && cine && cineW > 0.05) return new THREE.Vector3(CAM.x + 0.55, CAM.y - 0.45, CAM.z - 1.2);
      if (part === 'staff' || part === 'head') { staff.gem.getWorldPosition(tmp); return tmp.clone(); }
      return camera.localToWorld(new THREE.Vector3(rnd(-0.15, 0.15), -0.1, -1.4)); // spells at you fly at the camera
    }
    const f = fighters.get(who);
    if (!f) return new THREE.Vector3(0, 1.4, -3);
    if (f.model && part === 'staff') { f.model.crystal.getWorldPosition(tmp); return tmp.clone(); }
    const p = f.group.position.clone();
    const h = f.height * f.group.scale.y;
    if (f.dragon) { f.group.updateMatrixWorld(true); return part === 'mouth' ? f.dragon.mouth(new THREE.Vector3()) : part === 'head' ? f.dragon.head(new THREE.Vector3()) : p.add(new THREE.Vector3(0, h * 0.45, 0)); }
    if (who === 'boss' && part === 'mouth') return p.add(new THREE.Vector3(-f.height * 0.55, f.height * 0.62, 0.3));
    return p.add(new THREE.Vector3(0, h * (part === 'head' ? 0.85 : 0.6), 0));
  }

  // ── short-lived effects ─────────────────────────────────────────────────────
  const particles: Particle[] = [];
  let sparkN = 0;
  function spark(at: THREE.Vector3, color: THREE.ColorRepresentation, o: { size?: number; vel?: THREE.Vector3; life?: number; grow?: number; gravity?: number; opacity?: number; solid?: boolean } = {}) {
    if (lite && (sparkN++ & 1)) return; // Lite: half the particles
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
  function lightning(to: THREE.Vector3, color: THREE.ColorRepresentation = 0xbfe6ff, core: THREE.ColorRepresentation = 0x9fd8ff) {
    for (let k = 0; k < 2; k++) {
      const pts: THREE.Vector3[] = [];
      const top = to.clone().add(new THREE.Vector3(rnd(-1.5, 1.5), 9, rnd(-1, 1)));
      for (let i = 0; i <= 12; i++) {
        const p = top.clone().lerp(to, i / 12);
        if (i > 0 && i < 12) p.add(new THREE.Vector3(rnd(-0.45, 0.45), rnd(-0.2, 0.2), rnd(-0.3, 0.3)));
        pts.push(p);
      }
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: k ? 0xffffff : core, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      scene.add(line);
      bolts.push({ line, life: 0 });
      // 0.9.9.9.9.1: forks branching off the main bolt, thinner, dying out in the air
      if (k === 0) for (let f = 0; f < (lite ? 1 : 3); f++) {
        const from = pts[2 + Math.floor(Math.random() * 7)], fork = [from.clone()];
        const dir = new THREE.Vector3(rnd(-1, 1), -rnd(0.6, 1.2), rnd(-0.5, 0.5)).normalize();
        for (let i = 0; i < 4; i++) fork.push(fork[i].clone().addScaledVector(dir, rnd(0.35, 0.6)).add(new THREE.Vector3(rnd(-0.18, 0.18), rnd(-0.1, 0.1), rnd(-0.12, 0.12))));
        const fl = new THREE.Line(new THREE.BufferGeometry().setFromPoints(fork), new THREE.LineBasicMaterial({ color: core, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
        scene.add(fl);
        bolts.push({ line: fl, life: 0.04 });
        for (let i = 0; i < fork.length - 1; i++) for (let dd = 0; dd < 1; dd += 0.25) spark(fork[i].clone().lerp(fork[i + 1], dd), core, { size: 0.16 * (1 - i / fork.length), life: 0.22, opacity: 0.6 });
      }
      // lines are 1 px in WebGL: glowing beads along the bolt give it body
      for (let i = 0; i < pts.length - 1; i++) {
        const seg = pts[i].distanceTo(pts[i + 1]);
        for (let d = 0; d < seg; d += 0.09) {
          spark(pts[i].clone().lerp(pts[i + 1], d / seg), k ? 0xffffff : core, { size: k ? 0.12 : 0.3, life: 0.28, opacity: k ? 1 : 0.7 });
        }
      }
    }
    // 0.9.9.8.2: one flash light that is always in the scene (adding a light makes three.js recompile every material —
    // the first Bolt of a Deck Duel froze the game for a moment before the lightning showed)
    flashLight.color.set(color); flashLight.position.copy(to).add(new THREE.Vector3(0, 2, 1)); flashLight.intensity = 60; flashUntil = performance.now() + 160;
    burst(to, color, 30, 4, 0.18);
  }
  const flashLight = new THREE.PointLight(0xbfe6ff, 0, 16, 2);
  scene.add(flashLight);
  let flashUntil = 0;
  // (and a line that is always there, invisible, so the lightning's line shader is ready before the first bolt)
  {
    const warm = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -50, 0), new THREE.Vector3(0, -50.01, 0)]), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
    warm.frustumCulled = false;
    scene.add(warm);
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
  let spinning = false; // (Customize: you turn round on the pedestal)
  let orbiting = false, orbitT = 0, orbitK = 0;
  let trembleUntil = 0, trembleFor = 1; // (0.9.9.9.5.3: a long rumble, on top of the short kicks)
  const kick = (amount: number) => { if (!filming) shake = Math.max(shake, amount); };

  // spells in flight
  interface Flight { sprite: THREE.Sprite; from: THREE.Vector3; to: THREE.Vector3; mid: THREE.Vector3; t: number; dur: number; color: THREE.Color; size: number; done: () => void; trailAt: number; gem?: THREE.Mesh; incoming?: boolean; target?: Who; wave?: THREE.Mesh; tilt?: number; launch?: () => THREE.Vector3 }
  const flights: Flight[] = [];
  const koWait = new Set<Who>(); // knocked out, waiting for the spell that did it to land
  let koGen = 0; // (0.9.9.9.9.2: a new setup — a replay jumping back — drops the knock-outs still waiting)
  /** a soft glowing ball in a colour (shared per colour) */
  const orbs = new Map<string, THREE.Texture>();
  function orbTexture(color: string): THREE.Texture {
    const hit = orbs.get(color);
    if (hit) return hit;
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d')!;
    const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, '#ffffff'); grad.addColorStop(0.22, color); grad.addColorStop(0.5, `${color}88`); grad.addColorStop(1, `${color}00`);
    g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    orbs.set(color, tex);
    return tex;
  }
  /** 0.9.9.9.9.5: a sword's slash wave — a glowing crescent (white at the edge, the blade's colour behind), one per colour */
  const crescents = new Map<string, THREE.Texture>();
  function crescentTexture(color: string): THREE.Texture {
    const hit = crescents.get(color);
    if (hit) return hit;
    const c = document.createElement('canvas'); c.width = 256; c.height = 128;
    const g = c.getContext('2d')!;
    g.shadowColor = color; g.shadowBlur = 18;
    g.beginPath(); g.arc(128, 150, 116, Math.PI * 1.08, Math.PI * 1.92); g.arc(128, 176, 112, Math.PI * 1.86, Math.PI * 1.14, true); g.closePath();
    const grad = g.createLinearGradient(0, 30, 0, 80); grad.addColorStop(0, '#ffffff'); grad.addColorStop(0.35, color); grad.addColorStop(1, `${color}00`);
    g.fillStyle = grad; g.fill();
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    crescents.set(color, tex);
    return tex;
  }
  function fly(from: THREE.Vector3, to: THREE.Vector3, kanji: string, color: string, size: number, dur: number, incoming = false, slash = false, tilt?: number, launch?: () => THREE.Vector3, wait = 0): Promise<void> {
    // 0.9.9.6: a glowing orb flies, not the kanji (the word is on screen already; the orb is the spell)
    void kanji;
    const tex = orbTexture(color);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    s.scale.set(size * 0.42, size * 0.42, 1);
    s.position.copy(from);
    s.renderOrder = 5;
    scene.add(s);
    // 0.9.9.5: a spell coming at you (first person) flies in low and off to the side, under the question — not
    // over the middle of the screen where the word you're answering is
    const mid = incoming
      ? from.clone().lerp(to, 0.5).add(new THREE.Vector3(screenSpot(0.28, from.clone().lerp(to, 0.5).z) - from.clone().lerp(to, 0.5).x, -0.15, 0))
      : from.clone().lerp(to, 0.5).add(new THREE.Vector3(rnd(-0.6, 0.6), 1.2 + from.distanceTo(to) * 0.08, 0));
    if (slash) {
      // a sword: the wave flies almost straight, low, as wide as a person, its arc facing the way it goes
      s.visible = false;
      mid.copy(from).lerp(to, 0.5).add(new THREE.Vector3(0, 0.12, 0));
      const wave = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), new THREE.MeshBasicMaterial({ map: crescentTexture(color), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
      wave.renderOrder = 5; wave.position.copy(from);
      scene.add(wave);
      wave.visible = wait <= 0;
      // (0.9.9.9.9.5: at the angle of the cut, and — your own — leaving the blade at the moment of the cut, from where it is then)
      return new Promise((done) => flights.push({ sprite: s, from, to, mid, t: -wait / (dur * 0.8), dur: dur * 0.8, color: new THREE.Color(color), size, done, trailAt: 0, incoming, wave, tilt: tilt ?? [-0.62, 0, 0.62][Math.floor(Math.random() * 3)], launch }));
    }
    return new Promise((done) => flights.push({ sprite: s, from, to, mid, t: 0, dur, color: new THREE.Color(color), size, done, trailAt: 0, incoming }));
  }

  // ── state set by the game ───────────────────────────────────────────────────
  let layout: ArenaSetup['layout'] = 'battle';
  let bgKey = '', bgKeyClassic = '';
  // ── the 3D arena of the chosen background (Forest, Swamp, Plains, Castle, World tree) ──
  let env: Env | null = null;
  const envCache = new Map<string, Env>();
  const envLights: THREE.PointLight[] = [];
  const envKey = new THREE.DirectionalLight(0xffffff, 1);
  envKey.visible = false;
  scene.add(envKey, envKey.target);
  applyLook(); // (0.9.9.9.9.1)
  const fromBlender = (p: readonly number[], floor: number) => new THREE.Vector3(p[0], p[2] - floor, -p[1]);
  function setEnv(id: string, time: TimeOfDay) {
    if (env) { scene.remove(env.group); if (!opts.preview) env.dispose(); env = null; }
    for (const l of envLights) scene.remove(l);
    envLights.length = 0;
    // a Customize preview keeps the arenas it has built: switching back and forth is instant (0.9.9.3.3)
    const ck = `${id}-${time}-${lite}`;
    try { env = (opts.preview && envCache.get(ck)) || buildEnv(id, time, lite); } catch (e) { console.warn('3D arena failed, using the classic one', e); env = null; }
    if (env && opts.preview) envCache.set(ck, env);
    classic.visible = !env;
    rune.position.y = env ? 0.1 : 0.03;
    wear.position.y = env ? 0.06 : 0.012;
    envKey.visible = !!env;
    if (!env) { bgKeyClassic = ''; return; }
    env.group.rotation.x = -Math.PI / 2; env.group.position.y = -env.floor;
    scene.add(env.group);
    shadowsFor(env.group); // (0.9.9.9.9.1)
    env.group.traverse((o) => { if (o.name === 'centre-pattern') o.visible = false; });
    // 0.9.9.9.9.5: the kanji circle in the arena's colour; on High the floor is wet stone mirroring the sky
    (rune.material as THREE.MeshBasicMaterial).color.copy(env.accent ? new THREE.Color(...env.accent) : RUNE_PURPLE);
    (rune.material as THREE.MeshBasicMaterial).opacity = env.accent ? 0.5 : 0.38;
    const sky = !lite && env.sky ? env.sky() : null;
    if (sky) env.group.traverse((o) => {
      if (o.name !== 'arena-floor') return;
      const m = o as THREE.Mesh;
      (m.material as THREE.Material).dispose();
      m.material = wetStone(sky, !m.userData.smooth, time === 'day' ? 0.3 : time === 'sunset' ? 0.5 : 0.9, time === 'sunset' ? 0.72 : 0.42); // (a bright day sky, or a low sun, glared off it — at sunset a rougher floor spreads the sun's glint)
    });
    for (const l of lite ? env.lights.slice(0, 2) : env.lights) { // Lite: only the main glow lights
      const p = new THREE.PointLight(new THREE.Color(...l.color), l.intensity * 8, l.dist, 2);
      p.position.copy(fromBlender(l.pos, env.floor));
      p.userData.base = p.intensity; p.userData.flicker = l.flicker ?? 0;
      scene.add(p); envLights.push(p);
    }
  }
  function applyEnvLight(e: Env) {
    const d = e.key.dir;
    envKey.color.setRGB(...e.key.color); envKey.intensity = e.key.intensity * 0.35;
    envKey.position.set(d[0] * 50, d[2] * 50, -d[1] * 50); envKey.target.position.set(0, 0, 0);
    hemi.color.setRGB(...e.ambient.sky); hemi.groundColor.setRGB(...e.ambient.ground); hemi.intensity = e.ambient.intensity;
    sun.intensity = 0; // the env's own key light replaces the generic sun
    stage.intensity *= 0.45; fill.intensity *= 0.5; // still lights the fighters, without flooding the stone
    const fog = scene.fog as THREE.Fog;
    fog.color.setRGB(...e.fog.color); fog.near = e.fog.near; fog.far = e.fog.far;
    if (current?.time === 'day') { fog.near *= 1.4; fog.far *= 1.7; } // (0.9.9.9.9.5: a clear day — the far hills keep their colour)
    // (0.9.9.9.9.1: the light from all round, softer at night; the key light a little stronger on High, now that it casts shadows)
    scene.environmentIntensity = current?.time === 'night' ? 0.12 : current?.time === 'sunset' ? 0.18 : 0.22;
    if (post) envKey.intensity *= 1.35;
    renderer.setClearColor(fog.color);
  }
  let channelLevel = 0, channelShown = 0;
  let twitchAmp = 0;
  const twitchRot = new THREE.Euler(), twitchTarget = new THREE.Euler();
  let oppChannelOn = false;
  let inhaling = false;
  let dragonInhale = 0, dragonBreathUntil = 0; // (the dragon model: rearing back, jaws wide on the fire)
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
    // (0.9.9.9.6.9: in a duel they stand closer — they looked small and far away)
    const oz = s.layout === 'deck' ? -2.2 : -0.9;
    // 0.9.9.9.9.5: on a computer the kanji is at the bottom now — the opponent straight ahead, in the middle (it stood to
    // the right of a word in the middle of the screen); an upright phone: near the middle, clear of your hand
    const wide = camera.aspect >= 1 && s.layout !== 'deck';
    if (opp) opp.group.position.set(screenSpot(camera.aspect < 1 ? 0.08 : s.layout === 'deck' ? 0.36 : 0, wide ? -1.3 : oz), 0, wide ? -1.3 : oz);
    const boss = fighters.get('boss');
    if (boss) boss.group.position.set(screenSpot(camera.aspect < 1 ? 0.15 : 0, -5.5), 0, -5.5);
    s.allies.forEach((a, i) => {
      const f = fighters.get(`ally:${a.id}`);
      // (0.9.9.9.9.5: on a computer your teammates stand beside you — left, right, then further left — a step ahead)
      // (0.9.9.9.9.5: fixed spots on the floor near you — left, right, further left — pulled in on a narrow screen so they
      // stay in view, and never past the arena's edge: placed by the screen's width they stood outside it on wide ones)
      let x: number, z: number;
      if (wide) { [x, z] = ([[-2.7, 1.6], [3.1, 1.0], [-4.0, 0.0]] as const)[i % 3]; const lim = Math.abs(screenSpot(0.82, z)); x = Math.max(-lim, Math.min(lim, x)); }
      else { z = -0.6 - i * 1.1; x = screenSpot(-0.36 + i * 0.13, z); }
      const rr = Math.hypot(x, z); if (rr > 8) { x *= 8 / rr; z *= 8 / rr; }
      if (f) f.group.position.set(x, 0, z);
    });
    // everyone faces their target: you face the opponent / dragon, the opponent faces you
    const foe = (boss ?? opp)?.group.position;
    for (const [key, f] of fighters) {
      if (f.dragon) { f.dragon.root.rotation.y = Math.atan2(CAM.x - f.group.position.x, CAM.z - f.group.position.z); continue; }
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
    skinMat.metalness = s.me.character === 'knight' ? 0.12 : 0; // a gauntlet (not too metallic: there is no environment map to reflect, so metal goes dark)
    placeHand();
    setStaffSkin(s.me.staff ?? 'verdant');
    meDown = false; fp.visible = true; gemState = 'ready';
    cine = null; cineW = 0; introPending = true; lastImpact = -1e9; // (0.9.9.9.6.9: each battle opens with the fly-in)
    koGen++; koWait.clear();
    myFlame = null; fireU.uAmount.value = 0; fireBand.visible = false; // a new game starts without last game's flames
    myPose = isPose(s.me.pose) ? s.me.pose : 'none'; myPoseK = 0;
    if (s.opp) makeFighter('opp', s.opp);
    if (s.boss) makeFighter('boss', s.boss);
    for (const a of s.allies) makeFighter(`ally:${a.id}`, a);
    placeFighters();
    applyBackground(s);
  }
  /** the arena, its light and the time of day (also on its own: Customize switching arenas, 0.9.9.3.3) */
  function applyBackground(s: ArenaSetup) {
    setWeather(s.weather);
    const L = LIGHT[s.time];
    hemi.color.set(L.sky); hemi.groundColor.set(L.ground); hemi.intensity = L.hemi * 1.25;
    stage.intensity = s.time === 'night' ? 1.3 : s.time === 'sunset' ? 1 : 0.7;
    sun.color.set(L.sun); sun.intensity = L.sunInt; sun.position.set(...L.sunPos);
    fill.intensity = s.time === 'night' ? 9 : 5;
    for (const t of torches) t.base = L.torch;
    moteMat.color.set(L.motes);
    spriteTint = new THREE.Color(L.spriteTint);
    if (bgKey !== s.bgKey) {
      bgKey = s.bgKey;
      setEnv(s.bgKey.split('-')[0], s.time);
    }
    if (env) applyEnvLight(env);
    else if (bgKeyClassic !== s.bgKey) {
      bgKeyClassic = s.bgKey;
      (scene.fog as THREE.Fog).near = 20; (scene.fog as THREE.Fog).far = 58;
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

  // ── input: mouse look ───────────────────────────────────────────────────────
  // Full 3D: you turn your head where the mouse points (left → you look left), and the other players see your
  // model turn its head. Lite: the old, cheaper parallax (the camera slides a little). Moves made while drawing
  // a stroke, or over the writing pad, buttons and cards, are ignored — the view must not swing while you write.
  const mouse = new THREE.Vector2(), look = new THREE.Vector2();
  const LOOK_YAW = 0.32, LOOK_PITCH = 0.13; // how far you can look (radians)
  const myLook = { yaw: 0, pitch: 0, sentYaw: 0, sentPitch: 0, sentAt: 0 };
  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || e.buttons) return; // not while drawing (or on a phone)
    // 0.9.9.9.9.6: a replay (or a friend's game) is watched, not played — the view doesn't follow your mouse
    if (document.body.dataset.watch) { mouse.set(0, 0); return; }
    const t = e.target as Element | null;
    if (t?.closest?.('.pad, canvas:not(#arena3d):not(#arenaPreview), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog')) return; // (0.9.9.9.5.5: the Customize preview follows the mouse over it too)
    mouse.set((e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1);
  };
  addEventListener('pointermove', onMove, { passive: true });
  // ── phones: turn or tilt the phone to look around (0.9.9.3) — the same look as the mouse.
  // 0.9.9.8: from where the BACK of the phone points (its camera direction), worked out from the phone's orientation
  // as a whole — like aiming a camera: swing it right and you look right, tilt it up and you look up, however you
  // hold it (upright, sideways, tipped back). Before, the rotation-rate axes were mixed up on some phones (browsers
  // disagree which of alpha/beta/gamma is which axis), so a swing right went up and down. Where you point slowly
  // becomes "straight ahead" again, so it never drifts and any comfortable angle works.
  const turn = { yaw: 0, pitch: 0, refYaw: NaN, refPitch: 0, at: 0, live: 0 };
  const D2R = Math.PI / 180;
  const wrap = (d: number) => ((((d + 180) % 360) + 360) % 360) - 180;
  const onOrient = (e: DeviceOrientationEvent) => {
    if (e.alpha === null || e.beta === null || e.gamma === null || !active) return;
    const now = performance.now();
    const dt = turn.at ? Math.min(0.1, (now - turn.at) / 1000) : 0;
    turn.at = now; turn.live = now;
    const a = e.alpha * D2R, b = e.beta * D2R, g = e.gamma * D2R;
    // the back of the phone (−z) in the earth's frame (x east, y north, z up): Rz(α)·Rx(β)·Ry(γ)·(0, 0, −1)
    const sa = Math.sin(a), ca = Math.cos(a), sb = Math.sin(b), cb = Math.cos(b), sg = Math.sin(g), cg = Math.cos(g);
    const fx = -sg * ca - cg * sb * sa, fy = -sg * sa + cg * sb * ca, fz = -cg * cb;
    const elev = Math.asin(Math.max(-1, Math.min(1, fz))) / D2R; // + = pointing up
    const flat = Math.abs(fz) > 0.96; // lying flat: no meaningful left/right
    const heading = Math.atan2(fx, fy) / D2R; // + = turned right (clockwise from above)
    if (Number.isNaN(turn.refYaw) || !dt) { turn.refYaw = heading; turn.refPitch = elev; }
    const settle = 1 - Math.exp(-dt / 2.2); // "straight ahead" catches up in a couple of seconds
    if (flat) turn.refYaw = heading;
    const dy = wrap(heading - turn.refYaw), dp = elev - turn.refPitch;
    turn.refYaw = wrap(turn.refYaw + dy * settle);
    turn.refPitch += dp * settle;
    turn.yaw = flat ? turn.yaw * (1 - settle) : dy;
    turn.pitch = dp;
    mouse.set(Math.max(-1, Math.min(1, turn.yaw / 16)), Math.max(-1, Math.min(1, -turn.pitch / 14)));
  };
  const touchy = matchMedia('(pointer: coarse)').matches && 'DeviceOrientationEvent' in window;
  // iOS asks for permission, and only from a tap: ask at the first tap on the arena
  const askTilt = () => {
    removeEventListener('touchend', askTilt);
    const D = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> };
    if (D.requestPermission) void D.requestPermission().then((res) => { if (res === 'granted') addEventListener('deviceorientation', onOrient); }).catch(() => { /* declined */ });
  };
  if (touchy) {
    if ((DeviceOrientationEvent as unknown as { requestPermission?: unknown }).requestPermission) addEventListener('touchend', askTilt, { passive: true });
    else addEventListener('deviceorientation', onOrient);
  }
  /** Your hand and staff, bottom-right — moved in on a narrow (upright phone) screen so they stay in view. */
  function placeHand() {
    const base = layout === 'deck' ? FP_DECK : FP_BATTLE, size = layout === 'deck' ? 0.56 : 0.72;
    if (camera.aspect >= 1.2) { fpBase.copy(base); fp.scale.setScalar(size); return; }
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * -base.z, halfW = halfH * camera.aspect;
    fpBase.set(halfW * 0.78, -halfH * 0.62, base.z);
    fp.scale.setScalar(size * Math.max(0.5, Math.min(1, camera.aspect * 0.9)));
  }
  let lastW = 0, lastH = 0; // (the canvas size the picture was last made for)
  function resize() {
    // 0.9.9.9.5.4: a canvas not laid out yet (hidden, just shown) has no size: wait for the ResizeObserver. It used to
    // take the window's size then, and the observer, still remembering the last size, never put it right — coming
    // back to Customize, the preview came out stretched (very wide or very thin).
    lastW = canvas.clientWidth; lastH = canvas.clientHeight;
    if (opts.preview && (!lastW || !lastH)) return;
    const w = lastW || innerWidth, h = lastH || innerHeight;
    renderer.setSize(w, h, false);
    post?.setSize(w, h);
    camera.aspect = w / h;
    camera.fov = camera.aspect < 1 ? 60 : camera.aspect < 1.3 ? 66 : 55; // upright phone: the sides are cropped, the arena a bit closer
    camera.updateProjectionMatrix();
    placeFighters();
    placeFireBand();
    placeHand();
  }
  addEventListener('resize', resize);
  // the canvas can also change size on its own (phone keyboard, browser bars)
  const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(() => {
    if (!active || (canvas.clientWidth === lastW && canvas.clientHeight === lastH)) return;
    resize();
  }) : null;
  ro?.observe(canvas);

  // ── materials on a model: hurt flash, frost, burning ───────────────────────
  const KO_GREY = new THREE.Color(0x6a6a78), RED = new THREE.Color(0xff2a2a), ICE = new THREE.Color(0x8fdcff), ICE_GLOW = new THREE.Color(0x2a7cff), BURN = new THREE.Color(0xff6a1a);
  function tintModel(f: Fighter, now: number) {
    const hurt = now < f.hurtUntil, frost = now < f.frostUntil, burn = now < f.burnUntil;
    const mats = f.model?.materials ?? f.dragon?.materials;
    if (mats && f.ko) {
      for (const m of mats) { m.mat.color.copy(m.color).lerp(KO_GREY, 0.55); m.mat.emissive.setRGB(0, 0, 0); }
      return;
    }
    if (mats) {
      if (frost !== f.frosted) {
        f.frosted = frost;
        for (const m of mats) { m.mat.opacity = frost ? 0.5 : 1; m.mat.depthWrite = !frost; }
      }
      for (const m of mats) {
        m.mat.color.copy(m.color);
        if (frost) m.mat.color.lerp(f.frostTint ?? ICE, 0.75);
        if (hurt) { m.mat.emissive.copy(RED); m.mat.emissiveIntensity = 0.6; }
        else if (frost) { m.mat.emissive.copy(f.frostTint ?? ICE_GLOW); m.mat.emissiveIntensity = 0.45; }
        else if (burn) { const b = f.burnTint ?? BURN; m.mat.color.lerp(b, 0.35); m.mat.emissive.copy(b); m.mat.emissiveIntensity = 0.55 + 0.3 * Math.sin(now / 40); }
        else { m.mat.emissive.copy(m.emissive); m.mat.emissiveIntensity = 1; }
      }
    } else if (f.spriteMat) {
      f.spriteMat.color.copy(hurt ? new THREE.Color(1, 0.35, 0.35) : frost ? ICE : burn ? new THREE.Color(1, 0.7, 0.5) : spriteTint);
      f.spriteMat.opacity = frost ? 0.6 : f.ko ? f.spriteMat.opacity : 1;
    }
  }

  // ── the frame loop ─────────────────────────────────────────────────────────
  let active = false, raf = 0, last = performance.now(), time = 0;
  // ── 0.9.9.9.6.9: the cinematic camera — a fly-in as the battle starts, a short side shot when a big spell of yours
  // lands (a critical, or on fire), a slow orbit round the fallen foe when you win. Smooth eases only; then back in
  // your eyes. localStorage kb:cinema = off turns it off.
  // (0.9.9.9.7: a shot's time is counted in drawn frames, each at most 1/20 s — the first frames of a battle can take
  // a second each while the arena is built, and on the clock the fly-in was over before anything showed)
  /**
   * `end`: 0.9.9.9.7.3 — the intro was cut there (the battle began): it glides back into your eyes in INTRO_OUT_MS of
   * real time from `endAt` (not counted in frames: on a slow device that took seconds)
   */
  type Cine = { kind: 'intro' | 'impact' | 'victory'; t: number; dur: number; who?: Who; a0?: number; end?: number; endAt?: number };
  const INTRO_OUT_MS = 400;
  /** 0.9.9.9.7.3 (?debug3d only, for screenshots): a fighter held at this moment of a hit's reaction */
  let heldHit: { who: string; ms: number } | null = null;
  let cine: Cine | null = null, cineW = 0, introPending = false, lastImpact = -1e9;
  const cinemaOn = (() => { try { return localStorage.getItem('kb:cinema') !== 'off'; } catch { return true; } })();
  const smooth = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };
  const cineTmp = new THREE.PerspectiveCamera(); // (a camera: lookAt points its -Z at the target, like the real one)
  /** where the camera wants to be for the current shot, and how much of it (0: your eyes … 1: all the shot) */
  function cinePose(): { pos: THREE.Vector3; look: THREE.Vector3; w: number } | null {
    if (!cine) return null;
    const t = cine.t;
    if (cine.kind === 'intro') {
      const outMs = cine.endAt !== undefined ? performance.now() - cine.endAt : 0;
      if (t >= cine.dur || outMs >= INTRO_OUT_MS) { cine = null; return null; }
      // high behind you, swinging in from the side, down into your eyes (cut short: from where it was, quickly)
      const out = cine.end !== undefined ? smooth(outMs / INTRO_OUT_MS) : 0;
      const k = smooth(Math.min(t, cine.end ?? t) / cine.dur), w = (1 - k) * (1 - out);
      const side = 2.4 * w; // (inside the ring of trees: they start about 15 out)
      return { pos: new THREE.Vector3(CAM.x + side, CAM.y + 2.4 * w, CAM.z + 3.2 * w), look: LOOK.clone().add(new THREE.Vector3(0, -0.4 * w, -2.5 * w)), w };
    }
    const f = cine.who ? fighters.get(cine.who) : undefined;
    if (!f) { cine = null; return null; }
    const at = f.group.position, big = cine.who === 'boss';
    if (cine.kind === 'impact') {
      if (t >= cine.dur) { cine = null; return null; }
      const w = t < 0.35 ? smooth(t / 0.35) : t > cine.dur - 0.45 ? smooth((cine.dur - t) / 0.45) : 1;
      const drift = (t / cine.dur) * 0.5; // (a slow push while it holds)
      const off = big ? new THREE.Vector3(-4.6 + drift, 2.6, 5.6 - drift) : new THREE.Vector3(-2.3 + drift * 0.6, 1.35, 2.9 - drift * 0.6);
      return { pos: at.clone().add(off), look: at.clone().add(new THREE.Vector3(0, big ? 2.2 : 1.05, 0)), w };
    }
    // victory: round the fallen foe, slowly, until the battle closes
    const w = smooth(t / 0.9);
    const a = (cine.a0 ?? 0) + t * 0.22, R = big ? 7.5 : 3.4;
    return { pos: at.clone().add(new THREE.Vector3(Math.sin(a) * R, big ? 3.2 : 1.55, Math.cos(a) * R)), look: at.clone().add(new THREE.Vector3(0, big ? 1.4 : 0.7, 0)), w };
  }
  // ── 0.9.9.9.7: a hit lands — they feel it: a snap back at the waist and the head, a step away, then they settle
  function react(f: Fighter, from: THREE.Vector3 | null, pow: number) {
    f.hitAt = performance.now(); f.hitPow = pow;
    f.hitLeg = 1 - f.hitLeg; // (0.9.9.9.7.3: one leg steps back — the other one next time)
    const d = f.group.position.clone().sub(from ?? camera.position); d.y = 0;
    if (d.lengthSq() > 1e-6) f.hitDir.copy(d.normalize());
  }
  /** 0 → 1 → 0: up in `rise` ms, held to `hold`, back by `end` */
  const hitCurve = (ms: number, rise: number, hold: number, end: number) => (ms < 0 || ms > end ? 0 : ms < rise ? smooth(ms / rise) : ms < hold ? 1 : 1 - smooth((ms - hold) / (end - hold)));
  function startCine(c: Cine) { if (!opts.preview && cinemaOn) cine = c; }
  let focusOn = false, focus = 0;
  // adaptive quality: a slow machine drops to Lite (then lower resolution) by itself, instead of lagging
  let perfFrames = 0, perfTime = 0, perfSkip = 0;
  function watchPerf(ms: number) {
    if (lowRes || document.hidden || filming) return;
    if (perfSkip < 45) { perfSkip++; return; } // the first frames compile shaders, upload textures
    perfFrames++; perfTime += ms;
    if (perfTime < 2500) return;
    const fps = (perfFrames * 1000) / perfTime;
    perfFrames = 0; perfTime = 0;
    if (fps >= (lite ? 22 : 34)) return;
    if (!lite) api.setLite(true); else { lowRes = true; renderer.setPixelRatio(pixelRatio()); resize(); }
    dispatchEvent(new CustomEvent('kw:arena-lite', { detail: { fps: Math.round(fps), lowRes } }));
  }
  function frame(nowMs: number) {
    raf = requestAnimationFrame(frame);
    if (!opts.preview && (document.body.classList.contains('paused') || document.body.classList.contains('replay-paused'))) { last = nowMs; return; } // 0.9.9.7: a paused game is a still picture (0.9.9.9.9.1: a paused replay too)
    if (!opts.preview) watchPerf(nowMs - last); // a Customize preview never switches the game to Lite
    const realDt = Math.min(1, Math.max(0, (nowMs - last) / 1000));
    const dt = Math.min(0.05, realDt); last = nowMs; time += dt;
    const now = performance.now();
    const still = false; // ambient motion always runs (see `reduced`)

    look.lerp(mouse, still ? 1 : performance.now() - turn.live < 300 ? Math.min(1, realDt * 14) : 0.05); // the phone's turn follows quickly; the mouse eases
    const sway = still ? 0 : Math.sin(time * 0.7) * 0.025;
    if (lite) {
      // Lite: parallax — the camera slides towards the mouse a little
      camera.position.set(CAM.x + look.x * 0.12, CAM.y - look.y * 0.05 + sway, CAM.z);
      camera.lookAt(LOOK.clone().add(new THREE.Vector3(look.x * 1.5, -look.y * 0.75, 0)));
      myLook.yaw = 0; myLook.pitch = 0;
    } else {
      // Full 3D: you turn your head (left → look left, up → look up); others see your model do the same
      myLook.yaw = -look.x * LOOK_YAW; myLook.pitch = -look.y * LOOK_PITCH;
      camera.position.set(CAM.x, CAM.y + sway, CAM.z);
      const dir = LOOK.clone().sub(CAM).applyAxisAngle(new THREE.Vector3(0, 1, 0), myLook.yaw);
      const right = dir.clone().cross(new THREE.Vector3(0, 1, 0)).normalize();
      dir.applyAxisAngle(right, myLook.pitch);
      camera.lookAt(CAM.clone().add(dir));
    }
    // a Customize preview: the camera walks up to the opponent (you, as others see you) — 0.9.9.3.2
    focus += ((focusOn ? 1 : 0) - focus) * Math.min(1, dt * 4);
    const fo = fighters.get('opp');
    if (focus > 0.001 && fo) {
      const p = fo.group.position;
      const k = focus * focus * (3 - 2 * focus);
      // (0.9.9.9.5.3: on the Hero Locker's pedestal — turning — straight on, the whole of you in view)
      // (0.9.9.9.5.5: nothing picked — the camera swings round you, 70° each way, slowly; eased in and out)
      orbitK += ((orbiting ? 1 : 0) - orbitK) * Math.min(1, dt * 2);
      if (orbitK > 0.001) orbitT += dt;
      const a = Math.sin(orbitT * 0.32) * 1.22 * orbitK;
      const R = 3.0 + 0.25 * orbitK;
      const base = spinning ? new THREE.Vector3(p.x + 0.15, 1.45 + sway, p.z + 3.0) : new THREE.Vector3(p.x + 1.1, 1.75 + sway, p.z + 3.4);
      const round = new THREE.Vector3(p.x + Math.sin(a) * R, 1.5 + sway + 0.12 * Math.sin(orbitT * 0.21), p.z + Math.cos(a) * R);
      // (0.9.9.9.5.5: up close the mouse still moves the view a little — it went dead over the preview)
      const par = opts.preview ? new THREE.Vector3(look.x * 0.35, -look.y * 0.16, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), a) : new THREE.Vector3();
      camera.position.lerp(base.lerp(round, orbitK).add(par), k);
      camera.lookAt(new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion).multiplyScalar(4).add(camera.position).lerp(new THREE.Vector3(p.x - 0.1 * (1 - orbitK), spinning ? 1.3 : 1.45 - 0.17 * orbitK, p.z), k));
    }
    if (!opts.preview && active && current && (current.opp || current.allies.length) && nowMs - myLook.sentAt > 150 && (Math.abs(myLook.yaw - myLook.sentYaw) > 0.02 || Math.abs(myLook.pitch - myLook.sentPitch) > 0.02)) {
      myLook.sentAt = nowMs; myLook.sentYaw = myLook.yaw; myLook.sentPitch = myLook.pitch;
      dispatchEvent(new CustomEvent('kw:look', { detail: { yaw: +myLook.yaw.toFixed(3), pitch: +myLook.pitch.toFixed(3) } }));
    }
    // 0.9.9.9.6.9: the cinematic camera (see cinePose)
    if (introPending && active && !opts.preview) { introPending = false; startCine({ kind: 'intro', t: 0, dur: 3 }); } // (over the 3-2-1)
    if (cine) cine.t += dt;
    const shot = cinePose();
    cineW = shot ? shot.w : 0;
    if (shot && shot.w > 0.001) {
      cineTmp.position.copy(shot.pos); cineTmp.lookAt(shot.look);
      camera.position.lerp(shot.pos, shot.w);
      camera.quaternion.slerp(cineTmp.quaternion, shot.w);
    }
    if (trembleUntil > now) {
      // the ground rumbles: strong at first, then fading out
      // (0.9.9.9.5.5: about half as strong, a slower roll — it lasts longer now)
      const k = (trembleUntil - now) / trembleFor, amp = 0.026 * Math.min(1, k * 2.2) * (0.75 + 0.25 * Math.sin(now * 0.009));
      camera.position.add(new THREE.Vector3(Math.sin(now * 0.043) * amp, Math.sin(now * 0.057 + 1) * amp * 0.8, 0));
      camera.rotation.z += Math.sin(now * 0.031) * amp * 0.1;
    }
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

    // your hand and staff: writing / typing charges it (tilted back a little, the gem glowing) and the staff
    // traces a figure-eight (∞) in the air; a cast thrusts it forward and launches the gem
    {
      const th = Math.max(0, 1 - (now - thrustAt) / 380); // 1 → 0 after a thrust
      const thrust = th > 0 ? Math.sin(th * Math.PI) : 0;
      const charge = Math.min(1, channelShown);
      const swordMe = isSword(staffSkin);
      eightAmp += ((charge > 0.05 && !still && !swordMe ? Math.min(1, 0.5 + charge * 0.6) : 0) - eightAmp) * Math.min(1, dt * 3);
      eightPhase += dt * (2.6 + charge * 1.4);
      const ex = Math.sin(eightPhase), ey = Math.sin(eightPhase * 2) / 2;
      fp.position.set(
        fpBase.x - look.x * 0.04 + ex * 0.06 * eightAmp,
        fpBase.y + look.y * 0.03 + (still ? 0 : Math.sin(time * 1.6) * 0.008) + charge * 0.03 + ey * 0.11 * eightAmp,
        fpBase.z - thrust * 0.35,
      );
      staffGroup.rotation.set(
        charge * 0.25 - thrust * 0.75 + twitchRot.x * 0.3 + ey * 0.18 * eightAmp,
        twitchRot.y * 0.3,
        0.2 - ex * 0.24 * eightAmp + twitchRot.z * 0.3,
      );
      fp.rotation.z = 0; swingW = 0; // (a sword's swing rolls it; a staff never does)
      if (!swordMe && trail.visible) { trail.visible = false; trailPts.length = 0; }
      if (swordMe) {
        // 0.9.9.9.9.5: a sword is held still and trembles as you write (more as its blade fills with light) — no ∞ — and
        // a cast is one of three slashes, taking turns: a wind-up, a fast cut, a held follow-through and a smooth return
        // to the guard (it snapped back from the end of the cut: the swing looked broken)
        const tr = still ? 0 : charge;
        fp.position.set(fpBase.x - look.x * 0.04 + Math.sin(time * 57) * 0.006 * tr, fpBase.y + look.y * 0.03 + (still ? 0 : Math.sin(time * 1.6) * 0.008) + Math.sin(time * 71 + 1) * 0.005 * tr, fpBase.z);
        staffGroup.rotation.set(0.1 + charge * 0.25 + twitchRot.x * 0.3, twitchRot.y * 0.3, 0.2 + Math.sin(time * 63) * 0.028 * tr + twitchRot.z * 0.3);
        const u = Math.min(1, (now - thrustAt) / SWING_MS);
        fp.rotation.z = 0; swingW = 0;
        if (u < 1) {
          const sw = SWINGS[swingNo];
          const sm = (x: number) => x * x * (3 - 2 * x);
          // rest → wind-up → a held beat → the cut (~120 ms, speeding up, off the screen) → out of view → back up to the guard
          const rest = [0, 0, 0, 0];
          let A: readonly number[] = rest, B: readonly number[] = sw.from, k = sm(Math.min(1, u / SW_UP));
          const c = Math.max(0, Math.min(1, (u - SW_CUT) / (SW_END - SW_CUT)));
          if (u >= SW_CUT && u < SW_END) { A = sw.from; B = sw.to; k = c ** 1.6; }
          else if (u >= SW_END && u < SW_BACK) { A = sw.to; B = sw.to; k = 1; }
          else if (u >= SW_BACK) { A = sw.to; B = rest; k = sm((u - SW_BACK) / (1 - SW_BACK)); }
          const at = (i: number) => A[i] + (B[i] - A[i]) * k;
          const cut = u >= SW_CUT && u < SW_BACK ? Math.sin(Math.min(1, (u - SW_CUT) / (SW_BACK - SW_CUT)) * Math.PI) : 0;
          // the hand travels on an arc (a little closer to you in the middle of it, as an arm swings round the shoulder)
          fp.position.x += at(0); fp.position.y += at(1) + cut * 0.1; fp.position.z = fpBase.z - cut * 0.08;
          swingW = Math.min(1, Math.hypot(at(0), at(1)) * 2.5 + Math.abs(at(2)));
          fp.rotation.z = at(2); // the forearm rolls with it
          staffGroup.rotation.x += at(3); // raised back on the wind-up, reaching toward the foe on the cut
          // the wrist: cocked back with the wind-up; on the cut the blade lags the hand (still up as the hand comes down),
          // then whips past it
          const wristAt = (w: readonly [number, number]) => {
            if (u < SW_CUT) return w[0] * sm(Math.min(1, u / SW_UP));
            if (u < SW_END) { const lag = c < 0.45 ? 0.08 * (c / 0.45) : 0.08 + 0.92 * sm((c - 0.45) / 0.55); return w[0] + (w[1] - w[0]) * lag; }
            if (u < SW_BACK) return w[1];
            return w[1] * (1 - sm((u - SW_BACK) / (1 - SW_BACK)));
          };
          staffGroup.rotation.x += wristAt(sw.wp);
          staffGroup.rotation.z += wristAt(sw.wr);
          camera.rotation.z += cut * 0.05 * sw.lean; // the view leans into it
          // the trail: base and tip of the blade, in the world, through the cut and a moment after
          if (u >= SW_CUT && u < SW_END + 0.06 && trail.parent) {
            staff.group.updateWorldMatrix(true, false);
            trailPts.unshift([staff.group.localToWorld(new THREE.Vector3(0, 0.75, 0)), staff.group.localToWorld(new THREE.Vector3(0, 1.2, 0))]);
            if (trailPts.length > TRAIL_N) trailPts.length = TRAIL_N;
          }
        }
        // the trail fades from its tail; gone soon after the cut
        if (trail.parent) {
          if ((u >= SW_END + 0.06 || u >= 1) && trailPts.length) { trailPts.pop(); if (trailPts.length) trailPts.pop(); }
          trail.visible = trailPts.length > 1;
          if (trail.visible) {
            const c = staff.color;
            for (let i = 0; i < TRAIL_N; i++) {
              const pt = trailPts[Math.min(i, trailPts.length - 1)], a = i < trailPts.length ? (1 - i / TRAIL_N) ** 1.5 : 0;
              trailPos.set([pt[0].x, pt[0].y, pt[0].z, pt[1].x, pt[1].y, pt[1].z], i * 6);
              trailCol.set([c.r, c.g, c.b, a * 0.1, 0.55 + c.r * 0.45, 0.55 + c.g * 0.45, 0.55 + c.b * 0.45, a * 0.35], i * 8);
            }
            trailGeo.attributes.position.needsUpdate = true; trailGeo.attributes.color.needsUpdate = true;
          }
        }
      }
      // 0.9.9.7: your combo pose, as you see it — floating lifts your view; Duelist points the staff's core
      // straight ahead; Channel and Lotus bring the staff to the middle, upright, in both hands
      myPoseK += ((myFlame && myPose !== 'none' && !meDown ? 1 : 0) - myPoseK) * Math.min(1, realDt * 3);
      const pk = myPoseK * myPoseK * (3 - 2 * myPoseK);
      fpLeft.visible = pk > 0.02 && myPose === 'twohand';
      // 0.9.9.9.9.6: a sword is held by its handle — the left hand under the right one, not up on the blade (where it
      // sits on a staff's shaft); and a cut is one-handed: the left hand lets go (it floated in front of the swing)
      fpLeft.position.y = swordMe ? -0.115 : 0.26;
      if (swordMe && now - thrustAt < SWING_MS) fpLeft.visible = false;
      if (myPose !== 'aim' || pk <= 0.001) { fpArm.quaternion.copy(fpArmRest); if (fpSleeve) { fpSleeve.scale.y = 1; fpSleeve.position.y = -0.6; } }
      if (swingW > 0.001) {
        // 0.9.9.9.9.5: mid-swing the forearm reaches back to a shoulder off the bottom-right corner, stretching as the hand
        // goes across (it rolled round with the hand and stuck out sideways like a stick)
        fp.updateMatrix();
        const wrist = fp.position.clone().add(fpArm.position.clone().applyQuaternion(fp.quaternion).multiplyScalar(fp.scale.x));
        const shoulder = new THREE.Vector3(fpBase.x + 0.55, fpBase.y - 0.95, fpBase.z + 0.6);
        const toShoulder = shoulder.sub(wrist);
        const dir = toShoulder.clone().normalize().applyQuaternion(fp.quaternion.clone().invert());
        fpArm.quaternion.copy(fpArmRest).slerp(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir), swingW);
        if (fpSleeve) { const k = Math.max(1, Math.min(2.6, toShoulder.length() / (0.95 * fp.scale.x))); const kk = 1 + (k - 1) * swingW; fpSleeve.scale.y = kk; fpSleeve.position.y = -0.13 - 0.475 * kk; }
      }
      if (pk > 0.001) {
        if (myPose === 'float') camera.position.y += 0.2 * pk + Math.sin(time * 1.7) * 0.04 * pk;
        if (myPose === 'aim') {
          // 0.9.9.8.2: like aiming a pistol — the arm stretched out from the bottom-right corner towards the opponent,
          // the hand gripping the staff like a handle and the staff pointed straight at them, its core first (it was
          // bent aside so it wouldn't cover them, and didn't look like aiming at all)
          const hand = new THREE.Vector3(fpBase.x * 0.74, fpBase.y * 0.72, fpBase.z - 0.05);
          fp.position.lerp(hand, pk);
          const foe = fighters.get('opp') ?? fighters.get('boss');
          camera.updateMatrixWorld(true);
          const t = foe ? camera.worldToLocal(foe.group.position.clone().add(new THREE.Vector3(0, foe.height * 0.55, 0))) : new THREE.Vector3(0, -0.1, -8);
          const d = t.sub(fp.position).normalize(); // hand → opponent, in the camera's space (fp turns with it)
          // the staff's axis (+y) along d; the back of the hand to the right, the thumb on top — a pistol grip
          const x = new THREE.Vector3(1, 0, 0).addScaledVector(d, -d.x).normalize();
          const z = new THREE.Vector3().crossVectors(x, d);
          const want = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, d, z));
          staffGroup.quaternion.slerp(want, pk);
          // the forearm: from the wrist back past the bottom-right corner of the screen, long enough to leave it
          const wrist = fp.position.clone().add(fpArm.position.clone().multiplyScalar(fp.scale.x));
          const shoulder = new THREE.Vector3(fpBase.x * 0.95, fpBase.y * 2.1, -0.1);
          const armDir = shoulder.sub(wrist).normalize();
          fpArm.quaternion.copy(fpArmRest).slerp(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0), armDir), pk);
          if (fpSleeve) { const k = 1 + 1.3 * pk; fpSleeve.scale.y = k; fpSleeve.position.y = -0.13 - 0.475 * k; }
        } else if (myPose === 'twohand') {
          // upright in both hands — to the right of the middle and a little low, so the staff's top never stands
          // behind the kanji you have to read (0.9.9.7.1)
          fp.position.x += (0.62 - fpBase.x) * pk; fp.position.y += (fpBase.y - 0.12 - fpBase.y) * pk;
          staffGroup.rotation.x += (0.05 - staffGroup.rotation.x) * pk * 0.8; staffGroup.rotation.z += (0 - staffGroup.rotation.z) * pk;
          fpLeft.scale.setScalar(Math.max(0.01, pk));
        }
      }
      let gemScale = gemState === 'ready' ? 1 : 0;
      if (gemState === 'growing') {
        const t = Math.min(1, (now - growAt) / GROW_MS);
        gemScale = t * t * (3 - 2 * t);
        if (t >= 1) gemState = 'ready';
        else if (!still) {
          // energy gathering into the new gem
          staff.gem.getWorldPosition(tmp);
          for (let k = 0; k < 2; k++) {
            const from = tmp.clone().add(new THREE.Vector3(rnd(-0.4, 0.4), rnd(-0.4, 0.4), rnd(-0.4, 0.4)));
            spark(from, staff.color, { size: rnd(0.025, 0.06), vel: tmp.clone().sub(from).multiplyScalar(2.8), life: 0.36 });
          }
        }
      }
      staff.gem.scale.setScalar(gemScale);
      // (0.9.9.9.9.5: softer — the staffs glowed too much)
      staff.gemMat.emissiveIntensity = 0.45 + charge * (1 + pulse * 0.7) + thrust * 2;
      gemLight.intensity = (0.3 + charge * 2.4 + thrust * 4) * gemScale;
      staff.glow.scale.setScalar((0.3 + charge * (0.32 + pulse * 0.18) + thrust * 0.6) * gemScale);
      (staff.glow.material as THREE.SpriteMaterial).opacity = 0.16 + charge * 0.24;
      staff.gem.rotation.y += dt * (0.8 + charge * 6);
      staff.update(time, dt, charge, still ? 0 : myFury);
      if (gemScale > 0.9 && !still && fp.visible) {
        staff.gem.getWorldPosition(tmp);
        // the ∞ drawn in the air by the gem
        if (eightAmp > 0.25) spark(tmp.clone(), staff.color, { size: rnd(0.03, 0.05), life: 0.55, opacity: 0.9 });
        if (charge > 0.2 && Math.random() < charge * 0.8) {
          const from = tmp.clone().add(new THREE.Vector3(rnd(-0.35, 0.35), rnd(-0.35, 0.35), rnd(-0.35, 0.35)));
          spark(from, staff.color.clone().lerp(new THREE.Color(0xffffff), 0.4), { size: rnd(0.02, 0.05), vel: tmp.clone().sub(from).multiplyScalar(2.6), life: 0.38 });
        }
      }
      // (0.9.9.9.9.2: your staff no longer burns with your combo / Omnipotence flames — they covered it, and stayed in
      // the side shot of a big hit, floating where your hand had been; the mana fire along the bottom stays)
      // the mana fire along the bottom of the screen fades in and out
      fireU.uTime.value = still ? 0 : time;
      fireU.uAmount.value += ((myFlame && !inset && (fp.visible || focusOn) ? 1 : 0) - fireU.uAmount.value) * Math.min(1, realDt * 3);
      fireBand.visible = fireU.uAmount.value > 0.01;
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
        // where they look: the player's own mouse look (from the network), or — for the AI, or a player who
        // hasn't moved the mouse for a while — a slow idle glance around
        const L = f.look;
        const idle = now - L.at > 4000;
        const ty = idle ? 0.22 * Math.sin(time * 0.31 + L.seed) * Math.sin(time * 0.13 + L.seed * 2) : L.yaw;
        const tp = idle ? 0.06 * Math.sin(time * 0.23 + L.seed * 3) : L.pitch;
        L.curYaw += (ty - L.curYaw) * Math.min(1, dt * 7); L.curPitch += (tp - L.curPitch) * Math.min(1, dt * 7);
        m.head.rotation.set(-L.curPitch * 0.8, L.curYaw * 0.7, 0);
        m.body.rotation.y = L.curYaw * 0.3; // the shoulders follow a little
        // casting: a short wind-up (staff tip back), then the staff is thrust forward at the target — like yours
        const p = 1 - lunge; // 0 → 1 over the cast
        const thrust = lunge <= 0 ? 0 : p < 0.18 ? -0.35 * (p / 0.18) : p < 0.4 ? -0.35 + 1.35 * ((p - 0.18) / 0.22) : 1 - ((p - 0.4) / 0.6) ** 2;
        m.body.rotation.x = Math.max(0, thrust) * 0.2;
        m.staffPivot.rotation.x = thrust * 1.9;
        // the staff arm: raised to cast, held forward while writing, with little random moves as you write
        const writing = key === 'me' ? channelShown : (key === 'opp' || key.startsWith('ally:')) && oppChannelOn && (layout === 'deck' || f.typing) ? (layout === 'deck' ? 0.7 : 0.45) : 0;
        // while they type or write, the staff traces a figure-eight (∞) in the air — like yours
        const swordF = isSword(key === 'me' ? staffSkin : f.staffId); // (0.9.9.9.9.5: a sword trembles instead of drawing the ∞, and slashes across)
        const inf = key === 'me' || swordF ? 0 : writing * (1 - Math.max(0, thrust));
        const ax = -0.15 - writing * 0.75 - Math.max(0, thrust) * 0.9 + (key === 'me' ? twitchRot.x : 0) + Math.sin(time * 4.4) * 0.22 * inf;
        // (0.9.9.9.7.4: the arm eases on a value of its own — a hit's offset added to the arm's turn fed back into this
        // easing every frame and ran away with the hand)
        f.armX = (f.armX ?? m.arm.rotation.x) + (ax - (f.armX ?? m.arm.rotation.x)) * Math.min(1, dt * 10);
        m.arm.rotation.x = f.armX;
        m.arm.rotation.z = ARM_REST + (key === 'me' ? twitchRot.z : 0) + Math.sin(time * 2.2) * 0.32 * inf
          + (swordF ? Math.sin(time * 60 + f.height) * 0.04 * writing + (lunge > 0 ? 0.7 - 1.6 * p * p * (3 - 2 * p) : 0) : 0);
        m.arm.rotation.y = key === 'me' ? twitchRot.y : 0;
        const glowLevel = key === 'me' ? channelShown : writing;
        m.crystalMat.emissiveIntensity = 0.7 + glowLevel * (1.8 + pulse * 1.2) + lunge * 2; // (0.9.9.9.9.5: softer)
        m.glow.scale.setScalar(0.45 + glowLevel * (0.5 + pulse * 0.3) + lunge * 0.6);
        (m.glow.material as THREE.SpriteMaterial).opacity = 0.45 + glowLevel * 0.5;
        m.crystal.rotation.y += dt * (0.8 + glowLevel * 6);
        m.staff.update(time, dt, glowLevel, f.fury ?? 0);
        // 0.9.9.7: on fire, they strike their combo pose (Customize)
        f.poseK += ((f.flame && f.pose !== 'none' ? 1 : 0) - f.poseK) * Math.min(1, dt * 3);
        applyPose(m, f.pose, f.poseK, time); // (always: back to standing resets the last pose — 0.9.9.7.3)
        // 0.9.9.9.7.4: a hit, as a body takes one (the way hit reactions are animated): the impact snaps the chest back
        // and the head a beat later; the knees give and the hips drop to absorb it; the weight goes back, so one foot
        // steps back to catch it — lifted, then planted — and the torso turns a little to that side; the arms jolt with
        // it but keep their grip; then a small sway forward as they recover. Every part has its own timing (one curve
        // for all looked mechanical). Before: the whole body tipped back ~55° (goofy), and the staff arm ran away.
        const since = heldHit?.who === key ? heldHit.ms : now - f.hitAt;
        const pow = f.hitPow;
        const hit = hitCurve(since, 60, 110, 520) * pow; // the jolt: chest, arms
        const head = hitCurve(since - 40, 60, 120, 560) * pow; // the head, a beat later
        const absorb = hitCurve(since, 110, 230, 780) * pow; // knees give, hips drop
        const step = hitCurve(since, 150, 340, 1000) * pow; // the catch step, and the body carried back with it
        const lift = since > 0 && since < 320 ? Math.sin((Math.PI * since) / 320) * pow : 0; // that foot off the floor
        const rebound = hitCurve(since - 430, 150, 200, 650) * pow; // a sway forward as they recover
        const side = f.hitLeg === 0 ? 1 : -1;
        // the upper body: the rigged models bend at the spine (m.flinch, after breathe below); the older ones lean whole
        m.body.rotation.x += (m.flinch ? -0.04 : -0.2) * hit + 0.06 * rebound;
        m.body.rotation.y += 0.1 * side * hit;
        m.body.position.y -= 0.025 * absorb;
        m.head.rotation.x -= (m.flinch ? 0.1 : 0.18) * head;
        m.arm.rotation.x -= 0.15 * hit; m.arm.rotation.z += 0.06 * hit; // (the arm's turn is set afresh each frame above)
        if (m.leftArm) m.leftArm.rotation.x -= 0.18 * hit;
        m.root.rotation.x = 0; m.root.rotation.z = 0.035 * side * step;
        m.root.position.x = f.hitDir.x * 0.28 * step; m.root.position.z = f.hitDir.z * 0.28 * step;
        // the legs (applyPose has just stood them straight, so this goes on top)
        const legs = m.legs;
        if (legs?.length === 2 && (step > 0.001 || absorb > 0.001)) {
          const back = legs[f.hitLeg], front = legs[1 - f.hitLeg];
          back.hip.rotation.x += 0.38 * step + 0.15 * lift - 0.08 * absorb;
          back.knee.rotation.x += 0.12 * step + 0.55 * lift + 0.16 * absorb;
          front.hip.rotation.x -= 0.05 * step + 0.1 * absorb;
          front.knee.rotation.x += 0.2 * absorb;
        }
        if (glowLevel > 0.5 && Math.random() < glowLevel * 0.6) {
          m.crystal.getWorldPosition(tmp);
          spark(tmp.clone().add(new THREE.Vector3(rnd(-0.1, 0.1), rnd(-0.1, 0.1), rnd(-0.1, 0.1))), m.staff.color.getHex(), { size: rnd(0.03, 0.08), vel: new THREE.Vector3(rnd(-0.2, 0.2), rnd(0.2, 0.6), 0), life: 0.7 });
        }
        if (spinning && key === 'opp' && !f.ko) m.root.rotation.y += dt * 0.5;
        if (!f.ko) m.breathe?.(still ? 0 : time); // 0.9.9.9.5.4: the rigged models breathe
        m.flinch?.(hit); // 0.9.9.9.7.3: a hit snaps the chest back (after breathe: it sets the same bones)
        m.groundFix?.(); // 0.9.9.9.6.3: feet never under the floor (poses, the bob, the kneel)
      } else if (f.dragon) {
        dragonInhale += ((inhaling ? 1 : 0) - dragonInhale) * Math.min(1, dt * 2.5);
        const left = Math.max(0, dragonBreathUntil - now) / 1300; // 1 → 0 over the fire
        const breathK = left > 0 ? Math.min(1, (1 - left) * 6, left * 3) : 0; // jaws snap open, hold, close
        f.dragon.update(time, dt, { inhale: dragonInhale, breath: breathK, lunge: Math.sin(Math.min(1, lunge) * Math.PI), still });
        // 0.9.9.9.7: even the dragon is pushed back a little by a hit
        const dstep = hitCurve(now - f.hitAt, 150, 300, 1100) * f.hitPow;
        f.dragon.root.position.x = f.hitDir.x * 0.5 * dstep; f.dragon.root.position.z = f.hitDir.z * 0.5 * dstep;
      } else if (f.sprite) {
        f.sprite.position.y = still ? 0 : Math.abs(Math.sin(time * 2)) * 0.05;
        f.sprite.position.z = lunge * 0.4 + f.hitDir.z * 0.3 * hitCurve(now - f.hitAt, 150, 320, 1150); // (0.9.9.9.7: and pushed back)
      }
      const auraOn = (key === 'opp' && oppChannelOn && layout === 'deck') || (key === 'boss' && inhaling);
      const am = f.aura.material as THREE.SpriteMaterial;
      am.opacity += ((auraOn ? 0.55 + 0.2 * Math.sin(time * 5) : f.flame ? 0.35 : 0) - am.opacity) * Math.min(1, dt * 5);
      am.color.copy(key === 'boss' ? new THREE.Color(0xff7a2a) : f.flame ?? new THREE.Color(0xb48cff));
      if (f.flame) flames(f, f.flame, 2);
      // glowing eyes: a slow pulse, a big flare right after an Omnipotence
      const eyes = f.model?.eyes;
      if (eyes?.visible) {
        const flash = Math.max(0, f.eyesFlashUntil - now) / 1400;
        const k = 1 + 0.25 * Math.sin(time * 7) + flash * 3.5;
        for (const c of eyes.children) if ((c as THREE.Sprite).isSprite) c.scale.setScalar(0.06 * k);
        if (!f.flame && flash <= 0) eyes.visible = false;
      }
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
    if (env) {
      env.update(time * 30);
      for (const l of envLights) if (l.userData.flicker) l.intensity = l.userData.base * (1 - l.userData.flicker * (0.5 + 0.5 * Math.sin(time * 9 + l.position.x) * Math.sin(time * 23 + l.position.z)));
    }

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
      const before = fl.t;
      fl.t += dt / fl.dur;
      if (fl.t < 0) continue; // (a sword's wave waits for the cut)
      if (before < 0 && fl.launch) { fl.from.copy(fl.launch()); fl.mid.copy(fl.from).lerp(fl.to, 0.5).add(new THREE.Vector3(0, 0.12, 0)); if (fl.wave) fl.wave.visible = true; }
      const t = Math.min(1, fl.t);
      const e = t * t * (1.6 - 0.6 * t);
      const a = fl.from.clone().lerp(fl.mid, e), b = fl.mid.clone().lerp(fl.to, e);
      fl.sprite.position.copy(a.lerp(b, e));
      if (fl.gem) { fl.gem.position.copy(fl.sprite.position); fl.gem.rotation.y += dt * 12; fl.gem.rotation.x += dt * 7; }
      if (fl.wave) {
        // (0.9.9.9.9.5: the slash wave faces the way it flies, tilted like the cut, growing as it goes)
        fl.wave.position.copy(fl.sprite.position);
        fl.wave.lookAt(fl.to); fl.wave.rotateZ(fl.tilt ?? -0.5);
        fl.wave.scale.setScalar(fl.size * (0.6 + 0.7 * e));
        (fl.wave.material as THREE.MeshBasicMaterial).opacity = fl.incoming ? 1 - 0.7 * Math.max(0, (t - 0.4) / 0.6) : 1;
      }
      const grow = fl.incoming ? 0.55 + e * 0.25 : 0.55 + e * 0.8;
      const mat = fl.sprite.material as THREE.SpriteMaterial;
      // an incoming spell fades as it gets close (the hit flash and the damage number say what happened)
      if (fl.incoming) mat.opacity = 1 - 0.75 * Math.max(0, Math.min(1, (t - 0.35) / 0.5));
      fl.sprite.scale.set(fl.size * 0.42 * grow, fl.size * 0.42 * grow, 1);
      fl.trailAt -= dt;
      if (fl.trailAt <= 0 && !still) {
        fl.trailAt = 0.016;
        spark(fl.sprite.position, fl.color, { size: rnd(0.05, 0.13) * fl.size, life: 0.35, opacity: 0.8, vel: new THREE.Vector3(rnd(-0.3, 0.3), rnd(-0.3, 0.3), rnd(-0.3, 0.3)) });
      }
      if (t >= 1) {
        scene.remove(fl.sprite); mat.dispose(); // (the orb texture is shared)
        if (fl.gem) scene.remove(fl.gem);
        if (fl.wave) { scene.remove(fl.wave); fl.wave.geometry.dispose(); (fl.wave.material as THREE.Material).dispose(); }
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
    if (flashLight.intensity > 0 && performance.now() > flashUntil) flashLight.intensity = 0;
    hits.step(dt); // (0.9.9.9.9.1: the staffs' hits)
    weather?.update(dt);
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
    if (cineW > 0.001) fp.position.y -= cineW * 1.6; // (your hand out of the shot)
    if (post) post.render(); else renderer.render(scene, camera); // (0.9.9.9.9.1: on High, through the glow)
    if (inset && focus > 0.5) {
      // the same moment as you see it yourself: the camera back in your eyes, your hand and staff in front
      const pos = camera.position.clone(), quat = camera.quaternion.clone(), fpWas = fp.visible;
      camera.position.set(CAM.x, CAM.y + (camera.position.y - CAM.y) * 0, CAM.z);
      if (myPose === 'float') camera.position.y += 0.2 * myPoseK;
      camera.lookAt(LOOK);
      fp.visible = true;
      camera.updateMatrixWorld(true);
      const sz = renderer.getSize(new THREE.Vector2());
      const iw = Math.round(sz.x * 0.42), ih = Math.round(sz.y * 0.42);
      renderer.setScissorTest(true);
      renderer.setViewport(sz.x - iw - 8, 8, iw, ih); renderer.setScissor(sz.x - iw - 8, 8, iw, ih);
      renderer.render(scene, camera);
      renderer.setScissorTest(false);
      renderer.setViewport(0, 0, sz.x, sz.y);
      fp.visible = fpWas;
      camera.position.copy(pos); camera.quaternion.copy(quat);
    }
  }

  /** what a Deck Duel card does to its target, on impact */
  function cardEffect(to: Who, fx: SpellFx | undefined, at: THREE.Vector3) {
    const t = fighters.get(to);
    const now = performance.now();
    if (t && fx) { t.burnTint = undefined; t.frostTint = undefined; }
    if (fx === 'bolt') { lightning(t ? pointOf(to, 'head') : at); if (to === 'me') screenHit('190,230,255', 'bolt'); }
    if (fx === 'frost') { if (t) t.frostUntil = now + 1100; burst(at, 0xcff2ff, 30, 2.5, 0.16); if (to === 'me') screenHit('140,210,255', 'frost'); }
    if (fx === 'fire') { if (t) t.burnUntil = now + 1100; burst(at, 0xff7a2a, 36, 3.4, 0.24); if (to === 'me') screenHit('255,120,30', 'fire'); }
  }

  // ── 0.9.9.8.2: what your staff's spell does when it lands (every mode but Deck Duel, whose cards have their own) ──
  // 0.9.9.9.9.1: remade in staffhits.ts — every staff's hit in its own colours (Jade's fire is green), and the Void's
  // a black hole. The seasonal staffs do what their classic staff does.
  const hits = createHits({
    scene, camera, sparkTex, lite: () => lite, spark, burst,
    flash: (c, at, power, ms) => { flashLight.color.set(c); flashLight.position.copy(at).add(new THREE.Vector3(0, 1.2, 1)); flashLight.intensity = power; flashUntil = performance.now() + ms; },
  });
  const staffIdOf = (who: Who) => (who === 'me' ? staffSkin : fighters.get(who)?.staffId) ?? 'verdant';
  /** the colour a staff's spell flies in (its gem), as a CSS colour */
  const spellColour = (who: Who) => `#${new THREE.Color(staffOf(staffIdOf(who)).gem).getHexString()}`;
  /** the impact of a normal attack, after the caster's staff (not Deck Duel, not the dragon) */
  function staffImpact(from: Who, to: Who, at: THREE.Vector3) {
    if (layout === 'deck' || from === 'boss') return;
    const def = staffOf(staffIdOf(from));
    const kind = def.base ?? def.id;
    const main = new THREE.Color(def.gem), tint = new THREE.Color(def.tint ?? def.gem);
    const t = fighters.get(to);
    const now = performance.now();
    const firstPerson = to === 'me' && fp.visible;
    const rgb = (c: THREE.Color) => `${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)}`;
    const ground = t ? t.group.position.clone().setY(0) : new THREE.Vector3(at.x, 0, at.z);
    const chest = firstPerson ? at.clone().add(new THREE.Vector3(0, 0.2, 0)) : pointOf(to, 'chest');
    const height = t ? t.height * t.group.scale.y : 1.6;
    hits.impact(kind, { ground, chest, height, main, tint, seasonal: !!def.season, firstPerson }, lightning);
    // their body takes the colour of it a moment (burning, frozen) — the staff's colour
    if (t && kind === 'ember') { t.burnTint = def.season ? main.clone() : undefined; t.burnUntil = now + 1100; for (let k = 0; k < 4; k++) setTimeout(() => flames(t, main, 2), k * 90); }
    if (t && kind === 'tide') { t.frostTint = def.season ? tint.clone() : undefined; t.frostUntil = now + 1100; }
    if (to === 'me') screenHit(rgb(kind === 'tide' ? tint : main), kind === 'ember' ? 'fire' : kind === 'storm' ? 'bolt' : kind === 'tide' ? 'frost' : kind === 'void' ? 'rift' : 'leaf');
  }

  let myFury = 0;
  const api: ArenaApi = {
    setup,
    fury(who, k) { if (who === 'me') myFury = k; else { const f = fighters.get(who); if (f) f.fury = k; } },
    prime(s) {
      // 0.9.9.9.7.3: the arena, its fighters, every shader and texture, drawn once off screen — while you study.
      // Built at the start of the battle, its first frames took a second each: the fly-in ran on into the battle
      // (counted in frames), your word wasn't on screen yet, and the AI was already casting.
      if (active) return;
      setup(s);
      try { renderer.compile(scene, camera); renderer.render(scene, camera); } catch { /* drawn on the first frame then */ }
    },
    endIntro() {
      introPending = false; // (not started yet: no fly-in into a battle that's on)
      if (cine?.kind === 'intro' && cine.end === undefined) { cine.end = cine.t; cine.endAt = performance.now(); }
    },
    setActive(on) {
      if (on === active) return;
      active = on;
      canvas.classList.toggle('on', on);
      if (on) { resize(); requestAnimationFrame(() => { if (active && (canvas.clientWidth !== lastW || canvas.clientHeight !== lastH)) resize(); }); last = performance.now(); perfSkip = 0; perfFrames = 0; perfTime = 0; raf = requestAnimationFrame(frame); }
      else cancelAnimationFrame(raf);
    },
    async cast(from, to, kanji, o = {}) {
      const kind = o.kind ?? 'attack';
      const friendly = from === 'me' || from.startsWith('ally:');
      // (0.9.9.9.9.1: a staff's spell flies in the staff's colour — it was violet for yours, red for theirs)
      const color = kind === 'heal' ? '#5dffa8' : kind === 'mana' ? '#ffd479' : o.fx === 'bolt' ? '#bfe6ff' : o.fx === 'frost' ? '#8fdcff' : o.fx === 'fire' ? '#ff8a3a' : layout !== 'deck' && from !== 'boss' ? spellColour(from) : friendly ? '#a98bff' : '#ff6b6b';
      const caster = fighters.get(from);
      if (caster) caster.lungeUntil = performance.now() + 450;
      if (from === 'me') { channelShown = 0; channelLevel = 0; }
      if (kind !== 'attack') {
        if (from === 'me' && gemState !== 'gone' && fp.visible) {
          // heal / mana: the gem lifts off the staff and flies into you, then it's used up
          thrustAt = performance.now(); gemState = 'gone';
          const g = new THREE.Mesh(staff.gem.geometry, staff.gemMat);
          const a0 = pointOf('me', 'staff'), a1 = pointOf('me', 'chest');
          const mid = a0.clone().lerp(a1, 0.5).add(new THREE.Vector3(0, 0.35, 0));
          g.position.copy(a0); g.scale.setScalar(1.3);
          scene.add(g);
          const t0 = performance.now();
          await new Promise<void>((done) => {
            const step = () => {
              const t = Math.min(1, (performance.now() - t0) / 520);
              const p = a0.clone().lerp(mid, t).lerp(mid.clone().lerp(a1, t), t);
              g.position.copy(p); g.rotation.y += 0.3; g.scale.setScalar(1.3 * (1 - t * 0.7));
              if (Math.random() < 0.8) spark(p.clone(), color, { size: rnd(0.03, 0.07), life: 0.35, opacity: 0.9 });
              if (t < 1) requestAnimationFrame(step); else { scene.remove(g); done(); }
            };
            step();
          });
        }
        const at = pointOf(from);
        for (let i = 0; i < 30; i++) spark(at.clone().add(new THREE.Vector3(rnd(-0.5, 0.5), rnd(-0.8, 0.2), rnd(-0.3, 0.3))), color, { size: rnd(0.08, 0.2), vel: new THREE.Vector3(rnd(-0.2, 0.2), rnd(0.8, 1.8), 0), life: rnd(0.6, 1.1) });
        if (from === 'me') screenHit(kind === 'heal' ? '80,255,160' : '255,212,121');
        if (o.damage) float(from, `+${o.damage}`, color);
        return;
      }
      const start = pointOf(from, from === 'boss' ? 'mouth' : 'staff');
      const firstPerson = to === 'me' && fp.visible;
      // at you (first person): it lands low and to the side, under the question
      const chest = pointOf(to, 'chest');
      const end = firstPerson ? chest.clone().add(new THREE.Vector3(screenSpot(0.42, chest.z) - chest.x, -0.5, 0)) : chest;
      const size = (o.crit ? 1.5 : 1) * 1.15;
      const swordCast = layout !== 'deck' && from !== 'boss' && isSword(staffIdOf(from));
      if (from === 'me' && swordCast) swingNo = filming && typeof (window as { __kwSwing?: number }).__kwSwing === 'number' ? (window as unknown as { __kwSwing: number }).__kwSwing : (swingNo + 1 + Math.floor(Math.random() * 2)) % SWINGS.length; // (picked here: the wave needs its angle)
      const flight = fly(start, end, kanji, color, size, 0.85, firstPerson, swordCast, from === 'me' && swordCast ? SWINGS[swingNo].tilt : undefined,
        from === 'me' && swordCast ? () => pointOf('me', 'staff') : undefined, from === 'me' && swordCast ? SWING_MS * SW_END * 0.0009 : 0); // (it leaves the blade near the end of the cut)
      // 0.9.9.9.6.9: your big ones (a critical, or while you're on fire) — a side shot as it lands, now and then
      if (from === 'me' && (to === 'opp' || to === 'boss') && (o.crit || myFlame) && !cine && performance.now() - lastImpact > 9000) {
        lastImpact = performance.now();
        startCine({ kind: 'impact', t: 0, dur: 1.9, who: to });
      }
      flights[flights.length - 1].target = to;
      if (from === 'me') {
        // your staff thrusts and its gem launches forward with the spell; a new one builds up when you next write
        // (0.9.9.9.9.5: a sword slashes — a different one from last time — and its light leaves as the wave)
        thrustAt = performance.now(); gemState = 'gone';
        const g = new THREE.Mesh(staff.gem.geometry, staff.gemMat); g.scale.setScalar(1.5); g.position.copy(start);
        scene.add(g);
        flights[flights.length - 1].gem = g;
      }
      await flight;
      // (at you: a small burst at the side — the red screen flash says you were hit)
      if (firstPerson) burst(end, color, o.crit ? 14 : 8, o.crit ? 1.6 : 1.1, 0.12); else burst(end, color, o.crit ? 46 : 28, o.crit ? 4.4 : 3.2, 0.2);
      const t = fighters.get(to);
      if (t) t.hurtUntil = performance.now() + 450;
      if (t && to !== 'me' && (o.kind ?? 'attack') === 'attack') react(t, start, o.crit ? 1.5 : myFlame && from === 'me' ? 1.25 : 1); // (0.9.9.9.7)
      cardEffect(to, o.fx, end);
      if (!o.fx) staffImpact(from, to, end);
      if (to === 'me') { if (!o.fx && (layout === 'deck' || from === 'boss')) screenHit(); kick(o.crit ? 0.16 : 0.09); }
      else kick(o.crit ? 0.07 : 0.035);
      if (o.damage) float(to, `−${o.damage}${o.crit ? '!' : ''}`, to === 'me' ? '#ff6b81' : o.crit ? '#ff9a3a' : '#ffd479');
    },
    fizzle(who) {
      const at = pointOf(who, who === 'boss' ? 'head' : 'staff');
      if (who !== 'me') for (let i = 0; i < 14; i++) spark(at, 0x9a9aa8, { size: rnd(0.1, 0.25), vel: new THREE.Vector3(rnd(-0.6, 0.6), rnd(0.3, 1), rnd(-0.3, 0.3)), life: 0.8, opacity: 0.6 });
      if (who === 'me') {
        channelShown = 0; channelLevel = 0; // (0.9.9.9.9.5: both — it crept back to the old level, and a sword shook on)
        // a miss shatters your gem: it's gone until you start writing / typing again
        if (gemState !== 'gone' && fp.visible) {
          staff.gem.getWorldPosition(tmp);
          for (let i = 0; i < 16; i++) spark(tmp.clone(), Math.random() < 0.5 ? staff.color : 0x9a9aa8, { size: rnd(0.02, 0.05), vel: new THREE.Vector3(rnd(-0.8, 0.8), rnd(-0.2, 0.9), rnd(-0.5, 0.5)), life: rnd(0.4, 0.7), gravity: -2.5 });
        }
        gemState = 'gone';
      }
    },
    ko(who) {
      // 0.9.9.6: the finishing spell lands first, then they fall (the KO came in while it was still flying)
      if (flights.some((fl) => fl.target === who) && !koWait.has(who)) {
        koWait.add(who);
        const t0 = performance.now(), g = koGen;
        const wait = () => {
          if (g !== koGen) return;
          if (flights.some((fl) => fl.target === who) && performance.now() - t0 < 2500) { setTimeout(wait, 60); return; }
          setTimeout(() => { if (g !== koGen) return; koWait.delete(who); api.ko(who); }, 120);
        };
        wait();
        return;
      }
      if (koWait.has(who)) return;
      if (who === 'me') {
        // you're down: your staff falls out of your hand
        if (meDown) return;
        meDown = true; myFlame = null;
        staff.gem.getWorldPosition(tmp);
        burst(tmp.clone(), 0x9a9aa8, 18, 1.6, 0.1);
        fp.visible = false;
        return;
      }
      const f = fighters.get(who);
      if (!f || f.ko) return;
      f.ko = true;
      // 0.9.9.9.6.9: you won — the camera walks round them
      if ((who === 'opp' || who === 'boss') && !meDown) {
        const d = camera.position.clone().sub(f.group.position);
        startCine({ kind: 'victory', t: 0, dur: 0, who, a0: Math.atan2(d.x, d.z) });
      }
      f.flame = null;
      (f.aura.material as THREE.SpriteMaterial).opacity = 0;
      const start = performance.now();
      // 0.9.9.9.7.3: what the last frames left on them — they're knocked out by a hit, mid-reaction (bent back, rocked
      // on their heels, a step off), maybe mid-cast or in their combo pose. The frame loop stops moving a fallen
      // fighter, so all that stayed frozen under the kneel (it went down leaning far back): it eases out as they kneel.
      const m = f.model;
      const was = m ? { rx: m.root.rotation.x, rz: m.root.rotation.z, px: m.root.position.x, pz: m.root.position.z, bx: m.body.rotation.x, by: m.body.rotation.y, bodyY: m.body.position.y, sx: m.staffPivot.rotation.x, pose: f.poseK } : null;
      const fall = () => {
        const t = Math.min(1, (performance.now() - start) / 700);
        const e = t * t;
        // 0.9.9.9.5.5: the rigged ones go down on one knee (a little give at the end); the dragon lies down on its stomach
        const t2 = Math.min(1, (performance.now() - start) / 900);
        const k = t2 < 0.8 ? 1 - (1 - t2 / 0.8) ** 3 : 1 + Math.sin(((t2 - 0.8) / 0.2) * Math.PI) * 0.04;
        if (m?.kneel && was) {
          const r = 1 - Math.min(1, k); // (1 → 0: the leftovers go)
          m.root.rotation.x = was.rx * r; m.root.rotation.z = was.rz * r; m.root.position.x = was.px * r; m.root.position.z = was.pz * r;
          m.body.rotation.x = was.bx * r; m.body.rotation.y = was.by * r; m.body.position.y = was.bodyY * r;
          m.staffPivot.rotation.x = was.sx * r;
          applyPose(m, f.pose, was.pose * r, time); // (the legs back to standing first — the kneel bends them)
          m.flinch?.(0); // (the chest straight again — the kneel sets the spine and the neck itself)
          m.kneel(k); m.groundFix?.();
        }
        // (the older models: fall over sideways and lie on the ground)
        else if (f.model) { f.model.root.rotation.z = (Math.PI / 2) * e; f.model.root.position.y = 0.24 * e; }
        else if (f.dragon) f.dragon.ko(1 - (1 - Math.min(1, (performance.now() - start) / 1400)) ** 2);
        else if (f.spriteMat) { f.spriteMat.rotation = (Math.PI / 2) * t * -1; f.spriteMat.opacity = 1 - t * 0.6; }
        if (t < 1 || (t2 < 1 && f.model?.kneel) || (f.dragon && performance.now() - start < 1400)) requestAnimationFrame(fall);
      };
      fall();
      burst(pointOf(who), 0xffffff, 40, 3, 0.25);
    },
    onfire(who, on, color) {
      if (who === 'me') {
        myFlame = on && !meDown ? new THREE.Color(color ?? '#6ee7ff') : null;
        if (myFlame) setFireColor(myFlame);
        return;
      }
      const f = fighters.get(who);
      if (f) f.flame = on ? new THREE.Color(color ?? '#6ee7ff') : null;
      if (f?.model?.eyes) f.model.eyes.visible = on; // their eyes glow in the character's colour
    },
    setPose(who, pose) {
      const p = isPose(pose) ? pose : 'none';
      if (who === 'me') { myPose = p; return; }
      const f = fighters.get(who);
      if (f) f.pose = p;
    },
    focusOpp(on) { focusOn = on; fp.visible = !on; },
    spin(on) { if (spinning && !on) placeFighters(); spinning = on; },
    orbit(on) { if (on && !orbiting) orbitT = 0; orbiting = on; },
    setInset(on) { inset = on; },
    prewarm(ids, time) {
      if (!opts.preview) return;
      const todo = ids.filter((id) => !envCache.has(`${id}-${time}-${lite}`));
      const idle = (cb: () => void) => ((globalThis as unknown as { requestIdleCallback?: (f: () => void, o?: object) => number }).requestIdleCallback ?? ((f: () => void) => setTimeout(f, 200)))(cb, { timeout: 2000 });
      const next = () => {
        const id = todo.shift();
        if (!id) return;
        const k = `${id}-${time}-${lite}`;
        if (!envCache.has(k)) { try { const e = buildEnv(id, time, lite); if (e) envCache.set(k, e); } catch { /* skip it */ } }
        idle(next);
      };
      idle(next);
    },
    setBackground(key, time, svg) {
      if (!current) return;
      current = { ...current, bgKey: key, time, bgSvg: svg };
      applyBackground(current);
    },
    flashEyes(who) {
      const f = fighters.get(who);
      if (!f?.model?.eyes) return;
      f.model.eyes.visible = true;
      f.eyesFlashUntil = performance.now() + 1400;
    },
    channel(level) { channelLevel = Math.max(0, Math.min(1, level)); },
    twitch() {
      wantGem();
      twitchAmp = 0.35;
      twitchTarget.set(rnd(-0.35, 0.25), rnd(-0.25, 0.25), rnd(-0.3, 0.3));
      if (Math.random() < 0.6 && gemState === 'ready') { staff.gem.getWorldPosition(tmp); spark(tmp.clone(), staff.color.clone().lerp(new THREE.Color(0xffffff), 0.5), { size: rnd(0.04, 0.09), vel: new THREE.Vector3(rnd(-0.6, 0.6), rnd(0.2, 0.9), rnd(-0.3, 0.3)), life: 0.5 }); }
    },
    thrust() {
      thrustAt = performance.now();
      staff.gem.getWorldPosition(tmp);
      burst(tmp.clone(), staff.color, 18, 1.6, 0.08);
    },
    oppChannel(on) { oppChannelOn = on; },
    typing(who, on) { const f = fighters.get(who); if (f) f.typing = on; },
    inhale(on) { inhaling = on; },
    tremble(seconds) { trembleFor = seconds * 1000; trembleUntil = performance.now() + trembleFor; },
    breath(victims, damage) {
      inhaling = false;
      dragonBreathUntil = performance.now() + 1300;
      // 0.9.9.9.9.5: one wide fan over the whole party, centred on it, sweeping from side to side (it went at each victim
      // in turn — with two teammates on the left, the fire leaned left)
      const targets = (victims.length ? victims : ['me' as Who]).map((v) => pointOf(v));
      const centre = targets.reduce((a, p) => a.add(p), new THREE.Vector3()).multiplyScalar(1 / targets.length);
      const span = Math.max(3, ...targets.map((p) => Math.abs(p.x - centre.x) * 2 + 1.5));
      for (let i = 0; i < 160; i++) {
        setTimeout(() => {
          const mo = pointOf('boss', 'mouth'); // (from the jaws, wherever the head is now)
          const sweep = Math.sin((i / 160) * Math.PI * 2.5) * 0.5; // (left to right and back)
          const target = centre.clone().add(new THREE.Vector3(sweep * span + rnd(-0.6, 0.6), rnd(-0.6, 0.6), rnd(-0.4, 0.4)));
          const v = target.sub(mo).normalize().multiplyScalar(rnd(7, 11));
          spark(mo, Math.random() < 0.4 ? 0xffd25a : 0xff5a1a, { size: rnd(0.3, 0.7), vel: v, life: rnd(0.6, 0.9), grow: 1.2 });
        }, i * 5);
      }
      setTimeout(() => {
        const bossAt = fighters.get('boss')?.group.position ?? null;
        for (const v of victims) { const f = fighters.get(v); if (f) { f.hurtUntil = performance.now() + 500; f.burnUntil = performance.now() + 900; if (v !== 'me') react(f, bossAt, 1.2); } float(v, `−${damage}`, '#ff9a3a'); }
        if (victims.includes('me')) { screenHit('255,120,30'); kick(0.16); }
      }, 450);
    },
    claw(victim, damage) {
      const b = fighters.get('boss');
      if (b) b.lungeUntil = performance.now() + 450;
      setTimeout(() => {
        const f = fighters.get(victim);
        if (f) f.hurtUntil = performance.now() + 450;
        if (f && victim !== 'me') react(f, fighters.get('boss')?.group.position ?? null, 1.3); // (0.9.9.9.7)
        if (victim === 'me') { screenHit('255,40,60', 'claw'); kick(0.13); }
        float(victim, `−${damage}`, '#ff6b81');
      }, 200);
    },
    float,
    look(who, yaw, pitch) {
      const f = fighters.get(who);
      if (!f || !Number.isFinite(yaw) || !Number.isFinite(pitch)) return;
      f.look.yaw = Math.max(-LOOK_YAW, Math.min(LOOK_YAW, yaw)); f.look.pitch = Math.max(-LOOK_PITCH, Math.min(LOOK_PITCH, pitch)); f.look.at = performance.now();
    },
    setLite(on) {
      const changed = lite !== on;
      lite = on;
      if (changed && env && current) { bgKey = ''; setup(current); } // the arena again, with less in it
      renderer.setPixelRatio(pixelRatio());
      applyLook();
      grass.count = on ? 900 : GRASS;
      moteGeo.setDrawRange(0, on ? 90 : MOTES);
      resize();
    },
    dispose() {
      api.setActive(false);
      ro?.disconnect();
      removeEventListener('pointermove', onMove);
      removeEventListener('deviceorientation', onOrient); removeEventListener('touchend', askTilt);
      removeEventListener('resize', resize);
      overlay.remove();
      if (env) { env.dispose(); env = null; }
      renderer.dispose();
    },
  };
  if (lite) api.setLite(true);
  if (location.search.includes('debug3d')) (globalThis as unknown as { __arenaDbg: unknown }).__arenaDbg = { get staff() { return staff; }, get gemState() { return gemState; }, /** 0.9.9.9.7.3: the camera shot now (screenshots) */ get cine() { return cine ? { kind: cine.kind, t: cine.t, end: cine.end ?? null, w: cineW } : null; },
    /** 0.9.9.9.7.3: hold a fighter at `ms` into a hit's reaction (null lets go) — screenshots of a moment */
    holdHit: (who: string | null, ms = 0, leg = 0) => { heldHit = who ? { who, ms } : null; const f = who ? fighters.get(who as Who) : undefined; if (f) { f.hitPow = 1; f.hitLeg = leg; f.hitDir.set(0, 0, -1); } }, scene, camera, renderer, setStaff: (who: Who, id: string) => { if (who === 'me') setStaffSkin(id); else { const f = fighters.get(who); if (f) f.staffId = id; } } };
  resize();
  // compile every shader now (while you're in the menu), not in the first second of your first battle
  try { renderer.compile(scene, camera); } catch { /* fine — compiled on first draw */ }
  if (filming) (window as unknown as { __kwArena?: ArenaApi }).__kwArena = api; // (0.9.9.9.9.5: filming / testing: the arena by hand)
  return api;
}

// The bundle is loaded with a <script> tag; main.ts picks this up.
(globalThis as unknown as { KWArena3D: typeof createArena }).KWArena3D = createArena;
(globalThis as unknown as { KWStaffPreview: typeof createStaffPreview }).KWStaffPreview = createStaffPreview;
