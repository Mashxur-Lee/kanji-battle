"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/shared/protocol.ts
  var LEVELS = ["KANA", "N5", "N4", "N3", "N2", "N1"];
  var LEVEL_LABEL = { KANA: "\u304B\u306A", N5: "N5", N4: "N4", N3: "N3", N2: "N2", N1: "N1" };

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
  var sfxOk = () => prefs.sfx && ensure() !== null && ctx.state === "running";
  var sfx = {
    /** Spell cast — bright rising chime. */
    correct(combo = 1) {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      const lift = Math.min(combo - 1, 6);
      [76, 83, 88].forEach((n, i) => tone(midi(n + lift), t + i * 0.06, 0.45, { type: "triangle", gain: 0.22 }));
      tone(midi(100 + lift), t + 0.12, 0.3, { gain: 0.06 });
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
    function pad(notes, at, dur) {
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
          pad(chord, nextTime, STEP * 8);
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
    constructor(onMessage2, onClose) {
      __publicField(this, "ws");
      const proto = location.protocol === "https:" ? "wss" : "ws";
      this.ws = new WebSocket(`${proto}://${location.host}`);
      this.ws.onmessage = (e) => onMessage2(JSON.parse(e.data));
      this.ws.onclose = onClose;
    }
    send(msg) {
      const data = JSON.stringify(msg);
      if (this.ws.readyState === WebSocket.OPEN) this.ws.send(data);
      else this.ws.addEventListener("open", () => this.ws.send(data), { once: true });
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
  function wizardSvg(side) {
    const pal = PALETTES[side];
    const rects = [];
    WIZARD_MAP.forEach((row, y) => {
      for (let x = 0; x < row.length; ) {
        const ch = row[x];
        let w = 1;
        while (row[x + w] === ch) w++;
        if (ch !== ".") rects.push(`<rect x="${x}" y="${y}" width="${w}" height="1" fill="${pal[ch]}"${ch === "O" ? ' class="orb"' : ""}/>`);
        x += w;
      }
    });
    return `<svg viewBox="0 0 16 20" shape-rendering="crispEdges" aria-hidden="true">${rects.join("")}</svg>`;
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
  var SCREENS = ["menu", "lobby", "prep", "battle", "results"];
  var show = (screen) => SCREENS.forEach((s) => $(s).hidden = s !== screen);
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
  function countdown(slot, durationMs, onFrame) {
    stopCountdown(slot);
    const end = performance.now() + durationMs;
    const tick = () => {
      const left = Math.max(0, end - performance.now());
      onFrame(left, durationMs > 0 ? left / durationMs : 0);
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
  function showLobby(code2, players2, you2, hostId, maxPlayers) {
    $("code").textContent = code2;
    $("lobbyPlayers").replaceChildren(
      ...players2.map((p) => {
        const li = h("li");
        li.append(h("span", "who", p.id === you2 ? `${p.name} (you)` : p.name));
        if (p.id === hostId) li.append(h("span", "tag", "host"));
        li.append(append(h("div", "meta"), h("span", "", levelsText(p.levels)), h("span", "hpv", `\u2764 ${p.maxHp} HP`)));
        return li;
      }),
      ...Array.from({ length: Math.max(0, maxPlayers - players2.length) }, () => h("li", "empty", "Waiting for opponent\u2026"))
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
    const isHost = you2 === hostId;
    const full = players2.length >= maxPlayers;
    $("start").hidden = !isHost;
    $("start").disabled = !full;
    $("lobbyStatus").textContent = !full ? "Share the code \u2014 the battle can start once your opponent joins." : isHost ? "" : "Waiting for the host to start\u2026";
    show("lobby");
  }
  var selectedLevels = () => [...document.querySelectorAll("#levelChips input")].filter((i) => i.checked).map((i) => i.value);
  function showPrep(pool, durationMs) {
    $("studyGrid").replaceChildren(
      ...pool.map((w) => append(h("div", "card"), h("div", "lv", LEVEL_LABEL[w.level]), h("div", "k", w.kanji, { lang: "ja" }), h("div", "r", w.reading, { lang: "ja" }), h("div", "m", w.meaning)))
    );
    $("ready").disabled = false;
    $("readyStatus").textContent = "";
    show("prep");
    countdown("prep", durationMs, (left, frac) => {
      $("prepClock").textContent = clockText(left);
      $("prepBar").style.width = `${frac * 100}%`;
    });
  }
  function setReady(readyCount, total, youReady) {
    $("ready").disabled = youReady;
    $("readyStatus").textContent = `${readyCount}/${total} ready${youReady && readyCount < total ? " \u2014 waiting for your opponent\u2026" : ""}`;
  }
  function clearStudy() {
    stopCountdown("prep");
    $("studyGrid").replaceChildren();
  }
  function fighterCard(el, p, isMe) {
    if (!p) {
      el.replaceChildren(h("div", "name", "Opponent left"));
      return;
    }
    const name = append(h("div", "name"), h("span", "n", isMe ? `${p.name} (you)` : p.name), h("span", "combo", p.combo >= 2 ? `\xD7${p.combo} combo` : ""));
    const pct = p.hp / p.maxHp * 100;
    const bar = append(h("div", "hp" + (pct <= 25 ? " low" : ""), void 0, { role: "meter", "aria-valuemin": "0", "aria-valuemax": String(p.maxHp), "aria-valuenow": String(p.hp), "aria-label": `${p.name} HP` }), h("div"));
    bar.firstElementChild.style.width = `${pct}%`;
    el.replaceChildren(name, bar, append(h("div", "hpnum", `${p.hp} / ${p.maxHp} HP`), h("span", "lvs", `\xB7 ${levelsText(p.levels)}`)));
  }
  function renderFighters(players2, you2) {
    fighterCard($("meCard"), players2.find((p) => p.id === you2), true);
    fighterCard($("oppCard"), players2.find((p) => p.id !== you2), false);
  }
  var wiz = (mine) => $(mine ? "wizMe" : "wizOpp");
  function retrigger(el, cls, ms) {
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), ms);
  }
  function resetWizards() {
    for (const mine of [true, false]) {
      const w = wiz(mine);
      w.className = `wizard ${mine ? "me" : "opp"}`;
      w.querySelector(".sprite").innerHTML = wizardSvg(mine ? "me" : "opp");
    }
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
  function castSpell(casterIsMe, kanji, damage) {
    const caster = wiz(casterIsMe);
    const target = wiz(!casterIsMe);
    retrigger(caster, "casting", 450);
    const arena = $("arena");
    const a = arena.getBoundingClientRect();
    const c = caster.getBoundingClientRect();
    const t = target.getBoundingClientRect();
    const spell = h("div", "spell" + (casterIsMe ? "" : " foe"), kanji, { lang: "ja" });
    arena.append(spell);
    const from = { x: casterIsMe ? c.right - a.left - 30 : c.left - a.left - 10, y: c.top - a.top + c.height * 0.15 };
    const to = { x: t.left - a.left + t.width / 2 - 20, y: t.top - a.top + t.height * 0.45 };
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
        retrigger(target, "hurt", 520);
        floatText(target, `\u2212${damage}`, casterIsMe ? "" : "taken");
        resolve();
      };
    });
  }
  function fizzle(mine) {
    const w = wiz(mine);
    retrigger(w, "fizzle", 650);
    const puff = h("div", "puff", "\u{1F4A8}");
    w.append(puff);
    setTimeout(() => puff.remove(), 1e3);
  }
  function knockOut(mine) {
    wiz(mine).classList.add("ko");
  }
  function showBattle(players2, you2, countdownMs, battleMs, onTick) {
    clearStudy();
    resetWizards();
    renderFighters(players2, you2);
    $("kanji").textContent = "";
    setFeedback(null);
    $("log").textContent = "";
    lockInput();
    $("battleClock").textContent = clockText(battleMs);
    show("battle");
    const cd = $("countdown");
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
    setTimeout(() => countdown("battle", battleMs, (left) => $("battleClock").textContent = clockText(left)), countdownMs);
  }
  var answerMode = "reading";
  var currentAnswerMode = () => answerMode;
  function showChallenge(kanji, mode, timeLimitMs) {
    answerMode = mode;
    const k = $("kanji");
    k.classList.remove("cast");
    k.textContent = kanji;
    setFeedback(null);
    const input = $("answer");
    input.disabled = false;
    input.value = "";
    input.placeholder = mode === "romaji" ? "romaji, then Enter" : "\u304B\u306A or romaji, then Enter";
    input.lang = mode === "romaji" ? "en" : "ja";
    setInputHint(mode === "romaji" ? "Hiragana spell \u2014 answer in romaji" : "");
    $("skip").disabled = false;
    input.focus();
    countdown("challenge", timeLimitMs, (_l, frac) => $("challengeBar").style.width = `${frac * 100}%`);
  }
  function setInputHint(text, warn = false) {
    const el = $("inputHint");
    el.textContent = text;
    el.classList.toggle("warn", warn);
  }
  function lockInput() {
    stopCountdown("challenge");
    $("answer").disabled = true;
    $("skip").disabled = true;
  }
  function setFeedback(f) {
    const el = $("feedback");
    if (!f) {
      el.replaceChildren();
      el.className = "feedback";
      return;
    }
    el.className = "feedback " + (f.correct ? "good" : "bad");
    const word = (cls) => append(h("span", cls), h("span", "rk", f.kanji, { lang: "ja" }), h("span", "rr", f.reading, { lang: "ja" }), h("span", "", f.meaning));
    if (f.correct) {
      $("kanji").classList.add("cast");
      const combo = f.combo >= 2 ? ` \xB7 \xD7${f.combo} combo` : "";
      el.replaceChildren(h("span", "big", `\u2713 CAST! ${f.damage} damage`), word("mean"), h("span", "sub2", `${secs(f.responseMs ?? 0)}${combo}`));
    } else {
      const title = f.skipped ? "\u21B7 Skipped" : f.timedOut ? "\u2717 Too slow!" : "\u2717 MISS!";
      el.replaceChildren(h("span", "big", title), word("reveal"));
    }
  }
  function logOpponent(text, kanji) {
    const el = $("log");
    el.replaceChildren(h("span", "", text));
    if (kanji) el.append(h("span", "k", ` ${kanji}`, { lang: "ja" }));
  }
  var REASONS = { ko: "Knock-out", time: "Time up \u2014 most HP left wins", forfeit: "Opponent left the battle" };
  function showResults(players2, you2, winnerId, reason, stats) {
    stopCountdown();
    $("resultTitle").textContent = winnerId === null ? "Draw" : winnerId === you2 ? "\u{1F3C6} Victory" : "Defeat";
    $("resultReason").textContent = REASONS[reason];
    const oppId = Object.keys(stats).find((id) => id !== you2);
    const me = stats[you2];
    const opp = oppId ? stats[oppId] : void 0;
    const oppName = players2.find((p) => p.id === oppId)?.name ?? "Opponent";
    const rows = [
      ["Damage dealt", (s) => String(s.damageDealt)],
      ["Accuracy", (s) => s.attempts ? `${Math.round(s.accuracy * 100)}% (${s.correct}/${s.attempts})` : "\u2014"],
      ["Avg response", (s) => s.avgResponseMs !== null ? secs(s.avgResponseMs) : "\u2014"],
      ["Best combo", (s) => `\xD7${s.bestCombo}`]
    ];
    const cmp = $("statCompare");
    cmp.replaceChildren(h("div", "h me", "You"), h("div"), h("div", "h r", oppName));
    for (const [label, fmt] of rows) cmp.append(h("div", "v", fmt(me)), h("div", "lbl", label), h("div", "v r", opp ? fmt(opp) : "\u2014"));
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
    $("rematch").textContent = players2.length < 2 ? "Back to lobby" : "Rematch";
    $("rematchStatus").textContent = "";
    show("results");
  }
  function setRematchStatus(votes, you2, playerCount) {
    const youVoted = votes.includes(you2);
    $("rematch").disabled = youVoted;
    if (playerCount < 2) {
      $("rematch").textContent = "Back to lobby";
      $("rematch").disabled = false;
      $("rematchStatus").textContent = "Your opponent left.";
    } else if (votes.length === 0) $("rematchStatus").textContent = "";
    else $("rematchStatus").textContent = youVoted ? "Waiting for your opponent to accept\u2026" : "Your opponent wants a rematch!";
  }
  function setAudioButtons(radio2, sfx2) {
    $("radioBtn").setAttribute("aria-pressed", String(radio2));
    $("radioBtn").textContent = radio2 ? "\u266A Radio on" : "\u266A Radio off";
    $("sfxBtn").setAttribute("aria-pressed", String(sfx2));
    $("sfxBtn").textContent = sfx2 ? "\u{1F50A} Sounds on" : "\u{1F507} Sounds off";
  }

  // src/client/main.ts
  var you = "";
  var code = "";
  var players = [];
  var challengeId = 0;
  var readyIds = [];
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
  var socket = new GameSocket(onMessage, () => {
    setError("Disconnected from server \u2014 refresh to play again.");
    show("menu");
  });
  function backToMenu() {
    you = "";
    code = "";
    players = [];
    stopCountdown();
    show("menu");
  }
  function onMessage(msg) {
    switch (msg.type) {
      case "joined":
        you = msg.you;
        code = msg.code;
        setError("");
        break;
      case "left":
        backToMenu();
        break;
      case "lobby":
        players = msg.players;
        showLobby(code, msg.players, you, msg.hostId, msg.maxPlayers);
        break;
      case "prep":
        readyIds = [];
        showPrep(msg.pool, msg.durationMs);
        setReady(0, players.length, false);
        break;
      case "prep_ready":
        readyIds = msg.readyIds;
        setReady(readyIds.length, players.length, readyIds.includes(you));
        break;
      case "battle_start":
        players = msg.players;
        showBattle(players, you, msg.countdownMs, msg.durationMs, (n) => n > 0 ? sfx.tick() : sfx.go());
        break;
      case "challenge":
        challengeId = msg.id;
        showChallenge(msg.kanji, msg.answer, msg.timeLimitMs);
        break;
      case "answer_result":
        if (msg.challengeId !== challengeId) break;
        lockInput();
        setFeedback(msg);
        if (msg.correct) sfx.correct(msg.combo);
        else sfx.wrong();
        break;
      case "battle_update": {
        players = msg.players;
        const e = msg.event;
        const mine = e.playerId === you;
        if (e.kind === "hit") {
          void castSpell(mine, e.kanji, e.damage).then(() => {
            renderFighters(players, you);
            if (mine) sfx.impact();
            else sfx.hurt();
          });
        } else {
          fizzle(mine);
          renderFighters(players, you);
        }
        if (!mine) {
          const name = players.find((p) => p.id === e.playerId)?.name ?? "Opponent";
          if (e.kind === "hit") logOpponent(`${name} cast for ${e.damage}${e.combo >= 2 ? ` (\xD7${e.combo})` : ""}:`, e.kanji);
          else logOpponent(`${name} fumbled:`, e.kanji);
        }
        break;
      }
      case "game_over": {
        players = msg.players;
        lockInput();
        const delay = msg.reason === "forfeit" ? 300 : 1800;
        setTimeout(() => {
          renderFighters(players, you);
          if (msg.reason === "ko") {
            for (const p of players) if (p.hp <= 0) knockOut(p.id === you);
          }
        }, 450);
        setTimeout(() => {
          if (msg.winnerId === you) sfx.win();
          else if (msg.winnerId) sfx.lose();
          showResults(msg.players, you, msg.winnerId, msg.reason, msg.stats);
        }, delay);
        break;
      }
      case "rematch_status":
        setRematchStatus(msg.votes, you, players.length);
        break;
      case "error":
        if (you) $("lobbyStatus").textContent = msg.message;
        else setError(msg.message);
        break;
    }
  }
  var nameValue = () => $("name").value.trim() || "Player";
  $("name").value = store.get("kb:name") ?? "";
  var rememberName = () => store.set("kb:name", nameValue());
  $("create").onclick = () => {
    rememberName();
    socket.send({ type: "create", name: nameValue(), levels: savedLevels() });
  };
  var join = () => {
    rememberName();
    socket.send({ type: "join", code: $("joinCode").value, name: nameValue(), levels: savedLevels() });
  };
  $("join").onclick = join;
  $("joinCode").addEventListener("keydown", (e) => {
    if (e.key === "Enter") join();
  });
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
  $("ready").onclick = () => socket.send({ type: "ready" });
  var skip = () => {
    const input = $("answer");
    if (input.disabled) return;
    socket.send({ type: "skip", challengeId });
    lockInput();
  };
  $("skip").onclick = skip;
  $("answer").addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !e.isComposing) {
      e.preventDefault();
      return skip();
    }
    if (e.key !== "Enter" || e.isComposing || e.keyCode === 229) return;
    const input = e.currentTarget;
    const text = input.value.trim();
    if (!text || input.disabled) return;
    if (currentAnswerMode() === "romaji" && !/^[a-z' -]+$/i.test(text.normalize("NFKC"))) {
      setInputHint("Use romaji for hiragana spells (switch your IME off)", true);
      return;
    }
    socket.send({ type: "answer", challengeId, text: input.value });
    lockInput();
  });
  $("rematch").onclick = () => socket.send({ type: "rematch" });
  $("leave").onclick = () => socket.send({ type: "leave" });
  setAudioButtons(isRadioOn(), isSfxOn());
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
})();
