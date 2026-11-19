// 0.9.9.4.1: the Android app from the game's own address (an in-app browser tab couldn't download GitHub's link).
// Fetched from the latest GitHub release and kept for 10 minutes; `want` (the release the in-app updater saw,
// 0.9.9.6.1) fetches again a copy from before it.
// 0.9.9.9.7.2: one download at a time — everyone who asks while it is on its way waits for that one. Before, a burst
// of requests (just when the copy had gone stale, each with a different ?v=) started a download each, every one held
// in memory whole: a few dozen were enough to run the server out of memory.
export function apkSource(url: string, get: (u: string) => Promise<{ ok: boolean; status: number; arrayBuffer(): Promise<ArrayBuffer> }> = (u) => fetch(u, { redirect: 'follow' }), now = () => Date.now()) {
  let cache: { at: number; data: Buffer; v?: string } | null = null;
  let coming: Promise<Buffer> | null = null;
  return function latestApk(want?: string): Promise<Buffer> {
    const age = cache ? now() - cache.at : Infinity;
    if (cache && (age < 60_000 || (age < 10 * 60_000 && (!want || cache.v === want)))) return Promise.resolve(cache.data);
    coming ??= (async () => {
      const r = await get(url);
      if (!r.ok) throw new Error(`APK ${r.status}`);
      const data = Buffer.from(await r.arrayBuffer());
      cache = { at: now(), data, v: want };
      return data;
    })().finally(() => { coming = null; });
    return coming;
  };
}
