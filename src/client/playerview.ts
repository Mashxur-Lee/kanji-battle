// 0.9.9.9.5.5: "View profile" — a friend's (or anyone's) whole profile: their picture, level and badges, what they wear
// (their Customize: character, staff, arena, flames, pose, border) and every achievement they have.
import type { PublicProfile } from '../shared/protocol';
import { ACH_PREFIX, ACHIEVEMENTS } from '../shared/achievements';
import { badgeRow, renderAchievements } from './achievements';
import { lookCard } from './study';
import * as ui from './ui';

function h(tag: string, cls = '', text?: string | number): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
}

export function showPlayer(p: PublicProfile, extra?: HTMLElement) {
  const d = ui.$<HTMLDialogElement>('playerDialog');
  const pic = h('div', 'pp-pic big' + (p.pic ? ' has-pic' : '') + ui.borderCls(p.border), p.pic ? '' : p.name.slice(0, 1).toUpperCase());
  const img = ui.picEl(p.pic, 'pic fill');
  if (img) pic.append(img);
  const meta = h('div', 'pv-meta');
  meta.append(h('div', 'pp-name', p.name));
  if (p.login) meta.append(h('div', 'pp-login', `@${p.login}`));
  meta.append(h('div', 'pp-level', `Lv ${p.level}`));
  const row = badgeRow(p.badges);
  if (row) meta.append(row);
  const head = h('div', 'pv-head');
  head.append(pic, meta);
  const body: HTMLElement[] = [head];
  if (extra) body.push(extra);
  if (p.look) {
    const sec = h('section', 'pv-sec');
    sec.append(h('h3', '', 'Their look'), lookCard(p.look, p.pic, p.name));
    body.push(sec);
  }
  const ach = h('section', 'pv-sec ach-box');
  const have = new Set(p.achievements ?? []);
  renderAchievements(ach, [...have].filter((id) => ACHIEVEMENTS.some((a) => a.id === id)).map((id) => ACH_PREFIX + id), p.badges ?? [], undefined, null);
  body.push(ach);
  ui.$('playerBody').replaceChildren(...body);
  ui.$('playerClose').onclick = () => d.close();
  d.onclick = (e) => { if (e.target === d) d.close(); };
  ui.hideProfileCard();
  if (!d.open) d.showModal();
  ui.$('playerBody').scrollTop = 0;
}
