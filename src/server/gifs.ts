// 0.9.9.9.9.6: GIFs in Messages — searched through GIPHY's API by the server (the player's device never talks to
// GIPHY itself: its address and the rest stay with us; only the words searched for go). Set GIPHY_API_KEY to turn it
// on (a free key: developers.giphy.com → Create an app → API). Results are cached for a while (the free key has a
// limit of requests an hour). A GIF message carries the picture's GIPHY address, checked by GIF_URL.
export interface GifItem { id: string; url: string; w: number; h: number; preview: string }

/**
 * 0.9.9.9.9.6: GIPHY is blocked in some countries (the owner's: its addresses don't even resolve), so the pictures come
 * through our server too — /api/gif-media/<host>/<path>. Players only ever talk to the game.
 */
/** a GIF that may be sent: GIPHY's own media hosts, a plain path (no query) */
export const GIF_URL = /^https:\/\/(media[0-9]?|i)\.giphy\.com\/[\w./-]{5,200}$/;
const clean = (u: unknown) => (typeof u === 'string' ? u.split('?')[0] : '');

export class Gifs {
  private cache = new Map<string, { at: number; items: GifItem[] }>();
  /** a GIPHY picture, fetched for a player who can't reach GIPHY (host: media, media0-4 or i; path checked) */
  async media(host: string, path: string): Promise<{ mime: string; data: Uint8Array } | null> {
    if (!/^(media[0-9]?|i)$/.test(host) || !/^[\w./-]{5,200}$/.test(path) || path.includes('..')) return null;
    const r = await this.fetcher(`https://${host}.giphy.com/${path}`, { signal: AbortSignal.timeout(8000) });
    if (!r.ok) return null;
    const mime = (r.headers.get('content-type') ?? '').split(';')[0];
    if (!/^(image\/(gif|webp|png|jpeg)|video\/mp4)$/.test(mime)) return null;
    const data = new Uint8Array(await r.arrayBuffer());
    return data.length > 6 * 1024 * 1024 ? null : { mime, data };
  }
  constructor(private readonly key: string, private readonly fetcher: typeof fetch = fetch) {}

  async search(q: string, offset = 0, lang = 'en'): Promise<GifItem[]> {
    const query = q.trim().slice(0, 60);
    const off = Math.max(0, Math.min(400, Math.floor(offset) || 0));
    const k = `${lang}|${query.toLowerCase()}|${off}`;
    const hit = this.cache.get(k);
    if (hit && Date.now() - hit.at < 30 * 60_000) return hit.items;
    const u = new URL(query ? 'https://api.giphy.com/v1/gifs/search' : 'https://api.giphy.com/v1/gifs/trending');
    u.searchParams.set('api_key', this.key);
    if (query) { u.searchParams.set('q', query); u.searchParams.set('lang', lang === 'ru' ? 'ru' : 'en'); }
    u.searchParams.set('limit', '24');
    u.searchParams.set('offset', String(off));
    u.searchParams.set('rating', 'pg-13');
    u.searchParams.set('bundle', 'messaging_non_clips');
    const r = await this.fetcher(u, { signal: AbortSignal.timeout(6000) });
    if (!r.ok) throw new Error(r.status === 429 ? 'Too many GIF searches right now - try again in a bit' : 'GIFs are not available right now');
    const data = ((await r.json()) as { data?: Array<{ id?: string; images?: Record<string, { url?: string; webp?: string; width?: string; height?: string }> }> }).data ?? [];
    const items: GifItem[] = [];
    for (const g of data) {
      const big = g.images?.fixed_height, small = g.images?.fixed_height_small ?? big;
      const url = clean(big?.webp || big?.url), preview = clean(small?.webp || small?.url);
      if (!g.id || !GIF_URL.test(url) || !GIF_URL.test(preview)) continue;
      items.push({ id: g.id, url, preview, w: Number(big?.width) || 200, h: Number(big?.height) || 200 });
    }
    if (this.cache.size > 300) this.cache.delete(this.cache.keys().next().value as string);
    this.cache.set(k, { at: Date.now(), items });
    return items;
  }
}
