async (page, shot, sleep, info) => {
  // The menu theme as raw PCM (music-0.pcm, 16-bit mono, see music-0.json for rate and loop points) — 0.9.9.9.6.8.
  // audio.ts records each theme into a looping buffer; this catches that buffer when it starts playing.
  // Locally: ffmpeg -f s16le -ar 32000 -ac 1 -i music-0.pcm menu-theme.wav
  const fs = require('fs');
  const { chromium } = require('playwright');
  const BASE = new URL(page.url()).origin;
  const u = 'Melody' + Date.now().toString(36).slice(-4);
  const r = await (await fetch(BASE + '/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: u, password: 'secret12', email: u.toLowerCase() + '@shots.test' }) })).json();
  await fetch(BASE + '/api/me/tutorial', { method: 'PUT', headers: { Authorization: `Bearer ${r.token}` } });
  const b = await chromium.launch({ args: ['--disable-gpu', '--autoplay-policy=no-user-gesture-required'] });
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });
  await ctx.addInitScript(() => {
    const orig = AudioBufferSourceNode.prototype.start;
    window.__loops = [];
    AudioBufferSourceNode.prototype.start = function (...a) { try { if (this.loop && this.buffer && this.buffer.duration > 5) window.__loops.push(this); } catch { /* */ } return orig.apply(this, a); };
  });
  const p = await ctx.newPage();
  await p.goto(BASE);
  await p.evaluate((t) => { localStorage.setItem('kb:token', t); localStorage.setItem('kb:seenVersion', 'x'); localStorage.setItem('kb:3d', 'off'); }, r.token);
  await p.reload(); await p.waitForSelector('#menu:not([hidden])', { timeout: 90000 }); await sleep(2000);
  await p.mouse.click(640, 700); // unlocks the sound
  for (let i = 0; i < 40 && !(await p.evaluate(() => window.__loops.length)); i++) await sleep(500);
  const n = await p.evaluate(() => window.__loops.length);
  for (let i = 0; i < n; i++) {
    const j = JSON.parse(await p.evaluate((i) => {
      const s = window.__loops[i], d = s.buffer.getChannelData(0);
      const pcm = new Int16Array(d.length); for (let k = 0; k < d.length; k++) pcm[k] = Math.max(-32768, Math.min(32767, Math.round(d[k] * 32767)));
      const u8 = new Uint8Array(pcm.buffer); let str = ''; for (let k = 0; k < u8.length; k += 0x8000) str += String.fromCharCode.apply(null, u8.subarray(k, k + 0x8000));
      return JSON.stringify({ rate: s.buffer.sampleRate, loopStart: s.loopStart, loopEnd: s.loopEnd, pcm: btoa(str) });
    }, i));
    fs.writeFileSync(`${out}/music-${i}.json`, JSON.stringify({ rate: j.rate, loopStart: j.loopStart, loopEnd: j.loopEnd }));
    fs.writeFileSync(`${out}/music-${i}.pcm`, Buffer.from(j.pcm, 'base64'));
  }
  console.log('M music loops ' + n);
  await b.close();
}
