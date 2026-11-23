// 0.9.9.9.9.5: light effects on weaker phones — the owner: "very low fps and laggy on medium-end mobiles", and a page
// that scrolled fast showed empty halves for a second. On a phone with few cores or little memory, or one whose frames
// come slowly in the first seconds, body.lowfx switches the costliest effects off (see-through blurred layers, blur
// filters, the drifting kanji behind the menu, big text glows, moving background layers); the choice is remembered.
const KEY = 'kb:lowfx';
const coarse = () => matchMedia('(pointer: coarse)').matches;

function set(on: boolean, remember: boolean) {
  document.body.classList.toggle('lowfx', on);
  if (remember) try { localStorage.setItem(KEY, on ? '1' : '0'); } catch { /* private mode */ }
}

export function initPerf() {
  let saved: string | null = null;
  try { saved = localStorage.getItem(KEY); } catch { /* private mode */ }
  if (saved === '1' || saved === '0') { set(saved === '1', false); if (saved === '1') return; }
  if (!coarse()) return;
  const nav = navigator as Navigator & { deviceMemory?: number };
  if ((nav.hardwareConcurrency ?? 8) <= 6 || (nav.deviceMemory ?? 8) <= 4) { set(true, true); return; }
  // measure: three seconds of frames once the page has settled; under ~45 frames a second → light effects
  setTimeout(() => {
    let n = 0, start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      n++;
      if (t - start < 3000) { requestAnimationFrame(tick); return; }
      if (document.visibilityState === 'visible' && (n / ((t - start) / 1000)) < 45) set(true, true);
    };
    requestAnimationFrame(tick);
  }, 4000);
}
