import type { Avatar } from '../shared/protocol';
import { characterSvg, dragonArt, type ArtKind } from './art2d';

// The 2D fighters (0.9.9.3): vector paintings after the concept sheets (art2d.ts) — the old pixel sprites are
// gone. They face right; the opponent's copy is mirrored with CSS so both face each other.

/** The classic wizard (the menu's duelling pair): blue for you, a crimson-robed rival, green for an ally. */
export function wizardSvg(side: 'me' | 'opp' | 'ally', staff?: string | null): string {
  return characterSvg('wizard', side === 'opp' ? 'rival' : side, staff);
}

/** Deck Duel heroes: goblin, knight, witch, wizard. */
export function heroSvg(hero: 'goblin' | 'knight' | 'witch' | 'wizard', side: 'me' | 'opp', staff?: string | null): string {
  return avatarSvg(hero, side, staff);
}

/** The fighter for a player: their level's character, holding their magic staff (allies wear green). */
export function avatarSvg(avatar: Avatar, side: 'me' | 'opp' | 'ally', staff?: string | null): string {
  const kind: ArtKind = (['goblin', 'kid', 'human', 'knight', 'witch', 'wizard'] as const).includes(avatar as ArtKind) ? (avatar as ArtKind) : 'wizard';
  return characterSvg(kind, side, staff);
}

/** The Black Dragon (boss), facing left towards the players. */
export function dragonSvg(): string {
  return dragonArt();
}
