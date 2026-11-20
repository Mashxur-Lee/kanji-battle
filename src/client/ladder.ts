// 0.9.9.9.9: the ranked ladder — your rating and tier on the Online queue screen, and the Ladder (the top 50, and
// your friends) in a window. Ranked: every 1v1 from the online queue (see shared/ranked.ts).
import { api, type LadderView } from './api';
import { tr } from './i18n';
import * as ui from './ui';

const el = (tag: string, cls = '', text?: string | number) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = String(text); return e; };

const rankChip = ui.rankChip;

let last: LadderView | null = null;
/** the Online queue screen: your rank, and the Ladder button */
export async function renderRankBox() {
  const box = document.getElementById('rankBox');
  if (!box) return;
  try { last = await api.ladder(); } catch { box.hidden = true; return; }
  const me = last.me;
  const chip = rankChip(me) ?? el('span', 'rank-chip rk-placement', tr('Not ranked yet'));
  const line = el('span', 'rk-line', me.rank ? `#${me.rank}` : me.games ? '' : tr('Your first ranked game sets your rating'));
  const btn = el('button', 'pill', tr('Ladder')) as HTMLButtonElement;
  btn.type = 'button';
  btn.onclick = () => openLadder();
  box.replaceChildren(el('span', 'rk-label', tr('Ranked')), chip, line, btn);
  box.hidden = false;
}

export async function openLadder() {
  if (!last) try { last = await api.ladder(); } catch (e) { ui.toast((e as Error).message); return; }
  const d = el('dialog', 'friend-dialog ladder-dialog') as HTMLDialogElement;
  const head = el('div', 'ld-head');
  const close = el('button', 'pill', tr('Close')) as HTMLButtonElement;
  close.type = 'button'; close.onclick = () => d.close();
  head.append(el('h3', '', tr('Ranked ladder')), close);
  const tabs = el('div', 'word-tabs');
  const list = el('ol', 'ld-list');
  const show = (which: 'top' | 'friends') => {
    for (const b of tabs.querySelectorAll('button')) b.setAttribute('aria-selected', String(b.dataset.t === which));
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
  for (const [t, label] of [['top', 'Top players'], ['friends', 'Friends']] as const) {
    const b = el('button', 'word-tab', tr(label)) as HTMLButtonElement;
    b.type = 'button'; b.dataset.t = t; b.setAttribute('role', 'tab');
    b.onclick = () => show(t);
    tabs.append(b);
  }
  const me = last.me;
  const mine = el('p', 'hint ld-me');
  mine.append(el('span', '', `${tr('You')}: `), rankChip(me) ?? el('span', '', tr('Not ranked yet')), el('span', '', me.rank ? ` #${me.rank}` : ''));
  const how = el('p', 'hint', tr('Every 1v1 from the online queue is ranked: beat someone rated higher and you gain more. Private rooms, bots, Boss and rematches don’t count; leaving a ranked game is a loss. Your tier shows after 5 games.'));
  d.append(head, mine, tabs, list, how);
  d.addEventListener('close', () => d.remove());
  document.body.append(d);
  d.showModal();
  show('top');
}
