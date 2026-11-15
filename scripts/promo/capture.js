async (page, shot, sleep, info) => {
  // Promo capture (0.9.9.9.6.7): one clip per feature, recorded from Chrome's own screencast (sharp JPEG frames, 25 fps
  // constant), plus stills. Words are answered correctly from data/vocab.json; kanji are handwritten from
  // data/kanji-patterns.json.
  const cp = require('child_process'); const fs = require('fs'); const os = require('os');
  const ROOT = process.cwd();
  const { toRomaji } = require(ROOT + '/dist/shared/kana.js');
  const vocab = JSON.parse(fs.readFileSync(ROOT + '/data/vocab.json', 'utf8'));
  const reading = new Map(); for (const v of vocab) if (!reading.has(v.kanji)) reading.set(v.kanji, v.reading);
  const strokesOf = new Map(JSON.parse(fs.readFileSync(ROOT + '/data/kanji-patterns.json', 'utf8')).map((e) => [e[0], e[2]]));
  const T0 = Date.now(); const log = (s) => console.log(`M [${((Date.now() - T0) / 1000).toFixed(0)}s] ${s}`);
  page.on('pageerror', (e) => log('pageerror ' + String(e).slice(0, 200)));
  const url = page.url();

  // frames straight from Chrome's screencast, saved as they come with their time (the runner can't also encode)
  const rec = async (p, name) => {
    const cdp = await p.context().newCDPSession(p);
    const vp = p.viewportSize();
    const dir = `${out}/f-${name}`; fs.mkdirSync(dir, { recursive: true });
    const ts = []; let t0 = 0, open = true;
    cdp.on('Page.screencastFrame', (f) => {
      cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
      if (!open) return;
      const now = Date.now(); if (!t0) t0 = now;
      if (ts.length && now - t0 - ts[ts.length - 1] < 36) return; // ~27 fps is plenty for a 25 fps video
      ts.push(now - t0); fs.writeFileSync(`${dir}/${String(ts.length).padStart(5, '0')}.jpg`, Buffer.from(f.data, 'base64'));
    });
    await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 86, maxWidth: vp.width, maxHeight: vp.height });
    log('rec start ' + name);
    return async () => {
      const end = Date.now() - t0; open = false;
      await cdp.send('Page.stopScreencast').catch(() => {}); await cdp.detach().catch(() => {});
      fs.writeFileSync(`${dir}/times.json`, JSON.stringify({ ts, end }));
      log(`rec ${name}: ${(end / 1000).toFixed(1)}s, ${ts.length} frames (${(ts.length / Math.max(1, end / 1000)).toFixed(1)} fps)`);
    };
  };
  const still = async (p, n) => { try { await p.screenshot({ path: `${out}/still-${n}.png`, timeout: 120000 }); } catch { log('still fail ' + n); } };
  const BASE = new URL(url).origin;
  const call = async (_p, m, u, b, t) => { try { return await (await fetch(BASE + u, { method: m, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${t}` }, body: b ? JSON.stringify(b) : undefined })).json(); } catch (e) { return { error: String(e) }; } };
  const register = async (_p, n) => { const u = n + String(10 + Math.floor(Math.random() * 89)); return (await fetch(BASE + '/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: u, password: 'secret12', email: u.toLowerCase() + Date.now().toString(36) + '@shots.test' }) })).json(); };

  // ── the star of the show: a wizard with friends, a group and some history ──
  const me = await register(page, 'Hikari');
  const tok = me.token;
  await call(page, 'PUT', '/api/me/tutorial', null, tok);
  const friends = [];
  for (const n of ['Sakura', 'Kenji', 'Mika']) { const f = await register(page, n); friends.push(f); await call(page, 'POST', '/api/friends', { username: f.user.username }, tok); await call(page, 'POST', `/api/friends/${me.user.id}/accept`, null, f.token).catch(() => {}); }
  const [a, b, c] = friends;
  await call(page, 'POST', `/api/messages/${me.user.id}`, { text: 'ready for the daily? I got 9/10 yesterday' }, a.token);
  const mine = (await call(page, 'POST', `/api/messages/${a.user.id}`, { text: 'almost! 8/10 — those N3 readings got me' }, tok)).message;
  if (mine) await call(page, 'PUT', `/api/messages/m/${mine.id}/react`, { emoji: '🔥' }, a.token);
  await call(page, 'POST', `/api/messages/${me.user.id}`, { text: 'rematch in Rapid? 速' }, a.token);
  const g = await call(page, 'POST', '/api/groups', { name: 'N3 study club', members: [a.user.id, b.user.id, c.user.id] }, tok);
  if (g && g.id) { await call(page, 'POST', `/api/messages/${encodeURIComponent(g.id)}`, { text: 'who is up for Boss tonight? 竜' }, b.token); await call(page, 'POST', `/api/messages/${encodeURIComponent(g.id)}`, { text: 'me! bringing my fire staff' }, c.token); }
  const plan = await call(page, 'PUT', '/api/study/daily-levels', { levels: { N5: 12, N4: 6 } }, tok);
  log('setup done ' + JSON.stringify({ friends: friends.length, group: !!(g && g.id), plan: !plan.error }));
  await page.goto('about:blank'); // the harness's own page would keep drawing the menu in software GL

  const { chromium } = require('playwright');
  // software raster on all four cores: about 20 frames a second at 1280×720 (the default SwiftShader GL manages 1–2)
  const fast = await chromium.launch({ args: ['--disable-gpu', '--num-raster-threads=4', '--autoplay-policy=no-user-gesture-required'] });
  const open = async (opts, { threeD = false, lang = 'en', token = tok, browser = fast } = {}) => {
    const ctx = await browser.newContext(opts);
    const p = await ctx.newPage();
    p.on('pageerror', (e) => log('pageerror ' + String(e).slice(0, 200)));
    await p.goto(url);
    await p.evaluate(([t, l, d3]) => { localStorage.setItem('kb:token', t); localStorage.setItem('kb:lang', l); localStorage.setItem('kb:seenVersion', 'x'); localStorage.setItem('kb:3d', d3 ? 'on' : 'off'); localStorage.setItem('kb:tasksNoticeOff', '1'); localStorage.setItem('kb:uizoom', '1'); }, [token, lang, threeD]);
    await p.reload(); await p.waitForSelector('#menu:not([hidden])', { timeout: 90000 }); await sleep(3000);
    await p.evaluate(() => { for (const d of document.querySelectorAll('dialog[open]')) d.close(); });
    return { ctx, p };
  };
  const home = async (p) => { await p.goto(url); await p.waitForSelector('#menu:not([hidden])', { timeout: 90000 }); await sleep(2500); await p.evaluate(() => { for (const d of document.querySelectorAll('dialog[open]')) d.close(); }); };
  const freshTok = async (n) => { const r = await register(page, n); await call(page, 'PUT', '/api/me/tutorial', null, r.token); return r.token; };
  const rafFps = (p) => p.evaluate(() => new Promise((r) => { let n = 0; const t0 = performance.now(); const f = () => { n++; if (performance.now() - t0 < 1500) requestAnimationFrame(f); else r((n / 1.5).toFixed(1)); }; requestAnimationFrame(f); }));
  const unpause = (p) => p.evaluate(() => { const b = document.getElementById('resumeBtn'); if (b && b.offsetParent) b.click(); });
  // a private room against the AI (teammates for the boss)
  const lobby = async (p, mode, bots = 1, level = 'N5') => {
    await p.evaluate(() => document.getElementById('privateBtn').click()); await sleep(1000);
    await p.evaluate(() => document.getElementById('create').click()); await sleep(1500);
    await p.evaluate((m) => document.querySelector(`.mode-card[data-mode="${m}"]`)?.click(), mode); await sleep(1800);
    for (let i = 0; i < bots; i++) { await p.evaluate((lv) => { const s = document.getElementById('botLevel'); if (s) s.value = lv; document.getElementById('addBotBtn')?.click(); }, level); await sleep(1200); }
  };
  const go = async (p, screens = ['battle']) => {
    await p.evaluate(() => document.getElementById('readyBtn')?.click()); await sleep(1000);
    await p.evaluate(() => { const s = document.getElementById('start'); if (s && !s.hidden) s.click(); }); await sleep(2000);
    await p.evaluate(() => document.getElementById('ready')?.click());
    for (let i = 0; i < 60 && !screens.includes(await p.evaluate(() => document.body.dataset.screen)); i++) await sleep(1000);
    log('screen ' + await p.evaluate(() => document.body.dataset.screen));
  };
  const isKanji = (ch) => /[㐀-䶿一-鿿々]/.test(ch);
  // answer the next word correctly, typed like a person
  let lastWord = '';
  const answer = async (p) => {
    for (let i = 0; i < 100; i++) {
      const st = await p.evaluate(() => { const i = document.getElementById('answer'); return { k: document.getElementById('kanji').textContent.trim(), ok: !!i && !i.disabled && i.dataset.locked !== '1' && !document.getElementById('typeArea').hidden, s: document.body.dataset.screen }; });
      if (st.s !== 'battle') return 'left battle';
      if (i % 10 === 5) await unpause(p);
      if (st.ok && st.k && st.k !== lastWord) {
        lastWord = st.k;
        const r = reading.get(st.k);
        const typed = r ? toRomaji(r) : 'nani';
        await sleep(350);
        await p.focus('#answer').catch(() => {});
        await p.keyboard.type(typed, { delay: 70 });
        await sleep(200); await p.keyboard.press('Enter'); await sleep(500);
        const good = await p.evaluate(() => document.getElementById('feedback').className);
        return `${st.k}=${typed}${r ? '' : '?'}[${/good/.test(good) ? 'ok' : good}]`;
      }
      await sleep(120);
    }
    return 'no word';
  };
  // write kanji on the pad, stroke by stroke, from the reference shapes
  const drawChars = async (p, word) => {
    const box = await p.locator('#pad').boundingBox();
    if (!box) return false;
    const chars = [...word];
    const cell = box.width / Math.max(1, Math.round(box.width / box.height));
    for (let ci = 0; ci < chars.length; ci++) {
      if (!isKanji(chars[ci])) continue;
      for (const s of strokesOf.get(chars[ci]) || []) {
        const pt = (q) => [box.x + ci * cell + cell * (0.12 + 0.76 * (q[0] + 10) / 276), box.y + box.height * (0.12 + 0.76 * (q[1] + 10) / 276)];
        const [x0, y0] = pt(s[0]); await p.mouse.move(x0, y0); await p.mouse.down();
        const rest = s.slice(1).filter((_, i, a) => i % 2 === 1 || i === a.length - 1);
        for (const q of rest) { const [x, y] = pt(q); await p.mouse.move(x, y); }
        await p.mouse.up(); await sleep(45);
      }
    }
    return true;
  };
  const write = async (p) => {
    for (let i = 0; i < 100; i++) {
      const st = await p.evaluate(() => ({ k: document.getElementById('kanji').textContent.trim(), go: !document.getElementById('castGo').hidden, pad: !document.getElementById('writeArea').hidden && !document.getElementById('padNext').disabled, s: document.body.dataset.screen }));
      if (st.s !== 'battle') return 'left battle';
      if (i % 10 === 5) await unpause(p);
      if ((st.go || st.pad) && st.k && st.k !== lastWord) {
        lastWord = st.k;
        if (st.go) { await sleep(700); await p.click('#castGo').catch(() => {}); await sleep(450); }
        log('pad ' + JSON.stringify(await p.locator('#pad').boundingBox()) + ' ' + st.k);
        if (!(await drawChars(p, st.k))) return 'no pad';
        await sleep(350); await p.click('#padNext').catch(() => {}); await sleep(900);
        const good = await p.evaluate(() => document.getElementById('feedback').className);
        return `wrote ${st.k}[${/good/.test(good) ? 'ok' : good}]`;
      }
      await sleep(120);
    }
    return 'no word';
  };

  const W = { viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 };
  const step = async (name, fn) => { try { await fn(); } catch (e) { log(`step ${name} failed: ${String(e).slice(0, 300)}`); } };
  // a battle in its own window, with its own new account (a finished room would otherwise come back on reload)
  const NAMES = { '02-battle2d': 'Akira', '04-writing': 'Yui', '05-boss': 'Sora', '06-rapid': 'Kaito', '07-deck': 'Rin' };
  const battleClip = async (name, mode, bots, play, screens) => {
    await p0.goto('about:blank');
    const { ctx, p } = await open(W, { token: await freshTok(NAMES[name] || 'Akira') });
    try {
      await lobby(p, mode, bots, 'N5');
      if (mode === 'boss') await still(p, 'boss-lobby');
      await go(p, screens);
      await sleep(mode === 'deck' ? 500 : 2500);
      await unpause(p);
      log(name + ' raf ' + await rafFps(p));
      const stop = await rec(p, name);
      const got = await play(p);
      await stop(); log(name + ' ' + got.join(' '));
    } finally { await ctx.close(); }
  };

  const { ctx, p } = await open(W);
  const p0 = p;
  await step('menu', async () => {
    log('menu raf ' + await rafFps(p));
    const stop = await rec(p, '01-menu');
    await sleep(1200);
    for (let i = 0; i < 4; i++) { await p.evaluate(() => document.querySelector('.mcc-next')?.click()); await sleep(1100); }
    await sleep(500); await stop(); await still(p, 'menu');
  });

  await step('battle2d', () => battleClip('02-battle2d', 'reading', 1, async (p) => {
    const got = []; for (let i = 0; i < 5; i++) { got.push(await answer(p)); await sleep(1300); if (i === 2) await still(p, 'battle2d'); }
    return got;
  }));
  await step('writing', () => battleClip('04-writing', 'writing', 1, async (p) => {
    const got = []; for (let i = 0; i < 3; i++) { const r = await write(p); got.push(r); if (/no word|left/.test(r)) break; await sleep(700); if (i === 0) await still(p, 'writing'); }
    return got;
  }));
  await step('boss', () => battleClip('05-boss', 'boss', 3, async (p) => {
    const got = []; for (let i = 0; i < 4; i++) { got.push(await answer(p)); await sleep(1300); if (i === 1) await still(p, 'boss'); }
    return got;
  }));
  await step('rapid', () => battleClip('06-rapid', 'rapid', 1, async (p) => {
    const got = []; for (let i = 0; i < 6; i++) got.push(await answer(p));
    await still(p, 'rapid'); await sleep(800); return got;
  }));
  await step('deck', () => battleClip('07-deck', 'deck', 1, async (p) => {
    const got = []; let seen = '', wrote = '';
    const t0 = Date.now();
    while (Date.now() - t0 < 55000) {
      const st = await p.evaluate(() => {
        const vis = (e) => e && e.offsetParent && !e.disabled;
        const k = document.querySelector('#dkCast .dkc-k:not(.unknown)')?.textContent.trim() || '';
        const pick = [...document.querySelectorAll('.char-card')].find(vis);
        if (pick && !document.querySelector('.char-card.on')) { pick.click(); return { did: 'hero', k }; }
        const draft = [...document.querySelectorAll('.draft-board button.dkc')].find(vis);
        if (draft) { draft.click(); return { did: 'draft', k }; }
        const cast = [...document.querySelectorAll('#dkCast .cast-btn')].find(vis);
        if (cast) { cast.click(); return { did: cast.textContent.trim().slice(0, 8), k }; }
        const ot = document.querySelector('#dkCast .ot-input');
        if (ot && ot.offsetParent) return { did: 'ot', k };
        const pad = document.querySelector('#dkWrite #writeArea:not([hidden]) #pad');
        if (pad && pad.offsetParent && !document.getElementById('padNext').disabled) return { did: 'write', k };
        const hand = [...document.querySelectorAll('#dkHand button.dkc')].find(vis);
        if (hand) { hand.click(); return { did: 'play', k }; }
        return { did: '', k, s: document.body.dataset.screen };
      });
      if (st.k) seen = st.k;
      if (st.did === 'write' && seen && wrote !== seen) { wrote = seen; await drawChars(p, seen); await sleep(300); await p.click('#padNext').catch(() => {}); got.push('wrote ' + seen); }
      else if (st.did === 'ot' && st.k) { const r = reading.get(st.k); await p.focus('#dkCast .ot-input').catch(() => {}); await p.keyboard.type(r ? toRomaji(r) : 'nani', { delay: 70 }); await p.keyboard.press('Enter'); got.push('ot ' + st.k); }
      else if (st.did) got.push(st.did);
      if (got.length === 14) await still(p, 'deck');
      await sleep(700);
    }
    if (got.length < 14) await still(p, 'deck');
    return got;
  }, ['deck']));

  await step('study', async () => {
    await home(p);
    await p.evaluate(() => document.getElementById('studyBtn').click()); await sleep(1800);
    const stop = await rec(p, '08-study');
    await sleep(800);
    await p.evaluate(() => document.getElementById('studyAll')?.click()); await sleep(1800);
    await p.keyboard.press('Space'); await sleep(1300); await still(p, 'study');
    await p.keyboard.press('s'); await sleep(3000);
    await p.keyboard.press('Space'); await sleep(1200); await p.keyboard.press('Space'); await sleep(1300);
    await stop();
  });
  const page1 = async (name, btn, after) => step(name, async () => {
    await home(p);
    const stop = await rec(p, name);
    await sleep(500);
    await p.evaluate((b) => document.getElementById(b).click(), btn); await sleep(2600); await still(p, name.slice(3));
    if (after) await after(); else { await p.mouse.move(640, 400); await p.mouse.wheel(0, 350); await sleep(1500); }
    await stop();
  });
  await page1('09-kana', 'kanaBtn');
  await page1('10-daily', 'dailyBtn');
  await page1('11-progress', 'progressBtn');
  await step('messages', async () => {
    await home(p);
    await p.evaluate(() => document.getElementById('inboxBtn').click()); await sleep(1500);
    const stop = await rec(p, '13-messages');
    await sleep(600);
    await p.evaluate(() => [...document.querySelectorAll('.msg-conv')].find((x) => /N3 study/.test(x.textContent))?.click()); await sleep(1500);
    await p.focus('#msgInput').catch(() => {});
    await p.keyboard.type('count me in, 竜 goes down tonight', { delay: 45 }); await p.keyboard.press('Enter'); await sleep(1400);
    await still(p, 'messages');
    await p.evaluate(() => [...document.querySelectorAll('.msg-conv')].find((x) => /Sakura/.test(x.textContent))?.click()); await sleep(1600);
    await stop();
  });
  await step('dict', async () => {
    await home(p);
    const stop = await rec(p, '14-dict');
    await sleep(500);
    await p.evaluate(() => document.getElementById('dictRailTab')?.click()); await sleep(900);
    await p.focus('#dictRailQ').catch(() => {}); await p.keyboard.type('mahou', { delay: 110 }); await sleep(2000);
    await still(p, 'dict');
    await p.evaluate(() => document.querySelector('#dictRailBody button, #dictRailBody li, #dictRailBody .dr-hit')?.click()); await sleep(2200);
    await stop();
  });
  await ctx.close();

  // ── phone stills ──
  await step('phone', async () => {
    const PH = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true };
    const { ctx: c2, p: ph } = await open(PH);
    await still(ph, 'phone-menu');
    await ph.evaluate(() => document.getElementById('studyBtn').click()); await sleep(1800);
    await ph.evaluate(() => document.getElementById('studyAll')?.click()); await sleep(2000);
    await still(ph, 'phone-study');
    await home(ph);
    await ph.evaluate(() => document.getElementById('inboxBtn').click()); await sleep(1500);
    await ph.evaluate(() => [...document.querySelectorAll('.msg-conv')].find((x) => /N3 study/.test(x.textContent))?.click()); await sleep(1800);
    await still(ph, 'phone-messages');
    await c2.close();
    const { ctx: c3, p: pb } = await open(PH, { token: await freshTok('Ren') });
    await lobby(pb, 'reading', 1, 'N5'); await go(pb); await sleep(3000);
    await unpause(pb); await answer(pb); await sleep(1300); await answer(pb); await sleep(700);
    await still(pb, 'phone-battle');
    await c3.close();
  });
  await fast.close();

  // ── WebGL pictures (the runner's SwiftShader: slow, stills only) ──
  await step('battle3d', async () => {
    const { ctx: c3, p: p3 } = await open(W, { threeD: true, token: await freshTok('Yuki'), browser: info.browser });
    await lobby(p3, 'reading', 1, 'N5'); await go(p3); await sleep(8000);
    await unpause(p3); log('3d raf ' + await rafFps(p3));
    const stop = await rec(p3, '03-battle3d');
    const got = []; for (let i = 0; i < 3; i++) { got.push(await answer(p3)); await sleep(1800); if (i === 1) { await unpause(p3); await still(p3, 'battle3d'); } }
    await stop(); log('3d answers ' + got.join(' '));
    log('3d ' + await p3.evaluate(() => document.body.classList.contains('has-3d')));
    await c3.close();
  });
  await step('customize', async () => {
    const { ctx: c4, p: p4 } = await open(W, { browser: info.browser });
    await p4.evaluate(() => document.getElementById('customizeBtn').click()); await sleep(9000);
    await still(p4, 'customize');
    await c4.close();
  });
  log('done');
}
