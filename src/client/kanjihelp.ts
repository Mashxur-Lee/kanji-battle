// Tap a kanji to learn it (0.9.9.4.4): on a flipped study card (the word and its example sentence) and in the
// reading passage, every kanji can be tapped for its meaning, on- and kun-readings and the parts it is built
// from; "Memory picture" draws the kanji with each part in its own colour, with a short story that ties the
// parts to the meaning (休 = a person 亻 leaning against a tree 木 → rest).
// Data: public/kanji.json, built from KANJIDIC (meanings, readings), KanjiVG (parts) and data/kanji/notes.

import { lang, meaningIn, tr } from './i18n';
import { partsPicture, strokesOf } from './strokes';

/** [meanings, ru, on, kun, parts [char, en, ru][], story en, story ru, part of each stroke | null] */
type KanjiInfo = [string, string, string, string, Array<[string, string, string]>, string, string, number[] | null];
let loading: Promise<Record<string, KanjiInfo>> | null = null;
export function loadKanji(): Promise<Record<string, KanjiInfo>> {
  loading ??= fetch('/kanji.json').then((r) => (r.ok ? r.json() : {})).catch(() => { loading = null; return {}; });
  return loading;
}

const HAN = /[\p{Script=Han}]/u;
const tappable = (ch: string) => HAN.test(ch) && ch !== '々'; // (々 repeats the kanji before it)
const COLOURS = ['#e8590c', '#1c7ed6', '#2b8a3e', '#ae3ec9', '#e67700', '#0c8599'];

const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};

/**
 * Make every kanji inside `root` tappable (furigana in <rt> is left alone). Taps don't reach the card underneath
 * (no flip, no swipe).
 */
export function kanjiTappable(root: Element) {
  void loadKanji();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const texts: Text[] = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if ((n.parentElement as Element | null)?.closest('rt, .kj')) continue;
    if (HAN.test(n.nodeValue ?? '')) texts.push(n as Text);
  }
  for (const t of texts) {
    const frag = document.createDocumentFragment();
    for (const ch of [...(t.nodeValue ?? '')]) {
      if (!tappable(ch)) { frag.append(ch); continue; }
      const s = h('span', 'kj', ch, { role: 'button', tabindex: '0', lang: 'ja', title: tr('Tap for this kanji') });
      const open = (e: Event) => { e.stopPropagation(); e.preventDefault(); void showKanji(ch, s); };
      s.addEventListener('click', open);
      s.addEventListener('pointerdown', (e) => e.stopPropagation());
      s.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') open(e); });
      frag.append(s);
    }
    t.replaceWith(frag);
  }
}

// ── whole words (0.9.9.5): in an example sentence a word with furigana (帽子) is one tap, not one per kanji ──
type Word = { kanji: string; reading: string; meaning: string; id?: string };
/** decks.ts fills these in (dictionary look-up, "+ Add to…") — they live there, and decks.ts imports this file */
export const wordHooks: { lookup?: (base: string, reading: string, after: string) => Promise<Word | null>; addTo?: (word: string, id?: string) => HTMLElement } = {};

/** Every word with furigana inside `root` becomes one tappable word: its meaning, its kanji and "+ Add to…". */
export function wordsTappable(root: Element) {
  void loadKanji();
  for (const r of root.querySelectorAll('ruby')) {
    if (r.closest('.kw') || !HAN.test(r.firstChild?.textContent ?? '')) continue;
    const base = [...r.childNodes].filter((n) => n.nodeName !== 'RT').map((n) => n.textContent).join('');
    const reading = r.querySelector('rt')?.textContent ?? '';
    // the kana right after the word (its okurigana / ending) helps find the dictionary form: 行った → 行く
    let after = '';
    for (let n = r.nextSibling; n && after.length < 4; n = n.nextSibling) { if (n.nodeType !== Node.TEXT_NODE) break; after += n.textContent ?? ''; }
    r.classList.add('kw');
    r.setAttribute('role', 'button'); r.setAttribute('tabindex', '0'); r.setAttribute('title', tr('Tap for this word'));
    const open = (e: Event) => { e.stopPropagation(); e.preventDefault(); void showWord(base, reading, after, r as HTMLElement); };
    r.addEventListener('click', open);
    r.addEventListener('pointerdown', (e) => e.stopPropagation());
    r.addEventListener('keydown', (e) => { if ((e as KeyboardEvent).key === 'Enter' || (e as KeyboardEvent).key === ' ') open(e); });
  }
}

/** The word box: the word, its reading and meaning, "+ Add to…", and its kanji — each one tap away. */
export async function showWord(base: string, reading: string, after: string, at?: HTMLElement) {
  const [w, info] = await Promise.all([wordHooks.lookup?.(base, reading, after) ?? null, loadKanji()]);
  const p = pop();
  const ru = lang() === 'ru';
  document.querySelectorAll('.kj.on, .kw.on').forEach((x) => x.classList.remove('on'));
  at?.classList.add('on');
  const close = h('button', 'kp-x', '✕', { type: 'button', 'aria-label': tr('Close'), title: tr('Close') });
  close.onclick = hideKanji;
  const head = h('div', 'kp-head kp-word');
  head.append(h('span', 'kp-char', base, { lang: 'ja' }));
  const meta = h('div', 'kp-meta');
  meta.append(h('span', 'kp-wr', reading, { lang: 'ja' }));
  if (w && w.kanji !== base) meta.append(h('span', 'kp-wr dict', `→ ${w.kanji}`, { lang: 'ja' }));
  meta.append(h('span', 'kp-mean', w ? meaningIn(w.meaning) : tr('Not in the dictionary — tap a kanji below'), { 'data-no-i18n': '' }));
  if (w && wordHooks.addTo) meta.append(wordHooks.addTo(w.kanji, w.id));
  head.append(meta);
  const row = h('div', 'kp-parts kp-kanji');
  row.append(h('span', 'kp-lbl', tr('Kanji')));
  [...base].filter(tappable).forEach((ch, i) => {
    const k = info[ch];
    const chip = h('button', 'kp-part', undefined, { type: 'button', style: `--pc:${COLOURS[i % COLOURS.length]}` });
    chip.append(h('span', 'kp-pc', ch, { lang: 'ja' }));
    if (k) chip.append(h('span', 'kp-pm', (ru && k[1] ? k[1] : k[0]).split(/[,;]/)[0], { 'data-no-i18n': '' }));
    chip.onclick = () => void showKanji(ch, at, () => void showWord(base, reading, after, at));
    if (i) row.append(h('span', 'kp-plus', '+'));
    row.append(chip);
  });
  p.replaceChildren(close, head, row);
  p.hidden = false;
}

/** "なが.い" → "なが(い)", "-あ.け" → "〜あ(け)" */
const kun = (s: string) => s.split('、').map((r) => r.replace(/^-/, '〜').replace(/-$/, '〜').replace(/\.(.+)$/, '($1)')).join('、');

function pop(): HTMLElement {
  let p = document.getElementById('kanjiPop');
  if (p) return p;
  p = h('div', 'kanji-pop', undefined, { id: 'kanjiPop', role: 'dialog', 'aria-label': 'Kanji' });
  p.hidden = true;
  document.body.append(p);
  document.addEventListener('pointerdown', (e) => {
    const q = document.getElementById('kanjiPop');
    if (q && !q.hidden && !(e.target as Element).closest('#kanjiPop, .kj, .kw')) hideKanji();
  });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') hideKanji(); }, true);
  return p;
}
export function hideKanji() {
  const p = document.getElementById('kanjiPop');
  if (p) p.hidden = true;
  document.querySelectorAll('.kj.on, .kw.on').forEach((x) => x.classList.remove('on'));
}

export async function showKanji(ch: string, at?: HTMLElement, back?: () => void) {
  const info = (await loadKanji())[ch];
  const p = pop();
  const ru = lang() === 'ru';
  document.querySelectorAll('.kj.on').forEach((x) => x.classList.remove('on'));
  at?.classList.add('on');
  const close = h('button', 'kp-x', '✕', { type: 'button', 'aria-label': tr('Close'), title: tr('Close') });
  close.onclick = hideKanji;
  const head = h('div', 'kp-head');
  head.append(h('span', 'kp-char', ch, { lang: 'ja' }));
  const meta = h('div', 'kp-meta');
  if (!info) {
    meta.append(h('span', 'kp-mean', tr('No details for this kanji yet')));
    head.append(meta);
    p.replaceChildren(close, head);
    p.hidden = false;
    return;
  }
  const [en, rus, on, kn, parts, sen, sru, seq] = info;
  meta.append(h('span', 'kp-mean', ru && rus ? rus : en, { 'data-no-i18n': '' }));
  const rd = h('div', 'kp-reads');
  if (on) { const r = h('span', 'kp-r'); r.append(h('b', '', ru ? 'он' : 'on', { 'data-no-i18n': '' }), h('span', '', on, { lang: 'ja' })); rd.append(r); }
  if (kn) { const r = h('span', 'kp-r'); r.append(h('b', '', ru ? 'кун' : 'kun', { 'data-no-i18n': '' }), h('span', '', kun(kn), { lang: 'ja' })); rd.append(r); }
  meta.append(rd);
  head.append(meta);
  const kids: Node[] = back ? [close, Object.assign(h('button', 'pill kp-back', `← ${tr('Word')}`, { type: 'button' }), { onclick: back }), head] : [close, head];
  if (parts.length) {
    const row = h('div', 'kp-parts');
    row.append(h('span', 'kp-lbl', tr('Parts')));
    parts.forEach(([c, pen, pru], i) => {
      const chip = h('button', 'kp-part', undefined, { type: 'button', style: `--pc:${COLOURS[i % COLOURS.length]}` });
      if (c) chip.append(h('span', 'kp-pc', c, { lang: 'ja' }));
      chip.append(h('span', 'kp-pm', ru && pru ? pru : pen, { 'data-no-i18n': '' }));
      chip.onclick = () => { if (c && HAN.test(c)) void showKanji(c); };
      if (i) row.append(h('span', 'kp-plus', '+'));
      row.append(chip);
    });
    kids.push(row);
  }
  const story = ru && sru ? sru : sen;
  if (story) {
    const btn = h('button', 'pill kp-pic', `🖼 ${tr('Memory picture')}`, { type: 'button', 'aria-expanded': 'false' });
    const box = h('div', 'kp-story');
    box.hidden = true;
    btn.onclick = async () => {
      box.hidden = !box.hidden;
      btn.setAttribute('aria-expanded', String(!box.hidden));
      if (box.hidden || box.childElementCount) return;
      const pic = h('div', 'kp-picture');
      const text = h('p', 'kp-tale', story, { 'data-no-i18n': '' });
      box.append(pic, text);
      const strokes = await strokesOf(ch);
      if (strokes && seq && seq.length === strokes.length) pic.append(partsPicture(strokes, seq, COLOURS));
      else pic.append(h('span', 'kp-big', ch, { lang: 'ja' }));
    };
    head.append(btn);
    kids.push(box);
  }
  p.replaceChildren(...kids);
  p.hidden = false;
}
