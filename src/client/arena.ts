// Glue between the game screens and the 3D arena (arena3d.ts, loaded on demand as /arena3d.js).
// When 3D is off, unavailable (no WebGL) or the window is small, every function here is a no-op and the
// classic 2D field is used.

import type { ArenaApi, ArenaSetup, FighterArt, Who } from './arena3d';
import type { StaffPreview } from './staffpreview';
import type { GameMode, PlayerId, PlayerView } from '../shared/protocol';
import type { DeckView } from '../shared/deck';
import type { BackgroundId } from '../shared/progress';
import { sceneSvg, type TimeOfDay } from './backgrounds';
import { dragonSvg } from './wizard';
import { flameColor } from '../shared/progress';

export type { Who };
const KEY = 'kb:3d';
const GAME_SCREENS = new Set(['battle', 'deck']);

let api: ArenaApi | null = null;
let loading: Promise<ArenaApi | null> | null = null;
let onScreen = false;
let bg: { id: BackgroundId; time: TimeOfDay } = { id: 'forest', time: 'night' };
let pending: Omit<ArenaSetup, 'bgSvg' | 'bgKey' | 'time'> | null = null;

const webgl = (() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } })();
/** 3D needs WebGL and some room (phones keep the 2D layout). */
export const arenaSupported = () => webgl && innerWidth >= 900 && innerHeight >= 560;
export function arenaPref(): boolean { try { return localStorage.getItem(KEY) !== 'off'; } catch { return true; } }
export function setArenaPref(on: boolean) {
  try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch { /* private mode */ }
  if (!on) { api?.setActive(false); document.body.classList.remove('has-3d'); }
  else if (onScreen) void activate();
}
const wanted = () => arenaPref() && arenaSupported();

/** The arena, only while it is showing (so effects fall back to 2D otherwise). */
export const arena = (): ArenaApi | null => (api && onScreen && wanted() ? api : null);

let bundle: Promise<boolean> | null = null;
/** The 3D bundle (Three.js + the arena + the staff preview), loaded once on demand. */
function loadBundle(): Promise<boolean> {
  bundle ??= new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = `/arena3d.js?v=${encodeURIComponent(document.documentElement.dataset.v ?? '')}`;
    s.onload = () => resolve(true);
    s.onerror = () => { bundle = null; resolve(false); };
    document.head.append(s);
  });
  return bundle;
}
function load(): Promise<ArenaApi | null> {
  if (api) return Promise.resolve(api);
  loading ??= loadBundle().then((ok) => {
    const create = (globalThis as unknown as { KWArena3D?: (c: HTMLCanvasElement) => ArenaApi | null }).KWArena3D;
    api = ok ? create?.(document.getElementById('arena3d') as HTMLCanvasElement) ?? null : null;
    if (api && location.search.includes('debug3d')) (globalThis as unknown as { __arena: ArenaApi }).__arena = api; // for testing
    if (!api) loading = null;
    return api;
  });
  return loading;
}
/** Customize → Magic staff: a 3D preview on the given canvas (null without WebGL). */
export async function staffPreview(canvas: HTMLCanvasElement): Promise<StaffPreview | null> {
  if (!webgl || !(await loadBundle())) return null;
  const create = (globalThis as unknown as { KWStaffPreview?: (c: HTMLCanvasElement) => StaffPreview | null }).KWStaffPreview;
  return create?.(canvas) ?? null;
}
/** Start loading early (after login) so the first battle doesn't wait. */
export function preloadArena() { if (wanted()) setTimeout(() => void load(), 1500); }

async function activate() {
  if (!wanted()) return;
  const a = await load();
  if (!a || !onScreen || !wanted()) return;
  if (pending) { a.setup({ ...pending, bgSvg: sceneSvg(bg.id, bg.time), bgKey: `${bg.id}-${bg.time}`, time: bg.time }); pending = null; }
  a.setActive(true);
  document.body.classList.add('has-3d');
}

/** Called on every screen change. */
export function arenaScreen(screen: string) {
  onScreen = GAME_SCREENS.has(screen);
  if (onScreen) void activate();
  else { api?.setActive(false); document.body.classList.remove('has-3d'); }
}

/** The background the player chose (and the time of day): shown far behind the arena. */
export function setArenaBackground(id: BackgroundId, time: TimeOfDay) { bg = { id, time }; }

function configure(s: Omit<ArenaSetup, 'bgSvg' | 'bgKey' | 'time'>) {
  pending = s;
  if (api && onScreen && wanted()) void activate();
}

/** Reading / Writing / Rapid / Boss: you, the opponent (or the dragon and your party). */
export function arenaForBattle(mode: GameMode, players: PlayerView[], you: PlayerId) {
  const me = players.find((p) => p.id === you);
  const others = players.filter((p) => p.id !== you);
  const art = (p: PlayerView): FighterArt => ({ id: p.id, name: p.name, character: p.avatar, flame: flameColor(p.flame), staff: p.staff });
  configure({
    layout: 'battle',
    me: me ? art(me) : { id: you, character: 'wizard' },
    opp: mode === 'boss' || !others[0] ? null : art(others[0]),
    allies: mode === 'boss' ? others.map(art) : [],
    boss: mode === 'boss' ? { id: 'boss', svg: dragonSvg() } : null,
  });
}

let deckKey = '';
/** Deck Duel: you and the opponent as your heroes (set again when the heroes are picked). */
export function arenaForDeck(v: DeckView) {
  const me = v.players.find((p) => p.id === v.you);
  const opp = v.players.find((p) => p.id !== v.you);
  const key = `${me?.id}:${me?.character}:${me?.staff}:${opp?.id}:${opp?.character}:${opp?.staff}`;
  if (key === deckKey && (!api || pending === null)) return;
  deckKey = key;
  configure({
    layout: 'deck',
    me: { id: v.you, name: me?.name, character: me?.character ?? 'wizard', flame: flameColor(me?.flame), staff: me?.staff },
    opp: opp ? { id: opp.id, name: opp.name, character: opp.character ?? 'wizard', flame: flameColor(opp.flame), staff: opp.staff } : null,
    allies: [],
    boss: null,
  });
}
export const resetArenaDeck = () => { deckKey = ''; };
