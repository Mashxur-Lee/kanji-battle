// Kanji Wizards for Windows (0.9.9.4): the game in its own window. It opens the game's website, so it is
// always the newest version; the website's service worker keeps a copy, so the app also opens without
// internet (after you've signed in once) — Study spells, the quiz, reading passages, the daily challenge,
// Customize, Progress and match history work offline, and sync when you're back.
const { app, BrowserWindow, shell, session } = require('electron');
const fs = require('node:fs');
const path = require('node:path');

const SERVER = process.env.KW_SERVER || 'https://kanji-battle-ev0o.onrender.com';
const ORIGIN = new URL(SERVER).origin;

if (!app.requestSingleInstanceLock()) app.quit();
app.setAppUserModelId('com.kanjiwizards.app');

let win = null;
const boundsFile = () => path.join(app.getPath('userData'), 'window.json');
const loadBounds = () => { try { return JSON.parse(fs.readFileSync(boundsFile(), 'utf8')); } catch { return null; } };
const saveBounds = () => {
  if (!win) return;
  try { fs.writeFileSync(boundsFile(), JSON.stringify({ ...win.getNormalBounds(), maximized: win.isMaximized(), fullscreen: win.isFullScreen() })); } catch { /* read-only disk */ }
};

function showOffline() {
  win.loadFile(path.join(__dirname, 'offline.html'), { query: { server: SERVER } });
}

function createWindow() {
  const b = loadBounds();
  win = new BrowserWindow({
    width: b?.width ?? 1280, height: b?.height ?? 800, x: b?.x, y: b?.y,
    minWidth: 800, minHeight: 560,
    backgroundColor: '#0b0920',
    title: 'Kanji Wizards',
    icon: path.join(__dirname, 'icon.png'),
    autoHideMenuBar: true,
    show: false,
    webPreferences: { contextIsolation: true, sandbox: true, spellcheck: false, backgroundThrottling: false },
  });
  win.removeMenu();
  if (b?.maximized) win.maximize();
  if (b?.fullscreen) win.setFullScreen(true);
  // show at once if the page is slow (the server may be waking up) — the window's dark background, not white
  win.once('ready-to-show', () => win?.show());
  setTimeout(() => { if (win && !win.isVisible()) win.show(); }, 1500);
  const ua = `${win.webContents.getUserAgent()} KanjiWizardsDesktop/${app.getVersion()}`;
  win.webContents.setUserAgent(ua);

  // the game's own pages stay in the app; any other link opens in the browser
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/.test(url)) void shell.openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (e, url) => {
    if (url.startsWith(ORIGIN) || url.startsWith('file:')) return;
    e.preventDefault();
    if (/^https?:/.test(url)) void shell.openExternal(url);
  });
  // no internet and nothing saved yet (first start): a friendly page with "Try again"
  win.webContents.on('did-fail-load', (_e, code, _desc, url, isMain) => {
    if (isMain && code !== -3 && url.startsWith(ORIGIN)) showOffline();
  });
  // F11 full screen, F5 / Ctrl+R reload
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11') { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
    else if (input.key === 'F5' || (input.control && input.key.toLowerCase() === 'r')) { win.webContents.reload(); e.preventDefault(); }
  });
  for (const ev of ['resize', 'move', 'close']) win.on(ev, saveBounds);
  win.on('closed', () => { win = null; });

  void win.loadURL(SERVER);
}

app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.whenReady().then(() => {
  // the game may use the microphone (voice) and notifications (friend invites); only for the game's site
  session.defaultSession.setPermissionRequestHandler((wc, permission, cb) => {
    cb(wc.getURL().startsWith(ORIGIN) && ['media', 'notifications', 'fullscreen', 'clipboard-sanitized-write'].includes(permission));
  });
  createWindow();
});
app.on('window-all-closed', () => app.quit());
