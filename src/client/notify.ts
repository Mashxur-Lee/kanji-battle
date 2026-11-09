// Getting your attention when the game is in a background tab: the tab title blinks, and (if you
// allowed it) a system notification pops up. Used for "Your turn" in Deck Duel, "Match found" and
// friend invites.

let blink = 0;
let baseTitle = document.title;

/** Ask once for notification permission (must be called from a click). */
export function askNotifyPermission() {
  try {
    if ('Notification' in window && Notification.permission === 'default') void Notification.requestPermission();
  } catch { /* unsupported */ }
}

/** Only does anything while the page is hidden (or the window isn't focused). */
export function attention(title: string, body = '') {
  if (!document.hidden && document.hasFocus()) return;
  clearInterval(blink);
  baseTitle = document.title.startsWith('● ') ? baseTitle : document.title;
  let on = false;
  blink = window.setInterval(() => { on = !on; document.title = on ? `● ${title}` : baseTitle; }, 900);
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  const opts = { body, icon: '/icons/icon-192.png', tag: 'kanji-wizards', renotify: true } as NotificationOptions;
  try {
    const n = new Notification(title, opts);
    n.onclick = () => { window.focus(); n.close(); };
  } catch {
    // 0.9.9.9.5: Chrome on Android allows notifications only from the service worker
    void navigator.serviceWorker?.getRegistration().then((reg) => reg?.showNotification(title, opts)).catch(() => { /* none */ });
  }
}

function stop() { clearInterval(blink); blink = 0; if (document.title.startsWith('● ')) document.title = baseTitle; }
document.addEventListener('visibilitychange', () => { if (!document.hidden) stop(); });
addEventListener('focus', stop);
