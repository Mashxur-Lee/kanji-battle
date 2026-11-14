import { locale, tr } from './i18n';
import { screenIn } from './motion';
import { knowPlayer } from './mentions';
import { viewH, viewW, zrect } from './zoom';
import { injectBorderStyles } from './borders';
injectBorderStyles(); // 0.9.9.9.6.1: the league frames (drawn, as a style sheet)
import { showStrokeOrder } from './strokes';
import {
  LEVEL_LABEL, LEVELS, MODE_LABEL, isKanaLevel, type AdminUserRow, type AnswerMode, type BossView, type GameMode, type GameOverReason,
  type Level, type MatchSummary, type PlayerId, type PlayerStats, type PlayerView, type PublicProfile, type PublicUser, type StudyItem, type Avatar,
} from '../shared/protocol';
import { avatarSvg, dragonSvg, heroSvg, wizardSvg } from './wizard';
import { arena as arena3d, arenaForBattle } from './arena';
import { setStarred } from './stars';
import { toRomaji } from '../shared/kana';
import { borderOf, flameColor, flameShades, isKanaBeginner, levelOf, levelProgress, levelXp } from '../shared/progress';

export const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

/** Tiny element helper. Always textContent — names are untrusted. */
function h(tag: string, cls = '', text?: string | number, attrs: Record<string, string> = {}): HTMLElement {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = String(text);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}
const append = (parent: HTMLElement, ...kids: Array<HTMLElement | string>) => { parent.append(...kids); return parent; };

const SCREENS = ['auth', 'menu', 'queue', 'admin', 'private', 'modes', 'lobby', 'prep', 'battle', 'results', 'study', 'review', 'quiz', 'passage', 'customize', 'deck', 'history', 'progress', 'daily', 'friends', 'dict', 'kana', 'kanaplay', 'quizzes', 'inbox'] as const;
export type Screen = (typeof SCREENS)[number];
let screenListener: (s: Screen) => void = () => {};
/** 0.9.9.7.3: the loading screen in index.html (it covers the page from the first moment) fades out */
export function hideBootScreen() {
  const b = document.getElementById('bootScreen');
  if (!b || b.classList.contains('out')) return;
  b.classList.add('out');
  setTimeout(() => b.remove(), 450);
}
export const onScreen = (fn: (s: Screen) => void) => { screenListener = fn; };
export const currentScreen = () => SCREENS.find((s) => !$(s).hidden);
export const show = (screen: Screen) => {
  // 0.9.9.9.6.2: showing the screen you're already on (the lobby, after every room update — picking a level) stays
  // where you are: no jump to the top, no replayed entrance
  const again = currentScreen() === screen;
  SCREENS.forEach((s) => ($(s).hidden = s !== screen));
  document.body.dataset.screen = screen; // 0.9.9.4.4.3: the background dims behind the menus (style.css)
  hideBootScreen(); // 0.9.9.7.3: the first real screen is up
  if (!again) {
    scrollTo(0, 0);
    screenIn(screen); // 0.9.9.9.5: fades in, its parts rise one after another
  }
  screenListener(screen);
};

// 0.9.9.4.3: a menu error goes away by itself (it used to stay for days)
let errorTimer = 0;
export const setError = (text: string) => {
  $('error').textContent = text;
  clearTimeout(errorTimer);
  if (text) errorTimer = window.setTimeout(() => { $('error').textContent = ''; }, 10_000);
};

const secs = (ms: number) => (ms / 1000).toFixed(1) + 's';
const clockText = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};
const levelsText = (levels: Level[]) => levels.map((l) => LEVEL_LABEL[l]).join(' + ');

// ── countdowns (one per slot, driven by requestAnimationFrame) ──────────────
const timers = new Map<string, number>();
// 0.9.9.7: a paused game freezes every countdown on screen (the server's clock stands still too)
let pauseAt: number | null = null, pausedFor = 0;
const clockNow = () => (pauseAt ?? performance.now()) - pausedFor;
export function setClocksPaused(on: boolean) {
  if (on && pauseAt === null) pauseAt = performance.now();
  else if (!on && pauseAt !== null) { pausedFor += performance.now() - pauseAt; pauseAt = null; }
}
export function countdown(slot: string, durationMs: number, onFrame: (leftMs: number, frac: number) => void, totalMs = durationMs) {
  stopCountdown(slot);
  const end = clockNow() + durationMs;
  const tick = () => {
    const left = Math.max(0, end - clockNow());
    onFrame(left, totalMs > 0 ? left / totalMs : 0);
    if (left > 0) timers.set(slot, requestAnimationFrame(tick));
  };
  tick();
}
/**
 * A big round turn timer (seconds in a ring that empties), red and pulsing in the last `warnMs`.
 * Used for the answer window in battles and for the turn / cast clock in Deck Duel.
 */
export function bigTimer(slot: string, el: HTMLElement, leftMs: number, totalMs: number, warnMs = 5000) {
  if (!el.querySelector('.tt-fg')) el.innerHTML = '<svg viewBox="0 0 44 44" aria-hidden="true"><circle class="tt-bg" cx="22" cy="22" r="19"/><circle class="tt-fg" cx="22" cy="22" r="19"/></svg><b></b>';
  const fg = el.querySelector<SVGCircleElement>('.tt-fg')!, b = el.querySelector('b')!;
  el.hidden = false;
  let shown = -1;
  countdown(slot, leftMs, (left, frac) => {
    const s = Math.ceil(left / 1000);
    if (s !== shown) { shown = s; b.textContent = String(s); }
    fg.style.strokeDashoffset = String(119.4 * (1 - Math.max(0, Math.min(1, frac))));
    el.classList.toggle('low', left > 0 && left <= warnMs);
    el.classList.toggle('out', left <= 0);
  }, totalMs);
}
export function hideTimer(slot: string, el: HTMLElement) { stopCountdown(slot); el.hidden = true; el.classList.remove('low', 'out'); }

export function stopCountdown(slot?: string) {
  for (const [k, id] of timers) if (!slot || k === slot) { cancelAnimationFrame(id); timers.delete(k); }
}

// ── connection bars ─────────────────────────────────────────────────────────
const rtts = new Map<string, number | null>();
/** 3 green bars = good (<150 ms), 2 yellow = medium (<400 ms), 1 red = poor, grey = offline. */
export function netQuality(rtt: number | null | undefined): 0 | 1 | 2 | 3 {
  if (rtt === null || rtt === undefined) return 0;
  return rtt < 150 ? 3 : rtt < 400 ? 2 : 1;
}
function paintNet(el: HTMLElement) {
  const rtt = rtts.get(el.dataset.net ?? '');
  const q = netQuality(rtt);
  el.className = `net q${q}`;
  el.title = rtt == null ? 'Connection: offline / measuring…' : `Connection: ${['', 'poor', 'medium', 'good'][q]} (${rtt} ms)`;
}
export function netBars(playerId: string): HTMLElement {
  const el = h('span', 'net');
  el.dataset.net = playerId;
  el.innerHTML = '<i></i><i></i><i></i>';
  paintNet(el);
  return el;
}
export function setNet(map: Record<string, number | null>) {
  for (const [id, rtt] of Object.entries(map)) rtts.set(id, rtt);
  document.querySelectorAll<HTMLElement>('.net[data-net]').forEach(paintNet);
}

// ── top bar ──────────────────────────────────────────────────────────────────
export interface ProfileView { xp: number; level: number; crit: number; learned: number; learnedToday?: number; wins?: number; losses?: number; pic?: string | null; streak?: number; bestStreak?: number; unlocks?: string[]; badges?: string[]; border?: string }
/** The CSS class of an avatar border (0.9.9.3; '' for none). */
// (0.9.9.9.6.2: a saved border that no longer exists — the old level borders — shows as none; the N5–N1 league
// frames are square paintings, "fr" — the picture in them becomes a rounded square)
export const borderCls = (b?: string | null) => {
  const id = borderOf(b);
  return id !== 'none' ? ` bd bd-${id}${FRAMED.has(id) ? ' bd-fr' : ''}` : '';
};
const FRAMED = new Set(['lg-n5', 'lg-n4', 'lg-n3', 'lg-n2', 'lg-n1']);
/** A round profile picture (or nothing). */
export function picEl(url: string | null | undefined, cls = 'pic', border?: string | null): HTMLElement | '' {
  if (!url) return '';
  const img = h('img', cls + borderCls(border), undefined, { src: url, alt: '', loading: 'lazy', decoding: 'async' }) as HTMLImageElement;
  img.onerror = () => img.remove();
  // 0.9.9.9.6.2: a picture can't carry a frame drawn over it (no ::before on an <img>) — a league frame wraps it
  if (border && borderOf(border).startsWith('lg-')) {
    const wrap = h('span', `${cls} pic-wrap${borderCls(border)}`);
    img.className = 'pic fill';
    img.onerror = () => wrap.remove();
    wrap.append(img);
    return wrap;
  }
  return img;
}
let beginnerFlag = false;
/** A hiragana beginner: only かな until "I've mastered hiragana" is ticked in Settings. */
export const kanaBeginner = () => beginnerFlag;
export const BEGINNER_LOCK = 'Master the basic hiragana in Kana first (or tick "I\'ve mastered hiragana" in Settings)';
/** Locks a level chip a beginner can't pick yet (everything but かな). */
export function lockLevelChip(label: HTMLElement, lv: string) {
  if (!beginnerFlag || isKanaLevel(lv)) return label; // 0.9.9.4.2: katakana is open to beginners too
  label.classList.add('locked'); label.classList.remove('on');
  const i = label.querySelector('input'); if (i) { i.disabled = true; i.checked = false; }
  label.title = BEGINNER_LOCK;
  return label;
}

/** Your badges under your name in the profile pop-up. */
export function setBadges(ids: readonly string[] | undefined) { $('ppBadges').replaceChildren(...[badgeRowFn?.(ids)].filter((x): x is HTMLElement => !!x)); }
let badgeRowFn: ((ids: readonly string[] | undefined) => HTMLElement | '') | null = null;
/** achievements.ts registers how badges are drawn (it imports ui, so not the other way round). */
export const useBadgeRow = (fn: (ids: readonly string[] | undefined) => HTMLElement | '') => { badgeRowFn = fn; };
/** 0.9.9.9.5.4: the streak flames (dailytasks.ts) on the profile cards — yours and your friends' */
let flameFn: ((n: number, lit: boolean, still?: boolean) => HTMLElement) | null = null;
export const useStreakFlame = (fn: (n: number, lit: boolean, still?: boolean) => HTMLElement) => { flameFn = fn; };
// ── 0.9.9.9.6.2: a player's numbers, the same on your card and a friend's ─────────────────────────────────────
// A ring with the win rate, next to wins, losses and spells learned (each with its own small icon); under it one
// streak card — the flame big with the days in a row, and the best streak beside it with its own small flame.
const ICON = {
  win: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10v3a5 5 0 0 1-10 0z" fill="currentColor"/><path d="M7 5H4v1.5A3.5 3.5 0 0 0 7.5 10M17 5h3v1.5a3.5 3.5 0 0 1-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 12v4M8.5 20h7l-1-4h-5z" fill="currentColor"/></svg>',
  loss: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5C6.5 4 9.5 4 12 6c2.5-2 5.5-2 8-.5V19c-2.5-1.5-5.5-1.5-8 .5-2.5-2-5.5-2-8-.5z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M12 6v13.5" stroke="currentColor" stroke-width="1.9"/></svg>',
  today: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z" fill="currentColor"/></svg>',
};
export function statsCard(s: { wins: number; losses: number; learned: number; today?: number }): HTMLElement {
  const games = s.wins + s.losses;
  const pct = games ? Math.round((100 * s.wins) / games) : 0;
  const ring = h('div', `pc-ring${games ? '' : ' none'}`);
  ring.style.setProperty('--p', `${pct}%`);
  ring.append(append(h('div', 'pc-ring-in'), h('b', '', games ? `${pct}%` : '—'), h('small', '', tr('win rate'))));
  const row = (cls: keyof typeof ICON, n: number, label: string) => {
    const r = h('div', `pc-row pc-${cls}`);
    const i = h('span', 'pc-ic'); i.innerHTML = ICON[cls];
    r.append(i, h('b', '', n.toLocaleString(locale())), h('span', '', tr(label)));
    return r;
  };
  const list = append(h('div', 'pc-list'), row('win', s.wins, s.wins === 1 ? 'win' : 'wins'), row('loss', s.losses, s.losses === 1 ? 'loss' : 'losses'), row('book', s.learned, 'spells learned'));
  if (s.today !== undefined) list.append(row('today', s.today, 'learned today'));
  return append(h('div', 'pc-stats'), ring, list);
}
export function streakCard(streak: number, best: number): HTMLElement {
  const card = h('div', `pc-streak${streak > 0 ? ' on' : ''}`);
  const big = flameFn ? flameFn(streak, streak > 0) : h('span');
  big.classList.add('pc-flame');
  const now = append(h('div', 'pc-s-now'), h('b', '', tr(streak === 1 ? '1 day' : `${streak} days`)), h('small', '', tr('daily streak')));
  const bestBox = h('div', 'pc-s-best');
  const small = flameFn ? flameFn(best, best > 0, true) : h('span'); // (a still picture: it's small)
  small.classList.add('pc-flame-sm');
  bestBox.append(small, append(h('div', 'pc-s-best-t'), h('small', '', tr('best')), h('b', '', tr(best === 1 ? '1 day' : `${best} days`))));
  card.style.setProperty('--fc', big.style.getPropertyValue('--fc') || '#9a9aae'); // (the flame's colour)
  card.append(big, now, bestBox);
  return card;
}

export function setProfile(p: ProfileView | null) {
  if (!p) return;
  setBadges(p.badges);
  beginnerFlag = isKanaBeginner(p.unlocks);
  // 0.9.9.9.5.1: Study spells holds kanji words only — locked until hiragana is mastered
  $('studyBtn').classList.toggle('locked', beginnerFlag);
  $('studyBtn').setAttribute('aria-disabled', String(beginnerFlag));
  if ('starred' in p) setStarred((p as { starred?: string[] }).starred);
  const lx = levelXp(p.xp);
  $('whoLv').textContent = String(lx.level);
  $('whoLevel').textContent = `Lv ${lx.level} · ${lx.into.toLocaleString()} / ${lx.need.toLocaleString()} XP`;
  // 0.9.9.9.6.2: the same cards as a friend's (statsCard / streakCard), with "learned today" too
  $('ppStatsBox').replaceChildren(statsCard({ wins: p.wins ?? 0, losses: p.losses ?? 0, learned: p.learned, today: p.learnedToday ?? 0 }));
  $('ppStreakBox').replaceChildren(streakCard(p.streak ?? 0, Math.max(p.bestStreak ?? 0, p.streak ?? 0)));
  for (const id of ['whoPic', 'ppPic']) {
    const el = $(id);
    el.replaceChildren(p.pic ? picEl(p.pic, 'pic fill') : '✦');
    el.classList.toggle('has-pic', !!p.pic);
    el.className = el.className.replace(/(^|\s)bd(-[\w-]+)?(?=\s|$)/g, '') + borderCls(p.border); // (all of bd, bd-lg-n5, bd-fr)
  }
  $('picRemove').hidden = !p.pic;
  $('whoXp').style.width = `${levelProgress(p.xp) * 100}%`;
  $('whoXp').parentElement!.title = `${lx.into} / ${lx.need} XP to level ${lx.level + 1}`;
}

let toastTimer = 0;
// 0.9.9.4.3: a toast can be dismissed — ✕ (or a tap), or swiped away on a phone
// 0.9.9.8: the toast slides back up the way it came down (it used to just vanish)
let toastOut = 0;
export function hideToast() {
  clearTimeout(toastTimer);
  const el = $('toast');
  if (el.hidden || el.classList.contains('leaving')) return;
  el.classList.add('leaving');
  clearTimeout(toastOut);
  toastOut = window.setTimeout(() => { el.hidden = true; el.classList.remove('leaving'); }, 280);
}
let toastWired = false;
function wireToast(el: HTMLElement) {
  toastWired = true;
  let x0 = 0, y0 = 0, id = -1;
  el.addEventListener('pointerdown', (e) => { id = e.pointerId; x0 = e.clientX; y0 = e.clientY; });
  el.addEventListener('pointermove', (e) => {
    if (e.pointerId !== id) return;
    const dx = e.clientX - x0, dy = Math.min(0, e.clientY - y0);
    el.style.transform = `translate(calc(-50% + ${dx}px), ${dy}px)`;
    el.style.opacity = String(Math.max(0.2, 1 - (Math.abs(dx) + Math.abs(dy)) / 220));
  });
  const end = (e: PointerEvent) => {
    if (e.pointerId !== id) return;
    id = -1;
    const far = Math.abs(e.clientX - x0) > 70 || y0 - e.clientY > 40;
    el.style.transform = ''; el.style.opacity = '';
    if (far) { clearTimeout(toastTimer); el.hidden = true; } // (swiped away: it's already gone)
  };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
}
export function toast(text: string, ms = 3500) {
  const el = $('toast');
  if (!toastWired) wireToast(el);
  const x = h('button', 'toast-x', '✕');
  x.setAttribute('aria-label', 'Close');
  x.onclick = (e) => { e.stopPropagation(); hideToast(); };
  el.replaceChildren(h('span', 'toast-t', text), x);
  clearTimeout(toastOut);
  if (el.classList.contains('leaving') || el.hidden) {
    // (re)start the slide down
    el.classList.remove('leaving'); el.hidden = true; void el.offsetWidth; // (restarts the animation)
  }
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(hideToast, ms);
}

/** your username (Customize → Profile preview) */
export const myName = () => $('whoName').textContent ?? '';
export function setUser(user: PublicUser | null) {
  $('whoami').hidden = !user;
  // 0.9.9.6: your nickname (or login), with the login under it in your profile
  $('whoName').textContent = user ? user.name ?? user.username : '';
  $('ppName').textContent = user ? user.name ?? user.username : '';
  $('ppLogin').textContent = user && user.nickname ? `@${user.username}` : '';
  $('ppLogin').hidden = !user?.nickname;
  $('whoRole').hidden = user?.role !== 'admin';
  $('adminBtn').hidden = user?.role !== 'admin';
}

export function setNetStatus(text: string | null) {
  $('netStatus').hidden = !text;
  $('netStatus').textContent = text ?? '';
}

export function setAudioButtons(radio: boolean, sfx: boolean) {
  const set = (id: string, on: boolean, icon: string, label: string) => {
    $(id).setAttribute('aria-pressed', String(on));
    $(id).replaceChildren(h('span', 'ico', icon), h('span', 'lbl', ` ${label} ${on ? 'on' : 'off'}`));
  };
  set('radioBtn', radio, '', 'Music');
  set('sfxBtn', sfx, '', 'Sounds');
}

// ── auth ─────────────────────────────────────────────────────────────────────
export function setAuthTab(tab: 'login' | 'register') {
  const login = tab === 'login';
  $('tabLogin').classList.toggle('on', login);
  $('tabRegister').classList.toggle('on', !login);
  $('tabLogin').setAttribute('aria-selected', String(login));
  $('tabRegister').setAttribute('aria-selected', String(!login));
  $('authSubmit').textContent = login ? 'Log in' : 'Create account';
  $<HTMLInputElement>('authPass').autocomplete = login ? 'current-password' : 'new-password';
  $('authHint').textContent = login ? '' : 'Login: 3–16 letters, numbers or _. Password: at least 6 characters.';
  $('authError').textContent = '';
}

// ── admin ────────────────────────────────────────────────────────────────────
/** "5 min", "2 h", "3 d" since a time */
function ago(t: number) {
  const m = Math.max(0, Math.round((Date.now() - t) / 60_000));
  return m < 60 ? `${m} min` : m < 60 * 24 ? `${Math.round(m / 60)} h` : `${Math.round(m / 1440)} d`;
}
export function showAdmin(users: AdminUserRow[], me: PublicUser, db: { storage: string; persistent: boolean }, onToggle: (u: AdminUserRow) => void, onRole?: (u: AdminUserRow) => void, onDelete?: (u: AdminUserRow) => void) {
  const banned = users.filter((u) => u.banned).length;
  const online = users.filter((u) => u.online).length;
  $('adminInfo').textContent = `${online} online now · ${users.length} accounts · ${banned} banned`;
  // online players first, then everyone else by when they were last around
  users = [...users].sort((a, b) => Number(!!b.online) - Number(!!a.online) || (b.lastSeen ?? 0) - (a.lastSeen ?? 0) || String(b.loginDay ?? '').localeCompare(String(a.loginDay ?? '')));
  const st = $('adminStorage');
  st.className = 'storage ' + (db.persistent ? 'ok' : 'warn');
  st.textContent = db.storage === 'postgres'
    ? '✓ Accounts, XP and study sets are saved in the Postgres database — updates and restarts keep them.'
    : db.persistent
      ? `Saved to a local file (${db.storage}).`
      : 'No database connected: accounts, XP and study sets are saved on the server disk, which Render wipes on every deploy and restart. Set DATABASE_URL (Neon) in Render → Environment.';
  $('userRows').replaceChildren(
    ...users.map((u) => {
      const action = h('td');
      if (u.role !== 'admin' && u.id !== me.id) {
        const b = h('button', 'pill' + (u.banned ? '' : ' danger'), u.banned ? 'Unban' : 'Ban') as HTMLButtonElement;
        b.onclick = () => onToggle(u);
        action.append(b);
      }
      // promote / demote (not yourself, not the main "admin" account, not a banned player)
      if (onRole && u.id !== me.id && u.username.toLowerCase() !== 'admin' && !u.banned) {
        const r = h('button', 'pill' + (u.role === 'admin' ? '' : ' promote'), u.role === 'admin' ? 'Remove admin' : 'Make admin') as HTMLButtonElement;
        r.onclick = () => onRole(u);
        action.append(r);
      }
      // delete the account for good (test accounts): not yourself, not an admin
      if (onDelete && u.role !== 'admin' && u.id !== me.id) {
        const d = h('button', 'pill danger del-user', '🗑 Delete', { title: 'Delete this account and all its progress' }) as HTMLButtonElement;
        d.onclick = () => onDelete(u);
        action.append(d);
      }
      const presence = append(h('td', 'presence ' + (u.online ? 'on' : 'off')), h('span', 'dot'),
        append(h('span', 'pr-txt'), h('b', '', u.online ? 'Online' : 'Offline'),
          h('small', '', u.online ? `${u.activity ?? ''}${u.onlineSince ? ` · ${ago(u.onlineSince)}` : ''}` : u.lastSeen ? `seen ${ago(u.lastSeen)} ago` : u.loginDay ? `last day: ${u.loginDay}` : 'never logged in')));
      return append(h('tr', u.online ? 'is-online' : ''),
        presence,
        h('td', '', u.username + (u.nickname ? ` (${u.nickname})` : '') + (u.id === me.id ? ' (you)' : '')),
        h('td', '', u.role),
        h('td', 'num', `Lv ${u.level ?? 0}`),
        h('td', 'num', (u.xp ?? 0).toLocaleString()),
        h('td', 'num', `${u.learned ?? 0} / ${u.cards ?? 0}`),
        h('td', '', new Date(u.createdAt).toLocaleDateString(locale())),
        h('td', u.banned ? 'status-ban' : 'status-ok', u.banned ? 'Banned' : 'Active'),
        action);
    }),
  );
  show('admin');
}

// ── lobby: mini guides ──────────────────────────────────────────────────────
const tile = (k: string, cls = '') => h('span', 'g-tile ' + cls, k, { lang: 'ja' });
const GUIDES: Record<Exclude<GameMode, 'deck'>, { title: string; pic: () => HTMLElement; steps: Array<[string, string]> }> = {
  reading: {
    title: 'How Kanji Reading works',
    pic: () => append(h('div', 'g-pic'), tile('漢字'), h('span', 'g-arrow', '→'), tile('かんじ', 'ok'), h('span', 'g-or', 'or'), h('span', 'g-tile ok', 'kanji')),
    steps: [
      ['📖', '60 s to study your 10 words (reading + meaning). Then they disappear.'],
      ['⌨️', 'A kanji appears: type its reading in kana or romaji, Enter.'],
      ['⚔️', 'Right = a spell at your opponent. Faster and in a row = more damage (combo up to ×1.5; 5 in a row sets you on fire 🔥).'],
      ['💨', 'Wrong or Skip (Esc) = a miss; the answer is shown and the word comes back later.'],
      ['❤️', 'Your HP depends on how hard your opponent hits (their levels). Most HP after 5 min wins.'],
    ],
  },
  writing: {
    title: 'How Kanji Writing works',
    pic: () => append(h('div', 'g-pic'), h('span', 'g-hint', 'かんじ — kanji'), h('span', 'g-arrow', '→'), append(h('span', 'g-pad'), tile('漢'), tile('字'))),
    steps: [
      ['👁️', 'Look at the kanji (up to 3.5 s), then press CAST! (or Enter): it vanishes and the pad and keyboard appear. Pasting is off.'],
      ['🖌️', 'Write the whole word on the pad, left to right (one cell per character) — or type it with a Japanese keyboard.'],
      ['✅', 'Only kanji count (kana only at the かな level). Messy is fine — it’s judged by shape.'],
      ['⚔️', 'Right = damage, with the same combo and speed bonus as Reading.'],
    ],
  },
  boss: {
    title: 'How Boss Elimination works',
    pic: () => append(h('div', 'g-pic'), h('span', 'g-emoji', '🧙🧙🧙🧙'), h('span', 'g-arrow', '⚔'), h('span', 'g-emoji', '🐉')),
    steps: [
      ['👥', 'Up to 4 players (friends or AI) against the Black Dragon; the online queue always makes a full party of 4. Its HP grows with the party.'],
      ['⌨️', 'Each of you gets your own kanji: type the reading. Right answers hit the dragon.'],
      ['🦴', 'A mistake gets you clawed (−45).'],
      ['🔥', 'Every 30 s it breathes fire on everyone (−110) — unless you are on fire yourself (5 in a row): then you are immune.'],
      ['🏆', 'Slay it within 5 minutes. If everyone falls, the dragon wins.'],
    ],
  },
  rapid: {
    title: 'How 1v1 Rapid works',
    pic: () => append(h('div', 'g-pic'), tile('早い'), h('span', 'g-arrow', '→'), h('span', 'g-tile ok', 'はやい ⚡')),
    steps: [
      ['🎯', 'Both players get the same kanji — no study phase.'],
      ['⚡', 'First correct reading (kana or romaji) hits the other player.'],
      ['🔁', 'Wrong? Try again until the 12 s round ends.'],
      ['❤️', 'Same HP for both. Last wizard standing wins.'],
    ],
  },
};
/** The mini instructions of a battle mode (lobby, and the online queue on hover). */
export function modeGuideNodes(mode: Exclude<GameMode, 'deck'>): HTMLElement[] {
  const g = GUIDES[mode];
  const ol = h('ol', 'g-flow');
  for (const [icon, text] of g.steps) ol.append(append(h('li'), h('span', 'g-ic', icon), h('span', '', text)));
  return [h('h3', '', g.title), g.pic(), ol, h('p', 'g-foot', 'Playing with AI gives half XP; a forfeit gives none.')];
}
function renderModeGuide(mode: GameMode) {
  if (mode === 'deck') return;
  $('modeGuide').replaceChildren(...modeGuideNodes(mode));
}

// ── lobby ───────────────────────────────────────────────────────────────────
export function showLobby(code: string, mode: GameMode, players: PlayerView[], you: PlayerId, hostId: PlayerId, maxPlayers: number, minPlayers: number, open = false) {
  $('code').textContent = code;
  // 0.9.9.9.5.5: the mode as a banner at the top centre, with its kanji
  const lm = $('lobbyMode');
  if (lm.dataset.mode !== mode) {
    lm.dataset.mode = mode;
    lm.className = `lobby-mode ${mode}`;
    lm.replaceChildren(modeBadge(mode), h('span', 'lm-name', MODE_LABEL[mode]));
  }
  // open / closed: the host flips it; the others see which it is
  const isHost0 = you === hostId;
  const sw = $<HTMLButtonElement>('lobbyOpen');
  $('lobbyOpenRow').hidden = false;
  sw.classList.toggle('on', open);
  sw.setAttribute('aria-checked', String(open));
  sw.disabled = !isHost0;
  sw.title = isHost0 ? '' : tr('Only the host can change this');
  sw.querySelector('.os-text')!.textContent = tr(open ? 'Open' : 'Closed');
  $('lobbyOpenHint').textContent = tr(open ? (isHost0 ? 'Friends can join from your profile' : 'The host’s friends can join from their profile') : 'Only invited friends or the code can join');
  $('lobbyPlayers').replaceChildren(
    ...players.map((p) => {
      const li = h('li');
      const av = h('span', 'who-av');
      // Deck Duel: no character yet — you pick your hero once the game starts (0.9.9.3.2)
      if (mode !== 'deck') av.innerHTML = avatarSvg(p.avatar, p.id === you ? 'me' : 'opp', p.staff); else av.hidden = true;
      const who = h('span', 'who', p.id === you ? `${p.name} (you)` : p.name);
      if (p.id !== you) markProfile(who, p);
      li.append(av, picEl(p.pic, 'pic', p.border), who);
      if (p.bot) li.append(h('span', 'tag ai', p.bot === 'BEGINNER' ? 'AI · beginner' : `AI · knows ${p.bot}`));
      else li.append(netBars(p.id), h('span', 'lv', `Lv ${p.level}`));
      if (p.bot && you === hostId) { const x = h('button', 'pill rm-bot', '✕', { title: 'Remove this AI' }); x.dataset.removeBot = p.id; li.append(x); }
      if (p.id === hostId) li.append(h('span', 'tag', 'host'));
      if (!p.online) li.append(h('span', 'tag off', 'away — seat kept'));
      // 0.9.9.8.2: every mode shows who's ready (it was only Deck Duel) — the AI always is
      // (0.9.9.9.2: no tag on the AI — it is always ready, there's nothing to wait for)
      const ready = !!p.bot || !!p.ready;
      li.classList.toggle('is-ready', ready && !p.bot);
      if (!p.bot) li.append(h('span', 'tag ' + (ready ? 'ready' : 'notready'), ready ? '✓ Ready' : 'Not ready'));
      if (mode !== 'deck') li.append(append(h('div', 'meta'), h('span', '', levelsText(p.levels)), h('span', 'hpv', `${p.maxHp} HP`)));
      return li;
    }),
    ...Array.from({ length: Math.max(0, maxPlayers - players.length) }, () =>
      h('li', 'empty', mode === 'boss' ? 'Waiting for a teammate (optional)…' : 'Waiting for opponent…')),
  );

  const mine = players.find((p) => p.id === you)?.levels ?? [];
  $('levelChips').replaceChildren(
    ...LEVELS.map((lv) => {
      const on = mine.includes(lv);
      const label = h('label', 'chip' + (on ? ' on' : ''), LEVEL_LABEL[lv]);
      const box = h('input', '', undefined, { type: 'checkbox', value: lv }) as HTMLInputElement;
      box.checked = on;
      label.prepend(box);
      return lockLevelChip(label, lv);
    }),
  );
  $('levelsHint').textContent = mode === 'deck'
    ? "Deck Duel deals its cards from both players' All spells (2 of each level N5–N1 from each). Your level picks only change your character here."
    : mode === 'rapid'
      ? 'Shared levels: both players race on the same kanji, so a change here changes it for everyone.'
      : mode === 'boss'
    ? 'Each player picks their own. The dragon gets tougher when the party picks harder levels.'
    : mode === 'writing'
      ? 'Each player picks their own. You will write these words by hand. Harder levels hit harder — so your opponent gets more HP.'
      : 'Each player picks their own. ひらがな and カタカナ = the two kana alphabets, answered in romaji. Harder levels hit harder — so your opponent gets more HP.';
  const isHost = you === hostId;
  const canStart = players.length >= minPlayers;
  $('addBot').hidden = !isHost || players.length >= maxPlayers;
  const deck = mode === 'deck';
  $('levels').hidden = deck; // Deck Duel deals cards from every level — nothing to pick
  $('deckGuide').hidden = !deck;
  $('modeGuide').hidden = deck;
  if (!deck) renderModeGuide(mode);
  const meReady = !!players.find((p) => p.id === you)?.ready;
  $('readyBtn').hidden = false; // 0.9.9.7.1: every mode starts when everyone is ready
  $('readyBtn').textContent = meReady ? 'Not ready' : 'Ready';
  $('readyBtn').classList.toggle('is-ready', meReady);
  $('readyBtn').dataset.ready = meReady ? '1' : '';
  $('start').hidden = true;
  const solo = mode === 'boss' && players.length === 1;
  $('lobbyStatus').textContent = !canStart
    ? (deck ? 'Share the code, or add an AI opponent — then press Ready. The duel starts when both are ready.' : 'Share the code with a friend, or add an AI player — then press Ready.')
    : meReady ? (solo ? 'Starting…' : 'Waiting for the others to be ready…')
    : solo ? 'Press Ready to start your solo run (or wait for a teammate).' : 'Press Ready — the battle starts when every player is ready.';
  show('lobby');
}

export const selectedLevels = (): Level[] =>
  [...document.querySelectorAll<HTMLInputElement>('#levelChips input')].filter((i) => i.checked).map((i) => i.value as Level);

// ── preparation ─────────────────────────────────────────────────────────────
export function showPrep(pool: StudyItem[], durationMs: number, mode: GameMode) {
  $('prepSub').textContent = mode === 'writing'
    ? 'Memorise how each word is written. In battle you only get the meaning (and a half-second glimpse).'
    : 'Memorise the readings. They vanish when the battle starts.';
  $('studyGrid').replaceChildren(
    ...pool.map((w) => append(h('div', 'card' + (w.mine ? ' mine' : '')), h('div', 'lv', LEVEL_LABEL[w.level]), ...(w.mine ? [h('div', 'mine-tag', '★ yours', { title: 'From your All spells' })] : []), h('div', [...w.kanji].length >= 4 ? 'k long' : 'k', w.kanji, { lang: 'ja' }), h('div', 'r', w.reading, { lang: 'ja' }), h('div', 'm', w.meaning))),
  );
  $<HTMLButtonElement>('ready').disabled = false;
  $('readyStatus').textContent = '';
  show('prep');
  countdown('prep', durationMs, (left, frac) => {
    $('prepClock').textContent = clockText(left);
    $('prepBar').style.width = `${frac * 100}%`;
  }, Math.max(durationMs, 60_000));
}

export function setReady(readyCount: number, total: number, youReady: boolean) {
  $<HTMLButtonElement>('ready').disabled = youReady;
  // just you (against the AI): no count to show
  $('readyStatus').textContent = total <= 1 ? '' : `${readyCount}/${total} ready${youReady && readyCount < total ? ' — waiting for the others…' : ''}`;
}

/** The study info must disappear when the battle starts (spec §11). */
export function clearStudy() {
  stopCountdown('prep');
  $('studyGrid').replaceChildren();
}

// ── battle: HP cards ─────────────────────────────────────────────────────────

/**
 * Boss mode: the party's HP. 0.9.9.8.2: yours is its own big frame (name, "You", combo, a thick bar), the teammates
 * a compact row of thinner blue bars under it — they all looked the same and you couldn't tell which was yours.
 */
function partyPanel(el: HTMLElement, players: PlayerView[], you: PlayerId) {
  const mine = players.find((p) => p.id === you);
  const mates = players.filter((p) => p.id !== you);
  const out: HTMLElement[] = [];
  if (mine) {
    const row = h('div', 'party-me' + (mine.hp <= 0 ? ' down' : ''));
    const name = append(h('div', 'pm-name'), picEl(mine.pic, 'pic', mine.border), h('span', 'pm-you', 'You'), h('span', 'n', mine.name), netBars(mine.id),
      h('span', 'combo', mine.combo >= 2 ? `×${mine.combo} combo` : ''));
    row.append(name, thickBar(mine.hp, mine.maxHp, 'ally', mine.hp <= 0 ? 'down' : `${mine.hp} / ${mine.maxHp}`));
    out.push(row);
  }
  if (mates.length) {
    const list = h('div', 'party-mates');
    for (const p of mates) {
      const row = h('div', 'party-row mate' + (p.hp <= 0 ? ' down' : ''));
      const pn = h('span', 'n', p.name);
      markProfile(pn, p);
      row.append(append(h('div', 'pname'), pn, h('span', 'combo', p.combo >= 2 ? `×${p.combo}` : '')), thickBar(p.hp, p.maxHp, 'mate', p.hp <= 0 ? 'down' : `${p.hp}`));
      list.append(row);
    }
    // 0.9.9.9: the teammates sit inside the same green frame as you (one party), under your bar
    const frame = out[0];
    if (frame) { list.classList.add('in-frame'); frame.append(list); } else out.push(list);
  }
  el.replaceChildren(...out);
}

/** A thick HP bar with the number inside it. side: ally = green, enemy = red. */
function thickBar(hp: number, max: number, side: 'ally' | 'enemy' | 'mate', text: string) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (hp / max) * 100)) : 0;
  const bar = h('div', `tbar ${side}${pct <= 25 ? ' low' : ''}`, undefined, { role: 'meter', 'aria-valuemin': '0', 'aria-valuemax': String(max), 'aria-valuenow': String(hp) });
  const fill = h('div', 'fill'); fill.style.width = `${pct}%`;
  bar.append(fill, h('span', 'tbar-txt', text));
  return bar;
}

function fighterCard(el: HTMLElement, p: PlayerView | undefined, label: string, emptyText: string) {
  if (!p) { el.replaceChildren(h('div', 'name', emptyText)); return; }
  const nameEl = h('span', 'n', label);
  if (!label.endsWith('(you)')) markProfile(nameEl, p);
  const name = append(h('div', 'name'), append(h('span', 'n'), picEl(p.pic, 'pic', p.border), nameEl, netBars(p.id), h('span', 'lv', `Lv ${p.level}`)) , h('span', 'combo', p.combo >= 2 ? `×${p.combo} combo` : ''));
  // 0.9.9.9: one HP bar for every mode — thick, the numbers inside it (as in Boss Elimination and Deck Duel); green
  // for you, red for the opponent. The levels stay as a small line under it.
  const mine = label.endsWith('(you)');
  const bar = thickBar(p.hp, p.maxHp, mine ? 'ally' : 'enemy', `${p.hp} / ${p.maxHp}`);
  bar.setAttribute('aria-label', `${p.name} HP`);
  el.replaceChildren(name, bar, h('div', 'hpnum lvs-only', `${levelsText(p.levels)}${p.online ? '' : ' · away'}`));
}

let battleMode: GameMode = 'reading';

export function renderFighters(players: PlayerView[], you: PlayerId, boss: BossView | null) {
  const me = players.find((p) => p.id === you);
  const other = players.find((p) => p.id !== you);
  $('meCard').classList.toggle('party', battleMode === 'boss');
  $('oppCard').hidden = battleMode === 'boss';
  if (battleMode === 'boss') {
    partyPanel($('meCard'), players, you);
    const bar = $('bossBar');
    if (boss) bar.replaceChildren(h('div', 'bname', boss.name), thickBar(boss.hp, boss.maxHp, 'enemy', `${boss.hp} / ${boss.maxHp}`));
    for (const p of players) if (p.id !== you) allyEl(p.id)?.classList.toggle('onfire', p.combo >= 5);
  } else {
    fighterCard($('meCard'), me, me ? `${me.name} (you)` : '', '');
    fighterCard($('oppCard'), other, other?.name ?? '', 'Opponent left');
    $('wizOpp').classList.toggle('onfire', (other?.combo ?? 0) >= 5);
  }
  // 5+ in a row: the fighter is wreathed in flames
  $('wizMe').classList.toggle('onfire', (me?.combo ?? 0) >= 5);
  const a3 = arena3d();
  if (a3) for (const p of players) a3.onfire(p.id === you ? 'me' : battleMode === 'boss' ? `ally:${p.id}` : 'opp', p.combo >= 5 && p.hp > 0, flameColor(p.flame));
  // boss fight: downed teammates lie on the ground (you lose your staff) for the rest of the fight
  if (battleMode === 'boss') for (const p of players) if (p.hp <= 0) knockOut(p.id === you ? 'me' : `ally:${p.id}`);
  // your combo, big enough to notice (3D arena)
  const combo = me && me.hp > 0 ? me.combo : 0;
  if (me && me.hp <= 0 && shownCombo) { shownCombo = 0; $('comboHud').hidden = true; } // (down: no "combo broken")
  comboHud(combo, flameColor(me?.flame));
}

// ── 0.9.9.9.5.5: the combo counter grows with the combo ─────────────────────
// ×2–4 COMBO · ×5 ON FIRE (your flames) · ×10 INFERNO (sparks, a ring on every cast) · ×20 UNSTOPPABLE (rays, the
// screen's edges glow) · ×30 GODLIKE (all of it, in ruby and gold). Every cast punches it; each new tier flies a
// banner across the arena; a combo of 5+ that breaks shatters.
const COMBO_TIERS: ReadonlyArray<[number, string, number]> = [[30, 'GODLIKE', 5], [20, 'UNSTOPPABLE', 4], [10, 'INFERNO', 3], [5, 'ON FIRE', 2], [2, 'COMBO', 1]];
const comboTier = (n: number) => COMBO_TIERS.find(([min]) => n >= min) ?? null;
let shownCombo = 0;
export function comboHud(combo: number, flame: string) {
  const hud = $('comboHud');
  const glow = document.getElementById('comboGlow');
  const prev = shownCombo;
  shownCombo = combo;
  const t = comboTier(combo);
  hud.style.setProperty('--flame', flame);
  glow?.style.setProperty('--flame', flame);
  if (glow) glow.dataset.tier = String(t?.[2] ?? 0);
  if (combo === prev) return;
  // broken: a 5+ combo shatters
  if (combo < prev && prev >= 5) comboBroken(prev, flame);
  hud.hidden = !t;
  if (!t) { hud.className = 'combo-hud'; return; }
  const tier = t[2];
  hud.className = `combo-hud tier-${tier}${tier >= 2 ? ' hot' : ''}`;
  const rays = h('i', 'ch-rays');
  hud.replaceChildren(rays, h('b', '', `×${combo}`), h('span', '', t[1]));
  if (combo > prev) {
    retrigger(hud, 'bump', 420);
    if (tier >= 2) comboSparks(hud, Math.min(22, 6 + combo), flame, tier);
    if (tier >= 3) { const ring = h('i', 'ch-ring'); hud.append(ring); setTimeout(() => ring.remove(), 700); }
    if (prev < t[0] && tier >= 2) comboBanner(combo, t[1], tier, flame); // a new tier
  }
}
function comboSparks(host: HTMLElement, n: number, flame: string, tier: number) {
  for (let i = 0; i < n; i++) {
    const sp = h('i', 'ch-spark');
    const a = (i / n) * Math.PI * 2 + Math.random() * 0.5, d = 46 + Math.random() * (30 + tier * 14);
    sp.style.setProperty('--dx', `${Math.cos(a) * d}px`); sp.style.setProperty('--dy', `${Math.sin(a) * d * 0.8 - 10}px`);
    sp.style.setProperty('--c', tier >= 5 && i % 2 ? '#ffd34d' : flame);
    sp.style.animationDelay = `${Math.random() * 60}ms`;
    host.append(sp);
    setTimeout(() => sp.remove(), 800);
  }
}
function comboBanner(combo: number, label: string, tier: number, flame: string) {
  const b = h('div', `combo-banner tier-${tier}`);
  b.style.setProperty('--flame', flame);
  b.append(h('b', '', `×${combo}`), h('span', '', `${label}!`));
  ($('battle') ?? document.body).append(b);
  setTimeout(() => b.remove(), 1700);
}
function comboBroken(n: number, flame: string) {
  const b = h('div', 'combo-broken');
  b.style.setProperty('--flame', flame);
  b.textContent = tr(`×${n} combo broken`);
  $('battle').append(b);
  setTimeout(() => b.remove(), 1300);
}

// ── battle: wizards, dragon & spell effects ──────────────────────────────────
/** 'ally:<playerId>' = a party member in boss mode (up to 3 next to you). */
export type Actor = 'me' | 'opp' | 'boss' | `ally:${string}`;
const allyEl = (id: string) => document.querySelector<HTMLElement>(`#allies .wizard[data-pid="${CSS.escape(id)}"]`);
const actorEl = (a: Actor): HTMLElement => a.startsWith('ally:') ? allyEl(a.slice(5)) ?? $('wizMe') : $(a === 'me' ? 'wizMe' : a === 'opp' ? 'wizOpp' : 'dragon');

function retrigger(el: HTMLElement, cls: string, ms: number) {
  el.classList.remove(cls);
  void el.offsetWidth; // restart the CSS animation
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), ms);
}

export function setupArena(mode: GameMode, players: PlayerView[], you: PlayerId) {
  battleMode = mode;
  shownCombo = 0; $('comboHud').hidden = true; // (a new battle)
  const boss = mode === 'boss';
  const others = players.filter((p) => p.id !== you);
  $('wizOpp').hidden = boss;
  $('dragon').hidden = !boss;
  const meP = players.find((p) => p.id === you);
  for (const [id, side, p] of [['wizMe', 'me', meP], ['wizOpp', 'opp', others[0]]] as const) {
    const w = $(id);
    w.className = `wizard ${side}`;
    paintFlame(w, p?.flame);
    w.querySelector('.sprite')!.innerHTML = avatarSvg(p?.avatar ?? 'wizard', side, p?.staff);
  }
  // boss mode: every teammate stands next to you
  $('allies').replaceChildren(...(boss ? others : []).map((p) => {
    const w = h('div', 'wizard ally');
    w.dataset.pid = p.id;
    paintFlame(w, p.flame);
    const sprite = h('div', 'sprite');
    sprite.innerHTML = avatarSvg(p.avatar, 'ally', p.staff);
    w.append(h('div', 'aura'), sprite, h('div', 'ground'));
    return w;
  }));
  $('arena').dataset.party = String(boss ? players.length : 0);
  placeBossBar(boss);
  arenaForBattle(mode, players, you); // the 3D arena, when it's on
  $('dragon').className = 'dragon';
  $('dragon').querySelector('.sprite')!.innerHTML = dragonSvg();
  $('fire').hidden = true;
  $('breathWarn').hidden = true;
  $('typeArea').hidden = mode === 'writing';
  if (mode === 'writing') mountWriteArea('writeSlot'); else $('writeArea').hidden = true;
  $('meaningPrompt').hidden = true;
}

/**
 * 0.9.9.8: on a phone (upright or sideways) the dragon's HP sits in the top row with the party's — it floated over
 * the party or the answer box. On bigger screens it stays above the dragon's head.
 */
const SMALL = matchMedia('(max-width: 700px), (max-height: 500px)');
let bossShown = false;
function placeBossBar(boss = bossShown) {
  bossShown = boss;
  const bar = $('bossBar');
  const top = document.querySelector('#battle .arena-top')!;
  if (boss && SMALL.matches) { if (bar.parentElement !== top) top.append(bar); }
  else if (bar.parentElement !== $('dragon')) $('dragon').prepend(bar);
  top.classList.toggle('boss-top', boss && SMALL.matches);
}
SMALL.addEventListener('change', () => placeBossBar());

function floatText(target: HTMLElement, text: string, cls: string) {
  const arena = $('arena');
  const a = zrect(arena);
  const t = zrect(target);
  const f = h('div', 'float ' + cls, text);
  f.style.left = `${t.left - a.left + t.width / 2 - 20}px`;
  f.style.top = `${t.top - a.top}px`;
  arena.append(f);
  setTimeout(() => f.remove(), 1000);
}

/** The caster lunges, the kanji flies across as the spell, and the target flashes red on impact. */
export function castSpell(caster: Actor, target: Actor, kanji: string, damage: number, friendly: boolean, crit = false): Promise<void> {
  if (caster === 'me') gemGone();
  const a3 = arena3d();
  if (a3) return a3.cast(caster, target, kanji, { damage, crit });
  const c = actorEl(caster), t = actorEl(target);
  retrigger(c, 'casting', 450);
  const arena = $('arena');
  const a = zrect(arena);
  const cr = zrect(c);
  const tr = zrect(t);
  const spell = h('div', 'spell' + (friendly ? '' : ' foe'), kanji, { lang: 'ja' });
  arena.append(spell);
  const fromRight = cr.left > tr.left;
  const from = { x: fromRight ? cr.left - a.left - 10 : cr.right - a.left - 30, y: cr.top - a.top + cr.height * 0.15 };
  const to = { x: tr.left - a.left + tr.width / 2 - 20, y: tr.top - a.top + tr.height * 0.4 };
  const reduced = false; // (0.9.9.9.5: the full flight even with "reduce motion" on)
  // a slower, bigger flight with a glowing trail, so you can follow who hit whom
  const dur = reduced ? 400 : 850;
  const mid = { x: (from.x + to.x) / 2, y: Math.min(from.y, to.y) - 70 };
  const anim = spell.animate(
    [
      { transform: `translate(${from.x}px, ${from.y}px) scale(.5)`, opacity: 0.2 },
      { transform: `translate(${from.x + (mid.x - from.x) * 0.3}px, ${from.y + (mid.y - from.y) * 0.6}px) scale(1.35)`, opacity: 1, offset: 0.18 },
      { transform: `translate(${mid.x}px, ${mid.y}px) scale(1.6)`, opacity: 1, offset: 0.55 },
      { transform: `translate(${to.x}px, ${to.y}px) scale(2)`, opacity: 1 },
    ],
    { duration: dur, easing: 'cubic-bezier(.45,.05,.75,.4)' }, // gentle start, quickening into the hit
  );
  const trail = reduced ? 0 : window.setInterval(() => {
    const r = zrect(spell);
    const dot = h('div', 'spell-trail' + (friendly ? '' : ' foe'));
    dot.style.left = `${r.left - a.left + r.width / 2}px`;
    dot.style.top = `${r.top - a.top + r.height / 2}px`;
    arena.append(dot);
    setTimeout(() => dot.remove(), 500);
  }, 40);
  return new Promise((resolve) => {
    anim.onfinish = () => {
      clearInterval(trail);
      spell.remove();
      // impact: a burst ring on the target, a longer red flash and a small screen shake
      const burst = h('div', 'spell-burst' + (friendly ? '' : ' foe'));
      burst.style.left = `${to.x + 20}px`;
      burst.style.top = `${to.y + 20}px`;
      arena.append(burst);
      setTimeout(() => burst.remove(), 600);
      retrigger(t, 'hurt', 700);
      if (!reduced) retrigger(arena, 'shake', 350);
      floatText(t, `−${damage}`, friendly ? '' : 'taken');
      resolve();
    };
  });
}

/** 2D: your gem is gone after a cast or a miss, and grows back as soon as you write or type again. */
export const gemGone = () => $('wizMe').classList.add('gemless');
export const gemBack = () => $('wizMe').classList.remove('gemless');

export function fizzle(who: Actor) {
  if (who === 'me') gemGone();
  arena3d()?.fizzle(who);
  const w = actorEl(who);
  retrigger(w, 'fizzle', 650);
  const puff = h('div', 'puff');
  w.append(puff);
  setTimeout(() => puff.remove(), 1000);
}

export function clawHit(victim: Actor, damage: number) {
  const a3 = arena3d();
  if (a3) return a3.claw(victim, damage);
  retrigger($('dragon'), 'claw', 520);
  setTimeout(() => {
    const v = actorEl(victim);
    retrigger(v, 'hurt', 520);
    floatText(v, `−${damage}`, 'taken');
  }, 180);
}

/** 0.9.9.9.5.3: someone reached a 30× combo (Godlike): the arena trembles for everyone in it */
// (0.9.9.9.5.5: longer — 3.2 s — and gentler; the CSS shake lasts as long)
export function arenaTremble(seconds = 3.2) {
  arena3d()?.tremble(seconds);
  const b = document.getElementById('battle');
  if (b) { b.style.setProperty('--tremble', `${seconds}s`); b.classList.remove('trembling'); void b.offsetWidth; b.classList.add('trembling'); setTimeout(() => b.classList.remove('trembling'), seconds * 1000); }
  try { navigator.vibrate?.([70, 70, 90, 70, 110, 90, 90, 110, 70, 140, 50]); } catch { /* not allowed */ }
}

export function breathWarning(inMs: number) {
  const el = $('breathWarn');
  el.hidden = false;
  $('dragon').classList.add('inhale');
  arena3d()?.inhale(true);
  countdown('breath', inMs, (left) => (el.textContent = `The dragon inhales… ${Math.ceil(left / 1000)}`));
}

export function breathFire(damage: number, victims: Actor[], immune: Actor[] = []) {
  stopCountdown('breath');
  $('breathWarn').hidden = true;
  $('dragon').classList.remove('inhale');
  const a3 = arena3d();
  if (a3) { a3.breath(victims, damage); setTimeout(() => { for (const v of immune) a3.float(v, 'IMMUNE', '#ffd479'); }, 450); return; }
  const fire = $('fire');
  // the flame starts at the dragon's mouth (left edge of the sprite, ~37% down) and sweeps left
  const arena = zrect($('arena'));
  const d = zrect($('dragon'));
  const mouthX = d.left - arena.left + d.width * 0.08;
  const mouthY = d.top - arena.top + d.height * 0.37;
  const height = Math.max(160, arena.height * 0.7);
  fire.style.left = '0px';
  fire.style.width = `${Math.max(120, mouthX)}px`;
  fire.style.top = `${mouthY - height * 0.35}px`;
  fire.style.height = `${height}px`;
  fire.hidden = false;
  fire.style.animation = 'none';
  void fire.offsetWidth;
  fire.style.animation = '';
  setTimeout(() => (fire.hidden = true), 1100);
  setTimeout(() => {
    for (const v of victims) { retrigger(actorEl(v), 'hurt', 520); floatText(actorEl(v), `−${damage}`, 'taken'); }
    for (const v of immune) floatText(actorEl(v), 'IMMUNE', 'immune');
  }, 450);
}

export function knockOut(who: Actor) {
  const el = actorEl(who);
  if (el.classList.contains('ko')) return;
  arena3d()?.ko(who);
  el.classList.add('ko');
  el.classList.remove('onfire');
}

// ── battle: flow ─────────────────────────────────────────────────────────────
export function showBattle(mode: GameMode, players: PlayerView[], boss: BossView | null, you: PlayerId, countdownMs: number, battleMs: number, onTick: (n: number) => void) {
  clearStudy();
  setupArena(mode, players, you);
  renderFighters(players, you, boss);
  $('kanji').textContent = '';
  setFeedback(null);
  $('log').textContent = '';
  lockInput();
  $('battleClock').textContent = clockText(battleMs);
  show('battle');

  const cd = $('countdown');
  if (countdownMs > 0) {
    cd.hidden = false;
    let last = -1;
    countdown('cd', countdownMs, (left) => {
      const n = Math.ceil(left / 1000);
      if (n !== last) { last = n; onTick(n); }
      cd.textContent = left > 0 ? String(n) : '戦！';
      if (left <= 0) setTimeout(() => (cd.hidden = true), 500);
    });
  } else cd.hidden = true;
  setTimeout(() => countdown('battle', battleMs, (left) => ($('battleClock').textContent = clockText(left))), countdownMs);
}

/** Back from a pause: the same battle goes on — keep the arena (who is down, who is on fire), only restart the clock. */
export function resumeBattle(players: PlayerView[], boss: BossView | null, you: PlayerId, battleMs: number) {
  renderFighters(players, you, boss);
  $('battleClock').textContent = clockText(battleMs);
  countdown('battle', battleMs, (left) => ($('battleClock').textContent = clockText(left)));
}

let answerMode: AnswerMode = 'reading';
export const currentAnswerMode = () => answerMode;

export interface ChallengeView { kanji: string; answer: AnswerMode; timeLimitMs: number; meaning?: string; reading?: string; charCount?: number; flashMs?: number; from?: string; hint?: { kana: string; romaji: string; meaning: string } }

export function showChallenge(c: ChallengeView) {
  answerMode = c.answer;
  const k = $('kanji');
  k.classList.remove('cast', 'gone');
  k.textContent = c.kanji;
  // Rapid (0.9.9.4.4.2): whose spells the word comes from
  const wf = $('wordFrom');
  wf.hidden = !c.from;
  wf.textContent = c.from ? (c.from === 'you' ? '★ From your spells' : `From ${c.from}'s spells`) : '';
  wf.classList.toggle('mine', c.from === 'you');
  // 0.9.9.9.6: the tutorial — the answer, right under the word (a first-timer may not read any kana yet)
  const th = $('tutHint');
  th.hidden = !c.hint;
  if (c.hint) {
    const kana = h('b', 'th-kana', c.hint.kana, { lang: 'ja' });
    th.replaceChildren(h('small', 'th-lbl', tr('Type')), h('b', 'th-romaji', c.hint.romaji), h('span', 'th-or', tr('or')), kana, h('span', 'th-m', `— ${c.hint.meaning}`));
  }
  setFeedback(null);
  countdown('challenge', c.timeLimitMs, (_l, frac) => ($('challengeBar').style.width = `${frac * 100}%`));
  bigTimer('challengeRing', $('turnTimer'), c.timeLimitMs, c.timeLimitMs, Math.min(5000, c.timeLimitMs / 3));

  if (c.answer === 'writing') {
    // flash the kanji, then only the meaning remains
    const mp = $('meaningPrompt');
    mp.hidden = false;
    mp.replaceChildren(h('span', 'mp-reading', c.reading ?? '', { lang: 'ja' }), h('span', '', ` — ${c.meaning ?? ''}`), h('small', '', `write ${c.charCount} kanji`));
    // look at the kanji, then CAST!: it disappears and only then the pad / keyboard appear (main.ts)
    const ime = $<HTMLInputElement>('imeInput');
    ime.value = '';
    ime.disabled = true;
    $('writeArea').hidden = true;
    $('castGo').hidden = false;
    return;
  }
  const input = $<HTMLInputElement>('answer');
  input.disabled = false;
  setAnswerLocked(false);
  input.value = '';
  input.placeholder = c.answer === 'romaji' ? 'romaji, then Enter' : 'かな or romaji, then Enter';
  input.lang = c.answer === 'romaji' ? 'en' : 'ja';
  setInputHint(c.answer === 'romaji' ? 'Hiragana spell — answer in romaji' : '');
  $<HTMLButtonElement>('skip').disabled = false;
  input.focus();
}

export function setInputHint(text: string, warn = false) {
  const el = $('inputHint');
  el.textContent = text;
  el.classList.toggle('warn', warn);
}

/** Writing mode: show which character you're on. */
export function setCharSlots(total: number, _written: string[], active: boolean, shape = '') {
  const kana = shape.replace(/□/g, '');
  const hint = h('span', 'slots-hint', total > 1 ? `Write all ${total} kanji, left to right` : 'Write the kanji');
  // the kana of the word are written for you: □ず → write only 必
  const parts: Node[] = [hint];
  if (kana) {
    const sh = h('span', 'slots-shape', '', { lang: 'ja' });
    sh.title = 'the kana is written for you';
    for (const c of shape) sh.append(c === '□' ? h('i', 'slot-box') : h('b', '', c));
    parts.push(sh);
  }
  $('charSlots').replaceChildren(...parts);
  $('padNext').textContent = 'Cast ✦';
  for (const id of ['padUndo', 'padClear', 'padSkip', 'padNext']) $<HTMLButtonElement>(id).disabled = !active;
}

/** Writing mode: the kanji vanishes and the pad / Japanese keyboard appear. */
export function startWritingStep() {
  $('kanji').classList.add('gone');
  $('castGo').hidden = true;
  mountWriteArea('writeSlot');
  const ime = $<HTMLInputElement>('imeInput');
  ime.disabled = false;
}

/**
 * The answer box is locked between words but never disabled: disabling it closes a phone's keyboard,
 * which then pops up again for the next word (and the screen jumps). Locked, it ignores typing.
 */
export function setAnswerLocked(on: boolean) {
  const input = $<HTMLInputElement>('answer');
  input.classList.toggle('locked', on);
  if (on) input.dataset.locked = '1'; else delete input.dataset.locked;
}
export const answerLocked = () => { const i = $<HTMLInputElement>('answer'); return i.disabled || i.dataset.locked === '1'; };
$('answer').addEventListener('beforeinput', (e) => { if ($('answer').dataset.locked === '1') e.preventDefault(); });

export function lockInput() {
  stopCountdown('challenge');
  hideTimer('challengeRing', $('turnTimer'));
  $('castGo').hidden = true;
  setAnswerLocked(true);
  $<HTMLButtonElement>('skip').disabled = true;
  for (const id of ['padUndo', 'padClear', 'padSkip', 'padNext']) $<HTMLButtonElement>(id).disabled = true;
  $<HTMLInputElement>('imeInput').disabled = true;
}

/** The handwriting/IME panel is shared between the writing battle and Deck Duel. */
export function mountWriteArea(slotId: 'writeSlot' | 'dkWrite') {
  const area = $('writeArea');
  if (area.parentElement?.id !== slotId) $(slotId).append(area);
  area.hidden = false;
}
export const hideWriteArea = () => { $('writeArea').hidden = true; };

interface Feedback {
  correct: boolean; timedOut: boolean; skipped: boolean; kanji: string; reading: string; meaning: string;
  damage: number; combo: number; responseMs: number | null; recognized?: string; crit?: boolean; retry?: boolean; beaten?: boolean;
}
export function setFeedback(f: Feedback | null) {
  const el = $('feedback');
  if (!f) { el.replaceChildren(); el.className = 'feedback'; return; }
  el.className = 'feedback ' + (f.correct ? 'good' : 'bad');
  $('kanji').classList.remove('gone');
  $('meaningPrompt').hidden = true;
  // Always show what the word means — on hits too, so every cast is also a review.
  // 0.9.9.9.4: a miss also shows the reading in romaji, next to the kana (せんせい · sensei)
  const romaji = !f.correct && /[\u3040-\u30ff]/.test(f.reading) ? toRomaji(f.reading) : '';
  const word = (cls: string) =>
    append(h('span', cls), h('span', 'rk', f.kanji, { lang: 'ja' }), h('span', 'rr', f.reading, { lang: 'ja' }), ...(romaji ? [h('span', 'rro', romaji)] : []), h('span', '', f.meaning));
  if (f.correct) {
    $('kanji').classList.add('cast');
    const combo = f.combo >= 2 ? ` · ×${f.combo} combo` : '';
    const big = h('span', 'big' + (f.crit ? ' crit' : ''), f.crit ? `✦ CRIT! ${f.damage} damage` : `✓ CAST! ${f.damage} damage`);
    el.replaceChildren(big, word('mean'), h('span', 'sub2', `${secs(f.responseMs ?? 0)}${combo}`));
  } else {
    if (f.retry) { el.replaceChildren(h('span', 'big', '✗ Not quite — try again!')); return; }
    const title = f.beaten ? 'Opponent was faster!' : f.skipped ? '↷ Skipped' : f.timedOut ? '✗ Too slow!' : '✗ MISS!';
    const kids = [h('span', 'big', title), word('reveal')];
    if (f.recognized && !f.skipped && !f.timedOut) kids.push(h('span', 'sub2', `The pad read: ${f.recognized}`));
    el.replaceChildren(...kids);
    if (answerMode === 'writing' && !f.beaten) showWrongStrokes(el, f.kanji);
  }
}

/** A word's stroke order in a dialog (results, match history). */
export function openStrokeDialog(word: string, reading: string, meaning: string) {
  const d = $<HTMLDialogElement>('strokeDialog');
  $('sdWord').textContent = word;
  $('sdInfo').textContent = `${reading} — ${meaning}`;
  void showStrokeOrder($('sdBox'), word);
  if (!d.open) d.showModal();
}
$('sdClose').onclick = () => $<HTMLDialogElement>('strokeDialog').close();

/** Kanji Writing / Deck Duel: after a wrong or missed write, the correct strokes play quickly. */
export function showWrongStrokes(box: HTMLElement, word: string) {
  if (!/[\p{Script=Han}々]/u.test(word)) return;
  const div = h('div', 'fb-strokes');
  box.append(div);
  const strokes = [...word].length;
  void showStrokeOrder(div, word, { stepMs: Math.max(90, Math.min(220, 2200 / (strokes * 6))), caption: 'How to write it' });
}

// 0.9.9.9: the battle log is a coloured line that pops in (red: they hit, grey-violet: they fumbled, orange: the
// dragon) and fades after a few seconds — it was a faint grey line nobody noticed
let logFade = 0;
export function logLine(text: string, kanji?: string) {
  const el = $('log');
  const tone = /fumbled/.test(text) ? 'miss' : /claws|Fire breath/.test(text) ? 'boss' : /cast for/.test(text) ? 'hit' : 'info';
  const icon = { miss: '✗', boss: '🐉', hit: '⚡', info: '•' }[tone];
  const line = h('span', `log-line ${tone}`);
  line.append(h('span', 'log-ico', icon), h('span', 'log-t', text));
  if (kanji) line.append(h('span', 'k', kanji, { lang: 'ja' }));
  el.replaceChildren(line);
  clearTimeout(logFade);
  logFade = window.setTimeout(() => line.classList.add('fade'), 4500);
}

// ── results ─────────────────────────────────────────────────────────────────
const REASONS: Record<GameOverReason, string> = {
  ko: 'Knock-out', time: 'Time up', forfeit: 'A player left the battle',
  boss_slain: 'The Black Dragon has fallen', party_wiped: 'The party was burned to ash',
};

/** `history`: shown again from Match history (no rematch, a way back to the list instead). */
export function showResults(mode: GameMode, players: PlayerView[], you: PlayerId, winnerId: PlayerId | null, teamWon: boolean | null, reason: GameOverReason, stats: Record<PlayerId, PlayerStats>, opts: { history?: { at: number } } = {}) {
  stopCountdown();
  const outcome = mode === 'boss' ? (teamWon ? 'win' : 'loss') : winnerId === null ? 'draw' : winnerId === you ? 'win' : 'loss';
  $('resultMode').replaceChildren(modeBadge(mode), h('span', 'rm-name', MODE_LABEL[mode]), ...(opts.history ? [h('span', 'rm-date', dateTime(opts.history.at))] : []));
  const title = $('resultTitle');
  title.className = `result-title ${outcome}`;
  title.textContent = outcome === 'win' ? 'VICTORY' : outcome === 'loss' ? 'DEFEAT' : 'DRAW';
  if (mode === 'boss') $('resultReason').textContent = reason === 'time' && teamWon ? 'Time up — you held the dragon off!' : teamWon ? REASONS.boss_slain : reason === 'time' ? 'Time up — you held the dragon off!' : REASONS[reason];
  else $('resultReason').textContent = reason === 'time' ? 'Time up — most HP left wins' : REASONS[reason];
  $('resultActions').hidden = !!opts.history;
  $('historyBackRow').hidden = !opts.history;

  // 0.9.9.9.5: a result can lack your own numbers (a match from history saved under another id, a game you left
  // before it ended) — it crashed the screen ("reading 'damageDealt'"); an empty column instead
  const EMPTY: PlayerStats = { damageDealt: 0, attempts: 0, correct: 0, accuracy: 0, avgResponseMs: null, bestCombo: 0, words: [], struggled: [] };
  stats = Object.fromEntries(Object.entries(stats ?? {}).filter(([, v]) => !!v).map(([k, v]) => [k, { ...EMPTY, ...v, words: v.words ?? [], struggled: v.struggled ?? [] }]));
  const otherId = Object.keys(stats).find((id) => id !== you);
  const me = stats[you] ?? EMPTY;
  const other = otherId ? stats[otherId] : undefined;
  const otherName = players.find((p) => p.id === otherId)?.name ?? (mode === 'boss' ? 'Ally' : 'Opponent');
  const rows: Array<[string, (s: PlayerStats) => string]> = [
    [mode === 'boss' ? 'Damage to dragon' : 'Damage dealt', (s) => String(s.damageDealt)],
    ['Accuracy', (s) => (s.attempts ? `${Math.round(s.accuracy * 100)}% (${s.correct}/${s.attempts})` : '—')],
    ['Avg response', (s) => (s.avgResponseMs !== null ? secs(s.avgResponseMs) : '—')],
    ['Best combo', (s) => `×${s.bestCombo}`],
  ];
  const cmp = $('statCompare');
  const allies = Object.keys(stats).filter((id) => id !== you);
  cmp.classList.toggle('multi', allies.length > 1);
  if (allies.length > 1) {
    // a bigger boss party: one column per player, labels on the left
    cmp.style.gridTemplateColumns = `auto repeat(${allies.length + 1}, minmax(0, 1fr))`;
    const nameOf = (id: string) => players.find((p) => p.id === id)?.name ?? 'Ally';
    cmp.replaceChildren(h('div'), h('div', 'h me', 'You'), ...allies.map((id) => { const p = players.find((x) => x.id === id); const el = h('div', 'h', nameOf(id)); return p ? markProfile(el, p) : el; }));
    for (const [label, fmt] of rows) cmp.append(h('div', 'lbl', label), h('div', 'v', fmt(me)), ...allies.map((id) => h('div', 'v', fmt(stats[id]))));
  } else {
    cmp.style.gridTemplateColumns = '';
    const on = h('div', 'h r', other ? otherName : '');
    const op = players.find((p) => p.id === otherId);
    if (op) markProfile(on, op);
    cmp.replaceChildren(h('div', 'h me', 'You'), h('div'), on);
    for (const [label, fmt] of rows) cmp.append(h('div', 'v', fmt(me)), h('div', 'lbl', label), h('div', 'v r', other ? fmt(other) : ''));
  }

  const byKanji = new Map(me.words.map((w) => [w.kanji, w]));
  $('struggledBox').hidden = me.struggled.length === 0;
  $('missedSave').hidden = true; // filled in when the server reports which words it saved (decks.ts)
  $('struggled').replaceChildren(
    ...me.struggled.filter((k) => byKanji.has(k)).map((k) => {
      const w = byKanji.get(k)!;
      // a red card; once the server says which words it saved, decks.ts adds the tick (tap to keep it out of the deck)
      const so = h('button', 'so-btn', '筆', { type: 'button', title: 'Stroke order', 'aria-label': 'Stroke order', lang: 'ja' });
      so.onclick = (e) => { e.stopPropagation(); openStrokeDialog(w.kanji, w.reading, w.meaning); };
      const card = append(h('div', 'card miss-card', undefined, { tabindex: '0', 'data-kanji': w.kanji }), h('div', 'k', w.kanji, { lang: 'ja' }), h('div', 'r', w.reading, { lang: 'ja' }), h('div', 'm', w.meaning), so);
      card.onclick = () => openStrokeDialog(w.kanji, w.reading, w.meaning);
      return card;
    }),
  );

  $('wordRows').replaceChildren(
    ...me.words.map((w) => {
      const result =
        w.attempts === 0 ? h('span', 'na', 'not seen')
        : w.correct === w.attempts ? h('span', 'ok', `✓ ${w.correct}/${w.attempts}`)
        : h('span', 'no', `✗ ${w.correct}/${w.attempts}`);
      const k = h('td', 'k clickable', w.kanji, { lang: 'ja', title: 'Stroke order' });
      k.onclick = () => openStrokeDialog(w.kanji, w.reading, w.meaning);
      return append(h('tr'),
        k, h('td', 'rd', w.reading, { lang: 'ja' }), h('td', '', w.meaning),
        append(h('td'), result), h('td', '', w.avgMs !== null ? secs(w.avgMs) : '—'));
    }),
  );
  $('xpLine').hidden = true;
  $<HTMLButtonElement>('rematch').disabled = false;
  $('rematch').textContent = 'Rematch';
  $('rematchStatus').textContent = '';
  show('results');
}

export function showXp(gained: number, level: number, levelUp: boolean) {
  const el = $('xpLine');
  el.hidden = false;
  el.replaceChildren(h('span', '', gained > 0 ? `+${gained} XP` : 'No XP — the match was forfeited'));
  if (levelUp) el.append(h('span', 'lvup', `Level ${level}!`));
}

export function setRematchStatus(votes: PlayerId[], you: PlayerId, playerCount: number, minPlayers: number) {
  const youVoted = votes.includes(you);
  $<HTMLButtonElement>('rematch').disabled = youVoted;
  if (playerCount < minPlayers) {
    $('rematch').textContent = 'Back to lobby';
    $<HTMLButtonElement>('rematch').disabled = false;
    $('rematchStatus').textContent = 'Your opponent left.';
  } else if (votes.length === 0) $('rematchStatus').textContent = '';
  else $('rematchStatus').textContent = youVoted ? 'Waiting for the others to accept…' : 'Rematch requested!';
}

// ── modes, characters, other players' profiles, match history ────────────────
export const MODE_ICON: Record<GameMode, string> = { reading: '読', rapid: '速', writing: '書', boss: '竜', deck: '札' };

/** The mode's logo (the same kanji as on the mode cards). */
export function modeBadge(mode: GameMode): HTMLElement {
  return h('span', `mode-badge ${mode}`, MODE_ICON[mode], { lang: 'ja', title: MODE_LABEL[mode], 'aria-label': MODE_LABEL[mode] });
}

/** The character someone played: a Deck Duel hero, otherwise their level's wizard. */
export function characterEl(character: string, mode: GameMode, side: 'me' | 'opp' = 'me'): HTMLElement {
  const el = h('span', 'char-sprite');
  const heroes = ['goblin', 'knight', 'witch', 'wizard'];
  el.innerHTML = mode === 'deck' && heroes.includes(character)
    ? heroSvg(character as 'goblin', side)
    : avatarSvg((['goblin', 'kid', 'human', 'knight', 'witch', 'wizard'].includes(character) ? character : 'wizard') as Avatar, side);
  el.title = character[0].toUpperCase() + character.slice(1);
  return el;
}

/** Clicking this name shows the player's profile card. */
export function markProfile(el: HTMLElement, p: { id: string; bot?: string | null; name?: string }) {
  if (!p.bot) knowPlayer(p.id, p.name); // (0.9.9.9.6.3: "@name" in a chat now leads to them)
  el.dataset.profile = p.id;
  if (p.bot) el.dataset.bot = p.bot;
  if (p.name) el.dataset.name = p.name;
  el.classList.add('plink');
  el.setAttribute('role', 'button');
  el.tabIndex = 0;
  el.title = 'View profile';
  return el;
}

export const dateTime = (at: number) => new Date(at).toLocaleString(locale(), { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

/** A small floating card next to the clicked name. */
export interface ProfileActions { relation: 'self' | 'friend' | 'incoming' | 'outgoing' | 'none'; addFriend: () => Promise<void>; accept: () => Promise<void>; challenge: (mode: GameMode) => void; canChallenge: boolean; /** 0.9.9.9.5.2 */ remove?: () => Promise<void>;
  /** 0.9.9.9.5.5: their whole profile (look + achievements) */ view?: () => void; /** 0.9.9.9.6: Messages */ message?: () => void; /** 0.9.9.9.5.5: their lobby is open */ join?: { label: string; mode: string; go: () => void } }
export function showProfileCard(anchor: HTMLElement, p: PublicProfile | { bot: string; name: string } | 'loading' | 'missing', actions?: ProfileActions) {
  const pop = $('otherPop');
  const body: HTMLElement[] = [];
  if (p === 'loading') body.push(h('p', 'hint', 'Loading…'));
  else if (p === 'missing') body.push(h('p', 'hint', 'This player can no longer be viewed.'));
  else if ('bot' in p) {
    body.push(append(h('div', 'pp-head'), h('div', 'pp-pic', 'AI'), append(h('div'), h('div', 'pp-name', p.name), h('div', 'pp-level', p.bot === 'BEGINNER' ? 'AI player · beginner' : `AI player · knows ${p.bot}`))),
      h('p', 'hint', 'A computer opponent. It gets words right about as often as a learner of its level would.'));
  } else {
    const pic = h('div', 'pp-pic' + (p.pic ? ' has-pic' : '') + borderCls(p.border), p.pic ? '' : p.name.slice(0, 1).toUpperCase());
    const img = picEl(p.pic, 'pic fill');
    if (img) pic.append(img);
    body.push(
      append(h('div', 'pp-head'), pic, append(h('div'), h('div', 'pp-name', p.name), ...(p.login ? [h('div', 'pp-login', `@${p.login}`)] : []), h('div', 'pp-level', `Lv ${p.level}`), ...[badgeRowFn?.(p.badges)].filter((x): x is HTMLElement => !!x))),
      statsCard({ wins: p.wins, losses: p.losses, learned: p.learned }),
      streakCard(p.streak ?? 0, Math.max(p.bestStreak ?? 0, p.streak ?? 0)),
      h('p', 'hint pc-since', `Playing since ${new Date(p.since).toLocaleDateString(locale(), { year: 'numeric', month: 'short', day: 'numeric' })}`),
    );
    if (actions && actions.relation !== 'self') body.push(profileActions(p, actions));
  }
  pop.replaceChildren(...body);
  pop.hidden = false;
  const r = zrect(anchor);
  const w = Math.min(300, viewW() - 24);
  pop.style.width = `${w}px`;
  pop.style.left = `${Math.max(12, Math.min(viewW() - w - 12, r.left + r.width / 2 - w / 2))}px`;
  // (0.9.9.9.6.3: by the card's real height — it outgrew the old 240 px guess and ran off the bottom; above the
  // name when there's room there, otherwise as low as it fits)
  const below = r.bottom + 8, hgt = pop.offsetHeight, room = viewH() - 12;
  pop.style.top = `${below + hgt <= room ? below : r.top - 8 - hgt >= 12 ? r.top - 8 - hgt : Math.max(12, room - hgt)}px`;
}
export const hideProfileCard = () => { $('otherPop').hidden = true; };
/** keep the whole card on screen (it grows when the Challenge mode list opens) */
function clampProfileCard() {
  const pop = $('otherPop');
  const top = parseFloat(pop.style.top) || 0, hgt = pop.offsetHeight;
  if (top + hgt > viewH() - 12) pop.style.top = `${Math.max(12, viewH() - 12 - hgt)}px`;
}

const ACT_ICON: Record<string, string> = {
  view: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 20c1.2-4 4.3-6 8-6s6.8 2 8 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  message: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  challenge: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l9 9M20 4l-9 9M7 17l-3 3M17 17l3 3M5 13l6 6M19 13l-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  remove: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 20c1-3.6 3.6-5.5 7-5.5 1.3 0 2.5.3 3.5.8M16 15l5 5M21 15l-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
};
/** a button with a drawn icon and its words (the words in a span: they can change) */
function actBtn(cls: string, icon: keyof typeof ACT_ICON, text: string): HTMLButtonElement {
  const b = h('button', cls) as HTMLButtonElement;
  b.type = 'button';
  const i = h('i', 'pp-ic'); i.innerHTML = ACT_ICON[icon];
  b.append(i, h('span', '', tr(text)));
  return b;
}
/** Under someone's profile: Add friend (or accept their request), and Challenge a friend to a game. */
function profileActions(p: PublicProfile, a: ProfileActions): HTMLElement {
  const box = h('div', 'pp-actions');
  const msg = h('p', 'hint pp-msg');
  // 0.9.9.9.5.5: an open lobby — join it from here
  if (a.join) {
    const j = h('button', 'pill primary pp-join', `⇥ Join their lobby · ${a.join.label}`) as HTMLButtonElement;
    j.title = a.join.mode;
    j.onclick = () => { hideProfileCard(); a.join!.go(); };
    box.append(j);
  }
  // 0.9.9.9.6.2: the buttons in an even grid — two to a row, the same size, each with a drawn icon
  const grid = h('div', 'pp-grid');
  if (a.view) { const v = actBtn('pill pp-view', 'view', 'View profile'); v.onclick = () => a.view!(); grid.append(v); }
  if (a.message) { const m = actBtn('pill pp-msg-btn', 'message', 'Message'); m.onclick = () => a.message!(); grid.append(m); }
  box.append(grid);
  if (a.relation === 'none' || a.relation === 'incoming') {
    const b = h('button', 'pill primary', a.relation === 'incoming' ? '✓ Accept friend request' : '+ Add friend') as HTMLButtonElement;
    b.onclick = async () => {
      b.disabled = true;
      try { await (a.relation === 'incoming' ? a.accept() : a.addFriend()); b.textContent = a.relation === 'incoming' ? '✓ Friends' : '✓ Request sent'; }
      catch (e) { msg.textContent = (e as Error).message; b.disabled = false; }
    };
    box.append(b);
  } else if (a.relation === 'outgoing') box.append(h('button', 'pill', '✓ Request sent', { disabled: '' }));
  if (a.relation === 'friend') {
    const c = actBtn('pill primary challenge-btn', 'challenge', 'Challenge');
    const modes = h('div', 'pp-modes');
    modes.hidden = true;
    for (const m of ['reading', 'writing', 'rapid', 'boss', 'deck'] as GameMode[]) {
      const mb = h('button', 'pill pp-mode', MODE_LABEL[m]) as HTMLButtonElement;
      mb.prepend(modeBadge(m));
      mb.onclick = () => { a.challenge(m); hideProfileCard(); };
      modes.append(mb);
    }
    c.disabled = !a.canChallenge;
    if (!a.canChallenge) c.title = 'Finish your game first';
    c.onclick = () => { modes.hidden = !modes.hidden; clampProfileCard(); };
    // 0.9.9.9.5.2: remove a friend — a second tap confirms (no unfriending by a stray tap)
    const rm = actBtn('pill danger remove-friend-btn', 'remove', 'Remove friend');
    const rmText = rm.querySelector('span')!;
    let sure = 0;
    rm.onclick = async () => {
      if (!a.remove) return;
      if (!sure) {
        rmText.textContent = tr(`Remove ${p.name}?`);
        rm.classList.add('sure');
        sure = window.setTimeout(() => { sure = 0; rmText.textContent = tr('Remove friend'); rm.classList.remove('sure'); }, 3500);
        return;
      }
      clearTimeout(sure);
      rm.disabled = true;
      try { await a.remove(); hideProfileCard(); toast(tr(`${p.name} is no longer your friend`)); }
      catch (e) { msg.textContent = (e as Error).message; rm.disabled = false; }
    };
    grid.append(c, rm);
    box.append(modes);
  }
  box.append(msg);
  return box;
}

/** 0.9.9.9.5.5: "Are you sure?" — resolves true for yes (Esc / the backdrop / "Stay" is no) */
export function confirmBox(title: string, text: string, yes = 'Leave', no = 'Stay'): Promise<boolean> {
  const d = $<HTMLDialogElement>('confirmDialog');
  $('confirmTitle').textContent = tr(title);
  $('confirmText').textContent = tr(text);
  $('confirmYes').textContent = tr(yes);
  $('confirmNo').textContent = tr(no);
  return new Promise((done) => {
    let answered = false;
    const finish = (v: boolean) => { if (answered) return; answered = true; d.removeEventListener('close', onClose); if (d.open) d.close(); done(v); };
    const onClose = () => finish(false);
    $('confirmYes').onclick = () => finish(true);
    $('confirmNo').onclick = () => finish(false);
    d.onclick = (e) => { if (e.target === d) finish(false); };
    d.addEventListener('close', onClose);
    if (!d.open) d.showModal();
    $('confirmNo').focus();
  });
}

/** Match history: one row per game, newest first. */
export function showHistory(list: MatchSummary[] | null, onOpen: (id: string) => void) {
  const box = $('historyList');
  if (!list) box.replaceChildren(h('p', 'hint center', 'Loading…'));
  else if (!list.length) box.replaceChildren(h('p', 'hint center', 'No matches yet — your finished games will show up here.'));
  else box.replaceChildren(...list.map((m) => {
    const row = h('button', `hist-row ${m.outcome}`);
    const vs = h('span', 'hist-vs');
    m.opponents.forEach((o, i) => {
      if (i) vs.append(', ');
      vs.append(markProfile(h('span', '', o.name), { id: o.id, bot: o.bot ? (o.name.match(/AI (N\d)/)?.[1] ?? 'AI') : null, name: o.name }));
    });
    row.append(
      characterEl(m.character, m.mode),
      append(h('span', 'hist-mode'), modeBadge(m.mode), append(h('span', 'hist-mode-text'), h('span', 'hist-mode-name', MODE_LABEL[m.mode]), m.opponents.length ? append(h('span', 'hist-vs-line'), 'vs ', vs) : h('span', 'hist-vs-line', 'solo'))),
      h('span', 'hist-result', m.outcome === 'win' ? 'VICTORY' : m.outcome === 'loss' ? 'DEFEAT' : 'DRAW'),
      h('span', 'hist-date', dateTime(m.at)),
    );
    row.onclick = (e) => { if (!(e.target as HTMLElement).closest('[data-profile]')) onOpen(m.id); };
    return row;
  }));
  show('history');
}

/** Colour an element's combo / Omnipotence flames (sets --f0..--f3 from the flame's colour). */
export function paintFlame(el: HTMLElement, flame: string | null | undefined) {
  el.dataset.flame = flame ?? 'blue';
  flameShades(flame).forEach((c, i) => el.style.setProperty(`--f${i}`, c));
}

// 0.9.9.4.4.7: on a phone the tab rows scroll sideways — the tab you pick slides fully into view
document.addEventListener('click', (e) => {
  const tab = (e.target as Element | null)?.closest?.('.cust-tabs > button');
  if (tab) tab.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
});


// (screenshots in CI: kb:debugui=1 lets a scenario show the combo counter at any count)
try {
  if (localStorage.getItem('kb:debugui') === '1') (window as unknown as { __kwCombo: (n: number, flame?: string) => void }).__kwCombo = (n, flame = '#ff7a2a') => comboHud(n, flame);
} catch { /* no storage */ }
