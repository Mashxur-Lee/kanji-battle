// 0.9.9.9.9.3: one way round the game, always in the same place — a sidebar on computers (icons and names; icons only
// on a narrower window), a tab bar along the bottom on phones. It shows on the pages you browse (studying, progress,
// customize, the queue…), not on the menu (it is the hub already), in a game, or in a lesson — like the big learning
// apps, so a page is never a dead end with only "← Menu" on it.
// A tab leaves the current page the way that page's own back button does (a search in the queue is cancelled, the
// Customize preview stops), then opens the page asked for with the menu's own button.
import * as ui from './ui';
import { tr } from './i18n';
import { applyUiZoom } from './zoom';

const ICON: Record<string, string> = {
  home: '<path d="M3.5 11 12 4l8.5 7"/><path d="M6 9.5V20h4.5v-5.5h3V20H18V9.5"/>',
  play: '<path d="M5 19 19 5M9 5H5v4M15 19h4v-4M5 5l5 5M19 19l-5-5"/>',
  study: '<path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5V19c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z"/><path d="M12 6v13.5"/>',
  daily: '<rect x="4" y="5.5" width="16" height="14.5" rx="3"/><path d="M8 3.5v4M16 3.5v4M4 10h16"/><path d="m9.5 15 2 2 3.5-4"/>',
  quiz: '<circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.4c-.7.3-1 .9-1 1.6v.4"/><circle cx="12" cy="16.8" r=".6" fill="currentColor"/>',
  kana: '<path d="M6 8.5h9.5M10.5 5c-.4 5-1.6 10.6-4.3 13.6M15.4 11.3c-2.6-.6-6.7 1.2-7.4 4.5-.5 2.6 2.5 3.6 4.9 1.6 2-1.7 2.8-4.6 2.5-6.1 2.1.2 3.6 1.8 3.4 3.9-.2 1.7-1.6 3-3.4 3.4"/>',
  progress: '<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
  customize: '<path d="M12 3.5 8.5 11h7z"/><path d="M7 11h10l1.5 9.5h-13z"/>',
  history: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  messages: '<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
  more: '<circle cx="5.5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18.5" cy="12" r="1.6"/>',
  // 0.9.9.9.9.5: a gear (the rays read as a sun) — the same one as the menu's Settings
  settings: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M19.78 10.13 L22.51 10.59 L22.51 13.41 L19.78 13.87 L18.82 16.18 L20.43 18.43 L18.43 20.43 L16.18 18.82 L13.87 19.78 L13.41 22.51 L10.59 22.51 L10.13 19.78 L7.82 18.82 L5.57 20.43 L3.57 18.43 L5.18 16.18 L4.22 13.87 L1.49 13.41 L1.49 10.59 L4.22 10.13 L5.18 7.82 L3.57 5.57 L5.57 3.57 L7.82 5.18 L10.13 4.22 L10.59 1.49 L13.41 1.49 L13.87 4.22 L16.18 5.18 L18.43 3.57 L20.43 5.57 L18.82 7.82ZM15.60 12a3.6 3.6 0 1 0-7.2 0a3.6 3.6 0 1 0 7.2 0Z"/>',
  back: '<path d="M14.5 5.5 8 12l6.5 6.5"/>',
};
interface Item { id: string; label: string; icon: keyof typeof ICON; btn?: string; screens: string[]; phone?: boolean }
const ITEMS: Item[] = [
  { id: 'home', label: 'Home', icon: 'home', screens: ['menu'], phone: true },
  { id: 'play', label: 'Battles', icon: 'play', btn: 'queueBtn', screens: ['queue', 'private', 'modes'], phone: true },
  { id: 'study', label: 'Study', icon: 'study', btn: 'studyBtn', screens: ['study', 'dict'], phone: true },
  { id: 'daily', label: 'Daily', icon: 'daily', btn: 'dailyBtn', screens: ['daily'], phone: true },
  { id: 'quizzes', label: 'Quizzes', icon: 'quiz', btn: 'quizzesBtn', screens: ['quizzes'] },
  { id: 'kana', label: 'Kana', icon: 'kana', btn: 'kanaBtn', screens: ['kana'] },
  { id: 'progress', label: 'Progress', icon: 'progress', btn: 'progressBtn', screens: ['progress', 'friends'], phone: true },
  { id: 'customize', label: 'Customize', icon: 'customize', btn: 'customizeBtn', screens: ['customize'] },
  { id: 'history', label: 'History', icon: 'history', btn: 'historyBtn', screens: ['history'] },
  { id: 'messages', label: 'Messages', icon: 'messages', btn: 'inboxBtn', screens: ['inbox'] },
  { id: 'settings', label: 'Settings', icon: 'settings', btn: 'menuSettingsBtn', screens: [] },
];
/** the pages that show it */
export const NAV_SCREENS = new Set(['queue', 'private', 'modes', 'kana', 'progress', 'daily', 'friends', 'history', 'dict', 'study', 'inbox', 'quizzes', 'customize', 'admin']);

const svg = (k: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;

let jumpT = 0;
/** 0.9.9.9.9.5: on the way from one page to another (through the menu, for a moment) */
let jumping = false;
/** where you came from, page by page (for Back) — the menu passed through on the way is not a step */
const trail: string[] = [];
const endJump = () => { jumping = false; document.body.classList.remove('nav-jump'); };
/**
 * leave the page as its own back button would (a "← Menu" kind: it cleans up after itself). `onward`: another page
 * opens next — the menu stays hidden in between (0.9.9.9.9.5: Home is the menu itself, shown at once: it waited 1.5 s)
 */
function leaveCurrent(onward = false) {
  const s = ui.currentScreen();
  if (!s || s === 'menu') return;
  if (onward) {
    jumping = true;
    document.body.classList.add('nav-jump');
    // (and if the next page never came — it said no — the menu is shown properly after all)
    clearTimeout(jumpT); jumpT = window.setTimeout(() => { const was = jumping; endJump(); if (was && ui.currentScreen() === 'menu') ui.show('menu'); }, 1500);
  }
  // (0.9.9.9.9.5: hidden or not — on these pages "← Menu" is hidden behind the navigation, and was skipped, so its
  // clean-up (a search in the queue cancelled, the Customize preview stopped) didn't happen)
  const back = [...document.querySelectorAll<HTMLElement>(`#${s} > .back, #${s} [id$="Back"]`)].find((b) => !b.hidden && !(b as HTMLButtonElement).disabled && /menu|меню/i.test(b.textContent ?? ''));
  if (back) back.click(); else ui.show('menu');
}

export function initNav() {
  const nav = document.createElement('nav');
  nav.id = 'appNav'; nav.className = 'app-nav'; nav.hidden = true;
  nav.setAttribute('aria-label', tr('Main menu'));
  // 0.9.9.9.9.5: Back — a page's own step back (Choose a mode → Private game), or the page you came from, or Home
  const backBtn = document.createElement('button');
  backBtn.type = 'button'; backBtn.className = 'an-back'; backBtn.title = tr('Back'); backBtn.setAttribute('aria-label', tr('Back'));
  backBtn.innerHTML = `${svg('back')}<span>${tr('Back')}</span>`;
  backBtn.onclick = () => {
    const s = ui.currentScreen() ?? '';
    const own = [...document.querySelectorAll<HTMLElement>(`#${s} > .back:not(.to-menu)`)].find((b) => !b.hidden && !(b as HTMLButtonElement).disabled);
    if (own) { own.click(); return; }
    // the page before this one (0.9.9.9.9.5: it went Home — the menu passed through on every jump wiped the trail)
    trail.pop();
    const prev = trail.pop();
    const it = prev ? ITEMS.find((x) => x.id !== 'home' && x.screens.includes(prev)) : undefined;
    if (it?.btn) { leaveCurrent(true); document.getElementById(it.btn)?.click(); return; }
    trail.length = 0;
    leaveCurrent();
  };
  nav.append(backBtn);
  for (const it of ITEMS) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = `an-item${it.phone ? ' an-phone' : ''}`; b.dataset.nav = it.id;
    b.title = tr(it.label); b.setAttribute('aria-label', tr(it.label));
    b.innerHTML = `${svg(it.icon)}<span>${tr(it.label)}</span>`;
    b.onclick = () => {
      if (it.id === 'settings') { document.getElementById('menuSettingsBtn')?.click(); return; }
      const s = ui.currentScreen() ?? '';
      if (it.screens.includes(s) && it.id !== 'play') return; // (already here)
      leaveCurrent(!!it.btn);
      if (it.btn) document.getElementById(it.btn)?.click();
    };
    nav.append(b);
  }
  // 0.9.9.9.9.5: phones — five tabs fit; More opens the rest (Quizzes, Kana, Customize, History, Messages, Settings)
  const more = document.createElement('button');
  more.type = 'button'; more.className = 'an-item an-more'; more.dataset.nav = 'more';
  more.title = tr('More'); more.setAttribute('aria-label', tr('More')); more.setAttribute('aria-expanded', 'false');
  more.innerHTML = `${svg('more')}<span>${tr('More')}</span>`;
  const sheet = document.createElement('div');
  sheet.className = 'an-sheet'; sheet.hidden = true;
  for (const b of nav.querySelectorAll<HTMLButtonElement>('.an-item:not(.an-phone)')) {
    const c = b.cloneNode(true) as HTMLButtonElement;
    c.classList.add('an-in-sheet');
    c.onclick = () => { setMore(false); b.click(); };
    sheet.append(c);
  }
  const setMore = (on: boolean) => { sheet.hidden = !on; more.setAttribute('aria-expanded', String(on)); more.classList.toggle('open', on); document.body.classList.toggle('nav-more', on); };
  more.onclick = (e) => { e.stopPropagation(); setMore(sheet.hidden); };
  addEventListener('click', (e) => { if (!sheet.hidden && !sheet.contains(e.target as Node)) setMore(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) { setMore(false); more.focus(); } }); // (the keyboard too)
  nav.append(more, sheet);
  document.body.append(nav);
  // "← Menu" buttons: the nav's Home does that now (where the nav shows)
  for (const b of document.querySelectorAll<HTMLElement>('.screen > .back')) if (/menu|меню/i.test(b.textContent ?? '')) b.classList.add('to-menu');
  ui.onScreen((s) => {
    if (s === 'menu' && jumping) return; // (just passing through: no zoom change, no step in the trail)
    if (s !== 'menu') endJump();
    const on = NAV_SCREENS.has(s);
    nav.hidden = !on;
    document.body.classList.toggle('has-nav', on);
    // (0.9.9.9.9.5: the pages — and the private room — are drawn at the size chosen in Settings, not smaller)
    const page = on || s === 'lobby';
    if (document.body.classList.contains('page-zoom') !== page) { document.body.classList.toggle('page-zoom', page); applyUiZoom(); }
    setMore(false);
    if (s === 'menu') trail.length = 0; else if (on && trail[trail.length - 1] !== s) { trail.push(s); if (trail.length > 20) trail.shift(); }
    for (const b of nav.querySelectorAll<HTMLElement>('.an-item:not(.an-more)')) b.classList.toggle('on', ITEMS.find((x) => x.id === b.dataset.nav)!.screens.includes(s));
    // (More lights up when the page is one of its own)
    more.classList.toggle('on', ITEMS.some((x) => !x.phone && x.screens.includes(s)));
  });
}
