/**
 * 0.9.9.9.3: a tap outside an open panel (dictionary, friends) or list only closes it — the button under the finger
 * isn't pressed too. Call from the pointerdown that closes it: the click that follows is swallowed.
 */
export function swallowNextClick() {
  const eat = (e: Event) => { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); done(); };
  const done = () => { removeEventListener('click', eat, true); clearTimeout(t); };
  addEventListener('click', eat, true);
  const t = window.setTimeout(done, 700); // a long press / drag never sends a click: don't eat a later one
}
