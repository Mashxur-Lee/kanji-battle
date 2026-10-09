// A pixel-art hand holding a calligraphy brush, used as the cursor over the writing pad.
// The ink tip of the brush is the hotspot (the exact point that draws).

const G = 32; // pixel grid
type Px = string | null;

const COLORS: Record<string, string> = {
  k: '#1b1530', // outline
  s: '#f3c9a1', // skin
  S: '#d99f74', // skin shade / finger creases
  w: '#8a5a2b', // handle
  W: '#c08a4a', // handle highlight
  m: '#c9ced8', // metal ferrule
  b: '#2a2230', // bristles
  B: '#000000', // wet ink tip
  c: '#3b5bdb', // sleeve
  C: '#9fb4ff', // sleeve cuff
};

function draw(): Px[][] {
  const g: Px[][] = Array.from({ length: G }, () => Array<Px>(G).fill(null));
  const set = (x: number, y: number, c: string) => { if (x >= 0 && y >= 0 && x < G && y < G) g[y][x] = c; };
  // brush: from the tip (1,30) up and to the right
  for (let t = 0; t <= 25; t++) {
    const x = 1 + t, y = 30 - t;
    if (t <= 1) set(x, y, 'B');
    else if (t <= 7) { set(x, y, 'b'); set(x + 1, y, 'b'); if (t >= 4 && t <= 6) set(x, y - 1, 'b'); }
    else if (t <= 9) { set(x, y, 'm'); set(x + 1, y, 'm'); set(x, y - 1, 'm'); }
    else { set(x, y, 'w'); set(x + 1, y, 'W'); set(x, y - 1, 'w'); }
  }
  // the fist: four fingers curled around the handle, knuckles stepping down along it
  const hx = (y: number) => 31 - y; // the handle's x at row y
  for (let f = 0; f < 4; f++) {
    const y0 = 11 + 2 * f;
    for (const y of [y0, y0 + 1]) {
      const x0 = hx(y) - 2, x1 = hx(y) + 6;
      for (let x = x0; x <= x1; x++) {
        if (y === y0 + 1 && x === x0) continue; // round fingertip
        set(x, y, y === y0 + 1 && x > x0 + 1 ? 'S' : 's');
      }
    }
  }
  // back of the hand behind the knuckles
  for (let y = 10; y <= 18; y++) for (let x = hx(y) + 7; x <= Math.min(31, hx(y) + 11); x++) set(x, y, x >= hx(y) + 10 ? 'S' : 's');
  // thumb pressing on the front of the handle
  for (let x = hx(9) - 2; x <= hx(9) + 4; x++) set(x, 9, 's');
  for (let x = hx(10) - 3; x <= hx(10) + 2; x++) set(x, 10, x <= hx(10) - 1 ? 's' : 'S');
  for (let x = hx(8) + 1; x <= hx(8) + 5; x++) set(x, 8, 's');
  // sleeve cuff
  for (let y = 3; y <= 16; y++) for (let x = hx(y) + 12; x <= 31; x++) if (x - (hx(y) + 12) < 4) set(x, y, x === hx(y) + 12 ? 'C' : 'c');
  // outline: every empty pixel touching a filled one
  const filled = g.map((row) => row.map((c) => c !== null));
  for (let y = 0; y < G; y++) for (let x = 0; x < G; x++) {
    if (filled[y][x]) continue;
    if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => filled[y + dy]?.[x + dx])) g[y][x] = 'k';
  }
  return g;
}

let css = '';
/** CSS `cursor` value: the brush (64×64, hotspot on the ink tip), falling back to a crosshair. */
export function brushCursor(): string {
  if (css) return css;
  const g = draw();
  let rects = '';
  g.forEach((row, y) => row.forEach((c, x) => { if (c) rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${COLORS[c]}"/>`; }));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 ${G} ${G}" shape-rendering="crispEdges">${rects}</svg>`;
  css = `url("data:image/svg+xml,${encodeURIComponent(svg)}") 3 61, crosshair`;
  return css;
}
