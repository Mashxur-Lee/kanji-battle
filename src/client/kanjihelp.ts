// Tap a kanji to learn it (0.9.9.4.4): on a flipped study card (the word and its example sentence) and in the
// reading passage, every kanji can be tapped for its meaning, on- and kun-readings and the parts it is built
// from; "Memory picture" draws the kanji with each part in its own colour, with a short story that ties the
// parts to the meaning (休 = a person 亻 leaning against a tree 木 → rest).
// Data: public/kanji.json, built from KANJIDIC (meanings, readings), KanjiVG (parts) and data/kanji/notes.

import { lang, tr } from './i18n';
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
    if (q && !q.hidden && !(e.target as Element).closest('#kanjiPop, .kj')) hideKanji();
  });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') hideKanji(); }, true);
  return p;
}
export function hideKanji() {
  const p = document.getElementById('kanjiPop');
  if (p) p.hidden = true;
  document.querySelectorAll('.kj.on').forEach((x) => x.classList.remove('on'));
}

export async function showKanji(ch: string, at?: HTMLElement) {
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
  const kids: Node[] = [close, head];
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
