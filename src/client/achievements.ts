// Achievements on the client: the hexagon badges (Progress page; locked ones grey, hover says how to earn
// them) and the "Achievement unlocked!" celebration — shown the moment a combo milestone happens in a
// battle, and for anything else as soon as the server reports it (end of a match, or a profile load).

import { ACH_GOALS, ACH_PREFIX, ACHIEVEMENTS, achById, COMBO_ACHIEVEMENTS, type AchIcon, type AchievementDef } from '../shared/achievements';
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
  kingslayer: '<path d="M3.5 9l3.5 3.5L10.5 7l3 4.5L17 9l-1.6 8.5H5.2z"/><path d="M21 3L9 21"/>',
  hourglass: '<path d="M6 3h12M6 21h12M7 3c0 5 10 5 10 9s-10 4-10 9M17 3c0 5-10 5-10 9s10 4 10 9"/><path d="M10 18h4"/>',
  scroll: '<path d="M7 4h11a2 2 0 0 1 0 4H9v10a2 2 0 0 1-4 0V6a2 2 0 0 1 2-2z"/><path d="M9 18h10a2 2 0 0 0 0-4h-1M11 10h5M11 13h4"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 7v10M8 11h8"/>',
  gem: '<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4l-1.5 5L12 20M15 4l1.5 5L12 20"/>',
  quill: '<path d="M20 3C12 4 7 9 5 19l2-1c1-3 3-5 5-6l-2-1 4-1c2-2 4-4 6-7z"/><path d="M4 21l3-3"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/><path d="M12 7l1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3L8.7 9.4 11 9z"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.4"/>',
  mountain: '<path d="M2 20l7-12 4 6 3-4 6 10z"/><path d="M9 8l2 3 1.5-1"/>',
  check: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 12l3 3 5-6"/>',
  // 0.9.9.9.5
  nova: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3.5 3.5M15.5 15.5L19 19M5 19l3.5-3.5M15.5 8.5L19 5"/>',
  heart: '<path d="M12 20s-7.5-4.6-9.2-9.4A4.8 4.8 0 0 1 12 7.2a4.8 4.8 0 0 1 9.2 3.4C19.5 15.4 12 20 12 20z"/><path d="M12.5 8.5l-2 3.5 3 1.5-2 3.5"/>',
  feather: '<path d="M20 4C12 4 7 9 6 17l-2 3"/><path d="M20 4c0 8-5 13-14 13M9 14h6M12 10h6"/>',
  stopwatch: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 13.5L15 10M10 2.5h4M12 2.5V6M18.6 6.6L20 5.2"/>',
  robot: '<rect x="5" y="8" width="14" height="11" rx="2.5"/><path d="M12 4.5V8M9.5 16.5h5M3 12v3.5M21 12v3.5"/><circle cx="12" cy="3.6" r="1"/><circle cx="9.5" cy="12.5" r=".9"/><circle cx="14.5" cy="12.5" r=".9"/>',
  ace: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 16.5l3-8.5 3 8.5M10.1 13.5h3.8"/>',
  kata: '<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="900" stroke="none" fill="currentColor" font-family="sans-serif">ア</text>',
  infinity: '<path d="M7.2 8.5a3.5 3.5 0 1 0 0 7c2.4 0 3.4-1.8 4.8-3.5s2.4-3.5 4.8-3.5a3.5 3.5 0 1 1 0 7c-2.4 0-3.4-1.8-4.8-3.5S9.6 8.5 7.2 8.5z"/>',
  wand: '<path d="M4 20L14.5 9.5"/><path d="M14.5 9.5l2-2M18 2.5v2.5M21.5 6H19M20.2 3.8l-1.6 1.6M12.5 4.5l1 1M18.5 10.5l1 1"/>',
};

/**
 * 0.9.9.9.5.3: the four kinds of badge — the frame and the stars in their metal: bronze (★), silver (★★, a shine
 * runs round it), gold (★★★, very shiny) and ruby (★★★ in red, the very hardest: a deep red glow and sparkles). The icon keeps
 * the achievement's own colour.
 */
export const TIERS = [
  null,
  // (ink: the icon, the name and the words — 0.9.9.9.5.4: all in the badge's metal, not the achievement's own colour)
  { name: 'Bronze', hi: '#f2b47a', mid: '#c27a3a', lo: '#7a4519', star: '#e7a466', ink: '#e09a5c' },
  { name: 'Silver', hi: '#ffffff', mid: '#c4ccd8', lo: '#6e7787', star: '#eef2f8', ink: '#d6dde8' },
  { name: 'Gold', hi: '#fff6c2', mid: '#ffc93c', lo: '#a86a00', star: '#ffe066', ink: '#ffd34d' },
  { name: 'Ruby', hi: '#ffb3c9', mid: '#e0115f', lo: '#6b0026', star: '#ff5c8d', ink: '#ff6b98' },
] as const;
const STAR = 'M0-4.2l1.23 2.5 2.77.4-2 1.95.47 2.75L0 2.1l-2.47 1.3.47-2.75-2-1.95 2.77-.4z';

/** A hexagon badge with the achievement's icon, a metal frame and its stars (or grey and locked). */
let svgSeq = 0;
export function badgeSvg(a: AchievementDef, locked: boolean): string {
  const t = TIERS[a.tier]!;
  const c = t.ink; // (locked ones are dimmed in CSS)
  // 0.9.9.9.5.5: a gradient id of its own for every copy — with one id per achievement, the profile's badge used
  // the gradient of the copy in a hidden screen (Progress / Customize), which draws nothing: only the thin inner line was left
  const id = `g${a.id.replace(/\W/g, '')}${locked ? 'l' : ''}${++svgSeq}`;
  const stars = Math.min(3, a.tier);
  return `<svg viewBox="0 0 64 64" aria-hidden="true"><defs>`
    + `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${locked ? '#2a2840' : '#2b2160'}"/><stop offset="1" stop-color="${locked ? '#16152a' : '#120c34'}"/></linearGradient>`
    + `<linearGradient id="${id}m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.hi}"/><stop offset=".5" stop-color="${t.mid}"/><stop offset="1" stop-color="${t.hi}"/></linearGradient>`
    + `</defs>`
    + `<path d="M32 3l25 14.5v29L32 61 7 46.5v-29z" fill="url(#${id})" stroke="url(#${id}m)" stroke-width="4.2" stroke-linejoin="round"/>`
    + `<path d="M32 8.6l20.2 11.7v23.4L32 55.4 11.8 43.7V20.3z" fill="none" stroke="${t.mid}" stroke-opacity=".6" stroke-width="1.4"/>`
    + `<g transform="translate(20 17)" fill="none" stroke="${c}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" color="${c}">${GLYPH[a.icon]}</g>`
    + Array.from({ length: stars }, (_, i) => `<path transform="translate(${32 + (i - (stars - 1) / 2) * 9} 49.5)" d="${STAR}" fill="${t.star}" stroke="${t.lo}" stroke-width=".6"/>`).join('')
    + `</svg>`;
}

const has = (unlocks: readonly string[] | undefined, id: string) => !!unlocks?.includes(ACH_PREFIX + id);

/** Small badges under a player's name (profile card, your own profile): hover/tap for the details. */
export function badgeRow(ids: readonly string[] | undefined): HTMLElement | '' {
  const list = (ids ?? []).map(achById).filter((a): a is AchievementDef => !!a);
  if (!list.length) return '';
  const row = document.createElement('div');
  row.className = 'badge-row';
  for (const a of list) {
    const b = document.createElement('span');
    b.className = `ach mini tier-${a.tier}`;
    b.tabIndex = 0;
    b.style.setProperty('--ac', TIERS[a.tier]!.ink);
    b.setAttribute('aria-label', `${a.name}: ${a.how}`);
    b.innerHTML = badgeSvg(a, false);
    const tip = document.createElement('div');
    tip.className = 'ach-tip';
    const t = document.createElement('b'); t.textContent = a.name;
    const s = document.createElement('span'); s.textContent = a.how;
    tip.append(t, s);
    b.append(tip);
    row.append(b);
  }
  return row;
}

export const BADGES_MAX = 3;
ui.useBadgeRow(badgeRow);

/**
 * Progress page: every achievement, earned ones in colour first in the list order. Click an earned one to
 * show it under your name (up to 3 badges) — `onBadges` saves the new choice.
 */
/** 0.9.9.6.1: the last progress counts the server sent (the Customize view reuses them). */
let lastCounts: Partial<Record<string, number>> | undefined;
export function renderAchievements(box: HTMLElement, unlocks: readonly string[] = [], badges: readonly string[] = [], onBadges?: (next: string[]) => void, counts?: Partial<Record<string, number>> | null) {
  // (null: someone else's — no progress counts, and yours are kept)
  const other = counts === null;
  if (counts) lastCounts = counts; else if (counts === undefined) counts = lastCounts; else counts = undefined;
  const earned = ACHIEVEMENTS.filter((a) => has(unlocks, a.id)).length;
  const grid = document.createElement('div');
  grid.className = 'ach-grid';
  for (const a of ACHIEVEMENTS) {
    const locked = !has(unlocks, a.id);
    const b = document.createElement('div');
    b.className = `ach tier-${a.tier}` + (locked ? ' locked' : '');
    b.tabIndex = 0;
    b.style.setProperty('--ac', TIERS[a.tier]!.ink);
    b.setAttribute('aria-label', `${a.name}: ${locked ? 'locked — ' : ''}${a.how}`);
    b.innerHTML = badgeSvg(a, locked);
    const tip = document.createElement('div');
    tip.className = 'ach-tip';
    const t = document.createElement('b'); t.textContent = a.name;
    const s = document.createElement('span'); s.textContent = a.how;
    const pinned = badges.includes(a.id);
    const tn = document.createElement('small'); tn.className = `ach-tier t${a.tier}`; tn.textContent = `${TIERS[a.tier]!.name} ${'★'.repeat(Math.min(3, a.tier))}`;
    const st = document.createElement('small'); st.textContent = locked ? 'Locked' : pinned && other ? 'On their profile ✓' : pinned ? 'On your profile ✓ — click to remove' : onBadges ? 'Unlocked ✓ — click to show on your profile' : 'Unlocked ✓';
    tip.append(tn, t, s);
    const goal = locked ? ACH_GOALS[a.id] : undefined;
    const have = goal && counts ? counts[goal[0]] : undefined;
    if (goal && typeof have === 'number') { // 0.9.9.6.1: how far along a locked one is
      const pct = Math.max(0, Math.min(1, have / goal[1]));
      const pr = document.createElement('div'); pr.className = 'ach-prog';
      const n = document.createElement('em'); n.textContent = `${Math.min(have, goal[1]).toLocaleString()} / ${goal[1].toLocaleString()}`;
      const bar = document.createElement('i'); bar.style.setProperty('--p', `${(pct * 100).toFixed(1)}%`);
      pr.append(n, bar); tip.append(pr);
      const mini = document.createElement('i'); mini.className = 'ach-bar'; mini.style.setProperty('--p', `${(pct * 100).toFixed(1)}%`);
      b.append(mini);
      b.setAttribute('aria-label', `${a.name}: locked — ${a.how} (${Math.min(have, goal[1])} / ${goal[1]})`);
    }
    tip.append(st);
    b.append(tip);
    if (pinned) { b.classList.add('pinned'); const pin = document.createElement('i'); pin.className = 'ach-pin'; pin.textContent = '★'; const ring = document.createElement('i'); ring.className = 'ach-ring'; b.append(ring, pin); }
    if (!locked && onBadges) {
      b.classList.add('pickable');
      const toggle = () => {
        if (pinned) return onBadges(badges.filter((x) => x !== a.id));
        if (badges.length >= BADGES_MAX) { ui.toast(`Up to ${BADGES_MAX} badges — click one with a ★ to remove it first.`); return; }
        onBadges([...badges, a.id]);
      };
      b.onclick = toggle;
      b.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } };
    }
    grid.append(b);
  }
  const head = document.createElement('h3');
  head.append('Achievements ');
  const sm = document.createElement('small'); sm.className = 'hint'; sm.textContent = `${earned} / ${ACHIEVEMENTS.length}`;
  head.append(sm);
  const hint = document.createElement('p');
  hint.className = 'hint ach-hint';
  hint.textContent = `Click an earned badge to show it under your name (★ = on your profile, up to ${BADGES_MAX}).`;
  box.replaceChildren(head, ...(onBadges && earned ? [hint] : []), grid);
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
  box.style.setProperty('--ac', TIERS[a.tier]!.ink);
  box.innerHTML = '';
  const rays = document.createElement('div'); rays.className = 'ach-rays';
  const badge = document.createElement('div'); badge.className = `ach-badge tier-${a.tier}`; badge.innerHTML = badgeSvg(a, false);
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

// 0.9.9.6: a badge near the edge of the screen keeps its tip on screen (it is centred over the badge otherwise)
function keepTipOnScreen(e: Event) {
  const tip = (e.target as Element | null)?.closest?.('.ach')?.querySelector<HTMLElement>('.ach-tip');
  if (!tip) return;
  tip.style.setProperty('--tip-dx', '0px');
  requestAnimationFrame(() => {
    const r = tip.getBoundingClientRect();
    if (!r.width) return;
    // (inside a dialog — View profile — its edges clip the tip, so keep it within those)
    const box = tip.closest('dialog')?.getBoundingClientRect();
    const lo = Math.max(0, box?.left ?? 0) + 8, hi = Math.min(innerWidth, box?.right ?? innerWidth) - 8;
    const dx = r.left < lo ? lo - r.left : r.right > hi ? hi - r.right : 0;
    tip.style.setProperty('--tip-dx', `${Math.round(dx / (r.width / tip.offsetWidth || 1))}px`);
  });
}
document.addEventListener('pointerover', keepTipOnScreen);
document.addEventListener('focusin', keepTipOnScreen);
