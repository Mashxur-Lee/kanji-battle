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
    boss: "Boss Elimination"
  };

  // src/client/api.ts
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
  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext ?? window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    const comp = ctx.createDynamicsCompressor();
    comp.connect(ctx.destination);
    sfxBus = ctx.createGain();
    sfxBus.gain.value = 0.5;
    sfxBus.connect(comp);
    musicBus = ctx.createGain();
    musicBus.gain.value = 0;
    musicBus.connect(comp);
    return ctx;
  }
  function unlock() {
    const c = ensure();
    if (!c) return;
    if (c.state === "suspended") void c.resume();
    if (prefs.radio) radio.start();
  }
  var midi = (n) => 440 * 2 ** ((n - 69) / 12);
  function tone(freq, at, dur, opts = {}) {
    const c = ctx;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = opts.type ?? "sine";
    o.frequency.setValueAtTime(freq, at);
    if (opts.to) o.frequency.exponentialRampToValueAtTime(opts.to, at + dur);
    const peak = opts.gain ?? 0.3;
    g.gain.setValueAtTime(1e-4, at);
    g.gain.exponentialRampToValueAtTime(peak, at + (opts.attack ?? 8e-3));
    g.gain.exponentialRampToValueAtTime(1e-4, at + dur);
    o.connect(g).connect(opts.bus ?? sfxBus);
    o.start(at);
    o.stop(at + dur + 0.05);
  }
  function noise(at, dur, gain, cutoff) {
    const c = ctx;
    const buf = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src = c.createBufferSource();
    src.buffer = buf;
    const f = c.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.value = cutoff;
    const g = c.createGain();
    g.gain.value = gain;
    src.connect(f).connect(g).connect(sfxBus);
    src.start(at);
  }
  function boom(at, freq, dur, gain) {
    tone(freq * 2.2, at, dur, { gain, to: freq * 0.55, attack: 4e-3 });
    tone(freq, at, dur * 1.2, { gain: gain * 0.7, to: freq * 0.6, attack: 4e-3 });
    noise(at, 0.035, gain * 0.5, 3500);
  }
  var sfxOk = () => prefs.sfx && ensure() !== null && ctx.state === "running";
  var sfx = {
    /**
     * Spell cast. Escalates with the combo like a multi-kill: bum → buum → buuum → buuuum, getting
     * deeper and longer, then from ×5 on a punchy "bam-bam  bam-bam" that stays.
     */
    correct(combo = 1) {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      if (combo >= 5) {
        [0, 0.12, 0.36, 0.48].forEach((dt) => boom(t + dt, 70, 0.22, 0.75));
        tone(midi(88), t, 0.25, { type: "triangle", gain: 0.06 });
        return;
      }
      const step = Math.max(1, combo) - 1;
      boom(t, 95 - step * 13, 0.28 + step * 0.22, 0.55 + step * 0.1);
      tone(midi(84 - step * 2), t, 0.18, { type: "triangle", gain: 0.05 });
    },
    /** Miss / skip / timeout — soft descending buzz. */
    wrong() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      tone(220, t, 0.28, { type: "sawtooth", gain: 0.12, to: 110 });
      tone(233, t + 0.02, 0.28, { type: "square", gain: 0.05, to: 116 });
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
      if (!sfxOk()) return;
      noise(ctx.currentTime, 0.12, 0.15, 2500);
    },
    /** Dragon draws breath before the fire. */
    inhale() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      tone(55, t, 2.6, { type: "sawtooth", gain: 0.08, to: 110, attack: 1.5 });
    },
    /** Fire breath roar. */
    fire() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      noise(t, 1.2, 0.5, 1400);
      tone(70, t, 1.1, { type: "sawtooth", gain: 0.12, to: 40 });
    },
    /** Claw swipe on a mistake. */
    claw() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      noise(t, 0.18, 0.4, 6e3);
      tone(160, t + 0.05, 0.2, { gain: 0.3, to: 60 });
    },
    tick() {
      if (sfxOk()) tone(880, ctx.currentTime, 0.08, { gain: 0.12 });
    },
    go() {
      if (sfxOk()) tone(1320, ctx.currentTime, 0.25, { type: "triangle", gain: 0.18 });
    },
    win() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      [67, 71, 74, 79].forEach((n, i) => tone(midi(n), t + i * 0.12, 0.6, { type: "triangle", gain: 0.2 }));
    },
    lose() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      [67, 63, 60].forEach((n, i) => tone(midi(n), t + i * 0.22, 0.7, { type: "triangle", gain: 0.16 }));
    }
  };
  var radio = (() => {
    const STEP = 60 / 72 / 2;
    const SCALE = [62, 63, 67, 69, 70];
    const CHORDS = [[50, 57, 62], [55, 58, 62], [51, 55, 58], [50, 55, 57]];
    let timer;
    let nextTime = 0;
    let step = 0;
    let degree = 5;
    let delayIn = null;
    function buildDelay() {
      const c = ctx;
      const input = c.createGain();
      const d = c.createDelay(2);
      d.delayTime.value = STEP * 3;
      const fb = c.createGain();
      fb.gain.value = 0.35;
      const lp = c.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 2200;
      input.connect(musicBus);
      input.connect(d);
      d.connect(lp).connect(fb).connect(d);
      lp.connect(musicBus);
      return input;
    }
    function pad2(notes, at, dur) {
      const c = ctx;
      const lp = c.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 700;
      const g = c.createGain();
      g.gain.setValueAtTime(1e-4, at);
      g.gain.exponentialRampToValueAtTime(0.05, at + 1.2);
      g.gain.setValueAtTime(0.05, at + dur - 1);
      g.gain.exponentialRampToValueAtTime(1e-4, at + dur + 0.6);
      lp.connect(g).connect(musicBus);
      for (const n of notes) {
        for (const detune of [-6, 6]) {
          const o = c.createOscillator();
          o.type = "sawtooth";
          o.frequency.value = midi(n);
          o.detune.value = detune;
          o.connect(lp);
          o.start(at);
          o.stop(at + dur + 0.7);
        }
      }
    }
    function schedule() {
      const c = ctx;
      while (nextTime < c.currentTime + 0.4) {
        const inBar = step % 8;
        const bar = Math.floor(step / 8);
        if (inBar === 0) {
          const chord = CHORDS[bar % CHORDS.length];
          pad2(chord, nextTime, STEP * 8);
          tone(midi(chord[0] - 12), nextTime, STEP * 6, { gain: 0.09, bus: musicBus, attack: 0.05 });
          if (bar % 2 === 0) tone(90, nextTime, 0.5, { gain: 0.12, to: 45, bus: musicBus });
        }
        if (Math.random() < (inBar % 2 === 0 ? 0.55 : 0.25)) {
          degree = Math.max(0, Math.min(9, degree + [-2, -1, -1, 1, 1, 2][Math.floor(Math.random() * 6)]));
          const note = SCALE[degree % 5] + 12 * Math.floor(degree / 5);
          tone(midi(note), nextTime, 1.4, { type: "triangle", gain: 0.07, bus: delayIn, attack: 4e-3 });
          tone(midi(note + 12), nextTime, 0.4, { gain: 0.02, bus: delayIn, attack: 4e-3 });
        }
        nextTime += STEP;
        step++;
      }
    }
    return {
      start() {
        if (!ctx || timer !== void 0) return;
        delayIn ?? (delayIn = buildDelay());
        nextTime = ctx.currentTime + 0.1;
        musicBus.gain.cancelScheduledValues(ctx.currentTime);
        musicBus.gain.setTargetAtTime(0.55, ctx.currentTime, 0.8);
        schedule();
        timer = window.setInterval(schedule, 120);
      },
      stop() {
        if (!ctx || timer === void 0) return;
        clearInterval(timer);
        timer = void 0;
        musicBus.gain.setTargetAtTime(0, ctx.currentTime, 0.2);
      }
    };
  })();
  var isRadioOn = () => prefs.radio;
  var isSfxOn = () => prefs.sfx;
  function setRadio(on) {
    prefs.radio = on;
    savePrefs();
    if (on) {
      ensure();
      if (ctx?.state === "suspended") void ctx.resume();
      radio.start();
    } else radio.stop();
  }
  function setSfx(on) {
    prefs.sfx = on;
    savePrefs();
  }

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
    me: { ...COMMON, H: "#6d4bd8", h: "#432a9c", R: "#7a55e6", r: "#4b2fa6", O: "#6ee7ff" },
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
  var SCREENS = ["auth", "menu", "admin", "modes", "lobby", "prep", "battle", "results"];
  var show = (screen) => {
    SCREENS.forEach((s) => $(s).hidden = s !== screen);
    scrollTo(0, 0);
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
    set("radioBtn", radio2, "\u266A", "Radio");
    set("sfxBtn", sfx2, sfx2 ? "\u{1F50A}" : "\u{1F507}", "Sounds");
  }
  function paintScenes() {
    for (const scene of document.querySelectorAll(".duel-scene")) {
      scene.innerHTML = "";
      for (const side of ["me", "opp"]) {
        const w = h("div", `wizard ${side}`);
        const s = h("div", "sprite");
        s.innerHTML = wizardSvg(side);
        w.append(s, h("div", "ground"));
        scene.append(w);
      }
      scene.append(h("div", "orb"), h("div", "orb b"));
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
        li.append(h("span", "who", p.id === you2 ? `${p.name} (you)` : p.name));
        if (p.id === hostId) li.append(h("span", "tag", "host"));
        if (!p.online) li.append(h("span", "tag off", "away \u2014 seat kept"));
        li.append(append(h("div", "meta"), h("span", "", levelsText(p.levels)), h("span", "hpv", `\u2764 ${p.maxHp} HP`)));
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
    $("levelsHint").textContent = mode2 === "boss" ? "Each player picks their own. The dragon gets tougher when the party picks harder levels." : mode2 === "writing" ? "Each player picks their own. You will write these words by hand. Harder levels hit harder \u2014 so your opponent gets more HP." : "Each player picks their own. \u304B\u306A = hiragana, answered in romaji. Harder levels hit harder \u2014 so your opponent gets more HP.";
    const isHost = you2 === hostId;
    const canStart = players2.length >= minPlayers2;
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
    const name = append(h("div", "name"), h("span", "n", label), h("span", "combo", p.combo >= 2 ? `\xD7${p.combo} combo` : ""));
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
    for (const [id, side] of [["wizMe", "me"], ["wizOpp", "opp"], ["wizAlly", "ally"]]) {
      const w = $(id);
      w.className = `wizard ${side}`;
      w.querySelector(".sprite").innerHTML = wizardSvg(side);
    }
    $("dragon").className = "dragon";
    $("dragon").querySelector(".sprite").innerHTML = dragonSvg();
    $("fire").hidden = true;
    $("breathWarn").hidden = true;
    $("typeArea").hidden = mode2 === "writing";
    $("writeArea").hidden = mode2 !== "writing";
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
      { duration: reduced ? 1 : 420, easing: "ease-in" }
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
      mp.replaceChildren(h("span", "", c.meaning ?? ""), h("small", "", `write ${c.charCount} character${c.charCount === 1 ? "" : "s"}`));
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
  }
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
      el.replaceChildren(h("span", "big", `\u2713 CAST! ${f.damage} damage`), word("mean"), h("span", "sub2", `${secs(f.responseMs ?? 0)}${combo}`));
    } else {
      const title = f.skipped ? "\u21B7 Skipped" : f.timedOut ? "\u2717 Too slow!" : "\u2717 MISS!";
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
    $("rematch").disabled = false;
    $("rematch").textContent = "Rematch";
    $("rematchStatus").textContent = "";
    show("results");
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

  // src/client/main.ts
  var user = null;
  var you = "";
  var code = "";
  var mode = "reading";
  var players = [];
  var minPlayers = 2;
  var challengeId = 0;
  var inRoom = false;
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
  async function boot() {
    paintScenes();
    setAudioButtons(isRadioOn(), isSfxOn());
    if (!getToken()) return showAuth();
    try {
      const { user: u } = await api.me();
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
  }
  function showAuth(message = "") {
    user = null;
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
      case "lobby":
        players = msg.players;
        mode = msg.mode;
        minPlayers = msg.minPlayers;
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
        showChallenge({ kanji: msg.kanji, answer: msg.answer, timeLimitMs: msg.timeLimitMs, meaning: msg.meaning, charCount: msg.charCount, flashMs: msg.flashMs });
        if (msg.answer === "writing") {
          charCount = msg.charCount ?? 1;
          written = [];
          pad.clear();
          setCharSlots(charCount, [], true);
        }
        break;
      case "answer_result":
        if (msg.challengeId !== challengeId) break;
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
      case "game_over": {
        players = msg.players;
        lockInput();
        setTimeout(() => {
          renderFighters(players, you, msg.boss);
          if (msg.mode === "boss" && msg.teamWon) knockOut("boss");
          if (msg.reason !== "forfeit") {
            for (const p of players) if (p.hp <= 0) knockOut(actorOf(p.id));
          }
        }, 450);
        setTimeout(() => {
          const won = msg.mode === "boss" ? msg.teamWon : msg.winnerId === you;
          if (won) sfx.win();
          else if (msg.mode === "boss" || msg.winnerId) sfx.lose();
          showResults(msg.mode, msg.players, you, msg.winnerId, msg.teamWon, msg.reason, msg.stats);
        }, msg.reason === "forfeit" ? 300 : 2e3);
        break;
      }
      case "rematch_status":
        setRematchStatus(msg.votes, you, players.length, minPlayers);
        break;
      case "error":
        if (inRoom) $("lobbyStatus").textContent = msg.message;
        else {
          setError(msg.message);
          show("menu");
        }
        break;
    }
  }
  function onBattleEvent(msg) {
    const e = msg.event;
    const render = () => renderFighters(players, you, msg.boss);
    switch (e.kind) {
      case "hit": {
        const caster = actorOf(e.playerId);
        const target = actorOf(e.targetId);
        const friendly = caster !== "opp";
        void castSpell(caster, target, e.kanji, e.damage, friendly).then(() => {
          render();
          if (target === "me") sfx.hurt();
          else if (caster === "me") sfx.impact();
        });
        if (e.playerId !== you) logLine(`${nameOf(e.playerId)} cast for ${e.damage}${e.combo >= 2 ? ` (\xD7${e.combo})` : ""}:`, e.kanji);
        break;
      }
      case "miss":
        fizzle(actorOf(e.playerId));
        render();
        if (e.playerId !== you) logLine(`${nameOf(e.playerId)} fumbled:`, e.kanji);
        break;
      case "claw":
        clawHit(actorOf(e.playerId), e.damage);
        if (e.playerId === you) sfx.claw();
        setTimeout(render, 200);
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
        setTimeout(render, 450);
        logLine(`\u{1F525} Fire breath! Everyone takes ${e.damage}`);
        break;
      }
    }
  }
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
  var skip = () => {
    socket.send({ type: "skip", challengeId });
    lockInput();
  };
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
  var pad = new HandwritingPad($("pad"));
  $("padUndo").onclick = () => pad.undo();
  $("padClear").onclick = () => pad.clear();
  $("padSkip").onclick = () => skip();
  $("padNext").onclick = () => {
    if (pad.strokeCount === 0) return;
    written.push(pad.take());
    pad.clear();
    if (written.length >= charCount) {
      socket.send({ type: "write", challengeId, chars: written });
      lockInput();
    } else {
      setCharSlots(charCount, written.map(() => ""), true);
    }
  };
  addEventListener("keydown", (e) => {
    if (mode !== "writing" || $("battle").hidden || $("padNext").disabled) return;
    if (e.key === "Enter") $("padNext").click();
    else if (e.key === "Escape") skip();
    else if ((e.ctrlKey || e.metaKey) && e.key === "z") {
      e.preventDefault();
      pad.undo();
    }
  });
  var forfeitArmed = 0;
  $("forfeit").onclick = () => {
    if (Date.now() - forfeitArmed < 3e3) {
      socket.send({ type: "leave" });
      return;
    }
    forfeitArmed = Date.now();
    $("forfeit").textContent = "Tap again to forfeit";
    setTimeout(() => $("forfeit").textContent = "\u{1F3F3} Forfeit", 3e3);
  };
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
