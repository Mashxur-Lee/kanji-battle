// 0.9.9.9.9: the ranked ladder — your rating and tier on the Online queue screen, and the Ladder (the top 50, and
// your friends) in a window. Ranked: every 1v1 from the online queue (see shared/ranked.ts).
import { api, type LadderView } from './api';
import { tr } from './i18n';
import * as ui from './ui';
import { PLACEMENT, TIERS } from '../shared/ranked';

const el = (tag: string, cls = '', text?: string | number) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = String(text); return e; };

const rankChip = ui.rankChip;

let last: LadderView | null = null;
/** the Online queue screen: your rank, and the Ladder button */
export async function renderRankBox() {
  const box = document.getElementById('rankBox');
  if (!box) return;
  try { last = await api.ladder(); } catch { box.hidden = true; return; }
  const me = last.me;
  // 0.9.9.9.9.5: one rank card — your emblem (or Unranked, and how far into your placement games), tap: every rank
  const t = TIERS.find((x) => x.id === me.tier) ?? null;
  const card = el('button', `rank-card${t ? ` rk-${t.id}` : ' rk-unranked'}`) as HTMLButtonElement;
  card.type = 'button';
  if (t) card.style.setProperty('--rk', t.color);
  const crest = el('span', 'rc-crest'); crest.setAttribute('aria-hidden', 'true');
  const txt = el('span', 'rc-txt');
  txt.append(el('b', 'rc-name', t ? tr(t.name) : tr('Unranked')), el('small', 'rc-sub', t ? `${me.rating}${me.rank ? ` · #${me.rank}` : ''}` : `${tr('Placement')} ${me.placement ?? me.games ?? 0}/${PLACEMENT}`));
  const more = el('span', 'rc-more', '!'); more.setAttribute('aria-hidden', 'true');
  card.append(crest, txt, more);
  card.title = tr('Ranked: Rapid and Deck Duel from the online queue. Tap to see all ranks');
  card.onclick = () => openLadder('ranks');
  box.replaceChildren(card);
  box.hidden = false;
}

export async function openLadder(start: 'top' | 'friends' | 'ranks' = 'top') {
  if (!last) try { last = await api.ladder(); } catch (e) { ui.toast((e as Error).message); return; }
  const d = el('dialog', 'friend-dialog ladder-dialog') as HTMLDialogElement;
  const head = el('div', 'ld-head');
  const close = el('button', 'pill', tr('Close')) as HTMLButtonElement;
  close.type = 'button'; close.onclick = () => d.close();
  head.append(el('h3', '', tr('Ranked ladder')), close);
  const tabs = el('div', 'word-tabs');
  const list = el('ol', 'ld-list');
  const show = (which: 'top' | 'friends' | 'ranks') => {
    for (const b of tabs.querySelectorAll('button')) b.setAttribute('aria-selected', String(b.dataset.t === which));
    if (which === 'ranks') { // (0.9.9.9.9.5: every rank, the rating it starts at, yours lit)
      list.replaceChildren(...[...TIERS].reverse().map((t) => {
        const li = el('li', 'ld-row ld-tier' + (t.id === last!.me.tier ? ' me' : ''));
        li.style.setProperty('--rk', t.color);
        li.append(el('span', 'rc-crest'), el('span', 'ld-name', tr(t.name)), el('b', 'ld-rating', `${t.min}+`));
        return li;
      }));
      return;
    }
    const rows = which === 'top' ? last!.top : last!.friends;
    list.replaceChildren(...(rows.length ? rows.map((r) => {
      const li = el('li', 'ld-row' + (r.id === last!.me.id ? ' me' : ''));
      const who = el('span', 'ld-who');
      who.append(ui.picOrLetter(r.pic, r.name, 'pic'), el('span', 'ld-name', r.name));
      ui.markProfile(who, { id: r.id, name: r.name, bot: null });
      li.append(el('b', 'ld-place', r.place ? `#${r.place}` : '–'), who, rankChip(r, false) ?? el('span'), el('b', 'ld-rating', r.rating));
      return li;
    }) : [el('li', 'ld-empty', tr(which === 'top' ? 'Nobody has finished their placement games yet - be the first!' : 'None of your friends has played ranked yet.'))]));
  };
  for (const [t, label] of [['top', 'Top players'], ['friends', 'Friends'], ['ranks', 'All ranks']] as const) {
    const b = el('button', 'word-tab', tr(label)) as HTMLButtonElement;
    b.type = 'button'; b.dataset.t = t; b.setAttribute('role', 'tab');
    b.onclick = () => show(t);
    tabs.append(b);
  }
  const me = last.me;
  const mine = el('p', 'hint ld-me');
  mine.append(el('span', '', `${tr('You')}: `), rankChip(me) ?? el('span', '', tr('Not ranked yet')), el('span', '', me.rank ? ` #${me.rank}` : ''));
  const how = el('p', 'hint', tr('Rapid and Deck Duel from the online queue are ranked: beat someone rated higher and you gain more. Reading, Writing, Boss, private rooms, bots and rematches don’t count; leaving a ranked game is a loss. Your tier shows after 5 games.'));
  d.append(head, mine, tabs, list, how);
  d.addEventListener('close', () => d.remove());
  document.body.append(d);
  d.showModal();
  show(start);
}
