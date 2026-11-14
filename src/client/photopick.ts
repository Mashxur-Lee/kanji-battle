// 0.9.9.9.6.4: sending photos in Messages, like Telegram — a sheet with your newest photos in a grid (the Android
// app reads the phone's gallery, with your permission), tap to pick (numbered), a caption, Send. In a browser or on
// a computer a web page can't look into your photos by itself: the sheet offers your device's own picker, and a
// picture can also be pasted (Ctrl+V) or dropped onto the chat. Photos are made smaller here before they're sent.
import { tr } from './i18n';
import * as ui from './ui';

function h(tag: string, cls = '', text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

interface Bridge {
  photoAccess?: () => string; askPhotos?: () => void; recentPhotos?: (limit: number) => string;
  photoThumbs?: (ids: string, size: number) => void; photoFull?: (id: string, max: number, req: string) => void;
}
const bridge = (): Bridge | null => { const b = (window as unknown as { KWAndroid?: Bridge }).KWAndroid; return b && typeof b.recentPhotos === 'function' ? b : null; };
export const nativeGallery = () => !!bridge();

/** a picture as a smaller JPEG / WebP data URL — the longest side at most `max`, under ~650 KB */
export async function shrink(src: Blob | string, max = 1600): Promise<{ data: string; w: number; h: number }> {
  const url = typeof src === 'string' ? src : URL.createObjectURL(src);
  try {
    const img = new Image();
    img.decoding = 'async';
    await new Promise<void>((ok, no) => { img.onload = () => ok(); img.onerror = () => no(new Error(tr('That file is not a picture'))); img.src = url; });
    let side = max, q = 0.84;
    for (let tries = 0; tries < 6; tries++) {
      const k = Math.min(1, side / Math.max(img.naturalWidth, img.naturalHeight));
      const w = Math.max(1, Math.round(img.naturalWidth * k)), hh = Math.max(1, Math.round(img.naturalHeight * k));
      const c = document.createElement('canvas');
      c.width = w; c.height = hh;
      const g = c.getContext('2d')!;
      g.fillStyle = '#fff'; g.fillRect(0, 0, w, hh); // (a transparent PNG gets a white back, not black)
      g.drawImage(img, 0, 0, w, hh);
      let data = c.toDataURL('image/webp', q);
      if (!data.startsWith('data:image/webp')) data = c.toDataURL('image/jpeg', q);
      if (data.length * 0.75 < 650 * 1024) return { data, w, h: hh };
      side = Math.round(side * 0.8); q = Math.max(0.6, q - 0.08);
    }
    throw new Error(tr('That photo is too large'));
  } finally { if (typeof src !== 'string') URL.revokeObjectURL(url); }
}

type Item = { key: string; thumb: string; full: () => Promise<string>; native?: boolean };
let dlg: HTMLDialogElement | null = null;
let thumbs = new Map<string, HTMLElement>();
const pending = new Map<string, (d: string) => void>();
// the Android app answers here
(window as unknown as { __kwPhotos: unknown }).__kwPhotos = {
  access: () => { if (dlg?.open) void fillNative(); },
  thumb: (id: string, data: string) => { const el = thumbs.get(id); if (el) { el.style.backgroundImage = `url("${data}")`; el.classList.add('ready'); } },
  full: (req: string, data: string) => { const f = pending.get(req); pending.delete(req); f?.(data); },
};
let items: Item[] = [];
let picked: string[] = [];
let sendFn: ((photos: string[], caption: string) => Promise<void>) | null = null;
let gridEl: HTMLElement, barEl: HTMLElement, noteEl: HTMLElement, capEl: HTMLInputElement, sendEl: HTMLButtonElement, fileEl: HTMLInputElement;

function nativeFull(id: string): Promise<string> {
  const b = bridge();
  if (!b?.photoFull) return Promise.reject(new Error('no gallery'));
  const req = `r${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
  return new Promise((ok, no) => {
    const t = setTimeout(() => { pending.delete(req); no(new Error(tr('Couldn’t read that photo'))); }, 20_000);
    pending.set(req, (d) => { clearTimeout(t); if (d) ok(d); else no(new Error(tr('Couldn’t read that photo'))); });
    b.photoFull!(id, 1600, req);
  });
}

function build() {
  const d = document.createElement('dialog');
  d.className = 'friend-dialog photo-sheet';
  d.setAttribute('aria-label', 'Photos');
  const head = h('div', 'ps-head');
  const x = h('button', 'pill dlg-x', '✕') as HTMLButtonElement;
  x.type = 'button'; x.setAttribute('aria-label', tr('Close'));
  x.onclick = () => d.close();
  head.append(h('h3', '', tr('Photos')), x);
  noteEl = h('div', 'ps-note');
  gridEl = h('div', 'ps-grid');
  barEl = h('div', 'ps-bar');
  capEl = document.createElement('input');
  capEl.className = 'ps-cap'; capEl.maxLength = 1000; capEl.placeholder = tr('Add a caption…'); capEl.setAttribute('aria-label', tr('Caption'));
  sendEl = h('button', 'pill primary ps-send') as HTMLButtonElement;
  sendEl.type = 'button';
  sendEl.onclick = () => void doSend();
  capEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); void doSend(); } });
  barEl.append(capEl, sendEl);
  fileEl = document.createElement('input');
  fileEl.type = 'file'; fileEl.accept = 'image/*'; fileEl.multiple = true; fileEl.hidden = true;
  fileEl.onchange = () => { addFiles([...(fileEl.files ?? [])]); fileEl.value = ''; };
  d.append(head, noteEl, gridEl, barEl, fileEl);
  d.onclick = (e) => { if (e.target === d) d.close(); };
  // drop pictures onto the sheet
  d.addEventListener('dragover', (e) => { e.preventDefault(); });
  d.addEventListener('drop', (e) => { e.preventDefault(); addFiles([...(e.dataTransfer?.files ?? [])]); });
  document.body.append(d);
  return d;
}

function paintBar() {
  barEl.classList.toggle('on', picked.length > 0);
  sendEl.textContent = picked.length > 1 ? `${tr('Send')} ${picked.length}` : tr('Send');
  sendEl.disabled = !picked.length;
  for (const el of gridEl.querySelectorAll<HTMLElement>('.ps-item:not(.ps-device)')) {
    const n = picked.indexOf(el.dataset.key ?? '');
    el.classList.toggle('picked', n >= 0);
    const num = el.querySelector('.ps-n'); if (num) num.textContent = n >= 0 ? String(n + 1) : '';
  }
}

function tile(it: Item) {
  const el = h('button', 'ps-item') as HTMLButtonElement;
  el.type = 'button'; el.dataset.key = it.key;
  if (it.thumb) { el.style.backgroundImage = `url("${it.thumb}")`; el.classList.add('ready'); }
  el.append(h('span', 'ps-n'));
  el.onclick = () => {
    const i = picked.indexOf(it.key);
    if (i >= 0) picked.splice(i, 1);
    else if (picked.length >= 10) { ui.toast(tr('Up to 10 photos at a time'), 2500); return; }
    else picked.push(it.key);
    paintBar();
  };
  return el;
}

function renderGrid() {
  const pick = h('button', 'ps-item ps-device') as HTMLButtonElement;
  pick.type = 'button';
  pick.innerHTML = '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5.5-5.5L6 19"/></svg>';
  pick.append(h('span', 'ps-device-t', tr(nativeGallery() ? 'Gallery' : 'From your device')));
  pick.onclick = () => fileEl.click();
  thumbs = new Map();
  const tiles = items.map((it) => { const t = tile(it); if (it.native) thumbs.set(it.key.slice(2), t); return t; });
  gridEl.replaceChildren(pick, ...tiles);
  if (!items.length && !nativeGallery()) gridEl.append(h('p', 'ps-empty', tr(matchMedia('(pointer: fine)').matches ? 'Choose photos from your device — or drop them here, or paste one into the message box (Ctrl+V).' : 'Choose photos from your device.')));
  paintBar();
}

async function fillNative() {
  const b = bridge();
  if (!b) return;
  const access = b.photoAccess?.() ?? 'none';
  noteEl.replaceChildren();
  if (access === 'none') {
    const allow = h('button', 'pill primary', tr('Allow')) as HTMLButtonElement;
    allow.type = 'button'; allow.onclick = () => b.askPhotos?.();
    noteEl.append(h('span', '', tr('Let Kanji Wizards see your photos to pick them here, like in Telegram.')), allow);
  } else if (access === 'partial') {
    const more = h('button', 'pill', tr('Choose more')) as HTMLButtonElement;
    more.type = 'button'; more.onclick = () => b.askPhotos?.();
    noteEl.append(h('span', '', tr('You shared some of your photos.')), more);
  }
  noteEl.hidden = !noteEl.childElementCount;
  let list: Array<{ id: string }> = [];
  try { list = access === 'none' ? [] : JSON.parse(b.recentPhotos?.(150) ?? '[]'); } catch { list = []; }
  const own = items.filter((x) => !x.native);
  items = [...own, ...list.map((p) => ({ key: `n:${p.id}`, thumb: '', native: true, full: () => nativeFull(p.id) }))];
  picked = picked.filter((k) => items.some((x) => x.key === k));
  renderGrid();
  // small pictures, in batches, as they come
  const ids = list.map((p) => p.id);
  for (let i = 0; i < ids.length; i += 24) b.photoThumbs?.(JSON.stringify(ids.slice(i, i + 24)), 240);
}

function addFiles(files: File[]) {
  const imgs = files.filter((f) => f.type.startsWith('image/'));
  if (!imgs.length) { if (files.length) ui.toast(tr('That file is not a picture'), 2500); return; }
  for (const f of imgs.slice(0, 10)) {
    const key = `f:${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
    const thumb = URL.createObjectURL(f);
    items.unshift({ key, thumb, full: async () => (await shrink(f)).data });
    if (picked.length < 10) picked.push(key);
  }
  renderGrid();
}

async function doSend() {
  if (!picked.length || !sendFn) return;
  sendEl.disabled = true;
  const old = sendEl.textContent;
  sendEl.textContent = tr('Sending…');
  try {
    const chosen = picked.map((k) => items.find((x) => x.key === k)).filter((x): x is Item => !!x);
    const datas: string[] = [];
    for (const it of chosen) {
      const raw = await it.full();
      datas.push(it.native ? (await shrink(raw)).data : raw);
    }
    await sendFn(datas, capEl.value.trim());
    capEl.value = '';
    picked = [];
    dlg?.close();
  } catch (e) { ui.toast((e as Error).message, 3500); sendEl.textContent = old; sendEl.disabled = false; }
}

/** the sheet; `files`: pictures that came another way (pasted, dropped) — already picked */
export function openPhotoSheet(onSend: (photos: string[], caption: string) => Promise<void>, files: File[] = []) {
  sendFn = onSend;
  dlg ??= build();
  items = items.filter((x) => !x.native && x.key.startsWith('f:')).slice(0, 30);
  picked = [];
  capEl.value = '';
  noteEl.hidden = true;
  if (files.length) addFiles(files); else renderGrid();
  if (!dlg.open) dlg.showModal();
  if (nativeGallery()) void fillNative();
  else if (/KanjiWizardsAndroid/.test(navigator.userAgent)) { noteEl.replaceChildren(h('span', '', tr('Update the app (Settings → Get the app) to pick from your photos here, like in Telegram.'))); noteEl.hidden = false; }
  else if (!files.length && !matchMedia('(pointer: fine)').matches) fileEl.click(); // (a phone's browser: straight to its own photo picker)
}

/** a photo in a chat, big (tap anywhere to close) */
export function viewPhoto(src: string) {
  let v = document.getElementById('photoView') as HTMLDialogElement | null;
  if (!v) {
    v = document.createElement('dialog');
    v.id = 'photoView'; v.className = 'photo-view';
    v.onclick = () => v!.close();
    document.body.append(v);
  }
  const img = document.createElement('img');
  img.src = src; img.alt = '';
  const dl = document.createElement('a');
  dl.className = 'pill pv-dl'; dl.href = src; dl.download = 'photo'; dl.textContent = tr('Save');
  dl.onclick = (e) => e.stopPropagation();
  v.replaceChildren(img, dl);
  if (!v.open) v.showModal();
}
