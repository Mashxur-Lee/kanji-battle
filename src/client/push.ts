// 0.9.9.9.5: push to the Android app. The app (KWAndroid) holds the phone's Firebase token; signed in, the page
// gives it to the server, so a friend's invite reaches the phone while the app is closed. The app also keeps the
// sign-in token, so "Decline" on the notification can tell the server without opening the game.
// In a browser or the PC app there is no push: invites come as the card (and a desktop notification).
import { api, getToken } from './api';
import { lang } from './i18n';

interface Bridge {
  /** the Firebase token ('' while Firebase hasn't given one yet, or this build has no Firebase) */
  pushToken?: () => string;
  /** the sign-in token for the notification's Decline ('' = signed out), and the notifications' language */
  setPushAuth?: (token: string, lang: string) => void;
  /** 0.9.9.9.5.2: why there is no token; may it show notifications; ask again */
  pushError?: () => string;
  notificationsAllowed?: () => boolean;
  askNotifications?: () => void;
}
const android = (): Bridge | null => { const b = (window as unknown as { KWAndroid?: Bridge }).KWAndroid; return b?.pushToken ? b : null; };

const SENT_KEY = 'kb:pushSent';
let tries = 0;
let timer = 0;

/** signed in (each connection): hand the phone's token to the server — once a day per account and token */
export function registerPush(userId: string) {
  const b = android();
  if (!b || !alertsOn()) return; // (0.9.9.9.8: turned off on this device)
  clearTimeout(timer);
  try { b.setPushAuth?.(getToken() ?? '', lang()); } catch { /* an older app */ }
  let token = '';
  try { token = b.pushToken?.() ?? ''; } catch { /* an older app */ }
  // the first time, Firebase takes a few seconds to give a token
  if (!token) { if (tries++ < 6) timer = window.setTimeout(() => registerPush(userId), 5000); return; }
  tries = 0;
  const key = `${userId}:${token}:${lang()}:${new Date().toDateString()}`; // (0.9.9.9.5.3: with the language)
  try { if (localStorage.getItem(SENT_KEY) === key) return; } catch { /* private mode */ }
  void api.pushRegister(token, lang()).then(() => { try { localStorage.setItem(SENT_KEY, key); } catch { /* private mode */ } }).catch(() => { /* next time */ });
}

/** signing out: this phone stops getting the account's invites (called while the sign-in token still works) */
export async function pushSignedOut() {
  const b = android();
  if (!b) return;
  clearTimeout(timer);
  try { b.setPushAuth?.('', lang()); } catch { /* an older app */ }
  let token = '';
  try { token = b.pushToken?.() ?? ''; } catch { /* an older app */ }
  try { localStorage.removeItem(SENT_KEY); } catch { /* private mode */ }
  if (token) await api.pushUnregister(token).catch(() => { /* offline: the next account to sign in here takes the token over anyway */ });
}

/**
 * 0.9.9.9.8: Settings → Notifications → "Invites and messages". Off: this device gets no notifications for friends'
 * invites and messages — the phone app hands its token back to the server (nothing is pushed to it), a browser shows
 * no system notifications. On: the phone registers again; a browser asks for permission if it hasn't yet.
 * (It is this device's choice: a phone can be quiet while the computer still notifies.)
 */
const OFF_KEY = 'kb:alertsOff';
export const alertsOn = () => { try { return localStorage.getItem(OFF_KEY) !== '1'; } catch { return true; } };
export async function setAlerts(on: boolean, userId: string): Promise<'on' | 'off' | 'blocked'> {
  try { if (on) localStorage.removeItem(OFF_KEY); else localStorage.setItem(OFF_KEY, '1'); } catch { /* private mode */ }
  const b = android();
  if (b) {
    if (!on) {
      clearTimeout(timer);
      let token = '';
      try { token = b.pushToken?.() ?? ''; } catch { /* an older app */ }
      try { localStorage.removeItem(SENT_KEY); } catch { /* private mode */ }
      if (token) await api.pushUnregister(token).catch(() => { /* offline: tried again when it's turned off next time */ });
      return 'off';
    }
    if (b.notificationsAllowed && !b.notificationsAllowed()) { b.askNotifications?.(); return 'blocked'; }
    if (userId) { tries = 0; registerPush(userId); }
    return 'on';
  }
  if (!on) return 'off';
  if (!('Notification' in window)) return 'blocked';
  const p = Notification.permission === 'default' ? await Notification.requestPermission().catch(() => 'denied' as NotificationPermission) : Notification.permission;
  return p === 'granted' ? 'on' : 'blocked';
}
