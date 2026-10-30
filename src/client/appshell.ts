// The game as an app (0.9.9.4): the service worker (installable, opens without internet), the "Get the app"
// dialog (install from the browser, the Windows app, the Android app), and offline mode in the menu —
// online games say they need internet instead of trying.
import * as offline from './offline';
import { getToken, OFFLINE_TEXT } from './api';
import * as ui from './ui';
import { VERSION } from '../shared/version';

const RELEASES = 'https://github.com/Mashxur-Lee/kanji-battle/releases/latest/download';
export const DOWNLOADS = { windows: `${RELEASES}/KanjiWizards-Setup.exe`, android: '/download/KanjiWizards.apk' }; // the APK from our own address (0.9.9.4.1)

/** Inside the Windows or Android app, or installed from the browser. */
export const inApp = () => /KanjiWizards(Desktop|Android)/.test(navigator.userAgent)
  || matchMedia('(display-mode: standalone)').matches || (navigator as { standalone?: boolean }).standalone === true;
const isIos = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

interface InstallPrompt extends Event { prompt(): Promise<void>; userChoice: Promise<{ outcome: string }> }
let installPrompt: InstallPrompt | null = null;

// things that need the server: online games, rooms, friends
const ONLINE_ONLY = '#adminBtn, #queueBtn, #privateBtn, #create, #join, #railAdd, #railReq, #railList, #railFab, #friendAdd, #friendsRefresh, #picInput, #picRemove';

export function initApp(hooks: { canReload: () => boolean; backOnline: () => void; netStatus: () => void }) {
  offline.init(getToken, () => ['review', 'quiz', 'daily'].includes(ui.currentScreen() ?? ''));
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
  void offerUpdate(btn);
  ui.$('appInstall').onclick = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    await installPrompt.userChoice.catch(() => null);
    installPrompt = null;
    renderAppDialog();
  };
  initBack();
  ui.$<HTMLAnchorElement>('appWin').href = DOWNLOADS.windows;
  ui.$<HTMLAnchorElement>('appApk').href = DOWNLOADS.android;
}

function renderAppDialog() {
  ui.$('appInstall').hidden = !installPrompt;
  ui.$('appIos').hidden = !(isIos() && !inApp());
  ui.$('appManual').hidden = !!installPrompt || isIos() || inApp();
}

// ── the phone's back button (0.9.9.4.2) ─────────────────────────────────────
// The game is one page, so "back" had nothing to go back to. Now, whenever a dialog is open or you're on any
// screen but the menu, one extra history entry is kept; the back button uses it up: it closes the dialog or
// presses the screen's own back button. At the menu, back leaves the app as usual. Works in the Android
// app, in the installed web app and in the browser.
function goBack(): boolean {
  const open = [...document.querySelectorAll<HTMLDialogElement>('dialog[open]')].pop();
  if (open) { open.close(); return true; }
  const scr = ui.currentScreen();
  if (!scr || scr === 'menu' || scr === 'auth') return false;
  const back = [...document.querySelectorAll<HTMLElement>(`#${scr} .back, #${scr} [id$="Back"], #${scr} [id$="back"]`)]
    .find((b) => b.getClientRects().length > 0 && !(b as HTMLButtonElement).disabled);
  back?.click();
  return true; // in a game: stay (no leaving by accident)
}
const away = () => !!document.querySelector('dialog[open]') || !['menu', 'auth', undefined].includes(ui.currentScreen());
let guarded = false, consuming = false;
function syncGuard() {
  if (away() && !guarded) { history.pushState({ kwGuard: 1 }, ''); guarded = true; }
  // back at the menu by the game's own buttons: take the extra entry away again, quietly
  else if (!away() && guarded) { guarded = false; consuming = true; history.back(); }
}
function initBack() {
  addEventListener('popstate', () => {
    if (consuming) { consuming = false; return; }
    if (!guarded) return; // not ours
    guarded = false;
    goBack();
    setTimeout(syncGuard, 0);
  });
  // screens and dialogs opening
  const mo = new MutationObserver(() => syncGuard());
  for (const el of document.querySelectorAll('.screen, dialog')) mo.observe(el, { attributes: true, attributeFilter: ['hidden', 'open'] });
  // the Android app (0.9.9.4) asked the page directly; keep answering for APKs from before this patch
  (window as { kwBack?: () => boolean }).kwBack = () => { if (guarded) { history.back(); return true; } return goBack(); };
}

// ── "Update the app" (0.9.9.6.1) ────────────────────────────────────────────
// In an older Android app, "Get the app" turns into "Update the app": one tap downloads the newest APK and opens
// Android's installer on it (apps from 0.9.9.6.1 on). Apps from before that can't install by themselves yet, so
// the button downloads it in the browser once — open it from there; after that, updates happen in the app.
interface KWAndroidUpdate { version?: () => string; updateApp?: (url: string) => void; updateState?: () => string; installUpdate?: () => void }
const RELEASE_API = 'https://api.github.com/repos/Mashxur-Lee/kanji-battle/releases/latest';

/** -1, 0 or 1, comparing dotted versions part by part ("0.9.9.6" < "0.9.9.6.1"). */
export function cmpVersion(a: string, b: string): number {
  const pa = a.replace(/^v/, '').split('.').map((x) => parseInt(x, 10) || 0), pb = b.replace(/^v/, '').split('.').map((x) => parseInt(x, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) { const d = (pa[i] ?? 0) - (pb[i] ?? 0); if (d) return d < 0 ? -1 : 1; }
  return 0;
}

async function latestRelease(): Promise<string> {
  try {
    const r = await fetch(RELEASE_API, { headers: { Accept: 'application/vnd.github+json' } });
    if (r.ok) { const tag = String((await r.json() as { tag_name?: string }).tag_name ?? ''); if (/^v?\d+(\.\d+)+$/.test(tag)) return tag.replace(/^v/, ''); }
  } catch { /* offline or rate-limited: the website's own version */ }
  return VERSION;
}

async function offerUpdate(btn: HTMLElement) {
  const kw = (window as { KWAndroid?: KWAndroidUpdate }).KWAndroid;
  const mine = kw?.version?.();
  if (!kw || !mine) return;
  const latest = await latestRelease();
  if (cmpVersion(mine, latest) >= 0) return;
  btn.hidden = false;
  btn.classList.add('update');
  btn.textContent = 'Update the app';
  btn.title = `${mine} → ${latest}`;
  let timer = 0;
  const watch = () => {
    clearInterval(timer);
    timer = window.setInterval(() => {
      const st = kw.updateState?.() ?? 'idle';
      if (st.startsWith('downloading')) btn.textContent = `Downloading… ${st.split(':')[1] ?? 0}%`;
      else if (st === 'done') { clearInterval(timer); btn.textContent = 'Install the update'; }
      else if (st === 'failed') { clearInterval(timer); btn.textContent = 'Update the app'; ui.toast('The download failed — check your internet and try again.'); }
    }, 600);
  };
  btn.onclick = () => {
    if (kw.updateApp) {
      if (kw.updateState?.() === 'done') { kw.installUpdate?.(); return; }
      kw.updateApp(`${location.origin}/download/KanjiWizards.apk?v=${encodeURIComponent(latest)}`);
      btn.textContent = 'Downloading… 0%';
      ui.toast('Downloading the update — Android will ask you to install it. (The first time, allow installing from Kanji Wizards.)', 6000);
      watch();
    } else {
      // an app from before 0.9.9.6.1: the browser downloads it this one time
      window.open(`${RELEASES}/KanjiWizards.apk`, '_blank');
      ui.toast('Your browser is downloading the new app — open KanjiWizards.apk when it finishes and tap Update. From then on, updates install right from this button.', 9000);
    }
  };
}
