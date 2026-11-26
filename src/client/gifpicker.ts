// 0.9.9.9.9.6: GIFs in Messages, like Telegram — the GIF button opens a panel with a search box; under it your saved
// GIFs and the ones you sent lately (kept on this device), then what the search finds. A GIF in a chat, tapped, can be
// added to your GIFs. The search goes through our server (GIPHY behind it).
import { api, type GifItem } from './api';
import { lang, tr } from './i18n';
import * as ui from './ui';

const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = tr(text); return e; };
const KEY = (who: string) => `kb:gifs:${who}`;
interface Mine { saved: GifItem[]; recent: GifItem[] }
let who = 'anon';
export function setGifUser(id: string) { who = id || 'anon'; }
function load(): Mine { try { const v = JSON.parse(localStorage.getItem(KEY(who)) ?? '{}') as Partial<Mine>; return { saved: v.saved ?? [], recent: v.recent ?? [] }; } catch { return { saved: [], recent: [] }; } }
function save(m: Mine) { try { localStorage.setItem(KEY(who), JSON.stringify({ saved: m.saved.slice(0, 60), recent: m.recent.slice(0, 30) })); } catch { /* full or private */ } }
const same = (a: GifItem, b: GifItem) => a.url === b.url;
export function noteSent(g: GifItem) { const m = load(); m.recent = [g, ...m.recent.filter((x) => !same(x, g))]; save(m); }
export const isSaved = (url: string) => load().saved.some((x) => x.url === url);
export function saveGif(g: GifItem) { const m = load(); if (!m.saved.some((x) => same(x, g))) m.saved.unshift(g); save(m); ui.toast(tr('Added to your GIFs'), 1800); }
export function unsaveGif(url: string) { const m = load(); m.saved = m.saved.filter((x) => x.url !== url); save(m); ui.toast(tr('Removed from your GIFs'), 1800); }

let panel: HTMLElement | null = null;
export function closeGifs() { panel?.remove(); panel = null; }
/** the panel, opened above `anchor`'s composer; `send` is called with the GIF picked */
export function openGifs(host: HTMLElement, send: (g: GifItem) => void) {
  if (panel) { closeGifs(); return; }
  const p = h('div', 'gif-panel');
  panel = p;
  const top = h('div', 'gif-top');
  const q = h('input', 'gif-q') as HTMLInputElement;
  q.type = 'search'; q.placeholder = tr('Search GIFs'); q.setAttribute('aria-label', tr('Search GIFs')); q.autocomplete = 'off';
  const x = h('button', 'gif-x'); x.type = 'button'; x.textContent = '✕'; x.setAttribute('aria-label', tr('Close')); x.onclick = closeGifs;
  top.append(q, x);
  const mine = h('div', 'gif-mine');
  const found = h('div', 'gif-grid');
  const note = h('p', 'hint gif-note');
  p.append(top, mine, found, note);
  host.append(p);
  const tile = (g: GifItem) => {
    const b = h('button', 'gif-tile'); b.type = 'button';
    const img = document.createElement('img'); img.src = g.preview || g.url; img.alt = 'GIF'; img.loading = 'lazy'; img.decoding = 'async';
    b.append(img);
    b.onclick = () => { noteSent(g); closeGifs(); send(g); };
    return b;
  };
  const drawMine = () => {
    const m = load();
    mine.replaceChildren();
    if (m.saved.length) { mine.append(h('small', 'gif-h', 'Your GIFs')); const row = h('div', 'gif-row'); row.append(...m.saved.map(tile)); mine.append(row); }
    if (m.recent.length) { mine.append(h('small', 'gif-h', 'Sent lately')); const row = h('div', 'gif-row'); row.append(...m.recent.map(tile)); mine.append(row); }
  };
  let n = 0, t = 0;
  const search = async (text: string) => {
    const k = ++n;
    note.textContent = tr('Loading…');
    try {
      const r = await api.gifs(text, 0, lang());
      if (k !== n) return;
      found.replaceChildren(...r.gifs.map(tile));
      note.textContent = r.gifs.length ? tr('Powered by GIPHY') : tr('No GIFs found');
    } catch (e) { if (k === n) { found.replaceChildren(); note.textContent = (e as Error).message; } }
  };
  q.oninput = () => { clearTimeout(t); t = window.setTimeout(() => void search(q.value), 300); };
  q.onkeydown = (e) => { if (e.key === 'Escape') closeGifs(); if (e.key === 'Enter') { e.preventDefault(); clearTimeout(t); void search(q.value); } };
  drawMine();
  void search('');
  if (!matchMedia('(pointer: coarse)').matches) setTimeout(() => q.focus(), 40);
}
