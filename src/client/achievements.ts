// Achievements on the client: the hexagon badges (Progress page; locked ones grey, hover says how to earn
// them) and the "Achievement unlocked!" celebration — shown the moment a combo milestone happens in a
// battle, and for anything else as soon as the server reports it (end of a match, or a profile load).

import { ACH_PREFIX, ACHIEVEMENTS, achById, COMBO_ACHIEVEMENTS, type AchIcon, type AchievementDef } from '../shared/achievements';
import * as audio from './audio';
import * as ui from './ui';

const GLYPH: Record<AchIcon, string> = {
  sword: '<path d="M14.5 4.5h5v5l-9 9-5-5z"/><path d="M5 15l4 4M3 21l3-3"/>',
  swords: '<path d="M4 4l11 11M20 4L9 15M5 19l-2 2M19 19l2 2M7 17l-2-2M17 17l2-2"/>',
  crown: '<path d="M4 8l4 4 4-6 4 6 4-4-2 10H6z"/><path d="M5 21h14"/>',
  flame: '<path d="M12 3c3 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-5 3-7 1 2 2 3 3 3 0-3-1-5 0-7z"/>',
  flame2: '<path d="M12 3c3 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-5 3-7 1 2 2 3 3 3 0-3-1-5 0-7z"/><path d="M12 13c1 1.5 2 2.5 2 4a2 2 0 0 1-4 0c0-1.5 1-2.5 2-4z"/>',
  comet: '<circle cx="7" cy="17" r="3.2"/><path d="M20 4L9.5 14.5M16 3.5l-6 6M20.5 8l-6 6"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  dragon: '<path d="M3 18c2-6 6-9 12-10l4-3-1 5c1 3 0 6-3 8l2 3-5-2c-3 1-6 0-9-1z"/><circle cx="15.5" cy="10.5" r=".8"/>',
  cards: '<rect x="4" y="6" width="9" height="13" rx="1.5"/><path d="M14 6.5l5.5 1.5-3 12-5-1.4"/>',
  brush: '<path d="M18 3l3 3-9 9-3-3z"/><path d="M9 12c-3 0-5 2-5 5 0 1-1 2-2 2 3 2 9 1 9-4"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z"/><path d="M4 20V5M8 7h7"/>',
  tome: '<path d="M5 3h12a2 2 0 0 1 2 2v16H7a2 2 0 0 1-2-2z"/><path d="M12 7l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z"/>',
  kana: '<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="900" stroke="none" fill="currentColor" font-family="sans-serif">あ</text>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4"/>',
  people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 6 1.8 6 5"/>',
  leaf: '<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z"/><path d="M5 19l8-8"/>',
  star: '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/>',
};

/** A hexagon badge with the achievement's icon, in its colour (or grey and locked). */
export function badgeSvg(a: AchievementDef, locked: boolean): string {
  const c = a.color; // locked ones are dimmed in CSS, but keep their colour
  const id = `g${a.id.replace(/\W/g, '')}${locked ? 'l' : ''}`;
  return `<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${locked ? '#2a2840' : '#2b2160'}"/><stop offset="1" stop-color="${locked ? '#16152a' : '#120c34'}"/></linearGradient></defs>`
    + `<path d="M32 3l25 14.5v29L32 61 7 46.5v-29z" fill="url(#${id})" stroke="${c}" stroke-width="3"/>`
    + `<path d="M32 9.5l19.5 11.3v22.4L32 54.5 12.5 43.2V20.8z" fill="none" stroke="${c}" stroke-opacity=".35" stroke-width="1.2"/>`
    + `<g transform="translate(20 20)" fill="none" stroke="${c}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" color="${c}"><g transform="scale(1)">${GLYPH[a.icon]}</g></g>`
    + `${Array.from({ length: a.tier }, (_, i) => `<circle cx="${32 + (i - (a.tier - 1) / 2) * 7}" cy="52" r="2.2" fill="${c}"/>`).join('')}</svg>`;
}

const has = (unlocks: readonly string[] | undefined, id: string) => !!unlocks?.includes(ACH_PREFIX + id);

/** Progress page: every achievement, earned ones in colour first in the list order. */
export function renderAchievements(box: HTMLElement, unlocks: readonly string[] = []) {
  const earned = ACHIEVEMENTS.filter((a) => has(unlocks, a.id)).length;
  const grid = document.createElement('div');
  grid.className = 'ach-grid';
  for (const a of ACHIEVEMENTS) {
    const locked = !has(unlocks, a.id);
    const b = document.createElement('div');
    b.className = 'ach' + (locked ? ' locked' : '');
    b.tabIndex = 0;
    b.style.setProperty('--ac', a.color);
    b.setAttribute('aria-label', `${a.name}: ${locked ? 'locked — ' : ''}${a.how}`);
    b.innerHTML = badgeSvg(a, locked);
    const tip = document.createElement('div');
    tip.className = 'ach-tip';
    const t = document.createElement('b'); t.textContent = a.name;
    const s = document.createElement('span'); s.textContent = a.how;
    const st = document.createElement('small'); st.textContent = locked ? 'Locked' : 'Unlocked ✓';
    tip.append(t, s, st);
    b.append(tip);
    grid.append(b);
  }
  const head = document.createElement('h3');
  head.append('Achievements ');
  const sm = document.createElement('small'); sm.className = 'hint'; sm.textContent = `${earned} / ${ACHIEVEMENTS.length}`;
  head.append(sm);
  box.replaceChildren(head, grid);
}

// ── the celebration ─────────────────────────────────────────────────────────
const shown = new Set<string>(); // celebrated this session (a combo milestone mid-battle, then again from the server)
const queue: string[] = [];
let playing = false;

export function celebrate(id: string) {
  if (shown.has(id) || !achById(id)) return;
  shown.add(id);
  queue.push(id);
  if (!playing) next();
}
function next() {
  const id = queue.shift();
  const box = ui.$('achPop');
  if (!id) { playing = false; box.hidden = true; return; }
  playing = true;
  const a = achById(id)!;
  box.style.setProperty('--ac', a.color);
  box.innerHTML = '';
  const rays = document.createElement('div'); rays.className = 'ach-rays';
  const badge = document.createElement('div'); badge.className = 'ach-badge'; badge.innerHTML = badgeSvg(a, false);
  const txt = document.createElement('div'); txt.className = 'ach-text';
  const k = document.createElement('small'); k.textContent = 'Achievement unlocked!';
  const n = document.createElement('b'); n.textContent = a.name;
  const h = document.createElement('span'); h.textContent = a.how;
  txt.append(k, n, h);
  box.append(rays, badge, txt);
  box.hidden = false;
  box.classList.remove('go'); void box.offsetWidth; box.classList.add('go');
  audio.sfx.go();
  setTimeout(next, 3800);
}

/**
 * New achievements in a fresh profile: celebrate the ones this device hasn't celebrated yet (remembered per
 * account, so one earned while the app was closed — or on the profile load itself — still gets its moment).
 * On a device that has never seen this account, the old ones are just remembered.
 */
export function celebrateNew(userId: string, unlocks: readonly string[] | undefined) {
  const key = `kb:ach:${userId}`;
  const ids = (unlocks ?? []).filter((u) => u.startsWith(ACH_PREFIX)).map((u) => u.slice(ACH_PREFIX.length));
  let seen: string[] | null = null;
  try { seen = JSON.parse(localStorage.getItem(key) ?? 'null'); } catch { /* private mode */ }
  if (!Array.isArray(seen)) ids.forEach((id) => shown.add(id));
  else for (const id of ids) if (!seen.includes(id)) celebrate(id);
  try { localStorage.setItem(key, JSON.stringify(ids)); } catch { /* private mode */ }
}

/** In a battle: your combo just reached a milestone you hadn't earned yet → celebrate right away. */
export function comboMilestone(combo: number, unlocks: readonly string[] | undefined) {
  for (const [n, id] of COMBO_ACHIEVEMENTS) if (combo >= n && !has(unlocks, id)) celebrate(id);
}
