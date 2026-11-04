// The dictionary side panel (0.9.9.8): always at hand, like the friends list — on a PC a slim bar on the LEFT edge
// (the friends are on the right) that opens into a quick look-up; on a phone a round 辞 button bottom-left that slides
// it in. Results and a word's meanings show right in the panel, so looking something up never takes you off the
// screen you're on (a lobby, the results, your deck …). "Full entry" opens the dictionary page for everything else.
// Not shown in battles, quizzes or the Daily challenge (0.9.9.8.1: it is in reviews and the reading passage).

import type { DictEntry } from '../shared/dict';
import { addTo, badges, dictionary, headword, openDictWord, ruOf } from './dictui';
import { tr } from './i18n';
import * as ui from './ui';
import { speak, voiceAvailable } from './voice';

const $ = ui.$;
const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};

/** where the panel is offered */
const DICT_SCREENS = new Set(['menu', 'queue', 'admin', 'modes', 'lobby', 'results', 'study', 'review', 'passage', 'customize', 'history', 'progress', 'friends']);
/** screens of a room: "Full entry" would take you out of it, so it isn't offered there */
const ROOM_SCREENS = new Set(['lobby', 'queue', 'results']);
let signedIn = false;
let screen = '';
let hits: DictEntry[] = [];
let busy = 0;

export function setDictRailUser(on: boolean) {
  signedIn = on;
  if (!on) show(false);
}
/** Called on every screen change. */
export function dictRailScreen(s: string) {
  screen = s;
  show(signedIn && DICT_SCREENS.has(s));
}
function show(on: boolean) {
  $('dictRail').hidden = !on;
  $('dictFab').hidden = !on;
  document.body.classList.toggle('has-dict', on);
  if (!on) setOpen(false);
}

function setOpen(on: boolean) {
  const rail = $('dictRail');
  if (rail.classList.contains('open') === on) return;
  rail.classList.toggle('open', on);
  $('dictRailTab').setAttribute('aria-expanded', String(on));
  $('dictFab').setAttribute('aria-expanded', String(on));
  if (on) {
    const q = $<HTMLInputElement>('dictRailQ');
    setTimeout(() => q.focus(), 60);
    if (!q.value.trim()) drawHint();
    void dictionary().catch(() => { /* said when you search */ }); // starts loading while you type
  }
}
const toggle = () => setOpen(!$('dictRail').classList.contains('open'));
$('dictRailTab').onclick = (e) => { e.stopPropagation(); toggle(); };
$('dictFab').onclick = (e) => { e.stopPropagation(); toggle(); };
$('dictRailClose').onclick = () => setOpen(false);
document.addEventListener('pointerdown', (e) => {
  const t = e.target as HTMLElement;
  if ($('dictRail').classList.contains('open') && !t.closest('#dictRail, #dictFab, dialog, .toast, .kanji-pop')) setOpen(false);
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && $('dictRail').classList.contains('open')) { setOpen(false); (document.activeElement as HTMLElement | null)?.blur(); } });

function drawHint() {
  $('dictRailBody').replaceChildren(h('p', 'hint dr-hint', tr('Type a word in kanji, kana, romaji, English or Russian.')));
}

async function search(q: string) {
  q = q.trim();
  if (!q) { hits = []; drawHint(); return; }
  const n = ++busy;
  try {
    const d = await dictionary();
    if (n !== busy) return;
    hits = d.search(q, 25);
    drawList(q);
  } catch {
    if (n === busy) $('dictRailBody').replaceChildren(h('p', 'hint dr-hint', tr('The dictionary couldn’t load — open it once with internet, then it works offline too.')));
  }
}

function drawList(q: string) {
  const body = $('dictRailBody');
  if (!hits.length) { body.replaceChildren(h('p', 'hint dr-hint', `${tr('Nothing found for')} “${q}”`)); return; }
  const list = h('div', 'dr-list');
  for (const w of hits) {
    const b = h('button', 'dr-hit', undefined, { type: 'button' });
    const top = h('div', 'dr-top');
    top.append(h('span', 'dr-w', w.kanji[0] ?? w.kana[0] ?? '', { lang: 'ja' }));
    if (w.kanji[0]) top.append(h('span', 'dr-k', w.kana[0] ?? '', { lang: 'ja' }));
    if (w.form) top.append(h('span', 'dr-form', `← ${w.form.split(' · ').map((x) => tr(x)).join(' · ')}`));
    b.append(top, h('span', 'dr-m', (ruOf(w) ?? w.senses.map((s) => s[1])).slice(0, 2).join('; '), { 'data-no-i18n': '' }));
    b.onclick = () => drawWord(w);
    list.append(b);
  }
  body.replaceChildren(list);
  body.scrollTop = 0;
}

function drawWord(w: DictEntry) {
  const body = $('dictRailBody');
  const page = h('div', 'dr-word');
  const back = h('button', 'pill dr-back', `← ${tr('Results')}`, { type: 'button' });
  back.onclick = () => drawList($<HTMLInputElement>('dictRailQ').value.trim());
  const head = h('div', 'dr-whead');
  head.append(headword(w), h('div', 'dw-romaji', w.romaji, { 'data-no-i18n': '' }), badges(w));
  const means = h('ol', 'dr-senses');
  const ru = ruOf(w);
  (ru ?? w.senses.map((s) => s[1])).slice(0, 8).forEach((m) => means.append(h('li', '', m, { 'data-no-i18n': '' })));
  if (ru && w.senses.length) means.append(h('li', 'dr-en', w.senses.slice(0, 2).map((s) => s[1]).join('; '), { 'data-no-i18n': '' }));
  const acts = h('div', 'dr-acts');
  if (voiceAvailable()) { const s = h('button', 'pill', '🔊', { type: 'button', title: tr('Listen') }); s.onclick = () => void speak(w.kana[0] ?? ''); acts.append(s); }
  acts.append(addTo(w));
  if (!ROOM_SCREENS.has(screen)) {
    const full = h('button', 'pill', `${tr('Full entry')} →`, { type: 'button' });
    full.onclick = () => { setOpen(false); openDictWord(w.i); };
    acts.append(full);
  }
  page.append(back, head, means, acts);
  body.replaceChildren(page);
  body.scrollTop = 0;
}

{
  const q = $<HTMLInputElement>('dictRailQ');
  let t = 0;
  q.addEventListener('input', () => { clearTimeout(t); t = window.setTimeout(() => void search(q.value), 90); }); // (after every letter)
  q.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); clearTimeout(t); void search(q.value); } });
}
