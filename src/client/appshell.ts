// The game as an app (0.9.9.4): the service worker (installable, opens without internet), the "Get the app"
// dialog (install from the browser, the Windows app, the Android app), and offline mode in the menu —
// online games say they need internet instead of trying.
import * as offline from './offline';
import { getToken, OFFLINE_TEXT } from './api';
import * as ui from './ui';

const RELEASES = 'https://github.com/Mashxur-Lee/kanji-battle/releases/latest/download';
export const DOWNLOADS = { windows: `${RELEASES}/KanjiWizards-Setup.exe`, android: '/download/KanjiWizards.apk' }; // the APK from our own address (0.9.9.4.1)

/** Inside the Windows or Android app, or installed from the browser. */
export const inApp = () => /KanjiWizards(Desktop|Android)/.test(navigator.userAgent)
  || matchMedia('(display-mode: standalone)').matches || (navigator as { standalone?: boolean }).standalone === true;
const isIos = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

interface InstallPrompt extends Event { prompt(): Promise<void>; userChoice: Promise<{ outcome: string }> }
let installPrompt: InstallPrompt | null = null;

// things that need the server: online games, rooms, friends
const ONLINE_ONLY = '#queueBtn, #privateBtn, #create, #join, #railAdd, #railReq, #railList, #railFab, #friendAdd, #friendsRefresh, #picInput, #picRemove';

export function initApp(hooks: { canReload: () => boolean; backOnline: () => void; netStatus: () => void }) {
  offline.init(getToken);
  offline.onChange((off) => {
    document.body.classList.toggle('offline', off);
    hooks.netStatus();
    if (off) ui.toast('You\'re offline. Study spells, the quiz, reading passages, the daily challenge and Customize still work — your progress syncs when you\'re back online.', 6000);
    else { ui.toast('Back online — your progress is synced.', 3500); hooks.backOnline(); }
  });
  // offline: online-only buttons explain themselves instead of doing nothing
  document.addEventListener('click', (e) => {
    if (!offline.isOffline() && navigator.onLine) return;
    const t = (e.target as Element | null)?.closest?.(ONLINE_ONLY);
    if (!t) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    ui.toast(OFFLINE_TEXT, 3500);
  }, true);

  // ── service worker: install / open offline / updates ──
  const secure = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if ('serviceWorker' in navigator && secure && !/[?&]nosw\b/.test(location.search)) {
    const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register('/sw.js').catch((e) => console.warn('service worker', e));
    // a new version took over: reload into it as soon as that won't interrupt anything
    let waiting = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController || waiting) return;
      waiting = true;
      const tryReload = () => { if (hooks.canReload()) location.reload(); else setTimeout(tryReload, 3000); };
      tryReload();
    });
  }

  // ── "Get the app" ──
  addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installPrompt = e as InstallPrompt; renderAppDialog(); });
  addEventListener('appinstalled', () => { installPrompt = null; renderAppDialog(); ui.toast('Kanji Wizards is installed — find it with your apps.'); });
  const btn = ui.$('appBtn');
  btn.hidden = inApp();
  btn.onclick = () => { renderAppDialog(); ui.$<HTMLDialogElement>('appDialog').showModal(); };
  ui.$('appInstall').onclick = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    await installPrompt.userChoice.catch(() => null);
    installPrompt = null;
    renderAppDialog();
  };
  // the Android app's back button: close a dialog, or go back from a screen; at the menu it leaves the app
  (window as { kwBack?: () => boolean }).kwBack = () => {
    const open = [...document.querySelectorAll<HTMLDialogElement>('dialog[open]')].pop();
    if (open) { open.close(); return true; }
    const scr = ui.currentScreen();
    if (!scr || scr === 'menu' || scr === 'auth') return false;
    const back = document.querySelector<HTMLElement>(`#${scr} .back, #${scr} [id$="Back"]`);
    if (back && back.offsetParent !== null) back.click();
    return true; // in a game: stay (no leaving by accident)
  };
  ui.$<HTMLAnchorElement>('appWin').href = DOWNLOADS.windows;
  ui.$<HTMLAnchorElement>('appApk').href = DOWNLOADS.android;
}

function renderAppDialog() {
  ui.$('appInstall').hidden = !installPrompt;
  ui.$('appIos').hidden = !(isIos() && !inApp());
  ui.$('appManual').hidden = !!installPrompt || isIos() || inApp();
}
