"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res2, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res2 = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res2;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/shared/vocab.ts
  var LEVEL_DIFFICULTY, KANA_BASIC, KANA_VOICED, KANA_COMBO, kanaRows, toKatakana, KANA, KATA, displayReading;
  var init_vocab = __esm({
    "src/shared/vocab.ts"() {
      "use strict";
      LEVEL_DIFFICULTY = { KANA: 6, KATA: 7, N5: 15, N4: 28, N3: 40, N2: 57, N1: 75, ONO: 20 };
      KANA_BASIC = "\u3042a \u3044i \u3046u \u3048e \u304Ao \u304Bka \u304Dki \u304Fku \u3051ke \u3053ko \u3055sa \u3057shi \u3059su \u305Bse \u305Dso \u305Fta \u3061chi \u3064tsu \u3066te \u3068to \u306Ana \u306Bni \u306Cnu \u306Dne \u306Eno \u306Fha \u3072hi \u3075fu \u3078he \u307Bho \u307Ema \u307Fmi \u3080mu \u3081me \u3082mo \u3084ya \u3086yu \u3088yo \u3089ra \u308Ari \u308Bru \u308Cre \u308Dro \u308Fwa \u3092wo \u3093n";
      KANA_VOICED = "\u304Cga \u304Egi \u3050gu \u3052ge \u3054go \u3056za \u3058ji \u305Azu \u305Cze \u305Ezo \u3060da \u3062ji \u3065zu \u3067de \u3069do \u3070ba \u3073bi \u3076bu \u3079be \u307Cbo \u3071pa \u3074pi \u3077pu \u307Ape \u307Dpo";
      KANA_COMBO = "\u304D\u3083kya \u304D\u3085kyu \u304D\u3087kyo \u3057\u3083sha \u3057\u3085shu \u3057\u3087sho \u3061\u3083cha \u3061\u3085chu \u3061\u3087cho \u306B\u3083nya \u306B\u3085nyu \u306B\u3087nyo \u3072\u3083hya \u3072\u3085hyu \u3072\u3087hyo \u307F\u3083mya \u307F\u3085myu \u307F\u3087myo \u308A\u3083rya \u308A\u3085ryu \u308A\u3087ryo \u304E\u3083gya \u304E\u3085gyu \u304E\u3087gyo \u3058\u3083ja \u3058\u3085ju \u3058\u3087jo \u3073\u3083bya \u3073\u3085byu \u3073\u3087byo \u3074\u3083pya \u3074\u3085pyu \u3074\u3087pyo";
      kanaRows = (script, conv) => [
        ...KANA_BASIC.split(" ").map((s) => [conv(s[0]), s.slice(1), script, 5]),
        ...KANA_VOICED.split(" ").map((s) => [conv(s[0]), s.slice(1), `${script} (voiced)`, 6]),
        ...KANA_COMBO.split(" ").map((s) => [conv(s.slice(0, 2)), s.slice(2), `${script} (combined)`, 8])
      ];
      toKatakana = (s) => s.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 96));
      KANA = kanaRows("hiragana", (s) => s);
      KATA = kanaRows("katakana", toKatakana).map(([k, r2, m, d]) => [k, r2, m, d === void 0 ? d : d + 1]);
      displayReading = (v) => v.romaji ?? v.reading;
    }
  });

  // src/shared/rebin.ts
  function rebinByStrokes(words2) {
    const kanjiWords = words2.filter((w) => JLPT_ORDER.includes(w.level));
    const sizes = JLPT_ORDER.map((l) => kanjiWords.filter((w) => w.level === l).length);
    const rank = (w) => JLPT_ORDER.indexOf(w.level);
    const score3 = (w) => (w.strokes ?? 0) + JLPT_WEIGHT * rank(w);
    const sorted = [...kanjiWords].sort((a, b) => score3(a) - score3(b) || rank(a) - rank(b) || a.kanji.length - b.kanji.length || a.id.localeCompare(b.id));
    const next3 = /* @__PURE__ */ new Map();
    let i = 0;
    sizes.forEach((n, li) => {
      for (const w of sorted.slice(i, i + n)) next3.set(w.id, JLPT_ORDER[li]);
      i += n;
    });
    return words2.map((w) => {
      const level2 = next3.get(w.id);
      if (!level2) return w;
      const ks = [...w.kanji].filter((c) => KANJI.test(c)).length;
      const total = w.strokes ?? 12;
      const adj = Math.max(-6, Math.min(10, (total - 12) * 0.45)) + (ks >= 3 ? 2 : 0);
      return { ...w, level: level2, jlpt: w.level, difficulty: Math.round(Math.max(5, Math.min(100, LEVEL_DIFFICULTY[level2] + adj))) };
    });
  }
  var KANJI, JLPT_ORDER, JLPT_WEIGHT;
  var init_rebin = __esm({
    "src/shared/rebin.ts"() {
      "use strict";
      init_vocab();
      KANJI = /[一-鿿㐀-䶿々]/;
      JLPT_ORDER = ["N5", "N4", "N3", "N2", "N1"];
      JLPT_WEIGHT = 3;
    }
  });

  // src/client/offline/vocab.ts
  var vocab_exports = {};
  __export(vocab_exports, {
    JLPT_WEIGHT: () => JLPT_WEIGHT,
    VOCAB: () => VOCAB,
    VOCAB_BY_ID: () => VOCAB_BY_ID,
    loadVocab: () => loadVocab,
    rebinByStrokes: () => rebinByStrokes
  });
  function loadVocab() {
    loading ?? (loading = fetch("/vocab.json").then((r2) => {
      if (!r2.ok) throw new Error(`vocab ${r2.status}`);
      return r2.json();
    }).then((raw) => {
      VOCAB.length = 0;
      VOCAB.push(...rebinByStrokes(raw));
      VOCAB_BY_ID.clear();
      for (const v of VOCAB) VOCAB_BY_ID.set(v.id, v);
    }).catch((e) => {
      loading = null;
      throw e;
    }));
    return loading;
  }
  var VOCAB, VOCAB_BY_ID, loading;
  var init_vocab2 = __esm({
    "src/client/offline/vocab.ts"() {
      "use strict";
      init_rebin();
      init_rebin();
      VOCAB = [];
      VOCAB_BY_ID = /* @__PURE__ */ new Map();
      loading = null;
    }
  });

  // src/client/offline/node-shim.ts
  var no = (name) => () => {
    throw new Error(`${name} is not available offline`);
  };
  var randomUUID = () => typeof crypto.randomUUID === "function" ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, () => (Math.random() * 16 | 0).toString(16));
  var randomBytes = no("randomBytes");
  var scrypt = no("scrypt");
  var timingSafeEqual = no("timingSafeEqual");
  var createHmac = no("createHmac");
  var mkdirSync = no("mkdirSync");
  var readFileSync = no("readFileSync");
  var renameSync = no("renameSync");
  var writeFileSync = no("writeFileSync");

  // src/shared/progress.ts
  var XP_PER_LEVEL = 1e3;
  var xpToNext = (level2) => XP_PER_LEVEL * (level2 + 1);
  var xpForLevel = (level2) => XP_PER_LEVEL * level2 * (level2 + 1) / 2;
  function levelOf(xp) {
    let n = Math.floor((Math.sqrt(1 + 8 * Math.max(0, xp) / XP_PER_LEVEL) - 1) / 2);
    while (xpForLevel(n + 1) <= xp) n++;
    while (n > 0 && xpForLevel(n) > xp) n--;
    return n;
  }
  function levelXp(xp) {
    const level2 = levelOf(xp);
    return { level: level2, into: Math.max(0, xp) - xpForLevel(level2), need: xpToNext(level2) };
  }
  var levelProgress = (xp) => {
    const l = levelXp(xp);
    return l.into / l.need;
  };
  function xpFor(outcome, accuracy, mode4) {
    const acc = Math.round(Math.max(0, Math.min(1, accuracy)) * 100);
    if (mode4 === "deck") return outcome === "win" ? 4e3 : outcome === "draw" ? 2500 : 1500;
    return (outcome === "win" ? 300 : outcome === "draw" ? 150 : 50) + acc;
  }
  var CRIT_BASE = 0.01;
  var CRIT_PER_WORD = 0.01;
  var CRIT_CAP = 0.5;
  var critFor = (learnedToday) => Math.min(CRIT_CAP, CRIT_BASE + Math.max(0, learnedToday) * CRIT_PER_WORD);
  var dailyCrit = (count, expiresAt, now2 = Date.now()) => now2 < expiresAt ? critFor(count) : CRIT_BASE;
  function nextLocalMidnight(today2, tzOffsetMin) {
    const [y, m, d] = today2.split("-").map(Number);
    return Date.UTC(y, m - 1, d + 1) + tzOffsetMin * 6e4;
  }
  var beta = { open: false };
  var BACKGROUNDS = [
    { id: "forest", name: "Forest", level: 0 },
    { id: "swamp", name: "Swamp", level: 3 },
    { id: "plains", name: "Plains", level: 5 },
    { id: "castle", name: "Castle", level: 8 },
    { id: "worldtree", name: "World Tree", level: 10 }
  ];
  var isBackground = (x) => BACKGROUNDS.some((b) => b.id === x);
  var unlocked = (bg2, xp) => beta.open || levelOf(xp) >= BACKGROUNDS.find((b) => b.id === bg2).level;
  var SEASONS = [
    { month: 1, name: "Frost", reward: "staff:frost" },
    { month: 2, name: "Sakura", reward: "flame:sakura" },
    { month: 3, name: "Blossom", reward: "staff:blossom" },
    { month: 4, name: "Rain", reward: "flame:rain" },
    { month: 5, name: "Jade", reward: "staff:jade" },
    { month: 6, name: "Sun", reward: "flame:sun" },
    { month: 7, name: "Abyss", reward: "staff:abyss" },
    { month: 8, name: "Thunder", reward: "flame:thunder" },
    { month: 9, name: "Moon", reward: "staff:moon" },
    { month: 10, name: "Harvest", reward: "flame:harvest" },
    { month: 11, name: "Maple", reward: "staff:maple" },
    { month: 12, name: "Starlight", reward: "flame:starlight" }
  ];
  var BORDERS = [
    { id: "none", name: "No border", level: 0, blurb: "Just your picture." },
    { id: "apprentice", name: "Apprentice", level: 1, blurb: "A plain silver ring." },
    { id: "adept", name: "Adept", level: 5, blurb: "A violet ring with four rune studs." },
    { id: "master", name: "Master", level: 10, blurb: "A golden ring with a star at the top." },
    { id: "archmage", name: "Archmage", level: 15, blurb: "A glowing ring of moving arcane light." },
    { id: "beta", name: "Beta", level: 0, unlock: "border:beta", blurb: "A platinum ring with a BETA tag \u2014 for everyone who finished the tutorial during the beta." }
  ];
  var isBorder = (b) => typeof b === "string" && BORDERS.some((x) => x.id === b);
  var borderUnlocked = (id, level2, unlocks2 = []) => {
    const b = BORDERS.find((x) => x.id === id);
    return !!b && (b.unlock ? unlocks2.includes(b.unlock) : b.level <= level2);
  };
  var BETA_BORDER = "border:beta";
  var DAILY_TASKS = [
    { id: "learn", label: "Study 10 spells (any deck)", target: 10 },
    // all four done: the streak goes up and +500 XP
    { id: "quiz", label: "Do a JLPT quiz (7/10 or better)", target: 1 },
    { id: "daily", label: "Play the daily challenge", target: 1 },
    { id: "passage", label: "Read a passage (4/8 or better)", target: 1 }
  ];
  var TASK_PASS = { quiz: 0.7, passage: 0.5 };
  var taskPassed = (task, score3, total) => total > 0 && score3 / total >= TASK_PASS[task] - 1e-9;
  var MONTH_GOALS = [
    { id: "days", label: "Play on 12 different days", target: 12 },
    { id: "wins", label: "Win 10 games", target: 10 },
    { id: "reviews", label: "Pass 150 flashcards in Study spells", target: 150 }
  ];
  var seasonOf = (day) => SEASONS[Number(day.slice(5, 7)) - 1] ?? SEASONS[0];
  var FLAMES = [
    { id: "blue", name: "Light blue", level: 0, color: "#6ee7ff" },
    { id: "purple", name: "Purple", level: 5, color: "#b26bff" },
    { id: "sakura", name: "Sakura", level: 0, color: "#ff8ccf", season: 2 },
    { id: "rain", name: "Rain", level: 0, color: "#3fd9c4", season: 4 },
    { id: "sun", name: "Sun", level: 0, color: "#ffd23f", season: 6 },
    { id: "thunder", name: "Thunder", level: 0, color: "#e8e2ff", season: 8 },
    { id: "harvest", name: "Harvest", level: 0, color: "#ff8a2a", season: 10 },
    { id: "starlight", name: "Starlight", level: 0, color: "#fff0a0", season: 12 }
  ];
  var isFlame = (x) => FLAMES.some((f2) => f2.id === x);
  var flameUnlocked = (f2, xp, unlocks2 = []) => {
    const d = FLAMES.find((x) => x.id === f2);
    if (!d) return false;
    if (beta.open) return true;
    return d.season ? unlocks2.includes(`flame:${d.id}`) : levelOf(xp) >= d.level;
  };
  var flameColor = (f2) => (FLAMES.find((x) => x.id === f2) ?? FLAMES[0]).color;
  function flameShades(f2) {
    const hex = flameColor(f2).slice(1);
    const [r2, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
    const max = Math.max(r2, g, b), min = Math.min(r2, g, b), l = (max + min) / 2, d = max - min;
    const h4 = d === 0 ? 0 : max === r2 ? ((g - b) / d + 6) % 6 : max === g ? (b - r2) / d + 2 : (r2 - g) / d + 4;
    const hue = h4 * 60;
    const pale = l > 0.85;
    const rgb = (s, li) => {
      const c = (1 - Math.abs(2 * li - 1)) * s, x = c * (1 - Math.abs(hue / 60 % 2 - 1)), m = li - c / 2;
      const [a, bb, cc] = hue < 60 ? [c, x, 0] : hue < 120 ? [x, c, 0] : hue < 180 ? [0, c, x] : hue < 240 ? [0, x, c] : hue < 300 ? [x, 0, c] : [c, 0, x];
      return [a, bb, cc].map((v) => Math.round((v + m) * 255)).join(",");
    };
    return pale ? [rgb(1, 0.97), rgb(1, 0.86), rgb(0.85, 0.7), rgb(0.7, 0.45)] : [rgb(1, 0.93), rgb(1, 0.72), rgb(0.9, 0.55), rgb(0.85, 0.36)];
  }
  var STAFFS = [
    { id: "verdant", name: "Verdant Staff", streak: 0, gem: "#6dff6a", blurb: "Carved from an ancient tree. It channels the natural energy of the earth and life." },
    { id: "ember", name: "Ember Staff", streak: 3, gem: "#ff7a1a", blurb: "Forged from volcanic rock and blessed by fire spirits." },
    { id: "tide", name: "Tide Staff", streak: 5, gem: "#3fb8ff", blurb: "Crafted from crystal and oceanic runes. It flows with the tides." },
    { id: "storm", name: "Storm Staff", streak: 8, gem: "#b26bff", blurb: "A relic of the sky temples. It channels lightning." },
    { id: "void", name: "Void Staff", streak: 10, gem: "#4a7dff", blurb: "An ancient, otherworldly artifact. It bends reality and commands the unknown." },
    { id: "frost", name: "Frost Staff", streak: 0, season: 1, base: "tide", tint: "#d8f4ff", gem: "#bfefff", blurb: "January reward. Rimed with ice that never melts." },
    { id: "blossom", name: "Blossom Staff", streak: 0, season: 3, base: "verdant", tint: "#ffb8d8", gem: "#ff7ab8", blurb: "March reward. A branch that flowers whenever it casts." },
    { id: "jade", name: "Jade Staff", streak: 0, season: 5, base: "ember", tint: "#7dffb0", gem: "#3dff8a", blurb: "May reward. Carved from one piece of temple jade." },
    { id: "abyss", name: "Abyss Staff", streak: 0, season: 7, base: "tide", tint: "#3a5cff", gem: "#2a4dff", blurb: "July reward. Pulled from the deepest trench of the sea." },
    { id: "moon", name: "Moon Staff", streak: 0, season: 9, base: "verdant", tint: "#f2f0ff", gem: "#fff6c8", blurb: "September reward. Silver light of the harvest moon." },
    { id: "maple", name: "Maple Staff", streak: 0, season: 11, base: "ember", tint: "#ff5a3a", gem: "#ff3a2a", blurb: "November reward. Burning red like autumn leaves." }
  ];
  var isStaff = (x) => STAFFS.some((s) => s.id === x);
  var staffUnlocked = (s, bestStreak, unlocks2 = []) => {
    const d = STAFFS.find((x) => x.id === s);
    if (!d) return false;
    if (beta.open) return true;
    return d.season ? unlocks2.includes(`staff:${d.id}`) : (bestStreak ?? 0) >= d.streak;
  };
  var staffOf = (s) => STAFFS.find((x) => x.id === s) ?? STAFFS[0];
  var MODE_LEVEL = { reading: 0, rapid: 0, writing: 0, boss: 0, deck: 0 };
  var modeUnlocked = (mode4, xp, admin = false) => beta.open || admin || levelOf(xp) >= (MODE_LEVEL[mode4] ?? 0);
  var STUDY_LOCK = 100;
  var AVATAR_BY_LEVEL = { KANA: "goblin", KATA: "goblin", N5: "kid", N4: "human", N3: "knight", N2: "witch", N1: "wizard", ONO: "kid" };
  var ORDER = ["KANA", "KATA", "N5", "N4", "N3", "N2", "N1"];
  function avatarFor(levels) {
    const top = [...levels].sort((a, b) => ORDER.indexOf(b) - ORDER.indexOf(a))[0] ?? "N5";
    return AVATAR_BY_LEVEL[top];
  }
  var KANA_BEGINNER = "flag:kana-beginner";
  var isKanaBeginner = (unlocks2) => !!unlocks2?.includes(KANA_BEGINNER);
  function levelsFor(levels, beginner) {
    if (!beginner) return [...levels];
    const kana = levels.filter((l) => l === "KANA" || l === "KATA");
    return kana.length ? kana : ["KANA"];
  }
  function isoWeek(day) {
    const d = /* @__PURE__ */ new Date(`${day}T00:00:00Z`);
    const dow = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dow);
    const yearStart = Date.UTC(d.getUTCFullYear(), 0, 1);
    return Math.ceil(((d.getTime() - yearStart) / 864e5 + 1) / 7);
  }

  // src/shared/srs.ts
  var RATINGS = ["again", "hard", "good", "easy"];
  var DECKS = ["all", "struggling", "custom", "ono"];
  var isDeck = (x) => DECKS.includes(x);
  var SRS = {
    learnSteps: [1, 10],
    // minutes
    relearnSteps: [10],
    graduatingDays: 1,
    easyDays: 4,
    startEase: 2500,
    minEase: 1300,
    hardFactor: 1.2,
    easyBonus: 1.3,
    lapseEaseDrop: 200,
    hardEaseDrop: 150,
    easyEaseGain: 150,
    maxDays: 36500
  };
  var MIN = 6e4;
  var DAY = 864e5;
  function newCard(vocabId, now2, deck2 = "all") {
    return { vocabId, deck: deck2, addedAt: now2, state: "new", step: 0, ease: SRS.startEase, intervalDays: 0, due: now2, reps: 0, lapses: 0, struggling: deck2 === "struggling" };
  }
  var deckOf = (c) => c.deck ?? "all";
  var CUSTOM_PREFIX = "u:";
  var isDue = (c, now2) => c.due <= now2;
  function stepMinutes(steps, i) {
    return steps[Math.min(i, steps.length - 1)];
  }
  function answer(card, rating, now2) {
    const c = { ...card, reps: card.reps + 1 };
    const inLearning = c.state === "new" || c.state === "learning";
    const toReview = (days2) => {
      c.state = "review";
      c.step = 0;
      c.intervalDays = Math.min(SRS.maxDays, Math.max(1, Math.round(days2)));
      c.due = now2 + c.intervalDays * DAY;
    };
    if (inLearning || c.state === "relearning") {
      const steps = c.state === "relearning" ? SRS.relearnSteps : SRS.learnSteps;
      if (c.state === "new") c.state = "learning";
      const graduateDays = card.state === "relearning" ? Math.max(1, card.intervalDays) : SRS.graduatingDays;
      switch (rating) {
        case "again":
          c.step = 0;
          c.due = now2 + steps[0] * MIN;
          break;
        case "hard": {
          const m = c.step === 0 && steps.length > 1 ? (steps[0] + steps[1]) / 2 : stepMinutes(steps, c.step);
          c.due = now2 + m * MIN;
          break;
        }
        case "good":
          if (c.step + 1 >= steps.length) toReview(graduateDays);
          else {
            c.step += 1;
            c.due = now2 + steps[c.step] * MIN;
          }
          break;
        case "easy":
          toReview(card.state === "relearning" ? graduateDays + 1 : SRS.easyDays);
          break;
      }
      return c;
    }
    const late = Math.max(0, (now2 - card.due) / DAY);
    const ivl = card.intervalDays;
    switch (rating) {
      case "again":
        c.lapses += 1;
        c.ease = Math.max(SRS.minEase, c.ease - SRS.lapseEaseDrop);
        c.state = "relearning";
        c.step = 0;
        c.intervalDays = 1;
        c.due = now2 + SRS.relearnSteps[0] * MIN;
        return c;
      case "hard":
        c.ease = Math.max(SRS.minEase, c.ease - SRS.hardEaseDrop);
        toReview(Math.max(ivl + 1, ivl * SRS.hardFactor));
        return c;
      case "good":
        toReview(Math.max(ivl + 1, (ivl + late / 2) * (card.ease / 1e3)));
        return c;
      case "easy":
        c.ease = card.ease + SRS.easyEaseGain;
        toReview(Math.max(ivl + 2, (ivl + late) * (card.ease / 1e3) * SRS.easyBonus));
        return c;
    }
  }
  function formatInterval(ms) {
    const m = ms / MIN;
    if (m < 60) return `${Math.max(1, Math.round(m))}m`;
    const h4 = m / 60;
    if (h4 < 24) return `${Math.round(h4)}h`;
    const d = h4 / 24;
    if (d < 30) return `${Math.round(d)}d`;
    if (d < 365) return `${(d / 30).toFixed(d < 300 ? 1 : 0).replace(/\.0$/, "")}mo`;
    return `${(d / 365).toFixed(1).replace(/\.0$/, "")}y`;
  }
  var previewIntervals = (card, now2) => Object.fromEntries(RATINGS.map((r2) => [r2, formatInterval(answer(card, r2, now2).due - now2)]));

  // src/server/db/Store.ts
  var REPORTS_KEPT = 500;
  var UsernameTakenError = class extends Error {
  };
  var MATCH_HISTORY_LIMIT = 15;
  var SNAPSHOT_V = 1;
  var summaryOf = (m) => ({ id: m.id, mode: m.mode, outcome: m.outcome, character: m.character, at: m.at, opponents: m.opponents });
  var blankProgress = () => ({ dailyNew: 25, newToday: 0, badges: [], dailyPlan: null, xp: 0, background: "forest", studyLevels: [], lastNewDate: null, newNotice: 0, critCount: 0, critExpires: 0, wins: 0, losses: 0, avatarV: 0, flame: "blue", staff: "verdant", tutorialDone: true, unlocks: [], loginDay: null, streak: 0, streakDay: null, border: "none", bestStreak: 0 });
  var MemoryStore = class {
    constructor() {
      __publicField(this, "name", "memory");
      __publicField(this, "users", /* @__PURE__ */ new Map());
      __publicField(this, "srs", /* @__PURE__ */ new Map());
      // user → "deck|vocabId" → card
      __publicField(this, "custom", /* @__PURE__ */ new Map());
      __publicField(this, "avatars", /* @__PURE__ */ new Map());
      __publicField(this, "history", /* @__PURE__ */ new Map());
      __publicField(this, "nextMatch", 1);
      __publicField(this, "activityLog", /* @__PURE__ */ new Map());
      __publicField(this, "dailyResults", /* @__PURE__ */ new Map());
      __publicField(this, "friendLinks", /* @__PURE__ */ new Map());
      __publicField(this, "reportList", []);
      __publicField(this, "eventLog", []);
    }
    async init() {
    }
    async findByUsername(username) {
      const u = username.toLowerCase();
      for (const r2 of this.users.values()) if (r2.username === u) return { ...r2 };
      return null;
    }
    async findById(id) {
      const r2 = this.users.get(id);
      return r2 ? { ...r2 } : null;
    }
    async create(u) {
      if (await this.findByUsername(u.username)) throw new UsernameTakenError();
      const rec = { ...blankProgress(), tutorialDone: false, ...u, username: u.username.toLowerCase(), banned: false, id: randomUUID(), createdAt: (/* @__PURE__ */ new Date()).toISOString() };
      this.users.set(rec.id, rec);
      this.persist();
      return { ...rec };
    }
    async list() {
      return [...this.users.values()].map((r2) => ({ ...r2 })).sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    }
    async deleteUser(id) {
      if (!this.users.delete(id)) return false;
      this.srs.delete(id);
      this.custom.delete(id);
      this.avatars.delete(id);
      this.history.delete(id);
      this.activityLog.delete(id);
      for (const m of this.dailyResults.values()) m.delete(id);
      this.friendLinks.delete(id);
      for (const m of this.friendLinks.values()) m.delete(id);
      this.persist();
      return true;
    }
    async update(id, patch) {
      const r2 = this.users.get(id);
      if (!r2) return null;
      Object.assign(r2, patch);
      this.persist();
      return { ...r2 };
    }
    async addXp(id, delta) {
      const r2 = this.users.get(id);
      if (!r2) return 0;
      r2.xp = Math.max(0, r2.xp + Math.round(delta));
      this.persist();
      return r2.xp;
    }
    deck(userId) {
      let d = this.srs.get(userId);
      if (!d) {
        d = /* @__PURE__ */ new Map();
        this.srs.set(userId, d);
      }
      return d;
    }
    async cards(userId) {
      return [...this.deck(userId).values()].map((c) => ({ ...c, deck: deckOf(c) }));
    }
    async card(userId, deck2, vocabId) {
      const c = this.deck(userId).get(`${deck2}|${vocabId}`);
      return c ? { ...c, deck: deck2 } : null;
    }
    async saveCard(userId, card) {
      const deck2 = deckOf(card);
      this.deck(userId).set(`${deck2}|${card.vocabId}`, { ...card, deck: deck2, struggling: deck2 === "struggling" });
      this.persist();
    }
    async addCards(userId, cards) {
      const d = this.deck(userId);
      const added = [];
      for (const c of cards) {
        const deck2 = deckOf(c), key = `${deck2}|${c.vocabId}`;
        if (!d.has(key)) {
          d.set(key, { ...c, deck: deck2, struggling: deck2 === "struggling" });
          added.push(c.vocabId);
        }
      }
      this.persist();
      return added;
    }
    async removeCards(userId, deck2, vocabIds) {
      const d = this.deck(userId);
      let n = 0;
      for (const id of vocabIds) if (d.delete(`${deck2}|${id}`)) n++;
      this.persist();
      return n;
    }
    async markStruggling(userId, vocabIds, now2) {
      const d = this.deck(userId);
      const added = [];
      for (const id of new Set(vocabIds)) {
        const c = d.get(`struggling|${id}`);
        if (c) c.due = Math.min(c.due, now2);
        else {
          d.set(`struggling|${id}`, { vocabId: id, deck: "struggling", addedAt: now2, state: "new", step: 0, ease: 2500, intervalDays: 0, due: now2, reps: 0, lapses: 0, struggling: true });
          added.push(id);
        }
      }
      this.persist();
      return added;
    }
    async customWords(userId) {
      return (this.custom.get(userId) ?? []).map((w) => ({ ...w }));
    }
    async addCustomWord(userId, w) {
      this.custom.set(userId, [...(this.custom.get(userId) ?? []).filter((x) => x.id !== w.id), { ...w }]);
      this.persist();
    }
    async deleteCustomWord(userId, id) {
      this.custom.set(userId, (this.custom.get(userId) ?? []).filter((x) => x.id !== id));
      this.persist();
    }
    /** Learned = words that graduated to review, or that you've answered right at least once (0.9.9.4.4.6: today's count too) — in any deck, a word counts once. */
    async learnedCount(userId) {
      return new Set([...this.deck(userId).values()].filter((c) => c.state === "review" || !!c.critDay).map((c) => c.vocabId)).size;
    }
    async addResult(id, outcome) {
      const r2 = this.users.get(id);
      if (!r2 || outcome === "draw") return;
      if (outcome === "win") r2.wins++;
      else r2.losses++;
      this.persist();
    }
    async setAvatar(id, img) {
      const r2 = this.users.get(id);
      if (!r2) return 0;
      if (img) {
        this.avatars.set(id, img);
        r2.avatarV = (r2.avatarV || 0) + 1;
      } else {
        this.avatars.delete(id);
        r2.avatarV = 0;
      }
      this.persist();
      return r2.avatarV;
    }
    async getAvatar(id) {
      return this.avatars.get(id) ?? null;
    }
    async cardStats() {
      return Object.fromEntries([...this.srs].map(([uid2, d]) => [uid2, { cards: d.size, learned: new Set([...d.values()].filter((c) => c.state === "review" || !!c.critDay).map((c) => c.vocabId)).size }]));
    }
    async addMatch(userId, m) {
      const list = this.history.get(userId) ?? [];
      list.unshift({ ...m, id: `${Date.now().toString(36)}${(this.nextMatch++).toString(36)}` });
      this.history.set(userId, list.slice(0, MATCH_HISTORY_LIMIT));
      this.persist();
    }
    async matches(userId, limit) {
      return (this.history.get(userId) ?? []).slice(0, limit).map(summaryOf);
    }
    async match(userId, id) {
      return (this.history.get(userId) ?? []).find((m) => m.id === id) ?? null;
    }
    async addActivity(userId, day, d) {
      const log = this.activityLog.get(userId) ?? /* @__PURE__ */ new Map();
      this.activityLog.set(userId, log);
      const a = log.get(day) ?? { day, login: false, reviews: 0, games: 0, wins: 0, xp: 0, quizzes: 0, challenges: 0, passages: 0 };
      if (d.login) a.login = true;
      a.reviews += d.reviews ?? 0;
      a.games += d.games ?? 0;
      a.wins += d.wins ?? 0;
      a.xp += d.xp ?? 0;
      a.quizzes = (a.quizzes ?? 0) + (d.quizzes ?? 0);
      a.challenges = (a.challenges ?? 0) + (d.challenges ?? 0);
      a.passages = (a.passages ?? 0) + (d.passages ?? 0);
      a.studyXp = (a.studyXp ?? 0) + (d.studyXp ?? 0);
      log.set(day, a);
      this.persist();
    }
    async activity(userId, fromDay) {
      return [...this.activityLog.get(userId)?.values() ?? []].filter((a) => a.day >= fromDay).sort((a, b) => a.day.localeCompare(b.day)).map((a) => ({ ...a }));
    }
    async saveDaily(day, userId, correct, ms, marks = "") {
      const d = this.dailyResults.get(day) ?? /* @__PURE__ */ new Map();
      this.dailyResults.set(day, d);
      if (d.has(userId)) return false;
      d.set(userId, { correct, ms, marks });
      this.persist();
      return true;
    }
    async daily(day, userId) {
      const r2 = this.dailyResults.get(day)?.get(userId);
      return r2 ? { ...r2 } : null;
    }
    async dailyBoard(day, limit) {
      return [...this.dailyResults.get(day) ?? /* @__PURE__ */ new Map()].map(([userId, r2]) => ({ userId, username: this.users.get(userId)?.username ?? "?", correct: r2.correct, ms: r2.ms })).sort((a, b) => b.correct - a.correct || a.ms - b.ms).slice(0, limit);
    }
    async dailyBetter(day, correct, ms) {
      return [...this.dailyResults.get(day)?.values() ?? []].filter((r2) => r2.correct > correct || r2.correct === correct && r2.ms < ms).length;
    }
    // from → to → status
    link(a, b) {
      return this.friendLinks.get(a)?.get(b);
    }
    setLink(a, b, s) {
      const m = this.friendLinks.get(a) ?? /* @__PURE__ */ new Map();
      this.friendLinks.set(a, m);
      if (s) m.set(b, s);
      else m.delete(b);
    }
    async friends(userId) {
      const out = [];
      for (const [to, s] of this.friendLinks.get(userId) ?? []) {
        const u = this.users.get(to);
        if (u) out.push({ id: to, username: u.username, status: s === "accepted" ? "accepted" : "outgoing" });
      }
      for (const [from, m] of this.friendLinks) {
        const u = this.users.get(from);
        if (u && m.get(userId) === "pending") out.push({ id: from, username: u.username, status: "incoming" });
      }
      return out.sort((a, b) => a.username.localeCompare(b.username));
    }
    async requestFriend(from, to) {
      if (this.link(from, to)) return "exists";
      if (this.link(to, from) === "pending") {
        this.setLink(to, from, "accepted");
        this.setLink(from, to, "accepted");
        this.persist();
        return "accepted";
      }
      this.setLink(from, to, "pending");
      this.persist();
      return "requested";
    }
    async acceptFriend(userId, fromId) {
      if (this.link(fromId, userId) !== "pending") return false;
      this.setLink(fromId, userId, "accepted");
      this.setLink(userId, fromId, "accepted");
      this.persist();
      return true;
    }
    async removeFriend(userId, otherId) {
      this.setLink(userId, otherId, null);
      this.setLink(otherId, userId, null);
      this.persist();
    }
    async addReport(r2) {
      this.reportList.unshift({ ...r2, id: randomUUID(), done: false });
      this.reportList.length = Math.min(this.reportList.length, REPORTS_KEPT);
      this.persist();
    }
    async reports(limit) {
      return this.reportList.slice(0, limit).map((r2) => ({ ...r2 }));
    }
    async setReportDone(id, done2) {
      const r2 = this.reportList.find((x) => x.id === id);
      if (r2) {
        r2.done = done2;
        this.persist();
      }
    }
    async deleteReport(id) {
      this.reportList = this.reportList.filter((x) => x.id !== id);
      this.persist();
    }
    async addEvent(userId, name, at = Date.now()) {
      this.eventLog.push({ userId, name, at });
      if (this.eventLog.length > 5e4) this.eventLog.splice(0, 1e4);
      this.persist();
    }
    async events(since) {
      return this.eventLog.filter((e) => e.at >= since).map((e) => ({ ...e }));
    }
    async activityAll(fromDay) {
      const out = [];
      for (const [userId, days2] of this.activityLog) for (const a of days2.values()) if (a.day >= fromDay) out.push({ userId, day: a.day, games: a.games });
      return out;
    }
    persist() {
    }
  };

  // src/server/auth/AuthService.ts
  var AuthError = class extends Error {
    constructor(message, status = 400) {
      super(message);
      __publicField(this, "status", status);
    }
  };
  var toPublic = (u) => ({ id: u.id, username: u.username, role: u.role });

  // src/server/study/InsightsService.ts
  var InsightsError = class extends Error {
    constructor(message, status = 400) {
      super(message);
      __publicField(this, "status", status);
    }
  };
  var CLIENT_EVENTS = ["tutorial_start", "tutorial_kana_yes", "tutorial_kana_no", "tutorial_battle", "tutorial_skip", "tutorial_done"];

  // src/shared/protocol.ts
  var LEVELS = ["KANA", "KATA", "N5", "N4", "N3", "N2", "N1"];
  var LEVEL_LABEL = { KANA: "\u3072\u3089\u304C\u306A", KATA: "\u30AB\u30BF\u30AB\u30CA", N5: "N5", N4: "N4", N3: "N3", N2: "N2", N1: "N1", ONO: "\u30AA\u30CE\u30DE\u30C8\u30DA" };
  var ONO_TYPES = {
    sei: { ja: "\u64EC\u58F0\u8A9E", romaji: "giseigo", en: "sound" },
    tai: { ja: "\u64EC\u614B\u8A9E", romaji: "gitaigo", en: "state / manner" },
    jo: { ja: "\u64EC\u60C5\u8A9E", romaji: "gij\u014Dgo", en: "feeling" }
  };
  var MODE_LABEL = {
    reading: "1v1 Kanji Reading",
    writing: "1v1 Kanji Writing",
    boss: "Boss Elimination",
    rapid: "1v1 Rapid",
    deck: "Deck Duel"
  };
  var studyLevelOf = (v) => v.jlpt ?? v.level;
  var isKanaLevel = (l) => l === "KANA" || l === "KATA";

  // src/shared/achievements.ts
  var ACHIEVEMENTS = [
    { id: "first-win", name: "First Victory", how: "Win a battle.", icon: "sword", color: "#ff6b6b", tier: 1 },
    { id: "veteran", name: "Veteran", how: "Win 25 battles.", icon: "swords", color: "#ff8f5a", tier: 2 },
    { id: "champion", name: "Champion", how: "Win 100 battles.", icon: "crown", color: "#ffd479", tier: 3 },
    { id: "combo-5", name: "On Fire", how: "Cast 5 correct spells in a row in a battle.", icon: "flame", color: "#6ee7ff", tier: 1 },
    { id: "combo-10", name: "Inferno", how: "Reach a 10\xD7 combo in a battle.", icon: "flame2", color: "#b26bff", tier: 2 },
    { id: "combo-20", name: "Unstoppable", how: "Reach a 20\xD7 combo in a battle.", icon: "comet", color: "#ff4fd8", tier: 3 },
    { id: "flawless", name: "Flawless", how: "Win a battle with 100% accuracy (at least 10 answers).", icon: "target", color: "#3ddc84", tier: 2 },
    { id: "dragon-slayer", name: "Dragon Slayer", how: "Defeat the Black Dragon in Boss Elimination.", icon: "dragon", color: "#ff5a3a", tier: 2 },
    { id: "card-sage", name: "Card Sage", how: "Win a Deck Duel.", icon: "cards", color: "#5aa8e8", tier: 2 },
    { id: "calligrapher", name: "Calligrapher", how: "Win a Kanji Writing duel.", icon: "brush", color: "#e8d5a8", tier: 1 },
    { id: "quickdraw", name: "Quickdraw", how: "Win a Rapid duel.", icon: "bolt", color: "#ffe14d", tier: 1 },
    { id: "scholar", name: "Scholar", how: "Learn 100 spells in Study spells.", icon: "book", color: "#7fd1ff", tier: 1 },
    { id: "archmage", name: "Archmage", how: "Learn 1,000 spells.", icon: "tome", color: "#a98bff", tier: 3 },
    { id: "graduate", name: "Kana Graduate", how: `Start as a \u304B\u306A beginner, then tick "I've mastered hiragana" in Settings.`, icon: "kana", color: "#ff9ec7", tier: 1 },
    { id: "devoted", name: "Devoted", how: "Log in 7 days in a row.", icon: "sun", color: "#ffb84d", tier: 1 },
    { id: "eternal", name: "Eternal Flame", how: "Log in 30 days in a row.", icon: "moon", color: "#ff7a1a", tier: 3 },
    { id: "perfect-day", name: "Perfect Day", how: "Get 10 / 10 in the Daily challenge.", icon: "calendar", color: "#4dd6c8", tier: 2 },
    { id: "fellowship", name: "Fellowship", how: "Make a friend.", icon: "people", color: "#8be37a", tier: 1 },
    { id: "seasonal", name: "Seasonal", how: "Complete a month's goals and earn its reward.", icon: "leaf", color: "#ff8ccf", tier: 2 },
    { id: "grand-wizard", name: "Grand Wizard", how: "Reach level 10.", icon: "star", color: "#ffd479", tier: 3 },
    { id: "kingslayer", name: "Kingslayer", how: "Beat an admin in a battle.", icon: "kingslayer", color: "#ff3d6e", tier: 3 }
  ];
  var ACH_PREFIX = "ach:";
  var achById = (id) => ACHIEVEMENTS.find((a) => a.id === id);
  function earnedAchievements(f2) {
    const out = [];
    const add = (id, ok) => {
      if (ok) out.push(id);
    };
    add("first-win", f2.wins >= 1);
    add("veteran", f2.wins >= 25);
    add("champion", f2.wins >= 100);
    add("scholar", f2.learned >= 100);
    add("archmage", f2.learned >= 1e3);
    add("devoted", f2.bestStreak >= 7);
    add("eternal", f2.bestStreak >= 30);
    add("fellowship", f2.friends >= 1);
    add("seasonal", f2.seasonal >= 1);
    add("grand-wizard", f2.level >= 10);
    const m = f2.match;
    if (m && !m.forfeited) {
      add("combo-5", m.bestCombo >= 5);
      add("combo-10", m.bestCombo >= 10);
      add("combo-20", m.bestCombo >= 20);
      const won = m.outcome === "win";
      add("flawless", won && m.accuracy >= 1 && m.attempts >= 10);
      add("dragon-slayer", won && m.mode === "boss");
      add("card-sage", won && m.mode === "deck");
      add("calligrapher", won && m.mode === "writing");
      add("quickdraw", won && m.mode === "rapid");
      add("kingslayer", won && !!m.beatAdmin);
    }
    return out;
  }
  var COMBO_ACHIEVEMENTS = [[5, "combo-5"], [10, "combo-10"], [20, "combo-20"]];

  // src/shared/kana.ts
  var BASE = {
    a: "\u3042",
    i: "\u3044",
    u: "\u3046",
    e: "\u3048",
    o: "\u304A",
    ka: "\u304B",
    ki: "\u304D",
    ku: "\u304F",
    ke: "\u3051",
    ko: "\u3053",
    sa: "\u3055",
    si: "\u3057",
    shi: "\u3057",
    su: "\u3059",
    se: "\u305B",
    so: "\u305D",
    ta: "\u305F",
    ti: "\u3061",
    chi: "\u3061",
    tu: "\u3064",
    tsu: "\u3064",
    te: "\u3066",
    to: "\u3068",
    na: "\u306A",
    ni: "\u306B",
    nu: "\u306C",
    ne: "\u306D",
    no: "\u306E",
    ha: "\u306F",
    hi: "\u3072",
    hu: "\u3075",
    fu: "\u3075",
    he: "\u3078",
    ho: "\u307B",
    ma: "\u307E",
    mi: "\u307F",
    mu: "\u3080",
    me: "\u3081",
    mo: "\u3082",
    ya: "\u3084",
    yu: "\u3086",
    yo: "\u3088",
    ra: "\u3089",
    ri: "\u308A",
    ru: "\u308B",
    re: "\u308C",
    ro: "\u308D",
    la: "\u3089",
    li: "\u308A",
    lu: "\u308B",
    le: "\u308C",
    lo: "\u308D",
    wa: "\u308F",
    wo: "\u3092",
    wi: "\u3046\u3043",
    we: "\u3046\u3047",
    ga: "\u304C",
    gi: "\u304E",
    gu: "\u3050",
    ge: "\u3052",
    go: "\u3054",
    za: "\u3056",
    zi: "\u3058",
    ji: "\u3058",
    zu: "\u305A",
    ze: "\u305C",
    zo: "\u305E",
    da: "\u3060",
    di: "\u3062",
    du: "\u3065",
    de: "\u3067",
    do: "\u3069",
    ba: "\u3070",
    bi: "\u3073",
    bu: "\u3076",
    be: "\u3079",
    bo: "\u307C",
    pa: "\u3071",
    pi: "\u3074",
    pu: "\u3077",
    pe: "\u307A",
    po: "\u307D",
    va: "\u3094\u3041",
    vi: "\u3094\u3043",
    vu: "\u3094",
    ve: "\u3094\u3047",
    vo: "\u3094\u3049",
    fa: "\u3075\u3041",
    fi: "\u3075\u3043",
    fe: "\u3075\u3047",
    fo: "\u3075\u3049",
    xa: "\u3041",
    xi: "\u3043",
    xu: "\u3045",
    xe: "\u3047",
    xo: "\u3049",
    xya: "\u3083",
    xyu: "\u3085",
    xyo: "\u3087",
    lya: "\u3083",
    lyu: "\u3085",
    lyo: "\u3087",
    xtu: "\u3063",
    ltu: "\u3063",
    xtsu: "\u3063",
    ltsu: "\u3063",
    "-": "\u30FC"
  };
  var YOON = [
    [["ky"], "\u304D"],
    [["gy"], "\u304E"],
    [["sh", "sy"], "\u3057"],
    [["j", "jy", "zy"], "\u3058"],
    [["ch", "ty", "cy"], "\u3061"],
    [["dy"], "\u3062"],
    [["ny"], "\u306B"],
    [["hy"], "\u3072"],
    [["by"], "\u3073"],
    [["py"], "\u3074"],
    [["my"], "\u307F"],
    [["ry", "ly"], "\u308A"]
  ];
  var SMALL = { a: "\u3083", u: "\u3085", o: "\u3087" };
  var _a, _b;
  for (const [prefixes, kana] of YOON) {
    for (const p of prefixes) {
      for (const [v, small] of Object.entries(SMALL)) BASE[_a = p + v] ?? (BASE[_a] = kana + small);
      if (p === "sh" || p === "ch" || p === "j") BASE[_b = p + "e"] ?? (BASE[_b] = kana + "\u3047");
    }
  }
  var VOWELS = /* @__PURE__ */ new Set(["a", "i", "u", "e", "o"]);
  function romajiToHiragana(input2) {
    const s = input2.toLowerCase();
    let out = "";
    let i = 0;
    while (i < s.length) {
      const c = s[i];
      const next3 = s[i + 1];
      if (c === "n") {
        if (next3 === "'") {
          out += "\u3093";
          i += 2;
          continue;
        }
        if (next3 === void 0) {
          out += "\u3093";
          i += 1;
          continue;
        }
        if (next3 === "n") {
          const after = s[i + 2];
          out += "\u3093";
          i += after !== void 0 && (VOWELS.has(after) || after === "y") ? 1 : 2;
          continue;
        }
        if (!VOWELS.has(next3) && next3 !== "y") {
          out += "\u3093";
          i += 1;
          continue;
        }
      }
      if (c >= "a" && c <= "z" && !VOWELS.has(c) && (next3 === c || c === "t" && next3 === "c")) {
        out += "\u3063";
        i += 1;
        continue;
      }
      let matched = false;
      for (let len = 4; len >= 1; len--) {
        const kana = BASE[s.slice(i, i + len)];
        if (kana) {
          out += kana;
          i += len;
          matched = true;
          break;
        }
      }
      if (!matched) {
        out += c;
        i += 1;
      }
    }
    return out;
  }
  var katakanaToHiragana = (s) => s.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 96));
  function normalizeAnswer(input2) {
    const halfWidth = input2.normalize("NFKC");
    const cleaned = halfWidth.replace(/[\s・.,。、]/g, "");
    return romajiToHiragana(katakanaToHiragana(cleaned));
  }
  var foldJz = (s) => s.replace(/ぢ/g, "\u3058").replace(/づ/g, "\u305A");
  function isCorrectReading(input2, readings) {
    const answer2 = foldJz(normalizeAnswer(input2));
    if (!answer2.length) return false;
    return readings.some((raw) => {
      const r2 = foldJz(katakanaToHiragana(raw));
      if (r2 === answer2) return true;
      if (r2.length > 3 && r2.endsWith("\u3059\u308B") && r2.slice(0, -2) === answer2) return true;
      return longVowelSlip(r2, answer2);
    });
  }
  function longVowelSlip(r2, a) {
    const LONG = "\u3046\u304A";
    if (a.length === r2.length - 1) {
      for (let i = 1; i < r2.length; i++) if (LONG.includes(r2[i]) && r2.slice(0, i) + r2.slice(i + 1) === a) return true;
      return false;
    }
    if (a.length === r2.length) {
      let diff = -1;
      for (let i = 0; i < r2.length; i++) if (r2[i] !== a[i]) {
        if (diff >= 0) return false;
        diff = i;
      }
      return diff > 0 && LONG.includes(r2[diff]) && LONG.includes(a[diff]);
    }
    return false;
  }
  var WRITE = /[\p{Script=Han}々〆ヶ□]/u;
  var writeTargets = (word2) => {
    const all = [...word2];
    const k = all.filter((c) => WRITE.test(c));
    return k.length ? k : all;
  };
  var writeTemplate = (word2) => [...word2].map((c) => WRITE.test(c) ? "\u25A1" : c).join("");

  // src/server/study/StudyService.ts
  init_vocab();

  // src/shared/distract.ts
  var isKanji = (c) => /[一-鿿㐀-䶿々]/.test(c);
  var chars = (s) => [...s];
  var last = (s) => s.slice(-1);
  function shared(a, b, keep = () => true) {
    const left = /* @__PURE__ */ new Map();
    for (const c of chars(a)) if (keep(c)) left.set(c, (left.get(c) ?? 0) + 1);
    let n = 0;
    for (const c of chars(b)) {
      const k = left.get(c);
      if (k) {
        n++;
        left.set(c, k - 1);
      }
    }
    return n;
  }
  var STOP = /* @__PURE__ */ new Set(["a", "an", "the", "of", "to", "in", "on", "one", "one's", "be", "or", "and", "for", "with", "at", "by", "something", "someone", "etc", "is", "as"]);
  var words = (m) => m.toLowerCase().replace(/\([^)]*\)/g, " ").split(/[^a-z']+/).filter((w) => w.length > 2 && !STOP.has(w));
  var firstGloss = (m) => m.split(/[;,]/)[0].replace(/\([^)]*\)/g, "").trim().toLowerCase();
  var kindOf = (m) => {
    const g = firstGloss(m);
    return g.startsWith("to ") ? "verb" : /ly$/.test(g) ? "adverb" : "noun";
  };
  var posOf = (kanji, meaning2 = "") => /^to /.test(firstGloss(meaning2)) || /[うくぐすつぬぶむる]$/.test(kanji) && /[\u4e00-\u9fff]/.test(kanji) ? "verb" : /い$/.test(kanji) && /[\u4e00-\u9fff]/.test(kanji) ? "adj" : kindOf(meaning2);
  function similarity(field, right, x) {
    const len = Math.abs(chars(right).length - chars(x).length);
    switch (field) {
      case "reading": {
        let s = shared(right, x) * 2 - len * 1.5;
        if (right[0] === x[0]) s += 2;
        if (last(right) === last(x)) s += 1.5;
        return s;
      }
      case "kanji": {
        let s = shared(right, x, isKanji) * 4 + shared(right, x, (c) => !isKanji(c)) * 1.5 - len * 1.5;
        if (chars(right).filter(isKanji).length === chars(x).filter(isKanji).length) s += 1;
        if (!isKanji(last(right)) && last(right) === last(x)) s += 2;
        return s;
      }
      case "romaji": {
        let s = -len * 2;
        if (last(right) === last(x)) s += 3;
        if (right[0] === x[0]) s += 3;
        return s;
      }
      case "meaning": {
        const a = new Set(words(right)), b = words(x);
        let s = b.filter((w) => a.has(w)).length * 2;
        if (kindOf(right) === kindOf(x)) s += 3;
        s -= Math.min(4, Math.abs(firstGloss(right).length - firstGloss(x).length) / 4);
        s -= Math.min(3, Math.abs(right.length - x.length) / 15);
        return s;
      }
    }
  }
  function pickDistractors(field, right, pool, rng = Math.random, count = 3, pos) {
    const seen2 = /* @__PURE__ */ new Set([right]);
    const bad = field === "meaning" ? firstGloss(right) : null;
    const scored = [];
    for (const x of pool) {
      if (seen2.has(x)) continue;
      seen2.add(x);
      if (bad !== null && firstGloss(x) === bad) continue;
      scored.push({ x, s: similarity(field, right, x) + (pos && pos.of(x) === pos.right ? 4 : 0) + rng() * 1.5 });
    }
    scored.sort((p, q) => q.s - p.s);
    const top = scored.slice(0, Math.max(count, 8));
    for (let i = top.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [top[i], top[j]] = [top[j], top[i]];
    }
    return top.slice(0, count).map((t) => t.x);
  }

  // src/shared/quiz.ts
  init_vocab();
  var shuffle = (a, rng) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  var kanaChar = (v) => !!v.romaji && /^(hiragana|katakana)/.test(v.meaning);
  function buildQuiz(words2, vocab, rng = Math.random, byId) {
    const find = byId ?? ((id) => vocab.find((v) => v.id === id));
    const kinds = ["reading", "meaning", "kanji"];
    return words2.map((w, i) => {
      const ve = find(w.id);
      const asRomaji = !!ve && kanaChar(ve);
      const kind = asRomaji ? "reading" : w.kanji === w.reading ? "meaning" : kinds[i % 3];
      const field = kind === "reading" ? "reading" : kind === "meaning" ? "meaning" : "kanji";
      const right = asRomaji ? ve.romaji : w[field];
      const same = asRomaji ? vocab.filter(kanaChar) : vocab.filter((v) => v.level === w.level && v.id !== w.id && (field !== "meaning" || !kanaChar(v)));
      const base = same.length > 20 ? same : vocab.filter((x) => !kanaChar(x) && x.id !== w.id);
      const pool = base.filter((v) => field !== "kanji" || v.kanji !== v.reading && v.reading !== w.reading).filter((v) => field !== "reading" || v.kanji !== w.kanji);
      const text = (v) => asRomaji ? v.romaji : field === "reading" ? displayReading(v) : v[field];
      const posBy = new Map(pool.map((v) => [text(v), posOf(v.kanji, v.meaning)]));
      const wrong2 = pickDistractors(asRomaji ? "romaji" : field, right, pool.map(text), rng, 3, asRomaji ? void 0 : { right: posOf(w.kanji, w.meaning), of: (x) => posBy.get(x) });
      const choices = shuffle([right, ...wrong2], rng);
      return {
        kind,
        vocabId: w.id,
        level: w.level,
        choices,
        answer: choices.indexOf(right),
        prompt: kind === "kanji" ? w.reading : w.kanji,
        sub: kind === "kanji" ? w.meaning : void 0,
        word: { kanji: w.kanji, reading: asRomaji ? `${w.reading} \xB7 ${ve.romaji}` : w.reading, meaning: w.meaning }
      };
    });
  }
  var onoTypeLabel = (t) => `${ONO_TYPES[t].ja} (${ONO_TYPES[t].romaji}) \u2014 ${ONO_TYPES[t].en}`;
  function buildOnoQuiz(words2, vocab, rng = Math.random, examples) {
    const ono = vocab.filter((v) => v.level === "ONO");
    const kinds = ["onomean", "onoword", "onoctx"];
    return words2.map((w, i) => {
      let kind = kinds[i % kinds.length];
      const ex = examples?.get(w.id);
      if (kind === "onoctx" && !ex) kind = "onoword";
      const others = shuffle(ono.filter((v) => v.id !== w.id && v.reading !== w.reading && v.meaning !== w.meaning), rng);
      const near = [...others.filter((v) => v.ono === w.ono), ...others.filter((v) => v.ono !== w.ono)];
      const word2 = { kanji: w.kanji, reading: `${w.romaji ?? w.reading} \xB7 ${onoTypeLabel(w.ono ?? "tai")}`, meaning: w.meaning };
      const right = kind === "onomean" ? w.meaning : w.kanji;
      const pick4 = (kind === "onomean" ? near.map((v) => v.meaning) : near.map((v) => v.kanji)).filter((x, k, a) => x !== right && a.indexOf(x) === k).slice(0, 3);
      const choices = shuffle([right, ...pick4], rng);
      const prompt2 = kind === "onomean" ? w.kanji : kind === "onoword" ? w.meaning : (ex ?? "").replace(/【[^】]+】/, "\uFF3F\uFF3F\uFF3F");
      return { kind, vocabId: w.id, level: w.level, prompt: prompt2, sub: kind === "onoctx" ? w.meaning : void 0, choices, answer: choices.indexOf(right), word: word2 };
    });
  }

  // src/server/VocabPool.ts
  init_vocab2();
  function shuffle2(a, rng = Math.random) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // src/server/study/StudyService.ts
  init_vocab2();

  // src/server/study/ProgressService.ts
  init_vocab2();

  // src/server/now.ts
  var provider = () => Date.now();
  var now = () => provider();

  // src/server/study/ProgressService.ts
  var Mastery = { Unseen: 0, New: 1, Learning: 2, Learned: 3, Mastered: 4 };
  var MASTERED_DAYS = 21;
  function progressOf(c) {
    if (!c) return 0;
    if (c.state === "new") return 4;
    if (c.state !== "review") return Math.min(30, 10 + c.reps * 5);
    return Math.round(35 + 65 * Math.min(1, Math.log1p(c.intervalDays) / Math.log1p(MASTERED_DAYS)));
  }
  var DAY_MS = 864e5;
  var STREAK_XP = 500;
  var shiftDay = (day, days2) => new Date(Date.parse(day) + days2 * DAY_MS).toISOString().slice(0, 10);
  function playerDay(u, at = now()) {
    const server = new Date(at).toISOString().slice(0, 10);
    if (u.loginDay && Math.abs(Date.parse(u.loginDay) - Date.parse(server)) <= DAY_MS) return u.loginDay;
    return server;
  }
  var ProgressService = class {
    constructor(store3) {
      __publicField(this, "store", store3);
    }
    /** Record something the player did today, then check this month's goals. Returns a newly earned reward, if any. */
    async record(userId, day, delta) {
      await this.store.addActivity(userId, day, delta);
      await this.checkStreak(userId, day);
      return this.checkSeason(userId, day);
    }
    /** Today's daily tasks (Study 10 spells, a quiz, the daily challenge, a passage) and how far along each is. */
    async tasks(userId, day) {
      const a = (await this.store.activity(userId, day)).find((r2) => r2.day === day);
      const value = { learn: a?.reviews ?? 0, quiz: a?.quizzes ?? 0, daily: a?.challenges ?? 0, passage: a?.passages ?? 0 };
      return DAILY_TASKS.map((t) => ({ id: t.id, label: t.label, target: t.target, value: Math.min(t.target, value[t.id] ?? 0) }));
    }
    /** All four tasks done today → the streak goes up (once a day; a missed day starts it over). */
    async checkStreak(userId, day) {
      if (!(await this.tasks(userId, day)).every((t) => t.value >= t.target)) return;
      const u = await this.store.findById(userId);
      if (!u || u.streakDay === day) return;
      const streak = u.streakDay === shiftDay(day, -1) ? (u.streak ?? 0) + 1 : 1;
      await this.store.update(userId, { streakDay: day, streak, bestStreak: Math.max(u.bestStreak ?? 0, streak) });
      await this.store.addXp(userId, STREAK_XP);
      await this.store.addActivity(userId, day, { xp: STREAK_XP });
    }
    async month(u, day) {
      const first = `${day.slice(0, 8)}01`;
      const rows2 = await this.store.activity(u.id, first);
      const inMonth = rows2.filter((r2) => r2.day.slice(0, 7) === day.slice(0, 7));
      const value = {
        days: inMonth.filter((r2) => r2.login || r2.games > 0 || r2.reviews > 0).length,
        wins: inMonth.reduce((n, r2) => n + r2.wins, 0),
        reviews: inMonth.reduce((n, r2) => n + r2.reviews, 0)
      };
      const season = seasonOf(day);
      const goals = MONTH_GOALS.map((g) => ({ id: g.id, label: g.label, target: g.target, value: Math.min(g.target, value[g.id]) }));
      return { month: day.slice(0, 7), name: season.name, reward: season.reward, goals, done: goals.every((g) => g.value >= g.target), unlocked: (u.unlocks ?? []).includes(season.reward) };
    }
    /** All three goals done → this month's reward is added to the player's unlocks (once). */
    async checkSeason(userId, day) {
      const u = await this.store.findById(userId);
      if (!u) return null;
      const m = await this.month(u, day);
      if (!m.done || m.unlocked) return null;
      await this.store.update(u.id, { unlocks: [...u.unlocks ?? [], m.reward] });
      return m.reward;
    }
    async page(u, day) {
      const score3 = (c) => c.state === "review" ? 1e3 + c.intervalDays : c.state === "new" ? 0 : 1;
      const cards = /* @__PURE__ */ new Map();
      for (const c of await this.store.cards(u.id)) {
        const was = cards.get(c.vocabId);
        if (!was || score3(c) > score3(was)) cards.set(c.vocabId, c);
      }
      const mastery = Object.fromEntries(LEVELS.map((l) => [l, []]));
      for (const v of VOCAB) {
        const c = cards.get(v.id);
        const m = !c ? Mastery.Unseen : c.state === "new" ? Mastery.New : c.state === "review" ? c.intervalDays >= MASTERED_DAYS ? Mastery.Mastered : Mastery.Learned : Mastery.Learning;
        mastery[studyLevelOf(v)]?.push([v.kanji, m, progressOf(c)]);
      }
      return { activity: await this.store.activity(u.id, shiftDay(day, -26 * 7)), mastery, month: await this.month(u, day) };
    }
  };

  // src/shared/rng.ts
  function seeded(seed2) {
    let a = seed2 >>> 0;
    return () => {
      a = a + 1831565813 >>> 0;
      let t = a;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  var hash = (s) => [...s].reduce((h4, c) => Math.imul(h4 ^ c.charCodeAt(0), 16777619) >>> 0, 2166136261);
  var seededRng = (key) => seeded(hash(key));

  // src/server/study/StudyService.ts
  var DAILY_NEW = 25;
  var DAILY_NEW_MIN = 10;
  var DAILY_NEW_MAX = 150;
  var BADGES_MAX = 3;
  var CUSTOM_ID = /^u:[0-9a-f-]{13}$/;
  var AI_XP_FACTOR = 0.5;
  var fromVocab = (v) => ({ id: v.id, kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: studyLevelOf(v), custom: false });
  var fromCustom = (w) => ({ id: w.id, kanji: w.kanji, reading: w.reading, meaning: w.meaning, level: "N5", custom: true });
  var picUrl = (u) => u.avatarV > 0 ? `/api/avatar/${u.id}?v=${u.avatarV}` : null;
  var MAX_AVATAR_BYTES = 60 * 1024;
  var StudyError = class extends Error {
    constructor(message, status = 400) {
      super(message);
      __publicField(this, "status", status);
    }
  };
  function resolveToday(clientToday, at = now()) {
    const server = new Date(at).toISOString().slice(0, 10);
    if (typeof clientToday !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(clientToday)) return server;
    const diff = Math.abs(Date.parse(clientToday) - Date.parse(server));
    return diff <= 864e5 ? clientToday : server;
  }
  var UNDO_MAX = 30;
  var StudyService = class {
    constructor(store3, rng = Math.random) {
      __publicField(this, "store", store3);
      __publicField(this, "rng", rng);
      __publicField(this, "progress");
      __publicField(this, "undos", /* @__PURE__ */ new Map());
      this.progress = new ProgressService(store3);
    }
    async profile(u, now2 = now()) {
      if ((await this.grantAchievements(u.id)).length) u = await this.store.findById(u.id) ?? u;
      if ((u.tutorialDone ?? true) && !(u.unlocks ?? []).includes(BETA_BORDER)) u = await this.store.update(u.id, { unlocks: [...u.unlocks ?? [], BETA_BORDER] }) ?? u;
      const learned = await this.store.learnedCount(u.id);
      const learnedToday = now2 < u.critExpires ? u.critCount : 0;
      return {
        xp: u.xp,
        level: levelOf(u.xp),
        crit: dailyCrit(u.critCount, u.critExpires, now2),
        learned,
        learnedToday,
        background: u.background,
        studyLevels: u.studyLevels,
        wins: u.wins,
        losses: u.losses,
        pic: picUrl(u),
        flame: u.flame ?? "blue",
        staff: u.staff ?? "verdant",
        strugglingDue: await this.strugglingDue(u.id, now2),
        streak: liveStreak(u, new Date(now2).toISOString().slice(0, 10)),
        bestStreak: u.bestStreak ?? 0,
        tutorialDone: u.tutorialDone ?? true,
        unlocks: u.unlocks ?? [],
        month: await this.progress.month(u, playerDay(u, now2)),
        dailyNew: u.dailyNew ?? DAILY_NEW,
        badges: u.badges ?? [],
        tasks: await this.progress.tasks(u.id, playerDay(u, now2)),
        streakDay: u.streakDay ?? null,
        border: u.border ?? "none"
      };
    }
    /**
     * Daily login streak: called when the app opens (with the player's local date). Same day: nothing;
     * the day after: +1; a gap: back to 1.
     */
    async touchLogin(u, today2) {
      if (u.loginDay === today2) return u;
      const rec = await this.store.update(u.id, { loginDay: today2 }) ?? u;
      await this.progress.record(u.id, today2, { login: true });
      return await this.store.findById(u.id) ?? rec;
    }
    /** A daily task done in the browser (the JLPT quiz, a reading passage) — counts towards today's streak. */
    async recordTask(u, task, today2, score3, total) {
      if (task !== "quiz" && task !== "passage") throw new StudyError("Unknown task");
      if (typeof score3 === "number" && typeof total === "number" && !taskPassed(task, score3, total)) return this.profile(u);
      await this.progress.record(u.id, today2, task === "quiz" ? { quizzes: 1 } : { passages: 1 });
      return this.profile(await this.store.findById(u.id) ?? u);
    }
    /** Struggling spells waiting to be studied (new, learning or due). */
    async strugglingDue(userId, now2 = now()) {
      const c = counts((await this.store.cards(userId)).filter((x) => deckOf(x) === "struggling" && VOCAB_BY_ID.has(x.vocabId)), now2);
      return c.new + c.learning + c.due;
    }
    /** null, or why this player may not start a game right now (too many struggling spells waiting). Admins are never locked. */
    async playLock(u) {
      if (u.role === "admin") return null;
      const n = await this.strugglingDue(u.id);
      return n > STUDY_LOCK ? `You have ${n} struggling spells waiting \u2014 study them down to ${STUDY_LOCK} to play again (Study spells \u2192 Struggling).` : null;
    }
    /** Colour of the combo flames (Purple from level 5; admins have all). */
    async setFlame(u, f2) {
      if (!isFlame(f2)) throw new StudyError("Unknown flame");
      const def = FLAMES.find((x) => x.id === f2);
      if (u.role !== "admin" && !flameUnlocked(f2, u.xp, u.unlocks)) throw new StudyError(def.season ? "A monthly reward: complete that month's goals" : `Unlocks at level ${def.level}`, 403);
      await this.store.update(u.id, { flame: f2 });
    }
    /** Magic staff skin (unlocked by your best login streak; admins have all). */
    async setStaff(u, s) {
      if (!isStaff(s)) throw new StudyError("Unknown staff");
      const def = STAFFS.find((x) => x.id === s);
      if (u.role !== "admin" && !staffUnlocked(s, u.bestStreak ?? 0, u.unlocks)) throw new StudyError(def.season ? "A monthly reward: complete that month's goals" : `Unlocks with a ${def.streak}-day daily streak`, 403);
      await this.store.update(u.id, { staff: s });
    }
    /** Today's crit chance (1% + 1% per spell learned today, max 50%; back to 1% at the player's midnight). */
    async crit(userId, now2 = now()) {
      const u = await this.store.findById(userId);
      return u ? dailyCrit(u.critCount, u.critExpires, now2) : CRIT_BASE;
    }
    /** What other players see when they click your name. */
    async publicProfile(id) {
      const u = await this.store.findById(id);
      if (!u || u.banned) return null;
      return { id: u.id, name: u.username, level: levelOf(u.xp), wins: u.wins, losses: u.losses, learned: await this.store.learnedCount(u.id), pic: picUrl(u), since: u.createdAt, streak: liveStreak(u, new Date(now()).toISOString().slice(0, 10)), bestStreak: u.bestStreak ?? 0, badges: u.badges ?? [], border: u.border ?? "none" };
    }
    matches(userId) {
      return this.store.matches(userId, MATCH_HISTORY_LIMIT);
    }
    match(userId, id) {
      return this.store.match(userId, id);
    }
    /** 0.9.9.4: your own data, for the app to keep working offline (client/offline). */
    async snapshot(u, dailyDay) {
      const at = now();
      const day = new Date(at).toISOString().slice(0, 10);
      const list = await this.store.matches(u.id, MATCH_HISTORY_LIMIT);
      const matches = (await Promise.all(list.map((m) => this.store.match(u.id, m.id)))).filter((m) => !!m);
      return {
        v: SNAPSHOT_V,
        at,
        user: { ...u, passwordHash: "" },
        cards: await this.store.cards(u.id),
        custom: await this.store.customWords(u.id),
        matches,
        activity: await this.store.activity(u.id, shiftDay(day, -400)),
        daily: dailyDay ? { day: dailyDay, result: await this.store.daily(dailyDay, u.id) } : null
      };
    }
    /** Profile picture: a small PNG/JPEG/WebP (the browser resizes it to 128×128 before upload). null removes it. */
    async setAvatar(u, dataUrl) {
      if (dataUrl === null) {
        await this.store.setAvatar(u.id, null);
        return;
      }
      const m = typeof dataUrl === "string" ? /^data:(image\/(?:png|jpeg|webp));base64,([A-Za-z0-9+/]+={0,2})$/.exec(dataUrl) : null;
      if (!m) throw new StudyError("Pictures must be PNG, JPEG or WebP");
      const data = Buffer.from(m[2], "base64");
      if (data.length > MAX_AVATAR_BYTES) throw new StudyError("Picture is too large");
      const magic = m[1] === "image/png" ? data.subarray(0, 4).toString("hex") === "89504e47" : m[1] === "image/jpeg" ? data.subarray(0, 3).toString("hex") === "ffd8ff" : data.subarray(0, 4).toString("latin1") === "RIFF" && data.subarray(8, 12).toString("latin1") === "WEBP";
      if (!magic) throw new StudyError("That file is not a valid picture");
      await this.store.setAvatar(u.id, { mime: m[1], data });
    }
    avatar(id) {
      return this.store.getAvatar(id);
    }
    async setBackground(u, bg2) {
      if (!isBackground(bg2)) throw new StudyError("Unknown background");
      if (u.role !== "admin" && !unlocked(bg2, u.xp)) throw new StudyError(`Unlocks at level ${BACKGROUNDS.find((b) => b.id === bg2).level}`, 403);
      await this.store.update(u.id, { background: bg2 });
    }
    /** "All spells": pick the levels that feed the daily new cards. Picking levels adds today's batch right away. */
    async setStudyLevels(u, raw, today2) {
      const picked4 = Array.isArray(raw) ? LEVELS.filter((l) => raw.includes(l)) : [];
      const levels = isKanaBeginner(u.unlocks) && u.role !== "admin" && picked4.length ? levelsFor(picked4, true) : picked4;
      const per = splitDaily(levels, clampDaily(u.dailyNew));
      const rec = await this.store.update(u.id, { studyLevels: levels, lastNewDate: levels.length ? u.lastNewDate : null, dailyPlan: { ...planOf(u, today2), per } });
      if (levels.length) await this.addDaily(rec, today2);
    }
    /**
     * 0.9.9.4.4 — "All spells": how many new words of each level are added a day (0–150 each; 0 = not that level).
     * Raising a number today adds the difference right away.
     */
    async setDailyLevels(u, raw, today2) {
      const beginner = isKanaBeginner(u.unlocks) && u.role !== "admin";
      const per = {};
      const obj = raw && typeof raw === "object" ? raw : {};
      const old = planOf(u, today2).per;
      for (const l of LEVELS) {
        if (beginner && !isKanaLevel2(l)) {
          if (old[l]) per[l] = old[l];
          continue;
        }
        const n = Math.round(Number(obj[l]));
        if (!Number.isFinite(n) || n <= 0) continue;
        per[l] = Math.min(DAILY_LEVEL_MAX, n);
      }
      const levels = openLevels(per, beginner);
      const total = levels.reduce((a, l) => a + per[l], 0);
      const rec = await this.store.update(u.id, {
        studyLevels: levels,
        dailyNew: clampDaily(total || u.dailyNew),
        lastNewDate: levels.length ? u.lastNewDate : null,
        dailyPlan: { ...planOf(u, today2), per }
      });
      if (levels.length) await this.addDaily(rec, today2);
      return per;
    }
    /** "I've mastered hiragana" (Settings) — or, for a new player who says they're a beginner, not yet. */
    async setKanaMastered(u, mastered) {
      const rest = (u.unlocks ?? []).filter((x) => x !== KANA_BEGINNER);
      await this.store.update(u.id, { unlocks: mastered ? rest : [...rest, KANA_BEGINNER] });
      if (mastered && isKanaBeginner(u.unlocks)) await this.grantAchievements(u.id, void 0, ["graduate"]);
      const plan = planOf(u, "");
      const per = { ...plan.per };
      if (!mastered && !LEVELS.some((l) => (per[l] ?? 0) > 0)) per.KANA = clampDaily(u.dailyNew);
      await this.store.update(u.id, { studyLevels: openLevels(per, !mastered), dailyPlan: { ...plan, per } });
    }
    /**
     * Adds today's new words to All spells: for each level, its "new a day" (0.9.9.4.4; before: one number shared
     * by the levels you ticked); tops up if you raised a number.
     */
    async addDaily(u, today2) {
      const plan = planOf(u, today2);
      const done2 = { ...plan.done };
      const have = new Set((await this.store.cards(u.id)).filter((c) => deckOf(c) === "all").map((c) => c.vocabId));
      const now2 = now();
      let added = 0;
      const beginner = isKanaBeginner(u.unlocks) && u.role !== "admin";
      for (const l of u.studyLevels) {
        if (beginner && !isKanaLevel2(l)) continue;
        const want = Math.max(0, (plan.per[l] ?? 0) - (done2[l] ?? 0));
        if (!want) continue;
        const fresh = shuffle2(VOCAB.filter((v) => studyLevelOf(v) === l && !have.has(v.id)), seededRng(`${u.id}:${today2}:${l}:${done2[l] ?? 0}`)).slice(0, want);
        const n = (await this.store.addCards(u.id, fresh.map((v) => newCard(v.id, now2, "all")))).length;
        done2[l] = (done2[l] ?? 0) + (fresh.length < want ? want : n);
        added += n;
      }
      const before = u.lastNewDate === today2 ? u.newToday ?? 0 : 0;
      await this.store.update(u.id, { lastNewDate: today2, newToday: before + added, newNotice: u.newNotice + added, dailyPlan: { per: plan.per, day: today2, done: done2 } });
      return added;
    }
    /** Study → "New spells a day" (10–150), older app versions: shared by the ticked levels. */
    async setDailyNew(u, raw, today2) {
      const n = clampDaily(Number(raw));
      const rec = await this.store.update(u.id, { dailyNew: n, dailyPlan: { ...planOf(u, today2), per: splitDaily(u.studyLevels, n) } });
      if (rec.studyLevels.length && rec.lastNewDate === today2) await this.addDaily(rec, today2);
      return n;
    }
    // ── decks: word lists, removing, adding, custom words ─────────────────────
    async words(userId) {
      const custom = await this.store.customWords(userId);
      return new Map(custom.map((w) => [w.id, fromCustom(w)]));
    }
    info(id, custom) {
      const v = VOCAB_BY_ID.get(id);
      return v ? fromVocab(v) : custom.get(id) ?? null;
    }
    /** Study → open a deck: every word in it, newest first. */
    async deckList(u, deck2) {
      if (!isDeck(deck2)) throw new StudyError("Unknown deck");
      if (deck2 === "ono") await this.fillOno(u.id);
      const custom = await this.words(u.id);
      return (await this.store.cards(u.id)).filter((c) => deckOf(c) === deck2).flatMap((c) => {
        const w = this.info(c.vocabId, custom);
        return w ? [{ vocabId: w.id, kanji: w.kanji, reading: w.reading, meaning: w.meaning, level: w.level, custom: w.custom, state: c.state, addedAt: c.addedAt ?? null, due: c.due, intervalDays: c.intervalDays }] : [];
      }).sort((a, b) => (b.addedAt ?? 0) - (a.addedAt ?? 0));
    }
    async removeFromDeck(u, deck2, ids) {
      if (!isDeck(deck2)) throw new StudyError("Unknown deck");
      const list = Array.isArray(ids) ? ids.filter((x) => typeof x === "string").slice(0, 500) : [];
      const n = await this.store.removeCards(u.id, deck2, list);
      if (deck2 === "custom") {
        const still = new Set((await this.store.cards(u.id)).map((c) => c.vocabId));
        for (const id of list) if (id.startsWith(CUSTOM_PREFIX) && !still.has(id)) await this.store.deleteCustomWord(u.id, id);
      }
      return n;
    }
    /** Put words in a deck (dictionary or your custom words). Returns the ids that were new there. */
    async addToDeck(u, deck2, ids) {
      if (!isDeck(deck2)) throw new StudyError("Unknown deck");
      const custom = await this.words(u.id);
      const list = (Array.isArray(ids) ? ids : []).filter((x) => typeof x === "string" && !!this.info(x, custom)).slice(0, 500);
      const now2 = now();
      return this.store.addCards(u.id, [...new Set(list)].map((id) => newCard(id, now2, deck2)));
    }
    /** Search the dictionary (kanji, kana reading or English meaning) for Custom spells. */
    search(q, limit = 20) {
      const s = String(q ?? "").trim().toLowerCase().normalize("NFKC");
      if (!s) return [];
      const out = [];
      const exact = [];
      for (const v of VOCAB) {
        const reading = displayReading(v);
        const hit2 = v.kanji === s || reading === s ? "exact" : v.kanji.includes(s) || reading.includes(s) || v.meaning.toLowerCase().includes(s) ? "part" : null;
        if (hit2 === "exact") exact.push(fromVocab(v));
        else if (hit2 && out.length < limit) out.push(fromVocab(v));
      }
      return [...exact, ...out].slice(0, limit);
    }
    /**
     * Custom spells: add a word. A dictionary word (by its id, or kanji [+ reading]) is used as it is;
     * anything else becomes your own word — then a reading (kana) and a meaning are needed.
     */
    async addCustom(u, body) {
      if (typeof body.vocabId === "string" && VOCAB_BY_ID.has(body.vocabId)) return { added: (await this.addToDeck(u, "custom", [body.vocabId])).length > 0, word: fromVocab(VOCAB_BY_ID.get(body.vocabId)) };
      const kanji = String(body.kanji ?? "").trim().normalize("NFKC").slice(0, 16);
      const reading = String(body.reading ?? "").trim().normalize("NFKC").slice(0, 32);
      const meaning2 = String(body.meaning ?? "").trim().slice(0, 120);
      if (!kanji) throw new StudyError("Write the word (kanji or kana)");
      const known = VOCAB.find((v) => v.kanji === kanji && (!reading || isCorrectReading(reading, [v.reading, ...v.altReadings ?? []])));
      if (known) return { added: (await this.addToDeck(u, "custom", [known.id])).length > 0, word: fromVocab(known) };
      if (!/^[぀-ゟ゠-ヿー]+$/.test(reading)) throw new StudyError("Not in the dictionary \u2014 add its reading in kana (e.g. \u307E\u307B\u3046)");
      if (!meaning2) throw new StudyError("Add a meaning");
      const mine = await this.store.customWords(u.id);
      if (mine.length >= 1e3) throw new StudyError("Custom spells are full (1000 words)");
      const dupe = mine.find((w2) => w2.kanji === kanji && w2.reading === reading);
      const asked = typeof body.id === "string" && CUSTOM_ID.test(body.id) && !mine.some((x) => x.id === body.id) ? body.id : null;
      const w = dupe ?? { id: asked ?? CUSTOM_PREFIX + randomUUID().slice(0, 13), kanji, reading, meaning: meaning2, createdAt: now() };
      if (!dupe) await this.store.addCustomWord(u.id, w);
      return { added: (await this.addToDeck(u, "custom", [w.id])).length > 0, word: fromCustom(w) };
    }
    /**
     * JLPT-style quiz from the words you have studied (any deck, answered at least once): reading, meaning
     * or "which kanji" — 4 choices, the wrong ones taken from the same level.
     */
    async quiz(u, n = 10) {
      const custom = await this.words(u.id);
      const cards = await this.store.cards(u.id);
      const studied = /* @__PURE__ */ new Map();
      for (const c of cards) if (c.reps > 0 || c.state !== "new") {
        const w = this.info(c.vocabId, custom);
        if (w && w.level !== "ONO") studied.set(w.id, w);
      }
      if (studied.size < 4) for (const c of cards) {
        const w = this.info(c.vocabId, custom);
        if (w && w.level !== "ONO") studied.set(w.id, w);
      }
      const pool = shuffle2([...studied.values()], this.rng).slice(0, Math.max(1, Math.min(30, n)));
      return buildQuiz(pool, VOCAB, this.rng, (id) => VOCAB_BY_ID.get(id));
    }
    /** Quiz / results: words you got wrong → a deck of your choice. */
    async saveMissed(u, deck2, ids) {
      return this.addToDeck(u, deck2, ids);
    }
    /** Opening the study screen: top up today's new cards, report counts, and hand over any "new spells" notice once. */
    async summary(u, today2, now2 = now()) {
      if (u.studyLevels.length && u.lastNewDate !== today2) await this.addDaily(u, today2);
      const fresh = await this.store.findById(u.id);
      const notice = fresh.newNotice;
      if (notice) await this.store.update(u.id, { newNotice: 0 });
      const custom = await this.words(u.id);
      await this.fillOno(u.id);
      const cards = (await this.store.cards(u.id)).filter((c) => !!this.info(c.vocabId, custom));
      return {
        studyLevels: fresh.studyLevels,
        notice,
        decks: { all: counts(cards.filter((c) => deckOf(c) === "all"), now2), struggling: counts(cards.filter((c) => deckOf(c) === "struggling"), now2), custom: counts(cards.filter((c) => deckOf(c) === "custom"), now2), ono: counts(cards.filter((c) => deckOf(c) === "ono"), now2) },
        dailyNew: fresh.dailyNew ?? DAILY_NEW,
        dailyByLevel: planOf(fresh, today2).per,
        studyXpToday: (await this.store.activity(u.id, today2)).find((a) => a.day === today2)?.studyXp ?? 0,
        profile: await this.profile(fresh)
      };
    }
    /** Cards to study now, Anki order: (re)learning due → reviews due → new. */
    async queue(u, deck2, now2 = now(), limit = 500) {
      if (!isDeck(deck2)) throw new StudyError("Unknown deck");
      const custom = await this.words(u.id);
      if (deck2 === "ono") await this.fillOno(u.id);
      const cards = (await this.store.cards(u.id)).filter((c) => deckOf(c) === deck2 && !!this.info(c.vocabId, custom));
      const rank = (c) => c.state === "learning" || c.state === "relearning" ? 0 : c.state === "review" ? 1 : 2;
      const order = deck2 === "ono" ? new Map(shuffle2(cards.map((c) => c.vocabId).sort(), seededRng(`${u.id}:ono`)).map((id, i) => [id, i])) : null;
      let fresh = 0;
      return cards.filter((c) => c.state === "new" || isDue(c, now2)).sort((a, b) => rank(a) - rank(b) || (order && a.state === "new" && b.state === "new" ? order.get(a.vocabId) - order.get(b.vocabId) : a.due - b.due)).filter((c) => !order || c.state !== "new" || fresh++ < ONO_NEW_SESSION).slice(0, limit).map((c) => this.item(c, now2, custom));
    }
    async review(u, vocabId, rating, now2 = now(), today2 = resolveToday(void 0, now2), tzOffsetMin = 0, deck2 = "all") {
      if (typeof vocabId !== "string" || !RATINGS.includes(rating)) throw new StudyError("Bad review");
      const d = isDeck(deck2) ? deck2 : "all";
      const card = await this.store.card(u.id, d, vocabId);
      if (!card) throw new StudyError("No such card", 404);
      const next3 = answer(card, rating, now2);
      const todayXp = (await this.store.activity(u.id, today2)).find((a) => a.day === today2)?.studyXp ?? 0;
      const xp = todayXp + STUDY_XP <= STUDY_XP_DAILY ? STUDY_XP : 0;
      if (xp) {
        await this.store.addXp(u.id, xp);
        await this.store.addActivity(u.id, today2, { studyXp: xp, xp });
      }
      const stack = this.undos.get(u.id) ?? [];
      stack.push({ deck: d, before: card, today: today2, counted: rating !== "again", critCounted: rating !== "again" && card.critDay !== today2, xp });
      if (stack.length > UNDO_MAX) stack.shift();
      this.undos.set(u.id, stack);
      if (rating !== "again" && card.critDay !== today2) {
        next3.critDay = today2;
        const fresh = await this.store.findById(u.id) ?? u;
        const newDay = now2 >= fresh.critExpires;
        await this.store.update(u.id, {
          critCount: newDay ? 1 : fresh.critCount + 1,
          critExpires: newDay ? nextLocalMidnight(today2, tzOffsetMin) : fresh.critExpires
        });
      }
      await this.store.saveCard(u.id, next3);
      if (rating !== "again") await this.progress.record(u.id, today2, { reviews: 1 });
      return { card: next3, crit: await this.crit(u.id, now2), xp };
    }
    /**
     * 0.9.9.4.4: "Undo" in a study session — the last answer to this card goes back to how it was (its schedule,
     * the day's review count and crit). Only the newest answer can be undone, one at a time.
     */
    async undo(u, vocabId, deck2 = "all") {
      const stack = this.undos.get(u.id) ?? [];
      const last3 = stack[stack.length - 1];
      const d = isDeck(deck2) ? deck2 : "all";
      if (!last3 || last3.before.vocabId !== vocabId || last3.deck !== d) throw new StudyError("Nothing to undo", 409);
      stack.pop();
      await this.store.saveCard(u.id, last3.before);
      if (last3.counted) await this.store.addActivity(u.id, last3.today, { reviews: -1 });
      if (last3.xp) {
        await this.store.addXp(u.id, -last3.xp);
        await this.store.addActivity(u.id, last3.today, { studyXp: -last3.xp, xp: -last3.xp });
      }
      if (last3.critCounted) {
        const fresh = await this.store.findById(u.id) ?? u;
        if (fresh.critCount > 0) await this.store.update(u.id, { critCount: fresh.critCount - 1 });
      }
      return { card: last3.before, crit: await this.crit(u.id) };
    }
    /** Admin page: XP, level, crit and study-set size for every account, plus where it's all saved. */
    async adminStats(rows2) {
      const stats = await this.store.cardStats();
      const users = rows2.map((u) => {
        const s = stats[u.id] ?? { cards: 0, learned: 0 };
        const xp = u.xp ?? 0;
        return { ...u, xp, level: levelOf(xp), crit: u.crit ?? CRIT_BASE, learned: s.learned, cards: s.cards };
      });
      return { users, storage: this.store.name, persistent: this.store.name === "postgres" || true };
    }
    /** Forfeits give nobody XP; matches with AI players give half. */
    async recordMatch(userId, outcome, accuracy, mode4, missedIds, forfeited = false, vsAi = false, record, seen2 = [], beatAdmin = false) {
      if (record) await this.store.addMatch(userId, record);
      const gained = forfeited ? 0 : Math.round(xpFor(outcome, accuracy, mode4) * (vsAi ? AI_XP_FACTOR : 1));
      const xp = gained ? await this.store.addXp(userId, gained) : (await this.store.findById(userId))?.xp ?? 0;
      await this.store.addResult(userId, outcome);
      const who = await this.store.findById(userId);
      if (who) await this.progress.record(userId, playerDay(who), { games: 1, wins: outcome === "win" ? 1 : 0, xp: gained });
      const words2 = [...new Set(missedIds.filter((id) => VOCAB_BY_ID.has(id)))];
      const added = new Set(words2.length ? await this.store.markStruggling(userId, words2, now()) : []);
      const missed = words2.map((id) => {
        const v = VOCAB_BY_ID.get(id);
        return { id, kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: v.level, added: added.has(id) };
      });
      const met = seen2.filter((id) => VOCAB_BY_ID.has(id));
      if (met.length) {
        const n = (await this.store.addCards(userId, met.map((id) => newCard(id, now(), "all")))).length;
        const u = n ? await this.store.findById(userId) : null;
        if (u) await this.store.update(userId, { newNotice: u.newNotice + n });
      }
      const st = record?.stats[userId];
      const achievements = await this.grantAchievements(userId, { mode: mode4, outcome, accuracy, attempts: st?.attempts ?? 0, bestCombo: st?.bestCombo ?? 0, forfeited, beatAdmin });
      return { gained, xp, achievements, missed };
    }
    /** Grants every achievement the player has now earned (plus `extra`); returns the new ones. */
    async grantAchievements(userId, match, extra = []) {
      const u = await this.store.findById(userId);
      if (!u) return [];
      const unlocks2 = u.unlocks ?? [];
      const facts = {
        wins: u.wins,
        level: levelOf(u.xp),
        bestStreak: u.bestStreak ?? 0,
        learned: await this.store.learnedCount(userId),
        friends: (await this.store.friends(userId)).filter((f2) => f2.status === "accepted").length,
        seasonal: unlocks2.filter((x) => x.startsWith("flame:") || x.startsWith("staff:")).length,
        match
      };
      const fresh = [.../* @__PURE__ */ new Set([...earnedAchievements(facts), ...extra])].filter((id) => !unlocks2.includes(ACH_PREFIX + id));
      if (fresh.length) await this.store.update(userId, { unlocks: [...unlocks2, ...fresh.map((id) => ACH_PREFIX + id)] });
      return fresh;
    }
    item(c, now2, custom) {
      const w = this.info(c.vocabId, custom);
      const ono = VOCAB_BY_ID.get(c.vocabId)?.ono;
      return { vocabId: w.id, kanji: w.kanji, reading: w.reading, meaning: w.meaning, level: w.level, state: c.state, intervals: previewIntervals(c, now2), custom: w.custom, ...ono ? { ono } : {} };
    }
    /** 0.9.9.4.4: the Onomatopoeia deck holds every onomatopoeia word — put them in when it is empty (new words too) */
    async fillOno(userId) {
      if ((await this.store.cards(userId)).some((c) => deckOf(c) === "ono")) return;
      const now2 = now();
      await this.store.addCards(userId, onoWords().map((v) => newCard(v.id, now2, "ono")));
    }
    /** Avatar border (Customize → Profile), unlocked by level; admins have all. */
    async setBorder(u, b) {
      if (!isBorder(b)) throw new StudyError("Unknown border");
      const def = BORDERS.find((x) => x.id === b);
      if (u.role !== "admin" && !borderUnlocked(b, levelOf(u.xp), u.unlocks)) throw new StudyError(def.unlock ? "Finish the tutorial to get the Beta border" : `Unlocks at level ${def.level}`, 403);
      await this.store.update(u.id, { border: b });
      return this.profile(await this.store.findById(u.id) ?? u);
    }
    /** Profile badges: up to 3 of your achievements, shown under your name. */
    async setBadges(u, raw) {
      const have = new Set((u.unlocks ?? []).filter((x) => x.startsWith(ACH_PREFIX)).map((x) => x.slice(ACH_PREFIX.length)));
      const list = [...new Set(Array.isArray(raw) ? raw.filter((x) => typeof x === "string") : [])];
      if (list.length > BADGES_MAX) throw new StudyError(`Pick up to ${BADGES_MAX} badges`);
      if (list.some((id) => !have.has(id))) throw new StudyError("You can only show achievements you have earned");
      await this.store.update(u.id, { badges: list });
      return list;
    }
  };
  var DAILY_LEVEL_MAX = 150;
  var STUDY_XP = 5;
  var STUDY_XP_DAILY = 500;
  var ONO_NEW_SESSION = 20;
  var onoWords = () => VOCAB.filter((v) => v.level === "ONO");
  function splitDaily(levels, total) {
    const per = {};
    levels.forEach((l, i) => {
      per[l] = Math.floor(total / levels.length) + (i < total % levels.length ? 1 : 0);
    });
    return per;
  }
  function openLevels(per, beginner) {
    return LEVELS.filter((l) => (per[l] ?? 0) > 0 && (!beginner || isKanaLevel2(l)));
  }
  var isKanaLevel2 = (l) => l === "KANA" || l === "KATA";
  function planOf(u, today2) {
    const per = u.dailyPlan?.per ?? splitDaily(u.studyLevels, clampDaily(u.dailyNew));
    if (u.dailyPlan?.day === today2) return { per, day: today2, done: { ...u.dailyPlan.done } };
    const legacy = !u.dailyPlan && u.lastNewDate === today2 && (u.newToday ?? 0) > 0;
    return { per, day: today2, done: legacy ? { ...per } : {} };
  }
  var clampDaily = (n) => Math.max(DAILY_NEW_MIN, Math.min(DAILY_NEW_MAX, Math.round(Number.isFinite(n) ? n : DAILY_NEW)));
  var dayBefore = (d) => new Date(Date.parse(d) - 864e5).toISOString().slice(0, 10);
  function liveStreak(u, today2) {
    if (!u.streakDay) return 0;
    return u.streakDay >= dayBefore(dayBefore(today2)) ? u.streak ?? 0 : 0;
  }
  function counts(cards, now2) {
    return {
      new: cards.filter((c) => c.state === "new").length,
      learning: cards.filter((c) => (c.state === "learning" || c.state === "relearning") && isDue(c, now2)).length,
      due: cards.filter((c) => c.state === "review" && isDue(c, now2)).length,
      total: cards.length
    };
  }

  // src/server/study/DailyService.ts
  init_vocab();
  init_vocab2();
  var DAILY_WORDS = 10;
  var DAILY_WORD_MS = 15e3;
  var GRACE_MS = 1500;
  var XP_PER_CORRECT = 30;
  var LEVEL_ORDER = ["N5", "N5", "N4", "N4", "N3", "N3", "N2", "N2", "N1", "N1"];
  function dailyWords(day) {
    const rnd2 = seeded(hash(`kanji-wizards:${day}`));
    const picked4 = [];
    for (const level2 of LEVEL_ORDER) {
      const pool = VOCAB.filter((v) => v.level === level2 && !picked4.includes(v) && /[一-鿿]/.test(v.kanji));
      picked4.push(pool[Math.floor(rnd2() * pool.length)]);
    }
    return picked4;
  }
  var DailyError = class extends Error {
    constructor(message, status = 400) {
      super(message);
      __publicField(this, "status", status);
    }
  };
  var DailyService = class {
    constructor(store3, progress, now2 = now) {
      __publicField(this, "store", store3);
      __publicField(this, "progress", progress);
      __publicField(this, "now", now2);
      __publicField(this, "attempts", /* @__PURE__ */ new Map());
      // userId → today's run in progress
      __publicField(this, "cache", null);
      /** 10 / 10: the 'Perfect Day' achievement (set in index.ts) */
      __publicField(this, "onPerfect");
    }
    today() {
      return new Date(this.now()).toISOString().slice(0, 10);
    }
    words(day) {
      if (this.cache?.day !== day) this.cache = { day, words: dailyWords(day) };
      return this.cache.words;
    }
    /** Today's board, your result (and then the words with their readings), and whether you can play. */
    async overview(u) {
      const day = this.today();
      const mine = await this.store.daily(day, u.id);
      const board = await this.store.dailyBoard(day, 20);
      const rank = mine ? await this.store.dailyBetter(day, mine.correct, mine.ms) + 1 : null;
      const words2 = mine ? this.words(day).map((v, i) => ({ id: v.id, kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: v.level, ok: mine.marks ? mine.marks[i] === "1" : null })) : null;
      return { day, total: DAILY_WORDS, wordMs: DAILY_WORD_MS, mine, rank, board: board.map(publicRow), words: words2, inProgress: this.attempts.get(u.id)?.day === day };
    }
    /** Start (or continue) today's run: returns the current word. */
    async start(u) {
      const day = this.today();
      if (await this.store.daily(day, u.id)) throw new DailyError("You already played today's challenge \u2014 come back tomorrow!", 409);
      let a = this.attempts.get(u.id);
      if (!a || a.day !== day) {
        a = { day, index: 0, shownAt: this.now(), correct: 0, ms: 0, marks: "" };
        this.attempts.set(u.id, a);
      }
      while (a.index < DAILY_WORDS && this.now() - a.shownAt > DAILY_WORD_MS + GRACE_MS) {
        a.ms += DAILY_WORD_MS;
        a.index++;
        a.marks += "0";
        a.shownAt = this.now();
      }
      if (a.index >= DAILY_WORDS) throw new DailyError("Time ran out on the remaining words \u2014 send your answers to finish.", 409);
      return this.view(a);
    }
    /** Answer the current word (empty text = skip). */
    async answer(u, raw) {
      const day = this.today();
      const a = this.attempts.get(u.id);
      if (!a || a.day !== day) throw new DailyError("Start the challenge first");
      const text = typeof raw === "string" ? raw.slice(0, 60) : "";
      const word2 = this.words(day)[a.index];
      const ms = Math.min(DAILY_WORD_MS, this.now() - a.shownAt);
      const inTime = this.now() - a.shownAt <= DAILY_WORD_MS + GRACE_MS;
      const correct = inTime && !!text.trim() && isCorrectReading(text, [word2.reading, ...word2.altReadings ?? []]);
      if (correct) a.correct++;
      a.ms += ms;
      a.index++;
      a.marks += correct ? "1" : "0";
      a.shownAt = this.now();
      const base = { correct, kanji: word2.kanji, reading: displayReading(word2), meaning: word2.meaning, ms };
      if (a.index < DAILY_WORDS) return { ...base, next: this.view(a), done: null };
      return { ...base, next: null, done: await this.finish(u, a) };
    }
    /** Abandoned runs finish themselves: whatever is left counts as missed. */
    async finishStale(u) {
      const a = this.attempts.get(u.id);
      if (!a || a.day !== this.today()) return null;
      a.ms += (DAILY_WORDS - a.index) * DAILY_WORD_MS;
      a.marks = a.marks.padEnd(DAILY_WORDS, "0");
      a.index = DAILY_WORDS;
      return this.finish(u, a);
    }
    async finish(u, a) {
      this.attempts.delete(u.id);
      const saved = await this.store.saveDaily(a.day, u.id, a.correct, a.ms, a.marks);
      if (saved) {
        const missed = this.words(a.day).filter((_, i) => a.marks[i] !== "1").map((v) => v.id);
        if (missed.length) await this.store.markStruggling(u.id, missed, this.now());
      }
      const xp = saved ? a.correct * XP_PER_CORRECT + (a.correct === DAILY_WORDS ? 100 : 0) : 0;
      if (xp) await this.store.addXp(u.id, xp);
      if (saved) await this.progress.record(u.id, playerDay(u, this.now()), { xp, challenges: 1 });
      if (saved && a.correct === DAILY_WORDS) await this.onPerfect?.(u.id);
      const rank = await this.store.dailyBetter(a.day, a.correct, a.ms) + 1;
      const players2 = (await this.store.dailyBoard(a.day, 1e5)).length;
      return { correct: a.correct, ms: a.ms, rank, players: players2, xp };
    }
    view(a) {
      const w = this.words(a.day)[a.index];
      return { index: a.index, total: DAILY_WORDS, kanji: w.kanji, level: w.level, timeLimitMs: DAILY_WORD_MS };
    }
  };
  var publicRow = (r2) => ({ id: r2.userId, name: r2.username, correct: r2.correct, ms: r2.ms });

  // src/server/study/SocialService.ts
  var SocialError = class extends Error {
    constructor(message, status = 400) {
      super(message);
      __publicField(this, "status", status);
    }
  };

  // src/server/study/StoryService.ts
  init_vocab2();
  var HAN = /[\p{Script=Han}々]/u;
  var RUBY = /\[([^\]|]+)\|([^\]]+)\]/g;
  var KANA2 = /^[぀-ゟ゠-ヿー]+$/;
  var stemOf = (kanji) => {
    const last3 = Math.max(...[...kanji].map((c, i) => HAN.test(c) ? i : -1));
    return last3 < 0 ? kanji.replace(/[るうくすつぬむぶぐいだなした]$/, "") || kanji : [...kanji].slice(0, last3 + 1).join("");
  };
  function normalizeStory(s, words2) {
    const st = s;
    if (!st || typeof st !== "object" || !Array.isArray(st.lines) || !st.lines.length) return "no lines";
    if (st.lines.length > 40) return "too many lines";
    const str = (x) => typeof x === "string" ? x.trim() : "";
    const fixRuby = (t2) => t2.replace(RUBY, (m, base, rt) => HAN.test(base) && KANA2.test(rt) ? m : base);
    const stems = words2.map((w) => stemOf(w.kanji));
    const used = /* @__PURE__ */ new Set();
    const lines2 = [];
    for (const raw of st.lines) {
      let ja = fixRuby(str(raw?.ja));
      const en = str(raw?.en), ru = str(raw?.ru) || en;
      if (!ja) continue;
      if (ja.length > 240) return "too long";
      const ws = [];
      ja = ja.replace(/【([^】]*)】/g, (m, inner) => {
        const written2 = inner.replace(RUBY, "$1");
        let best = -1;
        words2.forEach((_, i) => {
          if (!used.has(i) && stems[i] && written2.startsWith(stems[i]) && (best < 0 || stems[i].length > stems[best].length)) best = i;
        });
        if (best < 0) return inner;
        used.add(best);
        ws.push(best);
        return m;
      });
      lines2.push({ ja, en, ru, words: ws });
    }
    const missing = words2.map((w, i) => used.has(i) ? "" : w.kanji).filter(Boolean);
    if (missing.length) return `missing ${missing.join(" ")}`;
    const t = st.title ?? {};
    return { title: { ja: fixRuby(str(t.ja)), en: str(t.en), ru: str(t.ru) || str(t.en) }, lines: lines2 };
  }
  function prompt(words2) {
    const list = words2.map((w, i) => `${i + 1}. ${w.kanji} (${w.reading}) \u2014 ${w.meaning}`).join("\n");
    return `Write ONE short, simple, coherent story in Japanese for a learner (about ${Math.max(6, words2.length + 2)}\u2013${words2.length * 2} short sentences). It must use every one of these ${words2.length} words, each exactly once, woven naturally into the story so that the context shows what the word means. The words should not each get their own separate sentence \u2014 it is one flowing story with a small cast, one setting and a clear little plot from beginning to end; a sentence may hold two of the words, and some sentences may hold none.

Words:
${list}

Format rules for the "ja" text (very important):
- Write every kanji with its furigana as [\u6F22\u5B57|\u304B\u3093\u3058] \u2014 e.g. [\u4ECA\u65E5|\u304D\u3087\u3046]\u306F[\u5BFA|\u3066\u3089]\u3067 \u2014 never a kanji outside these brackets.
- Kana is written as it is, never in brackets.
- Wrap each of the words above, where it appears, in \u3010\u3011 together with its okurigana or conjugation \u2014 e.g. \u3010[\u7948|\u3044\u306E]\u3063\u305F\u3011 or \u3010[\u9759|\u3057\u305A]\u304B\u306A\u3011. Use \u3010\u3011 only for those words, once each.
- Keep the grammar simple (JLPT N5\u2013N4 where possible, apart from the words themselves).

Answer with JSON only, no other text:
{"title":{"ja":"\u2026","en":"\u2026","ru":"\u2026"},"lines":[{"ja":"one sentence","en":"its English translation","ru":"its Russian translation"}]}
"lines" are the story's sentences in order. The title's "ja" uses the same furigana format and has no \u3010\u3011.`;
  }
  function providerFromEnv(env = process.env) {
    const model = env.STORY_MODEL || void 0;
    if (env.GEMINI_API_KEY) return { kind: "gemini", key: env.GEMINI_API_KEY, model: model ?? "gemini-flash-lite-latest" };
    if (env.ANTHROPIC_API_KEY) return { kind: "anthropic", key: env.ANTHROPIC_API_KEY, model: model ?? "claude-haiku-5-5" };
    if (env.OPENAI_API_KEY) return { kind: "openai", key: env.OPENAI_API_KEY, model: model ?? "gpt-4o-mini", baseUrl: (env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "") };
    return null;
  }
  var geminiWay = /* @__PURE__ */ new Map();
  async function complete(p, text, signal) {
    const post = async (url, headers, body) => {
      const r2 = await fetch(url, { method: "POST", signal, headers: { "content-type": "application/json", ...headers }, body: JSON.stringify(body) });
      if (!r2.ok) throw new Error(`${p.kind} API ${r2.status}: ${(await r2.text()).slice(0, 200)}`);
      return r2.json();
    };
    if (p.kind === "gemini") {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(p.model)}:generateContent`;
      const base = { temperature: 0.9, maxOutputTokens: 8192 };
      const ways = [
        { ...base, responseMimeType: "application/json", thinkingConfig: { thinkingLevel: "minimal" } },
        { ...base, responseMimeType: "application/json", thinkingConfig: { thinkingBudget: 0 } },
        { ...base, responseMimeType: "application/json" },
        base
      ];
      let d2;
      for (let i = geminiWay.get(p.model) ?? 0; ; i++) {
        try {
          d2 = await post(url, { "x-goog-api-key": p.key }, { contents: [{ role: "user", parts: [{ text }] }], generationConfig: ways[i] });
          geminiWay.set(p.model, i);
          break;
        } catch (e) {
          if (i + 1 >= ways.length || !/ 400:/.test(e.message) || /API[ _]KEY/i.test(e.message)) throw e;
        }
      }
      return (d2.candidates?.[0]?.content?.parts ?? []).map((x) => x.text ?? "").join("");
    }
    if (p.kind === "anthropic") {
      const d2 = await post(
        "https://api.anthropic.com/v1/messages",
        { "x-api-key": p.key, "anthropic-version": "2023-06-01" },
        { model: p.model, max_tokens: 4e3, messages: [{ role: "user", content: text }] }
      );
      return d2.content?.find((c) => c.type === "text")?.text ?? "";
    }
    const d = await post(
      `${p.baseUrl}/chat/completions`,
      { authorization: `Bearer ${p.key}` },
      { model: p.model, messages: [{ role: "user", content: text }], response_format: { type: "json_object" }, temperature: 0.9 }
    );
    return d.choices?.[0]?.message?.content ?? "";
  }
  var StoryService = class {
    constructor(provider2 = providerFromEnv(), perDay = 40, allPerDay = Number(process.env.STORY_DAILY_MAX) || 400) {
      __publicField(this, "provider", provider2);
      __publicField(this, "perDay", perDay);
      __publicField(this, "allPerDay", allPerDay);
      __publicField(this, "cache", /* @__PURE__ */ new Map());
      /** per player and day ('user|day'): stories had and AI calls made (0.9.9.4.4.7: failed calls are capped too) */
      __publicField(this, "used", /* @__PURE__ */ new Map());
      /** players with a story being written — one at a time each */
      __publicField(this, "busy", /* @__PURE__ */ new Set());
      __publicField(this, "all", { day: "", n: 0 });
    }
    get enabled() {
      return !!this.provider;
    }
    get describe() {
      return this.provider ? `${this.provider.kind} \xB7 ${this.provider.model}` : "off";
    }
    /** The words as the story should use them (dictionary entries win over what the browser sent). */
    static clean(raw) {
      const arr = Array.isArray(raw) ? raw.slice(0, 8) : [];
      return arr.flatMap((x) => {
        const v = x && typeof x.id === "string" ? VOCAB_BY_ID.get(x.id) : void 0;
        if (v) return [{ id: v.id, kanji: v.kanji, reading: v.reading, meaning: v.meaning }];
        const k = String(x?.kanji ?? "").slice(0, 16), r2 = String(x?.reading ?? "").slice(0, 32), m = String(x?.meaning ?? "").slice(0, 80);
        return k && r2 && m ? [{ id: typeof x?.id === "string" ? x.id.slice(0, 40) : void 0, kanji: k, reading: r2, meaning: m }] : [];
      });
    }
    /** How many stories this player has had written today, and the cap (0.9.9.4.4.5: shown next to "New passage"). */
    usage(userId, today2) {
      return { enabled: this.enabled, used: this.used.get(`${userId}|${today2}`)?.n ?? 0, limit: this.perDay };
    }
    /**
     * One story with these words, or why there isn't one ('off', 'limit', 'busy' — everyone's cap —, or what went
     * wrong). A story already written for the same words comes from the cache and isn't counted.
     */
    async story(userId, words2, today2) {
      if (!this.enabled) return { story: null, why: "off" };
      if (words2.length < 2) return { story: null, why: "few words" };
      const key = words2.map((w) => w.id ?? w.kanji).sort().join(",");
      const hit2 = this.cache.get(key);
      if (hit2) return { story: hit2 };
      const k = `${userId}|${today2}`;
      if (!this.used.has(k)) {
        if (this.used.size > 2e4) this.used.clear();
        this.used.set(k, { n: 0, tries: 0 });
      }
      const u = this.used.get(k);
      if (u.n >= this.perDay || u.tries >= Math.max(20, this.perDay * 3)) return { story: null, why: "limit" };
      const serverDay = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      if (this.all.day !== serverDay) this.all = { day: serverDay, n: 0 };
      if (this.all.n >= this.allPerDay) return { story: null, why: "busy" };
      if (this.busy.has(userId)) return { story: null, why: "wait" };
      this.busy.add(userId);
      try {
        return await this.write(u, key, words2);
      } finally {
        this.busy.delete(userId);
      }
    }
    async write(u, key, words2) {
      let why = "";
      const start = Date.now();
      for (let attempt = 0; attempt < 2 && (attempt === 0 || Date.now() - start < 3e4); attempt++) {
        try {
          u.tries++;
          const s = await this.ask(words2);
          const st = normalizeStory(s, words2);
          if (typeof st !== "string") {
            this.all.n++;
            u.n++;
            if (this.cache.size > 500) this.cache.delete(this.cache.keys().next().value);
            this.cache.set(key, st);
            return { story: st };
          }
          why = st;
          console.warn("story rejected:", st);
        } catch (e) {
          why = e.name === "AbortError" ? "timeout" : e.message;
          console.warn("story failed:", why);
          if (/ 4\d\d:/.test(why) && !/ 429:/.test(why)) break;
        }
      }
      return { story: null, why: why.slice(0, 300) };
    }
    async ask(words2) {
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 55e3);
      try {
        const text = await complete(this.provider, prompt(words2), ctl.signal);
        const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
        return JSON.parse(json);
      } finally {
        clearTimeout(t);
      }
    }
  };

  // src/server/router.ts
  var MAX_BODY = 4 * 1024;
  var RateLimiter = class {
    constructor(limit, windowMs) {
      __publicField(this, "limit", limit);
      __publicField(this, "windowMs", windowMs);
      __publicField(this, "hits", /* @__PURE__ */ new Map());
    }
    allow(key, now2 = Date.now()) {
      const h4 = this.hits.get(key);
      if (!h4 || h4.reset < now2) {
        this.hits.set(key, { n: 1, reset: now2 + this.windowMs });
        return true;
      }
      h4.n++;
      if (this.hits.size > 1e4) this.hits.clear();
      return h4.n <= this.limit;
    }
  };
  var res = (status, body) => ({ status, body });
  function createApiRouter(auth, study, extras = {}) {
    const { presence, daily, social, strokes: strokes2, insights, onlineCount, onError, stories } = extras;
    const limiter = new RateLimiter(20, 6e4);
    const errorLimiter = new RateLimiter(30, 6e4);
    return async (r2) => {
      const url = r2.url;
      if (!url.startsWith("/api/")) return null;
      const query = r2.query;
      const ip = r2.ip;
      try {
        if (r2.method === "POST" && (url === "/api/register" || url === "/api/login")) {
          if (!limiter.allow(ip)) throw new AuthError("Too many attempts \u2014 wait a minute", 429);
          const body = await r2.json();
          const result = url === "/api/register" ? await auth.register(body.username, body.password) : await auth.login(body.username, body.password);
          if (url === "/api/register") void insights?.event(result.user.id, "signup");
          return res(200, result);
        } else if (r2.method === "GET" && url === "/api/online") {
          return res(200, { online: onlineCount?.() ?? 0 });
        } else if (r2.method === "POST" && url === "/api/errors") {
          if (!errorLimiter.allow(ip)) return { status: 429, body: { ok: false } };
          const body = await r2.json();
          const who = await auth.authenticate(r2.token).catch(() => null);
          await insights?.error(`[browser] ${String(body.message ?? "")}`, String(body.details ?? ""), who);
          return res(200, { ok: true });
        } else if (r2.method === "POST" && url === "/api/feedback") {
          const u = await auth.authenticate(r2.token);
          const body = await r2.json();
          await insights?.feedback(u, body.kind, body.text, body.meta);
          return res(200, { ok: true });
        } else if (r2.method === "POST" && url === "/api/event") {
          const u = await auth.authenticate(r2.token);
          const name = String((await r2.json()).name ?? "");
          if (CLIENT_EVENTS.includes(name)) await insights?.event(u.id, name);
          return res(200, { ok: true });
        } else if (r2.method === "GET" && url === "/api/admin/inbox") {
          await auth.requireAdmin(r2.token);
          return res(200, { reports: insights ? await auth.store.reports(300) : [] });
        } else if (r2.method === "POST" && /^\/api\/admin\/inbox\/[\w-]+$/.test(url)) {
          await auth.requireAdmin(r2.token);
          await auth.store.setReportDone(url.split("/")[4], (await r2.json()).done === true);
          return res(200, { ok: true });
        } else if (r2.method === "DELETE" && /^\/api\/admin\/inbox\/[\w-]+$/.test(url)) {
          await auth.requireAdmin(r2.token);
          await auth.store.deleteReport(url.split("/")[4]);
          return res(200, { ok: true });
        } else if (r2.method === "GET" && url === "/api/admin/stats") {
          await auth.requireAdmin(r2.token);
          return res(200, insights ? await insights.stats(await auth.store.list(), onlineCount?.() ?? 0) : {});
        } else if (r2.method === "GET" && url === "/api/me") {
          let u = await auth.authenticate(r2.token);
          if (query.get("today")) u = await study.touchLogin(u, resolveToday(query.get("today")));
          return res(200, { user: toPublic(u), profile: await study.profile(u) });
        } else if (r2.method === "GET" && /^\/api\/avatar\/[\w-]+$/.test(url)) {
          const img = await study.avatar(url.split("/")[3]);
          if (!img) return res(404, { error: "No picture" });
          return { status: 200, raw: { mime: img.mime, data: img.data, headers: { "Cache-Control": "public, max-age=31536000, immutable", "X-Content-Type-Options": "nosniff" } } };
        } else if (r2.method === "PUT" && url === "/api/me/avatar") {
          const u = await auth.authenticate(r2.token);
          await study.setAvatar(u, (await r2.json(120 * 1024)).image);
          return res(200, { profile: await study.profile(await auth.authenticate(r2.token)) });
        } else if (r2.method === "DELETE" && url === "/api/me/avatar") {
          const u = await auth.authenticate(r2.token);
          await study.setAvatar(u, null);
          return res(200, { profile: await study.profile(await auth.authenticate(r2.token)) });
        } else if (r2.method === "PUT" && url === "/api/me/background") {
          const u = await auth.authenticate(r2.token);
          await study.setBackground(u, (await r2.json()).background);
          return res(200, { profile: await study.profile(await auth.authenticate(r2.token)) });
        } else if (r2.method === "PUT" && url === "/api/me/flame") {
          const u = await auth.authenticate(r2.token);
          await study.setFlame(u, (await r2.json()).flame);
          return res(200, { profile: await study.profile(await auth.authenticate(r2.token)) });
        } else if (r2.method === "PUT" && url === "/api/me/staff") {
          const u = await auth.authenticate(r2.token);
          await study.setStaff(u, (await r2.json()).staff);
          return res(200, { profile: await study.profile(await auth.authenticate(r2.token)) });
        } else if (r2.method === "PUT" && url === "/api/me/kana") {
          const u = await auth.authenticate(r2.token);
          await study.setKanaMastered(u, (await r2.json()).mastered === true);
          return res(200, { profile: await study.profile(await auth.authenticate(r2.token)) });
        } else if (r2.method === "PUT" && url === "/api/me/tutorial") {
          const u = await auth.authenticate(r2.token);
          await auth.store.update(u.id, { tutorialDone: true });
          return res(200, { ok: true });
        } else if (r2.method === "GET" && url === "/api/progress") {
          const u = await auth.authenticate(r2.token);
          return res(200, await study.progress.page(u, query.get("today") ? resolveToday(query.get("today")) : playerDay(u)));
        } else if (r2.method === "GET" && url === "/api/strokes") {
          const chars2 = [...query.get("k") ?? ""].slice(0, 8);
          return res(200, { strokes: Object.fromEntries(chars2.map((c) => [c, strokes2?.(c) ?? null])) });
        } else if (daily && r2.method === "GET" && url === "/api/daily") {
          const u = await auth.authenticate(r2.token);
          return res(200, await daily.overview(u));
        } else if (daily && r2.method === "POST" && url === "/api/daily/start") {
          const u = await auth.authenticate(r2.token);
          return res(200, { word: await daily.start(u) });
        } else if (daily && r2.method === "POST" && url === "/api/daily/answer") {
          const u = await auth.authenticate(r2.token);
          return res(200, await daily.answer(u, (await r2.json()).text));
        } else if (daily && r2.method === "POST" && url === "/api/daily/finish") {
          const u = await auth.authenticate(r2.token);
          return res(200, { done: await daily.finishStale(u) });
        } else if (social && r2.method === "GET" && url === "/api/friends") {
          const u = await auth.authenticate(r2.token);
          return res(200, { friends: await social.list(u.id) });
        } else if (social && r2.method === "POST" && url === "/api/friends") {
          const u = await auth.authenticate(r2.token);
          const result = await social.request(u.id, u.username, (await r2.json()).username);
          return res(200, { result, friends: await social.list(u.id) });
        } else if (social && r2.method === "POST" && /^\/api\/friends\/[\w-]+\/accept$/.test(url)) {
          const u = await auth.authenticate(r2.token);
          await social.accept(u.id, u.username, url.split("/")[3]);
          return res(200, { friends: await social.list(u.id) });
        } else if (social && r2.method === "DELETE" && /^\/api\/friends\/[\w-]+$/.test(url)) {
          const u = await auth.authenticate(r2.token);
          await social.remove(u.id, url.split("/")[3]);
          return res(200, { friends: await social.list(u.id) });
        } else if (r2.method === "GET" && url === "/api/matches") {
          const u = await auth.authenticate(r2.token);
          return res(200, { matches: await study.matches(u.id) });
        } else if (r2.method === "GET" && /^\/api\/matches\/[\w-]+$/.test(url)) {
          const u = await auth.authenticate(r2.token);
          const m = await study.match(u.id, url.split("/")[3]);
          return m ? res(200, { match: m }) : res(404, { error: "No such match" });
        } else if (r2.method === "GET" && /^\/api\/users\/[\w-]+$/.test(url)) {
          await auth.authenticate(r2.token);
          const p = await study.publicProfile(url.split("/")[3]);
          return p ? res(200, { profile: p }) : res(404, { error: "No such player" });
        } else if (r2.method === "GET" && url === "/api/study") {
          const u = await auth.authenticate(r2.token);
          return res(200, await study.summary(u, resolveToday(query.get("today"))));
        } else if (r2.method === "PUT" && url === "/api/study/daily-levels") {
          const u = await auth.authenticate(r2.token);
          const body = await r2.json();
          await study.setDailyLevels(u, body.levels, resolveToday(body.today));
          return res(200, await study.summary(await auth.authenticate(r2.token), resolveToday(body.today)));
        } else if (r2.method === "PUT" && url === "/api/study/levels") {
          const u = await auth.authenticate(r2.token);
          const body = await r2.json();
          await study.setStudyLevels(u, body.levels, resolveToday(body.today));
          return res(200, await study.summary(await auth.authenticate(r2.token), resolveToday(body.today)));
        } else if (r2.method === "GET" && url === "/api/study/queue") {
          const u = await auth.authenticate(r2.token);
          const deck2 = query.get("deck");
          return res(200, { cards: await study.queue(u, isDeck(deck2) ? deck2 : "all") });
        } else if (r2.method === "POST" && url === "/api/study/review") {
          const u = await auth.authenticate(r2.token);
          const body = await r2.json();
          const tz = Number(body.tz);
          return res(200, await study.review(u, body.vocabId, body.rating, now(), resolveToday(body.today), Number.isFinite(tz) && Math.abs(tz) <= 840 ? tz : 0, body.deck));
        } else if (r2.method === "POST" && url === "/api/study/undo") {
          const u = await auth.authenticate(r2.token);
          const body = await r2.json();
          return res(200, await study.undo(u, body.vocabId, body.deck));
        } else if (r2.method === "GET" && url === "/api/study/deck") {
          const u = await auth.authenticate(r2.token);
          return res(200, { words: await study.deckList(u, query.get("deck")) });
        } else if (r2.method === "POST" && url === "/api/study/deck/remove") {
          const u = await auth.authenticate(r2.token);
          const body = await r2.json(32 * 1024);
          return res(200, { removed: await study.removeFromDeck(u, body.deck, body.ids) });
        } else if (r2.method === "POST" && url === "/api/study/deck/add") {
          const u = await auth.authenticate(r2.token);
          const body = await r2.json(32 * 1024);
          return res(200, { added: await study.addToDeck(u, body.deck, body.ids) });
        } else if (r2.method === "GET" && url === "/api/study/search") {
          await auth.authenticate(r2.token);
          return res(200, { words: study.search(query.get("q")) });
        } else if (r2.method === "POST" && url === "/api/study/custom") {
          const u = await auth.authenticate(r2.token);
          return res(200, await study.addCustom(u, await r2.json()));
        } else if (r2.method === "GET" && url === "/api/study/quiz") {
          const u = await auth.authenticate(r2.token);
          return res(200, { questions: await study.quiz(u, Number(query.get("n")) || 10) });
        } else if (r2.method === "POST" && url === "/api/study/story") {
          const u = await auth.authenticate(r2.token);
          const body = await r2.json();
          const words2 = StoryService.clean(body.words);
          const day = resolveToday(body.today);
          const out = stories ? await stories.story(u.id, words2, day) : { story: null, why: "off" };
          return res(200, { ...out, words: words2, usage: stories?.usage(u.id, day) ?? { enabled: false, used: 0, limit: 0 } });
        } else if (r2.method === "GET" && url === "/api/study/story") {
          const u = await auth.authenticate(r2.token);
          return res(200, stories?.usage(u.id, resolveToday(query.get("today"))) ?? { enabled: false, used: 0, limit: 0 });
        } else if (r2.method === "POST" && url === "/api/study/task") {
          const u = await auth.authenticate(r2.token);
          const body = await r2.json();
          return res(200, await study.recordTask(u, body.task, resolveToday(body.today), body.score, body.total));
        } else if (r2.method === "PUT" && url === "/api/study/daily-new") {
          const u = await auth.authenticate(r2.token);
          const body = await r2.json();
          await study.setDailyNew(u, body.n, resolveToday(body.today));
          return res(200, await study.summary(await auth.authenticate(r2.token), resolveToday(body.today)));
        } else if (r2.method === "PUT" && url === "/api/me/border") {
          const u = await auth.authenticate(r2.token);
          return res(200, { profile: await study.setBorder(u, (await r2.json()).border) });
        } else if (r2.method === "PUT" && url === "/api/me/badges") {
          const u = await auth.authenticate(r2.token);
          return res(200, { badges: await study.setBadges(u, (await r2.json()).badges) });
        } else if (r2.method === "GET" && url === "/api/admin/users") {
          await auth.requireAdmin(r2.token);
          const stats = await study.adminStats(await auth.listUsers());
          const users = stats.users.map((u) => {
            const p = presence?.(u.id);
            return p ? { ...u, online: p.online, activity: p.activity, onlineSince: p.since, lastSeen: p.lastSeen } : u;
          });
          return res(200, { ...stats, users });
        } else if (r2.method === "POST" && /^\/api\/admin\/users\/[\w-]+\/ban$/.test(url)) {
          const admin = await auth.requireAdmin(r2.token);
          const body = await r2.json();
          const id = url.split("/")[4];
          return res(200, { user: await auth.setBanned(admin, id, body.banned === true) });
        } else if (r2.method === "DELETE" && /^\/api\/admin\/users\/[\w-]+$/.test(url)) {
          const admin = await auth.requireAdmin(r2.token);
          await auth.deleteUser(admin, url.split("/")[4]);
          return res(200, { ok: true });
        } else if (r2.method === "POST" && /^\/api\/admin\/users\/[\w-]+\/role$/.test(url)) {
          const admin = await auth.requireAdmin(r2.token);
          const body = await r2.json();
          const id = url.split("/")[4];
          return res(200, { user: await auth.setRole(admin, id, body.role) });
        } else if (r2.method === "GET" && url === "/api/sync/snapshot") {
          const u = await auth.authenticate(r2.token);
          return res(200, await study.snapshot(u, daily?.today()));
        } else {
          return res(404, { error: "Not found" });
        }
      } catch (e) {
        if (e instanceof AuthError || e instanceof StudyError || e instanceof DailyError || e instanceof SocialError || e instanceof InsightsError) return res(e.status, { error: e.message });
        onError?.(`${r2.method} ${url}`, e);
        return res(500, { error: "Server error" });
      }
    };
  }

  // src/client/offline/engine.ts
  init_vocab2();
  var LocalStore = class extends MemoryStore {
    constructor(uid2) {
      super();
      __publicField(this, "uid", uid2);
      __publicField(this, "name", "offline");
      __publicField(this, "onChange");
    }
    load(s) {
      const id = this.uid;
      this.users.set(id, { ...s.user });
      this.srs.set(id, new Map(s.cards.map((c) => [`${deckOf(c)}|${c.vocabId}`, { ...c, deck: deckOf(c) }])));
      this.custom.set(id, s.custom.map((w) => ({ ...w })));
      this.history.set(id, s.matches);
      this.activityLog.set(id, new Map(s.activity.map((a) => [a.day, { ...a }])));
      this.dailyResults.clear();
      if (s.daily?.result) this.dailyResults.set(s.daily.day, /* @__PURE__ */ new Map([[id, s.daily.result]]));
    }
    dump() {
      const id = this.uid;
      const user2 = this.users.get(id);
      const days2 = [...this.dailyResults.entries()].filter(([, m]) => m.has(id)).sort(([a], [b]) => b.localeCompare(a));
      return {
        v: SNAPSHOT_V,
        at: Date.now(),
        user: { ...user2 },
        cards: [...this.srs.get(id)?.values() ?? []].map((c) => ({ ...c })),
        custom: (this.custom.get(id) ?? []).map((w) => ({ ...w })),
        matches: this.history.get(id) ?? [],
        activity: [...this.activityLog.get(id)?.values() ?? []].map((a) => ({ ...a })),
        daily: days2.length ? { day: days2[0][0], result: days2[0][1].get(id) } : null
      };
    }
    persist() {
      this.onChange?.();
    }
  };
  var NEEDS_NET = "You're offline \u2014 this needs an internet connection.";
  async function createEngine(s, onChange2) {
    await loadVocab();
    const store3 = new LocalStore(s.user.id);
    store3.load(s);
    store3.onChange = onChange2;
    const study = new StudyService(store3);
    const daily = new DailyService(store3, study.progress);
    daily.onPerfect = (id) => study.grantAchievements(id, void 0, ["perfect-day"]);
    const auth = {
      store: store3,
      authenticate: async () => {
        const u = await store3.findById(s.user.id);
        if (!u) throw new AuthError("Please sign in again", 401);
        return u;
      },
      requireAdmin: async () => {
        throw new AuthError(NEEDS_NET, 503);
      },
      login: async () => {
        throw new AuthError(NEEDS_NET, 503);
      },
      register: async () => {
        throw new AuthError(NEEDS_NET, 503);
      }
    };
    const route = createApiRouter(auth, study, { daily, onError: (where, e) => console.error("[offline]", where, e) });
    return {
      userId: s.user.id,
      async request(method, url, body) {
        const [path, qs] = url.split("?");
        const out = await route({ method, url: path, query: new URLSearchParams(qs ?? ""), token: "offline", ip: "", json: async () => body ?? {} });
        return out ?? { status: 404, body: { error: "Not found" } };
      },
      dump: () => store3.dump(),
      user: () => store3.findById(s.user.id)
    };
  }

  // src/client/offline/idb.ts
  var DB = "kanji-wizards";
  var STORE = "kv";
  var dbp = null;
  var mem = /* @__PURE__ */ new Map();
  function open() {
    dbp ?? (dbp = new Promise((resolve) => {
      try {
        const req = indexedDB.open(DB, 1);
        req.onupgradeneeded = () => req.result.createObjectStore(STORE);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    }));
    return dbp;
  }
  function tx(mode4, run) {
    return open().then((db) => new Promise((resolve) => {
      if (!db) return resolve(void 0);
      try {
        const req = run(db.transaction(STORE, mode4).objectStore(STORE));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(void 0);
      } catch {
        resolve(void 0);
      }
    }));
  }
  async function get(key) {
    const v = await tx("readonly", (s) => s.get(key));
    return v === void 0 ? mem.get(key) : v;
  }
  async function set(key, value) {
    mem.set(key, value);
    await tx("readwrite", (s) => s.put(value, key));
  }
  async function del(key) {
    mem.delete(key);
    await tx("readwrite", (s) => s.delete(key));
  }

  // src/client/offline/index.ts
  var offline = false;
  var engine = null;
  var engineFor = "";
  var outbox = [];
  var token = () => "";
  var syncing = null;
  var probeTimer = 0;
  var snapTimer = 0;
  var saveTimer = 0;
  var listeners = [];
  var UID_KEY = "kb:uid";
  var snapKey = (uid2) => `snap:${uid2}`;
  var boxKey = (uid2) => `outbox:${uid2}`;
  var storedUid = () => {
    try {
      return localStorage.getItem(UID_KEY) ?? "";
    } catch {
      return "";
    }
  };
  var OFFLINE_ROUTES = [
    ["GET", /^\/api\/(me|study|study\/queue|study\/deck|study\/search|study\/quiz|progress|daily|matches|matches\/[\w-]+)$/],
    ["PUT", /^\/api\/(me\/(flame|staff|background|border|badges|kana|tutorial)|study\/levels|study\/daily-levels|study\/daily-new)$/],
    ["POST", /^\/api\/(study\/(review|undo|deck\/remove|deck\/add|custom|task)|daily\/(start|answer|finish))$/]
  ];
  var pathOf = (url) => url.split("?")[0];
  var handles = (method, url) => OFFLINE_ROUTES.some(([m, re]) => m === method && re.test(pathOf(url)));
  var changes = (method, url) => method !== "GET" || /^\/api\/(me|study)$/.test(pathOf(url));
  var isOffline = () => offline;
  function onChange(fn) {
    listeners.push(fn);
  }
  function setOffline(v) {
    if (offline === v) return;
    offline = v;
    for (const fn of listeners) fn(v);
    clearInterval(probeTimer);
    if (v) probeTimer = window.setInterval(() => void tryReconnect(), 2e4);
  }
  var busyCheck = () => false;
  function init(getToken2, busy3) {
    token = getToken2;
    if (busy3) busyCheck = busy3;
    addEventListener("online", () => void tryReconnect());
    addEventListener("offline", () => {
      if (document.visibilityState === "visible") void goOffline();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && offline) void tryReconnect();
    });
  }
  var probing = false;
  async function probe() {
    if (offline || probing || !storedUid() || document.visibilityState !== "visible") return;
    probing = true;
    try {
      for (let i = 0; i < 2; i++) {
        if (navigator.onLine && await reachable()) return;
        await new Promise((r2) => setTimeout(r2, 3e3));
        if (document.visibilityState !== "visible") return;
      }
      await goOffline();
    } finally {
      probing = false;
    }
  }
  async function canGoOffline() {
    const uid2 = storedUid();
    return !!uid2 && !!await get(snapKey(uid2));
  }
  async function signedIn(uid2) {
    try {
      localStorage.setItem(UID_KEY, uid2);
    } catch {
    }
    outbox = await get(boxKey(uid2)) ?? [];
    if (outbox.length) void tryReconnect();
    else scheduleSnapshot(1500);
    setTimeout(() => {
      if (!engine) void ensureEngine();
    }, 8e3);
  }
  async function signedOut() {
    const uid2 = storedUid();
    engine = null;
    engineFor = "";
    outbox = [];
    try {
      localStorage.removeItem(UID_KEY);
    } catch {
    }
    if (uid2) {
      await del(snapKey(uid2));
      await del(boxKey(uid2));
    }
    setOffline(false);
  }
  async function ensureEngine() {
    const uid2 = storedUid();
    if (!uid2) return null;
    if (engine && engineFor === uid2) return engine;
    const snap = await get(snapKey(uid2));
    if (!snap || snap.v !== SNAPSHOT_V || snap.user.id !== uid2) return null;
    try {
      engine = await createEngine(snap, () => {
        clearTimeout(saveTimer);
        saveTimer = window.setTimeout(() => {
          if (engine) void set(snapKey(uid2), engine.dump());
        }, 1500);
      });
      engineFor = uid2;
      outbox = await get(boxKey(uid2)) ?? outbox;
      return engine;
    } catch (e) {
      console.warn("offline engine unavailable", e);
      return null;
    }
  }
  async function goOffline() {
    if (offline) return !!engine;
    const e = await ensureEngine();
    if (!e) return false;
    setOffline(true);
    return true;
  }
  async function call(method, url, body, op) {
    const e = await ensureEngine();
    if (!e) return { status: 503, body: { error: "You're offline." } };
    const out = await e.request(method, url, body);
    if (out.status < 400 && changes(method, url)) {
      if (!(method === "GET" && outbox.some((x) => x.method === "GET" && x.url === url))) {
        outbox.push({ method, url, body, at: Date.now(), op });
        await set(boxKey(e.userId), outbox);
      }
    }
    return { status: out.status, body: out.body ?? {} };
  }
  var timeout = (ms) => {
    const c = new AbortController();
    setTimeout(() => c.abort(), ms);
    return c.signal;
  };
  var authHeaders = () => ({ "Content-Type": "application/json", ...token() ? { Authorization: `Bearer ${token()}` } : {} });
  async function reachable() {
    try {
      return (await fetch("/api/online", { cache: "no-store", signal: timeout(6e3) })).ok;
    } catch {
      return false;
    }
  }
  function tryReconnect() {
    syncing ?? (syncing = (async () => {
      try {
        if (!await reachable()) return false;
        const uid2 = storedUid();
        if (!uid2 || !token()) {
          setOffline(false);
          return true;
        }
        while (outbox.length) {
          const x = outbox[0];
          let res2;
          try {
            res2 = await fetch(x.url, { method: x.method, headers: { ...authHeaders(), "X-KW-At": String(x.at), ...x.op ? { "X-KW-Op": x.op } : {} }, body: x.body === void 0 ? void 0 : JSON.stringify(x.body), signal: timeout(2e4) });
          } catch {
            return false;
          }
          if (res2.status === 401 || res2.status === 403) return false;
          if (res2.status === 429 || res2.status === 502 || res2.status === 503 || res2.status === 504) return false;
          outbox.shift();
          await set(boxKey(uid2), outbox);
        }
        await refreshSnapshot();
        setOffline(false);
        return true;
      } finally {
        syncing = null;
      }
    })());
    return syncing;
  }
  async function refreshSnapshot() {
    const uid2 = storedUid();
    if (!uid2 || !token() || outbox.length) return;
    try {
      const res2 = await fetch("/api/sync/snapshot", { headers: authHeaders(), cache: "no-store", signal: timeout(3e4) });
      if (!res2.ok) return;
      const snap = await res2.json();
      if (snap.user?.id !== uid2) return;
      await set(snapKey(uid2), snap);
      engine = null;
      engineFor = "";
      clearTimeout(saveTimer);
      setTimeout(() => {
        if (!engine) void ensureEngine();
      }, 1e3);
    } catch {
    }
  }
  var snapDue = 0;
  function scheduleSnapshot(ms = 3e4) {
    const due = Date.now() + ms;
    if (snapTimer && snapDue <= due) return;
    clearTimeout(snapTimer);
    snapDue = due;
    snapTimer = window.setTimeout(() => {
      snapTimer = 0;
      if (offline) return;
      if (busyCheck()) {
        scheduleSnapshot(15e3);
        return;
      }
      const run = () => void refreshSnapshot();
      if ("requestIdleCallback" in window) window.requestIdleCallback(run, { timeout: 5e3 });
      else run();
    }, ms);
  }
  function changedOnline(method, url, body) {
    if (!changes(method, url) || !handles(method, url)) return;
    if (engine && engineFor === storedUid()) void engine.request(method, url, body).catch(() => {
    });
    scheduleSnapshot();
  }
  var pending = () => outbox.length;

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
  var isNetworkError = (e) => e instanceof TypeError || e instanceof DOMException && e.name === "AbortError";
  async function call2(method, url, body, again) {
    const op = again ? again.op : method !== "GET" && handles(method, url) ? uuid() : void 0;
    if (isOffline()) return local(method, url, body, op);
    let res2;
    try {
      const ctl = new AbortController();
      const t = handles(method, url) ? window.setTimeout(() => ctl.abort(), method === "GET" ? 12e3 : 1e4) : 0;
      res2 = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", ...getToken() ? { Authorization: `Bearer ${getToken()}` } : {}, ...op ? { "X-KW-Op": op } : {} },
        body: body === void 0 ? void 0 : JSON.stringify(body),
        signal: ctl.signal
      }).finally(() => clearTimeout(t));
    } catch (e) {
      if (isNetworkError(e) && handles(method, url) && await stillDown()) {
        if (await goOffline()) return local(method, url, body, op);
      } else if (isNetworkError(e) && handles(method, url) && !again && (method === "GET" || op)) return call2(method, url, body, { op });
      if (isNetworkError(e)) throw new ApiError(OFFLINE_TEXT, 0);
      throw e;
    }
    const data = await res2.json().catch(() => ({}));
    if (!res2.ok) throw new ApiError(data.error ?? `Error ${res2.status}`, res2.status);
    changedOnline(method, url, body);
    return data;
  }
  async function stillDown() {
    if (document.visibilityState !== "visible") await new Promise((r2) => {
      const f2 = () => {
        if (document.visibilityState === "visible") {
          document.removeEventListener("visibilitychange", f2);
          r2();
        }
      };
      document.addEventListener("visibilitychange", f2);
    });
    if (!navigator.onLine) return true;
    await new Promise((r2) => setTimeout(r2, 1500));
    try {
      return !(await fetch("/api/online", { cache: "no-store", signal: AbortSignal.timeout(6e3) })).ok;
    } catch {
      return true;
    }
  }
  var uuid = () => typeof crypto.randomUUID === "function" ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, () => (Math.random() * 16 | 0).toString(16));
  var OFFLINE_TEXT = "You're offline \u2014 this needs an internet connection.";
  async function local(method, url, body, op) {
    if (!handles(method, url)) throw new ApiError(OFFLINE_TEXT, 0);
    const out = await call(method, url, body, op);
    if (out.status >= 400) throw new ApiError(out.body?.error ?? `Error ${out.status}`, out.status);
    return out.body;
  }
  var api = {
    login: (username, password) => call2("POST", "/api/login", { username, password }),
    register: (username, password) => call2("POST", "/api/register", { username, password }),
    me: () => call2("GET", `/api/me?today=${today()}`),
    setAvatar: (image) => call2("PUT", "/api/me/avatar", { image }),
    removeAvatar: () => call2("DELETE", "/api/me/avatar"),
    setFlame: (flame) => call2("PUT", "/api/me/flame", { flame }),
    setStaff: (staff) => call2("PUT", "/api/me/staff", { staff }),
    setBackground: (background) => call2("PUT", "/api/me/background", { background }),
    study: () => call2("GET", `/api/study?today=${today()}`),
    setStudyLevels: (levels) => call2("PUT", "/api/study/levels", { levels, today: today() }),
    queue: (deck2) => call2("GET", `/api/study/queue?deck=${deck2}`),
    review: (vocabId, rating, deck2 = "all") => call2("POST", "/api/study/review", { vocabId, rating, deck: deck2, today: today(), tz: (/* @__PURE__ */ new Date()).getTimezoneOffset() }),
    undo: (vocabId, deck2 = "all") => call2("POST", "/api/study/undo", { vocabId, deck: deck2 }),
    deckWords: (deck2) => call2("GET", `/api/study/deck?deck=${deck2}`),
    deckRemove: (deck2, ids) => call2("POST", "/api/study/deck/remove", { deck: deck2, ids }),
    deckAdd: (deck2, ids) => call2("POST", "/api/study/deck/add", { deck: deck2, ids }),
    searchWords: (q) => call2("GET", `/api/study/search?q=${encodeURIComponent(q)}`),
    // the app names a new custom word itself (0.9.9.4), so one added offline keeps its id on the server
    addCustom: (w) => call2("POST", "/api/study/custom", { ...w, id: `u:${uuid().slice(0, 13)}` }),
    quiz: (n = 10) => call2("GET", `/api/study/quiz?n=${n}`),
    /** 0.9.9.4.4.1: one story with these words (null when the AI is off or failed) */
    story: (words2) => call2("POST", "/api/study/story", { words: words2, today: today() }),
    /** 0.9.9.4.4.5: AI stories today — how many you've had and the daily cap */
    storyUsage: () => call2("GET", `/api/study/story?today=${today()}`),
    /** a daily task done here (the quiz, a passage): counts towards today's streak */
    task: (task, score3, total) => call2("POST", "/api/study/task", { task, today: today(), score: score3, total }),
    setDailyNew: (n) => call2("PUT", "/api/study/daily-new", { n, today: today() }),
    /** 0.9.9.4.4: new words a day per level */
    setDailyLevels: (levels) => call2("PUT", "/api/study/daily-levels", { levels, today: today() }),
    setBorder: (border) => call2("PUT", "/api/me/border", { border }),
    setBadges: (badges2) => call2("PUT", "/api/me/badges", { badges: badges2 }),
    matches: () => call2("GET", "/api/matches"),
    match: (id) => call2("GET", `/api/matches/${encodeURIComponent(id)}`),
    player: (id) => call2("GET", `/api/users/${encodeURIComponent(id)}`),
    users: () => call2("GET", "/api/admin/users"),
    inbox: () => call2("GET", "/api/admin/inbox"),
    inboxDone: (id, done2) => call2("POST", `/api/admin/inbox/${encodeURIComponent(id)}`, { done: done2 }),
    inboxDelete: (id) => call2("DELETE", `/api/admin/inbox/${encodeURIComponent(id)}`),
    adminStats: () => call2("GET", "/api/admin/stats"),
    feedback: (kind, text, meta) => call2("POST", "/api/feedback", { kind, text, meta }),
    event: (name) => call2("POST", "/api/event", { name }).catch(() => ({ ok: false })),
    online: () => call2("GET", "/api/online"),
    tutorialDone: () => call2("PUT", "/api/me/tutorial"),
    setKana: (mastered) => call2("PUT", "/api/me/kana", { mastered }),
    progress: () => call2("GET", `/api/progress?today=${today()}`),
    strokes: (chars2) => call2("GET", `/api/strokes?k=${encodeURIComponent(chars2)}`),
    daily: () => call2("GET", "/api/daily"),
    dailyStart: () => call2("POST", "/api/daily/start"),
    dailyAnswer: (text) => call2("POST", "/api/daily/answer", { text }),
    dailyFinish: () => call2("POST", "/api/daily/finish"),
    friends: () => call2("GET", "/api/friends"),
    addFriend: (username) => call2("POST", "/api/friends", { username }),
    acceptFriend: (id) => call2("POST", `/api/friends/${encodeURIComponent(id)}/accept`),
    removeFriend: (id) => call2("DELETE", `/api/friends/${encodeURIComponent(id)}`),
    setRole: (id, role) => call2("POST", `/api/admin/users/${encodeURIComponent(id)}/role`, { role }),
    deleteUser: (id) => call2("DELETE", `/api/admin/users/${encodeURIComponent(id)}`),
    setBanned: (id, banned) => call2("POST", `/api/admin/users/${encodeURIComponent(id)}/ban`, { banned })
  };

  // src/shared/version.ts
  var VERSION = "0.9.9.4.4.7";

  // src/client/i18n.ts
  var KEY = "kb:lang";
  function lang() {
    try {
      return localStorage.getItem(KEY) === "ru" ? "ru" : "en";
    } catch {
      return "en";
    }
  }
  var locale = () => lang() === "ru" ? "ru-RU" : "en-US";
  function setLang(l) {
    try {
      localStorage.setItem(KEY, l);
    } catch {
    }
    location.reload();
  }
  var RU = {
    // top bar, profile, settings
    "admin": "\u0430\u0434\u043C\u0438\u043D",
    "crit today": "\u043A\u0440\u0438\u0442 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    "wins": "\u043F\u043E\u0431\u0435\u0434\u044B",
    "losses": "\u043F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
    "win rate": "\u0434\u043E\u043B\u044F \u043F\u043E\u0431\u0435\u0434",
    "spells learned": "\u0432\u044B\u0443\u0447\u0435\u043D\u043E \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439",
    "learned today": "\u0432\u044B\u0443\u0447\u0435\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    "best streak (days)": "\u043B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F (\u0434\u043D\u0438)",
    "Change picture": "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    "Remove picture": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u043E\u0442\u043E",
    "\u238B Log out": "\u238B \u0412\u044B\u0439\u0442\u0438",
    "\u266A Music": "\u266A \u041C\u0443\u0437\u044B\u043A\u0430",
    "Effects": "\u042D\u0444\u0444\u0435\u043A\u0442\u044B",
    "Voice (word on a correct cast)": "\u0413\u043E\u043B\u043E\u0441 (\u0441\u043B\u043E\u0432\u043E \u043F\u0440\u0438 \u0432\u0435\u0440\u043D\u043E\u043C \u043E\u0442\u0432\u0435\u0442\u0435)",
    "3D arena": "3D-\u0430\u0440\u0435\u043D\u0430",
    "Full": "\u041F\u043E\u043B\u043D\u0430\u044F",
    "Lite (phones, older PCs)": "\u041B\u0451\u0433\u043A\u0430\u044F (\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u044B, \u0441\u0442\u0430\u0440\u044B\u0435 \u041F\u041A)",
    "Off (2D)": "\u0412\u044B\u043A\u043B. (2D)",
    "UI size": "\u0420\u0430\u0437\u043C\u0435\u0440 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",
    "Language": "\u042F\u0437\u044B\u043A",
    "Close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    "Audio": "\u0417\u0432\u0443\u043A",
    "Music": "\u041C\u0443\u0437\u044B\u043A\u0430",
    "Sounds": "\u0417\u0432\u0443\u043A\u0438",
    "Volume": "\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C",
    "Your profile": "\u0412\u0430\u0448 \u043F\u0440\u043E\u0444\u0438\u043B\u044C",
    "XP to next level": "\u041E\u043F\u044B\u0442 \u0434\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F",
    "PNG, JPEG or WebP": "PNG, JPEG \u0438\u043B\u0438 WebP",
    "Profile picture updated": "\u0424\u043E\u0442\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E",
    "Could not use that picture": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E \u0444\u043E\u0442\u043E",
    "Please pick an image": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
    "Could not read that image": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
    "Your browser has no WebGL \u2014 the classic 2D view is used.": "\u0412 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043D\u0435\u0442 WebGL \u2014 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 2D-\u0432\u0438\u0434.",
    "First-person duel arena (move the mouse to look around). On a phone held upright it is a band above the question. Lite is lighter on phones and older computers.": "\u0410\u0440\u0435\u043D\u0430 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043B\u0438\u0446\u0430 (\u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435 \u043C\u044B\u0448\u044C, \u0447\u0442\u043E\u0431\u044B \u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C\u0441\u044F). \u041D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435 \u0432 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u043C \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u2014 \u043F\u043E\u043B\u043E\u0441\u0430 \u043D\u0430\u0434 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u043C. \xAB\u041B\u0451\u0433\u043A\u0430\u044F\xBB \u2014 \u0434\u043B\u044F \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0432 \u0438 \u0441\u0442\u0430\u0440\u044B\u0445 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043E\u0432.",
    "This screen is too small for the 3D arena \u2014 the classic 2D view is used.": "\u042D\u043A\u0440\u0430\u043D \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B \u0434\u043B\u044F 3D-\u0430\u0440\u0435\u043D\u044B \u2014 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 2D-\u0432\u0438\u0434.",
    "3D was slow \u2014 lowered its resolution. Settings \u2192 3D arena \u2192 Off for the 2D view.": "3D \u0442\u043E\u0440\u043C\u043E\u0437\u0438\u043B\u043E \u2014 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0441\u043D\u0438\u0436\u0435\u043D\u043E. \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u2192 3D-\u0430\u0440\u0435\u043D\u0430 \u2192 \u0412\u044B\u043A\u043B. \u0434\u043B\u044F 2D-\u0432\u0438\u0434\u0430.",
    "3D was slow on this device \u2014 switched to Lite (Settings \u2192 3D arena).": "3D \u0442\u043E\u0440\u043C\u043E\u0437\u0438\u043B\u043E \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u2014 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u043B\u0451\u0433\u043A\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F (\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u2192 3D-\u0430\u0440\u0435\u043D\u0430).",
    // auth
    "Study ten spells. Then cast them from memory.": "\u0412\u044B\u0443\u0447\u0438 \u0434\u0435\u0441\u044F\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439. \u041F\u043E\u0442\u043E\u043C \u043F\u0440\u043E\u0438\u0437\u043D\u0435\u0441\u0438 \u0438\u0445 \u043F\u043E \u043F\u0430\u043C\u044F\u0442\u0438.",
    "Log in": "\u0412\u043E\u0439\u0442\u0438",
    "Register": "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",
    "Login": "\u041B\u043E\u0433\u0438\u043D",
    "Password": "\u041F\u0430\u0440\u043E\u043B\u044C",
    "Create account": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
    "Login: 3\u201316 letters, numbers or _. Password: at least 6 characters.": "\u041B\u043E\u0433\u0438\u043D: 3\u201316 \u0431\u0443\u043A\u0432, \u0446\u0438\u0444\u0440 \u0438\u043B\u0438 _. \u041F\u0430\u0440\u043E\u043B\u044C: \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.",
    "Server unreachable \u2014 try again in a moment.": "\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0447\u0443\u0442\u044C \u043F\u043E\u0437\u0436\u0435.",
    "Wrong username or password": "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
    "That username is taken": "\u042D\u0442\u043E \u0438\u043C\u044F \u0443\u0436\u0435 \u0437\u0430\u043D\u044F\u0442\u043E",
    "Too many attempts \u2014 wait a minute": "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u043F\u043E\u043F\u044B\u0442\u043E\u043A \u2014 \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043C\u0438\u043D\u0443\u0442\u0443",
    "Please log in": "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u043E\u0439\u0434\u0438\u0442\u0435",
    "Please log in again": "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0441\u043D\u043E\u0432\u0430",
    "This account has been banned": "\u042D\u0442\u043E\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D",
    "Password: at least 6 characters": "\u041F\u0430\u0440\u043E\u043B\u044C: \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
    "Server error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
    "Something went wrong": "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A",
    // menu
    "\u2190 Menu": "\u2190 \u041C\u0435\u043D\u044E",
    "Online queue": "\u041E\u043D\u043B\u0430\u0439\u043D-\u043E\u0447\u0435\u0440\u0435\u0434\u044C",
    "Tick what you'd like to play. You'll be matched with the first player who wants the same, and the game starts straight away. Boss Elimination waits for a full party of 4.": "\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435, \u0432\u043E \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0438\u0433\u0440\u0430\u0442\u044C. \u0412\u0430\u0441 \u0441\u0432\u0435\u0434\u0443\u0442 \u0441 \u043F\u0435\u0440\u0432\u044B\u043C \u0438\u0433\u0440\u043E\u043A\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0445\u043E\u0447\u0435\u0442 \u0442\u043E\u0433\u043E \u0436\u0435, \u0438 \u0438\u0433\u0440\u0430 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0441\u0440\u0430\u0437\u0443. \u0411\u0438\u0442\u0432\u0430 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C \u0436\u0434\u0451\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 \u043E\u0442\u0440\u044F\u0434 \u0438\u0437 4 \u0438\u0433\u0440\u043E\u043A\u043E\u0432.",
    "Battle modes": "\u0420\u0435\u0436\u0438\u043C\u044B",
    "Your levels": "\u0412\u0430\u0448\u0438 \u0443\u0440\u043E\u0432\u043D\u0438",
    "Deck Duel": "\u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434",
    "Queued on its own. No levels to pick: the cards come from N5 to N1.": "\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u0447\u0435\u0440\u0435\u0434\u044C. \u0423\u0440\u043E\u0432\u043D\u0438 \u043D\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442\u0441\u044F: \u043A\u0430\u0440\u0442\u044B \u043E\u0442 N5 \u0434\u043E N1.",
    "Start queue": "\u041D\u0430\u0447\u0430\u0442\u044C \u043F\u043E\u0438\u0441\u043A",
    "Start queue \u2014 Deck Duel": "\u041D\u0430\u0447\u0430\u0442\u044C \u043F\u043E\u0438\u0441\u043A \u2014 \u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434",
    "Searching for a player\u2026": "\u041F\u043E\u0438\u0441\u043A \u0438\u0433\u0440\u043E\u043A\u0430\u2026",
    "Cancel": "\u041E\u0442\u043C\u0435\u043D\u0430",
    "Study struggling spells": "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0442\u0440\u0443\u0434\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",
    "Private game": "\u0421\u0432\u043E\u044F \u0438\u0433\u0440\u0430",
    "Play with friends: create a room and share its code, or enter a friend's code.": "\u0418\u0433\u0440\u0430\u0439\u0442\u0435 \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438: \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043A\u043E\u043C\u043D\u0430\u0442\u0443 \u0438 \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u0435\u0441\u044C \u043A\u043E\u0434\u043E\u043C \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u0434\u0440\u0443\u0433\u0430.",
    "Create room": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043D\u0430\u0442\u0443",
    "Join": "\u0412\u043E\u0439\u0442\u0438",
    "Daily challenge": "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435",
    "new": "\u043D\u043E\u0432\u043E\u0435",
    "Study spells": "\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",
    "Customize": "\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u044F",
    "Progress": "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",
    "Friends": "\u0414\u0440\u0443\u0437\u044C\u044F",
    "Match history": "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043C\u0430\u0442\u0447\u0435\u0439",
    "Users": "\u0418\u0433\u0440\u043E\u043A\u0438",
    "How to play?": "\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C?",
    "How to play": "\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C",
    "Tick at least one mode": "\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0440\u0435\u0436\u0438\u043C",
    "Tick at least one level": "\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
    "Room codes have 4 letters": "\u041A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u2014 4 \u0431\u0443\u043A\u0432\u044B",
    "What to queue for": "\u0412\u043E \u0447\u0442\u043E \u0438\u0441\u043A\u0430\u0442\u044C \u0438\u0433\u0440\u0443",
    "CODE": "\u041A\u041E\u0414",
    "Room code": "\u041A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B",
    "Choose a game mode": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043C",
    "1v1 Kanji Reading": "1 \u043D\u0430 1: \u0427\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438",
    "1v1 Kanji Writing": "1 \u043D\u0430 1: \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438",
    "Boss Elimination": "\u0411\u0438\u0442\u0432\u0430 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C",
    "1v1 Rapid": "1 \u043D\u0430 1: \u0411\u043B\u0438\u0446",
    "Study, then see the kanji and type its reading. Your own stream of spells.": "\u0412\u044B\u0443\u0447\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u0430, \u0437\u0430\u0442\u0435\u043C \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 \u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u0435. \u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0432\u043E\u0439 \u043F\u043E\u0442\u043E\u043A \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439.",
    "No study. Same kanji for both \u2014 first to type the reading (\u304B\u306A or romaji) hits.": "\u0411\u0435\u0437 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438. \u041E\u0434\u0438\u043D \u043A\u0430\u043D\u0434\u0437\u0438 \u043D\u0430 \u0434\u0432\u043E\u0438\u0445 \u2014 \u043A\u0442\u043E \u043F\u0435\u0440\u0432\u044B\u043C \u043D\u0430\u043F\u0438\u0448\u0435\u0442 \u0447\u0442\u0435\u043D\u0438\u0435 (\u304B\u306A \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438), \u0442\u043E\u0442 \u0438 \u0431\u044C\u0451\u0442.",
    "Look at the kanji, press CAST! \u2014 it vanishes, and you write it from memory, by hand on the pad or with a Japanese keyboard.": "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0434\u0437\u0438, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 CAST! \u2014 \u043E\u043D \u0438\u0441\u0447\u0435\u0437\u043D\u0435\u0442, \u0438 \u0432\u044B \u043D\u0430\u043F\u0438\u0448\u0435\u0442\u0435 \u0435\u0433\u043E \u043F\u043E \u043F\u0430\u043C\u044F\u0442\u0438: \u043E\u0442 \u0440\u0443\u043A\u0438 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043B\u0438 \u044F\u043F\u043E\u043D\u0441\u043A\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u043E\u0439.",
    "Up to 4 players vs the Black Dragon. Mistakes get you clawed; it breathes fire every 30 s.": "\u0414\u043E 4 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u043F\u0440\u043E\u0442\u0438\u0432 \u0427\u0451\u0440\u043D\u043E\u0433\u043E \u0434\u0440\u0430\u043A\u043E\u043D\u0430. \u0417\u0430 \u043E\u0448\u0438\u0431\u043A\u0438 \u043E\u043D \u0431\u044C\u0451\u0442 \u043A\u043E\u0433\u0442\u044F\u043C\u0438, \u0430 \u043A\u0430\u0436\u0434\u044B\u0435 30 \u0441 \u0434\u044B\u0448\u0438\u0442 \u043E\u0433\u043D\u0451\u043C.",
    "Pick a hero, draft 10 face-down spell cards, then cast them turn by turn: read the meaning, look at the kanji, write it from memory. Mana, heals and your hero's Omnipotence.": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0435\u0440\u043E\u044F, \u043D\u0430\u0431\u0435\u0440\u0438\u0442\u0435 10 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u043A\u0430\u0440\u0442 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u0438 \u0440\u0430\u0437\u044B\u0433\u0440\u044B\u0432\u0430\u0439\u0442\u0435 \u0438\u0445 \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u0438: \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0434\u0437\u0438, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u043E \u043F\u0430\u043C\u044F\u0442\u0438. \u041C\u0430\u043D\u0430, \u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0438 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u0433\u0435\u0440\u043E\u044F.",
    // progress / daily / friends / history
    "Activity": "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",
    "Spell mastery": "\u041E\u0441\u0432\u043E\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439",
    "every word of each level \u2014 hover a square to see it": "\u043A\u0430\u0436\u0434\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u2014 \u043D\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430 \u043A\u043B\u0435\u0442\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E",
    "Today's leaderboard": "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043B\u0438\u0434\u0435\u0440\u043E\u0432 \u0437\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    "\u21BB Refresh": "\u21BB \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
    "This week": "\u042D\u0442\u0430 \u043D\u0435\u0434\u0435\u043B\u044F",
    "days active": "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0434\u043D\u0435\u0439",
    "cards passed": "\u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043E",
    "Not in your spells yet": "\u0415\u0449\u0451 \u043D\u0435\u0442 \u0432 \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\u0445",
    "Nobody has played today yet \u2014 be the first!": "\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0435\u0449\u0451 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0438\u0433\u0440\u0430\u043B \u2014 \u0431\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C!",
    "Ten words, the same for everyone today": "\u0414\u0435\u0441\u044F\u0442\u044C \u0441\u043B\u043E\u0432, \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043E\u0434\u043D\u0438 \u0438 \u0442\u0435 \u0436\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0445",
    "Start": "\u041D\u0430\u0447\u0430\u0442\u044C",
    "Continue": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
    "Skip": "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C",
    "reading (\u304B\u306A or romaji)": "\u0447\u0442\u0435\u043D\u0438\u0435 (\u304B\u306A \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438)",
    "Start the challenge first": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435",
    "Add players by name. When you're in a room's lobby, you can invite online friends straight in.": "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u043F\u043E \u0438\u043C\u0435\u043D\u0438. \u0412 \u043B\u043E\u0431\u0431\u0438 \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0441\u0440\u0430\u0437\u0443 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C \u0434\u0440\u0443\u0437\u0435\u0439 \u043E\u043D\u043B\u0430\u0439\u043D.",
    "Add friend": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0434\u0440\u0443\u0437\u044C\u044F",
    "Player name": "\u0418\u043C\u044F \u0438\u0433\u0440\u043E\u043A\u0430",
    "wants to be friends": "\u0445\u043E\u0447\u0435\u0442 \u0434\u0440\u0443\u0436\u0438\u0442\u044C",
    "request sent": "\u0437\u0430\u043F\u0440\u043E\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D",
    "Sent requests": "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B",
    "No friends yet \u2014 add someone by their player name above.": "\u0414\u0440\u0443\u0437\u0435\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u2014 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u0433\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u043F\u043E \u0438\u043C\u0435\u043D\u0438 \u0432\u044B\u0448\u0435.",
    "Accept": "\u041F\u0440\u0438\u043D\u044F\u0442\u044C",
    "Decline": "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C",
    "Remove": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    "Online": "\u0412 \u0441\u0435\u0442\u0438",
    "Offline": "\u041D\u0435 \u0432 \u0441\u0435\u0442\u0438",
    "Invite friends": "\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C \u0434\u0440\u0443\u0437\u0435\u0439",
    "Invite": "\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C",
    "Invite again": "\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C \u0441\u043D\u043E\u0432\u0430",
    "In a game": "\u0412 \u0438\u0433\u0440\u0435",
    "They are playing \u2014 invite them when their game is over": "\u0414\u0440\u0443\u0433 \u0438\u0433\u0440\u0430\u0435\u0442 \u2014 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435 \u0435\u0433\u043E, \u043A\u043E\u0433\u0434\u0430 \u0438\u0433\u0440\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F",
    "No player with that name": "\u041D\u0435\u0442 \u0438\u0433\u0440\u043E\u043A\u0430 \u0441 \u0442\u0430\u043A\u0438\u043C \u0438\u043C\u0435\u043D\u0435\u043C",
    "Type a player name": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u0438\u0433\u0440\u043E\u043A\u0430",
    "Your friend is offline": "\u0412\u0430\u0448 \u0434\u0440\u0443\u0433 \u043D\u0435 \u0432 \u0441\u0435\u0442\u0438",
    "Your friend is already in this room": "\u0412\u0430\u0448 \u0434\u0440\u0443\u0433 \u0443\u0436\u0435 \u0432 \u044D\u0442\u043E\u0439 \u043A\u043E\u043C\u043D\u0430\u0442\u0435",
    "You can only invite friends": "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u0440\u0443\u0437\u0435\u0439",
    "Your last 15 games. Open one to see its results again; click a name to see that player's profile.": "\u0412\u0430\u0448\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 15 \u0438\u0433\u0440. \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0438\u0433\u0440\u0443, \u0447\u0442\u043E\u0431\u044B \u0441\u043D\u043E\u0432\u0430 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B; \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0438\u043C\u044F, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C \u0438\u0433\u0440\u043E\u043A\u0430.",
    "No matches yet \u2014 your finished games will show up here.": "\u041C\u0430\u0442\u0447\u0435\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u2014 \u0437\u0434\u0435\u0441\u044C \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0432\u0430\u0448\u0438 \u0441\u044B\u0433\u0440\u0430\u043D\u043D\u044B\u0435 \u0438\u0433\u0440\u044B.",
    "\u2190 Back to match history": "\u2190 \u041A \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043C\u0430\u0442\u0447\u0435\u0439",
    "View profile": "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    "Player profile": "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0438\u0433\u0440\u043E\u043A\u0430",
    // study
    "Spaced repetition like Anki. Your crit chance starts every day at": "\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u044F, \u043A\u0430\u043A \u0432 Anki. \u0428\u0430\u043D\u0441 \u043A\u0440\u0438\u0442\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441",
    "All spells": "\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",
    "Study": "\u0423\u0447\u0438\u0442\u044C",
    "Struggling spells": "\u0422\u0440\u0443\u0434\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",
    "Struggling": "\u0422\u0440\u0443\u0434\u043D\u044B\u0435",
    "Words you missed in battles land here automatically.": "\u0421\u043B\u043E\u0432\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u044B \u043E\u0448\u0438\u0431\u043B\u0438\u0441\u044C \u0432 \u0431\u043E\u044F\u0445, \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u0441\u044E\u0434\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438.",
    "\u2190 Study": "\u2190 \u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",
    "Stroke order": "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0447\u0435\u0440\u0442",
    "Show answer": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442",
    "Space": "\u041F\u0440\u043E\u0431\u0435\u043B",
    "Again": "\u0421\u043D\u043E\u0432\u0430",
    "Hard": "\u0422\u0440\u0443\u0434\u043D\u043E",
    "Okay": "\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E",
    "Easy": "\u041B\u0435\u0433\u043A\u043E",
    "All done for now": "\u041D\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u0432\u0441\u0451",
    "Come back later \u2014 cards return when they are due.": "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u043E\u0437\u0436\u0435 \u2014 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u043F\u0440\u0438\u0434\u0451\u0442 \u0438\u0445 \u0432\u0440\u0435\u043C\u044F.",
    "Back to study": "\u041D\u0430\u0437\u0430\u0434 \u043A \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044E",
    "new spells added": "\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439",
    "Learned spells / study set size": "\u0412\u044B\u0443\u0447\u0435\u043D\u043E \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 / \u0440\u0430\u0437\u043C\u0435\u0440 \u043D\u0430\u0431\u043E\u0440\u0430",
    // customize
    "Magic staff": "\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0441\u043E\u0445",
    "Arena": "\u0410\u0440\u0435\u043D\u0430",
    "Omnipotence": "\u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E",
    "Equip": "\u041D\u0430\u0434\u0435\u0442\u044C",
    "Unlocked": "\u041E\u0442\u043A\u0440\u044B\u0442\u043E",
    "\u2713 Equipped": "\u2713 \u041D\u0430\u0434\u0435\u0442\u043E",
    "What to customize": "\u0427\u0442\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C",
    "Staff preview": "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u043E\u0441\u043E\u0445\u0430",
    "Time of day": "\u0412\u0440\u0435\u043C\u044F \u0441\u0443\u0442\u043E\u043A",
    "Day": "\u0414\u0435\u043D\u044C",
    "Sunset": "\u0417\u0430\u043A\u0430\u0442",
    "Night": "\u041D\u043E\u0447\u044C",
    "Cycle": "\u0426\u0438\u043A\u043B",
    "Omnipotence: the flames of a 5\xD7 combo in battle, and of your Omnipotence (hero power) in Deck Duel. More colours unlock as you level up.": "\u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E: \u043F\u043B\u0430\u043C\u044F \u043A\u043E\u043C\u0431\u043E \xD75 \u0432 \u0431\u043E\u044E \u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u0430 (\u0441\u0438\u043B\u044B \u0433\u0435\u0440\u043E\u044F) \u0432 \u0414\u0443\u044D\u043B\u0438 \u043A\u043E\u043B\u043E\u0434. \u041D\u043E\u0432\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0441 \u0443\u0440\u043E\u0432\u043D\u0435\u043C.",
    "Wraps you at 5 correct casts in a row (Reading, Writing, Rapid, Boss) and while your Omnipotence (hero power) is active in Deck Duel. Everyone sees your colour.": "\u041E\u043A\u0443\u0442\u044B\u0432\u0430\u0435\u0442 \u0432\u0430\u0441 \u043F\u043E\u0441\u043B\u0435 5 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043F\u043E\u0434\u0440\u044F\u0434 (\u0427\u0442\u0435\u043D\u0438\u0435, \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u0411\u043B\u0438\u0446, \u0411\u043E\u0441\u0441) \u0438 \u043F\u043E\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0432\u0430\u0448\u0435 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u0432 \u0414\u0443\u044D\u043B\u0438 \u043A\u043E\u043B\u043E\u0434. \u0412\u0430\u0448 \u0446\u0432\u0435\u0442 \u0432\u0438\u0434\u044F\u0442 \u0432\u0441\u0435.",
    "2D arena": "2D-\u0430\u0440\u0435\u043D\u0430",
    "No Japanese voice found on this device.": "\u041D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u043D\u0435\u0442 \u044F\u043F\u043E\u043D\u0441\u043A\u043E\u0433\u043E \u0433\u043E\u043B\u043E\u0441\u0430.",
    "This browser has no speech voice.": "\u0412 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043D\u0435\u0442 \u0441\u0438\u043D\u0442\u0435\u0437\u0430 \u0440\u0435\u0447\u0438.",
    "Carved from an ancient tree. It channels the natural energy of the earth and life.": "\u0412\u044B\u0440\u0435\u0437\u0430\u043D \u0438\u0437 \u0434\u0440\u0435\u0432\u043D\u0435\u0433\u043E \u0434\u0435\u0440\u0435\u0432\u0430. \u041F\u0440\u043E\u0432\u043E\u0434\u0438\u0442 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u0443\u044E \u0441\u0438\u043B\u0443 \u0437\u0435\u043C\u043B\u0438 \u0438 \u0436\u0438\u0437\u043D\u0438.",
    "Forged from volcanic rock and blessed by fire spirits.": "\u0412\u044B\u043A\u043E\u0432\u0430\u043D \u0438\u0437 \u0432\u0443\u043B\u043A\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043A\u0430\u043C\u043D\u044F \u0438 \u0431\u043B\u0430\u0433\u043E\u0441\u043B\u043E\u0432\u043B\u0451\u043D \u0434\u0443\u0445\u0430\u043C\u0438 \u043E\u0433\u043D\u044F.",
    "Crafted from crystal and oceanic runes. It flows with the tides.": "\u0421\u043E\u0437\u0434\u0430\u043D \u0438\u0437 \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B\u0430 \u0438 \u043E\u043A\u0435\u0430\u043D\u0441\u043A\u0438\u0445 \u0440\u0443\u043D. \u0414\u0432\u0438\u0436\u0435\u0442\u0441\u044F \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043F\u0440\u0438\u043B\u0438\u0432\u0430\u043C\u0438.",
    "A relic of the sky temples. It channels lightning.": "\u0420\u0435\u043B\u0438\u043A\u0432\u0438\u044F \u043D\u0435\u0431\u0435\u0441\u043D\u044B\u0445 \u0445\u0440\u0430\u043C\u043E\u0432. \u041F\u0440\u043E\u0432\u043E\u0434\u0438\u0442 \u043C\u043E\u043B\u043D\u0438\u0438.",
    "An ancient, otherworldly artifact. It bends reality and commands the unknown.": "\u0414\u0440\u0435\u0432\u043D\u0438\u0439 \u043F\u043E\u0442\u0443\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0439 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442. \u0418\u0441\u043A\u0440\u0438\u0432\u043B\u044F\u0435\u0442 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u043F\u043E\u0432\u0435\u043B\u0435\u0432\u0430\u0435\u0442 \u043D\u0435\u0432\u0435\u0434\u043E\u043C\u044B\u043C.",
    "January reward. Rimed with ice that never melts.": "\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u044F\u043D\u0432\u0430\u0440\u044F. \u041F\u043E\u043A\u0440\u044B\u0442 \u0432\u0435\u0447\u043D\u044B\u043C \u0438\u043D\u0435\u0435\u043C.",
    "March reward. A branch that flowers whenever it casts.": "\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u043C\u0430\u0440\u0442\u0430. \u0412\u0435\u0442\u0432\u044C, \u0447\u0442\u043E \u0440\u0430\u0441\u0446\u0432\u0435\u0442\u0430\u0435\u0442 \u043F\u0440\u0438 \u043A\u0430\u0436\u0434\u043E\u043C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0438.",
    "May reward. Carved from one piece of temple jade.": "\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u043C\u0430\u044F. \u0412\u044B\u0440\u0435\u0437\u0430\u043D \u0438\u0437 \u0446\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u0443\u0441\u043A\u0430 \u0445\u0440\u0430\u043C\u043E\u0432\u043E\u0433\u043E \u043D\u0435\u0444\u0440\u0438\u0442\u0430.",
    "July reward. Pulled from the deepest trench of the sea.": "\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u0438\u044E\u043B\u044F. \u041F\u043E\u0434\u043D\u044F\u0442 \u0441\u043E \u0434\u043D\u0430 \u0433\u043B\u0443\u0431\u043E\u0447\u0430\u0439\u0448\u0435\u0439 \u043C\u043E\u0440\u0441\u043A\u043E\u0439 \u0432\u043F\u0430\u0434\u0438\u043D\u044B.",
    "September reward. Silver light of the harvest moon.": "\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F. \u0421\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439 \u0441\u0432\u0435\u0442 \u043E\u0441\u0435\u043D\u043D\u0435\u0439 \u043B\u0443\u043D\u044B.",
    "November reward. Burning red like autumn leaves.": "\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u043D\u043E\u044F\u0431\u0440\u044F. \u0413\u043E\u0440\u0438\u0442 \u043A\u0440\u0430\u0441\u043D\u044B\u043C, \u043A\u0430\u043A \u043E\u0441\u0435\u043D\u043D\u0438\u0435 \u043B\u0438\u0441\u0442\u044C\u044F.",
    // 0.9.8
    "I've mastered hiragana": "\u042F \u043E\u0441\u0432\u043E\u0438\u043B \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443",
    "Unlocks the kanji levels (N5\u2013N1) for studying and battles.": "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0443\u0440\u043E\u0432\u043D\u0438 \u043A\u0430\u043D\u0434\u0437\u0438 (N5\u2013N1) \u0434\u043B\u044F \u0443\u0447\u0451\u0431\u044B \u0438 \u0431\u043E\u0451\u0432.",
    "Do you know hiragana?": "\u0412\u044B \u0437\u043D\u0430\u0435\u0442\u0435 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443?",
    "Yes \u2014 I know hiragana": "\u0414\u0430 \u2014 \u044F \u0437\u043D\u0430\u044E \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443",
    "I'm a beginner": "\u042F \u043D\u043E\u0432\u0438\u0447\u043E\u043A",
    'Kanji are read with hiragana (\u304B\u306A). If you can already read all of it, you start with kanji (N5 to N1). If not, you start with \u304B\u306A only \u2014 the kanji levels open once you tick "I\'ve mastered hiragana" in Settings.': "\u041A\u0430\u043D\u0434\u0437\u0438 \u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u043E\u0439 (\u304B\u306A). \u0415\u0441\u043B\u0438 \u0432\u044B \u0443\u0436\u0435 \u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u0435\u0451 \u0432\u0441\u044E \u2014 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0435 \u0441 \u043A\u0430\u043D\u0434\u0437\u0438 (N5\u2013N1). \u0415\u0441\u043B\u0438 \u043D\u0435\u0442 \u2014 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u304B\u306A; \u0443\u0440\u043E\u0432\u043D\u0438 \u043A\u0430\u043D\u0434\u0437\u0438 \u043E\u0442\u043A\u0440\u043E\u044E\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u0435 \xAB\u042F \u043E\u0441\u0432\u043E\u0438\u043B \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443\xBB \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445.",
    "\u304B\u306A first, then kanji": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u304B\u306A, \u043F\u043E\u0442\u043E\u043C \u043A\u0430\u043D\u0434\u0437\u0438",
    'Beginners: study \u304B\u306A in Study spells until you know it by heart. Then tick "I\'ve mastered hiragana" in Settings (the sliders button, top-right) \u2014 and the kanji levels N5 to N1 open for studying and battles.': "\u041D\u043E\u0432\u0438\u0447\u043A\u0430\u043C: \u0443\u0447\u0438\u0442\u0435 \u304B\u306A \u0432 \xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB, \u043F\u043E\u043A\u0430 \u043D\u0435 \u0432\u044B\u0443\u0447\u0438\u0442\u0435 \u043D\u0430\u0438\u0437\u0443\u0441\u0442\u044C. \u0417\u0430\u0442\u0435\u043C \u043E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \xAB\u042F \u043E\u0441\u0432\u043E\u0438\u043B \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443\xBB \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 (\u043A\u043D\u043E\u043F\u043A\u0430 \u0441 \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430\u043C\u0438 \u0441\u043F\u0440\u0430\u0432\u0430 \u0432\u0432\u0435\u0440\u0445\u0443) \u2014 \u0438 \u043E\u0442\u043A\u0440\u043E\u044E\u0442\u0441\u044F \u0443\u0440\u043E\u0432\u043D\u0438 \u043A\u0430\u043D\u0434\u0437\u0438 N5\u2013N1 \u0434\u043B\u044F \u0443\u0447\u0451\u0431\u044B \u0438 \u0431\u043E\u0451\u0432.",
    'Master hiragana first (Study spells \u2192 \u3072\u3089\u304C\u306A), then tick "I\'ve mastered hiragana" in Settings': "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0441\u0432\u043E\u0439\u0442\u0435 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443 (\xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB \u2192 \u3072\u3089\u304C\u306A), \u0437\u0430\u0442\u0435\u043C \u043E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \xAB\u042F \u043E\u0441\u0432\u043E\u0438\u043B \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443\xBB \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445",
    "Kanji levels unlocked \u2014 pick N5 in Study spells to start!": "\u0423\u0440\u043E\u0432\u043D\u0438 \u043A\u0430\u043D\u0434\u0437\u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B \u2014 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 N5 \u0432 \xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB!",
    "Back to \u304B\u306A only: kanji levels are locked.": "\u0421\u043D\u043E\u0432\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u304B\u306A: \u0443\u0440\u043E\u0432\u043D\u0438 \u043A\u0430\u043D\u0434\u0437\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044B.",
    "Write the kanji": "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u0430\u043D\u0434\u0437\u0438",
    "the kana is written for you": "\u043A\u0430\u043D\u0430 \u0443\u0436\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0430 \u0437\u0430 \u0432\u0430\u0441",
    "Wk": "\u041D\u0435\u0434.",
    "online": "\u0432 \u0441\u0435\u0442\u0438",
    "Requests": "\u0417\u0430\u043F\u0440\u043E\u0441\u044B",
    "Friend requests": "\u0417\u0430\u043F\u0440\u043E\u0441\u044B \u0432 \u0434\u0440\u0443\u0437\u044C\u044F",
    "No friend requests right now.": "\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0435\u0442 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 \u0434\u0440\u0443\u0437\u044C\u044F.",
    "No friends yet \u2014 add someone below.": "\u0414\u0440\u0443\u0437\u0435\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u2014 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u0433\u043E-\u043D\u0438\u0431\u0443\u0434\u044C \u043D\u0438\u0436\u0435.",
    "Your level": "\u0412\u0430\u0448 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
    "Activity calendar": "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438",
    "Previous month": "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446",
    "Next month": "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446",
    // 0.9.8.1 — achievements, battle keyboard
    "Achievement unlocked!": "\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E!",
    "Locked": "\u0417\u0430\u043A\u0440\u044B\u0442\u043E",
    "Unlocked \u2713": "\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u2713",
    "Achievements": "\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F",
    "Battle keyboard": "\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u0432 \u0431\u043E\u044E",
    "Game keyboard": "\u0418\u0433\u0440\u043E\u0432\u0430\u044F",
    "Phone keyboard": "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u0430\u044F",
    "Cast \u23CE": "\u041A\u043E\u043B\u0434\u043E\u0432\u0430\u0442\u044C \u23CE",
    "First Victory": "\u041F\u0435\u0440\u0432\u0430\u044F \u043F\u043E\u0431\u0435\u0434\u0430",
    "Win a battle.": "\u0412\u044B\u0438\u0433\u0440\u0430\u0439\u0442\u0435 \u0431\u043E\u0439.",
    "Veteran": "\u0412\u0435\u0442\u0435\u0440\u0430\u043D",
    "Win 25 battles.": "\u0412\u044B\u0438\u0433\u0440\u0430\u0439\u0442\u0435 25 \u0431\u043E\u0451\u0432.",
    "Champion": "\u0427\u0435\u043C\u043F\u0438\u043E\u043D",
    "Win 100 battles.": "\u0412\u044B\u0438\u0433\u0440\u0430\u0439\u0442\u0435 100 \u0431\u043E\u0451\u0432.",
    "On Fire": "\u0412 \u043E\u0433\u043D\u0435",
    "Cast 5 correct spells in a row in a battle.": "\u0421\u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435 5 \u0432\u0435\u0440\u043D\u044B\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u043F\u043E\u0434\u0440\u044F\u0434 \u0432 \u0431\u043E\u044E.",
    "Inferno": "\u0418\u043D\u0444\u0435\u0440\u043D\u043E",
    "Reach a 10\xD7 combo in a battle.": "\u041D\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043C\u0431\u043E \xD710 \u0432 \u0431\u043E\u044E.",
    "Unstoppable": "\u041D\u0435\u0443\u0434\u0435\u0440\u0436\u0438\u043C\u044B\u0439",
    "Reach a 20\xD7 combo in a battle.": "\u041D\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043C\u0431\u043E \xD720 \u0432 \u0431\u043E\u044E.",
    "Flawless": "\u0411\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u043E",
    "Win a battle with 100% accuracy (at least 10 answers).": "\u0412\u044B\u0438\u0433\u0440\u0430\u0439\u0442\u0435 \u0431\u043E\u0439 \u0441\u043E 100% \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C\u044E (\u043C\u0438\u043D\u0438\u043C\u0443\u043C 10 \u043E\u0442\u0432\u0435\u0442\u043E\u0432).",
    "Dragon Slayer": "\u0423\u0431\u0438\u0439\u0446\u0430 \u0434\u0440\u0430\u043A\u043E\u043D\u0430",
    "Defeat the Black Dragon in Boss Elimination.": "\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435 \u0427\u0451\u0440\u043D\u043E\u0433\u043E \u0434\u0440\u0430\u043A\u043E\u043D\u0430 \u0432 \u0411\u0438\u0442\u0432\u0435 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C.",
    "Card Sage": "\u041C\u0443\u0434\u0440\u0435\u0446 \u043A\u0430\u0440\u0442",
    "Win a Deck Duel.": "\u0412\u044B\u0438\u0433\u0440\u0430\u0439\u0442\u0435 \u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434.",
    "Calligrapher": "\u041A\u0430\u043B\u043B\u0438\u0433\u0440\u0430\u0444",
    "Win a Kanji Writing duel.": "\u0412\u044B\u0438\u0433\u0440\u0430\u0439\u0442\u0435 \u0434\u0443\u044D\u043B\u044C \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438.",
    "Quickdraw": "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0440\u0443\u043A\u0430",
    "Win a Rapid duel.": "\u0412\u044B\u0438\u0433\u0440\u0430\u0439\u0442\u0435 \u0434\u0443\u044D\u043B\u044C \u0411\u043B\u0438\u0446.",
    "Scholar": "\u0423\u0447\u0451\u043D\u044B\u0439",
    "Learn 100 spells in Study spells.": "\u0412\u044B\u0443\u0447\u0438\u0442\u0435 100 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u0432 \xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB.",
    "Archmage": "\u0410\u0440\u0445\u0438\u043C\u0430\u0433",
    "Learn 1,000 spells.": "\u0412\u044B\u0443\u0447\u0438\u0442\u0435 1000 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439.",
    "Kana Graduate": "\u0412\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A \u043A\u0430\u043D\u044B",
    'Start as a \u304B\u306A beginner, then tick "I\'ve mastered hiragana" in Settings.': "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u043D\u043E\u0432\u0438\u0447\u043A\u043E\u043C \u304B\u306A, \u0437\u0430\u0442\u0435\u043C \u043E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \xAB\u042F \u043E\u0441\u0432\u043E\u0438\u043B \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443\xBB \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445.",
    "Devoted": "\u041F\u0440\u0435\u0434\u0430\u043D\u043D\u044B\u0439",
    "Log in 7 days in a row.": "\u0417\u0430\u0445\u043E\u0434\u0438\u0442\u0435 7 \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434.",
    "Eternal Flame": "\u0412\u0435\u0447\u043D\u043E\u0435 \u043F\u043B\u0430\u043C\u044F",
    "Log in 30 days in a row.": "\u0417\u0430\u0445\u043E\u0434\u0438\u0442\u0435 30 \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434.",
    "Perfect Day": "\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0435\u043D\u044C",
    "Get 10 / 10 in the Daily challenge.": "\u041D\u0430\u0431\u0435\u0440\u0438\u0442\u0435 10 / 10 \u0432 \u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u043C \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0438.",
    "Fellowship": "\u0411\u0440\u0430\u0442\u0441\u0442\u0432\u043E",
    "Make a friend.": "\u0417\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0430.",
    "Seasonal": "\u0421\u0435\u0437\u043E\u043D\u043D\u044B\u0439",
    "Complete a month's goals and earn its reward.": "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0446\u0435\u043B\u0438 \u043C\u0435\u0441\u044F\u0446\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u0443.",
    "Grand Wizard": "\u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u043C\u0430\u0433",
    "Reach level 10.": "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0438\u0442\u0435 10 \u0443\u0440\u043E\u0432\u043D\u044F.",
    "Kingslayer": "\u0426\u0430\u0440\u0435\u0443\u0431\u0438\u0439\u0446\u0430",
    "Beat an admin in a battle.": "\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0432 \u0431\u043E\u044E.",
    // 0.9.8.2 — mode and Deck Duel guides
    "A kanji appears: type its reading in kana or romaji, Enter.": "\u041F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043D\u0434\u0437\u0438: \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0435\u0433\u043E \u0447\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u043E\u0439 \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter.",
    "Your HP depends on how hard your opponent hits (their levels). Most HP after 5 min wins.": "\u0412\u0430\u0448\u0435 HP \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0441\u0438\u043B\u044C\u043D\u043E \u0431\u044C\u0451\u0442 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A (\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u0438). \u0427\u0435\u0440\u0435\u0437 5 \u043C\u0438\u043D\u0443\u0442 \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u0442\u043E\u0442, \u0443 \u043A\u043E\u0433\u043E \u0431\u043E\u043B\u044C\u0448\u0435 HP.",
    "Right = damage, with the same combo and speed bonus as Reading.": "\u0412\u0435\u0440\u043D\u043E = \u0443\u0440\u043E\u043D, \u0441 \u0442\u0435\u043C \u0436\u0435 \u0431\u043E\u043D\u0443\u0441\u043E\u043C \u0437\u0430 \u043A\u043E\u043C\u0431\u043E \u0438 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C, \u0447\u0442\u043E \u0438 \u0432 \u0427\u0442\u0435\u043D\u0438\u0438.",
    "Each of you gets your own kanji: type the reading. Right answers hit the dragon.": "\u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0432\u043E\u0438 \u043A\u0430\u043D\u0434\u0437\u0438: \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u0435. \u0412\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u0431\u044C\u044E\u0442 \u0434\u0440\u0430\u043A\u043E\u043D\u0430.",
    "Slay it within 5 minutes. If everyone falls, the dragon wins.": "\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435 \u0435\u0433\u043E \u0437\u0430 5 \u043C\u0438\u043D\u0443\u0442. \u0415\u0441\u043B\u0438 \u043F\u0430\u0434\u0443\u0442 \u0432\u0441\u0435 \u2014 \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u0434\u0440\u0430\u043A\u043E\u043D.",
    "First correct reading (kana or romaji) hits the other player.": "\u041F\u0435\u0440\u0432\u043E\u0435 \u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 (\u043A\u0430\u043D\u0430 \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438) \u0431\u044C\u0451\u0442 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430.",
    "Same HP for both. Last wizard standing wins.": "\u0423 \u043E\u0431\u043E\u0438\u0445 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E\u0435 HP. \u041F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0443\u0441\u0442\u043E\u044F\u0432\u0448\u0438\u0439 \u043C\u0430\u0433.",
    "Right = a spell at your opponent. Faster and in a row = more damage (combo up to \xD71.5; 5 in a row sets you on fire \u{1F525}).": "\u0412\u0435\u0440\u043D\u043E = \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u0432 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430. \u0411\u044B\u0441\u0442\u0440\u0435\u0435 \u0438 \u043F\u043E\u0434\u0440\u044F\u0434 = \u0431\u043E\u043B\u044C\u0448\u0435 \u0443\u0440\u043E\u043D\u0430 (\u043A\u043E\u043C\u0431\u043E \u0434\u043E \xD71.5; 5 \u043F\u043E\u0434\u0440\u044F\u0434 \u043F\u043E\u0434\u0436\u0438\u0433\u0430\u044E\u0442 \u0432\u0430\u0441 \u{1F525}).",
    "Goal": "\u0426\u0435\u043B\u044C",
    "Cards": "\u041A\u0430\u0440\u0442\u044B",
    "A turn": "\u0425\u043E\u0434",
    "Rewards": "\u041D\u0430\u0433\u0440\u0430\u0434\u044B",
    "Both start with 800 HP and 200 mana (+10 each turn). Bring your opponent to 0. No mana for any of your cards = your turn is skipped (\u2212100 HP).": "\u041E\u0431\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442 \u0441 800 HP \u0438 200 \u043C\u0430\u043D\u044B (+10 \u043A\u0430\u0436\u0434\u044B\u0439 \u0445\u043E\u0434). \u0414\u043E\u0432\u0435\u0434\u0438\u0442\u0435 HP \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430 \u0434\u043E 0. \u041D\u0435\u0442 \u043C\u0430\u043D\u044B \u043D\u0438 \u043D\u0430 \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u0443 = \u0445\u043E\u0434 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F (\u2212100 HP).",
    "Heroes and their Omnipotence \u2014 100 mana, then 4 turns cooldown (Goblin 5)": "\u0413\u0435\u0440\u043E\u0438 \u0438 \u0438\u0445 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u2014 100 \u043C\u0430\u043D\u044B, \u0437\u0430\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430 4 \u0445\u043E\u0434\u0430 (\u0443 \u0413\u043E\u0431\u043B\u0438\u043D\u0430 5)",
    "Win 4000 XP \xB7 draw 2500 \xB7 lose 1500 \xB7 forfeit 0 (half against AI). Every kanji of the duel joins your All spells.": "\u041F\u043E\u0431\u0435\u0434\u0430 4000 \u043E\u043F\u044B\u0442\u0430 \xB7 \u043D\u0438\u0447\u044C\u044F 2500 \xB7 \u043F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435 1500 \xB7 \u0441\u0434\u0430\u0447\u0430 0 (\u043F\u0440\u043E\u0442\u0438\u0432 \u0418\u0418 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0430). \u0412\u0441\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 \u0434\u0443\u044D\u043B\u0438 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u0432\u043E \xAB\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB.",
    "Pick a hero (30 s).": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0435\u0440\u043E\u044F (30 \u0441).",
    "Coin flip, then draft: take 2 face-down cards at a time (20 s for both) until you each have 10. You see colours, not kanji.": "\u0416\u0440\u0435\u0431\u0438\u0439, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0431\u043E\u0440: \u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E 2 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0435 \u043A\u0430\u0440\u0442\u044B (20 \u0441 \u043D\u0430 \u043E\u0431\u0435), \u043F\u043E\u043A\u0430 \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 10. \u0412\u0438\u0434\u043D\u044B \u0446\u0432\u0435\u0442\u0430, \u0430 \u043D\u0435 \u043A\u0430\u043D\u0434\u0437\u0438.",
    "Your turn: 15 s to choose a card. Its mana is paid right away \u2014 even if you then miss.": "\u0412\u0430\u0448 \u0445\u043E\u0434: 15 \u0441 \u043D\u0430 \u0432\u044B\u0431\u043E\u0440 \u043A\u0430\u0440\u0442\u044B. \u041C\u0430\u043D\u0430 \u0441\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0440\u0430\u0437\u0443 \u2014 \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u043F\u043E\u0442\u043E\u043C \u043E\u0448\u0438\u0431\u0451\u0442\u0435\u0441\u044C.",
    "The card flips: read its reading and meaning (up to 15 s), then press Ready to look at the kanji.": "\u041A\u0430\u0440\u0442\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F: \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 (\u0434\u043E 15 \u0441), \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0413\u043E\u0442\u043E\u0432\xBB, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043A\u0430\u043D\u0434\u0437\u0438.",
    "Press CAST! \u2014 the kanji disappears and you write it from memory (pad with eraser, or Japanese keyboard). 1 minute for all three steps. Your opponent watches you write.": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 CAST! \u2014 \u043A\u0430\u043D\u0434\u0437\u0438 \u0438\u0441\u0447\u0435\u0437\u043D\u0435\u0442, \u0438 \u0432\u044B \u043F\u0438\u0448\u0435\u0442\u0435 \u0435\u0433\u043E \u043F\u043E \u043F\u0430\u043C\u044F\u0442\u0438 (\u043F\u0430\u043D\u0435\u043B\u044C \u0441 \u043B\u0430\u0441\u0442\u0438\u043A\u043E\u043C \u0438\u043B\u0438 \u044F\u043F\u043E\u043D\u0441\u043A\u0430\u044F \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430). 1 \u043C\u0438\u043D\u0443\u0442\u0430 \u043D\u0430 \u0432\u0441\u0435 \u0442\u0440\u0438 \u0448\u0430\u0433\u0430. \u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u0432\u0438\u0434\u0438\u0442, \u043A\u0430\u043A \u0432\u044B \u043F\u0438\u0448\u0435\u0442\u0435.",
    "Right \u2192 the spell hits / heals / gives mana, and you get 50% of its mana back. Wrong or too slow \u2192 the card rips. Either way the correct kanji shows for 2 s.": "\u0412\u0435\u0440\u043D\u043E \u2192 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u0431\u044C\u0451\u0442 / \u043B\u0435\u0447\u0438\u0442 / \u0434\u0430\u0451\u0442 \u043C\u0430\u043D\u0443, \u0438 \u0432\u0430\u043C \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F 50% \u0435\u0451 \u043C\u0430\u043D\u044B. \u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u043B\u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u2192 \u043A\u0430\u0440\u0442\u0430 \u0440\u0432\u0451\u0442\u0441\u044F. \u0412 \u043B\u044E\u0431\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043D\u0434\u0437\u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F 2 \u0441.",
    "While your opponent plays, you can read the list of kanji in your hand (not which card is which).": "\u041F\u043E\u043A\u0430 \u0445\u043E\u0434\u0438\u0442 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A, \u043C\u043E\u0436\u043D\u043E \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u043D\u0434\u0437\u0438 \u0443 \u0432\u0430\u0441 \u0432 \u0440\u0443\u043A\u0435 (\u043D\u043E \u043D\u0435 \u043A\u0430\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u043A\u0430\u043A\u0430\u044F).",
    "Omnipotence: once per cooldown, fire your hero's ultimate power with the button bottom-left. While it's active you burn in your flame colour (Customize \u2192 Omnipotence).": "\u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E: \u0440\u0430\u0437 \u0437\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0443 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0443\u043F\u0435\u0440\u0441\u0438\u043B\u0443 \u0433\u0435\u0440\u043E\u044F \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u0441\u043B\u0435\u0432\u0430 \u0432\u043D\u0438\u0437\u0443. \u041F\u043E\u043A\u0430 \u043E\u043D\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0430, \u0432\u044B \u0433\u043E\u0440\u0438\u0442\u0435 \u043F\u043B\u0430\u043C\u0435\u043D\u0435\u043C \u0441\u0432\u043E\u0435\u0433\u043E \u0446\u0432\u0435\u0442\u0430 (\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u2192 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E).",
    "After 8 min: overtime \u2014 the cards and Omnipotence are gone and it becomes a 1v1 Rapid duel with the HP you have: random kanji (N5\u2013N1), the first to type the reading (hiragana or romaji) hits, harder words hit harder. 3 min, then the higher HP wins.": "\u0427\u0435\u0440\u0435\u0437 8 \u043C\u0438\u043D\u0443\u0442 \u2014 \u043E\u0432\u0435\u0440\u0442\u0430\u0439\u043C: \u043A\u0430\u0440\u0442 \u0438 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442, \u044D\u0442\u043E \u0434\u0443\u044D\u043B\u044C \u0411\u043B\u0438\u0446 1 \u043D\u0430 1 \u0441 \u0432\u0430\u0448\u0438\u043C \u0442\u0435\u043A\u0443\u0449\u0438\u043C HP: \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 (N5\u2013N1), \u043A\u0442\u043E \u043F\u0435\u0440\u0432\u044B\u043C \u043D\u0430\u043F\u0438\u0448\u0435\u0442 \u0447\u0442\u0435\u043D\u0438\u0435 (\u0445\u0438\u0440\u0430\u0433\u0430\u043D\u043E\u0439 \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438), \u0442\u043E\u0442 \u0431\u044C\u0451\u0442; \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0431\u044C\u044E\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435. 3 \u043C\u0438\u043D\u0443\u0442\u044B, \u0437\u0430\u0442\u0435\u043C \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0438\u0439 HP.",
    "Letting the clock run out without playing a card costs 100 HP.": "\u0415\u0441\u043B\u0438 \u0432\u0440\u0435\u043C\u044F \u0432\u044B\u0439\u0434\u0435\u0442, \u0430 \u043A\u0430\u0440\u0442\u0430 \u043D\u0435 \u0441\u044B\u0433\u0440\u0430\u043D\u0430, \u2014 \u043C\u0438\u043D\u0443\u0441 100 HP.",
    "Goblin": "\u0413\u043E\u0431\u043B\u0438\u043D",
    "Knight": "\u0420\u044B\u0446\u0430\u0440\u044C",
    "Witch": "\u0412\u0435\u0434\u044C\u043C\u0430",
    "Wizard": "\u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A",
    "Frenzy: play 2 cards in a row this turn (the second costs 1.5\xD7 mana). 100 mana, then 5 turns cooldown.": "\u041D\u0435\u0438\u0441\u0442\u043E\u0432\u0441\u0442\u0432\u043E: \u0441\u044B\u0433\u0440\u0430\u0439\u0442\u0435 2 \u043A\u0430\u0440\u0442\u044B \u043F\u043E\u0434\u0440\u044F\u0434 \u0437\u0430 \u0445\u043E\u0434 (\u0432\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u043E\u0438\u0442 \u0432 1.5 \u0440\u0430\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043C\u0430\u043D\u044B). 100 \u043C\u0430\u043D\u044B, \u0437\u0430\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430 5 \u0445\u043E\u0434\u043E\u0432.",
    "Bulwark: take 45% less damage and heal 50% more for 2 turns. 100 mana, then 4 turns cooldown.": "\u041E\u043F\u043B\u043E\u0442: \u043D\u0430 2 \u0445\u043E\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u043D\u0430 45% \u043C\u0435\u043D\u044C\u0448\u0435 \u0443\u0440\u043E\u043D\u0430 \u0438 \u043B\u0435\u0447\u0438\u0442\u0435\u0441\u044C \u043D\u0430 50% \u0431\u043E\u043B\u044C\u0448\u0435. 100 \u043C\u0430\u043D\u044B, \u0437\u0430\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430 4 \u0445\u043E\u0434\u0430.",
    "Sight: for 2 turns see the kanji and reading of all your cards, and your attacks hit 35% harder (the card you write still hides its kanji). 100 mana, then 4 turns cooldown.": "\u041F\u0440\u043E\u0437\u0440\u0435\u043D\u0438\u0435: \u043D\u0430 2 \u0445\u043E\u0434\u0430 \u0432\u0438\u0434\u043D\u044B \u043A\u0430\u043D\u0434\u0437\u0438 \u0438 \u0447\u0442\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0445 \u0432\u0430\u0448\u0438\u0445 \u043A\u0430\u0440\u0442, \u0430 \u0430\u0442\u0430\u043A\u0438 \u0431\u044C\u044E\u0442 \u043D\u0430 35% \u0441\u0438\u043B\u044C\u043D\u0435\u0435 (\u043A\u0430\u043D\u0434\u0437\u0438 \u043A\u0430\u0440\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043F\u0438\u0448\u0435\u0442\u0435, \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0441\u043A\u0440\u044B\u0442). 100 \u043C\u0430\u043D\u044B, \u0437\u0430\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430 4 \u0445\u043E\u0434\u0430.",
    "Arcane reserve (passive): out of cards \u2192 draw 2 random cards before a new draft; out of mana \u2192 +30 mana. Once each.": "\u0422\u0430\u0439\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0441 (\u043F\u0430\u0441\u0441\u0438\u0432\u043D\u043E): \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u043A\u0430\u0440\u0442\u044B \u2192 2 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u044B \u0434\u043E \u043D\u043E\u0432\u043E\u0433\u043E \u043D\u0430\u0431\u043E\u0440\u0430; \u043A\u043E\u043D\u0447\u0438\u043B\u0430\u0441\u044C \u043C\u0430\u043D\u0430 \u2192 +30 \u043C\u0430\u043D\u044B. \u041F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0440\u0430\u0437\u0443.",
    "Bolt": "\u041C\u043E\u043B\u043D\u0438\u044F",
    "Frost": "\u041C\u043E\u0440\u043E\u0437",
    "Mana": "\u041C\u0430\u043D\u0430",
    "Heal": "\u041B\u0435\u0447\u0435\u043D\u0438\u0435",
    "free": "\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
    ". Crit: 1% + 1% per spell learned today (max 50%, resets daily; a crit hits \xD71.5).": ". \u041A\u0440\u0438\u0442: 1% + 1% \u0437\u0430 \u043A\u0430\u0436\u0434\u043E\u0435 \u0432\u044B\u0443\u0447\u0435\u043D\u043D\u043E\u0435 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 (\u043C\u0430\u043A\u0441. 50%, \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E; \u043A\u0440\u0438\u0442 \u0431\u044C\u0451\u0442 \xD71.5).",
    "Combos build up to \xD71.5 (5 in a row sets you on fire \u{1F525}).": "\u041A\u043E\u043C\u0431\u043E \u0440\u0430\u0441\u0442\u0451\u0442 \u0434\u043E \xD71.5 (5 \u043F\u043E\u0434\u0440\u044F\u0434 \u043F\u043E\u0434\u0436\u0438\u0433\u0430\u044E\u0442 \u0432\u0430\u0441 \u{1F525}).",
    "Keyboard": "\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",
    "\u2014 pick a hero, draft cards by colour, then cast them by writing their kanji. Bolt 90 dmg (10 mana), Frost 150 (20), Mana +60, Heal 140 (30), Inferno 340 (45). 15 s to choose a card, then 1 minute to read its meaning, look at the kanji and write it. +10 mana each turn. Out of cards \u2192 a new draft round (HP and mana stay). No mana for any of your cards \u2192 your turn is skipped (\u2212100 HP). When time runs out: overtime, a Rapid duel. Every kanji of the duel joins your": "\u2014 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0435\u0440\u043E\u044F, \u043D\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u044B \u043F\u043E \u0446\u0432\u0435\u0442\u0443, \u0437\u0430\u0442\u0435\u043C \u0440\u0430\u0437\u044B\u0433\u0440\u044B\u0432\u0430\u0439\u0442\u0435 \u0438\u0445, \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044F \u043A\u0430\u043D\u0434\u0437\u0438. \u041C\u043E\u043B\u043D\u0438\u044F 90 \u0443\u0440\u043E\u043D\u0430 (10 \u043C\u0430\u043D\u044B), \u041C\u043E\u0440\u043E\u0437 150 (20), \u041C\u0430\u043D\u0430 +60, \u041B\u0435\u0447\u0435\u043D\u0438\u0435 140 (30), \u0418\u043D\u0444\u0435\u0440\u043D\u043E 340 (45). 15 \u0441 \u043D\u0430 \u0432\u044B\u0431\u043E\u0440 \u043A\u0430\u0440\u0442\u044B, \u0437\u0430\u0442\u0435\u043C 1 \u043C\u0438\u043D\u0443\u0442\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 \u043A\u0430\u043D\u0434\u0437\u0438 \u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0435\u0433\u043E. +10 \u043C\u0430\u043D\u044B \u043A\u0430\u0436\u0434\u044B\u0439 \u0445\u043E\u0434. \u041A\u0430\u0440\u0442\u044B \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u2192 \u043D\u043E\u0432\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 (HP \u0438 \u043C\u0430\u043D\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F). \u041D\u0435\u0442 \u043C\u0430\u043D\u044B \u043D\u0438 \u043D\u0430 \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u0443 \u2192 \u0445\u043E\u0434 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F (\u2212100 HP). \u041A\u043E\u0433\u0434\u0430 \u0432\u0440\u0435\u043C\u044F \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u2014 \u043E\u0432\u0435\u0440\u0442\u0430\u0439\u043C, \u0434\u0443\u044D\u043B\u044C \u0411\u043B\u0438\u0446. \u0412\u0441\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 \u0434\u0443\u044D\u043B\u0438 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u0432",
    "\u2014 win: 300 + accuracy%; loss: 50 + accuracy%; Deck Duel: 4000 / 1500. Forfeited matches give no XP. Each level needs 1000 XP more than the last (1000, then 2000, 3000 \u2026) and unlocks backgrounds and flame colours in": "\u2014 \u043F\u043E\u0431\u0435\u0434\u0430: 300 + \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C%; \u043F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435: 50 + \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C%; \u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434: 4000 / 1500. \u0421\u0434\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0442\u0447\u0438 \u043D\u0435 \u0434\u0430\u044E\u0442 \u043E\u043F\u044B\u0442\u0430. \u041A\u0430\u0436\u0434\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043D\u0430 1000 \u043E\u043F\u044B\u0442\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0433\u043E (1000, \u0437\u0430\u0442\u0435\u043C 2000, 3000 \u2026) \u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0444\u043E\u043D\u044B \u0438 \u0446\u0432\u0435\u0442\u0430 \u043F\u043B\u0430\u043C\u0435\u043D\u0438 \u0432",
    "\u3072\u3089\u304C\u306A (hiragana) and \u30AB\u30BF\u30AB\u30CA (katakana) are the kana letters (romaji answers); N5 is easiest, N1 hardest. Your character follows your hardest level: Goblin (\u3072\u3089\u304C\u306A / \u30AB\u30BF\u30AB\u30CA), Apprentice (N5), Adventurer (N4), Knight (N3), Witch (N2), Wizard (N1). Everyone holds the magic staff they equipped in Customize. Harder words hit harder, so your opponent gets more HP.": "\u3072\u3089\u304C\u306A (\u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0430) \u0438 \u30AB\u30BF\u30AB\u30CA (\u043A\u0430\u0442\u0430\u043A\u0430\u043D\u0430) \u2014 \u044D\u0442\u043E \u0430\u0437\u0431\u0443\u043A\u0438 \u043A\u0430\u043D\u044B (\u043E\u0442\u0432\u0435\u0442 \u0440\u043E\u043C\u0430\u0434\u0437\u0438); N5 \u2014 \u0441\u0430\u043C\u044B\u0439 \u043B\u0451\u0433\u043A\u0438\u0439, N1 \u2014 \u0441\u0430\u043C\u044B\u0439 \u0442\u0440\u0443\u0434\u043D\u044B\u0439. \u0412\u0430\u0448 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0441\u0430\u043C\u043E\u0433\u043E \u0442\u0440\u0443\u0434\u043D\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F: \u0413\u043E\u0431\u043B\u0438\u043D (\u3072\u3089\u304C\u306A / \u30AB\u30BF\u30AB\u30CA), \u0423\u0447\u0435\u043D\u0438\u043A (N5), \u0418\u0441\u043A\u0430\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 (N4), \u0420\u044B\u0446\u0430\u0440\u044C (N3), \u0412\u0435\u0434\u044C\u043C\u0430 (N2), \u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A (N1). \u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u0440\u0436\u0438\u0442 \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0441\u043E\u0445, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0432 \u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u0438. \u0422\u0440\u0443\u0434\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0431\u044C\u044E\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0443 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 HP.",
    "Master hiragana first": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0441\u0432\u043E\u0439\u0442\u0435 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443",
    'Deck Duel is all kanji \u2014 tick "I\'ve mastered hiragana" in Settings first.': "\u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434 \u2014 \u044D\u0442\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u043D\u0434\u0437\u0438: \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \xAB\u042F \u043E\u0441\u0432\u043E\u0438\u043B \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443\xBB \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445.",
    "Paused": "\u041F\u0430\u0443\u0437\u0430",
    "The clock, the AI and the dragon wait for you.": "\u0412\u0440\u0435\u043C\u044F, \u0418\u0418 \u0438 \u0434\u0440\u0430\u043A\u043E\u043D \u0436\u0434\u0443\u0442 \u0432\u0430\u0441.",
    "Resume": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
    "\u275A\u275A Pause": "\u275A\u275A \u041F\u0430\u0443\u0437\u0430",
    "Pause": "\u041F\u0430\u0443\u0437\u0430",
    "You can pause only a private game against the AI (or a solo Boss run)": "\u041F\u0430\u0443\u0437\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0441\u0432\u043E\u0435\u0439 \u0438\u0433\u0440\u0435 \u043F\u0440\u043E\u0442\u0438\u0432 \u0418\u0418 (\u0438\u043B\u0438 \u0432 \u043E\u0434\u0438\u043D\u043E\u0447\u043D\u043E\u0439 \u0411\u0438\u0442\u0432\u0435 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C)",
    "Today's words": "\u0421\u043B\u043E\u0432\u0430 \u0434\u043D\u044F",
    "Study spells is a flashcard deck: the more words you know, the more spells you can cast. Words you miss in battle come back there to review.": "\xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB \u2014 \u043A\u043E\u043B\u043E\u0434\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A: \u0447\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u043B\u043E\u0432 \u0432\u044B \u0437\u043D\u0430\u0435\u0442\u0435, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0442\u0432\u043E\u0440\u0438\u0442\u044C. \u0421\u043B\u043E\u0432\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u044B \u043E\u0448\u0438\u0431\u043B\u0438\u0441\u044C \u0432 \u0431\u043E\u044E, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u0442\u0443\u0434\u0430 \u043D\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0435.",
    "Spaced repetition like Anki: each card comes back just before you would forget it.": "\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u044F, \u043A\u0430\u043A \u0432 Anki: \u043A\u0430\u0436\u0434\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u0440\u0430\u0437 \u043F\u0435\u0440\u0435\u0434 \u0442\u0435\u043C, \u043A\u0430\u043A \u0432\u044B \u0431\u044B \u0435\u0451 \u0437\u0430\u0431\u044B\u043B\u0438.",
    "Playing with AI gives half XP; a forfeit gives none.": "\u0418\u0433\u0440\u0430 \u0441 \u0418\u0418 \u0434\u0430\u0451\u0442 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0443 \u043E\u043F\u044B\u0442\u0430; \u0441\u0434\u0430\u0447\u0430 \u2014 \u043D\u0438\u0447\u0435\u0433\u043E.",
    // feedback, about, admin inbox & stats (0.9.8.5)
    "Feedback": "\u041E\u0442\u0437\u044B\u0432",
    "About": "\u041E\u0431 \u0438\u0433\u0440\u0435",
    "Bug report": "\u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435",
    "Suggestion": "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    "What is it?": "\u0427\u0442\u043E \u044D\u0442\u043E?",
    "Your message": "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
    "What happened, or what would make the game better?": "\u0427\u0442\u043E \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0438\u043B\u0438 \u0447\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u043B\u043E \u0431\u044B \u0438\u0433\u0440\u0443 \u043B\u0443\u0447\u0448\u0435?",
    "Your player name, the game version and your device type are sent with it. Thank you!": "\u0412\u043C\u0435\u0441\u0442\u0435 \u0441 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u043C \u043E\u0442\u043F\u0440\u0430\u0432\u044F\u0442\u0441\u044F \u0432\u0430\u0448\u0435 \u0438\u043C\u044F \u0438\u0433\u0440\u043E\u043A\u0430, \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B \u0438 \u0442\u0438\u043F \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430. \u0421\u043F\u0430\u0441\u0438\u0431\u043E!",
    "Write a few words first.": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0430\u0440\u0443 \u0441\u043B\u043E\u0432.",
    "Write a few words first": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u0430\u0440\u0443 \u0441\u043B\u043E\u0432",
    "Thanks! That's a lot at once \u2014 try again in a few minutes": "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u042D\u0442\u043E \u043C\u043D\u043E\u0433\u043E \u0437\u0430 \u0440\u0430\u0437 \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442",
    "Bug report sent \u2014 thank you!": "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u2014 \u0441\u043F\u0430\u0441\u0438\u0431\u043E!",
    "Suggestion sent \u2014 thank you!": "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u2014 \u0441\u043F\u0430\u0441\u0438\u0431\u043E!",
    "A game for learning Japanese: study words with spaced repetition, then cast them as spells.": "\u0418\u0433\u0440\u0430 \u0434\u043B\u044F \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F \u044F\u043F\u043E\u043D\u0441\u043A\u043E\u0433\u043E: \u0443\u0447\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u0430 \u0441 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0435\u043C, \u0430 \u0437\u0430\u0442\u0435\u043C \u043F\u0440\u043E\u0438\u0437\u043D\u043E\u0441\u0438\u0442\u0435 \u0438\u0445 \u043A\u0430\u043A \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F.",
    "Credits": "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u0438",
    "Privacy": "\u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
    "Word lists and English meanings:": "\u0421\u043F\u0438\u0441\u043A\u0438 \u0441\u043B\u043E\u0432 \u0438 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:",
    "(MIT), based on Jonathan Waller's JLPT lists (": "(MIT), \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u0432 JLPT \u0414\u0436\u043E\u043D\u0430\u0442\u0430\u043D\u0430 \u0423\u043E\u043B\u043B\u0435\u0440\u0430 (",
    ", CC BY). Those lists draw on": ", CC BY). \u042D\u0442\u0438 \u0441\u043F\u0438\u0441\u043A\u0438 \u043E\u043F\u0438\u0440\u0430\u044E\u0442\u0441\u044F \u043D\u0430",
    "by the Electronic Dictionary Research and Development Group, used under": "\u043E\u0442 Electronic Dictionary Research and Development Group, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u043E \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438",
    "Handwriting recognition:": "\u0420\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0447\u0435\u0440\u043A\u0430:",
    "by Dominik Klein (MIT); its reference strokes come from": "\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430 \u041A\u043B\u044F\u0439\u043D\u0430 (MIT); \u044D\u0442\u0430\u043B\u043E\u043D\u043D\u044B\u0435 \u0447\u0435\u0440\u0442\u044B \u0432\u0437\u044F\u0442\u044B \u0438\u0437",
    "by Ulrich Apel (CC BY-SA 3.0).": "\u0423\u043B\u044C\u0440\u0438\u0445\u0430 \u0410\u043F\u0435\u043B\u044F (CC BY-SA 3.0).",
    "3D:": "3D:",
    "Russian word meanings: translated for this game from the English meanings.": "\u0420\u0443\u0441\u0441\u043A\u0438\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u043B\u043E\u0432: \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u044B \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0438\u0433\u0440\u044B \u0441 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439.",
    "We store your player name, a scrambled (hashed) password, your progress, match history, friends and \u2014 if you upload one \u2014 your profile picture. Bug reports and suggestions you send are kept with your player name; errors include your browser type. Nothing is sold or shared. Ask the admin to delete your account and all of it is removed.": "\u041C\u044B \u0445\u0440\u0430\u043D\u0438\u043C \u0432\u0430\u0448\u0435 \u0438\u043C\u044F \u0438\u0433\u0440\u043E\u043A\u0430, \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 (\u0445\u0435\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439) \u043F\u0430\u0440\u043E\u043B\u044C, \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441, \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043C\u0430\u0442\u0447\u0435\u0439, \u0434\u0440\u0443\u0437\u0435\u0439 \u0438 \u2014 \u0435\u0441\u043B\u0438 \u0432\u044B \u0435\u0433\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0438 \u2014 \u0444\u043E\u0442\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F. \u0412\u0430\u0448\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0441 \u0432\u0430\u0448\u0438\u043C \u0438\u043C\u0435\u043D\u0435\u043C \u0438\u0433\u0440\u043E\u043A\u0430; \u043A \u043E\u0448\u0438\u0431\u043A\u0430\u043C \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0442\u0438\u043F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u0434\u0430\u0451\u0442\u0441\u044F \u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044F. \u041F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u2014 \u0438 \u0432\u0441\u0451 \u044D\u0442\u043E \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u043E.",
    "Inbox": "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435",
    "Stats": "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
    "All": "\u0412\u0441\u0435",
    "Bug reports": "\u041E\u0448\u0438\u0431\u043A\u0438",
    "Suggestions": "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
    "Errors": "\u0421\u0431\u043E\u0438",
    "Show done": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0435\u0448\u0451\u043D\u043D\u044B\u0435",
    "Error": "\u0421\u0431\u043E\u0439",
    "Reopen": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u043D\u043E\u0432\u0430",
    "\u2713 Done": "\u2713 \u0413\u043E\u0442\u043E\u0432\u043E",
    "Details": "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438",
    "Nothing here.": "\u0417\u0434\u0435\u0441\u044C \u043F\u0443\u0441\u0442\u043E.",
    "game": "\u0438\u0433\u0440\u0430",
    "Signed up": "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C",
    "Started the tutorial": "\u041D\u0430\u0447\u0430\u043B\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435",
    "Knows hiragana": "\u0417\u043D\u0430\u044E\u0442 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443",
    "Hiragana beginner": "\u041D\u043E\u0432\u0438\u0447\u043A\u0438 \u0432 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0435",
    "Started the first battle": "\u041D\u0430\u0447\u0430\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u0439 \u0431\u043E\u0439",
    "Finished the tutorial": "\u0417\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435",
    "Skipped the tutorial": "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u043B\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435",
    "online now": "\u0441\u0435\u0439\u0447\u0430\u0441 \u0432 \u0441\u0435\u0442\u0438",
    "active today": "\u0430\u043A\u0442\u0438\u0432\u043D\u044B \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    "accounts": "\u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B",
    "back on day 1": "\u0432\u0435\u0440\u043D\u0443\u043B\u0438\u0441\u044C \u043D\u0430 1-\u0439 \u0434\u0435\u043D\u044C",
    "back on day 7": "\u0432\u0435\u0440\u043D\u0443\u043B\u0438\u0441\u044C \u043D\u0430 7-\u0439 \u0434\u0435\u043D\u044C",
    "Active players (bars) and new players (+n), last 14 days": "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0438\u0433\u0440\u043E\u043A\u0438 (\u0441\u0442\u043E\u043B\u0431\u0446\u044B) \u0438 \u043D\u043E\u0432\u044B\u0435 \u0438\u0433\u0440\u043E\u043A\u0438 (+n) \u0437\u0430 14 \u0434\u043D\u0435\u0439",
    "Tutorial funnel (last 30 days)": "\u0412\u043E\u0440\u043E\u043D\u043A\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F (\u0437\u0430 30 \u0434\u043D\u0435\u0439)",
    "Games this week": "\u0418\u0433\u0440\u044B \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E",
    "No games yet.": "\u0418\u0433\u0440 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.",
    "The game is updating \u2014 you'll be reconnected in a moment.": "\u0418\u0433\u0440\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u2014 \u0432\u044B \u043F\u0435\u0440\u0435\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u0447\u0435\u0440\u0435\u0437 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u0438\u0435.",
    // 0.9.9
    "Tick levels \u2014 new random words are added every day.": "\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0443\u0440\u043E\u0432\u043D\u0438 \u2014 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430.",
    "New spells a day": "\u041D\u043E\u0432\u044B\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u0432 \u0434\u0435\u043D\u044C",
    "to review": "\u043A \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u044E",
    "Words you missed in games \u2014 you choose on the results screen.": "\u0421\u043B\u043E\u0432\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u044B \u043E\u0448\u0438\u0431\u043B\u0438\u0441\u044C \u0432 \u0438\u0433\u0440\u0430\u0445, \u2014 \u0432\u044B \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0438\u0445 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u0438\u0442\u043E\u0433\u043E\u0432.",
    "Custom spells": "\u0421\u0432\u043E\u0438 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",
    "Custom": "\u0421\u0432\u043E\u0438",
    "Your own words: from the dictionary, or any word you type in.": "\u0412\u0430\u0448\u0438 \u0441\u043B\u043E\u0432\u0430: \u0438\u0437 \u0441\u043B\u043E\u0432\u0430\u0440\u044F \u0438\u043B\u0438 \u043B\u044E\u0431\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u044B \u0432\u0432\u0435\u0434\u0451\u0442\u0435.",
    "+ Add words": "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043B\u043E\u0432\u0430",
    "JLPT quiz": "\u0422\u0435\u0441\u0442 JLPT",
    "Reading passage": "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F",
    "A short story with your struggling words, each with its reading and meaning.": "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0441 \u0432\u0430\u0448\u0438\u043C\u0438 \u0442\u0440\u0443\u0434\u043D\u044B\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438 \u2014 \u0441 \u0447\u0442\u0435\u043D\u0438\u0435\u043C \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C \u043A\u0430\u0436\u0434\u043E\u0433\u043E.",
    "10 questions from the spells you studied \u2014 readings, meanings and kanji, 4 choices each.": "10 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u043F\u043E \u0438\u0437\u0443\u0447\u0435\u043D\u043D\u044B\u043C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\u043C \u2014 \u0447\u0442\u0435\u043D\u0438\u044F, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438 \u043A\u0430\u043D\u0434\u0437\u0438, \u043F\u043E 4 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430.",
    "No spells in this deck yet.": "\u0412 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u0434\u0435 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439.",
    "Select all": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435",
    "Remove selected": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435",
    "Remove from this deck": "\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u0434\u044B",
    "Words": "\u0421\u043B\u043E\u0432\u0430",
    "Added": "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E",
    "Spell": "\u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435",
    "Translation": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
    "or type your own:": "\u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0451:",
    "No custom spells yet \u2014 search the dictionary above or type your own word.": "\u0421\u0432\u043E\u0438\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u2014 \u043D\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0432 \u0441\u043B\u043E\u0432\u0430\u0440\u0435 \u0432\u044B\u0448\u0435 \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0451.",
    "Search: kanji, kana or meaning (e.g. \u9B54\u6CD5, \u307E\u307B\u3046, magic)": "\u041F\u043E\u0438\u0441\u043A: \u043A\u0430\u043D\u0434\u0437\u0438, \u043A\u0430\u043D\u0430 \u0438\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 (\u043D\u0430\u043F\u0440. \u9B54\u6CD5, \u307E\u307B\u3046, \u043C\u0430\u0433\u0438\u044F)",
    "Word (\u6F22\u5B57)": "\u0421\u043B\u043E\u0432\u043E (\u6F22\u5B57)",
    "Reading (\u304B\u306A)": "\u0427\u0442\u0435\u043D\u0438\u0435 (\u304B\u306A)",
    "Add": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    "+ Add": "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    "\u2713 added": "\u2713 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E",
    "Not in the dictionary \u2014 add it as your own word below.": "\u041D\u0435\u0442 \u0432 \u0441\u043B\u043E\u0432\u0430\u0440\u0435 \u2014 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0435\u0433\u043E \u043A\u0430\u043A \u0441\u0432\u043E\u0451 \u0441\u043B\u043E\u0432\u043E \u043D\u0438\u0436\u0435.",
    "Study some spells first \u2014 the quiz uses the words you have studied.": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0443\u0447\u0438\u0442\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F \u2014 \u0442\u0435\u0441\u0442 \u0431\u0435\u0440\u0451\u0442 \u0438\u0437\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u0430\u043C\u0438 \u0441\u043B\u043E\u0432\u0430.",
    "New quiz": "\u041D\u043E\u0432\u044B\u0439 \u0442\u0435\u0441\u0442",
    "Choose the best meaning for the word.": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0432\u0430.",
    "Choose the best reading for the word.": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0432\u0430.",
    "Choose the right kanji for the word.": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 \u0434\u043B\u044F \u0441\u043B\u043E\u0432\u0430.",
    "\u2713 Correct!": "\u2713 \u0412\u0435\u0440\u043D\u043E!",
    "\u2014 perfect!": "\u2014 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E!",
    "Add the ones I missed": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435, \u0433\u0434\u0435 \u044F \u043E\u0448\u0438\u0431\u0441\u044F",
    "Save to": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432",
    "Read them in a story": "\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0438\u0445 \u0432 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0435",
    "New story": "\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437",
    "Tap a highlighted word for its reading and meaning.": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.",
    "Filter\u2026": "\u0424\u0438\u043B\u044C\u0442\u0440\u2026",
    "Main menu": "\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E",
    "Finish your game first": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0435 \u0438\u0433\u0440\u0443",
    "\u2694 Challenge": "\u2694 \u0412\u044B\u0437\u043E\u0432",
    "Challenge": "\u0412\u044B\u0437\u043E\u0432",
    "\u2713 Friends": "\u2713 \u0414\u0440\u0443\u0437\u044C\u044F",
    "\u2713 Request sent": "\u2713 \u0417\u0430\u043F\u0440\u043E\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D",
    "\u2713 Accept friend request": "\u2713 \u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u0432 \u0434\u0440\u0443\u0437\u044C\u044F",
    "Make admin": "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0430\u0434\u043C\u0438\u043D\u043E\u043C",
    "Remove admin": "\u0421\u043D\u044F\u0442\u044C \u0430\u0434\u043C\u0438\u043D\u0430",
    "On your profile \u2713 \u2014 click to remove": "\u0412 \u043F\u0440\u043E\u0444\u0438\u043B\u0435 \u2713 \u2014 \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0431\u0440\u0430\u0442\u044C",
    "Unlocked \u2713 \u2014 click to show on your profile": "\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u2713 \u2014 \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0435",
    "What's new": "\u0427\u0442\u043E \u043D\u043E\u0432\u043E\u0433\u043E",
    "Every mode is open from the start: Kanji Reading, Rapid, Kanji Writing, the Boss fight and Deck Duel. There is also a Daily challenge, a JLPT quiz, Progress, Friends \u2014 and monthly goals with rewards.": "\u0412\u0441\u0435 \u0440\u0435\u0436\u0438\u043C\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044B \u0441\u0440\u0430\u0437\u0443: \u0427\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438, \u0411\u043B\u0438\u0446, \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438, \u0411\u0438\u0442\u0432\u0430 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C \u0438 \u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434. \u0415\u0449\u0451 \u0435\u0441\u0442\u044C \u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435, \u0442\u0435\u0441\u0442 JLPT, \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441, \u0414\u0440\u0443\u0437\u044C\u044F \u2014 \u0438 \u0446\u0435\u043B\u0438 \u043C\u0435\u0441\u044F\u0446\u0430 \u0441 \u043D\u0430\u0433\u0440\u0430\u0434\u0430\u043C\u0438.",
    "Turn log": "\u0416\u0443\u0440\u043D\u0430\u043B \u0445\u043E\u0434\u043E\u0432",
    "Opponent": "\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A",
    "You": "\u0412\u044B",
    "Someone": "\u041A\u0442\u043E-\u0442\u043E",
    "Overtime! The cards are gone \u2014 first to type the reading hits": "\u041E\u0432\u0435\u0440\u0442\u0430\u0439\u043C! \u041A\u0430\u0440\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u2014 \u043A\u0442\u043E \u043F\u0435\u0440\u0432\u044B\u043C \u0432\u0432\u0435\u0434\u0451\u0442 \u0447\u0442\u0435\u043D\u0438\u0435, \u0442\u043E\u0442 \u0438 \u0431\u044C\u0451\u0442",
    // admin
    "Role": "\u0420\u043E\u043B\u044C",
    "Level": "\u0423\u0440\u043E\u0432\u0435\u043D\u044C",
    "XP": "\u041E\u043F\u044B\u0442",
    "Spells": "\u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",
    "Crit": "\u041A\u0440\u0438\u0442",
    "Registered": "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",
    "Status": "\u0421\u0442\u0430\u0442\u0443\u0441",
    "never logged in": "\u043D\u0438 \u0440\u0430\u0437\u0443 \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u043B",
    "AI \xB7 beginner": "\u0418\u0418 \xB7 \u043D\u043E\u0432\u0438\u0447\u043E\u043A",
    "AI player \xB7 beginner": "\u0418\u0418-\u0438\u0433\u0440\u043E\u043A \xB7 \u043D\u043E\u0432\u0438\u0447\u043E\u043A",
    // lobby
    "\u2190 Leave room": "\u2190 \u041F\u043E\u043A\u0438\u043D\u0443\u0442\u044C \u043A\u043E\u043C\u043D\u0430\u0442\u0443",
    "Room code \u2014 share it with your friend": "\u041A\u043E\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u2014 \u043E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0435\u0433\u043E \u0434\u0440\u0443\u0433\u0443",
    "Copy": "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    "Add an AI player": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0418\u0418-\u0438\u0433\u0440\u043E\u043A\u0430",
    "Beginner \u2014 slow, makes mistakes": "\u041D\u043E\u0432\u0438\u0447\u043E\u043A \u2014 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0439, \u043E\u0448\u0438\u0431\u0430\u0435\u0442\u0441\u044F",
    "N3 \u2014 intermediate": "N3 \u2014 \u0441\u0440\u0435\u0434\u043D\u0438\u0439",
    "N1 \u2014 expert": "N1 \u2014 \u044D\u043A\u0441\u043F\u0435\u0440\u0442",
    "+ Add AI": "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0418\u0418",
    "Start battle": "\u041D\u0430\u0447\u0430\u0442\u044C \u0431\u043E\u0439",
    "Ready": "\u0413\u043E\u0442\u043E\u0432",
    "Not ready": "\u041D\u0435 \u0433\u043E\u0442\u043E\u0432",
    "How much the AI knows": "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0435\u0442 \u0418\u0418",
    "Remove this AI": "\u0423\u0431\u0440\u0430\u0442\u044C \u044D\u0442\u043E\u0433\u043E \u0418\u0418",
    "away \u2014 seat kept": "\u043E\u0442\u043E\u0448\u0451\u043B \u2014 \u043C\u0435\u0441\u0442\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E",
    "Waiting for a teammate (optional)\u2026": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u043E\u044E\u0437\u043D\u0438\u043A\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)\u2026",
    "Waiting for opponent\u2026": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430\u2026",
    "Deck Duel draws cards from every level (N5\u2013N1). Your level picks only change your character here.": "\u0412 \u0414\u0443\u044D\u043B\u0438 \u043A\u043E\u043B\u043E\u0434 \u043A\u0430\u0440\u0442\u044B \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0441\u043E \u0432\u0441\u0435\u0445 \u0443\u0440\u043E\u0432\u043D\u0435\u0439 (N5\u2013N1). \u0412\u044B\u0431\u043E\u0440 \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u043C\u0435\u043D\u044F\u0435\u0442 \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430.",
    "Each player picks their own. You will write these words by hand. Harder levels hit harder \u2014 so your opponent gets more HP.": "\u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0432\u043E\u0438. \u042D\u0442\u0438 \u0441\u043B\u043E\u0432\u0430 \u0432\u044B \u0431\u0443\u0434\u0435\u0442\u0435 \u043F\u0438\u0441\u0430\u0442\u044C \u043E\u0442 \u0440\u0443\u043A\u0438. \u0421\u043B\u043E\u0436\u043D\u044B\u0435 \u0443\u0440\u043E\u0432\u043D\u0438 \u0431\u044C\u044E\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u2014 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0443 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 HP.",
    "Each player picks their own. \u3072\u3089\u304C\u306A and \u30AB\u30BF\u30AB\u30CA = the two kana alphabets, answered in romaji. Harder levels hit harder \u2014 so your opponent gets more HP.": "\u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0432\u043E\u0438. \u3072\u3089\u304C\u306A \u0438 \u30AB\u30BF\u30AB\u30CA \u2014 \u0434\u0432\u0435 \u0430\u0437\u0431\u0443\u043A\u0438 \u043A\u0430\u043D\u044B, \u043E\u0442\u0432\u0435\u0442 \u0440\u043E\u043C\u0430\u0434\u0437\u0438. \u0421\u043B\u043E\u0436\u043D\u044B\u0435 \u0443\u0440\u043E\u0432\u043D\u0438 \u0431\u044C\u044E\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u2014 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0443 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 HP.",
    "Share the code, or add an AI opponent \u2014 then press Ready. The duel starts when both are ready.": "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u0434 \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0418\u0418-\u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430 \u2014 \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0413\u043E\u0442\u043E\u0432\xBB. \u0414\u0443\u044D\u043B\u044C \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u043E\u0431\u0430 \u0431\u0443\u0434\u0443\u0442 \u0433\u043E\u0442\u043E\u0432\u044B.",
    "Waiting for your opponent to be ready\u2026": "\u0416\u0434\u0451\u043C, \u043A\u043E\u0433\u0434\u0430 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u0431\u0443\u0434\u0435\u0442 \u0433\u043E\u0442\u043E\u0432\u2026",
    "Press Ready \u2014 the duel starts when both players are ready.": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0413\u043E\u0442\u043E\u0432\xBB \u2014 \u0434\u0443\u044D\u043B\u044C \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u043E\u0431\u0430 \u0431\u0443\u0434\u0443\u0442 \u0433\u043E\u0442\u043E\u0432\u044B.",
    "Start solo": "\u041D\u0430\u0447\u0430\u0442\u044C \u0432 \u043E\u0434\u0438\u043D\u043E\u0447\u043A\u0443",
    "Waiting for the host to start\u2026": "\u0416\u0434\u0451\u043C, \u043F\u043E\u043A\u0430 \u0445\u043E\u0437\u044F\u0438\u043D \u043D\u0430\u0447\u043D\u0451\u0442\u2026",
    "Opponent left": "\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u0432\u044B\u0448\u0435\u043B",
    "Room not found": "\u041A\u043E\u043C\u043D\u0430\u0442\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",
    "Room is full": "\u041A\u043E\u043C\u043D\u0430\u0442\u0430 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0430",
    "That battle has already started": "\u042D\u0442\u043E\u0442 \u0431\u043E\u0439 \u0443\u0436\u0435 \u043D\u0430\u0447\u0430\u043B\u0441\u044F",
    // prep / battle
    "Back to lobby": "\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438",
    "Preparation": "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430",
    "Memorise the readings. They vanish when the battle starts.": "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u044F. \u041E\u043D\u0438 \u0438\u0441\u0447\u0435\u0437\u043D\u0443\u0442, \u043A\u043E\u0433\u0434\u0430 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0431\u043E\u0439.",
    "I'm ready": "\u042F \u0433\u043E\u0442\u043E\u0432",
    "Forfeit": "\u0421\u0434\u0430\u0442\u044C\u0441\u044F",
    "Tap again to forfeit": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437, \u0447\u0442\u043E\u0431\u044B \u0441\u0434\u0430\u0442\u044C\u0441\u044F",
    "Chat": "\u0427\u0430\u0442",
    "Send": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
    "Say something\u2026": "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C\u2026",
    "\u21B6 Undo": "\u21B6 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
    "\u232B Eraser": "\u232B \u041B\u0430\u0441\u0442\u0438\u043A",
    "\u2715 Clear": "\u2715 \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
    "Cast \u2726": "\u041A\u043E\u043B\u0434\u043E\u0432\u0430\u0442\u044C \u2726",
    "Handwriting pad": "\u041F\u0430\u043D\u0435\u043B\u044C \u0434\u043B\u044F \u043F\u0438\u0441\u044C\u043C\u0430",
    "Eraser: rub over a stroke to remove it (E)": "\u041B\u0430\u0441\u0442\u0438\u043A: \u043F\u0440\u043E\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E \u0447\u0435\u0440\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0435\u0440\u0435\u0442\u044C \u0435\u0451 (E)",
    "\u2026or type the kanji (Japanese keyboard), Enter": "\u2026\u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 (\u044F\u043F\u043E\u043D\u0441\u043A\u0430\u044F \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430), Enter",
    "How to write it (S)": "\u041A\u0430\u043A \u044D\u0442\u043E \u043F\u0438\u0448\u0435\u0442\u0441\u044F (S)",
    "Hide the kanji and write it (Enter)": "\u0421\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u043D\u0434\u0437\u0438 \u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C (Enter)",
    "\u304B\u306A or romaji, then Enter": "\u304B\u306A \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438, \u0437\u0430\u0442\u0435\u043C Enter",
    "romaji, then Enter": "\u0440\u043E\u043C\u0430\u0434\u0437\u0438, \u0437\u0430\u0442\u0435\u043C Enter",
    "Counts as a miss and shows the answer": "\u0417\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043F\u0440\u043E\u043C\u0430\u0445 \u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043E\u0442\u0432\u0435\u0442",
    "Hiragana spell \u2014 answer in romaji": "\u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u043E\u0439 \u2014 \u043E\u0442\u0432\u0435\u0442 \u0440\u043E\u043C\u0430\u0434\u0437\u0438",
    "\u2717 Not quite \u2014 try again!": "\u2717 \u041D\u0435 \u0441\u043E\u0432\u0441\u0435\u043C \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451!",
    "Opponent was faster!": "\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u0431\u044B\u043B \u0431\u044B\u0441\u0442\u0440\u0435\u0435!",
    "\u2717 Too slow!": "\u2717 \u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E!",
    "How to write it": "\u041A\u0430\u043A \u044D\u0442\u043E \u043F\u0438\u0448\u0435\u0442\u0441\u044F",
    "Time up": "\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E",
    "Pasting is off \u2014 write it yourself!": "\u0412\u0441\u0442\u0430\u0432\u043A\u0430 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u2014 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u0430\u043C\u0438!",
    "Use romaji for hiragana spells (switch your IME off)": "\u0414\u043B\u044F \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u043E\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0440\u043E\u043C\u0430\u0434\u0437\u0438 (\u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u0435 IME)",
    "You are on fire \u2014 immune to dragon breath!": "\u0412\u044B \u0432 \u043E\u0433\u043D\u0435 \u2014 \u0434\u044B\u0445\u0430\u043D\u0438\u0435 \u0434\u0440\u0430\u043A\u043E\u043D\u0430 \u0432\u0430\u043C \u043D\u0435 \u0441\u0442\u0440\u0430\u0448\u043D\u043E!",
    "Character power": "\u0421\u0438\u043B\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",
    // results
    "VICTORY": "\u041F\u041E\u0411\u0415\u0414\u0410",
    "DEFEAT": "\u041F\u041E\u0420\u0410\u0416\u0415\u041D\u0418\u0415",
    "DRAW": "\u041D\u0418\u0427\u042C\u042F",
    "Review \u2014 you struggled with": "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u2014 \u0432\u0430\u043C \u0431\u044B\u043B\u043E \u0442\u0440\u0443\u0434\u043D\u043E \u0441",
    "Vocabulary performance": "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E \u0441\u043B\u043E\u0432\u0430\u043C",
    "Word": "\u0421\u043B\u043E\u0432\u043E",
    "Reading": "\u0427\u0442\u0435\u043D\u0438\u0435",
    "Meaning": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    "Result": "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
    "Avg time": "\u0421\u0440. \u0432\u0440\u0435\u043C\u044F",
    "Rematch": "\u0420\u0435\u0432\u0430\u043D\u0448",
    "Leave": "\u0412\u044B\u0439\u0442\u0438",
    "Rematch requested!": "\u0420\u0435\u0432\u0430\u043D\u0448 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D!",
    "Waiting for the others to accept\u2026": "\u0416\u0434\u0451\u043C, \u043F\u043E\u043A\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u044F\u0442\u0441\u044F\u2026",
    "A player left the battle": "\u0418\u0433\u0440\u043E\u043A \u043F\u043E\u043A\u0438\u043D\u0443\u043B \u0431\u043E\u0439",
    "The Black Dragon has fallen": "\u0427\u0451\u0440\u043D\u044B\u0439 \u0434\u0440\u0430\u043A\u043E\u043D \u043F\u043E\u0432\u0435\u0440\u0436\u0435\u043D",
    "The party was burned to ash": "\u041E\u0442\u0440\u044F\u0434 \u0441\u043E\u0436\u0436\u0451\u043D \u0434\u043E\u0442\u043B\u0430",
    "Time up \u2014 you held the dragon off!": "\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E \u2014 \u0432\u044B \u0441\u0434\u0435\u0440\u0436\u0430\u043B\u0438 \u0434\u0440\u0430\u043A\u043E\u043D\u0430!",
    "Time up \u2014 most HP left wins": "\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E \u2014 \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u0442\u043E\u0442, \u0443 \u043A\u043E\u0433\u043E \u0431\u043E\u043B\u044C\u0448\u0435 HP",
    "Damage to dragon": "\u0423\u0440\u043E\u043D \u0434\u0440\u0430\u043A\u043E\u043D\u0443",
    "Damage dealt": "\u041D\u0430\u043D\u0435\u0441\u0435\u043D\u043E \u0443\u0440\u043E\u043D\u0430",
    "Avg response": "\u0421\u0440. \u043E\u0442\u0432\u0435\u0442",
    "Best combo": "\u041B\u0443\u0447\u0448\u0435\u0435 \u043A\u043E\u043C\u0431\u043E",
    "not seen": "\u043D\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043B\u043E\u0441\u044C",
    "No XP \u2014 the match was forfeited": "\u0411\u0435\u0437 \u043E\u043F\u044B\u0442\u0430 \u2014 \u043C\u0430\u0442\u0447 \u0431\u044B\u043B \u0441\u0434\u0430\u043D",
    "Got it": "\u041F\u043E\u043D\u044F\u0442\u043D\u043E",
    "Tip": "\u0421\u043E\u0432\u0435\u0442",
    // queue / match found
    "Match found!": "\u0418\u0433\u0440\u0430 \u043D\u0430\u0439\u0434\u0435\u043D\u0430!",
    "Match found": "\u0418\u0433\u0440\u0430 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",
    "Waiting for your opponent\u2026": "\u0416\u0434\u0451\u043C \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430\u2026",
    "Your opponent accepted!": "\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u043F\u0440\u0438\u043D\u044F\u043B!",
    "Your opponent didn't accept \u2014 you're back in the queue.": "\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u043D\u0435 \u043F\u0440\u0438\u043D\u044F\u043B \u2014 \u0432\u044B \u0441\u043D\u043E\u0432\u0430 \u0432 \u043E\u0447\u0435\u0440\u0435\u0434\u0438.",
    "You didn't accept in time \u2014 the queue stopped.": "\u0412\u044B \u043D\u0435 \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0432\u043E\u0432\u0440\u0435\u043C\u044F \u2014 \u043F\u043E\u0438\u0441\u043A \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D.",
    "In the online queue": "\u0412 \u043E\u043D\u043B\u0430\u0439\u043D-\u043E\u0447\u0435\u0440\u0435\u0434\u0438",
    "In the menus": "\u0412 \u043C\u0435\u043D\u044E",
    "Music on": "\u041C\u0443\u0437\u044B\u043A\u0430 \u0432\u043A\u043B.",
    "Music off": "\u041C\u0443\u0437\u044B\u043A\u0430 \u0432\u044B\u043A\u043B.",
    "Sounds on": "\u0417\u0432\u0443\u043A\u0438 \u0432\u043A\u043B.",
    "Sounds off": "\u0417\u0432\u0443\u043A\u0438 \u0432\u044B\u043A\u043B.",
    "games": "\u0438\u0433\u0440\u044B",
    "Play on 12 different days": "\u0418\u0433\u0440\u0430\u0442\u044C \u0432 12 \u0440\u0430\u0437\u043D\u044B\u0445 \u0434\u043D\u0435\u0439",
    "Win 10 games": "\u0412\u044B\u0438\u0433\u0440\u0430\u0442\u044C 10 \u0438\u0433\u0440",
    "Pass 150 flashcards in Study spells": "\u041F\u0440\u043E\u0439\u0442\u0438 150 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0432 \xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB",
    "Your turn": "\u0412\u0430\u0448 \u0445\u043E\u0434",
    "Your turn!": "\u0412\u0430\u0448 \u0445\u043E\u0434!",
    // deck duel
    "How Deck Duel works": "\u041A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434",
    "Deck Duel \u2014 choose a card": "\u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434 \u2014 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0443",
    "Your spell \u2014 read it": "\u0412\u0430\u0448\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u2014 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0435\u0433\u043E",
    "Your spell \u2014 memorise the kanji": "\u0412\u0430\u0448\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u2014 \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u0435 \u043A\u0430\u043D\u0434\u0437\u0438",
    "Write the kanji!": "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u0430\u043D\u0434\u0437\u0438!",
    "Your kanji": "\u0412\u0430\u0448 \u043A\u0430\u043D\u0434\u0437\u0438",
    "Your opponent": "\u0412\u0430\u0448 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A",
    "Reading the spell\u2026": "\u0427\u0438\u0442\u0430\u0435\u0442 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435\u2026",
    "Studying the kanji\u2026": "\u0418\u0437\u0443\u0447\u0430\u0435\u0442 \u043A\u0430\u043D\u0434\u0437\u0438\u2026",
    "Choose your hero": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0435\u0440\u043E\u044F",
    "Memorise it \u2014 it disappears when you cast": "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u0435 \u2014 \u043E\u043D \u0438\u0441\u0447\u0435\u0437\u043D\u0435\u0442, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u043D\u0430\u0447\u043D\u0451\u0442\u0435 \u043A\u043E\u043B\u0434\u043E\u0432\u0430\u0442\u044C",
    "You won the coin flip \u2014 you pick first": "\u0412\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B\u0438 \u0436\u0440\u0435\u0431\u0438\u0439 \u2014 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C",
    "Your opponent won the coin flip": "\u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u0432\u044B\u0438\u0433\u0440\u0430\u043B \u0436\u0440\u0435\u0431\u0438\u0439",
    "You only see the colour \u2014 the kanji stays hidden until the card is played.": "\u0412\u0438\u0434\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0432\u0435\u0442 \u2014 \u043A\u0430\u043D\u0434\u0437\u0438 \u0441\u043A\u0440\u044B\u0442, \u043F\u043E\u043A\u0430 \u043A\u0430\u0440\u0442\u0443 \u043D\u0435 \u0440\u0430\u0437\u044B\u0433\u0440\u0430\u044E\u0442.",
    "Overtime \u2014 the cards are gone: type the readings!": "\u041E\u0432\u0435\u0440\u0442\u0430\u0439\u043C \u2014 \u043A\u0430\u0440\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442: \u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u044F!",
    "First to type its reading hits \xB7 wrong? try again": "\u041A\u0442\u043E \u043F\u0435\u0440\u0432\u044B\u043C \u043D\u0430\u043F\u0438\u0448\u0435\u0442 \u0447\u0442\u0435\u043D\u0438\u0435, \u0442\u043E\u0442 \u0431\u044C\u0451\u0442 \xB7 \u043E\u0448\u0438\u0431\u043B\u0438\u0441\u044C? \u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451",
    "Type it in romaji\u2026": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u043E\u043C\u0430\u0434\u0437\u0438\u2026",
    "Reading (kana or romaji)\u2026": "\u0427\u0442\u0435\u043D\u0438\u0435 (\u043A\u0430\u043D\u0430 \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438)\u2026",
    "The correct kanji": "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043D\u0434\u0437\u0438",
    "\u2717 Nobody got it": "\u2717 \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0443\u0433\u0430\u0434\u0430\u043B",
    "\u2717 The spell fizzles": "\u2717 \u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u0440\u0430\u0441\u0441\u0435\u044F\u043B\u043E\u0441\u044C",
    "Rapid hit": "\u0423\u0434\u0430\u0440 \u0432 \u0431\u043B\u0438\u0446\u0435",
    "passive \xB7 tap for info": "\u043F\u0430\u0441\u0441\u0438\u0432\u043D\u043E \xB7 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438",
    "cards used": "\u043A\u0430\u0440\u0442 \u0441\u044B\u0433\u0440\u0430\u043D\u043E",
    "+2 cards ready": "+2 \u043A\u0430\u0440\u0442\u044B \u0433\u043E\u0442\u043E\u0432\u044B",
    "mana used": "\u043C\u0430\u043D\u044B \u043F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E",
    "+30 mana ready": "+30 \u043C\u0430\u043D\u044B \u0433\u043E\u0442\u043E\u0432\u043E",
    "Out of cards \u2192 Round 2 draft. HP, mana and powers stay.": "\u041A\u0430\u0440\u0442\u044B \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u2192 \u043D\u0430\u0431\u043E\u0440 \u0440\u0430\u0443\u043D\u0434\u0430 2. HP, \u043C\u0430\u043D\u0430 \u0438 \u0441\u0438\u043B\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F.",
    // tutorial
    "Welcome": "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C",
    "Welcome, apprentice": "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, \u0443\u0447\u0435\u043D\u0438\u043A",
    "In Kanji Wizards every spell is a Japanese word. Learn a word \u2014 and you can cast it at your opponent.": "\u0412 Kanji Wizards \u043A\u0430\u0436\u0434\u043E\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u2014 \u044F\u043F\u043E\u043D\u0441\u043A\u043E\u0435 \u0441\u043B\u043E\u0432\u043E. \u0412\u044B\u0443\u0447\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u2014 \u0438 \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043C\u0435\u0442\u043D\u0443\u0442\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430.",
    "Cast by reading": "\u041A\u043E\u043B\u0434\u0443\u0439\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u0435\u043C",
    "A kanji appears; type how it is read \u2014 in hiragana, or in romaji with a normal keyboard \u2014 and press Enter. Fast and right in a row hits harder.": "\u041F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043D\u0434\u0437\u0438; \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435, \u043A\u0430\u043A \u043E\u043D \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u2014 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u043E\u0439 \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438 \u043D\u0430 \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435 \u2014 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter. \u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u043F\u043E\u0434\u0440\u044F\u0434 \u0431\u044C\u044E\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435.",
    "Study makes you stronger": "\u0423\u0447\u0451\u0431\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435",
    "Study spells is a flashcard deck. Every spell you learn today raises your critical-hit chance, and words you miss in battle come back there to review.": "\xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB \u2014 \u044D\u0442\u043E \u043A\u043E\u043B\u043E\u0434\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A. \u041A\u0430\u0436\u0434\u043E\u0435 \u0432\u044B\u0443\u0447\u0435\u043D\u043D\u043E\u0435 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u0448\u0430\u043D\u0441 \u043A\u0440\u0438\u0442\u0430, \u0430 \u0441\u043B\u043E\u0432\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u044B \u043E\u0448\u0438\u0431\u043B\u0438\u0441\u044C \u0432 \u0431\u043E\u044E, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u0442\u0443\u0434\u0430 \u043D\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0435.",
    "All modes are open": "\u0412\u0441\u0435 \u0440\u0435\u0436\u0438\u043C\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044B",
    "Kanji Reading, Rapid, Kanji Writing, the Boss fight and Deck Duel are all open from the start. There is also a Daily challenge, a JLPT quiz, Progress, Friends \u2014 and monthly goals with rewards.": "\u0427\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438, \u0411\u043B\u0438\u0446, \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438, \u0411\u0438\u0442\u0432\u0430 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C \u0438 \u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434 \u043E\u0442\u043A\u0440\u044B\u0442\u044B \u0441\u0440\u0430\u0437\u0443. \u0415\u0449\u0451 \u0435\u0441\u0442\u044C \u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435, \u0442\u0435\u0441\u0442 JLPT, \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441, \u0414\u0440\u0443\u0437\u044C\u044F \u0438 \u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0435 \u0446\u0435\u043B\u0438 \u0441 \u043D\u0430\u0433\u0440\u0430\u0434\u0430\u043C\u0438.",
    "Your first battle": "\u0412\u0430\u0448 \u043F\u0435\u0440\u0432\u044B\u0439 \u0431\u043E\u0439",
    "Ready? You'll study 10 easy words for a minute, then duel a beginner AI with them.": "\u0413\u043E\u0442\u043E\u0432\u044B? \u041C\u0438\u043D\u0443\u0442\u0443 \u0432\u044B \u0443\u0447\u0438\u0442\u0435 10 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u0441\u043B\u043E\u0432, \u043F\u043E\u0442\u043E\u043C \u0441\u0440\u0430\u0436\u0430\u0435\u0442\u0435\u0441\u044C \u0438\u043C\u0438 \u0441 \u0418\u0418-\u043D\u043E\u0432\u0438\u0447\u043A\u043E\u043C.",
    "type its reading: yama": "\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u0435: yama",
    "Mountain \u2014 try it!": "\u0413\u043E\u0440\u0430 \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435!",
    "Not quite \u2014 it's \u3084\u307E (yama)": "\u041D\u0435 \u0441\u043E\u0432\u0441\u0435\u043C \u2014 \u044D\u0442\u043E \u3084\u307E (yama)",
    "\u2713 \u3084\u307E \u2014 a spell!": "\u2713 \u3084\u307E \u2014 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435!",
    "Fight a beginner AI": "\u0421\u0440\u0430\u0437\u0438\u0442\u044C\u0441\u044F \u0441 \u0418\u0418-\u043D\u043E\u0432\u0438\u0447\u043A\u043E\u043C",
    "Maybe later": "\u041C\u043E\u0436\u0435\u0442, \u043F\u043E\u0437\u0436\u0435",
    "Skip tutorial": "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435",
    "Next": "\u0414\u0430\u043B\u0435\u0435",
    "Read the 10 words \u2014 reading and meaning. When the battle starts, they come back as kanji only. Press Ready when you're done.": "\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u0439\u0442\u0435 10 \u0441\u043B\u043E\u0432 \u2014 \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435. \u0412 \u0431\u043E\u044E \u043E\u043D\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u043D\u0434\u0437\u0438. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0413\u043E\u0442\u043E\u0432\xBB, \u043A\u043E\u0433\u0434\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0435.",
    "Type the reading of the kanji (hiragana or romaji) and press Enter. Don't know it? Esc skips. Keep your HP above the AI's!": "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 (\u0445\u0438\u0440\u0430\u0433\u0430\u043D\u043E\u0439 \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438) \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter. \u041D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435? Esc \u2014 \u043F\u0440\u043E\u043F\u0443\u0441\u043A. \u0414\u0435\u0440\u0436\u0438\u0442\u0435 HP \u0432\u044B\u0448\u0435, \u0447\u0435\u043C \u0443 \u0418\u0418!",
    "Well cast! Words you missed are now in Study spells \u2192 Struggling. Level up to unlock Writing, Boss and Deck Duel.": "\u041E\u0442\u043B\u0438\u0447\u043D\u043E\u0435 \u043A\u043E\u043B\u0434\u043E\u0432\u0441\u0442\u0432\u043E! \u0421\u043B\u043E\u0432\u0430 \u0441 \u043E\u0448\u0438\u0431\u043A\u0430\u043C\u0438 \u0442\u0435\u043F\u0435\u0440\u044C \u0432 \xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F \u2192 \u0422\u0440\u0443\u0434\u043D\u044B\u0435\xBB. \u041F\u043E\u0432\u044B\u0448\u0430\u0439\u0442\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u0411\u043E\u0441\u0441\u0430 \u0438 \u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434.",
    // how to play (guide)
    "Create a room": "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043A\u043E\u043C\u043D\u0430\u0442\u0443",
    ", pick a mode, and send the 4-letter code to a friend. On a phone you can switch apps to send it \u2014 your seat is kept for 5 minutes.": ", \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043C \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0434\u0440\u0443\u0433\u0443 4-\u0431\u0443\u043A\u0432\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u0434. \u041D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u0432 \u0434\u0440\u0443\u0433\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2014 \u043C\u0435\u0441\u0442\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F 5 \u043C\u0438\u043D\u0443\u0442.",
    "Pick your levels.": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u043D\u0438.",
    "Modes": "\u0420\u0435\u0436\u0438\u043C\u044B",
    "Rapid": "\u0411\u043B\u0438\u0446",
    "Writing": "\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    "Boss": "\u0411\u043E\u0441\u0441",
    "\u2014 study 10 words, then type each reading (\u304B\u306A or romaji).": "\u2014 \u0432\u044B\u0443\u0447\u0438\u0442\u0435 10 \u0441\u043B\u043E\u0432, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u0436\u0434\u043E\u0433\u043E (\u304B\u306A \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438).",
    "\u2014 no study; both get the same kanji, first correct reading hits.": "\u2014 \u0431\u0435\u0437 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438; \u0443 \u043E\u0431\u043E\u0438\u0445 \u043E\u0434\u0438\u043D \u043A\u0430\u043D\u0434\u0437\u0438, \u0431\u044C\u0451\u0442 \u043F\u0435\u0440\u0432\u043E\u0435 \u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435.",
    "\u2014 look at the kanji, press CAST! (up to 3.5 s), then write it from memory on the pad or type it with a Japanese keyboard. Messy is fine.": "\u2014 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0434\u0437\u0438, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 CAST! (\u0434\u043E 3,5 \u0441), \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u043E \u043F\u0430\u043C\u044F\u0442\u0438 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043B\u0438 \u044F\u043F\u043E\u043D\u0441\u043A\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u043E\u0439. \u041D\u0435\u0440\u043E\u0432\u043D\u043E \u2014 \u043D\u0435 \u0441\u0442\u0440\u0430\u0448\u043D\u043E.",
    "\u2014 1 to 4 players team up against the Black Dragon (it gets tougher with every player). Mistakes get you clawed; fire breath every 30 s.": "\u2014 \u043E\u0442 1 \u0434\u043E 4 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u043F\u0440\u043E\u0442\u0438\u0432 \u0427\u0451\u0440\u043D\u043E\u0433\u043E \u0434\u0440\u0430\u043A\u043E\u043D\u0430 (\u043E\u043D \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u0441 \u043A\u0430\u0436\u0434\u044B\u043C \u0438\u0433\u0440\u043E\u043A\u043E\u043C). \u0417\u0430 \u043E\u0448\u0438\u0431\u043A\u0438 \u2014 \u0443\u0434\u0430\u0440 \u043A\u043E\u0433\u0442\u044F\u043C\u0438; \u043E\u0433\u043D\u0435\u043D\u043D\u043E\u0435 \u0434\u044B\u0445\u0430\u043D\u0438\u0435 \u043A\u0430\u0436\u0434\u044B\u0435 30 \u0441.",
    "Fast + correct = more damage.": "\u0411\u044B\u0441\u0442\u0440\u043E + \u0432\u0435\u0440\u043D\u043E = \u0431\u043E\u043B\u044C\u0448\u0435 \u0443\u0440\u043E\u043D\u0430.",
    "(Esc) shows the answer.": "(Esc) \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043E\u0442\u0432\u0435\u0442.",
    "\u2014 Anki-style flashcards. Missed words go to": "\u2014 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u0441\u0442\u0438\u043B\u0435 Anki. \u041E\u0448\u0438\u0431\u043E\u0447\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u0432",
    "\u2014 open the game on days in a row. Your best streak unlocks magic staffs in": "\u2014 \u0437\u0430\u0445\u043E\u0434\u0438\u0442\u0435 \u0432 \u0438\u0433\u0440\u0443 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434. \u041B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u043E\u0445\u0438 \u0432",
    ": Ember at 3 days, Tide at 5, Storm at 8, Void at 10.": ": Ember \u0437\u0430 3 \u0434\u043D\u044F, Tide \u0437\u0430 5, Storm \u0437\u0430 8, Void \u0437\u0430 10.",
    "How Kanji Reading works": "\u041A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u043E \u0427\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438",
    "How Kanji Writing works": "\u041A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u043E \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438",
    "How Boss Elimination works": "\u041A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u0430 \u0411\u0438\u0442\u0432\u0430 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C",
    "How 1v1 Rapid works": "\u041A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D \u0411\u043B\u0438\u0446 1 \u043D\u0430 1",
    "60 s to study your 10 words (reading + meaning). Then they disappear.": "60 \u0441, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0443\u0447\u0438\u0442\u044C 10 \u0441\u043B\u043E\u0432 (\u0447\u0442\u0435\u043D\u0438\u0435 + \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435). \u041F\u043E\u0442\u043E\u043C \u043E\u043D\u0438 \u0438\u0441\u0447\u0435\u0437\u043D\u0443\u0442.",
    "Wrong or Skip (Esc) = a miss; the answer is shown and the word comes back later.": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u043B\u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A (Esc) = \u043F\u0440\u043E\u043C\u0430\u0445; \u043E\u0442\u0432\u0435\u0442 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u0430 \u0441\u043B\u043E\u0432\u043E \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F \u043F\u043E\u0437\u0436\u0435.",
    "Look at the kanji (up to 3.5 s), then press CAST! (or Enter): it vanishes and the pad and keyboard appear. Pasting is off.": "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0434\u0437\u0438 (\u0434\u043E 3,5 \u0441), \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0436\u043C\u0438\u0442\u0435 CAST! (\u0438\u043B\u0438 Enter): \u043E\u043D \u0438\u0441\u0447\u0435\u0437\u043D\u0435\u0442, \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u043F\u0430\u043D\u0435\u043B\u044C \u0438 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430. \u0412\u0441\u0442\u0430\u0432\u043A\u0430 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430.",
    "Write the whole word on the pad, left to right (one cell per character) \u2014 or type it with a Japanese keyboard.": "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0441\u0451 \u0441\u043B\u043E\u0432\u043E \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E (\u043E\u0434\u043D\u0430 \u043A\u043B\u0435\u0442\u043A\u0430 \u043D\u0430 \u0437\u043D\u0430\u043A) \u2014 \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u044F\u043F\u043E\u043D\u0441\u043A\u043E\u0439 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u043E\u0439.",
    "Only kanji count (kana only at the \u304B\u306A level). Messy is fine \u2014 it\u2019s judged by shape.": "\u0421\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u043D\u0434\u0437\u0438 (\u043A\u0430\u043D\u0430 \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 \u304B\u306A). \u041D\u0435\u0440\u043E\u0432\u043D\u043E \u2014 \u043D\u0435 \u0441\u0442\u0440\u0430\u0448\u043D\u043E, \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0444\u043E\u0440\u043C\u0430.",
    "Up to 4 players (friends or AI) against the Black Dragon; the online queue always makes a full party of 4. Its HP grows with the party.": "\u0414\u043E 4 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 (\u0434\u0440\u0443\u0437\u044C\u044F \u0438\u043B\u0438 \u0418\u0418) \u043F\u0440\u043E\u0442\u0438\u0432 \u0427\u0451\u0440\u043D\u043E\u0433\u043E \u0434\u0440\u0430\u043A\u043E\u043D\u0430; \u043E\u043D\u043B\u0430\u0439\u043D-\u043E\u0447\u0435\u0440\u0435\u0434\u044C \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u043E\u0442\u0440\u044F\u0434 \u0438\u0437 4. HP \u0434\u0440\u0430\u043A\u043E\u043D\u0430 \u0440\u0430\u0441\u0442\u0451\u0442 \u0441 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u043E\u0442\u0440\u044F\u0434\u0430.",
    "A mistake gets you clawed (\u221245).": "\u041E\u0448\u0438\u0431\u043A\u0430 \u2014 \u0443\u0434\u0430\u0440 \u043A\u043E\u0433\u0442\u044F\u043C\u0438 (\u221245).",
    "Every 30 s it breathes fire on everyone (\u2212110) \u2014 unless you are on fire yourself (5 in a row): then you are immune.": "\u041A\u0430\u0436\u0434\u044B\u0435 30 \u0441 \u043E\u043D \u0434\u044B\u0448\u0438\u0442 \u043E\u0433\u043D\u0451\u043C \u043D\u0430 \u0432\u0441\u0435\u0445 (\u2212110) \u2014 \u0435\u0441\u043B\u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u0441\u0430\u043C\u0438 \u043D\u0435 \u0432 \u043E\u0433\u043D\u0435 (5 \u043F\u043E\u0434\u0440\u044F\u0434): \u0442\u043E\u0433\u0434\u0430 \u0432\u044B \u043D\u0435\u0443\u044F\u0437\u0432\u0438\u043C\u044B.",
    "Both players get the same kanji \u2014 no study phase.": "\u041E\u0431\u0430 \u0438\u0433\u0440\u043E\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u043E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 \u2014 \u0431\u0435\u0437 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438.",
    "Wrong? Try again until the 12 s round ends.": "\u041E\u0448\u0438\u0431\u043B\u0438\u0441\u044C? \u041F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F 12-\u0441\u0435\u043A\u0443\u043D\u0434\u043D\u044B\u0439 \u0440\u0430\u0443\u043D\u0434.",
    "Crit: 1% + 1% per spell learned today (max 50%). Playing with AI gives half XP; a forfeit gives none.": "\u041A\u0440\u0438\u0442: 1% + 1% \u0437\u0430 \u043A\u0430\u0436\u0434\u043E\u0435 \u0432\u044B\u0443\u0447\u0435\u043D\u043D\u043E\u0435 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 (\u043C\u0430\u043A\u0441. 50%). \u0418\u0433\u0440\u0430 \u0441 \u0418\u0418 \u0434\u0430\u0451\u0442 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0443 \u043E\u043F\u044B\u0442\u0430; \u0441\u0434\u0430\u0447\u0430 \u2014 \u043D\u0438\u0447\u0435\u0433\u043E.",
    // (kept: these are built from data — flame names, onomatopoeia kinds — or from the server)
    "Light blue flames": "\u0413\u043E\u043B\u0443\u0431\u043E\u0435 \u043F\u043B\u0430\u043C\u044F",
    "Purple flames": "\u0424\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u043E\u0435 \u043F\u043B\u0430\u043C\u044F",
    "Login streak": "\u0421\u0435\u0440\u0438\u044F \u0432\u0445\u043E\u0434\u043E\u0432",
    "login streak (days)": "\u0441\u0435\u0440\u0438\u044F \u0432\u0445\u043E\u0434\u043E\u0432 (\u0434\u043D\u0438)",
    "\u64EC\u58F0\u8A9E (giseigo) \u2014 sound": "\u64EC\u58F0\u8A9E (\u0433\u0438\u0441\u044D\u0439\u0433\u043E) \u2014 \u0437\u0432\u0443\u043A",
    "\u64EC\u614B\u8A9E (gitaigo) \u2014 state / manner": "\u64EC\u614B\u8A9E (\u0433\u0438\u0442\u0430\u0439\u0433\u043E) \u2014 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 / \u043E\u0431\u0440\u0430\u0437 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
    "\u64EC\u60C5\u8A9E (gij\u014Dgo) \u2014 feeling": "\u64EC\u60C5\u8A9E (\u0433\u0438\u0434\u0437\u0451\u0433\u043E) \u2014 \u0447\u0443\u0432\u0441\u0442\u0432\u043E",
    "Time up \u2014 the dragon survived": "\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E \u2014 \u0434\u0440\u0430\u043A\u043E\u043D \u0432\u044B\u0436\u0438\u043B",
    // 0.9.9.4.4.7 (check-up: texts that were still English)
    "Share the code with a friend, or add an AI player to start.": "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u0435\u0441\u044C \u043A\u043E\u0434\u043E\u043C \u0441 \u0434\u0440\u0443\u0433\u043E\u043C \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0418\u0418-\u0438\u0433\u0440\u043E\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C.",
    "Shared levels: both players race on the same kanji, so a change here changes it for everyone.": "\u041E\u0431\u0449\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u0438: \u043E\u0431\u0430 \u0438\u0433\u0440\u043E\u043A\u0430 \u0441\u043E\u0440\u0435\u0432\u043D\u0443\u044E\u0442\u0441\u044F \u043D\u0430 \u043E\u0434\u043D\u0438\u0445 \u0438 \u0442\u0435\u0445 \u0436\u0435 \u043A\u0430\u043D\u0434\u0437\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0437\u0434\u0435\u0441\u044C \u043C\u0435\u043D\u044F\u0435\u0442 \u0438\u0445 \u0434\u043B\u044F \u0432\u0441\u0435\u0445.",
    "Black Dragon": "\u0427\u0451\u0440\u043D\u044B\u0439 \u0434\u0440\u0430\u043A\u043E\u043D",
    "\u2717 MISS!": "\u2717 \u041F\u0420\u041E\u041C\u0410\u0425!",
    "Accuracy": "\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C",
    "(you)": "(\u0432\u044B)",
    "Memorise how each word is written. In battle you only get the meaning (and a half-second glimpse).": "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u0435, \u043A\u0430\u043A \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u043E\u0435 \u0441\u043B\u043E\u0432\u043E. \u0412 \u0431\u043E\u044E \u0431\u0443\u0434\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 (\u0438 \u0432\u0437\u0433\u043B\u044F\u0434 \u043D\u0430 \u043F\u043E\u043B\u0441\u0435\u043A\u0443\u043D\u0434\u044B).",
    "Each player picks their own. The dragon gets tougher when the party picks harder levels.": "\u041A\u0430\u0436\u0434\u044B\u0439 \u0438\u0433\u0440\u043E\u043A \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0432\u043E\u0438. \u0414\u0440\u0430\u043A\u043E\u043D \u0441\u0438\u043B\u044C\u043D\u0435\u0435, \u0435\u0441\u043B\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u0443\u0440\u043E\u0432\u043D\u0438 \u043F\u043E\u0441\u043B\u043E\u0436\u043D\u0435\u0435.",
    "Daily streak": "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0435\u0440\u0438\u044F",
    "Apprentice border": "\u0420\u0430\u043C\u043A\u0430 \xAB\u0423\u0447\u0435\u043D\u0438\u043A\xBB",
    "Adept border": "\u0420\u0430\u043C\u043A\u0430 \xAB\u0410\u0434\u0435\u043F\u0442\xBB",
    "Master border": "\u0420\u0430\u043C\u043A\u0430 \xAB\u041C\u0430\u0441\u0442\u0435\u0440\xBB",
    "Archmage border": "\u0420\u0430\u043C\u043A\u0430 \xAB\u0410\u0440\u0445\u0438\u043C\u0430\u0433\xBB",
    "\u2014 a day counts when you do all four daily tasks: study 10 spells, a JLPT quiz, the daily challenge and a reading passage. Your best streak unlocks magic staffs in": "\u2014 \u0434\u0435\u043D\u044C \u0437\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u0432\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u044F: \u0438\u0437\u0443\u0447\u0438\u0442\u044C 10 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439, \u0442\u0435\u0441\u0442 JLPT, \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 \u0438 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F. \u041B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u043E\u0445\u0438 \u0432",
    "Your last story is still being written \u2014 try \u201CNew passage\u201D again in a moment.": "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0435\u0449\u0451 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u2014 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u041D\u043E\u0432\u044B\u0439 \u0442\u0435\u043A\u0441\u0442\xBB \u0447\u0443\u0442\u044C \u043F\u043E\u0437\u0436\u0435.",
    // 0.9.9.4.4.5
    "\u2014 study 10 of your words, then type each reading (\u304B\u306A or romaji).": "\u2014 \u0432\u044B\u0443\u0447\u0438\u0442\u0435 10 \u0441\u0432\u043E\u0438\u0445 \u0441\u043B\u043E\u0432, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u0436\u0434\u043E\u0433\u043E (\u304B\u306A \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438).",
    "\u2014 no study; both get the same kanji, first correct reading hits. The first 10 are 5 words from each player\u2019s All spells \u2014 the round shows whose word it is.": "\u2014 \u0431\u0435\u0437 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438; \u0443 \u043E\u0431\u043E\u0438\u0445 \u043E\u0434\u0438\u043D \u043A\u0430\u043D\u0434\u0437\u0438, \u0431\u044C\u0451\u0442 \u043F\u0435\u0440\u0432\u043E\u0435 \u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0442\u0435\u043D\u0438\u0435. \u041F\u0435\u0440\u0432\u044B\u0435 10 \u2014 \u043F\u043E 5 \u0441\u043B\u043E\u0432 \u0438\u0437 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0433\u0440\u043E\u043A\u0430, \u0432 \u0440\u0430\u0443\u043D\u0434\u0435 \u0432\u0438\u0434\u043D\u043E, \u0447\u044C\u0451 \u044D\u0442\u043E \u0441\u043B\u043E\u0432\u043E.",
    "Study spells is a flashcard deck: the more words you know, the more spells you can cast \u2014 battles use the words in your All spells. Every card you answer gives +5 XP, and words you miss in battle come back there to review.": "\xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB \u2014 \u043A\u043E\u043B\u043E\u0434\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A: \u0447\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u043B\u043E\u0432 \u0432\u044B \u0437\u043D\u0430\u0435\u0442\u0435, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0442\u0432\u043E\u0440\u0438\u0442\u044C \u2014 \u0432 \u0431\u043E\u044F\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0441\u043B\u043E\u0432\u0430 \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB. \u041A\u0430\u0436\u0434\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0434\u0430\u0451\u0442 +5 \u043E\u043F\u044B\u0442\u0430, \u0430 \u0441\u043B\u043E\u0432\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432\u044B \u043E\u0448\u0438\u0431\u043B\u0438\u0441\u044C \u0432 \u0431\u043E\u044E, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u044E\u0442\u0441\u044F \u0442\u0443\u0434\u0430 \u0434\u043B\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u044F.",
    "Your own words": "\u0412\u0430\u0448\u0438 \u0441\u043B\u043E\u0432\u0430",
    "Practice": "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430",
    "Hiragana first": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0430",
    "\u2014 every battle plays the words of your levels from your All spells (marked \u2605 on the study cards); random words fill in when you have too few.": "\u2014 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0431\u043E\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0441\u043B\u043E\u0432\u0430 \u0432\u0430\u0448\u0438\u0445 \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u0438\u0437 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB (\u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u0445 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u2014 \u2605); \u0435\u0441\u043B\u0438 \u0438\u0445 \u043C\u0430\u043B\u043E, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435.",
    "\u2014 Anki-style flashcards in four decks: All spells, Struggling spells (the words you miss go there), Custom and Onomatopoeia. In All spells, set how many new words of each level you get a day (\u2212 / +, then Apply). Every card you answer gives +5 XP (up to 500 a day); \u21B6 Undo takes the last answer back.": "\u2014 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u0441\u0442\u0438\u043B\u0435 Anki \u0432 \u0447\u0435\u0442\u044B\u0440\u0451\u0445 \u043A\u043E\u043B\u043E\u0434\u0430\u0445: \xAB\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB, \xAB\u0422\u0440\u0443\u0434\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB (\u0442\u0443\u0434\u0430 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u043E\u0448\u0438\u0431\u043A\u0438), \xAB\u0421\u0432\u043E\u0438\xBB \u0438 \xAB\u041E\u043D\u043E\u043C\u0430\u0442\u043E\u043F\u0435\u044F\xBB. \u0412\u043E \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\u0445\xBB \u0437\u0430\u0434\u0430\u0439\u0442\u0435, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0432 \u0434\u0435\u043D\u044C (\u2212 / +, \u0437\u0430\u0442\u0435\u043C \xAB\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C\xBB). \u041A\u0430\u0436\u0434\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0434\u0430\u0451\u0442 +5 \u043E\u043F\u044B\u0442\u0430 (\u0434\u043E 500 \u0432 \u0434\u0435\u043D\u044C); \u21B6 \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043E\u0442\u0432\u0435\u0442.",
    "\u2014 the JLPT quiz, the Onomatopoeia quiz and the Reading passage: an AI writes one short story with 8 of your words, and you fill in the blanks from the context (up to 40 new stories a day \u2014 the counter shows how many are left). Tap any kanji for its parts and a memory story.": "\u2014 \u0442\u0435\u0441\u0442 JLPT, \u0442\u0435\u0441\u0442 \u043F\u043E \u043E\u043D\u043E\u043C\u0430\u0442\u043E\u043F\u0435\u0435 \u0438 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u0418\u0418 \u043F\u0438\u0448\u0435\u0442 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0441 8 \u0432\u0430\u0448\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u0430 \u0432\u044B \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438 \u043F\u043E \u0441\u043C\u044B\u0441\u043B\u0443 (\u0434\u043E 40 \u043D\u043E\u0432\u044B\u0445 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u043E\u0432 \u0432 \u0434\u0435\u043D\u044C \u2014 \u0441\u0447\u0451\u0442\u0447\u0438\u043A \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C). \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u043A\u0430\u043D\u0434\u0437\u0438, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E \u0447\u0430\u0441\u0442\u0438 \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F.",
    "\u2014 beginners study \u3072\u3089\u304C\u306A until they tick \u201CI\u2019ve mastered hiragana\u201D in Settings. Until then the kanji levels are locked: they add no new words, but the numbers you set for them are kept.": "\u2014 \u043D\u043E\u0432\u0438\u0447\u043A\u0438 \u0443\u0447\u0430\u0442 \u3072\u3089\u304C\u306A, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043E\u0442\u043C\u0435\u0442\u044F\u0442 \xAB\u042F \u043E\u0441\u0432\u043E\u0438\u043B \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443\xBB \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445. \u0414\u043E \u044D\u0442\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u0438 \u043A\u0430\u043D\u0434\u0437\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044B: \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432 \u043E\u043D\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442, \u043D\u043E \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043D\u0438\u0445 \u0447\u0438\u0441\u043B\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F.",
    "Writing a story with your words\u2026": "\u041F\u0438\u0448\u0435\u043C \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u0441\u043B\u043E\u0432\u2026",
    "AI stories left today": "\u0418\u0418-\u0440\u0430\u0441\u0441\u043A\u0430\u0437\u043E\u0432 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    "Each new AI story counts once; the same words again come free. The count starts over at midnight.": "\u041A\u0430\u0436\u0434\u044B\u0439 \u043D\u043E\u0432\u044B\u0439 \u0418\u0418-\u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0434\u0438\u043D \u0440\u0430\u0437; \u0442\u0435 \u0436\u0435 \u0441\u043B\u043E\u0432\u0430 \u0441\u043D\u043E\u0432\u0430 \u2014 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u0421\u0447\u0451\u0442 \u043E\u0431\u043D\u0443\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043F\u043E\u043B\u043D\u043E\u0447\u044C.",
    "How reading passages work": "\u041A\u0430\u043A \u0443\u0441\u0442\u0440\u043E\u0435\u043D \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F",
    "An AI writes one short story with 8 of your words in it \u2014 each word appears where it makes sense, not in a sentence of its own.": "\u0418\u0418 \u043F\u0438\u0448\u0435\u0442 \u043E\u0434\u0438\u043D \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0441 8 \u0432\u0430\u0448\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438 \u2014 \u043A\u0430\u0436\u0434\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0441\u0442\u043E\u0438\u0442 \u0442\u0430\u043C, \u0433\u0434\u0435 \u043E\u043D\u043E \u043A \u043C\u0435\u0441\u0442\u0443, \u0430 \u043D\u0435 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438.",
    "The words are blanked out. Tap a blank, then the word that fits from the context. Check shows what you got right.": "\u0421\u043B\u043E\u0432\u0430 \u0441\u043A\u0440\u044B\u0442\u044B \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u043C\u0438. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u043E\u043F\u0443\u0441\u043A, \u0437\u0430\u0442\u0435\u043C \u043D\u0430 \u0441\u043B\u043E\u0432\u043E, \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0435 \u043F\u043E \u0441\u043C\u044B\u0441\u043B\u0443. \xAB\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C\xBB \u043F\u043E\u043A\u0430\u0436\u0435\u0442, \u0447\u0442\u043E \u0432\u0435\u0440\u043D\u043E.",
    "Writing a story takes a few seconds \u2014 the bar shows how far along it is.": "\u0420\u0430\u0441\u0441\u043A\u0430\u0437 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434 \u2014 \u043F\u043E\u043B\u043E\u0441\u043A\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C.",
    "You can have up to 40 new AI stories a day \u2014 the counter next to New passage shows how many are left. After that (or offline), the passage uses your words\u2019 example sentences instead.": "\u0412 \u0434\u0435\u043D\u044C \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E 40 \u043D\u043E\u0432\u044B\u0445 \u0418\u0418-\u0440\u0430\u0441\u0441\u043A\u0430\u0437\u043E\u0432 \u2014 \u0441\u0447\u0451\u0442\u0447\u0438\u043A \u0440\u044F\u0434\u043E\u043C \u0441 \xAB\u041D\u043E\u0432\u044B\u0439 \u0442\u0435\u043A\u0441\u0442\xBB \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C. \u041F\u043E\u0442\u043E\u043C (\u0438\u043B\u0438 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430) \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432\u0430\u0448\u0438\u0445 \u0441\u043B\u043E\u0432.",
    "AI stories are switched off on the server \u2014 here are your words\u2019 example sentences instead.": "\u0418\u0418-\u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u2014 \u0432\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432\u0430\u0448\u0438\u0445 \u0441\u043B\u043E\u0432.",
    "You\u2019ve used all of today\u2019s AI stories \u2014 here are your words\u2019 example sentences instead. New stories tomorrow!": "\u0421\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0438\u0435 \u0418\u0418-\u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u2014 \u0432\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432\u0430\u0448\u0438\u0445 \u0441\u043B\u043E\u0432. \u041D\u043E\u0432\u044B\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B \u0437\u0430\u0432\u0442\u0440\u0430!",
    "Today\u2019s AI stories for everyone are used up \u2014 here are your words\u2019 example sentences instead.": "\u0418\u0418-\u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u0443 \u0432\u0441\u0435\u0445 \u2014 \u0432\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432\u0430\u0448\u0438\u0445 \u0441\u043B\u043E\u0432.",
    "The story took too long \u2014 here are your words\u2019 example sentences instead. Try \u201CNew passage\u201D again.": "\u0420\u0430\u0441\u0441\u043A\u0430\u0437 \u043F\u0438\u0441\u0430\u043B\u0441\u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043E\u043B\u0433\u043E \u2014 \u0432\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432\u0430\u0448\u0438\u0445 \u0441\u043B\u043E\u0432. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u041D\u043E\u0432\u044B\u0439 \u0442\u0435\u043A\u0441\u0442\xBB \u0435\u0449\u0451 \u0440\u0430\u0437.",
    "Too few words for a story \u2014 here are their example sentences.": "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E \u0441\u043B\u043E\u0432 \u0434\u043B\u044F \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430 \u2014 \u0432\u043E\u0442 \u0438\u0445 \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
    "You\u2019re offline \u2014 here are your words\u2019 example sentences instead.": "\u041D\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u2014 \u0432\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432\u0430\u0448\u0438\u0445 \u0441\u043B\u043E\u0432.",
    "The AI couldn\u2019t write a story this time \u2014 here are your words\u2019 example sentences instead. Try \u201CNew passage\u201D again.": "\u0418\u0418 \u043D\u0435 \u0441\u043C\u043E\u0433 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u2014 \u0432\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432\u0430\u0448\u0438\u0445 \u0441\u043B\u043E\u0432. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u041D\u043E\u0432\u044B\u0439 \u0442\u0435\u043A\u0441\u0442\xBB \u0435\u0449\u0451 \u0440\u0430\u0437.",
    // 0.9.9.4.4.2
    "\u2605 From your spells": "\u2605 \u0418\u0437 \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439",
    "\u2605 yours": "\u2605 \u0432\u0430\u0448\u0435",
    "From your All spells": "\u0418\u0437 \u0432\u0430\u0448\u0438\u0445 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB",
    "learned in total": "\u0432\u044B\u0443\u0447\u0435\u043D\u043E \u0432\u0441\u0435\u0433\u043E",
    "study XP today": "\u043E\u043F\u044B\u0442 \u0437\u0430 \u0443\u0447\u0451\u0431\u0443 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    "new spells a day": "\u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u0432 \u0434\u0435\u043D\u044C",
    // 0.9.9.4.4.1
    "Queued on its own. No levels to pick: the cards come from both players' All spells \u2014 2 words of each level (N5\u2013N1) from each of you.": "\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u0447\u0435\u0440\u0435\u0434\u044C. \u0423\u0440\u043E\u0432\u043D\u0438 \u043D\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442\u0441\u044F: \u043A\u0430\u0440\u0442\u044B \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB \u043E\u0431\u043E\u0438\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u2014 \u043F\u043E 2 \u0441\u043B\u043E\u0432\u0430 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F (N5\u2013N1) \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0433\u043E.",
    "Pick a hero, draft 10 face-down spell cards from both players' All spells, then cast them turn by turn: read the meaning, look at the kanji, write it from memory. Mana, heals and your hero's Omnipotence.": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0435\u0440\u043E\u044F, \u043D\u0430\u0431\u0435\u0440\u0438\u0442\u0435 10 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u043A\u0430\u0440\u0442 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u0438\u0437 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB \u043E\u0431\u043E\u0438\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432, \u0437\u0430\u0442\u0435\u043C \u0440\u0430\u0437\u044B\u0433\u0440\u044B\u0432\u0430\u0439\u0442\u0435 \u0438\u0445 \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u0438: \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0434\u0437\u0438, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0435\u0433\u043E \u043F\u043E \u043F\u0430\u043C\u044F\u0442\u0438. \u041C\u0430\u043D\u0430, \u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u0438 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u0432\u0430\u0448\u0435\u0433\u043E \u0433\u0435\u0440\u043E\u044F.",
    "Coin flip, then draft: take 2 face-down cards at a time (20 s for both) until you each have 10. You see colours, not kanji. The 20 cards come from both players' All spells: 4 of each level N5\u2013N1, 2 of them yours and 2 your opponent's (a random word of that level if someone has none).": "\u0416\u0440\u0435\u0431\u0438\u0439, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0431\u043E\u0440: \u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E 2 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0435 \u043A\u0430\u0440\u0442\u044B (20 \u0441 \u043D\u0430 \u043E\u0431\u0435), \u043F\u043E\u043A\u0430 \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 10. \u0412\u0438\u0434\u043D\u044B \u0446\u0432\u0435\u0442\u0430, \u0430 \u043D\u0435 \u043A\u0430\u043D\u0434\u0437\u0438. 20 \u043A\u0430\u0440\u0442 \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB \u043E\u0431\u043E\u0438\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432: \u043F\u043E 4 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F N5\u2013N1, 2 \u0438\u0437 \u043D\u0438\u0445 \u0432\u0430\u0448\u0438 \u0438 2 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430 (\u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u044D\u0442\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F, \u0435\u0441\u043B\u0438 \u0443 \u043A\u043E\u0433\u043E-\u0442\u043E \u0442\u0430\u043A\u043E\u0433\u043E \u043D\u0435\u0442).",
    "Deck Duel deals its cards from both players' All spells (2 of each level N5\u2013N1 from each). Your level picks only change your character here.": "\u0412 \u0414\u0443\u044D\u043B\u0438 \u043A\u043E\u043B\u043E\u0434 \u043A\u0430\u0440\u0442\u044B \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB \u043E\u0431\u043E\u0438\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 (\u043F\u043E 2 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F N5\u2013N1 \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0433\u043E). \u0412\u044B\u0431\u043E\u0440 \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u043C\u0435\u043D\u044F\u0435\u0442 \u0437\u0434\u0435\u0441\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430.",
    "Apply": "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",
    "Fewer new words from tomorrow": "\u041C\u0435\u043D\u044C\u0448\u0435 \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432 \u2014 \u0441 \u0437\u0430\u0432\u0442\u0440\u0430\u0448\u043D\u0435\u0433\u043E \u0434\u043D\u044F",
    // 0.9.9.4.4
    "Undo the last answer (Z)": "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043E\u0442\u0432\u0435\u0442 (Z)",
    "Tap for this kanji": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u043E\u0431 \u044D\u0442\u043E\u043C \u043A\u0430\u043D\u0434\u0437\u0438",
    "No details for this kanji yet": "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u043E\u0431 \u044D\u0442\u043E\u043C \u043A\u0430\u043D\u0434\u0437\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442",
    "Parts": "\u0427\u0430\u0441\u0442\u0438",
    "Memory picture": "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430-\u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430",
    "New passage": "\u041D\u043E\u0432\u044B\u0439 \u0442\u0435\u043A\u0441\u0442",
    "Words in this passage": "\u0421\u043B\u043E\u0432\u0430 \u0432 \u044D\u0442\u043E\u043C \u0442\u0435\u043A\u0441\u0442\u0435",
    "Tap the kanji for its meaning": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u043D\u0434\u0437\u0438, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    "A short story with your words left out. Tap a blank, then the word that fits \u2014 the story around it is the clue. Tap any word for its meaning, and a kanji in it for its parts.": "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0443\u0431\u0440\u0430\u043D\u044B \u0432\u0430\u0448\u0438 \u0441\u043B\u043E\u0432\u0430. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u043E\u043F\u0443\u0441\u043A, \u0437\u0430\u0442\u0435\u043C \u043D\u0430 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0435 \u0441\u043B\u043E\u0432\u043E \u2014 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u043E\u0439 \u0441\u043B\u0443\u0436\u0438\u0442 \u0441\u0430\u043C \u0440\u0430\u0441\u0441\u043A\u0430\u0437. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043B\u044E\u0431\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u0430 \u043D\u0430 \u043A\u0430\u043D\u0434\u0437\u0438 \u0432 \u043D\u0451\u043C \u2014 \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E \u0447\u0430\u0441\u0442\u0438.",
    "No words with example sentences in this deck yet \u2014 pick another deck above, or study some spells first.": "\u0412 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u0434\u0435 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0441\u043B\u043E\u0432 \u0441 \u043F\u0440\u0438\u043C\u0435\u0440\u0430\u043C\u0438 \u2014 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u043E\u043B\u043E\u0434\u0443 \u0432\u044B\u0448\u0435 \u0438\u043B\u0438 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0437\u0443\u0447\u0438\u0442\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F.",
    "For the daily task, get half the blanks right (4 of 8) \u2014 try a new passage!": "\u0414\u043B\u044F \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u043E \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0443 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043E\u0432 (4 \u0438\u0437 8) \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u043A\u0441\u0442!",
    "How many new words of each level are added every day (0 = none).": "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u0434\u0435\u043D\u044C (0 \u2014 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E).",
    "new words a day": "\u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432 \u0432 \u0434\u0435\u043D\u044C",
    "Set how many new words of a level you want under \u201CAll spells\u201D (e.g. N5: 10) \u2014 they are added today and every day.": "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0432 \xAB\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432 \u043A\u0430\u043A\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, N5: 10) \u2014 \u043E\u043D\u0438 \u0434\u043E\u0431\u0430\u0432\u044F\u0442\u0441\u044F \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C.",
    "Onomatopoeia": "\u041E\u043D\u043E\u043C\u0430\u0442\u043E\u043F\u0435\u044F",
    "Onomatopoeia quiz": "\u0422\u0435\u0441\u0442 \u043F\u043E \u043E\u043D\u043E\u043C\u0430\u0442\u043E\u043F\u0435\u0435",
    "Every giseigo, gitaigo and gij\u014Dgo: sounds (\u30EF\u30F3\u30EF\u30F3), states (\u304D\u3089\u304D\u3089) and feelings (\u30C9\u30AD\u30C9\u30AD) \u2014 20 new a session.": "\u0412\u0441\u0435 \u0433\u0438\u0441\u044D\u0439\u0433\u043E, \u0433\u0438\u0442\u0430\u0439\u0433\u043E \u0438 \u0433\u0438\u0434\u0437\u0451\u0433\u043E: \u0437\u0432\u0443\u043A\u0438 (\u30EF\u30F3\u30EF\u30F3), \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F (\u304D\u3089\u304D\u3089) \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0430 (\u30C9\u30AD\u30C9\u30AD) \u2014 \u043F\u043E 20 \u043D\u043E\u0432\u044B\u0445 \u0437\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u0435.",
    "10 questions on giongo, gitaigo and gij\u014Dgo \u2014 sounds, states and feelings, 4 choices each.": "10 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u043E \u0433\u0438\u043E\u043D\u0433\u043E, \u0433\u0438\u0442\u0430\u0439\u0433\u043E \u0438 \u0433\u0438\u0434\u0437\u0451\u0433\u043E \u2014 \u0437\u0432\u0443\u043A\u0438, \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0430, \u043F\u043E 4 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430.",
    "A short story written with your words \u2014 fill in the blanks from the context, then check.": "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u0441\u043B\u043E\u0432 \u2014 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438 \u043F\u043E \u0441\u043C\u044B\u0441\u043B\u0443, \u0437\u0430\u0442\u0435\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435.",
    "\u270D Writing a story with your words\u2026": "\u270D \u041F\u0438\u0448\u0435\u043C \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u0441\u043B\u043E\u0432\u2026",
    "Choose the best meaning for the onomatopoeia.": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043B\u0443\u0447\u0448\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0437\u0432\u0443\u043A\u043E\u043F\u043E\u0434\u0440\u0430\u0436\u0430\u043D\u0438\u044F.",
    "Which onomatopoeia has this meaning?": "\u041A\u0430\u043A\u043E\u0435 \u0437\u0432\u0443\u043A\u043E\u043F\u043E\u0434\u0440\u0430\u0436\u0430\u043D\u0438\u0435 \u0438\u043C\u0435\u0435\u0442 \u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435?",
    "Choose the word that fits the sentence.": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u043A \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044E.",
    "Taking an onomatopoeia quiz": "\u041F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0442\u0435\u0441\u0442 \u043F\u043E \u043E\u043D\u043E\u043C\u0430\u0442\u043E\u043F\u0435\u0435",
    // 0.9.9.4.3
    "Do a JLPT quiz (7/10 or better)": "\u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u0442\u0435\u0441\u0442 JLPT (7/10 \u0438\u043B\u0438 \u043B\u0443\u0447\u0448\u0435)",
    "Read a passage (4/8 or better)": "\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 (4/8 \u0438\u043B\u0438 \u043B\u0443\u0447\u0448\u0435)",
    "For the daily task, get 7 out of 10 or better \u2014 try another quiz!": "\u0414\u043B\u044F \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u043D\u0443\u0436\u043D\u043E 7 \u0438\u0437 10 \u0438\u043B\u0438 \u043B\u0443\u0447\u0448\u0435 \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u043E\u0434\u0438\u043D \u0442\u0435\u0441\u0442!",
    "For the daily task, get half the blanks right (4 of 8) \u2014 try a new story!": "\u0414\u043B\u044F \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u043E \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0443 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043E\u0432 (4 \u0438\u0437 8) \u2014 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437!",
    "Studying spells": "\u0418\u0437\u0443\u0447\u0430\u0435\u0442 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",
    "Taking a JLPT quiz": "\u041F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0442\u0435\u0441\u0442 JLPT",
    "Reading a passage": "\u0427\u0438\u0442\u0430\u0435\u0442 \u0442\u0435\u043A\u0441\u0442",
    "Playing the daily challenge": "\u041F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435",
    "Customizing": "\u041D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u043E\u0431\u043B\u0438\u043A",
    "Looking at their progress": "\u0421\u043C\u043E\u0442\u0440\u0438\u0442 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",
    "Looking at match history": "\u0421\u043C\u043E\u0442\u0440\u0438\u0442 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043C\u0430\u0442\u0447\u0435\u0439",
    "With friends": "\u0421 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438",
    // 0.9.9.4.2
    "Hiragana": "\u0425\u0438\u0440\u0430\u0433\u0430\u043D\u0430",
    "Katakana": "\u041A\u0430\u0442\u0430\u043A\u0430\u043D\u0430",
    "Dakuon and handakuon (\u309B \u309C)": "\u0414\u0430\u043A\u0443\u0442\u044D\u043D \u0438 \u0445\u0430\u043D\u0434\u0430\u043A\u0443\u0442\u044D\u043D (\u309B \u309C)",
    "Combinations": "\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F",
    "Nothing here yet.": "\u0417\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u0430 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442.",
    "every word of each level \u2014 tap one to see it": "\u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u2014 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0441\u043B\u043E\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C",
    "Less": "\u041C\u0435\u043D\u044C\u0448\u0435",
    "More": "\u0411\u043E\u043B\u044C\u0448\u0435",
    "The brighter a day, the more you did \u2014 cards passed and games played, compared with your busiest day. Tap a day for details.": "\u0427\u0435\u043C \u044F\u0440\u0447\u0435 \u0434\u0435\u043D\u044C, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u2014 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0438 \u0441\u044B\u0433\u0440\u0430\u043D\u043D\u044B\u0435 \u0438\u0433\u0440\u044B \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u0441\u0430\u043C\u044B\u043C \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0434\u043D\u0451\u043C. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0434\u0435\u043D\u044C, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438.",
    "Play offline": "\u0418\u0433\u0440\u0430\u0442\u044C \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430",
    "The server can't be reached right now.": "\u0421\u0435\u0440\u0432\u0435\u0440 \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D.",
    "Nothing saved on this device yet \u2014 sign in once while online.": "\u041D\u0430 \u044D\u0442\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u043F\u043E\u043A\u0430 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u2014 \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u043E\u043D\u043B\u0430\u0439\u043D.",
    // 0.9.9.4.1
    "Then open": "\u0417\u0430\u0442\u0435\u043C \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435",
    "Files \u2192 Downloads": "\u0424\u0430\u0439\u043B\u044B \u2192 \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
    "(or Chrome": "(\u0438\u043B\u0438 \u0432 Chrome",
    "\u22EE \u2192 Downloads": "\u22EE \u2192 \u0421\u043A\u0430\u0447\u0430\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B",
    ") and tap": ") \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435",
    // 0.9.9.4
    "Get the app": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    "Install Kanji Wizards": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C Kanji Wizards",
    "Phone or PC \u2014 from this browser": "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0438\u043B\u0438 \u041F\u041A \u2014 \u043F\u0440\u044F\u043C\u043E \u0438\u0437 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430",
    "The app opens straight into the game and works offline too: Study spells, the JLPT quiz, reading passages, the daily challenge, Customize, Progress and match history. Online queue and private games need internet. Your account and progress are the same everywhere.": "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441\u0440\u0430\u0437\u0443 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0438\u0433\u0440\u0443 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430: \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439, \u0442\u0435\u0441\u0442 JLPT, \u0442\u0435\u043A\u0441\u0442\u044B \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F, \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435, \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430, \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043C\u0430\u0442\u0447\u0435\u0439. \u0414\u043B\u044F \u043E\u043D\u043B\u0430\u0439\u043D-\u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u0438 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u0445 \u0438\u0433\u0440 \u043D\u0443\u0436\u0435\u043D \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442. \u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0438 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0432\u0435\u0437\u0434\u0435 \u043E\u0434\u043D\u0438 \u0438 \u0442\u0435 \u0436\u0435.",
    "No store needed: it installs like an app, with its own icon.": "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0435 \u043D\u0443\u0436\u0435\u043D: \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0437\u043D\u0430\u0447\u043A\u043E\u043C.",
    "On iPhone / iPad (Safari): tap": "\u041D\u0430 iPhone / iPad (Safari): \u043D\u0430\u0436\u043C\u0438\u0442\u0435",
    "Share": "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",
    "Add to Home Screen": "\u041D\u0430 \u044D\u043A\u0440\u0430\u043D \xAB\u0414\u043E\u043C\u043E\u0439\xBB",
    "In Chrome or Edge: open the browser menu": "\u0412 Chrome \u0438\u043B\u0438 Edge: \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043C\u0435\u043D\u044E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430",
    "Install app": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    "(or": "(\u0438\u043B\u0438",
    "Add to Home screen": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",
    "or": "\u0438\u043B\u0438",
    "Windows": "Windows",
    "Android": "Android",
    "Download and run the installer. If Windows says \u201Cprotected your PC\u201D, choose": "\u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0449\u0438\u043A. \u0415\u0441\u043B\u0438 Windows \u043F\u0438\u0448\u0435\u0442 \xAB\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0437\u0430\u0449\u0438\u0442\u0438\u043B\u0430 \u0432\u0430\u0448 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\xBB, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435",
    "More info \u2192 Run anyway": "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u2192 \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435",
    "(the app isn't signed yet).": "(\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u0438).",
    "Download for Windows (.exe)": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0434\u043B\u044F Windows (.exe)",
    "Download for Android (.apk)": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0434\u043B\u044F Android (.apk)",
    "Download the APK and open it; allow your browser to install apps when asked. No Google Play needed.": "\u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 APK \u0438 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0435\u0433\u043E; \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D \u0441\u043F\u0440\u043E\u0441\u0438\u0442. Google Play \u043D\u0435 \u043D\u0443\u0436\u0435\u043D.",
    "You're offline \u2014 this needs an internet connection.": "\u041D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443 \u2014 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043E\u043D \u043D\u0443\u0436\u0435\u043D.",
    "You're offline.": "\u041D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443.",
    "Offline mode": "\u041E\u0444\u043B\u0430\u0439\u043D-\u0440\u0435\u0436\u0438\u043C",
    "You're offline. Study spells, the quiz, reading passages, the daily challenge and Customize still work \u2014 your progress syncs when you're back online.": "\u041D\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430. \u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439, \u0442\u0435\u0441\u0442, \u0442\u0435\u043A\u0441\u0442\u044B, \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u2014 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F.",
    "Back online \u2014 your progress is synced.": "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u043D\u043E\u0432\u0430 \u0435\u0441\u0442\u044C \u2014 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D.",
    "No internet connection. Sign in once while online \u2014 then Study spells and more work offline too.": "\u041D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443. \u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u043E\u043D\u043B\u0430\u0439\u043D \u2014 \u043F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0438 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430.",
    "Kanji Wizards is installed \u2014 find it with your apps.": "Kanji Wizards \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u2014 \u043D\u0430\u0439\u0434\u0438\u0442\u0435 \u0435\u0433\u043E \u0441\u0440\u0435\u0434\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
    "Please sign in again": "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0441\u043D\u043E\u0432\u0430",
    // 0.9.9.3.3
    "A day counts for your streak when all four tasks are done \u2014 and gives +500 XP. Your best streak unlocks magic staffs.": "\u0414\u0435\u043D\u044C \u0437\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u0435\u0440\u0438\u044E, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u0432\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F, \u2014 \u0438 \u0434\u0430\u0451\u0442 +500 \u043E\u043F\u044B\u0442\u0430. \u041B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u043E\u0445\u0438.",
    "Daily streak kept!": "\u0421\u0435\u0440\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430!",
    // 0.9.9.3.2
    "Words from": "\u0421\u043B\u043E\u0432\u0430 \u0438\u0437",
    "+ Add to\u2026": "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u2026",
    "That word is not in the dictionary": "\u042D\u0442\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430 \u043D\u0435\u0442 \u0432 \u0441\u043B\u043E\u0432\u0430\u0440\u0435",
    "already in": "\u0443\u0436\u0435 \u0432",
    "No words in this deck yet \u2014 pick another deck above, or study some spells first.": "\u0412 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u0434\u0435 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0441\u043B\u043E\u0432 \u2014 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u043E\u043B\u043E\u0434\u0443 \u0432\u044B\u0448\u0435 \u0438\u043B\u0438 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0437\u0443\u0447\u0438\u0442\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F.",
    // 0.9.9.3.1
    "\u{1F5D1} Delete": "\u{1F5D1} \u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    "Delete this account and all its progress": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0438 \u0432\u0435\u0441\u044C \u0435\u0433\u043E \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441",
    "Beta border": "\u0420\u0430\u043C\u043A\u0430 Beta",
    "Finish the tutorial to unlock": "\u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C",
    "Finish the tutorial to get the Beta border": "\u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u043C\u043A\u0443 Beta",
    "Thank you for playing the beta!": "\u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0447\u0442\u043E \u0438\u0433\u0440\u0430\u0435\u0442\u0435 \u0432 \u0431\u0435\u0442\u0443!",
    // 0.9.9.3
    "Ticked: goes to your deck. Tap to keep it out.": "\u041E\u0442\u043C\u0435\u0447\u0435\u043D\u043E: \u043F\u043E\u043F\u0430\u0434\u0451\u0442 \u0432 \u043A\u043E\u043B\u043E\u0434\u0443. \u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C.",
    "Ticked words go to": "\u041E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u2014 \u0432",
    "(ticked words go to your deck \xB7 tap a card to untick \xB7 \u7B46 = stroke order)": "(\u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u043F\u0430\u0434\u0443\u0442 \u0432 \u043A\u043E\u043B\u043E\u0434\u0443 \xB7 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0441\u043D\u044F\u0442\u044C \u043E\u0442\u043C\u0435\u0442\u043A\u0443 \xB7 \u7B46 \u2014 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0447\u0435\u0440\u0442)",
    "Missed \u2014 ticked words go to Struggling spells": "\u041E\u0448\u0438\u0431\u043A\u0438 \u2014 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u043F\u0430\u0434\u0443\u0442 \u0432 \xAB\u0422\u0440\u0443\u0434\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB",
    "Fill each blank with one of your words (the furigana is your clue). Tap any word in the story for its meaning.": "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438 \u0441\u0432\u043E\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438 (\u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u2014 \u0444\u0443\u0440\u0438\u0433\u0430\u043D\u0430). \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043B\u044E\u0431\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0432 \u0442\u0435\u043A\u0441\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.",
    "Your words \u2014 tap a blank, then a word": "\u0412\u0430\u0448\u0438 \u0441\u043B\u043E\u0432\u0430 \u2014 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u043E\u043F\u0443\u0441\u043A, \u0437\u0430\u0442\u0435\u043C \u043D\u0430 \u0441\u043B\u043E\u0432\u043E",
    "Check": "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C",
    "Perfect \u2014 every word in its place!": "\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u2014 \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435!",
    "Green: right. Red: the right word, with yours crossed out.": "\u0417\u0435\u043B\u0451\u043D\u044B\u0439 \u2014 \u0432\u0435\u0440\u043D\u043E. \u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u2014 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u0432\u0430\u0448\u0435 \u0437\u0430\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u043E.",
    "Tap, then pick a word below": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0437\u0430\u0442\u0435\u043C \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u043D\u0438\u0436\u0435",
    "Study 10 spells (any deck)": "\u0418\u0437\u0443\u0447\u0438\u0442\u0435 10 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 (\u043B\u044E\u0431\u0430\u044F \u043A\u043E\u043B\u043E\u0434\u0430)",
    "Do a JLPT quiz": "\u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u0442\u0435\u0441\u0442 JLPT",
    "Play the daily challenge": "\u0421\u044B\u0433\u0440\u0430\u0439\u0442\u0435 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435",
    "Streak kept today \u2014 well done!": "\u0421\u0435\u0440\u0438\u044F \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430 \u2014 \u043E\u0442\u043B\u0438\u0447\u043D\u043E!",
    "Daily streak tasks": "\u0417\u0430\u0434\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0435\u0440\u0438\u0438",
    "Today\u2019s streak tasks": "\u0417\u0430\u0434\u0430\u043D\u0438\u044F \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    "days in a row": "\u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434",
    "Go": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438",
    "\u{1F525} Keep your daily streak": "\u{1F525} \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0443\u044E \u0441\u0435\u0440\u0438\u044E",
    "A day counts for your streak when all four tasks are done. Your best streak unlocks magic staffs.": "\u0414\u0435\u043D\u044C \u0437\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u0435\u0440\u0438\u044E, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u0432\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F. \u041B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u043E\u0445\u0438.",
    "Don\u2019t show this when I log in": "\u041D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u0438 \u0432\u0445\u043E\u0434\u0435",
    "daily streak (days)": "\u0441\u0435\u0440\u0438\u044F (\u0434\u043D\u0438)",
    "A short story with blanks \u2014 fill them in with your struggling words, then check.": "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0441 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u043C\u0438 \u2014 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0438\u0445 \u0442\u0440\u0443\u0434\u043D\u044B\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435.",
    "Swipe the card: \u2190 Again \xB7 Hard   |   Okay \xB7 Easy \u2192": "\u0421\u043C\u0430\u0445\u043D\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443: \u2190 \u0421\u043D\u043E\u0432\u0430 \xB7 \u0422\u0440\u0443\u0434\u043D\u043E   |   \u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E \xB7 \u041B\u0435\u0433\u043A\u043E \u2192",
    "Profile": "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    "\u2726 Unlocked \u2726": "\u2726 \u041E\u0442\u043A\u0440\u044B\u0442\u043E \u2726",
    "No border": "\u0411\u0435\u0437 \u0440\u0430\u043C\u043A\u0438",
    "Your profile card: a border round your picture (unlocks at levels 1, 5, 10 and 15) and up to 3 achievement badges under your name.": "\u0412\u0430\u0448\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u044F: \u0440\u0430\u043C\u043A\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u0444\u043E\u0442\u043E (\u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430 1, 5, 10 \u0438 15 \u0443\u0440\u043E\u0432\u043D\u044F\u0445) \u0438 \u0434\u043E 3 \u0437\u043D\u0430\u0447\u043A\u043E\u0432 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0439 \u043F\u043E\u0434 \u0438\u043C\u0435\u043D\u0435\u043C.",
    "Tap an achievement you have earned to show it under your name; tap it again to take it off.": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u043E\u0435 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0434 \u0438\u043C\u0435\u043D\u0435\u043C; \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437, \u0447\u0442\u043E\u0431\u044B \u0443\u0431\u0440\u0430\u0442\u044C.",
    "No badges yet \u2014 pick up to 3 below.": "\u0417\u043D\u0430\u0447\u043A\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u2014 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043E 3 \u043D\u0438\u0436\u0435."
  };
  var SEASON_RU = { Frost: "\u0418\u043D\u0435\u0439", Sakura: "\u0421\u0430\u043A\u0443\u0440\u0430", Blossom: "\u0426\u0432\u0435\u0442\u0435\u043D\u0438\u0435", Rain: "\u0414\u043E\u0436\u0434\u044C", Jade: "\u041D\u0435\u0444\u0440\u0438\u0442", Sun: "\u0421\u043E\u043B\u043D\u0446\u0435", Abyss: "\u0411\u0435\u0437\u0434\u043D\u0430", Thunder: "\u0413\u0440\u043E\u043C", Moon: "\u041B\u0443\u043D\u0430", Harvest: "\u0423\u0440\u043E\u0436\u0430\u0439", Maple: "\u041A\u043B\u0451\u043D", Starlight: "\u0417\u0432\u0451\u0437\u0434\u043D\u044B\u0439 \u0441\u0432\u0435\u0442" };
  var STAFF_RU = { Verdant: "\u041B\u0438\u0441\u0442\u0432\u044B", Ember: "\u0423\u0433\u043B\u0435\u0439", Tide: "\u041F\u0440\u0438\u043B\u0438\u0432\u0430", Storm: "\u0411\u0443\u0440\u0438", Void: "\u041F\u0443\u0441\u0442\u043E\u0442\u044B", Frost: "\u0418\u043D\u0435\u044F", Blossom: "\u0426\u0432\u0435\u0442\u0435\u043D\u0438\u044F", Jade: "\u041D\u0435\u0444\u0440\u0438\u0442\u0430", Abyss: "\u0411\u0435\u0437\u0434\u043D\u044B", Moon: "\u041B\u0443\u043D\u044B", Maple: "\u041A\u043B\u0451\u043D\u0430" };
  var MASTERY_RU = { "Not in your spells yet": "\u0415\u0449\u0451 \u043D\u0435\u0442 \u0432 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\u0445", New: "\u041D\u043E\u0432\u044B\u0435", Learning: "\u0418\u0437\u0443\u0447\u0430\u044E\u0442\u0441\u044F", Learned: "\u0412\u044B\u0443\u0447\u0435\u043D\u044B", "Mastered (3+ weeks)": "\u041E\u0441\u0432\u043E\u0435\u043D\u044B (3+ \u043D\u0435\u0434\u0435\u043B\u0438)", "Your spells": "\u0412\u0430\u0448\u0438 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F", "Learned & mastered": "\u0412\u044B\u0443\u0447\u0435\u043D\u044B \u0438 \u043E\u0441\u0432\u043E\u0435\u043D\u044B", "Not started": "\u041D\u0435 \u043D\u0430\u0447\u0430\u0442\u044B", All: "\u0412\u0441\u0435" };
  var MODE_RU = { "1v1 Kanji Reading": "1 \u043D\u0430 1: \u0427\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438", "1v1 Kanji Writing": "1 \u043D\u0430 1: \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438", "Boss Elimination": "\u0411\u0438\u0442\u0432\u0430 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C", "1v1 Rapid": "1 \u043D\u0430 1: \u0411\u043B\u0438\u0446", "Deck Duel": "\u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434", "Kanji Reading": "\u0427\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438", "Kanji Writing": "\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438" };
  var mode = (m) => MODE_RU[m] ?? m;
  var plural = (n, one, few, many) => {
    const a = Math.abs(n) % 100, b = a % 10;
    return a > 10 && a < 20 ? many : b === 1 ? one : b >= 2 && b <= 4 ? few : many;
  };
  var PATTERNS = [
    [/^Write all (\d+) kanji, left to right$/, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0441\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 ($1) \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E"],
    [/^(.+) \(you\)$/, "$1 (\u0432\u044B)"],
    [/^Click an earned badge to show it under your name \(★ = on your profile, up to (\d+)\)\.$/, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0439 \u0437\u043D\u0430\u0447\u043E\u043A, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0434 \u0438\u043C\u0435\u043D\u0435\u043C (\u2605 \u2014 \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0435, \u0434\u043E $1)."],
    [/^✗ The answer is (.+)$/, "\u2717 \u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442: $1"],
    [/^(.+) cast for (\d+)( \(CRIT!\))?( \(×\d+\))?:$/, (_, who, n, crit, combo) => `${who} \u0431\u044C\u0451\u0442 \u043D\u0430 ${n}${crit ? " (\u041A\u0420\u0418\u0422!)" : ""}${combo ?? ""}:`],
    [/^(Just your picture\.|A plain silver ring\.|A violet ring with four rune studs\.|A golden ring with a star at the top\.|A glowing ring of moving arcane light\.|A platinum ring with a BETA tag — for everyone who finished the tutorial during the beta\.) Round your profile picture — everyone sees it in lobbies, battles and on your profile card\.$/, (_, b) => `${{
      "Just your picture.": "\u0422\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0435 \u0444\u043E\u0442\u043E.",
      "A plain silver ring.": "\u041F\u0440\u043E\u0441\u0442\u043E\u0435 \u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u043E\u0435 \u043A\u043E\u043B\u044C\u0446\u043E.",
      "A violet ring with four rune studs.": "\u0424\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u043E\u0435 \u043A\u043E\u043B\u044C\u0446\u043E \u0441 \u0447\u0435\u0442\u044B\u0440\u044C\u043C\u044F \u0440\u0443\u043D\u0430\u043C\u0438.",
      "A golden ring with a star at the top.": "\u0417\u043E\u043B\u043E\u0442\u043E\u0435 \u043A\u043E\u043B\u044C\u0446\u043E \u0441\u043E \u0437\u0432\u0435\u0437\u0434\u043E\u0439 \u0441\u0432\u0435\u0440\u0445\u0443.",
      "A glowing ring of moving arcane light.": "\u0421\u0438\u044F\u044E\u0449\u0435\u0435 \u043A\u043E\u043B\u044C\u0446\u043E \u0438\u0437 \u0434\u0432\u0438\u0436\u0443\u0449\u0435\u0433\u043E\u0441\u044F \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u0432\u0435\u0442\u0430.",
      "A platinum ring with a BETA tag \u2014 for everyone who finished the tutorial during the beta.": "\u041F\u043B\u0430\u0442\u0438\u043D\u043E\u0432\u043E\u0435 \u043A\u043E\u043B\u044C\u0446\u043E \u0441 \u043C\u0435\u0442\u043A\u043E\u0439 BETA \u2014 \u0434\u043B\u044F \u0432\u0441\u0435\u0445, \u043A\u0442\u043E \u043F\u0440\u043E\u0448\u0451\u043B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0431\u0435\u0442\u044B."
    }[b] ?? b} \u041E\u0431\u0440\u0430\u043C\u043B\u044F\u0435\u0442 \u0444\u043E\u0442\u043E \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u2014 \u0435\u0433\u043E \u0432\u0438\u0434\u044F\u0442 \u0432\u0441\u0435 \u0432 \u043B\u043E\u0431\u0431\u0438, \u0431\u043E\u044F\u0445 \u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F.`],
    [/^Lv (\d+)$/, "\u0423\u0440. $1"],
    // Deck Duel turn log (0.9.9)
    [/^(You|.+?) cast (\S+) ✓ — (.+)$/, (_, w, k, rest) => `${w === "You" ? "\u0412\u044B" : w} \u2014 ${k} \u2713 \u2014 ${rest.replace(/hit (.+?) for −(\d+) HP/, (_m, t, n) => `\u0443\u0434\u0430\u0440 \u043F\u043E \xAB${t === "you" ? "\u0432\u0430\u043C" : t}\xBB: \u2212${n} HP`).replace(/\+(\d+) HP/, "+$1 HP").replace(/\+(\d+)◆ mana/, "+$1\u25C6 \u043C\u0430\u043D\u044B")}`],
    [/^(You|.+?) missed (\S+) — the (.+) fizzled$/, (_, w, k, l) => `${w === "You" ? "\u0412\u044B" : w}: \u043E\u0448\u0438\u0431\u043A\u0430 \u0432 ${k} \u2014 \xAB${tr(l)}\xBB \u0440\u0430\u0441\u0441\u0435\u044F\u043B\u043E\u0441\u044C`],
    [/^(You|.+?) played a (.+?) card(.*)$/, (_, w, l, rest) => `${w === "You" ? "\u0412\u044B \u0441\u044B\u0433\u0440\u0430\u043B\u0438" : `${w} \u0441\u044B\u0433\u0440\u0430\u043B(\u0430)`} \u043A\u0430\u0440\u0442\u0443 \xAB${tr(l)}\xBB${rest.replace(/(\d+)◆/, "$1\u25C6")}`],
    [/^(You|.+?) guessed wrong$/, (_, w) => w === "You" ? "\u0412\u044B \u043D\u0435 \u0443\u0433\u0430\u0434\u0430\u043B\u0438" : `${w} \u043D\u0435 \u0443\u0433\u0430\u0434\u0430\u043B(\u0430)`],
    [/^(You|.+?) read (\S+) first — −(\d+) HP to (.+)$/, (_, w, k, n, t) => `${w === "You" ? "\u0412\u044B" : w} \u043F\u0435\u0440\u0432\u044B\u043C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043B(\u0430) ${k} \u2014 \u2212${n} HP: ${t === "you" ? "\u0432\u0430\u043C" : t}`],
    [/^Nobody read (\S+) in time$/, "\u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0443\u0441\u043F\u0435\u043B \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C $1"],
    [/^(You|.+?) (had no mana for any card|ran out of time) — turn skipped, −(\d+) HP$/, (_, w, why, n) => `${w === "You" ? "\u0412\u044B" : w}: ${why.startsWith("had") ? "\u043D\u0435\u0442 \u043C\u0430\u043D\u044B \u043D\u0438 \u043D\u0430 \u043E\u0434\u043D\u0443 \u043A\u0430\u0440\u0442\u0443" : "\u0432\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E"} \u2014 \u0445\u043E\u0434 \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D, \u2212${n} HP`],
    [/^(You|.+?) skipped the turn: −(\d+) HP$/, (_, w, n) => `${w === "You" ? "\u0412\u044B \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u043B\u0438" : `${w} \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u043B(\u0430)`} \u0445\u043E\u0434: \u2212${n} HP`],
    [/^(You|.+?) ran out of cards — Round (\d+) draft \(HP and mana stay\)$/, (_, w, r2) => `${w === "You" ? "\u0423 \u0432\u0430\u0441" : `\u0423 ${w}`} \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u043A\u0430\u0440\u0442\u044B \u2014 \u0434\u0440\u0430\u0444\u0442 \u0440\u0430\u0443\u043D\u0434\u0430 ${r2} (HP \u0438 \u043C\u0430\u043D\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F)`],
    [/^Round (\d+): (You|.+?) won the coin flip and picks? first$/, (_, r2, w) => `\u0420\u0430\u0443\u043D\u0434 ${r2}: ${w === "You" ? "\u0432\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B\u0438" : `${w} \u0432\u044B\u0438\u0433\u0440\u0430\u043B(\u0430)`} \u0436\u0440\u0435\u0431\u0438\u0439 \u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C`],
    [/^(You|.+?) used Omnipotence — (.+)$/, (_, w, p) => `${w === "You" ? "\u0412\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043B\u0438" : `${w} \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043B(\u0430)`} \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u2014 ${p}`],
    [/^(You|.+?): Arcane reserve — (\+2 random cards|\+30 mana)$/, (_, w, x) => `${w === "You" ? "\u0412\u044B" : w}: \u0422\u0430\u0439\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0441 \u2014 ${x === "+30 mana" ? "+30 \u043C\u0430\u043D\u044B" : "+2 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u044B"}`],
    [/^Turn (\d+)$/, "\u0425\u043E\u0434 $1"],
    [/^(\d+) online$/, "$1 \u0432 \u0441\u0435\u0442\u0438"],
    [/^From (.+)'s spells$/, "\u0418\u0437 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: $1"],
    [/^(\d+) new spells a day$/, "$1 \u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u0432 \u0434\u0435\u043D\u044C"],
    [/^Adds up to (\d+) new words to “All spells” today$/, "\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0434\u043E\u0431\u0430\u0432\u0438\u0442 \u0434\u043E $1 \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432 \u0432\u043E \xAB\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB"],
    [/^(\d+) of (\d+) \(last 30 days\)$/, "$1 \u0438\u0437 $2 (\u0437\u0430 30 \u0434\u043D\u0435\u0439)"],
    [/^(\d+) of (\d+)$/, "$1 \u0438\u0437 $2"],
    [/^(\d+) started$/, "\u043D\u0430\u0447\u0430\u0442\u043E: $1"],
    [/^(\d+) finished$/, "\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E: $1"],
    [/^(\d{4}-\d\d-\d\d): (\d+) active, (\d+) new$/, "$1: \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 $2, \u043D\u043E\u0432\u044B\u0445 $3"],
    [/^write (\d+) kanji$/, "\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u0430\u043D\u0434\u0437\u0438: $1"],
    [/^(\d+) damage · (\d+) mana$/, "$1 \u0443\u0440\u043E\u043D\u0430 \xB7 $2 \u043C\u0430\u043D\u044B"],
    [/^heals (\d+) · (\d+) mana$/, "\u043B\u0435\u0447\u0438\u0442 $1 \xB7 $2 \u043C\u0430\u043D\u044B"],
    [/^\+(\d+) mana · free$/, "+$1 \u043C\u0430\u043D\u044B \xB7 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"],
    [/^(.+) — (Bolt|Frost|Mana|Heal|Inferno): (.+)$/, (_, c, l, rest) => `${c} \u2014 ${tr(l)}: ${rest.replace(/(\d+) damage/, "$1 \u0443\u0440\u043E\u043D\u0430").replace(/heal (\d+)/, "\u043B\u0435\u0447\u0438\u0442 $1").replace(/\+(\d+) mana/, "+$1 \u043C\u0430\u043D\u044B").replace(/costs (\d+) mana/, "\u0441\u0442\u043E\u0438\u0442 $1 \u043C\u0430\u043D\u044B")}`],
    [/^Write all (\d+) kanji, left to right$/, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0441\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 ($1) \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E"],
    [/^(\d+) active days this month$/, (_, n) => `${n} ${plural(+n, "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0435\u043D\u044C", "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0434\u043D\u044F", "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0434\u043D\u0435\u0439")} \u0432 \u044D\u0442\u043E\u043C \u043C\u0435\u0441\u044F\u0446\u0435`],
    [/^(.+) — view profile$/, "$1 \u2014 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"],
    [/^The staff in your hand \(other players see it too\)\. Classic staffs unlock with your login streak — your best: (.+)\. Seasonal staffs are monthly rewards \(see Progress\)\.$/, (_, d) => `\u041F\u043E\u0441\u043E\u0445 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0440\u0443\u043A\u0435 (\u0435\u0433\u043E \u0432\u0438\u0434\u044F\u0442 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u0433\u0440\u043E\u043A\u0438). \u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u043E\u0445\u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0441\u0435\u0440\u0438\u0435\u0439 \u0432\u0445\u043E\u0434\u043E\u0432 \u2014 \u0432\u0430\u0448 \u0440\u0435\u043A\u043E\u0440\u0434: ${d.replace(/(\d+) days?/, (_m, n) => `${n} ${plural(+n, "\u0434\u0435\u043D\u044C", "\u0434\u043D\u044F", "\u0434\u043D\u0435\u0439")}`)}. \u0421\u0435\u0437\u043E\u043D\u043D\u044B\u0435 \u043F\u043E\u0441\u043E\u0445\u0438 \u2014 \u043D\u0430\u0433\u0440\u0430\u0434\u044B \u043C\u0435\u0441\u044F\u0446\u0430 (\u0441\u043C. \xAB\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\xBB).`],
    [/^(\w+) reward: complete that month's goals \(Progress page\)\. Wraps you at 5 in a row and during your Omnipotence\.$/, "\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u043C\u0435\u0441\u044F\u0446\u0430 ($1): \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0446\u0435\u043B\u0438 \u044D\u0442\u043E\u0433\u043E \u043C\u0435\u0441\u044F\u0446\u0430 (\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \xAB\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\xBB). \u041E\u043A\u0443\u0442\u044B\u0432\u0430\u0435\u0442 \u0432\u0430\u0441 \u043F\u0440\u0438 5 \u043F\u043E\u0434\u0440\u044F\u0434 \u0438 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u0430."],
    [/^Unlocks at a (\d+)-day streak$/, (_, n) => `\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0441\u0435\u0440\u0438\u0438 ${n} ${plural(+n, "\u0434\u0435\u043D\u044C", "\u0434\u043D\u044F", "\u0434\u043D\u0435\u0439")}`],
    [/^(\w+) Staff$/, (_, x) => STAFF_RU[x] ? `\u041F\u043E\u0441\u043E\u0445 ${STAFF_RU[x]}` : `\u041F\u043E\u0441\u043E\u0445 ${x}`],
    [/^(\w+) flames$/, (_, x) => `\u041F\u043B\u0430\u043C\u044F \xAB${SEASON_RU[x] ?? x}\xBB`],
    [/^(.+) · (\d+)$/, (_, x, n) => MASTERY_RU[x] ? `${MASTERY_RU[x]} \xB7 ${n}` : `${x} \xB7 ${n}`],
    [/^Locked · (.+)$/, (_, x) => `\u0417\u0430\u043A\u0440\u044B\u0442\u043E \xB7 ${tr(x)}`],
    [/^Unlocks with the (\S+) goals$/, "\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0437\u0430 \u0446\u0435\u043B\u0438 \u043C\u0435\u0441\u044F\u0446\u0430: $1"],
    [/^(\S+) goals$/, "\u0426\u0435\u043B\u0438 \u043C\u0435\u0441\u044F\u0446\u0430: $1"],
    [/^(\d+)-day streak$/, (_, n) => `\u0441\u0435\u0440\u0438\u044F ${n} ${plural(+n, "\u0434\u0435\u043D\u044C", "\u0434\u043D\u044F", "\u0434\u043D\u0435\u0439")}`],
    [/^AI · knows (N\d)$/, "\u0418\u0418 \xB7 \u0437\u043D\u0430\u0435\u0442 $1"],
    [/^AI player · knows (N\d)$/, "\u0418\u0418-\u0438\u0433\u0440\u043E\u043A \xB7 \u0437\u043D\u0430\u0435\u0442 $1"],
    [/^(.+) \(AI Beginner\)$/, "$1 (\u0418\u0418-\u043D\u043E\u0432\u0438\u0447\u043E\u043A)"],
    [/^(.+) \(AI (N\d)\)$/, "$1 (\u0418\u0418 $2)"],
    [/^Level (\d+)$/, "\u0423\u0440\u043E\u0432\u0435\u043D\u044C $1"],
    [/^Unlocks at level (\d+)$/, "\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 $1"],
    [/^Level (\d+)! Check Customize for new unlocks\.$/, "\u0423\u0440\u043E\u0432\u0435\u043D\u044C $1! \u0417\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435 \u0432 \xAB\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u044E\xBB \u2014 \u0442\u0430\u043C \u043D\u043E\u0432\u043E\u0435."],
    [/^(.+) unlocks at level (\d+) — win a few games first\. \(A friend can still invite you\.\)$/, (_, m, l) => `${mode(m)} \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 ${l} \u2014 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0438\u0433\u0440\u0430\u0439\u0442\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0433\u0440. (\u0414\u0440\u0443\u0433 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043C\u043E\u0436\u0435\u0442 \u0432\u0430\u0441 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C.)`],
    [/^Invited · (\d+)s$/, "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0451\u043D \xB7 $1 \u0441"],
    [/^Wait (\d+) s before inviting them again$/, "\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 $1 \u0441 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u043C \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C"],
    [/^Your friend is in a game right now — invite them when it.s over$/, "\u0412\u0430\u0448 \u0434\u0440\u0443\u0433 \u0441\u0435\u0439\u0447\u0430\u0441 \u0432 \u0438\u0433\u0440\u0435 \u2014 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435 \u0435\u0433\u043E, \u043A\u043E\u0433\u0434\u0430 \u0438\u0433\u0440\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F"],
    [/^(.+) invites you$/, "$1 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u0442 \u0432\u0430\u0441"],
    [/^to (.+) — room ([A-Z]{4})$/, (_, m, c) => `\u0432 \xAB${mode(m)}\xBB \u2014 \u043A\u043E\u043C\u043D\u0430\u0442\u0430 ${c}`],
    [/^Join their (.+) room$/, (_, m) => `\u0412\u043E\u0439\u0442\u0438 \u0432 \u043A\u043E\u043C\u043D\u0430\u0442\u0443 \xAB${mode(m)}\xBB`],
    [/^(.+) wants to be your friend — see Friends$/, "$1 \u0445\u043E\u0447\u0435\u0442 \u0434\u0440\u0443\u0436\u0438\u0442\u044C \u2014 \u0441\u043C. \xAB\u0414\u0440\u0443\u0437\u044C\u044F\xBB"],
    [/^(.+) accepted your friend request$/, "$1 \u043F\u0440\u0438\u043D\u044F\u043B(\u0430) \u0432\u0430\u0448 \u0437\u0430\u043F\u0440\u043E\u0441 \u0432 \u0434\u0440\u0443\u0437\u044C\u044F"],
    [/^You and (.+) are now friends!$/, "\u0412\u044B \u0441 $1 \u0442\u0435\u043F\u0435\u0440\u044C \u0434\u0440\u0443\u0437\u044C\u044F!"],
    [/^You already asked (.+)\.$/, "\u0412\u044B \u0443\u0436\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0437\u0430\u043F\u0440\u043E\u0441 $1."],
    [/^Request sent to (.+)\.$/, "\u0417\u0430\u043F\u0440\u043E\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D: $1."],
    [/^Requests \((\d+)\)$/, "\u0417\u0430\u043F\u0440\u043E\u0441\u044B ($1)"],
    [/^Friends \((\d+)\) · (\d+) online$/, "\u0414\u0440\u0443\u0437\u044C\u044F ($1) \xB7 $2 \u0432 \u0441\u0435\u0442\u0438"],
    [/^Playing (.+)$/, (_, m) => `\u0418\u0433\u0440\u0430\u0435\u0442: ${mode(m)}`],
    [/^Lobby · (.+)$/, (_, m) => `\u041B\u043E\u0431\u0431\u0438 \xB7 ${mode(m)}`],
    [/^Results · (.+)$/, (_, m) => `\u0418\u0442\u043E\u0433\u0438 \xB7 ${mode(m)}`],
    [/^In (.+) lobby$/, (_, m) => `\u0412 \u043B\u043E\u0431\u0431\u0438: ${mode(m)}`],
    [/^Player found — (.+)!$/, (_, m) => `\u0418\u0433\u0440\u043E\u043A \u043D\u0430\u0439\u0434\u0435\u043D \u2014 ${mode(m)}!`],
    [/^(.+) — press Accept$/, (_, m) => `${mode(m)} \u2014 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u041F\u0440\u0438\u043D\u044F\u0442\u044C\xBB`],
    [/^(\d+) \/ (\d+) accepted( — waiting for the others…)?$/, (_, a, n, w) => `${a} / ${n} \u043F\u0440\u0438\u043D\u044F\u043B\u0438${w ? " \u2014 \u0436\u0434\u0451\u043C \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445\u2026" : ""}`],
    [/^(\d+)\/(\d+) ready( — waiting for the others…)?$/, (_, a, n, w) => `${a}/${n} \u0433\u043E\u0442\u043E\u0432\u044B${w ? " \u2014 \u0436\u0434\u0451\u043C \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445\u2026" : ""}`],
    [/^Start — party of (\d+)$/, "\u041D\u0430\u0447\u0430\u0442\u044C \u2014 \u043E\u0442\u0440\u044F\u0434 \u0438\u0437 $1"],
    [/^Start now, or wait for more teammates \(up to (\d+)\)\.$/, "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u0438\u043B\u0438 \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u0441\u043E\u044E\u0437\u043D\u0438\u043A\u043E\u0432 (\u0434\u043E $1)."],
    [/^Waiting for (.+)…$/, "\u0416\u0434\u0451\u043C: $1\u2026"],
    [/^(.+) is choosing a card$/, "$1 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u043A\u0430\u0440\u0442\u0443"],
    [/^The dragon inhales… (\d+)$/, "\u0414\u0440\u0430\u043A\u043E\u043D \u043D\u0430\u0431\u0438\u0440\u0430\u0435\u0442 \u0432\u043E\u0437\u0434\u0443\u0445\u2026 $1"],
    [/^Fire breath! Everyone takes (\d+)$/, "\u041E\u0433\u043D\u0435\u043D\u043D\u043E\u0435 \u0434\u044B\u0445\u0430\u043D\u0438\u0435! \u0412\u0441\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 $1"],
    [/^The dragon claws (.+) for (\d+)$/, "\u0414\u0440\u0430\u043A\u043E\u043D \u0431\u044C\u0451\u0442 \u043A\u043E\u0433\u0442\u044F\u043C\u0438 $1 \u043D\u0430 $2"],
    [/^Write all (\d+) characters, left to right$/, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0441\u0435 $1 \u0437\u043D\u0430\u043A\u0430(\u043E\u0432) \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E"],
    [/^The pad read: (.+)$/, "\u041F\u0430\u043D\u0435\u043B\u044C \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043B\u0430: $1"],
    [/^Monthly goals complete! (.+) unlocked — equip it in Customize\.$/, "\u041C\u0435\u0441\u044F\u0447\u043D\u044B\u0435 \u0446\u0435\u043B\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B! \u041E\u0442\u043A\u0440\u044B\u0442\u043E: $1 \u2014 \u043D\u0430\u0434\u0435\u043D\u044C\u0442\u0435 \u0432 \xAB\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u0438\xBB."],
    [/^(\d+) struggling spells are waiting\. Study them down to (\d+) to unlock the game modes\.$/, "\u0416\u0434\u0443\u0442 \u0442\u0440\u0443\u0434\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F: $1. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0438\u0445, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F $2, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u0436\u0438\u043C\u044B."],
    [/^(\d+) left · (All spells|Struggling spells|Custom spells)$/, (_, n, d) => `\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${n} \xB7 ${d === "All spells" ? "\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F" : d === "Custom spells" ? "\u0421\u0432\u043E\u0438 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F" : "\u0422\u0440\u0443\u0434\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F"}`],
    [/^Unlocks at (?:a )?(\d+)-day streak$/, (_, n) => `\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0441\u0435\u0440\u0438\u0438 ${n} ${plural(+n, "\u0434\u0435\u043D\u044C", "\u0434\u043D\u044F", "\u0434\u043D\u0435\u0439")}`],
    [/^Unlocks at (?:a )?(\S+) goals$/, "\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0437\u0430 \u0446\u0435\u043B\u0438 \u043C\u0435\u0441\u044F\u0446\u0430: $1"],
    [/^Log in (\d+) days in a row to unlock the (.+) \(your best: (\d+)\)$/, "\u0417\u0430\u0445\u043E\u0434\u0438\u0442\u0435 $1 \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C $2 (\u0432\u0430\u0448 \u0440\u0435\u043A\u043E\u0440\u0434: $3)"],
    [/^Reach level (\d+) to unlock (.+)$/, "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u043D\u044F $1, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C: $2"],
    [/^(.+): (\w+) season$/, (_, m, x) => `${m}: \u0441\u0435\u0437\u043E\u043D \xAB${SEASON_RU[x] ?? x}\xBB`],
    [/^Unlocked: (.+) — equip it in Customize$/, (_, x) => `\u041E\u0442\u043A\u0440\u044B\u0442\u043E: ${tr(x)} \u2014 \u043D\u0430\u0434\u0435\u043D\u044C\u0442\u0435 \u0432 \xAB\u041A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u0438\xBB`],
    [/^Reward: (.+) \(only this month\)$/, (_, x) => `\u041D\u0430\u0433\u0440\u0430\u0434\u0430: ${tr(x)} (\u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u044D\u0442\u043E\u043C \u043C\u0435\u0441\u044F\u0446\u0435)`],
    [/^(\d+) active days in the last 6 months$/, (_, n) => `${n} ${plural(+n, "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0435\u043D\u044C", "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0434\u043D\u044F", "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0434\u043D\u0435\u0439")} \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432`],
    [/^([+−-]?[\d,]+) vs last week$/, "$1 \u043A \u043F\u0440\u043E\u0448\u043B\u043E\u0439 \u043D\u0435\u0434\u0435\u043B\u0435"],
    [/^Every correct word gives 30 XP \(\+100 for a perfect 10\)\. New words at (.+) your time\.$/, "\u041A\u0430\u0436\u0434\u043E\u0435 \u0432\u0435\u0440\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u2014 30 \u043E\u043F\u044B\u0442\u0430 (+100 \u0437\u0430 \u0432\u0441\u0435 10). \u041D\u043E\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0432 $1 \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438."],
    [/^Challenge of (.+)$/, "\u0418\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435: $1"],
    [/^Two words each from N5 to N1, easiest first\. Type the reading \(kana or romaji\) and press Enter — (\d+) s per word\. One try a day: most correct wins, then fastest\.$/, "\u041F\u043E \u0434\u0432\u0430 \u0441\u043B\u043E\u0432\u0430 \u0441 N5 \u0434\u043E N1, \u043E\u0442 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u043A \u0441\u043B\u043E\u0436\u043D\u044B\u043C. \u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 (\u043A\u0430\u043D\u0430 \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438) \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter \u2014 $1 \u0441 \u043D\u0430 \u0441\u043B\u043E\u0432\u043E. \u041E\u0434\u043D\u0430 \u043F\u043E\u043F\u044B\u0442\u043A\u0430 \u0432 \u0434\u0435\u043D\u044C: \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0435\u0440\u043D\u044B\u0445, \u0437\u0430\u0442\u0435\u043C \u0431\u044B\u0441\u0442\u0440\u0435\u0435."],
    [/^10 new words at (.+) your time\.$/, "10 \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432 \u0432 $1 \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438."],
    [/^Word (\d+) of (\d+) · (.+)$/, "\u0421\u043B\u043E\u0432\u043E $1 \u0438\u0437 $2 \xB7 $3"],
    [/^Show more \((\d+) left\)$/, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451 (\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C $1)"],
    [/^Offline mode · (\d+) to sync$/, "\u041E\u0444\u043B\u0430\u0439\u043D-\u0440\u0435\u0436\u0438\u043C \xB7 \u0436\u0434\u0443\u0442 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u0438: $1"],
    [/^Daily challenge: (\d+)\/10(?: · \+(\d+) XP)? · your rank comes when you're back online$/, (_, c, x) => `\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435: ${c}/10${x ? ` \xB7 +${x} \u043E\u043F\u044B\u0442\u0430` : ""} \xB7 \u043C\u0435\u0441\u0442\u043E \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442`],
    [/^Daily challenge: (\d+)\/10 · rank (\d+) of (\d+)(?: · \+(\d+) XP)?$/, (_, c, r2, p, x) => `\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435: ${c}/10 \xB7 \u043C\u0435\u0441\u0442\u043E ${r2} \u0438\u0437 ${p}${x ? ` \xB7 +${x} \u043E\u043F\u044B\u0442\u0430` : ""}`],
    [/^([\d.]+) s · rank (\d+) today$/, "$1 \u0441 \xB7 \u043C\u0435\u0441\u0442\u043E $2 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"],
    [/^Read the meaning — the kanji shows in (\d+) s$/, "\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u2014 \u043A\u0430\u043D\u0434\u0437\u0438 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 $1 \u0441"],
    [/^Round (\d+) — new cards! HP, mana and powers stay as they are\.$/, "\u0420\u0430\u0443\u043D\u0434 $1 \u2014 \u043D\u043E\u0432\u044B\u0435 \u043A\u0430\u0440\u0442\u044B! HP, \u043C\u0430\u043D\u0430 \u0438 \u0441\u0438\u043B\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F."],
    [/^ready in (\d+) turns?$/, (_, n) => `\u0433\u043E\u0442\u043E\u0432\u043E \u0447\u0435\u0440\u0435\u0437 ${n} ${plural(+n, "\u0445\u043E\u0434", "\u0445\u043E\u0434\u0430", "\u0445\u043E\u0434\u043E\u0432")}`],
    [/^Your turn — choose a card( \(Frenzy: 2 cards\))?$/, (_, f2) => `\u0412\u0430\u0448 \u0445\u043E\u0434 \u2014 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0443${f2 ? " (\u041D\u0435\u0438\u0441\u0442\u043E\u0432\u0441\u0442\u0432\u043E: 2 \u043A\u0430\u0440\u0442\u044B)" : ""}`],
    [/^Playing since (.+)$/, "\u0418\u0433\u0440\u0430\u0435\u0442 \u0441 $1"],
    [/^(\d+) online now · (\d+) accounts · (\d+) banned$/, "\u0421\u0435\u0439\u0447\u0430\u0441 \u0432 \u0441\u0435\u0442\u0438: $1 \xB7 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u0432: $2 \xB7 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E: $3"],
    [/^last day: (.+)$/, "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0434\u0435\u043D\u044C: $1"],
    [/^(\d+) learned today · (\d+) learned in total$/, "\u0432\u044B\u0443\u0447\u0435\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F: $1 \xB7 \u0432\u0441\u0435\u0433\u043E: $2"]
  ];
  var MEANINGS = null;
  var meaning = (s) => MEANINGS?.[s];
  var meaningIn = (en) => lang() === "ru" ? MEANINGS?.[en] ?? en : en;
  function trMeaning(s) {
    if (!MEANINGS) return void 0;
    const m0 = meaning(s);
    if (m0) return m0;
    let m = /^— (.+)$/.exec(s);
    if (m && meaning(m[1])) return `\u2014 ${meaning(m[1])}`;
    m = /^(.+ · .+ · )(.+?)( — read: .+)?$/.exec(s);
    if (m && meaning(m[2])) return `${m[1]}${meaning(m[2])}${m[3] ? m[3].replace(" \u2014 read: ", " \u2014 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043E: ") : ""}`;
    m = /^([^A-Za-z]+) — (.+)$/.exec(s);
    if (m && meaning(m[2])) return `${m[1]} \u2014 ${meaning(m[2])}`;
    return void 0;
  }
  function tr(s) {
    if (lang() !== "ru") return s;
    const exact = RU[s] ?? trMeaning(s);
    if (exact) return exact;
    for (const [re, rep] of PATTERNS) {
      if (!re.test(s)) continue;
      const out = typeof rep === "string" ? s.replace(re, rep) : s.replace(re, (...m) => rep(...m.slice(0, -2)));
      if (out !== s) return out;
    }
    return s;
  }
  var SKIP = 'script, style, svg, textarea, [lang="ja"], [data-no-i18n], .k, .kanji, .chat-log';
  var ATTRS = ["placeholder", "title", "aria-label"];
  function translateText(node) {
    const raw = node.data;
    const s = raw.trim();
    if (!s || !/[A-Za-z]/.test(s)) return;
    const parent = node.parentElement;
    if (!parent || parent.closest(SKIP)) return;
    const t = tr(s);
    if (t !== s) node.data = raw.replace(s, t);
  }
  function translateAttrs(el11) {
    const box = el11.tagName === "INPUT" || el11.tagName === "TEXTAREA";
    if ((box ? el11.parentElement : el11)?.closest(SKIP)) return;
    for (const a of ATTRS) {
      const v = el11.getAttribute(a);
      if (v && /[A-Za-z]/.test(v)) {
        const t = tr(v.trim());
        if (t !== v.trim()) el11.setAttribute(a, t);
      }
    }
  }
  function walk(root) {
    if (root.nodeType === Node.TEXT_NODE) return translateText(root);
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    const el11 = root;
    if (el11.matches(SKIP)) return;
    translateAttrs(el11);
    const it = document.createTreeWalker(el11, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    for (let n = it.nextNode(); n; n = it.nextNode()) {
      if (n.nodeType === Node.TEXT_NODE) translateText(n);
      else translateAttrs(n);
    }
  }
  var started = false;
  function useRussianNow() {
    try {
      localStorage.setItem(KEY, "ru");
    } catch {
    }
    initI18n();
  }
  function initI18n() {
    document.documentElement.lang = lang();
    if (lang() !== "ru" || started) return;
    started = true;
    walk(document.body);
    fetch("/meanings-ru.json").then((r2) => r2.ok ? r2.json() : null).then((m) => {
      if (m) {
        MEANINGS = m;
        walk(document.body);
      }
    }).catch(() => {
    });
    new MutationObserver((list) => {
      for (const m of list) {
        if (m.type === "characterData") translateText(m.target);
        else if (m.type === "attributes") translateAttrs(m.target);
        else m.addedNodes.forEach(walk);
      }
    }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...ATTRS] });
  }

  // src/client/zoom.ts
  var KEY2 = "kb:uizoom";
  var UI_ZOOMS = [0.7, 0.8, 0.9, 1];
  var scale = 1;
  var uiScale = () => scale;
  function uiZoomPref() {
    try {
      const v = Number(localStorage.getItem(KEY2));
      if (UI_ZOOMS.includes(v)) return v;
    } catch {
    }
    return innerWidth >= 900 && !matchMedia("(pointer: coarse)").matches ? 0.8 : 1;
  }
  function setUiZoomPref(z) {
    try {
      localStorage.setItem(KEY2, String(z));
    } catch {
    }
    applyUiZoom(z);
  }
  var REF_W = 1920;
  var REF_H = 940;
  function screenFactor() {
    if (innerWidth < 900 || matchMedia("(pointer: coarse)").matches) return 1;
    return Math.max(0.72, Math.min(2.2, Math.min(innerWidth / REF_W, innerHeight / REF_H)));
  }
  var lastPref = 0;
  function applyUiZoom(pref = uiZoomPref()) {
    lastPref = pref;
    const z = Math.round(pref * screenFactor() * 1e3) / 1e3;
    const root = document.documentElement;
    root.style.setProperty("--ui-zoom", String(z));
    root.style.setProperty("--vfix", "1");
    const probe2 = document.createElement("div");
    probe2.style.cssText = "position:absolute;left:0;top:0;width:100px;height:100vh;visibility:hidden;pointer-events:none";
    document.body.append(probe2);
    const r2 = probe2.getBoundingClientRect();
    probe2.remove();
    scale = r2.width > 0 ? r2.width / 100 : 1;
    const vfix = r2.height > 0 ? innerHeight / r2.height : 1;
    root.style.setProperty("--vfix", String(Math.round(vfix * 1e3) / 1e3));
    root.classList.toggle("eff-short", viewH() <= 900);
  }
  {
    let t = 0;
    addEventListener("resize", () => {
      clearTimeout(t);
      t = window.setTimeout(() => {
        if (lastPref) applyUiZoom(lastPref);
      }, 150);
    });
  }
  function zrect(el11) {
    const r2 = el11.getBoundingClientRect();
    const s = scale;
    return { left: r2.left / s, top: r2.top / s, right: r2.right / s, bottom: r2.bottom / s, width: r2.width / s, height: r2.height / s };
  }
  var viewW = () => innerWidth / scale;
  var viewH = () => innerHeight / scale;

  // src/client/strokes.ts
  var cache = /* @__PURE__ */ new Map();
  async function load(chars2) {
    const missing = [...new Set(chars2)].filter((c) => !cache.has(c));
    if (!missing.length) return;
    try {
      const { strokes: strokes2 } = await api.strokes(missing.join(""));
      for (const c of missing) cache.set(c, strokes2[c] ?? null);
    } catch {
      for (const c of missing) cache.set(c, null);
    }
  }
  var SVG_NS = "http://www.w3.org/2000/svg";
  var el = (tag, attrs = {}) => {
    const e = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v));
    return e;
  };
  function pathOf2(pts) {
    if (pts.length < 3) return `M${pts.map((p) => p.join(" ")).join(" L")}`;
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length - 1; i++) {
      const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2;
      d += ` Q${pts[i][0]} ${pts[i][1]} ${mx.toFixed(1)} ${my.toFixed(1)}`;
    }
    const last3 = pts[pts.length - 1];
    return `${d} L${last3[0]} ${last3[1]}`;
  }
  function diagram(ch, strokes2, stepMs, delay) {
    if (!strokes2 || !strokes2.length) {
      const s = el("svg", { viewBox: "0 0 100 100", class: "so-svg" });
      s.append(gridLines());
      const t = el("text", { x: 50, y: 52, "text-anchor": "middle", "dominant-baseline": "central", class: "so-glyph" });
      t.textContent = ch;
      s.append(t);
      return s;
    }
    const all = strokes2.flat();
    const xs = all.map((p) => p[0]), ys = all.map((p) => p[1]);
    const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
    const scale2 = 76 / Math.max(x1 - x0, y1 - y0, 1);
    const ox = 50 - (x0 + x1) / 2 * scale2, oy = 50 - (y0 + y1) / 2 * scale2;
    const fit = (s) => s.map(([x, y]) => [+(x * scale2 + ox).toFixed(1), +(y * scale2 + oy).toFixed(1)]);
    const svg = el("svg", { viewBox: "0 0 100 100", class: "so-svg" });
    svg.append(gridLines());
    const ghost = el("g", { class: "so-ghost" });
    const ink = el("g", { class: "so-ink" });
    const nums = el("g", { class: "so-nums" });
    strokes2.forEach((raw, i) => {
      const pts = fit(raw);
      const d = pathOf2(pts);
      ghost.append(el("path", { d }));
      const p = el("path", { d, pathLength: 1, style: `animation-delay:${delay + i * stepMs}ms;animation-duration:${stepMs * 0.85}ms` });
      ink.append(p);
      const n = el("text", { x: pts[0][0] - 4, y: pts[0][1] - 3, style: `animation-delay:${delay + i * stepMs}ms` });
      n.textContent = String(i + 1);
      nums.append(n);
    });
    svg.append(ghost, ink, nums);
    return svg;
  }
  function gridLines() {
    const g = el("g", { class: "so-grid" });
    g.append(el("line", { x1: 50, y1: 4, x2: 50, y2: 96 }), el("line", { x1: 4, y1: 50, x2: 96, y2: 50 }), el("rect", { x: 2, y: 2, width: 96, height: 96, rx: 6 }));
    return g;
  }
  async function showStrokeOrder(box, word2, o = {}) {
    const chars2 = [...word2];
    const stepMs = o.stepMs ?? 520;
    box.classList.add("stroke-order");
    box.replaceChildren(Object.assign(document.createElement("div"), { className: "so-loading", textContent: "\u2026" }));
    await load(chars2.filter((c) => /[\p{Script=Han}々]/u.test(c)));
    const build2 = () => {
      const row2 = document.createElement("div");
      row2.className = "so-row";
      let delay = 0;
      for (const ch of chars2) {
        const strokes2 = /[\p{Script=Han}々]/u.test(ch) ? cache.get(ch) ?? null : null;
        const cell = document.createElement("div");
        cell.className = "so-cell";
        cell.append(diagram(ch, strokes2, stepMs, delay));
        row2.append(cell);
        delay += (strokes2?.length ?? 0) * stepMs + (strokes2 ? 250 : 0);
      }
      return row2;
    };
    let row = build2();
    const foot = document.createElement("div");
    foot.className = "so-foot";
    if (o.caption) foot.append(Object.assign(document.createElement("span"), { textContent: o.caption }));
    const replay = Object.assign(document.createElement("button"), { className: "pill so-replay", type: "button", textContent: "\u21BB Replay" });
    replay.onclick = () => {
      const fresh = build2();
      row.replaceWith(fresh);
      row = fresh;
    };
    foot.append(replay);
    box.replaceChildren(row, foot);
  }
  async function strokesOf(ch) {
    await load([ch]);
    return cache.get(ch) ?? null;
  }
  function partsPicture(strokes2, part, colours) {
    const all = strokes2.flat();
    const xs = all.map((p) => p[0]), ys = all.map((p) => p[1]);
    const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
    const scale2 = 80 / Math.max(x1 - x0, y1 - y0, 1);
    const ox = 50 - (x0 + x1) / 2 * scale2, oy = 50 - (y0 + y1) / 2 * scale2;
    const svg = el("svg", { viewBox: "0 0 100 100", class: "kp-svg" });
    svg.append(gridLines());
    strokes2.forEach((raw, i) => {
      const pts = raw.map(([x, y]) => [+(x * scale2 + ox).toFixed(1), +(y * scale2 + oy).toFixed(1)]);
      const c = part[i] >= 0 ? colours[part[i] % colours.length] : "currentColor";
      svg.append(el("path", { d: pathOf2(pts), stroke: c, class: "kp-stroke", style: `animation-delay:${i * 90}ms` }));
    });
    return svg;
  }

  // src/client/art2d.ts
  var uid = 0;
  var nid = () => `a${(uid++).toString(36)}`;
  var hexRgb = (h4) => [1, 3, 5].map((i) => parseInt(h4.slice(i, i + 2), 16));
  var rgbHex = (c) => `#${c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("")}`;
  var mix = (a, b, t) => {
    const x = hexRgb(a), y = hexRgb(b);
    return rgbHex(x.map((v, i) => v + (y[i] - v) * t));
  };
  var dk = (c, t = 0.3) => mix(c, "#0a0612", t);
  var lt = (c, t = 0.3) => mix(c, "#ffffff", t);
  var Pic = class {
    constructor() {
      __publicField(this, "defs", []);
      __publicField(this, "body", []);
    }
    /** a left-lit gradient across a shape: light, base, shadow */
    lit(c, angle = "h", amt = 0.28) {
      const id = nid();
      const [x2, y2] = angle === "h" ? [1, 0] : angle === "v" ? [0, 1] : [1, 1];
      this.defs.push(`<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${lt(c, amt * 0.7)}"/><stop offset=".45" stop-color="${c}"/><stop offset="1" stop-color="${dk(c, amt)}"/></linearGradient>`);
      return `url(#${id})`;
    }
    radial(stops, cx = 0.5, cy = 0.5, r2 = 0.5) {
      const id = nid();
      this.defs.push(`<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r2}">${stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== void 0 ? ` stop-opacity="${a}"` : ""}/>`).join("")}</radialGradient>`);
      return `url(#${id})`;
    }
    linear(stops, x2 = 0, y2 = 1) {
      const id = nid();
      this.defs.push(`<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}">${stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== void 0 ? ` stop-opacity="${a}"` : ""}/>`).join("")}</linearGradient>`);
      return `url(#${id})`;
    }
    p(d, fill2, extra = "") {
      this.body.push(`<path d="${d}" fill="${fill2}"${extra ? " " + extra : ""}/>`);
      return this;
    }
    /** a stroked path (no fill) */
    s(d, stroke, w, extra = "") {
      this.body.push(`<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"${extra ? " " + extra : ""}/>`);
      return this;
    }
    e(cx, cy, rx, ry, fill2, extra = "") {
      this.body.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill2}"${extra ? " " + extra : ""}/>`);
      return this;
    }
    raw(s) {
      this.body.push(s);
      return this;
    }
    svg(w, h4, cls = "art") {
      return `<svg viewBox="0 0 ${w} ${h4}" class="${cls}" aria-hidden="true"><defs>${this.defs.join("")}</defs>${this.body.join("")}</svg>`;
    }
    inner() {
      return `<defs>${this.defs.join("")}</defs>${this.body.join("")}`;
    }
  };
  function facets(pic, pts, light) {
    pts.forEach((t, i) => pic.p(`M${t[0]} ${t[1]}L${t[2]} ${t[3]}L${t[4]} ${t[5]}Z`, light[i] ? "#ffffff" : "#000000", `opacity="${light[i] ? 0.09 : 0.12}"`));
  }
  var STAFF_VW = 50;
  var STAFF_VH = 200;
  var STAFF_GRIP = 100;
  function staffPal(id) {
    const def = staffOf(id);
    const shape = def.base ?? def.id;
    const base = {
      verdant: { wood: "#8a5a32", wood2: "#5e3a1e", metal: "#c9a35a", gem: "#6dff6a", glow: "#b8ff9a", leaf: "#4fc24a" },
      ember: { wood: "#3a2a2a", wood2: "#1e1414", metal: "#d06a2a", gem: "#ff7a1a", glow: "#ffcf6a", leaf: "#ff4a1a" },
      tide: { wood: "#2f6f9a", wood2: "#1d4466", metal: "#cfe8f4", gem: "#3fb8ff", glow: "#bff0ff", leaf: "#7fe0ff" },
      storm: { wood: "#4a4a62", wood2: "#2a2a3e", metal: "#c8c8e0", gem: "#b26bff", glow: "#e8d0ff", leaf: "#ffe36a" },
      void: { wood: "#1e1a30", wood2: "#0c0a18", metal: "#5a6aa8", gem: "#4a7dff", glow: "#b8ccff", leaf: "#8a5cff" }
    };
    const pal = { ...base[shape] ?? base.verdant };
    if (def.tint) for (const k of ["wood", "wood2", "metal", "leaf"]) pal[k] = mix(pal[k], def.tint, 0.55);
    if (def.tint) {
      pal.gem = def.gem;
      pal.glow = lt(def.gem, 0.6);
    }
    return { shape: base[shape] ? shape : "verdant", pal };
  }
  function staffBody(pic, id) {
    const { shape, pal } = staffPal(id);
    const shaft = pic.lit(pal.wood, "h", 0.45);
    const glow = pic.radial([[0, pal.glow, 0.95], [0.35, pal.gem, 0.55], [1, pal.gem, 0]]);
    const gemF = pic.radial([[0, "#ffffff"], [0.3, pal.glow], [1, pal.gem]], 0.35, 0.3, 0.7);
    pic.e(25, 26, 26, 26, glow, 'class="orb-glow"');
    if (shape === "verdant") {
      pic.p("M22 198 C20 170 27 150 23 120 C20 95 28 75 24 50 L28 50 C32 76 25 96 28 121 C31 150 24 172 28 198 Z", shaft);
      pic.s("M24 180 C27 170 22 160 26 150 M23 130 C27 118 22 108 26 95", pal.wood2, 1.2, 'opacity=".7"');
      for (const [d, w] of [["M25 52 C12 46 9 30 14 12", 3.2], ["M26 52 C38 46 41 30 36 12", 3.2], ["M25 50 C22 36 20 26 24 6", 2.6], ["M26 50 C30 36 31 24 28 4", 2.4]]) pic.s(d, pal.wood, w);
      pic.e(25, 28, 9.5, 10, gemF, 'class="orb"');
      for (const [x, y, a] of [[12, 14, -40], [38, 13, 40], [16, 40, -70], [36, 42, 60], [22, 90, -60], [29, 140, 50], [21, 166, -50]]) pic.raw(`<ellipse cx="${x}" cy="${y}" rx="5" ry="2.4" fill="${pal.leaf}" transform="rotate(${a} ${x} ${y})"/>`);
      pic.s("M23 60 C30 70 18 82 27 96 C33 108 19 118 27 132", mix(pal.leaf, "#2a5a1a", 0.35), 1.4);
    } else if (shape === "ember") {
      pic.p("M21 198 L23 60 L27 60 L29 198 Z", shaft);
      pic.s("M24 180 L26 168 L24 150 M25 120 L27 106 L24 92", pal.metal, 1.1, 'opacity=".85"');
      pic.p("M14 62 L25 50 L36 62 L31 68 L19 68 Z", pic.lit(pal.wood, "h", 0.5));
      for (const [d] of [["M17 60 C8 46 10 26 16 14 L19 16 C15 30 15 44 21 56 Z"], ["M33 60 C42 46 40 26 34 14 L31 16 C35 30 35 44 29 56 Z"], ["M24 54 L23 16 L27 16 L26 54 Z"]]) pic.p(d, pic.lit(pal.wood, "h", 0.5));
      pic.p("M25 12 L34 28 L25 44 L16 28 Z", gemF, 'class="orb"');
      pic.p("M25 12 L34 28 L25 28 Z", "#ffffff", 'opacity=".25"');
      pic.e(25, 196, 5, 3, pal.metal);
    } else if (shape === "tide") {
      pic.p("M22 198 L22 58 Q25 54 28 58 L28 198 Z", shaft);
      for (const y of [70, 110, 150, 186]) pic.p(`M20 ${y} h10 v5 h-10 Z`, pic.lit(pal.metal, "h", 0.4));
      pic.s("M25 58 C10 54 6 34 16 22 C24 14 34 18 32 28", pal.metal, 3.4);
      pic.s("M25 58 C40 54 44 36 38 22", lt(pal.wood, 0.4), 2.6);
      pic.e(25, 32, 10, 10, gemF, 'class="orb"');
      pic.e(22, 28, 3, 2, "#ffffff", 'opacity=".7"');
    } else if (shape === "storm") {
      pic.p("M22 198 L22 60 L28 60 L28 198 Z", shaft);
      for (const y of [64, 100, 140]) pic.p(`M19 ${y} h12 l-2 6 h-8 Z`, pic.lit(pal.metal, "h", 0.4));
      pic.p("M25 60 L12 40 L16 39 L8 18 L20 34 L17 35 L25 48 L33 35 L30 34 L42 18 L34 39 L38 40 Z", pic.lit(pal.metal, "h", 0.4));
      pic.e(25, 26, 9, 9, gemF, 'class="orb"');
      pic.s("M25 26 L21 31 L26 31 L22 37", "#ffffff", 1.2, 'opacity=".8"');
    } else {
      pic.p("M22 198 C18 160 30 130 22 100 C16 80 28 70 25 56 L29 58 C30 72 22 82 27 100 C34 130 22 162 28 198 Z", shaft);
      pic.s("M23 188 C30 176 20 168 27 154 C33 140 21 128 26 116", pal.leaf, 1, 'opacity=".55"');
      pic.e(25, 30, 15, 6, "none", `stroke="${pal.metal}" stroke-width="2.4" transform="rotate(-25 25 30)"`);
      pic.e(25, 30, 9, 9, gemF, 'class="orb"');
      pic.e(25, 30, 15, 6, "none", `stroke="${lt(pal.metal, 0.3)}" stroke-width="1.2" transform="rotate(35 25 30)" opacity=".8"`);
      pic.p("M25 58 L19 46 L25 42 L31 46 Z", pal.metal);
    }
  }
  function staffSvg(id) {
    const pic = new Pic();
    staffBody(pic, id ?? "verdant");
    return pic.svg(STAFF_VW, STAFF_VH, "art staff-art");
  }
  function placeStaff(pic, id, hx, hy, s = 0.92, tilt = 4) {
    const sub = new Pic();
    staffBody(sub, id ?? "verdant");
    pic.defs.push(...sub.defs);
    pic.raw(`<g transform="translate(${hx} ${hy}) rotate(${tilt}) scale(${s}) translate(${-25} ${-STAFF_GRIP})">${sub.body.join("")}</g>`);
  }
  function face(pic, cx, cy, w, h4, o) {
    pic.e(cx, cy, w, h4, pic.radial([[0, lt(o.skin, 0.12)], [0.65, o.skin], [1, dk(o.skin, 0.22)]], 0.4, 0.35, 0.75));
    pic.p(`M${cx + w * 0.55} ${cy - h4 * 0.2} Q${cx + w * 1.02} ${cy + h4 * 0.2} ${cx + w * 0.4} ${cy + h4 * 0.95} Q${cx + w * 0.75} ${cy + h4 * 0.3} ${cx + w * 0.55} ${cy - h4 * 0.2}Z`, dk(o.skin, 0.35), 'opacity=".35"');
    pic.p(`M${cx + w * 0.12} ${cy - h4 * 0.05} L${cx + w * 0.3} ${cy + h4 * 0.32} L${cx + w * 0.08} ${cy + h4 * 0.36}Z`, dk(o.skin, 0.3), 'opacity=".5"');
    for (const sx of [-1, 1]) {
      const ex = cx + sx * w * 0.42 + w * 0.08, ey = cy - h4 * 0.06, ew = w * 0.26, eh = h4 * 0.13;
      pic.e(ex, ey, ew, eh, o.glow ? "#ffd23a" : "#f4f0ea");
      pic.e(ex + ew * 0.25, ey + eh * 0.1, eh * 0.95, eh * 0.95, o.eye);
      pic.e(ex + ew * 0.25, ey + eh * 0.1, o.glow ? eh * 0.25 : eh * 0.45, eh * 0.7, "#140c14");
      if (!o.glow) pic.e(ex + ew * 0.05, ey - eh * 0.35, eh * 0.22, eh * 0.22, "#ffffff", 'opacity=".85"');
      pic.p(`M${ex - ew * 1.1} ${ey - eh * 1.4} L${ex + ew * 1.1} ${ey - eh * 1.4} L${ex + ew * 1.1} ${ey - eh * (1 - o.lid * 1.6)} Q${ex} ${ey - eh * (1.3 - o.lid * 1.8)} ${ex - ew * 1.1} ${ey - eh * (0.6 - o.lid)} Z`, o.skin);
      pic.s(`M${ex - ew * 1.05} ${ey - eh * (0.55 - o.lid)} Q${ex} ${ey - eh * (1.25 - o.lid * 1.8)} ${ex + ew * 1.08} ${ey - eh * (0.95 - o.lid * 1.6)}`, "#1c1418", h4 * 0.045);
      if (o.lashes) pic.s(`M${ex + ew * 0.8} ${ey - eh * (0.9 - o.lid * 1.6)} l${ew * 0.35} ${-eh * 0.45}`, "#1c1418", h4 * 0.03);
      const inner = sx < 0 ? ex + ew : ex - ew, outer = sx < 0 ? ex - ew * 1.1 : ex + ew * 1.15;
      const by = ey - eh * 2.3;
      pic.s(`M${inner} ${by + o.browTilt * eh} Q${(inner + outer) / 2} ${by - eh * 0.7} ${outer} ${by - o.browTilt * eh * 0.5}`, o.brow, h4 * 0.09);
    }
    const my = cy + h4 * 0.55;
    if (o.mouth === "snarl") {
      pic.p(`M${cx - w * 0.3} ${my} Q${cx + w * 0.1} ${my - h4 * 0.12} ${cx + w * 0.5} ${my} L${cx + w * 0.42} ${my + h4 * 0.14} Q${cx + w * 0.1} ${my + h4 * 0.2} ${cx - w * 0.22} ${my + h4 * 0.12} Z`, "#2a1416");
      pic.p(`M${cx - w * 0.24} ${my + h4 * 0.01} L${cx + w * 0.44} ${my + h4 * 0.01} L${cx + w * 0.4} ${my + h4 * 0.07} L${cx - w * 0.2} ${my + h4 * 0.07}Z`, "#ece4cc");
      pic.s(`M${cx - w * 0.05} ${my} v${h4 * 0.07} M${cx + w * 0.15} ${my} v${h4 * 0.07}`, "#2a1416", 0.5);
    } else if (o.mouth === "lips") {
      pic.p(`M${cx - w * 0.25} ${my} Q${cx + w * 0.1} ${my - h4 * 0.1} ${cx + w * 0.45} ${my} Q${cx + w * 0.1} ${my + h4 * 0.16} ${cx - w * 0.25} ${my}Z`, o.lips ?? "#7a3a5a");
    } else {
      pic.s(`M${cx - w * 0.15} ${my} Q${cx + w * 0.12} ${my + h4 * 0.04} ${cx + w * 0.38} ${my - h4 * 0.02}`, dk(o.skin, 0.55), h4 * 0.05);
    }
  }
  function wavyHair(pic, x, y0, y1, w, c, lobes = 5) {
    const n = lobes, step = (y1 - y0) / n;
    let d = `M${x - w / 2} ${y0}`;
    for (let i = 0; i < n; i++) d += ` Q${x - w / 2 - w * 0.35} ${y0 + step * (i + 0.5)} ${x - w / 2 + (i % 2 ? w * 0.12 : -w * 0.05)} ${y0 + step * (i + 1)}`;
    d += ` L${x + w * 0.1} ${y1 + step * 0.4}`;
    for (let i = n - 1; i >= 0; i--) d += ` Q${x + w / 2 + w * 0.35} ${y0 + step * (i + 0.5)} ${x + w / 2 + (i % 2 ? -w * 0.12 : w * 0.05)} ${y0 + step * i}`;
    pic.p(d + "Z", pic.lit(c, "h", 0.35));
    for (let i = 1; i < n; i++) pic.s(`M${x - w * 0.25} ${y0 + step * i - 3} q${w * 0.2} ${step * 0.4} ${w * 0.05} ${step * 0.8}`, dk(c, 0.25), 0.8, 'opacity=".6"');
  }
  function fist(pic, x, y, c, glove) {
    const g = glove ?? c;
    pic.p(`M${x - 6} ${y - 6} Q${x - 7} ${y + 6} ${x - 2} ${y + 7} L${x + 6} ${y + 6} Q${x + 8} ${y} ${x + 6} ${y - 6} Q${x} ${y - 9} ${x - 6} ${y - 6}Z`, pic.lit(g, "h", 0.4));
    for (const k of [-3, 0, 3]) pic.s(`M${x - 4} ${y + k} h7`, dk(g, 0.45), 0.6, 'opacity=".7"');
    pic.p(`M${x - 6} ${y - 6} Q${x - 9} ${y - 2} ${x - 5} ${y + 1}`, "none", `stroke="${dk(g, 0.35)}" stroke-width=".8"`);
    if (glove && glove !== c) pic.e(x + 1, y - 7, 2.5, 1.6, c);
  }
  function openHand(pic, x, y, c) {
    pic.p(`M${x - 5} ${y - 4} Q${x - 6} ${y + 6} ${x - 2} ${y + 9} Q${x + 1} ${y + 11} ${x + 4} ${y + 8} Q${x + 6} ${y + 2} ${x + 5} ${y - 4}Z`, pic.lit(c, "h", 0.35));
    pic.s(`M${x - 1} ${y + 3} v5 M${x + 2} ${y + 3} v5`, dk(c, 0.35), 0.6);
  }
  function shadow(pic, cx = 74, w = 50) {
    pic.e(cx, 196, w, 5, "#000", 'opacity=".32"');
  }
  function wizard(pic, side, staff) {
    const robe = side === "ally" ? "#2f9070" : side === "rival" ? "#a8304a" : "#2f5ac4", deep = dk(robe, 0.35), cream = "#efe5cc", gold = "#e4b84c", skin = "#f2ddcf", hair = "#f2f0ec";
    const band = (x0, x1, y, h4, flip2 = false) => {
      const n = Math.max(2, Math.round((x1 - x0) / 9)), dx = (x1 - x0) / n;
      let d = "";
      for (let i = 0; i < n; i++) {
        const a = x0 + i * dx;
        d += `M${a} ${y + h4 / 2} L${a + dx / 2} ${y} L${a + dx} ${y + h4 / 2} L${a + dx / 2} ${y + h4} Z `;
      }
      pic.p(d, "none", `stroke="${gold}" stroke-width="1.1"${flip2 ? "" : ""}`);
    };
    shadow(pic);
    wavyHair(pic, 72, 64, 128, 40, "#dcd9d2", 5);
    lp(pic, "M46 92 Q30 140 18 192 L128 192 Q114 140 98 92 Z", deep, 9);
    pic.p("M50 86 Q72 98 94 86 Q100 98 92 104 Q72 112 52 104 Q44 98 50 86Z", pic.lit(robe, "v", 0.3));
    pic.p("M54 186 Q52 196 46 197 L66 197 L66 186Z", pic.lit("#2c4f9c", "h"));
    pic.p("M78 186 L78 197 L98 197 Q92 195 90 186Z", pic.lit("#2c4f9c", "h"));
    lp(pic, "M54 96 L90 96 L104 190 L40 190 Z", robe, 8);
    pic.p("M66 104 L76 104 L82 190 L62 190 Z", pic.lit(cream, "h", 0.2));
    pic.p("M41 184 L103 184 L104 190 L40 190Z", cream);
    band(43, 101, 172, 10);
    pic.p("M53 122 L91 122 L92 129 L52 129Z", pic.lit("#75492a", "v"));
    pic.p("M74 129 L80 129 L81 168 L77 172 L73 168Z", pic.lit("#6a4024", "h"));
    pic.p("M72 119 L77 125.5 L72 132 L67 125.5Z", pic.lit(gold, "d", 0.4));
    lp(pic, "M50 90 Q40 140 22 192 L52 192 Q54 150 58 100 Z", robe, 8);
    lp(pic, "M94 90 Q104 140 122 192 L92 192 Q90 150 86 100 Z", dk(robe, 0.2), 8);
    pic.p("M58 100 Q54 150 52 192 L56 192 Q58 150 61 101Z", cream);
    pic.p("M86 100 Q90 150 92 192 L88 192 Q86 150 83 101Z", cream);
    pic.p("M22 188 L52 188 L52 192 L22 192Z", cream);
    pic.p("M92 188 L122 188 L122 192 L92 192Z", cream);
    band(25, 51, 174, 10);
    band(93, 120, 174, 10);
    facets(pic, [[30, 150, 46, 120, 40, 170], [100, 120, 112, 160, 96, 150]], [true, false]);
    pic.p("M50 94 Q38 120 34 150 L54 152 Q56 124 58 100 Z", pic.lit(robe, "h", 0.3));
    pic.p("M34 150 Q30 160 28 166 L58 166 Q56 158 54 152Z", pic.lit(robe, "h", 0.3));
    band(31, 56, 152, 8);
    pic.p("M28 162 L58 162 L59 168 L27 168Z", cream);
    openHand(pic, 43, 170, skin);
    pic.p("M64 76 L80 76 L79 90 L65 90Z", dk(skin, 0.1));
    wavyHair(pic, 54, 58, 108, 13, hair, 4);
    wavyHair(pic, 90, 58, 104, 12, "#e2dfd8", 4);
    face(pic, 72, 66, 13, 15, { skin, eye: "#5d7590", brow: "#f4f2ee", lid: 0.45, browTilt: 0.25 });
    pic.p("M58 66 Q58 80 62 90 Q64 108 70 124 Q72 130 74 124 Q82 106 84 90 Q88 80 87 66 Q84 78 78 79 Q72 82 66 79 Q60 77 58 66Z", pic.lit(hair, "h", 0.25));
    pic.s("M66 88 q2 10 4 18 M74 88 q1 12 0 22 M80 86 q-1 10 -3 16", "#cfcbc4", 0.8);
    pic.p("M64 76 Q70 72 72 75 Q75 72 82 76 Q78 80 72 77.5 Q67 80 64 76Z", "#f8f6f2");
    pic.p("M36 54 Q72 44 110 54 Q74 64 36 54Z", pic.lit(robe, "v", 0.4));
    lp(pic, "M54 52 Q60 30 70 12 Q78 2 92 6 Q84 10 82 18 Q86 34 92 52 Q72 58 54 52Z", robe, 7);
    pic.p("M55 46 Q72 50 91 46 L92 52 Q72 57 54 52Z", gold);
    pic.p("M72 26 L75 33 L82 36 L75 39 L72 46 L69 39 L62 36 L69 33Z", pic.lit(gold, "d", 0.3));
    facets(pic, [[56, 50, 66, 20, 66, 50], [80, 20, 90, 50, 84, 50]], [true, false]);
    placeStaff(pic, staff, 122, 126);
    pic.p("M90 94 Q104 104 116 120 L110 132 Q98 118 86 108Z", pic.lit(robe, "h", 0.3));
    pic.p("M110 116 Q120 112 128 120 L118 140 Q112 136 108 130Z", pic.lit(robe, "h", 0.3));
    pic.p("M118 120 L128 124 L124 133 L114 129Z", cream);
    fist(pic, 122, 128, skin);
  }
  function witch(pic, side, staff) {
    const robe = side === "ally" ? "#3a9a7c" : "#7a56bd", deep = dk(robe, 0.35), trim = lt(robe, 0.35), dress = "#2e2838", skin = "#f0dedb", hair = "#cfc2e4";
    shadow(pic);
    wavyHair(pic, 72, 58, 134, 44, "#b9acd2", 6);
    lp(pic, "M46 90 Q30 140 16 186 L130 186 Q114 140 98 90Z", deep, 9);
    pic.p("M62 150 L68 150 L67 190 L63 190Z", pic.lit("#3b3446", "h"));
    pic.p("M58 190 L68 188 L70 196 L56 196Z", "#2a2432");
    pic.p("M60 196 L59 190 L57 196Z", "#1a1620");
    pic.p("M76 150 L82 150 L83 190 L78 190Z", pic.lit("#3b3446", "h"));
    pic.p("M77 188 L86 190 L88 196 L76 196Z", "#2a2432");
    lp(pic, "M56 96 L88 96 L100 184 L80 184 L74 146 L70 146 L64 184 L44 184 Z", dress, 8, 0.4);
    pic.p("M70 146 L74 146 L80 184 L64 184Z", "#5a4a62", 'opacity=".6"');
    pic.p("M55 118 L89 118 L90 124 L54 124Z", "#40344c");
    pic.raw(`<path d="M75 116 a5 5 0 1 0 0 10 a3.6 3.6 0 1 1 0 -10z" fill="#f0e6c0"/>`);
    const hem = (x0, x1, y) => {
      let d = "";
      const n = 4, dx = (x1 - x0) / n;
      for (let i = 0; i < n; i++) d += ` L${x0 + dx * (i + 0.5)} ${y + 8} L${x0 + dx * (i + 1)} ${y}`;
      return d;
    };
    lp(pic, `M50 90 Q40 140 20 180${hem(20, 54, 180)} Q56 140 60 100Z`, robe, 8);
    lp(pic, `M94 90 Q104 140 124 180 L124 180${hem(124, 90, 180)} Q88 140 84 100Z`, dk(robe, 0.22), 8);
    pic.s(`M60 100 Q56 140 54 180${hem(54, 20, 180)}`, trim, 2.4);
    pic.s(`M84 100 Q88 140 90 180${hem(90, 124, 180)}`, trim, 2.4);
    facets(pic, [[30, 150, 46, 118, 42, 170], [100, 120, 114, 160, 98, 150]], [true, false]);
    pic.p("M54 84 Q72 96 90 84 L92 94 Q72 104 52 94Z", pic.lit(robe, "v", 0.3));
    pic.p("M50 94 Q38 120 32 150 L56 150 Q58 120 60 100Z", pic.lit(robe, "h", 0.3));
    pic.p("M32 148 L56 148 L58 164 L50 158 L44 168 L38 158 L28 164Z", pic.lit(robe, "h", 0.3));
    pic.s("M28 164 L38 158 L44 168 L50 158 L58 164", trim, 2);
    openHand(pic, 44, 168, skin);
    pic.p("M65 74 L79 74 L78 88 L66 88Z", dk(skin, 0.1));
    wavyHair(pic, 56, 56, 112, 14, hair, 5);
    wavyHair(pic, 89, 56, 108, 13, "#c2b4da", 5);
    face(pic, 72, 64, 12, 15, { skin, eye: "#4a3a5c", brow: "#4a3a55", lid: 0.5, browTilt: 0.45, mouth: "lips", lips: "#6b3058", lashes: true });
    pic.e(64, 59, 3.4, 1.4, "#7a5590", 'opacity=".35"');
    pic.e(81, 59, 3.4, 1.4, "#7a5590", 'opacity=".35"');
    pic.p("M58 52 Q72 46 87 52 Q86 58 72 54 Q60 58 58 52Z", pic.lit(hair, "h"));
    pic.p("M24 54 Q72 40 120 52 Q114 60 100 58 Q72 66 44 60 Q30 60 24 54Z", pic.lit(robe, "v", 0.45));
    lp(pic, "M54 50 Q58 28 66 12 Q72 2 84 4 Q92 6 96 14 Q86 10 82 18 Q84 34 90 50 Q72 56 54 50Z", robe, 7);
    pic.p("M55 44 Q72 48 89 44 L90 50 Q72 55 54 50Z", trim);
    pic.raw('<path d="M72 37 a6 6 0 1 0 0 12 a4.2 4.2 0 1 1 0 -12z" fill="#f0e6c0" transform="rotate(25 72 43)"/>');
    facets(pic, [[56, 48, 64, 20, 66, 48], [78, 18, 88, 48, 82, 48]], [true, false]);
    placeStaff(pic, staff, 122, 126);
    pic.p("M88 94 Q102 104 114 120 L108 132 Q96 118 84 106Z", pic.lit(robe, "h", 0.3));
    pic.p("M108 116 Q118 110 128 118 L120 138 Q112 134 106 128Z", pic.lit(robe, "h", 0.3));
    pic.s("M120 138 L128 118", trim, 2);
    fist(pic, 122, 128, skin);
  }
  function knight(pic, side, staff) {
    const plate = "#d6cfbf", plateLo = dk(plate, 0.3), red = side === "ally" ? "#2f9a6c" : "#c2302c", under = "#4a3122", leather = "#6e4426", sash = "#6f6a3a";
    const P = (d, c = plate, _a2 = "h") => lp(pic, d, c, 6, 0.32);
    shadow(pic, 74, 52);
    pic.raw(`<g transform="rotate(-28 72 120)"><rect x="70" y="60" width="5" height="110" fill="${pic.lit("#4f2f19", "h")}"/><rect x="62" y="56" width="21" height="4" rx="1" fill="#c39a48"/><rect x="70.5" y="40" width="4" height="16" fill="#4a2c18"/><circle cx="72.5" cy="38" r="3.4" fill="#c39a48"/></g>`);
    for (const x of [58, 86]) {
      P(`M${x - 7} 140 L${x + 7} 140 L${x + 6} 186 L${x - 6} 186Z`);
      pic.e(x, 158, 8, 6, pic.lit(plate, "d", 0.35));
      P(`M${x - 7} 184 L${x + 7} 184 L${x + 14} 194 L${x + 16} 197 L${x - 8} 197Z`, plateLo);
      pic.s(`M${x - 6} 168 h12 M${x - 6} 176 h12`, dk(plate, 0.45), 0.7);
    }
    pic.p("M48 118 L96 118 L104 168 L40 168Z", pic.lit(under, "h"));
    pic.p("M50 116 L70 116 L68 172 L46 176 L40 160Z", pic.lit("#f0ece2", "h", 0.2));
    pic.p("M74 116 L94 116 L104 160 L98 176 L76 172Z", pic.lit("#f0ece2", "h", 0.3));
    for (const y of [158, 166]) {
      pic.p(`M41 ${y} L68.5 ${y - 2} L68.3 ${y + 2.5} L42 ${y + 4.5}Z`, red);
      pic.p(`M76 ${y - 2} L102 ${y} L101 ${y + 4.5} L76 ${y + 2.5}Z`, red);
    }
    P("M50 84 Q72 78 94 84 L92 118 L52 118Z", plate, "h");
    pic.p("M71 84 L73 84 L73 116 L71 116Z", lt(plate, 0.4));
    for (const y of [110, 116]) pic.p(`M51 ${y} L93 ${y} L94 ${y + 5} L50 ${y + 5}Z`, pic.lit(plateLo, "h"));
    pic.p("M48 112 Q72 118 96 112 L97 122 Q72 128 47 122Z", pic.lit(sash, "v", 0.3));
    pic.p("M52 120 L60 120 L58 146 L50 144Z", pic.lit(sash, "h", 0.3));
    pic.p("M52 86 L58 84 L94 112 L90 116Z", pic.lit(leather, "h"));
    pic.p("M92 86 L86 84 L50 112 L54 116Z", pic.lit(leather, "h"));
    pic.p("M72 94 L77 99 L72 104 L67 99Z", "#c39a48");
    P("M60 76 L84 76 L86 86 L58 86Z", plateLo);
    pic.raw(`<g class="plume"><path d="M72 34 Q86 24 100 30 Q110 36 112 56 Q104 46 96 44 Q102 54 100 64 Q92 50 84 46 Q80 40 72 40Z" fill="${pic.lit(red, "h", 0.35)}"/></g>`);
    P("M58 44 Q58 32 72 30 Q86 32 86 44 L86 72 Q72 78 58 72Z", plate, "h");
    pic.p("M60 52 L84 52 L84 55.5 L60 55.5Z", "#15120f");
    pic.p("M71 32 L73 32 L73 76 L71 76Z", lt(plate, 0.35), 'opacity=".8"');
    for (const [x, y] of [[77, 62], [80, 62], [77, 66], [80, 66]]) pic.p(`M${x} ${y} h1.6 v1.6 h-1.6Z`, "#15120f");
    pic.p("M70 30 L74 30 L74 36 L70 36Z", "#c39a48");
    facets(pic, [[58, 44, 66, 34, 64, 70], [80, 36, 86, 46, 84, 70]], [true, false]);
    pic.e(48, 88, 13, 10, pic.lit(plate, "d", 0.4));
    pic.e(42, 90, 4, 4, pic.lit(lt(plate, 0.3), "d"));
    P("M36 94 L54 94 L51 116 L52 138 L38 138 L39 116Z");
    pic.e(45, 117, 8, 6.5, pic.lit(plate, "d"));
    pic.p("M37 132 L53 132 L52 139 L38 139Z", pic.lit(under, "h"));
    P("M37 138 L53 138 L54 154 L50 162 L42 163 L36 154Z", plateLo);
    pic.s("M40 156 v5 M44 157 v6 M48 157 v5", dk(plate, 0.5), 0.7);
    placeStaff(pic, staff, 122, 124);
    pic.e(96, 88, 13, 10, pic.lit(plate, "d", 0.4));
    pic.e(102, 90, 4, 4, pic.lit(lt(plate, 0.3), "d"));
    P("M90 92 Q108 100 120 116 L108 128 Q96 116 84 106Z");
    pic.e(104, 108, 8, 6.5, pic.lit(plate, "d"));
    fist(pic, 122, 126, plate, plateLo);
  }
  function goblin(pic, side, staff) {
    const skin = "#84933f", skinLo = dk(skin, 0.3), red = side === "ally" ? "#2c8f8a" : "#b3352b", leather = "#7a4e2c", wrap = "#a88a62", shorts = "#3a332f";
    shadow(pic, 74, 44);
    for (const x of [62, 84]) {
      pic.p(`M${x - 5} 150 L${x + 5} 150 L${x + 4} 188 L${x - 4} 188Z`, pic.lit(skin, "h"));
      pic.p(`M${x - 6} 158 L${x + 6} 158 L${x + 5.5} 186 L${x - 5.5} 186Z`, pic.lit(wrap, "h"));
      pic.s(`M${x - 6} 164 l12 -3 M${x - 6} 171 l12 -3 M${x - 6} 178 l12 -3`, dk(wrap, 0.4), 0.9);
      pic.p(`M${x - 6} 186 L${x + 6} 186 Q${x + 14} 190 ${x + 15} 196 L${x - 6} 197Z`, pic.lit(skin, "h"));
      for (const t of [0, 4, 8]) pic.e(x + 3 + t, 196, 2.2, 1.6, skinLo);
    }
    pic.p("M54 116 L90 116 L96 150 L76 152 L72 136 L68 152 L48 150Z", pic.lit(shorts, "h"));
    pic.p("M54 114 L90 114 L91 121 L53 121Z", pic.lit(leather, "v"));
    pic.p("M68 113 L76 113 L76 122 L68 122Z", "none", 'stroke="#b99245" stroke-width="1.6"');
    pic.p("M64 122 L80 122 L82 150 L78 146 L76 160 L72 152 L69 162 L66 148 L62 152Z", pic.lit(red, "h", 0.3));
    lp(pic, "M54 82 Q72 76 90 82 L92 100 Q90 112 88 116 L56 116 Q54 112 52 100Z", skin, 6, 0.3);
    pic.s("M62 92 Q72 96 82 92 M72 96 L72 114 M64 104 h16 M65 110 h14", skinLo, 0.8, 'opacity=".8"');
    pic.p("M56 84 L62 82 L90 108 L86 112Z", pic.lit(leather, "h"));
    pic.p("M88 84 L82 82 L54 108 L58 112Z", pic.lit(leather, "h"));
    pic.p("M68 92 L76 92 L76 100 L68 100Z", "none", 'stroke="#b99245" stroke-width="1.6"');
    pic.p("M56 74 Q72 66 88 74 Q92 84 84 88 Q72 92 60 88 Q52 84 56 74Z", pic.lit(red, "v", 0.35));
    pic.p("M60 86 L68 88 L66 104 L60 100Z", pic.lit(red, "h", 0.35));
    pic.p("M52 84 Q44 104 42 130 L50 132 Q52 108 58 90Z", pic.lit(skin, "h"));
    pic.p("M41 118 L51 118 L50 134 L42 134Z", pic.lit(leather, "h"));
    pic.s("M41 122 l10 -2 M41 127 l10 -2 M41 132 l10 -2", dk(leather, 0.4), 0.8);
    openHand(pic, 46, 138, "#5a3a20");
    pic.p("M42 80 Q50 72 60 78 L58 92 Q48 92 42 88Z", pic.lit(leather, "d", 0.35));
    pic.s("M44 84 Q50 80 57 82", dk(leather, 0.4), 0.8);
    pic.p("M66 66 L78 66 L77 76 L67 76Z", skinLo);
    pic.p("M60 56 Q48 50 34 40 Q44 54 58 64Z", pic.lit(skin, "h"));
    pic.p("M58 58 Q48 52 40 46 Q48 56 58 62Z", "#a36a5a", 'opacity=".7"');
    pic.p("M84 56 Q96 50 110 40 Q100 54 86 64Z", pic.lit(skin, "h", 0.4));
    pic.p("M86 58 Q96 52 104 46 Q96 56 86 62Z", "#a36a5a", 'opacity=".6"');
    face(pic, 72, 58, 13, 13.5, { skin, eye: "#d2401c", brow: "#2a221c", lid: 0.2, browTilt: 0.9, mouth: "snarl", glow: true });
    pic.p("M58 52 Q56 36 66 36 Q64 32 72 32 Q76 28 80 34 Q88 32 86 40 Q92 42 88 52 Q84 44 80 48 Q78 42 72 46 Q68 40 64 48 Q62 44 58 52Z", pic.lit("#2c2420", "h", 0.3));
    placeStaff(pic, staff, 118, 118, 0.84);
    pic.p("M86 84 Q100 92 112 108 L106 118 Q96 104 84 96Z", pic.lit(skin, "h"));
    pic.p("M104 104 L114 110 L110 122 L100 116Z", pic.lit(leather, "h"));
    fist(pic, 118, 120, skin, "#5a3a20");
  }
  function kid(pic, side, staff) {
    const tunic = side === "ally" ? "#3aa57c" : "#d65a4a", skin = "#f2c79e";
    shadow(pic, 74, 40);
    for (const x of [64, 82]) {
      pic.p(`M${x - 5} 150 L${x + 5} 150 L${x + 5} 188 L${x - 5} 188Z`, pic.lit("#3d5ca8", "h"));
      pic.p(`M${x - 6} 186 L${x + 6} 186 L${x + 10} 196 L${x - 6} 196Z`, pic.lit("#4a2c18", "h"));
    }
    pic.p("M56 104 Q73 98 90 104 L94 152 L52 152Z", pic.lit(tunic, "h", 0.3));
    pic.p("M54 140 L92 140 L93 146 L53 146Z", "#5a3a1e");
    pic.p("M60 104 L66 102 L90 140 L84 142Z", pic.lit("#7a4e2d", "h"));
    pic.p("M54 106 Q46 124 46 140 L53 141 Q55 124 60 110Z", pic.lit(tunic, "h"));
    openHand(pic, 49, 146, skin);
    pic.p("M66 92 L80 92 L79 102 L67 102Z", dk(skin, 0.1));
    face(pic, 73, 80, 14, 15, { skin, eye: "#3a2a1a", brow: "#5a3a1e", lid: 0.1, browTilt: 0, mouth: "calm" });
    pic.p("M58 78 Q56 60 72 58 Q90 58 88 78 Q84 68 76 70 Q70 64 66 72 Q60 70 58 78Z", pic.lit("#7a4a24", "h"));
    placeStaff(pic, staff, 116, 126, 0.8);
    pic.p("M88 106 Q102 114 110 124 L104 132 Q96 120 86 114Z", pic.lit(tunic, "h"));
    fist(pic, 116, 128, skin);
  }
  function human(pic, side, staff) {
    const tunic = side === "ally" ? "#2f9070" : "#3e8e5e", skin = "#f2c79e";
    shadow(pic, 74, 44);
    pic.p("M50 92 Q38 140 40 172 L104 172 Q106 140 94 92Z", pic.lit("#7a3a2a", "h", 0.3));
    for (const x of [62, 84]) {
      pic.p(`M${x - 6} 140 L${x + 6} 140 L${x + 6} 184 L${x - 6} 184Z`, pic.lit("#4a4a6a", "h"));
      pic.p(`M${x - 7} 172 L${x + 7} 172 L${x + 8} 196 L${x - 7} 196Z`, pic.lit("#5a3a1e", "h"));
    }
    pic.p("M52 90 Q72 84 92 90 L96 144 L48 144Z", pic.lit(tunic, "h", 0.3));
    pic.p("M49 124 L95 124 L96 131 L48 131Z", pic.lit("#5a3a1e", "v"));
    pic.p("M69 123 L76 123 L76 132 L69 132Z", "none", 'stroke="#ffd479" stroke-width="1.4"');
    pic.p("M50 92 Q40 116 40 138 L48 139 Q50 116 56 98Z", pic.lit(tunic, "h"));
    openHand(pic, 44, 144, skin);
    pic.p("M65 76 L79 76 L78 90 L66 90Z", dk(skin, 0.1));
    face(pic, 72, 64, 13, 15, { skin, eye: "#3a2a1a", brow: "#3b2a20", lid: 0.2, browTilt: 0.2, mouth: "calm" });
    pic.p("M57 62 Q54 44 72 42 Q90 42 87 62 Q82 52 74 54 Q68 48 64 56 Q60 54 57 62Z", pic.lit("#3b2a20", "h"));
    placeStaff(pic, staff, 120, 120, 0.88);
    pic.p("M90 94 Q104 102 114 116 L106 126 Q96 112 86 104Z", pic.lit(tunic, "h"));
    fist(pic, 120, 122, skin);
  }
  var DRAW = { wizard, witch, knight, goblin, kid, human };
  function characterSvg(kind, side, staff) {
    const pic = new Pic();
    (DRAW[kind] ?? wizard)(pic, side, staff);
    return pic.svg(160, 200, `art char-art ${kind}`);
  }
  var rs = 1;
  var rand = () => (rs = rs * 16807 % 2147483647) / 2147483647;
  function lowpoly(pic, d, box, base, cell, light = 0.22, seed2 = 7) {
    rs = seed2;
    const id = nid();
    pic.defs.push(`<clipPath id="${id}"><path d="${d}"/></clipPath>`);
    const [x0, y0, x1, y1] = box;
    const nx = Math.ceil((x1 - x0) / cell) + 1, ny = Math.ceil((y1 - y0) / cell) + 1;
    const pts = [];
    for (let j = 0; j <= ny; j++) {
      pts.push([]);
      for (let i = 0; i <= nx; i++) pts[j].push([x0 + (i + j % 2 * 0.5 - 0.25 + (rand() - 0.5) * 0.6) * cell, y0 + (j + (rand() - 0.5) * 0.6) * cell]);
    }
    let out = `<g clip-path="url(#${id})"><path d="${d}" fill="${base}"/>`;
    const tri = (a, b, c) => {
      const mx = (a[0] + b[0] + c[0]) / 3, my = (a[1] + b[1] + c[1]) / 3;
      const k = 0.5 - (mx - x0) / (x1 - x0 + 1) * 0.6 - (my - y0) / (y1 - y0 + 1) * 0.4 + (rand() - 0.5) * 0.5;
      const col = k > 0 ? mix(base, "#ffffff", k * light) : mix(base, "#000000", -k * light * 1.4);
      return `<path d="M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${b[0].toFixed(1)} ${b[1].toFixed(1)}L${c[0].toFixed(1)} ${c[1].toFixed(1)}Z" fill="${col}" stroke="${col}" stroke-width=".4"/>`;
    };
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const a = pts[j][i], b = pts[j][i + 1], c = pts[j + 1][i], e = pts[j + 1][i + 1];
      out += j % 2 ? tri(a, e, c) + tri(a, b, e) : tri(a, b, c) + tri(b, e, c);
    }
    pic.raw(out + "</g>");
  }
  function lp(pic, d, base, cell = 7, light = 0.26) {
    const n = (d.match(/-?\d+(\.\d+)?/g) ?? []).map(Number);
    const xs = n.filter((_, i) => i % 2 === 0), ys = n.filter((_, i) => i % 2 === 1);
    let h4 = 0;
    for (const c of d) h4 = (h4 * 31 + c.charCodeAt(0)) % 99991;
    lowpoly(pic, d, [Math.min(...xs) - 2, Math.min(...ys) - 2, Math.max(...xs) + 2, Math.max(...ys) + 2], base, cell, light, h4 + 1);
  }
  function dragonArt() {
    const pic = new Pic();
    const K = "#2a2733", W2 = "#3a3446", belly = "#4a4452", horn2 = "#b8b29c", claw = "#d8d2bc";
    pic.e(250, 290, 120, 9, "#000", 'opacity=".35"');
    const wing = (sx, sy, tips, bottom, c, seed2) => {
      const d = `M${sx} ${sy} ` + tips.map(([x, y]) => `L${x} ${y}`).join(" ") + " " + bottom.map(([x, y], i) => i % 2 ? `Q${x} ${y}` : `${x} ${y}`).join(" ") + " Z";
      lowpoly(pic, d, [Math.min(sx, ...tips.map((t) => t[0]), ...bottom.map((t) => t[0])) - 5, Math.min(sy, ...tips.map((t) => t[1])) - 5, Math.max(sx, ...tips.map((t) => t[0]), ...bottom.map((t) => t[0])) + 5, Math.max(sy, ...bottom.map((t) => t[1])) + 5], c, 26, 0.3, seed2);
      const [wx, wy] = tips[0];
      pic.s(`M${sx} ${sy} L${wx} ${wy}`, dk(c, 0.4), 4);
      for (let i = 1; i < tips.length; i++) pic.s(`M${wx} ${wy} L${tips[i][0]} ${tips[i][1]}`, dk(c, 0.35), 2.2);
      for (let i = 0; i < bottom.length; i += 2) pic.s(`M${wx} ${wy} L${bottom[i][0]} ${bottom[i][1]}`, dk(c, 0.3), 1.3, 'opacity=".8"');
    };
    wing(232, 118, [[196, 30], [150, 8], [214, 10], [262, 34]], [[150, 8], [130, 70], [150, 86], [156, 110], [184, 108], [196, 140], [228, 120]], dk(W2, 0.15), 3);
    const tail = "M268 222 Q330 228 360 250 Q392 272 384 290 Q360 296 330 288 Q352 282 354 270 Q330 252 286 252 Z";
    lowpoly(pic, tail, [260, 215, 395, 298], K, 14, 0.25, 11);
    for (let i = 0; i < 6; i++) {
      const t = i / 6, x = 300 + t * 80, y = 230 + t * 40;
      pic.p(`M${x} ${y} l6 -12 l5 12Z`, dk(K, 0.2));
    }
    lowpoly(pic, "M280 220 Q300 250 296 276 L306 290 L272 292 L276 262 Q262 246 262 226Z", [255, 215, 310, 295], dk(K, 0.15), 12, 0.25, 5);
    const body = "M196 128 Q240 104 282 140 Q306 176 296 220 Q280 252 236 254 Q200 248 186 214 Q176 170 196 128Z";
    lowpoly(pic, body, [170, 100, 310, 258], K, 15, 0.3, 17);
    lowpoly(pic, "M200 150 Q214 140 222 160 Q232 200 226 244 Q206 240 196 212 Q190 180 200 150Z", [186, 136, 236, 248], belly, 10, 0.3, 21);
    for (let y = 158; y < 240; y += 12) pic.s(`M${200 + (y - 150) * 0.05} ${y} Q212 ${y + 4} ${226} ${y}`, dk(belly, 0.4), 1, 'opacity=".7"');
    lowpoly(pic, "M248 214 Q280 216 284 246 Q282 270 270 280 L288 292 L240 294 L246 270 Q232 240 248 214Z", [228, 208, 292, 296], K, 11, 0.3, 23);
    for (const x of [242, 254, 266, 278]) pic.p(`M${x} 290 l4 -8 l4 8 q-4 4 -8 0Z`, claw);
    lowpoly(pic, "M204 196 Q186 214 182 246 Q180 270 170 282 L196 290 L196 262 Q206 232 222 212Z", [165, 190, 226, 294], K, 10, 0.3, 29);
    for (const x of [166, 176, 186]) pic.p(`M${x} 290 l3 -8 l4 8 q-4 4 -7 0Z`, claw);
    const neck = "M206 140 Q178 128 168 104 Q158 80 136 70 L120 76 Q144 92 150 112 Q160 144 194 166 Z";
    lowpoly(pic, neck, [115, 62, 212, 170], K, 10, 0.32, 31);
    for (const [x, y, a] of [[134, 66, -10], [148, 76, 0], [160, 92, 10], [168, 108, 15], [182, 122, 20], [196, 128, 30], [214, 122, 40], [234, 116, 55], [254, 122, 70], [272, 134, 80]]) pic.raw(`<path d="M${x - 5} ${y + 4} L${x} ${y - 12} L${x + 5} ${y + 4}Z" fill="${dk(K, 0.25)}" transform="rotate(${a} ${x} ${y})"/>`);
    wing(256, 124, [[300, 26], [266, 4], [340, 2], [392, 40], [396, 100]], [[396, 100], [372, 120], [372, 150], [350, 150], [338, 176], [312, 162], [284, 168]], W2, 9);
    pic.p("M120 46 Q136 26 160 14 Q146 34 132 52Z", pic.lit(horn2, "h", 0.4));
    pic.p("M128 54 Q150 40 176 34 Q156 50 136 60Z", pic.lit(dk(horn2, 0.15), "h", 0.4));
    const head = "M58 80 L76 64 L104 52 L126 50 L138 62 L136 78 L120 88 L96 92 L72 92 L60 88Z";
    lowpoly(pic, head, [55, 45, 142, 96], K, 9, 0.35, 37);
    lowpoly(pic, "M64 90 L96 92 L118 88 L112 100 L86 104 L68 98Z", [60, 85, 120, 106], dk(K, 0.15), 7, 0.3, 41);
    for (const x of [70, 78, 86, 94]) pic.p(`M${x} 91 l3 6 l3 -6Z`, claw);
    pic.p("M86 60 L104 58 L100 64 L88 66Z", "#14101a");
    pic.raw(`<g class="eye"><path d="M88 62 L102 59.5 L99 63.5 L89 64.5Z" fill="#39ff7a"/><path d="M94 60.5 L95.5 60.3 L95 64 L93.8 64.1Z" fill="#0b2a12"/></g>`);
    pic.e(95, 62, 10, 6, pic.radial([[0, "#39ff7a", 0.6], [1, "#39ff7a", 0]]), 'class="eye"');
    pic.p("M62 78 L66 77 L65 80Z", "#000", 'opacity=".6"');
    for (const [x, y] of [[106, 50], [114, 48], [100, 52]]) pic.p(`M${x} ${y} l3 -9 l3 9Z`, dk(K, 0.2));
    return pic.svg(400, 300, "art dragon-art");
  }

  // src/client/wizard.ts
  function wizardSvg(side, staff) {
    return characterSvg("wizard", side === "opp" ? "rival" : side, staff);
  }
  function heroSvg(hero, side, staff) {
    return avatarSvg(hero, side, staff);
  }
  function avatarSvg(avatar2, side, staff) {
    const kind = ["goblin", "kid", "human", "knight", "witch", "wizard"].includes(avatar2) ? avatar2 : "wizard";
    return characterSvg(kind, side, staff);
  }
  function dragonSvg() {
    return dragonArt();
  }

  // src/client/backgrounds.ts
  var TIMES = [
    { id: "auto", name: "Cycle" },
    { id: "day", name: "Day" },
    { id: "sunset", name: "Sunset" },
    { id: "night", name: "Night" }
  ];
  var CYCLE_STEP_MS = 3 * 6e4;
  var CYCLE = ["day", "sunset", "night"];
  function resolveTime(pref, now2 = Date.now()) {
    if (pref !== "auto") return pref;
    return CYCLE[Math.floor(now2 / CYCLE_STEP_MS) % CYCLE.length];
  }
  var untilNextStep = (now2 = Date.now()) => CYCLE_STEP_MS - now2 % CYCLE_STEP_MS;
  var W = 1600;
  var H = 900;
  var seed = 1;
  var rnd = () => (seed = seed * 16807 % 2147483647) / 2147483647;
  var r = (a, b) => a + rnd() * (b - a);
  var f = (n) => n.toFixed(1);
  var stopsOf = (stops) => stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== void 0 ? ` stop-opacity="${a}"` : ""}/>`).join("");
  var grad = (id, stops, vertical = true) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}">${stopsOf(stops)}</linearGradient>`;
  var radial = (id, stops) => `<radialGradient id="${id}">${stopsOf(stops)}</radialGradient>`;
  var gdefs = [];
  var gn = 0;
  function lin(stops, x1 = 0, y1 = 0, x2 = 0, y2 = 1) {
    const id = `lg${gn++}`;
    gdefs.push(`<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stopsOf(stops)}</linearGradient>`);
    return `url(#${id})`;
  }
  function rad(stops, fx = 0.35, fy = 0.3, rr = 0.75) {
    const id = `rg${gn++}`;
    gdefs.push(`<radialGradient id="${id}" cx="${fx}" cy="${fy}" r="${rr}" fx="${fx}" fy="${fy}">${stopsOf(stops)}</radialGradient>`);
    return `url(#${id})`;
  }
  var DEFS = `<filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter><linearGradient id="haze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity="0"/><stop offset=".55" stop-color="currentColor" stop-opacity=".9"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient><filter id="blur20" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="20"/></filter><filter id="glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
  function stars(n, maxY, color = "#fff") {
    const one = () => `<circle cx="${f(r(0, W))}" cy="${f(r(0, maxY))}" r="${f(r(0.5, 1.9))}" fill="${color}" opacity="${f(r(0.35, 0.95))}"/>`;
    return `<g class="bg-twinkle">${Array.from({ length: n >> 1 }, one).join("")}</g><g class="bg-twinkle b">${Array.from({ length: n >> 1 }, one).join("")}</g>`;
  }
  function moon(cx, cy, rad2, tint = "#f3efd6") {
    return `<circle cx="${cx}" cy="${cy}" r="${rad2 * 3.2}" fill="${tint}" opacity=".06"/><circle cx="${cx}" cy="${cy}" r="${rad2 * 1.7}" fill="${tint}" opacity=".1"/>
    <circle cx="${cx}" cy="${cy}" r="${rad2}" fill="${tint}"/>
    <circle cx="${cx - rad2 * 0.3}" cy="${cy - rad2 * 0.2}" r="${rad2 * 0.18}" fill="#000" opacity=".07"/><circle cx="${cx + rad2 * 0.25}" cy="${cy + rad2 * 0.3}" r="${rad2 * 0.12}" fill="#000" opacity=".06"/><circle cx="${cx + rad2 * 0.35}" cy="${cy - rad2 * 0.35}" r="${rad2 * 0.08}" fill="#000" opacity=".06"/>`;
  }
  function sun(cx, cy, rad2, core, halo) {
    return `<circle cx="${cx}" cy="${cy}" r="${rad2 * 5}" fill="${halo}" opacity=".10"/><circle cx="${cx}" cy="${cy}" r="${rad2 * 2.4}" fill="${halo}" opacity=".18"/><circle cx="${cx}" cy="${cy}" r="${rad2}" fill="${core}"/>`;
  }
  function rays(cx, cy, color, op) {
    return `<g class="bg-rays" opacity="${op}" filter="url(#blur20)">${Array.from({ length: 7 }, (_, i) => {
      const a = -0.95 + i * 0.32 + r(-0.06, 0.06), w = r(0.03, 0.07), len = 1300;
      const p = (ang) => `${f(cx + Math.sin(ang) * len)},${f(cy + Math.cos(ang) * len)}`;
      return `<polygon points="${cx},${cy} ${p(a - w)} ${p(a + w)}" fill="${color}"/>`;
    }).join("")}</g>`;
  }
  function milkyWay() {
    return `<g opacity=".55" filter="url(#blur20)"><path d="M-100 420 C 300 260, 800 220, 1700 40 L1700 120 C 900 300, 400 330, -100 520 Z" fill="#8a9cff" opacity=".2"/><path d="M-100 450 C 400 300, 900 250, 1700 90" stroke="#d8dcff" stroke-width="40" opacity=".14" fill="none"/></g>`;
  }
  function horizonGlow(y, color) {
    return `<ellipse cx="800" cy="${y}" rx="1000" ry="130" fill="${color}" opacity=".4" filter="url(#blur20)"/>`;
  }
  function haze(y, color, op) {
    return `<rect x="0" y="${y - 260}" width="${W}" height="${H - y + 260}" fill="url(#haze)" opacity="${op}" style="color:${color}"/>`;
  }
  function clouds(n, yMin, yMax, color, op, cls = "bg-drift") {
    const fill2 = rad([[0, lighten(color, 0.5)], [0.55, color], [1, dk2(color, 0.2)]], 0.4, 0.25, 0.85);
    const under = dk2(color, 0.32);
    return `<g class="${cls}" opacity="${op}">${Array.from({ length: n }, () => {
      const x = r(-100, W), y = r(yMin, yMax), s = r(0.6, 1.4);
      const puffs = [[0, 0, 90, 22], [-40, -12, 46, 26], [30, -18, 52, 30], [70, -4, 40, 18], [-78, -2, 34, 16], [8, -30, 34, 22]].map(([cx, cy, rx, ry]) => [cx + r(-6, 6), cy + r(-4, 4), rx * r(0.9, 1.1), ry * r(0.9, 1.1)]);
      return `<g transform="translate(${f(x)} ${f(y)}) scale(${f(s)})"><ellipse cx="0" cy="8" rx="110" ry="16" fill="${under}" opacity=".45" filter="url(#soft)"/>` + puffs.map(([cx, cy, rx, ry]) => `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx)}" ry="${f(ry)}" fill="${fill2}"/>`).join("") + `<ellipse cx="-120" cy="2" rx="40" ry="6" fill="${color}" opacity=".35"/><ellipse cx="130" cy="0" rx="46" ry="5" fill="${color}" opacity=".3"/></g>`;
    }).join("")}</g>`;
  }
  function mountains(y, amp, color, jag = 1) {
    const pts = [];
    for (let x = -60; x <= W + 180; x += r(70, 150)) {
      const k = pts.length % 3;
      const hgt = Math.abs(Math.sin(x / 260 + jag)) * amp * r(0.7, 1.2) + amp * 0.2;
      pts.push([x, y - (k === 0 ? hgt : k === 1 ? hgt * r(0.45, 0.7) : r(0, amp * 0.3))]);
    }
    const ridge = pts.map(([x, py], i) => `${i ? "L" : "M"}${f(x)} ${f(py)}`).join(" ");
    const body = lin([[0, lighten(color, 0.14)], [0.5, color], [1, dk2(color, 0.12)]]);
    const shadeG = lin([[0, dk2(color, 0.22)], [1, dk2(color, 0.1), 0.6]]);
    const litG = lin([[0, lighten(color, 0.3), 0.8], [1, lighten(color, 0.1), 0]]);
    const top = Math.min(...pts.map((p) => p[1]));
    let s = `<path d="${ridge} L${W + 200} ${H} L-60 ${H} Z" fill="${body}"/>`;
    let streaks = "";
    for (let i = 1; i < pts.length - 1; i++) {
      const [px, py] = pts[i], [nx, ny] = pts[i + 1], [lx, ly] = pts[i - 1];
      if (py > ny || py > ly) continue;
      s += `<path d="M${f(px)} ${f(py)} L${f(nx)} ${f(ny)} L${f(nx - 20)} ${f(y + 40)} L${f(px + (nx - px) * 0.15)} ${f(y + 40)} Z" fill="${shadeG}"/>`;
      s += `<path d="M${f(px)} ${f(py)} L${f(px - (px - lx) * 0.4)} ${f(py + (ly - py) * 0.4)} L${f(px - (px - lx) * 0.12)} ${f(y + 10)} Z" fill="${litG}"/>`;
      if (py < top + amp * 0.35) {
        const k = 0.24;
        s += `<path d="M${f(px)} ${f(py)} L${f(px + (nx - px) * k)} ${f(py + (ny - py) * k)} l${f(-8)} ${f(6)} l-10 -4 l-8 7 L${f(px - (px - lx) * k)} ${f(py + (ly - py) * k)} Z" fill="${lighten(color, 0.55)}" opacity=".8"/>`;
      }
      for (let j = 0; j < 3; j++) {
        const sx = px + r(-30, 40), sy = py + r(14, 40);
        streaks += `M${f(sx)} ${f(sy)} l${f(r(-12, 12))} ${f(r(30, 70))} `;
      }
    }
    return s + `<path d="${streaks}" stroke="${dk2(color, 0.25)}" stroke-width="1.5" fill="none" opacity=".35"/>`;
  }
  function lighten(c, t) {
    const p = [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
    return `#${p.map((v) => Math.round(v + (255 - v) * t).toString(16).padStart(2, "0")).join("")}`;
  }
  function hills(y, amp, color, phase = 0) {
    let d = `M0 ${H} L0 ${y}`;
    let top = "";
    for (let x = 0; x <= W; x += 40) {
      const py = f(y + Math.sin(x / 210 + phase) * amp + Math.sin(x / 90 + phase * 2) * amp * 0.25);
      d += ` L${x} ${py}`;
      top += `${x ? "L" : "M"}${x} ${py} `;
    }
    const g = lin([[0, lighten(color, 0.1)], [0.35, color], [1, dk2(color, 0.25)]]);
    return `<path d="${d} L${W} ${H} Z" fill="${g}"/><path d="${top}" stroke="${lighten(color, 0.3)}" stroke-width="2" fill="none" opacity=".35"/>`;
  }
  function eyes(n, yMin, yMax, op) {
    return Array.from({ length: n }, () => {
      const x = r(60, W - 60), y = r(yMin, yMax), gap = r(7, 12), s = r(2, 3.4);
      return `<g class="bg-blink" style="animation-delay:${f(r(0, 9))}s;animation-duration:${f(r(5, 11))}s" opacity="${op}" filter="url(#glow)"><ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(s)}" ry="${f(s * 0.7)}" fill="#ff2a2a"/><ellipse cx="${f(x + gap)}" cy="${f(y)}" rx="${f(s)}" ry="${f(s * 0.7)}" fill="#ff2a2a"/></g>`;
    }).join("");
  }
  function fireflies(n, yMin, yMax, color) {
    return `<g class="bg-float">${Array.from({ length: n }, () => `<circle cx="${f(r(0, W))}" cy="${f(r(yMin, yMax))}" r="${f(r(1.5, 3))}" fill="${color}" filter="url(#glow)" class="bg-flicker" style="animation-delay:${f(r(0, 4))}s"/>`).join("")}</g>`;
  }
  function comets(n) {
    return Array.from({ length: n }, (_, i) => {
      const y = r(40, 260), len = r(140, 220);
      return `<g class="bg-comet" style="animation-delay:${f(i * 7 + r(0, 4))}s;--cy:${f(y)}px"><line x1="0" y1="0" x2="${f(-len)}" y2="${f(-len * 0.32)}" stroke="url(#cometTail)" stroke-width="3" stroke-linecap="round"/><circle r="3.2" fill="#fff" filter="url(#glow)"/></g>`;
    }).join("");
  }
  function mist(y, color, op) {
    return `<g class="bg-mist" opacity="${op}" filter="url(#blur20)">${Array.from({ length: 6 }, (_, i) => `<ellipse cx="${f(i * 300 + r(-60, 60))}" cy="${f(y + r(-20, 20))}" rx="${f(r(220, 340))}" ry="${f(r(26, 46))}" fill="${color}"/>`).join("")}</g>`;
  }
  var pick = (t, day, sunset, night) => t === "day" ? day : t === "sunset" ? sunset : night;
  var dk2 = (c, t) => {
    const p = [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16) * (1 - t));
    return `#${p.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;
  };
  function arenaFloor(t, stone, accent, glyph = "#ffffff") {
    const [top, mid, edge] = stone;
    const cy = 940, rx = 1040, ry = 220;
    let s = `<ellipse cx="800" cy="${cy + 22}" rx="${rx + 20}" ry="${ry + 16}" fill="#000" opacity=".35" filter="url(#blur20)"/>`;
    s += `<ellipse cx="800" cy="${cy + 20}" rx="${rx}" ry="${ry}" fill="${edge}"/>`;
    s += `<ellipse cx="800" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#floorG)"/>`;
    for (const k of [0.82, 0.62, 0.42]) s += `<ellipse cx="800" cy="${cy}" rx="${f(rx * k)}" ry="${f(ry * k)}" fill="none" stroke="${mid}" stroke-width="${f(3 * k + 1)}" opacity=".7"/>`;
    for (let i = 0; i < 18; i++) {
      const a = Math.PI + i / 18 * Math.PI;
      s += `<line x1="${f(800 + Math.cos(a) * rx * 0.42)}" y1="${f(cy + Math.sin(a) * ry * 0.42)}" x2="${f(800 + Math.cos(a) * rx)}" y2="${f(cy + Math.sin(a) * ry)}" stroke="${mid}" stroke-width="2.5" opacity=".6"/>`;
    }
    for (let i = 0; i < 9; i++) {
      const x = r(150, 1450), y = r(740, 880);
      s += `<path d="M${f(x)} ${f(y)} l${f(r(20, 50))} ${f(r(-6, 6))} l${f(r(10, 30))} ${f(r(4, 14))}" stroke="${mid}" stroke-width="1.6" fill="none" opacity=".55"/>`;
    }
    const glow = pick(t, 0.55, 0.8, 1);
    const rr = 0.66;
    s += `<g filter="url(#glow)" opacity="${glow}"><ellipse cx="800" cy="${cy}" rx="${f(rx * rr)}" ry="${f(ry * rr)}" fill="none" stroke="${accent}" stroke-width="5"/><ellipse cx="800" cy="${cy}" rx="${f(rx * (rr - 0.07))}" ry="${f(ry * (rr - 0.07))}" fill="none" stroke="${accent}" stroke-width="2.5" opacity=".8"/><ellipse cx="800" cy="${cy}" rx="${f(rx * 0.2)}" ry="${f(ry * 0.2)}" fill="none" stroke="${accent}" stroke-width="3" opacity=".7"/></g>`;
    const glyphs = "\u706B\u6C34\u6728\u91D1\u571F\u98A8\u96F7\u5149\u95C7\u6C37\u9B54\u529B";
    for (let i = 0; i < 9; i++) {
      const a = Math.PI + (i + 0.5) / 9 * Math.PI, rk = rr - 0.035;
      const x = 800 + Math.cos(a) * rx * rk, y = cy + Math.sin(a) * ry * rk;
      s += `<text x="${f(x)}" y="${f(y + 9)}" font-size="34" text-anchor="middle" fill="${glyph}" opacity="${f(glow * 0.75)}" font-family="'Noto Serif JP','Yu Mincho',serif" transform="scale(1 .62) translate(0 ${f(y / 0.62 - y)})" filter="url(#glow)">${glyphs[i]}</text>`;
    }
    s += `<ellipse cx="800" cy="${cy - 30}" rx="420" ry="90" fill="${accent}" opacity="${f(glow * 0.12)}" filter="url(#blur20)"/>`;
    s += `<path d="M${800 - rx} ${cy} A ${rx} ${ry} 0 0 1 ${800 + rx} ${cy}" stroke="#ffffff" stroke-width="3" fill="none" opacity="${pick(t, 0.35, 0.22, 0.12)}"/>`;
    return s;
  }
  var floorDefs = (stone) => grad("floorG", [[0, stone[0]], [0.5, stone[1]], [1, stone[2]]]);
  function trunk(x, w, color, lean = 0) {
    const top = -40, base = 760;
    const L = (k) => x - w / 2 + lean * (1 - k / 800) + Math.sin(k / 90) * w * 0.06, R = (k) => x + w / 2 + lean * (1 - k / 800) + Math.sin(k / 70 + 1) * w * 0.05;
    let d = `M${f(x - w * 1.5)} ${base} Q${f(x - w * 0.62)} ${base - 40} ${f(L(base - 160))} ${base - 160}`;
    for (let k = base - 240; k >= top; k -= 80) d += ` L${f(L(k))} ${k}`;
    d += ` L${f(R(top))} ${top}`;
    for (let k = top + 80; k <= base - 160; k += 80) d += ` L${f(R(k))} ${k}`;
    d += ` Q${f(x + w * 0.62)} ${base - 40} ${f(x + w * 1.5)} ${base} Z`;
    let s = `<ellipse cx="${x}" cy="${base}" rx="${f(w * 1.6)}" ry="${f(w * 0.12)}" fill="#000" opacity=".35" filter="url(#soft)"/><path d="${d}" fill="${lin([[0, lighten(color, 0.12)], [0.3, color], [0.75, dk2(color, 0.2)], [1, dk2(color, 0.35)]], 0, 0, 1, 0)}"/>`;
    s += `<path d="M${f(L(base - 160) + w * 0.06)} ${base - 160} L${f(L(top) + w * 0.06)} ${top} L${f(L(top) + w * 0.2)} ${top} L${f(L(base - 160) + w * 0.18)} ${base - 160} Z" fill="#ffffff" opacity=".06"/>`;
    for (let i = 0; i < 5; i++) {
      const bx = x - w * 0.3 + i * w * 0.15 + lean * 0.5;
      s += `<path d="M${f(bx)} ${base - 120} q${f(r(-8, 8))} -200 ${f(r(-10, 10))} -${f(r(300, 600))}" stroke="#000" stroke-width="${f(r(2, 5))}" opacity=".16" fill="none"/>`;
    }
    s += bark(x - w * 0.42 + lean * 0.4, top + 40, w * 0.84, base - 180 - top, color);
    for (const sx of [-1, 1]) s += `<path d="M${f(x + sx * w * 0.3)} ${base - 60} Q${f(x + sx * w * 0.9)} ${base - 20} ${f(x + sx * w * 1.9)} ${base + 10}" stroke="${color}" stroke-width="${f(w * 0.18)}" fill="none" stroke-linecap="round"/>`;
    return s;
  }
  function leafBlob(cx, cy, R, fill2) {
    const n = 16 + Math.floor(rnd() * 6);
    const pt = (i, k) => {
      const a = i / n * Math.PI * 2;
      const rr = R * k;
      return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.88];
    };
    const rs2 = Array.from({ length: n }, () => r(0.78, 0.98));
    let d = "";
    for (let i = 0; i < n; i++) {
      const [x0, y0] = pt(i, rs2[i]);
      const a = (i + 0.5) / n * Math.PI * 2, lobe = R * r(1.02, 1.16);
      const [x1, y1] = pt(i + 1, rs2[(i + 1) % n]);
      d += `${i ? "" : `M${f(x0)} ${f(y0)} `}Q${f(cx + Math.cos(a) * lobe)} ${f(cy + Math.sin(a) * lobe * 0.88)} ${f(x1)} ${f(y1)} `;
    }
    return `<path d="${d}Z" fill="${fill2}"/>`;
  }
  function ivy(x, y, len, c) {
    let vine = `M${x} ${y}`, leaves = "", lit = "";
    let px = x, py = y;
    for (let k = 0; k < len; k += 10) {
      const nx = px + r(-4, 4), ny = py + 10;
      vine += ` L${f(nx)} ${f(ny)}`;
      for (let j = 0; j < 3; j++) {
        const lx = nx + r(-12, 12), ly = ny + r(-6, 6), sz = r(4, 7) * (1 - k / len * 0.45);
        const leaf = `M${f(lx)} ${f(ly)} q${f(sz)} ${f(-sz)} ${f(sz * 2)} 0 q${f(-sz)} ${f(sz)} ${f(-sz * 2)} 0 `;
        if (rnd() > 0.35) leaves += leaf;
        else lit += leaf;
      }
      px = nx;
      py = ny;
    }
    return `<path d="${vine}" stroke="${dk2(c, 0.35)}" stroke-width="1.5" fill="none"/><path d="${leaves}" fill="${c}"/><path d="${lit}" fill="${lighten(c, 0.25)}"/>`;
  }
  function leafyTree(x, base, h4, leaf, trunkC) {
    const w = h4 * 0.07;
    let s = `<ellipse cx="${x}" cy="${base}" rx="${f(h4 * 0.3)}" ry="${f(h4 * 0.04)}" fill="#000" opacity=".3" filter="url(#soft)"/>`;
    s += `<path d="M${f(x - w)} ${base} Q${f(x - w * 0.5)} ${f(base - h4 * 0.4)} ${f(x - w * 0.35)} ${f(base - h4 * 0.62)} L${f(x + w * 0.35)} ${f(base - h4 * 0.62)} Q${f(x + w * 0.5)} ${f(base - h4 * 0.4)} ${f(x + w)} ${base} Z" fill="${lin([[0, lighten(trunkC, 0.15)], [1, dk2(trunkC, 0.3)]], 0, 0, 1, 0)}"/>`;
    const dark = rad([[0, dk2(leaf, 0.1)], [1, dk2(leaf, 0.45)]]), mid = rad([[0, lighten(leaf, 0.15)], [0.6, leaf], [1, dk2(leaf, 0.3)]]), top = rad([[0, lighten(leaf, 0.35)], [1, leaf]]);
    const cy = base - h4 * 0.72, R = h4 * 0.3;
    for (let i = 0; i < 6; i++) s += leafBlob(x + r(-R, R) * 0.9, cy + r(-R * 0.4, R * 0.6), R * r(0.45, 0.6), dark);
    for (let i = 0; i < 7; i++) s += leafBlob(x + r(-R, R) * 0.75, cy + r(-R * 0.6, R * 0.3), R * r(0.4, 0.55), mid);
    for (let i = 0; i < 4; i++) s += leafBlob(x - R * 0.2 + r(-R, R) * 0.45, cy - R * 0.35 + r(-R * 0.3, R * 0.2), R * r(0.28, 0.4), top);
    return s;
  }
  function bush(x, base, sz, leaf) {
    const g = rad([[0, lighten(leaf, 0.2)], [0.6, leaf], [1, dk2(leaf, 0.35)]]);
    let s = `<ellipse cx="${x}" cy="${base}" rx="${f(sz * 1.3)}" ry="${f(sz * 0.18)}" fill="#000" opacity=".3" filter="url(#soft)"/>`;
    for (let i = 0; i < 5; i++) s += leafBlob(x + r(-sz, sz), base - sz * r(0.35, 0.7), sz * r(0.45, 0.65), g);
    return s;
  }
  function glints(cx, cy, rx, ry, c) {
    let d = "";
    for (let i = 0; i < 160; i++) {
      const a = r(0, Math.PI * 2), q = Math.sqrt(rnd());
      const x = cx + Math.cos(a) * rx * q, y = cy + Math.sin(a) * ry * q - 10;
      d += `M${f(x)} ${f(y)} q3 -4 6 0 q-3 3 -6 0 `;
    }
    return `<path d="${d}" fill="${c}" opacity=".55"/>`;
  }
  function bark(x, y, w, h4, c) {
    let dark = "", light = "";
    for (let i = 0; i < Math.round(w / 3); i++) {
      const bx = x + r(0, w), by = y + r(0, h4), len = r(20, 90);
      const p = `M${f(bx)} ${f(by)} q${f(r(-3, 3))} ${f(len / 2)} ${f(r(-2, 2))} ${f(len)} `;
      if (i % 3) dark += p;
      else light += p;
    }
    const knots = Array.from({ length: Math.max(1, Math.round(h4 / 260)) }, () => `<ellipse cx="${f(x + r(w * 0.2, w * 0.8))}" cy="${f(y + r(0, h4))}" rx="${f(r(5, 9))}" ry="${f(r(8, 14))}" fill="none" stroke="${dk2(c, 0.5)}" stroke-width="2.5" opacity=".7"/>`).join("");
    return `<path d="${dark}" stroke="${dk2(c, 0.45)}" stroke-width="2" fill="none" opacity=".6"/><path d="${light}" stroke="${lighten(c, 0.2)}" stroke-width="1.5" fill="none" opacity=".35"/>${knots}`;
  }
  function monolith(x, base, h4, w, stone, glow, lit, moss = "#4f8a3a") {
    const outline = dk2(stone, 0.55);
    let s = `<ellipse cx="${x + w * 0.2}" cy="${base + 2}" rx="${f(w * 1.1)}" ry="${f(w * 0.2)}" fill="#000" opacity=".4" filter="url(#soft)"/>`;
    s += `<path d="M${x - w / 2} ${base} L${x - w / 2 + 4} ${base - h4} L${x + w / 2 - 6} ${base - h4 - 8} L${x + w / 2} ${base} Z" fill="${lin([[0, lighten(stone, 0.18)], [0.45, stone], [1, dk2(stone, 0.3)]], 0, 0, 1, 0)}" stroke="${outline}" stroke-width="1" stroke-opacity=".5" stroke-linejoin="round"/><path d="M${x - w / 2} ${base} L${x + w / 2} ${base} L${x + w / 2 - 2} ${base - h4 * 0.3} L${x - w / 2 + 1} ${base - h4 * 0.3} Z" fill="${lin([[0, "#000", 0], [1, "#000", 0.35]])}"/>`;
    s += `<path d="M${x + w * 0.1} ${base - h4 - 4} L${x + w / 2 - 6} ${base - h4 - 8} L${x + w / 2} ${base} L${x + w * 0.15} ${base} Z" fill="#000" opacity=".28"/>`;
    s += `<path d="M${x - w / 2 + 4} ${base - h4} L${x - w / 2 + 1} ${base}" stroke="${lighten(stone, 0.3)}" stroke-width="3" opacity=".5"/>`;
    s += speckle(x - w / 2 + 3, base - h4, w - 8, h4 - 4, Math.round(h4 / 4), stone);
    s += `<path d="M${f(x - w * 0.3)} ${f(base - h4 * 0.4)} l${f(w * 0.12)} ${f(h4 * 0.08)} l${f(-w * 0.05)} ${f(h4 * 0.1)} M${f(x + w * 0.2)} ${f(base - h4 * 0.75)} l${f(-w * 0.1)} ${f(h4 * 0.06)}" stroke="${outline}" stroke-width="1.6" fill="none" opacity=".8"/>`;
    s += `<path d="M${x - w / 2 + 3} ${base - h4 + 10} Q${x - w * 0.2} ${base - h4 - 10} ${x + w / 2 - 6} ${base - h4 - 8} L${x + w / 2 - 4} ${base - h4 + 6} Q${x + w * 0.2} ${base - h4 + 16} ${x + w * 0.05} ${base - h4 + 8} Q${x - w * 0.15} ${base - h4 + 24} ${x - w * 0.25} ${base - h4 + 10} Z" fill="${lin([[0, lighten(moss, 0.25)], [1, dk2(moss, 0.25)]])}"/>`;
    s += `<path d="M${f(x - w * 0.25)} ${base - h4 + 12} q2 14 -1 26 M${f(x + w * 0.22)} ${base - h4 + 8} q-2 10 1 18" stroke="${moss}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    s += `<path d="M${f(x - w * 0.3)} ${base} q${f(w * 0.2)} -14 ${f(w * 0.4)} -4 q${f(w * 0.2)} -10 ${f(w * 0.3)} 4 Z" fill="${moss}" opacity=".9"/>`;
    let rune = "";
    for (let i = 0; i < 3; i++) {
      const ry = base - h4 * (0.78 - i * 0.22), rh = h4 * 0.12;
      rune += `M${f(x)} ${f(ry)} v${f(rh)} M${f(x)} ${f(ry + rh * 0.35)} l${f(rnd() > 0.5 ? 5 : -5)} -4 M${f(x)} ${f(ry + rh * 0.7)} l${f(rnd() > 0.5 ? -5 : 5)} 4 `;
    }
    s += `<path d="${rune}" stroke="${glow}" stroke-width="3.2" stroke-linecap="round" fill="none" opacity="${lit ? 0.95 : 0.7}"${lit ? ' filter="url(#glow)" class="bg-flicker slow"' : ""}/>`;
    const earth = dk2(moss, 0.55);
    s += `<path d="M${f(x - w * 0.95)} ${base + 3} Q${f(x - w * 0.6)} ${base - 7} ${f(x - w * 0.3)} ${base - 5} Q${x} ${base - 9} ${f(x + w * 0.35)} ${base - 5} Q${f(x + w * 0.7)} ${base - 6} ${f(x + w * 1.05)} ${base + 3} Z" fill="${lin([[0, dk2(moss, 0.2)], [1, earth]])}"/>`;
    for (let i = 0; i < 4; i++) {
      const px = x + r(-w * 0.9, w * 0.9);
      s += `<ellipse cx="${f(px)}" cy="${f(base + r(-1, 3))}" rx="${f(r(2.5, 5))}" ry="${f(r(1.6, 3))}" fill="${lighten(stone, 0.12)}"/>`;
    }
    let tuft = "";
    for (let i = 0; i < 18; i++) {
      const gx = x + r(-w * 0.95, w * 0.95), gh = r(6, 16);
      tuft += `M${f(gx)} ${base + 2} q${f(r(-3, 3))} ${f(-gh / 2)} ${f(r(-5, 5))} ${f(-gh)} `;
    }
    s += `<path d="${tuft}" stroke="${moss}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
    return s;
  }
  function standingStones(stone, glow, lit, moss, inner = 720) {
    return monolith(500, inner, 120, 44, stone, glow, lit, moss) + monolith(1100, inner, 120, 44, stone, glow, lit, moss) + monolith(180, 750, 190, 64, stone, glow, lit, moss) + monolith(1420, 750, 190, 64, stone, glow, lit, moss);
  }
  function brazier(x, base, s, stone, lit) {
    const flame = `<g class="bg-flicker" filter="url(#glow)"><path d="M${x - 9 * s} ${base - 34 * s} Q${x - 10 * s} ${base - 56 * s} ${x} ${base - 74 * s} Q${x + 10 * s} ${base - 56 * s} ${x + 9 * s} ${base - 34 * s} Z" fill="#ff9a2a"/><path d="M${x - 4 * s} ${base - 34 * s} Q${x - 4 * s} ${base - 48 * s} ${x} ${base - 58 * s} Q${x + 4 * s} ${base - 48 * s} ${x + 4 * s} ${base - 34 * s} Z" fill="#fff0a0"/></g>`;
    return `<path d="M${x - 14 * s} ${base} L${x - 9 * s} ${base - 26 * s} L${x - 16 * s} ${base - 34 * s} L${x + 16 * s} ${base - 34 * s} L${x + 9 * s} ${base - 26 * s} L${x + 14 * s} ${base} Z" fill="${stone}"/>${lit ? flame : `<ellipse cx="${x}" cy="${base - 36 * s}" rx="${12 * s}" ry="${4 * s}" fill="#ffb060" opacity=".7"/>`}`;
  }
  function grass(n, y0, y1, color, hmin = 14, hmax = 34) {
    const shades = [dk2(color, 0.25), color, lighten(color, 0.22)];
    const d = ["", "", ""];
    for (let i = 0; i < n * 6; i++) {
      const x = r(-10, W + 10), y = r(y0, y1), h4 = r(hmin, hmax) * r(0.6, 1.2), lean = r(-9, 9);
      d[i % 3] += `M${f(x)} ${f(y)} q${f(lean * 0.3)} ${f(-h4 * 0.55)} ${f(lean)} ${f(-h4)} `;
    }
    const flowers = Array.from({ length: Math.round(n / 3) }, () => `<circle cx="${f(r(0, W))}" cy="${f(r(y0 - 6, y1 - 4))}" r="${f(r(1.6, 2.8))}" fill="${["#fff8e0", "#ffe27a", "#ffb3d0", "#d6e4ff"][Math.floor(rnd() * 4)]}"/>`).join("");
    return `<g fill="none" stroke-linecap="round">${d.map((p, i) => `<path d="${p}" stroke="${shades[i]}" stroke-width="${[2.4, 2, 1.6][i]}"/>`).join("")}</g><g opacity=".85">${flowers}</g>`;
  }
  function rock(x, y, s, c) {
    return `<ellipse cx="${x}" cy="${y + 2}" rx="${f(50 * s)}" ry="${f(8 * s)}" fill="#000" opacity=".3" filter="url(#soft)"/><path d="M${x - 40 * s} ${y} L${x - 30 * s} ${y - 26 * s} L${x - 4 * s} ${y - 40 * s} L${x + 26 * s} ${y - 30 * s} L${x + 44 * s} ${y} Z" fill="${lin([[0, lighten(c, 0.15)], [1, dk2(c, 0.2)]], 0, 0, 1, 1)}" stroke="${dk2(c, 0.4)}" stroke-width="1" stroke-opacity=".5"/><path d="M${x - 4 * s} ${y - 40 * s} L${x + 26 * s} ${y - 30 * s} L${x + 44 * s} ${y} L${x + 4 * s} ${y} Z" fill="#000" opacity=".22"/><path d="M${x - 30 * s} ${y - 26 * s} L${x - 4 * s} ${y - 40 * s}" stroke="${lighten(c, 0.35)}" stroke-width="2.5" opacity=".6"/>${speckle(x - 30 * s, y - 34 * s, 70 * s, 30 * s, 14, c)}`;
  }
  function speckle(x, y, w, h4, n, c) {
    let dark = "", light = "";
    for (let i = 0; i < n; i++) {
      const px = x + r(0, w), py = y + r(0, h4), s = r(1, 2.6);
      const p = `M${f(px)} ${f(py)} h${f(s)} v${f(s * 0.8)} h${f(-s)}Z `;
      if (i % 2) dark += p;
      else light += p;
    }
    return `<path d="${dark}" fill="${dk2(c, 0.4)}" opacity=".7"/><path d="${light}" fill="${lighten(c, 0.3)}" opacity=".55"/>`;
  }
  function forest(t) {
    const sky = pick(t, [[0, "#7fb2d8"], [0.5, "#cfe4ec"], [1, "#f2f6ee"]], [[0, "#2a1a44"], [0.4, "#8a4a6a"], [0.7, "#e88a5a"], [1, "#ffd49a"]], [[0, "#050a16"], [0.55, "#0f2236"], [1, "#1c3c42"]]);
    const far = pick(t, "#b8c8d4", "#a0707a", "#1e3644"), mid = pick(t, "#5e6a80", "#4a2e46", "#0f1e28"), near = pick(t, "#262838", "#1c1222", "#05090e");
    const stone = pick(t, ["#d8dce4", "#a8aebc", "#6a7080"], ["#8a6a78", "#5e4458", "#2e2030"], ["#3a4656", "#28323e", "#121820"]);
    return `<defs>${grad("sk", sky)}${grad("cometTail", [[0, "#fff", 0.9], [1, "#9fd8ff", 0]], false)}${floorDefs(stone)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === "night" ? milkyWay() + stars(160, 420) + comets(2) + moon(1200, 150, 54) : t === "sunset" ? horizonGlow(560, "#ff8a4a") + sun(1080, 520, 70, "#ffd9a0", "#ff9a5a") : sun(1180, 120, 50, "#fffbe8", "#fff6c8")}
    ${(() => {
      const g = lin([[0, lighten(far, 0.12)], [0.5, far], [1, dk2(far, 0.12)]], 0, 0, 1, 0);
      return Array.from({ length: 34 }, (_, i) => {
        const x = i / 34 * W + r(-20, 20), w = r(14, 34);
        return `<path d="M${f(x)} 700 L${f(x + w * 0.15)} 0 H${f(x + w * 0.85)} L${f(x + w)} 700 Z" fill="${g}" opacity="${f(r(0.35, 0.7))}"/>`;
      }).join("");
    })()}
    ${haze(560, pick(t, "#f2f6f4", "#ffc0a0", "#2a4a5a"), 0.75)}
    ${mist(600, pick(t, "#ffffff", "#ffd0b0", "#4e7a86"), pick(t, 0.6, 0.4, 0.35))}
    ${(() => {
      const g = lin([[0, lighten(mid, 0.14)], [0.4, mid], [1, dk2(mid, 0.3)]], 0, 0, 1, 0);
      return Array.from({ length: 12 }, (_, i) => {
        const x = i / 12 * W + r(0, 90), w = r(40, 70);
        return `<path d="M${f(x)} 760 L${f(x + 8)} 0 L${f(x + w)} 0 L${f(x + w + 6)} 760Z" fill="${g}" opacity=".92"/>${bark(x + 8, 40, w - 10, 680, mid)}`;
      }).join("");
    })()}
    ${t !== "night" ? rays(t === "day" ? 1180 : 1080, t === "day" ? 120 : 520, pick(t, "#fffdf0", "#ffd39a", "#000"), pick(t, 0.32, 0.3, 0)) : ""}
    ${haze(700, pick(t, "#e8f0f0", "#d08a7a", "#1c3a40"), 0.35)}
    ${rock(300, 760, 1.3, pick(t, "#7a8090", "#4a3444", "#141a22"))}${rock(1290, 756, 1.1, pick(t, "#6e7484", "#40303e", "#111820"))}
    ${eyes(t === "night" ? 6 : t === "sunset" ? 3 : 1, 560, 700, t === "day" ? 0.3 : 1)}
    ${trunk(90, 190, near, 30)}${trunk(1500, 210, near, -40)}${trunk(420, 110, mid, 20)}${trunk(1170, 120, mid, -10)}
    ${t !== "day" ? fireflies(t === "night" ? 28 : 12, 460, 760, "#e8ff9a") : ""}
    ${(() => {
      const lf = pick(t, "#3e5e34", "#3a2a30", "#0c1a14");
      const g = rad([[0, lighten(lf, 0.18)], [0.6, lf], [1, dk2(lf, 0.4)]], 0.4, 0.7);
      let c = "";
      for (let i = 0; i < 26; i++) c += leafBlob(r(-40, W + 40), r(-30, 70), r(60, 120), g);
      return `<g class="bg-sway-soft">${c}</g>`;
    })()}
    <path d="M0 740 Q400 724 800 726 Q1200 724 1600 740 L1600 900 L0 900 Z" fill="${pick(t, "#4e5a48", "#2a1c26", "#070d10")}"/>
    ${[60, 330, 610, 1e3, 1260, 1540].map((x) => bush(x + r(-30, 30), 748, r(26, 42), pick(t, "#4a6e3a", "#4a3a34", "#10201a"))).join("")}
    ${standingStones(pick(t, "#5e6670", "#3a2a34", "#121a20"), "#6ec8ff", t !== "day", pick(t, "#4f8a3a", "#6a6a34", "#1e4a2c"), 742)}
    ${grass(60, 720, 770, pick(t, "#5a7a4a", "#4a3a3a", "#0e1a12"))}
    ${arenaFloor(t, stone, pick(t, "#3a9cff", "#7ac8ff", "#5ab0ff"), pick(t, "#2a6ad0", "#e8f4ff", "#cfe8ff"))}
    ${mist(880, pick(t, "#ffffff", "#ffd8b8", "#2a4f56"), 0.18)}`;
  }
  function swamp(t) {
    const sky = pick(t, [[0, "#8fb0a4"], [0.55, "#cfdcc0"], [1, "#eef0d8"]], [[0, "#3a2040"], [0.45, "#9a5a5a"], [0.75, "#e8a868"], [1, "#f6d49a"]], [[0, "#06080e"], [0.5, "#14222a"], [1, "#22383a"]]);
    const tree = pick(t, "#2f3d2c", "#24182a", "#06090a");
    const water = pick(t, ["#8aa898", "#4a6656"], ["#c4865e", "#5a3438"], ["#24383a", "#081212"]);
    const stone = pick(t, ["#7a8a74", "#56644e", "#2e3628"], ["#6a5450", "#4a3638", "#22181c"], ["#2a3632", "#1c2624", "#0a100e"]);
    const deadTree = (x, y, h4, c) => {
      const b = (x1, y1, x2, y2, w) => {
        const mx = f((x1 + x2) / 2 + r(-15, 15)), my = f((y1 + y2) / 2);
        const d = `M${f(x1)} ${f(y1)} Q ${mx} ${my} ${f(x2)} ${f(y2)}`;
        return `<path d="${d}" stroke="${dk2(c, 0.28)}" stroke-width="${f(w + 1.5)}" opacity=".9" stroke-linecap="round" fill="none"/><path d="${d}" stroke="${c}" stroke-width="${f(w)}" stroke-linecap="round" fill="none"/><path d="${d}" transform="translate(${f(-w * 0.22)} 0)" stroke="${lighten(c, 0.25)}" stroke-width="${f(Math.max(1, w * 0.18))}" stroke-linecap="round" fill="none" opacity=".5"/>`;
      };
      let s = b(x, y, x + 8, y - h4, h4 * 0.06) + b(x + 4, y - h4 * 0.55, x - h4 * 0.38, y - h4 * 0.86, h4 * 0.026) + b(x + 6, y - h4 * 0.72, x + h4 * 0.42, y - h4 * 0.98, h4 * 0.022) + b(x - h4 * 0.2, y - h4 * 0.74, x - h4 * 0.32, y - h4 * 1.02, h4 * 0.014) + b(x + 8, y - h4, x + 34, y - h4 * 1.16, h4 * 0.014);
      for (let i = 0; i < 6; i++) {
        const mx = x + r(-h4 * 0.35, h4 * 0.4), my = y - h4 * r(0.7, 1);
        s += `<path class="bg-sway" d="M${f(mx)} ${f(my)} q 4 ${f(r(20, 40))} -2 ${f(r(40, 80))}" stroke="${pick(t, "#6e8a5a", "#5c4a42", "#2a3e26")}" stroke-width="3" fill="none" opacity=".85"/>`;
      }
      return s;
    };
    const reeds = (n, y0, y1, c) => Array.from({ length: n }, () => {
      const x = r(0, W), y = r(y0, y1), h4 = r(50, 110);
      return `<g><line x1="${f(x)}" y1="${f(y)}" x2="${f(x + r(-6, 6))}" y2="${f(y - h4)}" stroke="${c}" stroke-width="2.6"/><ellipse cx="${f(x + r(-3, 3))}" cy="${f(y - h4 * 0.82)}" rx="4" ry="12" fill="${c}"/></g>`;
    }).join("");
    const lit = t !== "day";
    return `<defs>${grad("sk", sky)}${grad("wt", [[0, water[0]], [1, water[1]]])}${radial("wisp", [[0, "#cfff9a", 0.9], [1, "#cfff9a", 0]])}${floorDefs(stone)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === "night" ? stars(80, 320, "#cfe8b0") + moon(420, 160, 46, "#dfe9a8") : t === "sunset" ? horizonGlow(560, "#ff8a5a") + sun(420, 520, 66, "#ffe0a8", "#ff9a60") + clouds(4, 120, 260, "#f0a888", 0.5) : sun(400, 130, 40, "#fbfbe6", "#ffffff") + clouds(5, 90, 240, "#f6f8ee", 0.6)}
    ${hills(570, 20, pick(t, "#6e8a72", "#5a3a4a", "#13201a"))}
    ${[160, 420, 700, 1e3, 1260, 1480].map((x, i) => deadTree(x, 600, 140 + i % 3 * 30, pick(t, "#5a6a5a", "#5a3a48", "#0e1614"))).join("")}
    ${haze(600, pick(t, "#eef4e6", "#f0b090", "#2e4a3a"), 0.6)}
    <rect x="0" y="600" width="${W}" height="300" fill="url(#wt)"/>
    <g class="bg-drift slow" stroke="${lighten(water[0], 0.35)}" stroke-width="2" fill="none" opacity=".45">${Array.from({ length: 22 }, () => {
      const x = r(0, W), y = r(612, 720), w = r(30, 90);
      return `<path d="M${f(x)} ${f(y)} q${f(w / 2)} -3 ${f(w)} 0"/>`;
    }).join("")}</g>
    ${mist(610, pick(t, "#f6f8ec", "#f8c8a8", "#7a9a7a"), pick(t, 0.6, 0.45, 0.4))}
    ${[110, 1440].map((x, i) => deadTree(x, 720, 340 + i * 40, tree)).join("")}
    <g opacity=".22" transform="translate(0 1440) scale(1 -1)">${[110, 1440].map((x, i) => deadTree(x, 720, 340 + i * 40, tree)).join("")}</g>
    ${(() => {
      const c = pick(t, "#5a8a44", "#6a5a34", "#1f3a1a");
      const g = rad([[0, lighten(c, 0.25)], [1, dk2(c, 0.2)]], 0.4, 0.3, 0.8);
      return Array.from({ length: 18 }, () => {
        const x = r(0, W), y = r(640, 720), w = r(16, 34);
        return `<path d="M${f(x)} ${f(y)} L${f(x + w)} ${f(y - 2)} A${f(w)} ${f(w * 0.22)} 0 1 1 ${f(x + w * 0.9)} ${f(y + 3)} Z" fill="${g}"/>${rnd() > 0.7 ? `<circle cx="${f(x - w * 0.3)}" cy="${f(y - 3)}" r="3.5" fill="${pick(t, "#ffd0e0", "#ffc0a0", "#c8a0ff")}"/>` : ""}`;
      }).join("");
    })()}
    ${[40, 360, 1240, 1560].map((x) => bush(x, 660, r(30, 44), pick(t, "#4a6a3a", "#4a3a30", "#0e1a14"))).join("")}
    ${reeds(26, 640, 720, tree)}
    ${standingStones(pick(t, "#5a6454", "#3a2a30", "#141c18"), "#9aff8a", lit, pick(t, "#4f8a3a", "#6a6a34", "#1e4a2c"))}
    ${t !== "day" ? `<g class="bg-float">${Array.from({ length: t === "night" ? 7 : 3 }, () => `<circle cx="${f(r(100, W - 100))}" cy="${f(r(420, 660))}" r="${f(r(14, 24))}" fill="url(#wisp)" class="bg-flicker" style="animation-delay:${f(r(0, 3))}s"/>`).join("")}</g>` : ""}
    ${fireflies(t === "night" ? 30 : 10, 380, 700, "#d8ff7a")}
    ${arenaFloor(t, stone, pick(t, "#4aff7a", "#9aff8a", "#7affa0"), pick(t, "#1a7a3a", "#f0ffe0", "#d8ffe0"))}
    ${reeds(14, 880, 900, tree)}
    ${mist(860, pick(t, "#ffffff", "#ffd8c0", "#9ab89a"), pick(t, 0.25, 0.2, 0.16))}`;
  }
  function plains(t) {
    const sky = pick(t, [[0, "#4a8ed8"], [0.55, "#9ccaee"], [1, "#e6f2fa"]], [[0, "#2e1c48"], [0.45, "#b0586e"], [0.75, "#f2a868"], [1, "#f8d48e"]], [[0, "#060b1e"], [0.6, "#18244e"], [1, "#2c325a"]]);
    const lit = t !== "day";
    const stone = pick(t, ["#8a84a4", "#625c7c", "#34304a"], ["#7a5a72", "#54405a", "#2a1e30"], ["#2a2a48", "#1c1c34", "#0c0c1a"]);
    const house = (x, y, s, wall2, roof2) => {
      const w = 46 * s, h4 = 30 * s;
      const win = lit ? `<rect x="${f(x + w * 0.2)}" y="${f(y - h4 * 0.62)}" width="${f(w * 0.18)}" height="${f(h4 * 0.3)}" fill="#ffcf6a" class="bg-flicker slow"/><rect x="${f(x + w * 0.6)}" y="${f(y - h4 * 0.62)}" width="${f(w * 0.18)}" height="${f(h4 * 0.3)}" fill="#ffcf6a"/>` : "";
      return `<rect x="${f(x)}" y="${f(y - h4)}" width="${f(w)}" height="${f(h4)}" fill="${wall2}"/><polygon points="${f(x - 5 * s)},${f(y - h4)} ${f(x + w / 2)},${f(y - h4 - 22 * s)} ${f(x + w + 5 * s)},${f(y - h4)}" fill="${roof2}"/>${win}`;
    };
    const wall = pick(t, "#e8dcc0", "#c99a7a", "#3a3550"), roof = pick(t, "#a04a3a", "#6e2e3a", "#1f1a30");
    const village = (x, y, s) => Array.from({ length: 5 }, (_, i) => house(x + i * 58 * s + r(-8, 8), y + r(-4, 6), s * r(0.85, 1.1), wall, roof)).join("");
    const gob = (x, y, s, delay) => `<g class="bg-walk" style="animation-delay:${delay}s"><g transform="translate(${f(x)} ${f(y - 200 * s)}) scale(${s})" opacity="${pick(t, 0.85, 0.7, 0.55)}">${characterSvg("goblin", "opp", "ember").replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "")}</g></g>`;
    const mono = pick(t, "#5a566e", "#3a2a40", "#14142a");
    return `<defs>${grad("sk", sky)}${floorDefs(stone)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === "night" ? milkyWay() + stars(150, 460) + moon(260, 140, 44) : t === "sunset" ? horizonGlow(580, "#ffa060") + sun(820, 560, 110, "#ffe2a0", "#ffb070") + clouds(6, 120, 320, "#f7c7b0", 0.55) : sun(1300, 130, 50, "#fffbe0", "#fff6c0") + clouds(8, 70, 300, "#ffffff", 0.9)}
    ${mountains(540, 120, pick(t, "#8aa0c0", "#7a5070", "#1c2244"), 2)}
    ${haze(560, pick(t, "#e6f0fa", "#ffb890", "#2a3060"), 0.5)}
    ${mountains(590, 70, pick(t, "#6f86a8", "#5a3a58", "#151a36"), 0.6)}
    ${haze(620, pick(t, "#e6f0fa", "#ffb890", "#2a3060"), 0.4)}
    ${hills(630, 24, pick(t, "#86a868", "#7a5a5a", "#1e2a2a"), 0.5)}
    ${[[180, 0.7], [560, 0.85], [700, 0.6], [930, 0.75], [1420, 0.8]].map(([x, k]) => `<path d="M${f(x - 90 * k)} ${f(646)} L${f(x + 90 * k)} 640 L${f(x + 110 * k)} 660 L${f(x - 70 * k)} 668 Z" fill="${pick(t, "#c8b456", "#a07040", "#2a2a24")}" opacity=".75"/><path d="M${f(x - 80 * k)} 652 L${f(x + 96 * k)} 646 M${f(x - 76 * k)} 659 L${f(x + 102 * k)} 653" stroke="${pick(t, "#a8923e", "#7a5030", "#1a1a18")}" stroke-width="2" opacity=".6"/>`).join("")}
    ${village(240, 640, 0.6)}${village(1060, 634, 0.55)}
    ${[[120, 640, 70], [420, 650, 90], [640, 636, 60], [900, 642, 80], [1180, 644, 64], [1360, 650, 96], [1540, 642, 72]].map(([x, y, h4]) => leafyTree(x, y, h4, pick(t, "#4f8a3a", "#6a6034", "#132a1e"), pick(t, "#5a4030", "#3a2420", "#141418"))).join("")}
    <g transform="translate(1200 600)"><rect x="-6" y="0" width="12" height="80" fill="${pick(t, "#cbb79a", "#5a3a3a", "#1a1a28")}"/><g class="bg-spin">${[0, 90, 180, 270].map((a) => `<rect x="-4" y="-64" width="8" height="64" fill="${pick(t, "#8a6a4a", "#3a2228", "#141420")}" transform="rotate(${a + 20})"/>`).join("")}</g></g>
    ${hills(680, 26, pick(t, "#6a9a4c", "#4a5a3a", "#162418"), 1.7)}
    ${[90, 380, 720, 890, 1210, 1500].map((x) => bush(x + r(-20, 20), 700 + r(0, 10), r(18, 30), pick(t, "#4a7a34", "#5a4a2e", "#10241a"))).join("")}
    ${gob(280, 700, 0.42, 0)}${gob(380, 704, 0.38, 6)}${gob(1250, 706, 0.4, 3)}
    ${standingStones(mono, "#ffb070", lit, pick(t, "#4f8a3a", "#6a6a34", "#1e4a2c"))}
    ${brazier(330, 742, 1.2, mono, lit)}${brazier(1270, 742, 1.2, mono, lit)}
    ${grass(70, 700, 760, pick(t, "#3f6a2a", "#33472b", "#0b140c"))}
    ${arenaFloor(t, stone, pick(t, "#ffffff", "#ffe0c0", "#e8e6ff"), pick(t, "#4a3a6a", "#ffffff", "#ffffff"))}
    ${t === "night" ? fireflies(14, 600, 800, "#fff2a0") : ""}`;
  }
  function castle(t) {
    const sky = pick(t, [[0, "#5a86c0"], [0.6, "#a8c2e0"], [1, "#e2eaf2"]], [[0, "#1e0c24"], [0.4, "#7a2232"], [0.72, "#d0582e"], [1, "#f4a050"]], [[0, "#04061c"], [0.6, "#161f4e"], [1, "#2e3474"]]);
    const stoneC = pick(t, "#5e5e74", "#2c1a26", "#13132a"), roof = pick(t, "#3e3e5e", "#1c0e1a", "#1c1b36");
    const lit = t !== "day";
    const wallG = lin([[0, lighten(stoneC, 0.14)], [0.55, stoneC], [1, dk2(stoneC, 0.25)]], 0, 0, 1, 0);
    const footG = lin([[0, "#000", 0], [1, "#000", 0.35]]);
    const roofG = lin([[0, lighten(roof, 0.15)], [0.5, roof], [1, dk2(roof, 0.3)]], 0, 0, 1, 0);
    const tower = (x, w, h4) => `<rect x="${x}" y="${640 - h4}" width="${w}" height="${h4}" fill="${wallG}"/><rect x="${x}" y="${640 - h4 * 0.35}" width="${w}" height="${h4 * 0.35}" fill="${footG}"/><rect x="${x}" y="${640 - h4}" width="${w}" height="${h4}" fill="url(#bricks)"/><rect x="${x + w * 0.62}" y="${640 - h4}" width="${w * 0.38}" height="${h4}" fill="#000" opacity=".2"/><rect x="${x + 3}" y="${640 - h4}" width="5" height="${h4}" fill="#fff" opacity=".07"/><polygon points="${x - 10},${640 - h4} ${x + w / 2},${560 - h4} ${x + w + 10},${640 - h4}" fill="${roofG}"/><path d="M${x - 4} ${640 - h4 - 14} H${x + w + 4} M${x + 6} ${640 - h4 - 34} H${x + w - 6} M${x + 16} ${640 - h4 - 54} H${x + w - 16}" stroke="${dk2(roof, 0.35)}" stroke-width="1.5" opacity=".6"/><rect x="${x - 6}" y="${640 - h4}" width="${w + 12}" height="6" fill="${dk2(stoneC, 0.2)}"/>` + Array.from({ length: Math.floor(h4 / 70) }, (_, i) => `<rect x="${x + w / 2 - 6}" y="${640 - h4 + 40 + i * 70}" width="12" height="20" rx="6" fill="${lit ? "#ffcf6a" : "#20202e"}" opacity="${lit ? rnd() > 0.35 ? 0.95 : 0.2 : 0.6}"${lit ? ' class="bg-flicker slow"' : ""}/>`).join("") + `<line x1="${x + w / 2}" y1="${560 - h4}" x2="${x + w / 2}" y2="${520 - h4}" stroke="${roof}" stroke-width="3"/><path class="bg-flag" d="M${x + w / 2} ${520 - h4} q 18 6 34 0 q -16 10 0 18 q -18 -6 -34 0 z" fill="#b8263a"/>`;
    const soldier = (x, y, s, flip2, weapon) => {
      const c = pick(t, "#2c3038", "#1a0c10", "#06070e");
      const g = `<circle cx="0" cy="-58" r="7"/><path d="M-7 -62 q7 -14 14 0 z"/><rect x="-8" y="-50" width="16" height="30" rx="4"/><rect x="-8" y="-22" width="6" height="22"/><rect x="2" y="-22" width="6" height="22"/><ellipse cx="-11" cy="-36" rx="7" ry="11"/>` + (weapon === "spear" ? `<line x1="10" y1="-10" x2="16" y2="-92" stroke="${c}" stroke-width="3"/><polygon points="13,-92 16,-104 19,-92"/>` : `<g class="bg-swing"><line x1="8" y1="-40" x2="34" y2="-70" stroke="${c}" stroke-width="3"/></g>`);
      return `<g transform="translate(${x} ${y}) scale(${flip2 ? -s : s} ${s})" fill="${lin([[0, lighten(c, 0.2)], [1, c]], 0, 0, 1, 0)}" opacity="${pick(t, 0.75, 0.85, 0.9)}">${g}<rect x="-8" y="-50" width="5" height="30" fill="#fff" opacity=".12"/></g>`;
    };
    const army = (x0, flip2) => Array.from({ length: 9 }, (_, i) => soldier(x0 + (flip2 ? -1 : 1) * (i * 34 + r(-6, 6)), 718 + i % 3 * 6, 0.9 + i % 3 * 0.08, flip2, i % 4 === 3 ? "sword" : "spear")).join("");
    const cloth = pick(t, "#a8243a", "#7a1424", "#5a1020"), gold = pick(t, "#e8c060", "#c89a40", "#8a7040");
    const banner = (x) => `<line x1="${x}" y1="720" x2="${x}" y2="470" stroke="${pick(t, "#3a3030", "#1a0c10", "#0a0a14")}" stroke-width="7"/><circle cx="${x}" cy="466" r="6" fill="${gold}"/><g class="bg-flag"><path d="M${x} 480 h62 v130 l-31 -22 l-31 22 Z" fill="${lin([[0, lighten(cloth, 0.15)], [0.5, cloth], [1, dk2(cloth, 0.3)]], 0, 0, 1, 0)}"/><path d="M${x + 4} 486 h54 v118 l-27 -19 l-27 19 Z" fill="none" stroke="${gold}" stroke-width="2.5"/><circle cx="${x + 31}" cy="530" r="15" fill="none" stroke="${gold}" stroke-width="2.5"/><path d="M${x + 31} 518 l4 9 h9 l-7 6 l3 9 l-9 -5 l-9 5 l3 -9 l-7 -6 h9 z" fill="${gold}"/></g>`;
    const stone = pick(t, ["#8a8494", "#5e5868", "#2e2a36"], ["#5a3a3a", "#3e2628", "#1e1012"], ["#2a2a40", "#1c1c30", "#0c0c18"]);
    const bricks = `<pattern id="bricks" width="44" height="28" patternUnits="userSpaceOnUse"><path d="M0 0.5 H44 M0 14.5 H44 M22 0 V14 M0 14 V28 M44 14 V28" stroke="${dk2(stoneC, 0.45)}" stroke-width="1.6" fill="none" opacity=".7"/><rect x="2" y="2" width="18" height="11" fill="#fff" opacity=".05"/><rect x="24" y="16" width="18" height="11" fill="#000" opacity=".08"/><path d="M2 2.5 H20 M24 16.5 H42" stroke="#fff" stroke-width="1" opacity=".12"/></pattern>`;
    return `<defs>${grad("sk", sky)}${floorDefs(stone)}${DEFS}${bricks}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === "night" ? milkyWay() + stars(160, 460) + moon(300, 150, 52, "#e8e6ff") : t === "sunset" ? horizonGlow(560, "#ff5a2a") + sun(1250, 520, 90, "#ffb070", "#ff5a3a") + clouds(5, 120, 300, "#ff9a7a", 0.4) : sun(1280, 140, 44, "#fffbe6", "#ffffff") + clouds(7, 80, 280, "#ffffff", 0.85)}
    ${mountains(600, 110, pick(t, "#7686a2", "#3a1622", "#0e1030"), 1.3)}
    ${haze(620, pick(t, "#dfe8f4", "#ff7a5a", "#1a2050"), 0.5)}
    ${hills(640, 18, pick(t, "#4e5e4c", "#1a0a12", "#10122a"))}
    <rect x="560" y="430" width="480" height="210" fill="${lin([[0, lighten(stoneC, 0.08)], [1, dk2(stoneC, 0.15)]])}"/><rect x="560" y="430" width="480" height="210" fill="url(#bricks)"/><rect x="560" y="560" width="480" height="80" fill="${lin([[0, "#000", 0], [1, "#000", 0.3]])}"/>
    ${[[596, 432, 150], [640, 432, 90], [985, 432, 170], [508, 330, 260], [1092, 320, 220], [770, 220, 120]].map(([ix, iy, len]) => ivy(ix, iy, len, pick(t, "#4f7d3a", "#3e3e22", "#14281a"))).join("")}
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${560 + i * 40}" y="414" width="22" height="18" fill="${stoneC}"/>`).join("")}
    ${tower(500, 90, 330)}${tower(1010, 90, 330)}${tower(740, 120, 420)}
    <path d="M760 640 L760 590 Q800 548 840 590 L840 640 Z" fill="${pick(t, "#2a2a38", "#0c0408", "#05050f")}"/>
    <path d="M770 586 V640 M784 572 V640 M798 568 V640 M812 570 V640 M826 578 V640 M762 600 H838 M762 616 H838 M762 630 H838" stroke="${pick(t, "#55505e", "#3a2a22", "#2a2a40")}" stroke-width="2.5"/>
    <path d="M752 640 L752 588 Q800 538 848 588 L848 640" stroke="${dk2(stoneC, 0.3)}" stroke-width="6" fill="none"/>
    <rect x="560" y="430" width="480" height="10" fill="#000" opacity=".22"/>
    <path d="M400 712 C 440 660, 470 640, 492 636 L1108 636 C 1130 640, 1160 660, 1200 712 Z" fill="${pick(t, "#5a6c57", "#22101a", "#14162e")}"/>
    <path d="M488 634 L1112 634 L1124 652 L476 652 Z" fill="${dk2(stoneC, 0.25)}"/>
    <path d="M760 652 L840 652 L860 712 L740 712 Z" fill="${pick(t, "#8a7a62", "#3a2420", "#1c1a2a")}" opacity=".85"/>
    ${Array.from({ length: 9 }, (_, i) => `<ellipse cx="${f(470 + i * 82 + r(-10, 10))}" cy="${f(664 + r(0, 14))}" rx="${f(r(18, 30))}" ry="${f(r(7, 11))}" fill="${dk2(stoneC, 0.15)}" opacity=".7"/>`).join("")}
    ${lit ? `<g class="bg-flicker" filter="url(#glow)"><circle cx="740" cy="600" r="6" fill="#ffb347"/><circle cx="860" cy="600" r="6" fill="#ffb347"/></g>` : ""}
    ${haze(700, pick(t, "#e8eef6", "#ff8a5a", "#1a2050"), 0.25)}
    ${grass(30, 655, 715, pick(t, "#5e7a48", "#3a2a24", "#121a22"), 10, 22)}
    ${banner(380)}${banner(1158)}
    ${army(40, false)}${army(1560, true)}
    ${standingStones(pick(t, "#6a6878", "#3a2228", "#16162a"), "#ffb060", lit, pick(t, "#4f8a3a", "#6a6a34", "#1e4a2c"))}
    ${brazier(270, 740, 1.4, pick(t, "#4a4a56", "#2a1418", "#121222"), lit || true)}${brazier(1330, 740, 1.4, pick(t, "#4a4a56", "#2a1418", "#121222"), lit || true)}
    ${arenaFloor(t, stone, pick(t, "#ffb060", "#ffb060", "#a8a0ff"), pick(t, "#ffffff", "#fff0d0", "#e8e6ff"))}
    <g class="bg-spark" filter="url(#glow)"><circle cx="262" cy="700" r="5" fill="#fff6c0"/><circle cx="1338" cy="700" r="5" fill="#fff6c0" style="animation-delay:2.7s"/></g>
    ${t === "night" ? fireflies(8, 520, 700, "#ffcf6a") : ""}`;
  }
  function worldtree(t) {
    const sky = pick(t, [[0, "#4a8ad8"], [0.5, "#9cd0f2"], [0.85, "#e8f6ff"], [1, "#ffffff"]], [[0, "#2a1450"], [0.45, "#b04a78"], [0.8, "#f4a060"], [1, "#ffe0a0"]], [[0, "#0b0626"], [0.45, "#2a1260"], [0.8, "#1d4f78"], [1, "#2c8a8a"]]);
    const bark0 = pick(t, "#6a4a32", "#4a2e1c", "#1e1828");
    const barkC = bark0, leaf = pick(t, ["#3f9a5a", "#56b86a", "#7ad68a"], ["#7a5a3a", "#a0703a", "#e0a050"], ["#14402f", "#1b5a3c", "#2f9e6a"]);
    const lit = t !== "day";
    const stone = pick(t, ["#7a8a8a", "#56645e", "#2a3430"], ["#6a5450", "#4a3a3a", "#22181a"], ["#1e3038", "#14222a", "#081016"]);
    const canopy = (cx, cy, rx, ry) => {
      const ball = (base, hi) => rad([[0, lighten(base, hi)], [0.55, base], [1, dk2(base, 0.4)]]);
      const deep = dk2(leaf[0], 0.5);
      let s = "";
      const limbs = [[790, 330, 560, 250], [790, 330, 690, 170], [810, 330, 900, 150], [810, 330, 1050, 240], [800, 330, 360, 270], [800, 330, 1240, 280]];
      s += limbs.map(([x0, y0, x1, y1]) => `<path d="M${x0} ${y0} Q${f((x0 + x1) / 2)} ${f(Math.min(y0, y1) - 30)} ${x1} ${y1}" stroke="${dk2(barkC, 0.25)}" stroke-width="16" fill="none" stroke-linecap="round"/>`).join("");
      for (let i = 0; i < 22; i++) {
        const a = i / 22 * Math.PI * 2 + r(-0.1, 0.1);
        s += leafBlob(cx + Math.cos(a) * rx * 0.78, cy + 20 + Math.sin(a) * ry * 0.72, r(70, 95), ball(deep, 0.1));
      }
      for (let i = 0; i < 18; i++) {
        const a = r(0, Math.PI * 2), d = Math.sqrt(rnd());
        s += leafBlob(cx + Math.cos(a) * rx * 0.6 * d, cy + 20 + Math.sin(a) * ry * 0.55 * d, r(80, 110), ball(deep, 0.1));
      }
      const layers = [
        // n, k (how far out), dx, dy, rMin, rMax, colour, highlight
        [70, 0.92, 0, 30, 38, 60, dk2(leaf[0], 0.2), 0.12],
        [80, 0.8, -15, 0, 32, 52, leaf[1], 0.18],
        [60, 0.62, -45, -35, 26, 44, leaf[2], 0.25],
        [34, 0.42, -80, -65, 16, 28, lighten(leaf[2], 0.15), 0.3]
      ];
      for (const [n, k, dx, dy, r0, r1, c, hi] of layers) {
        const g = ball(c, hi);
        for (let i = 0; i < n; i++) {
          const a = r(0, Math.PI * 2), d = Math.sqrt(rnd());
          s += leafBlob(cx + dx + Math.cos(a) * rx * 0.82 * k * d, cy + dy + Math.sin(a) * ry * 0.78 * k * d, r(r0, r1), g);
        }
      }
      return s + glints(cx - 40, cy - 30, rx * 0.6, ry * 0.5, lighten(leaf[2], 0.35));
    };
    const island = (x, y, s) => {
      const dirt = pick(t, "#7a5a42", "#5a3a2a", "#1e1a2a");
      const bits = Array.from({ length: 4 }, (_, i) => `<rect x="${f(x + r(-20, 20) * s)}" y="${f(y + (80 + i * 14) * s)}" width="${f(r(3, 6) * s)}" height="${f(r(3, 6) * s)}" fill="${dirt}" transform="rotate(${f(r(0, 45))} ${f(x)} ${f(y + 90 * s)})"/>`).join("");
      return `<g class="bg-float"><ellipse cx="${x}" cy="${y + 40 * s}" rx="${70 * s}" ry="${30 * s}" fill="${pick(t, "#9ff5ff", "#ffd0a0", "#7affd0")}" opacity=".25" filter="url(#blur20)"/><path d="M${x - 60 * s} ${y} Q${x} ${y - 16 * s} ${x + 60 * s} ${y} L${x + 20 * s} ${y + 50 * s} L${x} ${y + 80 * s} L${x - 24 * s} ${y + 46 * s} Z" fill="${lin([[0, lighten(dirt, 0.12)], [1, dk2(dirt, 0.45)]], 0, 0, 0.6, 1)}"/><path d="M${x - 30 * s} ${y + 10 * s} L${x - 10 * s} ${y + 40 * s} M${x + 20 * s} ${y + 8 * s} L${x + 6 * s} ${y + 50 * s}" stroke="${dk2(dirt, 0.35)}" stroke-width="2" fill="none"/><ellipse cx="${x}" cy="${y - 4 * s}" rx="${62 * s}" ry="${12 * s}" fill="${rad([[0, lighten(leaf[1], 0.2)], [1, dk2(leaf[1], 0.2)]], 0.4, 0.3, 0.8)}"/><path d="M${x - 40 * s} ${y + 4 * s} q4 ${12 * s} 0 ${20 * s} M${x + 30 * s} ${y + 4 * s} q-3 ${10 * s} 1 ${16 * s}" stroke="${leaf[0]}" stroke-width="3" fill="none" stroke-linecap="round"/><g class="bg-flicker">${bits}</g>${lit ? `<circle cx="${x}" cy="${y + 70 * s}" r="${4 * s}" fill="#9ff5c8" filter="url(#glow)" class="bg-flicker"/>` : ""}</g>`;
    };
    const mono = pick(t, "#4a5a5a", "#3a2a30", "#122028");
    return `<defs>${grad("sk", sky)}${radial("glow2", [[0, pick(t, "#ffffff", "#ffe0a0", "#9ff5c8"), 0.55], [1, "#ffffff", 0]])}${grad("aurora", [[0, "#7affc8", 0], [0.5, "#7affc8", 0.35], [1, "#b07aff", 0]], false)}${floorDefs(stone)}${DEFS}<clipPath id="trunkClip"><path d="M690 650 Q712 520 690 430 L910 430 Q888 520 910 650 Z"/></clipPath></defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === "night" ? stars(200, 560, "#d7ccff") + `<g class="bg-aurora" filter="url(#blur20)"><path d="M-100 200 C 300 80, 700 260, 1100 140 S 1600 120, 1800 200 L1800 280 C 1300 200, 900 340, 500 240 S 0 260, -100 300 Z" fill="url(#aurora)"/></g>` + moon(1300, 150, 50, "#fff4d6") : t === "sunset" ? horizonGlow(500, "#ffb070") + sun(300, 470, 80, "#fff0c0", "#ffb070") : sun(1300, 140, 50, "#ffffff", "#fff8d0") + rays(1300, 140, "#ffffff", 0.18)}
    ${mountains(600, 150, pick(t, "#7a9ac0", "#6a4a72", "#1a2a4a"), 0.2)}
    ${haze(620, pick(t, "#e8f4ff", "#ffc0a0", "#2a3a6a"), 0.5)}
    ${island(260, 300, 0.9)}${island(1340, 360, 0.7)}${island(1080, 220, 0.5)}
    <ellipse cx="800" cy="600" rx="700" ry="200" fill="url(#glow2)"/>
    ${clouds(8, 600, 660, pick(t, "#ffffff", "#ffd8c0", "#efeaff"), pick(t, 0.8, 0.55, 0.2), "bg-drift slow")}
    <path d="M690 650 Q712 520 690 430 Q660 360 580 320 L640 318 Q720 350 750 290 Q760 360 800 330 Q840 360 850 290 Q880 350 960 318 L1020 320 Q940 360 910 430 Q888 520 910 650 Z" fill="${lin([[0, lighten(barkC, 0.15)], [0.35, barkC], [0.8, dk2(barkC, 0.3)], [1, dk2(barkC, 0.45)]], 0, 0, 1, 0)}"/>
    <path d="M800 650 L790 440 Q800 400 812 440 L820 650Z" fill="#000" opacity=".18"/><path d="M700 640 Q706 520 696 440 L720 440 Q728 520 724 640Z" fill="#fff" opacity=".07"/>
    <g clip-path="url(#trunkClip)">${bark(690, 420, 220, 240, bark0)}</g>
    ${canopy(800, 240, 470, 170)}
    ${hills(690, 20, pick(t, "#3a6a4a", "#4a3a2a", "#0e2420"), 1)}
    <path d="M560 716 C 640 680, 720 664, 800 662 C 880 664, 960 680, 1040 716 Z" fill="${dk2(pick(t, "#3a6a4a", "#4a3a2a", "#0e2420"), 0.12)}"/>
    <path d="M691 644 Q688 652 676 662 Q600 676 470 712 L540 716 Q630 694 716 684 Q740 704 700 724 L780 724 Q790 700 800 690 Q812 700 820 724 L900 724 Q860 704 884 684 Q970 694 1060 716 L1130 712 Q1000 676 924 662 Q912 652 909 644 Z" fill="${lin([[0, lighten(barkC, 0.15)], [0.35, barkC], [0.8, dk2(barkC, 0.3)], [1, dk2(barkC, 0.45)]], 0.1667, 0, 0.8333, 0)}"/>
    <path d="M691 644 Q688 652 676 662 Q600 676 470 712 L540 716 Q630 694 716 684 Q740 704 700 724 L780 724 Q790 700 800 690 Q812 700 820 724 L900 724 Q860 704 884 684 Q970 694 1060 716 L1130 712 Q1000 676 924 662 Q912 652 909 644 Z" fill="${lin([[0, "#000", 0], [0.4, "#000", 0.05], [1, "#000", 0.4]])}"/>
    <path d="M690 652 Q640 672 520 706 M700 662 Q650 680 560 708 M716 690 Q726 706 712 720 M800 696 Q796 708 790 722 M884 690 Q874 706 888 720 M910 652 Q960 672 1080 706 M900 662 Q950 680 1040 708" stroke="${lighten(barkC, 0.32)}" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".75"/>
    <path d="M694 670 Q640 686 580 704 M906 670 Q960 686 1020 704 M760 680 Q770 700 760 716 M840 680 Q830 700 842 716" stroke="${dk2(barkC, 0.5)}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".6"/>
    ${[[600, 696, 26], [740, 684, 18], [858, 688, 20], [1e3, 698, 24]].map(([mx, my, mw]) => `<ellipse cx="${mx}" cy="${my}" rx="${mw}" ry="5" fill="${pick(t, "#4f8a3a", "#6a6a34", "#1e4a2c")}" opacity=".8"/>`).join("")}
    <path d="M676 664 Q600 680 500 712 M924 664 Q1000 680 1100 712" stroke="#000" stroke-opacity=".18" stroke-width="5" fill="none"/>
    ${lit ? `<g filter="url(#glow)" class="bg-flicker slow">${Array.from({ length: 7 }, (_, i) => `<path d="M${740 + i * 20} 680 q${r(-40, 40)} 30 ${r(-120, 120)} 50" stroke="#9ff5c8" stroke-width="2" fill="none" opacity=".7"/>`).join("")}</g>` : ""}
    ${standingStones(mono, "#7affd0", lit, pick(t, "#4f8a3a", "#6a6a34", "#1e4a2c"))}
    ${grass(60, 700, 760, pick(t, "#2f6a3a", "#4a3a24", "#0a1a14"))}
    ${fireflies(t === "night" ? 50 : 20, 420, 760, pick(t, "#ffffff", "#fff0b0", "#b9ffd8"))}
    ${arenaFloor(t, stone, pick(t, "#2adfa0", "#7affd0", "#6affd0"), pick(t, "#0a5a40", "#f0fff8", "#e0fff4"))}
    ${t === "night" ? fireflies(24, 80, 520, "#bff8ff") : ""}`;
  }
  var SCENES = { forest, swamp, plains, castle, worldtree };
  function scene(id, t) {
    seed = [...id + t].reduce((s, c) => s + c.charCodeAt(0) * 97, 7);
    const key = `${id}-${t}`;
    gdefs = [];
    gn = 0;
    const body = SCENES[id](t);
    return (body + `<defs>${gdefs.join("")}</defs>`).replace(/id="(\w+)"/g, `id="${key}-$1"`).replace(/url\(#(\w+)\)/g, `url(#${key}-$1)`);
  }
  var cache2 = /* @__PURE__ */ new Map();
  var BG_FADE_MS = 3200;
  var fadeTimer = 0;
  function paintBackground(el11, id, time = "night", fade = false) {
    const key = `${id}-${time}`;
    if (el11.dataset.key === key) return;
    el11.dataset.key = key;
    if (!cache2.has(key)) cache2.set(key, `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" aria-hidden="true">${scene(id, time)}</svg>`);
    const swap = () => {
      const layer = document.createElement("div");
      layer.className = "bg-layer";
      layer.innerHTML = cache2.get(key);
      const old = el11.querySelector(".bg-layer");
      if (old) old.replaceWith(layer);
      else el11.prepend(layer);
      el11.dataset.bg = id;
      el11.dataset.time = time;
    };
    clearTimeout(fadeTimer);
    el11.querySelector(".bg-veil")?.remove();
    if (!fade || !el11.querySelector(".bg-layer")) return swap();
    const veil = document.createElement("div");
    veil.className = "bg-veil";
    veil.style.animationDuration = `${BG_FADE_MS}ms`;
    el11.append(veil);
    fadeTimer = window.setTimeout(() => {
      swap();
      fadeTimer = window.setTimeout(() => veil.remove(), BG_FADE_MS / 2 + 100);
    }, BG_FADE_MS / 2);
  }
  function sceneSvg(id, time) {
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">${scene(id, time)}</svg>`;
  }
  function backgroundThumb(id, time = "night") {
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" class="still">${scene(id, time)}</svg>`;
  }
  var TIME_KEY = "kb:bgtime";
  function getTimePref() {
    try {
      const v = localStorage.getItem(TIME_KEY);
      return v === "day" || v === "sunset" || v === "night" ? v : "auto";
    } catch {
      return "auto";
    }
  }
  function setTimePref(t) {
    try {
      localStorage.setItem(TIME_KEY, t);
    } catch {
    }
  }

  // src/client/arena.ts
  var KEY3 = "kb:3d";
  var GAME_SCREENS = /* @__PURE__ */ new Set(["battle", "deck"]);
  var api2 = null;
  var loading2 = null;
  var onScreen = false;
  var bg = { id: "forest", time: "night" };
  var pending2 = null;
  var webgl = (() => {
    try {
      const c = document.createElement("canvas");
      return !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      return false;
    }
  })();
  var hasWebgl = () => webgl;
  var upright = () => innerWidth <= innerHeight || innerWidth < 560;
  var arenaSupported = () => webgl && (upright() ? innerWidth >= 280 : innerHeight >= 260);
  var smallOrTouch = () => innerWidth < 900 || innerHeight < 560 || matchMedia("(pointer: coarse)").matches;
  function arenaQuality() {
    let v = null;
    try {
      v = localStorage.getItem(KEY3);
    } catch {
    }
    const q = v === "off" ? "off" : v === "lite" ? "lite" : v === "on" || v === "full" ? "full" : smallOrTouch() ? "lite" : "full";
    return q === "full" && smallOrTouch() && innerWidth < 900 ? "lite" : q;
  }
  var arenaPref = () => arenaQuality() !== "off";
  function setArenaQuality(q) {
    try {
      localStorage.setItem(KEY3, q === "full" ? "on" : q);
    } catch {
    }
    if (q === "off") {
      deactivate();
      return;
    }
    api2?.setLite(q === "lite");
    if (onScreen) void activate();
  }
  var wanted = () => arenaPref() && arenaSupported();
  var arena = () => api2 && onScreen && wanted() ? api2 : null;
  var bundle = null;
  function loadBundle() {
    bundle ?? (bundle = new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = `/arena3d.js?v=${encodeURIComponent(document.documentElement.dataset.v ?? "")}`;
      s.onload = () => resolve(true);
      s.onerror = () => {
        bundle = null;
        resolve(false);
      };
      document.head.append(s);
    }));
    return bundle;
  }
  function load2() {
    if (api2) return Promise.resolve(api2);
    loading2 ?? (loading2 = loadBundle().then((ok) => {
      const create = globalThis.KWArena3D;
      api2 = ok ? create?.(document.getElementById("arena3d"), { lite: arenaQuality() === "lite" }) ?? null : null;
      if (api2 && location.search.includes("debug3d")) globalThis.__arena = api2;
      if (!api2) loading2 = null;
      return api2;
    }));
    return loading2;
  }
  async function staffPreview(canvas) {
    if (!webgl || !await loadBundle()) return null;
    const create = globalThis.KWStaffPreview;
    return create?.(canvas) ?? null;
  }
  async function arenaPreview(canvas) {
    if (!webgl || !await loadBundle()) return null;
    const create = globalThis.KWArena3D;
    return create?.(canvas, { lite: arenaQuality() === "lite", preview: true }) ?? null;
  }
  function preloadArena() {
    if (wanted()) setTimeout(() => void load2(), 1500);
  }
  function deactivate() {
    api2?.setActive(false);
    document.body.classList.remove("has-3d");
  }
  async function activate() {
    if (!wanted()) return;
    const a = await load2();
    if (!a || !onScreen || !wanted()) return;
    if (pending2) {
      a.setup({ ...pending2, bgSvg: sceneSvg(bg.id, bg.time), bgKey: `${bg.id}-${bg.time}`, time: bg.time });
      pending2 = null;
    }
    document.body.classList.add("has-3d");
    sizeCanvas();
    a.setActive(true);
  }
  function sizeCanvas() {
    const c = document.getElementById("arena3d");
    if (!c) return;
    const kb = document.body.classList.contains("game-kb") ? (document.getElementById("gameKb")?.getBoundingClientRect().height ?? 0) / uiScale() : 0;
    c.style.width = `${Math.ceil(viewW())}px`;
    c.style.height = `${Math.ceil(viewH() - kb)}px`;
  }
  addEventListener("resize", () => {
    if (onScreen) sizeCanvas();
  });
  function arenaScreen(screen2) {
    onScreen = GAME_SCREENS.has(screen2);
    if (onScreen) void activate();
    else deactivate();
  }
  var reflowTimer = 0;
  function reflow() {
    clearTimeout(reflowTimer);
    reflowTimer = window.setTimeout(() => {
      if (!onScreen) return;
      if (wanted()) void activate();
      else deactivate();
    }, 250);
  }
  addEventListener("resize", reflow);
  addEventListener("orientationchange", reflow);
  screen.orientation?.addEventListener?.("change", reflow);
  function setArenaBackground(id, time) {
    bg = { id, time };
  }
  var whoById = /* @__PURE__ */ new Map();
  function arenaLook(id, yaw, pitch) {
    const who = whoById.get(id);
    if (who) arena()?.look(who, yaw, pitch);
  }
  function configure(s) {
    whoById.clear();
    if (s.opp) whoById.set(s.opp.id, "opp");
    for (const a of s.allies) whoById.set(a.id, `ally:${a.id}`);
    pending2 = s;
    if (api2 && onScreen && wanted()) void activate();
  }
  function arenaForBattle(mode4, players2, you2) {
    const me3 = players2.find((p) => p.id === you2);
    const others = players2.filter((p) => p.id !== you2);
    const art = (p) => ({ id: p.id, name: p.name, character: p.avatar, flame: flameColor(p.flame), staff: p.staff });
    configure({
      layout: "battle",
      me: me3 ? art(me3) : { id: you2, character: "wizard" },
      opp: mode4 === "boss" || !others[0] ? null : art(others[0]),
      allies: mode4 === "boss" ? others.map(art) : [],
      boss: mode4 === "boss" ? { id: "boss", svg: dragonSvg() } : null
    });
  }
  var deckKey = "";
  function arenaForDeck(v) {
    const me3 = v.players.find((p) => p.id === v.you);
    const opp = v.players.find((p) => p.id !== v.you);
    const key = `${me3?.id}:${me3?.character}:${me3?.staff}:${opp?.id}:${opp?.character}:${opp?.staff}`;
    if (key === deckKey && (!api2 || pending2 === null)) return;
    deckKey = key;
    configure({
      layout: "deck",
      me: { id: v.you, name: me3?.name, character: me3?.character ?? "wizard", flame: flameColor(me3?.flame), staff: me3?.staff },
      opp: opp ? { id: opp.id, name: opp.name, character: opp.character ?? "wizard", flame: flameColor(opp.flame), staff: opp.staff } : null,
      allies: [],
      boss: null
    });
  }
  var resetArenaDeck = () => {
    deckKey = "";
  };

  // src/client/ui.ts
  var $ = (id) => document.getElementById(id);
  function h(tag, cls = "", text, attrs = {}) {
    const el11 = document.createElement(tag);
    if (cls) el11.className = cls;
    if (text !== void 0) el11.textContent = String(text);
    for (const [k, v] of Object.entries(attrs)) el11.setAttribute(k, v);
    return el11;
  }
  var append = (parent, ...kids) => {
    parent.append(...kids);
    return parent;
  };
  var SCREENS = ["auth", "menu", "queue", "admin", "modes", "lobby", "prep", "battle", "results", "study", "review", "quiz", "passage", "customize", "deck", "history", "progress", "daily", "friends"];
  var screenListener = () => {
  };
  var onScreen2 = (fn) => {
    screenListener = fn;
  };
  var currentScreen = () => SCREENS.find((s) => !$(s).hidden);
  var show = (screen2) => {
    SCREENS.forEach((s) => $(s).hidden = s !== screen2);
    document.body.dataset.screen = screen2;
    scrollTo(0, 0);
    screenListener(screen2);
  };
  var errorTimer = 0;
  var setError = (text) => {
    $("error").textContent = text;
    clearTimeout(errorTimer);
    if (text) errorTimer = window.setTimeout(() => {
      $("error").textContent = "";
    }, 1e4);
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
    const tick2 = () => {
      const left = Math.max(0, end - performance.now());
      onFrame(left, totalMs > 0 ? left / totalMs : 0);
      if (left > 0) timers.set(slot, requestAnimationFrame(tick2));
    };
    tick2();
  }
  function bigTimer(slot, el11, leftMs, totalMs, warnMs = 5e3) {
    if (!el11.querySelector(".tt-fg")) el11.innerHTML = '<svg viewBox="0 0 44 44" aria-hidden="true"><circle class="tt-bg" cx="22" cy="22" r="19"/><circle class="tt-fg" cx="22" cy="22" r="19"/></svg><b></b>';
    const fg = el11.querySelector(".tt-fg"), b = el11.querySelector("b");
    el11.hidden = false;
    let shown3 = -1;
    countdown(slot, leftMs, (left, frac) => {
      const s = Math.ceil(left / 1e3);
      if (s !== shown3) {
        shown3 = s;
        b.textContent = String(s);
      }
      fg.style.strokeDashoffset = String(119.4 * (1 - Math.max(0, Math.min(1, frac))));
      el11.classList.toggle("low", left > 0 && left <= warnMs);
      el11.classList.toggle("out", left <= 0);
    }, totalMs);
  }
  function hideTimer(slot, el11) {
    stopCountdown(slot);
    el11.hidden = true;
    el11.classList.remove("low", "out");
  }
  function stopCountdown(slot) {
    for (const [k, id] of timers) if (!slot || k === slot) {
      cancelAnimationFrame(id);
      timers.delete(k);
    }
  }
  var rtts = /* @__PURE__ */ new Map();
  function netQuality(rtt) {
    if (rtt === null || rtt === void 0) return 0;
    return rtt < 150 ? 3 : rtt < 400 ? 2 : 1;
  }
  function paintNet(el11) {
    const rtt = rtts.get(el11.dataset.net ?? "");
    const q = netQuality(rtt);
    el11.className = `net q${q}`;
    el11.title = rtt == null ? "Connection: offline / measuring\u2026" : `Connection: ${["", "poor", "medium", "good"][q]} (${rtt} ms)`;
  }
  function netBars(playerId) {
    const el11 = h("span", "net");
    el11.dataset.net = playerId;
    el11.innerHTML = "<i></i><i></i><i></i>";
    paintNet(el11);
    return el11;
  }
  function setNet(map) {
    for (const [id, rtt] of Object.entries(map)) rtts.set(id, rtt);
    document.querySelectorAll(".net[data-net]").forEach(paintNet);
  }
  var borderCls = (b) => b && b !== "none" ? ` bd bd-${b}` : "";
  function picEl(url, cls = "pic", border) {
    if (!url) return "";
    const img = h("img", cls + borderCls(border), void 0, { src: url, alt: "", loading: "lazy", decoding: "async" });
    img.onerror = () => img.remove();
    return img;
  }
  var beginnerFlag = false;
  var kanaBeginner = () => beginnerFlag;
  var BEGINNER_LOCK = `Master hiragana first (Study spells \u2192 \u3072\u3089\u304C\u306A), then tick "I've mastered hiragana" in Settings`;
  function lockLevelChip(label, lv) {
    if (!beginnerFlag || isKanaLevel(lv)) return label;
    label.classList.add("locked");
    label.classList.remove("on");
    const i = label.querySelector("input");
    if (i) {
      i.disabled = true;
      i.checked = false;
    }
    label.title = BEGINNER_LOCK;
    return label;
  }
  function setBadges(ids) {
    $("ppBadges").replaceChildren(...[badgeRowFn?.(ids)].filter((x) => !!x));
  }
  var badgeRowFn = null;
  var useBadgeRow = (fn) => {
    badgeRowFn = fn;
  };
  function setProfile(p) {
    if (!p) return;
    setBadges(p.badges);
    beginnerFlag = isKanaBeginner(p.unlocks);
    const lx = levelXp(p.xp);
    $("whoLv").textContent = String(lx.level);
    $("whoLevel").textContent = `Lv ${lx.level} \xB7 ${lx.into.toLocaleString()} / ${lx.need.toLocaleString()} XP`;
    $("ppWins").textContent = String(p.wins ?? 0);
    $("ppLosses").textContent = String(p.losses ?? 0);
    const games = (p.wins ?? 0) + (p.losses ?? 0);
    $("ppRate").textContent = games ? `${Math.round((p.wins ?? 0) / games * 100)}%` : "\u2014";
    $("ppLearned").textContent = String(p.learned);
    $("ppToday").textContent = String(p.learnedToday ?? 0);
    $("ppStreak").textContent = String(p.streak ?? 0);
    $("ppBestStreak").textContent = String(Math.max(p.bestStreak ?? 0, p.streak ?? 0));
    for (const id of ["whoPic", "ppPic"]) {
      const el11 = $(id);
      el11.replaceChildren(p.pic ? picEl(p.pic, "pic fill") : "\u2726");
      el11.classList.toggle("has-pic", !!p.pic);
      el11.className = el11.className.replace(/\s*\bbd(-\w+)?\b/g, "") + borderCls(p.border);
    }
    $("picRemove").hidden = !p.pic;
    $("whoXp").style.width = `${levelProgress(p.xp) * 100}%`;
    $("whoXp").parentElement.title = `${lx.into} / ${lx.need} XP to level ${lx.level + 1}`;
  }
  var toastTimer = 0;
  function hideToast() {
    clearTimeout(toastTimer);
    $("toast").hidden = true;
  }
  var toastWired = false;
  function wireToast(el11) {
    toastWired = true;
    let x0 = 0, y0 = 0, id = -1;
    el11.addEventListener("pointerdown", (e) => {
      id = e.pointerId;
      x0 = e.clientX;
      y0 = e.clientY;
    });
    el11.addEventListener("pointermove", (e) => {
      if (e.pointerId !== id) return;
      const dx = e.clientX - x0, dy = Math.min(0, e.clientY - y0);
      el11.style.transform = `translate(calc(-50% + ${dx}px), ${dy}px)`;
      el11.style.opacity = String(Math.max(0.2, 1 - (Math.abs(dx) + Math.abs(dy)) / 220));
    });
    const end = (e) => {
      if (e.pointerId !== id) return;
      id = -1;
      const far = Math.abs(e.clientX - x0) > 70 || y0 - e.clientY > 40;
      el11.style.transform = "";
      el11.style.opacity = "";
      if (far) hideToast();
    };
    el11.addEventListener("pointerup", end);
    el11.addEventListener("pointercancel", end);
  }
  function toast(text, ms = 3500) {
    const el11 = $("toast");
    if (!toastWired) wireToast(el11);
    const x = h("button", "toast-x", "\u2715");
    x.setAttribute("aria-label", "Close");
    x.onclick = (e) => {
      e.stopPropagation();
      hideToast();
    };
    el11.replaceChildren(h("span", "toast-t", text), x);
    el11.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => el11.hidden = true, ms);
  }
  var myName = () => $("whoName").textContent ?? "";
  function setUser(user2) {
    $("whoami").hidden = !user2;
    $("whoName").textContent = user2?.username ?? "";
    $("ppName").textContent = user2?.username ?? "";
    $("whoRole").hidden = user2?.role !== "admin";
    $("adminBtn").hidden = user2?.role !== "admin";
  }
  function setNetStatus(text) {
    $("netStatus").hidden = !text;
    $("netStatus").textContent = text ?? "";
  }
  function setAudioButtons(radio, sfx2) {
    const set2 = (id, on, icon, label) => {
      $(id).setAttribute("aria-pressed", String(on));
      $(id).replaceChildren(h("span", "ico", icon), h("span", "lbl", ` ${label} ${on ? "on" : "off"}`));
    };
    set2("radioBtn", radio, "", "Music");
    set2("sfxBtn", sfx2, "", "Sounds");
  }
  var sceneStaff = null;
  function paintScenes(staff = sceneStaff) {
    sceneStaff = staff;
    for (const scene3 of document.querySelectorAll(".duel-scene")) {
      if (scene3.childElementCount) {
        for (const side of ["me", "opp"]) {
          const s = scene3.querySelector(`.wizard.${side} .sprite`);
          if (s) s.innerHTML = wizardSvg(side, staff);
        }
        continue;
      }
      for (const side of ["me", "opp"]) {
        const w = h("div", `wizard ${side}`);
        const s = h("div", "sprite");
        s.innerHTML = wizardSvg(side, staff);
        w.append(s, h("div", "ground"));
        scene3.append(w);
      }
      for (const cls of ["orb", "orb b"]) {
        const orb = h("div", cls, randomSpellKanji());
        orb.lang = "ja";
        orb.addEventListener("animationiteration", () => {
          orb.textContent = randomSpellKanji();
        });
        scene3.append(orb);
      }
    }
  }
  var SPELL_KANJI = [..."\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u5DDD\u96F7\u98A8\u5149\u95C7\u708E\u6C37\u5263\u9B54\u529B\u661F\u7A7A\u96F2\u96EA\u82B1\u9F8D\u795E\u96E8\u6D77\u68EE\u77F3\u9244\u7ADC\u9B3C\u5922\u547D\u5FC3\u5200\u5F13\u76FE\u738B\u5929\u5730\u6CE2\u5D50\u9727\u5F71"];
  var randomSpellKanji = () => SPELL_KANJI[Math.floor(Math.random() * SPELL_KANJI.length)];
  function setAuthTab(tab2) {
    const login = tab2 === "login";
    $("tabLogin").classList.toggle("on", login);
    $("tabRegister").classList.toggle("on", !login);
    $("tabLogin").setAttribute("aria-selected", String(login));
    $("tabRegister").setAttribute("aria-selected", String(!login));
    $("authSubmit").textContent = login ? "Log in" : "Create account";
    $("authPass").autocomplete = login ? "current-password" : "new-password";
    $("authHint").textContent = login ? "" : "Login: 3\u201316 letters, numbers or _. Password: at least 6 characters.";
    $("authError").textContent = "";
  }
  function ago(t) {
    const m = Math.max(0, Math.round((Date.now() - t) / 6e4));
    return m < 60 ? `${m} min` : m < 60 * 24 ? `${Math.round(m / 60)} h` : `${Math.round(m / 1440)} d`;
  }
  function showAdmin(users, me3, db, onToggle, onRole, onDelete) {
    const banned = users.filter((u) => u.banned).length;
    const online = users.filter((u) => u.online).length;
    $("adminInfo").textContent = `${online} online now \xB7 ${users.length} accounts \xB7 ${banned} banned`;
    users = [...users].sort((a, b) => Number(!!b.online) - Number(!!a.online) || (b.lastSeen ?? 0) - (a.lastSeen ?? 0) || String(b.loginDay ?? "").localeCompare(String(a.loginDay ?? "")));
    const st = $("adminStorage");
    st.className = "storage " + (db.persistent ? "ok" : "warn");
    st.textContent = db.storage === "postgres" ? "\u2713 Accounts, XP and study sets are saved in the Postgres database \u2014 updates and restarts keep them." : db.persistent ? `Saved to a local file (${db.storage}).` : "No database connected: accounts, XP and study sets are saved on the server disk, which Render wipes on every deploy and restart. Set DATABASE_URL (Neon) in Render \u2192 Environment.";
    $("userRows").replaceChildren(
      ...users.map((u) => {
        const action = h("td");
        if (u.role !== "admin" && u.id !== me3.id) {
          const b = h("button", "pill" + (u.banned ? "" : " danger"), u.banned ? "Unban" : "Ban");
          b.onclick = () => onToggle(u);
          action.append(b);
        }
        if (onRole && u.id !== me3.id && u.username.toLowerCase() !== "admin" && !u.banned) {
          const r2 = h("button", "pill" + (u.role === "admin" ? "" : " promote"), u.role === "admin" ? "Remove admin" : "Make admin");
          r2.onclick = () => onRole(u);
          action.append(r2);
        }
        if (onDelete && u.role !== "admin" && u.id !== me3.id) {
          const d = h("button", "pill danger del-user", "\u{1F5D1} Delete", { title: "Delete this account and all its progress" });
          d.onclick = () => onDelete(u);
          action.append(d);
        }
        const presence = append(
          h("td", "presence " + (u.online ? "on" : "off")),
          h("span", "dot"),
          append(
            h("span", "pr-txt"),
            h("b", "", u.online ? "Online" : "Offline"),
            h("small", "", u.online ? `${u.activity ?? ""}${u.onlineSince ? ` \xB7 ${ago(u.onlineSince)}` : ""}` : u.lastSeen ? `seen ${ago(u.lastSeen)} ago` : u.loginDay ? `last day: ${u.loginDay}` : "never logged in")
          )
        );
        return append(
          h("tr", u.online ? "is-online" : ""),
          presence,
          h("td", "", u.username + (u.id === me3.id ? " (you)" : "")),
          h("td", "", u.role),
          h("td", "num", `Lv ${u.level ?? 0}`),
          h("td", "num", (u.xp ?? 0).toLocaleString()),
          h("td", "num", `${u.learned ?? 0} / ${u.cards ?? 0}`),
          h("td", "", new Date(u.createdAt).toLocaleDateString(locale())),
          h("td", u.banned ? "status-ban" : "status-ok", u.banned ? "Banned" : "Active"),
          action
        );
      })
    );
    show("admin");
  }
  var tile = (k, cls = "") => h("span", "g-tile " + cls, k, { lang: "ja" });
  var GUIDES = {
    reading: {
      title: "How Kanji Reading works",
      pic: () => append(h("div", "g-pic"), tile("\u6F22\u5B57"), h("span", "g-arrow", "\u2192"), tile("\u304B\u3093\u3058", "ok"), h("span", "g-or", "or"), h("span", "g-tile ok", "kanji")),
      steps: [
        ["\u{1F4D6}", "60 s to study your 10 words (reading + meaning). Then they disappear."],
        ["\u2328\uFE0F", "A kanji appears: type its reading in kana or romaji, Enter."],
        ["\u2694\uFE0F", "Right = a spell at your opponent. Faster and in a row = more damage (combo up to \xD71.5; 5 in a row sets you on fire \u{1F525})."],
        ["\u{1F4A8}", "Wrong or Skip (Esc) = a miss; the answer is shown and the word comes back later."],
        ["\u2764\uFE0F", "Your HP depends on how hard your opponent hits (their levels). Most HP after 5 min wins."]
      ]
    },
    writing: {
      title: "How Kanji Writing works",
      pic: () => append(h("div", "g-pic"), h("span", "g-hint", "\u304B\u3093\u3058 \u2014 kanji"), h("span", "g-arrow", "\u2192"), append(h("span", "g-pad"), tile("\u6F22"), tile("\u5B57"))),
      steps: [
        ["\u{1F441}\uFE0F", "Look at the kanji (up to 3.5 s), then press CAST! (or Enter): it vanishes and the pad and keyboard appear. Pasting is off."],
        ["\u{1F58C}\uFE0F", "Write the whole word on the pad, left to right (one cell per character) \u2014 or type it with a Japanese keyboard."],
        ["\u2705", "Only kanji count (kana only at the \u304B\u306A level). Messy is fine \u2014 it\u2019s judged by shape."],
        ["\u2694\uFE0F", "Right = damage, with the same combo and speed bonus as Reading."]
      ]
    },
    boss: {
      title: "How Boss Elimination works",
      pic: () => append(h("div", "g-pic"), h("span", "g-emoji", "\u{1F9D9}\u{1F9D9}\u{1F9D9}\u{1F9D9}"), h("span", "g-arrow", "\u2694"), h("span", "g-emoji", "\u{1F409}")),
      steps: [
        ["\u{1F465}", "Up to 4 players (friends or AI) against the Black Dragon; the online queue always makes a full party of 4. Its HP grows with the party."],
        ["\u2328\uFE0F", "Each of you gets your own kanji: type the reading. Right answers hit the dragon."],
        ["\u{1F9B4}", "A mistake gets you clawed (\u221245)."],
        ["\u{1F525}", "Every 30 s it breathes fire on everyone (\u2212110) \u2014 unless you are on fire yourself (5 in a row): then you are immune."],
        ["\u{1F3C6}", "Slay it within 5 minutes. If everyone falls, the dragon wins."]
      ]
    },
    rapid: {
      title: "How 1v1 Rapid works",
      pic: () => append(h("div", "g-pic"), tile("\u65E9\u3044"), h("span", "g-arrow", "\u2192"), h("span", "g-tile ok", "\u306F\u3084\u3044 \u26A1")),
      steps: [
        ["\u{1F3AF}", "Both players get the same kanji \u2014 no study phase."],
        ["\u26A1", "First correct reading (kana or romaji) hits the other player."],
        ["\u{1F501}", "Wrong? Try again until the 12 s round ends."],
        ["\u2764\uFE0F", "Same HP for both. Last wizard standing wins."]
      ]
    }
  };
  function modeGuideNodes(mode4) {
    const g = GUIDES[mode4];
    const ol = h("ol", "g-flow");
    for (const [icon, text] of g.steps) ol.append(append(h("li"), h("span", "g-ic", icon), h("span", "", text)));
    return [h("h3", "", g.title), g.pic(), ol, h("p", "g-foot", "Playing with AI gives half XP; a forfeit gives none.")];
  }
  function renderModeGuide(mode4) {
    if (mode4 === "deck") return;
    $("modeGuide").replaceChildren(...modeGuideNodes(mode4));
  }
  function showLobby(code2, mode4, players2, you2, hostId, maxPlayers, minPlayers2) {
    $("code").textContent = code2;
    $("lobbyMode").textContent = MODE_LABEL[mode4];
    $("lobbyPlayers").replaceChildren(
      ...players2.map((p) => {
        const li = h("li");
        const av = h("span", "who-av");
        if (mode4 !== "deck") av.innerHTML = avatarSvg(p.avatar, p.id === you2 ? "me" : "opp", p.staff);
        else av.hidden = true;
        const who = h("span", "who", p.id === you2 ? `${p.name} (you)` : p.name);
        if (p.id !== you2) markProfile(who, p);
        li.append(av, picEl(p.pic, "pic", p.border), who);
        if (p.bot) li.append(h("span", "tag ai", p.bot === "BEGINNER" ? "AI \xB7 beginner" : `AI \xB7 knows ${p.bot}`));
        else li.append(netBars(p.id), h("span", "lv", `Lv ${p.level}`));
        if (p.bot && you2 === hostId) {
          const x = h("button", "pill rm-bot", "\u2715", { title: "Remove this AI" });
          x.dataset.removeBot = p.id;
          li.append(x);
        }
        if (p.id === hostId) li.append(h("span", "tag", "host"));
        if (!p.online) li.append(h("span", "tag off", "away \u2014 seat kept"));
        if (mode4 === "deck") li.append(h("span", "tag " + (p.ready ? "ready" : "notready"), p.ready ? "\u2713 Ready" : "Not ready"));
        else if (p.bot) li.append(append(h("div", "meta"), h("span", "", levelsText(p.levels)), h("span", "hpv", `${p.maxHp} HP`)));
        else if (!p.bot) li.append(append(h("div", "meta"), h("span", "", levelsText(p.levels)), h("span", "hpv", `${p.maxHp} HP`)));
        return li;
      }),
      ...Array.from({ length: Math.max(0, maxPlayers - players2.length) }, () => h("li", "empty", mode4 === "boss" ? "Waiting for a teammate (optional)\u2026" : "Waiting for opponent\u2026"))
    );
    const mine = players2.find((p) => p.id === you2)?.levels ?? [];
    $("levelChips").replaceChildren(
      ...LEVELS.map((lv) => {
        const on = mine.includes(lv);
        const label = h("label", "chip" + (on ? " on" : ""), LEVEL_LABEL[lv]);
        const box = h("input", "", void 0, { type: "checkbox", value: lv });
        box.checked = on;
        label.prepend(box);
        return lockLevelChip(label, lv);
      })
    );
    $("levelsHint").textContent = mode4 === "deck" ? "Deck Duel deals its cards from both players' All spells (2 of each level N5\u2013N1 from each). Your level picks only change your character here." : mode4 === "rapid" ? "Shared levels: both players race on the same kanji, so a change here changes it for everyone." : mode4 === "boss" ? "Each player picks their own. The dragon gets tougher when the party picks harder levels." : mode4 === "writing" ? "Each player picks their own. You will write these words by hand. Harder levels hit harder \u2014 so your opponent gets more HP." : "Each player picks their own. \u3072\u3089\u304C\u306A and \u30AB\u30BF\u30AB\u30CA = the two kana alphabets, answered in romaji. Harder levels hit harder \u2014 so your opponent gets more HP.";
    const isHost = you2 === hostId;
    const canStart = players2.length >= minPlayers2;
    $("addBot").hidden = !isHost || players2.length >= maxPlayers;
    const deck2 = mode4 === "deck";
    $("levels").hidden = deck2;
    $("deckGuide").hidden = !deck2;
    $("modeGuide").hidden = deck2;
    if (!deck2) renderModeGuide(mode4);
    const meReady = !!players2.find((p) => p.id === you2)?.ready;
    $("readyBtn").hidden = !deck2;
    $("readyBtn").textContent = meReady ? "Not ready" : "Ready";
    $("readyBtn").classList.toggle("is-ready", meReady);
    $("readyBtn").dataset.ready = meReady ? "1" : "";
    if (deck2) {
      $("start").hidden = true;
      $("lobbyStatus").textContent = !canStart ? "Share the code, or add an AI opponent \u2014 then press Ready. The duel starts when both are ready." : meReady ? "Waiting for your opponent to be ready\u2026" : "Press Ready \u2014 the duel starts when both players are ready.";
      show("lobby");
      return;
    }
    $("start").hidden = !isHost;
    $("start").disabled = !canStart;
    $("start").textContent = mode4 === "boss" ? players2.length === 1 ? "Start solo" : `Start \u2014 party of ${players2.length}` : "Start battle";
    $("lobbyStatus").textContent = !canStart ? "Share the code with a friend, or add an AI player to start." : isHost ? mode4 === "boss" && players2.length < maxPlayers ? `Start now, or wait for more teammates (up to ${maxPlayers}).` : "" : "Waiting for the host to start\u2026";
    show("lobby");
  }
  var selectedLevels = () => [...document.querySelectorAll("#levelChips input")].filter((i) => i.checked).map((i) => i.value);
  function showPrep(pool, durationMs, mode4) {
    $("prepSub").textContent = mode4 === "writing" ? "Memorise how each word is written. In battle you only get the meaning (and a half-second glimpse)." : "Memorise the readings. They vanish when the battle starts.";
    $("studyGrid").replaceChildren(
      ...pool.map((w) => append(h("div", "card" + (w.mine ? " mine" : "")), h("div", "lv", LEVEL_LABEL[w.level]), ...w.mine ? [h("div", "mine-tag", "\u2605 yours", { title: "From your All spells" })] : [], h("div", [...w.kanji].length >= 4 ? "k long" : "k", w.kanji, { lang: "ja" }), h("div", "r", w.reading, { lang: "ja" }), h("div", "m", w.meaning)))
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
    const pct2 = max > 0 ? hp / max * 100 : 0;
    const bar = append(h("div", "hp" + (pct2 <= 25 ? " low" : ""), void 0, { role: "meter", "aria-valuemin": "0", "aria-valuemax": String(max), "aria-valuenow": String(hp), "aria-label": label }), h("div"));
    bar.firstElementChild.style.width = `${pct2}%`;
    return bar;
  }
  function partyPanel(el11, players2, you2) {
    const ordered = [...players2].sort((a, b) => a.id === you2 ? -1 : b.id === you2 ? 1 : 0);
    el11.replaceChildren(...ordered.map((p) => {
      const row = h("div", "party-row" + (p.id === you2 ? " me" : "") + (p.hp <= 0 ? " down" : ""));
      const pn = h("span", "n", p.id === you2 ? `${p.name} (you)` : p.name);
      if (p.id !== you2) markProfile(pn, p);
      const name = append(
        h("div", "pname"),
        picEl(p.pic, "pic", p.border),
        pn,
        netBars(p.id),
        h("span", "lv", `Lv ${p.level}`),
        h("span", "combo", p.combo >= 2 ? `\xD7${p.combo}` : "")
      );
      row.append(name, thickBar(p.hp, p.maxHp, "ally", p.hp <= 0 ? "down" : `${p.hp} / ${p.maxHp}`));
      return row;
    }));
  }
  function thickBar(hp, max, side, text) {
    const pct2 = max > 0 ? Math.max(0, Math.min(100, hp / max * 100)) : 0;
    const bar = h("div", `tbar ${side}${pct2 <= 25 ? " low" : ""}`, void 0, { role: "meter", "aria-valuemin": "0", "aria-valuemax": String(max), "aria-valuenow": String(hp) });
    const fill2 = h("div", "fill");
    fill2.style.width = `${pct2}%`;
    bar.append(fill2, h("span", "tbar-txt", text));
    return bar;
  }
  function fighterCard(el11, p, label, emptyText) {
    if (!p) {
      el11.replaceChildren(h("div", "name", emptyText));
      return;
    }
    const nameEl = h("span", "n", label);
    if (!label.endsWith("(you)")) markProfile(nameEl, p);
    const name = append(h("div", "name"), append(h("span", "n"), picEl(p.pic, "pic", p.border), nameEl, netBars(p.id), h("span", "lv", `Lv ${p.level}`)), h("span", "combo", p.combo >= 2 ? `\xD7${p.combo} combo` : ""));
    el11.replaceChildren(name, hpBar(p.hp, p.maxHp, `${p.name} HP`), append(h("div", "hpnum", `${p.hp} / ${p.maxHp} HP`), h("span", "lvs", `\xB7 ${levelsText(p.levels)}${p.online ? "" : " \xB7 away"}`)));
  }
  var battleMode = "reading";
  function renderFighters(players2, you2, boss) {
    const me3 = players2.find((p) => p.id === you2);
    const other = players2.find((p) => p.id !== you2);
    $("meCard").classList.toggle("party", battleMode === "boss");
    $("oppCard").hidden = battleMode === "boss";
    if (battleMode === "boss") {
      partyPanel($("meCard"), players2, you2);
      const bar = $("bossBar");
      if (boss) bar.replaceChildren(h("div", "bname", boss.name), thickBar(boss.hp, boss.maxHp, "enemy", `${boss.hp} / ${boss.maxHp}`));
      for (const p of players2) if (p.id !== you2) allyEl(p.id)?.classList.toggle("onfire", p.combo >= 5);
    } else {
      fighterCard($("meCard"), me3, me3 ? `${me3.name} (you)` : "", "");
      fighterCard($("oppCard"), other, other?.name ?? "", "Opponent left");
      $("wizOpp").classList.toggle("onfire", (other?.combo ?? 0) >= 5);
    }
    $("wizMe").classList.toggle("onfire", (me3?.combo ?? 0) >= 5);
    const a3 = arena();
    if (a3) for (const p of players2) a3.onfire(p.id === you2 ? "me" : battleMode === "boss" ? `ally:${p.id}` : "opp", p.combo >= 5 && p.hp > 0, flameColor(p.flame));
    if (battleMode === "boss") {
      for (const p of players2) if (p.hp <= 0) knockOut(p.id === you2 ? "me" : `ally:${p.id}`);
    }
    const combo = me3 && me3.hp > 0 ? me3.combo : 0;
    const hud = $("comboHud");
    hud.hidden = combo < 2;
    hud.classList.toggle("hot", combo >= 5);
    hud.style.setProperty("--flame", flameColor(me3?.flame));
    if (combo >= 2) hud.replaceChildren(h("b", "", `\xD7${combo}`), h("span", "", "COMBO"));
  }
  var allyEl = (id) => document.querySelector(`#allies .wizard[data-pid="${CSS.escape(id)}"]`);
  var actorEl = (a) => a.startsWith("ally:") ? allyEl(a.slice(5)) ?? $("wizMe") : $(a === "me" ? "wizMe" : a === "opp" ? "wizOpp" : "dragon");
  function retrigger(el11, cls, ms) {
    el11.classList.remove(cls);
    void el11.offsetWidth;
    el11.classList.add(cls);
    setTimeout(() => el11.classList.remove(cls), ms);
  }
  function setupArena(mode4, players2, you2) {
    battleMode = mode4;
    const boss = mode4 === "boss";
    const others = players2.filter((p) => p.id !== you2);
    $("wizOpp").hidden = boss;
    $("dragon").hidden = !boss;
    const meP = players2.find((p) => p.id === you2);
    for (const [id, side, p] of [["wizMe", "me", meP], ["wizOpp", "opp", others[0]]]) {
      const w = $(id);
      w.className = `wizard ${side}`;
      paintFlame(w, p?.flame);
      w.querySelector(".sprite").innerHTML = avatarSvg(p?.avatar ?? "wizard", side, p?.staff);
    }
    $("allies").replaceChildren(...(boss ? others : []).map((p) => {
      const w = h("div", "wizard ally");
      w.dataset.pid = p.id;
      paintFlame(w, p.flame);
      const sprite = h("div", "sprite");
      sprite.innerHTML = avatarSvg(p.avatar, "ally", p.staff);
      w.append(h("div", "aura"), sprite, h("div", "ground"));
      return w;
    }));
    $("arena").dataset.party = String(boss ? players2.length : 0);
    arenaForBattle(mode4, players2, you2);
    $("dragon").className = "dragon";
    $("dragon").querySelector(".sprite").innerHTML = dragonSvg();
    $("fire").hidden = true;
    $("breathWarn").hidden = true;
    $("typeArea").hidden = mode4 === "writing";
    if (mode4 === "writing") mountWriteArea("writeSlot");
    else $("writeArea").hidden = true;
    $("meaningPrompt").hidden = true;
  }
  function floatText(target, text, cls) {
    const arena2 = $("arena");
    const a = zrect(arena2);
    const t = zrect(target);
    const f2 = h("div", "float " + cls, text);
    f2.style.left = `${t.left - a.left + t.width / 2 - 20}px`;
    f2.style.top = `${t.top - a.top}px`;
    arena2.append(f2);
    setTimeout(() => f2.remove(), 1e3);
  }
  function castSpell(caster, target, kanji, damage, friendly, crit = false) {
    if (caster === "me") gemGone();
    const a3 = arena();
    if (a3) return a3.cast(caster, target, kanji, { damage, crit });
    const c = actorEl(caster), t = actorEl(target);
    retrigger(c, "casting", 450);
    const arena2 = $("arena");
    const a = zrect(arena2);
    const cr = zrect(c);
    const tr2 = zrect(t);
    const spell = h("div", "spell" + (friendly ? "" : " foe"), kanji, { lang: "ja" });
    arena2.append(spell);
    const fromRight = cr.left > tr2.left;
    const from = { x: fromRight ? cr.left - a.left - 10 : cr.right - a.left - 30, y: cr.top - a.top + cr.height * 0.15 };
    const to = { x: tr2.left - a.left + tr2.width / 2 - 20, y: tr2.top - a.top + tr2.height * 0.4 };
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduced ? 400 : 850;
    const mid = { x: (from.x + to.x) / 2, y: Math.min(from.y, to.y) - 70 };
    const anim = spell.animate(
      [
        { transform: `translate(${from.x}px, ${from.y}px) scale(.5)`, opacity: 0.2 },
        { transform: `translate(${from.x + (mid.x - from.x) * 0.3}px, ${from.y + (mid.y - from.y) * 0.6}px) scale(1.35)`, opacity: 1, offset: 0.18 },
        { transform: `translate(${mid.x}px, ${mid.y}px) scale(1.6)`, opacity: 1, offset: 0.55 },
        { transform: `translate(${to.x}px, ${to.y}px) scale(2)`, opacity: 1 }
      ],
      { duration: dur, easing: "cubic-bezier(.45,.05,.75,.4)" }
      // gentle start, quickening into the hit
    );
    const trail = reduced ? 0 : window.setInterval(() => {
      const r2 = zrect(spell);
      const dot = h("div", "spell-trail" + (friendly ? "" : " foe"));
      dot.style.left = `${r2.left - a.left + r2.width / 2}px`;
      dot.style.top = `${r2.top - a.top + r2.height / 2}px`;
      arena2.append(dot);
      setTimeout(() => dot.remove(), 500);
    }, 40);
    return new Promise((resolve) => {
      anim.onfinish = () => {
        clearInterval(trail);
        spell.remove();
        const burst = h("div", "spell-burst" + (friendly ? "" : " foe"));
        burst.style.left = `${to.x + 20}px`;
        burst.style.top = `${to.y + 20}px`;
        arena2.append(burst);
        setTimeout(() => burst.remove(), 600);
        retrigger(t, "hurt", 700);
        if (!reduced) retrigger(arena2, "shake", 350);
        floatText(t, `\u2212${damage}`, friendly ? "" : "taken");
        resolve();
      };
    });
  }
  var gemGone = () => $("wizMe").classList.add("gemless");
  var gemBack = () => $("wizMe").classList.remove("gemless");
  function fizzle(who) {
    if (who === "me") gemGone();
    arena()?.fizzle(who);
    const w = actorEl(who);
    retrigger(w, "fizzle", 650);
    const puff = h("div", "puff");
    w.append(puff);
    setTimeout(() => puff.remove(), 1e3);
  }
  function clawHit(victim, damage) {
    const a3 = arena();
    if (a3) return a3.claw(victim, damage);
    retrigger($("dragon"), "claw", 520);
    setTimeout(() => {
      const v = actorEl(victim);
      retrigger(v, "hurt", 520);
      floatText(v, `\u2212${damage}`, "taken");
    }, 180);
  }
  function breathWarning(inMs) {
    const el11 = $("breathWarn");
    el11.hidden = false;
    $("dragon").classList.add("inhale");
    arena()?.inhale(true);
    countdown("breath", inMs, (left) => el11.textContent = `The dragon inhales\u2026 ${Math.ceil(left / 1e3)}`);
  }
  function breathFire(damage, victims, immune = []) {
    stopCountdown("breath");
    $("breathWarn").hidden = true;
    $("dragon").classList.remove("inhale");
    const a3 = arena();
    if (a3) {
      a3.breath(victims, damage);
      setTimeout(() => {
        for (const v of immune) a3.float(v, "IMMUNE", "#ffd479");
      }, 450);
      return;
    }
    const fire = $("fire");
    const arena2 = zrect($("arena"));
    const d = zrect($("dragon"));
    const mouthX = d.left - arena2.left + d.width * 0.08;
    const mouthY = d.top - arena2.top + d.height * 0.37;
    const height = Math.max(160, arena2.height * 0.7);
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
      for (const v of immune) floatText(actorEl(v), "IMMUNE", "immune");
    }, 450);
  }
  function knockOut(who) {
    const el11 = actorEl(who);
    if (el11.classList.contains("ko")) return;
    arena()?.ko(who);
    el11.classList.add("ko");
    el11.classList.remove("onfire");
  }
  function showBattle(mode4, players2, boss, you2, countdownMs, battleMs, onTick) {
    clearStudy();
    setupArena(mode4, players2, you2);
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
      let last3 = -1;
      countdown("cd", countdownMs, (left) => {
        const n = Math.ceil(left / 1e3);
        if (n !== last3) {
          last3 = n;
          onTick(n);
        }
        cd.textContent = left > 0 ? String(n) : "\u6226\uFF01";
        if (left <= 0) setTimeout(() => cd.hidden = true, 500);
      });
    } else cd.hidden = true;
    setTimeout(() => countdown("battle", battleMs, (left) => $("battleClock").textContent = clockText(left)), countdownMs);
  }
  function resumeBattle(players2, boss, you2, battleMs) {
    renderFighters(players2, you2, boss);
    $("battleClock").textContent = clockText(battleMs);
    countdown("battle", battleMs, (left) => $("battleClock").textContent = clockText(left));
  }
  var answerMode = "reading";
  var currentAnswerMode = () => answerMode;
  function showChallenge(c) {
    answerMode = c.answer;
    const k = $("kanji");
    k.classList.remove("cast", "gone");
    k.textContent = c.kanji;
    const wf = $("wordFrom");
    wf.hidden = !c.from;
    wf.textContent = c.from ? c.from === "you" ? "\u2605 From your spells" : `From ${c.from}'s spells` : "";
    wf.classList.toggle("mine", c.from === "you");
    setFeedback(null);
    countdown("challenge", c.timeLimitMs, (_l, frac) => $("challengeBar").style.width = `${frac * 100}%`);
    bigTimer("challengeRing", $("turnTimer"), c.timeLimitMs, c.timeLimitMs, Math.min(5e3, c.timeLimitMs / 3));
    if (c.answer === "writing") {
      const mp = $("meaningPrompt");
      mp.hidden = false;
      mp.replaceChildren(h("span", "mp-reading", c.reading ?? "", { lang: "ja" }), h("span", "", ` \u2014 ${c.meaning ?? ""}`), h("small", "", `write ${c.charCount} kanji`));
      const ime = $("imeInput");
      ime.value = "";
      ime.disabled = true;
      $("writeArea").hidden = true;
      $("castGo").hidden = false;
      return;
    }
    const input2 = $("answer");
    input2.disabled = false;
    setAnswerLocked(false);
    input2.value = "";
    input2.placeholder = c.answer === "romaji" ? "romaji, then Enter" : "\u304B\u306A or romaji, then Enter";
    input2.lang = c.answer === "romaji" ? "en" : "ja";
    setInputHint(c.answer === "romaji" ? "Hiragana spell \u2014 answer in romaji" : "");
    $("skip").disabled = false;
    input2.focus();
  }
  function setInputHint(text, warn = false) {
    const el11 = $("inputHint");
    el11.textContent = text;
    el11.classList.toggle("warn", warn);
  }
  function setCharSlots(total, _written, active2, shape = "") {
    const kana = shape.replace(/□/g, "");
    const hint = h("span", "slots-hint", total > 1 ? `Write all ${total} kanji, left to right` : "Write the kanji");
    const parts = [hint];
    if (kana) {
      const sh = h("span", "slots-shape", "", { lang: "ja" });
      sh.title = "the kana is written for you";
      for (const c of shape) sh.append(c === "\u25A1" ? h("i", "slot-box") : h("b", "", c));
      parts.push(sh);
    }
    $("charSlots").replaceChildren(...parts);
    $("padNext").textContent = "Cast \u2726";
    for (const id of ["padUndo", "padClear", "padSkip", "padNext"]) $(id).disabled = !active2;
  }
  function startWritingStep() {
    $("kanji").classList.add("gone");
    $("castGo").hidden = true;
    mountWriteArea("writeSlot");
    const ime = $("imeInput");
    ime.disabled = false;
  }
  function setAnswerLocked(on) {
    const input2 = $("answer");
    input2.classList.toggle("locked", on);
    if (on) input2.dataset.locked = "1";
    else delete input2.dataset.locked;
  }
  var answerLocked = () => {
    const i = $("answer");
    return i.disabled || i.dataset.locked === "1";
  };
  $("answer").addEventListener("beforeinput", (e) => {
    if ($("answer").dataset.locked === "1") e.preventDefault();
  });
  function lockInput() {
    stopCountdown("challenge");
    hideTimer("challengeRing", $("turnTimer"));
    $("castGo").hidden = true;
    setAnswerLocked(true);
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
  function setFeedback(f2) {
    const el11 = $("feedback");
    if (!f2) {
      el11.replaceChildren();
      el11.className = "feedback";
      return;
    }
    el11.className = "feedback " + (f2.correct ? "good" : "bad");
    $("kanji").classList.remove("gone");
    $("meaningPrompt").hidden = true;
    const word2 = (cls) => append(h("span", cls), h("span", "rk", f2.kanji, { lang: "ja" }), h("span", "rr", f2.reading, { lang: "ja" }), h("span", "", f2.meaning));
    if (f2.correct) {
      $("kanji").classList.add("cast");
      const combo = f2.combo >= 2 ? ` \xB7 \xD7${f2.combo} combo` : "";
      const big = h("span", "big" + (f2.crit ? " crit" : ""), f2.crit ? `\u2726 CRIT! ${f2.damage} damage` : `\u2713 CAST! ${f2.damage} damage`);
      el11.replaceChildren(big, word2("mean"), h("span", "sub2", `${secs(f2.responseMs ?? 0)}${combo}`));
    } else {
      if (f2.retry) {
        el11.replaceChildren(h("span", "big", "\u2717 Not quite \u2014 try again!"));
        return;
      }
      const title = f2.beaten ? "Opponent was faster!" : f2.skipped ? "\u21B7 Skipped" : f2.timedOut ? "\u2717 Too slow!" : "\u2717 MISS!";
      const kids = [h("span", "big", title), word2("reveal")];
      if (f2.recognized && !f2.skipped && !f2.timedOut) kids.push(h("span", "sub2", `The pad read: ${f2.recognized}`));
      el11.replaceChildren(...kids);
      if (answerMode === "writing" && !f2.beaten) showWrongStrokes(el11, f2.kanji);
    }
  }
  function openStrokeDialog(word2, reading, meaning2) {
    const d = $("strokeDialog");
    $("sdWord").textContent = word2;
    $("sdInfo").textContent = `${reading} \u2014 ${meaning2}`;
    void showStrokeOrder($("sdBox"), word2);
    if (!d.open) d.showModal();
  }
  $("sdClose").onclick = () => $("strokeDialog").close();
  function showWrongStrokes(box, word2) {
    if (!/[\p{Script=Han}々]/u.test(word2)) return;
    const div = h("div", "fb-strokes");
    box.append(div);
    const strokes2 = [...word2].length;
    void showStrokeOrder(div, word2, { stepMs: Math.max(90, Math.min(220, 2200 / (strokes2 * 6))), caption: "How to write it" });
  }
  function logLine(text, kanji) {
    const el11 = $("log");
    el11.replaceChildren(h("span", "", text));
    if (kanji) el11.append(h("span", "k", ` ${kanji}`, { lang: "ja" }));
  }
  var REASONS = {
    ko: "Knock-out",
    time: "Time up",
    forfeit: "A player left the battle",
    boss_slain: "The Black Dragon has fallen",
    party_wiped: "The party was burned to ash"
  };
  function showResults(mode4, players2, you2, winnerId, teamWon, reason, stats, opts = {}) {
    stopCountdown();
    const outcome = mode4 === "boss" ? teamWon ? "win" : "loss" : winnerId === null ? "draw" : winnerId === you2 ? "win" : "loss";
    $("resultMode").replaceChildren(modeBadge(mode4), h("span", "rm-name", MODE_LABEL[mode4]), ...opts.history ? [h("span", "rm-date", dateTime(opts.history.at))] : []);
    const title = $("resultTitle");
    title.className = `result-title ${outcome}`;
    title.textContent = outcome === "win" ? "VICTORY" : outcome === "loss" ? "DEFEAT" : "DRAW";
    if (mode4 === "boss") $("resultReason").textContent = reason === "time" && teamWon ? "Time up \u2014 you held the dragon off!" : teamWon ? REASONS.boss_slain : reason === "time" ? "Time up \u2014 you held the dragon off!" : REASONS[reason];
    else $("resultReason").textContent = reason === "time" ? "Time up \u2014 most HP left wins" : REASONS[reason];
    $("resultActions").hidden = !!opts.history;
    $("historyBackRow").hidden = !opts.history;
    const otherId = Object.keys(stats).find((id) => id !== you2);
    const me3 = stats[you2];
    const other = otherId ? stats[otherId] : void 0;
    const otherName = players2.find((p) => p.id === otherId)?.name ?? (mode4 === "boss" ? "Ally" : "Opponent");
    const rows2 = [
      [mode4 === "boss" ? "Damage to dragon" : "Damage dealt", (s) => String(s.damageDealt)],
      ["Accuracy", (s) => s.attempts ? `${Math.round(s.accuracy * 100)}% (${s.correct}/${s.attempts})` : "\u2014"],
      ["Avg response", (s) => s.avgResponseMs !== null ? secs(s.avgResponseMs) : "\u2014"],
      ["Best combo", (s) => `\xD7${s.bestCombo}`]
    ];
    const cmp = $("statCompare");
    const allies = Object.keys(stats).filter((id) => id !== you2);
    cmp.classList.toggle("multi", allies.length > 1);
    if (allies.length > 1) {
      cmp.style.gridTemplateColumns = `auto repeat(${allies.length + 1}, minmax(0, 1fr))`;
      const nameOf2 = (id) => players2.find((p) => p.id === id)?.name ?? "Ally";
      cmp.replaceChildren(h("div"), h("div", "h me", "You"), ...allies.map((id) => {
        const p = players2.find((x) => x.id === id);
        const el11 = h("div", "h", nameOf2(id));
        return p ? markProfile(el11, p) : el11;
      }));
      for (const [label, fmt] of rows2) cmp.append(h("div", "lbl", label), h("div", "v", fmt(me3)), ...allies.map((id) => h("div", "v", fmt(stats[id]))));
    } else {
      cmp.style.gridTemplateColumns = "";
      const on = h("div", "h r", other ? otherName : "");
      const op = players2.find((p) => p.id === otherId);
      if (op) markProfile(on, op);
      cmp.replaceChildren(h("div", "h me", "You"), h("div"), on);
      for (const [label, fmt] of rows2) cmp.append(h("div", "v", fmt(me3)), h("div", "lbl", label), h("div", "v r", other ? fmt(other) : ""));
    }
    const byKanji = new Map(me3.words.map((w) => [w.kanji, w]));
    $("struggledBox").hidden = me3.struggled.length === 0;
    $("missedSave").hidden = true;
    $("struggled").replaceChildren(
      ...me3.struggled.map((k) => {
        const w = byKanji.get(k);
        const so = h("button", "so-btn", "\u7B46", { type: "button", title: "Stroke order", "aria-label": "Stroke order", lang: "ja" });
        so.onclick = (e) => {
          e.stopPropagation();
          openStrokeDialog(w.kanji, w.reading, w.meaning);
        };
        const card = append(h("div", "card miss-card", void 0, { tabindex: "0", "data-kanji": w.kanji }), h("div", "k", w.kanji, { lang: "ja" }), h("div", "r", w.reading, { lang: "ja" }), h("div", "m", w.meaning), so);
        card.onclick = () => openStrokeDialog(w.kanji, w.reading, w.meaning);
        return card;
      })
    );
    $("wordRows").replaceChildren(
      ...me3.words.map((w) => {
        const result = w.attempts === 0 ? h("span", "na", "not seen") : w.correct === w.attempts ? h("span", "ok", `\u2713 ${w.correct}/${w.attempts}`) : h("span", "no", `\u2717 ${w.correct}/${w.attempts}`);
        const k = h("td", "k clickable", w.kanji, { lang: "ja", title: "Stroke order" });
        k.onclick = () => openStrokeDialog(w.kanji, w.reading, w.meaning);
        return append(
          h("tr"),
          k,
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
  function showXp(gained, level2, levelUp) {
    const el11 = $("xpLine");
    el11.hidden = false;
    el11.replaceChildren(h("span", "", gained > 0 ? `+${gained} XP` : "No XP \u2014 the match was forfeited"));
    if (levelUp) el11.append(h("span", "lvup", `Level ${level2}!`));
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
  var MODE_ICON = { reading: "\u8AAD", rapid: "\u901F", writing: "\u66F8", boss: "\u7ADC", deck: "\u672D" };
  function modeBadge(mode4) {
    return h("span", `mode-badge ${mode4}`, MODE_ICON[mode4], { lang: "ja", title: MODE_LABEL[mode4], "aria-label": MODE_LABEL[mode4] });
  }
  function characterEl(character, mode4, side = "me") {
    const el11 = h("span", "char-sprite");
    const heroes = ["goblin", "knight", "witch", "wizard"];
    el11.innerHTML = mode4 === "deck" && heroes.includes(character) ? heroSvg(character, side) : avatarSvg(["goblin", "kid", "human", "knight", "witch", "wizard"].includes(character) ? character : "wizard", side);
    el11.title = character[0].toUpperCase() + character.slice(1);
    return el11;
  }
  function markProfile(el11, p) {
    el11.dataset.profile = p.id;
    if (p.bot) el11.dataset.bot = p.bot;
    if (p.name) el11.dataset.name = p.name;
    el11.classList.add("plink");
    el11.setAttribute("role", "button");
    el11.tabIndex = 0;
    el11.title = "View profile";
    return el11;
  }
  var dateTime = (at) => new Date(at).toLocaleString(locale(), { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  function showProfileCard(anchor, p, actions) {
    const pop2 = $("otherPop");
    const body = [];
    if (p === "loading") body.push(h("p", "hint", "Loading\u2026"));
    else if (p === "missing") body.push(h("p", "hint", "This player can no longer be viewed."));
    else if ("bot" in p) {
      body.push(
        append(h("div", "pp-head"), h("div", "pp-pic", "AI"), append(h("div"), h("div", "pp-name", p.name), h("div", "pp-level", p.bot === "BEGINNER" ? "AI player \xB7 beginner" : `AI player \xB7 knows ${p.bot}`))),
        h("p", "hint", "A computer opponent. It gets words right about as often as a learner of its level would.")
      );
    } else {
      const pic = h("div", "pp-pic" + (p.pic ? " has-pic" : "") + borderCls(p.border), p.pic ? "" : p.name.slice(0, 1).toUpperCase());
      const img = picEl(p.pic, "pic fill");
      if (img) pic.append(img);
      const games = p.wins + p.losses;
      body.push(
        append(h("div", "pp-head"), pic, append(h("div"), h("div", "pp-name", p.name), h("div", "pp-level", `Lv ${p.level}`), ...[badgeRowFn?.(p.badges)].filter((x) => !!x))),
        append(
          h("div", "pp-stats"),
          append(h("div"), h("b", "", p.wins), h("span", "", "wins")),
          append(h("div"), h("b", "", p.losses), h("span", "", "losses")),
          append(h("div"), h("b", "", games ? `${Math.round(100 * p.wins / games)}%` : "\u2014"), h("span", "", "win rate")),
          append(h("div"), h("b", "", p.learned), h("span", "", "spells learned"))
        ),
        append(
          h("div", "pp-stats pp-streaks"),
          append(h("div", "streak-box"), h("b", "", p.streak ?? 0), h("span", "", "daily streak (days)")),
          append(h("div", "streak-box best"), h("b", "", Math.max(p.bestStreak ?? 0, p.streak ?? 0)), h("span", "", "best streak (days)"))
        ),
        h("p", "hint", `Playing since ${new Date(p.since).toLocaleDateString(locale(), { year: "numeric", month: "short", day: "numeric" })}`)
      );
      if (actions && actions.relation !== "self") body.push(profileActions(p, actions));
    }
    pop2.replaceChildren(...body);
    pop2.hidden = false;
    const r2 = zrect(anchor);
    const w = Math.min(300, viewW() - 24);
    pop2.style.width = `${w}px`;
    pop2.style.left = `${Math.max(12, Math.min(viewW() - w - 12, r2.left + r2.width / 2 - w / 2))}px`;
    const below = r2.bottom + 8;
    pop2.style.top = `${below + 240 > viewH() ? Math.max(12, r2.top - 8 - pop2.offsetHeight) : below}px`;
  }
  var hideProfileCard = () => {
    $("otherPop").hidden = true;
  };
  function clampProfileCard() {
    const pop2 = $("otherPop");
    const top = parseFloat(pop2.style.top) || 0, hgt = pop2.offsetHeight;
    if (top + hgt > viewH() - 12) pop2.style.top = `${Math.max(12, viewH() - 12 - hgt)}px`;
  }
  function profileActions(p, a) {
    const box = h("div", "pp-actions");
    const msg = h("p", "hint pp-msg");
    if (a.relation === "none" || a.relation === "incoming") {
      const b = h("button", "pill primary", a.relation === "incoming" ? "\u2713 Accept friend request" : "+ Add friend");
      b.onclick = async () => {
        b.disabled = true;
        try {
          await (a.relation === "incoming" ? a.accept() : a.addFriend());
          b.textContent = a.relation === "incoming" ? "\u2713 Friends" : "\u2713 Request sent";
        } catch (e) {
          msg.textContent = e.message;
          b.disabled = false;
        }
      };
      box.append(b);
    } else if (a.relation === "outgoing") box.append(h("button", "pill", "\u2713 Request sent", { disabled: "" }));
    if (a.relation === "friend") {
      const c = h("button", "pill primary challenge-btn", "\u2694 Challenge");
      const modes = h("div", "pp-modes");
      modes.hidden = true;
      for (const m of ["reading", "writing", "rapid", "boss", "deck"]) {
        const mb = h("button", "pill pp-mode", MODE_LABEL[m]);
        mb.prepend(modeBadge(m));
        mb.onclick = () => {
          a.challenge(m);
          hideProfileCard();
        };
        modes.append(mb);
      }
      c.disabled = !a.canChallenge;
      if (!a.canChallenge) c.title = "Finish your game first";
      c.onclick = () => {
        modes.hidden = !modes.hidden;
        clampProfileCard();
      };
      box.append(c, modes);
    }
    box.append(msg);
    return box;
  }
  function showHistory(list, onOpen) {
    const box = $("historyList");
    if (!list) box.replaceChildren(h("p", "hint center", "Loading\u2026"));
    else if (!list.length) box.replaceChildren(h("p", "hint center", "No matches yet \u2014 your finished games will show up here."));
    else box.replaceChildren(...list.map((m) => {
      const row = h("button", `hist-row ${m.outcome}`);
      const vs = h("span", "hist-vs");
      m.opponents.forEach((o, i) => {
        if (i) vs.append(", ");
        vs.append(markProfile(h("span", "", o.name), { id: o.id, bot: o.bot ? o.name.match(/AI (N\d)/)?.[1] ?? "AI" : null, name: o.name }));
      });
      row.append(
        characterEl(m.character, m.mode),
        append(h("span", "hist-mode"), modeBadge(m.mode), append(h("span", "hist-mode-text"), h("span", "hist-mode-name", MODE_LABEL[m.mode]), m.opponents.length ? append(h("span", "hist-vs-line"), "vs ", vs) : h("span", "hist-vs-line", "solo"))),
        h("span", "hist-result", m.outcome === "win" ? "VICTORY" : m.outcome === "loss" ? "DEFEAT" : "DRAW"),
        h("span", "hist-date", dateTime(m.at))
      );
      row.onclick = (e) => {
        if (!e.target.closest("[data-profile]")) onOpen(m.id);
      };
      return row;
    }));
    show("history");
  }
  function paintFlame(el11, flame) {
    el11.dataset.flame = flame ?? "blue";
    flameShades(flame).forEach((c, i) => el11.style.setProperty(`--f${i}`, c));
  }
  document.addEventListener("click", (e) => {
    const tab2 = e.target?.closest?.(".cust-tabs > button");
    if (tab2) tab2.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  });

  // src/client/support.ts
  var $2 = $;
  var device = () => `${navigator.userAgent} \xB7 ${innerWidth}\xD7${innerHeight} \xB7 zoom ${getComputedStyle(document.documentElement).getPropertyValue("--ui-zoom") || "1"}`;
  var sent = 0;
  var seen = /* @__PURE__ */ new Set();
  function report(message, stack = "") {
    if (sent >= 8 || seen.has(message)) return;
    seen.add(message);
    sent++;
    const details = `v${VERSION} \xB7 screen ${currentScreen() ?? "?"}
${device()}
${stack}`.slice(0, 2e3);
    void fetch("/api/errors", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getToken() ? { Authorization: `Bearer ${getToken()}` } : {} },
      body: JSON.stringify({ message, details }),
      keepalive: true
    }).catch(() => {
    });
  }
  addEventListener("error", (e) => {
    if (!e.message || /ResizeObserver loop/.test(e.message)) return;
    report(e.message, e.error?.stack ?? `${e.filename}:${e.lineno}:${e.colno}`);
  });
  addEventListener("unhandledrejection", (e) => {
    const r2 = e.reason;
    const msg = r2?.message ?? String(e.reason);
    if (/Failed to fetch|NetworkError|Load failed/.test(msg)) return;
    report(msg, r2?.stack ?? "");
  });
  function openFeedback(kind = "bug") {
    const d = $2("feedbackDialog");
    for (const i of d.querySelectorAll('input[name="fbKind"]')) {
      i.checked = i.value === kind;
      i.closest("label")?.classList.toggle("on", i.checked);
    }
    $2("fbMsg").textContent = "";
    $2("fbSend").disabled = false;
    d.showModal();
    setTimeout(() => $2("fbText").focus(), 30);
  }
  for (const i of document.querySelectorAll('input[name="fbKind"]')) {
    i.addEventListener("change", () => {
      for (const x of document.querySelectorAll('input[name="fbKind"]')) x.closest("label")?.classList.toggle("on", x.checked);
    });
  }
  $2("feedbackForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const kind = document.querySelector('input[name="fbKind"]:checked')?.value === "suggestion" ? "suggestion" : "bug";
    const text = $2("fbText").value.trim();
    if (text.length < 3) {
      $2("fbMsg").textContent = "Write a few words first.";
      return;
    }
    $2("fbSend").disabled = true;
    try {
      await api.feedback(kind, text, `v${VERSION} \xB7 ${device()}`);
      $2("fbText").value = "";
      $2("feedbackDialog").close();
      toast(kind === "bug" ? "Bug report sent \u2014 thank you!" : "Suggestion sent \u2014 thank you!", 4e3);
    } catch (err) {
      $2("fbMsg").textContent = err.message;
      $2("fbSend").disabled = false;
    }
  });
  $2("fbCancel").onclick = () => $2("feedbackDialog").close();
  $2("feedbackBtn").onclick = () => openFeedback();
  $2("aboutBtn").onclick = () => {
    $2("aboutVersion").textContent = `v${VERSION}`;
    $2("aboutDialog").showModal();
  };
  async function refreshOnline() {
    try {
      const { online } = await api.online();
      const pill = $2("onlineCount");
      pill.hidden = online < 1;
      pill.textContent = `${online} online`;
    } catch {
    }
  }
  setInterval(() => {
    if (getToken() && ["menu", "queue"].includes(currentScreen() ?? "")) void refreshOnline();
  }, 3e4);

  // src/client/examples.ts
  var loading3 = null;
  function loadExamples() {
    loading3 ?? (loading3 = fetch("/examples.json").then((r2) => r2.ok ? r2.json() : {}).then((o) => new Map(Object.entries(o))).catch(() => {
      loading3 = null;
      return /* @__PURE__ */ new Map();
    }));
    return loading3;
  }
  function furigana(text) {
    const out = [];
    for (const bit of text.split(/(\[[^\]|]+\|[^\]]+\])/)) {
      const m = /^\[([^\]|]+)\|([^\]]+)\]$/.exec(bit);
      if (!m) {
        if (bit) out.push(bit);
        continue;
      }
      const r2 = document.createElement("ruby");
      const rt = document.createElement("rt");
      rt.textContent = m[2];
      r2.append(m[1], rt);
      out.push(r2);
    }
    return out;
  }
  async function exampleFor(vocabId) {
    const ex = (await loadExamples()).get(vocabId);
    if (!ex) return null;
    const box = document.createElement("div");
    box.className = "fc-example";
    const ja = document.createElement("p");
    ja.className = "fc-ex-ja";
    ja.lang = "ja";
    for (const part of ex[0].split(/(【[^】]+】)/)) {
      if (!part) continue;
      if (part.startsWith("\u3010")) {
        const m = document.createElement("mark");
        m.append(...furigana(part.slice(1, -1)));
        ja.append(m);
      } else ja.append(...furigana(part));
    }
    const tr2 = document.createElement("p");
    tr2.className = "fc-ex-tr";
    tr2.setAttribute("data-no-i18n", "");
    tr2.textContent = lang() === "ru" && ex[2] ? ex[2] : ex[1];
    box.append(ja, tr2);
    return box;
  }

  // src/client/kanjihelp.ts
  var loading4 = null;
  function loadKanji() {
    loading4 ?? (loading4 = fetch("/kanji.json").then((r2) => r2.ok ? r2.json() : {}).catch(() => {
      loading4 = null;
      return {};
    }));
    return loading4;
  }
  var HAN2 = /[\p{Script=Han}]/u;
  var tappable = (ch) => HAN2.test(ch) && ch !== "\u3005";
  var COLOURS = ["#e8590c", "#1c7ed6", "#2b8a3e", "#ae3ec9", "#e67700", "#0c8599"];
  var h2 = (tag, cls = "", text, attrs = {}) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = text;
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    return e;
  };
  function kanjiTappable(root) {
    void loadKanji();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const texts = [];
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      if (n.parentElement?.closest("rt, .kj")) continue;
      if (HAN2.test(n.nodeValue ?? "")) texts.push(n);
    }
    for (const t of texts) {
      const frag = document.createDocumentFragment();
      for (const ch of [...t.nodeValue ?? ""]) {
        if (!tappable(ch)) {
          frag.append(ch);
          continue;
        }
        const s = h2("span", "kj", ch, { role: "button", tabindex: "0", lang: "ja", title: tr("Tap for this kanji") });
        const open3 = (e) => {
          e.stopPropagation();
          e.preventDefault();
          void showKanji(ch, s);
        };
        s.addEventListener("click", open3);
        s.addEventListener("pointerdown", (e) => e.stopPropagation());
        s.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") open3(e);
        });
        frag.append(s);
      }
      t.replaceWith(frag);
    }
  }
  var kun = (s) => s.split("\u3001").map((r2) => r2.replace(/^-/, "\u301C").replace(/-$/, "\u301C").replace(/\.(.+)$/, "($1)")).join("\u3001");
  function pop() {
    let p = document.getElementById("kanjiPop");
    if (p) return p;
    p = h2("div", "kanji-pop", void 0, { id: "kanjiPop", role: "dialog", "aria-label": "Kanji" });
    p.hidden = true;
    document.body.append(p);
    document.addEventListener("pointerdown", (e) => {
      const q = document.getElementById("kanjiPop");
      if (q && !q.hidden && !e.target.closest("#kanjiPop, .kj")) hideKanji();
    });
    addEventListener("keydown", (e) => {
      if (e.key === "Escape") hideKanji();
    }, true);
    return p;
  }
  function hideKanji() {
    const p = document.getElementById("kanjiPop");
    if (p) p.hidden = true;
    document.querySelectorAll(".kj.on").forEach((x) => x.classList.remove("on"));
  }
  async function showKanji(ch, at) {
    const info = (await loadKanji())[ch];
    const p = pop();
    const ru = lang() === "ru";
    document.querySelectorAll(".kj.on").forEach((x) => x.classList.remove("on"));
    at?.classList.add("on");
    const close = h2("button", "kp-x", "\u2715", { type: "button", "aria-label": tr("Close"), title: tr("Close") });
    close.onclick = hideKanji;
    const head = h2("div", "kp-head");
    head.append(h2("span", "kp-char", ch, { lang: "ja" }));
    const meta = h2("div", "kp-meta");
    if (!info) {
      meta.append(h2("span", "kp-mean", tr("No details for this kanji yet")));
      head.append(meta);
      p.replaceChildren(close, head);
      p.hidden = false;
      return;
    }
    const [en, rus, on, kn, parts, sen, sru, seq] = info;
    meta.append(h2("span", "kp-mean", ru && rus ? rus : en, { "data-no-i18n": "" }));
    const rd = h2("div", "kp-reads");
    if (on) {
      const r2 = h2("span", "kp-r");
      r2.append(h2("b", "", ru ? "\u043E\u043D" : "on", { "data-no-i18n": "" }), h2("span", "", on, { lang: "ja" }));
      rd.append(r2);
    }
    if (kn) {
      const r2 = h2("span", "kp-r");
      r2.append(h2("b", "", ru ? "\u043A\u0443\u043D" : "kun", { "data-no-i18n": "" }), h2("span", "", kun(kn), { lang: "ja" }));
      rd.append(r2);
    }
    meta.append(rd);
    head.append(meta);
    const kids = [close, head];
    if (parts.length) {
      const row = h2("div", "kp-parts");
      row.append(h2("span", "kp-lbl", tr("Parts")));
      parts.forEach(([c, pen, pru], i) => {
        const chip2 = h2("button", "kp-part", void 0, { type: "button", style: `--pc:${COLOURS[i % COLOURS.length]}` });
        if (c) chip2.append(h2("span", "kp-pc", c, { lang: "ja" }));
        chip2.append(h2("span", "kp-pm", ru && pru ? pru : pen, { "data-no-i18n": "" }));
        chip2.onclick = () => {
          if (c && HAN2.test(c)) void showKanji(c);
        };
        if (i) row.append(h2("span", "kp-plus", "+"));
        row.append(chip2);
      });
      kids.push(row);
    }
    const story = ru && sru ? sru : sen;
    if (story) {
      const btn = h2("button", "pill kp-pic", `\u{1F5BC} ${tr("Memory picture")}`, { type: "button", "aria-expanded": "false" });
      const box = h2("div", "kp-story");
      box.hidden = true;
      btn.onclick = async () => {
        box.hidden = !box.hidden;
        btn.setAttribute("aria-expanded", String(!box.hidden));
        if (box.hidden || box.childElementCount) return;
        const pic = h2("div", "kp-picture");
        const text = h2("p", "kp-tale", story, { "data-no-i18n": "" });
        box.append(pic, text);
        const strokes2 = await strokesOf(ch);
        if (strokes2 && seq && seq.length === strokes2.length) pic.append(partsPicture(strokes2, seq, COLOURS));
        else pic.append(h2("span", "kp-big", ch, { lang: "ja" }));
      };
      head.append(btn);
      kids.push(box);
    }
    p.replaceChildren(...kids);
    p.hidden = false;
  }

  // src/client/decks.ts
  var $3 = $;
  var el2 = (tag, cls = "", text, attrs = {}) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    return e;
  };
  var DECK_LABEL = { all: "All spells", struggling: "Struggling spells", custom: "Custom spells", ono: "Onomatopoeia" };
  var STATE_LABEL = { new: "new", learning: "learning", relearning: "learning", review: "learned" };
  var onChanged = () => {
  };
  var backToStudy = () => {
  };
  var initDecks = (o) => {
    onChanged = o.changed;
    backToStudy = o.back;
  };
  var open2 = "all";
  var rows = [];
  var selected = /* @__PURE__ */ new Set();
  async function openDeck(deck2, withAdd = false) {
    open2 = deck2;
    selected.clear();
    $3("deckTitle").textContent = DECK_LABEL[deck2];
    $3("customPanel").hidden = !(deck2 === "custom" && withAdd);
    $3("deckFilter").value = "";
    $3("customMsg").textContent = "";
    $3("customHits").replaceChildren();
    $3("deckDialog").showModal();
    if (!$3("customPanel").hidden) $3("customSearch").focus();
    await reload();
  }
  async function reload() {
    try {
      rows = (await api.deckWords(open2)).words;
    } catch (e) {
      toast(e.message);
      rows = [];
    }
    for (const id of [...selected]) if (!rows.some((r2) => r2.vocabId === id)) selected.delete(id);
    render();
  }
  var dateOf = (t) => t ? new Date(t).toLocaleDateString(locale(), { day: "numeric", month: "short", year: "numeric" }) : "\u2014";
  var sortKey = null;
  var sortDir = 1;
  var LEVEL_ORDER2 = ["KANA", "KATA", "N5", "N4", "N3", "N2", "N1"];
  var STATE_ORDER = ["new", "learning", "relearning", "review"];
  function sortRows(list) {
    if (!sortKey) return list;
    const key = sortKey;
    const val = (r2) => key === "kanji" ? r2.kanji : key === "reading" ? r2.reading : key === "meaning" ? meaningIn(r2.meaning).toLowerCase() : key === "level" ? r2.custom ? 99 : LEVEL_ORDER2.indexOf(r2.level) : key === "added" ? r2.addedAt ?? 0 : STATE_ORDER.indexOf(r2.state);
    return [...list].sort((a, b) => {
      const x = val(a), y = val(b);
      return (typeof x === "number" && typeof y === "number" ? x - y : String(x).localeCompare(String(y), lang() === "ru" ? "ru" : "ja")) * sortDir;
    });
  }
  for (const th of document.querySelectorAll("#deckDialog th.sortable")) {
    th.tabIndex = 0;
    const go = () => {
      const k = th.dataset.sort;
      if (sortKey === k) sortDir = -sortDir;
      else {
        sortKey = k;
        sortDir = 1;
      }
      for (const o of document.querySelectorAll("#deckDialog th.sortable")) o.dataset.dir = o === th ? sortDir > 0 ? "asc" : "desc" : "";
      render();
    };
    th.onclick = go;
    th.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }
    };
  }
  function render() {
    const f2 = $3("deckFilter").value.trim().toLowerCase();
    const shown3 = sortRows(rows).filter((r2) => !f2 || r2.kanji.includes(f2) || r2.reading.includes(f2) || r2.meaning.toLowerCase().includes(f2) || meaningIn(r2.meaning).toLowerCase().includes(f2));
    $3("deckCount").textContent = `${rows.length} ${rows.length === 1 ? "spell" : "spells"}`;
    $3("deckRows").replaceChildren(...shown3.slice(0, 400).map((r2) => {
      const box = el2("input", "", void 0, { type: "checkbox", "aria-label": `Select ${r2.kanji}` });
      box.checked = selected.has(r2.vocabId);
      box.onchange = () => {
        box.checked ? selected.add(r2.vocabId) : selected.delete(r2.vocabId);
        tools();
      };
      const k = el2("td", "k clickable", r2.kanji, { lang: "ja", title: "Stroke order" });
      k.onclick = () => openStrokeDialog(r2.kanji, r2.reading, r2.meaning);
      const del2 = el2("button", "pill danger small", "\u2715", { title: "Remove from this deck", "aria-label": `Remove ${r2.kanji}` });
      del2.onclick = () => void remove([r2.vocabId]);
      const tr_ = el2("tr");
      const td = (n) => {
        const c = el2("td");
        c.append(n);
        return c;
      };
      tr_.append(
        td(box),
        k,
        el2("td", "rd", r2.reading, { lang: "ja" }),
        el2("td", "m", r2.meaning),
        el2("td", "dlv", r2.custom ? "Custom" : LEVEL_LABEL[r2.level]),
        el2("td", "dt", dateOf(r2.addedAt)),
        el2("td", `st st-${r2.state}`, STATE_LABEL[r2.state] ?? r2.state),
        td(del2)
      );
      return tr_;
    }));
    if (!rows.length) $3("deckRows").replaceChildren(el2("tr", "empty", void 0));
    if (!rows.length) $3("deckRows").firstElementChild.append(Object.assign(el2("td", "hint", open2 === "custom" ? "No custom spells yet \u2014 search the dictionary above or type your own word." : "No spells in this deck yet."), { colSpan: 8 }));
    tools();
  }
  function tools() {
    $3("deckRemove").disabled = selected.size === 0;
    $3("deckRemove").textContent = selected.size ? `Remove selected (${selected.size})` : "Remove selected";
    $3("deckAllBox").checked = rows.length > 0 && selected.size === rows.length;
  }
  async function remove(ids) {
    if (!ids.length) return;
    if (ids.length > 1 && !confirm(`Remove ${ids.length} spells from ${DECK_LABEL[open2]}? Their study progress in this deck is lost.`)) return;
    try {
      await api.deckRemove(open2, ids);
      ids.forEach((i) => selected.delete(i));
      await reload();
      onChanged();
    } catch (e) {
      toast(e.message);
    }
  }
  $3("deckFilter").addEventListener("input", render);
  $3("deckAllBox").addEventListener("change", () => {
    if ($3("deckAllBox").checked) rows.forEach((r2) => selected.add(r2.vocabId));
    else selected.clear();
    render();
  });
  $3("deckRemove").onclick = () => void remove([...selected]);
  $3("deckClose").onclick = () => $3("deckDialog").close();
  for (const b of document.querySelectorAll(".deck-open[data-deck]")) b.onclick = () => void openDeck(b.dataset.deck);
  $3("customAdd").onclick = () => void openDeck("custom", true);
  var searchSeq = 0;
  var searchTimer = 0;
  $3("customSearch").addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = window.setTimeout(async () => {
      const q = $3("customSearch").value.trim();
      const seq = ++searchSeq;
      if (!q) {
        $3("customHits").replaceChildren();
        return;
      }
      try {
        const { words: words2 } = await api.searchWords(q);
        if (seq !== searchSeq) return;
        const have = new Set(rows.map((r2) => r2.vocabId));
        $3("customHits").replaceChildren(...words2.length ? words2.map((w) => hit(w, have.has(w.id))) : [el2("p", "hint", "Not in the dictionary \u2014 add it as your own word below.")]);
        if (!words2.length) {
          $3("cwKanji").value = /[一-鿿ぁ-ゟァ-ヿ]/.test(q) ? q : "";
        }
      } catch (e) {
        toast(e.message);
      }
    }, 220);
  });
  function hit(w, have) {
    const b = el2("button", "hit" + (have ? " have" : ""), void 0, { type: "button" });
    b.append(el2("b", "", w.kanji, { lang: "ja" }), el2("span", "rd", w.reading, { lang: "ja" }), el2("span", "m", w.meaning), el2("span", "lv", LEVEL_LABEL[w.level]), el2("span", "add", have ? "\u2713 added" : "+ Add"));
    b.disabled = have;
    b.onclick = async () => {
      try {
        const r2 = await api.addCustom({ vocabId: w.id });
        b.classList.add("have");
        b.disabled = true;
        b.querySelector(".add").textContent = "\u2713 added";
        $3("customMsg").textContent = r2.added ? `${w.kanji} added to Custom spells.` : `${w.kanji} is already in Custom spells.`;
        await reload();
        onChanged();
      } catch (e) {
        $3("customMsg").textContent = e.message;
      }
    };
    return b;
  }
  $3("customForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const kanji = $3("cwKanji").value, reading = $3("cwReading").value, meaning2 = $3("cwMeaning").value;
    try {
      const r2 = await api.addCustom({ kanji, reading, meaning: meaning2 });
      $3("customMsg").textContent = r2.added ? `${r2.word.kanji} (${r2.word.reading}) added to Custom spells.` : `${r2.word.kanji} is already in Custom spells.`;
      for (const id of ["cwKanji", "cwReading", "cwMeaning"]) $3(id).value = "";
      await reload();
      onChanged();
    } catch (err) {
      $3("customMsg").textContent = err.message;
    }
  });
  function tickCards(cards, onToggle) {
    const setters = /* @__PURE__ */ new Map();
    for (const { card, id } of cards) {
      card.classList.add("tickable", "on");
      card.setAttribute("role", "checkbox");
      card.setAttribute("aria-checked", "true");
      card.title = tr("Ticked: goes to your deck. Tap to keep it out.");
      const tick2 = el2("span", "mc-tick", "\u2713", { "aria-hidden": "true" });
      card.prepend(tick2);
      const show3 = (on) => {
        card.classList.toggle("on", on);
        card.setAttribute("aria-checked", String(on));
        tick2.textContent = on ? "\u2713" : "";
      };
      setters.set(id, show3);
      const flip2 = () => {
        const on = !card.classList.contains("on");
        show3(on);
        onToggle(id, on);
      };
      card.onclick = flip2;
      card.onkeydown = (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          flip2();
        }
      };
    }
    return (id, on) => setters.get(id)?.(on);
  }
  function showMissedSave(missed) {
    const box = $3("missedSave");
    if (!missed.length) {
      box.hidden = true;
      return;
    }
    let deck2 = "struggling";
    const ticked = new Set(missed.map((m) => m.id));
    let ours = new Set(missed.filter((m) => m.added).map((m) => m.id));
    const status = el2("span", "ms-status hint");
    const say2 = () => {
      status.textContent = `${ticked.size} / ${missed.length} \u2192 ${tr(DECK_LABEL[deck2])}`;
    };
    const sync = async (id, on) => {
      on ? ticked.add(id) : ticked.delete(id);
      say2();
      try {
        if (on) {
          const r2 = await api.deckAdd(deck2, [id]);
          r2.added.forEach((x) => ours.add(x));
        } else if (ours.has(id) || deck2 === "struggling") {
          await api.deckRemove(deck2, [id]);
          ours.delete(id);
        }
      } catch (e) {
        status.textContent = e.message;
      }
    };
    const grid = $3("struggled");
    const cards = missed.map((m) => {
      let card = grid.querySelector(`.miss-card[data-kanji="${CSS.escape(m.kanji)}"]`);
      if (!card) {
        card = el2("div", "card miss-card", void 0, { tabindex: "0", "data-kanji": m.kanji });
        card.append(el2("div", "k", m.kanji, { lang: "ja" }), el2("div", "r", m.reading, { lang: "ja" }), el2("div", "m", m.meaning));
        grid.append(card);
        $3("struggledBox").hidden = false;
      }
      return { card, id: m.id };
    });
    tickCards(cards, (id, on) => void sync(id, on));
    const sel = el2("select", "ms-deck", void 0, { "aria-label": "Save to" });
    for (const d of ["struggling", "all", "custom"]) sel.append(Object.assign(el2("option", "", DECK_LABEL[d]), { value: d }));
    sel.value = deck2;
    sel.onchange = async () => {
      const to = sel.value;
      sel.disabled = true;
      try {
        if (ours.size) await api.deckRemove(deck2, [...ours]);
        deck2 = to;
        ours = new Set((await api.deckAdd(deck2, [...ticked])).added);
        say2();
      } catch (e) {
        status.textContent = e.message;
      }
      sel.disabled = false;
    };
    const story = el2("button", "pill", "Read them in a story");
    story.onclick = () => {
      storyFrom = "missed";
      openPassage(missed.map((m) => ({ kanji: m.kanji, reading: m.reading, meaning: m.meaning, id: m.id })));
    };
    box.replaceChildren(el2("span", "hint", "Ticked words go to"), sel, status, story);
    say2();
    box.hidden = false;
  }
  var ASK = {
    reading: ["\uFF3F\uFF3F\u306E\u3053\u3068\u3070\u306E\u8AAD\u307F\u65B9\u3068\u3057\u3066\u6700\u3082\u3088\u3044\u3082\u306E\u3092\u9078\u3073\u306A\u3055\u3044\u3002", "Choose the best reading for the word."],
    meaning: ["\u3053\u306E\u3053\u3068\u3070\u306E\u610F\u5473\u3068\u3057\u3066\u6700\u3082\u3088\u3044\u3082\u306E\u3092\u9078\u3073\u306A\u3055\u3044\u3002", "Choose the best meaning for the word."],
    kanji: ["\uFF3F\uFF3F\u306E\u3053\u3068\u3070\u3092\u6F22\u5B57\u3067\u66F8\u304F\u3068\u304D\u3001\u6700\u3082\u3088\u3044\u3082\u306E\u3092\u9078\u3073\u306A\u3055\u3044\u3002", "Choose the right kanji for the word."],
    onomean: ["\u3053\u306E\u30AA\u30CE\u30DE\u30C8\u30DA\u306E\u610F\u5473\u3068\u3057\u3066\u6700\u3082\u3088\u3044\u3082\u306E\u3092\u9078\u3073\u306A\u3055\u3044\u3002", "Choose the best meaning for the onomatopoeia."],
    onoword: ["\u3053\u306E\u610F\u5473\u306E\u30AA\u30CE\u30DE\u30C8\u30DA\u3068\u3057\u3066\u6700\u3082\u3088\u3044\u3082\u306E\u3092\u9078\u3073\u306A\u3055\u3044\u3002", "Which onomatopoeia has this meaning?"],
    onoctx: ["\uFF3F\uFF3F\uFF3F\u306B\u5165\u308C\u308B\u306E\u306B\u6700\u3082\u3088\u3044\u3082\u306E\u3092\u9078\u3073\u306A\u3055\u3044\u3002", "Choose the word that fits the sentence."]
  };
  var quiz = [];
  var qi = 0;
  var score = 0;
  var answered = false;
  var wrong = [];
  var mode2 = "jlpt";
  var quizMode = () => mode2;
  async function onoQuestions(n) {
    const [{ VOCAB: VOCAB2, VOCAB_BY_ID: VOCAB_BY_ID2, loadVocab: loadVocab2 }, examples] = await Promise.all([Promise.resolve().then(() => (init_vocab2(), vocab_exports)), loadExamples()]);
    await loadVocab2();
    let studied = [];
    try {
      studied = (await api.deckWords("ono")).words.filter((w) => w.state !== "new").map((w) => w.vocabId);
    } catch {
    }
    const mix2 = (a) => a.sort(() => Math.random() - 0.5);
    const mine = mix2(studied.map((id) => VOCAB_BY_ID2.get(id)).filter((v) => !!v && v.level === "ONO"));
    const rest = mix2(VOCAB2.filter((v) => v.level === "ONO" && !studied.includes(v.id)));
    const words2 = [...mine, ...rest].slice(0, n);
    const ja = new Map([...examples].map(([id, ex]) => [id, ex[0]]));
    return buildOnoQuiz(mix2(words2), VOCAB2, Math.random, ja);
  }
  async function startQuiz(which = "jlpt") {
    mode2 = which;
    show("quiz");
    $3("quizDone").hidden = true;
    $3("quizCard").hidden = false;
    $3("quizPrompt").textContent = "\u2026";
    try {
      quiz = which === "ono" ? await onoQuestions(10) : (await api.quiz(10)).questions;
    } catch (e) {
      toast(e.message);
      quiz = [];
    }
    if (quiz.length < 1) {
      $3("quizCard").hidden = true;
      $3("quizDone").hidden = false;
      $3("quizResult").textContent = "Study some spells first \u2014 the quiz uses the words you have studied.";
      $3("quizMissed").replaceChildren();
      return;
    }
    qi = 0;
    score = 0;
    wrong.length = 0;
    question();
  }
  function shown(q, text, isPrompt = false) {
    if (isPrompt ? q.kind === "onoword" : q.kind === "meaning" || q.kind === "onomean") return [document.createTextNode(meaningIn(text))];
    if (isPrompt && q.kind === "onoctx") return furigana(text).map((x) => typeof x === "string" ? document.createTextNode(x) : x);
    return [document.createTextNode(text)];
  }
  var isJa = (q, prompt2) => prompt2 ? q.kind !== "onoword" : !["meaning", "onomean"].includes(q.kind);
  function question() {
    const q = quiz[qi];
    answered = false;
    $3("quizProgress").textContent = `Question ${qi + 1} of ${quiz.length}`;
    $3("quizScore").textContent = `${score} correct`;
    const [ja, en] = ASK[q.kind];
    $3("quizAsk").replaceChildren(el2("span", "ja", ja, { lang: "ja" }), el2("small", "", en));
    const prompt2 = $3("quizPrompt");
    prompt2.replaceChildren(...shown(q, q.prompt, true));
    prompt2.lang = isJa(q, true) ? "ja" : "en";
    prompt2.toggleAttribute("data-no-i18n", !isJa(q, true));
    prompt2.classList.toggle("underline", q.kind === "reading" || q.kind === "kanji");
    prompt2.classList.toggle("long", q.kind === "onoctx" || q.kind === "onoword");
    $3("quizSub").textContent = q.sub ? meaningIn(q.sub) : "";
    $3("quizFeedback").textContent = "";
    $3("quizFeedback").className = "quiz-feedback";
    $3("quizWord").hidden = true;
    $3("quizNext").hidden = true;
    $3("quizChoices").replaceChildren(...q.choices.map((c, i) => {
      const b = el2("button", "quiz-choice", void 0, { type: "button" });
      const t = el2("span", "t", void 0, isJa(q, false) ? { lang: "ja" } : { "data-no-i18n": "" });
      t.append(...shown(q, c));
      b.append(el2("span", "n", String(i + 1)), t);
      b.onclick = () => choose(i);
      return b;
    }));
  }
  function choose(i) {
    if (answered) return;
    answered = true;
    const q = quiz[qi];
    const ok = i === q.answer;
    if (ok) score++;
    else wrong.push(q);
    const btns = [...document.querySelectorAll("#quizChoices .quiz-choice")];
    btns.forEach((b, j) => {
      b.disabled = true;
      b.classList.toggle("right", j === q.answer);
      b.classList.toggle("wrong", j === i && !ok);
    });
    const right = q.choices[q.answer];
    $3("quizFeedback").textContent = ok ? "\u2713 Correct!" : `\u2717 The answer is ${q.kind === "meaning" || q.kind === "onomean" ? meaningIn(right) : right}`;
    $3("quizFeedback").className = `quiz-feedback ${ok ? "ok" : "no"}`;
    if (q.word) $3("quizWord").replaceChildren(el2("b", "", q.word.kanji, { lang: "ja" }), el2("span", "rd", q.word.reading, { lang: "ja" }), el2("span", "m", meaningIn(q.word.meaning)));
    $3("quizWord").hidden = !q.word;
    $3("quizScore").textContent = `${score} correct`;
    $3("quizNext").hidden = false;
    $3("quizNext").focus();
  }
  function nextQuestion() {
    if (!answered) return;
    qi++;
    if (qi < quiz.length) return question();
    $3("quizCard").hidden = true;
    $3("quizDone").hidden = false;
    $3("quizResult").textContent = `${score} / ${quiz.length} correct${score === quiz.length ? " \u2014 perfect!" : ""}`;
    if (mode2 === "jlpt") {
      void api.task("quiz", score, quiz.length).then((p) => onTaskDone.cb(p)).catch(() => {
      });
      if (!taskPassed("quiz", score, quiz.length)) toast("For the daily task, get 7 out of 10 or better \u2014 try another quiz!", 5e3);
    }
    const box = $3("quizMissed");
    if (!wrong.length) {
      box.replaceChildren();
      return;
    }
    const sel = el2("select", "ms-deck");
    for (const d of mode2 === "ono" ? ["ono", "struggling", "custom"] : ["struggling", "all", "custom"]) sel.append(Object.assign(el2("option", "", DECK_LABEL[d]), { value: d }));
    const save4 = el2("button", "pill", "Add the ones I missed");
    const msg = el2("span", "hint");
    save4.onclick = async () => {
      try {
        const r2 = await api.deckAdd(sel.value, wrong.map((q) => q.vocabId));
        msg.textContent = `${r2.added.length} added to ${tr(DECK_LABEL[sel.value])}.`;
        save4.disabled = true;
        onChanged();
      } catch (e) {
        msg.textContent = e.message;
      }
    };
    const head = el2("div", "ms-head");
    head.append(el2("span", "", `You missed ${wrong.length}:`), sel, save4, msg);
    const list = el2("div", "ms-words");
    list.append(...wrong.map((q) => el2("span", "ms-word on", q.word?.kanji ?? (q.kind === "kanji" ? q.choices[q.answer] : q.prompt), { lang: "ja" })));
    box.replaceChildren(head, list);
  }
  $3("quizNext").onclick = nextQuestion;
  $3("quizAgain").onclick = () => void startQuiz(mode2);
  $3("quizBack").onclick = () => backToStudy();
  $3("quizDoneBack").onclick = () => backToStudy();
  $3("quizBtn").onclick = () => void startQuiz("jlpt");
  $3("onoQuizBtn").onclick = () => void startQuiz("ono");
  addEventListener("keydown", (e) => {
    if ($3("quiz").hidden || e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
    const n = ["1", "2", "3", "4"].indexOf(e.key);
    if (n >= 0 && !answered) {
      e.preventDefault();
      choose(n);
    } else if ((e.key === "Enter" || e.key === " ") && answered) {
      e.preventDefault();
      nextQuestion();
    }
  });
  var passageWords = [];
  var blanks = [];
  var picked = 0;
  var checked = false;
  var lines = [];
  var storyTitle = null;
  var passageBuild = 0;
  function rubyBits(text, tap) {
    const out = [];
    const bits = text.split(/(\[[^\]|]+\|[^\]]+\])/);
    bits.forEach((bit, k) => {
      const m = /^\[([^\]|]+)\|([^\]]+)\]$/.exec(bit);
      if (!m) {
        if (bit) out.push(document.createTextNode(bit));
        return;
      }
      const r2 = el2("ruby");
      r2.append(m[1], el2("rt", "", m[2]));
      if (!tap) {
        out.push(r2);
        return;
      }
      const b = el2("button", "p-tok", void 0, { type: "button" });
      b.append(r2);
      const after = bits[k + 1] ?? "";
      b.onclick = () => void glossWord(m[1], m[2], after, b);
      out.push(b);
    });
    return out;
  }
  function jaLine(n) {
    const { ws, ex } = lines[n];
    let k = 0;
    const p = el2(storyTitle ? "span" : "p", storyTitle ? "p-sent" : "p-line");
    if (!storyTitle) p.append(el2("span", "p-n", String(n + 1)));
    for (const part of ex[0].split(/(【[^】]+】)/)) {
      if (!part) continue;
      if (part.startsWith("\u3010")) {
        const i = blanks.length;
        const b = el2("button", "p-blank", void 0, { type: "button", "data-i": String(i), title: "Tap, then pick a word below" });
        b.onclick = () => tapBlank(i);
        blanks.push({ answer: ws[Math.min(k++, ws.length - 1)], form: part.slice(1, -1), put: null, el: b });
        p.append(b);
      } else p.append(...rubyBits(part, true));
    }
    return p;
  }
  async function lookup(base, reading, after) {
    const { VOCAB: VOCAB2, loadVocab: loadVocab2 } = await Promise.resolve().then(() => (init_vocab2(), vocab_exports));
    try {
      await loadVocab2();
    } catch {
      return null;
    }
    const exact = VOCAB2.find((v) => v.kanji === base && v.reading === reading);
    if (exact) return { kanji: exact.kanji, reading: exact.reading, meaning: exact.meaning, id: exact.id };
    const near = VOCAB2.filter((v) => v.kanji.startsWith(base) && v.reading.startsWith(reading) && v.kanji.length <= base.length + 3 && !/[一-鿿]/.test(v.kanji.slice(base.length)));
    const best = near.find((v) => after.startsWith(v.kanji.slice(base.length))) ?? near.find((v) => v.kanji.length > base.length) ?? near[0];
    return best ? { kanji: best.kanji, reading: best.reading, meaning: best.meaning, id: best.id } : null;
  }
  function showGloss(at, ...kids) {
    document.querySelectorAll(".passage-text .on").forEach((x2) => x2.classList.remove("on"));
    at?.classList.add("on");
    const g = $3("passageGloss");
    const x = el2("button", "kp-x", "\u2715", { type: "button", "aria-label": "Close", title: "Close" });
    x.onclick = hideGloss;
    const body = el2("div", "pg-body");
    body.append(...kids);
    for (const b of body.querySelectorAll("b")) kanjiTappable(b);
    g.replaceChildren(x, body);
    g.hidden = false;
  }
  function hideGloss() {
    $3("passageGloss").hidden = true;
    document.querySelectorAll(".passage-text .on").forEach((x) => x.classList.remove("on"));
  }
  async function glossWord(base, reading, after, at) {
    const w = await lookup(base, reading, after);
    if (!w) {
      showGloss(at, el2("b", "", base, { lang: "ja" }), el2("span", "rd", reading, { lang: "ja" }), el2("span", "m hint", "Tap the kanji for its meaning"));
      return;
    }
    const dict = w.kanji !== base ? el2("span", "rd", `\u2192 ${w.kanji}`, { lang: "ja" }) : el2("span");
    showGloss(at, el2("b", "", base, { lang: "ja" }), el2("span", "rd", reading, { lang: "ja" }), dict, el2("span", "m", meaningIn(w.meaning)), addToDeck(w.kanji, w.id));
  }
  function addToDeck(word2, id) {
    const sel = el2("select", "p-add", void 0, { "aria-label": "Add to a deck" });
    sel.append(Object.assign(el2("option", "", "+ Add to\u2026"), { value: "" }));
    for (const d of ["struggling", "all", "custom"]) sel.append(Object.assign(el2("option", "", DECK_LABEL[d]), { value: d }));
    sel.onchange = async () => {
      const deck2 = sel.value;
      if (!deck2) return;
      sel.disabled = true;
      try {
        let vid = id;
        if (!vid) {
          const hits = (await api.searchWords(word2)).words;
          vid = (hits.find((w) => w.kanji === word2) ?? hits[0])?.id;
        }
        if (!vid) throw new Error(tr("That word is not in the dictionary"));
        const r2 = await api.deckAdd(deck2, [vid]);
        toast(r2.added.length ? `${word2} \u2192 ${tr(DECK_LABEL[deck2])}` : `${word2}: ${tr("already in")} ${tr(DECK_LABEL[deck2])}`);
      } catch (e) {
        toast(e.message);
      }
      sel.value = "";
      sel.disabled = false;
    };
    return sel;
  }
  function drawBlank(i) {
    const b = blanks[i];
    b.el.replaceChildren();
    b.el.classList.toggle("sel", !checked && i === picked);
    b.el.classList.toggle("filled", !!b.put);
    if (checked) {
      const ok = b.put?.kanji === b.answer.kanji;
      b.el.classList.add(ok ? "right" : "wrong");
      b.el.append(...rubyBits(b.form, false));
      if (!ok && b.put) b.el.append(el2("s", "p-was", b.put.kanji));
      b.el.onclick = () => showGloss(b.el, el2("b", "", b.answer.kanji, { lang: "ja" }), el2("span", "rd", b.answer.reading, { lang: "ja" }), el2("span", "m", meaningIn(b.answer.meaning)));
      return;
    }
    b.el.append(el2("span", "p-num", String(i + 1)), el2("span", "p-slot", b.put ? b.put.kanji : "\uFF3F\uFF3F", { lang: "ja" }));
  }
  function drawBank() {
    const used = new Set(blanks.filter((b) => b.put).map((b) => b.put.kanji));
    for (const c of document.querySelectorAll("#passageWords .p-chip")) c.disabled = checked || used.has(c.dataset.k);
    const left = blanks.filter((b) => !b.put).length;
    const check2 = document.getElementById("passageCheck");
    if (check2) {
      check2.disabled = checked || left === blanks.length;
      check2.textContent = left ? `Check (${left} empty)` : "Check";
    }
  }
  function tapBlank(i) {
    if (checked) return;
    if (blanks[i].put && picked === i) blanks[i].put = null;
    picked = i;
    blanks.forEach((_, k) => drawBlank(k));
    drawBank();
  }
  function putWord(w) {
    if (checked || !blanks.length) return;
    blanks[picked].put = w;
    const next3 = blanks.findIndex((b, k) => !b.put && k > picked);
    picked = next3 >= 0 ? next3 : Math.max(0, blanks.findIndex((b) => !b.put));
    blanks.forEach((_, k) => drawBlank(k));
    drawBank();
  }
  function drawTranslation() {
    const ru = lang() === "ru";
    const out = lines.map(({ ex }, i) => el2("p", "", `${storyTitle ? "" : `${i + 1}. `}${ru && ex[2] ? ex[2] : ex[1]}`, { "data-no-i18n": "" }));
    if (storyTitle) out.unshift(el2("p", "p-tr-title", ru ? storyTitle.ru : storyTitle.en, { "data-no-i18n": "" }));
    $3("passageTr").replaceChildren(...out);
  }
  var passageHooks = {};
  var onTaskDone = { cb: (_p) => {
  } };
  function check() {
    checked = true;
    hideGloss();
    blanks.forEach((_, k) => drawBlank(k));
    const right = blanks.filter((b) => b.put?.kanji === b.answer.kanji).length;
    drawTranslation();
    const list = lines.flatMap((l) => l.ws).map((w) => {
      const row = el2("div", "pw");
      row.append(el2("b", "", w.kanji, { lang: "ja" }), el2("span", "rd", w.reading, { lang: "ja" }), el2("span", "m", meaningIn(w.meaning)));
      return row;
    });
    const res2 = $3("passageResult");
    res2.replaceChildren(el2("h4", "", "Words in this passage"), ...list);
    res2.hidden = false;
    const again = el2("button", "big", "New passage", { type: "button" });
    again.onclick = buildPassage;
    $3("passageWords").replaceChildren(el2("div", "p-score", `${right} / ${blanks.length}`), el2("p", "hint center", right === blanks.length ? "Perfect \u2014 every word in its place!" : "Green: right. Red: the right word, with yours crossed out."), again);
    passageHooks.done?.(right, blanks.length);
    void api.task("passage", right, blanks.length).then((p) => onTaskDone.cb(p)).catch(() => {
    });
    if (!taskPassed("passage", right, blanks.length)) toast("For the daily task, get half the blanks right (4 of 8) \u2014 try a new passage!", 5e3);
  }
  function openPassage(words2) {
    passageWords = words2.filter((w) => w.kanji).slice(0, 60);
    show("passage");
    showIntro();
    void api.storyUsage().then(showQuota).catch(() => {
    });
    void buildPassage();
  }
  var f1 = (n) => n.toFixed(1);
  var storyUsage = null;
  function showQuota(u) {
    storyUsage = u;
    const q = $3("passageQuota");
    q.hidden = !u.enabled;
    const left = Math.max(0, u.limit - u.used);
    q.textContent = `${tr("AI stories left today")}: ${left} / ${u.limit}`;
    q.title = tr("Each new AI story counts once; the same words again come free. The count starts over at midnight.");
    q.classList.toggle("low", left <= 5);
    $3("passageIntroQuota").hidden = !u.enabled;
  }
  var INTRO_KEY = "kw:passage-intro";
  function showIntro() {
    let seen2 = false;
    try {
      seen2 = localStorage.getItem(INTRO_KEY) === "1";
    } catch {
    }
    $3("passageIntro").hidden = seen2;
  }
  $3("passageIntroOk").onclick = () => {
    $3("passageIntro").hidden = true;
    try {
      localStorage.setItem(INTRO_KEY, "1");
    } catch {
    }
  };
  function storyWhy(why) {
    if (why === "off") return tr("AI stories are switched off on the server \u2014 here are your words\u2019 example sentences instead.");
    if (why === "limit") return tr("You\u2019ve used all of today\u2019s AI stories \u2014 here are your words\u2019 example sentences instead. New stories tomorrow!");
    if (why === "wait") return tr("Your last story is still being written \u2014 try \u201CNew passage\u201D again in a moment.");
    if (why === "busy") return tr("Today\u2019s AI stories for everyone are used up \u2014 here are your words\u2019 example sentences instead.");
    if (why === "timeout") return tr("The story took too long \u2014 here are your words\u2019 example sentences instead. Try \u201CNew passage\u201D again.");
    if (why === "few words") return tr("Too few words for a story \u2014 here are their example sentences.");
    if (why === OFFLINE_TEXT) return tr("You\u2019re offline \u2014 here are your words\u2019 example sentences instead.");
    return `${tr("The AI couldn\u2019t write a story this time \u2014 here are your words\u2019 example sentences instead. Try \u201CNew passage\u201D again.")} (${why.slice(0, 120)})`;
  }
  async function buildPassage() {
    $3("passageResult").hidden = true;
    $3("passageResult").replaceChildren();
    hideGloss();
    const examples = await loadExamples();
    const build2 = ++passageBuild;
    const seen2 = /* @__PURE__ */ new Set();
    const mixed = [...passageWords].sort(() => Math.random() - 0.5).filter((w) => !seen2.has(w.kanji) && !!seen2.add(w.kanji));
    const pool = [...mixed.filter((w) => !!w.id && examples.has(w.id)), ...mixed.filter((w) => !w.id || !examples.has(w.id))].slice(0, 8);
    const text = $3("passageText");
    blanks = [];
    picked = 0;
    checked = false;
    lines = [];
    storyTitle = null;
    $3("passageWords").replaceChildren();
    const note = $3("passageNote");
    note.hidden = true;
    if (pool.length >= 2 && storyUsage?.enabled !== false) {
      const bar = el2("i");
      const sec = el2("span", "", "0");
      const msg = el2("p", "hint");
      msg.append(`\u270D ${tr("Writing a story with your words\u2026")} `, sec, " s");
      const box = el2("div", "p-load", void 0, { lang: lang() });
      box.append(Object.assign(el2("div", "p-load-bar"), { role: "progressbar" }), msg);
      box.firstElementChild.append(bar);
      text.replaceChildren(box);
      const t0 = Date.now();
      const again = $3("passageNew");
      again.disabled = true;
      const tick2 = window.setInterval(() => {
        const t = (Date.now() - t0) / 1e3;
        bar.style.width = `${f1(96 * (1 - Math.exp(-t / 14)))}%`;
        sec.textContent = String(Math.floor(t));
      }, 250);
      const r2 = await Promise.race([
        api.story(pool.map((w) => ({ id: w.id, kanji: w.kanji, reading: w.reading, meaning: w.meaning }))).catch((e) => ({ story: null, why: e.message, usage: void 0 })),
        new Promise((ok) => setTimeout(() => ok({ story: null, why: "timeout", usage: void 0 }), 95e3))
      ]);
      clearInterval(tick2);
      again.disabled = false;
      if (build2 !== passageBuild) return;
      if (r2.usage) showQuota(r2.usage);
      if (r2.story) {
        bar.style.width = "100%";
        storyTitle = r2.story.title;
        lines = r2.story.lines.map((l) => ({ ws: l.words.map((i) => pool[i]), ex: [l.ja, l.en, l.ru] }));
      } else if (r2.why) {
        note.textContent = storyWhy(r2.why);
        note.hidden = false;
      }
    } else if (storyUsage?.enabled === false) {
      note.textContent = storyWhy("off");
      note.hidden = false;
    }
    if (!lines.length) lines = pool.filter((w) => !!w.id && examples.has(w.id)).map((w) => ({ ws: [w], ex: examples.get(w.id) }));
    const title = storyTitle ? el2("p", "p-title") : null;
    if (title && storyTitle) title.append(...rubyBits(storyTitle.ja, false));
    const body = storyTitle ? el2("p", "p-story") : null;
    const sents = lines.map((_, i) => jaLine(i));
    if (body) body.append(...sents);
    text.replaceChildren(...title && body ? [title, body] : sents);
    blanks.forEach((_, k) => drawBlank(k));
    drawTranslation();
    const bank = el2("div", "p-bank");
    for (const w of lines.flatMap((l) => l.ws).sort(() => Math.random() - 0.5)) {
      const c = el2("button", "p-chip", w.kanji, { type: "button", lang: "ja", "data-k": w.kanji });
      c.onclick = () => putWord(w);
      bank.append(c);
    }
    const go = el2("button", "big", "Check", { id: "passageCheck", type: "button" });
    go.onclick = check;
    $3("passageWords").replaceChildren(el2("h4", "", "Your words \u2014 tap a blank, then a word"), bank, go);
    drawBank();
    if (!lines.length) {
      text.replaceChildren(el2("p", "hint", "No words with example sentences in this deck yet \u2014 pick another deck above, or study some spells first."));
      $3("passageWords").replaceChildren();
    }
  }
  $3("passageNew").onclick = () => void buildPassage();
  $3("passageBack").onclick = () => {
    hideGloss();
    backToStudy();
  };
  var passageDeck = "struggling";
  async function passageFrom(deck2) {
    passageDeck = deck2;
    $3("passageDeck").value = deck2;
    try {
      let words2 = (await api.deckWords(deck2)).words;
      if (words2.length < 8 && deck2 !== "all") words2 = [...words2, ...(await api.deckWords("all")).words.filter((w) => w.state !== "new").slice(0, 30)];
      const mapped = words2.sort(() => Math.random() - 0.5).slice(0, 60).map((w) => ({ kanji: w.kanji, reading: w.reading, meaning: w.meaning, id: w.vocabId }));
      if ($3("passage").hidden) openPassage(mapped);
      else {
        passageWords = mapped;
        void buildPassage();
      }
    } catch (e) {
      toast(e.message);
    }
  }
  {
    const sel = $3("passageDeck");
    for (const d of ["struggling", "all", "custom", "ono"]) sel.append(Object.assign(el2("option", "", DECK_LABEL[d]), { value: d }));
    sel.onchange = () => {
      storyFrom = `deck:${sel.value}`;
      void passageFrom(sel.value);
    };
  }
  var storyFrom = "";
  $3("passageBtn").onclick = () => {
    if (storyFrom === `deck:${passageDeck}` && lines.length) {
      show("passage");
      return;
    }
    storyFrom = `deck:${passageDeck}`;
    void passageFrom(passageDeck);
  };

  // src/client/dailytasks.ts
  var $4 = $;
  var NEVER = "kb:tasksNoticeOff";
  var store = {
    get: (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    },
    set: (k, v) => {
      try {
        if (v) localStorage.setItem(k, v);
        else localStorage.removeItem(k);
      } catch {
      }
    }
  };
  var ICON = { learn: "\u5B66", quiz: "\u554F", daily: "\u65E5", passage: "\u8AAD" };
  var taskActions = {};
  var last2 = null;
  var shownThisVisit = false;
  var doneCount = (p) => (p.tasks ?? []).filter((t) => t.value >= t.target).length;
  var wasAll = null;
  function renderTasks(p) {
    last2 = p;
    const tasks = p.tasks ?? [];
    if (!tasks.length) return;
    const n = doneCount(p), all = n === tasks.length;
    if (wasAll === false && all) toast(`\u{1F525} ${tr("Daily streak kept!")} +500 XP`, 5e3);
    wasAll = all;
    const btn = $4("tasksBtn");
    btn.hidden = false;
    btn.classList.toggle("done", all);
    btn.replaceChildren(
      Object.assign(document.createElement("span"), { className: "tb-fire", textContent: "\u{1F525}" }),
      Object.assign(document.createElement("span"), { className: "tb-text", textContent: all ? tr("Streak kept today \u2014 well done!") : `${tr("Daily streak tasks")}: ${n}/${tasks.length}` }),
      Object.assign(document.createElement("span"), { className: "tb-days", textContent: `${p.streak ?? 0}` })
    );
    $4("ppTasks").textContent = `${tr("Today\u2019s streak tasks")}: ${n}/${tasks.length} \u203A`;
    if (!$4("tasksDialog").open) return;
    fill(p);
  }
  function fill(p) {
    const tasks = p.tasks ?? [];
    $4("tasksStreak").replaceChildren(
      Object.assign(document.createElement("b"), { textContent: String(p.streak ?? 0) }),
      Object.assign(document.createElement("span"), { textContent: tr("days in a row") })
    );
    $4("tasksList").replaceChildren(...tasks.map((t) => {
      const li = document.createElement("li");
      const ok = t.value >= t.target;
      li.className = ok ? "ok" : "";
      const ic = Object.assign(document.createElement("span"), { className: "tk-ic", textContent: ok ? "\u2713" : ICON[t.id] ?? "\u2022" });
      ic.lang = "ja";
      const label = Object.assign(document.createElement("span"), { className: "tk-label", textContent: tr(t.label) });
      const prog = Object.assign(document.createElement("span"), { className: "tk-prog", textContent: `${t.value}/${t.target}` });
      li.append(ic, label, prog);
      const go = taskActions[t.id];
      if (!ok && go) {
        const b = Object.assign(document.createElement("button"), { className: "pill", textContent: tr("Go"), type: "button" });
        b.onclick = () => {
          $4("tasksDialog").close();
          go();
        };
        li.append(b);
      }
      return li;
    }));
  }
  function openTasks() {
    if (!last2) return;
    fill(last2);
    $4("tasksNever").checked = store.get(NEVER) === "1";
    const d = $4("tasksDialog");
    if (!d.open) d.showModal();
  }
  function tasksAtLogin(p) {
    if (shownThisVisit || store.get(NEVER) === "1" || !(p.tasks ?? []).length || doneCount(p) === (p.tasks ?? []).length) return;
    shownThisVisit = true;
    last2 = p;
    openTasks();
  }
  function initTasks() {
    $4("tasksBtn").onclick = openTasks;
    $4("ppTasks").onclick = () => {
      $4("profilePop").hidden = true;
      openTasks();
    };
    $4("tasksOk").onclick = () => $4("tasksDialog").close();
    $4("tasksNever").onchange = (e) => store.set(NEVER, e.target.checked ? "1" : "");
  }

  // src/client/rewards.ts
  var KEY4 = (uid2) => `kb:seenRewards:${uid2}`;
  var load3 = (uid2) => {
    try {
      const r2 = localStorage.getItem(KEY4(uid2));
      return r2 ? JSON.parse(r2) : null;
    } catch {
      return null;
    }
  };
  var save = (uid2, keys) => {
    try {
      localStorage.setItem(KEY4(uid2), JSON.stringify(keys));
    } catch {
    }
  };
  function haveNow(p) {
    const lvl = levelOf(p.xp), best = Math.max(p.bestStreak ?? 0, p.streak ?? 0), un = p.unlocks ?? [];
    const out = [];
    for (const b of BACKGROUNDS) if (b.level > 0 && unlocked(b.id, p.xp)) out.push({ key: `arena:${b.id}`, kind: "arena", id: b.id, name: `${b.name} arena`, why: `You reached level ${b.level}` });
    for (const f2 of FLAMES) if ((f2.level > 0 || f2.season) && flameUnlocked(f2.id, p.xp, un)) out.push({ key: `flame:${f2.id}`, kind: "flame", id: f2.id, name: `${f2.name} flames`, why: f2.season ? "Monthly goals complete" : `You reached level ${f2.level}` });
    for (const s of STAFFS) if ((s.streak || s.season) && staffUnlocked(s.id, best, un)) out.push({ key: `staff:${s.id}`, kind: "staff", id: s.id, name: s.name, why: s.season ? "Monthly goals complete" : `A ${s.streak}-day daily streak` });
    for (const b of BORDERS) if ((b.level > 0 || b.unlock) && borderUnlocked(b.id, lvl, un)) out.push({ key: `border:${b.id}`, kind: "border", id: b.id, name: `${b.name} border`, why: b.unlock ? "Thank you for playing the beta!" : `You reached level ${b.level}` });
    return out;
  }
  var queue = [];
  var profile = null;
  var onEquipped = () => {
  };
  function checkRewards(uid2, p, isAdmin, equipped) {
    if (isAdmin) return;
    profile = p;
    onEquipped = equipped;
    const now2 = haveNow(p);
    const seen2 = load3(uid2);
    save(uid2, [.../* @__PURE__ */ new Set([...seen2 ?? [], ...now2.map((r2) => r2.key)])]);
    if (!seen2) return;
    const fresh = now2.filter((r2) => !seen2.includes(r2.key) && !queue.some((q) => q.key === r2.key));
    if (!fresh.length) return;
    queue.push(...fresh);
    if (!$("rewardDialog").open) showNext();
  }
  function preview(r2, p) {
    const box = document.createElement("div");
    box.className = `rw-preview rw-${r2.kind}`;
    if (r2.kind === "arena") box.innerHTML = backgroundThumb(r2.id, resolveTime(getTimePref()));
    else if (r2.kind === "staff") {
      const w = document.createElement("div");
      w.className = "rw-char";
      w.innerHTML = avatarSvg(avatarFor(p.studyLevels), "me", r2.id);
      const s = document.createElement("div");
      s.className = "pixel-staff big";
      s.innerHTML = staffSvg(r2.id);
      box.append(s, w);
    } else if (r2.kind === "flame") {
      const w = document.createElement("div");
      w.className = "wizard me onfire";
      paintFlame(w, r2.id);
      const sp = document.createElement("div");
      sp.className = "sprite";
      sp.innerHTML = avatarSvg(avatarFor(p.studyLevels), "me", p.staff);
      const au = document.createElement("div");
      au.className = "aura";
      w.append(au, sp);
      box.append(w);
    } else {
      const d = document.createElement("div");
      d.className = `pp-pic big${p.pic ? " has-pic" : ""}${borderCls(r2.id)}`;
      if (p.pic) {
        const img = picEl(p.pic, "pic fill");
        if (img) d.append(img);
      } else d.textContent = (myName() || "\u2726").slice(0, 1).toUpperCase();
      box.append(d);
    }
    return box;
  }
  function showNext() {
    const r2 = queue.shift();
    const d = $("rewardDialog");
    if (!r2 || !profile) {
      if (d.open) d.close();
      return;
    }
    const p = profile;
    $("rewardWhy").textContent = r2.why;
    $("rewardName").textContent = r2.name;
    $("rewardPreview").replaceChildren(preview(r2, p));
    const equipped = r2.kind === "arena" && p.background === r2.id || r2.kind === "flame" && p.flame === r2.id || r2.kind === "staff" && p.staff === r2.id || r2.kind === "border" && (p.border ?? "none") === r2.id;
    const eq = $("rewardEquip");
    eq.hidden = equipped;
    eq.disabled = false;
    eq.onclick = async () => {
      eq.disabled = true;
      try {
        const res2 = r2.kind === "arena" ? await api.setBackground(r2.id) : r2.kind === "flame" ? await api.setFlame(r2.id) : r2.kind === "staff" ? await api.setStaff(r2.id) : await api.setBorder(r2.id);
        profile = res2.profile;
        onEquipped(res2.profile);
        toast(`${r2.name} equipped`);
        showNext();
      } catch (e) {
        eq.disabled = false;
        toast(e.message);
      }
    };
    $("rewardOk").onclick = () => showNext();
    if (!d.open) d.showModal();
    d.classList.remove("pop");
    void d.offsetWidth;
    d.classList.add("pop");
  }

  // src/client/whatsnew.ts
  var PATCHES = [
    {
      v: "0.9.9.4.4.7",
      date: "2026-10",
      en: [
        "Onomatopoeia quiz: no more \u201Cwhich kind is it\u201D questions \u2014 just the meanings, the words and the sentences.",
        "Answers: \u3062 / \u3065 also accept \u3058 / \u305A \u2014 \u201Ctsuzuku\u201D is right for \u7D9A\u304F, \u201Chanaji\u201D for \u9F3B\u8840.",
        "Phones: nothing hides under the Friends button any more; the level names in All spells (\u3072\u3089\u304C\u306A, \u30AB\u30BF\u30AB\u30CA) aren\u2019t cut off; the study card header fits; no keyboard hints (Esc, Space) on touch screens.",
        "Study cards before a battle: long words (\u5F15\u3063\u8D8A\u3059) stay on one line.",
        "Reading passage: \u201CNew passage\u201D waits while a story is being written, and the daily AI-story limit can\u2019t be got round.",
        "Russian: the answer box, the battle log, the results, the borders and a few lobby texts are translated now.",
        "Under the hood: unused old code and styles removed (the old pixel staffs, old screens\u2019 CSS, stale translations)."
      ],
      ru: [
        "\u0422\u0435\u0441\u0442 \u043F\u043E \u043E\u043D\u043E\u043C\u0430\u0442\u043E\u043F\u0435\u0435: \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \xAB\u043A\u0430\u043A\u043E\u0433\u043E \u044D\u0442\u043E \u0432\u0438\u0434\u0430\xBB \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u0441\u043B\u043E\u0432\u0430 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F.",
        "\u041E\u0442\u0432\u0435\u0442\u044B: \u3062 / \u3065 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u0438 \u043A\u0430\u043A \u3058 / \u305A \u2014 \xABtsuzuku\xBB \u0432\u0435\u0440\u043D\u043E \u0434\u043B\u044F \u7D9A\u304F, \xABhanaji\xBB \u0434\u043B\u044F \u9F3B\u8840.",
        "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B: \u043D\u0438\u0447\u0435\u0433\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u0440\u044F\u0447\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \xAB\u0414\u0440\u0443\u0437\u044C\u044F\xBB; \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u0432\u043E \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\u0445\xBB (\u3072\u3089\u304C\u306A, \u30AB\u30BF\u30AB\u30CA) \u043D\u0435 \u043E\u0431\u0440\u0435\u0437\u0430\u044E\u0442\u0441\u044F; \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u043F\u043E\u043C\u0435\u0449\u0430\u0435\u0442\u0441\u044F; \u043D\u0430 \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u043D\u0435\u0442 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043A\u043B\u0430\u0432\u0438\u0448 (Esc, \u041F\u0440\u043E\u0431\u0435\u043B).",
        "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0435\u0440\u0435\u0434 \u0431\u043E\u0435\u043C: \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 (\u5F15\u3063\u8D8A\u3059) \u043F\u043E\u043C\u0435\u0449\u0430\u044E\u0442\u0441\u044F \u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u043E\u043A\u0443.",
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \xAB\u041D\u043E\u0432\u044B\u0439 \u0442\u0435\u043A\u0441\u0442\xBB \u0436\u0434\u0451\u0442, \u043F\u043E\u043A\u0430 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u0441\u043A\u0430\u0437, \u0430 \u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u043B\u0438\u043C\u0438\u0442 \u0418\u0418-\u0440\u0430\u0441\u0441\u043A\u0430\u0437\u043E\u0432 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0431\u043E\u0439\u0442\u0438.",
        "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A: \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u044B \u043F\u043E\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430, \u0436\u0443\u0440\u043D\u0430\u043B \u0431\u043E\u044F, \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B, \u0440\u0430\u043C\u043A\u0438 \u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u043A\u0441\u0442\u043E\u0432 \u043B\u043E\u0431\u0431\u0438.",
        "\u0412\u043D\u0443\u0442\u0440\u0438: \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u0440\u044B\u0439 \u043A\u043E\u0434 \u0438 \u0441\u0442\u0438\u043B\u0438 (\u0441\u0442\u0430\u0440\u044B\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0441\u043E\u0445\u0438, CSS \u0441\u0442\u0430\u0440\u044B\u0445 \u044D\u043A\u0440\u0430\u043D\u043E\u0432, \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u044B)."
      ]
    },
    {
      v: "0.9.9.4.4.6",
      date: "2026-10",
      en: [
        "Reading passage: fixed the AI story failing with \u201Cinvalid argument\u201D on newer Gemini models \u2014 it now finds the settings your model accepts by itself.",
        "Study spells: \u201Clearned in total\u201D now includes the words you learned today."
      ],
      ru: [
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \xABinvalid argument\xBB \u0443 \u043D\u043E\u0432\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u0435\u0439 Gemini \u2014 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441\u0430\u043C\u043E \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043C\u043E\u0434\u0435\u043B\u044C.",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \xAB\u0432\u044B\u0443\u0447\u0435\u043D\u043E \u0432\u0441\u0435\u0433\u043E\xBB \u0442\u0435\u043F\u0435\u0440\u044C \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0441\u043B\u043E\u0432\u0430, \u0432\u044B\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u0441\u0435\u0433\u043E\u0434\u043D\u044F."
      ]
    },
    {
      v: "0.9.9.4.4.5",
      date: "2026-10",
      en: [
        "Reading passage: the AI now writes one flowing story where your 8 words appear wherever they fit \u2014 a sentence can hold two of them, or none \u2014 instead of one sentence per word. Fill in the blanks from the context.",
        "Reading passage: a progress bar while the story is written (it can take a few seconds), a counter of how many AI stories you have left today (40 a day), and a short explainer the first time you open it. When there is no AI story, it says why.",
        "Reading passage: stories are far less often thrown away over a small slip, and the app waits long enough for them.",
        "All spells: unticking \u201CI\u2019ve mastered hiragana\u201D no longer resets your numbers per level \u2014 the kanji levels are just locked (greyed out, no new words) until you tick it again.",
        "How to play: updated \u2014 your own words in battles, the four study decks, +5 XP per card, the practice modes and hiragana first."
      ],
      ru: [
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u0418\u0418 \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u0438\u0448\u0435\u0442 \u043E\u0434\u0438\u043D \u0441\u0432\u044F\u0437\u043D\u044B\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437, \u0433\u0434\u0435 \u0432\u0430\u0448\u0438 8 \u0441\u043B\u043E\u0432 \u0441\u0442\u043E\u044F\u0442 \u0442\u0430\u043C, \u0433\u0434\u0435 \u043E\u043D\u0438 \u043A \u043C\u0435\u0441\u0442\u0443 (\u0432 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0434\u0432\u0430 \u0441\u043B\u043E\u0432\u0430 \u0438\u043B\u0438 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E), \u0430 \u043D\u0435 \u043F\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u043D\u0430 \u0441\u043B\u043E\u0432\u043E. \u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0439\u0442\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438 \u043F\u043E \u0441\u043C\u044B\u0441\u043B\u0443.",
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u043F\u043E\u043B\u043E\u0441\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438, \u043F\u043E\u043A\u0430 \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u0441\u043A\u0430\u0437 (\u044D\u0442\u043E \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434), \u0441\u0447\u0451\u0442\u0447\u0438\u043A \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F \u043D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0418\u0418-\u0440\u0430\u0441\u0441\u043A\u0430\u0437\u043E\u0432 (40 \u0432 \u0434\u0435\u043D\u044C) \u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438. \u0415\u0441\u043B\u0438 \u0418\u0418-\u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430 \u043D\u0435\u0442, \u0432\u0438\u0434\u043D\u043E \u043F\u043E\u0447\u0435\u043C\u0443.",
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B \u0433\u043E\u0440\u0430\u0437\u0434\u043E \u0440\u0435\u0436\u0435 \u043E\u0442\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0438\u0437-\u0437\u0430 \u043C\u0435\u043B\u043A\u043E\u0439 \u043E\u0448\u0438\u0431\u043A\u0438, \u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0436\u0434\u0451\u0442 \u0438\u0445 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u043E\u043B\u0433\u043E.",
        "\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F: \u0435\u0441\u043B\u0438 \u0441\u043D\u044F\u0442\u044C \xAB\u042F \u043E\u0441\u0432\u043E\u0438\u043B \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443\xBB, \u0447\u0438\u0441\u043B\u0430 \u043F\u043E \u0443\u0440\u043E\u0432\u043D\u044F\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u2014 \u0443\u0440\u043E\u0432\u043D\u0438 \u043A\u0430\u043D\u0434\u0437\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044B (\u0441\u0435\u0440\u044B\u0435, \u0431\u0435\u0437 \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432), \u043F\u043E\u043A\u0430 \u0433\u0430\u043B\u043E\u0447\u043A\u0430 \u0441\u043D\u043E\u0432\u0430 \u043D\u0435 \u0441\u0442\u043E\u0438\u0442.",
        "\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C: \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u2014 \u0432\u0430\u0448\u0438 \u0441\u043B\u043E\u0432\u0430 \u0432 \u0431\u043E\u044F\u0445, \u0447\u0435\u0442\u044B\u0440\u0435 \u043A\u043E\u043B\u043E\u0434\u044B, +5 \u043E\u043F\u044B\u0442\u0430 \u0437\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443, \u0440\u0435\u0436\u0438\u043C\u044B \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u0438 \xAB\u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0430\xBB."
      ]
    },
    {
      v: "0.9.9.4.4.4",
      date: "2026-10",
      en: [
        "World Tree: a much fuller crown \u2014 a solid mass of leaves shaded from dark underneath to sunlit on top, branches showing through, no leaves hanging loose in the air \u2014 and shaded roots with ridges and moss that blend into the trunk.",
        "Rune stones: every stone sits in a little mound of earth with grass and pebbles at its foot; in the forest they stand on the forest floor.",
        "Castle: the soldiers stand behind the rune stones now."
      ],
      ru: [
        "\u041C\u0438\u0440\u043E\u0432\u043E\u0435 \u0434\u0440\u0435\u0432\u043E: \u0433\u043E\u0440\u0430\u0437\u0434\u043E \u0431\u043E\u043B\u0435\u0435 \u043F\u044B\u0448\u043D\u0430\u044F \u043A\u0440\u043E\u043D\u0430 \u2014 \u0441\u043F\u043B\u043E\u0448\u043D\u0430\u044F \u043C\u0430\u0441\u0441\u0430 \u043B\u0438\u0441\u0442\u0432\u044B, \u0442\u0451\u043C\u043D\u0430\u044F \u0441\u043D\u0438\u0437\u0443 \u0438 \u043E\u0441\u0432\u0435\u0449\u0451\u043D\u043D\u0430\u044F \u0441\u0432\u0435\u0440\u0445\u0443, \u0441\u043A\u0432\u043E\u0437\u044C \u043D\u0435\u0451 \u0432\u0438\u0434\u043D\u044B \u0432\u0435\u0442\u0432\u0438, \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u0438\u0441\u0438\u0442 \u0432 \u0432\u043E\u0437\u0434\u0443\u0445\u0435 \u2014 \u0438 \u043A\u043E\u0440\u043D\u0438 \u0441 \u0442\u0435\u043D\u044C\u044E, \u043F\u0440\u043E\u0436\u0438\u043B\u043A\u0430\u043C\u0438 \u0438 \u043C\u0445\u043E\u043C, \u043F\u043B\u0430\u0432\u043D\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0432 \u0441\u0442\u0432\u043E\u043B.",
        "\u0420\u0443\u043D\u043D\u044B\u0435 \u043A\u0430\u043C\u043D\u0438: \u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u0442\u043E\u0438\u0442 \u0432 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u043C \u0445\u043E\u043B\u043C\u0438\u043A\u0435 \u0437\u0435\u043C\u043B\u0438 \u0441 \u0442\u0440\u0430\u0432\u043E\u0439 \u0438 \u043A\u0430\u043C\u0435\u0448\u043A\u0430\u043C\u0438 \u0443 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F; \u0432 \u043B\u0435\u0441\u0443 \u043E\u043D\u0438 \u0441\u0442\u043E\u044F\u0442 \u043D\u0430 \u0437\u0435\u043C\u043B\u0435.",
        "\u0417\u0430\u043C\u043E\u043A: \u0441\u043E\u043B\u0434\u0430\u0442\u044B \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u0442\u043E\u044F\u0442 \u043F\u043E\u0437\u0430\u0434\u0438 \u0440\u0443\u043D\u043D\u044B\u0445 \u043A\u0430\u043C\u043D\u0435\u0439."
      ]
    },
    {
      v: "0.9.9.4.4.3",
      date: "2026-10",
      en: [
        "2D arenas repainted in more detail: soft light and shadow instead of outlines, fluffy clouds, snowy mountain peaks, leafy trees and bushes, ivy, brick walls and banners on the castle, lily pads in the swamp, fields around the villages \u2014 and no more film-grain filter.",
        "Menus: behind every screen except the main menu, the middle of the background is dimmed a little, so text and cards are easier to read."
      ],
      ru: [
        "2D-\u0430\u0440\u0435\u043D\u044B \u043F\u0435\u0440\u0435\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u044B \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435: \u043C\u044F\u0433\u043A\u0438\u0439 \u0441\u0432\u0435\u0442 \u0438 \u0442\u0435\u043D\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u043A\u043E\u043D\u0442\u0443\u0440\u043E\u0432, \u043F\u0443\u0448\u0438\u0441\u0442\u044B\u0435 \u043E\u0431\u043B\u0430\u043A\u0430, \u0441\u043D\u0435\u0436\u043D\u044B\u0435 \u0432\u0435\u0440\u0448\u0438\u043D\u044B, \u043B\u0438\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0434\u0435\u0440\u0435\u0432\u044C\u044F \u0438 \u043A\u0443\u0441\u0442\u044B, \u043F\u043B\u044E\u0449, \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0435 \u0441\u0442\u0435\u043D\u044B \u0438 \u0437\u043D\u0430\u043C\u0451\u043D\u0430 \u0437\u0430\u043C\u043A\u0430, \u043A\u0443\u0432\u0448\u0438\u043D\u043A\u0438 \u043D\u0430 \u0431\u043E\u043B\u043E\u0442\u0435, \u043F\u043E\u043B\u044F \u0443 \u0434\u0435\u0440\u0435\u0432\u0435\u043D\u044C \u2014 \u0438 \u0431\u0435\u0437 \xAB\u043A\u0438\u043D\u043E\u0448\u043D\u043E\u0433\u043E\xBB \u0437\u0435\u0440\u043D\u0430.",
        "\u041C\u0435\u043D\u044E: \u043D\u0430 \u0432\u0441\u0435\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445, \u043A\u0440\u043E\u043C\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u044E, \u0446\u0435\u043D\u0442\u0440 \u0444\u043E\u043D\u0430 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0437\u0430\u0442\u0435\u043C\u043D\u0451\u043D \u2014 \u0442\u0435\u043A\u0441\u0442 \u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043B\u0435\u0433\u0447\u0435."
      ]
    },
    {
      v: "0.9.9.4.4.2",
      date: "2026-10",
      en: [
        "Battles use your own words: 1v1 Kanji Reading, Kanji Writing and Boss take the words of your levels from your All spells (random words fill up when you have too few) \u2014 marked \u2605 on the study cards.",
        "1v1 Rapid: the first 10 rounds are 5 words from each player\u2019s All spells, and each round says whose word it is.",
        "Study spells: every card you answer gives +5 XP (up to 500 a day). The first few each day show \u201C+5 XP\u201D, then it stays quiet.",
        "Study spells: \u201Clearned today\u201D, \u201Clearned in total\u201D and today\u2019s study XP are big tiles at the top, and the new-spells-a-day total is big too.",
        "New 2D arenas look: a painted style with fine grain \u2014 faceted mountains, outlined clouds, dense grass with little flowers, bark, stone brickwork \u2014 and the World Tree\u2019s four rune stones now stand in every arena.",
        "Fixes: \u201C\u2190 Leave room\u201D looks like \u201C\u2190 Menu\u201D; the menu\u2019s small buttons no longer overlap the menu on short screens; the quizzes have room under \u201C\u2190 Study\u201D.",
        "Reading passage stories can now be written by Google Gemini (free tier), Claude or any OpenAI-compatible AI \u2014 whichever key the server has."
      ],
      ru: [
        "\u0411\u043E\u0438 \u2014 \u0432\u0430\u0448\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438: \xAB\u0427\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438\xBB, \xAB\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438\xBB \u0438 \xAB\u0411\u043E\u0441\u0441\xBB \u0431\u0435\u0440\u0443\u0442 \u0441\u043B\u043E\u0432\u0430 \u0432\u0430\u0448\u0438\u0445 \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u0438\u0437 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB (\u0435\u0441\u043B\u0438 \u043C\u0430\u043B\u043E \u2014 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435), \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u0445 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043E\u043D\u0438 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u044B \u2605.",
        "1v1 \u0420\u0430\u043F\u0438\u0434: \u043F\u0435\u0440\u0432\u044B\u0435 10 \u0440\u0430\u0443\u043D\u0434\u043E\u0432 \u2014 \u043F\u043E 5 \u0441\u043B\u043E\u0432 \u0438\u0437 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0433\u0440\u043E\u043A\u0430, \u0438 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0440\u0430\u0443\u043D\u0434\u0435 \u0432\u0438\u0434\u043D\u043E, \u0447\u044C\u0451 \u044D\u0442\u043E \u0441\u043B\u043E\u0432\u043E.",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u043A\u0430\u0436\u0434\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0434\u0430\u0451\u0442 +5 \u043E\u043F\u044B\u0442\u0430 (\u0434\u043E 500 \u0432 \u0434\u0435\u043D\u044C). \u041F\u0435\u0440\u0432\u044B\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u0430 \u0434\u0435\u043D\u044C \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \xAB+5 XP\xBB, \u0434\u0430\u043B\u044C\u0448\u0435 \u2014 \u0431\u0435\u0437 \u043E\u0442\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0439.",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \xAB\u0432\u044B\u0443\u0447\u0435\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F\xBB, \xAB\u0432\u044B\u0443\u0447\u0435\u043D\u043E \u0432\u0441\u0435\u0433\u043E\xBB \u0438 \u043E\u043F\u044B\u0442 \u0437\u0430 \u0443\u0447\u0451\u0431\u0443 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u2014 \u043A\u0440\u0443\u043F\u043D\u044B\u0435 \u043F\u043B\u0438\u0442\u043A\u0438 \u0432\u0432\u0435\u0440\u0445\u0443; \u043E\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043B\u043E \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432 \u0432 \u0434\u0435\u043D\u044C \u0442\u043E\u0436\u0435 \u043A\u0440\u0443\u043F\u043D\u043E\u0435.",
        "\u041D\u043E\u0432\u044B\u0439 \u0432\u0438\u0434 2D-\u0430\u0440\u0435\u043D: \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u0441 \u043B\u0451\u0433\u043A\u0438\u043C \u0437\u0435\u0440\u043D\u043E\u043C \u2014 \u0433\u0440\u0430\u043D\u0451\u043D\u044B\u0435 \u0433\u043E\u0440\u044B, \u043E\u0431\u043B\u0430\u043A\u0430 \u0441 \u043A\u043E\u043D\u0442\u0443\u0440\u043E\u043C, \u0433\u0443\u0441\u0442\u0430\u044F \u0442\u0440\u0430\u0432\u0430 \u0441 \u0446\u0432\u0435\u0442\u0430\u043C\u0438, \u043A\u043E\u0440\u0430, \u043A\u0430\u043C\u0435\u043D\u043D\u0430\u044F \u043A\u043B\u0430\u0434\u043A\u0430 \u2014 \u0438 \u0447\u0435\u0442\u044B\u0440\u0435 \u0440\u0443\u043D\u043D\u044B\u0445 \u043A\u0430\u043C\u043D\u044F \u041C\u0438\u0440\u043E\u0432\u043E\u0433\u043E \u0434\u0440\u0435\u0432\u0430 \u0442\u0435\u043F\u0435\u0440\u044C \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0430\u0440\u0435\u043D\u0435.",
        "\u0418\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: \xAB\u2190 \u041F\u043E\u043A\u0438\u043D\u0443\u0442\u044C \u043A\u043E\u043C\u043D\u0430\u0442\u0443\xBB \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043A\u0430\u043A \xAB\u2190 \u041C\u0435\u043D\u044E\xBB; \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u043C\u0435\u043D\u044E \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043D\u0430\u0435\u0437\u0436\u0430\u044E\u0442 \u043D\u0430 \u043C\u0435\u043D\u044E \u043D\u0430 \u043D\u0435\u0432\u044B\u0441\u043E\u043A\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445; \u0432 \u0442\u0435\u0441\u0442\u0430\u0445 \u043F\u043E\u044F\u0432\u0438\u043B\u043E\u0441\u044C \u043C\u0435\u0441\u0442\u043E \u043F\u043E\u0434 \xAB\u2190 \u0423\u0447\u0451\u0431\u0430\xBB.",
        "\u0420\u0430\u0441\u0441\u043A\u0430\u0437\u044B \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u0430 \u043C\u043E\u0433\u0443\u0442 \u043F\u0438\u0441\u0430\u0442\u044C Google Gemini (\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C), Claude \u0438\u043B\u0438 \u043B\u044E\u0431\u043E\u0439 \u0418\u0418, \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0439 \u0441 OpenAI, \u2014 \u0441\u043C\u043E\u0442\u0440\u044F \u043A\u0430\u043A\u043E\u0439 \u043A\u043B\u044E\u0447 \u0435\u0441\u0442\u044C \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435."
      ]
    },
    {
      v: "0.9.9.4.4.1",
      date: "2026-10",
      en: [
        "All spells: each level has its own \u2212 / + buttons (steps of 1), and nothing changes until you press Apply \u2014 it tells you how many words that adds today, so a misclick can\u2019t flood your deck.",
        "Study spells: a tidier layout on PC \u2014 All spells on the left, the other three decks compact beside it, and the JLPT quiz, Onomatopoeia quiz and Reading passage as bright cards below. The \u201CWords\u201D buttons stand out.",
        "Onomatopoeia cards: the kind (\u64EC\u614B\u8A9E gitaigo \u2026) is in a dark, readable colour on the card.",
        "Reading passage: one short story with all your words again \u2014 written for you by a small AI (when the server has it switched on), with furigana and translations. Without it, the words\u2019 example sentences are used.",
        "Deck Duel: every instruction now says where the cards come from \u2014 both players\u2019 All spells.",
        "PC: the interface keeps the same proportions on every monitor \u2014 a laptop and a big screen show the same layout, scaled to the screen. The UI size (70\u2013100%) still makes everything smaller or bigger.",
        "Customize: the badges section sits on its own panel and is easy to read.",
        "2D arenas: the castle and the World Tree stand firmly on the ground, and the forest\u2019s ground reaches the edges of the screen."
      ],
      ru: [
        "\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F: \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0441\u0432\u043E\u0438 \u043A\u043D\u043E\u043F\u043A\u0438 \u2212 / + (\u0448\u0430\u0433 1), \u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F, \u043F\u043E\u043A\u0430 \u0432\u044B \u043D\u0435 \u043D\u0430\u0436\u043C\u0451\u0442\u0435 \xAB\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u2014 \u0442\u0430\u043C \u0432\u0438\u0434\u043D\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u043E\u0432 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u0441\u044F \u0441\u0435\u0433\u043E\u0434\u043D\u044F, \u0442\u0430\u043A \u0447\u0442\u043E \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u043D\u0435 \u0437\u0430\u0432\u0430\u043B\u0438\u0442 \u043A\u043E\u043B\u043E\u0434\u0443.",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u0435\u0435 \u043D\u0430 \u041F\u041A \u2014 \xAB\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB \u0441\u043B\u0435\u0432\u0430, \u0442\u0440\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043A\u043E\u043B\u043E\u0434\u044B \u043A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E \u0440\u044F\u0434\u043E\u043C, \u0430 \u0442\u0435\u0441\u0442 JLPT, \u0442\u0435\u0441\u0442 \u043F\u043E \u043E\u043D\u043E\u043C\u0430\u0442\u043E\u043F\u0435\u0435 \u0438 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u2014 \u044F\u0440\u043A\u0438\u043C\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u043C\u0438 \u0432\u043D\u0438\u0437\u0443. \u041A\u043D\u043E\u043F\u043A\u0438 \xAB\u0421\u043B\u043E\u0432\u0430\xBB \u0441\u0442\u0430\u043B\u043E \u0445\u043E\u0440\u043E\u0448\u043E \u0432\u0438\u0434\u043D\u043E.",
        "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043E\u043D\u043E\u043C\u0430\u0442\u043E\u043F\u0435\u0438: \u0432\u0438\u0434 (\u64EC\u614B\u8A9E \u0433\u0438\u0442\u0430\u0439\u0433\u043E \u2026) \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u0451\u043C\u043D\u044B\u043C, \u0445\u043E\u0440\u043E\u0448\u043E \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u043C \u0446\u0432\u0435\u0442\u043E\u043C.",
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u0441\u043D\u043E\u0432\u0430 \u043E\u0434\u0438\u043D \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u0432\u0430\u0448\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438 \u2014 \u0435\u0433\u043E \u043F\u0438\u0448\u0435\u0442 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0418\u0418 (\u0435\u0441\u043B\u0438 \u043E\u043D \u0432\u043A\u043B\u044E\u0447\u0451\u043D \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435), \u0441 \u0444\u0443\u0440\u0438\u0433\u0430\u043D\u043E\u0439 \u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u043E\u043C. \u0411\u0435\u0437 \u043D\u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
        "\u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434: \u0432\u043E \u0432\u0441\u0435\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F\u0445 \u0441\u043A\u0430\u0437\u0430\u043D\u043E, \u043E\u0442\u043A\u0443\u0434\u0430 \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u043A\u0430\u0440\u0442\u044B, \u2014 \u0438\u0437 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB \u043E\u0431\u043E\u0438\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432.",
        "\u041F\u041A: \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0438 \u043D\u0430 \u043B\u044E\u0431\u043E\u043C \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0435 \u2014 \u043D\u043E\u0443\u0442\u0431\u0443\u043A \u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u044D\u043A\u0440\u0430\u043D \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u043E\u0434\u043D\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0443 \u0432 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0435 \u044D\u043A\u0440\u0430\u043D\u0430. \u0420\u0430\u0437\u043C\u0435\u0440 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 (70\u2013100%) \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0441\u0451 \u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u0435.",
        "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043E\u0431\u043B\u0438\u043A\u0430: \u0440\u0430\u0437\u0434\u0435\u043B \u0437\u043D\u0430\u0447\u043A\u043E\u0432 \u043D\u0430 \u0441\u0432\u043E\u0435\u0439 \u043F\u0430\u043D\u0435\u043B\u0438, \u0435\u0433\u043E \u043B\u0435\u0433\u043A\u043E \u0447\u0438\u0442\u0430\u0442\u044C.",
        "2D-\u0430\u0440\u0435\u043D\u044B: \u0437\u0430\u043C\u043E\u043A \u0438 \u041C\u0438\u0440\u043E\u0432\u043E\u0435 \u0434\u0440\u0435\u0432\u043E \u0442\u0432\u0451\u0440\u0434\u043E \u0441\u0442\u043E\u044F\u0442 \u043D\u0430 \u0437\u0435\u043C\u043B\u0435, \u0430 \u0437\u0435\u043C\u043B\u044F \u0432 \u043B\u0435\u0441\u0443 \u0434\u043E\u0445\u043E\u0434\u0438\u0442 \u0434\u043E \u043A\u0440\u0430\u0451\u0432 \u044D\u043A\u0440\u0430\u043D\u0430."
      ]
    },
    {
      v: "0.9.9.4.4",
      date: "2026-10",
      en: [
        "Study spells: an \u21B6 Undo button (or Z) brings back the card you just answered \u2014 for a misclick or a wrong swipe.",
        "Study spells: swiping is more sensitive \u2014 a short drag or a quick flick is enough.",
        "Study spells: on a flipped card, tap any kanji (in the word or the example) for its meaning, on/kun readings and the parts it is built from. \u201C\u{1F5BC} Memory picture\u201D draws the kanji with each part in its own colour, plus a short story that links the parts to the meaning (\u4F11 = a person \u4EBB leaning on a tree \u6728 \u2192 rest). Every kanji in the game has one.",
        "All spells: instead of ticks and one slider, each level has its own number \u2014 how many of its words are added a day (e.g. N5: 10, N3: 5).",
        "New deck: Onomatopoeia \u2014 240+ giseigo, gitaigo and gij\u014Dgo (sounds, states and feelings), each marked with its kind, with an example sentence. 20 new cards a session.",
        "New: the Onomatopoeia quiz (between the JLPT quiz and the reading passage) \u2014 meanings, words, kinds and \u201Cwhich word fits the sentence\u201D.",
        "Reading passage: now a screen of its own (centred on phones) instead of a window. Each blank sits in a real sentence for the word \u2014 no furigana over the blank, the context is the clue. Tap a word for its meaning; the box has a proper \u2715.",
        "Deck Duel: the 20 cards you draft from come from both players\u2019 All spells \u2014 2 of each level from each of you (a random word if someone has none of that level). The colours (difficulty) are unchanged.",
        "Word lists: 9 words that were skipped because of notes like \u201C(\u3059\u308B)\u201D are back \u2014 \u7D50\u5A5A, \u6563\u6B69, \u6383\u9664, \u52C9\u5F37, \u7DF4\u7FD2, \u304A\u91D1\u6301\u3061, \u56DE\u308B, \u56DE\u3059, \u751F\u3051\u308B.",
        "Credits: kanji data from KANJIDIC2 (EDRDG) via kanji-data, and the kanji parts from KanjiVG."
      ],
      ru: [
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u21B6 \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB (\u0438\u043B\u0438 Z) \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438, \u2014 \u0435\u0441\u043B\u0438 \u043F\u0440\u043E\u043C\u0430\u0445\u043D\u0443\u043B\u0438\u0441\u044C \u0438\u043B\u0438 \u0441\u0432\u0430\u0439\u043F\u043D\u0443\u043B\u0438 \u043D\u0435 \u0442\u0443\u0434\u0430.",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u0441\u0432\u0430\u0439\u043F \u0441\u0442\u0430\u043B \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u0435\u0435 \u2014 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0433\u043E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u0432\u0437\u043C\u0430\u0445\u0430.",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u0451\u0440\u043D\u0443\u0442\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u043A\u0430\u043D\u0434\u0437\u0438 (\u0432 \u0441\u043B\u043E\u0432\u0435 \u0438\u043B\u0438 \u0432 \u043F\u0440\u0438\u043C\u0435\u0440\u0435) \u2014 \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435, \u0447\u0442\u0435\u043D\u0438\u044F \u043E\u043D/\u043A\u0443\u043D \u0438 \u0447\u0430\u0441\u0442\u0438, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043D \u0441\u043E\u0441\u0442\u043E\u0438\u0442. \xAB\u{1F5BC} \u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430-\u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\xBB \u0440\u0438\u0441\u0443\u0435\u0442 \u043A\u0430\u043D\u0434\u0437\u0438, \u0440\u0430\u0441\u043A\u0440\u0430\u0448\u0438\u0432\u0430\u044F \u043A\u0430\u0436\u0434\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u0441\u0432\u043E\u0438\u043C \u0446\u0432\u0435\u0442\u043E\u043C, \u0438 \u0434\u0430\u0451\u0442 \u043A\u043E\u0440\u043E\u0442\u043A\u0443\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E, \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u044E\u0449\u0443\u044E \u0447\u0430\u0441\u0442\u0438 \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C (\u4F11 = \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u4EBB \u043F\u0440\u0438\u0441\u043B\u043E\u043D\u0438\u043B\u0441\u044F \u043A \u0434\u0435\u0440\u0435\u0432\u0443 \u6728 \u2192 \u043E\u0442\u0434\u044B\u0445). \u041E\u043D\u0430 \u0435\u0441\u0442\u044C \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043A\u0430\u043D\u0434\u0437\u0438 \u0432 \u0438\u0433\u0440\u0435.",
        "\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F: \u0432\u043C\u0435\u0441\u0442\u043E \u0433\u0430\u043B\u043E\u0447\u0435\u043A \u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430 \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0441\u0432\u043E\u0451 \u0447\u0438\u0441\u043B\u043E \u2014 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0435\u0433\u043E \u0441\u043B\u043E\u0432 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0432 \u0434\u0435\u043D\u044C (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, N5: 10, N3: 5).",
        "\u041D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043E\u0434\u0430: \u041E\u043D\u043E\u043C\u0430\u0442\u043E\u043F\u0435\u044F \u2014 \u0431\u043E\u043B\u044C\u0448\u0435 240 \u0433\u0438\u0441\u044D\u0439\u0433\u043E, \u0433\u0438\u0442\u0430\u0439\u0433\u043E \u0438 \u0433\u0438\u0434\u0437\u0451\u0433\u043E (\u0437\u0432\u0443\u043A\u0438, \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0430), \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u043A\u0430\u0437\u0430\u043D \u0432\u0438\u0434 \u0438 \u0435\u0441\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440. \u041F\u043E 20 \u043D\u043E\u0432\u044B\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0437\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u0435.",
        "\u041D\u043E\u0432\u043E\u0435: \u0442\u0435\u0441\u0442 \u043F\u043E \u043E\u043D\u043E\u043C\u0430\u0442\u043E\u043F\u0435\u0435 (\u043C\u0435\u0436\u0434\u0443 \u0442\u0435\u0441\u0442\u043E\u043C JLPT \u0438 \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F) \u2014 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u0441\u043B\u043E\u0432\u0430, \u0432\u0438\u0434\u044B \u0438 \xAB\u043A\u0430\u043A\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u043A \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044E\xBB.",
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u0442\u0435\u043F\u0435\u0440\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D (\u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u0445), \u0430 \u043D\u0435 \u043E\u043A\u043D\u043E. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u0440\u043E\u043F\u0443\u0441\u043A \u0441\u0442\u043E\u0438\u0442 \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0441 \u044D\u0442\u0438\u043C \u0441\u043B\u043E\u0432\u043E\u043C \u2014 \u0431\u0435\u0437 \u0444\u0443\u0440\u0438\u0433\u0430\u043D\u044B \u043D\u0430\u0434 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043E\u043C, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u2014 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0441\u043B\u043E\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435; \u0443 \u043E\u043A\u043E\u0448\u043A\u0430 \u0435\u0441\u0442\u044C \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u2715.",
        "\u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434: 20 \u043A\u0430\u0440\u0442 \u0434\u043B\u044F \u0434\u0440\u0430\u0444\u0442\u0430 \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 \xAB\u0412\u0441\u0435\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB \u043E\u0431\u043E\u0438\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u2014 \u043F\u043E 2 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u043E\u0442 \u043A\u0430\u0436\u0434\u043E\u0433\u043E (\u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E, \u0435\u0441\u043B\u0438 \u0443 \u043A\u043E\u0433\u043E-\u0442\u043E \u043D\u0435\u0442 \u0441\u043B\u043E\u0432 \u044D\u0442\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F). \u0426\u0432\u0435\u0442\u0430 (\u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C) \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0438\u0441\u044C.",
        "\u0421\u043F\u0438\u0441\u043A\u0438 \u0441\u043B\u043E\u0432: \u0432\u0435\u0440\u043D\u0443\u043B\u0438\u0441\u044C 9 \u0441\u043B\u043E\u0432, \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0445 \u0438\u0437-\u0437\u0430 \u043F\u043E\u043C\u0435\u0442\u043E\u043A \u0432\u0440\u043E\u0434\u0435 \xAB(\u3059\u308B)\xBB, \u2014 \u7D50\u5A5A, \u6563\u6B69, \u6383\u9664, \u52C9\u5F37, \u7DF4\u7FD2, \u304A\u91D1\u6301\u3061, \u56DE\u308B, \u56DE\u3059, \u751F\u3051\u308B.",
        "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u0438: \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u043A\u0430\u043D\u0434\u0437\u0438 \u2014 KANJIDIC2 (EDRDG) \u0447\u0435\u0440\u0435\u0437 kanji-data, \u0447\u0430\u0441\u0442\u0438 \u043A\u0430\u043D\u0434\u0437\u0438 \u2014 KanjiVG."
      ]
    },
    {
      v: "0.9.9.4.3",
      date: "2026-10",
      en: [
        "Study spells: every word on every level (N5 to N1, 6,500+) now has an example sentence, with furigana \u2014 the reading in small hiragana above each kanji.",
        "Study spells: swiping a card right (Good / Easy) no longer lags on phones.",
        "Study spells: your whole due queue comes at once \u2014 no more \u201C60 cards, then 50 more appear\u201D after you finish.",
        "Friends see \u201CStudying spells\u201D, \u201CTaking a JLPT quiz\u201D or \u201CReading a passage\u201D as your activity instead of \u201CIn the menus\u201D.",
        "Daily challenge: the JLPT quiz counts at 7/10 or better, the reading passage at 4/8 or better.",
        "Reading passage: a red \u2715 at the top right closes it, and reopening brings back the same story until you press \u201CNew story\u201D. The JLPT quiz \u201C\u2190 Study\u201D button now looks like \u201C\u2190 Menu\u201D.",
        "Pop-up messages can be dismissed: click \u2715 on PC, swipe them away on a phone. \u201CYou are offline\u201D messages clear by themselves once you\u2019re back online.",
        "Phones: screens and buttons are centred, the default UI size is 100%, and putting the app in the background no longer drops it into offline mode.",
        "Under the hood: patched Node.js security update (October 2026) and a newer desktop app engine."
      ],
      ru: [
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430 \u0432\u0441\u0435\u0445 \u0443\u0440\u043E\u0432\u043D\u0435\u0439 (\u043E\u0442 N5 \u0434\u043E N1, \u0431\u043E\u043B\u044C\u0448\u0435 6 500) \u0442\u0435\u043F\u0435\u0440\u044C \u0435\u0441\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0444\u0443\u0440\u0438\u0433\u0430\u043D\u043E\u0439 \u2014 \u0447\u0442\u0435\u043D\u0438\u0435\u043C \u043C\u0435\u043B\u043A\u043E\u0439 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u043E\u0439 \u043D\u0430\u0434 \u043A\u0430\u0436\u0434\u044B\u043C \u043A\u0430\u043D\u0434\u0437\u0438.",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u0441\u0432\u0430\u0439\u043F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432\u043F\u0440\u0430\u0432\u043E (\xAB\u0425\u043E\u0440\u043E\u0448\u043E\xBB / \xAB\u041B\u0435\u0433\u043A\u043E\xBB) \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0442\u043E\u0440\u043C\u043E\u0437\u0438\u0442 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u0445.",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u0432\u0441\u044F \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u043D\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0441\u0440\u0430\u0437\u0443 \u2014 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0438\u043A\u0430\u043A\u0438\u0445 \xAB60 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A, \u0430 \u043F\u043E\u0442\u043E\u043C \u0435\u0449\u0451 50\xBB.",
        "\u0414\u0440\u0443\u0437\u044C\u044F \u0432\u0438\u0434\u044F\u0442 \u0432\u0430\u0448\u0443 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \xAB\u0418\u0437\u0443\u0447\u0430\u0435\u0442 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB, \xAB\u041F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u0442\u0435\u0441\u0442 JLPT\xBB \u0438\u043B\u0438 \xAB\u0427\u0438\u0442\u0430\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\xBB \u0432\u043C\u0435\u0441\u0442\u043E \xAB\u0412 \u043C\u0435\u043D\u044E\xBB.",
        "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435: \u0442\u0435\u0441\u0442 JLPT \u0437\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442 7/10, \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u2014 \u043E\u0442 4/8.",
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u2715 \u0432 \u043F\u0440\u0430\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0435\u0433\u043E, \u0430 \u043F\u0440\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u043C \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u0442 \u0436\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0437, \u043F\u043E\u043A\u0430 \u0432\u044B \u043D\u0435 \u043D\u0430\u0436\u043C\u0451\u0442\u0435 \xAB\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\xBB. \u041A\u043D\u043E\u043F\u043A\u0430 \xAB\u2190 \u0423\u0447\u0451\u0431\u0430\xBB \u0432 \u0442\u0435\u0441\u0442\u0435 JLPT \u0442\u0435\u043F\u0435\u0440\u044C \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043A\u0430\u043A \xAB\u2190 \u041C\u0435\u043D\u044E\xBB.",
        "\u0412\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C: \u2715 \u043D\u0430 \u041F\u041A, \u0441\u0432\u0430\u0439\u043F\u043E\u043C \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435. \u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \xAB\u0412\u044B \u043E\u0444\u043B\u0430\u0439\u043D\xBB \u0438\u0441\u0447\u0435\u0437\u0430\u044E\u0442 \u0441\u0430\u043C\u0438, \u043A\u043E\u0433\u0434\u0430 \u0441\u0432\u044F\u0437\u044C \u0432\u0435\u0440\u043D\u0443\u043B\u0430\u0441\u044C.",
        "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B: \u044D\u043A\u0440\u0430\u043D\u044B \u0438 \u043A\u043D\u043E\u043F\u043A\u0438 \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443, \u0440\u0430\u0437\u043C\u0435\u0440 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E 100%, \u0430 \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043E\u0444\u043B\u0430\u0439\u043D-\u0440\u0435\u0436\u0438\u043C.",
        "\u0412\u043D\u0443\u0442\u0440\u0438: \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 Node.js (\u043E\u043A\u0442\u044F\u0431\u0440\u044C 2026) \u0438 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0434\u0432\u0438\u0436\u043A\u0430 \u0434\u043B\u044F \u041F\u041A-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F."
      ]
    },
    {
      v: "0.9.9.4.2",
      date: "2026-10",
      en: [
        "Kana: \u3072\u3089\u304C\u306A (hiragana) and the new \u30AB\u30BF\u30AB\u30CA (katakana) are two separate levels \u2014 only letters now: the basic ones, with \u309B/\u309C and every combination (\u304D\u3083, \u30B7\u30E5 \u2026). Both work in Study spells and in every game mode, answered in romaji.",
        "Study spells: each answer shows an example sentence with the word marked, and its translation (N5 and N4 words for now \u2014 more levels coming).",
        "Study spells: swiping a card is instant \u2014 the next card no longer waits for the server, and losing the connection mid-session doesn\u2019t freeze the buttons.",
        "Spell mastery: tiles with the word and a progress bar, like a kana chart; the kana levels are laid out as the kana table. Tap a tile for its reading and meaning (phones too). Kanji levels have filters and \u201Cshow more\u201D.",
        "Activity: a legend explains the shades (the brighter, the more you did that day); tap a day for its details.",
        "Reading passage: the word bank stays at the bottom while the story scrolls; no more \u201CAdd to\u2026\u201D on words that are already in your deck.",
        "Phones: the back button closes dialogs and goes back a screen; switching to another app no longer switches to offline mode; looking around by turning the phone works when it\u2019s held upright too.",
        "Offline: when the server can\u2019t be reached at sign-in, a \u201CPlay offline\u201D button takes you straight in.",
        "Get the app: the real Windows and Android logos."
      ],
      ru: [
        "\u041A\u0430\u043D\u0430: \u3072\u3089\u304C\u306A (\u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0430) \u0438 \u043D\u043E\u0432\u0430\u044F \u30AB\u30BF\u30AB\u30CA (\u043A\u0430\u0442\u0430\u043A\u0430\u043D\u0430) \u2014 \u0434\u0432\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u0443\u0440\u043E\u0432\u043D\u044F, \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B: \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435, \u0441 \u309B/\u309C \u0438 \u0432\u0441\u0435 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F (\u304D\u3083, \u30B7\u30E5 \u2026). \u041E\u0431\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432 \xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB \u0438 \u0432\u043E \u0432\u0441\u0435\u0445 \u0440\u0435\u0436\u0438\u043C\u0430\u0445 \u0438\u0433\u0440\u044B, \u043E\u0442\u0432\u0435\u0442 \u0440\u043E\u043C\u0430\u0434\u0437\u0438.",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u0441 \u043A\u0430\u0436\u0434\u044B\u043C \u043E\u0442\u0432\u0435\u0442\u043E\u043C \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440 \u2014 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u043C \u0441\u043B\u043E\u0432\u043E\u043C \u0438 \u0435\u0433\u043E \u043F\u0435\u0440\u0435\u0432\u043E\u0434 (\u043F\u043E\u043A\u0430 \u0434\u043B\u044F \u0441\u043B\u043E\u0432 N5 \u0438 N4, \u0434\u0440\u0443\u0433\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u0438 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u0437\u0436\u0435).",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0441\u0432\u0430\u0439\u043F\u0430\u044E\u0442\u0441\u044F \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E \u2014 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0436\u0434\u0451\u0442 \u0441\u0435\u0440\u0432\u0435\u0440, \u0430 \u043F\u043E\u0442\u0435\u0440\u044F \u0441\u0432\u044F\u0437\u0438 \u043F\u043E\u0441\u0440\u0435\u0434\u0438 \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u043D\u0435 \u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0435\u0442 \u043A\u043D\u043E\u043F\u043A\u0438.",
        "\u041E\u0441\u0432\u043E\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u043F\u043B\u0438\u0442\u043A\u0438 \u0441\u043E \u0441\u043B\u043E\u0432\u043E\u043C \u0438 \u0448\u043A\u0430\u043B\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430, \u043A\u0430\u043A \u0442\u0430\u0431\u043B\u0438\u0446\u0430 \u043A\u0430\u043D\u044B; \u0443\u0440\u043E\u0432\u043D\u0438 \u043A\u0430\u043D\u044B \u0432\u044B\u043B\u043E\u0436\u0435\u043D\u044B \u0442\u0430\u0431\u043B\u0438\u0446\u0435\u0439. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u043B\u0438\u0442\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 (\u0438 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435). \u0423 \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u043A\u0430\u043D\u0434\u0437\u0438 \u0435\u0441\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B \u0438 \xAB\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451\xBB.",
        "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C: \u043B\u0435\u0433\u0435\u043D\u0434\u0430 \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u0442 \u043E\u0442\u0442\u0435\u043D\u043A\u0438 (\u0447\u0435\u043C \u044F\u0440\u0447\u0435, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u0432 \u0442\u043E\u0442 \u0434\u0435\u043D\u044C); \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0434\u0435\u043D\u044C, \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438.",
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u0431\u0430\u043D\u043A \u0441\u043B\u043E\u0432 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0432\u043D\u0438\u0437\u0443, \u0430 \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u043F\u0440\u043E\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F; \u0443 \u0441\u043B\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u0436\u0435 \u0432 \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043B\u043E\u0434\u0435, \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \xAB\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u2026\xBB.",
        "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B: \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u041D\u0430\u0437\u0430\u0434\xBB \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043E\u043A\u043D\u0430 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u044D\u043A\u0440\u0430\u043D; \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432 \u0434\u0440\u0443\u0433\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043E\u0444\u043B\u0430\u0439\u043D-\u0440\u0435\u0436\u0438\u043C; \u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0438 \u043A\u043E\u0433\u0434\u0430 \u043E\u043D \u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E.",
        "\u041E\u0444\u043B\u0430\u0439\u043D: \u0435\u0441\u043B\u0438 \u043F\u0440\u0438 \u0432\u0445\u043E\u0434\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D, \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u0418\u0433\u0440\u0430\u0442\u044C \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430\xBB \u0441\u0440\u0430\u0437\u0443 \u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432 \u0438\u0433\u0440\u0443.",
        "\xAB\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\xBB: \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u044B Windows \u0438 Android."
      ]
    },
    {
      v: "0.9.9.4.1",
      date: "2026-10",
      en: ["Get the app: the Android download works from the installed game too (it stopped at 100% before) \u2014 then open Downloads and tap KanjiWizards.apk."],
      ru: ["\xAB\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\xBB: \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043B\u044F Android \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0438 \u0438\u0437 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0438\u0433\u0440\u044B (\u0440\u0430\u043D\u044C\u0448\u0435 \u043E\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u043B\u0430\u0441\u044C \u043D\u0430 100%) \u2014 \u0437\u0430\u0442\u0435\u043C \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \xAB\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0438\xBB \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 KanjiWizards.apk."]
    },
    {
      v: "0.9.9.4",
      date: "2026-10",
      en: [
        "Kanji Wizards is an app now: install it from the browser on any phone or PC (menu \u2192 Get the app), or download the Windows app (.exe) or the Android app (.apk) \u2014 no store needed.",
        "Offline mode: without internet you can still study spells, take the JLPT quiz, read passages, play the daily challenge, customize and look at your progress and match history. Everything syncs when you\u2019re back online. Online queue and private games need internet.",
        "All dropdown menus are in the game\u2019s style now.",
        "JLPT quiz: after every answer you see the whole word \u2014 kanji, reading and meaning \u2014 even when you got it right.",
        "Reading passages have six different stories: the school of magic, a trip to Kyoto, a detective case, a sea voyage, a journey to the Moon and a little caf\xE9.",
        "Study spells: the \u201Clearned today\u201D counter is readable."
      ],
      ru: [
        "Kanji Wizards \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435: \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0435\u0433\u043E \u0438\u0437 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438\u043B\u0438 \u041F\u041A (\u043C\u0435\u043D\u044E \u2192 \xAB\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\xBB) \u0438\u043B\u0438 \u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F Windows (.exe) \u0438\u043B\u0438 Android (.apk) \u2014 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0435 \u043D\u0443\u0436\u0435\u043D.",
        "\u041E\u0444\u043B\u0430\u0439\u043D-\u0440\u0435\u0436\u0438\u043C: \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0438\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F, \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0442\u0435\u0441\u0442 JLPT, \u0447\u0438\u0442\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u044B, \u0438\u0433\u0440\u0430\u0442\u044C \u0432 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435, \u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u043C\u0430\u0442\u0447\u0435\u0439. \u0412\u0441\u0451 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u0414\u043B\u044F \u043E\u043D\u043B\u0430\u0439\u043D-\u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u0438 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u0445 \u0438\u0433\u0440 \u043D\u0443\u0436\u0435\u043D \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442.",
        "\u0412\u0441\u0435 \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0435 \u043C\u0435\u043D\u044E \u0442\u0435\u043F\u0435\u0440\u044C \u0432 \u0441\u0442\u0438\u043B\u0435 \u0438\u0433\u0440\u044B.",
        "\u0422\u0435\u0441\u0442 JLPT: \u043F\u043E\u0441\u043B\u0435 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u043B\u043E\u0432\u043E \u0446\u0435\u043B\u0438\u043A\u043E\u043C \u2014 \u043A\u0430\u043D\u0434\u0437\u0438, \u0447\u0442\u0435\u043D\u0438\u0435 \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u2014 \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0432\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u0432\u0435\u0440\u043D\u043E.",
        "\u0412 \u0442\u0435\u043A\u0441\u0442\u0430\u0445 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u0448\u0435\u0441\u0442\u044C \u0440\u0430\u0437\u043D\u044B\u0445 \u0438\u0441\u0442\u043E\u0440\u0438\u0439: \u0448\u043A\u043E\u043B\u0430 \u043C\u0430\u0433\u0438\u0438, \u043F\u043E\u0435\u0437\u0434\u043A\u0430 \u0432 \u041A\u0438\u043E\u0442\u043E, \u0434\u0435\u0442\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u0434\u0435\u043B\u043E, \u043C\u043E\u0440\u0441\u043A\u043E\u0435 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435, \u043F\u043E\u043B\u0451\u0442 \u043D\u0430 \u041B\u0443\u043D\u0443 \u0438 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u043A\u0430\u0444\u0435.",
        "\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439: \u0441\u0447\u0451\u0442\u0447\u0438\u043A \xAB\u0432\u044B\u0443\u0447\u0435\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F\xBB \u0445\u043E\u0440\u043E\u0448\u043E \u0432\u0438\u0434\u0435\u043D."
      ]
    },
    {
      v: "0.9.9.3.4",
      date: "2026-10",
      en: [
        "Every mode is open from the start \u2014 Kanji Writing, the Boss fight and Deck Duel no longer wait for level 1.",
        "Reading passage: a much bigger window on PCs, with larger story text, furigana, word bank and meanings.",
        "JLPT quiz: the wrong answers now look like the right one \u2014 readings that share kana, kanji that share a character, meanings of the same kind.",
        "New achievement: Kingslayer \u2014 beat an admin in a battle."
      ],
      ru: [
        "\u0412\u0441\u0435 \u0440\u0435\u0436\u0438\u043C\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044B \u0441\u0440\u0430\u0437\u0443 \u2014 \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438, \u0411\u0438\u0442\u0432\u0430 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C \u0438 \u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0436\u0434\u0443\u0442 1 \u0443\u0440\u043E\u0432\u043D\u044F.",
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u043D\u0430 \u041F\u041A \u043E\u043A\u043D\u043E \u043D\u0430\u043C\u043D\u043E\u0433\u043E \u0431\u043E\u043B\u044C\u0448\u0435, \u0442\u0435\u043A\u0441\u0442, \u0444\u0443\u0440\u0438\u0433\u0430\u043D\u0430, \u0431\u0430\u043D\u043A \u0441\u043B\u043E\u0432 \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043A\u0440\u0443\u043F\u043D\u0435\u0435.",
        "\u0422\u0435\u0441\u0442 JLPT: \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u043E\u0445\u043E\u0436\u0438 \u043D\u0430 \u0432\u0435\u0440\u043D\u044B\u0439 \u2014 \u0447\u0442\u0435\u043D\u0438\u044F \u0441 \u043E\u0431\u0449\u0438\u043C\u0438 \u043A\u0430\u043D\u043E\u0439, \u043A\u0430\u043D\u0434\u0437\u0438 \u0441 \u043E\u0431\u0449\u0438\u043C \u0438\u0435\u0440\u043E\u0433\u043B\u0438\u0444\u043E\u043C, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0442\u043E\u0433\u043E \u0436\u0435 \u0442\u0438\u043F\u0430.",
        "\u041D\u043E\u0432\u043E\u0435 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0435: \u0426\u0430\u0440\u0435\u0443\u0431\u0438\u0439\u0446\u0430 \u2014 \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0432 \u0431\u043E\u044E."
      ]
    },
    {
      v: "0.9.9.3.3",
      date: "2026-10",
      en: [
        "Omnipotence has its own sound: a whoosh as your eyes close, a deep impact with a ringing chord as \u7A76\u6975\u80FD\u529B flashes, and a roar of fire as they open.",
        "Keeping your daily streak (all four tasks) now gives +500 XP.",
        "Stroke order: Replay works again.",
        "Customize: switching arenas in the 3D preview no longer stutters; the Omnipotence preview shows the first-person fire too; the 2D arena preview is bigger.",
        "Other players\u2019 staffs are a bit smaller; the forest\u2019s trees are taller (no more treetops in view).",
        "JLPT quiz: a single hiragana is asked by its romaji, with four real choices (no more one-choice or \u201Chiragana / hiragana (voiced)\u201D questions).",
        "Study spells: the yellow notices are readable on bright backgrounds."
      ],
      ru: [
        "\u0423 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0441\u0432\u043E\u0439 \u0437\u0432\u0443\u043A: \u0441\u0432\u0438\u0441\u0442, \u043A\u043E\u0433\u0434\u0430 \u0433\u043B\u0430\u0437\u0430 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F, \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u0443\u0434\u0430\u0440 \u0441\u043E \u0437\u0432\u0435\u043D\u044F\u0449\u0438\u043C \u0430\u043A\u043A\u043E\u0440\u0434\u043E\u043C \u043F\u0440\u0438 \u0432\u0441\u043F\u044B\u0448\u043A\u0435 \u7A76\u6975\u80FD\u529B \u0438 \u0440\u0451\u0432 \u043F\u043B\u0430\u043C\u0435\u043D\u0438, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F.",
        "\u0421\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u0430\u044F \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0435\u0440\u0438\u044F (\u0432\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F) \u0442\u0435\u043F\u0435\u0440\u044C \u0434\u0430\u0451\u0442 +500 \u043E\u043F\u044B\u0442\u0430.",
        "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0447\u0435\u0440\u0442: \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C\xBB \u0441\u043D\u043E\u0432\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442.",
        "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430: \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0430\u0440\u0435\u043D \u0432 3D-\u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u0434\u0442\u043E\u0440\u043C\u0430\u0436\u0438\u0432\u0430\u0435\u0442; \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0438 \u043E\u0433\u043E\u043D\u044C \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043B\u0438\u0446\u0430; 2D-\u043F\u0440\u0435\u0432\u044C\u044E \u0430\u0440\u0435\u043D\u044B \u0441\u0442\u0430\u043B\u043E \u0431\u043E\u043B\u044C\u0448\u0435.",
        "\u041F\u043E\u0441\u043E\u0445\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0447\u0443\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435; \u0434\u0435\u0440\u0435\u0432\u044C\u044F \u0432 \u043B\u0435\u0441\u0443 \u0432\u044B\u0448\u0435 (\u0438\u0445 \u0432\u0435\u0440\u0445\u0443\u0448\u0435\u043A \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0432\u0438\u0434\u043D\u043E).",
        "\u0422\u0435\u0441\u0442 JLPT: \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0430 \u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0440\u043E\u043C\u0430\u0434\u0437\u0438, \u0441 \u0447\u0435\u0442\u044B\u0440\u044C\u043C\u044F \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C\u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C\u0438 (\u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0438\u043A\u0430\u043A\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0441 \u043E\u0434\u043D\u0438\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u043C \u0438\u043B\u0438 \xABhiragana / hiragana (voiced)\xBB).",
        "\u0423\u0447\u0451\u0431\u0430: \u0436\u0451\u043B\u0442\u044B\u0435 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u0441\u0432\u0435\u0442\u043B\u043E\u043C \u0444\u043E\u043D\u0435."
      ]
    },
    {
      v: "0.9.9.3.2",
      date: "2026-10",
      en: [
        "Customize: Profile comes first, then Arena, Magic staff and Omnipotence. Arena and Omnipotence now have a live 3D preview (your character in the arena, or wrapped in your flames up close), with the 2D look beside it.",
        "Reading passage: choose which deck the story takes its words from, and add any word of the story to any of your decks.",
        "Study \u2192 Words: tap Spell, Reading, Meaning, Level, Added or Status to sort the list (again to reverse it).",
        "Omnipotence: the eyes now close the right way \u2014 fully shut, then open again.",
        "Deck Duel: no mode name over the table, slim scrollbars, and no hero picture in the lobby (you pick your hero in the game).",
        "Daily challenge: skipping words no longer adds 15 s each to your time, and words you unticked stay unticked when you come back.",
        "New-look checkboxes and scrollbars; the Archmage border animates on PCs with reduced animations too; turning your phone to look around is smoother and quicker."
      ],
      ru: [
        "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430: \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u041F\u0440\u043E\u0444\u0438\u043B\u044C, \u0437\u0430\u0442\u0435\u043C \u0410\u0440\u0435\u043D\u0430, \u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0441\u043E\u0445 \u0438 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E. \u0423 \u0410\u0440\u0435\u043D\u044B \u0438 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0442\u0435\u043F\u0435\u0440\u044C \u0436\u0438\u0432\u043E\u0439 3D-\u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 (\u0432\u0430\u0448 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436 \u043D\u0430 \u0430\u0440\u0435\u043D\u0435 \u0438\u043B\u0438 \u0432 \u0441\u0432\u043E\u0451\u043C \u043F\u043B\u0430\u043C\u0435\u043D\u0438 \u043A\u0440\u0443\u043F\u043D\u044B\u043C \u043F\u043B\u0430\u043D\u043E\u043C), \u0430 \u0440\u044F\u0434\u043E\u043C \u2014 2D-\u0432\u0438\u0434.",
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u0432\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043A\u043E\u043B\u043E\u0434\u0443, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0441\u043B\u043E\u0432\u0430, \u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043B\u044E\u0431\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430 \u0432 \u043B\u044E\u0431\u0443\u044E \u043A\u043E\u043B\u043E\u0434\u0443.",
        "\u0423\u0447\u0451\u0431\u0430 \u2192 \u0421\u043B\u043E\u0432\u0430: \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0417\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435\xBB, \xAB\u0427\u0442\u0435\u043D\u0438\u0435\xBB, \xAB\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435\xBB, \xAB\u0423\u0440\u043E\u0432\u0435\u043D\u044C\xBB, \xAB\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E\xBB \u0438\u043B\u0438 \xAB\u0421\u0442\u0430\u0442\u0443\u0441\xBB, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A (\u0435\u0449\u0451 \u0440\u0430\u0437 \u2014 \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435).",
        "\u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E: \u0433\u043B\u0430\u0437\u0430 \u0442\u0435\u043F\u0435\u0440\u044C \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u2014 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E, \u0430 \u043F\u043E\u0442\u043E\u043C \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F.",
        "\xAB\u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434\xBB: \u0431\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0440\u0435\u0436\u0438\u043C\u0430 \u043D\u0430\u0434 \u0441\u0442\u043E\u043B\u043E\u043C, \u0442\u043E\u043D\u043A\u0438\u0435 \u043F\u043E\u043B\u043E\u0441\u044B \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0438 \u0431\u0435\u0437 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u0433\u0435\u0440\u043E\u044F \u0432 \u043B\u043E\u0431\u0431\u0438 (\u0433\u0435\u0440\u043E\u044F \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u0432 \u0438\u0433\u0440\u0435).",
        "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435: \u043F\u0440\u043E\u043F\u0443\u0441\u043A \u0441\u043B\u043E\u0432\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 15 \u0441 \u043A\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0430 \u0441\u043D\u044F\u0442\u044B\u0435 \u0433\u0430\u043B\u043E\u0447\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0435\u0441\u044C.",
        "\u041D\u043E\u0432\u044B\u0435 \u0444\u043B\u0430\u0436\u043A\u0438 \u0438 \u043F\u043E\u043B\u043E\u0441\u044B \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438; \u0440\u0430\u043C\u043A\u0430 \xAB\u0410\u0440\u0445\u0438\u043C\u0430\u0433\xBB \u0430\u043D\u0438\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0438 \u043D\u0430 \u041F\u041A \u0441 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u043E\u0439 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0435\u0439; \u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0441\u0442\u0430\u043B\u043E \u043F\u043B\u0430\u0432\u043D\u0435\u0435 \u0438 \u0431\u044B\u0441\u0442\u0440\u0435\u0435."
      ]
    },
    {
      v: "0.9.9.3.1",
      date: "2026-10",
      en: [
        "Deck Duel Omnipotence: your eyes close, \u7A76\u6975\u80FD\u529B (\u201Cultimate power\u201D) flashes, and they open again in a burst of fire \u2014 and your opponent sees your character\u2019s eyes blaze (Goblin red, Witch purple, Wizard blue, Knight red). In every mode, eyes glow while you are on fire.",
        "Deck Duel on phones: your cards and Omnipotence are right under the table; your kanji, the turn log and the chat are foldable sections below (a dot shows a new chat message). The mode name no longer covers the Omnipotence button.",
        "Avatar borders are bolder, and there is a new platinum Beta border with a BETA tag for everyone who finished the tutorial.",
        "Admins can delete accounts.",
        "The menu\u2019s two wizards stand in the middle of the screen; no more swaying grass in the 2D arenas, and no dragon flying over the castle."
      ],
      ru: [
        "\u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u0432 \xAB\u0414\u0443\u044D\u043B\u0438 \u043A\u043E\u043B\u043E\u0434\xBB: \u0432\u0430\u0448\u0438 \u0433\u043B\u0430\u0437\u0430 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F, \u0432\u0441\u043F\u044B\u0445\u0438\u0432\u0430\u0435\u0442 \u7A76\u6975\u80FD\u529B (\xAB\u0432\u044B\u0441\u0448\u0430\u044F \u0441\u0438\u043B\u0430\xBB), \u0438 \u043E\u043D\u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u043E\u0433\u043D\u0435 \u2014 \u0430 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A \u0432\u0438\u0434\u0438\u0442, \u043A\u0430\u043A \u0433\u043E\u0440\u044F\u0442 \u0433\u043B\u0430\u0437\u0430 \u0432\u0430\u0448\u0435\u0433\u043E \u0433\u0435\u0440\u043E\u044F (\u0413\u043E\u0431\u043B\u0438\u043D \u2014 \u043A\u0440\u0430\u0441\u043D\u044B\u043C, \u0412\u0435\u0434\u044C\u043C\u0430 \u2014 \u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u043C, \u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A \u2014 \u0441\u0438\u043D\u0438\u043C, \u0420\u044B\u0446\u0430\u0440\u044C \u2014 \u043A\u0440\u0430\u0441\u043D\u044B\u043C). \u0412\u043E \u0432\u0441\u0435\u0445 \u0440\u0435\u0436\u0438\u043C\u0430\u0445 \u0433\u043B\u0430\u0437\u0430 \u0441\u0432\u0435\u0442\u044F\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u0432 \u043E\u0433\u043D\u0435.",
        "\xAB\u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434\xBB \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435: \u0432\u0430\u0448\u0438 \u043A\u0430\u0440\u0442\u044B \u0438 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u0434 \u0441\u0442\u043E\u043B\u043E\u043C; \u0432\u0430\u0448\u0438 \u043A\u0430\u043D\u0434\u0437\u0438, \u0436\u0443\u0440\u043D\u0430\u043B \u0445\u043E\u0434\u043E\u0432 \u0438 \u0447\u0430\u0442 \u2014 \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u043D\u0438\u0436\u0435 (\u0442\u043E\u0447\u043A\u0430 \u2014 \u043D\u043E\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435). \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0436\u0438\u043C\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043A\u043D\u043E\u043F\u043A\u0443 \u0412\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0435\u0441\u0442\u0432\u0430.",
        "\u0420\u0430\u043C\u043A\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u0441\u0442\u0430\u043B\u0438 \u0442\u043E\u043B\u0449\u0435, \u0438 \u043F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u043D\u043E\u0432\u0430\u044F \u043F\u043B\u0430\u0442\u0438\u043D\u043E\u0432\u0430\u044F \u0440\u0430\u043C\u043A\u0430 Beta \u0441 \u043D\u0430\u0434\u043F\u0438\u0441\u044C\u044E BETA \u0434\u043B\u044F \u0432\u0441\u0435\u0445, \u043A\u0442\u043E \u043F\u0440\u043E\u0448\u0451\u043B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435.",
        "\u0410\u0434\u043C\u0438\u043D\u044B \u043C\u043E\u0433\u0443\u0442 \u0443\u0434\u0430\u043B\u044F\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B.",
        "\u0414\u0432\u0430 \u0432\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A\u0430 \u0432 \u043C\u0435\u043D\u044E \u0441\u0442\u043E\u044F\u0442 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435 \u044D\u043A\u0440\u0430\u043D\u0430; \u0442\u0440\u0430\u0432\u0430 \u0432 2D-\u0430\u0440\u0435\u043D\u0430\u0445 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043A\u0430\u0447\u0430\u0435\u0442\u0441\u044F, \u0438 \u043D\u0430\u0434 \u0437\u0430\u043C\u043A\u043E\u043C \u043D\u0435 \u043B\u0435\u0442\u0430\u0435\u0442 \u0434\u0440\u0430\u043A\u043E\u043D."
      ]
    },
    {
      v: "0.9.9.3",
      date: "2026-10",
      en: [
        "New 2D art: the Wizard, Witch, Knight, Goblin, Apprentice and Adventurer, the Black Dragon and every staff are painted after the concept sheets (no more pixels), and all five arenas are repainted to match the 3D ones \u2014 with a stone arena the fighters stand on, by day, sunset and night.",
        "Daily streak: a day now counts when you do four tasks \u2014 study 10 spells, a JLPT quiz, the daily challenge and a reading passage. You see them when you log in (tick \u201Cdon\u2019t show again\u201D to stop it), on the menu and in your profile card.",
        "Reading passage: your words are blanks now \u2014 fill them from the word bank under the story (the furigana is your clue), then check your score. Every word of the story can be tapped for its meaning.",
        "Study: swipe the flashcard like in Quizlet \u2014 far left Again, left Hard, right Okay, far right Easy.",
        "After a game (and the daily challenge) the words you missed are red cards again, pre-ticked with a small tick in the corner; tap a card to keep it out of your deck.",
        "Customize \u2192 Profile: avatar borders (levels 1, 5, 10, 15) and your badges, with a preview. When you unlock something, the menu shows it with OK and Equip.",
        "Battles: the clock, Forfeit and Pause sit together at the top centre (the mode name moved to the bottom left); no more grey box round the HP bars.",
        "Phones: turn or tilt your phone to look around the 3D arena, like moving the mouse.",
        "Fixes: the Goblin\u2019s and Knight\u2019s hands are visible; menu text is readable on bright day scenes; What\u2019s new shows the latest 3 updates."
      ],
      ru: [
        "\u041D\u043E\u0432\u0430\u044F 2D-\u0433\u0440\u0430\u0444\u0438\u043A\u0430: \u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A, \u0412\u0435\u0434\u044C\u043C\u0430, \u0420\u044B\u0446\u0430\u0440\u044C, \u0413\u043E\u0431\u043B\u0438\u043D, \u0423\u0447\u0435\u043D\u0438\u043A \u0438 \u0418\u0441\u043A\u0430\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439, \u0427\u0451\u0440\u043D\u044B\u0439 \u0434\u0440\u0430\u043A\u043E\u043D \u0438 \u0432\u0441\u0435 \u043F\u043E\u0441\u043E\u0445\u0438 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u044B \u043F\u043E \u043A\u043E\u043D\u0446\u0435\u043F\u0442-\u0430\u0440\u0442\u0430\u043C (\u0431\u0435\u0437 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439), \u0430 \u0432\u0441\u0435 \u043F\u044F\u0442\u044C \u0430\u0440\u0435\u043D \u043F\u0435\u0440\u0435\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u044B \u043F\u043E\u0434 3D \u2014 \u0441 \u043A\u0430\u043C\u0435\u043D\u043D\u043E\u0439 \u0430\u0440\u0435\u043D\u043E\u0439, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441\u0442\u043E\u044F\u0442 \u0431\u043E\u0439\u0446\u044B, \u0434\u043D\u0451\u043C, \u043D\u0430 \u0437\u0430\u043A\u0430\u0442\u0435 \u0438 \u043D\u043E\u0447\u044C\u044E.",
        "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0435\u0440\u0438\u044F: \u0434\u0435\u043D\u044C \u0437\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u0447\u0435\u0442\u044B\u0440\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u2014 \u0438\u0437\u0443\u0447\u0438\u0442\u044C 10 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439, \u0442\u0435\u0441\u0442 JLPT, \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435 \u0438 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F. \u0417\u0430\u0434\u0430\u043D\u0438\u044F \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u0440\u0438 \u0432\u0445\u043E\u0434\u0435 (\u043E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \xAB\u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C\xBB, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C), \u0432 \u043C\u0435\u043D\u044E \u0438 \u0432 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F.",
        "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F: \u0432\u0430\u0448\u0438 \u0441\u043B\u043E\u0432\u0430 \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u044B \u2014 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0438\u0445 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u0434 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u043E\u043C (\u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u2014 \u0444\u0443\u0440\u0438\u0433\u0430\u043D\u0430) \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442. \u041B\u044E\u0431\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.",
        "\u0423\u0447\u0451\u0431\u0430: \u0441\u043C\u0430\u0445\u0438\u0432\u0430\u0439\u0442\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443, \u043A\u0430\u043A \u0432 Quizlet \u2014 \u0434\u0430\u043B\u0435\u043A\u043E \u0432\u043B\u0435\u0432\u043E \xAB\u0421\u043D\u043E\u0432\u0430\xBB, \u0432\u043B\u0435\u0432\u043E \xAB\u0422\u0440\u0443\u0434\u043D\u043E\xBB, \u0432\u043F\u0440\u0430\u0432\u043E \xAB\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E\xBB, \u0434\u0430\u043B\u0435\u043A\u043E \u0432\u043F\u0440\u0430\u0432\u043E \xAB\u041B\u0435\u0433\u043A\u043E\xBB.",
        "\u041F\u043E\u0441\u043B\u0435 \u0438\u0433\u0440\u044B (\u0438 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u044F) \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0441\u043D\u043E\u0432\u0430 \u043A\u0440\u0430\u0441\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0441 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0439 \u0433\u0430\u043B\u043E\u0447\u043A\u043E\u0439 \u0432 \u0443\u0433\u043B\u0443; \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u043B\u043E\u0432\u043E \u0432 \u043A\u043E\u043B\u043E\u0434\u0443.",
        "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u2192 \u041F\u0440\u043E\u0444\u0438\u043B\u044C: \u0440\u0430\u043C\u043A\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 (\u0443\u0440\u043E\u0432\u043D\u0438 1, 5, 10, 15) \u0438 \u0432\u0430\u0448\u0438 \u0437\u043D\u0430\u0447\u043A\u0438 \u0441 \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u043E\u043C. \u041A\u043E\u0433\u0434\u0430 \u0447\u0442\u043E-\u0442\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043C\u0435\u043D\u044E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u044D\u0442\u043E \u0441 \u043A\u043D\u043E\u043F\u043A\u0430\u043C\u0438 \xAB\u041E\u041A\xBB \u0438 \xAB\u041D\u0430\u0434\u0435\u0442\u044C\xBB.",
        "\u0411\u043E\u0439: \u0447\u0430\u0441\u044B, \xAB\u0421\u0434\u0430\u0442\u044C\u0441\u044F\xBB \u0438 \xAB\u041F\u0430\u0443\u0437\u0430\xBB \u0432\u043C\u0435\u0441\u0442\u0435 \u0432\u0432\u0435\u0440\u0445\u0443 \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 (\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0436\u0438\u043C\u0430 \u2014 \u0432\u043D\u0438\u0437\u0443 \u0441\u043B\u0435\u0432\u0430); \u0441\u0435\u0440\u043E\u0439 \u0440\u0430\u043C\u043A\u0438 \u0432\u043E\u043A\u0440\u0443\u0433 \u043F\u043E\u043B\u043E\u0441 HP \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442.",
        "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B: \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430\u043A\u043B\u043E\u043D\u044F\u0439\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u0447\u0442\u043E\u0431\u044B \u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C 3D-\u0430\u0440\u0435\u043D\u0443, \u043A\u0430\u043A \u043C\u044B\u0448\u044C\u044E.",
        "\u0418\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: \u0440\u0443\u043A\u0438 \u0413\u043E\u0431\u043B\u0438\u043D\u0430 \u0438 \u0420\u044B\u0446\u0430\u0440\u044F \u0432\u0438\u0434\u043D\u044B; \u0442\u0435\u043A\u0441\u0442 \u043C\u0435\u043D\u044E \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u044F\u0440\u043A\u0438\u0445 \u0434\u043D\u0435\u0432\u043D\u044B\u0445 \u0441\u0446\u0435\u043D\u0430\u0445; \xAB\u0427\u0442\u043E \u043D\u043E\u0432\u043E\u0433\u043E\xBB \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 3 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F."
      ]
    },
    {
      v: "0.9.9.2",
      date: "2026-10",
      en: [
        "New low-poly Wizard, Knight and Goblin, after their concept sheets: sculpted faces, the Wizard\u2019s long beard, blue cloak and gold-trimmed robes, the Knight\u2019s great helm, red plume, tabard and sword on his back, the Goblin\u2019s long ears, red scarf, straps and wrapped legs.",
        "The Witch is brighter (you can see her on the night arenas now), and her hat brim and sleeve no longer cut through her staff: every character holds the staff leaning out and forward.",
        "Verdant staff: no more spike poking up between the branches.",
        "Results screen: the words you missed come pre-ticked for Struggling spells, and unticking one keeps it out (it is removed if it was already added)."
      ],
      ru: [
        "\u041D\u043E\u0432\u044B\u0435 \u043D\u0438\u0437\u043A\u043E\u043F\u043E\u043B\u0438\u0433\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A, \u0420\u044B\u0446\u0430\u0440\u044C \u0438 \u0413\u043E\u0431\u043B\u0438\u043D \u043F\u043E \u043A\u043E\u043D\u0446\u0435\u043F\u0442-\u0430\u0440\u0442\u0430\u043C: \u0432\u044B\u043B\u0435\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0446\u0430, \u0434\u043B\u0438\u043D\u043D\u0430\u044F \u0431\u043E\u0440\u043E\u0434\u0430, \u0441\u0438\u043D\u0438\u0439 \u043F\u043B\u0430\u0449 \u0438 \u043C\u0430\u043D\u0442\u0438\u044F \u0441 \u0437\u043E\u043B\u043E\u0442\u044B\u043C \u0443\u0437\u043E\u0440\u043E\u043C \u0443 \u0412\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A\u0430, \u0442\u043E\u043F\u0445\u0435\u043B\u044C\u043C, \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u043F\u043B\u044E\u043C\u0430\u0436, \u0441\u044E\u0440\u043A\u043E \u0438 \u043C\u0435\u0447 \u0437\u0430 \u0441\u043F\u0438\u043D\u043E\u0439 \u0443 \u0420\u044B\u0446\u0430\u0440\u044F, \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0443\u0448\u0438, \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u0448\u0430\u0440\u0444, \u0440\u0435\u043C\u043D\u0438 \u0438 \u043E\u0431\u043C\u043E\u0442\u043A\u0438 \u0443 \u0413\u043E\u0431\u043B\u0438\u043D\u0430.",
        "\u0412\u0435\u0434\u044C\u043C\u0430 \u0441\u0442\u0430\u043B\u0430 \u0441\u0432\u0435\u0442\u043B\u0435\u0435 (\u0435\u0451 \u0432\u0438\u0434\u043D\u043E \u043D\u0430 \u043D\u043E\u0447\u043D\u044B\u0445 \u0430\u0440\u0435\u043D\u0430\u0445), \u0430 \u043F\u043E\u043B\u044F \u0448\u043B\u044F\u043F\u044B \u0438 \u0440\u0443\u043A\u0430\u0432 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u0441\u043A\u0432\u043E\u0437\u044C \u043F\u043E\u0441\u043E\u0445: \u0432\u0441\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438 \u0434\u0435\u0440\u0436\u0430\u0442 \u043F\u043E\u0441\u043E\u0445 \u0441 \u043D\u0430\u043A\u043B\u043E\u043D\u043E\u043C \u043D\u0430\u0440\u0443\u0436\u0443 \u0438 \u0432\u043F\u0435\u0440\u0451\u0434.",
        "\u041F\u043E\u0441\u043E\u0445 Verdant: \u043C\u0435\u0436\u0434\u0443 \u0432\u0435\u0442\u0432\u044F\u043C\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0442\u043E\u0440\u0447\u0438\u0442 \u0448\u0438\u043F.",
        "\u042D\u043A\u0440\u0430\u043D \u0438\u0442\u043E\u0433\u043E\u0432: \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u044B \u0434\u043B\u044F \xAB\u0422\u0440\u0443\u0434\u043D\u044B\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439\xBB, \u0438 \u0435\u0441\u043B\u0438 \u0441\u043D\u044F\u0442\u044C \u0433\u0430\u043B\u043E\u0447\u043A\u0443, \u0441\u043B\u043E\u0432\u043E \u0442\u0443\u0434\u0430 \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0451\u0442 (\u0438\u043B\u0438 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u043E, \u0435\u0441\u043B\u0438 \u0443\u0436\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E)."
      ]
    },
    {
      v: "0.9.9.1",
      date: "2026-10",
      en: [
        "Unlocks are earned again (the closed beta is over), but easier: Kanji Writing, the Boss fight and Deck Duel open at level 1; backgrounds at levels 3 / 5 / 8 / 10; staffs at a 3 / 5 / 8 / 10-day login streak.",
        "A new Witch: a tall, low-poly witch after her concept art \u2014 a sculpted face with painted eyes, brows and lips, a wide hat with a crescent moon, long wavy hair, open coat with bell sleeves and a pointed hem, heeled boots.",
        "Verdant staff: the branches now rise out of the shaft and curl in over the orb (no more cut end or tips sticking out).",
        "The rotating kanji circle is back under the fighters in every 3D arena; the orange V on the Plains is gone; the Castle\u2019s warriors now fight each to their own rhythm.",
        "\u201C\u2190 Menu\u201D is a clear button at the top left of every page; the Study spells cards are centred; Back to lobby no longer covers the Preparation title; the Challenge mode list fits inside the profile card."
      ],
      ru: [
        "\u041D\u0430\u0433\u0440\u0430\u0434\u044B \u0441\u043D\u043E\u0432\u0430 \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0441\u043B\u0443\u0436\u0438\u0442\u044C (\u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0431\u0435\u0442\u0430-\u0442\u0435\u0441\u0442 \u043E\u043A\u043E\u043D\u0447\u0435\u043D), \u043D\u043E \u043F\u0440\u043E\u0449\u0435: \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438, \u0411\u0438\u0442\u0432\u0430 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C \u0438 \u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 1; \u0444\u043E\u043D\u044B \u2014 \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u044F\u0445 3 / 5 / 8 / 10; \u043F\u043E\u0441\u043E\u0445\u0438 \u2014 \u0437\u0430 \u0441\u0435\u0440\u0438\u044E \u0432\u0445\u043E\u0434\u043E\u0432 3 / 5 / 8 / 10 \u0434\u043D\u0435\u0439.",
        "\u041D\u043E\u0432\u0430\u044F \u0412\u0435\u0434\u044C\u043C\u0430: \u0432\u044B\u0441\u043E\u043A\u0430\u044F low-poly \u0432\u0435\u0434\u044C\u043C\u0430 \u043F\u043E \u043A\u043E\u043D\u0446\u0435\u043F\u0442-\u0430\u0440\u0442\u0443 \u2014 \u0432\u044B\u043B\u0435\u043F\u043B\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E \u0441 \u043D\u0430\u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0433\u043B\u0430\u0437\u0430\u043C\u0438, \u0431\u0440\u043E\u0432\u044F\u043C\u0438 \u0438 \u0433\u0443\u0431\u0430\u043C\u0438, \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0448\u043B\u044F\u043F\u0430 \u0441 \u043F\u043E\u043B\u0443\u043C\u0435\u0441\u044F\u0446\u0435\u043C, \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0432\u043E\u043B\u043D\u0438\u0441\u0442\u044B\u0435 \u0432\u043E\u043B\u043E\u0441\u044B, \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0435 \u043F\u0430\u043B\u044C\u0442\u043E \u0441 \u0440\u0443\u043A\u0430\u0432\u0430\u043C\u0438-\u043A\u043E\u043B\u043E\u043A\u043E\u043B\u0430\u043C\u0438 \u0438 \u0437\u0443\u0431\u0447\u0430\u0442\u044B\u043C \u043F\u043E\u0434\u043E\u043B\u043E\u043C, \u0441\u0430\u043F\u043E\u0433\u0438 \u043D\u0430 \u043A\u0430\u0431\u043B\u0443\u043A\u0430\u0445.",
        "\u041F\u043E\u0441\u043E\u0445 \u041B\u0438\u0441\u0442\u0432\u044B: \u0432\u0435\u0442\u0432\u0438 \u0442\u0435\u043F\u0435\u0440\u044C \u0440\u0430\u0441\u0442\u0443\u0442 \u0438\u0437 \u0434\u0440\u0435\u0432\u043A\u0430 \u0438 \u0437\u0430\u0433\u0438\u0431\u0430\u044E\u0442\u0441\u044F \u043D\u0430\u0434 \u0441\u0444\u0435\u0440\u043E\u0439 (\u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0442\u043E\u0440\u0447\u0430\u0442 \u0438 \u043D\u0435 \u0432\u0438\u0434\u043D\u043E \u0441\u0440\u0435\u0437\u0430).",
        "\u0412\u0440\u0430\u0449\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u043A\u0440\u0443\u0433 \u0441 \u043A\u0430\u043D\u0434\u0437\u0438 \u0441\u043D\u043E\u0432\u0430 \u043F\u043E\u0434 \u0431\u043E\u0439\u0446\u0430\u043C\u0438 \u043D\u0430 \u0432\u0441\u0435\u0445 3D-\u0430\u0440\u0435\u043D\u0430\u0445; \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u0430\u044F \xABV\xBB \u043D\u0430 \u0420\u0430\u0432\u043D\u0438\u043D\u0430\u0445 \u0443\u0431\u0440\u0430\u043D\u0430; \u0432\u043E\u0438\u043D\u044B \u0443 \u0417\u0430\u043C\u043A\u0430 \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u0432 \u0441\u0432\u043E\u0451\u043C \u0440\u0438\u0442\u043C\u0435.",
        "\xAB\u2190 \u041C\u0435\u043D\u044E\xBB \u2014 \u0437\u0430\u043C\u0435\u0442\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u0441\u043B\u0435\u0432\u0430 \u0432\u0432\u0435\u0440\u0445\u0443 \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435; \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443; \xAB\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438\xBB \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \xAB\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430\xBB; \u0441\u043F\u0438\u0441\u043E\u043A \u0440\u0435\u0436\u0438\u043C\u043E\u0432 \u0434\u043B\u044F \u0432\u044B\u0437\u043E\u0432\u0430 \u043F\u043E\u043C\u0435\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F."
      ]
    },
    {
      v: "0.9.9",
      date: "2026-10",
      en: [
        "Study: All, Struggling and Custom spells are three separate decks. Open any deck to see every word, when it was added, and remove words.",
        "Custom spells: add words from the dictionary (search by kanji, kana or meaning) or type in your own word with its reading and meaning.",
        "After a game you choose which deck the words you missed go to (pre-ticked: Struggling spells) \u2014 or untick them.",
        "New in Study: a JLPT-style quiz from the spells you studied, and a reading passage \u2014 a short story with your struggling words, with furigana, readings and meanings.",
        "New spells a day: pick 10\u2013150 (was always 25).",
        "Deck Duel: a turn log under your kanji (who played what, hits, heals, misses, powers), a big turn timer that turns red, no more scrolling on smaller screens, and a longer look at the answer in overtime.",
        "Big round turn timers in every mode, a red Forfeit button, and the same big \u201CBack to lobby\u201D button everywhere \u2014 plus Back to lobby and Main menu on the results screen.",
        "Profiles: show up to 3 achievement badges under your name (Progress \u2192 click a badge). Add friend from anyone\u2019s profile, and Challenge a friend to any mode.",
        "Boss Elimination: holding out until the time runs out is now a victory.",
        "Fixes: pausing no longer revives downed teammates or loses your combo; the beginner AI fight no longer runs out of time (HP is balanced to ~18 hits at every level); Rapid in the online queue finds a partner even without a level in common; writing on iPhone no longer scrolls the page.",
        "Closed beta: every mode, staff, flame and arena is open from level 1. Admins can make other players admins.",
        "The tutorial starts by asking for your language, and its window is bigger.",
        "New 3D magic staffs (Verdant, Ember, Tide, Storm, Void \u2014 each with its own animation) and five new 3D arenas: Forest, Swamp, Plains, Castle and World Tree, with painted skies, moving trees, water, flags and fireflies.",
        "Full 3D: the mouse now turns your head instead of sliding the camera \u2014 and the other players see your character look where you look. Lite keeps the lighter parallax."
      ],
      ru: [
        "\u0423\u0447\u0451\u0431\u0430: \xAB\u0412\u0441\u0435\xBB, \xAB\u0422\u0440\u0443\u0434\u043D\u044B\u0435\xBB \u0438 \xAB\u0421\u0432\u043E\u0438\xBB \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u0440\u0438 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043B\u043E\u0434\u044B. \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043B\u044E\u0431\u0443\u044E, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430, \u0434\u0430\u0442\u0443 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043B\u0438\u0448\u043D\u0438\u0435.",
        "\u0421\u0432\u043E\u0438 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F: \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043B\u043E\u0432\u0430 \u0438\u0437 \u0441\u043B\u043E\u0432\u0430\u0440\u044F (\u043F\u043E\u0438\u0441\u043A \u043F\u043E \u043A\u0430\u043D\u0434\u0437\u0438, \u043A\u0430\u043D\u0435 \u0438\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E) \u0438\u043B\u0438 \u0432\u0432\u043E\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0451 \u0441\u043B\u043E\u0432\u043E \u0441 \u0447\u0442\u0435\u043D\u0438\u0435\u043C \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C.",
        "\u041F\u043E\u0441\u043B\u0435 \u0438\u0433\u0440\u044B \u0432\u044B \u0441\u0430\u043C\u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435, \u0432 \u043A\u0430\u043A\u0443\u044E \u043A\u043E\u043B\u043E\u0434\u0443 \u043F\u043E\u0439\u0434\u0443\u0442 \u0441\u043B\u043E\u0432\u0430 \u0441 \u043E\u0448\u0438\u0431\u043A\u0430\u043C\u0438 (\u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u2014 \xAB\u0422\u0440\u0443\u0434\u043D\u044B\u0435\xBB), \u0438\u043B\u0438 \u0441\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0433\u0430\u043B\u043E\u0447\u043A\u0438.",
        "\u041D\u043E\u0432\u043E\u0435 \u0432 \u0443\u0447\u0451\u0431\u0435: \u0442\u0435\u0441\u0442 \u0432 \u0441\u0442\u0438\u043B\u0435 JLPT \u043F\u043E \u0438\u0437\u0443\u0447\u0435\u043D\u043D\u044B\u043C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\u043C \u0438 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u2014 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u0441 \u0432\u0430\u0448\u0438\u043C\u0438 \u0442\u0440\u0443\u0434\u043D\u044B\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u0441 \u0444\u0443\u0440\u0438\u0433\u0430\u043D\u043E\u0439, \u0447\u0442\u0435\u043D\u0438\u044F\u043C\u0438 \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C\u0438.",
        "\u041D\u043E\u0432\u044B\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u0432 \u0434\u0435\u043D\u044C: \u043E\u0442 10 \u0434\u043E 150 (\u0440\u0430\u043D\u044C\u0448\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 25).",
        "\u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434: \u0436\u0443\u0440\u043D\u0430\u043B \u0445\u043E\u0434\u043E\u0432 \u043F\u043E\u0434 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u043A\u0430\u043D\u0434\u0437\u0438 (\u043A\u0442\u043E \u0447\u0442\u043E \u0441\u044B\u0433\u0440\u0430\u043B, \u0443\u0434\u0430\u0440\u044B, \u043B\u0435\u0447\u0435\u043D\u0438\u0435, \u043F\u0440\u043E\u043C\u0430\u0445\u0438, \u0441\u0438\u043B\u044B), \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0442\u0430\u0439\u043C\u0435\u0440 \u0445\u043E\u0434\u0430, \u043A\u0440\u0430\u0441\u043D\u0435\u044E\u0449\u0438\u0439 \u0432 \u043A\u043E\u043D\u0446\u0435, \u0431\u0435\u0437 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u043D\u0430 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u044D\u043A\u0440\u0430\u043D\u0430\u0445 \u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0442\u0432\u0435\u0442 \u0432 \u043E\u0432\u0435\u0440\u0442\u0430\u0439\u043C\u0435.",
        "\u0411\u043E\u043B\u044C\u0448\u0438\u0435 \u043A\u0440\u0443\u0433\u043B\u044B\u0435 \u0442\u0430\u0439\u043C\u0435\u0440\u044B \u0432\u043E \u0432\u0441\u0435\u0445 \u0440\u0435\u0436\u0438\u043C\u0430\u0445, \u043A\u0440\u0430\u0441\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u0421\u0434\u0430\u0442\u044C\u0441\u044F\xBB \u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u0430\u044F \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438\xBB \u0432\u0435\u0437\u0434\u0435 \u2014 \u0430 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u0438\u0442\u043E\u0433\u043E\u0432 \u0435\u0449\u0451 \xAB\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438\xBB \u0438 \xAB\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E\xBB.",
        "\u041F\u0440\u043E\u0444\u0438\u043B\u0438: \u0434\u043E 3 \u0437\u043D\u0430\u0447\u043A\u043E\u0432 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0439 \u043F\u043E\u0434 \u0432\u0430\u0448\u0438\u043C \u0438\u043C\u0435\u043D\u0435\u043C (\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u2192 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0437\u043D\u0430\u0447\u043E\u043A). \xAB\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0434\u0440\u0443\u0437\u044C\u044F\xBB \u0432 \u043B\u044E\u0431\u043E\u043C \u043F\u0440\u043E\u0444\u0438\u043B\u0435 \u0438 \xAB\u0412\u044B\u0437\u043E\u0432\xBB \u0434\u0440\u0443\u0433\u0443 \u0432 \u043B\u044E\u0431\u043E\u0439 \u0440\u0435\u0436\u0438\u043C.",
        "\u0423\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0431\u043E\u0441\u0441\u0430: \u043F\u0440\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u043E\u0431\u0435\u0434\u0430.",
        "\u0418\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: \u043F\u0430\u0443\u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u0442 \u043F\u0430\u0432\u0448\u0438\u0445 \u0441\u043E\u044E\u0437\u043D\u0438\u043A\u043E\u0432 \u0438 \u043D\u0435 \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u0431\u043E; \u0431\u043E\u0439 \u0441 \u0418\u0418-\u043D\u043E\u0432\u0438\u0447\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043A\u043E\u043D\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 (HP \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u043E \u043D\u0430 ~18 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0439 \u043D\u0430 \u043B\u044E\u0431\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435); \xAB\u0411\u043B\u0438\u0446\xBB \u0432 \u043E\u043D\u043B\u0430\u0439\u043D-\u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430 \u0434\u0430\u0436\u0435 \u0431\u0435\u0437 \u043E\u0431\u0449\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F; \u043F\u0438\u0441\u044C\u043C\u043E \u043D\u0430 iPhone \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.",
        "\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0431\u0435\u0442\u0430-\u0442\u0435\u0441\u0442: \u0432\u0441\u0435 \u0440\u0435\u0436\u0438\u043C\u044B, \u043F\u043E\u0441\u043E\u0445\u0438, \u043F\u043B\u0430\u043C\u044F \u0438 \u0430\u0440\u0435\u043D\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044B \u0441 1 \u0443\u0440\u043E\u0432\u043D\u044F. \u0410\u0434\u043C\u0438\u043D\u044B \u043C\u043E\u0433\u0443\u0442 \u043D\u0430\u0437\u043D\u0430\u0447\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0445 \u0430\u0434\u043C\u0438\u043D\u043E\u0432.",
        "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 \u0432\u044B\u0431\u043E\u0440\u0430 \u044F\u0437\u044B\u043A\u0430, \u0430 \u0435\u0433\u043E \u043E\u043A\u043D\u043E \u0441\u0442\u0430\u043B\u043E \u0431\u043E\u043B\u044C\u0448\u0435.",
        "\u041D\u043E\u0432\u044B\u0435 3D-\u043F\u043E\u0441\u043E\u0445\u0438 (\u041B\u0438\u0441\u0442\u0432\u044B, \u0423\u0433\u043B\u0435\u0439, \u041F\u0440\u0438\u043B\u0438\u0432\u0430, \u0411\u0443\u0440\u0438, \u041F\u0443\u0441\u0442\u043E\u0442\u044B \u2014 \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0432\u043E\u044F \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044F) \u0438 \u043F\u044F\u0442\u044C \u043D\u043E\u0432\u044B\u0445 3D-\u0430\u0440\u0435\u043D: \u041B\u0435\u0441, \u0411\u043E\u043B\u043E\u0442\u043E, \u0420\u0430\u0432\u043D\u0438\u043D\u044B, \u0417\u0430\u043C\u043E\u043A \u0438 \u041C\u0438\u0440\u043E\u0432\u043E\u0435 \u0434\u0440\u0435\u0432\u043E \u2014 \u0441 \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043D\u0435\u0431\u043E\u043C, \u043A\u0430\u0447\u0430\u044E\u0449\u0438\u043C\u0438\u0441\u044F \u0434\u0435\u0440\u0435\u0432\u044C\u044F\u043C\u0438, \u0432\u043E\u0434\u043E\u0439, \u0444\u043B\u0430\u0433\u0430\u043C\u0438 \u0438 \u0441\u0432\u0435\u0442\u043B\u044F\u0447\u043A\u0430\u043C\u0438.",
        "\u041F\u043E\u043B\u043D\u043E\u0435 3D: \u043C\u044B\u0448\u044C \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0433\u043E\u043B\u043E\u0432\u0443, \u0430 \u043D\u0435 \u0441\u0434\u0432\u0438\u0433\u0430\u0435\u0442 \u043A\u0430\u043C\u0435\u0440\u0443, \u2014 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u0433\u0440\u043E\u043A\u0438 \u0432\u0438\u0434\u044F\u0442, \u043A\u0443\u0434\u0430 \u0441\u043C\u043E\u0442\u0440\u0438\u0442 \u0432\u0430\u0448 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436. \u0412 \u043B\u0451\u0433\u043A\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u0430\u0440\u0430\u043B\u043B\u0430\u043A\u0441."
      ]
    },
    {
      v: "0.9.8.5",
      date: "2026-10",
      en: ["Feedback button (bug reports and suggestions) and an admin Inbox; automatic error reports; admin Stats.", "\u201CN online\u201D on the Online queue button.", "Word meanings in Russian.", "Levels: stroke count first, JLPT level as a smaller weight.", "About: credits, licences and privacy."],
      ru: ["\u041A\u043D\u043E\u043F\u043A\u0430 \xAB\u041E\u0442\u0437\u044B\u0432\xBB (\u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F) \u0438 \xAB\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435\xBB \u0443 \u0430\u0434\u043C\u0438\u043D\u0430; \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0442\u0447\u0451\u0442\u044B \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445; \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430.", "\xABN \u0432 \u0441\u0435\u0442\u0438\xBB \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0435 \u043E\u043D\u043B\u0430\u0439\u043D-\u043E\u0447\u0435\u0440\u0435\u0434\u0438.", "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u043B\u043E\u0432 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C.", "\u0423\u0440\u043E\u0432\u043D\u0438: \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0447\u0438\u0441\u043B\u043E \u0447\u0435\u0440\u0442, \u0443\u0440\u043E\u0432\u0435\u043D\u044C JLPT \u2014 \u0441 \u043C\u0435\u043D\u044C\u0448\u0438\u043C \u0432\u0435\u0441\u043E\u043C.", "\xAB\u041E\u0431 \u0438\u0433\u0440\u0435\xBB: \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u0438, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438 \u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C."]
    },
    {
      v: "0.9.8.3",
      date: "2026-10",
      en: ["No more critical hits.", "Kana are printed in their own cells on the writing pad.", "AI players use random staffs and flames.", "Pause button next to Forfeit."],
      ru: ["\u041A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0443\u0434\u0430\u0440\u043E\u0432 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442.", "\u041A\u0430\u043D\u0430 \u043F\u0435\u0447\u0430\u0442\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0435\u0442\u043A\u0430\u0445 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u0430.", "\u0418\u0418-\u0438\u0433\u0440\u043E\u043A\u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435 \u043F\u043E\u0441\u043E\u0445\u0438 \u0438 \u043F\u043B\u0430\u043C\u044F.", "\u041A\u043D\u043E\u043F\u043A\u0430 \u043F\u0430\u0443\u0437\u044B \u0440\u044F\u0434\u043E\u043C \u0441 \xAB\u0421\u0434\u0430\u0442\u044C\u0441\u044F\xBB."]
    },
    {
      v: "0.9.8.2",
      date: "2026-10",
      en: ["Pause games against the AI.", "Daily challenge results show right and wrong words; missed ones go to Struggling spells.", "The phone keyboard no longer hides the arena."],
      ru: ["\u041F\u0430\u0443\u0437\u0430 \u0432 \u0438\u0433\u0440\u0430\u0445 \u043F\u0440\u043E\u0442\u0438\u0432 \u0418\u0418.", "\u0418\u0442\u043E\u0433\u0438 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u044F \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u0432\u0435\u0440\u043D\u044B\u0435 \u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430; \u043E\u0448\u0438\u0431\u043A\u0438 \u0438\u0434\u0443\u0442 \u0432 \xAB\u0422\u0440\u0443\u0434\u043D\u044B\u0435\xBB.", "\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0430\u0440\u0435\u043D\u0443."]
    },
    {
      v: "0.9.8.1",
      date: "2026-10",
      en: ["20 achievements with a celebration when you earn one.", "A battle keyboard for phones.", "Friends button on phones."],
      ru: ["20 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0439 \u0441 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0435\u0439 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438.", "\u0411\u043E\u0435\u0432\u0430\u044F \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u0434\u043B\u044F \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0432.", "\u041A\u043D\u043E\u043F\u043A\u0430 \u0434\u0440\u0443\u0437\u0435\u0439 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u0445."]
    }
  ];
  var SEEN = "kb:seenVersion";
  var el3 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = text;
    return e;
  };
  function initWhatsNew() {
    const dot = document.getElementById("newsDot");
    let seen2 = "";
    try {
      seen2 = localStorage.getItem(SEEN) ?? "";
    } catch {
    }
    dot.hidden = seen2 === VERSION;
    document.getElementById("newsBtn").onclick = () => {
      const ru = lang() === "ru";
      document.getElementById("newsVersion").textContent = `v${VERSION}`;
      document.getElementById("newsBody").replaceChildren(...PATCHES.slice(0, 3).map((p, i) => {
        const sec = el3("section", "news-patch" + (i === 0 ? " latest" : ""));
        const head = el3("h4", "", `${p.v}${p.v === VERSION ? ru ? " \u2014 \u0441\u0435\u0439\u0447\u0430\u0441" : " \u2014 current" : ""}`);
        const ul = el3("ul");
        for (const line of ru ? p.ru : p.en) ul.append(el3("li", "", line));
        sec.append(head, ul);
        return sec;
      }));
      document.getElementById("newsDialog").showModal();
      try {
        localStorage.setItem(SEEN, VERSION);
      } catch {
      }
      dot.hidden = true;
    };
    document.getElementById("newsClose").onclick = () => document.getElementById("newsDialog").close();
  }

  // src/client/adminui.ts
  var $5 = $;
  var el4 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  var tab = "users";
  var reports = [];
  var adminTab = () => tab;
  function setAdminTab(t) {
    tab = t;
    for (const b of document.querySelectorAll("#adminTabs [data-atab]")) b.classList.toggle("on", b.dataset.atab === t);
    $5("adminUsers").hidden = t !== "users";
    $5("adminInbox").hidden = t !== "inbox";
    $5("adminStats").hidden = t !== "stats";
    if (t === "inbox") void loadInbox();
    if (t === "stats") void loadStats();
  }
  async function refreshInboxBadge() {
    try {
      reports = (await api.inbox()).reports;
    } catch {
      return;
    }
    const open3 = reports.filter((r2) => !r2.done && r2.kind !== "error").length;
    for (const id of ["inboxBadge", "adminBadge"]) {
      $5(id).hidden = open3 === 0;
      $5(id).textContent = String(open3);
    }
  }
  async function loadInbox() {
    await refreshInboxBadge();
    renderInbox();
  }
  var KIND_LABEL = { bug: "Bug report", suggestion: "Suggestion", error: "Error" };
  function renderInbox() {
    const kind = document.querySelector('input[name="inboxKind"]:checked')?.value ?? "all";
    const showDone = $5("inboxShowDone").checked;
    const list = reports.filter((r2) => (kind === "all" || r2.kind === kind) && (showDone || !r2.done));
    $5("inboxList").replaceChildren(...list.length ? list.map((r2) => {
      const card = el4("article", `inbox-item k-${r2.kind}${r2.done ? " done" : ""}`);
      const head = el4("div", "ii-head");
      head.append(el4("span", `ii-kind k-${r2.kind}`, KIND_LABEL[r2.kind]), el4("b", "", r2.username || (r2.kind === "error" ? "game" : "?")), el4("small", "hint", dateTime(r2.at)));
      const done2 = el4("button", "pill", r2.done ? "Reopen" : "\u2713 Done");
      done2.onclick = async () => {
        await api.inboxDone(r2.id, !r2.done);
        r2.done = !r2.done;
        renderInbox();
        void refreshInboxBadge();
      };
      const del2 = el4("button", "pill danger", "Delete");
      del2.onclick = async () => {
        await api.inboxDelete(r2.id);
        reports = reports.filter((x) => x.id !== r2.id);
        renderInbox();
        void refreshInboxBadge();
      };
      head.append(el4("span", "ii-sp"), done2, del2);
      const text = el4("p", "ii-text", r2.text);
      card.append(head, text);
      if (r2.meta) {
        const m = el4("details", "ii-meta");
        m.append(el4("summary", "", "Details"), el4("pre", "", r2.meta));
        card.append(m);
      }
      return card;
    }) : [el4("p", "hint", "Nothing here.")]);
  }
  for (const i of document.querySelectorAll('input[name="inboxKind"]')) {
    i.addEventListener("change", () => {
      for (const l of document.querySelectorAll("#adminInbox .inbox-filters .chip")) l.classList.toggle("on", !!l.querySelector("input:checked"));
      renderInbox();
    });
  }
  $5("inboxShowDone").addEventListener("change", renderInbox);
  for (const b of document.querySelectorAll("#adminTabs [data-atab]")) b.onclick = () => setAdminTab(b.dataset.atab);
  var pct = (a, b) => b ? `${Math.round(a / b * 100)}%` : "\u2014";
  var FUNNEL_LABEL = {
    signup: "Signed up",
    tutorial_start: "Started the tutorial",
    tutorial_kana_yes: "Knows hiragana",
    tutorial_kana_no: "Hiragana beginner",
    tutorial_battle: "Started the first battle",
    tutorial_done: "Finished the tutorial",
    tutorial_skip: "Skipped the tutorial"
  };
  async function loadStats() {
    const box = $5("adminStats");
    box.replaceChildren(el4("p", "hint", "Loading\u2026"));
    let s;
    try {
      s = await api.adminStats();
    } catch (e) {
      box.replaceChildren(el4("p", "error", e.message));
      return;
    }
    const tiles = el4("div", "stat-tiles");
    const tile3 = (n, label, sub = "") => {
      const t = el4("div", "stat-tile");
      t.append(el4("b", "", n), el4("span", "", label));
      if (sub) t.append(el4("small", "hint", sub));
      return t;
    };
    const today2 = s.daily[s.daily.length - 1];
    tiles.append(
      tile3(s.onlineNow, "online now"),
      tile3(today2?.active ?? 0, "active today"),
      tile3(s.players, "accounts"),
      tile3(pct(s.day1.returned, s.day1.players), "back on day 1", `${s.day1.returned} of ${s.day1.players} (last 30 days)`),
      tile3(pct(s.day7.returned, s.day7.players), "back on day 7", `${s.day7.returned} of ${s.day7.players}`)
    );
    const max = Math.max(1, ...s.daily.map((d) => d.active));
    const chart = el4("div", "stat-chart");
    for (const d of s.daily) {
      const col = el4("div", "sc-col");
      const bar = el4("i", "sc-bar");
      bar.style.height = `${d.active / max * 100}%`;
      col.title = `${d.day}: ${d.active} active, ${d.signups} new`;
      col.append(el4("b", "sc-n", d.active || ""), bar, el4("span", "sc-new", d.signups ? `+${d.signups}` : ""), el4("small", "", d.day.slice(8)));
      chart.append(col);
    }
    const funnel = el4("table", "stat-table");
    const signups = s.funnel.find((f2) => f2.name === "signup")?.players ?? 0;
    funnel.append(...s.funnel.map((f2) => {
      const tr2 = el4("tr");
      tr2.append(el4("td", "", FUNNEL_LABEL[f2.name] ?? f2.name), el4("td", "num", f2.players), el4("td", "num hint", pct(f2.players, signups)));
      return tr2;
    }));
    const modes = el4("table", "stat-table");
    const rows2 = Object.entries(s.modes);
    modes.append(...rows2.length ? rows2.map(([m, v]) => {
      const tr2 = el4("tr");
      tr2.append(el4("td", "", m), el4("td", "num", `${v.started} started`), el4("td", "num", `${v.finished} finished`));
      return tr2;
    }) : [el4("tr")]);
    box.replaceChildren(
      tiles,
      el4("h3", "", "Active players (bars) and new players (+n), last 14 days"),
      chart,
      el4("div", "stat-cols")
    );
    const cols = box.lastElementChild;
    const c1 = el4("section");
    c1.append(el4("h3", "", "Tutorial funnel (last 30 days)"), funnel);
    const c2 = el4("section");
    c2.append(el4("h3", "", "Games this week"), rows2.length ? modes : el4("p", "hint", "No games yet."));
    cols.append(c1, c2);
  }

  // src/client/gamekb.ts
  var KEY5 = "kb:gamekb";
  var ROWS = ["qwertyuiop", "asdfghjkl-", "zxcvbnm"];
  var touch = () => matchMedia("(pointer: coarse)").matches;
  var gameKbPref = () => {
    try {
      return localStorage.getItem(KEY5) !== "system";
    } catch {
      return true;
    }
  };
  function setGameKbPref(on) {
    try {
      localStorage.setItem(KEY5, on ? "game" : "system");
    } catch {
    }
  }
  var gameKbAvailable = touch;
  var active = false;
  function input() {
    return $("answer");
  }
  function preview2() {
    const v = input().value;
    $("gkPreview").textContent = currentAnswerMode() === "romaji" || !v ? v : romajiToHiragana(v);
  }
  function type(ch) {
    const i = input();
    if (answerLocked()) return;
    i.value += ch;
    i.dispatchEvent(new Event("input", { bubbles: true }));
    preview2();
  }
  function build() {
    const kb = $("gameKb");
    const key = (label, cls, fn) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = `gk ${cls}`;
      b.textContent = label;
      b.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        fn();
        b.classList.add("down");
        setTimeout(() => b.classList.remove("down"), 90);
      });
      return b;
    };
    const rows2 = ROWS.map((r2, i) => {
      const row = document.createElement("div");
      row.className = "gk-row";
      for (const c of r2) row.append(key(c, "ch", () => type(c)));
      if (i === 2) row.append(key("\u232B", "wide back", () => {
        const el11 = input();
        el11.value = el11.value.slice(0, -1);
        el11.dispatchEvent(new Event("input", { bubbles: true }));
        preview2();
      }));
      return row;
    });
    const last3 = document.createElement("div");
    last3.className = "gk-row";
    last3.append(
      key("Skip", "wide skip", () => $("skip").click()),
      key("n'", "ch", () => type("'")),
      key("Cast \u23CE", "wide enter", () => {
        input().dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
        preview2();
      })
    );
    const pv = document.createElement("div");
    pv.id = "gkPreview";
    pv.className = "gk-preview";
    pv.lang = "ja";
    kb.replaceChildren(pv, ...rows2, last3);
  }
  function setGameKb(on) {
    on = on && touch() && gameKbPref();
    if (on && !$("gameKb").childElementCount) build();
    active = on;
    $("gameKb").hidden = !on;
    document.body.classList.toggle("game-kb", on);
    const i = input();
    i.inputMode = on ? "none" : "";
    if (on) preview2();
    requestAnimationFrame(() => {
      const h4 = on ? $("gameKb").getBoundingClientRect().height : 0;
      document.documentElement.style.setProperty("--kb-h", `${Math.round(h4 / uiScale())}px`);
      dispatchEvent(new Event("resize"));
    });
  }
  $("answer").addEventListener("input", () => {
    if (active) preview2();
  });
  function gameKbReset() {
    if (active) preview2();
  }

  // src/client/audio.ts
  var PREFS_KEY = "kb:audio";
  var DEFAULTS = { radio: true, sfx: true, musicVol: 0.7, sfxVol: 0.8 };
  var prefs = (() => {
    try {
      return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(PREFS_KEY) ?? "{}") };
    } catch {
      return { ...DEFAULTS };
    }
  })();
  var clamp01 = (v) => Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0));
  var sfxGain = () => 0.7 * prefs.sfxVol * prefs.sfxVol * 1.4;
  var musicGain = () => 0.9 * prefs.musicVol * prefs.musicVol * 1.3;
  var savePrefs = () => {
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
    } catch {
    }
  };
  var ctx = null;
  var sfxBus;
  var musicBus;
  var menuBus;
  var battleBus;
  var ambBus;
  var reverb;
  var scene2 = "menu";
  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext ?? window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    const comp = ctx.createDynamicsCompressor();
    comp.connect(ctx.destination);
    sfxBus = ctx.createGain();
    sfxBus.gain.value = sfxGain();
    sfxBus.connect(comp);
    musicBus = ctx.createGain();
    musicBus.gain.value = musicGain();
    musicBus.connect(comp);
    menuBus = ctx.createGain();
    menuBus.gain.value = 0;
    menuBus.connect(musicBus);
    battleBus = ctx.createGain();
    battleBus.gain.value = 0;
    battleBus.connect(musicBus);
    ambBus = ctx.createGain();
    ambBus.gain.value = 0.9;
    ambBus.connect(musicBus);
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
    scene2 = s;
    syncMusic();
  }
  function syncMusic() {
    if (!ctx) return;
    const on = prefs.radio && prefs.musicVol > 0 && document.visibilityState === "visible";
    const want = on ? scene2 === "menu" ? menuTheme : battleTheme : null;
    for (const t of [menuTheme, battleTheme]) t === want ? t.fadeIn() : t.fadeOut();
    syncAmbience();
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
  function noise(at, dur, gain, cutoff, type2 = "lowpass", bus = sfxBus, swell = false) {
    const c = ctx;
    const buf = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (swell ? (i / data.length) ** 2 : 1 - i / data.length);
    const src = c.createBufferSource();
    src.buffer = buf;
    const f2 = c.createBiquadFilter();
    f2.type = type2;
    f2.frequency.value = cutoff;
    const g = c.createGain();
    g.gain.value = gain;
    src.connect(f2).connect(g).connect(bus);
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
    /**
     * Deck Duel Omnipotence (0.9.9.3.3), timed to the eyes: a whoosh as they close, a deep impact with a ringing,
     * shimmering chord as 究極能力 flashes, then a rising swell into a roar of fire as they open.
     */
    ultimate() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      noise(t, 0.34, 0.35, 900, "lowpass", sfxBus, true);
      tone(46, t, 0.4, { type: "sine", gain: 0.18, to: 38, attack: 0.25 });
      const hit2 = t + 0.36;
      tone(110, hit2, 0.9, { type: "sine", gain: 0.5, to: 32, attack: 4e-3 });
      tone(55, hit2, 1.1, { type: "sawtooth", gain: 0.1, to: 30, attack: 4e-3 });
      noise(hit2, 0.5, 0.45, 2600);
      for (const [n, d] of [[64, 0], [71, 0.01], [76, 0.02], [83, 0.03], [88, 0.05]]) bell(midi(n), hit2 + d, 1.3, 0.07);
      tone(midi(76), hit2, 1.2, { type: "triangle", gain: 0.05, detune: 9 });
      const open3 = t + 0.86;
      noise(open3 - 0.25, 0.3, 0.3, 3500, "bandpass", sfxBus, true);
      noise(open3, 1, 0.45, 1500);
      tone(82, open3, 0.9, { type: "sawtooth", gain: 0.12, to: 140, attack: 0.05 });
      bell(midi(95), open3 + 0.04, 0.8, 0.06);
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
    /** Deck Duel: your turn — two bright rising bells. */
    yourTurn() {
      if (!sfxOk()) return;
      const t = ctx.currentTime;
      bell(midi(81), t, 0.5, 0.11);
      bell(midi(88), t + 0.14, 0.7, 0.13);
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
  function makeTrack(bpm, bus, play) {
    const STEP = 60 / bpm / 2;
    let timer3;
    let stopTimer;
    let nextTime = 0;
    let step = 0;
    const schedule = () => {
      const c = ctx;
      while (nextTime < c.currentTime + 0.5) {
        play(step, nextTime);
        nextTime += STEP;
        step++;
      }
    };
    return {
      STEP,
      fadeIn() {
        if (!ctx) return;
        clearTimeout(stopTimer);
        stopTimer = void 0;
        bus().gain.cancelScheduledValues(ctx.currentTime);
        bus().gain.setTargetAtTime(1, ctx.currentTime, 0.9);
        if (timer3 !== void 0) return;
        nextTime = ctx.currentTime + 0.12;
        step = 0;
        schedule();
        timer3 = window.setInterval(schedule, 150);
      },
      fadeOut() {
        if (!ctx || timer3 === void 0 || stopTimer !== void 0) return;
        bus().gain.cancelScheduledValues(ctx.currentTime);
        bus().gain.setTargetAtTime(0, ctx.currentTime, 0.45);
        stopTimer = window.setTimeout(() => {
          clearInterval(timer3);
          timer3 = void 0;
          stopTimer = void 0;
        }, 2200);
      }
    };
  }
  function strings(notes, at, dur, bus, level2 = 0.035, cutoff = 1100) {
    const c = ctx;
    const lp2 = c.createBiquadFilter();
    lp2.type = "lowpass";
    lp2.frequency.value = cutoff;
    const g = c.createGain();
    g.gain.setValueAtTime(1e-4, at);
    g.gain.exponentialRampToValueAtTime(level2, at + 0.9);
    g.gain.setValueAtTime(level2, at + dur - 0.6);
    g.gain.exponentialRampToValueAtTime(1e-4, at + dur + 0.5);
    lp2.connect(g).connect(bus);
    const s = c.createGain();
    s.gain.value = 0.5;
    g.connect(s).connect(reverb);
    for (const n of notes) for (const d of [-7, 7]) {
      const o = c.createOscillator();
      o.type = "sawtooth";
      o.frequency.value = midi(n);
      o.detune.value = d;
      o.connect(lp2);
      o.start(at);
      o.stop(at + dur + 0.6);
    }
  }
  function flute(n, at, dur, bus) {
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
    o.connect(g).connect(bus);
    const s = c.createGain();
    s.gain.value = 0.7;
    g.connect(s).connect(reverb);
    o.start(at);
    vib.start(at);
    o.stop(at + dur + 0.05);
    vib.stop(at + dur + 0.05);
  }
  function horn(n, at, dur, bus, level2 = 0.05) {
    const c = ctx;
    const lp2 = c.createBiquadFilter();
    lp2.type = "lowpass";
    lp2.frequency.setValueAtTime(350, at);
    lp2.frequency.linearRampToValueAtTime(1300, at + Math.min(0.5, dur * 0.5));
    lp2.frequency.linearRampToValueAtTime(600, at + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(1e-4, at);
    g.gain.exponentialRampToValueAtTime(level2, at + 0.12);
    g.gain.setValueAtTime(level2 * 0.85, at + dur * 0.75);
    g.gain.exponentialRampToValueAtTime(1e-4, at + dur);
    lp2.connect(g).connect(bus);
    const s = c.createGain();
    s.gain.value = 0.45;
    g.connect(s).connect(reverb);
    for (const d of [-9, 9]) {
      const o = c.createOscillator();
      o.type = "sawtooth";
      o.frequency.value = midi(n);
      o.detune.value = d;
      o.connect(lp2);
      o.start(at);
      o.stop(at + dur + 0.05);
    }
  }
  var menuTheme = (() => {
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
    const track = makeTrack(84, () => menuBus, (step, at) => {
      const STEP = track.STEP;
      const bar = Math.floor(step / 8) % PROG.length, inBar = step % 8, chord = PROG[bar];
      const loop = Math.floor(step / (8 * PROG.length));
      if (inBar === 0) {
        strings(chord.slice(1), at, STEP * 8, menuBus);
        tone(midi(chord[0] - 12), at, STEP * 7, { gain: 0.07, bus: menuBus, attack: 0.05 });
      }
      const arp = [0, 1, 2, 3, 2, 1, 2, 3][inBar];
      tone(midi(chord[arp] + 12), at, 1.4, { type: "triangle", gain: 0.05, bus: menuBus, send: 0.5, attack: 3e-3 });
      tone(midi(chord[arp] + 24), at, 0.5, { gain: 0.015, bus: menuBus, send: 0.5, attack: 3e-3 });
      if (inBar === 0 || inBar === 3 || inBar === 6) tone(inBar === 0 ? 62 : 55, at, 0.45, { gain: inBar === 0 ? 0.16 : 0.09, to: 38, bus: menuBus, attack: 4e-3 });
      if (loop % 3 !== 0) {
        const n = MELODY[bar][inBar];
        if (n) {
          let len = 1;
          while (inBar + len < 8 && MELODY[bar][inBar + len] === 0) len++;
          flute(n, at, STEP * Math.min(len, 4) * 0.95, menuBus);
        }
      }
    });
    return track;
  })();
  var battleTheme = (() => {
    const PROG = [
      [38, 50, 53, 57],
      [39, 51, 55, 58],
      [38, 50, 53, 57],
      [36, 48, 52, 55],
      [38, 50, 53, 57],
      [34, 46, 50, 53],
      [31, 43, 46, 50],
      [33, 45, 49, 52]
    ];
    const HORN = [
      [62, 0, 0, 0, 63, 0, 62, 0],
      [63, 0, 0, 0, 0, 0, 58, 0],
      [62, 0, 0, 65, 0, 0, 62, 0],
      [60, 0, 0, 0, 0, 0, 0, 0],
      [62, 0, 0, 0, 65, 0, 69, 0],
      [70, 0, 0, 0, 69, 0, 65, 0],
      [67, 0, 0, 0, 70, 0, 69, 67],
      [69, 0, 0, 0, 0, 0, 0, 0]
    ];
    const DRUM = [1, 0, 0, 0.6, 0.8, 0, 0.5, 0.5];
    const track = makeTrack(100, () => battleBus, (step, at) => {
      const STEP = track.STEP;
      const bar = Math.floor(step / 8) % PROG.length, inBar = step % 8, chord = PROG[bar];
      const loop = Math.floor(step / (8 * PROG.length));
      const accent = inBar === 0 || inBar === 3 || inBar === 6;
      for (const n of [chord[0] + 12, chord[1]]) tone(midi(n), at, STEP * 0.8, { type: "sawtooth", gain: accent ? 0.022 : 0.012, bus: battleBus, attack: 5e-3 });
      if (inBar === 0) {
        strings(chord.slice(1), at, STEP * 8, battleBus, 0.022, 800);
        tone(midi(chord[0]), at, STEP * 7.5, { gain: 0.09, bus: battleBus, attack: 0.04 });
      }
      const d = DRUM[inBar];
      if (d) {
        tone(inBar === 0 ? 58 : 66, at, 0.5, { gain: 0.2 * d, to: 34, bus: battleBus, attack: 3e-3 });
        noise(at, 0.12, 0.05 * d, 900, "lowpass", battleBus);
      }
      if (loop >= 1) {
        const n = HORN[bar][inBar];
        if (n) {
          let len = 1;
          while (inBar + len < 8 && HORN[bar][inBar + len] === 0) len++;
          horn(n - 12, at, STEP * len * 0.97, battleBus);
        }
      }
      if (loop % 2 === 1 && bar >= 4) tone(midi(chord[2] + 24 + (bar === 7 ? 1 : 0)), at, STEP * 0.45, { type: "sawtooth", gain: 8e-3, bus: battleBus, send: 0.5, attack: 0.01 });
      if (inBar === 4 && bar % 4 === 3) noise(at, STEP * 4, 0.035, 6e3, "highpass", battleBus, true);
    });
    return track;
  })();
  var isRadioOn = () => prefs.radio;
  var isSfxOn = () => prefs.sfx;
  var getVolumes = () => ({ music: prefs.musicVol, sfx: prefs.sfxVol });
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
  function setMusicVolume(v) {
    prefs.musicVol = clamp01(v);
    if (prefs.musicVol > 0) prefs.radio = true;
    savePrefs();
    ensure();
    if (ctx) musicBus.gain.setTargetAtTime(musicGain(), ctx.currentTime, 0.05);
    syncMusic();
  }
  function setSfxVolume(v) {
    prefs.sfxVol = clamp01(v);
    if (prefs.sfxVol > 0) prefs.sfx = true;
    savePrefs();
    ensure();
    if (ctx) sfxBus.gain.setTargetAtTime(sfxGain(), ctx.currentTime, 0.05);
  }
  function previewSfx() {
    if (sfxOk()) bell(midi(76), ctx.currentTime, 0.8, 0.18);
  }
  var ambBg = null;
  var ambTime = "night";
  var ambTimer;
  function setAmbience(bg2, time) {
    const changed = bg2 !== ambBg;
    ambBg = bg2;
    ambTime = time;
    if (changed) syncAmbience();
  }
  function syncAmbience() {
    clearTimeout(ambTimer);
    ambTimer = void 0;
    if (!ctx || !ambBg || !prefs.radio || prefs.musicVol <= 0 || scene2 !== "menu" || document.visibilityState !== "visible") return;
    const next3 = (first) => {
      ambTimer = window.setTimeout(() => {
        if (ctx?.state === "running") ambientCall(ambBg, ambTime);
        next3(false);
      }, (first ? 4e3 : 12e3) + Math.random() * 16e3);
    };
    next3(true);
  }
  function ambientCall(bg2, time) {
    const t = ctx.currentTime + 0.05;
    if (bg2 === "forest") time === "day" ? birds(t) : owl(t);
    else if (bg2 === "swamp") frogs(t);
    else if (bg2 === "plains") goblins(t);
    else if (bg2 === "castle") {
      clash(t);
      if (Math.random() < 0.6) clash(t + 0.32 + Math.random() * 0.2);
      if (Math.random() < 0.25) roar(t + 1.4);
    } else if (bg2 === "worldtree") sparkle(t);
  }
  function owl(at) {
    const hoot = (t0, dur, f02) => {
      const c = ctx;
      const o = c.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(f02, t0);
      o.frequency.exponentialRampToValueAtTime(f02 * 0.88, t0 + dur);
      const vib = c.createOscillator();
      const vg = c.createGain();
      vib.frequency.value = 7;
      vg.gain.value = 6;
      vib.connect(vg).connect(o.frequency);
      const g = c.createGain();
      g.gain.setValueAtTime(1e-4, t0);
      g.gain.exponentialRampToValueAtTime(0.09, t0 + 0.06);
      g.gain.exponentialRampToValueAtTime(1e-4, t0 + dur);
      const bp = c.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = f02;
      bp.Q.value = 2;
      o.connect(bp).connect(g).connect(ambBus);
      const s = c.createGain();
      s.gain.value = 0.8;
      g.connect(s).connect(reverb);
      o.start(t0);
      vib.start(t0);
      o.stop(t0 + dur + 0.05);
      vib.stop(t0 + dur + 0.05);
    };
    const f0 = 360 + Math.random() * 40;
    hoot(at, 0.32, f0);
    hoot(at + 0.75, 0.18, f0 * 1.04);
    hoot(at + 1, 0.75, f0 * 1.06);
  }
  function birds(at) {
    for (let i = 0; i < 3 + Math.floor(Math.random() * 3); i++) {
      const t = at + i * 0.16 + Math.random() * 0.05, f0 = 2600 + Math.random() * 900;
      tone(f0, t, 0.09, { gain: 0.02, to: f0 * 1.35, bus: ambBus, send: 0.4, attack: 5e-3 });
    }
  }
  function frogs(at) {
    const ribbit = (t0, k) => {
      const c = ctx;
      for (const [off, len, pitch] of [[0, 0.11, 1], [0.17, 0.14, 1.12]]) {
        const o = c.createOscillator();
        o.type = "square";
        o.frequency.value = 190 * k * pitch;
        const bp = c.createBiquadFilter();
        bp.type = "bandpass";
        bp.frequency.value = 850 * k;
        bp.Q.value = 3;
        const g = c.createGain();
        g.gain.setValueAtTime(1e-4, t0 + off);
        for (let p = 0; p < len / 0.025; p++) {
          const tp = t0 + off + p * 0.025;
          g.gain.setValueAtTime(1e-4, tp);
          g.gain.linearRampToValueAtTime(0.05, tp + 6e-3);
          g.gain.linearRampToValueAtTime(1e-4, tp + 0.02);
        }
        o.connect(bp).connect(g).connect(ambBus);
        const s = c.createGain();
        s.gain.value = 0.35;
        g.connect(s).connect(reverb);
        o.start(t0 + off);
        o.stop(t0 + off + len + 0.03);
      }
    };
    const n = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) ribbit(at + Math.random() * 1.6, 0.85 + Math.random() * 0.5);
  }
  function goblins(at) {
    const c = ctx;
    const syll = (t0, f0, dur, formant, level2 = 0.035) => {
      const o = c.createOscillator();
      o.type = "sawtooth";
      o.frequency.setValueAtTime(f0, t0);
      o.frequency.linearRampToValueAtTime(f0 * (0.85 + Math.random() * 0.4), t0 + dur);
      const bp = c.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = formant;
      bp.Q.value = 5;
      const g = c.createGain();
      g.gain.setValueAtTime(1e-4, t0);
      g.gain.exponentialRampToValueAtTime(level2, t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(1e-4, t0 + dur);
      o.connect(bp).connect(g).connect(ambBus);
      const s = c.createGain();
      s.gain.value = 0.4;
      g.connect(s).connect(reverb);
      o.start(t0);
      o.stop(t0 + dur + 0.02);
    };
    let t = at;
    const n = 5 + Math.floor(Math.random() * 5);
    for (let i = 0; i < n; i++) {
      const d = 0.06 + Math.random() * 0.06;
      syll(t, 520 + Math.random() * 420, d, [700, 1100, 1500, 2100][Math.floor(Math.random() * 4)]);
      t += d + 0.02;
    }
    if (Math.random() < 0.7) for (let i = 0; i < 4; i++) syll(t + 0.15 + i * 0.11, 900 + i * 40, 0.07, 1800, 0.04);
  }
  function clash(at) {
    for (const [f0, dur, g] of [[1760, 0.7, 0.035], [2730, 0.55, 0.025], [3980, 0.4, 0.02], [5560, 0.3, 0.012]]) {
      const fr = f0 * (0.97 + Math.random() * 0.06);
      tone(fr, at, dur, { gain: g, bus: ambBus, send: 0.6, attack: 2e-3 });
    }
    noise(at, 0.07, 0.05, 2600, "highpass", ambBus);
  }
  function roar(at) {
    const c = ctx;
    const o = c.createOscillator();
    o.type = "sawtooth";
    o.frequency.setValueAtTime(95, at);
    o.frequency.exponentialRampToValueAtTime(55, at + 1.5);
    const lp2 = c.createBiquadFilter();
    lp2.type = "lowpass";
    lp2.frequency.value = 420;
    const g = c.createGain();
    g.gain.setValueAtTime(1e-4, at);
    g.gain.exponentialRampToValueAtTime(0.05, at + 0.3);
    g.gain.exponentialRampToValueAtTime(1e-4, at + 1.6);
    o.connect(lp2).connect(g).connect(ambBus);
    const s = c.createGain();
    s.gain.value = 0.9;
    g.connect(s).connect(reverb);
    o.start(at);
    o.stop(at + 1.7);
  }
  function sparkle(at) {
    const notes = [79, 81, 84, 86, 88, 91];
    for (let i = 0; i < 4; i++) bell(midi(notes[Math.floor(Math.random() * notes.length)]), at + i * 0.18, 1.4, 0.03, ambBus);
  }

  // src/client/achievements.ts
  var GLYPH = {
    sword: '<path d="M14.5 4.5h5v5l-9 9-5-5z"/><path d="M5 15l4 4M3 21l3-3"/>',
    swords: '<path d="M4 4l11 11M20 4L9 15M5 19l-2 2M19 19l2 2M7 17l-2-2M17 17l2-2"/>',
    crown: '<path d="M4 8l4 4 4-6 4 6 4-4-2 10H6z"/><path d="M5 21h14"/>',
    flame: '<path d="M12 3c3 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-5 3-7 1 2 2 3 3 3 0-3-1-5 0-7z"/>',
    flame2: '<path d="M12 3c3 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-5 3-7 1 2 2 3 3 3 0-3-1-5 0-7z"/><path d="M12 13c1 1.5 2 2.5 2 4a2 2 0 0 1-4 0c0-1.5 1-2.5 2-4z"/>',
    comet: '<circle cx="7" cy="17" r="3.2"/><path d="M20 4L9.5 14.5M16 3.5l-6 6M20.5 8l-6 6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    dragon: '<path d="M3 18c2-6 6-9 12-10l4-3-1 5c1 3 0 6-3 8l2 3-5-2c-3 1-6 0-9-1z"/><circle cx="15.5" cy="10.5" r=".8"/>',
    cards: '<rect x="4" y="6" width="9" height="13" rx="1.5"/><path d="M14 6.5l5.5 1.5-3 12-5-1.4"/>',
    brush: '<path d="M18 3l3 3-9 9-3-3z"/><path d="M9 12c-3 0-5 2-5 5 0 1-1 2-2 2 3 2 9 1 9-4"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z"/><path d="M4 20V5M8 7h7"/>',
    tome: '<path d="M5 3h12a2 2 0 0 1 2 2v16H7a2 2 0 0 1-2-2z"/><path d="M12 7l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z"/>',
    kana: '<text x="12" y="17.5" text-anchor="middle" font-size="15" font-weight="900" stroke="none" fill="currentColor" font-family="sans-serif">\u3042</text>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4"/>',
    people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 6 1.8 6 5"/>',
    leaf: '<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z"/><path d="M5 19l8-8"/>',
    star: '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/>',
    kingslayer: '<path d="M3.5 9l3.5 3.5L10.5 7l3 4.5L17 9l-1.6 8.5H5.2z"/><path d="M21 3L9 21"/>'
  };
  function badgeSvg(a, locked) {
    const c = a.color;
    const id = `g${a.id.replace(/\W/g, "")}${locked ? "l" : ""}`;
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${locked ? "#2a2840" : "#2b2160"}"/><stop offset="1" stop-color="${locked ? "#16152a" : "#120c34"}"/></linearGradient></defs><path d="M32 3l25 14.5v29L32 61 7 46.5v-29z" fill="url(#${id})" stroke="${c}" stroke-width="3"/><path d="M32 9.5l19.5 11.3v22.4L32 54.5 12.5 43.2V20.8z" fill="none" stroke="${c}" stroke-opacity=".35" stroke-width="1.2"/><g transform="translate(20 20)" fill="none" stroke="${c}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" color="${c}"><g transform="scale(1)">${GLYPH[a.icon]}</g></g>${Array.from({ length: a.tier }, (_, i) => `<circle cx="${32 + (i - (a.tier - 1) / 2) * 7}" cy="52" r="2.2" fill="${c}"/>`).join("")}</svg>`;
  }
  var has = (unlocks2, id) => !!unlocks2?.includes(ACH_PREFIX + id);
  function badgeRow(ids) {
    const list = (ids ?? []).map(achById).filter((a) => !!a);
    if (!list.length) return "";
    const row = document.createElement("div");
    row.className = "badge-row";
    for (const a of list) {
      const b = document.createElement("span");
      b.className = "ach mini";
      b.tabIndex = 0;
      b.style.setProperty("--ac", a.color);
      b.setAttribute("aria-label", `${a.name}: ${a.how}`);
      b.innerHTML = badgeSvg(a, false);
      const tip = document.createElement("div");
      tip.className = "ach-tip";
      const t = document.createElement("b");
      t.textContent = a.name;
      const s = document.createElement("span");
      s.textContent = a.how;
      tip.append(t, s);
      b.append(tip);
      row.append(b);
    }
    return row;
  }
  var BADGES_MAX2 = 3;
  useBadgeRow(badgeRow);
  function renderAchievements(box, unlocks2 = [], badges2 = [], onBadges) {
    const earned = ACHIEVEMENTS.filter((a) => has(unlocks2, a.id)).length;
    const grid = document.createElement("div");
    grid.className = "ach-grid";
    for (const a of ACHIEVEMENTS) {
      const locked = !has(unlocks2, a.id);
      const b = document.createElement("div");
      b.className = "ach" + (locked ? " locked" : "");
      b.tabIndex = 0;
      b.style.setProperty("--ac", a.color);
      b.setAttribute("aria-label", `${a.name}: ${locked ? "locked \u2014 " : ""}${a.how}`);
      b.innerHTML = badgeSvg(a, locked);
      const tip = document.createElement("div");
      tip.className = "ach-tip";
      const t = document.createElement("b");
      t.textContent = a.name;
      const s = document.createElement("span");
      s.textContent = a.how;
      const pinned = badges2.includes(a.id);
      const st = document.createElement("small");
      st.textContent = locked ? "Locked" : pinned ? "On your profile \u2713 \u2014 click to remove" : onBadges ? "Unlocked \u2713 \u2014 click to show on your profile" : "Unlocked \u2713";
      tip.append(t, s, st);
      b.append(tip);
      if (pinned) {
        b.classList.add("pinned");
        const pin = document.createElement("i");
        pin.className = "ach-pin";
        pin.textContent = "\u2605";
        b.append(pin);
      }
      if (!locked && onBadges) {
        b.classList.add("pickable");
        const toggle = () => {
          if (pinned) return onBadges(badges2.filter((x) => x !== a.id));
          if (badges2.length >= BADGES_MAX2) {
            toast(`Up to ${BADGES_MAX2} badges \u2014 click one with a \u2605 to remove it first.`);
            return;
          }
          onBadges([...badges2, a.id]);
        };
        b.onclick = toggle;
        b.onkeydown = (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        };
      }
      grid.append(b);
    }
    const head = document.createElement("h3");
    head.append("Achievements ");
    const sm = document.createElement("small");
    sm.className = "hint";
    sm.textContent = `${earned} / ${ACHIEVEMENTS.length}`;
    head.append(sm);
    const hint = document.createElement("p");
    hint.className = "hint ach-hint";
    hint.textContent = `Click an earned badge to show it under your name (\u2605 = on your profile, up to ${BADGES_MAX2}).`;
    box.replaceChildren(head, ...onBadges && earned ? [hint] : [], grid);
  }
  var shown2 = /* @__PURE__ */ new Set();
  var queue2 = [];
  var playing = false;
  function celebrate(id) {
    if (shown2.has(id) || !achById(id)) return;
    shown2.add(id);
    queue2.push(id);
    if (!playing) next();
  }
  function next() {
    const id = queue2.shift();
    const box = $("achPop");
    if (!id) {
      playing = false;
      box.hidden = true;
      return;
    }
    playing = true;
    const a = achById(id);
    box.style.setProperty("--ac", a.color);
    box.innerHTML = "";
    const rays2 = document.createElement("div");
    rays2.className = "ach-rays";
    const badge = document.createElement("div");
    badge.className = "ach-badge";
    badge.innerHTML = badgeSvg(a, false);
    const txt = document.createElement("div");
    txt.className = "ach-text";
    const k = document.createElement("small");
    k.textContent = "Achievement unlocked!";
    const n = document.createElement("b");
    n.textContent = a.name;
    const h4 = document.createElement("span");
    h4.textContent = a.how;
    txt.append(k, n, h4);
    box.append(rays2, badge, txt);
    box.hidden = false;
    box.classList.remove("go");
    void box.offsetWidth;
    box.classList.add("go");
    sfx.go();
    setTimeout(next, 3800);
  }
  function celebrateNew(userId, unlocks2) {
    const key = `kb:ach:${userId}`;
    const ids = (unlocks2 ?? []).filter((u) => u.startsWith(ACH_PREFIX)).map((u) => u.slice(ACH_PREFIX.length));
    let seen2 = null;
    try {
      seen2 = JSON.parse(localStorage.getItem(key) ?? "null");
    } catch {
    }
    if (!Array.isArray(seen2)) ids.forEach((id) => shown2.add(id));
    else for (const id of ids) if (!seen2.includes(id)) celebrate(id);
    try {
      localStorage.setItem(key, JSON.stringify(ids));
    } catch {
    }
  }
  function comboMilestone(combo, unlocks2) {
    for (const [n, id] of COMBO_ACHIEVEMENTS) if (combo >= n && !has(unlocks2, id)) celebrate(id);
  }

  // src/client/friendrail.ts
  var $6 = $;
  var el5 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  var RAIL_SCREENS = /* @__PURE__ */ new Set(["menu", "queue", "admin", "modes", "lobby", "results", "study", "customize", "history", "progress", "daily", "friends"]);
  var friends = [];
  var signedIn2 = false;
  var timer = 0;
  var collapsed = { online: false, offline: true };
  function setRailUser(on) {
    signedIn2 = on;
    if (!on) {
      $6("friendRail").hidden = true;
      $6("railFab").hidden = true;
      clearInterval(timer);
    }
  }
  function railScreen(screen2) {
    const show3 = signedIn2 && RAIL_SCREENS.has(screen2);
    $6("friendRail").hidden = !show3;
    $6("railFab").hidden = !show3;
    setOpen(false);
    document.body.classList.toggle("has-rail", show3);
    clearInterval(timer);
    if (show3) {
      void refreshRail();
      timer = window.setInterval(() => void refreshRail(), 2e4);
    }
  }
  function setOpen(on) {
    $6("friendRail").classList.toggle("open", on);
    $6("railFab").setAttribute("aria-expanded", String(on));
  }
  $6("railFab").onclick = (e) => {
    e.stopPropagation();
    setOpen(!$6("friendRail").classList.contains("open"));
  };
  document.addEventListener("pointerdown", (e) => {
    const t = e.target;
    if ($6("friendRail").classList.contains("open") && !t.closest("#friendRail, #railFab, #friendDialog, #otherPop")) setOpen(false);
  });
  async function refreshRail() {
    try {
      friends = (await api.friends()).friends;
    } catch {
      return;
    }
    render2();
  }
  var avatar = (f2) => {
    const a = el5("span", "fr-av");
    if (f2.pic) {
      const img = el5("img");
      img.src = f2.pic;
      img.alt = "";
      a.append(img);
    } else a.textContent = f2.username.slice(0, 1).toUpperCase();
    a.append(el5("i", "fr-dot"));
    return a;
  };
  function render2() {
    const accepted = friends.filter((f2) => f2.status === "accepted").sort((a, b) => a.username.localeCompare(b.username));
    const online = accepted.filter((f2) => f2.online), offline2 = accepted.filter((f2) => !f2.online);
    const incoming = friends.filter((f2) => f2.status === "incoming").length;
    const section = (key, title, list2) => {
      const head = el5("button", "fr-sec", "");
      head.append(el5("b", "fr-count", list2.length), el5("span", "fr-sec-name", title), el5("span", "fr-chev", collapsed[key] ? "\u25BE" : "\u25B4"));
      head.setAttribute("aria-expanded", String(!collapsed[key]));
      head.onclick = () => {
        collapsed[key] = !collapsed[key];
        render2();
      };
      const rows2 = collapsed[key] ? [] : list2.map((f2) => {
        const r2 = el5("div", "fr-row" + (f2.online ? " online" : ""));
        markProfile(r2, { id: f2.id, name: f2.username, bot: null });
        r2.title = `${f2.username} \u2014 view profile`;
        const txt = el5("span", "fr-txt");
        txt.append(el5("span", "fr-name", f2.username), el5("small", "fr-status", f2.online ? f2.activity ?? "Online" : "Offline"));
        r2.append(avatar(f2), txt, el5("span", "fr-lv", `Lv ${f2.level ?? 0}`));
        return r2;
      });
      return [head, ...rows2];
    };
    const list = $6("railList");
    list.replaceChildren(
      ...section("online", "Online", online),
      ...section("offline", "Offline", offline2),
      ...accepted.length ? [] : [el5("p", "fr-empty", "No friends yet \u2014 add someone below.")]
    );
    $6("railOnline").textContent = String(online.length);
    $6("railFabCount").textContent = String(online.length);
    $6("railFab").classList.toggle("alert", incoming > 0);
    const badge = $6("railReqBadge");
    badge.hidden = incoming === 0;
    badge.textContent = String(incoming);
  }
  function openDialog(tab2) {
    const d = $6("friendDialog");
    for (const b of d.querySelectorAll("[data-ftab]")) b.classList.toggle("on", b.dataset.ftab === tab2);
    $6("fdAdd").hidden = tab2 !== "add";
    $6("fdRequests").hidden = tab2 !== "requests";
    $6("fdMsg").textContent = "";
    renderRequests();
    if (!d.open) d.showModal();
    if (tab2 === "add") setTimeout(() => $6("fdName").focus(), 30);
  }
  function renderRequests() {
    const box = $6("fdReqList");
    const incoming = friends.filter((f2) => f2.status === "incoming");
    const outgoing = friends.filter((f2) => f2.status === "outgoing");
    const act = (text, cls, fn) => {
      const b = el5("button", `pill ${cls}`, text);
      b.onclick = async () => {
        b.disabled = true;
        try {
          friends = (await fn()).friends;
          render2();
          renderRequests();
        } catch (e) {
          toast(e.message);
          b.disabled = false;
        }
      };
      return b;
    };
    const row = (f2, buttons, note) => {
      const r2 = el5("div", "fd-row");
      const t = el5("span", "fr-txt");
      t.append(el5("span", "fr-name", f2.username), el5("small", "fr-status", note));
      r2.append(avatar(f2), t, ...buttons);
      return r2;
    };
    box.replaceChildren(
      ...incoming.length ? [el5("h4", "", `Requests (${incoming.length})`), ...incoming.map((f2) => row(f2, [act("Accept", "primary", () => api.acceptFriend(f2.id)), act("Decline", "", () => api.removeFriend(f2.id))], "wants to be friends"))] : [el5("p", "hint", "No friend requests right now.")],
      ...outgoing.length ? [el5("h4", "", "Sent requests"), ...outgoing.map((f2) => row(f2, [act("Cancel", "", () => api.removeFriend(f2.id))], "request sent"))] : []
    );
  }
  $6("railAdd").onclick = () => openDialog("add");
  $6("railReq").onclick = () => openDialog("requests");
  for (const b of document.querySelectorAll("#friendDialog [data-ftab]")) b.onclick = () => openDialog(b.dataset.ftab);
  $6("fdClose").onclick = () => $6("friendDialog").close();
  $6("fdAdd").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input2 = $6("fdName");
    const name = input2.value.trim();
    if (!name) return;
    try {
      const r2 = await api.addFriend(name);
      friends = r2.friends;
      $6("fdMsg").textContent = r2.result === "accepted" ? `You and ${name} are now friends!` : r2.result === "exists" ? `You already asked ${name}.` : `Request sent to ${name}.`;
      input2.value = "";
      render2();
    } catch (err) {
      $6("fdMsg").textContent = err.message;
    }
  });
  $6("railList").addEventListener("click", () => $6("friendDialog").close());

  // src/client/voice.ts
  var KEY6 = "kb:voice";
  var prefs2 = (() => {
    try {
      return { on: true, vol: 0.9, ...JSON.parse(localStorage.getItem(KEY6) ?? "{}") };
    } catch {
      return { on: true, vol: 0.9 };
    }
  })();
  var save2 = () => {
    try {
      localStorage.setItem(KEY6, JSON.stringify(prefs2));
    } catch {
    }
  };
  var MALE = /ichiro|keita|otoya|hattori|daichi|naoki|takumi|male|男/i;
  var synth = typeof speechSynthesis !== "undefined" ? speechSynthesis : null;
  var voice = null;
  var male = false;
  function pick2() {
    if (!synth) return;
    const ja = synth.getVoices().filter((v) => v.lang.toLowerCase().startsWith("ja"));
    const m = ja.find((v) => MALE.test(v.name));
    voice = m ?? ja.find((v) => v.localService) ?? ja[0] ?? null;
    male = !!m;
  }
  if (synth) {
    pick2();
    synth.addEventListener?.("voiceschanged", pick2);
  }
  var android = window.KWAndroid ?? null;
  var androidSay = (kana) => {
    try {
      return !!android?.canSpeak() && android.speak(kana, 0.95, 0.85);
    } catch {
      return false;
    }
  };
  var voiceAvailable = () => !!synth || !!android;
  var getVoicePrefs = () => ({ ...prefs2, name: voice?.name ?? null, male });
  function setVoiceVolume(v) {
    prefs2.vol = Math.max(0, Math.min(1, v));
    prefs2.on = prefs2.vol > 0;
    save2();
  }
  function say(kana) {
    if (android && prefs2.on && prefs2.vol > 0) {
      androidSay(kana);
      return;
    }
    if (!synth || !prefs2.on || prefs2.vol <= 0 || document.visibilityState !== "visible") return;
    if (!voice) pick2();
    if (!voice && !synth.getVoices().length) return;
    const u = new SpeechSynthesisUtterance(kana);
    u.lang = "ja-JP";
    if (voice) u.voice = voice;
    u.rate = 0.95;
    u.pitch = male ? 1 : 0.6;
    u.volume = prefs2.vol;
    synth.cancel();
    synth.speak(u);
  }
  function speak(kana) {
    if (android && prefs2.on && prefs2.vol > 0 && document.visibilityState === "visible") {
      if (!androidSay(kana)) return Promise.resolve();
      return new Promise((done2) => setTimeout(done2, Math.min(2600, 500 + [...kana].length * 220)));
    }
    if (!synth || !prefs2.on || prefs2.vol <= 0 || document.visibilityState !== "visible") return Promise.resolve();
    if (!voice) pick2();
    if (!voice && !synth.getVoices().length) return Promise.resolve();
    return new Promise((done2) => {
      const u = new SpeechSynthesisUtterance(kana);
      u.lang = "ja-JP";
      if (voice) u.voice = voice;
      u.rate = 0.95;
      u.pitch = male ? 1 : 0.6;
      u.volume = prefs2.vol;
      let finished = false;
      const end = () => {
        if (!finished) {
          finished = true;
          done2();
        }
      };
      u.onend = end;
      u.onerror = end;
      setTimeout(end, Math.min(2600, 500 + [...kana].length * 220));
      synth.cancel();
      synth.speak(u);
    });
  }

  // src/client/notify.ts
  var blink = 0;
  var baseTitle = document.title;
  function askNotifyPermission() {
    try {
      if ("Notification" in window && Notification.permission === "default") void Notification.requestPermission();
    } catch {
    }
  }
  function attention(title, body = "") {
    if (!document.hidden && document.hasFocus()) return;
    clearInterval(blink);
    baseTitle = document.title.startsWith("\u25CF ") ? baseTitle : document.title;
    let on = false;
    blink = window.setInterval(() => {
      on = !on;
      document.title = on ? `\u25CF ${title}` : baseTitle;
    }, 900);
    try {
      if ("Notification" in window && Notification.permission === "granted") {
        const n = new Notification(title, { body, icon: "/favicon.svg", tag: "kanji-wizards", renotify: true });
        n.onclick = () => {
          window.focus();
          n.close();
        };
      }
    } catch {
    }
  }
  function stop() {
    clearInterval(blink);
    blink = 0;
    if (document.title.startsWith("\u25CF ")) document.title = baseTitle;
  }
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) stop();
  });
  addEventListener("focus", stop);

  // src/client/tutorial.ts
  var $7 = $;
  var el6 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  var access = { level: 0, admin: false, beginner: false };
  function setModeAccess(level2, admin, beginner = false) {
    access = { level: level2, admin, beginner };
    for (const card of document.querySelectorAll(".mode-card[data-mode]")) {
      const mode4 = card.dataset.mode;
      const locked = !canPlay(mode4);
      card.classList.toggle("locked", locked);
      card.dataset.lock = !locked ? "" : beginnerLocked(mode4) ? "Master hiragana first" : `Unlocks at level ${MODE_LEVEL[mode4]}`;
    }
  }
  var beginnerLocked = (_mode) => false;
  var canPlay = (mode4) => !beginnerLocked(mode4) && modeUnlocked(mode4, xpForLevel(access.level), access.admin);
  var lockText = (mode4) => beginnerLocked(mode4) ? `Deck Duel is all kanji \u2014 tick "I've mastered hiragana" in Settings first.` : `${MODE_LABEL[mode4]} unlocks at level ${MODE_LEVEL[mode4]} \u2014 win a few games first. (A friend can still invite you.)`;
  var stage = "off";
  var hooks;
  function initTutorial(h4) {
    hooks = h4;
  }
  var inTutorialBattle = () => stage === "battle";
  var CARDS = [
    { title: "Language \xB7 \u042F\u0437\u044B\u043A", body: "Choose the language for the game and this tutorial. \xB7 \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A \u0438\u0433\u0440\u044B \u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F. (You can change it later in Settings.)", language: true },
    { title: "Welcome, apprentice", body: "In Kanji Wizards every spell is a Japanese word. Learn a word \u2014 and you can cast it at your opponent." },
    { title: "Do you know hiragana?", body: `Kanji are read with hiragana (\u304B\u306A). If you can already read all of it, you start with kanji (N5 to N1). If not, you start with \u304B\u306A only \u2014 the kanji levels open once you tick "I've mastered hiragana" in Settings.`, choice: true },
    {
      title: "Cast by reading",
      body: "A kanji appears; type how it is read \u2014 in hiragana, or in romaji with a normal keyboard \u2014 and press Enter. Fast and right in a row hits harder.",
      extra: tryIt
    },
    { title: "Study makes you stronger", body: "Study spells is a flashcard deck: the more words you know, the more spells you can cast \u2014 battles use the words in your All spells. Every card you answer gives +5 XP, and words you miss in battle come back there to review." },
    { title: "All modes are open", body: "Kanji Reading, Rapid, Kanji Writing, the Boss fight and Deck Duel are all open from the start. There is also a Daily challenge, a JLPT quiz, Progress, Friends \u2014 and monthly goals with rewards." },
    { title: "\u304B\u306A first, then kanji", body: `Beginners: study \u304B\u306A in Study spells until you know it by heart. Then tick "I've mastered hiragana" in Settings (the sliders button, top-right) \u2014 and the kanji levels N5 to N1 open for studying and battles.` },
    { title: "Your first battle", body: "Ready? You'll study 10 easy words for a minute, then duel a beginner AI with them." }
  ];
  function tryIt() {
    const box = el6("div", "tut-try");
    const k = el6("span", "tut-k", "\u5C71");
    k.lang = "ja";
    const input2 = el6("input");
    input2.placeholder = "type its reading: yama";
    input2.lang = "ja";
    input2.autocomplete = "off";
    const msg = el6("span", "hint", "Mountain \u2014 try it!");
    input2.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" || e.isComposing) return;
      e.stopPropagation();
      if (isCorrectReading(input2.value, ["\u3084\u307E"])) {
        msg.textContent = "\u2713 \u3084\u307E \u2014 a spell!";
        msg.className = "ok";
        sfx.correct(1);
      } else {
        msg.textContent = "Not quite \u2014 it's \u3084\u307E (yama)";
        msg.className = "no";
        sfx.wrong();
      }
    });
    box.append(k, input2, msg);
    setTimeout(() => input2.focus(), 50);
    return box;
  }
  function startTutorial() {
    if (stage !== "off") return;
    stage = "cards";
    void api.event("tutorial_start");
    show2(0);
  }
  function show2(i) {
    const c = CARDS[i];
    const box = $7("tutorial");
    const dots = el6("div", "tut-dots");
    CARDS.forEach((_, j) => dots.append(el6("i", j === i ? "on" : "")));
    const card = el6("div", "tut-card");
    const actions = el6("div", "tut-actions");
    const last3 = i === CARDS.length - 1;
    const next3 = el6("button", "big", last3 ? "Fight a beginner AI" : "Next");
    const skip2 = el6("button", "pill", last3 ? "Maybe later" : "Skip tutorial");
    if (c.language) {
      const en = el6("button", "big" + (lang() === "en" ? "" : " alt"), "English");
      const ru = el6("button", "big" + (lang() === "ru" ? "" : " alt"), "\u0420\u0443\u0441\u0441\u043A\u0438\u0439");
      en.dataset.noI18n = "";
      ru.dataset.noI18n = "";
      en.onclick = () => show2(i + 1);
      ru.onclick = () => {
        if (lang() !== "ru") useRussianNow();
        const sel = document.getElementById("langSel");
        if (sel) sel.value = "ru";
        show2(i + 1);
      };
      next3.hidden = true;
      queueMicrotask(() => actions.append(en, ru));
    }
    if (c.choice) {
      const yes = el6("button", "big", "Yes \u2014 I know hiragana");
      const no2 = el6("button", "big alt", "I'm a beginner");
      const pickKana = (mastered) => {
        yes.disabled = no2.disabled = true;
        void api.event(mastered ? "tutorial_kana_yes" : "tutorial_kana_no");
        void hooks.kana(mastered).finally(() => show2(i + 1));
      };
      yes.onclick = () => pickKana(true);
      no2.onclick = () => pickKana(false);
      next3.hidden = true;
      queueMicrotask(() => actions.append(no2, yes));
    }
    next3.onclick = () => {
      if (!last3) return show2(i + 1);
      stage = "battle";
      box.hidden = true;
      void api.event("tutorial_battle");
      hooks.firstBattle();
    };
    skip2.onclick = () => {
      void api.event("tutorial_skip");
      finish();
    };
    actions.append(skip2, next3);
    card.append(dots, el6("h2", "", c.title), el6("p", "", c.body), ...c.extra ? [c.extra()] : [], actions);
    box.replaceChildren(card);
    box.hidden = false;
    next3.focus();
  }
  function finish() {
    stage = "off";
    $7("tutorial").hidden = true;
    coach(null);
    void api.tutorialDone().catch(() => {
    });
  }
  function tutorialScreen(screen2) {
    if (stage !== "battle") return;
    if (screen2 === "prep") coach("Read the 10 words \u2014 reading and meaning. When the battle starts, they come back as kanji only. Press Ready when you're done.");
    else if (screen2 === "battle") coach("Type the reading of the kanji (hiragana or romaji) and press Enter. Don't know it? Esc skips. Keep your HP above the AI's!");
    else if (screen2 === "results") {
      void api.event("tutorial_done");
      coach("Well cast! On the results screen you choose which deck the words you missed go to (Struggling spells by default). Every mode is open \u2014 try Writing, Boss or Deck Duel next.");
      setTimeout(finish, 12e3);
    } else if (screen2 === "menu") finish();
  }
  function coach(text) {
    const c = $7("coach");
    if (!text) {
      c.hidden = true;
      return;
    }
    const close = el6("button", "pill", "Got it");
    close.onclick = () => {
      c.hidden = true;
    };
    c.replaceChildren(el6("b", "", "Tip"), el6("span", "", text), close);
    c.hidden = false;
  }

  // src/shared/deck.ts
  var CARD_COLORS = ["lightblue", "blue", "yellow", "green", "red"];
  var CARD_SPECS = {
    lightblue: { label: "Bolt", kind: "attack", amount: 90, cost: 10 },
    blue: { label: "Frost", kind: "attack", amount: 150, cost: 20 },
    yellow: { label: "Mana", kind: "mana", amount: 60, cost: 0 },
    green: { label: "Heal", kind: "heal", amount: 140, cost: 30 },
    red: { label: "Inferno", kind: "attack", amount: 340, cost: 45 }
  };
  var DECK_CHARACTERS = ["goblin", "knight", "witch", "wizard"];
  var CHARACTER_INFO = {
    goblin: { name: "Goblin", power: "Frenzy: play 2 cards in a row this turn (the second costs 1.5\xD7 mana). 100 mana, then 5 turns cooldown." },
    knight: { name: "Knight", power: "Bulwark: take 45% less damage and heal 50% more for 2 turns. 100 mana, then 4 turns cooldown." },
    witch: { name: "Witch", power: "Sight: for 2 turns see the kanji and reading of all your cards, and your attacks hit 35% harder (the card you write still hides its kanji). 100 mana, then 4 turns cooldown." },
    wizard: { name: "Wizard", power: "Arcane reserve (passive): out of cards \u2192 draw 2 random cards before a new draft; out of mana \u2192 +30 mana. Once each.", passive: true }
  };
  var DECK_RULES = {
    hp: 800,
    maxMana: 200,
    // and you start full
    manaPerTurn: 10,
    handSize: 10,
    cardsPerLevel: 4,
    picksPerTurn: 2,
    pickMs: 2e4,
    characterMs: 3e4,
    chooseMs: 15e3,
    // pick which card to play
    // casting your card, in three steps: read the meaning → see the kanji → write it from memory
    castMs: 6e4,
    // one minute for all three steps
    castReadMs: 15e3,
    // reading + meaning only; press Ready (or after 15 s) to see the kanji
    revealMs: 2e3,
    // after a cast the correct kanji shows; nothing can be played meanwhile
    skipPenaltyHp: 100,
    // letting the choose clock run out without playing a card
    matchMs: 8 * 6e4,
    // then overtime
    // overtime is a 1v1 Rapid duel: the cards are gone; random kanji (N5–N1), first to type the reading hits
    overtimeCardMs: 12e3,
    // per kanji
    overtimeGapMs: 4500,
    // the answer (kanji, reading, meaning) stays up before the next kanji
    overtimeMaxMs: 3 * 6e4,
    // then the higher HP wins
    witchSightDamage: 1.35,
    // Witch's attack spells hit harder while Sight is on
    goblinSecondCost: 1.5,
    // Frenzy's second card costs this much more mana
    goblinCooldown: 5,
    // Frenzy rests this many of your turns (the others: abilityCooldown)
    knightDamageTaken: 0.55,
    knightHealBonus: 1.5,
    abilityTurns: 2,
    manaRefund: 0.5,
    // a successful spell gives back half its mana cost
    abilityCost: 100,
    // mana to fire your hero's power
    abilityCooldown: 4,
    // your turns until it can be used again
    wizardBonusCards: 2,
    wizardBonusMana: 30
  };

  // src/client/deckui.ts
  var $8 = $;
  var COLOR_NAME = { lightblue: "Light blue", blue: "Blue", yellow: "Yellow", green: "Green", red: "Red" };
  function h3(tag, cls = "", text) {
    const el11 = document.createElement(tag);
    if (cls) el11.className = cls;
    if (text !== void 0) el11.textContent = String(text);
    return el11;
  }
  var view = null;
  var hooks2;
  var wasMyTurn = false;
  var lastCastId = 0;
  var writingCastId = 0;
  var stuckId = "";
  var otInput = null;
  var inkCanvas = null;
  var inkCastId = 0;
  function deckInk(castId, strokes2, cells) {
    if (!inkCanvas || castId !== inkCastId || !inkCanvas.isConnected) return;
    if (inkCanvas.width !== 600 * cells) {
      inkCanvas.width = 600 * cells;
      inkCanvas.style.setProperty("--cols", String(cells));
    }
    paintInk(inkCanvas, strokes2);
  }
  function paintInk(cv, strokes2) {
    const ctx2 = cv.getContext("2d");
    ctx2.clearRect(0, 0, cv.width, cv.height);
    ctx2.strokeStyle = "rgba(60, 50, 110, .25)";
    ctx2.lineWidth = 3;
    ctx2.setLineDash([18, 14]);
    for (let x = 600; x < cv.width; x += 600) {
      ctx2.beginPath();
      ctx2.moveTo(x, 20);
      ctx2.lineTo(x, 580);
      ctx2.stroke();
    }
    ctx2.setLineDash([]);
    ctx2.lineCap = "round";
    ctx2.lineJoin = "round";
    ctx2.lineWidth = 20;
    ctx2.strokeStyle = "#1b1530";
    for (const s of strokes2) {
      ctx2.beginPath();
      s.forEach(([x, y], i) => i ? ctx2.lineTo(x, y) : ctx2.moveTo(x, y));
      if (s.length === 1) ctx2.lineTo(s[0][0] + 1, s[0][1] + 1);
      ctx2.stroke();
    }
  }
  function initDeck(hk) {
    hooks2 = hk;
    $8("dkAbility").onclick = () => {
      const me3 = view?.players.find((p) => p.id === view.you);
      if (me3?.character && CHARACTER_INFO[me3.character].passive) {
        const used = [me3.wizardCardsUsed ? "cards used" : "+2 cards ready", me3.wizardManaUsed ? "mana used" : "+30 mana ready"].join(" \xB7 ");
        return toast(`${CHARACTER_INFO[me3.character].power} (${used})`, 6e3);
      }
      hooks2.send({ type: "deck_ability" });
    };
    $8("dkChatForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const input2 = $8("dkChatInput");
      const text = input2.value.trim();
      if (text) hooks2.send({ type: "chat", text });
      input2.value = "";
    });
    renderGuide($8("deckGuide"));
  }
  var seenChat = /* @__PURE__ */ new Set();
  function chatMessages(msgs) {
    const log = $8("dkChatLog");
    for (const m of msgs) {
      if (seenChat.has(m.id)) continue;
      seenChat.add(m.id);
      const line = h3("div", "chat-line" + (m.from === hooks2.me() ? " mine" : ""));
      line.append(h3("b", "", m.from === hooks2.me() ? "You" : m.name), h3("span", "", m.text));
      log.append(line);
      if (m.from !== hooks2.me() && view && view.phase !== "over") sfx.flip();
      const panel = log.closest(".dk-panel");
      if (m.from !== hooks2.me() && panel && !panel.classList.contains("open")) {
        const hd = panel.querySelector("h4");
        if (hd && !hd.querySelector(".dk-unread")) hd.append(h3("span", "dk-unread"));
      }
    }
    while (log.children.length > 60) log.firstElementChild.remove();
    log.scrollTop = log.scrollHeight;
  }
  function clearChat() {
    seenChat.clear();
    $8("dkChatLog").replaceChildren();
  }
  var renderDeckGuide = (el11) => renderGuide(el11);
  function renderGuide(el11) {
    const sec = (title, ...kids) => {
      const s = h3("section", "g-sec");
      s.append(h3("h4", "", title), ...kids);
      return s;
    };
    const p = (t) => h3("p", "", t);
    const heroes = h3("div", "g-heroes");
    for (const c of DECK_CHARACTERS) {
      const row = h3("div", "g-hero");
      const av = h3("div", "g-av");
      av.innerHTML = heroSvg(c, "me");
      const txt = h3("div");
      txt.append(h3("b", "", CHARACTER_INFO[c].name), h3("span", "", CHARACTER_INFO[c].power));
      row.append(av, txt);
      heroes.append(row);
    }
    const cards = h3("div", "g-cards");
    for (const col of CARD_COLORS) {
      const spec = CARD_SPECS[col];
      const fig = h3("div", "g-card");
      fig.append(cardEl({ cardId: "", color: col }), h3("span", "", `${spec.kind === "attack" ? `${spec.amount} damage` : spec.kind === "heal" ? `heals ${spec.amount}` : `+${spec.amount} mana`} \xB7 ${spec.cost ? `${spec.cost} mana` : "free"}`));
      cards.append(fig);
    }
    const flow = h3("ol", "g-flow");
    for (const [icon, t] of [
      ["\u{1F9B8}", "Pick a hero (30 s)."],
      ["\u{1FA99}", "Coin flip, then draft: take 2 face-down cards at a time (20 s for both) until you each have 10. You see colours, not kanji. The 20 cards come from both players' All spells: 4 of each level N5\u2013N1, 2 of them yours and 2 your opponent's (a random word of that level if someone has none)."],
      ["\u{1F0CF}", `Your turn: ${DECK_RULES.chooseMs / 1e3} s to choose a card. Its mana is paid right away \u2014 even if you then miss.`],
      ["\u{1F4D6}", `The card flips: read its reading and meaning (up to ${DECK_RULES.castReadMs / 1e3} s), then press Ready to look at the kanji.`],
      ["\u270D\uFE0F", `Press CAST! \u2014 the kanji disappears and you write it from memory (pad with eraser, or Japanese keyboard). ${DECK_RULES.castMs / 6e4} minute for all three steps. Your opponent watches you write.`],
      ["\u2705", `Right \u2192 the spell hits / heals / gives mana, and you get ${DECK_RULES.manaRefund * 100}% of its mana back. Wrong or too slow \u2192 the card rips. Either way the correct kanji shows for ${DECK_RULES.revealMs / 1e3} s.`],
      ["\u{1F4DC}", "While your opponent plays, you can read the list of kanji in your hand (not which card is which)."],
      ["\u{1F504}", "Out of cards \u2192 Round 2 draft. HP, mana and powers stay."],
      ["\u26A1", "Omnipotence: once per cooldown, fire your hero's ultimate power with the button bottom-left. While it's active you burn in your flame colour (Customize \u2192 Omnipotence)."],
      ["\u23F0", `After ${DECK_RULES.matchMs / 6e4} min: overtime \u2014 the cards and Omnipotence are gone and it becomes a 1v1 Rapid duel with the HP you have: random kanji (N5\u2013N1), the first to type the reading (hiragana or romaji) hits, harder words hit harder. ${DECK_RULES.overtimeMaxMs / 6e4} min, then the higher HP wins.`],
      ["\u231B", `Letting the clock run out without playing a card costs ${DECK_RULES.skipPenaltyHp} HP.`]
    ]) {
      const li = h3("li");
      li.append(h3("span", "g-ic", icon), h3("span", "", t));
      flow.append(li);
    }
    el11.replaceChildren(
      h3("h3", "", "How Deck Duel works"),
      sec("Goal", p(`Both start with ${DECK_RULES.hp} HP and ${DECK_RULES.maxMana} mana (+${DECK_RULES.manaPerTurn} each turn). Bring your opponent to 0. No mana for any of your cards = your turn is skipped (\u2212${DECK_RULES.skipPenaltyHp} HP).`)),
      sec("Cards", cards),
      sec("A turn", flow),
      sec(`Heroes and their Omnipotence \u2014 ${DECK_RULES.abilityCost} mana, then ${DECK_RULES.abilityCooldown} turns cooldown (Goblin ${DECK_RULES.goblinCooldown})`, heroes),
      sec("Rewards", p("Win 4000 XP \xB7 draw 2500 \xB7 lose 1500 \xB7 forfeit 0 (half against AI). Every kanji of the duel joins your All spells."))
    );
  }
  function cardEl(c, opts = {}) {
    const base = CARD_SPECS[c.color];
    const spec = { ...base, cost: Math.ceil(base.cost * (opts.costFactor ?? 1)) };
    const el11 = h3(opts.button ? "button" : "div", `dkc c-${c.color}${opts.big ? " big" : ""}${!c.kanji && !opts.big ? " back" : ""}`);
    if (opts.button) el11.disabled = !!opts.disabled;
    el11.title = `${COLOR_NAME[c.color]} \u2014 ${spec.label}: ${spec.kind === "attack" ? `${spec.amount} damage` : spec.kind === "heal" ? `heal ${spec.amount}` : `+${spec.amount} mana`}${spec.cost ? `, costs ${spec.cost} mana` : ""}`;
    if (opts.big) return el11;
    el11.append(h3("span", "dkc-cost", spec.cost ? `${spec.cost}\u25C6` : "free"));
    if (c.kanji) {
      const k = h3("span", "dkc-k", c.kanji);
      k.lang = "ja";
      const r2 = h3("span", "dkc-r", c.reading ?? "");
      r2.lang = "ja";
      el11.append(k, r2);
    } else {
      el11.append(h3("span", "dkc-lbl", spec.label), h3("span", "dkc-amt", spec.kind === "attack" ? `${spec.amount}` : spec.kind === "heal" ? `+${spec.amount}\u2665` : `+${spec.amount}\u25C6`));
    }
    return el11;
  }
  var powered = (p) => !!p.character && p.character !== "wizard" && p.abilityActive > 0;
  function playerPanel(el11, p, mine) {
    paintFlame(el11, p.flame);
    el11.classList.toggle("powered", powered(p));
    arena()?.onfire(mine ? "me" : "opp", powered(p), flameColor(p.flame));
    const av = h3("div", "dk-av");
    av.innerHTML = p.character ? heroSvg(p.character, mine ? "me" : "opp", p.staff) : "";
    const name = h3("div", "dk-name");
    const nm = h3("span", "", mine ? `${p.name} (you)` : p.name);
    if (!mine) markProfile(nm, { id: p.id, name: p.name, bot: /\(AI (N\d)\)$/.exec(p.name)?.[1] ?? null });
    name.append(picEl(p.pic), nm);
    if (p.character) name.append(h3("span", "tag", CHARACTER_INFO[p.character].name));
    if (p.abilityActive > 0 && p.character !== "wizard") name.append(h3("span", "tag", `${p.character === "goblin" ? "Frenzy" : CHARACTER_INFO[p.character].power.split(":")[0]} \xD7${p.abilityActive}`));
    name.append(netBars(p.id));
    const bar = (cls, value, max, text) => {
      const b = h3("div", `dkbar ${cls}`);
      const fill2 = h3("div", "fill");
      fill2.style.width = `${Math.max(0, Math.min(1, value / max)) * 100}%`;
      b.append(fill2, h3("span", "dkbar-txt", text));
      return b;
    };
    const hp = bar("hp-bar" + (p.hp / p.maxHp <= 0.25 ? " low" : ""), p.hp, p.maxHp, `\u2665 ${p.hp} / ${p.maxHp}`);
    const mana = bar("mana-bar", p.mana, p.maxMana, `\u25C6 ${p.mana} / ${p.maxMana}`);
    const counts3 = h3("div", "dk-counts");
    counts3.append(h3("span", "cc total", `${p.handSize} card${p.handSize === 1 ? "" : "s"}`));
    for (const col of Object.keys(p.handCounts)) {
      if (!p.handCounts[col]) continue;
      const cc = h3("span", "cc");
      const dot = h3("span", `dot dkc c-${col}`);
      dot.style.width = "12px";
      dot.style.height = "16px";
      dot.style.padding = "0";
      cc.append(dot, `\xD7${p.handCounts[col]}`);
      counts3.append(cc);
    }
    el11.replaceChildren(av, name, hp, mana, counts3);
  }
  function renderDeck(v) {
    view = v;
    const me3 = v.players.find((p) => p.id === v.you);
    const opp = v.players.find((p) => p.id !== v.you);
    if (opp.character) arenaForDeck(v);
    show("deck");
    playerPanel($8("dkMe"), me3, true);
    playerPanel($8("dkOpp"), opp, false);
    const overlay = $8("dkOverlay");
    if (v.phase === "characters" || v.phase === "draft") {
      renderCast(v);
      stopCountdown("dkTurn");
      $8("dkBanner").textContent = "";
      hideTimer("dkTurn", $8("dkTurnTimer"));
      return v.phase === "characters" ? renderCharacters(v, me3, opp) : renderDraft(v, me3);
    }
    overlay.hidden = true;
    if (v.phase === "overtime") {
      countdown("dkMatch", v.overtimeLeft, (left) => $8("dkClock").textContent = `OT ${clock(left)}`);
    } else {
      countdown("dkMatch", v.matchLeftMs, (left) => $8("dkClock").textContent = clock(left));
    }
    const banner = $8("dkBanner");
    const myTurn = v.turn?.active === v.you;
    if (myTurn && !v.casting && !wasMyTurn && v.phase !== "over") {
      sfx.yourTurn();
      attention("Your turn!", "Deck Duel \u2014 choose a card");
    }
    if (!myTurn) wasMyTurn = false;
    else if (!v.casting) wasMyTurn = true;
    banner.classList.toggle("mine", myTurn || v.phase === "overtime");
    const deadline = v.casting?.deadlineMs ?? v.turn?.deadlineMs ?? 0;
    const label = v.phase === "overtime" ? "Overtime \u2014 Rapid duel! First to type the reading hits" : myTurn ? v.casting ? v.casting.stage === "read" ? "Your spell \u2014 read it" : v.casting.stage === "look" ? "Your spell \u2014 memorise the kanji" : "Write the kanji!" : `Your turn \u2014 choose a card${v.turn.castsLeft > 1 ? " (Frenzy: 2 cards)" : ""}` : v.casting ? `${opp.name} is casting` : `${opp.name} is choosing a card`;
    banner.textContent = label;
    const total = v.casting ? v.casting.overtime ? DECK_RULES.overtimeCardMs : DECK_RULES.castMs : DECK_RULES.chooseMs;
    if (deadline > 0 && v.phase !== "over") bigTimer("dkTurn", $8("dkTurnTimer"), deadline, total, myTurn || v.phase === "overtime" ? 6e3 : 3e3);
    else hideTimer("dkTurn", $8("dkTurnTimer"));
    $8("dkTurnTimer").classList.toggle("mine", myTurn || v.phase === "overtime");
    if (v.turn && v.turn.active !== feedActive) {
      feedActive = v.turn.active;
      feedTurn++;
      logFeed("turn", v.turn.active === v.you ? "Your turn" : `${opp.name}'s turn`, v.turn.active === v.you ? "me" : "opp");
    }
    const canPlay2 = myTurn && !v.casting && Date.now() >= revealUntil;
    $8("dkHand").replaceChildren(...v.hand.map((c) => {
      const costFactor = myTurn ? v.turn.costFactor : 1;
      const el11 = cardEl(c, { button: true, costFactor, disabled: !canPlay2 || Math.ceil(CARD_SPECS[c.color].cost * costFactor) > me3.mana });
      el11.onclick = () => {
        sfx.flip();
        hooks2.send({ type: "deck_play", cardId: c.cardId });
      };
      return el11;
    }));
    $8("dkOppHand").replaceChildren(...Array.from({ length: opp.handSize }, () => h3("div", "dkc back face-down")));
    const ab = $8("dkAbility");
    const ch = me3.character;
    ab.innerHTML = ch ? heroSvg(ch, "me", me3.staff) : "";
    const cd = me3.abilityCooldown;
    if (ch) {
      const label2 = h3("span", "ab-name");
      label2.append(h3("b", "", "Omnipotence"), h3("small", "", CHARACTER_INFO[ch].passive ? "passive \xB7 tap for info" : cd > 0 ? `ready in ${cd} turn${cd === 1 ? "" : "s"}` : `${DECK_RULES.abilityCost}\u25C6`));
      ab.append(label2);
    }
    if (ch && !CHARACTER_INFO[ch].passive && cd > 0) ab.append(h3("span", "ab-cd", String(cd)));
    ab.title = ch ? CHARACTER_INFO[ch].power : "";
    ab.classList.toggle("passive", !!ch && !!CHARACTER_INFO[ch].passive);
    ab.classList.toggle("active", me3.abilityActive > 0);
    ab.disabled = !ch || !CHARACTER_INFO[ch].passive && (cd > 0 || me3.mana < DECK_RULES.abilityCost || !myTurn || !!v.casting || Date.now() < revealUntil);
    renderCast(v);
    renderList(v);
  }
  document.getElementById("deck")?.addEventListener("click", (e) => {
    const head = e.target.closest(".dk-panel > h4");
    if (!head) return;
    const panel = head.parentElement;
    panel.classList.toggle("open");
    head.querySelector(".dk-unread")?.remove();
  });
  function renderList(v) {
    const box = $8("dkList");
    const head = h3("h4", "", "Your kanji");
    if (!v.deckList) {
      box.replaceChildren(head, h3("p", "hint", v.phase === "overtime" ? "Overtime \u2014 the cards are gone: type the readings!" : "Hidden on your turn. While your opponent plays, the kanji in your hand show up here."));
      return;
    }
    const ul = h3("ul", "kanji-list");
    for (const k of v.deckList) {
      const li = h3("li");
      const kj = h3("span", "kl-k", k.kanji);
      kj.lang = "ja";
      const rd = h3("span", "kl-r", k.reading);
      rd.lang = "ja";
      li.append(kj, rd, h3("span", "kl-m", k.meaning));
      ul.append(li);
    }
    box.replaceChildren(append2(head, h3("small", "", ` \xB7 ${v.deckList.length}`)), h3("p", "hint", "Which card is which stays secret."), ul);
  }
  var append2 = (el11, ...kids) => {
    el11.append(...kids);
    return el11;
  };
  var castKey = "";
  function renderCast(v) {
    const box = $8("dkCast");
    const c = v.casting;
    if (!c) {
      $8("deck").classList.remove("dk-mycast", "dk-writing");
      arena()?.channel(0);
      arena()?.oppChannel(false);
      castKey = "";
      stopCountdown("dkRead");
      if (writingCastId) {
        hooks2.stopWriting();
        writingCastId = 0;
      }
      if (Date.now() < revealUntil) return;
      box.replaceChildren();
      $8("dkFeedback").replaceChildren();
      return;
    }
    revealUntil = 0;
    clearTimeout(revealTimer);
    const mine = v.phase === "overtime" || c.ownerId === v.you;
    const key = `${c.castId}:${c.stage}:${c.card.kanji ? 1 : 0}`;
    if (key !== castKey) {
      const fresh = c.castId !== lastCastId;
      lastCastId = c.castId;
      castKey = key;
      const card = cardEl(c.card, { big: true });
      if (!fresh) card.style.animation = "none";
      const top = h3("div", "dkc-half");
      const shown3 = c.card.kanji ?? "\uFF1F".repeat(Math.min(c.chars, 3));
      const k = h3("span", `dkc-k l${Math.min(4, [...shown3].length)}` + (c.card.kanji ? "" : " unknown"), shown3);
      k.lang = "ja";
      top.append(k);
      const bottom = h3("div", "dkc-half bottom");
      if (c.overtime) bottom.append(h3("span", "dkc-r", c.rapid ? c.rapid.level : ""), h3("span", "dkc-m", c.rapid ? `Reading? \xB7 ${c.rapid.damage} damage` : "Reading?"));
      else {
        const r2 = h3("span", "dkc-r", c.card.reading ?? "");
        r2.lang = "ja";
        bottom.append(r2, h3("span", "dkc-m", c.card.meaning ?? ""));
      }
      card.append(top, bottom);
      const actions = h3("div", "cast-actions");
      otInput = null;
      if (c.overtime) {
        stopCountdown("dkRead");
        const input2 = h3("input", "ot-input");
        input2.lang = "ja";
        input2.autocomplete = "off";
        input2.spellcheck = false;
        input2.placeholder = c.answer === "romaji" ? "Type it in romaji\u2026" : "Reading (kana or romaji)\u2026";
        input2.addEventListener("input", () => arena()?.twitch());
        input2.addEventListener("keydown", (e) => {
          if (e.key !== "Enter" || e.isComposing || e.keyCode === 229) return;
          e.preventDefault();
          const text = input2.value.trim();
          if (text) hooks2.send({ type: "answer", challengeId: c.castId, text });
        });
        otInput = input2;
        actions.append(input2, h3("div", "cast-timer", "First to type its reading hits \xB7 wrong? try again"));
        setTimeout(() => input2.focus(), 30);
      } else if (mine && c.stage === "read") {
        const t = h3("div", "cast-timer");
        countdown("dkRead", c.readLeftMs ?? 0, (left) => t.textContent = `Read the meaning \u2014 the kanji shows in ${Math.ceil(left / 1e3)} s`);
        const b = h3("button", "big cast-btn", "Ready \u25B8");
        b.onclick = () => {
          b.disabled = true;
          hooks2.send({ type: "deck_cast_ready", castId: c.castId });
        };
        actions.append(t, b);
      } else if (mine && c.stage === "look") {
        stopCountdown("dkRead");
        const b = h3("button", "big cast-btn go", "CAST! \u2726");
        b.onclick = () => {
          b.disabled = true;
          sfx.flip();
          arena()?.thrust();
          hooks2.send({ type: "deck_cast_go", castId: c.castId });
        };
        actions.append(h3("div", "cast-timer", "Memorise it \u2014 it disappears when you cast"), b);
      } else if (!mine) {
        stopCountdown("dkRead");
        const who = v.players.find((p) => p.id === c.ownerId)?.name ?? "Your opponent";
        actions.append(h3("div", "cast-timer", c.stage === "read" ? "Reading the spell\u2026" : c.stage === "look" ? "Studying the kanji\u2026" : `${who} is writing\u2026`));
        if (c.stage === "write") {
          const cv = document.createElement("canvas");
          cv.className = "ink-view";
          cv.width = 600 * Math.min(4, Math.max(1, c.chars));
          cv.height = 600;
          cv.style.setProperty("--cols", String(Math.min(4, Math.max(1, c.chars))));
          inkCanvas = cv;
          inkCastId = c.castId;
          paintInk(cv, []);
          actions.append(cv);
        }
      } else stopCountdown("dkRead");
      box.replaceChildren(card, actions);
      if (fresh) $8("dkFeedback").replaceChildren();
    }
    const writeNow = mine && !c.overtime && c.stage === "write";
    $8("deck").classList.toggle("dk-mycast", mine && !c.overtime && c.ownerId === v.you);
    $8("deck").classList.toggle("dk-writing", writeNow);
    const a3 = arena();
    a3?.channel(writeNow ? 1 : mine && c.stage === "look" ? 0.4 : c.overtime ? 0.5 : 0);
    a3?.oppChannel(!mine && c.stage === "write");
    if (writeNow && writingCastId !== c.castId) {
      writingCastId = c.castId;
      hooks2.beginWriting(c.castId, c.template ?? "\u25A1".repeat(c.chars));
    } else if (!writeNow && writingCastId) {
      hooks2.stopWriting();
      writingCastId = 0;
    }
  }
  function renderCharacters(v, me3, opp) {
    const overlay = $8("dkOverlay");
    overlay.hidden = false;
    const title = h3("h2", "", me3.character ? `Waiting for ${opp.name}\u2026` : "Choose your hero");
    const grid = h3("div", "char-pick");
    for (const c of DECK_CHARACTERS) {
      const b = h3("button", "char-card" + (me3.character === c ? " on" : ""));
      b.disabled = !!me3.character;
      const av = h3("div", "ch-av");
      av.innerHTML = heroSvg(c, "me");
      b.append(av, h3("span", "ch-name", CHARACTER_INFO[c].name), h3("span", "ch-power", CHARACTER_INFO[c].power));
      b.onclick = () => hooks2.send({ type: "deck_character", character: c });
      grid.append(b);
    }
    overlay.replaceChildren(backButton(v), title, grid);
  }
  var coinShown = false;
  function renderDraft(v, me3) {
    const d = v.draft;
    const overlay = $8("dkOverlay");
    overlay.hidden = false;
    const mine = d.picker === v.you;
    const head = h3("div", "center");
    if (!coinShown) {
      coinShown = true;
      head.append(h3("div", "coin"));
    }
    if (v.round > 1) head.append(h3("p", "round-tag", `Round ${v.round} \u2014 new cards! HP, mana and powers stay as they are.`));
    head.append(h3("h2", "", d.coinWinner === v.you ? "You won the coin flip \u2014 you pick first" : "Your opponent won the coin flip"));
    const status = h3("p", "sub");
    const pickedNow = d.pool.filter((c) => c.takenBy === v.you).length;
    const kept = me3.handSize - pickedNow;
    countdown("dkDraft", d.deadlineMs, (left) => status.textContent = `${mine ? `Your pick \u2014 ${d.picksLeft} left` : "Opponent is picking"} \xB7 ${Math.ceil(left / 1e3)}s \xB7 picked ${pickedNow}/10${kept > 0 ? ` (+${kept} kept)` : ""}`);
    const board = h3("div", "draft-board");
    for (const c of d.pool) {
      const el11 = cardEl({ cardId: c.cardId, color: c.color }, { button: true, disabled: !mine || !!c.takenBy });
      if (c.takenBy) el11.classList.add("taken");
      el11.onclick = () => {
        sfx.flip();
        hooks2.send({ type: "deck_pick", cardId: c.cardId });
      };
      board.append(el11);
    }
    overlay.replaceChildren(backButton(v), head, status, board, h3("p", "hint", "You only see the colour \u2014 the kanji stays hidden until the card is played."));
  }
  function backButton(v) {
    const b = h3("button", "lobby-btn dk-back", "Back to lobby");
    b.hidden = v.round > 1;
    b.onclick = () => hooks2.send({ type: "back_to_lobby" });
    return b;
  }
  var feedTurn = 0;
  var feedActive = "";
  function logFeed(kind, text, who, color, extra) {
    const list = $8("dkFeed");
    const li = h3("li", `feed-${kind} by-${who}`);
    if (kind === "turn") {
      li.append(h3("span", "ft-turn", `Turn ${feedTurn}`), h3("span", "ft-who", text));
    } else {
      li.append(h3("span", `ft-dot${color ? ` c-${color}` : ""}`));
      const body = h3("span", "ft-text", text);
      li.append(body);
      if (extra) li.append(h3("span", "ft-extra", extra));
    }
    const atEnd = list.scrollHeight - list.scrollTop - list.clientHeight < 40;
    list.append(li);
    while (list.children.length > 120) list.firstElementChild.remove();
    if (atEnd) list.scrollTop = list.scrollHeight;
  }
  function resetFeed() {
    feedTurn = 0;
    feedActive = "";
    $8("dkFeed").replaceChildren();
  }
  function feedEvent(e) {
    if (!view) return;
    const me3 = view.you;
    const who = (id) => id === me3 ? "You" : view.players.find((p) => p.id === id)?.name ?? "Opponent";
    const whom = (id) => id === me3 ? "you" : view.players.find((p) => p.id === id)?.name ?? "the opponent";
    const side = (id) => id === me3 ? "me" : "opp";
    switch (e.kind) {
      case "coin":
        logFeed("round", `Round ${e.round}: ${who(e.winner)} won the coin flip and pick${e.winner === me3 ? "" : "s"} first`, "sys");
        break;
      case "redraft":
        logFeed("round", `${who(e.playerId)} ran out of cards \u2014 Round ${e.round} draft (HP and mana stay)`, side(e.playerId));
        break;
      case "ability":
        logFeed("power", `${who(e.playerId)} used Omnipotence \u2014 ${CHARACTER_INFO[e.character].power.split(":")[0]}`, side(e.playerId), void 0, CHARACTER_INFO[e.character].power.split(":").slice(1).join(":").split(". ")[0].trim());
        break;
      case "wizard":
        logFeed("power", `${who(e.playerId)}: Arcane reserve \u2014 ${e.what === "cards" ? "+2 random cards" : "+30 mana"}`, side(e.playerId));
        break;
      case "cast": {
        const s = CARD_SPECS[e.color];
        logFeed("cast", `${who(e.playerId)} played a ${s.label} card${s.cost ? ` (\u2212${s.cost}\u25C6)` : ""}`, side(e.playerId), e.color);
        break;
      }
      case "resolve": {
        const word2 = `${e.kanji} (${e.reading} \xB7 ${e.meaning})`;
        if (e.overtime) {
          if (e.ok) logFeed("hit", `${who(e.playerId)} read ${e.kanji} first \u2014 \u2212${e.amount} HP to ${whom(e.targetId)}`, side(e.playerId), e.color, `${e.reading} \xB7 ${e.meaning}`);
          else logFeed("miss", `Nobody read ${e.kanji} in time`, "sys", e.color, `${e.reading} \xB7 ${e.meaning}`);
          break;
        }
        const s = CARD_SPECS[e.color];
        if (!e.ok) {
          logFeed("miss", `${who(e.playerId)} missed ${e.kanji} \u2014 the ${s.label} fizzled`, side(e.playerId), e.color, `${e.reading} \xB7 ${e.meaning}${e.recognized && e.recognized !== "\xD7" ? ` \xB7 wrote ${e.recognized}` : ""}`);
          break;
        }
        const what = s.kind === "attack" ? `${s.label} hit ${whom(e.targetId)} for \u2212${e.amount} HP` : s.kind === "heal" ? `${s.label}: +${e.amount} HP` : `${s.label}: +${e.amount}\u25C6 mana`;
        logFeed(s.kind === "attack" ? "hit" : s.kind === "heal" ? "heal" : "mana", `${who(e.playerId)} cast ${e.kanji} \u2713 \u2014 ${what}${e.refund ? ` (+${e.refund}\u25C6 back)` : ""}`, side(e.playerId), e.color, word2.slice(e.kanji.length + 1));
        break;
      }
      case "overtime":
        logFeed("overtime", "Overtime! The cards are gone \u2014 first to type the reading hits", "sys");
        break;
      case "skip":
        logFeed("skip", `${who(e.playerId)} ${stuckId === e.playerId ? "had no mana for any card" : "ran out of time"} \u2014 turn skipped, \u2212${e.damage} HP`, side(e.playerId));
        break;
      case "ot_miss":
        logFeed("miss", `${who(e.playerId)} guessed wrong`, side(e.playerId));
        break;
    }
  }
  var EYE_CSS = { goblin: "#ff3a24", witch: "#b86bff", wizard: "#49a8ff", knight: "#ff3030" };
  function ultimateFx(character) {
    document.querySelector(".ult-fx")?.remove();
    const o = h3("div", "ult-fx");
    o.style.setProperty("--eye", EYE_CSS[character] ?? "#ffcf6a");
    o.append(h3("div", "ult-lid top"), h3("div", "ult-lid bot"), h3("div", "ult-eyes"), h3("div", "ult-text", "\u7A76\u6975\u80FD\u529B"), h3("div", "ult-burst"));
    o.querySelector(".ult-eyes").append(h3("i"), h3("i"));
    o.querySelector(".ult-text").lang = "ja";
    document.body.append(o);
    sfx.ultimate();
    setTimeout(() => o.remove(), 1750);
  }
  function deckEvent(e) {
    if (!view) return;
    feedEvent(e);
    const me3 = view.you;
    const name = (id) => view.players.find((p) => p.id === id)?.name ?? "Someone";
    switch (e.kind) {
      case "coin":
        coinShown = false;
        break;
      case "redraft":
        toast(`${e.playerId === me3 ? "You are" : `${name(e.playerId)} is`} out of cards \u2014 Round ${e.round} draft!`, 4e3);
        break;
      case "ability":
        if (e.playerId === me3) ultimateFx(e.character);
        else arena()?.flashEyes("opp");
        setTimeout(() => toast(`${e.playerId === me3 ? "You" : name(e.playerId)} used ${CHARACTER_INFO[e.character].power.split(":")[0]}!`), e.playerId === me3 ? 1300 : 0);
        break;
      case "wizard":
        toast(`${e.playerId === me3 ? "Your" : `${name(e.playerId)}'s`} Arcane reserve: ${e.what === "cards" ? "+2 cards" : "+30 mana"}`);
        break;
      case "stuck":
        stuckId = e.playerId;
        break;
      // the 'skip' event right after explains it
      case "overtime":
        toast("Overtime! The cards are gone \u2014 it's a Rapid duel now: first to type the reading hits.", 5e3);
        break;
      case "skip":
        sfx.hurt();
        toast(stuckId === e.playerId ? `${e.playerId === me3 ? "You have" : `${name(e.playerId)} has`} no mana for any card \u2014 turn skipped: \u2212${e.damage} HP` : `${e.playerId === me3 ? "You" : name(e.playerId)} skipped the turn: \u2212${e.damage} HP`, 3500);
        stuckId = "";
        break;
      case "ot_miss":
        if (e.playerId === me3 && otInput) {
          sfx.wrong();
          otInput.classList.remove("shake");
          void otInput.offsetWidth;
          otInput.classList.add("shake");
          otInput.select();
        }
        break;
      case "resolve":
        animateResolve(e, me3, e.ok ? speak(e.reading) : Promise.resolve());
        showReveal(e);
        break;
    }
  }
  var CARD_FX = { lightblue: "bolt", blue: "frost", red: "fire" };
  function animateResolve(e, me3, spoken = Promise.resolve()) {
    const card = $8("dkCast").querySelector(".dkc.big");
    const fb = $8("dkFeedback");
    const who = e.playerId === me3 ? "You" : view.players.find((p) => p.id === e.playerId)?.name ?? "";
    const spec = e.overtime ? { label: "Rapid hit", kind: "attack", amount: e.amount, cost: 0 } : CARD_SPECS[e.color];
    if (!e.ok) {
      fb.className = "feedback bad";
      fb.replaceChildren(h3("span", "big", e.overtime ? "\u2717 Nobody got it" : e.playerId === me3 ? "\u2717 The spell fizzles" : `\u2717 ${who} missed`), h3("span", "sub2", `${e.kanji} \xB7 ${e.reading} \xB7 ${e.meaning}${e.recognized ? ` \u2014 read: ${e.recognized}` : ""}`));
      sfx.rip();
      arena()?.fizzle(e.playerId === me3 ? "me" : "opp");
      if (card) ripCard(card);
      return;
    }
    const a3 = arena();
    if (a3) {
      const from = e.playerId === me3 ? "me" : "opp";
      const to = spec.kind === "attack" ? e.targetId === me3 ? "me" : "opp" : from;
      void a3.cast(from, to, e.kanji, { damage: e.amount, kind: spec.kind, fx: e.overtime ? void 0 : CARD_FX[e.color] });
    } else if (spec.kind === "attack" && !e.overtime && CARD_FX[e.color]) {
      const panel = $8(e.targetId === me3 ? "dkMe" : "dkOpp");
      setTimeout(() => {
        panel.classList.remove("fx-bolt", "fx-frost", "fx-fire");
        void panel.offsetWidth;
        panel.classList.add(`fx-${CARD_FX[e.color]}`);
        setTimeout(() => panel.classList.remove(`fx-${CARD_FX[e.color]}`), 1100);
      }, 500);
    }
    fb.className = "feedback good";
    fb.replaceChildren(h3("span", "big", `\u2713 ${who}: ${spec.label} ${spec.kind === "attack" ? `\u2212${e.amount}` : spec.kind === "heal" ? `+${e.amount} \u2665` : `+${e.amount} \u25C6`}`));
    if (e.refund) fb.append(h3("span", "refund", ` +${e.refund}\u25C6 back`));
    if (e.overtime) fb.append(h3("span", "sub2", `${e.kanji} \xB7 ${e.reading} \xB7 ${e.meaning}`));
    if (!card) return;
    const ghost = card.cloneNode(true);
    const r2 = zrect(card);
    Object.assign(ghost.style, { position: "fixed", left: `${r2.left}px`, top: `${r2.top}px`, width: `${r2.width}px`, height: `${r2.height}px`, zIndex: "30", margin: "0" });
    document.body.append(ghost);
    if (spec.kind === "mana") {
      void spoken.then(() => sfx.mana());
      ghost.classList.add("sparkle");
    } else {
      const towardsMe = spec.kind === "heal" ? e.playerId === me3 : e.targetId === me3;
      const target = zrect($8(towardsMe ? "dkMe" : "dkOpp"));
      ghost.style.setProperty("--fy", `${target.top + target.height / 2 - (r2.top + r2.height / 2)}px`);
      ghost.classList.add("fly-out");
      void spoken.then(() => {
        if (spec.kind === "heal") sfx.heal();
        else sfx.correct(1);
      });
      setTimeout(() => {
        if (spec.kind === "attack") towardsMe ? sfx.hurt() : sfx.impact();
      }, 500);
    }
    card.style.visibility = "hidden";
    setTimeout(() => ghost.remove(), 900);
  }
  var REVEAL_MS = 2e3;
  var revealUntil = 0;
  var revealTimer = 0;
  function showReveal(e) {
    const card = h3("div", `dkc c-${e.color} big reveal ${e.ok ? "ok" : "bad"}`);
    const top = h3("div", "dkc-half");
    const k = h3("span", `dkc-k l${Math.min(4, [...e.kanji].length)}`, e.kanji);
    k.lang = "ja";
    top.append(k);
    const bottom = h3("div", "dkc-half bottom");
    const r2 = h3("span", "dkc-r", e.reading);
    r2.lang = "ja";
    bottom.append(r2, h3("span", "dkc-m", e.meaning));
    card.append(h3("span", "reveal-badge", e.ok ? "\u2713" : "\u2717"), top, bottom);
    const label = h3("div", "cast-timer", e.ok ? "Correct!" : "The correct kanji");
    const strokesBox = h3("div", "dk-reveal-strokes");
    $8("dkCast").replaceChildren(card, label, strokesBox);
    if (!e.ok && e.playerId === hooks2.me()) showWrongStrokes(strokesBox, e.kanji);
    const ms = e.overtime ? DECK_RULES.overtimeGapMs - 300 : REVEAL_MS;
    revealUntil = Date.now() + ms;
    clearTimeout(revealTimer);
    revealTimer = window.setTimeout(() => {
      revealUntil = 0;
      if (!view?.casting) {
        $8("dkCast").replaceChildren();
        $8("dkFeedback").replaceChildren();
      }
      if (view) renderDeck(view);
    }, ms);
  }
  function ripCard(card) {
    const r2 = zrect(card);
    const wrap = h3("div", "rip");
    Object.assign(wrap.style, { position: "fixed", left: `${r2.left}px`, top: `${r2.top}px`, width: `${r2.width}px`, height: `${r2.height}px`, zIndex: "30" });
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
    wasMyTurn = false;
    resetArenaDeck();
    view = null;
    lastCastId = 0;
    writingCastId = 0;
    coinShown = false;
    resetFeed();
    $8("deck").classList.remove("dk-mycast", "dk-writing");
    stopCountdown("dkMatch");
    hideTimer("dkTurn", $8("dkTurnTimer"));
    stopCountdown("dkDraft");
  };

  // src/client/queue.ts
  var QUEUE_MODES = ["reading", "writing", "rapid", "boss"];
  var KEY7 = "kb:queue";
  var load4 = () => {
    try {
      return { modes: ["reading", "rapid"], levels: ["N5"], ...JSON.parse(localStorage.getItem(KEY7) ?? "{}") };
    } catch {
      return { modes: ["reading", "rapid"], levels: ["N5"] };
    }
  };
  var save3 = (s) => {
    try {
      localStorage.setItem(KEY7, JSON.stringify(s));
    } catch {
    }
  };
  var send = () => {
  };
  var me = () => "";
  var tick = 0;
  var searching = false;
  function guideHover(el11, mode4) {
    const pop2 = $("guidePop");
    const open3 = () => {
      pop2.replaceChildren(...modeGuideNodes(mode4));
      pop2.hidden = false;
      const r2 = zrect(el11);
      const w = Math.min(380, viewW() - 24);
      pop2.style.width = `${w}px`;
      pop2.style.left = `${Math.max(12, Math.min(viewW() - w - 12, r2.left))}px`;
      const below = r2.bottom + 10;
      pop2.style.top = `${below + pop2.offsetHeight > viewH() - 8 ? Math.max(8, r2.top - 10 - pop2.offsetHeight) : below}px`;
    };
    const close = () => {
      pop2.hidden = true;
    };
    el11.addEventListener("mouseenter", open3);
    el11.addEventListener("mouseleave", close);
    el11.addEventListener("focusin", open3);
    el11.addEventListener("focusout", close);
  }
  function chip(value, label, on, group) {
    const l = document.createElement("label");
    l.className = "chip" + (on ? " on" : "");
    const box = document.createElement("input");
    box.type = "checkbox";
    box.value = value;
    box.checked = on;
    box.name = group;
    box.onchange = () => {
      l.classList.toggle("on", box.checked);
      remember();
    };
    l.append(box, label);
    return l;
  }
  var picked2 = (id) => [...document.querySelectorAll(`#${id} input`)].filter((i) => i.checked).map((i) => i.value);
  var pick3 = "battle";
  function remember() {
    save3({ modes: picked2("qModes"), levels: picked2("qLevels"), pick: pick3 });
  }
  function choose2(p, silent = false) {
    if (p === "deck" && !canPlay("deck")) {
      if (!silent) toast(lockText("deck"), 5e3);
      p = "battle";
    }
    pick3 = p;
    document.querySelectorAll("#queuePick .queue-card").forEach((c) => {
      const on = c.dataset.q === p;
      c.classList.toggle("chosen", on);
      c.setAttribute("aria-checked", String(on));
    });
    $("qStart").textContent = p === "deck" ? "Start queue \u2014 Deck Duel" : "Start queue";
    remember();
  }
  function initQueue(sender, myId) {
    send = sender;
    me = myId;
    $("qDeckHelp").addEventListener("click", (e) => {
      e.stopPropagation();
      renderDeckGuide($("guideBody"));
      $("guideDialog").showModal();
    });
    $("qDeckHelp").addEventListener("keydown", (e) => e.stopPropagation());
    $("mfAccept").onclick = () => {
      if (foundId) send({ type: "queue_accept", matchId: foundId });
    };
    $("queueBack").onclick = () => {
      if (searching) send({ type: "queue_cancel" });
      stopSearching();
      show("menu");
    };
    document.querySelectorAll("#queuePick .queue-card").forEach((c) => {
      c.addEventListener("click", () => choose2(c.dataset.q));
      c.addEventListener("keydown", (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          choose2(c.dataset.q);
        }
      });
    });
    $("qStart").onclick = () => {
      askNotifyPermission();
      if (pick3 === "deck") return send({ type: "queue", modes: ["deck"] });
      const modes = picked2("qModes"), levels = picked2("qLevels");
      if (!modes.length) return toast("Tick at least one mode");
      if (!levels.length) return toast("Tick at least one level");
      send({ type: "queue", modes, levels });
    };
    $("qCancel").onclick = () => send({ type: "queue_cancel" });
  }
  function openQueue() {
    const s = load4();
    $("qModes").replaceChildren(...QUEUE_MODES.map((m) => {
      const open3 = canPlay(m);
      const c = chip(m, MODE_LABEL[m] + (open3 ? "" : " \xB7 locked"), open3 && s.modes.includes(m), "qm");
      if (!open3) {
        c.classList.add("locked");
        c.querySelector("input").disabled = true;
        c.title = lockText(m);
      }
      guideHover(c, m);
      return c;
    }));
    const deckCard = document.querySelector('#queuePick .queue-card[data-q="deck"]');
    deckCard.classList.toggle("locked", !canPlay("deck"));
    $("qLevels").replaceChildren(...LEVELS.map((l) => lockLevelChip(chip(l, LEVEL_LABEL[l], s.levels.includes(l) && (!kanaBeginner() || isKanaLevel(l)), "ql"), l)));
    choose2(s.pick ?? "battle", true);
    if (!searching) {
      $("queuePick").hidden = false;
      $("qSearching").hidden = true;
    }
    show("queue");
  }
  function stopSearching() {
    searching = false;
    clearInterval(tick);
    $("queuePick").hidden = false;
    $("qSearching").hidden = true;
  }
  var foundId = 0;
  var foundTimer = 0;
  function showFound(msg) {
    const box = $("matchFound");
    if (foundId !== msg.matchId) {
      foundId = msg.matchId;
      attention("Match found!", `${MODE_LABEL[msg.mode]} \u2014 press Accept`);
      $("mfBadge").replaceChildren(modeBadge(msg.mode));
      $("mfMode").textContent = MODE_LABEL[msg.mode];
      const until = Date.now() + (msg.acceptMs ?? 5e3), total = msg.acceptMs ?? 5e3;
      const arc = $("mfArc");
      clearInterval(foundTimer);
      const paint = () => {
        const left = Math.max(0, until - Date.now());
        $("mfSecs").textContent = String(Math.ceil(left / 1e3));
        arc.style.strokeDashoffset = String(276.5 * (1 - left / total));
        if (left <= 0) clearInterval(foundTimer);
      };
      paint();
      foundTimer = window.setInterval(paint, 100);
      box.hidden = false;
      sfx.go();
      $("mfAccept").focus();
    }
    const accepted = msg.accepted ?? [];
    const mine = accepted.includes(me());
    const btn = $("mfAccept");
    btn.disabled = mine;
    btn.textContent = mine ? "\u2713 Accepted" : "Accept";
    const n = msg.players ?? 2;
    $("mfStatus").textContent = n > 2 ? `${accepted.length} / ${n} accepted${mine ? " \u2014 waiting for the others\u2026" : ""}` : mine ? "Waiting for your opponent\u2026" : accepted.length ? "Your opponent accepted!" : "";
  }
  function hideFound() {
    foundId = 0;
    clearInterval(foundTimer);
    $("matchFound").hidden = true;
  }
  function onQueue(msg) {
    if (msg.state === "found") return showFound(msg);
    if (foundId) {
      hideFound();
      if (msg.state === "searching" && msg.requeued) toast("Your opponent didn't accept \u2014 you're back in the queue.", 4e3);
      if (msg.state === "idle" && msg.reason === "missed") toast("You didn't accept in time \u2014 the queue stopped.", 4e3);
    }
    if (msg.state === "idle") return stopSearching();
    $("queuePick").hidden = true;
    $("qSearching").hidden = false;
    if (currentScreen() !== "queue") show("queue");
    if (msg.state === "matched") {
      searching = false;
      clearInterval(tick);
      $("qTitle").textContent = `Player found \u2014 ${MODE_LABEL[msg.mode]}!`;
      $("qInfo").textContent = "Starting\u2026";
      $("qCancel").hidden = true;
      return;
    }
    $("qCancel").hidden = false;
    $("qTitle").textContent = "Searching for a player\u2026";
    const started2 = Date.now() - ((msg.now ?? 0) - (msg.since ?? 0));
    const others = (msg.searching ?? 1) - 1;
    const boss = (msg.modes ?? []).includes("boss") ? ` \xB7 Boss needs 4 players: ${Math.min(4, msg.boss ?? 1)} / 4 queued` : "";
    $("qInfo").textContent = `${(msg.modes ?? []).map((m) => MODE_LABEL[m]).join(" \xB7 ")} \u2014 ${others > 0 ? `${others} other player${others === 1 ? "" : "s"} searching` : "no one else searching yet"}${boss}`;
    if (!searching) {
      searching = true;
      clearInterval(tick);
      const paint = () => {
        const s = Math.floor((Date.now() - started2) / 1e3);
        $("qTimer").textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
      };
      paint();
      tick = window.setInterval(paint, 500);
    }
  }
  function resetQueue() {
    stopSearching();
    $("qCancel").hidden = false;
  }

  // src/client/cursor.ts
  var G = 32;
  var COLORS = {
    k: "#1b1530",
    // outline
    s: "#f3c9a1",
    // skin
    S: "#d99f74",
    // skin shade / finger creases
    w: "#8a5a2b",
    // handle
    W: "#c08a4a",
    // handle highlight
    m: "#c9ced8",
    // metal ferrule
    b: "#2a2230",
    // bristles
    B: "#000000",
    // wet ink tip
    c: "#3b5bdb",
    // sleeve
    C: "#9fb4ff"
    // sleeve cuff
  };
  function draw() {
    const g = Array.from({ length: G }, () => Array(G).fill(null));
    const set2 = (x, y, c) => {
      if (x >= 0 && y >= 0 && x < G && y < G) g[y][x] = c;
    };
    for (let t = 0; t <= 25; t++) {
      const x = 1 + t, y = 30 - t;
      if (t <= 1) set2(x, y, "B");
      else if (t <= 7) {
        set2(x, y, "b");
        set2(x + 1, y, "b");
        if (t >= 4 && t <= 6) set2(x, y - 1, "b");
      } else if (t <= 9) {
        set2(x, y, "m");
        set2(x + 1, y, "m");
        set2(x, y - 1, "m");
      } else {
        set2(x, y, "w");
        set2(x + 1, y, "W");
        set2(x, y - 1, "w");
      }
    }
    const hx = (y) => 31 - y;
    for (let f2 = 0; f2 < 4; f2++) {
      const y0 = 11 + 2 * f2;
      for (const y of [y0, y0 + 1]) {
        const x0 = hx(y) - 2, x1 = hx(y) + 6;
        for (let x = x0; x <= x1; x++) {
          if (y === y0 + 1 && x === x0) continue;
          set2(x, y, y === y0 + 1 && x > x0 + 1 ? "S" : "s");
        }
      }
    }
    for (let y = 10; y <= 18; y++) for (let x = hx(y) + 7; x <= Math.min(31, hx(y) + 11); x++) set2(x, y, x >= hx(y) + 10 ? "S" : "s");
    for (let x = hx(9) - 2; x <= hx(9) + 4; x++) set2(x, 9, "s");
    for (let x = hx(10) - 3; x <= hx(10) + 2; x++) set2(x, 10, x <= hx(10) - 1 ? "s" : "S");
    for (let x = hx(8) + 1; x <= hx(8) + 5; x++) set2(x, 8, "s");
    for (let y = 3; y <= 16; y++) for (let x = hx(y) + 12; x <= 31; x++) if (x - (hx(y) + 12) < 4) set2(x, y, x === hx(y) + 12 ? "C" : "c");
    const filled = g.map((row) => row.map((c) => c !== null));
    for (let y = 0; y < G; y++) for (let x = 0; x < G; x++) {
      if (filled[y][x]) continue;
      if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => filled[y + dy]?.[x + dx])) g[y][x] = "k";
    }
    return g;
  }
  var css = "";
  function brushCursor() {
    if (css) return css;
    const g = draw();
    let rects = "";
    g.forEach((row, y) => row.forEach((c, x) => {
      if (c) rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${COLORS[c]}"/>`;
    }));
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 ${G} ${G}" shape-rendering="crispEdges">${rects}</svg>`;
    css = `url("data:image/svg+xml,${encodeURIComponent(svg)}") 3 61, crosshair`;
    return css;
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
    start(token2) {
      this.token = token2;
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
    constructor(canvas, onChange2 = () => {
    }) {
      __publicField(this, "canvas", canvas);
      __publicField(this, "onChange", onChange2);
      __publicField(this, "strokes", []);
      __publicField(this, "current", null);
      __publicField(this, "ctx");
      /** onDraw: called while a stroke is being drawn (for live spectating) */
      __publicField(this, "onDraw", () => {
      });
      /** Eraser: rubbing over strokes removes them (whole strokes, so the drawing stays easy to read). */
      __publicField(this, "erasing", false);
      __publicField(this, "eraserAt", null);
      __publicField(this, "cells", 1);
      /** Cells that already hold a kana (written for you), by index → the kana. */
      __publicField(this, "printed", /* @__PURE__ */ new Map());
      __publicField(this, "rubbing", false);
      this.ctx = canvas.getContext("2d");
      canvas.addEventListener("pointerdown", (e) => this.down(e));
      canvas.addEventListener("pointermove", (e) => this.move(e));
      canvas.addEventListener("pointerup", () => this.up());
      canvas.addEventListener("pointercancel", () => this.up());
      canvas.addEventListener("pointerleave", () => this.up());
      const stop2 = (e) => {
        if (e.cancelable) e.preventDefault();
      };
      canvas.addEventListener("touchstart", stop2, { passive: false });
      canvas.addEventListener("touchmove", stop2, { passive: false });
      canvas.addEventListener("touchend", stop2, { passive: false });
      canvas.addEventListener("gesturestart", (e) => e.preventDefault());
    }
    get strokeCount() {
      return this.strokes.length;
    }
    get eraser() {
      return this.erasing;
    }
    setEraser(on) {
      this.erasing = on;
      this.canvas.classList.toggle("erasing", on);
      this.eraserAt = null;
      this.redraw();
    }
    eraseAt(p) {
      const r2 = this.canvas.height / 16;
      const before = this.strokes.length;
      this.strokes = this.strokes.filter((s) => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i], b = s[Math.min(i + 1, s.length - 1)];
          const dx = b[0] - a[0], dy = b[1] - a[1];
          const t = dx || dy ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy))) : 0;
          if (Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy)) < r2) return false;
        }
        return true;
      });
      this.eraserAt = p;
      this.redraw();
      if (this.strokes.length !== before) this.onChange();
    }
    /**
     * The word's shape: □ = a kanji to write, anything else = a kana written for you, shown in its own cell
     * (必ず → [ ][ず], 売り場 → [ ][り][ ]). Up to 6 cells.
     */
    setLayout(shape) {
      const cells = [...shape].slice(0, 6);
      this.printed = new Map(cells.flatMap((c, i) => c === "\u25A1" ? [] : [[i, c]]));
      this.resize(cells.length);
    }
    /** Resize for a word of n characters (capped at 4 cells wide; longer words just write smaller). */
    setCells(n) {
      this.printed = /* @__PURE__ */ new Map();
      this.resize(Math.min(4, n));
    }
    resize(n) {
      this.cells = Math.max(1, n);
      this.canvas.width = 600 * this.cells;
      this.canvas.height = 600;
      this.canvas.style.setProperty("--cols", String(this.cells));
      this.canvas.classList.toggle("multi", this.cells > 1);
      this.clear();
    }
    /** The finished character, in canvas pixels (the server normalises size and position). */
    take() {
      return this.strokes.map((s) => thin(s.map(([x, y]) => [Math.round(x), Math.round(y)])));
    }
    get cellCount() {
      return this.cells;
    }
    /** Everything drawn so far, including the stroke in progress (for the opponent to watch). */
    ink() {
      const all = this.current ? [...this.strokes, this.current] : this.strokes;
      return all.map((s) => thin(s.map(([x, y]) => [Math.round(x), Math.round(y)])));
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
      const r2 = this.canvas.getBoundingClientRect();
      return [(e.clientX - r2.left) / r2.width * this.canvas.width, (e.clientY - r2.top) / r2.height * this.canvas.height];
    }
    down(e) {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      e.preventDefault();
      this.canvas.setPointerCapture(e.pointerId);
      if (this.erasing) {
        this.rubbing = true;
        this.eraseAt(this.point(e));
        return;
      }
      this.current = [this.point(e)];
      this.redraw();
    }
    move(e) {
      if (this.erasing) {
        if (this.rubbing) this.eraseAt(this.point(e));
        else {
          this.eraserAt = this.point(e);
          this.redraw();
        }
        return;
      }
      if (!this.current) return;
      const p = this.point(e);
      const last3 = this.current[this.current.length - 1];
      if (Math.hypot(p[0] - last3[0], p[1] - last3[1]) < MIN_DIST) return;
      this.current.push(p);
      this.redraw();
      this.onDraw();
    }
    up() {
      this.rubbing = false;
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
      for (const [i, kana] of this.printed) {
        ctx2.save();
        ctx2.fillStyle = "rgba(110, 90, 200, .1)";
        ctx2.fillRect(i * 600, 0, 600, 600);
        ctx2.fillStyle = "rgba(60, 45, 130, .55)";
        ctx2.font = '700 380px "Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif';
        ctx2.textAlign = "center";
        ctx2.textBaseline = "middle";
        ctx2.fillText(kana, i * 600 + 300, 320);
        ctx2.restore();
      }
      if (this.cells > 1) {
        ctx2.save();
        ctx2.strokeStyle = "rgba(60, 50, 110, .28)";
        ctx2.lineWidth = 3;
        ctx2.setLineDash([18, 14]);
        for (let i = 1; i < this.cells; i++) {
          ctx2.beginPath();
          ctx2.moveTo(i * 600, 20);
          ctx2.lineTo(i * 600, 580);
          ctx2.stroke();
        }
        ctx2.setLineDash([]);
        ctx2.strokeStyle = "rgba(60, 50, 110, .1)";
        ctx2.lineWidth = 2;
        ctx2.beginPath();
        ctx2.moveTo(0, 300);
        ctx2.lineTo(canvas.width, 300);
        ctx2.stroke();
        for (let i = 0; i < this.cells; i++) {
          ctx2.beginPath();
          ctx2.moveTo(i * 600 + 300, 0);
          ctx2.lineTo(i * 600 + 300, 600);
          ctx2.stroke();
        }
        ctx2.restore();
      }
      ctx2.lineCap = "round";
      ctx2.lineJoin = "round";
      ctx2.lineWidth = canvas.height / 30;
      ctx2.strokeStyle = "#1b1530";
      for (const s of [...this.strokes, ...this.current ? [this.current] : []]) {
        ctx2.beginPath();
        s.forEach(([x, y], i) => i ? ctx2.lineTo(x, y) : ctx2.moveTo(x, y));
        ctx2.stroke();
      }
      if (this.erasing && this.eraserAt) {
        ctx2.save();
        ctx2.strokeStyle = "rgba(214, 69, 90, .8)";
        ctx2.fillStyle = "rgba(214, 69, 90, .12)";
        ctx2.lineWidth = 3;
        ctx2.beginPath();
        ctx2.arc(this.eraserAt[0], this.eraserAt[1], canvas.height / 16, 0, Math.PI * 2);
        ctx2.fill();
        ctx2.stroke();
        ctx2.restore();
      }
    }
  };

  // src/client/study.ts
  var $9 = $;
  var onProfile = () => {
  };
  var onProfileChange = (fn) => {
    onProfile = fn;
  };
  function counts2(el11, c) {
    el11.innerHTML = "";
    for (const [cls, n, label] of [["c-new", c.new, "new"], ["c-learn", c.learning, "learning"], ["c-due", c.due, "to review"]]) {
      const s = document.createElement("span");
      s.className = cls;
      const b = document.createElement("b");
      b.textContent = String(n);
      s.append(b, label);
      el11.append(s);
    }
  }
  var savedPlan = {};
  var draftPlan = {};
  var lockedLv = /* @__PURE__ */ new Set();
  var planTotal = (p) => LEVELS.reduce((a, l) => a + (lockedLv.has(l) ? 0 : p[l] ?? 0), 0);
  function levelPlan(per) {
    savedPlan = { ...per };
    draftPlan = { ...per };
    const box = $9("studyLevels");
    box.replaceChildren(...LEVELS.map((lv) => {
      const row = document.createElement("div");
      row.className = "lp-row";
      row.dataset.level = lv;
      const name = document.createElement("span");
      name.className = "lp-name";
      name.textContent = LEVEL_LABEL[lv];
      const minus = Object.assign(document.createElement("button"), { type: "button", className: "lp-btn", textContent: "\u2212" });
      const plus = Object.assign(document.createElement("button"), { type: "button", className: "lp-btn", textContent: "+" });
      minus.setAttribute("aria-label", `${LEVEL_LABEL[lv]} \u22121`);
      plus.setAttribute("aria-label", `${LEVEL_LABEL[lv]} +1`);
      const input2 = document.createElement("input");
      Object.assign(input2, { type: "text", inputMode: "numeric", value: String(per[lv] ?? 0), maxLength: 3 });
      input2.dataset.level = lv;
      input2.setAttribute("aria-label", `${LEVEL_LABEL[lv]}: ${tr("new words a day")}`);
      const set2 = (n) => {
        draftPlan[lv] = Math.max(0, Math.min(150, Math.round(n) || 0));
        input2.value = String(draftPlan[lv]);
        planChanged();
      };
      minus.onclick = () => set2((draftPlan[lv] ?? 0) - 1);
      plus.onclick = () => set2((draftPlan[lv] ?? 0) + 1);
      input2.oninput = () => {
        input2.value = input2.value.replace(/\D/g, "");
        draftPlan[lv] = Math.min(150, Number(input2.value) || 0);
        planChanged();
      };
      input2.onblur = () => set2(Number(input2.value));
      input2.onkeydown = (e) => {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          plus.click();
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          minus.click();
        }
        if (e.key === "Enter") input2.blur();
      };
      const step = document.createElement("div");
      step.className = "lp-step";
      step.append(minus, input2, plus);
      row.append(name, step);
      const locked = lockLevelChip(row, lv);
      if (locked.classList.contains("locked")) {
        input2.disabled = minus.disabled = plus.disabled = true;
        lockedLv.add(lv);
      } else lockedLv.delete(lv);
      return locked;
    }));
    planChanged();
  }
  function planChanged() {
    for (const row of document.querySelectorAll("#studyLevels .lp-row")) {
      const l = row.dataset.level;
      row.classList.toggle("on", (draftPlan[l] ?? 0) > 0 && !lockedLv.has(l));
      row.classList.toggle("changed", (draftPlan[l] ?? 0) !== (savedPlan[l] ?? 0));
    }
    const total = planTotal(draftPlan);
    const tot = $9("dailyTotal");
    tot.hidden = !total;
    tot.replaceChildren(Object.assign(document.createElement("b"), { textContent: String(total) }), document.createTextNode(` ${tr("new spells a day")}`));
    const dirty = LEVELS.some((l) => (draftPlan[l] ?? 0) !== (savedPlan[l] ?? 0));
    const bar = $9("planApply");
    bar.hidden = !dirty;
    if (!dirty) return;
    const more = LEVELS.reduce((a, l) => a + Math.max(0, (draftPlan[l] ?? 0) - (savedPlan[l] ?? 0)), 0);
    $9("planApplyText").textContent = more ? `Adds up to ${more} new words to \u201CAll spells\u201D today` : "Fewer new words from tomorrow";
  }
  $9("planApplyBtn").onclick = async () => {
    const per = {};
    for (const l of LEVELS) if ((draftPlan[l] ?? 0) > 0) per[l] = draftPlan[l];
    const btn = $9("planApplyBtn");
    btn.disabled = true;
    try {
      render3(await api.setDailyLevels(per));
    } catch (err) {
      toast(err.message);
    }
    btn.disabled = false;
  };
  $9("planCancelBtn").onclick = () => levelPlan(savedPlan);
  async function openStudy() {
    show("study");
    try {
      const s = await api.study();
      render3(s);
    } catch (e) {
      toast(e.message);
    }
  }
  function render3(s) {
    levelPlan(s.dailyByLevel ?? Object.fromEntries(s.studyLevels.map((l) => [l, Math.round(s.dailyNew / s.studyLevels.length)])));
    counts2($9("countsAll"), s.decks.all);
    counts2($9("countsStruggle"), s.decks.struggling);
    counts2($9("countsCustom"), s.decks.custom);
    if (s.decks.ono) counts2($9("countsOno"), s.decks.ono);
    $9("ssToday").textContent = String(s.profile.learnedToday);
    $9("ssTotal").textContent = String(s.profile.learned);
    $9("ssXp").textContent = `+${s.studyXpToday ?? 0}`;
    const notice = $9("studyNotice");
    notice.hidden = !s.notice;
    notice.textContent = s.notice ? `${s.notice} new spell${s.notice === 1 ? "" : "s"} added to \u201CAll spells\u201D \u2014 happy studying!` : "";
    if (!s.studyLevels.length && !s.decks.all.total) {
      notice.hidden = false;
      notice.textContent = "Set how many new words of a level you want under \u201CAll spells\u201D (e.g. N5: 10) \u2014 they are added today and every day.";
    }
    const has2 = (c) => c.new + c.learning + c.due > 0;
    $9("studyAll").disabled = !has2(s.decks.all);
    $9("studyStruggle").disabled = !has2(s.decks.struggling);
    $9("studyCustom").disabled = !has2(s.decks.custom);
    $9("studyOno").disabled = !!s.decks.ono && !has2(s.decks.ono);
    onProfile(s.profile);
  }
  initDecks({ changed: () => {
    if (!$9("study").hidden) void api.study().then(render3).catch(() => {
    });
  }, back: () => void openStudy() });
  var queue3 = [];
  var deck = "all";
  var current = null;
  var flipped = false;
  var busy = false;
  async function startSession(d) {
    deck = d;
    history2 = [];
    undoBtn();
    void loadExamples();
    show("review");
    $9("reviewDone").hidden = true;
    try {
      queue3 = (await api.queue(d)).cards;
    } catch (e) {
      toast(e.message);
      queue3 = [];
    }
    next2();
  }
  function next2() {
    current = queue3.shift() ?? null;
    flipped = false;
    const done2 = !current;
    $9("flash").hidden = done2;
    $9("showAnswer").hidden = done2;
    $9("rateRow").hidden = true;
    $9("reviewDone").hidden = !done2;
    $9("reviewLeft").textContent = done2 ? "" : `${queue3.length + 1} left \xB7 ${DECK_LABEL[deck]}`;
    if (!current) return;
    hideKanji();
    $9("fcKanji").textContent = current.kanji;
    $9("fcLevel").textContent = (current.custom ? "Custom" : LEVEL_LABEL[current.level]) + (current.state === "new" ? " \xB7 new" : "");
    if (current.ono) $9("fcLevel").append(" \xB7 ", Object.assign(document.createElement("span"), { className: "ono-kind", lang: "ja", textContent: `${ONO_TYPES[current.ono].ja} ${ONO_TYPES[current.ono].romaji}` }));
    $9("fcReading").textContent = current.reading;
    $9("fcMeaning").textContent = current.meaning;
    $9("fcBack").hidden = true;
    $9("fcExample").replaceChildren();
    $9("fcStrokes").hidden = true;
    $9("fcStrokeBox").hidden = true;
    const card = $9("flash");
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
    $9("fcBack").hidden = false;
    $9("showAnswer").hidden = true;
    $9("rateRow").hidden = false;
    $9("fcStrokes").hidden = !/[\p{Script=Han}々]/u.test(current.kanji);
    const card = current;
    void exampleFor(card.vocabId).then((ex) => {
      if (ex && current === card && flipped) {
        kanjiTappable(ex);
        $9("fcExample").replaceChildren(ex);
      }
    });
    kanjiTappable($9("fcKanji"));
  }
  function strokes() {
    if (!current || !flipped || $9("fcStrokes").hidden) return;
    const box = $9("fcStrokeBox");
    box.hidden = false;
    void showStrokeOrder(box, current.kanji);
  }
  $9("fcStrokes").onclick = (e) => {
    e.stopPropagation();
    strokes();
  };
  var sending = Promise.resolve();
  var history2 = [];
  var undoBtn = () => {
    $9("reviewUndo").disabled = !history2.length;
  };
  function undo() {
    const h4 = history2.pop();
    undoBtn();
    if (!h4) return;
    const d = deck;
    sending = sending.then(() => api.undo(h4.card.vocabId, d).then(() => {
    }, (e) => {
      toast(e.message);
    }));
    queue3 = [h4.card, ...h4.queue];
    next2();
  }
  var XP_SHOW = 5;
  var xpShown = 0;
  function xpPop(n) {
    const key = `kb:xpPop:${(/* @__PURE__ */ new Date()).toDateString()}`;
    try {
      xpShown = Number(localStorage.getItem(key)) || xpShown;
    } catch {
    }
    if (xpShown >= XP_SHOW || $9("review").hidden) return;
    xpShown++;
    try {
      localStorage.setItem(key, String(xpShown));
    } catch {
    }
    const p = document.createElement("div");
    p.className = "xp-pop";
    p.textContent = `+${n} XP`;
    $9("flash").append(p);
    setTimeout(() => p.remove(), 1200);
  }
  function rate(r2) {
    if (!current || !flipped || busy) return;
    const card = current, d = deck;
    history2.push({ card, queue: [...queue3] });
    if (history2.length > 30) history2.shift();
    undoBtn();
    sending = sending.then(() => api.review(card.vocabId, r2, d).then((res2) => {
      if (res2.xp) xpPop(res2.xp);
    }, (e) => {
      toast(e.message);
    }));
    if (r2 === "again") queue3.splice(Math.min(3, queue3.length), 0, { ...card, state: "learning", intervals: { again: "1m", hard: "6m", good: "10m", easy: "4d" } });
    else if (r2 === "hard" && card.state !== "review") queue3.splice(Math.min(6, queue3.length), 0, card);
    next2();
  }
  async function leaveSession() {
    hideKanji();
    await sending;
    void openStudy();
  }
  $9("showAnswer").onclick = flip;
  $9("flash").onclick = () => {
    if (!swiped) flip();
  };
  var swiped = false;
  {
    const card = $9("flash");
    const stamp = document.createElement("div");
    stamp.className = "fc-stamp";
    stamp.hidden = true;
    card.append(stamp);
    const ZONES = [["again", "Again"], ["hard", "Hard"], ["good", "Okay"], ["easy", "Easy"]];
    const zoneOf = (dx2) => {
      const w = Math.max(220, card.offsetWidth), f2 = dx2 / w;
      if (f2 <= -0.3) return ZONES[0];
      if (f2 <= -0.09) return ZONES[1];
      if (f2 >= 0.3) return ZONES[3];
      if (f2 >= 0.09) return ZONES[2];
      return null;
    };
    let x0 = 0, y0 = 0, id = -1, dx = 0, dragging = false, lastX = 0, lastT = 0, vx = 0;
    const reset = (animate) => {
      card.style.transition = animate ? "transform .25s ease-out" : "";
      card.style.transform = "";
      stamp.hidden = true;
      card.classList.remove("dragging");
    };
    card.addEventListener("pointerdown", (e) => {
      if (!current || busy || e.target.closest("button, .kj")) return;
      id = e.pointerId;
      x0 = e.clientX;
      y0 = e.clientY;
      dx = 0;
      dragging = false;
      swiped = false;
      lastX = e.clientX;
      lastT = e.timeStamp;
      vx = 0;
    });
    card.addEventListener("pointermove", (e) => {
      if (e.pointerId !== id) return;
      dx = e.clientX - x0;
      const dt = e.timeStamp - lastT;
      if (dt > 0) {
        vx = 0.6 * vx + 0.4 * ((e.clientX - lastX) / dt);
        lastX = e.clientX;
        lastT = e.timeStamp;
      }
      if (!dragging) {
        if (Math.abs(dx) < 10 || Math.abs(dx) < Math.abs(e.clientY - y0)) return;
        dragging = true;
        card.setPointerCapture(id);
        card.classList.add("dragging");
        card.style.transition = "";
      }
      card.style.transform = `translateX(${dx}px) rotate(${dx / 22}deg)`;
      const z = zoneOf(dx);
      stamp.hidden = !z;
      if (z) {
        stamp.textContent = tr(z[1]);
        stamp.className = `fc-stamp ${z[0]} ${dx < 0 ? "l" : "r"}`;
      }
    });
    const end = (e) => {
      if (e.pointerId !== id) return;
      id = -1;
      if (!dragging) return;
      swiped = true;
      setTimeout(() => {
        swiped = false;
      }, 0);
      const z = zoneOf(dx) ?? (Math.abs(vx) > 0.45 && Math.abs(dx) > 24 && Math.sign(vx) === Math.sign(dx) ? ZONES[dx < 0 ? 1 : 2] : null);
      if (!z || !current) {
        reset(true);
        return;
      }
      card.style.transition = "transform .22s ease-in, opacity .22s";
      card.style.transform = `translateX(${Math.sign(dx) * innerWidth}px) rotate(${Math.sign(dx) * 25}deg)`;
      setTimeout(() => {
        reset(false);
        if (!flipped) flip();
        rate(z[0]);
      }, 200);
    };
    card.addEventListener("pointerup", end);
    card.addEventListener("pointercancel", (e) => {
      if (e.pointerId === id) {
        id = -1;
        reset(true);
      }
    });
  }
  for (const b of document.querySelectorAll("#rateRow .rate")) b.onclick = () => rate(b.dataset.rating);
  addEventListener("keydown", (e) => {
    if ($9("review").hidden || e.target instanceof HTMLInputElement) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      flipped ? rate("good") : flip();
    }
    const n = ["1", "2", "3", "4"].indexOf(e.key);
    if (n >= 0 && flipped) rate(["again", "hard", "good", "easy"][n]);
    if ((e.key === "s" || e.key === "S") && flipped) strokes();
    if ((e.key === "z" || e.key === "Z" || e.key === "Backspace") && !e.repeat) {
      e.preventDefault();
      undo();
    }
  });
  $9("studyAll").onclick = () => void startSession("all");
  $9("studyStruggle").onclick = () => void startSession("struggling");
  $9("studyCustom").onclick = () => void startSession("custom");
  $9("studyOno").onclick = () => void startSession("ono");
  $9("reviewBack").onclick = () => void leaveSession();
  $9("reviewUndo").onclick = () => undo();
  $9("reviewDoneBack").onclick = () => void leaveSession();
  var custTab = "profile";
  var picked3 = {};
  var cust = null;
  var preview3 = null;
  var previewTried = false;
  var staffThumbs = {};
  var el7 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  function openCustomize(profile3, isAdmin = false, onTimeChange = () => {
  }) {
    cust = { profile: profile3, isAdmin, onTimeChange };
    renderCustomize();
    show("customize");
    void ensurePreview();
  }
  async function ensurePreview() {
    if (previewTried) {
      if (custTab === "staff") renderCustomize();
      return;
    }
    previewTried = true;
    preview3 = await staffPreview($9("staffCanvas"));
    if (preview3) staffThumbs = Object.fromEntries(preview3.thumbs(STAFFS.map((s) => s.id), 200, 200).map((u, i) => [STAFFS[i].id, u]));
    renderCustomize();
  }
  for (const b of document.querySelectorAll("#custTabs .cust-tab")) {
    b.onclick = () => {
      custTab = b.dataset.tab;
      renderCustomize();
    };
  }
  var thisMonth = () => (/* @__PURE__ */ new Date()).getMonth() + 1;
  var monthName = (m) => new Date(2026, m - 1, 15).toLocaleDateString(locale(), { month: "long" });
  function custItems(profile3, isAdmin) {
    const lvl = levelOf(profile3.xp);
    const best = Math.max(profile3.bestStreak ?? 0, profile3.streak ?? 0);
    const time = resolveTime(getTimePref());
    if (custTab === "staff") {
      return STAFFS.map((s) => ({
        id: s.id,
        name: s.name,
        blurb: s.blurb,
        locked: !isAdmin && !staffUnlocked(s.id, best, profile3.unlocks),
        lock: s.season ? `${monthName(s.season)} goals` : s.streak ? `${s.streak}-day streak` : "",
        lockedToast: s.season ? `The ${s.name} is the ${monthName(s.season)} reward \u2014 complete that month's goals (see Progress)${s.season === thisMonth() ? " \u2014 it's on now!" : ""}` : `Log in ${s.streak} days in a row to unlock the ${s.name} (your best: ${best})`,
        equipped: (profile3.staff ?? "verdant") === s.id,
        tile: () => {
          if (staffThumbs[s.id]) {
            const img = document.createElement("img");
            img.src = staffThumbs[s.id];
            img.alt = "";
            return img;
          }
          const g = el7("div", "pixel-staff");
          g.innerHTML = staffSvg(s.id);
          return g;
        },
        equip: () => api.setStaff(s.id)
      }));
    }
    if (custTab === "arena") {
      return BACKGROUNDS.map((b) => ({
        id: b.id,
        name: b.name,
        blurb: "The scene behind every battle (and its sounds in the menus).",
        locked: !isAdmin && !beta.open && lvl < b.level,
        lock: `Level ${b.level}`,
        lockedToast: `Reach level ${b.level} to unlock ${b.name}`,
        equipped: profile3.background === b.id,
        tile: () => {
          const d = el7("div", "bg-thumb");
          d.innerHTML = backgroundThumb(b.id, time);
          return d;
        },
        equip: () => api.setBackground(b.id)
      }));
    }
    if (custTab === "profile") {
      return BORDERS.map((b) => ({
        id: b.id,
        name: b.name === "No border" ? b.name : `${b.name} border`,
        blurb: `${b.blurb} Round your profile picture \u2014 everyone sees it in lobbies, battles and on your profile card.`,
        locked: !isAdmin && !borderUnlocked(b.id, lvl, profile3.unlocks),
        lock: b.unlock ? "Tutorial" : `Level ${b.level}`,
        lockedToast: b.unlock ? "Finish the tutorial to get the Beta border" : `Reach level ${b.level} to unlock the ${b.name} border`,
        equipped: (profile3.border ?? "none") === b.id,
        tile: () => avatarDisc(profile3, b.id, "ci-avatar"),
        equip: () => api.setBorder(b.id)
      }));
    }
    return FLAMES.map((f2) => ({
      id: f2.id,
      name: `${f2.name} flames`,
      blurb: f2.season ? `${monthName(f2.season)} reward: complete that month's goals (Progress page). Wraps you at 5 in a row and during your Omnipotence.` : "Wraps you at 5 correct casts in a row (Reading, Writing, Rapid, Boss) and while your Omnipotence (hero power) is active in Deck Duel. Everyone sees your colour.",
      locked: !isAdmin && !flameUnlocked(f2.id, profile3.xp, profile3.unlocks),
      lock: f2.season ? `${monthName(f2.season)} goals` : `Level ${f2.level}`,
      lockedToast: f2.season ? `${f2.name} flames are the ${monthName(f2.season)} reward \u2014 complete that month's goals (see Progress)${f2.season === thisMonth() ? " \u2014 it's on now!" : ""}` : `Reach level ${f2.level} to unlock ${f2.name} flames`,
      equipped: (profile3.flame ?? "blue") === f2.id,
      tile: () => {
        const d = el7("span", "flame-dot big");
        d.style.setProperty("--c", f2.color);
        return d;
      },
      equip: () => api.setFlame(f2.id)
    }));
  }
  var days = (n) => `${n} day${n === 1 ? "" : "s"}`;
  var CUST_SUB = {
    staff: (p) => `The staff in your hand (other players see it too). Classic staffs unlock with your login streak \u2014 your best: ${days(Math.max(p.bestStreak ?? 0, p.streak ?? 0))}. Seasonal staffs are monthly rewards (see Progress).`,
    arena: () => "The background of your battles. Backgrounds unlock as you level up (each level needs 1000 XP more than the last).",
    profile: () => "Your profile card: a border round your picture (unlocks at levels 1, 5, 10 and 15) and up to 3 achievement badges under your name.",
    omni: () => "Omnipotence: the flames of a 5\xD7 combo in battle, and of your Omnipotence (hero power) in Deck Duel. More colours unlock as you level up."
  };
  function renderCustomize() {
    if (!cust) return;
    const { profile: profile3, isAdmin, onTimeChange } = cust;
    for (const b of document.querySelectorAll("#custTabs .cust-tab")) {
      const on = b.dataset.tab === custTab;
      b.classList.toggle("on", on);
      b.setAttribute("aria-selected", String(on));
    }
    const items = custItems(profile3, isAdmin);
    const lvl = levelOf(profile3.xp);
    const sel = items.find((i) => i.id === picked3[custTab]) ?? items.find((i) => i.equipped) ?? items[0];
    $9("custSub").textContent = CUST_SUB[custTab](profile3);
    const times = $9("bgTimes");
    times.hidden = custTab !== "arena";
    if (custTab === "arena") {
      const pref = getTimePref();
      times.replaceChildren(...TIMES.map((t) => {
        const b = el7("button", "pill" + (t.id === pref ? " on" : ""), t.id === "auto" ? `Cycle (now: ${resolveTime(pref)})` : t.id === "day" ? "Day" : t.id === "sunset" ? "Sunset" : "Night");
        b.onclick = () => {
          setTimePref(t.id);
          onTimeChange();
          renderCustomize();
        };
        return b;
      }));
    }
    const equip = async (it) => {
      if (it.locked) return toast(it.lockedToast);
      try {
        const { profile: p } = await it.equip();
        cust.profile = p;
        onProfile(p);
        renderCustomize();
      } catch (e) {
        toast(e.message);
      }
    };
    $9("custGrid").className = `cust-grid ${custTab}`;
    $9("custGrid").replaceChildren(...items.map((it) => {
      const b = el7("button", "cust-item" + (it === sel ? " sel" : "") + (it.equipped ? " equipped" : "") + (it.locked ? " locked" : ""));
      b.setAttribute("aria-pressed", String(it === sel));
      const pic = el7("div", "ci-pic");
      pic.append(it.tile());
      b.append(pic, el7("div", "ci-name", it.name), el7("div", "ci-state", it.equipped ? "\u2713 Equipped" : it.locked ? `Locked \xB7 ${it.lock}` : "Unlocked"));
      b.onclick = () => {
        picked3[custTab] = it.id;
        renderCustomize();
      };
      b.ondblclick = () => void equip(it);
      return b;
    }));
    const extra = $9("custExtra");
    extra.hidden = custTab !== "profile";
    if (custTab === "profile") {
      const box = el7("div", "ach-box");
      const draw2 = () => renderAchievements(box, profile3.unlocks, profile3.badges ?? [], (next3) => {
        const before = profile3.badges ?? [];
        profile3.badges = next3;
        renderCustomize();
        api.setBadges(next3).then((r2) => {
          profile3.badges = r2.badges;
          onProfile({ ...profile3 });
          renderCustomize();
        }).catch((e) => {
          profile3.badges = before;
          renderCustomize();
          toast(e.message);
        });
      });
      draw2();
      extra.replaceChildren(box);
    }
    const canvas = $9("staffCanvas");
    const stage2 = $9("custStage2");
    const showCanvas = custTab === "staff" && !!preview3;
    const in3d = (custTab === "arena" || custTab === "omni") && !!arena3;
    canvas.hidden = !showCanvas;
    $9("arenaPreview").hidden = !in3d;
    stage2.hidden = showCanvas || in3d;
    $9("custStage").dataset.tab = custTab;
    if ((custTab === "arena" || custTab === "omni") && !arena3Tried) void ensureArena3();
    if (in3d) showArena3(custTab, sel.id, profile3);
    else arena3?.setActive(false);
    if (custTab === "staff") {
      if (preview3) preview3.show(sel.id);
      else {
        const g = el7("div", "pixel-staff big");
        g.innerHTML = staffSvg(sel.id);
        stage2.replaceChildren(g);
      }
    } else if (custTab === "arena") {
      stage2.innerHTML = backgroundThumb(sel.id, resolveTime(getTimePref()));
    } else if (custTab === "profile") {
      const card = el7("div", "cust-card");
      const meta = el7("div", "cc-meta");
      meta.append(el7("div", "pp-name", myName()), el7("div", "pp-level", `Lv ${lvl}`));
      const row = badgeRow(profile3.badges);
      if (row) meta.append(row);
      else meta.append(el7("div", "hint", "No badges yet \u2014 pick up to 3 below."));
      card.append(avatarDisc(profile3, sel.id, "pp-pic big"), meta);
      stage2.replaceChildren(card);
    } else {
      const w = el7("div", "wizard me onfire");
      paintFlame(w, sel.id);
      const sprite = el7("div", "sprite");
      sprite.innerHTML = avatarSvg(avatarFor(profile3.studyLevels), "me", profile3.staff);
      w.append(el7("div", "aura"), sprite);
      const badge = el7("div", "combo-hud hot omni-badge");
      badge.style.setProperty("--flame", FLAMES.find((f2) => f2.id === sel.id).color);
      badge.append(el7("b", "", "\xD75"), el7("span", "", "COMBO"));
      stage2.replaceChildren(w, badge);
    }
    const btn = el7("button", "big cust-equip", sel.equipped ? "\u2713 Equipped" : sel.locked ? sel.lock.startsWith("Level") ? `Unlocks at ${sel.lock.replace("Level", "level")}` : sel.lock === "Tutorial" ? "Finish the tutorial to unlock" : sel.lock.endsWith("goals") ? `Unlocks with the ${sel.lock}` : `Unlocks at a ${sel.lock}` : "Equip");
    btn.disabled = sel.equipped;
    btn.classList.toggle("locked", sel.locked);
    btn.onclick = () => void equip(sel);
    const info = [el7("h3", "", sel.name), el7("p", "sub", sel.blurb)];
    if (in3d && custTab === "arena") {
      const t = el7("div", "cust-2d");
      const th = el7("div", "bg-thumb");
      th.innerHTML = backgroundThumb(sel.id, resolveTime(getTimePref()));
      t.append(th, el7("span", "hint", "2D arena"));
      info.push(t);
    }
    if (in3d && custTab === "omni") {
      const t = el7("div", "cust-2d");
      const w = el7("div", "wizard me onfire c2-char");
      paintFlame(w, sel.id);
      const sp = el7("div", "sprite");
      sp.innerHTML = avatarSvg(avatarFor(profile3.studyLevels), "me", profile3.staff);
      w.append(el7("div", "aura"), sp);
      t.append(w, el7("span", "hint", "2D arena"));
      info.push(t);
    }
    if (custTab === "staff") {
      const row = el7("div", "cust-2d");
      const who = el7("div", "c2-char");
      who.innerHTML = avatarSvg(avatarFor(profile3.studyLevels), "me", sel.id);
      const st = el7("div", "pixel-staff");
      st.innerHTML = staffSvg(sel.id);
      row.append(who, st, el7("span", "hint", "2D arena"));
      info.push(row);
    }
    $9("custInfo").replaceChildren(...info, btn);
  }
  function avatarDisc(p, border, cls) {
    const d = el7("div", `${cls}${p.pic ? " has-pic" : ""}${borderCls(border)}`);
    if (p.pic) {
      const img = picEl(p.pic, "pic fill");
      if (img) d.append(img);
    } else d.textContent = (myName() || "\u2726").slice(0, 1).toUpperCase();
    return d;
  }
  var arena3 = null;
  var arena3Tried = false;
  var arena3Key = "";
  var arena3Bg = "";
  async function ensureArena3() {
    arena3Tried = true;
    arena3 = await arenaPreview($9("arenaPreview"));
    if (arena3 && !$9("customize").hidden) renderCustomize();
  }
  function showArena3(tab2, id, p) {
    if (!arena3) return;
    const bgId = tab2 === "arena" ? id : p.background, time = resolveTime(getTimePref());
    const character = avatarFor(p.studyLevels);
    const who = `${character}-${p.staff}`, bg2 = `${bgId}-${time}`;
    if (who !== arena3Key) {
      arena3Key = who;
      arena3Bg = bg2;
      arena3.setup({
        layout: "battle",
        bgSvg: sceneSvg(bgId, time),
        bgKey: bg2,
        time,
        me: { id: "me", character, staff: p.staff },
        opp: { id: "you", name: myName(), character, staff: p.staff },
        allies: [],
        boss: null
      });
    } else if (bg2 !== arena3Bg) {
      arena3Bg = bg2;
      arena3.setBackground(bg2, time, sceneSvg(bgId, time));
    }
    arena3.setActive(true);
    if (tab2 === "arena") arena3.prewarm(BACKGROUNDS.map((b) => b.id), time);
    arena3.focusOpp(tab2 === "omni");
    const color = tab2 === "omni" ? flameColor(id) : void 0;
    arena3.onfire("opp", tab2 === "omni", color);
    arena3.onfire("me", tab2 === "omni", color);
  }
  function customizeHidden() {
    arena3?.setActive(false);
  }

  // src/client/progressui.ts
  init_vocab();
  init_vocab2();
  var $10 = $;
  var el8 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  var DAY_MS2 = 864e5;
  var shift = (day, n) => new Date(Date.parse(day) + n * DAY_MS2).toISOString().slice(0, 10);
  var MASTERY = [
    { cls: "m0", label: "Not in your spells yet" },
    { cls: "m1", label: "New" },
    { cls: "m2", label: "Learning" },
    { cls: "m3", label: "Learned" },
    { cls: "m4", label: "Mastered (3+ weeks)" }
  ];
  var page = null;
  var level = "N5";
  var unlocks = [];
  var badges = [];
  var onBadgesChanged = () => {
  };
  async function openProgress(myUnlocks = [], myBadges = [], changed = () => {
  }) {
    unlocks = myUnlocks;
    badges = [...myBadges];
    onBadgesChanged = changed;
    show("progress");
    $10("progGrid").replaceChildren(el8("p", "hint", "Loading\u2026"));
    try {
      page = await api.progress();
    } catch (e) {
      toast(e.message);
      return;
    }
    const busiest = LEVELS.map((l) => [l, page.mastery[l].filter(([, m]) => m > 0).length]).sort((a, b) => b[1] - a[1])[0];
    if (busiest && busiest[1] > 0) level = busiest[0];
    render4();
  }
  function render4() {
    if (!page) return;
    renderWeek(page.activity);
    $10("progMonth").replaceChildren(...monthNodes(page.month));
    renderHeatmap(page.activity);
    renderAchievements($10("progAch"), unlocks, badges, (next3) => {
      const before = badges;
      badges = next3;
      render4();
      api.setBadges(next3).then((r2) => {
        badges = r2.badges;
        onBadgesChanged(badges);
      }).catch((e) => {
        badges = before;
        render4();
        toast(e.message);
      });
    });
    renderMastery();
  }
  function renderWeek(activity) {
    const t = today();
    const sum = (from, to) => {
      const days2 = activity.filter((a) => a.day > shift(t, -from) && a.day <= shift(t, -to));
      return {
        days: days2.filter((a) => a.login || a.games || a.reviews).length,
        reviews: days2.reduce((n, a) => n + a.reviews, 0),
        games: days2.reduce((n, a) => n + a.games, 0),
        wins: days2.reduce((n, a) => n + a.wins, 0),
        xp: days2.reduce((n, a) => n + a.xp, 0)
      };
    };
    const now2 = sum(7, 0), before = sum(14, 7);
    const stat = (label, v, prev) => {
      const d = v - prev;
      const box = el8("div", "pw-stat");
      box.append(
        el8("b", "", v.toLocaleString()),
        el8("span", "", label),
        el8("small", d > 0 ? "up" : d < 0 ? "down" : "", prev || v ? `${d > 0 ? "+" : ""}${d.toLocaleString()} vs last week` : "\u2014")
      );
      return box;
    };
    const grid = el8("div", "pw-grid");
    grid.append(stat("days active", now2.days, before.days), stat("cards passed", now2.reviews, before.reviews), stat("games", now2.games, before.games), stat("wins", now2.wins, before.wins), stat("XP", now2.xp, before.xp));
    const bars = el8("div", "pw-bars");
    const max = Math.max(1, ...Array.from({ length: 7 }, (_, i) => score2(activity.find((a) => a.day === shift(t, i - 6)))));
    for (let i = -6; i <= 0; i++) {
      const day = shift(t, i);
      const a = activity.find((x) => x.day === day);
      const bar = el8("div", "pw-bar");
      const fill2 = el8("i");
      fill2.style.height = `${Math.round(score2(a) / max * 100)}%`;
      bar.title = `${day}: ${a ? `${a.reviews} cards, ${a.games} games` : "nothing"}`;
      bar.append(fill2, el8("span", "", (/* @__PURE__ */ new Date(`${day}T12:00:00`)).toLocaleDateString(locale(), { weekday: "narrow" })));
      bars.append(bar);
    }
    $10("progWeek").replaceChildren(el8("h3", "", "This week"), grid, bars);
  }
  var score2 = (a) => a ? a.reviews + a.games * 5 + (a.login ? 1 : 0) : 0;
  function monthNodes(m) {
    const [kind, id] = m.reward.split(":");
    const reward = kind === "flame" ? FLAMES.find((f2) => f2.id === id) : STAFFS.find((s) => s.id === id);
    const sw = el8("span", `reward-img ${kind}`);
    if (kind === "flame") {
      const w = el8("div", "wizard me onfire");
      paintFlame(w, id);
      const sprite = el8("div", "sprite");
      sprite.innerHTML = wizardSvg("me");
      w.append(el8("div", "aura"), sprite);
      sw.append(w);
    } else sw.innerHTML = staffSvg(id);
    sw.title = `${reward?.name}${kind === "flame" ? " flames" : ""}`;
    const monthName2 = (/* @__PURE__ */ new Date(`${m.month}-15T12:00:00`)).toLocaleDateString(locale(), { month: "long" });
    const head = el8("h3", "", `${monthName2}: ${m.name} season`);
    const rw = el8("div", "reward-line");
    rw.append(sw, el8("span", "", m.unlocked ? `Unlocked: ${reward?.name}${kind === "flame" ? " flames" : ""} \u2014 equip it in Customize` : `Reward: ${reward?.name}${kind === "flame" ? " flames" : ""} (only this month)`));
    const goals = el8("div", "goals");
    for (const g of m.goals) {
      const row = el8("div", "goal" + (g.value >= g.target ? " done" : ""));
      const bar = el8("div", "goal-bar");
      const fill2 = el8("i");
      fill2.style.width = `${Math.round(g.value / g.target * 100)}%`;
      bar.append(fill2);
      row.append(el8("span", "goal-label", `${g.value >= g.target ? "\u2713 " : ""}${g.label}`), el8("span", "goal-num", `${g.value} / ${g.target}`), bar);
      goals.append(row);
    }
    return [head, rw, goals];
  }
  var calMonth = "";
  var calActivity = [];
  function renderHeatmap(activity) {
    calActivity = activity;
    calMonth || (calMonth = today().slice(0, 7));
    renderCalendar();
  }
  function renderCalendar() {
    const t = today();
    const byDay = new Map(calActivity.map((a) => [a.day, a]));
    const max = Math.max(1, ...calActivity.map(score2));
    const [y, m] = calMonth.split("-").map(Number);
    const first = `${calMonth}-01`;
    const days2 = new Date(Date.UTC(y, m, 0)).getUTCDate();
    const lead = ((/* @__PURE__ */ new Date(`${first}T12:00:00Z`)).getUTCDay() + 6) % 7;
    const box = $10("progHeat");
    const oldest = shift(t, -182).slice(0, 7);
    const prev = el8("button", "pill cal-nav", "\u2039");
    const next3 = el8("button", "pill cal-nav", "\u203A");
    const step = (n) => {
      const d = new Date(Date.UTC(y, m - 1 + n, 15));
      calMonth = d.toISOString().slice(0, 7);
      renderCalendar();
    };
    prev.disabled = calMonth <= oldest;
    next3.disabled = calMonth >= t.slice(0, 7);
    prev.onclick = () => step(-1);
    next3.onclick = () => step(1);
    prev.setAttribute("aria-label", "Previous month");
    next3.setAttribute("aria-label", "Next month");
    const title = el8("b", "cal-title", new Date(Date.UTC(y, m - 1, 15)).toLocaleDateString(locale(), { month: "long", year: "numeric", timeZone: "UTC" }));
    const head = el8("div", "cal-head");
    head.append(prev, title, next3);
    const grid = el8("div", "cal-grid");
    grid.append(el8("span", "cal-wd wk", "Wk"));
    for (let i = 0; i < 7; i++) grid.append(el8("span", "cal-wd", new Date(Date.UTC(2024, 0, 1 + i, 12)).toLocaleDateString(locale(), { weekday: "short", timeZone: "UTC" })));
    let active2 = 0;
    const cells = lead + days2, rows2 = Math.ceil(cells / 7);
    for (let r2 = 0; r2 < rows2; r2++) {
      const firstOfRow = shift(first, r2 * 7 - lead);
      grid.append(el8("span", "cal-wk", isoWeek(firstOfRow)));
      for (let c = 0; c < 7; c++) {
        const i = r2 * 7 + c - lead;
        if (i < 0 || i >= days2) {
          grid.append(el8("span", "cal-day blank"));
          continue;
        }
        const day = shift(first, i);
        const cell = el8("span", "cal-day", i + 1);
        if (day > t) cell.classList.add("future");
        else {
          const a = byDay.get(day);
          const sc = score2(a);
          if (sc > 0) active2++;
          cell.dataset.l = String(sc === 0 ? 0 : Math.min(4, 1 + Math.floor(sc / max * 3.999)));
          cell.title = `${(/* @__PURE__ */ new Date(`${day}T12:00:00`)).toLocaleDateString(locale(), { weekday: "short", month: "short", day: "numeric" })}: ${a ? `${a.reviews} cards passed, ${a.games} games${a.wins ? ` (${a.wins} won)` : ""}` : "no activity"}`;
          cell.onclick = () => {
            $10("progHeatInfo").textContent = cell.title;
            for (const x of grid.querySelectorAll(".cal-day.sel")) x.classList.remove("sel");
            cell.classList.add("sel");
          };
        }
        if (day === t) cell.classList.add("today");
        grid.append(cell);
      }
    }
    const legend = el8("div", "cal-legend");
    legend.append(el8("span", "", "Less"));
    for (let l = 0; l <= 4; l++) {
      const i = el8("i", "cal-day");
      i.dataset.l = String(l);
      legend.append(i);
    }
    legend.append(el8("span", "", "More"));
    const why = el8("p", "hint cal-why", "The brighter a day, the more you did \u2014 cards passed and games played, compared with your busiest day. Tap a day for details.");
    const info = el8("p", "cal-info");
    info.id = "progHeatInfo";
    box.replaceChildren(head, grid, legend, why, info);
    $10("progHeatSub").textContent = `${active2} active days this month`;
  }
  var GOJUON = "\u3042\u3044\u3046\u3048\u304A \u304B\u304D\u304F\u3051\u3053 \u3055\u3057\u3059\u305B\u305D \u305F\u3061\u3064\u3066\u3068 \u306A\u306B\u306C\u306D\u306E \u306F\u3072\u3075\u3078\u307B \u307E\u307F\u3080\u3081\u3082 \u3084_\u3086_\u3088 \u3089\u308A\u308B\u308C\u308D \u308F___\u3092 \u3093____";
  var VOICED = "\u304C\u304E\u3050\u3052\u3054 \u3056\u3058\u305A\u305C\u305E \u3060\u3062\u3065\u3067\u3069 \u3070\u3073\u3076\u3079\u307C \u3071\u3074\u3077\u307A\u307D";
  var ROMAJI = /* @__PURE__ */ new Map();
  for (const list of [KANA_BASIC, KANA_VOICED]) for (const t of list.split(" ")) ROMAJI.set(t[0], t.slice(1));
  var COMBOS = KANA_COMBO.split(" ").map((t) => {
    ROMAJI.set(t.slice(0, 2), t.slice(2));
    return t.slice(0, 2);
  });
  var mFilter = "mine";
  var mShown = 150;
  var PAGE = 150;
  function tile2(word2, m, pct2, kana) {
    const t = el8("button", `mt ${MASTERY[m].cls}${kana === null ? " word" : " kana"}`);
    t.type = "button";
    const shown3 = kana === null ? word2 : word2;
    const k = el8("span", "mt-k", shown3);
    if (kana === null) k.dataset.len = String(Math.min(5, [...word2].length));
    t.append(k);
    if (kana !== null) t.append(el8("span", "mt-r", ROMAJI.get(kana) ?? ""));
    const bar = el8("span", "mt-bar");
    const fill2 = el8("i");
    fill2.style.width = `${pct2}%`;
    bar.append(fill2);
    t.append(bar);
    t.title = `${word2} \u2014 ${tr(MASTERY[m].label)}`;
    t.onclick = () => void showWord(t, word2, m, pct2);
    return t;
  }
  async function showWord(at, word2, m, pct2) {
    const pop2 = $10("mgPop");
    for (const x of document.querySelectorAll(".mt.sel")) x.classList.remove("sel");
    at.classList.add("sel");
    try {
      await loadVocab();
    } catch {
    }
    const v = VOCAB.find((x) => x.kanji === word2 && studyLevelOf(x) === level) ?? VOCAB.find((x) => x.kanji === word2);
    const head = el8("div", "mp-head");
    const big = el8("b", "mp-k", word2);
    big.lang = "ja";
    head.append(big);
    if (v) {
      const rd = el8("span", "mp-rd", v.romaji ? `${v.reading === word2 ? "" : `${v.reading} \xB7 `}${v.romaji}` : v.reading);
      rd.lang = "ja";
      head.append(rd);
    }
    const close = el8("button", "mp-x", "\u2715");
    close.type = "button";
    close.setAttribute("aria-label", "Close");
    close.onclick = () => {
      pop2.hidden = true;
      at.classList.remove("sel");
    };
    head.append(close);
    const bar = el8("span", "mt-bar big");
    const fill2 = el8("i");
    fill2.style.width = `${pct2}%`;
    bar.append(fill2);
    const meaning2 = el8("p", "mp-m", v ? meaningIn(v.meaning) : "");
    meaning2.setAttribute("data-no-i18n", "");
    pop2.replaceChildren(head, meaning2, el8("p", `mp-st ${MASTERY[m].cls}`, `${tr(MASTERY[m].label)} \xB7 ${pct2}%`), bar);
    pop2.hidden = false;
  }
  function renderMastery() {
    if (!page) return;
    $10("mgPop").hidden = true;
    const tabs = $10("progLevels");
    tabs.replaceChildren(...LEVELS.map((l) => {
      const words3 = page.mastery[l];
      const known = words3.filter(([, m]) => m >= 3).length;
      const b = el8("button", "cust-tab" + (l === level ? " on" : ""), `${LEVEL_LABEL[l]} \xB7 ${known}/${words3.length}`);
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", String(l === level));
      b.onclick = () => {
        level = l;
        mShown = PAGE;
        renderMastery();
      };
      return b;
    }));
    const words2 = page.mastery[level];
    const counts3 = [0, 0, 0, 0, 0];
    for (const [, m] of words2) counts3[m]++;
    $10("progLegend").replaceChildren(...MASTERY.map((m, i) => {
      const item = el8("span", "ml-item");
      item.append(el8("i", m.cls), el8("span", "", `${m.label} \xB7 ${counts3[i]}`));
      return item;
    }));
    const grid = $10("progGrid");
    grid.className = "mastery-grid";
    const by = new Map(words2.map(([k, m, p]) => [k, [m, p ?? 0]]));
    if (isKanaLevel(level)) {
      const conv = level === "KATA" ? toKatakana : (x) => x;
      const section = (title, rows2, cols) => {
        const box = el8("div", "kana-sec");
        box.append(el8("h4", "", title));
        const g = el8("div", `kana-grid c${cols}`);
        for (const row of rows2) for (const ch of row) {
          if (!ch || ch === "_") {
            g.append(el8("span", "mt blank"));
            continue;
          }
          const w = conv(ch);
          const [m, p] = by.get(w) ?? [0, 0];
          g.append(tile2(w, m, p, ch));
        }
        box.append(g);
        return box;
      };
      const rowsOf = (str) => str.split(" ").map((r2) => [...r2]);
      const comboRows = [];
      for (let i = 0; i < COMBOS.length; i += 3) comboRows.push(COMBOS.slice(i, i + 3));
      grid.classList.add("kana");
      grid.replaceChildren(section(level === "KATA" ? "Katakana" : "Hiragana", rowsOf(GOJUON), 5), section("Dakuon and handakuon (\u309B \u309C)", rowsOf(VOICED), 5), section("Combinations", comboRows, 3));
      return;
    }
    const filters = [
      ["mine", "Your spells", (m) => m > 0],
      ["studying", "Learning", (m) => m >= 1 && m <= 2],
      ["mastered", "Learned & mastered", (m) => m >= 3],
      ["unseen", "Not started", (m) => m === 0],
      ["all", "All", () => true]
    ];
    if (mFilter === "mine" && !words2.some(([, m]) => m > 0)) mFilter = "all";
    const bar = el8("div", "mg-filters");
    for (const [id, label, test2] of filters) {
      const n = words2.filter(([, m]) => test2(m)).length;
      const b = el8("button", "pill mg-f" + (id === mFilter ? " on" : ""), `${label} \xB7 ${n}`);
      b.type = "button";
      b.onclick = () => {
        mFilter = id;
        mShown = PAGE;
        renderMastery();
      };
      bar.append(b);
    }
    const test = filters.find(([id]) => id === mFilter)[2];
    const list = words2.filter(([, m]) => test(m)).sort((a, b) => b[2] - a[2]);
    const tiles = el8("div", "word-grid");
    for (const [k, m, p] of list.slice(0, mShown)) tiles.append(tile2(k, m, p ?? 0, null));
    const nodes = [bar, tiles];
    if (!list.length) nodes.push(el8("p", "hint", "Nothing here yet."));
    if (list.length > mShown) {
      const more = el8("button", "pill mg-more", `Show more (${list.length - mShown} left)`);
      more.onclick = () => {
        mShown += PAGE * 2;
        renderMastery();
      };
      nodes.push(more);
    }
    grid.replaceChildren(...nodes);
  }
  $10("progressBack").onclick = () => show("menu");

  // src/client/dailyui.ts
  var $11 = $;
  var el9 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  var secs2 = (ms) => `${(ms / 1e3).toFixed(1)} s`;
  var nextReset = () => {
    const d = /* @__PURE__ */ new Date();
    d.setUTCHours(24, 0, 0, 0);
    return `at ${d.toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" })} your time`;
  };
  var me2 = "";
  var word = null;
  var timer2 = 0;
  var busy2 = false;
  var results = [];
  async function dailyPending() {
    try {
      return !(await api.daily()).mine;
    } catch {
      return false;
    }
  }
  async function openDaily(userId) {
    me2 = userId;
    show("daily");
    $11("dailyMain").replaceChildren(el9("p", "hint", "Loading\u2026"));
    try {
      renderOverview(await api.daily());
    } catch (e) {
      toast(e.message);
    }
  }
  function renderBoard(o) {
    const list = $11("dailyBoard");
    if (!o.board.length) {
      list.replaceChildren(el9("li", "hint", "Nobody has played today yet \u2014 be the first!"));
      return;
    }
    list.replaceChildren(...o.board.map((r2, i) => {
      const li = el9("li", r2.id === me2 ? "me" : "");
      li.append(el9("span", "db-rank", i + 1), el9("span", "db-name", r2.name), el9("span", "db-score", `${r2.correct}/${o.total}`), el9("span", "db-time", secs2(r2.ms)));
      return li;
    }));
  }
  function missedBlock(o) {
    const missed = (o.words ?? []).filter((w) => w.ok === false && w.id);
    if (!missed.length) return [];
    const grid = el9("div", "grid small daily-missed");
    const cards = missed.map((w) => {
      const card = el9("div", "card miss-card");
      card.tabIndex = 0;
      const k = el9("div", "k", w.kanji);
      k.lang = "ja";
      const r2 = el9("div", "r", w.reading);
      r2.lang = "ja";
      card.append(k, r2, el9("div", "m", w.meaning));
      grid.append(card);
      return { card, id: w.id };
    });
    const set2 = tickCards(cards, (id, on) => {
      void (on ? api.deckAdd("struggling", [id]) : api.deckRemove("struggling", [id])).catch((e) => toast(e.message));
    });
    void api.deckWords("struggling").then((r2) => {
      const have = new Set(r2.words.map((w) => w.vocabId));
      for (const c of cards) set2(c.id, have.has(c.id));
    }).catch(() => {
    });
    return [el9("h4", "", "Missed \u2014 ticked words go to Struggling spells"), grid];
  }
  function renderOverview(o) {
    renderBoard(o);
    const main = $11("dailyMain");
    const date = `Challenge of ${(/* @__PURE__ */ new Date(`${o.day}T12:00:00Z`)).toLocaleDateString(locale(), { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" })}`;
    if (o.mine) {
      const words2 = el9("div", "daily-words");
      for (const w of o.words ?? []) {
        const row = el9("div", "dw" + (w.ok === true ? " ok" : w.ok === false ? " no" : ""));
        const k = el9("span", "dw-k", w.kanji);
        k.lang = "ja";
        const r2 = el9("span", "dw-r", w.reading);
        r2.lang = "ja";
        const lv = el9("span", "dw-l", LEVEL_LABEL[w.level]);
        if (w.ok !== null) lv.prepend(el9("b", "dw-mark", w.ok ? "\u2713 " : "\u2717 "));
        row.append(lv, k, r2, el9("span", "dw-m", w.meaning));
        words2.append(row);
      }
      main.replaceChildren(
        el9("p", "sub", date),
        el9("div", "daily-score", `${o.mine.correct} / ${o.total}`),
        el9("p", "center", `${secs2(o.mine.ms)} \xB7 rank ${o.rank} today`),
        el9("p", "hint center", `10 new words ${nextReset()}.`),
        el9("h4", "", "Today's words"),
        words2,
        ...missedBlock(o)
      );
      return;
    }
    const start = el9("button", "big", o.inProgress ? "Continue" : "Start");
    start.onclick = () => void begin();
    main.replaceChildren(
      el9("p", "sub", date),
      el9("h3", "", "Ten words, the same for everyone today"),
      el9("p", "", `Two words each from N5 to N1, easiest first. Type the reading (kana or romaji) and press Enter \u2014 ${o.wordMs / 1e3} s per word. One try a day: most correct wins, then fastest.`),
      el9("p", "hint", `Every correct word gives 30 XP (+100 for a perfect 10). New words ${nextReset()}.`),
      start
    );
  }
  async function begin() {
    if (busy2) return;
    busy2 = true;
    results = [];
    try {
      word = (await api.dailyStart()).word;
    } catch (e) {
      toast(e.message);
      busy2 = false;
      return void openDaily(me2);
    }
    busy2 = false;
    renderPlay(null);
  }
  function renderPlay(last3) {
    if (!word) return;
    const main = $11("dailyMain");
    const dots = el9("div", "daily-dots");
    for (let i = 0; i < word.total; i++) dots.append(el9("i", i < results.length ? results[i] ? "ok" : "no" : i === word.index ? "now" : ""));
    const k = el9("div", "daily-kanji", word.kanji);
    k.lang = "ja";
    const bar = el9("div", "timer thin");
    const fill2 = el9("div");
    bar.append(fill2);
    const input2 = el9("input", "daily-input");
    input2.lang = "ja";
    input2.autocomplete = "off";
    input2.spellcheck = false;
    input2.placeholder = "reading (\u304B\u306A or romaji)";
    input2.addEventListener("paste", (e) => e.preventDefault());
    const skip2 = el9("button", "pill", "Skip");
    const fb = el9("div", "daily-fb");
    if (last3) {
      fb.className = `daily-fb ${last3.correct ? "ok" : "no"}`;
      const kk = el9("span", "rk", last3.kanji);
      kk.lang = "ja";
      const rr = el9("span", "rr", last3.reading);
      rr.lang = "ja";
      fb.append(el9("b", "", last3.correct ? "\u2713" : "\u2717"), kk, rr, el9("span", "", last3.meaning));
    }
    main.replaceChildren(el9("div", "daily-head", `Word ${word.index + 1} of ${word.total} \xB7 ${LEVEL_LABEL[word.level]}`), dots, k, bar, input2, skip2, fb);
    input2.focus();
    const t0 = performance.now(), limit = word.timeLimitMs;
    clearInterval(timer2);
    timer2 = window.setInterval(() => {
      const left = Math.max(0, limit - (performance.now() - t0));
      fill2.style.width = `${left / limit * 100}%`;
      if (left <= 0) void submit("");
    }, 100);
    input2.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.isComposing && e.keyCode !== 229) void submit(input2.value);
    });
    skip2.onclick = () => void submit("");
  }
  async function submit(text) {
    if (busy2 || !word) return;
    busy2 = true;
    clearInterval(timer2);
    try {
      const r2 = await api.dailyAnswer(text);
      results.push(r2.correct);
      if (r2.correct) sfx.correct(1);
      else sfx.wrong();
      if (r2.next) {
        word = r2.next;
        busy2 = false;
        renderPlay(r2);
        return;
      }
      word = null;
      busy2 = false;
      const o = await api.daily();
      renderOverview(o);
      if (r2.done) {
        toast(isOffline() ? `Daily challenge: ${r2.done.correct}/10${r2.done.xp ? ` \xB7 +${r2.done.xp} XP` : ""} \xB7 your rank comes when you're back online` : `Daily challenge: ${r2.done.correct}/10 \xB7 rank ${r2.done.rank} of ${r2.done.players}${r2.done.xp ? ` \xB7 +${r2.done.xp} XP` : ""}`, 6e3);
        if (r2.done.correct === 10) sfx.go();
      }
    } catch (e) {
      busy2 = false;
      toast(e.message);
      void openDaily(me2);
    }
  }
  $11("dailyBack").onclick = () => {
    clearInterval(timer2);
    word = null;
    show("menu");
  };

  // src/client/friendsui.ts
  var $12 = $;
  var el10 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  var friends2 = [];
  var fetchedAt = 0;
  var hooks3;
  function initFriends(h4) {
    hooks3 = h4;
  }
  async function refresh(force = false) {
    if (!force && Date.now() - fetchedAt < 8e3) return friends2;
    try {
      friends2 = (await api.friends()).friends;
      fetchedAt = Date.now();
    } catch {
    }
    updateBadge();
    return friends2;
  }
  function updateBadge() {
    const n = friends2.filter((f2) => f2.status === "incoming").length;
    const b = document.getElementById("friendsBadge");
    if (!b) return;
    b.hidden = n === 0;
    b.textContent = String(n);
  }
  var refreshFriendsBadge = () => void refresh(true);
  async function openFriends() {
    show("friends");
    $12("friendMsg").textContent = "";
    await refresh(true);
    render5();
  }
  function render5() {
    const list = $12("friendList");
    const incoming = friends2.filter((f2) => f2.status === "incoming");
    const accepted = friends2.filter((f2) => f2.status === "accepted").sort((a, b) => Number(b.online) - Number(a.online) || a.username.localeCompare(b.username));
    const outgoing = friends2.filter((f2) => f2.status === "outgoing");
    const section = (title, rows2) => {
      if (!rows2.length) return [];
      const s = el10("div", "fl-section");
      s.append(el10("h3", "", title), ...rows2);
      return [s];
    };
    const row = (f2, actions) => {
      const r2 = el10("div", "fl-row" + (f2.online ? " online" : ""));
      const who = el10("div", "fl-who");
      const name = el10("span", "fl-name", f2.username);
      markProfile(name, { id: f2.id, name: f2.username, bot: null });
      who.append(el10("i", "dot"), name, el10("small", "", f2.status === "accepted" ? f2.online ? f2.activity ?? "Online" : "Offline" : f2.status === "incoming" ? "wants to be friends" : "request sent"));
      r2.append(who, el10("div", "fl-actions"));
      r2.lastElementChild.append(...actions);
      return r2;
    };
    const btn = (text, cls, fn) => {
      const b = el10("button", `pill ${cls}`, text);
      b.onclick = async () => {
        b.disabled = true;
        try {
          friends2 = (await fn()).friends;
          fetchedAt = Date.now();
          updateBadge();
          render5();
        } catch (e) {
          toast(e.message);
          b.disabled = false;
        }
      };
      return b;
    };
    const nodes = [
      ...section(`Requests (${incoming.length})`, incoming.map((f2) => row(f2, [btn("Accept", "primary", () => api.acceptFriend(f2.id)), btn("Decline", "", () => api.removeFriend(f2.id))]))),
      ...section(`Friends (${accepted.length}) \xB7 ${accepted.filter((f2) => f2.online).length} online`, accepted.map((f2) => row(f2, [btn("Remove", "danger", () => api.removeFriend(f2.id))]))),
      ...section("Sent requests", outgoing.map((f2) => row(f2, [btn("Cancel", "", () => api.removeFriend(f2.id))])))
    ];
    list.replaceChildren(...nodes.length ? nodes : [el10("p", "hint", "No friends yet \u2014 add someone by their player name above.")]);
  }
  $12("friendAdd").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input2 = $12("friendName");
    const name = input2.value.trim();
    if (!name) return;
    try {
      const r2 = await api.addFriend(name);
      friends2 = r2.friends;
      fetchedAt = Date.now();
      $12("friendMsg").textContent = r2.result === "accepted" ? `You and ${name} are now friends!` : r2.result === "exists" ? `You already asked ${name}.` : `Request sent to ${name}.`;
      input2.value = "";
      render5();
    } catch (err) {
      $12("friendMsg").textContent = err.message;
    }
  });
  $12("friendsBack").onclick = () => show("menu");
  $12("friendsRefresh").onclick = () => void openFriends();
  var INVITE_COOLDOWN_MS = 1e4;
  var invitedAt = /* @__PURE__ */ new Map();
  var lobbyIds = [];
  var cooldownTimer = 0;
  async function renderLobbyInvites(isLobby, inRoom2 = lobbyIds) {
    const box = $12("lobbyInvite");
    lobbyIds = inRoom2;
    clearTimeout(cooldownTimer);
    if (!isLobby) {
      box.hidden = true;
      return;
    }
    await refresh();
    const online = friends2.filter((f2) => f2.status === "accepted" && f2.online && !lobbyIds.includes(f2.id));
    box.hidden = online.length === 0;
    if (!online.length) return;
    let soonest = Infinity;
    box.replaceChildren(el10("h4", "", "Invite friends"), ...online.map((f2) => {
      const r2 = el10("div", "li-row");
      const playing2 = !!f2.activity?.startsWith("Playing");
      const wait = INVITE_COOLDOWN_MS - (Date.now() - (invitedAt.get(f2.id) ?? 0));
      if (wait > 0) soonest = Math.min(soonest, wait);
      const b = el10("button", "pill primary", playing2 ? "In a game" : wait > 0 ? `Invited \xB7 ${Math.ceil(wait / 1e3)}s` : invitedAt.has(f2.id) ? "Invite again" : "Invite");
      b.disabled = playing2 || wait > 0;
      b.title = playing2 ? "They are playing \u2014 invite them when their game is over" : "";
      b.onclick = () => {
        hooks3.send({ type: "invite", friendId: f2.id });
        invitedAt.set(f2.id, Date.now());
        void renderLobbyInvites(true);
      };
      r2.append(el10("i", "dot"), el10("span", "", f2.username), el10("small", "hint", f2.activity ?? ""), b);
      return r2;
    }));
    if (soonest < Infinity) cooldownTimer = window.setTimeout(() => {
      if (!box.hidden) void renderLobbyInvites(true);
    }, Math.min(1e3, soonest));
  }
  function onInvite(msg) {
    const box = $12("inviteBox");
    const join2 = el10("button", "big", "Join");
    const no2 = el10("button", "pill", "Decline");
    const close = () => {
      box.hidden = true;
      clearTimeout(t);
    };
    join2.onclick = () => {
      close();
      hooks3.join(msg.code);
    };
    no2.onclick = close;
    box.replaceChildren(el10("b", "", `${msg.from} invites you`), el10("span", "", `to ${MODE_LABEL[msg.mode]} \u2014 room ${msg.code}`), el10("div", "ib-actions"));
    box.lastElementChild.append(join2, no2);
    box.hidden = false;
    sfx.go();
    attention(`${msg.from} invites you`, `Join their ${MODE_LABEL[msg.mode]} room`);
    const t = window.setTimeout(close, 6e4);
  }
  function onFriendEvent(msg) {
    toast(msg.event === "request" ? `${msg.from} wants to be your friend \u2014 see Friends` : `${msg.from} accepted your friend request`, 5e3);
    void refresh(true).then(() => {
      if (currentScreen() === "friends") render5();
    });
  }

  // src/client/selects.ts
  var done = /* @__PURE__ */ new WeakSet();
  var openMenu = null;
  function enhance(sel) {
    if (done.has(sel) || sel.multiple || sel.size > 1 || sel.hasAttribute("data-native")) return;
    done.add(sel);
    const wrap = document.createElement("span");
    wrap.className = "csel " + sel.className;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "csel-btn";
    btn.setAttribute("aria-haspopup", "listbox");
    const label = document.createElement("span");
    label.className = "csel-label";
    const chev = document.createElement("span");
    chev.className = "csel-chev";
    chev.setAttribute("aria-hidden", "true");
    btn.append(label, chev);
    sel.replaceWith(wrap);
    wrap.append(sel, btn);
    sel.classList.add("csel-native");
    sel.tabIndex = -1;
    sel.setAttribute("aria-hidden", "true");
    const sync = () => {
      const o = sel.selectedOptions[0] ?? sel.options[0];
      label.textContent = o?.textContent ?? "";
      btn.disabled = sel.disabled;
      const aria = sel.getAttribute("aria-label") ?? sel.title;
      if (aria) btn.setAttribute("aria-label", `${aria}: ${label.textContent}`);
      if (sel.title) btn.title = sel.title;
    };
    for (const prop of ["value", "selectedIndex"]) {
      const d = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, prop);
      Object.defineProperty(sel, prop, { configurable: true, get() {
        return d.get.call(this);
      }, set(v) {
        d.set.call(this, v);
        sync();
      } });
    }
    new MutationObserver(sync).observe(sel, { childList: true, subtree: true, attributes: true, characterData: true });
    sel.addEventListener("change", sync);
    let menu = null;
    let active2 = -1;
    const items = () => [...menu?.querySelectorAll(".csel-opt:not(.off)") ?? []];
    const mark = (i) => {
      const list = items();
      if (!list.length) return;
      active2 = (i + list.length) % list.length;
      list.forEach((x, k) => x.classList.toggle("act", k === active2));
      list[active2].scrollIntoView({ block: "nearest" });
    };
    const close = () => {
      if (!menu) return;
      menu.remove();
      menu = null;
      wrap.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      document.removeEventListener("pointerdown", outside, true);
      if (openMenu?.close === close) openMenu = null;
    };
    const pick4 = (i) => {
      if (i < 0 || i === sel.selectedIndex) {
        close();
        btn.focus();
        return;
      }
      sel.selectedIndex = i;
      sel.dispatchEvent(new Event("input", { bubbles: true }));
      sel.dispatchEvent(new Event("change", { bubbles: true }));
      close();
      btn.focus();
    };
    const outside = (e) => {
      if (!wrap.contains(e.target)) close();
    };
    const open3 = () => {
      if (menu || sel.disabled) return;
      openMenu?.close();
      menu = document.createElement("div");
      menu.className = "csel-menu";
      menu.setAttribute("role", "listbox");
      [...sel.options].forEach((o, i) => {
        if (o.hidden) return;
        const it = document.createElement("div");
        it.className = "csel-opt" + (o.disabled ? " off" : "") + (i === sel.selectedIndex ? " sel" : "");
        it.setAttribute("role", "option");
        it.setAttribute("aria-selected", String(i === sel.selectedIndex));
        it.textContent = o.textContent;
        it.dataset.i = String(i);
        if (!o.disabled) it.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          pick4(i);
        });
        menu.append(it);
      });
      wrap.append(menu);
      wrap.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      const r2 = btn.getBoundingClientRect();
      const box = (wrap.closest("dialog") ?? document.documentElement).getBoundingClientRect();
      const bottom = Math.min(box.bottom, window.innerHeight);
      const below = bottom - r2.bottom, above = r2.top - Math.max(box.top, 0);
      menu.classList.toggle("up", below < Math.min(menu.getBoundingClientRect().height, 260) && above > below);
      const list = items();
      mark(Math.max(0, list.findIndex((x) => x.classList.contains("sel"))));
      openMenu = { close };
      setTimeout(() => document.addEventListener("pointerdown", outside, true));
    };
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      menu ? close() : open3();
    });
    btn.addEventListener("keydown", (e) => {
      if (!menu) {
        if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
          e.preventDefault();
          open3();
        }
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        mark(active2 + 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        mark(active2 - 1);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const it = items()[active2];
        pick4(it ? +it.dataset.i : -1);
      } else if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        close();
      } else if (e.key === "Tab") close();
    });
    const lab = wrap.closest("label");
    if (lab) lab.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) {
        e.preventDefault();
        btn.focus();
      }
    });
    sync();
  }
  function initSelects(root = document) {
    root.querySelectorAll("select").forEach((s) => enhance(s));
    new MutationObserver((muts) => {
      for (const m of muts) for (const n of m.addedNodes) {
        if (n instanceof HTMLSelectElement) enhance(n);
        else if (n instanceof HTMLElement) n.querySelectorAll("select").forEach((s) => enhance(s));
      }
    }).observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", () => openMenu?.close());
  }

  // src/client/appshell.ts
  var RELEASES = "https://github.com/Mashxur-Lee/kanji-battle/releases/latest/download";
  var DOWNLOADS = { windows: `${RELEASES}/KanjiWizards-Setup.exe`, android: "/download/KanjiWizards.apk" };
  var inApp = () => /KanjiWizards(Desktop|Android)/.test(navigator.userAgent) || matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  var isIos = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  var installPrompt = null;
  var ONLINE_ONLY = "#adminBtn, #queueBtn, #privateBtn, #create, #join, #railAdd, #railReq, #railList, #railFab, #friendAdd, #friendsRefresh, #picInput, #picRemove";
  function initApp(hooks4) {
    init(getToken, () => ["review", "quiz", "daily"].includes(currentScreen() ?? ""));
    onChange((off) => {
      document.body.classList.toggle("offline", off);
      hooks4.netStatus();
      if (off) toast("You're offline. Study spells, the quiz, reading passages, the daily challenge and Customize still work \u2014 your progress syncs when you're back online.", 6e3);
      else {
        toast("Back online \u2014 your progress is synced.", 3500);
        hooks4.backOnline();
      }
    });
    document.addEventListener("click", (e) => {
      if (!isOffline() && navigator.onLine) return;
      const t = e.target?.closest?.(ONLINE_ONLY);
      if (!t) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      toast(OFFLINE_TEXT, 3500);
    }, true);
    const secure = location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1";
    if ("serviceWorker" in navigator && secure && !/[?&]nosw\b/.test(location.search)) {
      const hadController = !!navigator.serviceWorker.controller;
      navigator.serviceWorker.register("/sw.js").catch((e) => console.warn("service worker", e));
      let waiting = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!hadController || waiting) return;
        waiting = true;
        const tryReload = () => {
          if (hooks4.canReload()) location.reload();
          else setTimeout(tryReload, 3e3);
        };
        tryReload();
      });
    }
    addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      installPrompt = e;
      renderAppDialog();
    });
    addEventListener("appinstalled", () => {
      installPrompt = null;
      renderAppDialog();
      toast("Kanji Wizards is installed \u2014 find it with your apps.");
    });
    const btn = $("appBtn");
    btn.hidden = inApp();
    btn.onclick = () => {
      renderAppDialog();
      $("appDialog").showModal();
    };
    $("appInstall").onclick = async () => {
      if (!installPrompt) return;
      await installPrompt.prompt();
      await installPrompt.userChoice.catch(() => null);
      installPrompt = null;
      renderAppDialog();
    };
    initBack();
    $("appWin").href = DOWNLOADS.windows;
    $("appApk").href = DOWNLOADS.android;
  }
  function renderAppDialog() {
    $("appInstall").hidden = !installPrompt;
    $("appIos").hidden = !(isIos() && !inApp());
    $("appManual").hidden = !!installPrompt || isIos() || inApp();
  }
  function goBack() {
    const open3 = [...document.querySelectorAll("dialog[open]")].pop();
    if (open3) {
      open3.close();
      return true;
    }
    const scr = currentScreen();
    if (!scr || scr === "menu" || scr === "auth") return false;
    const back = [...document.querySelectorAll(`#${scr} .back, #${scr} [id$="Back"], #${scr} [id$="back"]`)].find((b) => b.getClientRects().length > 0 && !b.disabled);
    back?.click();
    return true;
  }
  var away = () => !!document.querySelector("dialog[open]") || !["menu", "auth", void 0].includes(currentScreen());
  var guarded = false;
  var consuming = false;
  function syncGuard() {
    if (away() && !guarded) {
      history.pushState({ kwGuard: 1 }, "");
      guarded = true;
    } else if (!away() && guarded) {
      guarded = false;
      consuming = true;
      history.back();
    }
  }
  function initBack() {
    addEventListener("popstate", () => {
      if (consuming) {
        consuming = false;
        return;
      }
      if (!guarded) return;
      guarded = false;
      goBack();
      setTimeout(syncGuard, 0);
    });
    const mo = new MutationObserver(() => syncGuard());
    for (const el11 of document.querySelectorAll(".screen, dialog")) mo.observe(el11, { attributes: true, attributeFilter: ["hidden", "open"] });
    window.kwBack = () => {
      if (guarded) {
        history.back();
        return true;
      }
      return goBack();
    };
  }

  // src/client/main.ts
  initWhatsNew();
  applyUiZoom();
  var user = null;
  var profile2 = null;
  var you = "";
  var code = "";
  var mode3 = "reading";
  var players = [];
  var minPlayers = 2;
  var challengeId = 0;
  var inRoom = false;
  var writing = false;
  var charCount = 0;
  var written = [];
  var store2 = {
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
      const raw = JSON.parse(store2.get("kb:levels") ?? "[]");
      const lv = LEVELS.filter((l) => Array.isArray(raw) && raw.includes(l));
      if (kanaBeginner()) return ["KANA"];
      return lv.length ? lv : ["N3", "N2"];
    } catch {
      return kanaBeginner() ? ["KANA"] : ["N3", "N2"];
    }
  };
  var socket = new GameSocket(onMessage, (s) => {
    netState = s;
    if (s === "online") {
      lastWhere = "";
      tellWhere();
    }
    if (s === "reconnecting") void probe();
    showNetStatus();
  });
  var netState = "";
  var lastWhere = "";
  function tellWhere() {
    if (inRoom || !user) return;
    const where = currentScreen() === "quiz" && quizMode() === "ono" ? "onoquiz" : currentScreen() ?? "";
    if (where === lastWhere) return;
    lastWhere = where;
    socket.send({ type: "where", screen: where });
  }
  {
    let t = 0;
    const mo = new MutationObserver(() => {
      clearTimeout(t);
      t = window.setTimeout(tellWhere, 300);
    });
    for (const el11 of document.querySelectorAll(".screen")) mo.observe(el11, { attributes: true, attributeFilter: ["hidden", "open"] });
  }
  function showNetStatus() {
    if (isOffline()) setNetStatus(pending() ? `Offline mode \xB7 ${pending()} to sync` : "Offline mode");
    else setNetStatus(netState === "reconnecting" ? "Reconnecting\u2026" : null);
  }
  var actorOf = (id) => id === "boss" ? "boss" : id === you ? "me" : mode3 === "boss" ? `ally:${id}` : "opp";
  var nameOf = (id) => players.find((p) => p.id === id)?.name ?? "Someone";
  var GAME_SCREENS2 = /* @__PURE__ */ new Set(["prep", "battle", "deck"]);
  onScreen2((s) => {
    setScene(GAME_SCREENS2.has(s) ? "game" : "menu");
    arenaScreen(s);
    if (s !== "customize") customizeHidden();
    const title = $("modeTitle");
    title.hidden = !["prep", "battle", "deck"].includes(s);
    document.body.classList.toggle("mode-shown", !title.hidden);
    title.classList.toggle("in-game", s === "battle");
    title.classList.toggle("in-deck", s === "deck");
    if (s !== "battle" && document.activeElement?.id === "answer") document.activeElement.blur();
    if (!title.hidden) title.replaceChildren(modeBadge(s === "deck" ? "deck" : mode3), document.createTextNode(MODE_LABEL[s === "deck" ? "deck" : mode3]));
    if (s === "menu" && profile2) void refreshProfile();
    if (s !== "lobby") void renderLobbyInvites(false);
    railScreen(s);
    if (s === "menu" || s === "queue") void refreshOnline();
    for (const b of document.querySelectorAll("[data-pause]")) b.hidden = !(soloVsAi && ["prep", "battle", "deck"].includes(s));
    if (!["prep", "battle", "deck"].includes(s)) setPaused(false);
    setGameKb(s === "battle" && mode3 !== "writing");
    tutorialScreen(s);
    if (!GAME_SCREENS2.has(s)) setTimeout(() => applyBackground(true), 0);
  });
  var NO_BG_CHANGE = /* @__PURE__ */ new Set(["prep", "battle", "deck"]);
  var shownTime = "";
  function applyBackground(fade = false) {
    const bg2 = profile2?.background ?? "forest";
    const time = resolveTime(getTimePref());
    if (fade && NO_BG_CHANGE.has(currentScreen() ?? "")) return;
    paintBackground($("bg"), bg2, time, fade && shownTime !== "" && shownTime !== time);
    setArenaBackground(bg2, time);
    shownTime = time;
    setAmbience(bg2, time);
  }
  function scheduleCycle() {
    setTimeout(() => {
      applyBackground(true);
      scheduleCycle();
    }, untilNextStep() + 50);
  }
  scheduleCycle();
  var tutorialShown = false;
  var pendingJoin = "";
  var soloVsAi = false;
  var writeShape = "";
  var prevStaff = null;
  function applyProfile(p) {
    if (user) celebrateNew(user.id, p.unlocks);
    profile2 = p;
    setProfile(p);
    $("kanaRow").hidden = $("kanaInfo").hidden = false;
    $("kanaMastered").checked = !kanaBeginner();
    setModeAccess(p.level, user?.role === "admin", kanaBeginner());
    if (!p.tutorialDone && !tutorialShown && user && !inRoom) {
      tutorialShown = true;
      startTutorial();
    }
    void dailyPending().then((open3) => {
      $("dailyBadge").hidden = !open3;
    });
    refreshFriendsBadge();
    renderTasks(p);
    if (user && !inRoom && currentScreen() === "menu") checkRewards(user.id, p, user.role === "admin", applyProfile);
    if (user && p.tutorialDone && !tutorialShown && !inRoom && currentScreen() === "menu") tasksAtLogin(p);
    if (user?.role === "admin") void refreshInboxBadge();
    const locked = user?.role !== "admin" && (p.strugglingDue ?? 0) > STUDY_LOCK;
    $("menu").classList.toggle("locked", locked);
    $("studyLock").hidden = !locked;
    $("studyLockText").textContent = locked ? `${p.strugglingDue} struggling spells are waiting. Study them down to ${STUDY_LOCK} to unlock the game modes.` : "";
    applyBackground();
    if ((p.staff ?? null) !== prevStaff) {
      prevStaff = p.staff ?? null;
      paintScenes(prevStaff);
    }
    preloadArena();
  }
  onProfileChange(applyProfile);
  onTaskDone.cb = applyProfile;
  initTasks();
  taskActions.learn = () => $("studyBtn").click();
  taskActions.quiz = () => void startQuiz();
  taskActions.daily = () => $("dailyBtn").click();
  taskActions.passage = () => $("passageBtn").click();
  async function refreshProfile() {
    try {
      applyProfile((await api.me()).profile);
    } catch {
    }
  }
  async function boot() {
    applyBackground();
    paintScenes();
    setAudioButtons(isRadioOn(), isSfxOn());
    if (!getToken()) return showAuth();
    try {
      const { user: u, profile: p } = await api.me();
      applyProfile(p);
      signedIn3(u);
    } catch (e) {
      if (e instanceof ApiError && (e.status === 401 || e.status === 403)) {
        setToken("");
        showAuth(e.status === 403 ? e.message : "");
        return;
      }
      if (!isOffline() && await canGoOffline() && await goOffline()) return void boot();
      show("auth");
      const canOffline = await canGoOffline();
      $("authError").textContent = canOffline ? "The server can't be reached right now." : e instanceof ApiError && e.status === 0 ? "No internet connection. Sign in once while online \u2014 then Study spells and more work offline too." : "Server unreachable \u2014 try again in a moment.";
      $("playOffline").hidden = !canOffline;
    }
  }
  $("playOffline").onclick = async () => {
    $("playOffline").hidden = true;
    if (await goOffline()) void boot();
    else $("authError").textContent = "Nothing saved on this device yet \u2014 sign in once while online.";
  };
  function signedIn3(u) {
    user = u;
    if (!isOffline()) void signedIn(u.id);
    setUser(u);
    setRailUser(true);
    socket.start(getToken());
    if (!inRoom) show("menu");
    if (!profile2) void refreshProfile();
    else applyProfile(profile2);
  }
  function showAuth(message = "") {
    $("playOffline").hidden = true;
    user = null;
    profile2 = null;
    inRoom = false;
    setUser(null);
    setRailUser(false);
    setAuthTab(authTab);
    show("auth");
    $("authError").textContent = message;
  }
  function logout(message = "") {
    void signedOut();
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
    clearChat();
    stopCountdown();
    show("menu");
  }
  function onMessage(msg) {
    switch (msg.type) {
      case "queue":
        onQueue(msg);
        break;
      case "ping":
        socket.send({ type: "pong", t: msg.t });
        break;
      case "net":
        setNet(msg.rtt);
        break;
      case "chat":
        chatMessages(msg.messages);
        break;
      case "look":
        arenaLook(msg.id, msg.yaw, msg.pitch);
        break;
      case "welcome":
        user = msg.user;
        setUser(msg.user);
        void refreshOnline();
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
        resetQueue();
        you = msg.you;
        code = msg.code;
        mode3 = msg.mode;
        inRoom = true;
        setError("");
        break;
      case "left":
        backToMenu();
        if (pendingJoin) {
          socket.send({ type: "join", code: pendingJoin, levels: savedLevels() });
          pendingJoin = "";
        }
        if (pendingChallenge && !pendingChallenge.sent) {
          pendingChallenge.sent = true;
          socket.send({ type: "create", mode: pendingChallenge.mode, levels: savedLevels() });
        }
        break;
      case "notice":
        toast(msg.message);
        break;
      case "friend":
        onFriendEvent(msg);
        void refreshRail();
        break;
      case "invite":
        onInvite(msg);
        break;
      case "lobby":
        if (currentScreen() === "results" && !lobbyRequested) {
          pendingLobby = msg;
          $("rematch").disabled = true;
          $("rematchStatus").textContent = "The room is back in its lobby \u2014 press Back to lobby when you're ready.";
          $("resultLobby").classList.add("pulse");
          break;
        }
        lobbyRequested = false;
        pendingLobby = null;
        if (pendingChallenge && msg.hostId === you && msg.mode === pendingChallenge.mode) {
          socket.send({ type: "invite", friendId: pendingChallenge.friendId });
          toast(`Challenge sent to ${pendingChallenge.name} \u2014 they get an invite to your ${MODE_LABEL[msg.mode]} room.`, 5e3);
          pendingChallenge = null;
        }
        $("resultLobby").classList.remove("pulse");
        players = msg.players;
        soloVsAi = msg.players.filter((p) => !p.bot).length === 1;
        setPaused(false);
        mode3 = msg.mode;
        minPlayers = msg.minPlayers;
        stopWriting();
        resetDeck();
        showLobby(code, msg.mode, msg.players, you, msg.hostId, msg.maxPlayers, msg.minPlayers);
        void renderLobbyInvites(true, msg.players.map((p) => p.id));
        if (inTutorialBattle() && msg.hostId === you) {
          if (msg.players.length < 2) socket.send({ type: "add_bot", level: "BEGINNER" });
          else socket.send({ type: "start" });
        }
        break;
      case "prep":
        players = msg.players;
        showPrep(msg.pool, msg.durationMs, mode3);
        setReady(msg.readyIds.length, players.length, msg.readyIds.includes(you));
        break;
      case "prep_ready":
        setReady(msg.readyIds.length, players.length, msg.readyIds.includes(you));
        break;
      case "battle_start":
        players = msg.players;
        mode3 = msg.mode;
        if (msg.resume && currentScreen() === "battle") {
          resumeBattle(players, msg.boss, you, msg.durationMs);
          break;
        }
        pendingMissed = null;
        showBattle(msg.mode, players, msg.boss, you, msg.countdownMs, msg.durationMs, (n) => n > 0 ? sfx.tick() : sfx.go());
        break;
      case "challenge":
        challengeId = msg.id;
        arena()?.channel(0);
        showChallenge({ kanji: msg.kanji, answer: msg.answer, timeLimitMs: msg.timeLimitMs, meaning: msg.meaning, reading: msg.reading, charCount: msg.charCount, flashMs: msg.flashMs, from: msg.from });
        gameKbReset();
        arena()?.oppChannel(true);
        if (msg.answer === "writing") {
          flashMs = msg.flashMs ?? 3500;
          beginWriting(msg.id, msg.kanji);
        }
        break;
      case "answer_result":
        if (msg.challengeId !== challengeId) break;
        if (msg.retry) {
          setFeedback(msg);
          sfx.wrong();
          arena()?.fizzle("me");
          const input2 = $("answer");
          setAnswerLocked(false);
          input2.value = "";
          input2.focus();
          break;
        }
        lockInput();
        if (mode3 === "writing") setCharSlots(charCount, written.map(() => ""), false, writeShape);
        setFeedback(msg);
        if (msg.correct) {
          const kana = /[a-z]/i.test(msg.reading) ? msg.kanji : msg.reading;
          void speak(kana).then(() => sfx.correct(msg.combo));
          if (mode3 !== "deck") comboMilestone(msg.combo, profile2?.unlocks);
        } else {
          sfx.wrong();
          arena()?.fizzle("me");
        }
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
      case "deck_ink":
        deckInk(msg.castId, msg.strokes, msg.cells);
        break;
      case "game_over": {
        pendingLobby = null;
        lobbyRequested = false;
        $("resultLobby").classList.remove("pulse");
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
          if (pendingMissed) {
            showMissedSave(pendingMissed);
            pendingMissed = null;
          }
        }, msg.reason === "forfeit" ? 400 : 2e3);
        break;
      }
      case "paused":
        setPaused(msg.on);
        break;
      case "progress":
        if (msg.missed?.length) {
          if (currentScreen() === "results") showMissedSave(msg.missed);
          else pendingMissed = msg.missed;
        }
        setTimeout(() => {
          showXp(msg.gained, msg.level, msg.levelUp);
          if (msg.levelUp) toast(`Level ${msg.level}! Check Customize for new unlocks.`, 5e3);
          for (const id of msg.achievements ?? []) celebrate(id);
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
        } else if (currentScreen() === "queue") toast(msg.message);
        else {
          setError(msg.message);
          show("menu");
        }
        break;
    }
  }
  function onBattleEvent(msg) {
    const e = msg.event;
    const render6 = () => renderFighters(players, you, msg.boss);
    switch (e.kind) {
      case "hit": {
        const caster = actorOf(e.playerId);
        const target = actorOf(e.targetId);
        const friendly = caster !== "opp";
        void castSpell(caster, target, e.kanji, e.damage, friendly, !!e.crit).then(() => {
          render6();
          if (target === "me") sfx.hurt();
          else if (caster === "me") sfx.impact();
        });
        if (e.playerId !== you) logLine(`${nameOf(e.playerId)} cast for ${e.damage}${e.crit ? " (CRIT!)" : ""}${e.combo >= 2 ? ` (\xD7${e.combo})` : ""}:`, e.kanji);
        break;
      }
      case "miss":
        fizzle(actorOf(e.playerId));
        render6();
        if (e.playerId !== you) logLine(`${nameOf(e.playerId)} fumbled:`, e.kanji);
        break;
      case "claw":
        clawHit(actorOf(e.playerId), e.damage);
        if (e.playerId === you) sfx.claw();
        setTimeout(render6, 200);
        if (e.playerId !== you) logLine(`The dragon claws ${nameOf(e.playerId)} for ${e.damage}`);
        break;
      case "breath_warning":
        breathWarning(e.inMs);
        sfx.inhale();
        break;
      case "breath": {
        const immune = e.immune ?? [];
        const victims = players.filter((p) => !immune.includes(p.id) && (p.hp > 0 || p.hp + e.damage > 0)).map((p) => actorOf(p.id));
        breathFire(e.damage, victims, immune.map((id) => actorOf(id)));
        if (immune.includes(you)) toast("You are on fire \u2014 immune to dragon breath!");
        sfx.fire();
        setTimeout(render6, 450);
        logLine(immune.length ? `Fire breath! ${e.damage} damage \u2014 ${immune.map(nameOf).join(", ")} immune (on fire)` : `Fire breath! Everyone takes ${e.damage}`);
        break;
      }
    }
  }
  var pad = new HandwritingPad($("pad"), () => shareInk());
  var twitchAt = 0;
  pad.onDraw = () => {
    shareInk();
    if (mode3 !== "deck") arena()?.channel(Math.min(1, 0.45 + pad.strokeCount * 0.12));
    gemBack();
    if (Date.now() - twitchAt > 140) {
      twitchAt = Date.now();
      arena()?.twitch();
    }
  };
  var pendingMissed = null;
  addEventListener("kw:look", (e) => {
    const d = e.detail;
    socket.send({ type: "look", yaw: d.yaw, pitch: d.pitch });
  });
  var inkTimer = 0;
  var inkAt = 0;
  function shareInk() {
    if (mode3 !== "deck" || !writing) return;
    const send2 = () => {
      inkTimer = 0;
      inkAt = Date.now();
      socket.send({ type: "deck_ink", castId: challengeId, strokes: pad.ink(), cells: pad.cellCount });
    };
    if (inkTimer) return;
    const wait = 120 - (Date.now() - inkAt);
    if (wait <= 0) send2();
    else inkTimer = window.setTimeout(send2, wait);
  }
  function beginWriting(id, kanji) {
    challengeId = id;
    writing = true;
    charCount = writeTargets(kanji).length;
    writeShape = writeTemplate(kanji);
    const m = /^([^□]*)□+([^□]*)$/.exec(writeShape);
    const pre = m ? m[1] : "", post = m ? m[2] : writeShape.includes("\u25A1") && /[^□]/.test(writeShape) ? `(${writeShape})` : "";
    $("imePre").textContent = pre;
    $("imePre").hidden = !pre;
    $("imePost").textContent = post;
    $("imePost").hidden = !post;
    written = [];
    if (writeShape.includes("\u25A1") && /[^□]/.test(writeShape)) pad.setLayout(writeShape);
    else pad.setCells(charCount);
    setEraser(false);
    arena()?.channel(0.35);
    if (mode3 === "deck") mountWriteArea("dkWrite");
    setCharSlots(charCount, [], true, writeShape);
    const ime = $("imeInput");
    ime.value = "";
    if (mode3 === "deck") {
      ime.disabled = false;
      return;
    }
    clearTimeout(castGoTimer);
    castGoTimer = window.setTimeout(castGo, flashMs);
    $("castGo").focus();
  }
  var castGoTimer = 0;
  var flashMs = 3500;
  function castGo() {
    clearTimeout(castGoTimer);
    if (!writing || $("castGo").hidden) return;
    startWritingStep();
    arena()?.thrust();
    $("imeInput").focus();
  }
  $("castGo").onclick = () => castGo();
  function stopWriting() {
    writing = false;
    if (mode3 !== "deck") arena()?.channel(0);
    lockInput();
    if (mode3 === "deck") hideWriteArea();
  }
  function submitDrawing() {
    socket.send({ type: "write", challengeId, chars: written });
    lockInput();
    writing = false;
  }
  $("padUndo").onclick = () => pad.undo();
  var setEraser = (on) => {
    pad.setEraser(on);
    $("padErase").setAttribute("aria-pressed", String(on));
    $("padErase").classList.toggle("on", on);
  };
  $("padErase").onclick = () => setEraser(!pad.eraser);
  $("padClear").onclick = () => pad.clear();
  $("answer").addEventListener("input", (e) => {
    arena()?.channel(Math.min(0.8, e.target.value.length * 0.15));
    arena()?.twitch();
    gemBack();
  });
  $("imeInput").addEventListener("input", () => {
    arena()?.channel(0.6);
    arena()?.twitch();
    gemBack();
  });
  $("padSkip").onclick = () => skip();
  $("padNext").onclick = () => {
    if (pad.strokeCount === 0) return;
    written = [pad.take()];
    submitDrawing();
  };
  for (const id of ["imeInput", "answer"]) {
    for (const ev of ["paste", "drop"]) $(id).addEventListener(ev, (e) => {
      e.preventDefault();
      toast("Pasting is off \u2014 write it yourself!");
    });
  }
  $("imeInput").addEventListener("keydown", (e) => {
    const input2 = e.currentTarget;
    if (e.key !== "Enter" || e.isComposing || e.keyCode === 229 || input2.disabled) return;
    e.stopPropagation();
    const text = input2.value.trim();
    if (!text) return;
    socket.send({ type: "answer", challengeId, text });
    lockInput();
    writing = false;
  });
  addEventListener("keydown", (e) => {
    if (writing && !$("castGo").hidden && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      castGo();
      return;
    }
    if (!writing || e.target === $("imeInput") || $("padNext").disabled) return;
    if (e.key === "Enter") $("padNext").click();
    else if (e.key === "Escape") skip();
    else if ((e.ctrlKey || e.metaKey) && e.key === "z") {
      e.preventDefault();
      pad.undo();
    } else if (e.key === "e" || e.key === "E") setEraser(!pad.eraser);
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
      const res2 = authTab === "login" ? await api.login(username, password) : await api.register(username, password);
      setToken(res2.token);
      $("authPass").value = "";
      signedIn3(res2.user);
      void refreshProfile();
    } catch (err) {
      $("authError").textContent = err instanceof Error ? err.message : "Something went wrong";
    } finally {
      btn.disabled = false;
    }
  });
  $("logout").onclick = () => logout();
  $("studyLockBtn").onclick = () => void openStudy();
  $("create").onclick = () => {
    setError("");
    show("modes");
  };
  $("privateBtn").onclick = () => {
    const box = $("privateBox");
    box.hidden = !box.hidden;
    $("privateBtn").setAttribute("aria-expanded", String(!box.hidden));
    if (!box.hidden && matchMedia("(pointer: fine)").matches) $("joinCode").focus({ preventScroll: true });
  };
  $("queueBtn").onclick = () => {
    setError("");
    openQueue();
  };
  initQueue((m) => socket.send(m), () => user?.id ?? "");
  for (const card of document.querySelectorAll(".mode-card")) {
    card.onclick = () => {
      const m = card.dataset.mode;
      if (!canPlay(m)) return toast(lockText(m), 5e3);
      if (m === "deck") askNotifyPermission();
      socket.send({ type: "create", mode: m, levels: savedLevels() });
    };
  }
  $("dailyBtn").onclick = () => {
    if (user) void openDaily(user.id);
  };
  var pendingChallenge = null;
  function challengeFriend(friendId, name, mode4) {
    if (!canPlay(mode4)) {
      toast(lockText(mode4), 5e3);
      return;
    }
    pendingChallenge = { friendId, name, mode: mode4 };
    if (inRoom) socket.send({ type: "leave" });
    else {
      pendingChallenge.sent = true;
      socket.send({ type: "create", mode: mode4, levels: savedLevels() });
    }
  }
  $("progressBtn").onclick = () => void openProgress(profile2?.unlocks ?? [], profile2?.badges ?? [], (b) => {
    if (profile2) {
      profile2 = { ...profile2, badges: b };
      setBadges(b);
    }
  });
  initFriends({
    send: (m) => socket.send(m),
    join: (c) => {
      askNotifyPermission();
      if (!inRoom) return socket.send({ type: "join", code: c, levels: savedLevels() });
      pendingJoin = c;
      socket.send({ type: "leave" });
    },
    inRoom: () => inRoom
  });
  initSelects();
  initApp({
    // a new version is ready: reload when you're on the menu (or signed out), not in a room or a study session
    canReload: () => !inRoom && ["menu", "auth"].includes(currentScreen() ?? ""),
    backOnline: () => {
      setError("");
      void refreshProfile();
    },
    netStatus: showNetStatus
  });
  initTutorial({
    firstBattle: () => socket.send({ type: "create", mode: "reading", levels: kanaBeginner() ? ["KANA"] : ["KANA", "N5"], tutorial: true }),
    kana: async (mastered) => {
      try {
        applyProfile((await api.setKana(mastered)).profile);
      } catch (e) {
        toast(e.message);
      }
      if (!mastered) store2.set("kb:levels", JSON.stringify(["KANA"]));
    }
  });
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
    if (profile2) openCustomize(profile2, user?.role === "admin", () => applyBackground(true));
  };
  $("customizeBack").onclick = () => show("menu");
  async function openAdmin() {
    try {
      const { users, storage, persistent } = await api.users();
      showAdmin(users, user, { storage, persistent }, async (u) => {
        try {
          await api.setBanned(u.id, !u.banned);
          await openAdmin();
        } catch (e) {
          $("adminInfo").textContent = e.message;
        }
      }, async (u) => {
        const promote = u.role !== "admin";
        if (!confirm(promote ? `Make ${u.username} an admin? They will see the Admin page (users, inbox, stats) and can ban players.` : `Remove admin from ${u.username}?`)) return;
        try {
          await api.setRole(u.id, promote ? "admin" : "user");
          await openAdmin();
        } catch (e) {
          $("adminInfo").textContent = e.message;
        }
      }, async (u) => {
        if (!confirm(`Delete the account \u201C${u.username}\u201D for good? Its XP, study cards, match history and friends are deleted too. This can\u2019t be undone.`)) return;
        try {
          await api.deleteUser(u.id);
          toast(`${u.username} deleted`);
          await openAdmin();
        } catch (e) {
          $("adminInfo").textContent = e.message;
        }
      });
    } catch (e) {
      setError(e.message);
    }
  }
  $("adminBtn").onclick = () => {
    setAdminTab("users");
    void openAdmin();
    void refreshInboxBadge();
  };
  $("adminRefresh").onclick = () => {
    if (adminTab() === "users") void openAdmin();
    else setAdminTab(adminTab());
  };
  setInterval(() => {
    if (currentScreen() === "admin" && user?.role === "admin" && adminTab() === "users") void openAdmin();
  }, 15e3);
  $("adminBack").onclick = () => show("menu");
  $("levelChips").addEventListener("change", (e) => {
    const levels = selectedLevels();
    if (levels.length === 0) {
      e.target.checked = true;
      return;
    }
    store2.set("kb:levels", JSON.stringify(levels));
    socket.send({ type: "levels", levels });
  });
  $("leaveLobby").onclick = () => socket.send({ type: "leave" });
  $("start").onclick = () => socket.send({ type: "start" });
  $("addBotBtn").onclick = () => socket.send({ type: "add_bot", level: $("botLevel").value });
  $("lobbyPlayers").addEventListener("click", (e) => {
    const id = e.target.closest("[data-remove-bot]")?.dataset.removeBot;
    if (id) socket.send({ type: "remove_bot", id });
  });
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
    if (!answerLocked()) skip();
  };
  $("answer").addEventListener("keydown", (e) => {
    const input2 = e.currentTarget;
    if (answerLocked()) {
      if (e.key === "Enter") e.preventDefault();
      return;
    }
    if (e.key === "Escape" && !e.isComposing) {
      e.preventDefault();
      return skip();
    }
    if (e.key !== "Enter" || e.isComposing || e.keyCode === 229) return;
    const text = input2.value.trim();
    if (!text) return;
    if (currentAnswerMode() === "romaji" && !/^[a-z' -]+$/i.test(text.normalize("NFKC"))) {
      setInputHint("Use romaji for hiragana spells (switch your IME off)", true);
      return;
    }
    socket.send({ type: "answer", challengeId, text: input2.value });
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
      setTimeout(() => $(btnId).textContent = "Forfeit", 3e3);
    };
  }
  armForfeit("forfeit");
  armForfeit("dkForfeit");
  $("version").textContent = `v${VERSION}`;
  document.documentElement.dataset.v = VERSION;
  {
    const t = $("arena3dMode");
    const sync = () => {
      t.value = arenaQuality();
      t.disabled = !hasWebgl();
      $("arena3dInfo").textContent = !hasWebgl() ? "Your browser has no WebGL \u2014 the classic 2D view is used." : arenaSupported() ? "First-person duel arena (move the mouse to look around). On a phone held upright it is a band above the question. Lite is lighter on phones and older computers." : "This screen is too small for the 3D arena \u2014 the classic 2D view is used.";
    };
    sync();
    t.onchange = () => {
      setArenaQuality(t.value);
      sync();
    };
    addEventListener("kw:arena-lite", (e) => {
      const { lowRes } = e.detail;
      toast(lowRes ? "3D was slow \u2014 lowered its resolution. Settings \u2192 3D arena \u2192 Off for the 2D view." : "3D was slow on this device \u2014 switched to Lite (Settings \u2192 3D arena).", 5e3);
      sync();
    });
    $("volBtn").addEventListener("click", sync);
  }
  {
    const sel = $("gameKbSel");
    $("gameKbRow").hidden = !gameKbAvailable();
    sel.value = gameKbPref() ? "game" : "system";
    sel.onchange = () => {
      setGameKbPref(sel.value === "game");
      setGameKb(currentScreen() === "battle" && mode3 !== "writing");
    };
  }
  function setPaused(on) {
    $("pauseOverlay").hidden = !on;
    document.body.classList.toggle("paused", on);
  }
  for (const b of document.querySelectorAll("[data-pause]")) b.onclick = () => socket.send({ type: "pause", on: true });
  $("resumeBtn").onclick = () => socket.send({ type: "pause", on: false });
  $("kanaMastered").onchange = async (e) => {
    const box = e.target;
    try {
      applyProfile((await api.setKana(box.checked)).profile);
      toast(box.checked ? "Kanji levels unlocked \u2014 pick N5 in Study spells to start!" : "Back to \u304B\u306A only: kanji levels are locked.", 5e3);
      if (!box.checked) store2.set("kb:levels", JSON.stringify(["KANA"]));
    } catch (err) {
      box.checked = !box.checked;
      toast(err.message);
    }
  };
  {
    const sel = $("langSel");
    sel.value = lang();
    sel.onchange = () => setLang(sel.value === "ru" ? "ru" : "en");
  }
  {
    const sel = $("uiZoom");
    sel.replaceChildren(...UI_ZOOMS.map((z) => new Option(`${Math.round(z * 100)}%${z === 0.8 ? " (default)" : ""}`, String(z))));
    sel.value = String(uiZoomPref());
    sel.onchange = () => setUiZoomPref(Number(sel.value));
  }
  $("pad").style.cursor = brushCursor();
  initDeck({
    send: (m) => socket.send(m),
    me: () => you,
    beginWriting: (castId, kanji) => {
      mode3 = "deck";
      beginWriting(castId, kanji);
    },
    stopWriting: () => stopWriting()
  });
  $("rematch").onclick = () => socket.send({ type: "rematch" });
  var lobbyRequested = false;
  var pendingLobby = null;
  $("resultLobby").onclick = () => {
    lobbyRequested = true;
    if (pendingLobby) {
      const m = pendingLobby;
      pendingLobby = null;
      onMessage(m);
    } else socket.send({ type: "back_to_lobby" });
  };
  $("leave").onclick = () => socket.send({ type: "leave" });
  async function openHistory() {
    showHistory(null, openMatch);
    try {
      showHistory((await api.matches()).matches, openMatch);
    } catch (err) {
      toast(err.message);
      show("menu");
    }
  }
  async function openMatch(id) {
    try {
      const m = (await api.match(id)).match;
      showResults(m.mode, m.players, m.you, m.winnerId, m.teamWon, m.reason, m.stats, { history: { at: m.at } });
    } catch (err) {
      toast(err.message);
    }
  }
  $("historyBtn").onclick = () => void openHistory();
  $("historyBack").onclick = () => show("menu");
  $("resultHistoryBack").onclick = () => void openHistory();
  {
    let shownFor = "";
    const open3 = async (el11) => {
      const id = el11.dataset.profile;
      if (shownFor === id && !$("otherPop").hidden) {
        hideProfileCard();
        shownFor = "";
        return;
      }
      shownFor = id;
      const name = el11.dataset.name ?? el11.textContent ?? "";
      const bot = el11.dataset.bot ?? /\(AI (N\d)\)$/.exec(name)?.[1];
      if (bot) return showProfileCard(el11, { bot, name });
      showProfileCard(el11, "loading");
      try {
        const [{ profile: p }, fr] = await Promise.all([api.player(id), api.friends().catch(() => ({ friends: [] }))]);
        const link = fr.friends.find((f2) => f2.id === id);
        const relation = id === you || id === user?.id ? "self" : link?.status === "accepted" ? "friend" : link?.status ?? "none";
        if (shownFor === id) showProfileCard(el11, p, {
          relation,
          addFriend: async () => {
            await api.addFriend(p.name);
            void refreshRail();
          },
          accept: async () => {
            await api.acceptFriend(id);
            void refreshRail();
          },
          challenge: (m) => challengeFriend(id, p.name, m),
          canChallenge: !["prep", "battle", "deck"].includes(currentScreen() ?? "")
        });
      } catch {
        if (shownFor === id) showProfileCard(el11, "missing");
      }
    };
    addEventListener("click", (e) => {
      const el11 = e.target.closest("[data-profile]");
      if (el11) {
        e.stopPropagation();
        void open3(el11);
        return;
      }
      if (!$("otherPop").contains(e.target)) {
        hideProfileCard();
        shownFor = "";
      }
    }, true);
    addEventListener("keydown", (e) => {
      const el11 = e.target.closest?.("[data-profile]");
      if (el11 && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        void open3(el11);
      } else if (e.key === "Escape") hideProfileCard();
    });
  }
  $("radioBtn").onclick = () => {
    setRadio(!isRadioOn());
    setAudioButtons(isRadioOn(), isSfxOn());
  };
  $("sfxBtn").onclick = () => {
    setSfx(!isSfxOn());
    setAudioButtons(isRadioOn(), isSfxOn());
  };
  {
    const pop2 = $("profilePop");
    $("whoBtn").onclick = (e) => {
      e.stopPropagation();
      pop2.hidden = !pop2.hidden;
      $("whoBtn").setAttribute("aria-expanded", String(!pop2.hidden));
      if (!pop2.hidden) void refreshProfile();
    };
    addEventListener("click", (e) => {
      if (!pop2.hidden && !pop2.contains(e.target) && !$("whoBtn").contains(e.target)) pop2.hidden = true;
    });
    $("picInput").onchange = async (e) => {
      const file = e.target.files?.[0];
      e.target.value = "";
      if (!file) return;
      try {
        const { profile: profile3 } = await api.setAvatar(await squarePicture(file));
        setProfile(profile3);
        toast("Profile picture updated");
      } catch (err) {
        toast(err.message || "Could not use that picture");
      }
    };
    $("picRemove").onclick = async () => {
      try {
        setProfile((await api.removeAvatar()).profile);
      } catch (err) {
        toast(err.message);
      }
    };
  }
  async function squarePicture(file) {
    if (!file.type.startsWith("image/")) throw new Error("Please pick an image");
    const url = URL.createObjectURL(file);
    try {
      const img = new Image();
      await new Promise((ok, fail) => {
        img.onload = () => ok();
        img.onerror = () => fail(new Error("Could not read that image"));
        img.src = url;
      });
      const side = Math.min(img.naturalWidth, img.naturalHeight);
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      c.getContext("2d").drawImage(img, (img.naturalWidth - side) / 2, (img.naturalHeight - side) / 2, side, side, 0, 0, 128, 128);
      const webp = c.toDataURL("image/webp", 0.85);
      return webp.startsWith("data:image/webp") ? webp : c.toDataURL("image/jpeg", 0.85);
    } finally {
      URL.revokeObjectURL(url);
    }
  }
  {
    const panel = $("volPanel");
    const music = $("musicVol"), fx = $("sfxVol"), vo = $("voiceVol");
    const show3 = () => {
      const vp = getVoicePrefs();
      vo.value = String(Math.round(vp.vol * 100));
      $("voiceVolVal").textContent = `${vo.value}%`;
      $("voiceInfo").textContent = !voiceAvailable() ? "This browser has no speech voice." : vp.name ? `Voice: ${vp.name}${vp.male ? "" : " (pitched down)"}` : "No Japanese voice found on this device.";
      const v = getVolumes();
      music.value = String(Math.round(v.music * 100));
      fx.value = String(Math.round(v.sfx * 100));
      $("musicVolVal").textContent = `${music.value}%`;
      $("sfxVolVal").textContent = `${fx.value}%`;
      setAudioButtons(isRadioOn(), isSfxOn());
    };
    $("volBtn").onclick = (e) => {
      e.stopPropagation();
      panel.hidden = !panel.hidden;
      $("volBtn").setAttribute("aria-expanded", String(!panel.hidden));
      show3();
    };
    music.oninput = () => {
      setMusicVolume(Number(music.value) / 100);
      show3();
    };
    fx.oninput = () => {
      setSfxVolume(Number(fx.value) / 100);
      show3();
    };
    fx.onchange = () => previewSfx();
    vo.oninput = () => {
      setVoiceVolume(Number(vo.value) / 100);
      show3();
    };
    vo.onchange = () => say("\u304B\u3093\u3058");
    addEventListener("click", (e) => {
      if (!panel.hidden && !panel.contains(e.target)) panel.hidden = true;
    });
  }
  var firstGesture = () => unlock();
  addEventListener("pointerdown", firstGesture, { once: true });
  addEventListener("keydown", firstGesture, { once: true });
  initI18n();
  void boot();
})();
