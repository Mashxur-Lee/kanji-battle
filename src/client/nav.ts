// 0.9.9.9.9.3: one way round the game, always in the same place — a sidebar on computers (icons and names; icons only
// on a narrower window), a tab bar along the bottom on phones. It shows on the pages you browse (studying, progress,
// customize, the queue…), not on the menu (it is the hub already), in a game, or in a lesson — like the big learning
// apps, so a page is never a dead end with only "← Menu" on it.
// A tab leaves the current page the way that page's own back button does (a search in the queue is cancelled, the
// Customize preview stops), then opens the page asked for with the menu's own button.
import * as ui from './ui';
import { tr } from './i18n';

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
  settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>',
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

/** leave the page as its own back button would (a "← Menu" kind: it cleans up after itself) */
function leaveCurrent() {
  const s = ui.currentScreen();
  if (!s || s === 'menu') return;
  const back = [...document.querySelectorAll<HTMLElement>(`#${s} > .back, #${s} [id$="Back"]`)].find((b) => b.getClientRects().length && /menu|меню/i.test(b.textContent ?? ''));
  if (back) back.click(); else ui.show('menu');
}

export function initNav() {
  const nav = document.createElement('nav');
  nav.id = 'appNav'; nav.className = 'app-nav'; nav.hidden = true;
  nav.setAttribute('aria-label', tr('Main menu'));
  for (const it of ITEMS) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = `an-item${it.phone ? ' an-phone' : ''}`; b.dataset.nav = it.id;
    b.title = tr(it.label); b.setAttribute('aria-label', tr(it.label));
    b.innerHTML = `${svg(it.icon)}<span>${tr(it.label)}</span>`;
    b.onclick = () => {
      if (it.id === 'settings') { document.getElementById('menuSettingsBtn')?.click(); return; }
      const s = ui.currentScreen() ?? '';
      if (it.screens.includes(s) && it.id !== 'play') return; // (already here)
      leaveCurrent();
      if (it.btn) document.getElementById(it.btn)?.click();
    };
    nav.append(b);
  }
  document.body.append(nav);
  // "← Menu" buttons: the nav's Home does that now (where the nav shows)
  for (const b of document.querySelectorAll<HTMLElement>('.screen > .back')) if (/menu|меню/i.test(b.textContent ?? '')) b.classList.add('to-menu');
  ui.onScreen((s) => {
    const on = NAV_SCREENS.has(s);
    nav.hidden = !on;
    document.body.classList.toggle('has-nav', on);
    for (const b of nav.querySelectorAll<HTMLElement>('.an-item')) b.classList.toggle('on', ITEMS.find((x) => x.id === b.dataset.nav)!.screens.includes(s));
  });
}
