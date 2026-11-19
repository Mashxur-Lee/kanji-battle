/**
 * 0.9.9.9.6.9: Render's free plan puts a web service to sleep after 15 minutes without a request, and the next
 * visitor waits about a minute on Render's own "waking up" page (the game's page can't show anything until the
 * server answers). The server asks itself every 10 minutes, through its public address — that is a request from
 * outside as far as Render is concerned — so it never falls asleep.
 *
 * On Render the address is in RENDER_EXTERNAL_URL (set by Render). KEEP_AWAKE_URL overrides it; KEEP_AWAKE=0 turns
 * this off. Note: awake all month is about 744 of the free plan's 750 instance hours — fine for one free service.
 */
export function keepAwake(env: NodeJS.ProcessEnv = process.env, every = 10 * 60_000, get: (u: string) => Promise<unknown> = (u) => fetch(u, { headers: { 'user-agent': 'kanji-wizards-keep-awake' }, signal: AbortSignal.timeout(30_000) })): { url: string; stop(): void } | null {
  const base = (env.KEEP_AWAKE_URL || env.RENDER_EXTERNAL_URL || '').trim();
  if (!base || env.KEEP_AWAKE === '0') return null;
  let url: string;
  try { url = new URL('/api/online', base).toString(); } catch { return null; }
  // (0.9.9.9.7: the first answer goes to the log, so Render's log shows whether it works; failures are logged too)
  let first = true;
  const ping = () => get(url).then((r) => { if (first) { first = false; console.log(`[keep awake] ${url} answered (${(r as { status?: number })?.status ?? 'ok'})`); } })
    .catch((e) => console.warn(`[keep awake] ${url}: ${(e as Error)?.message ?? e}`));
  const t = setInterval(() => void ping(), every);
  t.unref?.();
  return { url, stop: () => clearInterval(t) };
}
