// 0.9.9.9.9.6: decks of your own on the Study page — make one, name it, put words in (typed, pasted from a list,
// Quizlet's or Anki's text export, or an Anki deck file .apkg straight from AnkiDroid), study it. Each word is a card in
// "My words" (the same spaced repetition); a deck's Study reviews only its own cards.
import { api } from './api';
import { tr } from './i18n';
import * as ui from './ui';
import { deckIndexExtras, forgetDeckIndex, openDictionary } from './dictui';

const $ = ui.$;
const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = tr(text);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};

export interface UserDeckView { id: string; name: string; count: number; due: number; fresh: number }
let decks: UserDeckView[] = [];
let startSession: (set: { id: string; name: string }) => void = () => {};
let changed: () => void = () => {};

export function initUserDecks(o: { study: (set: { id: string; name: string }) => void; changed: () => void }) {
  startSession = o.study; changed = o.changed;
  $('studyDict').onclick = () => openDictionary();
  $('studyNewDeck').onclick = () => void newDeck();
  $('studyImport').onclick = () => void importInto(null);
  // the dictionary shows "in <your deck>" too
  deckIndexExtras.push(async (add) => {
    const list = (await api.userDecks()).decks;
    for (const d of list) for (const w of (await api.userDeckWords(d.id)).words) { add(w.vocabId, d.name); add(`${w.kanji}|${w.reading}`, d.name); }
  });
}

export async function renderUserDecks() {
  const box = $('userDecks');
  try { decks = (await api.userDecks()).decks; } catch { decks = []; }
  box.replaceChildren(...decks.map((d) => {
    const card = h('div', 'ud-card');
    const head = h('div', 'ud-head');
    head.append(h('b', 'ud-name', undefined), h('span', 'ud-count', `${d.count} ${d.count === 1 ? 'word' : 'words'}`));
    head.querySelector('.ud-name')!.textContent = d.name;
    const stat = h('div', 'ud-stat', `${d.fresh} new · ${d.due} due`);
    const btns = h('div', 'ud-btns');
    const study = h('button', 'pill primary', 'Study', { type: 'button' }) as HTMLButtonElement;
    study.disabled = d.fresh + d.due === 0;
    study.onclick = () => startSession({ id: d.id, name: d.name });
    const words = h('button', 'pill', 'Words', { type: 'button' }); words.onclick = () => void showWords(d);
    const add = h('button', 'pill', '+ Add words', { type: 'button' }); add.onclick = () => void importInto(d);
    const more = h('button', 'pill ud-more', 'Rename', { type: 'button' }); more.onclick = () => void renameDeck(d);
    const del = h('button', 'pill ud-del', 'Delete', { type: 'button' }); del.onclick = () => void deleteDeck(d);
    btns.append(study, words, add, more, del);
    card.append(head, stat, btns);
    return card;
  }));
}

// ── a small window of our own (name a deck, add words, its word list) ──
function sheet(title: string): { d: HTMLDialogElement; body: HTMLElement; close: () => void } {
  let d = document.getElementById('udDialog') as HTMLDialogElement | null;
  if (!d) { d = document.createElement('dialog'); d.id = 'udDialog'; d.className = 'ud-dialog'; document.body.append(d); }
  const x = h('button', 'dlg-x', undefined, { type: 'button', 'aria-label': tr('Close') }); x.textContent = '✕';
  const body = h('div', 'ud-body');
  d.replaceChildren(h('h3', '', title), x, body);
  const close = () => d!.close();
  x.onclick = close;
  if (!d.open) d.showModal();
  return { d, body, close };
}
function askName(title: string, start = ''): Promise<string | null> {
  return new Promise((done) => {
    const { d, body, close } = sheet(title);
    const input = h('input', 'ud-input', undefined, { type: 'text', maxlength: '40', placeholder: tr('e.g. Genki chapter 3') }) as HTMLInputElement;
    input.value = start;
    const ok = h('button', 'big', 'Save', { type: 'button' });
    const finish = (v: string | null) => { d.removeEventListener('close', onClose); close(); done(v); };
    const onClose = () => done(null);
    d.addEventListener('close', onClose, { once: true });
    ok.onclick = () => { const v = input.value.trim(); if (v) finish(v); else input.focus(); };
    input.onkeydown = (e) => { if (e.key === 'Enter') ok.click(); };
    body.append(input, ok);
    setTimeout(() => input.focus(), 40);
  });
}
async function newDeck(): Promise<UserDeckView | null> {
  const name = await askName('New deck');
  if (!name) return null;
  try { const r = await api.userDeckCreate(name); await renderUserDecks(); return decks.find((x) => x.id === r.deck.id) ?? null; }
  catch (e) { ui.toast((e as Error).message); return null; }
}
async function renameDeck(d: UserDeckView) {
  const name = await askName('Rename the deck', d.name);
  if (!name || name === d.name) return;
  try { await api.userDeckRename(d.id, name); forgetDeckIndex(); await renderUserDecks(); } catch (e) { ui.toast((e as Error).message); }
}
async function deleteDeck(d: UserDeckView) {
  if (!(await ui.confirmBox('Delete this deck?', `“${d.name}” goes; its words stay in My words with their progress.`, 'Delete', 'Cancel'))) return;
  try { await api.userDeckDelete(d.id); forgetDeckIndex(); await renderUserDecks(); } catch (e) { ui.toast((e as Error).message); }
}

/** add words: type or paste them (one a line), or pick a file — Anki .apkg, or a text / CSV export */
async function importInto(target: UserDeckView | null) {
  let deck = target;
  if (!deck) { deck = await newDeck(); if (!deck) return; }
  const { body, close } = sheet(`${tr('Add words to')} “${deck.name}”`);
  const how = h('p', 'hint', 'One word a line: the word, then its reading and meaning (separated by a tab, ; or ,). Or pick a file: an Anki deck (.apkg from AnkiDroid or Anki - export it without media), or a text / CSV export from Quizlet or Anki.');
  const area = h('textarea', 'ud-area', undefined, { rows: '7', placeholder: '先生\tせんせい\tteacher\n勉強; べんきょう; study\n猫 ねこ cat', lang: 'ja' }) as HTMLTextAreaElement;
  const file = h('input', '', undefined, { type: 'file', accept: '.apkg,.colpkg,.txt,.csv,.tsv' }) as HTMLInputElement;
  const pick = h('button', 'pill', 'Choose a file…', { type: 'button' }); pick.onclick = () => file.click();
  const go = h('button', 'big', 'Add', { type: 'button' }) as HTMLButtonElement;
  const out = h('div', 'ud-out');
  const done = async (p: Promise<{ added: number; skipped: Array<{ line: number; word: string; why: string }> }>) => {
    go.disabled = true; out.textContent = tr('Adding…');
    try {
      const r = await p;
      out.replaceChildren(h('b', '', `${r.added} ${r.added === 1 ? 'word added' : 'words added'}`));
      if (r.skipped.length) { const ul = h('ul', 'ud-skip'); for (const s of r.skipped.slice(0, 12)) { const li = h('li'); li.textContent = `${s.line}. ${s.word} - ${tr(s.why)}`; ul.append(li); } out.append(h('p', 'hint', `${r.skipped.length} skipped:`), ul); }
      area.value = '';
      forgetDeckIndex(); await renderUserDecks(); changed();
    } catch (e) { out.textContent = (e as Error).message; }
    go.disabled = false;
  };
  go.onclick = () => { if (area.value.trim()) void done(api.userDeckAdd(deck!.id, area.value)); else area.focus(); };
  file.onchange = async () => {
    const f = file.files?.[0];
    file.value = '';
    if (!f) return;
    if (f.size > 20 * 1024 * 1024) { out.textContent = tr('The deck file is too big (20 MB) - export it without media'); return; }
    if (/\.(apkg|colpkg)$/i.test(f.name)) {
      const b64 = await new Promise<string>((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).replace(/^data:[^,]*,/, '')); r.onerror = () => rej(r.error); r.readAsDataURL(f); });
      void done(api.userDeckImport(deck!.id, b64));
    } else {
      area.value = (await f.text()).slice(0, 400_000);
      void done(api.userDeckAdd(deck!.id, area.value));
    }
  };
  const row = h('div', 'ud-row'); row.append(pick, go);
  body.append(how, area, row, out);
  void close;
}

async function showWords(d: UserDeckView) {
  const { body } = sheet(d.name);
  body.append(h('p', 'hint', 'Loading…'));
  try {
    const r = await api.userDeckWords(d.id);
    const list = h('div', 'ud-words');
    for (const w of r.words) {
      const row = h('div', 'ud-word');
      const jp = h('span', 'ud-w', undefined, { lang: 'ja' }); jp.textContent = w.kanji;
      const rd = h('small', '', undefined, { lang: 'ja' }); rd.textContent = w.reading;
      const mn = h('span', 'ud-m'); mn.textContent = w.meaning;
      const x = h('button', 'ud-x', undefined, { type: 'button', title: tr('Remove'), 'aria-label': tr('Remove') }); x.textContent = '✕';
      x.onclick = async () => { try { await api.userDeckRemove(d.id, [w.vocabId]); row.remove(); forgetDeckIndex(); void renderUserDecks(); } catch (e) { ui.toast((e as Error).message); } };
      row.append(jp, rd, mn, x);
      list.append(row);
    }
    body.replaceChildren(r.words.length ? list : h('p', 'hint', 'No words yet - add some.'));
  } catch (e) { body.replaceChildren(h('p', 'hint', (e as Error).message)); }
}
