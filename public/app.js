"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/shared/protocol.ts
  var LEVELS = ["KANA", "N5", "N4", "N3", "N2", "N1"];
  var LEVEL_LABEL = { KANA: "\u304B\u306A", N5: "N5", N4: "N4", N3: "N3", N2: "N2", N1: "N1" };
  var MODE_LABEL = {
    reading: "1v1 Kanji Reading",
    writing: "1v1 Kanji Writing",
    boss: "Boss Elimination",
    rapid: "1v1 Rapid",
    deck: "Deck Duel"
  };

  // src/client/api.ts
  var today = () => {
    const d = /* @__PURE__ */ new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  var TOKEN_KEY = "kb:token";
  var getToken = () => {
    try {
      return localStorage.getItem(TOKEN_KEY) ?? "";
    } catch {
      return "";
    }
  };
  var setToken = (t) => {
    try {
      t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY);
    } catch {
    }
  };
  var ApiError = class extends Error {
    constructor(message, status) {
      super(message);
      __publicField(this, "status", status);
    }
  };
  async function call(method, url, body) {
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json", ...getToken() ? { Authorization: `Bearer ${getToken()}` } : {} },
      body: body === void 0 ? void 0 : JSON.stringify(body)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new ApiError(data.error ?? `Error ${res.status}`, res.status);
    return data;
  }
  var api = {
    login: (username, password) => call("POST", "/api/login", { username, password }),
    register: (username, password) => call("POST", "/api/register", { username, password }),
    me: () => call("GET", "/api/me"),
    setBackground: (background) => call("PUT", "/api/me/background", { background }),
    study: () => call("GET", `/api/study?today=${today()}`),
    setStudyLevels: (levels) => call("PUT", "/api/study/levels", { levels, today: today() }),
    queue: (deck2) => call("GET", `/api/study/queue?deck=${deck2}`),
    review: (vocabId, rating) => call("POST", "/api/study/review", { vocabId, rating }),
    users: () => call("GET", "/api/admin/users"),
    setBanned: (id, banned) => call("POST", `/api/admin/users/${encodeURIComponent(id)}/ban`, { banned })
  };

  // src/client/audio.ts
  var PREFS_KEY = "kb:audio";
  var prefs = (() => {
    try {
      return { radio: true, sfx: true, ...JSON.parse(localStorage.getItem(PREFS_KEY) ?? "{}") };
    } catch {
      return { radio: true, sfx: true };
    }
  })();
  var savePrefs = () => {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
    } catch {
    }
  };
  var ctx = null;
  var sfxBus;
  var musicBus;
  var reverb;
  var scene = "menu";
  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext ?? window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    const comp = ctx.createDynamicsCompressor();
    comp.connect(ctx.destination);
    sfxBus = ctx.createGain();
    sfxBus.gain.value = 0.55;
    sfxBus.connect(comp);
    musicBus = ctx.createGain();
    musicBus.gain.value = 0;
    musicBus.connect(comp);
    reverb = ctx.createConvolver();
    const len = ctx.sampleRate * 2.6;
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 3;
    }
    reverb.buffer = ir;
    const wet = ctx.createGain();
    wet.gain.value = 0.35;
    reverb.connect(wet).connect(comp);
    return ctx;
  }
  document.addEventListener("visibilitychange", () => {
    if (!ctx) return;
    if (document.visibilityState === "hidden") void ctx.suspend();
    else void ctx.resume().then(() => syncMusic());
  });
  function unlock() {
    const c = ensure();
    if (!c) return;
    if (c.state === "suspended" && document.visibilityState === "visible") void c.resume();
    syncMusic();
  }
  function setScene(s) {
    scene = s;
    syncMusic();
  }
  function syncMusic() {
    if (!ctx) return;
    if (prefs.radio && scene === "menu" && document.visibilityState === "visible") radio.start();
    else radio.stop();
  }
  var midi = (n) => 440 * 2 ** ((n - 69) / 12);
  function tone(freq, at, dur, opts = {}) {
    const c = ctx;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = opts.type ?? "sine";
    o.frequency.setValueAtTime(freq, at);
    if (opts.detune) o.detune.value = opts.detune;
    if (opts.to) o.frequency.exponentialRampToValueAtTime(opts.to, at + dur);
    const peak = opts.gain ?? 0.3;
    g.gain.setValueAtTime(1e-4, at);
    g.gain.exponentialRampToValueAtTime(peak, at + (opts.attack ?? 8e-3));
    g.gain.exponentialRampToValueAtTime(1e-4, at + dur);
    o.connect(g).connect(opts.bus ?? sfxBus);
    if (opts.send) {
      const s = c.createGain();
      s.gain.value = opts.send;
      g.connect(s).connect(reverb);
    }
    o.start(at);
    o.stop(at + dur + 0.05);
  }
  function bell(freq, at, dur, gain, bus = sfxBus) {
    tone(freq, at, dur, { gain, bus, send: 0.6, attack: 3e-3 });
    tone(freq * 2.76, at, dur * 0.4, { gain: gain * 0.25, bus, send: 0.6, attack: 2e-3 });
    tone(freq * 5.4, at, dur * 0.18, { gain: gain * 0.08, bus, send: 0.6, attack: 2e-3 });
  }
  function noise(at, dur, gain, cutoff, type = "lowpass") {
    const c = ctx;
    const buf = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src = c.createBufferSource();
    src.buffer = buf;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.value = cutoff;
    const g = c.createGain();
    g.gain.value = gain;
    src.connect(f).connect(g).connect(sfxBus);
    src.start(at);
  }
  var sfxOk = () => prefs.sfx && ensure() !== null && ctx.state === "running";
  var sfx = {
    /**
     * Spell cast: a magical chime. Each combo step makes it deeper and longer (like a multi-kill
     * sound), from ×5 on it stays at its deepest, fullest version.
     */
    correct(combo = 1) {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      const step = Math.min(Math.max(combo, 1), 5) - 1;
      const root = 88 - step * 5;
      const ring = 0.7 + step * 0.45;
      const notes = [0, 7, 12, 16].map((i) => root + i);
      notes.forEach((n, i) => bell(midi(n), t + i * (0.045 + step * 0.012), ring, 0.16 + step * 0.015));
      if (step >= 1) tone(midi(root - 24), t, ring * 1.2, { gain: 0.12 + step * 0.05, send: 0.3, attack: 0.01 });
      if (step >= 4) [0.16, 0.32].forEach((dt) => bell(midi(root + 12), t + dt, 1.2, 0.1));
      noise(t, 0.25, 0.05, 6e3, "highpass");
    },
    /** Miss / skip / timeout — soft descending fizzle. */
    wrong() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      tone(330, t, 0.3, { type: "triangle", gain: 0.14, to: 140 });
      tone(311, t + 0.03, 0.3, { type: "triangle", gain: 0.08, to: 130 });
      noise(t, 0.2, 0.06, 900);
    },
    /** You took damage — thump. */
    hurt() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      tone(140, t, 0.22, { gain: 0.35, to: 50 });
      noise(t, 0.15, 0.25, 900);
    },
    /** Your spell lands on the opponent. */
    impact() {
      if (sfxOk()) noise(ctx.currentTime, 0.12, 0.15, 2500);
    },
    heal() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      [72, 76, 79, 84].forEach((n, i) => bell(midi(n), t + i * 0.08, 0.9, 0.1));
    },
    mana() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      for (let i = 0; i < 6; i++) bell(midi(84 + i * 5 % 12), t + i * 0.05, 0.5, 0.06);
    },
    rip() {
      if (!sfxOk()) return;
      noise(ctx.currentTime, 0.35, 0.3, 3e3, "bandpass");
    },
    flip() {
      if (sfxOk()) noise(ctx.currentTime, 0.08, 0.12, 4e3, "highpass");
    },
    inhale() {
      if (sfxOk()) tone(55, ctx.currentTime, 2.6, { type: "sawtooth", gain: 0.08, to: 110, attack: 1.5 });
    },
    fire() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      noise(t, 1.2, 0.5, 1400);
      tone(70, t, 1.1, { type: "sawtooth", gain: 0.12, to: 40 });
    },
    claw() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      noise(t, 0.18, 0.4, 6e3);
      tone(160, t + 0.05, 0.2, { gain: 0.3, to: 60 });
    },
    tick() {
      if (sfxOk()) bell(1320, ctx.currentTime, 0.25, 0.08);
    },
    go() {
      if (sfxOk()) bell(midi(88), ctx.currentTime, 0.8, 0.14);
    },
    /** Victory: a bright fanfare (major, rising, with harmony and a final bell). */
    win() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      const brass = (n, at, dur) => {
        tone(midi(n), t + at, dur, { type: "sawtooth", gain: 0.07, attack: 0.03, send: 0.4 });
        tone(midi(n), t + at, dur, { type: "triangle", gain: 0.12, attack: 0.02, send: 0.4, detune: 6 });
      };
      [[67, 0], [72, 0.14], [76, 0.28]].forEach(([n, at]) => brass(n, at, 0.22));
      brass(79, 0.44, 0.9);
      brass(76, 0.44, 0.9);
      brass(72, 0.44, 0.9);
      bell(midi(91), t + 0.44, 1.8, 0.12);
      tone(midi(48), t + 0.44, 1.2, { gain: 0.2, send: 0.3 });
    },
    /** Defeat: slow, falling minor phrase. */
    lose() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      [[69, 0], [68, 0.38], [67, 0.76], [62, 1.14]].forEach(([n, at]) => {
        tone(midi(n), t + at, 0.7, { type: "triangle", gain: 0.13, attack: 0.04, send: 0.5 });
      });
      tone(midi(38), t + 1.14, 1.8, { gain: 0.16, send: 0.4, attack: 0.05 });
    }
  };
  var radio = (() => {
    const BPM = 84;
    const STEP = 60 / BPM / 2;
    const PROG = [
      [50, 57, 62, 65],
      [46, 53, 58, 62],
      [41, 48, 53, 57],
      [48, 55, 60, 64],
      [50, 57, 62, 65],
      [43, 50, 55, 58],
      [45, 52, 57, 61],
      [50, 57, 62, 65]
    ];
    const MELODY = [
      [74, 0, 77, 0, 76, 74, 72, 0],
      [74, 0, 0, 70, 72, 0, 74, 0],
      [72, 0, 69, 0, 72, 74, 77, 0],
      [76, 0, 74, 72, 74, 0, 0, 0],
      [74, 0, 77, 0, 81, 0, 79, 77],
      [79, 0, 77, 0, 74, 0, 70, 0],
      [73, 0, 76, 0, 79, 77, 76, 73],
      [74, 0, 0, 0, 0, 0, 0, 0]
    ];
    let timer;
    let nextTime = 0;
    let step = 0;
    function strings(notes, at, dur) {
      const c = ctx;
      const lp = c.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 1100;
      const g = c.createGain();
      g.gain.setValueAtTime(1e-4, at);
      g.gain.exponentialRampToValueAtTime(0.035, at + 0.9);
      g.gain.setValueAtTime(0.035, at + dur - 0.6);
      g.gain.exponentialRampToValueAtTime(1e-4, at + dur + 0.5);
      lp.connect(g).connect(musicBus);
      const s = c.createGain();
      s.gain.value = 0.5;
      g.connect(s).connect(reverb);
      for (const n of notes) for (const d of [-7, 7]) {
        const o = c.createOscillator();
        o.type = "sawtooth";
        o.frequency.value = midi(n);
        o.detune.value = d;
        o.connect(lp);
        o.start(at);
        o.stop(at + dur + 0.6);
      }
    }
    function harp(n, at) {
      tone(midi(n), at, 1.4, { type: "triangle", gain: 0.05, bus: musicBus, send: 0.5, attack: 3e-3 });
      tone(midi(n + 12), at, 0.5, { gain: 0.015, bus: musicBus, send: 0.5, attack: 3e-3 });
    }
    function flute(n, at, dur) {
      const c = ctx;
      const o = c.createOscillator();
      const vib = c.createOscillator();
      const vg = c.createGain();
      vib.frequency.value = 5.2;
      vg.gain.value = 4;
      vib.connect(vg).connect(o.frequency);
      o.type = "sine";
      o.frequency.value = midi(n);
      const g = c.createGain();
      g.gain.setValueAtTime(1e-4, at);
      g.gain.exponentialRampToValueAtTime(0.045, at + 0.06);
      g.gain.setValueAtTime(0.04, at + dur * 0.7);
      g.gain.exponentialRampToValueAtTime(1e-4, at + dur);
      o.connect(g).connect(musicBus);
      const s = c.createGain();
      s.gain.value = 0.7;
      g.connect(s).connect(reverb);
      o.start(at);
      vib.start(at);
      o.stop(at + dur + 0.05);
      vib.stop(at + dur + 0.05);
    }
    function drum(at, accent) {
      tone(accent ? 62 : 55, at, 0.45, { gain: accent ? 0.16 : 0.09, to: 38, bus: musicBus, attack: 4e-3 });
    }
    function schedule() {
      const c = ctx;
      while (nextTime < c.currentTime + 0.5) {
        const bar = Math.floor(step / 8) % PROG.length;
        const inBar = step % 8;
        const chord = PROG[bar];
        const loop = Math.floor(step / (8 * PROG.length));
        if (inBar === 0) {
          strings(chord.slice(1), nextTime, STEP * 8);
          tone(midi(chord[0] - 12), nextTime, STEP * 7, { gain: 0.07, bus: musicBus, attack: 0.05 });
        }
        const arp = [0, 1, 2, 3, 2, 1, 2, 3][inBar];
        harp(chord[arp] + 12, nextTime);
        if (inBar === 0 || inBar === 3 || inBar === 6) drum(nextTime, inBar === 0);
        if (loop % 3 !== 0) {
          const n = MELODY[bar][inBar];
          if (n) {
            let len = 1;
            while (inBar + len < 8 && MELODY[bar][inBar + len] === 0) len++;
            flute(n, nextTime, STEP * Math.min(len, 4) * 0.95);
          }
        }
        nextTime += STEP;
        step++;
      }
    }
    return {
      start() {
        if (!ctx || timer !== void 0) return;
        nextTime = ctx.currentTime + 0.15;
        musicBus.gain.cancelScheduledValues(ctx.currentTime);
        musicBus.gain.setTargetAtTime(0.7, ctx.currentTime, 0.8);
        schedule();
        timer = window.setInterval(schedule, 150);
      },
      stop() {
        if (!ctx || timer === void 0) return;
        clearInterval(timer);
        timer = void 0;
        musicBus.gain.setTargetAtTime(0, ctx.currentTime, 0.25);
      }
    };
  })();
  var isRadioOn = () => prefs.radio;
  var isSfxOn = () => prefs.sfx;
  function setRadio(on) {
    prefs.radio = on;
    savePrefs();
    ensure();
    if (on && ctx?.state === "suspended") void ctx.resume();
    syncMusic();
  }
  function setSfx(on) {
    prefs.sfx = on;
    savePrefs();
  }

  // src/client/backgrounds.ts
  var seed = 1;
  var rnd = () => (seed = seed * 16807 % 2147483647) / 2147483647;
  var W = 1600;
  var H = 900;
  function sky(id, stops) {
    return `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">${stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join("")}</linearGradient>`;
  }
  function stars(n, maxY, color = "#fff") {
    let s = "";
    for (let i = 0; i < n; i++) s += `<circle cx="${(rnd() * W).toFixed(0)}" cy="${(rnd() * maxY).toFixed(0)}" r="${(rnd() * 1.6 + 0.4).toFixed(1)}" fill="${color}" opacity="${(rnd() * 0.6 + 0.3).toFixed(2)}"/>`;
    return s;
  }
  function pines(y, count, minH, maxH, color) {
    let s = "";
    for (let i = 0; i < count; i++) {
      const x = i / count * W + rnd() * (W / count) - 20;
      const h3 = minH + rnd() * (maxH - minH);
      const w = h3 * 0.38;
      s += `<polygon points="${x},${y} ${x + w / 2},${y - h3} ${x + w},${y}" fill="${color}"/>`;
      s += `<polygon points="${x + w * 0.12},${y - h3 * 0.35} ${x + w / 2},${y - h3 * 1.02} ${x + w * 0.88},${y - h3 * 0.35}" fill="${color}"/>`;
    }
    return s + `<rect x="0" y="${y}" width="${W}" height="${H - y}" fill="${color}"/>`;
  }
  function hills(y, amp, color, phase = 0) {
    let d = `M0 ${H} L0 ${y}`;
    for (let x = 0; x <= W; x += 40) d += ` L${x} ${(y + Math.sin(x / 210 + phase) * amp + Math.sin(x / 90 + phase * 2) * amp * 0.25).toFixed(1)}`;
    return `<path d="${d} L${W} ${H} Z" fill="${color}"/>`;
  }
  function deadTree(x, y, h3, color) {
    const b = (x1, y1, x2, y2, w) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
    return b(x, y, x + 6, y - h3, 14) + b(x + 4, y - h3 * 0.55, x - h3 * 0.35, y - h3 * 0.85, 7) + b(x + 5, y - h3 * 0.7, x + h3 * 0.4, y - h3 * 0.95, 6) + b(x - h3 * 0.2, y - h3 * 0.75, x - h3 * 0.3, y - h3, 4) + b(x + 6, y - h3, x + 30, y - h3 * 1.15, 4);
  }
  var SCENES = {
    forest: () => `
    <defs>${sky("sk", [[0, "#0b1d2a"], [0.55, "#1f4a4a"], [1, "#3d6b52"]])}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>${stars(70, 380)}
    <circle cx="1220" cy="170" r="70" fill="#f1edd0" opacity=".9"/><circle cx="1220" cy="170" r="120" fill="#f1edd0" opacity=".06"/>
    ${pines(640, 22, 260, 420, "#173c35")}${pines(720, 18, 200, 330, "#0f2a25")}${pines(820, 14, 160, 260, "#081a17")}`,
    swamp: () => `
    <defs>${sky("sk", [[0, "#14121f"], [0.5, "#2c3a2e"], [1, "#4b5a3a"]])}
      <linearGradient id="wt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f3d2c"/><stop offset="1" stop-color="#121a12"/></linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>${stars(40, 300, "#cfe8b0")}
    <circle cx="380" cy="190" r="55" fill="#d9e6a6" opacity=".55"/>
    ${hills(560, 26, "#1d2a1e")}
    ${[160, 520, 980, 1380].map((x, i) => deadTree(x, 640, 260 + i * 25, "#141c14")).join("")}
    <rect x="0" y="640" width="${W}" height="260" fill="url(#wt)"/>
    ${Array.from({ length: 14 }, () => `<ellipse cx="${(rnd() * W).toFixed(0)}" cy="${(660 + rnd() * 200).toFixed(0)}" rx="${(20 + rnd() * 30).toFixed(0)}" ry="7" fill="#3f6b33" opacity=".8"/>`).join("")}
    ${Array.from({ length: 26 }, () => `<circle cx="${(rnd() * W).toFixed(0)}" cy="${(380 + rnd() * 380).toFixed(0)}" r="2.5" fill="#d8ff7a" opacity=".85"/>`).join("")}
    <rect y="560" width="${W}" height="120" fill="#a8b89a" opacity=".07"/>`,
    plains: () => `
    <defs>${sky("sk", [[0, "#2a1a45"], [0.45, "#a8506a"], [0.75, "#f0a060"], [1, "#f6d08a"]])}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    <circle cx="800" cy="560" r="120" fill="#ffe2a0" opacity=".9"/>
    ${Array.from({ length: 6 }, (_, i) => `<ellipse cx="${200 + i * 260}" cy="${150 + i % 3 * 50}" rx="${90 + i % 2 * 40}" ry="18" fill="#f7c7b0" opacity=".35"/>`).join("")}
    ${hills(600, 30, "#6a4a6a", 0.5)}${hills(660, 34, "#4a5a3a", 1.7)}${hills(740, 26, "#33472b", 3)}
    <rect x="1180" y="560" width="14" height="110" fill="#2a2a2a"/><g transform="translate(1187 560)" fill="#2a2a2a">${[0, 90, 180, 270].map((a) => `<rect x="-4" y="-80" width="8" height="80" transform="rotate(${a + 20})"/>`).join("")}</g>
    ${Array.from({ length: 70 }, () => {
      const x = rnd() * W, y = 760 + rnd() * 140;
      return `<line x1="${x.toFixed(0)}" y1="${y.toFixed(0)}" x2="${(x + 4).toFixed(0)}" y2="${(y - 18).toFixed(0)}" stroke="#23331d" stroke-width="3"/>`;
    }).join("")}`,
    castle: () => {
      const tower = (x, w, h3) => `<rect x="${x}" y="${640 - h3}" width="${w}" height="${h3}" fill="#141327"/><polygon points="${x - 10},${640 - h3} ${x + w / 2},${560 - h3} ${x + w + 10},${640 - h3}" fill="#1b1a33"/>` + Array.from({ length: Math.floor(h3 / 70) }, (_, i) => `<rect x="${x + w / 2 - 6}" y="${640 - h3 + 40 + i * 70}" width="12" height="20" fill="#ffcf6a" opacity="${rnd() > 0.35 ? 0.9 : 0.15}"/>`).join("");
      return `
    <defs>${sky("sk", [[0, "#070a1e"], [0.6, "#1c2554"], [1, "#3a3f78"]])}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>${stars(120, 450)}
    <circle cx="300" cy="150" r="60" fill="#e8e6ff" opacity=".85"/>
    ${hills(640, 18, "#10122a")}
    <rect x="560" y="430" width="480" height="210" fill="#141327"/>
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${560 + i * 40}" y="414" width="22" height="18" fill="#141327"/>`).join("")}
    ${tower(500, 90, 330)}${tower(1010, 90, 330)}${tower(740, 120, 420)}
    <polygon points="760,640 800,560 840,640" fill="#2a2140"/>
    <line x1="800" y1="140" x2="800" y2="96" stroke="#141327" stroke-width="4"/><polygon points="800,96 840,106 800,116" fill="#c2364d"/>
    ${hills(760, 14, "#0b0c1c", 2)}`;
    },
    worldtree: () => {
      const leaves = (y, n, rmin, rmax, col, op) => Array.from({ length: n }, (_, i) => `<circle cx="${(i / n * W + rnd() * 80).toFixed(0)}" cy="${(y + rnd() * 50).toFixed(0)}" r="${(rmin + rnd() * (rmax - rmin)).toFixed(0)}" fill="${col}" opacity="${op}"/>`).join("");
      return `
    <defs>${sky("sk", [[0, "#0b0626"], [0.45, "#2a1260"], [0.8, "#1d4f78"], [1, "#2c8a8a"]])}
      <radialGradient id="glow"><stop offset="0" stop-color="#9ff5c8" stop-opacity=".5"/><stop offset="1" stop-color="#9ff5c8" stop-opacity="0"/></radialGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>${stars(170, 560, "#d7ccff")}
    <circle cx="1240" cy="170" r="54" fill="#fff4d6" opacity=".9"/><circle cx="1240" cy="170" r="130" fill="#fff4d6" opacity=".07"/>
    <ellipse cx="800" cy="620" rx="900" ry="200" fill="url(#glow)"/>
    ${Array.from({ length: 10 }, (_, i) => `<ellipse cx="${i * 180}" cy="${600 + i % 3 * 22}" rx="220" ry="40" fill="#efeaff" opacity=".22"/>`).join("")}
    ${leaves(640, 26, 50, 90, "#14402f", 1)}
    ${leaves(690, 30, 45, 80, "#1b5a3c", 1)}
    <path d="M-40 800 C 300 730, 650 760, 820 740 S 1300 735, 1640 780 L1640 900 L-40 900 Z" fill="#3a2418"/>
    <path d="M-40 840 C 400 800, 760 820, 940 800 S 1400 810, 1640 840 L1640 900 L-40 900 Z" fill="#2b190f"/>
    ${leaves(760, 22, 26, 46, "#2f9e6a", 0.9)}
    ${Array.from({ length: 60 }, () => `<circle cx="${(rnd() * W).toFixed(0)}" cy="${(600 + rnd() * 220).toFixed(0)}" r="${(2 + rnd() * 3).toFixed(1)}" fill="${rnd() > 0.5 ? "#b9ffd8" : "#9ae7ff"}" opacity=".9"/>`).join("")}
    ${Array.from({ length: 30 }, () => `<circle cx="${(rnd() * W).toFixed(0)}" cy="${(80 + rnd() * 500).toFixed(0)}" r="2" fill="#bff8ff" opacity=".8"/>`).join("")}`;
    }
  };
  var cache = /* @__PURE__ */ new Map();
  function scene2(id) {
    seed = [...id].reduce((s, c) => s + c.charCodeAt(0) * 97, 1);
    return SCENES[id]().replace(/id="(\w+)"/g, `id="${id}-$1"`).replace(/url\(#(\w+)\)/g, `url(#${id}-$1)`);
  }
  function paintBackground(el, id) {
    if (!cache.has(id)) cache.set(id, `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" aria-hidden="true">${scene2(id)}</svg>`);
    el.innerHTML = cache.get(id);
    el.dataset.bg = id;
  }
  function backgroundThumb(id) {
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${scene2(id)}</svg>`;
  }

  // src/shared/deck.ts
  var CARD_SPECS = {
    lightblue: { label: "Bolt", kind: "attack", amount: 100, cost: 10 },
    blue: { label: "Frost", kind: "attack", amount: 120, cost: 25 },
    yellow: { label: "Mana", kind: "mana", amount: 60, cost: 0 },
    green: { label: "Heal", kind: "heal", amount: 100, cost: 40 },
    red: { label: "Inferno", kind: "attack", amount: 250, cost: 70 }
  };
  var DECK_CHARACTERS = ["goblin", "knight", "witch", "wizard"];
  var CHARACTER_INFO = {
    goblin: { name: "Goblin", power: "Frenzy: play 2 cards in a row this turn." },
    knight: { name: "Knight", power: "Bulwark: take 30% less damage and heal 30% more for 2 turns." },
    witch: { name: "Witch", power: "Sight: see the kanji and reading of all your cards for 2 turns (and the kanji stays visible while casting)." },
    wizard: { name: "Wizard", power: "Arcane reserve (passive): out of cards \u2192 draw 2 random cards before a new draft; out of mana \u2192 +30 mana. Once each.", passive: true }
  };
  var DECK_RULES = {
    hp: 1e3,
    maxMana: 150,
    manaPerTurn: 10,
    handSize: 10,
    cardsPerLevel: 4,
    picksPerTurn: 2,
    pickMs: 2e4,
    characterMs: 3e4,
    chooseMs: 15e3,
    // pick which card to play
    castMs: 2e4,
    // then write its kanji (includes the 1 s flash)
    castFlashMs: 1e3,
    matchMs: 8 * 6e4,
    // then overtime
    overtimeCardMs: 15e3,
    knightDamageTaken: 0.7,
    knightHealBonus: 1.3,
    abilityTurns: 2,
    wizardBonusCards: 2,
    wizardBonusMana: 30
  };

  // src/client/wizard.ts
  var WIZARD_MAP = [
    "......H.........",
    ".....HHh........",
    ".....HHh........",
    "....HHHHh.......",
    "....HYHHh....OO.",
    "...HHHHHHh..OOOO",
    ".YYYYYYYYYY..OO.",
    "...SSSSSS.....T.",
    "...SSESSE.....T.",
    "...SSSSSS.....T.",
    "...BBBBBB....ST.",
    "..RBBBBBBRRRRRT.",
    ".RRRBBBBRRRRr.T.",
    ".RRRRBBRRRrr..T.",
    ".RRRRRRRRRr...T.",
    ".RRRRRYRRRr...T.",
    ".RRRRRYRRRRr..T.",
    "RRRRRRYRRRRRr.T.",
    "RRRRRRYRRRRRrrT.",
    "..KKK...KKK...T."
  ];
  var COMMON = { Y: "#ffd479", S: "#f2c79e", E: "#1b1530", B: "#ece8f7", T: "#8a5a2b", K: "#2a2440" };
  var PALETTES = {
    me: { ...COMMON, H: "#2f6fe0", h: "#1d47a6", R: "#3b82f6", r: "#1e4fb8", O: "#6ee7ff" },
    opp: { ...COMMON, H: "#c2364d", h: "#7d1a2e", R: "#d6445c", r: "#8a1f34", O: "#ffb36b" }
  };
  function pixelSvg(map, pal, classes = {}) {
    const rects = [];
    map.forEach((row, y) => {
      for (let x = 0; x < row.length; ) {
        const ch = row[x];
        let w = 1;
        while (row[x + w] === ch) w++;
        if (ch !== ".") rects.push(`<rect x="${x}" y="${y}" width="${w}" height="1" fill="${pal[ch]}"${classes[ch] ? ` class="${classes[ch]}"` : ""}/>`);
        x += w;
      }
    });
    return `<svg viewBox="0 0 ${map[0].length} ${map.length}" shape-rendering="crispEdges" aria-hidden="true">${rects.join("")}</svg>`;
  }
  var PALETTES_ALLY = { ...COMMON, H: "#2f8f6b", h: "#1c5c44", R: "#3aa57c", r: "#22684e", O: "#c6ff7a" };
  function wizardSvg(side) {
    return pixelSvg(WIZARD_MAP, side === "ally" ? PALETTES_ALLY : PALETTES[side], { O: "orb" });
  }
  var GOBLIN_MAP = [
    "................",
    "................",
    "................",
    "......gGGg......",
    "....gGGGGGGg....",
    ".gg.GGGGGGGG.gg.",
    "..gGGEGGGEGGGg..",
    "...gGGGGGGGGg...",
    "....GTGTGTGG....",
    ".....gGGGGg..C..",
    "....bBBBBBBb.CC.",
    "...GbBBBBBBbGC..",
    "...GbBBbbBBbGC..",
    "....bBBBBBBb.C..",
    "....bBBBBBBb.C..",
    "....bbBBBBbb....",
    ".....GG..GG.....",
    ".....GG..GG.....",
    "....KKK..KKK....",
    "................"
  ];
  var GOBLIN_PAL = { G: "#6fbf4a", g: "#3f7d2a", E: "#ffe066", T: "#f4f1e6", B: "#7a4e2d", b: "#4f311b", C: "#a0703e", K: "#2a2440" };
  var KID_MAP = [
    "................",
    "................",
    "................",
    "................",
    ".....HHHHH......",
    "....HHHHHHH.....",
    "....HSSSSSH.....",
    "....SSESESS.....",
    "....SSSSSSS.....",
    ".....SSmSS...Y..",
    "......SSS...YTY.",
    "....RRRRRRRSST..",
    "...SRRRRRRR..T..",
    "...SRRRRRRR..T..",
    "....RRRRRRR.....",
    "....DDDDDDD.....",
    "....DDD.DDD.....",
    ".....SS..SS.....",
    "....KKK..KKK....",
    "................"
  ];
  var KID_PAL = { H: "#7a4a24", S: "#f2c79e", E: "#1b1530", m: "#b5654a", R: "#d65a4a", D: "#3d5ca8", Y: "#ffd479", T: "#8a5a2b", K: "#2a2440" };
  var HUMAN_MAP = [
    "................",
    "................",
    ".....HHHHH......",
    "....HHHHHHH..V..",
    "....HSSSSSH..V..",
    "....SSESESS..V..",
    "....SSSSSSS..V..",
    ".....SSmSS...V..",
    "......SSS....V..",
    "...RRRRRRRR..V..",
    "..RRRRRRRRRRYYY.",
    "..SRRRRRRRRSS...",
    "..S.RRRRRRR.....",
    "....LLLLLLL.....",
    "....RRRRRRR.....",
    "....DDDDDDD.....",
    "....DDD.DDD.....",
    "....DDD.DDD.....",
    "...KKKK.KKKK....",
    "................"
  ];
  var HUMAN_PAL = { H: "#3b2a20", S: "#f2c79e", E: "#1b1530", m: "#b5654a", R: "#3e8e5e", L: "#5a3a1e", D: "#4a4a6a", V: "#d9dde8", Y: "#ffd479", K: "#2a2440" };
  var KNIGHT_MAP = [
    "......PP........",
    ".....PPP........",
    ".....MMMM.......",
    "....MMMMMM......",
    "....MMMMMMM.....",
    "....MmEEEEM.....",
    "....MMMMMMM.....",
    "....mMMMMMm.....",
    ".....mMMMm......",
    "...mMMMMMMMAAAA.",
    "..mMMMMMMMMAYYA.",
    "..MMMMMMMMMAYYA.",
    "..M.MMMMMMMAAAA.",
    "..S.mmmmmmm.AA..",
    "....MMMMMMM.....",
    "....mMMMMMm.....",
    "....MMM.MMM.....",
    "....mmm.mmm.....",
    "...KKKK.KKKK....",
    "................"
  ];
  var KNIGHT_PAL = { P: "#d64545", M: "#b8c0cc", m: "#6e7686", E: "#14121c", A: "#3d5ca8", Y: "#ffd479", S: "#f2c79e", K: "#2a2440" };
  var WITCH_PAL = { ...COMMON, H: "#2a1f3d", h: "#140e20", Y: "#9b59ff", S: "#a8d88a", E: "#2a1430", B: "#3a2a4a", R: "#5b2a86", r: "#3d1a5c", O: "#b6ff5a" };
  function heroSvg(hero, side) {
    if (hero === "witch") return pixelSvg(WIZARD_MAP, WITCH_PAL, { O: "orb" });
    return avatarSvg(hero, side);
  }
  function avatarSvg(avatar, side) {
    switch (avatar) {
      case "goblin":
        return pixelSvg(GOBLIN_MAP, GOBLIN_PAL);
      case "kid":
        return pixelSvg(KID_MAP, KID_PAL, { Y: "orb" });
      case "human":
        return pixelSvg(HUMAN_MAP, HUMAN_PAL, { V: "orb" });
      case "knight":
        return pixelSvg(KNIGHT_MAP, KNIGHT_PAL, { Y: "orb" });
      default:
        return wizardSvg(side);
    }
  }
  var DRAGON_MAP = [
    "........................................",
    ".............H.........WwwwwwwwWWW......",
    "........H...HH.......wwwwwWWWWWwwwwW....",
    "........H..HH........wWWWwWWWWWwWWWww...",
    ".......HH.HHH........wwWWWwWWWWWwWWwwww.",
    ".......HKGHH........WwwWWWwWWWWWwWWWwWWw",
    ".....GGHKHHK........WwwWWWWwWWWWWwWWwWW.",
    "....GKeeKKKKG.......WwWwWWWwWWWWWwWWww..",
    ".GGGKKEEKKKKKG......wWWwWWWWwWWWWWw.Ww..",
    ".kkkkKKKKKKKKKG.....wWWWwWWWwWWWWW......",
    ".....KKKKKKKKKKGH...wWWWwWWWWwWWWW......",
    "..TMTMTMMMKKKKKKK..WwWWWwwWWW...W.......",
    "...TkTkTkkkKKKKKKG.WwWHWWHWWW...........",
    "...........kKKKKKKGHKGKGGKGGH...........",
    "............kKKKKKKKKKKKKKKKKGGH........",
    ".............kKKKKKKKKKKKKKKKKKK........",
    "..............kKKKKKKKKKKKKKKKKKG.......",
    "...............KKKKKKKKKKKKKKKKKK.......",
    "..............GKKKKKKKKKKKKKKKKKKG......",
    "..............KKKKKKKKKKKKKKKKKKKKG.....",
    "..............KKKKKSKKSKKSKKSKKKKKKG....",
    "..............KKKKSKKSKKSKKSKKKkkkkKG...",
    "..............KKKSkkSKKSKKSKKSK....kKG..",
    ".............GKKKK..kkkkkkKKSKK.....kKG.",
    ".............KKKKK........KKKKK......HHH",
    ".............KKKKk........KKKKk......kHH",
    ".............KKKK.........KKKK.........H",
    "...........C.kkkkGG.....C.kkkkGG........",
    "...........C.C.C.C......C.C.C.C.........",
    "........................................"
  ];
  var DRAGON_PALETTE = {
    K: "#1c1926",
    k: "#0c0a12",
    G: "#3d3754",
    S: "#2a2636",
    W: "#2b2238",
    w: "#4b4262",
    H: "#b8b29c",
    T: "#efe9d8",
    E: "#39ff7a",
    e: "#1f9c4c",
    C: "#cfc9b6",
    M: "#4a0f16"
  };
  function dragonSvg() {
    return pixelSvg(DRAGON_MAP, DRAGON_PALETTE, { E: "eye" });
  }

  // src/shared/progress.ts
  var XP_PER_LEVEL = 1e3;
  var xpToNext = (level) => XP_PER_LEVEL * (level + 1);
  var xpForLevel = (level) => XP_PER_LEVEL * level * (level + 1) / 2;
  function levelOf(xp) {
    let n = Math.floor((Math.sqrt(1 + 8 * Math.max(0, xp) / XP_PER_LEVEL) - 1) / 2);
    while (xpForLevel(n + 1) <= xp) n++;
    while (n > 0 && xpForLevel(n) > xp) n--;
    return n;
  }
  function levelXp(xp) {
    const level = levelOf(xp);
    return { level, into: Math.max(0, xp) - xpForLevel(level), need: xpToNext(level) };
  }
  var levelProgress = (xp) => {
    const l = levelXp(xp);
    return l.into / l.need;
  };
  var critText = (crit) => `${(crit * 100).toFixed(1).replace(/\.0$/, "")}%`;
  var BACKGROUNDS = [
    { id: "forest", name: "Forest", level: 0 },
    { id: "swamp", name: "Swamp", level: 5 },
    { id: "plains", name: "Plains", level: 10 },
    { id: "castle", name: "Castle", level: 15 },
    { id: "worldtree", name: "World Tree", level: 20 }
  ];

  // src/client/ui.ts
  var $ = (id) => document.getElementById(id);
  function h(tag, cls = "", text, attrs = {}) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text !== void 0) el.textContent = String(text);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    return el;
  }
  var append = (parent, ...kids) => {
    parent.append(...kids);
    return parent;
  };
  var SCREENS = ["auth", "menu", "admin", "modes", "lobby", "prep", "battle", "results", "study", "review", "customize", "deck"];
  var screenListener = () => {
  };
  var onScreen = (fn) => {
    screenListener = fn;
  };
  var show = (screen) => {
    SCREENS.forEach((s) => $(s).hidden = s !== screen);
    scrollTo(0, 0);
    screenListener(screen);
  };
  var setError = (text) => {
    $("error").textContent = text;
  };
  var secs = (ms) => (ms / 1e3).toFixed(1) + "s";
  var clockText = (ms) => {
    const s = Math.max(0, Math.ceil(ms / 1e3));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  };
  var levelsText = (levels) => levels.map((l) => LEVEL_LABEL[l]).join(" + ");
  var timers = /* @__PURE__ */ new Map();
  function countdown(slot, durationMs, onFrame, totalMs = durationMs) {
    stopCountdown(slot);
    const end = performance.now() + durationMs;
    const tick = () => {
      const left = Math.max(0, end - performance.now());
      onFrame(left, totalMs > 0 ? left / totalMs : 0);
      if (left > 0) timers.set(slot, requestAnimationFrame(tick));
    };
    tick();
  }
  function stopCountdown(slot) {
    for (const [k, id] of timers) if (!slot || k === slot) {
      cancelAnimationFrame(id);
      timers.delete(k);
    }
  }
  function setProfile(p) {
    if (!p) return;
    const lx = levelXp(p.xp);
    $("whoLevel").textContent = `Lv ${lx.level} \xB7 ${lx.into.toLocaleString()}/${lx.need.toLocaleString()} XP`;
    $("whoCrit").textContent = `\u2726 ${critText(p.crit)} crit`;
    $("whoXp").style.width = `${levelProgress(p.xp) * 100}%`;
    $("whoXp").parentElement.title = `${lx.into} / ${lx.need} XP to level ${lx.level + 1}`;
  }
  var toastTimer = 0;
  function toast(text, ms = 3500) {
    const el = $("toast");
    el.textContent = text;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => el.hidden = true, ms);
  }
  function setUser(user2) {
    $("whoami").hidden = !user2;
    $("whoName").textContent = user2?.username ?? "";
    $("whoRole").hidden = user2?.role !== "admin";
    $("adminBtn").hidden = user2?.role !== "admin";
  }
  function setNetStatus(text) {
    $("netStatus").hidden = !text;
    $("netStatus").textContent = text ?? "";
  }
  function setAudioButtons(radio2, sfx2) {
    const set = (id, on, icon, label) => {
      $(id).setAttribute("aria-pressed", String(on));
      $(id).replaceChildren(h("span", "ico", icon), h("span", "lbl", ` ${label} ${on ? "on" : "off"}`));
    };
    set("radioBtn", radio2, "\u266A", "Music");
    set("sfxBtn", sfx2, sfx2 ? "\u{1F50A}" : "\u{1F507}", "Sounds");
  }
  function paintScenes() {
    for (const scene3 of document.querySelectorAll(".duel-scene")) {
      scene3.innerHTML = "";
      for (const side of ["me", "opp"]) {
        const w = h("div", `wizard ${side}`);
        const s = h("div", "sprite");
        s.innerHTML = wizardSvg(side);
        w.append(s, h("div", "ground"));
        scene3.append(w);
      }
      scene3.append(h("div", "orb"), h("div", "orb b"));
    }
  }
  function setAuthTab(tab) {
    const login = tab === "login";
    $("tabLogin").classList.toggle("on", login);
    $("tabRegister").classList.toggle("on", !login);
    $("tabLogin").setAttribute("aria-selected", String(login));
    $("tabRegister").setAttribute("aria-selected", String(!login));
    $("authSubmit").textContent = login ? "Log in" : "Create account";
    $("authPass").autocomplete = login ? "current-password" : "new-password";
    $("authHint").textContent = login ? "" : "Login: 3\u201316 letters, numbers or _. Password: at least 6 characters.";
    $("authError").textContent = "";
  }
  function showAdmin(users, me, onToggle) {
    const banned = users.filter((u) => u.banned).length;
    $("adminInfo").textContent = `${users.length} accounts \xB7 ${banned} banned`;
    $("userRows").replaceChildren(
      ...users.map((u) => {
        const action = h("td");
        if (u.role !== "admin" && u.id !== me.id) {
          const b = h("button", "pill" + (u.banned ? "" : " danger"), u.banned ? "Unban" : "Ban");
          b.onclick = () => onToggle(u);
          action.append(b);
        }
        return append(
          h("tr"),
          h("td", "", u.username + (u.id === me.id ? " (you)" : "")),
          h("td", "", u.role),
          h("td", "", new Date(u.createdAt).toLocaleDateString()),
          h("td", u.banned ? "status-ban" : "status-ok", u.banned ? "Banned" : "Active"),
          action
        );
      })
    );
    show("admin");
  }
  function showLobby(code2, mode2, players2, you2, hostId, maxPlayers, minPlayers2) {
    $("code").textContent = code2;
    $("lobbyMode").textContent = MODE_LABEL[mode2];
    $("lobbyPlayers").replaceChildren(
      ...players2.map((p) => {
        const li = h("li");
        const av = h("span", "who-av");
        av.innerHTML = avatarSvg(p.avatar, p.id === you2 ? "me" : "opp");
        li.append(av, h("span", "who", p.id === you2 ? `${p.name} (you)` : p.name), h("span", "lv", `Lv ${p.level}`));
        if (p.crit > 0) li.append(h("span", "critv", `\u2726 ${critText(p.crit)} crit`));
        if (p.id === hostId) li.append(h("span", "tag", "host"));
        if (!p.online) li.append(h("span", "tag off", "away \u2014 seat kept"));
        if (mode2 === "deck") li.append(h("span", "tag " + (p.ready ? "ready" : "notready"), p.ready ? "\u2713 Ready" : "Not ready"));
        else li.append(append(h("div", "meta"), h("span", "", levelsText(p.levels)), h("span", "hpv", `\u2764 ${p.maxHp} HP`)));
        return li;
      }),
      ...Array.from({ length: Math.max(0, maxPlayers - players2.length) }, () => h("li", "empty", mode2 === "boss" ? "Waiting for a teammate (optional)\u2026" : "Waiting for opponent\u2026"))
    );
    const mine = players2.find((p) => p.id === you2)?.levels ?? [];
    $("levelChips").replaceChildren(
      ...LEVELS.map((lv) => {
        const on = mine.includes(lv);
        const label = h("label", "chip" + (on ? " on" : ""), LEVEL_LABEL[lv]);
        const box = h("input", "", void 0, { type: "checkbox", value: lv });
        box.checked = on;
        label.prepend(box);
        return label;
      })
    );
    $("levelsHint").textContent = mode2 === "deck" ? "Deck Duel draws cards from every level (N5\u2013N1). Your level picks only change your character here." : mode2 === "rapid" ? "Both players race on the same kanji, drawn from everyone's levels together." : mode2 === "boss" ? "Each player picks their own. The dragon gets tougher when the party picks harder levels." : mode2 === "writing" ? "Each player picks their own. You will write these words by hand. Harder levels hit harder \u2014 so your opponent gets more HP." : "Each player picks their own. \u304B\u306A = hiragana, answered in romaji. Harder levels hit harder \u2014 so your opponent gets more HP.";
    const isHost = you2 === hostId;
    const canStart = players2.length >= minPlayers2;
    const deck2 = mode2 === "deck";
    $("levels").hidden = deck2;
    $("lobby").classList.toggle("no-side", deck2);
    const meReady = !!players2.find((p) => p.id === you2)?.ready;
    $("readyBtn").hidden = !deck2;
    $("readyBtn").textContent = meReady ? "Not ready" : "Ready";
    $("readyBtn").classList.toggle("is-ready", meReady);
    $("readyBtn").dataset.ready = meReady ? "1" : "";
    if (deck2) {
      $("start").hidden = true;
      $("lobbyStatus").textContent = !canStart ? "Share the code \u2014 press Ready once your opponent joins. The duel starts when both are ready." : meReady ? "Waiting for your opponent to be ready\u2026" : "Press Ready \u2014 the duel starts when both players are ready.";
      show("lobby");
      return;
    }
    $("start").hidden = !isHost;
    $("start").disabled = !canStart;
    $("start").textContent = mode2 === "boss" && players2.length < maxPlayers ? "Start solo" : "Start battle";
    $("lobbyStatus").textContent = !canStart ? "Share the code \u2014 the battle can start once your opponent joins." : isHost ? mode2 === "boss" && players2.length < maxPlayers ? "Start now alone, or wait for a teammate." : "" : "Waiting for the host to start\u2026";
    show("lobby");
  }
  var selectedLevels = () => [...document.querySelectorAll("#levelChips input")].filter((i) => i.checked).map((i) => i.value);
  function showPrep(pool, durationMs, mode2) {
    $("prepSub").textContent = mode2 === "writing" ? "Memorise how each word is written. In battle you only get the meaning (and a half-second glimpse)." : "Memorise the readings. They vanish when the battle starts.";
    $("studyGrid").replaceChildren(
      ...pool.map((w) => append(h("div", "card"), h("div", "lv", LEVEL_LABEL[w.level]), h("div", "k", w.kanji, { lang: "ja" }), h("div", "r", w.reading, { lang: "ja" }), h("div", "m", w.meaning)))
    );
    $("ready").disabled = false;
    $("readyStatus").textContent = "";
    show("prep");
    countdown("prep", durationMs, (left, frac) => {
      $("prepClock").textContent = clockText(left);
      $("prepBar").style.width = `${frac * 100}%`;
    }, Math.max(durationMs, 6e4));
  }
  function setReady(readyCount, total, youReady) {
    $("ready").disabled = youReady;
    $("readyStatus").textContent = `${readyCount}/${total} ready${youReady && readyCount < total ? " \u2014 waiting for the others\u2026" : ""}`;
  }
  function clearStudy() {
    stopCountdown("prep");
    $("studyGrid").replaceChildren();
  }
  function hpBar(hp, max, label) {
    const pct = max > 0 ? hp / max * 100 : 0;
    const bar = append(h("div", "hp" + (pct <= 25 ? " low" : ""), void 0, { role: "meter", "aria-valuemin": "0", "aria-valuemax": String(max), "aria-valuenow": String(hp), "aria-label": label }), h("div"));
    bar.firstElementChild.style.width = `${pct}%`;
    return bar;
  }
  function fighterCard(el, p, label, emptyText) {
    if (!p) {
      el.replaceChildren(h("div", "name", emptyText));
      return;
    }
    const name = append(h("div", "name"), append(h("span", "n", label), h("span", "lv", `Lv ${p.level}`), h("span", "critv", p.crit > 0 ? ` \u2726${critText(p.crit)}` : "")), h("span", "combo", p.combo >= 2 ? `\xD7${p.combo} combo${p.combo >= 5 ? " \u{1F525}" : ""}` : ""));
    el.replaceChildren(name, hpBar(p.hp, p.maxHp, `${p.name} HP`), append(h("div", "hpnum", `${p.hp} / ${p.maxHp} HP`), h("span", "lvs", `\xB7 ${levelsText(p.levels)}${p.online ? "" : " \xB7 away"}`)));
  }
  var battleMode = "reading";
  function renderFighters(players2, you2, boss) {
    const me = players2.find((p) => p.id === you2);
    const other = players2.find((p) => p.id !== you2);
    fighterCard($("meCard"), me, me ? `${me.name} (you)` : "", "");
    if (battleMode === "boss") {
      fighterCard($("oppCard"), other, other ? `${other.name} (ally)` : "", "Solo run");
      const bar = $("bossBar");
      if (boss) bar.replaceChildren(h("div", "bname", `\u{1F409} ${boss.name}`), hpBar(boss.hp, boss.maxHp, `${boss.name} HP`), h("div", "hpnum", `${boss.hp} / ${boss.maxHp}`));
    } else {
      fighterCard($("oppCard"), other, other?.name ?? "", "Opponent left");
    }
    $("wizMe").classList.toggle("onfire", (me?.combo ?? 0) >= 5);
    $(battleMode === "boss" ? "wizAlly" : "wizOpp").classList.toggle("onfire", (other?.combo ?? 0) >= 5);
  }
  var actorEl = (a) => $(a === "me" ? "wizMe" : a === "opp" ? "wizOpp" : a === "ally" ? "wizAlly" : "dragon");
  function retrigger(el, cls, ms) {
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), ms);
  }
  function setupArena(mode2, players2, you2) {
    battleMode = mode2;
    const boss = mode2 === "boss";
    const ally = players2.find((p) => p.id !== you2);
    $("wizOpp").hidden = boss;
    $("dragon").hidden = !boss;
    $("bossBar").hidden = !boss;
    $("wizAlly").hidden = !boss || !ally;
    const meP = players2.find((p) => p.id === you2);
    for (const [id, side, p] of [["wizMe", "me", meP], ["wizOpp", "opp", ally], ["wizAlly", "ally", ally]]) {
      const w = $(id);
      w.className = `wizard ${side}`;
      w.querySelector(".sprite").innerHTML = avatarSvg(p?.avatar ?? "wizard", side);
    }
    $("dragon").className = "dragon";
    $("dragon").querySelector(".sprite").innerHTML = dragonSvg();
    $("fire").hidden = true;
    $("breathWarn").hidden = true;
    $("typeArea").hidden = mode2 === "writing";
    if (mode2 === "writing") mountWriteArea("writeSlot");
    else $("writeArea").hidden = true;
    $("meaningPrompt").hidden = true;
  }
  function floatText(target, text, cls) {
    const arena = $("arena");
    const a = arena.getBoundingClientRect();
    const t = target.getBoundingClientRect();
    const f = h("div", "float " + cls, text);
    f.style.left = `${t.left - a.left + t.width / 2 - 20}px`;
    f.style.top = `${t.top - a.top}px`;
    arena.append(f);
    setTimeout(() => f.remove(), 1e3);
  }
  function castSpell(caster, target, kanji, damage, friendly) {
    const c = actorEl(caster), t = actorEl(target);
    retrigger(c, "casting", 450);
    const arena = $("arena");
    const a = arena.getBoundingClientRect();
    const cr = c.getBoundingClientRect();
    const tr = t.getBoundingClientRect();
    const spell = h("div", "spell" + (friendly ? "" : " foe"), kanji, { lang: "ja" });
    arena.append(spell);
    const fromRight = cr.left > tr.left;
    const from = { x: fromRight ? cr.left - a.left - 10 : cr.right - a.left - 30, y: cr.top - a.top + cr.height * 0.15 };
    const to = { x: tr.left - a.left + tr.width / 2 - 20, y: tr.top - a.top + tr.height * 0.4 };
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const anim = spell.animate(
      [
        { transform: `translate(${from.x}px, ${from.y}px) scale(.6)`, opacity: 0.2 },
        { transform: `translate(${(from.x + to.x) / 2}px, ${Math.min(from.y, to.y) - 40}px) scale(1.1)`, opacity: 1, offset: 0.5 },
        { transform: `translate(${to.x}px, ${to.y}px) scale(1.3)`, opacity: 1 }
      ],
      { duration: reduced ? 300 : 420, easing: "ease-in" }
      // always animate: it shows who hit whom
    );
    return new Promise((resolve) => {
      anim.onfinish = () => {
        spell.remove();
        retrigger(t, "hurt", 520);
        floatText(t, `\u2212${damage}`, friendly ? "" : "taken");
        resolve();
      };
    });
  }
  function fizzle(who) {
    const w = actorEl(who);
    retrigger(w, "fizzle", 650);
    const puff = h("div", "puff", "\u{1F4A8}");
    w.append(puff);
    setTimeout(() => puff.remove(), 1e3);
  }
  function clawHit(victim, damage) {
    retrigger($("dragon"), "claw", 520);
    setTimeout(() => {
      const v = actorEl(victim);
      retrigger(v, "hurt", 520);
      floatText(v, `\u2212${damage}`, "taken");
    }, 180);
  }
  function breathWarning(inMs) {
    const el = $("breathWarn");
    el.hidden = false;
    $("dragon").classList.add("inhale");
    countdown("breath", inMs, (left) => el.textContent = `\u{1F525} The dragon inhales\u2026 ${Math.ceil(left / 1e3)}`);
  }
  function breathFire(damage, victims) {
    stopCountdown("breath");
    $("breathWarn").hidden = true;
    $("dragon").classList.remove("inhale");
    const fire = $("fire");
    const arena = $("arena").getBoundingClientRect();
    const d = $("dragon").getBoundingClientRect();
    const mouthX = d.left - arena.left + d.width * 0.08;
    const mouthY = d.top - arena.top + d.height * 0.37;
    const height = Math.max(160, arena.height * 0.7);
    fire.style.left = "0px";
    fire.style.width = `${Math.max(120, mouthX)}px`;
    fire.style.top = `${mouthY - height * 0.35}px`;
    fire.style.height = `${height}px`;
    fire.hidden = false;
    fire.style.animation = "none";
    void fire.offsetWidth;
    fire.style.animation = "";
    setTimeout(() => fire.hidden = true, 1100);
    setTimeout(() => {
      for (const v of victims) {
        retrigger(actorEl(v), "hurt", 520);
        floatText(actorEl(v), `\u2212${damage}`, "taken");
      }
    }, 450);
  }
  function knockOut(who) {
    actorEl(who).classList.add("ko");
  }
  function showBattle(mode2, players2, boss, you2, countdownMs, battleMs, onTick) {
    clearStudy();
    setupArena(mode2, players2, you2);
    renderFighters(players2, you2, boss);
    $("kanji").textContent = "";
    setFeedback(null);
    $("log").textContent = "";
    lockInput();
    $("battleClock").textContent = clockText(battleMs);
    show("battle");
    const cd = $("countdown");
    if (countdownMs > 0) {
      cd.hidden = false;
      let last = -1;
      countdown("cd", countdownMs, (left) => {
        const n = Math.ceil(left / 1e3);
        if (n !== last) {
          last = n;
          onTick(n);
        }
        cd.textContent = left > 0 ? String(n) : "\u6226\uFF01";
        if (left <= 0) setTimeout(() => cd.hidden = true, 500);
      });
    } else cd.hidden = true;
    setTimeout(() => countdown("battle", battleMs, (left) => $("battleClock").textContent = clockText(left)), countdownMs);
  }
  var answerMode = "reading";
  var currentAnswerMode = () => answerMode;
  function showChallenge(c) {
    answerMode = c.answer;
    const k = $("kanji");
    k.classList.remove("cast", "gone");
    k.textContent = c.kanji;
    setFeedback(null);
    countdown("challenge", c.timeLimitMs, (_l, frac) => $("challengeBar").style.width = `${frac * 100}%`);
    if (c.answer === "writing") {
      const mp = $("meaningPrompt");
      mp.hidden = false;
      mp.replaceChildren(h("span", "mp-reading", c.reading ?? "", { lang: "ja" }), h("span", "", ` \u2014 ${c.meaning ?? ""}`), h("small", "", `write the kanji: ${c.charCount} character${c.charCount === 1 ? "" : "s"}`));
      const ime = $("imeInput");
      ime.value = "";
      ime.disabled = false;
      setTimeout(() => {
        if (k.textContent === c.kanji) {
          k.classList.add("gone");
        }
      }, c.flashMs ?? 500);
      return;
    }
    const input = $("answer");
    input.disabled = false;
    input.value = "";
    input.placeholder = c.answer === "romaji" ? "romaji, then Enter" : "\u304B\u306A or romaji, then Enter";
    input.lang = c.answer === "romaji" ? "en" : "ja";
    setInputHint(c.answer === "romaji" ? "Hiragana spell \u2014 answer in romaji" : "");
    $("skip").disabled = false;
    input.focus();
  }
  function setInputHint(text, warn = false) {
    const el = $("inputHint");
    el.textContent = text;
    el.classList.toggle("warn", warn);
  }
  function setCharSlots(total, written2, active) {
    $("charSlots").replaceChildren(
      ...Array.from({ length: total }, (_, i) => h("div", "slot" + (i < written2.length ? " done" : i === written2.length && active ? " now" : ""), i < written2.length ? "\u2713" : String(i + 1)))
    );
    $("padNext").textContent = written2.length >= total - 1 ? "Cast \u2726" : "Next \u2192";
    for (const id of ["padUndo", "padClear", "padSkip", "padNext"]) $(id).disabled = !active;
  }
  function lockInput() {
    stopCountdown("challenge");
    $("answer").disabled = true;
    $("skip").disabled = true;
    for (const id of ["padUndo", "padClear", "padSkip", "padNext"]) $(id).disabled = true;
    $("imeInput").disabled = true;
  }
  function mountWriteArea(slotId) {
    const area = $("writeArea");
    if (area.parentElement?.id !== slotId) $(slotId).append(area);
    area.hidden = false;
  }
  var hideWriteArea = () => {
    $("writeArea").hidden = true;
  };
  function setFeedback(f) {
    const el = $("feedback");
    if (!f) {
      el.replaceChildren();
      el.className = "feedback";
      return;
    }
    el.className = "feedback " + (f.correct ? "good" : "bad");
    $("kanji").classList.remove("gone");
    $("meaningPrompt").hidden = true;
    const word = (cls) => append(h("span", cls), h("span", "rk", f.kanji, { lang: "ja" }), h("span", "rr", f.reading, { lang: "ja" }), h("span", "", f.meaning));
    if (f.correct) {
      $("kanji").classList.add("cast");
      const combo = f.combo >= 2 ? ` \xB7 \xD7${f.combo} combo` : "";
      const big = h("span", "big" + (f.crit ? " crit" : ""), f.crit ? `\u2726 CRIT! ${f.damage} damage` : `\u2713 CAST! ${f.damage} damage`);
      el.replaceChildren(big, word("mean"), h("span", "sub2", `${secs(f.responseMs ?? 0)}${combo}`));
    } else {
      if (f.retry) {
        el.replaceChildren(h("span", "big", "\u2717 Not quite \u2014 try again!"));
        return;
      }
      const title = f.beaten ? "\u26A1 Opponent was faster!" : f.skipped ? "\u21B7 Skipped" : f.timedOut ? "\u2717 Too slow!" : "\u2717 MISS!";
      const kids = [h("span", "big", title), word("reveal")];
      if (f.recognized && !f.skipped && !f.timedOut) kids.push(h("span", "sub2", `The pad read: ${f.recognized}`));
      el.replaceChildren(...kids);
    }
  }
  function logLine(text, kanji) {
    const el = $("log");
    el.replaceChildren(h("span", "", text));
    if (kanji) el.append(h("span", "k", ` ${kanji}`, { lang: "ja" }));
  }
  var REASONS = {
    ko: "Knock-out",
    time: "Time up",
    forfeit: "A player left the battle",
    boss_slain: "The Black Dragon has fallen",
    party_wiped: "The party was burned to ash"
  };
  function showResults(mode2, players2, you2, winnerId, teamWon, reason, stats) {
    stopCountdown();
    if (mode2 === "boss") {
      $("resultTitle").textContent = teamWon ? "\u{1F409} Dragon slain!" : "\u{1F525} Defeat";
      $("resultReason").textContent = teamWon ? REASONS.boss_slain : reason === "time" ? "Time up \u2014 the dragon survived" : REASONS[reason];
    } else {
      $("resultTitle").textContent = winnerId === null ? "Draw" : winnerId === you2 ? "\u{1F3C6} Victory" : "Defeat";
      $("resultReason").textContent = reason === "time" ? "Time up \u2014 most HP left wins" : REASONS[reason];
    }
    const otherId = Object.keys(stats).find((id) => id !== you2);
    const me = stats[you2];
    const other = otherId ? stats[otherId] : void 0;
    const otherName = players2.find((p) => p.id === otherId)?.name ?? (mode2 === "boss" ? "Ally" : "Opponent");
    const rows = [
      [mode2 === "boss" ? "Damage to dragon" : "Damage dealt", (s) => String(s.damageDealt)],
      ["Accuracy", (s) => s.attempts ? `${Math.round(s.accuracy * 100)}% (${s.correct}/${s.attempts})` : "\u2014"],
      ["Avg response", (s) => s.avgResponseMs !== null ? secs(s.avgResponseMs) : "\u2014"],
      ["Best combo", (s) => `\xD7${s.bestCombo}`]
    ];
    const cmp = $("statCompare");
    cmp.replaceChildren(h("div", "h me", "You"), h("div"), h("div", "h r", other ? otherName : ""));
    for (const [label, fmt] of rows) cmp.append(h("div", "v", fmt(me)), h("div", "lbl", label), h("div", "v r", other ? fmt(other) : ""));
    const byKanji = new Map(me.words.map((w) => [w.kanji, w]));
    $("struggledBox").hidden = me.struggled.length === 0;
    $("struggled").replaceChildren(
      ...me.struggled.map((k) => {
        const w = byKanji.get(k);
        return append(h("div", "card"), h("div", "k", w.kanji, { lang: "ja" }), h("div", "r", w.reading, { lang: "ja" }), h("div", "m", w.meaning));
      })
    );
    $("wordRows").replaceChildren(
      ...me.words.map((w) => {
        const result = w.attempts === 0 ? h("span", "na", "not seen") : w.correct === w.attempts ? h("span", "ok", `\u2713 ${w.correct}/${w.attempts}`) : h("span", "no", `\u2717 ${w.correct}/${w.attempts}`);
        return append(
          h("tr"),
          h("td", "k", w.kanji, { lang: "ja" }),
          h("td", "rd", w.reading, { lang: "ja" }),
          h("td", "", w.meaning),
          append(h("td"), result),
          h("td", "", w.avgMs !== null ? secs(w.avgMs) : "\u2014")
        );
      })
    );
    $("xpLine").hidden = true;
    $("rematch").disabled = false;
    $("rematch").textContent = "Rematch";
    $("rematchStatus").textContent = "";
    show("results");
  }
  function showXp(gained, level, levelUp) {
    const el = $("xpLine");
    el.hidden = false;
    el.replaceChildren(h("span", "", gained > 0 ? `+${gained} XP` : "No XP \u2014 the match was forfeited"));
    if (levelUp) el.append(h("span", "lvup", `\u2B06 Level ${level}!`));
  }
  function setRematchStatus(votes, you2, playerCount, minPlayers2) {
    const youVoted = votes.includes(you2);
    $("rematch").disabled = youVoted;
    if (playerCount < minPlayers2) {
      $("rematch").textContent = "Back to lobby";
      $("rematch").disabled = false;
      $("rematchStatus").textContent = "Your opponent left.";
    } else if (votes.length === 0) $("rematchStatus").textContent = "";
    else $("rematchStatus").textContent = youVoted ? "Waiting for the others to accept\u2026" : "Rematch requested!";
  }

  // src/client/deckui.ts
  var $2 = $;
  var COLOR_NAME = { lightblue: "Light blue", blue: "Blue", yellow: "Yellow", green: "Green", red: "Red" };
  function h2(tag, cls = "", text) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text !== void 0) el.textContent = String(text);
    return el;
  }
  var view = null;
  var hooks;
  var lastCastId = 0;
  var writingCastId = 0;
  var flashTimer = 0;
  function initDeck(h3) {
    hooks = h3;
    $2("dkAbility").onclick = () => hooks.send({ type: "deck_ability" });
  }
  function cardEl(c, opts = {}) {
    const spec = CARD_SPECS[c.color];
    const el = h2(opts.button ? "button" : "div", `dkc c-${c.color}${opts.big ? " big" : ""}${!c.kanji && !opts.big ? " back" : ""}`);
    if (opts.button) el.disabled = !!opts.disabled;
    el.title = `${COLOR_NAME[c.color]} \u2014 ${spec.label}: ${spec.kind === "attack" ? `${spec.amount} damage` : spec.kind === "heal" ? `heal ${spec.amount}` : `+${spec.amount} mana`}${spec.cost ? `, costs ${spec.cost} mana` : ""}`;
    if (opts.big) return el;
    el.append(h2("span", "dkc-cost", spec.cost ? `${spec.cost}\u25C6` : "free"));
    if (c.kanji) {
      const k = h2("span", "dkc-k", c.kanji);
      k.lang = "ja";
      const r = h2("span", "dkc-r", c.reading ?? "");
      r.lang = "ja";
      el.append(k, r);
    } else {
      el.append(h2("span", "dkc-lbl", spec.label), h2("span", "dkc-amt", spec.kind === "attack" ? `${spec.amount}` : spec.kind === "heal" ? `+${spec.amount}\u2665` : `+${spec.amount}\u25C6`));
    }
    return el;
  }
  function playerPanel(el, p, mine) {
    const av = h2("div", "dk-av");
    av.innerHTML = p.character ? heroSvg(p.character, mine ? "me" : "opp") : "";
    const name = h2("div", "dk-name");
    name.append(h2("span", "", mine ? `${p.name} (you)` : p.name));
    if (p.character) name.append(h2("span", "tag", CHARACTER_INFO[p.character].name));
    if (p.abilityActive > 0 && p.character !== "wizard") name.append(h2("span", "tag", `${p.character === "goblin" ? "Frenzy" : CHARACTER_INFO[p.character].power.split(":")[0]} \xD7${p.abilityActive}`));
    const hp = h2("div", "hp" + (p.hp / p.maxHp <= 0.25 ? " low" : ""));
    const hpFill = h2("div");
    hpFill.style.width = `${p.hp / p.maxHp * 100}%`;
    hp.append(hpFill);
    const mana = h2("div", "manabar");
    const manaFill = h2("div");
    manaFill.style.width = `${p.mana / p.maxMana * 100}%`;
    mana.append(manaFill);
    const nums = h2("div", "hpnum", `\u2665 ${p.hp}/${p.maxHp} \xB7 \u25C6 ${p.mana}/${p.maxMana} \xB7 ${p.handSize} cards`);
    const counts2 = h2("div", "dk-counts");
    for (const col of Object.keys(p.handCounts)) {
      if (!p.handCounts[col]) continue;
      const cc = h2("span", "cc");
      const dot = h2("span", `dot dkc c-${col}`);
      dot.style.width = "12px";
      dot.style.height = "16px";
      dot.style.padding = "0";
      cc.append(dot, `\xD7${p.handCounts[col]}`);
      counts2.append(cc);
    }
    el.replaceChildren(av, name, hp, mana, nums, counts2);
  }
  function renderDeck(v) {
    view = v;
    const me = v.players.find((p) => p.id === v.you);
    const opp = v.players.find((p) => p.id !== v.you);
    show("deck");
    playerPanel($2("dkMe"), me, true);
    playerPanel($2("dkOpp"), opp, false);
    const overlay = $2("dkOverlay");
    if (v.phase === "characters" || v.phase === "draft") {
      renderCast(v);
      stopCountdown("dkTurn");
      $2("dkBanner").textContent = "";
      return v.phase === "characters" ? renderCharacters(v, me, opp) : renderDraft(v, me);
    }
    overlay.hidden = true;
    if (v.phase === "overtime") {
      stopCountdown("dkMatch");
      $2("dkClock").textContent = `OVERTIME \xB7 ${v.overtimeLeft} cards`;
    } else {
      countdown("dkMatch", v.matchLeftMs, (left) => $2("dkClock").textContent = clock(left));
    }
    const banner = $2("dkBanner");
    const myTurn = v.turn?.active === v.you;
    banner.classList.toggle("mine", myTurn || v.phase === "overtime");
    const deadline = v.casting?.deadlineMs ?? v.turn?.deadlineMs ?? 0;
    const label = v.phase === "overtime" ? "Overtime! First to write it uses the card" : myTurn ? v.casting ? "Write the kanji!" : `Your turn \u2014 choose a card${v.turn.castsLeft > 1 ? " (Frenzy: 2 cards)" : ""}` : v.casting ? `${opp.name} is casting` : `${opp.name} is choosing a card`;
    countdown("dkTurn", deadline, (left) => banner.textContent = `${label} \xB7 ${Math.ceil(left / 1e3)}s`);
    const canPlay = myTurn && !v.casting;
    $2("dkHand").replaceChildren(...v.hand.map((c) => {
      const el = cardEl(c, { button: true, disabled: !canPlay || CARD_SPECS[c.color].cost > me.mana });
      el.onclick = () => {
        sfx.flip();
        hooks.send({ type: "deck_play", cardId: c.cardId });
      };
      return el;
    }));
    $2("dkOppHand").replaceChildren(...Array.from({ length: opp.handSize }, () => h2("div", "dkc back face-down")));
    const ab = $2("dkAbility");
    const ch = me.character;
    ab.innerHTML = ch ? heroSvg(ch, "me") : "";
    ab.append(h2("span", "ab-name", ch ? CHARACTER_INFO[ch].passive ? "Passive" : me.abilityUsed ? "Used" : "Power" : ""));
    ab.title = ch ? CHARACTER_INFO[ch].power : "";
    ab.classList.toggle("passive", !!ch && !!CHARACTER_INFO[ch].passive);
    ab.classList.toggle("active", me.abilityActive > 0);
    ab.disabled = !ch || !!CHARACTER_INFO[ch].passive || me.abilityUsed || !myTurn || !!v.casting;
    renderCast(v);
  }
  function renderCast(v) {
    const box = $2("dkCast");
    const c = v.casting;
    if (!c) {
      box.replaceChildren();
      if (writingCastId) {
        hooks.stopWriting();
        writingCastId = 0;
      }
      $2("dkFeedback").replaceChildren();
      return;
    }
    if (c.castId !== lastCastId) {
      lastCastId = c.castId;
      const card = cardEl(c.card, { big: true });
      const top = h2("div", "dkc-half");
      const k = h2("span", "dkc-k", c.card.kanji);
      k.lang = "ja";
      top.append(k);
      const bottom = h2("div", "dkc-half bottom");
      const r = h2("span", "dkc-r", c.card.reading);
      r.lang = "ja";
      bottom.append(r, h2("span", "dkc-m", c.card.meaning));
      card.append(top, bottom);
      box.replaceChildren(card);
      clearTimeout(flashTimer);
      if (c.flashMs !== null) flashTimer = window.setTimeout(() => k.classList.add("gone"), c.flashMs);
      $2("dkFeedback").replaceChildren();
    }
    const mine = v.phase === "overtime" || c.ownerId === v.you;
    if (mine && writingCastId !== c.castId) {
      writingCastId = c.castId;
      hooks.beginWriting(c.castId, c.card.kanji);
    } else if (!mine && writingCastId) {
      hooks.stopWriting();
      writingCastId = 0;
    }
  }
  function renderCharacters(v, me, opp) {
    const overlay = $2("dkOverlay");
    overlay.hidden = false;
    const title = h2("h2", "", me.character ? `Waiting for ${opp.name}\u2026` : "Choose your hero");
    const grid = h2("div", "char-pick");
    for (const c of DECK_CHARACTERS) {
      const b = h2("button", "char-card" + (me.character === c ? " on" : ""));
      b.disabled = !!me.character;
      const av = h2("div", "ch-av");
      av.innerHTML = heroSvg(c, "me");
      b.append(av, h2("span", "ch-name", CHARACTER_INFO[c].name), h2("span", "ch-power", CHARACTER_INFO[c].power));
      b.onclick = () => hooks.send({ type: "deck_character", character: c });
      grid.append(b);
    }
    overlay.replaceChildren(title, grid, h2("p", "sub", "Same HP (1000) for both. 150 mana, +10 every turn. 15 s to choose a card, 20 s to write it. Out of cards \u2192 a new draft round. Cards: light blue 100 dmg (10\u25C6) \xB7 blue 120 (25\u25C6) \xB7 yellow +60\u25C6 \xB7 green heal 100 (40\u25C6) \xB7 red 250 (70\u25C6)."));
  }
  var coinShown = false;
  function renderDraft(v, me) {
    const d = v.draft;
    const overlay = $2("dkOverlay");
    overlay.hidden = false;
    const mine = d.picker === v.you;
    const head = h2("div", "center");
    if (!coinShown) {
      coinShown = true;
      head.append(h2("div", "coin", "\u{1FA99}"));
    }
    if (v.round > 1) head.append(h2("p", "round-tag", `Round ${v.round} \u2014 new cards! HP, mana and powers stay as they are.`));
    head.append(h2("h2", "", d.coinWinner === v.you ? "You won the coin flip \u2014 you pick first" : "Your opponent won the coin flip"));
    const status = h2("p", "sub");
    const pickedNow = d.pool.filter((c) => c.takenBy === v.you).length;
    const kept = me.handSize - pickedNow;
    countdown("dkDraft", d.deadlineMs, (left) => status.textContent = `${mine ? `Your pick \u2014 ${d.picksLeft} left` : "Opponent is picking"} \xB7 ${Math.ceil(left / 1e3)}s \xB7 picked ${pickedNow}/10${kept > 0 ? ` (+${kept} kept)` : ""}`);
    const board = h2("div", "draft-board");
    for (const c of d.pool) {
      const el = cardEl({ cardId: c.cardId, color: c.color }, { button: true, disabled: !mine || !!c.takenBy });
      if (c.takenBy) el.classList.add("taken");
      el.onclick = () => {
        sfx.flip();
        hooks.send({ type: "deck_pick", cardId: c.cardId });
      };
      board.append(el);
    }
    overlay.replaceChildren(head, status, board, h2("p", "hint", "You only see the colour \u2014 the kanji stays hidden until the card is played."));
  }
  function deckEvent(e) {
    if (!view) return;
    const me = view.you;
    const name = (id) => view.players.find((p) => p.id === id)?.name ?? "Someone";
    switch (e.kind) {
      case "coin":
        coinShown = false;
        break;
      case "redraft":
        toast(`${e.playerId === me ? "You are" : `${name(e.playerId)} is`} out of cards \u2014 Round ${e.round} draft!`, 4e3);
        break;
      case "ability":
        toast(`${e.playerId === me ? "You" : name(e.playerId)} used ${CHARACTER_INFO[e.character].power.split(":")[0]}!`);
        break;
      case "wizard":
        toast(`${e.playerId === me ? "Your" : `${name(e.playerId)}'s`} Arcane reserve: ${e.what === "cards" ? "+2 cards" : "+30 mana"}`);
        break;
      case "stuck":
        toast(`${e.playerId === me ? "You have" : `${name(e.playerId)} has`} no usable cards!`);
        break;
      case "overtime":
        toast("\u23F0 Overtime! Cards are shown one by one \u2014 first to write it uses it.", 5e3);
        break;
      case "resolve":
        animateResolve(e, me);
        break;
    }
  }
  function animateResolve(e, me) {
    const card = $2("dkCast").querySelector(".dkc.big");
    const fb = $2("dkFeedback");
    const who = e.playerId === me ? "You" : view.players.find((p) => p.id === e.playerId)?.name ?? "";
    const spec = CARD_SPECS[e.color];
    if (!e.ok) {
      if (e.overtime && e.playerId !== me) return;
      fb.className = "feedback bad";
      fb.replaceChildren(h2("span", "big", e.playerId === me ? "\u2717 The spell fizzles" : `\u2717 ${who} missed`), h2("span", "sub2", `${e.kanji} \xB7 ${e.reading} \xB7 ${e.meaning}${e.recognized ? ` \u2014 read: ${e.recognized}` : ""}`));
      sfx.rip();
      if (card) ripCard(card);
      return;
    }
    fb.className = "feedback good";
    fb.replaceChildren(h2("span", "big", `\u2713 ${who}: ${spec.label} ${spec.kind === "attack" ? `\u2212${e.amount}` : spec.kind === "heal" ? `+${e.amount} \u2665` : `+${e.amount} \u25C6`}`));
    if (!card) return;
    const ghost = card.cloneNode(true);
    const r = card.getBoundingClientRect();
    Object.assign(ghost.style, { position: "fixed", left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`, zIndex: "30", margin: "0" });
    document.body.append(ghost);
    if (spec.kind === "mana") {
      sfx.mana();
      ghost.classList.add("sparkle");
    } else {
      const towardsMe = spec.kind === "heal" ? e.playerId === me : e.targetId === me;
      const target = $2(towardsMe ? "dkMe" : "dkOpp").getBoundingClientRect();
      ghost.style.setProperty("--fy", `${target.top + target.height / 2 - (r.top + r.height / 2)}px`);
      ghost.classList.add("fly-out");
      if (spec.kind === "heal") sfx.heal();
      else sfx.correct(1);
      setTimeout(() => {
        if (spec.kind === "attack") towardsMe ? sfx.hurt() : sfx.impact();
      }, 500);
    }
    card.style.visibility = "hidden";
    setTimeout(() => ghost.remove(), 900);
  }
  function ripCard(card) {
    const r = card.getBoundingClientRect();
    const wrap = h2("div", "rip");
    Object.assign(wrap.style, { position: "fixed", left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`, zIndex: "30" });
    for (const side of ["l", "r"]) {
      const half = card.cloneNode(true);
      half.classList.add("rip-half", side);
      Object.assign(half.style, { width: "100%", height: "100%", animation: void 0 });
      wrap.append(half);
    }
    document.body.append(wrap);
    card.style.visibility = "hidden";
    setTimeout(() => wrap.remove(), 1e3);
  }
  var clock = (ms) => {
    const s = Math.max(0, Math.ceil(ms / 1e3));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  };
  var resetDeck = () => {
    view = null;
    lastCastId = 0;
    writingCastId = 0;
    coinShown = false;
    stopCountdown("dkMatch");
    stopCountdown("dkTurn");
    stopCountdown("dkDraft");
  };

  // src/client/net.ts
  var GameSocket = class {
    constructor(onMessage2, onState) {
      __publicField(this, "onMessage", onMessage2);
      __publicField(this, "onState", onState);
      __publicField(this, "ws");
      __publicField(this, "queue", []);
      __publicField(this, "retry", 0);
      __publicField(this, "timer");
      __publicField(this, "stopped", true);
      __publicField(this, "token", "");
      const wake = () => {
        if (!this.stopped && (!this.ws || this.ws.readyState > WebSocket.OPEN)) this.connect(true);
      };
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") wake();
      });
      addEventListener("online", wake);
      addEventListener("pageshow", wake);
    }
    start(token) {
      this.token = token;
      this.stopped = false;
      this.connect(false);
    }
    /** Log out / kicked / banned: close and don't come back. */
    stop() {
      this.stopped = true;
      clearTimeout(this.timer);
      this.queue = [];
      const ws = this.ws;
      this.ws = void 0;
      ws?.close();
      this.onState("stopped");
    }
    send(msg) {
      const data = JSON.stringify(msg);
      if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(data);
      else this.queue.push(data);
    }
    connect(isRetry) {
      clearTimeout(this.timer);
      if (this.ws && this.ws.readyState <= WebSocket.OPEN) return;
      this.onState(isRetry ? "reconnecting" : "connecting");
      const proto = location.protocol === "https:" ? "wss" : "ws";
      const ws = new WebSocket(`${proto}://${location.host}`);
      this.ws = ws;
      ws.onopen = () => {
        this.retry = 0;
        ws.send(JSON.stringify({ type: "hello", token: this.token }));
        for (const d of this.queue.splice(0)) ws.send(d);
        this.onState("online");
      };
      ws.onmessage = (e) => this.onMessage(JSON.parse(e.data));
      ws.onclose = () => {
        if (this.ws !== ws || this.stopped) return;
        this.onState("reconnecting");
        const delay = Math.min(8e3, 500 * 2 ** this.retry++);
        this.timer = window.setTimeout(() => this.connect(true), document.visibilityState === "visible" ? delay : 15e3);
      };
    }
  };

  // src/client/pad.ts
  var MIN_DIST = 3;
  var MAX_POINTS = 64;
  function thin(points) {
    if (points.length <= MAX_POINTS) return points;
    const out = [];
    for (let i = 0; i < MAX_POINTS; i++) out.push(points[Math.round(i * (points.length - 1) / (MAX_POINTS - 1))]);
    return out;
  }
  var HandwritingPad = class {
    constructor(canvas, onChange = () => {
    }) {
      __publicField(this, "canvas", canvas);
      __publicField(this, "onChange", onChange);
      __publicField(this, "strokes", []);
      __publicField(this, "current", null);
      __publicField(this, "ctx");
      this.ctx = canvas.getContext("2d");
      canvas.addEventListener("pointerdown", (e) => this.down(e));
      canvas.addEventListener("pointermove", (e) => this.move(e));
      canvas.addEventListener("pointerup", () => this.up());
      canvas.addEventListener("pointercancel", () => this.up());
      canvas.addEventListener("pointerleave", () => this.up());
    }
    get strokeCount() {
      return this.strokes.length;
    }
    /** The finished character, in canvas pixels (the server normalises size and position). */
    take() {
      return this.strokes.map((s) => thin(s.map(([x, y]) => [Math.round(x), Math.round(y)])));
    }
    clear() {
      this.strokes = [];
      this.current = null;
      this.redraw();
      this.onChange();
    }
    undo() {
      this.strokes.pop();
      this.redraw();
      this.onChange();
    }
    point(e) {
      const r = this.canvas.getBoundingClientRect();
      return [(e.clientX - r.left) / r.width * this.canvas.width, (e.clientY - r.top) / r.height * this.canvas.height];
    }
    down(e) {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      e.preventDefault();
      this.canvas.setPointerCapture(e.pointerId);
      this.current = [this.point(e)];
      this.redraw();
    }
    move(e) {
      if (!this.current) return;
      const p = this.point(e);
      const last = this.current[this.current.length - 1];
      if (Math.hypot(p[0] - last[0], p[1] - last[1]) < MIN_DIST) return;
      this.current.push(p);
      this.redraw();
    }
    up() {
      if (!this.current) return;
      if (this.current.length === 1) this.current.push([this.current[0][0] + 1, this.current[0][1] + 1]);
      this.strokes.push(this.current);
      this.current = null;
      this.redraw();
      this.onChange();
    }
    redraw() {
      const { ctx: ctx2, canvas } = this;
      ctx2.clearRect(0, 0, canvas.width, canvas.height);
      ctx2.lineCap = "round";
      ctx2.lineJoin = "round";
      ctx2.lineWidth = canvas.width / 30;
      ctx2.strokeStyle = "#1b1530";
      for (const s of [...this.strokes, ...this.current ? [this.current] : []]) {
        ctx2.beginPath();
        s.forEach(([x, y], i) => i ? ctx2.lineTo(x, y) : ctx2.moveTo(x, y));
        ctx2.stroke();
      }
    }
  };

  // src/client/study.ts
  var $3 = $;
  var onProfile = () => {
  };
  var onProfileChange = (fn) => {
    onProfile = fn;
  };
  function counts(el, c) {
    el.innerHTML = "";
    for (const [cls, n, label] of [["c-new", c.new, "new"], ["c-learn", c.learning, "learning"], ["c-due", c.due, "to review"]]) {
      const s = document.createElement("span");
      s.className = cls;
      const b = document.createElement("b");
      b.textContent = String(n);
      s.append(b, label);
      el.append(s);
    }
  }
  function levelChips(selected) {
    const box = $3("studyLevels");
    box.replaceChildren(...LEVELS.map((lv) => {
      const label = document.createElement("label");
      label.className = "chip" + (selected.includes(lv) ? " on" : "");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = lv;
      input.checked = selected.includes(lv);
      label.append(input, LEVEL_LABEL[lv]);
      return label;
    }));
  }
  async function openStudy() {
    show("study");
    try {
      const s = await api.study();
      render(s);
    } catch (e) {
      toast(e.message);
    }
  }
  function render(s) {
    levelChips(s.studyLevels);
    counts($3("countsAll"), s.decks.all);
    counts($3("countsStruggle"), s.decks.struggling);
    $3("studyCrit").textContent = `\u2726 ${critText(s.profile.crit)} crit \xB7 ${s.profile.learned} learned`;
    const notice = $3("studyNotice");
    notice.hidden = !s.notice;
    notice.textContent = s.notice ? `\u2728 ${s.notice} new spell${s.notice === 1 ? "" : "s"} added to \u201CAll spells\u201D \u2014 happy studying!` : "";
    if (!s.studyLevels.length && !s.decks.all.total) {
      notice.hidden = false;
      notice.textContent = "Tick one or more levels under \u201CAll spells\u201D to get 25 new spells today (and every day).";
    }
    const has = (c) => c.new + c.learning + c.due > 0;
    $3("studyAll").disabled = !has(s.decks.all);
    $3("studyStruggle").disabled = !has(s.decks.struggling);
    onProfile(s.profile);
  }
  $3("studyLevels").addEventListener("change", async () => {
    const levels = [...document.querySelectorAll("#studyLevels input")].filter((i) => i.checked).map((i) => i.value);
    try {
      render(await api.setStudyLevels(levels));
    } catch (e) {
      toast(e.message);
    }
  });
  var queue = [];
  var deck = "all";
  var current = null;
  var flipped = false;
  var busy = false;
  async function startSession(d) {
    deck = d;
    show("review");
    $3("reviewDone").hidden = true;
    try {
      queue = (await api.queue(d)).cards;
    } catch (e) {
      toast(e.message);
      queue = [];
    }
    next();
  }
  function next() {
    current = queue.shift() ?? null;
    flipped = false;
    const done = !current;
    $3("flash").hidden = done;
    $3("showAnswer").hidden = done;
    $3("rateRow").hidden = true;
    $3("reviewDone").hidden = !done;
    $3("reviewLeft").textContent = done ? "" : `${queue.length + 1} left \xB7 ${deck === "all" ? "All spells" : "Struggling"}`;
    if (!current) return;
    $3("fcKanji").textContent = current.kanji;
    $3("fcLevel").textContent = LEVEL_LABEL[current.level] + (current.state === "new" ? " \xB7 new" : "");
    $3("fcReading").textContent = current.reading;
    $3("fcMeaning").textContent = current.meaning;
    $3("fcBack").hidden = true;
    const card = $3("flash");
    card.style.animation = "none";
    void card.offsetWidth;
    card.style.animation = "";
    for (const b of document.querySelectorAll("#rateRow .rate")) {
      b.querySelector(".iv").textContent = current.intervals[b.dataset.rating];
    }
    card.focus();
  }
  function flip() {
    if (!current || flipped) return;
    flipped = true;
    $3("fcBack").hidden = false;
    $3("showAnswer").hidden = true;
    $3("rateRow").hidden = false;
  }
  async function rate(r) {
    if (!current || !flipped || busy) return;
    busy = true;
    const card = current;
    try {
      const res = await api.review(card.vocabId, r);
      $3("whoCrit").textContent = `\u2726 ${critText(res.crit)} crit`;
      if (r === "again") queue.splice(Math.min(3, queue.length), 0, { ...card, state: "learning", intervals: { again: "1m", hard: "6m", good: "10m", easy: "4d" } });
      else if (r === "hard" && card.state !== "review") queue.splice(Math.min(6, queue.length), 0, card);
    } catch (e) {
      toast(e.message);
    }
    busy = false;
    next();
  }
  $3("showAnswer").onclick = flip;
  $3("flash").onclick = flip;
  for (const b of document.querySelectorAll("#rateRow .rate")) b.onclick = () => void rate(b.dataset.rating);
  addEventListener("keydown", (e) => {
    if ($3("review").hidden || e.target instanceof HTMLInputElement) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      flipped ? void rate("good") : flip();
    }
    const n = ["1", "2", "3", "4"].indexOf(e.key);
    if (n >= 0 && flipped) void rate(["again", "hard", "good", "easy"][n]);
  });
  $3("studyAll").onclick = () => void startSession("all");
  $3("studyStruggle").onclick = () => void startSession("struggling");
  $3("reviewBack").onclick = () => void openStudy();
  $3("reviewDoneBack").onclick = () => void openStudy();
  function openCustomize(profile2) {
    const lvl = levelOf(profile2.xp);
    $3("bgGrid").replaceChildren(...BACKGROUNDS.map((b) => {
      const locked = lvl < b.level;
      const tile = document.createElement("button");
      tile.className = "bg-tile" + (profile2.background === b.id ? " on" : "") + (locked ? " locked" : "");
      tile.innerHTML = backgroundThumb(b.id);
      const name = document.createElement("div");
      name.className = "bg-name";
      name.textContent = `${b.name}${profile2.background === b.id ? " \u2713" : ""}`;
      tile.append(name);
      if (locked) {
        const lock = document.createElement("div");
        lock.className = "lock";
        lock.textContent = `\u{1F512} Level ${b.level}`;
        tile.append(lock);
      }
      tile.onclick = async () => {
        if (locked) return toast(`Reach level ${b.level} to unlock ${b.name}`);
        try {
          const { profile: p } = await api.setBackground(b.id);
          onProfile(p);
          openCustomize(p);
        } catch (e) {
          toast(e.message);
        }
      };
      return tile;
    }));
    show("customize");
  }

  // src/client/main.ts
  var user = null;
  var profile = null;
  var you = "";
  var code = "";
  var mode = "reading";
  var players = [];
  var minPlayers = 2;
  var challengeId = 0;
  var inRoom = false;
  var writing = false;
  var charCount = 0;
  var written = [];
  var store = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, v) {
      try {
        localStorage.setItem(key, v);
      } catch {
      }
    }
  };
  var savedLevels = () => {
    try {
      const raw = JSON.parse(store.get("kb:levels") ?? "[]");
      const lv = LEVELS.filter((l) => Array.isArray(raw) && raw.includes(l));
      return lv.length ? lv : ["N3", "N2"];
    } catch {
      return ["N3", "N2"];
    }
  };
  var socket = new GameSocket(onMessage, (s) => {
    setNetStatus(s === "reconnecting" ? "Reconnecting\u2026" : null);
  });
  var actorOf = (id) => id === "boss" ? "boss" : id === you ? "me" : mode === "boss" ? "ally" : "opp";
  var nameOf = (id) => players.find((p) => p.id === id)?.name ?? "Someone";
  var GAME_SCREENS = /* @__PURE__ */ new Set(["prep", "battle", "deck", "results"]);
  onScreen((s) => setScene(GAME_SCREENS.has(s) ? "game" : "menu"));
  function applyProfile(p) {
    profile = p;
    setProfile(p);
    paintBackground($("bg"), p.background);
  }
  onProfileChange(applyProfile);
  async function refreshProfile() {
    try {
      applyProfile((await api.me()).profile);
    } catch {
    }
  }
  async function boot() {
    paintBackground($("bg"), "forest");
    paintScenes();
    setAudioButtons(isRadioOn(), isSfxOn());
    if (!getToken()) return showAuth();
    try {
      const { user: u, profile: p } = await api.me();
      applyProfile(p);
      signedIn(u);
    } catch (e) {
      if (e instanceof ApiError && (e.status === 401 || e.status === 403)) {
        setToken("");
        showAuth(e.status === 403 ? e.message : "");
      } else {
        show("auth");
        $("authError").textContent = "Server unreachable \u2014 try again in a moment.";
      }
    }
  }
  function signedIn(u) {
    user = u;
    setUser(u);
    socket.start(getToken());
    if (!inRoom) show("menu");
    if (!profile) void refreshProfile();
  }
  function showAuth(message = "") {
    user = null;
    profile = null;
    inRoom = false;
    setUser(null);
    setAuthTab(authTab);
    show("auth");
    $("authError").textContent = message;
  }
  function logout(message = "") {
    setToken("");
    socket.stop();
    showAuth(message);
  }
  function backToMenu() {
    inRoom = false;
    you = "";
    code = "";
    players = [];
    stopWriting();
    resetDeck();
    stopCountdown();
    show("menu");
  }
  function onMessage(msg) {
    switch (msg.type) {
      case "welcome":
        user = msg.user;
        setUser(msg.user);
        break;
      case "auth_error":
        logout(msg.message);
        break;
      case "kicked":
        socket.stop();
        if (/banned/i.test(msg.message)) return logout(msg.message);
        backToMenu();
        setError(`${msg.message} Refresh this page to play here.`);
        break;
      case "joined":
        you = msg.you;
        code = msg.code;
        mode = msg.mode;
        inRoom = true;
        setError("");
        break;
      case "left":
        backToMenu();
        break;
      case "notice":
        toast(msg.message);
        break;
      case "lobby":
        players = msg.players;
        mode = msg.mode;
        minPlayers = msg.minPlayers;
        stopWriting();
        resetDeck();
        showLobby(code, msg.mode, msg.players, you, msg.hostId, msg.maxPlayers, msg.minPlayers);
        break;
      case "prep":
        players = msg.players;
        showPrep(msg.pool, msg.durationMs, mode);
        setReady(msg.readyIds.length, players.length, msg.readyIds.includes(you));
        break;
      case "prep_ready":
        setReady(msg.readyIds.length, players.length, msg.readyIds.includes(you));
        break;
      case "battle_start":
        players = msg.players;
        mode = msg.mode;
        showBattle(msg.mode, players, msg.boss, you, msg.countdownMs, msg.durationMs, (n) => n > 0 ? sfx.tick() : sfx.go());
        break;
      case "challenge":
        challengeId = msg.id;
        showChallenge({ kanji: msg.kanji, answer: msg.answer, timeLimitMs: msg.timeLimitMs, meaning: msg.meaning, reading: msg.reading, charCount: msg.charCount, flashMs: msg.flashMs });
        if (msg.answer === "writing") beginWriting(msg.id, msg.kanji);
        break;
      case "answer_result":
        if (msg.challengeId !== challengeId) break;
        if (msg.retry) {
          setFeedback(msg);
          sfx.wrong();
          const input = $("answer");
          input.disabled = false;
          input.value = "";
          input.focus();
          break;
        }
        lockInput();
        if (mode === "writing") setCharSlots(charCount, written.map(() => ""), false);
        setFeedback(msg);
        if (msg.correct) sfx.correct(msg.combo);
        else sfx.wrong();
        break;
      case "battle_update":
        players = msg.players;
        onBattleEvent(msg);
        break;
      case "deck_state":
        renderDeck(msg.view);
        break;
      case "deck_event":
        deckEvent(msg.event);
        break;
      case "game_over": {
        players = msg.players;
        lockInput();
        stopWriting();
        if (msg.mode !== "deck") {
          setTimeout(() => {
            renderFighters(players, you, msg.boss);
            if (msg.mode === "boss" && msg.teamWon) knockOut("boss");
            if (msg.reason !== "forfeit") {
              for (const p of players) if (p.hp <= 0) knockOut(actorOf(p.id));
            }
          }, 450);
        }
        setTimeout(() => {
          const won = msg.mode === "boss" ? msg.teamWon : msg.winnerId === you;
          if (won) sfx.win();
          else if (msg.mode === "boss" || msg.winnerId) sfx.lose();
          resetDeck();
          showResults(msg.mode, msg.players, you, msg.winnerId, msg.teamWon, msg.reason, msg.stats);
        }, msg.reason === "forfeit" ? 400 : 2e3);
        break;
      }
      case "progress":
        setTimeout(() => {
          showXp(msg.gained, msg.level, msg.levelUp);
          if (msg.levelUp) toast(`\u2B06 Level ${msg.level}! Check Customize for new backgrounds.`, 5e3);
        }, 2100);
        void refreshProfile();
        break;
      case "rematch_status":
        setRematchStatus(msg.votes, you, players.length, minPlayers);
        break;
      case "error":
        if (inRoom) {
          $("lobbyStatus").textContent = msg.message;
          toast(msg.message);
        } else {
          setError(msg.message);
          show("menu");
        }
        break;
    }
  }
  function onBattleEvent(msg) {
    const e = msg.event;
    const render2 = () => renderFighters(players, you, msg.boss);
    switch (e.kind) {
      case "hit": {
        const caster = actorOf(e.playerId);
        const target = actorOf(e.targetId);
        const friendly = caster !== "opp";
        void castSpell(caster, target, e.kanji, e.damage, friendly).then(() => {
          render2();
          if (target === "me") sfx.hurt();
          else if (caster === "me") sfx.impact();
        });
        if (e.playerId !== you) logLine(`${nameOf(e.playerId)} cast for ${e.damage}${e.crit ? " (CRIT!)" : ""}${e.combo >= 2 ? ` (\xD7${e.combo})` : ""}:`, e.kanji);
        break;
      }
      case "miss":
        fizzle(actorOf(e.playerId));
        render2();
        if (e.playerId !== you) logLine(`${nameOf(e.playerId)} fumbled:`, e.kanji);
        break;
      case "claw":
        clawHit(actorOf(e.playerId), e.damage);
        if (e.playerId === you) sfx.claw();
        setTimeout(render2, 200);
        if (e.playerId !== you) logLine(`The dragon claws ${nameOf(e.playerId)} for ${e.damage}`);
        break;
      case "breath_warning":
        breathWarning(e.inMs);
        sfx.inhale();
        break;
      case "breath": {
        const victims = players.filter((p) => p.hp > 0 || p.hp + e.damage > 0).map((p) => actorOf(p.id));
        breathFire(e.damage, victims);
        sfx.fire();
        setTimeout(render2, 450);
        logLine(`\u{1F525} Fire breath! Everyone takes ${e.damage}`);
        break;
      }
    }
  }
  var pad = new HandwritingPad($("pad"));
  function beginWriting(id, kanji) {
    challengeId = id;
    writing = true;
    charCount = [...kanji].length;
    written = [];
    pad.clear();
    if (mode === "deck") mountWriteArea("dkWrite");
    setCharSlots(charCount, [], true);
    const ime = $("imeInput");
    ime.value = "";
    ime.disabled = false;
  }
  function stopWriting() {
    writing = false;
    lockInput();
    if (mode === "deck") hideWriteArea();
  }
  function submitDrawing() {
    socket.send({ type: "write", challengeId, chars: written });
    lockInput();
    writing = false;
  }
  $("padUndo").onclick = () => pad.undo();
  $("padClear").onclick = () => pad.clear();
  $("padSkip").onclick = () => skip();
  $("padNext").onclick = () => {
    if (pad.strokeCount === 0) return;
    written.push(pad.take());
    pad.clear();
    if (written.length >= charCount) submitDrawing();
    else setCharSlots(charCount, written.map(() => ""), true);
  };
  $("imeInput").addEventListener("keydown", (e) => {
    const input = e.currentTarget;
    if (e.key !== "Enter" || e.isComposing || e.keyCode === 229 || input.disabled) return;
    e.stopPropagation();
    const text = input.value.trim();
    if (!text) return;
    socket.send({ type: "answer", challengeId, text });
    lockInput();
    writing = false;
  });
  addEventListener("keydown", (e) => {
    if (!writing || e.target === $("imeInput") || $("padNext").disabled) return;
    if (e.key === "Enter") $("padNext").click();
    else if (e.key === "Escape") skip();
    else if ((e.ctrlKey || e.metaKey) && e.key === "z") {
      e.preventDefault();
      pad.undo();
    }
  });
  var authTab = "login";
  $("tabLogin").onclick = () => {
    authTab = "login";
    setAuthTab("login");
  };
  $("tabRegister").onclick = () => {
    authTab = "register";
    setAuthTab("register");
  };
  $("authForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = $("authUser").value.trim();
    const password = $("authPass").value;
    const btn = $("authSubmit");
    btn.disabled = true;
    $("authError").textContent = "";
    try {
      const res = authTab === "login" ? await api.login(username, password) : await api.register(username, password);
      setToken(res.token);
      $("authPass").value = "";
      signedIn(res.user);
      void refreshProfile();
    } catch (err) {
      $("authError").textContent = err instanceof Error ? err.message : "Something went wrong";
    } finally {
      btn.disabled = false;
    }
  });
  $("logout").onclick = () => logout();
  $("create").onclick = () => {
    setError("");
    show("modes");
  };
  for (const card of document.querySelectorAll(".mode-card")) {
    card.onclick = () => socket.send({ type: "create", mode: card.dataset.mode, levels: savedLevels() });
  }
  $("modesBack").onclick = () => show("menu");
  var join = () => {
    const c = $("joinCode").value.trim();
    if (c.length !== 4) return setError("Room codes have 4 letters");
    socket.send({ type: "join", code: c, levels: savedLevels() });
  };
  $("join").onclick = join;
  $("joinCode").addEventListener("keydown", (e) => {
    if (e.key === "Enter") join();
  });
  $("howBtn").onclick = () => $("howDialog").showModal();
  $("studyBtn").onclick = () => void openStudy();
  $("studyBack").onclick = () => show("menu");
  $("customizeBtn").onclick = async () => {
    await refreshProfile();
    if (profile) openCustomize(profile);
  };
  $("customizeBack").onclick = () => show("menu");
  async function openAdmin() {
    try {
      const { users } = await api.users();
      showAdmin(users, user, async (u) => {
        try {
          await api.setBanned(u.id, !u.banned);
          await openAdmin();
        } catch (e) {
          $("adminInfo").textContent = e.message;
        }
      });
    } catch (e) {
      setError(e.message);
    }
  }
  $("adminBtn").onclick = () => void openAdmin();
  $("adminRefresh").onclick = () => void openAdmin();
  $("adminBack").onclick = () => show("menu");
  $("levelChips").addEventListener("change", (e) => {
    const levels = selectedLevels();
    if (levels.length === 0) {
      e.target.checked = true;
      return;
    }
    store.set("kb:levels", JSON.stringify(levels));
    socket.send({ type: "levels", levels });
  });
  $("leaveLobby").onclick = () => socket.send({ type: "leave" });
  $("start").onclick = () => socket.send({ type: "start" });
  $("readyBtn").onclick = () => socket.send({ type: "lobby_ready", ready: !$("readyBtn").dataset.ready });
  $("copyCode").onclick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      $("copyCode").textContent = "Copied!";
    } catch {
      $("copyCode").textContent = code;
    }
    setTimeout(() => $("copyCode").textContent = "Copy", 1500);
  };
  $("ready").onclick = () => socket.send({ type: "ready" });
  $("prepBack").onclick = () => socket.send({ type: "back_to_lobby" });
  function skip() {
    socket.send({ type: "skip", challengeId });
    lockInput();
    writing = false;
  }
  $("skip").onclick = () => {
    if (!$("answer").disabled) skip();
  };
  $("answer").addEventListener("keydown", (e) => {
    const input = e.currentTarget;
    if (input.disabled) return;
    if (e.key === "Escape" && !e.isComposing) {
      e.preventDefault();
      return skip();
    }
    if (e.key !== "Enter" || e.isComposing || e.keyCode === 229) return;
    const text = input.value.trim();
    if (!text) return;
    if (currentAnswerMode() === "romaji" && !/^[a-z' -]+$/i.test(text.normalize("NFKC"))) {
      setInputHint("Use romaji for hiragana spells (switch your IME off)", true);
      return;
    }
    socket.send({ type: "answer", challengeId, text: input.value });
    lockInput();
  });
  function armForfeit(btnId) {
    let armed = 0;
    $(btnId).onclick = () => {
      if (Date.now() - armed < 3e3) {
        socket.send({ type: "forfeit" });
        return;
      }
      armed = Date.now();
      $(btnId).textContent = "Tap again to forfeit";
      setTimeout(() => $(btnId).textContent = "\u{1F3F3} Forfeit", 3e3);
    };
  }
  armForfeit("forfeit");
  armForfeit("dkForfeit");
  initDeck({
    send: (m) => socket.send(m),
    beginWriting: (castId, kanji) => {
      mode = "deck";
      beginWriting(castId, kanji);
    },
    stopWriting: () => stopWriting()
  });
  $("rematch").onclick = () => socket.send({ type: "rematch" });
  $("leave").onclick = () => socket.send({ type: "leave" });
  $("radioBtn").onclick = () => {
    setRadio(!isRadioOn());
    setAudioButtons(isRadioOn(), isSfxOn());
  };
  $("sfxBtn").onclick = () => {
    setSfx(!isSfxOn());
    setAudioButtons(isRadioOn(), isSfxOn());
  };
  var firstGesture = () => unlock();
  addEventListener("pointerdown", firstGesture, { once: true });
  addEventListener("keydown", firstGesture, { once: true });
  void boot();
})();
