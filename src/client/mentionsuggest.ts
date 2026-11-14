// 0.9.9.9.6.4: typing "@" in a chat suggests people — your friends (and the group's members, the room's players) —
// narrowed with every letter; tap one (or ↑ ↓ and Enter / Tab) and it becomes "@login ".
import * as ui from './ui';
import { viewH, viewW, zrect } from './zoom';
import { tr } from './i18n';

export interface Mentionable { id: string; name: string; login: string; pic?: string | null }

function h(tag: string, cls = '', text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

/** the "@abc" right before the caret, if any */
function tokenAt(i: HTMLInputElement | HTMLTextAreaElement): { start: number; q: string } | null {
  const end = i.selectionStart ?? i.value.length;
  if (end !== (i.selectionEnd ?? end)) return null;
  const m = /(^|[\s(])@([\w.-]{0,32})$/.exec(i.value.slice(0, end));
  return m ? { start: end - m[2].length - 1, q: m[2].toLowerCase() } : null;
}

export function rank(people: Mentionable[], q: string, max = 8): Mentionable[] {
  const seen = new Set<string>();
  const uniq = people.filter((p) => p.login && !seen.has(p.id) && seen.add(p.id));
  const score = (p: Mentionable) => {
    const l = p.login.toLowerCase(), n = p.name.toLowerCase();
    if (!q) return 2;
    if (l.startsWith(q) || n.startsWith(q)) return 0;
    if (l.includes(q) || n.includes(q)) return 1;
    return 9;
  };
  return uniq.map((p) => ({ p, s: score(p) })).filter((x) => x.s < 9).sort((a, b) => a.s - b.s || a.p.name.localeCompare(b.p.name)).slice(0, max).map((x) => x.p);
}

export function attachMentionSuggest(input: HTMLInputElement | HTMLTextAreaElement, people: () => Mentionable[]) {
  const box = h('div', 'ms-pop');
  box.setAttribute('role', 'listbox');
  box.hidden = true;
  document.body.append(box);
  let list: Mentionable[] = [], at = 0, tok: { start: number; q: string } | null = null;
  const close = () => { box.hidden = true; list = []; tok = null; };
  const pick = (p: Mentionable) => {
    if (!tok) return;
    const end = input.selectionStart ?? input.value.length;
    const text = `@${p.login} `;
    input.value = input.value.slice(0, tok.start) + text + input.value.slice(end);
    const caret = tok.start + text.length;
    input.selectionStart = input.selectionEnd = caret;
    close();
    input.focus();
    input.dispatchEvent(new Event('input', { bubbles: true }));
  };
  const paint = () => {
    box.replaceChildren(...list.map((p, i) => {
      const r = h('button', `ms-row${i === at ? ' on' : ''}`) as HTMLButtonElement;
      r.type = 'button'; r.setAttribute('role', 'option');
      const av = h('span', 'ms-av');
      const img = ui.picEl(p.pic ?? null, 'pic fill');
      if (img) av.append(img); else av.textContent = (p.name || '?').slice(0, 1).toUpperCase();
      const t = h('span', 'ms-t');
      t.append(h('b', '', p.name), h('small', '', `@${p.login}`));
      r.append(av, t);
      r.onpointerdown = (e) => e.preventDefault(); // (the box keeps the keyboard up)
      r.onclick = () => pick(p);
      return r;
    }));
    const rc = zrect(input); // (the page's own pixels: the page may be zoomed)
    const w = Math.min(320, Math.max(220, rc.width));
    box.style.width = `${w}px`;
    box.style.left = `${Math.max(8, Math.min(viewW() - w - 8, rc.left))}px`;
    box.style.bottom = `${Math.max(8, viewH() - rc.top + 6)}px`;
  };
  const update = () => {
    tok = tokenAt(input);
    if (!tok) { close(); return; }
    list = rank(people(), tok.q);
    if (!list.length) { box.hidden = false; box.replaceChildren(h('p', 'ms-none', tr('No friend by that name'))); const rc = zrect(input); box.style.left = `${Math.max(8, rc.left)}px`; box.style.bottom = `${viewH() - rc.top + 6}px`; box.style.width = '220px'; list = []; return; }
    at = Math.min(at, list.length - 1);
    box.hidden = false;
    paint();
  };
  input.addEventListener('input', () => { at = 0; update(); });
  input.addEventListener('click', update);
  input.addEventListener('blur', () => setTimeout(close, 120));
  // (first, before the box's own Enter-sends)
  input.addEventListener('keydown', (e) => {
    const k = e as KeyboardEvent;
    if (box.hidden || !list.length) { if (k.key === 'Escape' && !box.hidden) close(); return; }
    if (k.key === 'ArrowDown' || k.key === 'ArrowUp') { k.preventDefault(); at = (at + (k.key === 'ArrowDown' ? 1 : -1) + list.length) % list.length; paint(); }
    else if (k.key === 'Enter' || k.key === 'Tab') { k.preventDefault(); k.stopImmediatePropagation(); pick(list[at]); }
    else if (k.key === 'Escape') { k.preventDefault(); k.stopImmediatePropagation(); close(); }
  }, true);
  return { close };
}
