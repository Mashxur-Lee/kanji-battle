// The game as an app (0.9.9.4): the service worker (installable, opens without internet), the "Get the app"
// dialog (install from the browser, the Windows app, the Android app), and offline mode in the menu —
// online games say they need internet instead of trying.
import * as offline from './offline';
import { getToken, OFFLINE_TEXT } from './api';
import * as ui from './ui';
import { tr } from './i18n';
import { APP_NEEDS, VERSION } from '../shared/version';

const RELEASES = 'https://github.com/Mashxur-Lee/kanji-battle/releases/latest/download';
export const DOWNLOADS = { windows: `${RELEASES}/KanjiWizards-Setup.exe`, android: '/download/KanjiWizards.apk' }; // the APK from our own address (0.9.9.4.1)

/** Inside the Windows or Android app, or installed from the browser. */
export const inApp = () => /KanjiWizards(Desktop|Android)/.test(navigator.userAgent)
  || matchMedia('(display-mode: standalone)').matches || (navigator as { standalone?: boolean }).standalone === true;
const isIos = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

interface InstallPrompt extends Event { prompt(): Promise<void>; userChoice: Promise<{ outcome: string }> }
let installPrompt: InstallPrompt | null = null;

// things that need the server: online games, rooms, friends
const ONLINE_ONLY = '#adminBtn, #queueBtn, #join, #railAdd, #railReq, #railList, #railFab, #friendAdd, #friendsRefresh, #picInput, #picRemove';

// 0.9.9.9.6.4: updates. The page used to update only when the service worker happened to look for a new version
// (opening the page) and then only on the next visit — an app left open (a phone's app comes back from the
// background without reloading) ran the old version for days. Now the server says which build it serves in every
// welcome (the connection comes back after each release), and an app on an older build fetches the new one and
// reloads into it at the first quiet moment (on the menu, not in a room).
declare const __KW_BUILD__: string | undefined;
export const CLIENT_BUILD = typeof __KW_BUILD__ === 'string' ? __KW_BUILD__ : '';
let reloadOk: () => boolean = () => false;
let updating = false;
export function checkBuild(server: string | undefined) {
  if (!server || !CLIENT_BUILD || server === CLIENT_BUILD || updating) return;
  // (once per new build: if the reload still brought the old one, don't loop — the next welcome tries again later)
  let tried = '';
  try { tried = sessionStorage.getItem('kw:update-to') ?? ''; } catch { /* private mode */ }
  if (tried === server) return;
  updating = true;
  void (async () => {
    const reg = await navigator.serviceWorker?.getRegistration().catch(() => undefined);
    await reg?.update().catch(() => undefined); // the new service worker installs (it fetches the new files) and takes over
    const go = async () => {
      if (!reloadOk()) { setTimeout(() => void go(), 3000); return; }
      try { sessionStorage.setItem('kw:update-to', server); } catch { /* private mode */ }
      // whatever the old worker kept is dropped, so the reload can only bring the new version
      try { for (const k of await caches.keys()) if (k.startsWith('kw-shell-')) await caches.delete(k); } catch { /* no caches */ }
      ui.toast(tr('Updating to the new version…'), 2500);
      setTimeout(() => location.reload(), 900);
    };
    setTimeout(() => void go(), reg ? 4000 : 0);
  })();
}

export function initApp(hooks: { canReload: () => boolean; backOnline: () => void; netStatus: () => void }) {
  reloadOk = hooks.canReload;
  // back from the background: also ask the service worker to look for a new version
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') void navigator.serviceWorker?.getRegistration().then((r) => r?.update()).catch(() => { /* offline */ }); });
  offline.init(getToken, () => ['review', 'quiz', 'daily'].includes(ui.currentScreen() ?? ''));
  offline.onChange((off) => {
    document.body.classList.toggle('offline', off);
    hooks.netStatus();
    if (off) ui.toast('You\'re offline. Study spells, the quiz, reading passages, the daily challenge, Customize and private games against the AI still work — your progress syncs when you\'re back online.', 6000);
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

// ── "Update the app" (0.9.9.6.1; 0.9.9.9.3: through the browser) ─────────────────────────────────────────────
// In an older Android app, "Get the app" turns into "Update the app". 0.9.9.9.3: the app no longer downloads and
// installs APKs itself (Play Protect counts an app that can install other apps as harmful), so the browser downloads
// the new one and Android installs it from there. Apps from before 0.9.9.9.3 were signed with the old (public) key:
// once, they have to be uninstalled before the new one installs — the button explains that first.
interface KWAndroidUpdate { version?: () => string }
const RELEASE_API = 'https://api.github.com/repos/Mashxur-Lee/kanji-battle/releases/latest';
/** the first app signed with the new private key */
const NEW_KEY_FROM = '0.9.9.9.3';

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

/** the browser downloads the newest APK (a link to GitHub opens outside the app, in the phone's browser) */
const downloadInBrowser = () => window.open(`${RELEASES}/KanjiWizards.apk`, '_blank');

/** apps signed with the old key: uninstall, then install the new one — once */
function reinstallSteps() {
  const d = document.createElement('dialog');
  d.className = 'friend-dialog reinstall-dialog';
  d.innerHTML = `<h3>${tr('A one-time reinstall')}</h3>
    <p class="hint">${tr('The app now has its own private signature (the old one was public, so Play Protect blocked new versions as harmful). Android can’t update an app to a new signature, so this one time:')}</p>
    <ol class="reinstall-steps"><li>${tr('Tap “Download the new app” — your browser downloads it.')}</li><li>${tr('Uninstall Kanji Wizards (hold its icon → Uninstall).')}</li><li>${tr('Open KanjiWizards.apk from your downloads and install it, then sign in.')}</li></ol>
    <p class="hint">${tr('Your account, progress and decks are on the server — nothing is lost. Stay online for a moment first so everything is synced.')}</p>
    <div class="fb-actions"><button class="big" type="button" data-dl>${tr('Download the new app')}</button><button class="big alt" type="button" data-close>${tr('Later')}</button></div>`;
  document.body.append(d);
  d.querySelector<HTMLElement>('[data-dl]')!.onclick = () => downloadInBrowser();
  d.querySelector<HTMLElement>('[data-close]')!.onclick = () => d.close();
  d.addEventListener('close', () => d.remove());
  d.showModal();
}

async function offerUpdate(btn: HTMLElement) {
  const kw = (window as { KWAndroid?: KWAndroidUpdate }).KWAndroid;
  const mine = kw?.version?.();
  if (!kw || !mine) return;
  // 0.9.9.9.6.1: only when this app is missing something (APP_NEEDS) — a new patch of the game reaches the app by
  // itself (it loads the game from the server), so "Update the app" isn't shown after every release any more
  if (cmpVersion(mine, APP_NEEDS) >= 0) return;
  const latest = await latestRelease();
  if (cmpVersion(mine, latest) >= 0) return;
  btn.hidden = false;
  btn.classList.add('update');
  btn.textContent = 'Update the app';
  btn.title = `${mine} → ${latest}`;
  btn.onclick = () => {
    if (cmpVersion(mine, NEW_KEY_FROM) < 0) return reinstallSteps();
    downloadInBrowser();
    ui.toast('Your browser is downloading the new version — open KanjiWizards.apk when it finishes and tap Update.', 8000);
  };
}
