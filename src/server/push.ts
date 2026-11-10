// 0.9.9.9.5: push notifications to the Android app (Firebase Cloud Messaging, HTTP v1). A friend's invite reaches
// the phone while the app is closed — in the background the app drops its connection, so the invite card can't.
//
// Set FIREBASE_SERVICE_ACCOUNT on the server to the service account JSON from the Firebase console (Project
// settings → Service accounts → Generate new private key) — the JSON itself or base64 of it. Without it, nothing
// is pushed (and invites to closed apps say "offline", as before).
import { createSign } from 'node:crypto';

interface ServiceAccount { project_id: string; client_email: string; private_key: string; token_uri?: string }
/** 0.9.9.9.5.2: also what went wrong (Google's answer), for the test button and the admin's error list */
export interface PushResult { sent: number; dead: string[]; errors: string[] }
type Fetch = (url: string, init: { method: string; headers: Record<string, string>; body: string }) => Promise<{ ok: boolean; status: number; json(): Promise<unknown>; text(): Promise<string> }>;

const b64url = (b: Buffer | string) => Buffer.from(b).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');

/** the service account from the environment (raw JSON or base64), or null when push is off / it doesn't parse */
export function parseServiceAccount(raw: string | undefined): ServiceAccount | null {
  if (!raw?.trim()) return null;
  for (const text of [raw, Buffer.from(raw, 'base64').toString('utf8')]) {
    try {
      const j = JSON.parse(text) as Partial<ServiceAccount>;
      if (j.project_id && j.client_email && j.private_key) return { project_id: j.project_id, client_email: j.client_email, private_key: j.private_key.replace(/\\n/g, '\n'), token_uri: j.token_uri };
    } catch { /* not this form */ }
  }
  return null;
}

/** A signed JWT asking Google for an FCM access token (RS256, an hour). */
export function serviceJwt(sa: ServiceAccount, nowSec = Math.floor(Date.now() / 1000)): string {
  const head = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(JSON.stringify({
    iss: sa.client_email, scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: sa.token_uri ?? 'https://oauth2.googleapis.com/token', iat: nowSec, exp: nowSec + 3600,
  }));
  const sig = createSign('RSA-SHA256').update(`${head}.${claims}`).sign(sa.private_key);
  return `${head}.${claims}.${b64url(sig)}`;
}

/**
 * 0.9.9.9.5.3: what the phone shows by itself. A data-only push needs the app to wake up and draw the notification —
 * many phones (battery savers, an app swiped away) never wake it, so invites didn't arrive while the test (sent
 * with the app open) did. With a notification in the push, Android shows it even then; an app that is open gets
 * the data instead (and shows the invite card).
 */
export interface PushNote { title: string; body: string; tag: string }
const androidNote = (n: PushNote) => ({
  title: n.title, body: n.body, tag: n.tag, channel_id: 'invites', icon: 'ic_notify', color: '#8b5cf6',
  sound: 'default', default_vibrate_timings: true, notification_priority: 'PRIORITY_HIGH', visibility: 'PUBLIC',
});

export class Push {
  private readonly sa: ServiceAccount | null;
  private access: { token: string; until: number } | null = null;
  constructor(raw: string | undefined, private readonly fetcher: Fetch = fetch as unknown as Fetch, private readonly now = () => Date.now()) {
    this.sa = parseServiceAccount(raw);
  }
  get enabled() { return !!this.sa; }

  private async accessToken(): Promise<string> {
    if (this.access && this.access.until > this.now() + 60_000) return this.access.token;
    const sa = this.sa!;
    const r = await this.fetcher(sa.token_uri ?? 'https://oauth2.googleapis.com/token', {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=${encodeURIComponent('urn:ietf:params:oauth:grant-type:jwt-bearer')}&assertion=${serviceJwt(sa, Math.floor(this.now() / 1000))}`,
    });
    if (!r.ok) throw new Error(`push: token ${r.status} ${(await r.text()).slice(0, 200)}`);
    const j = await r.json() as { access_token: string; expires_in?: number };
    this.access = { token: j.access_token, until: this.now() + (j.expires_in ?? 3600) * 1000 };
    return j.access_token;
  }

  /**
   * Sends `data` (all strings) to each token as a high-priority data message — the app draws the notification
   * itself (with Join / Decline). Tokens the phone no longer has (app uninstalled) come back in `dead`.
   */
  async send(tokens: readonly string[], data: Record<string, string>, ttlSec = 120, note?: PushNote): Promise<PushResult> {
    if (!this.sa || !tokens.length) return { sent: 0, dead: [], errors: [] };
    let auth: string;
    try { auth = await this.accessToken(); } catch (e) { return { sent: 0, dead: [], errors: [(e as Error).message] }; }
    const url = `https://fcm.googleapis.com/v1/projects/${this.sa.project_id}/messages:send`;
    let sent = 0;
    const dead: string[] = [];
    const errors: string[] = [];
    await Promise.all(tokens.map(async (token) => {
      let failed = '';
      const r = await this.fetcher(url, {
        method: 'POST', headers: { Authorization: `Bearer ${auth}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: { token, data, android: { priority: 'high', ttl: `${ttlSec}s`, ...(note ? { notification: androidNote(note) } : {}) } } }),
      }).catch((e: Error) => { failed = `network: ${e?.message ?? e}`; return null; });
      if (r?.ok) { sent++; return; }
      if (!r) { errors.push(failed || 'network'); return; }
      const t = await r.text().catch(() => '');
      errors.push(`${r.status} ${t.replace(/\s+/g, ' ').slice(0, 240)}`);
      if (r.status === 404 || (r.status === 400 && /UNREGISTERED|INVALID_ARGUMENT.*token|registration token/i.test(t))) dead.push(token);
      else if (r.status === 401) this.access = null; // (the next send asks for a new access token)
    }));
    return { sent, dead, errors };
  }
}
