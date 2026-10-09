// Glue between the game screens and the 3D arena (arena3d.ts, loaded on demand as /arena3d.js).
// When 3D is off, unavailable (no WebGL) or the window is small, every function here is a no-op and the
// classic 2D field is used.

import type { ArenaApi, ArenaSetup, FighterArt, Who } from './arena3d';
import type { Avatar, GameMode, PlayerId, PlayerView } from '../shared/protocol';
import type { DeckCharacter, DeckView } from '../shared/deck';
import type { BackgroundId } from '../shared/progress';
import { sceneSvg, type TimeOfDay } from './backgrounds';
import { avatarSvg, dragonSvg, heroSvg } from './wizard';

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

function load(): Promise<ArenaApi | null> {
  if (api) return Promise.resolve(api);
  loading ??= new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = `/arena3d.js?v=${encodeURIComponent(document.documentElement.dataset.v ?? '')}`;
    s.onload = () => {
      const create = (globalThis as unknown as { KWArena3D?: (c: HTMLCanvasElement) => ArenaApi | null }).KWArena3D;
      api = create?.(document.getElementById('arena3d') as HTMLCanvasElement) ?? null;
      resolve(api);
    };
    s.onerror = () => resolve(null);
    document.head.append(s);
  });
  return loading;
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

const ROBE: Record<string, string> = { wizard: '#3d4fb8', goblin: '#4f8a3a', knight: '#8a93a6', witch: '#5b2a86', kid: '#d35d3a', human: '#a0522d' };

/** Reading / Writing / Rapid / Boss: the opponent (or the dragon and your party). */
export function arenaForBattle(mode: GameMode, players: PlayerView[], you: PlayerId) {
  const me = players.find((p) => p.id === you);
  const others = players.filter((p) => p.id !== you);
  const art = (p: PlayerView, side: 'opp' | 'ally'): FighterArt => ({ id: p.id, name: p.name, svg: avatarSvg(p.avatar as Avatar, side) });
  configure({
    layout: 'battle',
    opp: mode === 'boss' || !others[0] ? null : art(others[0], 'opp'),
    allies: mode === 'boss' ? others.map((p) => art(p, 'ally')) : [],
    boss: mode === 'boss' ? { id: 'boss', svg: dragonSvg() } : null,
    robe: ROBE[me?.avatar ?? 'wizard'] ?? ROBE.wizard,
  });
}

let deckKey = '';
/** Deck Duel: the opponent's hero across the arena (once per match / hero pick). */
export function arenaForDeck(v: DeckView) {
  const me = v.players.find((p) => p.id === v.you);
  const opp = v.players.find((p) => p.id !== v.you);
  const key = `${me?.id}:${me?.character}:${opp?.id}:${opp?.character}`;
  if (key === deckKey && (!api || pending === null)) return;
  deckKey = key;
  configure({
    layout: 'deck',
    opp: opp ? { id: opp.id, name: opp.name, svg: heroSvg((opp.character ?? 'wizard') as DeckCharacter, 'opp') } : null,
    allies: [],
    boss: null,
    robe: ROBE[me?.character ?? 'wizard'] ?? ROBE.wizard,
  });
}
export const resetArenaDeck = () => { deckKey = ''; };
