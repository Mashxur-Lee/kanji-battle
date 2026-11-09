// Screenshot harness (0.9.9.9.5, used by .github/workflows/check.yml): node scripts/shots.cjs OUTDIR lang theme sizes
//   sizes: comma list of name:WxH (e.g. pc:1366x768,phone:390x844); phone sizes emulate touch + mobile
//   EXTRA: source of an async (page, shot, sleep) => {} run after login on the menu
// Registers a fresh user per size, sets language/theme, opens the menu, runs EXTRA.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const [out, lang = 'en', theme = 'dark', sizes = 'pc:1366x768'] = process.argv.slice(2);
const BASE = process.env.BASE || 'http://localhost:3130';
fs.mkdirSync(out, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
  for (const spec of sizes.split(',')) {
    const [name, wh] = spec.split(':');
    const [w, h] = wh.split('x').map(Number);
    const mobile = name.startsWith('phone') || name.startsWith('tab');
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource|favicon/.test(m.text())) errors.push('console: ' + m.text().slice(0, 200)); });
    const user = 'sw' + Date.now().toString(36).slice(-7);
    await page.goto(BASE + '/');
    const tok = await page.evaluate(async ([u]) => {
      const r = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: u, password: 'secret12' }) });
      return (await r.json()).token;
    }, [user]);
    // the welcome tutorial is skipped unless the scenario asks for it (a /*tutorial*/ comment)
    if (!/\/\*tutorial\*\//.test(process.env.EXTRA || '')) await page.evaluate(async ([t]) => { await fetch('/api/me/tutorial', { method: 'PUT', headers: { Authorization: `Bearer ${t}` } }); }, [tok]);
    await page.evaluate(([t, lang, theme]) => {
      localStorage.setItem('kb:token', t); localStorage.setItem('kb:lang', lang); localStorage.setItem('kb:theme', theme);
      localStorage.setItem('kb:seenVersion', 'x'); localStorage.setItem('kb:arena3d', 'off');
    }, [tok, lang, theme]);
    await page.reload();
    await page.waitForSelector('#menu:not([hidden])', { timeout: 30000 }).catch(() => errors.push('menu did not show'));
    await sleep(1200);
    await page.evaluate(() => { for (const d of document.querySelectorAll('dialog[open]')) d.close(); });
    const shot = async (n) => { await page.screenshot({ path: path.join(out, `${name}-${n}.png`) }); };
    try {
      if (process.env.EXTRA) { const fn = eval(`(${process.env.EXTRA})`); await fn(page, shot, sleep, { user, token: tok, ctx, browser }); }
      else await shot('menu');
    } catch (e) { errors.push('EXTRA: ' + (e && e.message)); }
    console.log(`${name}: ${errors.length ? errors.join(' | ') : 'no issues'}`);
    await ctx.close();
  }
  await browser.close();
})();
