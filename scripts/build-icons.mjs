// App icons from assets/icon.svg (0.9.9.4): the web app / PWA, the Windows app and the Android app.
// Run once after changing the icon: node scripts/build-icons.mjs (needs `sharp`, not a dependency).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require(process.env.SHARP ?? 'sharp');
const full = readFileSync('assets/icon.svg'), round = readFileSync('assets/icon-rounded.svg');
const out = (svg, size, file) => sharp(svg, { density: 400 }).resize(size, size).png().toFile(file);
mkdirSync('public/icons', { recursive: true });
mkdirSync('desktop/build', { recursive: true });
await out(round, 192, 'public/icons/icon-192.png');
await out(round, 512, 'public/icons/icon-512.png');
await out(full, 512, 'public/icons/maskable-512.png');
await out(full, 180, 'public/icons/apple-touch-icon.png');
await out(round, 1024, 'desktop/build/icon.png');


// Android launcher icons: a round-cornered legacy icon, a round one, and an adaptive icon (Android 8+)
const res = 'mobile/android/app/src/main/res';
const DENS = { mdpi: 1, hdpi: 1.5, xhdpi: 2, xxhdpi: 3, xxxhdpi: 4 };
const circle = Buffer.from(readFileSync('assets/icon.svg', 'utf8').replace('<rect width="512" height="512" fill="url(#bg)"/>', '<clipPath id="c"><circle cx="256" cy="256" r="256"/></clipPath><g clip-path="url(#c)"><rect width="512" height="512" fill="url(#bg)"/>').replace('</svg>', '</g></svg>'));
for (const [d, k] of Object.entries(DENS)) {
  mkdirSync(`${res}/mipmap-${d}`, { recursive: true });
  await out(round, Math.round(48 * k), `${res}/mipmap-${d}/ic_launcher.png`);
  await out(circle, Math.round(48 * k), `${res}/mipmap-${d}/ic_launcher_round.png`);
  // adaptive foreground: 108dp, the artwork inside the middle 80dp (the mask cuts the rest)
  const size = Math.round(108 * k), inner = Math.round(84 * k), pad = Math.round((size - inner) / 2);
  const fg = await sharp(full, { density: 400 }).resize(inner, inner).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: { r: 11, g: 9, b: 32, alpha: 1 } } }).composite([{ input: fg, left: pad, top: pad }]).png().toFile(`${res}/mipmap-${d}/ic_launcher_foreground.png`);
}
mkdirSync(`${res}/mipmap-anydpi-v26`, { recursive: true });
const adaptive = '<?xml version="1.0" encoding="utf-8"?>\n<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n    <background android:drawable="@color/icon_bg" />\n    <foreground android:drawable="@mipmap/ic_launcher_foreground" />\n</adaptive-icon>\n';
writeFileSync(`${res}/mipmap-anydpi-v26/ic_launcher.xml`, adaptive);
writeFileSync(`${res}/mipmap-anydpi-v26/ic_launcher_round.xml`, adaptive);
