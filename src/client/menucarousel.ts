// 0.9.9.9.5.1: on a computer the main menu's mode cards are a carousel, in the spirit of racing-game menus (Blur):
// the card in the middle is big and lit, the others turn away to the sides, smaller and dimmer, and the deck goes
// round. ← → / the wheel / dragging / a click on a side card turns it; a click (or Enter) on the middle card opens it.
// Phones and narrow windows keep the grid of cards.

const WIDE = '(min-width: 1101px) and (min-height: 560px)';
const TOUCH = '(pointer: coarse)'; // (phones and tablets keep the grid)
const KEY = 'kb:menuCard';
/** how far each place from the middle sits: sideways (× the card width), turned, pushed back, scaled, shown */
const PLACE = [
  { x: 0, ry: 0, z: 0, s: 1, o: 1 },
  { x: 0.98, ry: 28, z: -140, s: 0.84, o: 0.92 },
  { x: 1.7, ry: 40, z: -280, s: 0.7, o: 0.6 },
  { x: 2.2, ry: 50, z: -400, s: 0.58, o: 0 },
];

let box: HTMLElement;
let items: HTMLElement[] = [];
let active = 0;
let on = false;
let prev: HTMLButtonElement, next: HTMLButtonElement, dots: HTMLElement;

const cardOf = (it: HTMLElement) => (it.matches('.mc-card') ? it : it.querySelector<HTMLElement>('.mc-card')!);

function layout() {
  const n = items.length;
  const w = items[0]?.offsetWidth || 300;
  items.forEach((it, i) => {
    // the shortest way round: -2 … +3 for six cards
    let d = (((i - active) % n) + n) % n;
    if (d > n / 2) d -= n;
    const a = Math.min(Math.abs(d), PLACE.length - 1);
    const p = PLACE[a];
    const sign = Math.sign(d);
    it.style.transform = `translateX(calc(-50% + ${sign * p.x * w}px)) translateZ(${p.z}px) rotateY(${-sign * p.ry}deg) scale(${p.s})`;
    it.style.opacity = String(p.o);
    it.style.zIndex = String(10 - a);
    it.classList.toggle('mcc-active', d === 0);
    it.classList.toggle('mcc-side', d !== 0);
    it.setAttribute('aria-hidden', String(p.o === 0));
    cardOf(it).tabIndex = d === 0 ? 0 : -1;
  });
  dots.querySelectorAll('i').forEach((d, i) => d.classList.toggle('on', i === active));
  try { sessionStorage.setItem(KEY, String(active)); } catch { /* fine */ }
}
export function turn(by: number) {
  if (!on || !items.length) return;
  active = (((active + by) % items.length) + items.length) % items.length;
  layout();
}
function focusOn(i: number) { active = i; layout(); }

function enable() {
  if (on) return;
  on = true;
  items = [...box.children].filter((c): c is HTMLElement => c instanceof HTMLElement && !c.hidden);
  box.classList.add('carousel');
  box.parentElement!.classList.add('has-carousel');
  prev.hidden = next.hidden = dots.hidden = false;
  dots.replaceChildren(...items.map((it, i) => {
    const d = document.createElement('i');
    d.title = cardOf(it).querySelector('.mc-name')?.textContent?.trim() ?? '';
    d.onclick = () => focusOn(i);
    return d;
  }));
  let saved = 0;
  try { saved = Number(sessionStorage.getItem(KEY) ?? 0) || 0; } catch { /* fine */ }
  active = Math.min(Math.max(0, saved), items.length - 1);
  layout();
}
function disable() {
  if (!on) return;
  on = false;
  box.classList.remove('carousel');
  box.parentElement!.classList.remove('has-carousel');
  prev.hidden = next.hidden = dots.hidden = true;
  for (const it of items) {
    it.style.transform = it.style.opacity = it.style.zIndex = '';
    it.classList.remove('mcc-active', 'mcc-side');
    it.removeAttribute('aria-hidden');
    cardOf(it).tabIndex = 0;
  }
}

export function initMenuCarousel() {
  box = document.querySelector<HTMLElement>('#menu .mc-cards')!;
  if (!box) return;
  const wrap = document.createElement('div');
  wrap.className = 'mc-deck';
  box.before(wrap);
  wrap.append(box);
  const arrow = (cls: string, label: string, by: number) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = `mcc-arrow ${cls}`; b.hidden = true;
    b.setAttribute('aria-label', label);
    b.innerHTML = `<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="${by < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    b.onclick = () => turn(by);
    return b;
  };
  // under the deck: ‹ · · · · · › 
  const nav = document.createElement('div');
  nav.className = 'mcc-nav';
  prev = arrow('mcc-prev', 'Previous', -1);
  next = arrow('mcc-next', 'Next', 1);
  dots = document.createElement('div');
  dots.className = 'mcc-dots'; dots.hidden = true;
  nav.append(prev, dots, next);
  wrap.append(nav);

  // a click on a side card turns it to the middle instead of opening it
  box.addEventListener('click', (e) => {
    if (!on) return;
    const it = items.find((x) => x.contains(e.target as Node));
    if (!it || it.classList.contains('mcc-active')) return;
    e.preventDefault(); e.stopImmediatePropagation();
    focusOn(items.indexOf(it));
  }, true);
  // the wheel turns it (one step at a time)
  let wheelAt = 0;
  wrap.addEventListener('wheel', (e) => {
    if (!on) return;
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(d) < 8) return;
    e.preventDefault();
    if (performance.now() - wheelAt < 260) return;
    wheelAt = performance.now();
    turn(d > 0 ? 1 : -1);
  }, { passive: false });
  // dragging sideways turns it
  let downX: number | null = null, dragged = false;
  box.addEventListener('pointerdown', (e) => { if (on && e.pointerType === 'mouse' && e.button === 0) { downX = e.clientX; dragged = false; } });
  addEventListener('pointermove', (e) => {
    if (downX === null) return;
    const dx = e.clientX - downX;
    if (Math.abs(dx) > 70) { turn(dx < 0 ? 1 : -1); downX = e.clientX; dragged = true; }
  });
  addEventListener('pointerup', () => { downX = null; });
  box.addEventListener('click', (e) => { if (dragged) { e.preventDefault(); e.stopImmediatePropagation(); dragged = false; } }, true);
  // keys on the menu: ← → turn, Enter opens the middle card
  addEventListener('keydown', (e) => {
    if (!on || document.getElementById('menu')!.hidden || e.altKey || e.ctrlKey || e.metaKey) return;
    if (document.querySelector('dialog[open]') || (e.target as Element | null)?.closest?.('input, textarea, select, [contenteditable]')) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); turn(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); turn(1); }
    else if (e.key === 'Enter' && !(e.target as Element | null)?.closest?.('button, a')) { e.preventDefault(); cardOf(items[active]).click(); }
  });
  const mq = matchMedia(WIDE), touch = matchMedia(TOUCH);
  const apply = () => (mq.matches && !touch.matches ? enable() : disable());
  mq.addEventListener('change', apply);
  touch.addEventListener('change', apply);
  addEventListener('resize', () => { if (on) layout(); });
  apply();
}
