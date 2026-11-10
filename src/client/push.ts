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
/** whether this is the Android app with push (Settings shows the test then) */
export const canPush = () => !!android();
const android = (): Bridge | null => { const b = (window as unknown as { KWAndroid?: Bridge }).KWAndroid; return b?.pushToken ? b : null; };

const SENT_KEY = 'kb:pushSent';
let tries = 0;
let timer = 0;

/** signed in (each connection): hand the phone's token to the server — once a day per account and token */
export function registerPush(userId: string) {
  const b = android();
  if (!b) return;
  clearTimeout(timer);
  try { b.setPushAuth?.(getToken() ?? '', lang()); } catch { /* an older app */ }
  let token = '';
  try { token = b.pushToken?.() ?? ''; } catch { /* an older app */ }
  // the first time, Firebase takes a few seconds to give a token
  if (!token) { if (tries++ < 6) timer = window.setTimeout(() => registerPush(userId), 5000); return; }
  tries = 0;
  const key = `${userId}:${token}:${new Date().toDateString()}`;
  try { if (localStorage.getItem(SENT_KEY) === key) return; } catch { /* private mode */ }
  void api.pushRegister(token).then(() => { try { localStorage.setItem(SENT_KEY, key); } catch { /* private mode */ } }).catch(() => { /* next time */ });
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
 * 0.9.9.9.5.2: Settings → "Test invite notifications": goes the whole way (the phone's permission, its Firebase
 * token, the server's push, Google) and says in words where it stops.
 */
export async function testPush(): Promise<{ ok: boolean; text: string }> {
  const b = android();
  if (!b) return { ok: false, text: 'Only the Android app gets invite notifications.' };
  if (b.notificationsAllowed && !b.notificationsAllowed()) {
    b.askNotifications?.();
    return { ok: false, text: 'Notifications are blocked for Kanji Wizards. Allow them (Android settings → Apps → Kanji Wizards → Notifications), then test again.' };
  }
  let token = '';
  for (let i = 0; i < 4 && !token; i++) {
    try { token = b.pushToken?.() ?? ''; } catch { /* an older app */ }
    if (!token) await new Promise((r) => setTimeout(r, 1500));
  }
  if (!token) {
    let why = '';
    try { why = b.pushError?.() ?? ''; } catch { /* an older app */ }
    return { ok: false, text: `This phone has no push token from Google yet${why ? ` (${why})` : ''}. Check that Google Play services are on and the internet works, then test again.` };
  }
  try { await api.pushRegister(token); } catch (e) { return { ok: false, text: `Could not reach the server: ${(e as Error).message}` }; }
  try { localStorage.removeItem(SENT_KEY); } catch { /* private mode */ }
  let r: Awaited<ReturnType<typeof api.pushTest>>;
  try { r = await api.pushTest(); } catch (e) { return { ok: false, text: `Could not reach the server: ${(e as Error).message}` }; }
  if (r.ok) return { ok: true, text: 'Sent ✓ — a notification should appear in a few seconds. If it doesn’t, update the app (menu → Get the app) and check that battery saving doesn’t stop it.' };
  const err = r.errors?.length ? ` (${r.errors[0]})` : '';
  const text = {
    'server-off': 'Push is not switched on on the game’s server yet — the admin has to set it up.',
    'no-phone': 'The server has no phone for your account — test again in a moment.',
    stale: 'Google says this phone’s token is out of date. Reopen the app and test again.',
    wait: 'Wait a few seconds between tests.',
    refused: `Google refused the push${err}.`,
  }[r.reason ?? 'refused'] ?? `It didn’t work${err}.`;
  return { ok: false, text };
}
