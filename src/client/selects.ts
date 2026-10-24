// 0.9.9.4: themed dropdowns. Every <select> in the page (now or added later) gets a button + popup list in
// the game's style; the real <select> stays in the DOM, hidden, and keeps the value — so code that reads
// `sel.value`, sets it, or listens for "change" works unchanged. Opt out with data-native.

const done = new WeakSet<HTMLSelectElement>();
let openMenu: { close: () => void } | null = null;

function enhance(sel: HTMLSelectElement) {
  if (done.has(sel) || sel.multiple || sel.size > 1 || sel.hasAttribute('data-native')) return;
  done.add(sel);
  const wrap = document.createElement('span');
  wrap.className = 'csel ' + sel.className;
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'csel-btn';
  btn.setAttribute('aria-haspopup', 'listbox');
  const label = document.createElement('span');
  label.className = 'csel-label';
  const chev = document.createElement('span');
  chev.className = 'csel-chev';
  chev.setAttribute('aria-hidden', 'true');
  btn.append(label, chev);
  sel.replaceWith(wrap);
  wrap.append(sel, btn);
  sel.classList.add('csel-native');
  sel.tabIndex = -1;
  sel.setAttribute('aria-hidden', 'true');

  const sync = () => {
    const o = sel.selectedOptions[0] ?? sel.options[0];
    label.textContent = o?.textContent ?? '';
    btn.disabled = sel.disabled;
    const aria = sel.getAttribute('aria-label') ?? sel.title;
    if (aria) btn.setAttribute('aria-label', `${aria}: ${label.textContent}`);
    if (sel.title) btn.title = sel.title;
  };
  // programmatic `sel.value = …` / `selectedIndex = …` don't fire events: hook the instance's setters
  for (const prop of ['value', 'selectedIndex'] as const) {
    const d = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, prop)!;
    Object.defineProperty(sel, prop, { configurable: true, get() { return d.get!.call(this); }, set(v) { d.set!.call(this, v); sync(); } });
  }
  new MutationObserver(sync).observe(sel, { childList: true, subtree: true, attributes: true, characterData: true });
  sel.addEventListener('change', sync);

  let menu: HTMLElement | null = null;
  let active = -1;
  const items = () => [...(menu?.querySelectorAll<HTMLElement>('.csel-opt:not(.off)') ?? [])];
  const mark = (i: number) => {
    const list = items();
    if (!list.length) return;
    active = (i + list.length) % list.length;
    list.forEach((x, k) => x.classList.toggle('act', k === active));
    list[active].scrollIntoView({ block: 'nearest' });
  };
  const close = () => {
    if (!menu) return;
    menu.remove(); menu = null; wrap.classList.remove('open'); btn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('pointerdown', outside, true);
    if (openMenu?.close === close) openMenu = null;
  };
  const pick = (i: number) => {
    if (i < 0 || i === sel.selectedIndex) { close(); btn.focus(); return; }
    sel.selectedIndex = i;
    sel.dispatchEvent(new Event('input', { bubbles: true }));
    sel.dispatchEvent(new Event('change', { bubbles: true }));
    close(); btn.focus();
  };
  const outside = (e: Event) => { if (!wrap.contains(e.target as Node)) close(); };
  const open = () => {
    if (menu || sel.disabled) return;
    openMenu?.close();
    menu = document.createElement('div');
    menu.className = 'csel-menu';
    menu.setAttribute('role', 'listbox');
    [...sel.options].forEach((o, i) => {
      if (o.hidden) return;
      const it = document.createElement('div');
      it.className = 'csel-opt' + (o.disabled ? ' off' : '') + (i === sel.selectedIndex ? ' sel' : '');
      it.setAttribute('role', 'option');
      it.setAttribute('aria-selected', String(i === sel.selectedIndex));
      it.textContent = o.textContent;
      it.dataset.i = String(i);
      if (!o.disabled) it.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); pick(i); });
      menu!.append(it);
    });
    wrap.append(menu);
    wrap.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    // open upwards when there's no room below (inside the nearest scrolling box or the window)
    const r = btn.getBoundingClientRect();
    const box = (wrap.closest('dialog') ?? document.documentElement).getBoundingClientRect();
    const bottom = Math.min(box.bottom, window.innerHeight);
    const below = bottom - r.bottom, above = r.top - Math.max(box.top, 0);
    menu.classList.toggle('up', below < Math.min(menu.getBoundingClientRect().height, 260) && above > below);
    const list = items();
    mark(Math.max(0, list.findIndex((x) => x.classList.contains('sel'))));
    openMenu = { close };
    setTimeout(() => document.addEventListener('pointerdown', outside, true));
  };
  btn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); menu ? close() : open(); });
  btn.addEventListener('keydown', (e) => {
    if (!menu) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); open(); }
      return;
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); mark(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); mark(active - 1); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const it = items()[active]; pick(it ? +it.dataset.i! : -1); }
    else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); }
    else if (e.key === 'Tab') close();
  });
  // a <label> around the select: clicking its text opens the list instead of focusing the hidden select
  const lab = wrap.closest('label');
  if (lab) lab.addEventListener('click', (e) => { if (!wrap.contains(e.target as Node)) { e.preventDefault(); btn.focus(); } });
  sync();
}

/** Enhance every select now and whenever new ones appear. */
export function initSelects(root: ParentNode = document) {
  root.querySelectorAll('select').forEach((s) => enhance(s as HTMLSelectElement));
  new MutationObserver((muts) => {
    for (const m of muts) for (const n of m.addedNodes) {
      if (n instanceof HTMLSelectElement) enhance(n);
      else if (n instanceof HTMLElement) n.querySelectorAll('select').forEach((s) => enhance(s as HTMLSelectElement));
    }
  }).observe(document.body, { childList: true, subtree: true });
  window.addEventListener('resize', () => openMenu?.close());
}
