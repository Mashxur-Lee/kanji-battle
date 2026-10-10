"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

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
  function isCorrectReading(input2, readings) {
    const answer = normalizeAnswer(input2);
    if (!answer.length) return false;
    return readings.some((raw) => {
      const r2 = katakanaToHiragana(raw);
      if (r2 === answer) return true;
      if (r2.length > 3 && r2.endsWith("\u3059\u308B") && r2.slice(0, -2) === answer) return true;
      return longVowelSlip(r2, answer);
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
    "login streak (days)": "\u0441\u0435\u0440\u0438\u044F \u0432\u0445\u043E\u0434\u043E\u0432 (\u0434\u043D\u0438)",
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
    "Customize": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430",
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
    "Unlocks at level 1": "\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 1",
    "Unlocks at level 2": "\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 2",
    // progress / daily / friends / history
    "Activity": "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",
    "Spell mastery": "\u041E\u0441\u0432\u043E\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439",
    "every word of each level \u2014 hover a square to see it": "\u043A\u0430\u0436\u0434\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u2014 \u043D\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430 \u043A\u043B\u0435\u0442\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E",
    "Today's leaderboard": "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043B\u0438\u0434\u0435\u0440\u043E\u0432 \u0437\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    "\u21BB Refresh": "\u21BB \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
    "Activity over the last 26 weeks": "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 26 \u043D\u0435\u0434\u0435\u043B\u044C",
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
    "Add players by name. When you're in a room's lobby, you can invite online friends straight in \u2014 even to modes they haven't unlocked yet.": "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u043F\u043E \u0438\u043C\u0435\u043D\u0438. \u0412 \u043B\u043E\u0431\u0431\u0438 \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0441\u0440\u0430\u0437\u0443 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C \u0434\u0440\u0443\u0437\u0435\u0439 \u043E\u043D\u043B\u0430\u0439\u043D \u2014 \u0434\u0430\u0436\u0435 \u0432 \u0440\u0435\u0436\u0438\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443 \u043D\u0438\u0445 \u0435\u0449\u0451 \u043D\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u044B.",
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
    "; every spell you learn today adds": "; \u043A\u0430\u0436\u0434\u043E\u0435 \u0432\u044B\u0443\u0447\u0435\u043D\u043D\u043E\u0435 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442",
    "(\xD71.5 damage, max 50%). It resets at midnight.": "(\u0443\u0440\u043E\u043D \xD71.5, \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 50%). \u0421\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u043F\u043E\u043B\u043D\u043E\u0447\u044C.",
    "All spells": "\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F",
    "Tick levels \u2014 25 new random words are added every day.": "\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0443\u0440\u043E\u0432\u043D\u0438 \u2014 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F 25 \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0445 \u0441\u043B\u043E\u0432.",
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
    "Tick one or more levels under \u201CAll spells\u201D to get 25 new spells today (and every day).": "\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0443\u0440\u043E\u0432\u043D\u0435\u0439 \u0432 \xAB\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C 25 \u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0439 \u0441\u0435\u0433\u043E\u0434\u043D\u044F (\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C).",
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
    'Master hiragana first (Study spells \u2192 \u304B\u306A), then tick "I\'ve mastered hiragana" in Settings': "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0441\u0432\u043E\u0439\u0442\u0435 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443 (\xAB\u0418\u0437\u0443\u0447\u0430\u0442\u044C \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB \u2192 \u304B\u306A), \u0437\u0430\u0442\u0435\u043C \u043E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \xAB\u042F \u043E\u0441\u0432\u043E\u0438\u043B \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0443\xBB \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445",
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
    "Each player picks their own. \u304B\u306A = hiragana, answered in romaji. Harder levels hit harder \u2014 so your opponent gets more HP.": "\u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0432\u043E\u0438. \u304B\u306A \u2014 \u0445\u0438\u0440\u0430\u0433\u0430\u043D\u0430, \u043E\u0442\u0432\u0435\u0442 \u0440\u043E\u043C\u0430\u0434\u0437\u0438. \u0421\u043B\u043E\u0436\u043D\u044B\u0435 \u0443\u0440\u043E\u0432\u043D\u0438 \u0431\u044C\u044E\u0442 \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u2014 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0443 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 HP.",
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
    "\u2190 Back to lobby": "\u2190 \u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438",
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
    "Write the character": "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u043D\u0430\u043A",
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
    "(added to Struggling spells \xB7 click a word for its stroke order)": "(\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \xAB\u0422\u0440\u0443\u0434\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\xBB \xB7 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0441\u043B\u043E\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0447\u0435\u0440\u0442)",
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
    "Time up \u2014 the dragon survived": "\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E \u2014 \u0434\u0440\u0430\u043A\u043E\u043D \u0432\u044B\u0436\u0438\u043B",
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
    "Light blue flames": "\u0413\u043E\u043B\u0443\u0431\u043E\u0435 \u043F\u043B\u0430\u043C\u044F",
    "Purple flames": "\u0424\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u043E\u0435 \u043F\u043B\u0430\u043C\u044F",
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
    "More to unlock": "\u0427\u0442\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0434\u0430\u043B\u044C\u0448\u0435",
    "You start with Kanji Reading and Rapid. Kanji Writing and the Boss fight unlock at level 1, Deck Duel at level 2. There is also a Daily challenge, Progress, Friends \u2014 and monthly goals with rewards.": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0427\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 \u0438 \u0411\u043B\u0438\u0446. \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438 \u0438 \u0411\u0438\u0442\u0432\u0430 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 1, \u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434 \u2014 \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 2. \u0415\u0449\u0451 \u0435\u0441\u0442\u044C \u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435, \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441, \u0414\u0440\u0443\u0437\u044C\u044F \u0438 \u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0435 \u0446\u0435\u043B\u0438 \u0441 \u043D\u0430\u0433\u0440\u0430\u0434\u0430\u043C\u0438.",
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
    "Login streak": "\u0421\u0435\u0440\u0438\u044F \u0432\u0445\u043E\u0434\u043E\u0432",
    "\u2014 open the game on days in a row. Your best streak unlocks magic staffs in": "\u2014 \u0437\u0430\u0445\u043E\u0434\u0438\u0442\u0435 \u0432 \u0438\u0433\u0440\u0443 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434. \u041B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0441\u043E\u0445\u0438 \u0432",
    ": Ember at 5 days, Tide at 10, Storm at 15, Void at 20.": ": Ember \u0437\u0430 5 \u0434\u043D\u0435\u0439, Tide \u0437\u0430 10, Storm \u0437\u0430 15, Void \u0437\u0430 20.",
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
    "Crit chance today: 1% + 1% for every spell you learn today (max 50%). Resets at midnight.": "\u0428\u0430\u043D\u0441 \u043A\u0440\u0438\u0442\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F: 1% + 1% \u0437\u0430 \u043A\u0430\u0436\u0434\u043E\u0435 \u0432\u044B\u0443\u0447\u0435\u043D\u043D\u043E\u0435 \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u0435 (\u043C\u0430\u043A\u0441. 50%). \u0421\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u043F\u043E\u043B\u043D\u043E\u0447\u044C."
  };
  var SEASON_RU = { Frost: "\u0418\u043D\u0435\u0439", Sakura: "\u0421\u0430\u043A\u0443\u0440\u0430", Blossom: "\u0426\u0432\u0435\u0442\u0435\u043D\u0438\u0435", Rain: "\u0414\u043E\u0436\u0434\u044C", Jade: "\u041D\u0435\u0444\u0440\u0438\u0442", Sun: "\u0421\u043E\u043B\u043D\u0446\u0435", Abyss: "\u0411\u0435\u0437\u0434\u043D\u0430", Thunder: "\u0413\u0440\u043E\u043C", Moon: "\u041B\u0443\u043D\u0430", Harvest: "\u0423\u0440\u043E\u0436\u0430\u0439", Maple: "\u041A\u043B\u0451\u043D", Starlight: "\u0417\u0432\u0451\u0437\u0434\u043D\u044B\u0439 \u0441\u0432\u0435\u0442" };
  var STAFF_RU = { Verdant: "\u041B\u0438\u0441\u0442\u0432\u044B", Ember: "\u0423\u0433\u043B\u0435\u0439", Tide: "\u041F\u0440\u0438\u043B\u0438\u0432\u0430", Storm: "\u0411\u0443\u0440\u0438", Void: "\u041F\u0443\u0441\u0442\u043E\u0442\u044B", Frost: "\u0418\u043D\u0435\u044F", Blossom: "\u0426\u0432\u0435\u0442\u0435\u043D\u0438\u044F", Jade: "\u041D\u0435\u0444\u0440\u0438\u0442\u0430", Abyss: "\u0411\u0435\u0437\u0434\u043D\u044B", Moon: "\u041B\u0443\u043D\u044B", Maple: "\u041A\u043B\u0451\u043D\u0430" };
  var MASTERY_RU = { "Not in your spells yet": "\u0415\u0449\u0451 \u043D\u0435\u0442 \u0432 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F\u0445", New: "\u041D\u043E\u0432\u044B\u0435", Learning: "\u0418\u0437\u0443\u0447\u0430\u044E\u0442\u0441\u044F", Learned: "\u0412\u044B\u0443\u0447\u0435\u043D\u044B", "Mastered (3+ weeks)": "\u041E\u0441\u0432\u043E\u0435\u043D\u044B (3+ \u043D\u0435\u0434\u0435\u043B\u0438)" };
  var MODE_RU = { "1v1 Kanji Reading": "1 \u043D\u0430 1: \u0427\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438", "1v1 Kanji Writing": "1 \u043D\u0430 1: \u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438", "Boss Elimination": "\u0411\u0438\u0442\u0432\u0430 \u0441 \u0431\u043E\u0441\u0441\u043E\u043C", "1v1 Rapid": "1 \u043D\u0430 1: \u0411\u043B\u0438\u0446", "Deck Duel": "\u0414\u0443\u044D\u043B\u044C \u043A\u043E\u043B\u043E\u0434", "Kanji Reading": "\u0427\u0442\u0435\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438", "Kanji Writing": "\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0430\u043D\u0434\u0437\u0438" };
  var mode = (m) => MODE_RU[m] ?? m;
  var plural = (n, one, few, many) => {
    const a = Math.abs(n) % 100, b = a % 10;
    return a > 10 && a < 20 ? many : b === 1 ? one : b >= 2 && b <= 4 ? few : many;
  };
  var PATTERNS = [
    [/^Lv (\d+)$/, "\u0423\u0440. $1"],
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
    [/^Level (\d+)! Check Customize for new unlocks\.$/, "\u0423\u0440\u043E\u0432\u0435\u043D\u044C $1! \u0417\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435 \u0432 \xAB\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443\xBB \u2014 \u0442\u0430\u043C \u043D\u043E\u0432\u043E\u0435."],
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
    [/^write (\d+) kanji$/, "\u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u0430\u043D\u0434\u0437\u0438: $1"],
    [/^Write all (\d+) characters, left to right$/, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0441\u0435 $1 \u0437\u043D\u0430\u043A\u0430(\u043E\u0432) \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E"],
    [/^The pad read: (.+)$/, "\u041F\u0430\u043D\u0435\u043B\u044C \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043B\u0430: $1"],
    [/^Monthly goals complete! (.+) unlocked — equip it in Customize\.$/, "\u041C\u0435\u0441\u044F\u0447\u043D\u044B\u0435 \u0446\u0435\u043B\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B! \u041E\u0442\u043A\u0440\u044B\u0442\u043E: $1 \u2014 \u043D\u0430\u0434\u0435\u043D\u044C\u0442\u0435 \u0432 \xAB\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435\xBB."],
    [/^(\d+) struggling spells are waiting\. Study them down to (\d+) to unlock the game modes\.$/, "\u0416\u0434\u0443\u0442 \u0442\u0440\u0443\u0434\u043D\u044B\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F: $1. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0438\u0445, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F $2, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u0436\u0438\u043C\u044B."],
    [/^(\d+) left · (All spells|Struggling)$/, (_, n, d) => `\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${n} \xB7 ${d === "All spells" ? "\u0412\u0441\u0435 \u0437\u0430\u043A\u043B\u0438\u043D\u0430\u043D\u0438\u044F" : "\u0422\u0440\u0443\u0434\u043D\u044B\u0435"}`],
    [/^(\d+)-day streak$/, (_, n) => `\u0441\u0435\u0440\u0438\u044F ${n} ${plural(+n, "\u0434\u0435\u043D\u044C", "\u0434\u043D\u044F", "\u0434\u043D\u0435\u0439")}`],
    [/^Unlocks at (?:a )?(\d+)-day streak$/, (_, n) => `\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0441\u0435\u0440\u0438\u0438 ${n} ${plural(+n, "\u0434\u0435\u043D\u044C", "\u0434\u043D\u044F", "\u0434\u043D\u0435\u0439")}`],
    [/^Unlocks at level (\d+)$/, "\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 $1"],
    [/^Unlocks at (?:a )?(\S+) goals$/, "\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0437\u0430 \u0446\u0435\u043B\u0438 \u043C\u0435\u0441\u044F\u0446\u0430: $1"],
    [/^Log in (\d+) days in a row to unlock the (.+) \(your best: (\d+)\)$/, "\u0417\u0430\u0445\u043E\u0434\u0438\u0442\u0435 $1 \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C $2 (\u0432\u0430\u0448 \u0440\u0435\u043A\u043E\u0440\u0434: $3)"],
    [/^Reach level (\d+) to unlock (.+)$/, "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u043D\u044F $1, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C: $2"],
    [/^(.+): (\w+) season$/, (_, m, x) => `${m}: \u0441\u0435\u0437\u043E\u043D \xAB${SEASON_RU[x] ?? x}\xBB`],
    [/^Unlocked: (.+) — equip it in Customize$/, (_, x) => `\u041E\u0442\u043A\u0440\u044B\u0442\u043E: ${tr(x)} \u2014 \u043D\u0430\u0434\u0435\u043D\u044C\u0442\u0435 \u0432 \xAB\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435\xBB`],
    [/^Reward: (.+) \(only this month\)$/, (_, x) => `\u041D\u0430\u0433\u0440\u0430\u0434\u0430: ${tr(x)} (\u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u044D\u0442\u043E\u043C \u043C\u0435\u0441\u044F\u0446\u0435)`],
    [/^(\d+) active days in the last 6 months$/, (_, n) => `${n} ${plural(+n, "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0435\u043D\u044C", "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0434\u043D\u044F", "\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0434\u043D\u0435\u0439")} \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432`],
    [/^([+−-]?[\d,]+) vs last week$/, "$1 \u043A \u043F\u0440\u043E\u0448\u043B\u043E\u0439 \u043D\u0435\u0434\u0435\u043B\u0435"],
    [/^Every correct word gives 30 XP \(\+100 for a perfect 10\)\. New words at (.+) your time\.$/, "\u041A\u0430\u0436\u0434\u043E\u0435 \u0432\u0435\u0440\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u2014 30 \u043E\u043F\u044B\u0442\u0430 (+100 \u0437\u0430 \u0432\u0441\u0435 10). \u041D\u043E\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0432 $1 \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438."],
    [/^Challenge of (.+)$/, "\u0418\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435: $1"],
    [/^Two words each from N5 to N1, easiest first\. Type the reading \(kana or romaji\) and press Enter — (\d+) s per word\. One try a day: most correct wins, then fastest\.$/, "\u041F\u043E \u0434\u0432\u0430 \u0441\u043B\u043E\u0432\u0430 \u0441 N5 \u0434\u043E N1, \u043E\u0442 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u043A \u0441\u043B\u043E\u0436\u043D\u044B\u043C. \u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u0435\u043D\u0438\u0435 (\u043A\u0430\u043D\u0430 \u0438\u043B\u0438 \u0440\u043E\u043C\u0430\u0434\u0437\u0438) \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter \u2014 $1 \u0441 \u043D\u0430 \u0441\u043B\u043E\u0432\u043E. \u041E\u0434\u043D\u0430 \u043F\u043E\u043F\u044B\u0442\u043A\u0430 \u0432 \u0434\u0435\u043D\u044C: \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0435\u0440\u043D\u044B\u0445, \u0437\u0430\u0442\u0435\u043C \u0431\u044B\u0441\u0442\u0440\u0435\u0435."],
    [/^10 new words at (.+) your time\.$/, "10 \u043D\u043E\u0432\u044B\u0445 \u0441\u043B\u043E\u0432 \u0432 $1 \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438."],
    [/^Word (\d+) of (\d+) · (.+)$/, "\u0421\u043B\u043E\u0432\u043E $1 \u0438\u0437 $2 \xB7 $3"],
    [/^Daily challenge: (\d+)\/10 · rank (\d+) of (\d+)(?: · \+(\d+) XP)?$/, (_, c, r2, p, x) => `\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435: ${c}/10 \xB7 \u043C\u0435\u0441\u0442\u043E ${r2} \u0438\u0437 ${p}${x ? ` \xB7 +${x} \u043E\u043F\u044B\u0442\u0430` : ""}`],
    [/^([\d.]+) s · rank (\d+) today$/, "$1 \u0441 \xB7 \u043C\u0435\u0441\u0442\u043E $2 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"],
    [/^Read the meaning — the kanji shows in (\d+) s$/, "\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u2014 \u043A\u0430\u043D\u0434\u0437\u0438 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 $1 \u0441"],
    [/^Round (\d+) — new cards! HP, mana and powers stay as they are\.$/, "\u0420\u0430\u0443\u043D\u0434 $1 \u2014 \u043D\u043E\u0432\u044B\u0435 \u043A\u0430\u0440\u0442\u044B! HP, \u043C\u0430\u043D\u0430 \u0438 \u0441\u0438\u043B\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F."],
    [/^ready in (\d+) turns?$/, (_, n) => `\u0433\u043E\u0442\u043E\u0432\u043E \u0447\u0435\u0440\u0435\u0437 ${n} ${plural(+n, "\u0445\u043E\u0434", "\u0445\u043E\u0434\u0430", "\u0445\u043E\u0434\u043E\u0432")}`],
    [/^Your turn — choose a card( \(Frenzy: 2 cards\))?$/, (_, f2) => `\u0412\u0430\u0448 \u0445\u043E\u0434 \u2014 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u0443${f2 ? " (\u041D\u0435\u0438\u0441\u0442\u043E\u0432\u0441\u0442\u0432\u043E: 2 \u043A\u0430\u0440\u0442\u044B)" : ""}`],
    [/^Playing since (.+)$/, "\u0418\u0433\u0440\u0430\u0435\u0442 \u0441 $1"],
    [/^(\d+) online now · (\d+) accounts · (\d+) banned$/, "\u0421\u0435\u0439\u0447\u0430\u0441 \u0432 \u0441\u0435\u0442\u0438: $1 \xB7 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u0432: $2 \xB7 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E: $3"],
    [/^last day: (.+)$/, "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0434\u0435\u043D\u044C: $1"],
    [/^(\d+(?:\.\d+)?)% crit today$/, "$1% \u043A\u0440\u0438\u0442 \u0441\u0435\u0433\u043E\u0434\u043D\u044F"]
  ];
  function tr(s) {
    if (lang() !== "ru") return s;
    const exact = RU[s];
    if (exact) return exact;
    for (const [re, rep] of PATTERNS) {
      if (!re.test(s)) continue;
      const out = typeof rep === "string" ? s.replace(re, rep) : s.replace(re, (...m) => rep(...m.slice(0, -2)));
      if (out !== s) return out;
    }
    return s;
  }
  var SKIP = 'script, style, svg, textarea, [lang="ja"], [data-no-i18n], .k, .kanji, .meaning-prompt, .chat-log';
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
  function translateAttrs(el8) {
    if (el8.closest(SKIP)) return;
    for (const a of ATTRS) {
      const v = el8.getAttribute(a);
      if (v && /[A-Za-z]/.test(v)) {
        const t = tr(v.trim());
        if (t !== v.trim()) el8.setAttribute(a, t);
      }
    }
  }
  function walk(root) {
    if (root.nodeType === Node.TEXT_NODE) return translateText(root);
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    const el8 = root;
    if (el8.matches(SKIP)) return;
    translateAttrs(el8);
    const it = document.createTreeWalker(el8, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    for (let n = it.nextNode(); n; n = it.nextNode()) {
      if (n.nodeType === Node.TEXT_NODE) translateText(n);
      else translateAttrs(n);
    }
  }
  function initI18n() {
    document.documentElement.lang = lang();
    if (lang() !== "ru") return;
    walk(document.body);
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
  function uiZoomPref() {
    try {
      const v = Number(localStorage.getItem(KEY2));
      if (UI_ZOOMS.includes(v)) return v;
    } catch {
    }
    return innerWidth >= 900 ? 0.8 : 1;
  }
  function setUiZoomPref(z) {
    try {
      localStorage.setItem(KEY2, String(z));
    } catch {
    }
    applyUiZoom(z);
  }
  function applyUiZoom(z = uiZoomPref()) {
    const root = document.documentElement;
    root.style.setProperty("--ui-zoom", String(z));
    root.style.setProperty("--vfix", "1");
    const probe = document.createElement("div");
    probe.style.cssText = "position:absolute;left:0;top:0;width:100px;height:100vh;visibility:hidden;pointer-events:none";
    document.body.append(probe);
    const r2 = probe.getBoundingClientRect();
    probe.remove();
    scale = r2.width > 0 ? r2.width / 100 : 1;
    const vfix = r2.height > 0 ? innerHeight / r2.height : 1;
    root.style.setProperty("--vfix", String(Math.round(vfix * 1e3) / 1e3));
  }
  function zrect(el8) {
    const r2 = el8.getBoundingClientRect();
    const s = scale;
    return { left: r2.left / s, top: r2.top / s, right: r2.right / s, bottom: r2.bottom / s, width: r2.width / s, height: r2.height / s };
  }
  var viewW = () => innerWidth / scale;
  var viewH = () => innerHeight / scale;

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
    me: () => call("GET", `/api/me?today=${today()}`),
    setAvatar: (image) => call("PUT", "/api/me/avatar", { image }),
    removeAvatar: () => call("DELETE", "/api/me/avatar"),
    setFlame: (flame) => call("PUT", "/api/me/flame", { flame }),
    setStaff: (staff) => call("PUT", "/api/me/staff", { staff }),
    setBackground: (background) => call("PUT", "/api/me/background", { background }),
    study: () => call("GET", `/api/study?today=${today()}`),
    setStudyLevels: (levels) => call("PUT", "/api/study/levels", { levels, today: today() }),
    queue: (deck2) => call("GET", `/api/study/queue?deck=${deck2}`),
    review: (vocabId, rating) => call("POST", "/api/study/review", { vocabId, rating, today: today(), tz: (/* @__PURE__ */ new Date()).getTimezoneOffset() }),
    matches: () => call("GET", "/api/matches"),
    match: (id) => call("GET", `/api/matches/${encodeURIComponent(id)}`),
    player: (id) => call("GET", `/api/users/${encodeURIComponent(id)}`),
    users: () => call("GET", "/api/admin/users"),
    tutorialDone: () => call("PUT", "/api/me/tutorial"),
    setKana: (mastered) => call("PUT", "/api/me/kana", { mastered }),
    progress: () => call("GET", `/api/progress?today=${today()}`),
    strokes: (chars) => call("GET", `/api/strokes?k=${encodeURIComponent(chars)}`),
    daily: () => call("GET", "/api/daily"),
    dailyStart: () => call("POST", "/api/daily/start"),
    dailyAnswer: (text) => call("POST", "/api/daily/answer", { text }),
    dailyFinish: () => call("POST", "/api/daily/finish"),
    friends: () => call("GET", "/api/friends"),
    addFriend: (username) => call("POST", "/api/friends", { username }),
    acceptFriend: (id) => call("POST", `/api/friends/${encodeURIComponent(id)}/accept`),
    removeFriend: (id) => call("DELETE", `/api/friends/${encodeURIComponent(id)}`),
    setBanned: (id, banned) => call("POST", `/api/admin/users/${encodeURIComponent(id)}/ban`, { banned })
  };

  // src/client/strokes.ts
  var cache = /* @__PURE__ */ new Map();
  async function load(chars) {
    const missing = [...new Set(chars)].filter((c) => !cache.has(c));
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
  function pathOf(pts) {
    if (pts.length < 3) return `M${pts.map((p) => p.join(" ")).join(" L")}`;
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length - 1; i++) {
      const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2;
      d += ` Q${pts[i][0]} ${pts[i][1]} ${mx.toFixed(1)} ${my.toFixed(1)}`;
    }
    const last = pts[pts.length - 1];
    return `${d} L${last[0]} ${last[1]}`;
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
      const d = pathOf(pts);
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
    const chars = [...word2];
    const stepMs = o.stepMs ?? 520;
    box.classList.add("stroke-order");
    box.replaceChildren(Object.assign(document.createElement("div"), { className: "so-loading", textContent: "\u2026" }));
    await load(chars.filter((c) => /[\p{Script=Han}々]/u.test(c)));
    const row = document.createElement("div");
    row.className = "so-row";
    let delay = 0;
    for (const ch of chars) {
      const strokes2 = /[\p{Script=Han}々]/u.test(ch) ? cache.get(ch) ?? null : null;
      const cell = document.createElement("div");
      cell.className = "so-cell";
      cell.append(diagram(ch, strokes2, stepMs, delay));
      row.append(cell);
      delay += (strokes2?.length ?? 0) * stepMs + (strokes2 ? 250 : 0);
    }
    const foot = document.createElement("div");
    foot.className = "so-foot";
    if (o.caption) foot.append(Object.assign(document.createElement("span"), { textContent: o.caption }));
    const replay = Object.assign(document.createElement("button"), { className: "pill so-replay", type: "button", textContent: "\u21BB Replay" });
    replay.onclick = () => {
      for (const n of row.querySelectorAll(".so-ink path, .so-nums text")) {
        n.style.animationName = "none";
        void n.offsetWidth;
        n.style.animationName = "";
      }
    };
    foot.append(replay);
    box.replaceChildren(row, foot);
  }

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
  var critText = (crit) => `${(crit * 100).toFixed(1).replace(/\.0$/, "")}%`;
  var BACKGROUNDS = [
    { id: "forest", name: "Forest", level: 0 },
    { id: "swamp", name: "Swamp", level: 5 },
    { id: "plains", name: "Plains", level: 10 },
    { id: "castle", name: "Castle", level: 15 },
    { id: "worldtree", name: "World Tree", level: 20 }
  ];
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
  var flameUnlocked = (f2, xp, unlocks2 = []) => {
    const d = FLAMES.find((x) => x.id === f2);
    if (!d) return false;
    return d.season ? unlocks2.includes(`flame:${d.id}`) : levelOf(xp) >= d.level;
  };
  var flameColor = (f2) => (FLAMES.find((x) => x.id === f2) ?? FLAMES[0]).color;
  function flameShades(f2) {
    const hex = flameColor(f2).slice(1);
    const [r2, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
    const max = Math.max(r2, g, b), min = Math.min(r2, g, b), l = (max + min) / 2, d = max - min;
    const h3 = d === 0 ? 0 : max === r2 ? ((g - b) / d + 6) % 6 : max === g ? (b - r2) / d + 2 : (r2 - g) / d + 4;
    const hue = h3 * 60;
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
    { id: "ember", name: "Ember Staff", streak: 5, gem: "#ff7a1a", blurb: "Forged from volcanic rock and blessed by fire spirits." },
    { id: "tide", name: "Tide Staff", streak: 10, gem: "#3fb8ff", blurb: "Crafted from crystal and oceanic runes. It flows with the tides." },
    { id: "storm", name: "Storm Staff", streak: 15, gem: "#b26bff", blurb: "A relic of the sky temples. It channels lightning." },
    { id: "void", name: "Void Staff", streak: 20, gem: "#4a7dff", blurb: "An ancient, otherworldly artifact. It bends reality and commands the unknown." },
    { id: "frost", name: "Frost Staff", streak: 0, season: 1, base: "tide", tint: "#d8f4ff", gem: "#bfefff", blurb: "January reward. Rimed with ice that never melts." },
    { id: "blossom", name: "Blossom Staff", streak: 0, season: 3, base: "verdant", tint: "#ffb8d8", gem: "#ff7ab8", blurb: "March reward. A branch that flowers whenever it casts." },
    { id: "jade", name: "Jade Staff", streak: 0, season: 5, base: "ember", tint: "#7dffb0", gem: "#3dff8a", blurb: "May reward. Carved from one piece of temple jade." },
    { id: "abyss", name: "Abyss Staff", streak: 0, season: 7, base: "tide", tint: "#3a5cff", gem: "#2a4dff", blurb: "July reward. Pulled from the deepest trench of the sea." },
    { id: "moon", name: "Moon Staff", streak: 0, season: 9, base: "verdant", tint: "#f2f0ff", gem: "#fff6c8", blurb: "September reward. Silver light of the harvest moon." },
    { id: "maple", name: "Maple Staff", streak: 0, season: 11, base: "ember", tint: "#ff5a3a", gem: "#ff3a2a", blurb: "November reward. Burning red like autumn leaves." }
  ];
  var staffUnlocked = (s, bestStreak, unlocks2 = []) => {
    const d = STAFFS.find((x) => x.id === s);
    if (!d) return false;
    return d.season ? unlocks2.includes(`staff:${d.id}`) : (bestStreak ?? 0) >= d.streak;
  };
  var staffOf = (s) => STAFFS.find((x) => x.id === s) ?? STAFFS[0];
  var MODE_LEVEL = { reading: 0, rapid: 0, writing: 1, boss: 1, deck: 2 };
  var modeUnlocked = (mode3, xp, admin = false) => admin || levelOf(xp) >= (MODE_LEVEL[mode3] ?? 0);
  var STUDY_LOCK = 100;
  var AVATAR_BY_LEVEL = { KANA: "goblin", N5: "kid", N4: "human", N3: "knight", N2: "witch", N1: "wizard" };
  var ORDER = ["KANA", "N5", "N4", "N3", "N2", "N1"];
  function avatarFor(levels) {
    const top = [...levels].sort((a, b) => ORDER.indexOf(b) - ORDER.indexOf(a))[0] ?? "N5";
    return AVATAR_BY_LEVEL[top];
  }
  var KANA_BEGINNER = "flag:kana-beginner";
  var isKanaBeginner = (unlocks2) => !!unlocks2?.includes(KANA_BEGINNER);
  function isoWeek(day) {
    const d = /* @__PURE__ */ new Date(`${day}T00:00:00Z`);
    const dow = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dow);
    const yearStart = Date.UTC(d.getUTCFullYear(), 0, 1);
    return Math.ceil(((d.getTime() - yearStart) / 864e5 + 1) / 7);
  }

  // src/client/pixelstaffs.ts
  var STAFF_W = 5;
  var STAFF_H = 20;
  var GRIP = 10;
  var MAPS = {
    verdant: [
      ".l.l.",
      "b.l.b",
      "b.O.b",
      "bOOOb",
      ".bOb.",
      "..w..",
      ".vwl.",
      "..wv.",
      ".vw..",
      "..wv.",
      "..w..",
      ".vw..",
      "..wv.",
      ".lw..",
      "..wv.",
      ".vw..",
      "..w..",
      "..wl.",
      "..w..",
      "..d.."
    ],
    ember: [
      "..F..",
      ".F.F.",
      "F.O.F",
      "fOOOf",
      ".dOd.",
      "..d..",
      "..w..",
      ".fw..",
      "..wf.",
      ".fw..",
      "..w..",
      "..wf.",
      ".fw..",
      "..wf.",
      ".fw..",
      "..w..",
      "..wf.",
      "..w..",
      "..d..",
      "..f.."
    ],
    tide: [
      ".ccc.",
      "c...c",
      "c.O..",
      "cOOO.",
      "c.O.c",
      ".ccc.",
      "..w..",
      "..wc.",
      ".cw..",
      "..ws.",
      "..w..",
      ".sw..",
      "..wc.",
      ".cw..",
      "..ws.",
      "..w..",
      "..w..",
      ".ccc.",
      "..c..",
      "..c.."
    ],
    storm: [
      "..s..",
      "r.s.r",
      "s.O.s",
      "sOOOs",
      "r.O.r",
      ".sss.",
      "..w..",
      "..r..",
      "..w..",
      ".sws.",
      "..w..",
      "..r..",
      "..w..",
      ".sws.",
      "..w..",
      "..r..",
      "..w..",
      "..w..",
      ".rrr.",
      "..r.."
    ],
    void: [
      "*.c.*",
      "..c..",
      "s.O.s",
      "sOOOs",
      ".cOc.",
      "s.c.s",
      ".sws.",
      "..wc.",
      ".sw..",
      "..ws.",
      ".cw..",
      "..ws.",
      ".sw..",
      "..wc.",
      ".sw..",
      "..ws.",
      "..w..",
      ".ccc.",
      "..c..",
      "..c.."
    ]
  };
  var PALS = {
    verdant: { w: "#7a4e2d", d: "#4f311b", b: "#8a5a33", v: "#3f9a3a", l: "#6ad04e", O: "#6dff6a" },
    ember: { w: "#2e1e1a", d: "#160c0a", f: "#ff5a1a", F: "#ffb347", O: "#ff7a1a" },
    tide: { w: "#3a4250", s: "#c8d4e4", c: "#6fd0ff", O: "#3fb8ff" },
    storm: { w: "#2a2440", s: "#8c86a8", r: "#b26bff", O: "#d6b0ff" },
    void: { w: "#5a6688", s: "#e4e8f2", c: "#8fc8ff", O: "#4a7dff", "*": "#ffffff" }
  };
  function mix(a, b, t) {
    const p = (h3) => [1, 3, 5].map((i) => parseInt(h3.slice(i, i + 2), 16));
    const [x, y] = [p(a), p(b)];
    return `#${x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join("")}`;
  }
  function staffPixels(id) {
    const def = staffOf(id);
    const shape = def.base ?? def.id;
    const map = MAPS[shape];
    const pal = { ...PALS[shape] };
    if (def.tint) for (const k of Object.keys(pal)) pal[k] = mix(pal[k], def.tint, k === "O" ? 0 : 0.55);
    if (def.tint) pal.O = def.gem;
    const out = [];
    map.forEach((row, y) => [...row].forEach((ch, x) => {
      if (ch !== ".") out.push([x, y, pal[ch], ch === "O"]);
    }));
    return out;
  }
  function pixelStaffSvg(id) {
    const rects = staffPixels(id).map(([x, y, c, gem]) => `<rect x="${x}" y="${y}" width="1" height="1" fill="${c}"${gem ? ' class="orb"' : ""}/>`);
    return `<svg viewBox="0 0 ${STAFF_W} ${STAFF_H}" shape-rendering="crispEdges" aria-hidden="true">${rects.join("")}</svg>`;
  }

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
  function pixelSvg(map, pal, classes = {}, extra = []) {
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
    return `<svg viewBox="0 0 ${map[0].length} ${map.length}" shape-rendering="crispEdges" aria-hidden="true">${rects.join("")}${extra.join("")}</svg>`;
  }
  var HOLD = {
    wizard: { erase: "TO", cx: 13, gy: 10, hand: "S" },
    goblin: { erase: "C", cx: 13, gy: 11, hand: "G" },
    kid: { erase: "YT", cx: 13, gy: 11, hand: "S" },
    human: { erase: "VY", cx: 13, gy: 11, hand: "S" },
    knight: { erase: "AY", cx: 13, gy: 11, hand: "M" }
  };
  function holding(kind, map, pal, staff, classes = {}) {
    const h3 = HOLD[kind];
    const base = map.map((row) => [...row].map((ch, x) => x >= 11 && h3.erase.includes(ch) ? "." : ch).join(""));
    const ox = h3.cx - 2, oy = h3.gy - GRIP;
    const extra = staffPixels(staff).filter(([x, y]) => y + oy >= 0 && y + oy < map.length).map(([x, y, c, gem]) => `<rect x="${x + ox}" y="${y + oy}" width="1" height="1" fill="${c}"${gem ? ' class="orb"' : ""}/>`);
    extra.push(`<rect x="${h3.cx}" y="${h3.gy}" width="1" height="1" fill="${pal[h3.hand]}"/>`, `<rect x="${h3.cx - 1}" y="${h3.gy}" width="1" height="1" fill="${pal[h3.hand]}"/>`);
    return pixelSvg(base, pal, classes, extra);
  }
  var PALETTES_ALLY = { ...COMMON, H: "#2f8f6b", h: "#1c5c44", R: "#3aa57c", r: "#22684e", O: "#c6ff7a" };
  function wizardSvg(side, staff) {
    return holding("wizard", WIZARD_MAP, side === "ally" ? PALETTES_ALLY : PALETTES[side], staff);
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
  function heroSvg(hero, side, staff) {
    return avatarSvg(hero, side, staff);
  }
  function avatarSvg(avatar2, side, staff) {
    switch (avatar2) {
      case "goblin":
        return holding("goblin", GOBLIN_MAP, GOBLIN_PAL, staff);
      case "kid":
        return holding("kid", KID_MAP, KID_PAL, staff);
      case "human":
        return holding("human", HUMAN_MAP, HUMAN_PAL, staff);
      case "knight":
        return holding("knight", KNIGHT_MAP, KNIGHT_PAL, staff);
      case "witch":
        return holding("wizard", WIZARD_MAP, WITCH_PAL, staff);
      default:
        return wizardSvg(side, staff);
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
  function spriteRects(kind) {
    const map = kind === "goblin" ? GOBLIN_MAP : DRAGON_MAP;
    const pal = kind === "goblin" ? GOBLIN_PAL : DRAGON_PALETTE;
    const svg = pixelSvg(map, pal, kind === "dragon" ? { E: "eye" } : {});
    return { rects: svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, ""), w: map[0].length, h: map.length };
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
  function resolveTime(pref, now = Date.now()) {
    if (pref !== "auto") return pref;
    return CYCLE[Math.floor(now / CYCLE_STEP_MS) % CYCLE.length];
  }
  var untilNextStep = (now = Date.now()) => CYCLE_STEP_MS - now % CYCLE_STEP_MS;
  var W = 1600;
  var H = 900;
  var seed = 1;
  var rnd = () => (seed = seed * 16807 % 2147483647) / 2147483647;
  var r = (a, b) => a + rnd() * (b - a);
  var f = (n) => n.toFixed(1);
  var stopsOf = (stops) => stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== void 0 ? ` stop-opacity="${a}"` : ""}/>`).join("");
  var grad = (id, stops, vertical = true) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}">${stopsOf(stops)}</linearGradient>`;
  var radial = (id, stops) => `<radialGradient id="${id}">${stopsOf(stops)}</radialGradient>`;
  var DEFS = `<linearGradient id="haze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity="0"/><stop offset=".55" stop-color="currentColor" stop-opacity=".9"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient><filter id="blur20" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="20"/></filter><filter id="glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
  function stars(n, maxY, color = "#fff") {
    const one = () => `<circle cx="${f(r(0, W))}" cy="${f(r(0, maxY))}" r="${f(r(0.5, 1.9))}" fill="${color}" opacity="${f(r(0.35, 0.95))}"/>`;
    return `<g class="bg-twinkle">${Array.from({ length: n >> 1 }, one).join("")}</g><g class="bg-twinkle b">${Array.from({ length: n >> 1 }, one).join("")}</g>`;
  }
  function moon(cx, cy, rad, tint = "#f3efd6") {
    return `<circle cx="${cx}" cy="${cy}" r="${rad * 3.2}" fill="${tint}" opacity=".06"/><circle cx="${cx}" cy="${cy}" r="${rad * 1.7}" fill="${tint}" opacity=".1"/>
    <circle cx="${cx}" cy="${cy}" r="${rad}" fill="${tint}"/>
    <circle cx="${cx - rad * 0.3}" cy="${cy - rad * 0.2}" r="${rad * 0.18}" fill="#000" opacity=".07"/><circle cx="${cx + rad * 0.25}" cy="${cy + rad * 0.3}" r="${rad * 0.12}" fill="#000" opacity=".06"/><circle cx="${cx + rad * 0.35}" cy="${cy - rad * 0.35}" r="${rad * 0.08}" fill="#000" opacity=".06"/>`;
  }
  function sun(cx, cy, rad, core, halo) {
    return `<circle cx="${cx}" cy="${cy}" r="${rad * 5}" fill="${halo}" opacity=".10"/><circle cx="${cx}" cy="${cy}" r="${rad * 2.4}" fill="${halo}" opacity=".18"/><circle cx="${cx}" cy="${cy}" r="${rad}" fill="${core}"/>`;
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
    return `<g class="${cls}" opacity="${op}">${Array.from({ length: n }, () => {
      const x = r(-100, W), y = r(yMin, yMax), s = r(0.6, 1.4);
      return `<g transform="translate(${f(x)} ${f(y)}) scale(${f(s)})" fill="${color}"><ellipse cx="0" cy="0" rx="90" ry="22"/><ellipse cx="-40" cy="-12" rx="46" ry="26"/><ellipse cx="30" cy="-18" rx="52" ry="30"/><ellipse cx="70" cy="-4" rx="40" ry="18"/></g>`;
    }).join("")}</g>`;
  }
  function mountains(y, amp, color, jag = 1) {
    let d = `M0 ${H} L0 ${y}`;
    for (let x = 0; x <= W + 60; x += 60) d += ` L${x} ${f(y - Math.abs(Math.sin(x / 260 + jag) * amp) - r(0, amp * 0.25))}`;
    return `<path d="${d} L${W} ${H} Z" fill="${color}"/>`;
  }
  function hills(y, amp, color, phase = 0) {
    let d = `M0 ${H} L0 ${y}`;
    for (let x = 0; x <= W; x += 40) d += ` L${x} ${f(y + Math.sin(x / 210 + phase) * amp + Math.sin(x / 90 + phase * 2) * amp * 0.25)}`;
    return `<path d="${d} L${W} ${H} Z" fill="${color}"/>`;
  }
  function pine(x, base, h3, color) {
    const w = h3 * 0.42;
    let s = `<rect x="${f(x - w * 0.04)}" y="${f(base - h3 * 0.12)}" width="${f(w * 0.08)}" height="${f(h3 * 0.14)}" fill="${color}"/>`;
    for (let t = 0; t < 4; t++) {
      const top = base - h3 * (0.35 + t * 0.21), bw = w * (1 - t * 0.2), by = base - h3 * (0.08 + t * 0.2);
      s += `<polygon points="${f(x - bw / 2)},${f(by)} ${f(x - bw * 0.3)},${f(by - 6)} ${f(x)},${f(top)} ${f(x + bw * 0.3)},${f(by - 6)} ${f(x + bw / 2)},${f(by)}" fill="${color}"/>`;
    }
    return s;
  }
  function forestRow(base, count, minH, maxH, color) {
    let s = "";
    for (let i = 0; i < count; i++) s += pine(i / count * W + r(-20, W / count), base + r(-6, 6), r(minH, maxH), color);
    return s + `<rect x="0" y="${base}" width="${W}" height="${H - base}" fill="${color}"/>`;
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
  function forest(t) {
    const sky = pick(t, [[0, "#4f95d0"], [0.5, "#9fd0ea"], [1, "#e6f2d8"]], [[0, "#22163f"], [0.4, "#7a3a68"], [0.7, "#e2774f"], [1, "#ffcf8a"]], [[0, "#040914"], [0.55, "#0c1e33"], [1, "#183a3c"]]);
    const rows = pick(t, ["#5f8f86", "#3e6e5d", "#24503f", "#123222"], ["#5a3d5c", "#3f2c48", "#2a1e33", "#140f1c"], ["#1a3b3d", "#11292b", "#0a1c1d", "#040f10"]);
    return `<defs>${grad("sk", sky)}${grad("cometTail", [[0, "#fff", 0.9], [1, "#9fd8ff", 0]], false)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === "night" ? milkyWay() + stars(180, 520) + comets(3) + moon(1220, 160, 58) : t === "sunset" ? stars(30, 200, "#ffe7c4") + horizonGlow(560, "#ff8a4a") + sun(1080, 560, 70, "#ffd9a0", "#ff9a5a") : sun(1260, 150, 46, "#fff6d8", "#fff2b0") + clouds(6, 80, 260, "#ffffff", 0.75)}
    ${mountains(520, 90, pick(t, "#86aac0", "#6b4a72", "#132a3a"), 0.4)}
    ${haze(560, pick(t, "#dff0f4", "#ffb08a", "#2a4a5a"), 0.6)}
    ${mist(560, pick(t, "#e8f4f0", "#ffcfb0", "#4e7a86"), pick(t, 0.5, 0.35, 0.3))}
    ${forestRow(620, 24, 240, 400, rows[0])}
    ${haze(640, pick(t, "#cfe6dc", "#c87a6a", "#1c3a40"), 0.45)}
    ${t !== "night" ? rays(t === "day" ? 1260 : 1080, t === "day" ? 150 : 560, pick(t, "#fffbe0", "#ffd39a", "#000"), pick(t, 0.22, 0.3, 0)) : ""}
    ${forestRow(700, 20, 200, 330, rows[1])}
    ${t !== "day" ? fireflies(t === "night" ? 26 : 12, 520, 820, "#e8ff9a") : ""}
    ${forestRow(780, 16, 160, 270, rows[2])}
    ${eyes(t === "night" ? 7 : t === "sunset" ? 4 : 2, 700, 800, t === "day" ? 0.35 : 1)}
    ${forestRow(860, 12, 120, 210, rows[3])}
    ${mist(860, pick(t, "#ffffff", "#ffd8b8", "#2a4f56"), 0.25)}`;
  }
  function swamp(t) {
    const sky = pick(t, [[0, "#7fa59a"], [0.55, "#c1d2b4"], [1, "#e2e6c8"]], [[0, "#2a1838"], [0.45, "#7a4058"], [0.75, "#d0835a"], [1, "#e8b86e"]], [[0, "#07080f"], [0.5, "#141f22"], [1, "#1f3426"]]);
    const tree = pick(t, "#2f3d2c", "#24182a", "#080d0a");
    const water = pick(t, ["#6d8a73", "#33493a"], ["#7a4e4e", "#2a1a22"], ["#1b2b22", "#060b08"]);
    const deadTree = (x, y, h3) => {
      const b = (x1, y1, x2, y2, w) => `<path d="M${f(x1)} ${f(y1)} Q ${f((x1 + x2) / 2 + r(-15, 15))} ${f((y1 + y2) / 2)} ${f(x2)} ${f(y2)}" stroke="${tree}" stroke-width="${w}" stroke-linecap="round" fill="none"/>`;
      let s = b(x, y, x + 8, y - h3, 18) + b(x + 4, y - h3 * 0.55, x - h3 * 0.38, y - h3 * 0.86, 8) + b(x + 6, y - h3 * 0.72, x + h3 * 0.42, y - h3 * 0.98, 7) + b(x - h3 * 0.2, y - h3 * 0.74, x - h3 * 0.32, y - h3 * 1.02, 4) + b(x + 8, y - h3, x + 34, y - h3 * 1.16, 4);
      for (let i = 0; i < 6; i++) {
        const mx = x + r(-h3 * 0.35, h3 * 0.4), my = y - h3 * r(0.7, 1);
        s += `<path class="bg-sway" d="M${f(mx)} ${f(my)} q 4 ${f(r(20, 40))} -2 ${f(r(40, 80))}" stroke="${pick(t, "#5e7a4a", "#4c3a3a", "#2a3e26")}" stroke-width="3" fill="none" opacity=".85"/>`;
      }
      return s;
    };
    const trees = [140, 470, 980, 1380].map((x, i) => deadTree(x, 650, 250 + i * 28)).join("");
    return `<defs>${grad("sk", sky)}${grad("wt", [[0, water[0]], [1, water[1]]])}${radial("wisp", [[0, "#cfff9a", 0.9], [1, "#cfff9a", 0]])}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === "night" ? stars(70, 320, "#cfe8b0") + moon(380, 170, 48, "#dfe9a8") : t === "sunset" ? horizonGlow(560, "#ff7a5a") + sun(420, 520, 60, "#ffcf96", "#ff8a60") : sun(380, 140, 40, "#fbfbe6", "#ffffff") + clouds(4, 90, 220, "#f4f6ea", 0.55)}
    ${hills(560, 24, pick(t, "#56715a", "#3c2a3c", "#132018"))}
    ${haze(600, pick(t, "#eef4e6", "#e8a088", "#2e4a3a"), 0.55)}
    ${mist(580, pick(t, "#f0f4e6", "#f2c2a6", "#6c8a6a"), pick(t, 0.55, 0.4, 0.35))}
    ${trees}
    <rect x="0" y="640" width="${W}" height="260" fill="url(#wt)"/>
    <g opacity=".25" transform="translate(0 1290) scale(1 -1)">${trees}</g>
    ${Array.from({ length: 14 }, () => `<ellipse cx="${f(r(0, W))}" cy="${f(r(680, 880))}" rx="${f(r(20, 46))}" ry="7" fill="${pick(t, "#4f7a3c", "#5a4a30", "#1f3a1a")}" opacity=".9"/>`).join("")}
    ${Array.from({ length: 22 }, () => {
      const x = r(0, W), y = r(640, 700);
      return `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + r(-4, 4))}" y2="${f(y - r(40, 90))}" stroke="${tree}" stroke-width="3"/><ellipse cx="${f(x + r(-3, 3))}" cy="${f(y - r(60, 90))}" rx="4" ry="11" fill="${pick(t, "#4a3a22", "#2a1a14", "#0a0a06")}"/>`;
    }).join("")}
    ${Array.from({ length: 6 }, () => {
      const x = r(80, W - 80), y = r(700, 860);
      return `<g fill="${pick(t, "#3d5a2a", "#2c2418", "#0c1408")}"><ellipse cx="${f(x)}" cy="${f(y)}" rx="11" ry="7"/><circle cx="${f(x - 6)}" cy="${f(y - 6)}" r="3.5"/><circle cx="${f(x + 6)}" cy="${f(y - 6)}" r="3.5"/></g>${t === "night" ? `<g class="bg-flicker slow"><circle cx="${f(x - 6)}" cy="${f(y - 6)}" r="1.4" fill="#e8ff7a"/><circle cx="${f(x + 6)}" cy="${f(y - 6)}" r="1.4" fill="#e8ff7a"/></g>` : ""}`;
    }).join("")}
    ${t !== "day" ? `<g class="bg-float">${Array.from({ length: t === "night" ? 7 : 3 }, () => `<circle cx="${f(r(100, W - 100))}" cy="${f(r(480, 760))}" r="${f(r(14, 24))}" fill="url(#wisp)" class="bg-flicker" style="animation-delay:${f(r(0, 3))}s"/>`).join("")}</g>` : ""}
    ${fireflies(t === "night" ? 30 : 10, 420, 760, "#d8ff7a")}
    ${mist(700, pick(t, "#ffffff", "#ffd8c0", "#9ab89a"), pick(t, 0.35, 0.28, 0.22))}`;
  }
  function plains(t) {
    const sky = pick(t, [[0, "#3f86d6"], [0.55, "#8fc4ee"], [1, "#dff0fb"]], [[0, "#2a1a45"], [0.45, "#a8506a"], [0.75, "#f0a060"], [1, "#f6d08a"]], [[0, "#050a1c"], [0.6, "#16224a"], [1, "#2a2f58"]]);
    const lit = t !== "day";
    const house = (x, y, s, wall2, roof2) => {
      const w = 46 * s, h3 = 30 * s;
      const win = lit ? `<rect x="${f(x + w * 0.2)}" y="${f(y - h3 * 0.62)}" width="${f(w * 0.18)}" height="${f(h3 * 0.3)}" fill="#ffcf6a" class="bg-flicker slow"/><rect x="${f(x + w * 0.6)}" y="${f(y - h3 * 0.62)}" width="${f(w * 0.18)}" height="${f(h3 * 0.3)}" fill="#ffcf6a"/>` : `<rect x="${f(x + w * 0.2)}" y="${f(y - h3 * 0.62)}" width="${f(w * 0.18)}" height="${f(h3 * 0.3)}" fill="#2a3040" opacity=".6"/>`;
      const smoke = `<g class="bg-smoke" style="animation-delay:${f(r(0, 4))}s">${[0, 1, 2].map((i) => `<circle cx="${f(x + w * 0.78 + i * 4)}" cy="${f(y - h3 - 26 * s - i * 14)}" r="${f(4 + i * 3)}" fill="${pick(t, "#ffffff", "#f2d4c2", "#8a8fa8")}" opacity="${f(0.5 - i * 0.12)}"/>`).join("")}</g>`;
      return `${smoke}<rect x="${f(x)}" y="${f(y - h3)}" width="${f(w)}" height="${f(h3)}" fill="${wall2}"/><polygon points="${f(x - 5 * s)},${f(y - h3)} ${f(x + w / 2)},${f(y - h3 - 22 * s)} ${f(x + w + 5 * s)},${f(y - h3)}" fill="${roof2}"/><rect x="${f(x + w * 0.72)}" y="${f(y - h3 - 24 * s)}" width="${f(6 * s)}" height="${f(14 * s)}" fill="${roof2}"/>${win}`;
    };
    const wall = pick(t, "#e8dcc0", "#c99a7a", "#3a3550"), roof = pick(t, "#a04a3a", "#6e2e3a", "#1f1a30");
    const village = (x, y, s) => Array.from({ length: 5 }, (_, i) => house(x + i * 58 * s + r(-8, 8), y + r(-4, 6), s * r(0.85, 1.1), wall, roof)).join("");
    const gob = spriteRects("goblin");
    const goblin = (x, y, s, delay) => `<g class="bg-walk" style="animation-delay:${delay}s"><g transform="translate(${f(x)} ${f(y - gob.h * s)}) scale(${s})" opacity="${t === "night" ? 0.8 : 0.95}">${gob.rects}</g></g>`;
    return `<defs>${grad("sk", sky)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === "night" ? milkyWay() + stars(150, 480) + moon(260, 140, 44) : t === "sunset" ? horizonGlow(580, "#ffa060") + sun(820, 560, 110, "#ffe2a0", "#ffb070") + clouds(6, 120, 320, "#f7c7b0", 0.5) : sun(1300, 130, 50, "#fffbe0", "#fff6c0") + clouds(8, 70, 300, "#ffffff", 0.85)}
    ${mountains(560, 70, pick(t, "#7d98b8", "#6a4a6a", "#1c2240"), 2)}
    ${haze(600, pick(t, "#e6f0fa", "#ffb890", "#2a3060"), 0.55)}
    ${hills(600, 30, pick(t, "#7aa060", "#7a5a5a", "#1e2a2a"), 0.5)}
    ${village(260, 612, 0.7)}${village(1040, 604, 0.6)}
    <g transform="translate(1180 560)"><rect x="-7" y="0" width="14" height="110" fill="${pick(t, "#cbb79a", "#5a3a3a", "#1a1a28")}"/><g class="bg-spin">${[0, 90, 180, 270].map((a) => `<rect x="-4" y="-84" width="8" height="84" fill="${pick(t, "#8a6a4a", "#3a2228", "#141420")}" transform="rotate(${a + 20})"/>`).join("")}</g></g>
    ${hills(660, 34, pick(t, "#5f8f45", "#4a5a3a", "#162418"), 1.7)}
    ${goblin(300, 692, 2.6, 0)}${goblin(400, 698, 2.3, 6)}${goblin(1240, 702, 2.5, 3)}
    ${t === "night" ? `<g class="bg-flicker" filter="url(#glow)"><polygon points="1380,742 1392,712 1404,742" fill="#ffb347"/><polygon points="1386,742 1392,722 1398,742" fill="#fff0a0"/></g>${goblin(1330, 744, 2.2, 9)}${goblin(1420, 744, 2.2, 12)}` : ""}
    ${hills(740, 26, pick(t, "#4a7a35", "#33472b", "#0e180e"), 3)}
    ${Array.from({ length: 80 }, () => {
      const x = r(0, W), y = r(760, 900);
      return `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + r(-3, 6))}" y2="${f(y - r(12, 26))}" stroke="${pick(t, "#2f5a22", "#23331d", "#08100a")}" stroke-width="3" class="bg-sway"/>`;
    }).join("")}
    ${t === "night" ? fireflies(14, 640, 860, "#fff2a0") : ""}`;
  }
  function castle(t) {
    const sky = pick(t, [[0, "#4a78b8"], [0.6, "#9ab8dc"], [1, "#d8e4ee"]], [[0, "#1a0a1e"], [0.4, "#6a1a2a"], [0.72, "#c2452a"], [1, "#f08a3a"]], [[0, "#03051a"], [0.6, "#141d4a"], [1, "#2c3270"]]);
    const stone = pick(t, "#5a5a6e", "#2a1a24", "#121126"), roof = pick(t, "#3a3a58", "#1a0e18", "#1b1a33");
    const lit = t !== "day";
    const tower = (x, w, h3) => `<rect x="${x}" y="${640 - h3}" width="${w}" height="${h3}" fill="${stone}"/><polygon points="${x - 10},${640 - h3} ${x + w / 2},${560 - h3} ${x + w + 10},${640 - h3}" fill="${roof}"/>` + Array.from({ length: Math.floor(h3 / 70) }, (_, i) => `<rect x="${x + w / 2 - 6}" y="${640 - h3 + 40 + i * 70}" width="12" height="20" rx="6" fill="${lit ? "#ffcf6a" : "#20202e"}" opacity="${lit ? rnd() > 0.35 ? 0.95 : 0.2 : 0.6}"${lit ? ' class="bg-flicker slow"' : ""}/>`).join("") + `<line x1="${x + w / 2}" y1="${560 - h3}" x2="${x + w / 2}" y2="${520 - h3}" stroke="${roof}" stroke-width="3"/><path class="bg-flag" d="M${x + w / 2} ${520 - h3} q 18 6 34 0 q -16 10 0 18 q -18 -6 -34 0 z" fill="#b8263a"/>`;
    const dragon = spriteRects("dragon");
    const soldier = (x, y, s, flip2, weapon) => {
      const c = pick(t, "#2c3038", "#1a0c10", "#06070e");
      const g = `<circle cx="0" cy="-58" r="7"/><path d="M-7 -62 q7 -14 14 0 z"/><rect x="-8" y="-50" width="16" height="30" rx="4"/><rect x="-8" y="-22" width="6" height="22"/><rect x="2" y="-22" width="6" height="22"/><ellipse cx="-11" cy="-36" rx="7" ry="11"/>` + (weapon === "spear" ? `<line x1="10" y1="-10" x2="16" y2="-92" stroke="${c}" stroke-width="3"/><polygon points="13,-92 16,-104 19,-92"/>` : `<g class="bg-swing"><line x1="8" y1="-40" x2="34" y2="-70" stroke="${c}" stroke-width="3"/></g>`);
      return `<g transform="translate(${x} ${y}) scale(${flip2 ? -s : s} ${s})" fill="${c}" opacity="${pick(t, 0.55, 0.75, 0.8)}">${g}</g>`;
    };
    const left = [soldier(70, 860, 1.5, false, "spear"), soldier(140, 868, 1.4, false, "spear"), soldier(230, 856, 1.6, false, "sword")];
    const right = [soldier(1530, 860, 1.5, true, "spear"), soldier(1460, 868, 1.4, true, "spear"), soldier(1370, 856, 1.6, true, "sword")];
    return `<defs>${grad("sk", sky)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === "night" ? milkyWay() + stars(160, 480) + moon(300, 150, 52, "#e8e6ff") : t === "sunset" ? horizonGlow(560, "#ff5a2a") + sun(1250, 520, 90, "#ffb070", "#ff5a3a") + clouds(5, 120, 300, "#ff9a7a", 0.35) : sun(1280, 140, 44, "#fffbe6", "#ffffff") + clouds(7, 80, 280, "#ffffff", 0.8)}
    ${mountains(600, 110, pick(t, "#6c7a96", "#3a1622", "#0e1030"), 1.3)}
    ${haze(620, pick(t, "#dfe8f4", "#ff7a5a", "#1a2050"), 0.5)}
    <g class="bg-dragon"><g transform="scale(${f(170 / dragon.w)})">${dragon.rects}</g></g>
    ${hills(640, 18, pick(t, "#4a5a48", "#1a0a12", "#10122a"))}
    <rect x="560" y="430" width="480" height="210" fill="${stone}"/>
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${560 + i * 40}" y="414" width="22" height="18" fill="${stone}"/>`).join("")}
    ${tower(500, 90, 330)}${tower(1010, 90, 330)}${tower(740, 120, 420)}
    <path d="M760 640 L760 590 Q800 548 840 590 L840 640 Z" fill="${pick(t, "#2a2a38", "#0c0408", "#05050f")}"/>
    ${Array.from({ length: 5 }, (_, i) => `<line x1="${768 + i * 16}" y1="${i === 0 || i === 4 ? 600 : 568}" x2="${768 + i * 16}" y2="640" stroke="${pick(t, "#4a4a5a", "#2a1418", "#14142a")}" stroke-width="3"/>`).join("")}
    <rect x="0" y="650" width="${W}" height="16" fill="${pick(t, "#5a7a9a", "#5a1a1a", "#10183a")}" opacity=".55"/>
    <polygon points="740,640 860,640 900,700 700,700" fill="${pick(t, "#6a5a48", "#2a1810", "#14121e")}"/>
    ${lit ? `<g class="bg-flicker" filter="url(#glow)"><circle cx="740" cy="600" r="6" fill="#ffb347"/><circle cx="860" cy="600" r="6" fill="#ffb347"/></g>` : ""}
    ${hills(780, 22, pick(t, "#3a4a38", "#14080c", "#0b0c1c"), 2)}
    ${left.join("")}${right.join("")}
    <g class="bg-spark" filter="url(#glow)"><circle cx="262" cy="788" r="5" fill="#fff6c0"/><circle cx="1338" cy="788" r="5" fill="#fff6c0" style="animation-delay:2.7s"/></g>
    ${t === "night" ? fireflies(8, 520, 700, "#ffcf6a") : ""}`;
  }
  function worldtree(t) {
    const sky = pick(t, [[0, "#4a8ad8"], [0.5, "#9cd0f2"], [0.85, "#e8f6ff"], [1, "#ffffff"]], [[0, "#2a1450"], [0.45, "#b04a78"], [0.8, "#f4a060"], [1, "#ffe0a0"]], [[0, "#0b0626"], [0.45, "#2a1260"], [0.8, "#1d4f78"], [1, "#2c8a8a"]]);
    const leaves = (y, n, rmin, rmax, col, op) => Array.from({ length: n }, (_, i) => `<circle cx="${f(i / n * W + r(0, 80))}" cy="${f(y + r(0, 50))}" r="${f(r(rmin, rmax))}" fill="${col}" opacity="${op}"/>`).join("");
    const leafA = pick(t, "#3f9a5a", "#7a5a3a", "#14402f"), leafB = pick(t, "#56b86a", "#a0703a", "#1b5a3c"), leafC = pick(t, "#7ad68a", "#e0a050", "#2f9e6a");
    return `<defs>${grad("sk", sky)}${radial("glow2", [[0, pick(t, "#ffffff", "#ffe0a0", "#9ff5c8"), 0.55], [1, "#ffffff", 0]])}${grad("aurora", [[0, "#7affc8", 0], [0.5, "#7affc8", 0.35], [1, "#b07aff", 0]], false)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === "night" ? stars(200, 560, "#d7ccff") + `<g class="bg-aurora" filter="url(#blur20)"><path d="M-100 200 C 300 80, 700 260, 1100 140 S 1600 120, 1800 200 L1800 280 C 1300 200, 900 340, 500 240 S 0 260, -100 300 Z" fill="url(#aurora)"/></g>` + moon(1240, 170, 54, "#fff4d6") : t === "sunset" ? horizonGlow(500, "#ffb070") + sun(380, 470, 80, "#fff0c0", "#ffb070") : sun(1240, 150, 50, "#ffffff", "#fff8d0") + rays(1240, 150, "#ffffff", 0.18)}
    <ellipse cx="800" cy="640" rx="900" ry="200" fill="url(#glow2)"/>
    ${clouds(10, 590, 660, pick(t, "#ffffff", "#ffd8c0", "#efeaff"), pick(t, 0.85, 0.6, 0.22), "bg-drift slow")}
    ${leaves(640, 26, 50, 90, leafA, 1)}
    ${leaves(690, 30, 45, 80, leafB, 1)}
    <path d="M-40 800 C 300 730, 650 760, 820 740 S 1300 735, 1640 780 L1640 900 L-40 900 Z" fill="${pick(t, "#5a3a24", "#4a2a18", "#3a2418")}"/>
    <path d="M-40 840 C 400 800, 760 820, 940 800 S 1400 810, 1640 840 L1640 900 L-40 900 Z" fill="${pick(t, "#462c1a", "#36200f", "#2b190f")}"/>
    ${leaves(760, 22, 26, 46, leafC, 0.9)}
    ${fireflies(t === "night" ? 60 : 24, 560, 820, pick(t, "#ffffff", "#fff0b0", "#b9ffd8"))}
    ${t === "night" ? fireflies(30, 80, 560, "#bff8ff") : ""}`;
  }
  var SCENES = { forest, swamp, plains, castle, worldtree };
  function scene(id, t) {
    seed = [...id + t].reduce((s, c) => s + c.charCodeAt(0) * 97, 7);
    const key = `${id}-${t}`;
    return SCENES[id](t).replace(/id="(\w+)"/g, `id="${key}-$1"`).replace(/url\(#(\w+)\)/g, `url(#${key}-$1)`);
  }
  var cache2 = /* @__PURE__ */ new Map();
  var BG_FADE_MS = 3200;
  var fadeTimer = 0;
  function paintBackground(el8, id, time = "night", fade = false) {
    const key = `${id}-${time}`;
    if (el8.dataset.key === key) return;
    el8.dataset.key = key;
    if (!cache2.has(key)) cache2.set(key, `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" aria-hidden="true">${scene(id, time)}</svg>`);
    const swap = () => {
      const layer = document.createElement("div");
      layer.className = "bg-layer";
      layer.innerHTML = cache2.get(key);
      const old = el8.querySelector(".bg-layer");
      if (old) old.replaceWith(layer);
      else el8.prepend(layer);
      el8.dataset.bg = id;
      el8.dataset.time = time;
    };
    clearTimeout(fadeTimer);
    el8.querySelector(".bg-veil")?.remove();
    if (!fade || !el8.querySelector(".bg-layer")) return swap();
    const veil = document.createElement("div");
    veil.className = "bg-veil";
    veil.style.animationDuration = `${BG_FADE_MS}ms`;
    el8.append(veil);
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
  var loading = null;
  var onScreen = false;
  var bg = { id: "forest", time: "night" };
  var pending = null;
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
    loading ?? (loading = loadBundle().then((ok) => {
      const create = globalThis.KWArena3D;
      api2 = ok ? create?.(document.getElementById("arena3d"), { lite: arenaQuality() === "lite" }) ?? null : null;
      if (api2 && location.search.includes("debug3d")) globalThis.__arena = api2;
      if (!api2) loading = null;
      return api2;
    }));
    return loading;
  }
  async function staffPreview(canvas) {
    if (!webgl || !await loadBundle()) return null;
    const create = globalThis.KWStaffPreview;
    return create?.(canvas) ?? null;
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
    if (pending) {
      a.setup({ ...pending, bgSvg: sceneSvg(bg.id, bg.time), bgKey: `${bg.id}-${bg.time}`, time: bg.time });
      pending = null;
    }
    document.body.classList.add("has-3d");
    sizeCanvas();
    a.setActive(true);
  }
  function sizeCanvas() {
    const c = document.getElementById("arena3d");
    if (!c) return;
    c.style.width = `${Math.ceil(viewW())}px`;
    c.style.height = `${Math.ceil(viewH())}px`;
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
  function configure(s) {
    pending = s;
    if (api2 && onScreen && wanted()) void activate();
  }
  function arenaForBattle(mode3, players2, you2) {
    const me3 = players2.find((p) => p.id === you2);
    const others = players2.filter((p) => p.id !== you2);
    const art = (p) => ({ id: p.id, name: p.name, character: p.avatar, flame: flameColor(p.flame), staff: p.staff });
    configure({
      layout: "battle",
      me: me3 ? art(me3) : { id: you2, character: "wizard" },
      opp: mode3 === "boss" || !others[0] ? null : art(others[0]),
      allies: mode3 === "boss" ? others.map(art) : [],
      boss: mode3 === "boss" ? { id: "boss", svg: dragonSvg() } : null
    });
  }
  var deckKey = "";
  function arenaForDeck(v) {
    const me3 = v.players.find((p) => p.id === v.you);
    const opp = v.players.find((p) => p.id !== v.you);
    const key = `${me3?.id}:${me3?.character}:${me3?.staff}:${opp?.id}:${opp?.character}:${opp?.staff}`;
    if (key === deckKey && (!api2 || pending === null)) return;
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
    const el8 = document.createElement(tag);
    if (cls) el8.className = cls;
    if (text !== void 0) el8.textContent = String(text);
    for (const [k, v] of Object.entries(attrs)) el8.setAttribute(k, v);
    return el8;
  }
  var append = (parent, ...kids) => {
    parent.append(...kids);
    return parent;
  };
  var SCREENS = ["auth", "menu", "queue", "admin", "modes", "lobby", "prep", "battle", "results", "study", "review", "customize", "deck", "history", "progress", "daily", "friends"];
  var screenListener = () => {
  };
  var onScreen2 = (fn) => {
    screenListener = fn;
  };
  var currentScreen = () => SCREENS.find((s) => !$(s).hidden);
  var show = (screen2) => {
    SCREENS.forEach((s) => $(s).hidden = s !== screen2);
    scrollTo(0, 0);
    screenListener(screen2);
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
    const tick2 = () => {
      const left = Math.max(0, end - performance.now());
      onFrame(left, totalMs > 0 ? left / totalMs : 0);
      if (left > 0) timers.set(slot, requestAnimationFrame(tick2));
    };
    tick2();
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
  function paintNet(el8) {
    const rtt = rtts.get(el8.dataset.net ?? "");
    const q = netQuality(rtt);
    el8.className = `net q${q}`;
    el8.title = rtt == null ? "Connection: offline / measuring\u2026" : `Connection: ${["", "poor", "medium", "good"][q]} (${rtt} ms)`;
  }
  function netBars(playerId) {
    const el8 = h("span", "net");
    el8.dataset.net = playerId;
    el8.innerHTML = "<i></i><i></i><i></i>";
    paintNet(el8);
    return el8;
  }
  function setNet(map) {
    for (const [id, rtt] of Object.entries(map)) rtts.set(id, rtt);
    document.querySelectorAll(".net[data-net]").forEach(paintNet);
  }
  function picEl(url, cls = "pic") {
    if (!url) return "";
    const img = h("img", cls, void 0, { src: url, alt: "", loading: "lazy", decoding: "async" });
    img.onerror = () => img.remove();
    return img;
  }
  var beginnerFlag = false;
  var kanaBeginner = () => beginnerFlag;
  var BEGINNER_LOCK = `Master hiragana first (Study spells \u2192 \u304B\u306A), then tick "I've mastered hiragana" in Settings`;
  function lockLevelChip(label, lv) {
    if (!beginnerFlag || lv === "KANA") return label;
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
  function setProfile(p) {
    if (!p) return;
    beginnerFlag = isKanaBeginner(p.unlocks);
    const lx = levelXp(p.xp);
    $("whoLv").textContent = String(lx.level);
    $("whoLevel").textContent = `Lv ${lx.level} \xB7 ${lx.into.toLocaleString()} / ${lx.need.toLocaleString()} XP`;
    $("whoCrit").textContent = critText(p.crit);
    $("ppWins").textContent = String(p.wins ?? 0);
    $("ppLosses").textContent = String(p.losses ?? 0);
    const games = (p.wins ?? 0) + (p.losses ?? 0);
    $("ppRate").textContent = games ? `${Math.round((p.wins ?? 0) / games * 100)}%` : "\u2014";
    $("ppLearned").textContent = String(p.learned);
    $("ppToday").textContent = String(p.learnedToday ?? 0);
    $("ppStreak").textContent = String(p.streak ?? 0);
    $("ppBestStreak").textContent = String(Math.max(p.bestStreak ?? 0, p.streak ?? 0));
    for (const id of ["whoPic", "ppPic"]) {
      const el8 = $(id);
      el8.replaceChildren(p.pic ? picEl(p.pic, "pic fill") : "\u2726");
      el8.classList.toggle("has-pic", !!p.pic);
    }
    $("picRemove").hidden = !p.pic;
    $("whoCrit").title = "Crit chance today: 1% + 1% for every spell you learn today (max 50%). Resets at midnight.";
    $("whoXp").style.width = `${levelProgress(p.xp) * 100}%`;
    $("whoXp").parentElement.title = `${lx.into} / ${lx.need} XP to level ${lx.level + 1}`;
  }
  var toastTimer = 0;
  function toast(text, ms = 3500) {
    const el8 = $("toast");
    el8.textContent = text;
    el8.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => el8.hidden = true, ms);
  }
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
    const set = (id, on, icon, label) => {
      $(id).setAttribute("aria-pressed", String(on));
      $(id).replaceChildren(h("span", "ico", icon), h("span", "lbl", ` ${label} ${on ? "on" : "off"}`));
    };
    set("radioBtn", radio, "", "Music");
    set("sfxBtn", sfx2, "", "Sounds");
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
  function ago(t) {
    const m = Math.max(0, Math.round((Date.now() - t) / 6e4));
    return m < 60 ? `${m} min` : m < 60 * 24 ? `${Math.round(m / 60)} h` : `${Math.round(m / 1440)} d`;
  }
  function showAdmin(users, me3, db, onToggle) {
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
          h("td", "num", critText(u.crit ?? 0)),
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
  function modeGuideNodes(mode3) {
    const g = GUIDES[mode3];
    const ol = h("ol", "g-flow");
    for (const [icon, text] of g.steps) ol.append(append(h("li"), h("span", "g-ic", icon), h("span", "", text)));
    return [h("h3", "", g.title), g.pic(), ol, h("p", "g-foot", "Crit: 1% + 1% per spell learned today (max 50%). Playing with AI gives half XP; a forfeit gives none.")];
  }
  function renderModeGuide(mode3) {
    if (mode3 === "deck") return;
    $("modeGuide").replaceChildren(...modeGuideNodes(mode3));
  }
  function showLobby(code2, mode3, players2, you2, hostId, maxPlayers, minPlayers2) {
    $("code").textContent = code2;
    $("lobbyMode").textContent = MODE_LABEL[mode3];
    $("lobbyPlayers").replaceChildren(
      ...players2.map((p) => {
        const li = h("li");
        const av = h("span", "who-av");
        av.innerHTML = avatarSvg(p.avatar, p.id === you2 ? "me" : "opp", p.staff);
        const who = h("span", "who", p.id === you2 ? `${p.name} (you)` : p.name);
        if (p.id !== you2) markProfile(who, p);
        li.append(av, picEl(p.pic), who);
        if (p.bot) li.append(h("span", "tag ai", p.bot === "BEGINNER" ? "AI \xB7 beginner" : `AI \xB7 knows ${p.bot}`));
        else li.append(netBars(p.id), h("span", "lv", `Lv ${p.level}`));
        if (p.bot && you2 === hostId) {
          const x = h("button", "pill rm-bot", "\u2715", { title: "Remove this AI" });
          x.dataset.removeBot = p.id;
          li.append(x);
        }
        if (p.crit > 0 && !p.bot) li.append(h("span", "critv", `\u2726 ${critText(p.crit)} crit`));
        if (p.id === hostId) li.append(h("span", "tag", "host"));
        if (!p.online) li.append(h("span", "tag off", "away \u2014 seat kept"));
        if (mode3 === "deck") li.append(h("span", "tag " + (p.ready ? "ready" : "notready"), p.ready ? "\u2713 Ready" : "Not ready"));
        else if (p.bot) li.append(append(h("div", "meta"), h("span", "", levelsText(p.levels)), h("span", "hpv", `${p.maxHp} HP`)));
        else if (!p.bot) li.append(append(h("div", "meta"), h("span", "", levelsText(p.levels)), h("span", "hpv", `${p.maxHp} HP`)));
        return li;
      }),
      ...Array.from({ length: Math.max(0, maxPlayers - players2.length) }, () => h("li", "empty", mode3 === "boss" ? "Waiting for a teammate (optional)\u2026" : "Waiting for opponent\u2026"))
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
    $("levelsHint").textContent = mode3 === "deck" ? "Deck Duel draws cards from every level (N5\u2013N1). Your level picks only change your character here." : mode3 === "rapid" ? "Shared levels: both players race on the same kanji, so a change here changes it for everyone." : mode3 === "boss" ? "Each player picks their own. The dragon gets tougher when the party picks harder levels." : mode3 === "writing" ? "Each player picks their own. You will write these words by hand. Harder levels hit harder \u2014 so your opponent gets more HP." : "Each player picks their own. \u304B\u306A = hiragana, answered in romaji. Harder levels hit harder \u2014 so your opponent gets more HP.";
    const isHost = you2 === hostId;
    const canStart = players2.length >= minPlayers2;
    $("addBot").hidden = !isHost || players2.length >= maxPlayers;
    const deck2 = mode3 === "deck";
    $("levels").hidden = deck2;
    $("deckGuide").hidden = !deck2;
    $("modeGuide").hidden = deck2;
    if (!deck2) renderModeGuide(mode3);
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
    $("start").textContent = mode3 === "boss" ? players2.length === 1 ? "Start solo" : `Start \u2014 party of ${players2.length}` : "Start battle";
    $("lobbyStatus").textContent = !canStart ? "Share the code with a friend, or add an AI player to start." : isHost ? mode3 === "boss" && players2.length < maxPlayers ? `Start now, or wait for more teammates (up to ${maxPlayers}).` : "" : "Waiting for the host to start\u2026";
    show("lobby");
  }
  var selectedLevels = () => [...document.querySelectorAll("#levelChips input")].filter((i) => i.checked).map((i) => i.value);
  function showPrep(pool, durationMs, mode3) {
    $("prepSub").textContent = mode3 === "writing" ? "Memorise how each word is written. In battle you only get the meaning (and a half-second glimpse)." : "Memorise the readings. They vanish when the battle starts.";
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
  function partyPanel(el8, players2, you2) {
    const ordered = [...players2].sort((a, b) => a.id === you2 ? -1 : b.id === you2 ? 1 : 0);
    el8.replaceChildren(...ordered.map((p) => {
      const row = h("div", "party-row" + (p.id === you2 ? " me" : "") + (p.hp <= 0 ? " down" : ""));
      const pn = h("span", "n", p.id === you2 ? `${p.name} (you)` : p.name);
      if (p.id !== you2) markProfile(pn, p);
      const name = append(
        h("div", "pname"),
        picEl(p.pic),
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
    const pct = max > 0 ? Math.max(0, Math.min(100, hp / max * 100)) : 0;
    const bar = h("div", `tbar ${side}${pct <= 25 ? " low" : ""}`, void 0, { role: "meter", "aria-valuemin": "0", "aria-valuemax": String(max), "aria-valuenow": String(hp) });
    const fill = h("div", "fill");
    fill.style.width = `${pct}%`;
    bar.append(fill, h("span", "tbar-txt", text));
    return bar;
  }
  function fighterCard(el8, p, label, emptyText) {
    if (!p) {
      el8.replaceChildren(h("div", "name", emptyText));
      return;
    }
    const nameEl = h("span", "n", label);
    if (!label.endsWith("(you)")) markProfile(nameEl, p);
    const name = append(h("div", "name"), append(h("span", "n"), picEl(p.pic), nameEl, netBars(p.id), h("span", "lv", `Lv ${p.level}`), h("span", "critv", p.crit > 0 ? ` \u2726${critText(p.crit)}` : "")), h("span", "combo", p.combo >= 2 ? `\xD7${p.combo} combo` : ""));
    el8.replaceChildren(name, hpBar(p.hp, p.maxHp, `${p.name} HP`), append(h("div", "hpnum", `${p.hp} / ${p.maxHp} HP`), h("span", "lvs", `\xB7 ${levelsText(p.levels)}${p.online ? "" : " \xB7 away"}`)));
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
  function retrigger(el8, cls, ms) {
    el8.classList.remove(cls);
    void el8.offsetWidth;
    el8.classList.add(cls);
    setTimeout(() => el8.classList.remove(cls), ms);
  }
  function setupArena(mode3, players2, you2) {
    battleMode = mode3;
    const boss = mode3 === "boss";
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
    arenaForBattle(mode3, players2, you2);
    $("dragon").className = "dragon";
    $("dragon").querySelector(".sprite").innerHTML = dragonSvg();
    $("fire").hidden = true;
    $("breathWarn").hidden = true;
    $("typeArea").hidden = mode3 === "writing";
    if (mode3 === "writing") mountWriteArea("writeSlot");
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
    const el8 = $("breathWarn");
    el8.hidden = false;
    $("dragon").classList.add("inhale");
    arena()?.inhale(true);
    countdown("breath", inMs, (left) => el8.textContent = `The dragon inhales\u2026 ${Math.ceil(left / 1e3)}`);
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
    const el8 = actorEl(who);
    if (el8.classList.contains("ko")) return;
    arena()?.ko(who);
    el8.classList.add("ko");
    el8.classList.remove("onfire");
  }
  function showBattle(mode3, players2, boss, you2, countdownMs, battleMs, onTick) {
    clearStudy();
    setupArena(mode3, players2, you2);
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
    const el8 = $("inputHint");
    el8.textContent = text;
    el8.classList.toggle("warn", warn);
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
    const el8 = $("feedback");
    if (!f2) {
      el8.replaceChildren();
      el8.className = "feedback";
      return;
    }
    el8.className = "feedback " + (f2.correct ? "good" : "bad");
    $("kanji").classList.remove("gone");
    $("meaningPrompt").hidden = true;
    const word2 = (cls) => append(h("span", cls), h("span", "rk", f2.kanji, { lang: "ja" }), h("span", "rr", f2.reading, { lang: "ja" }), h("span", "", f2.meaning));
    if (f2.correct) {
      $("kanji").classList.add("cast");
      const combo = f2.combo >= 2 ? ` \xB7 \xD7${f2.combo} combo` : "";
      const big = h("span", "big" + (f2.crit ? " crit" : ""), f2.crit ? `\u2726 CRIT! ${f2.damage} damage` : `\u2713 CAST! ${f2.damage} damage`);
      el8.replaceChildren(big, word2("mean"), h("span", "sub2", `${secs(f2.responseMs ?? 0)}${combo}`));
    } else {
      if (f2.retry) {
        el8.replaceChildren(h("span", "big", "\u2717 Not quite \u2014 try again!"));
        return;
      }
      const title = f2.beaten ? "Opponent was faster!" : f2.skipped ? "\u21B7 Skipped" : f2.timedOut ? "\u2717 Too slow!" : "\u2717 MISS!";
      const kids = [h("span", "big", title), word2("reveal")];
      if (f2.recognized && !f2.skipped && !f2.timedOut) kids.push(h("span", "sub2", `The pad read: ${f2.recognized}`));
      el8.replaceChildren(...kids);
      if (answerMode === "writing" && !f2.beaten) showWrongStrokes(el8, f2.kanji);
    }
  }
  function openStrokeDialog(word2, reading, meaning) {
    const d = $("strokeDialog");
    $("sdWord").textContent = word2;
    $("sdInfo").textContent = `${reading} \u2014 ${meaning}`;
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
    const el8 = $("log");
    el8.replaceChildren(h("span", "", text));
    if (kanji) el8.append(h("span", "k", ` ${kanji}`, { lang: "ja" }));
  }
  var REASONS = {
    ko: "Knock-out",
    time: "Time up",
    forfeit: "A player left the battle",
    boss_slain: "The Black Dragon has fallen",
    party_wiped: "The party was burned to ash"
  };
  function showResults(mode3, players2, you2, winnerId, teamWon, reason, stats, opts = {}) {
    stopCountdown();
    const outcome = mode3 === "boss" ? teamWon ? "win" : "loss" : winnerId === null ? "draw" : winnerId === you2 ? "win" : "loss";
    $("resultMode").replaceChildren(modeBadge(mode3), h("span", "rm-name", MODE_LABEL[mode3]), ...opts.history ? [h("span", "rm-date", dateTime(opts.history.at))] : []);
    const title = $("resultTitle");
    title.className = `result-title ${outcome}`;
    title.textContent = outcome === "win" ? "VICTORY" : outcome === "loss" ? "DEFEAT" : "DRAW";
    if (mode3 === "boss") $("resultReason").textContent = teamWon ? REASONS.boss_slain : reason === "time" ? "Time up \u2014 the dragon survived" : REASONS[reason];
    else $("resultReason").textContent = reason === "time" ? "Time up \u2014 most HP left wins" : REASONS[reason];
    $("resultActions").hidden = !!opts.history;
    $("historyBackRow").hidden = !opts.history;
    const otherId = Object.keys(stats).find((id) => id !== you2);
    const me3 = stats[you2];
    const other = otherId ? stats[otherId] : void 0;
    const otherName = players2.find((p) => p.id === otherId)?.name ?? (mode3 === "boss" ? "Ally" : "Opponent");
    const rows = [
      [mode3 === "boss" ? "Damage to dragon" : "Damage dealt", (s) => String(s.damageDealt)],
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
        const el8 = h("div", "h", nameOf2(id));
        return p ? markProfile(el8, p) : el8;
      }));
      for (const [label, fmt] of rows) cmp.append(h("div", "lbl", label), h("div", "v", fmt(me3)), ...allies.map((id) => h("div", "v", fmt(stats[id]))));
    } else {
      cmp.style.gridTemplateColumns = "";
      const on = h("div", "h r", other ? otherName : "");
      const op = players2.find((p) => p.id === otherId);
      if (op) markProfile(on, op);
      cmp.replaceChildren(h("div", "h me", "You"), h("div"), on);
      for (const [label, fmt] of rows) cmp.append(h("div", "v", fmt(me3)), h("div", "lbl", label), h("div", "v r", other ? fmt(other) : ""));
    }
    const byKanji = new Map(me3.words.map((w) => [w.kanji, w]));
    $("struggledBox").hidden = me3.struggled.length === 0;
    $("struggled").replaceChildren(
      ...me3.struggled.map((k) => {
        const w = byKanji.get(k);
        const card = append(h("div", "card clickable", void 0, { tabindex: "0", title: "Stroke order" }), h("div", "k", w.kanji, { lang: "ja" }), h("div", "r", w.reading, { lang: "ja" }), h("div", "m", w.meaning));
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
    const el8 = $("xpLine");
    el8.hidden = false;
    el8.replaceChildren(h("span", "", gained > 0 ? `+${gained} XP` : "No XP \u2014 the match was forfeited"));
    if (levelUp) el8.append(h("span", "lvup", `Level ${level2}!`));
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
  function modeBadge(mode3) {
    return h("span", `mode-badge ${mode3}`, MODE_ICON[mode3], { lang: "ja", title: MODE_LABEL[mode3], "aria-label": MODE_LABEL[mode3] });
  }
  function characterEl(character, mode3, side = "me") {
    const el8 = h("span", "char-sprite");
    const heroes = ["goblin", "knight", "witch", "wizard"];
    el8.innerHTML = mode3 === "deck" && heroes.includes(character) ? heroSvg(character, side) : avatarSvg(["goblin", "kid", "human", "knight", "witch", "wizard"].includes(character) ? character : "wizard", side);
    el8.title = character[0].toUpperCase() + character.slice(1);
    return el8;
  }
  function markProfile(el8, p) {
    el8.dataset.profile = p.id;
    if (p.bot) el8.dataset.bot = p.bot;
    if (p.name) el8.dataset.name = p.name;
    el8.classList.add("plink");
    el8.setAttribute("role", "button");
    el8.tabIndex = 0;
    el8.title = "View profile";
    return el8;
  }
  var dateTime = (at) => new Date(at).toLocaleString(locale(), { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  function showProfileCard(anchor, p) {
    const pop = $("otherPop");
    const body = [];
    if (p === "loading") body.push(h("p", "hint", "Loading\u2026"));
    else if (p === "missing") body.push(h("p", "hint", "This player can no longer be viewed."));
    else if ("bot" in p) {
      body.push(
        append(h("div", "pp-head"), h("div", "pp-pic", "AI"), append(h("div"), h("div", "pp-name", p.name), h("div", "pp-level", p.bot === "BEGINNER" ? "AI player \xB7 beginner" : `AI player \xB7 knows ${p.bot}`))),
        h("p", "hint", "A computer opponent. It gets words right about as often as a learner of its level would.")
      );
    } else {
      const pic = h("div", "pp-pic" + (p.pic ? " has-pic" : ""), p.pic ? "" : p.name.slice(0, 1).toUpperCase());
      const img = picEl(p.pic, "pic fill");
      if (img) pic.append(img);
      const games = p.wins + p.losses;
      body.push(
        append(h("div", "pp-head"), pic, append(h("div"), h("div", "pp-name", p.name), h("div", "pp-level", `Lv ${p.level}`))),
        append(
          h("div", "pp-stats"),
          append(h("div"), h("b", "", p.wins), h("span", "", "wins")),
          append(h("div"), h("b", "", p.losses), h("span", "", "losses")),
          append(h("div"), h("b", "", games ? `${Math.round(100 * p.wins / games)}%` : "\u2014"), h("span", "", "win rate")),
          append(h("div"), h("b", "", p.learned), h("span", "", "spells learned"))
        ),
        append(
          h("div", "pp-stats pp-streaks"),
          append(h("div", "streak-box"), h("b", "", p.streak ?? 0), h("span", "", "login streak (days)")),
          append(h("div", "streak-box best"), h("b", "", Math.max(p.bestStreak ?? 0, p.streak ?? 0)), h("span", "", "best streak (days)"))
        ),
        h("p", "hint", `Playing since ${new Date(p.since).toLocaleDateString(locale(), { year: "numeric", month: "short", day: "numeric" })}`)
      );
    }
    pop.replaceChildren(...body);
    pop.hidden = false;
    const r2 = zrect(anchor);
    const w = Math.min(300, viewW() - 24);
    pop.style.width = `${w}px`;
    pop.style.left = `${Math.max(12, Math.min(viewW() - w - 12, r2.left + r2.width / 2 - w / 2))}px`;
    const below = r2.bottom + 8;
    pop.style.top = `${below + 240 > viewH() ? Math.max(12, r2.top - 8 - pop.offsetHeight) : below}px`;
  }
  var hideProfileCard = () => {
    $("otherPop").hidden = true;
  };
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
  function paintFlame(el8, flame) {
    el8.dataset.flame = flame ?? "blue";
    flameShades(flame).forEach((c, i) => el8.style.setProperty(`--f${i}`, c));
  }

  // src/client/gamekb.ts
  var KEY4 = "kb:gamekb";
  var ROWS = ["qwertyuiop", "asdfghjkl-", "zxcvbnm"];
  var touch = () => matchMedia("(pointer: coarse)").matches;
  var gameKbPref = () => {
    try {
      return localStorage.getItem(KEY4) !== "system";
    } catch {
      return true;
    }
  };
  function setGameKbPref(on) {
    try {
      localStorage.setItem(KEY4, on ? "game" : "system");
    } catch {
    }
  }
  var gameKbAvailable = touch;
  var active = false;
  function input() {
    return $("answer");
  }
  function preview() {
    const v = input().value;
    $("gkPreview").textContent = currentAnswerMode() === "romaji" || !v ? v : romajiToHiragana(v);
  }
  function type(ch) {
    const i = input();
    if (answerLocked()) return;
    i.value += ch;
    i.dispatchEvent(new Event("input", { bubbles: true }));
    preview();
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
    const rows = ROWS.map((r2, i) => {
      const row = document.createElement("div");
      row.className = "gk-row";
      for (const c of r2) row.append(key(c, "ch", () => type(c)));
      if (i === 2) row.append(key("\u232B", "wide back", () => {
        const el8 = input();
        el8.value = el8.value.slice(0, -1);
        el8.dispatchEvent(new Event("input", { bubbles: true }));
        preview();
      }));
      return row;
    });
    const last = document.createElement("div");
    last.className = "gk-row";
    last.append(
      key("Skip", "wide skip", () => $("skip").click()),
      key("n'", "ch", () => type("'")),
      key("Cast \u23CE", "wide enter", () => {
        input().dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
        preview();
      })
    );
    const pv = document.createElement("div");
    pv.id = "gkPreview";
    pv.className = "gk-preview";
    pv.lang = "ja";
    kb.replaceChildren(pv, ...rows, last);
  }
  function setGameKb(on) {
    on = on && touch() && gameKbPref();
    if (on && !$("gameKb").childElementCount) build();
    active = on;
    $("gameKb").hidden = !on;
    document.body.classList.toggle("game-kb", on);
    const i = input();
    i.inputMode = on ? "none" : "";
    if (on) preview();
  }
  $("answer").addEventListener("input", () => {
    if (active) preview();
  });
  function gameKbReset() {
    if (active) preview();
  }

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
    { id: "grand-wizard", name: "Grand Wizard", how: "Reach level 10.", icon: "star", color: "#ffd479", tier: 3 }
  ];
  var ACH_PREFIX = "ach:";
  var achById = (id) => ACHIEVEMENTS.find((a) => a.id === id);
  var COMBO_ACHIEVEMENTS = [[5, "combo-5"], [10, "combo-10"], [20, "combo-20"]];

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
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = cutoff;
    const g = c.createGain();
    g.gain.setValueAtTime(1e-4, at);
    g.gain.exponentialRampToValueAtTime(level2, at + 0.9);
    g.gain.setValueAtTime(level2, at + dur - 0.6);
    g.gain.exponentialRampToValueAtTime(1e-4, at + dur + 0.5);
    lp.connect(g).connect(bus);
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
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(350, at);
    lp.frequency.linearRampToValueAtTime(1300, at + Math.min(0.5, dur * 0.5));
    lp.frequency.linearRampToValueAtTime(600, at + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(1e-4, at);
    g.gain.exponentialRampToValueAtTime(level2, at + 0.12);
    g.gain.setValueAtTime(level2 * 0.85, at + dur * 0.75);
    g.gain.exponentialRampToValueAtTime(1e-4, at + dur);
    lp.connect(g).connect(bus);
    const s = c.createGain();
    s.gain.value = 0.45;
    g.connect(s).connect(reverb);
    for (const d of [-9, 9]) {
      const o = c.createOscillator();
      o.type = "sawtooth";
      o.frequency.value = midi(n);
      o.detune.value = d;
      o.connect(lp);
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
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 420;
    const g = c.createGain();
    g.gain.setValueAtTime(1e-4, at);
    g.gain.exponentialRampToValueAtTime(0.05, at + 0.3);
    g.gain.exponentialRampToValueAtTime(1e-4, at + 1.6);
    o.connect(lp).connect(g).connect(ambBus);
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
    star: '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/>'
  };
  function badgeSvg(a, locked) {
    const c = a.color;
    const id = `g${a.id.replace(/\W/g, "")}${locked ? "l" : ""}`;
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${locked ? "#2a2840" : "#2b2160"}"/><stop offset="1" stop-color="${locked ? "#16152a" : "#120c34"}"/></linearGradient></defs><path d="M32 3l25 14.5v29L32 61 7 46.5v-29z" fill="url(#${id})" stroke="${c}" stroke-width="3"/><path d="M32 9.5l19.5 11.3v22.4L32 54.5 12.5 43.2V20.8z" fill="none" stroke="${c}" stroke-opacity=".35" stroke-width="1.2"/><g transform="translate(20 20)" fill="none" stroke="${c}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" color="${c}"><g transform="scale(1)">${GLYPH[a.icon]}</g></g>${Array.from({ length: a.tier }, (_, i) => `<circle cx="${32 + (i - (a.tier - 1) / 2) * 7}" cy="52" r="2.2" fill="${c}"/>`).join("")}</svg>`;
  }
  var has = (unlocks2, id) => !!unlocks2?.includes(ACH_PREFIX + id);
  function renderAchievements(box, unlocks2 = []) {
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
      const st = document.createElement("small");
      st.textContent = locked ? "Locked" : "Unlocked \u2713";
      tip.append(t, s, st);
      b.append(tip);
      grid.append(b);
    }
    const head = document.createElement("h3");
    head.append("Achievements ");
    const sm = document.createElement("small");
    sm.className = "hint";
    sm.textContent = `${earned} / ${ACHIEVEMENTS.length}`;
    head.append(sm);
    box.replaceChildren(head, grid);
  }
  var shown = /* @__PURE__ */ new Set();
  var queue = [];
  var playing = false;
  function celebrate(id) {
    if (shown.has(id) || !achById(id)) return;
    shown.add(id);
    queue.push(id);
    if (!playing) next();
  }
  function next() {
    const id = queue.shift();
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
    const h3 = document.createElement("span");
    h3.textContent = a.how;
    txt.append(k, n, h3);
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
    let seen = null;
    try {
      seen = JSON.parse(localStorage.getItem(key) ?? "null");
    } catch {
    }
    if (!Array.isArray(seen)) ids.forEach((id) => shown.add(id));
    else for (const id of ids) if (!seen.includes(id)) celebrate(id);
    try {
      localStorage.setItem(key, JSON.stringify(ids));
    } catch {
    }
  }
  function comboMilestone(combo, unlocks2) {
    for (const [n, id] of COMBO_ACHIEVEMENTS) if (combo >= n && !has(unlocks2, id)) celebrate(id);
  }

  // src/client/friendrail.ts
  var $2 = $;
  var el2 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  var RAIL_SCREENS = /* @__PURE__ */ new Set(["menu", "queue", "admin", "modes", "lobby", "results", "study", "customize", "history", "progress", "daily", "friends"]);
  var friends = [];
  var signedIn = false;
  var timer = 0;
  var collapsed = { online: false, offline: true };
  function setRailUser(on) {
    signedIn = on;
    if (!on) {
      $2("friendRail").hidden = true;
      $2("railFab").hidden = true;
      clearInterval(timer);
    }
  }
  function railScreen(screen2) {
    const show3 = signedIn && RAIL_SCREENS.has(screen2);
    $2("friendRail").hidden = !show3;
    $2("railFab").hidden = !show3;
    setOpen(false);
    document.body.classList.toggle("has-rail", show3);
    clearInterval(timer);
    if (show3) {
      void refreshRail();
      timer = window.setInterval(() => void refreshRail(), 2e4);
    }
  }
  function setOpen(on) {
    $2("friendRail").classList.toggle("open", on);
    $2("railFab").setAttribute("aria-expanded", String(on));
  }
  $2("railFab").onclick = (e) => {
    e.stopPropagation();
    setOpen(!$2("friendRail").classList.contains("open"));
  };
  document.addEventListener("pointerdown", (e) => {
    const t = e.target;
    if ($2("friendRail").classList.contains("open") && !t.closest("#friendRail, #railFab, #friendDialog, #otherPop")) setOpen(false);
  });
  async function refreshRail() {
    try {
      friends = (await api.friends()).friends;
    } catch {
      return;
    }
    render();
  }
  var avatar = (f2) => {
    const a = el2("span", "fr-av");
    if (f2.pic) {
      const img = el2("img");
      img.src = f2.pic;
      img.alt = "";
      a.append(img);
    } else a.textContent = f2.username.slice(0, 1).toUpperCase();
    a.append(el2("i", "fr-dot"));
    return a;
  };
  function render() {
    const accepted = friends.filter((f2) => f2.status === "accepted").sort((a, b) => a.username.localeCompare(b.username));
    const online = accepted.filter((f2) => f2.online), offline = accepted.filter((f2) => !f2.online);
    const incoming = friends.filter((f2) => f2.status === "incoming").length;
    const section = (key, title, list2) => {
      const head = el2("button", "fr-sec", "");
      head.append(el2("b", "fr-count", list2.length), el2("span", "fr-sec-name", title), el2("span", "fr-chev", collapsed[key] ? "\u25BE" : "\u25B4"));
      head.setAttribute("aria-expanded", String(!collapsed[key]));
      head.onclick = () => {
        collapsed[key] = !collapsed[key];
        render();
      };
      const rows = collapsed[key] ? [] : list2.map((f2) => {
        const r2 = el2("div", "fr-row" + (f2.online ? " online" : ""));
        markProfile(r2, { id: f2.id, name: f2.username, bot: null });
        r2.title = `${f2.username} \u2014 view profile`;
        const txt = el2("span", "fr-txt");
        txt.append(el2("span", "fr-name", f2.username), el2("small", "fr-status", f2.online ? f2.activity ?? "Online" : "Offline"));
        r2.append(avatar(f2), txt, el2("span", "fr-lv", `Lv ${f2.level ?? 0}`));
        return r2;
      });
      return [head, ...rows];
    };
    const list = $2("railList");
    list.replaceChildren(
      ...section("online", "Online", online),
      ...section("offline", "Offline", offline),
      ...accepted.length ? [] : [el2("p", "fr-empty", "No friends yet \u2014 add someone below.")]
    );
    $2("railOnline").textContent = String(online.length);
    $2("railFabCount").textContent = String(online.length);
    $2("railFab").classList.toggle("alert", incoming > 0);
    const badge = $2("railReqBadge");
    badge.hidden = incoming === 0;
    badge.textContent = String(incoming);
  }
  function openDialog(tab) {
    const d = $2("friendDialog");
    for (const b of d.querySelectorAll("[data-ftab]")) b.classList.toggle("on", b.dataset.ftab === tab);
    $2("fdAdd").hidden = tab !== "add";
    $2("fdRequests").hidden = tab !== "requests";
    $2("fdMsg").textContent = "";
    renderRequests();
    if (!d.open) d.showModal();
    if (tab === "add") setTimeout(() => $2("fdName").focus(), 30);
  }
  function renderRequests() {
    const box = $2("fdReqList");
    const incoming = friends.filter((f2) => f2.status === "incoming");
    const outgoing = friends.filter((f2) => f2.status === "outgoing");
    const act = (text, cls, fn) => {
      const b = el2("button", `pill ${cls}`, text);
      b.onclick = async () => {
        b.disabled = true;
        try {
          friends = (await fn()).friends;
          render();
          renderRequests();
        } catch (e) {
          toast(e.message);
          b.disabled = false;
        }
      };
      return b;
    };
    const row = (f2, buttons, note) => {
      const r2 = el2("div", "fd-row");
      const t = el2("span", "fr-txt");
      t.append(el2("span", "fr-name", f2.username), el2("small", "fr-status", note));
      r2.append(avatar(f2), t, ...buttons);
      return r2;
    };
    box.replaceChildren(
      ...incoming.length ? [el2("h4", "", `Requests (${incoming.length})`), ...incoming.map((f2) => row(f2, [act("Accept", "primary", () => api.acceptFriend(f2.id)), act("Decline", "", () => api.removeFriend(f2.id))], "wants to be friends"))] : [el2("p", "hint", "No friend requests right now.")],
      ...outgoing.length ? [el2("h4", "", "Sent requests"), ...outgoing.map((f2) => row(f2, [act("Cancel", "", () => api.removeFriend(f2.id))], "request sent"))] : []
    );
  }
  $2("railAdd").onclick = () => openDialog("add");
  $2("railReq").onclick = () => openDialog("requests");
  for (const b of document.querySelectorAll("#friendDialog [data-ftab]")) b.onclick = () => openDialog(b.dataset.ftab);
  $2("fdClose").onclick = () => $2("friendDialog").close();
  $2("fdAdd").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input2 = $2("fdName");
    const name = input2.value.trim();
    if (!name) return;
    try {
      const r2 = await api.addFriend(name);
      friends = r2.friends;
      $2("fdMsg").textContent = r2.result === "accepted" ? `You and ${name} are now friends!` : r2.result === "exists" ? `You already asked ${name}.` : `Request sent to ${name}.`;
      input2.value = "";
      render();
    } catch (err) {
      $2("fdMsg").textContent = err.message;
    }
  });
  $2("railList").addEventListener("click", () => $2("friendDialog").close());

  // src/client/voice.ts
  var KEY5 = "kb:voice";
  var prefs2 = (() => {
    try {
      return { on: true, vol: 0.9, ...JSON.parse(localStorage.getItem(KEY5) ?? "{}") };
    } catch {
      return { on: true, vol: 0.9 };
    }
  })();
  var save = () => {
    try {
      localStorage.setItem(KEY5, JSON.stringify(prefs2));
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
  var voiceAvailable = () => !!synth;
  var getVoicePrefs = () => ({ ...prefs2, name: voice?.name ?? null, male });
  function setVoiceVolume(v) {
    prefs2.vol = Math.max(0, Math.min(1, v));
    prefs2.on = prefs2.vol > 0;
    save();
  }
  function say(kana) {
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
    if (!synth || !prefs2.on || prefs2.vol <= 0 || document.visibilityState !== "visible") return Promise.resolve();
    if (!voice) pick2();
    if (!voice && !synth.getVoices().length) return Promise.resolve();
    return new Promise((done) => {
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
          done();
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
  var $3 = $;
  var el3 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  var access = { level: 0, admin: false };
  function setModeAccess(level2, admin) {
    access = { level: level2, admin };
    for (const card of document.querySelectorAll(".mode-card[data-mode]")) {
      const mode3 = card.dataset.mode;
      const locked = !canPlay(mode3);
      card.classList.toggle("locked", locked);
      card.dataset.lock = locked ? `Unlocks at level ${MODE_LEVEL[mode3]}` : "";
    }
  }
  var canPlay = (mode3) => modeUnlocked(mode3, xpForLevel(access.level), access.admin);
  var lockText = (mode3) => `${MODE_LABEL[mode3]} unlocks at level ${MODE_LEVEL[mode3]} \u2014 win a few games first. (A friend can still invite you.)`;
  var stage = "off";
  var hooks;
  function initTutorial(h3) {
    hooks = h3;
  }
  var inTutorialBattle = () => stage === "battle";
  var CARDS = [
    { title: "Welcome, apprentice", body: "In Kanji Wizards every spell is a Japanese word. Learn a word \u2014 and you can cast it at your opponent." },
    { title: "Do you know hiragana?", body: `Kanji are read with hiragana (\u304B\u306A). If you can already read all of it, you start with kanji (N5 to N1). If not, you start with \u304B\u306A only \u2014 the kanji levels open once you tick "I've mastered hiragana" in Settings.`, choice: true },
    {
      title: "Cast by reading",
      body: "A kanji appears; type how it is read \u2014 in hiragana, or in romaji with a normal keyboard \u2014 and press Enter. Fast and right in a row hits harder.",
      extra: tryIt
    },
    { title: "Study makes you stronger", body: "Study spells is a flashcard deck. Every spell you learn today raises your critical-hit chance, and words you miss in battle come back there to review." },
    { title: "More to unlock", body: "You start with Kanji Reading and Rapid. Kanji Writing and the Boss fight unlock at level 1, Deck Duel at level 2. There is also a Daily challenge, Progress, Friends \u2014 and monthly goals with rewards." },
    { title: "\u304B\u306A first, then kanji", body: `Beginners: study \u304B\u306A in Study spells until you know it by heart. Then tick "I've mastered hiragana" in Settings (the sliders button, top-right) \u2014 and the kanji levels N5 to N1 open for studying and battles.` },
    { title: "Your first battle", body: "Ready? You'll study 10 easy words for a minute, then duel a beginner AI with them." }
  ];
  function tryIt() {
    const box = el3("div", "tut-try");
    const k = el3("span", "tut-k", "\u5C71");
    k.lang = "ja";
    const input2 = el3("input");
    input2.placeholder = "type its reading: yama";
    input2.lang = "ja";
    input2.autocomplete = "off";
    const msg = el3("span", "hint", "Mountain \u2014 try it!");
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
    show2(0);
  }
  function show2(i) {
    const c = CARDS[i];
    const box = $3("tutorial");
    const dots = el3("div", "tut-dots");
    CARDS.forEach((_, j) => dots.append(el3("i", j === i ? "on" : "")));
    const card = el3("div", "tut-card");
    const actions = el3("div", "tut-actions");
    const last = i === CARDS.length - 1;
    const next3 = el3("button", "big", last ? "Fight a beginner AI" : "Next");
    const skip2 = el3("button", "pill", last ? "Maybe later" : "Skip tutorial");
    if (c.choice) {
      const yes = el3("button", "big", "Yes \u2014 I know hiragana");
      const no = el3("button", "big alt", "I'm a beginner");
      const pickKana = (mastered) => {
        yes.disabled = no.disabled = true;
        void hooks.kana(mastered).finally(() => show2(i + 1));
      };
      yes.onclick = () => pickKana(true);
      no.onclick = () => pickKana(false);
      next3.hidden = true;
      queueMicrotask(() => actions.append(no, yes));
    }
    next3.onclick = () => {
      if (!last) return show2(i + 1);
      stage = "battle";
      box.hidden = true;
      hooks.firstBattle();
    };
    skip2.onclick = () => finish();
    actions.append(skip2, next3);
    card.append(dots, el3("h2", "", c.title), el3("p", "", c.body), ...c.extra ? [c.extra()] : [], actions);
    box.replaceChildren(card);
    box.hidden = false;
    next3.focus();
  }
  function finish() {
    stage = "off";
    $3("tutorial").hidden = true;
    coach(null);
    void api.tutorialDone().catch(() => {
    });
  }
  function tutorialScreen(screen2) {
    if (stage !== "battle") return;
    if (screen2 === "prep") coach("Read the 10 words \u2014 reading and meaning. When the battle starts, they come back as kanji only. Press Ready when you're done.");
    else if (screen2 === "battle") coach("Type the reading of the kanji (hiragana or romaji) and press Enter. Don't know it? Esc skips. Keep your HP above the AI's!");
    else if (screen2 === "results") {
      coach("Well cast! Words you missed are now in Study spells \u2192 Struggling. Level up to unlock Writing, Boss and Deck Duel.");
      setTimeout(finish, 12e3);
    } else if (screen2 === "menu") finish();
  }
  function coach(text) {
    const c = $3("coach");
    if (!text) {
      c.hidden = true;
      return;
    }
    const close = el3("button", "pill", "Got it");
    close.onclick = () => {
      c.hidden = true;
    };
    c.replaceChildren(el3("b", "", "Tip"), el3("span", "", text), close);
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
    overtimeGapMs: 2200,
    // the answer stays up before the next kanji
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
  var $4 = $;
  var COLOR_NAME = { lightblue: "Light blue", blue: "Blue", yellow: "Yellow", green: "Green", red: "Red" };
  function h2(tag, cls = "", text) {
    const el8 = document.createElement(tag);
    if (cls) el8.className = cls;
    if (text !== void 0) el8.textContent = String(text);
    return el8;
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
    $4("dkAbility").onclick = () => {
      const me3 = view?.players.find((p) => p.id === view.you);
      if (me3?.character && CHARACTER_INFO[me3.character].passive) {
        const used = [me3.wizardCardsUsed ? "cards used" : "+2 cards ready", me3.wizardManaUsed ? "mana used" : "+30 mana ready"].join(" \xB7 ");
        return toast(`${CHARACTER_INFO[me3.character].power} (${used})`, 6e3);
      }
      hooks2.send({ type: "deck_ability" });
    };
    $4("dkChatForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const input2 = $4("dkChatInput");
      const text = input2.value.trim();
      if (text) hooks2.send({ type: "chat", text });
      input2.value = "";
    });
    renderGuide($4("deckGuide"));
  }
  var seenChat = /* @__PURE__ */ new Set();
  function chatMessages(msgs) {
    const log = $4("dkChatLog");
    for (const m of msgs) {
      if (seenChat.has(m.id)) continue;
      seenChat.add(m.id);
      const line = h2("div", "chat-line" + (m.from === hooks2.me() ? " mine" : ""));
      line.append(h2("b", "", m.from === hooks2.me() ? "You" : m.name), h2("span", "", m.text));
      log.append(line);
      if (m.from !== hooks2.me() && view && view.phase !== "over") sfx.flip();
    }
    while (log.children.length > 60) log.firstElementChild.remove();
    log.scrollTop = log.scrollHeight;
  }
  function clearChat() {
    seenChat.clear();
    $4("dkChatLog").replaceChildren();
  }
  var renderDeckGuide = (el8) => renderGuide(el8);
  function renderGuide(el8) {
    const sec = (title, ...kids) => {
      const s = h2("section", "g-sec");
      s.append(h2("h4", "", title), ...kids);
      return s;
    };
    const p = (t) => h2("p", "", t);
    const heroes = h2("div", "g-heroes");
    for (const c of DECK_CHARACTERS) {
      const row = h2("div", "g-hero");
      const av = h2("div", "g-av");
      av.innerHTML = heroSvg(c, "me");
      const txt = h2("div");
      txt.append(h2("b", "", CHARACTER_INFO[c].name), h2("span", "", CHARACTER_INFO[c].power));
      row.append(av, txt);
      heroes.append(row);
    }
    const cards = h2("div", "g-cards");
    for (const col of CARD_COLORS) {
      const spec = CARD_SPECS[col];
      const fig = h2("div", "g-card");
      fig.append(cardEl({ cardId: "", color: col }), h2("span", "", `${spec.kind === "attack" ? `${spec.amount} damage` : spec.kind === "heal" ? `heals ${spec.amount}` : `+${spec.amount} mana`} \xB7 ${spec.cost ? `${spec.cost} mana` : "free"}`));
      cards.append(fig);
    }
    const flow = h2("ol", "g-flow");
    for (const [icon, t] of [
      ["\u{1F9B8}", "Pick a hero (30 s)."],
      ["\u{1FA99}", "Coin flip, then draft: take 2 face-down cards at a time (20 s for both) until you each have 10. You see colours, not kanji."],
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
      const li = h2("li");
      li.append(h2("span", "g-ic", icon), h2("span", "", t));
      flow.append(li);
    }
    el8.replaceChildren(
      h2("h3", "", "How Deck Duel works"),
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
    const el8 = h2(opts.button ? "button" : "div", `dkc c-${c.color}${opts.big ? " big" : ""}${!c.kanji && !opts.big ? " back" : ""}`);
    if (opts.button) el8.disabled = !!opts.disabled;
    el8.title = `${COLOR_NAME[c.color]} \u2014 ${spec.label}: ${spec.kind === "attack" ? `${spec.amount} damage` : spec.kind === "heal" ? `heal ${spec.amount}` : `+${spec.amount} mana`}${spec.cost ? `, costs ${spec.cost} mana` : ""}`;
    if (opts.big) return el8;
    el8.append(h2("span", "dkc-cost", spec.cost ? `${spec.cost}\u25C6` : "free"));
    if (c.kanji) {
      const k = h2("span", "dkc-k", c.kanji);
      k.lang = "ja";
      const r2 = h2("span", "dkc-r", c.reading ?? "");
      r2.lang = "ja";
      el8.append(k, r2);
    } else {
      el8.append(h2("span", "dkc-lbl", spec.label), h2("span", "dkc-amt", spec.kind === "attack" ? `${spec.amount}` : spec.kind === "heal" ? `+${spec.amount}\u2665` : `+${spec.amount}\u25C6`));
    }
    return el8;
  }
  var powered = (p) => !!p.character && p.character !== "wizard" && p.abilityActive > 0;
  function playerPanel(el8, p, mine) {
    paintFlame(el8, p.flame);
    el8.classList.toggle("powered", powered(p));
    arena()?.onfire(mine ? "me" : "opp", powered(p), flameColor(p.flame));
    const av = h2("div", "dk-av");
    av.innerHTML = p.character ? heroSvg(p.character, mine ? "me" : "opp", p.staff) : "";
    const name = h2("div", "dk-name");
    const nm = h2("span", "", mine ? `${p.name} (you)` : p.name);
    if (!mine) markProfile(nm, { id: p.id, name: p.name, bot: /\(AI (N\d)\)$/.exec(p.name)?.[1] ?? null });
    name.append(picEl(p.pic), nm);
    if (p.character) name.append(h2("span", "tag", CHARACTER_INFO[p.character].name));
    if (p.abilityActive > 0 && p.character !== "wizard") name.append(h2("span", "tag", `${p.character === "goblin" ? "Frenzy" : CHARACTER_INFO[p.character].power.split(":")[0]} \xD7${p.abilityActive}`));
    name.append(netBars(p.id));
    const bar = (cls, value, max, text) => {
      const b = h2("div", `dkbar ${cls}`);
      const fill = h2("div", "fill");
      fill.style.width = `${Math.max(0, Math.min(1, value / max)) * 100}%`;
      b.append(fill, h2("span", "dkbar-txt", text));
      return b;
    };
    const hp = bar("hp-bar" + (p.hp / p.maxHp <= 0.25 ? " low" : ""), p.hp, p.maxHp, `\u2665 ${p.hp} / ${p.maxHp}`);
    const mana = bar("mana-bar", p.mana, p.maxMana, `\u25C6 ${p.mana} / ${p.maxMana}`);
    const counts2 = h2("div", "dk-counts");
    counts2.append(h2("span", "cc total", `${p.handSize} card${p.handSize === 1 ? "" : "s"}`));
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
    el8.replaceChildren(av, name, hp, mana, counts2);
  }
  function renderDeck(v) {
    view = v;
    const me3 = v.players.find((p) => p.id === v.you);
    const opp = v.players.find((p) => p.id !== v.you);
    if (opp.character) arenaForDeck(v);
    show("deck");
    playerPanel($4("dkMe"), me3, true);
    playerPanel($4("dkOpp"), opp, false);
    const overlay = $4("dkOverlay");
    if (v.phase === "characters" || v.phase === "draft") {
      renderCast(v);
      stopCountdown("dkTurn");
      $4("dkBanner").textContent = "";
      return v.phase === "characters" ? renderCharacters(v, me3, opp) : renderDraft(v, me3);
    }
    overlay.hidden = true;
    if (v.phase === "overtime") {
      countdown("dkMatch", v.overtimeLeft, (left) => $4("dkClock").textContent = `OT ${clock(left)}`);
    } else {
      countdown("dkMatch", v.matchLeftMs, (left) => $4("dkClock").textContent = clock(left));
    }
    const banner = $4("dkBanner");
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
    countdown("dkTurn", deadline, (left) => banner.textContent = `${label} \xB7 ${Math.ceil(left / 1e3)}s`);
    const canPlay2 = myTurn && !v.casting && Date.now() >= revealUntil;
    $4("dkHand").replaceChildren(...v.hand.map((c) => {
      const costFactor = myTurn ? v.turn.costFactor : 1;
      const el8 = cardEl(c, { button: true, costFactor, disabled: !canPlay2 || Math.ceil(CARD_SPECS[c.color].cost * costFactor) > me3.mana });
      el8.onclick = () => {
        sfx.flip();
        hooks2.send({ type: "deck_play", cardId: c.cardId });
      };
      return el8;
    }));
    $4("dkOppHand").replaceChildren(...Array.from({ length: opp.handSize }, () => h2("div", "dkc back face-down")));
    const ab = $4("dkAbility");
    const ch = me3.character;
    ab.innerHTML = ch ? heroSvg(ch, "me", me3.staff) : "";
    const cd = me3.abilityCooldown;
    if (ch) {
      const label2 = h2("span", "ab-name");
      label2.append(h2("b", "", "Omnipotence"), h2("small", "", CHARACTER_INFO[ch].passive ? "passive \xB7 tap for info" : cd > 0 ? `ready in ${cd} turn${cd === 1 ? "" : "s"}` : `${DECK_RULES.abilityCost}\u25C6`));
      ab.append(label2);
    }
    if (ch && !CHARACTER_INFO[ch].passive && cd > 0) ab.append(h2("span", "ab-cd", String(cd)));
    ab.title = ch ? CHARACTER_INFO[ch].power : "";
    ab.classList.toggle("passive", !!ch && !!CHARACTER_INFO[ch].passive);
    ab.classList.toggle("active", me3.abilityActive > 0);
    ab.disabled = !ch || !CHARACTER_INFO[ch].passive && (cd > 0 || me3.mana < DECK_RULES.abilityCost || !myTurn || !!v.casting || Date.now() < revealUntil);
    renderCast(v);
    renderList(v);
  }
  function renderList(v) {
    const box = $4("dkList");
    const head = h2("h4", "", "Your kanji");
    if (!v.deckList) {
      box.replaceChildren(head, h2("p", "hint", v.phase === "overtime" ? "Overtime \u2014 the cards are gone: type the readings!" : "Hidden on your turn. While your opponent plays, the kanji in your hand show up here."));
      return;
    }
    const ul = h2("ul", "kanji-list");
    for (const k of v.deckList) {
      const li = h2("li");
      const kj = h2("span", "kl-k", k.kanji);
      kj.lang = "ja";
      const rd = h2("span", "kl-r", k.reading);
      rd.lang = "ja";
      li.append(kj, rd, h2("span", "kl-m", k.meaning));
      ul.append(li);
    }
    box.replaceChildren(append2(head, h2("small", "", ` \xB7 ${v.deckList.length}`)), h2("p", "hint", "Which card is which stays secret."), ul);
  }
  var append2 = (el8, ...kids) => {
    el8.append(...kids);
    return el8;
  };
  var castKey = "";
  function renderCast(v) {
    const box = $4("dkCast");
    const c = v.casting;
    if (!c) {
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
      $4("dkFeedback").replaceChildren();
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
      const top = h2("div", "dkc-half");
      const shown2 = c.card.kanji ?? "\uFF1F".repeat(Math.min(c.chars, 3));
      const k = h2("span", `dkc-k l${Math.min(4, [...shown2].length)}` + (c.card.kanji ? "" : " unknown"), shown2);
      k.lang = "ja";
      top.append(k);
      const bottom = h2("div", "dkc-half bottom");
      if (c.overtime) bottom.append(h2("span", "dkc-r", c.rapid ? c.rapid.level : ""), h2("span", "dkc-m", c.rapid ? `Reading? \xB7 ${c.rapid.damage} damage` : "Reading?"));
      else {
        const r2 = h2("span", "dkc-r", c.card.reading ?? "");
        r2.lang = "ja";
        bottom.append(r2, h2("span", "dkc-m", c.card.meaning ?? ""));
      }
      card.append(top, bottom);
      const actions = h2("div", "cast-actions");
      otInput = null;
      if (c.overtime) {
        stopCountdown("dkRead");
        const input2 = h2("input", "ot-input");
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
        actions.append(input2, h2("div", "cast-timer", "First to type its reading hits \xB7 wrong? try again"));
        setTimeout(() => input2.focus(), 30);
      } else if (mine && c.stage === "read") {
        const t = h2("div", "cast-timer");
        countdown("dkRead", c.readLeftMs ?? 0, (left) => t.textContent = `Read the meaning \u2014 the kanji shows in ${Math.ceil(left / 1e3)} s`);
        const b = h2("button", "big cast-btn", "Ready \u25B8");
        b.onclick = () => {
          b.disabled = true;
          hooks2.send({ type: "deck_cast_ready", castId: c.castId });
        };
        actions.append(t, b);
      } else if (mine && c.stage === "look") {
        stopCountdown("dkRead");
        const b = h2("button", "big cast-btn go", "CAST! \u2726");
        b.onclick = () => {
          b.disabled = true;
          sfx.flip();
          arena()?.thrust();
          hooks2.send({ type: "deck_cast_go", castId: c.castId });
        };
        actions.append(h2("div", "cast-timer", "Memorise it \u2014 it disappears when you cast"), b);
      } else if (!mine) {
        stopCountdown("dkRead");
        const who = v.players.find((p) => p.id === c.ownerId)?.name ?? "Your opponent";
        actions.append(h2("div", "cast-timer", c.stage === "read" ? "Reading the spell\u2026" : c.stage === "look" ? "Studying the kanji\u2026" : `${who} is writing\u2026`));
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
      if (fresh) $4("dkFeedback").replaceChildren();
    }
    const writeNow = mine && !c.overtime && c.stage === "write";
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
    const overlay = $4("dkOverlay");
    overlay.hidden = false;
    const title = h2("h2", "", me3.character ? `Waiting for ${opp.name}\u2026` : "Choose your hero");
    const grid = h2("div", "char-pick");
    for (const c of DECK_CHARACTERS) {
      const b = h2("button", "char-card" + (me3.character === c ? " on" : ""));
      b.disabled = !!me3.character;
      const av = h2("div", "ch-av");
      av.innerHTML = heroSvg(c, "me");
      b.append(av, h2("span", "ch-name", CHARACTER_INFO[c].name), h2("span", "ch-power", CHARACTER_INFO[c].power));
      b.onclick = () => hooks2.send({ type: "deck_character", character: c });
      grid.append(b);
    }
    overlay.replaceChildren(backButton(v), title, grid, h2("p", "sub", `Same HP (${DECK_RULES.hp}) for both. ${DECK_RULES.maxMana} mana, +${DECK_RULES.manaPerTurn} every turn. ${DECK_RULES.chooseMs / 1e3} s to choose a card (its mana is paid right away), then read the meaning, press Ready to see the kanji and CAST! to write it \u2014 ${DECK_RULES.castMs / 1e3} s for the whole spell. Hero power: ${DECK_RULES.abilityCost} mana, ${DECK_RULES.abilityCooldown} turns cooldown. Out of cards \u2192 a new draft round. Cards: ${CARD_COLORS.map((col) => {
      const s = CARD_SPECS[col];
      return `${COLOR_NAME[col].toLowerCase()} ${s.kind === "attack" ? `${s.amount} dmg` : s.kind === "heal" ? `heal ${s.amount}` : `+${s.amount}\u25C6`}${s.cost ? ` (${s.cost}\u25C6)` : ""}`;
    }).join(" \xB7 ")}.`));
  }
  var coinShown = false;
  function renderDraft(v, me3) {
    const d = v.draft;
    const overlay = $4("dkOverlay");
    overlay.hidden = false;
    const mine = d.picker === v.you;
    const head = h2("div", "center");
    if (!coinShown) {
      coinShown = true;
      head.append(h2("div", "coin"));
    }
    if (v.round > 1) head.append(h2("p", "round-tag", `Round ${v.round} \u2014 new cards! HP, mana and powers stay as they are.`));
    head.append(h2("h2", "", d.coinWinner === v.you ? "You won the coin flip \u2014 you pick first" : "Your opponent won the coin flip"));
    const status = h2("p", "sub");
    const pickedNow = d.pool.filter((c) => c.takenBy === v.you).length;
    const kept = me3.handSize - pickedNow;
    countdown("dkDraft", d.deadlineMs, (left) => status.textContent = `${mine ? `Your pick \u2014 ${d.picksLeft} left` : "Opponent is picking"} \xB7 ${Math.ceil(left / 1e3)}s \xB7 picked ${pickedNow}/10${kept > 0 ? ` (+${kept} kept)` : ""}`);
    const board = h2("div", "draft-board");
    for (const c of d.pool) {
      const el8 = cardEl({ cardId: c.cardId, color: c.color }, { button: true, disabled: !mine || !!c.takenBy });
      if (c.takenBy) el8.classList.add("taken");
      el8.onclick = () => {
        sfx.flip();
        hooks2.send({ type: "deck_pick", cardId: c.cardId });
      };
      board.append(el8);
    }
    overlay.replaceChildren(backButton(v), head, status, board, h2("p", "hint", "You only see the colour \u2014 the kanji stays hidden until the card is played."));
  }
  function backButton(v) {
    const b = h2("button", "back dk-back", "\u2190 Back to lobby");
    b.hidden = v.round > 1;
    b.onclick = () => hooks2.send({ type: "back_to_lobby" });
    return b;
  }
  function deckEvent(e) {
    if (!view) return;
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
        toast(`${e.playerId === me3 ? "You" : name(e.playerId)} used ${CHARACTER_INFO[e.character].power.split(":")[0]}!`);
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
    const card = $4("dkCast").querySelector(".dkc.big");
    const fb = $4("dkFeedback");
    const who = e.playerId === me3 ? "You" : view.players.find((p) => p.id === e.playerId)?.name ?? "";
    const spec = e.overtime ? { label: "Rapid hit", kind: "attack", amount: e.amount, cost: 0 } : CARD_SPECS[e.color];
    if (!e.ok) {
      fb.className = "feedback bad";
      fb.replaceChildren(h2("span", "big", e.overtime ? "\u2717 Nobody got it" : e.playerId === me3 ? "\u2717 The spell fizzles" : `\u2717 ${who} missed`), h2("span", "sub2", `${e.kanji} \xB7 ${e.reading} \xB7 ${e.meaning}${e.recognized ? ` \u2014 read: ${e.recognized}` : ""}`));
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
      const panel = $4(e.targetId === me3 ? "dkMe" : "dkOpp");
      setTimeout(() => {
        panel.classList.remove("fx-bolt", "fx-frost", "fx-fire");
        void panel.offsetWidth;
        panel.classList.add(`fx-${CARD_FX[e.color]}`);
        setTimeout(() => panel.classList.remove(`fx-${CARD_FX[e.color]}`), 1100);
      }, 500);
    }
    fb.className = "feedback good";
    fb.replaceChildren(h2("span", "big", `\u2713 ${who}: ${spec.label} ${spec.kind === "attack" ? `\u2212${e.amount}` : spec.kind === "heal" ? `+${e.amount} \u2665` : `+${e.amount} \u25C6`}`));
    if (e.refund) fb.append(h2("span", "refund", ` +${e.refund}\u25C6 back`));
    if (e.overtime) fb.append(h2("span", "sub2", `${e.kanji} \xB7 ${e.reading} \xB7 ${e.meaning}`));
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
      const target = zrect($4(towardsMe ? "dkMe" : "dkOpp"));
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
    const card = h2("div", `dkc c-${e.color} big reveal ${e.ok ? "ok" : "bad"}`);
    const top = h2("div", "dkc-half");
    const k = h2("span", `dkc-k l${Math.min(4, [...e.kanji].length)}`, e.kanji);
    k.lang = "ja";
    top.append(k);
    const bottom = h2("div", "dkc-half bottom");
    const r2 = h2("span", "dkc-r", e.reading);
    r2.lang = "ja";
    bottom.append(r2, h2("span", "dkc-m", e.meaning));
    card.append(h2("span", "reveal-badge", e.ok ? "\u2713" : "\u2717"), top, bottom);
    const label = h2("div", "cast-timer", e.ok ? "Correct!" : "The correct kanji");
    const strokesBox = h2("div", "dk-reveal-strokes");
    $4("dkCast").replaceChildren(card, label, strokesBox);
    if (!e.ok && e.playerId === hooks2.me()) showWrongStrokes(strokesBox, e.kanji);
    revealUntil = Date.now() + REVEAL_MS;
    clearTimeout(revealTimer);
    revealTimer = window.setTimeout(() => {
      revealUntil = 0;
      if (!view?.casting) {
        $4("dkCast").replaceChildren();
        $4("dkFeedback").replaceChildren();
      }
      if (view) renderDeck(view);
    }, REVEAL_MS);
  }
  function ripCard(card) {
    const r2 = zrect(card);
    const wrap = h2("div", "rip");
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
    stopCountdown("dkMatch");
    stopCountdown("dkTurn");
    stopCountdown("dkDraft");
  };

  // src/client/queue.ts
  var QUEUE_MODES = ["reading", "writing", "rapid", "boss"];
  var KEY6 = "kb:queue";
  var load3 = () => {
    try {
      return { modes: ["reading", "rapid"], levels: ["N5"], ...JSON.parse(localStorage.getItem(KEY6) ?? "{}") };
    } catch {
      return { modes: ["reading", "rapid"], levels: ["N5"] };
    }
  };
  var save2 = (s) => {
    try {
      localStorage.setItem(KEY6, JSON.stringify(s));
    } catch {
    }
  };
  var send = () => {
  };
  var me = () => "";
  var tick = 0;
  var searching = false;
  function guideHover(el8, mode3) {
    const pop = $("guidePop");
    const open = () => {
      pop.replaceChildren(...modeGuideNodes(mode3));
      pop.hidden = false;
      const r2 = zrect(el8);
      const w = Math.min(380, viewW() - 24);
      pop.style.width = `${w}px`;
      pop.style.left = `${Math.max(12, Math.min(viewW() - w - 12, r2.left))}px`;
      const below = r2.bottom + 10;
      pop.style.top = `${below + pop.offsetHeight > viewH() - 8 ? Math.max(8, r2.top - 10 - pop.offsetHeight) : below}px`;
    };
    const close = () => {
      pop.hidden = true;
    };
    el8.addEventListener("mouseenter", open);
    el8.addEventListener("mouseleave", close);
    el8.addEventListener("focusin", open);
    el8.addEventListener("focusout", close);
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
  var picked = (id) => [...document.querySelectorAll(`#${id} input`)].filter((i) => i.checked).map((i) => i.value);
  var pick3 = "battle";
  function remember() {
    save2({ modes: picked("qModes"), levels: picked("qLevels"), pick: pick3 });
  }
  function choose(p, silent = false) {
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
      c.addEventListener("click", () => choose(c.dataset.q));
      c.addEventListener("keydown", (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          choose(c.dataset.q);
        }
      });
    });
    $("qStart").onclick = () => {
      askNotifyPermission();
      if (pick3 === "deck") return send({ type: "queue", modes: ["deck"] });
      const modes = picked("qModes"), levels = picked("qLevels");
      if (!modes.length) return toast("Tick at least one mode");
      if (!levels.length) return toast("Tick at least one level");
      send({ type: "queue", modes, levels });
    };
    $("qCancel").onclick = () => send({ type: "queue_cancel" });
  }
  function openQueue() {
    const s = load3();
    $("qModes").replaceChildren(...QUEUE_MODES.map((m) => {
      const open = canPlay(m);
      const c = chip(m, MODE_LABEL[m] + (open ? "" : " \xB7 locked"), open && s.modes.includes(m), "qm");
      if (!open) {
        c.classList.add("locked");
        c.querySelector("input").disabled = true;
        c.title = lockText(m);
      }
      guideHover(c, m);
      return c;
    }));
    const deckCard = document.querySelector('#queuePick .queue-card[data-q="deck"]');
    deckCard.classList.toggle("locked", !canPlay("deck"));
    $("qLevels").replaceChildren(...LEVELS.map((l) => lockLevelChip(chip(l, LEVEL_LABEL[l], s.levels.includes(l) && (!kanaBeginner() || l === "KANA"), "ql"), l)));
    choose(s.pick ?? "battle", true);
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
    const started = Date.now() - ((msg.now ?? 0) - (msg.since ?? 0));
    const others = (msg.searching ?? 1) - 1;
    const boss = (msg.modes ?? []).includes("boss") ? ` \xB7 Boss needs 4 players: ${Math.min(4, msg.boss ?? 1)} / 4 queued` : "";
    $("qInfo").textContent = `${(msg.modes ?? []).map((m) => MODE_LABEL[m]).join(" \xB7 ")} \u2014 ${others > 0 ? `${others} other player${others === 1 ? "" : "s"} searching` : "no one else searching yet"}${boss}`;
    if (!searching) {
      searching = true;
      clearInterval(tick);
      const paint = () => {
        const s = Math.floor((Date.now() - started) / 1e3);
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
    const set = (x, y, c) => {
      if (x >= 0 && y >= 0 && x < G && y < G) g[y][x] = c;
    };
    for (let t = 0; t <= 25; t++) {
      const x = 1 + t, y = 30 - t;
      if (t <= 1) set(x, y, "B");
      else if (t <= 7) {
        set(x, y, "b");
        set(x + 1, y, "b");
        if (t >= 4 && t <= 6) set(x, y - 1, "b");
      } else if (t <= 9) {
        set(x, y, "m");
        set(x + 1, y, "m");
        set(x, y - 1, "m");
      } else {
        set(x, y, "w");
        set(x + 1, y, "W");
        set(x, y - 1, "w");
      }
    }
    const hx = (y) => 31 - y;
    for (let f2 = 0; f2 < 4; f2++) {
      const y0 = 11 + 2 * f2;
      for (const y of [y0, y0 + 1]) {
        const x0 = hx(y) - 2, x1 = hx(y) + 6;
        for (let x = x0; x <= x1; x++) {
          if (y === y0 + 1 && x === x0) continue;
          set(x, y, y === y0 + 1 && x > x0 + 1 ? "S" : "s");
        }
      }
    }
    for (let y = 10; y <= 18; y++) for (let x = hx(y) + 7; x <= Math.min(31, hx(y) + 11); x++) set(x, y, x >= hx(y) + 10 ? "S" : "s");
    for (let x = hx(9) - 2; x <= hx(9) + 4; x++) set(x, 9, "s");
    for (let x = hx(10) - 3; x <= hx(10) + 2; x++) set(x, 10, x <= hx(10) - 1 ? "s" : "S");
    for (let x = hx(8) + 1; x <= hx(8) + 5; x++) set(x, 8, "s");
    for (let y = 3; y <= 16; y++) for (let x = hx(y) + 12; x <= 31; x++) if (x - (hx(y) + 12) < 4) set(x, y, x === hx(y) + 12 ? "C" : "c");
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

  // src/shared/version.ts
  var VERSION = "0.9.8.1";

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
      /** onDraw: called while a stroke is being drawn (for live spectating) */
      __publicField(this, "onDraw", () => {
      });
      /** Eraser: rubbing over strokes removes them (whole strokes, so the drawing stays easy to read). */
      __publicField(this, "erasing", false);
      __publicField(this, "eraserAt", null);
      __publicField(this, "cells", 1);
      __publicField(this, "rubbing", false);
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
    /** Resize for a word of n characters (capped at 4 cells wide; longer words just write smaller). */
    setCells(n) {
      this.cells = Math.max(1, Math.min(4, n));
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
      const last = this.current[this.current.length - 1];
      if (Math.hypot(p[0] - last[0], p[1] - last[1]) < MIN_DIST) return;
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
  var $5 = $;
  var onProfile = () => {
  };
  var onProfileChange = (fn) => {
    onProfile = fn;
  };
  function counts(el8, c) {
    el8.innerHTML = "";
    for (const [cls, n, label] of [["c-new", c.new, "new"], ["c-learn", c.learning, "learning"], ["c-due", c.due, "to review"]]) {
      const s = document.createElement("span");
      s.className = cls;
      const b = document.createElement("b");
      b.textContent = String(n);
      s.append(b, label);
      el8.append(s);
    }
  }
  function levelChips(selected) {
    const box = $5("studyLevels");
    box.replaceChildren(...LEVELS.map((lv) => {
      const label = document.createElement("label");
      label.className = "chip" + (selected.includes(lv) ? " on" : "");
      const input2 = document.createElement("input");
      input2.type = "checkbox";
      input2.value = lv;
      input2.checked = selected.includes(lv);
      label.append(input2, LEVEL_LABEL[lv]);
      return lockLevelChip(label, lv);
    }));
  }
  async function openStudy() {
    show("study");
    try {
      const s = await api.study();
      render2(s);
    } catch (e) {
      toast(e.message);
    }
  }
  function render2(s) {
    levelChips(s.studyLevels);
    counts($5("countsAll"), s.decks.all);
    counts($5("countsStruggle"), s.decks.struggling);
    $5("studyCrit").textContent = `\u2726 ${critText(s.profile.crit)} crit today \xB7 ${s.profile.learnedToday} learned today (+1% each, max 50%) \xB7 ${s.profile.learned} learned in total`;
    const notice = $5("studyNotice");
    notice.hidden = !s.notice;
    notice.textContent = s.notice ? `${s.notice} new spell${s.notice === 1 ? "" : "s"} added to \u201CAll spells\u201D \u2014 happy studying!` : "";
    if (!s.studyLevels.length && !s.decks.all.total) {
      notice.hidden = false;
      notice.textContent = "Tick one or more levels under \u201CAll spells\u201D to get 25 new spells today (and every day).";
    }
    const has2 = (c) => c.new + c.learning + c.due > 0;
    $5("studyAll").disabled = !has2(s.decks.all);
    $5("studyStruggle").disabled = !has2(s.decks.struggling);
    onProfile(s.profile);
  }
  $5("studyLevels").addEventListener("change", async () => {
    const levels = [...document.querySelectorAll("#studyLevels input")].filter((i) => i.checked).map((i) => i.value);
    try {
      render2(await api.setStudyLevels(levels));
    } catch (e) {
      toast(e.message);
    }
  });
  var queue2 = [];
  var deck = "all";
  var current = null;
  var flipped = false;
  var busy = false;
  async function startSession(d) {
    deck = d;
    show("review");
    $5("reviewDone").hidden = true;
    try {
      queue2 = (await api.queue(d)).cards;
    } catch (e) {
      toast(e.message);
      queue2 = [];
    }
    next2();
  }
  function next2() {
    current = queue2.shift() ?? null;
    flipped = false;
    const done = !current;
    $5("flash").hidden = done;
    $5("showAnswer").hidden = done;
    $5("rateRow").hidden = true;
    $5("reviewDone").hidden = !done;
    $5("reviewLeft").textContent = done ? "" : `${queue2.length + 1} left \xB7 ${deck === "all" ? "All spells" : "Struggling"}`;
    if (!current) return;
    $5("fcKanji").textContent = current.kanji;
    $5("fcLevel").textContent = LEVEL_LABEL[current.level] + (current.state === "new" ? " \xB7 new" : "");
    $5("fcReading").textContent = current.reading;
    $5("fcMeaning").textContent = current.meaning;
    $5("fcBack").hidden = true;
    $5("fcStrokes").hidden = true;
    $5("fcStrokeBox").hidden = true;
    const card = $5("flash");
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
    $5("fcBack").hidden = false;
    $5("showAnswer").hidden = true;
    $5("rateRow").hidden = false;
    $5("fcStrokes").hidden = !/[\p{Script=Han}々]/u.test(current.kanji);
  }
  function strokes() {
    if (!current || !flipped || $5("fcStrokes").hidden) return;
    const box = $5("fcStrokeBox");
    box.hidden = false;
    void showStrokeOrder(box, current.kanji);
  }
  $5("fcStrokes").onclick = (e) => {
    e.stopPropagation();
    strokes();
  };
  async function rate(r2) {
    if (!current || !flipped || busy) return;
    busy = true;
    const card = current;
    try {
      const res = await api.review(card.vocabId, r2);
      $5("whoCrit").textContent = `\u2726 ${critText(res.crit)} crit`;
      if (r2 === "again") queue2.splice(Math.min(3, queue2.length), 0, { ...card, state: "learning", intervals: { again: "1m", hard: "6m", good: "10m", easy: "4d" } });
      else if (r2 === "hard" && card.state !== "review") queue2.splice(Math.min(6, queue2.length), 0, card);
    } catch (e) {
      toast(e.message);
    }
    busy = false;
    next2();
  }
  $5("showAnswer").onclick = flip;
  $5("flash").onclick = flip;
  for (const b of document.querySelectorAll("#rateRow .rate")) b.onclick = () => void rate(b.dataset.rating);
  addEventListener("keydown", (e) => {
    if ($5("review").hidden || e.target instanceof HTMLInputElement) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      flipped ? void rate("good") : flip();
    }
    const n = ["1", "2", "3", "4"].indexOf(e.key);
    if (n >= 0 && flipped) void rate(["again", "hard", "good", "easy"][n]);
    if ((e.key === "s" || e.key === "S") && flipped) strokes();
  });
  $5("studyAll").onclick = () => void startSession("all");
  $5("studyStruggle").onclick = () => void startSession("struggling");
  $5("reviewBack").onclick = () => void openStudy();
  $5("reviewDoneBack").onclick = () => void openStudy();
  var custTab = "staff";
  var picked2 = {};
  var cust = null;
  var preview2 = null;
  var previewTried = false;
  var staffThumbs = {};
  var el4 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  function openCustomize(profile2, isAdmin = false, onTimeChange = () => {
  }) {
    cust = { profile: profile2, isAdmin, onTimeChange };
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
    preview2 = await staffPreview($5("staffCanvas"));
    if (preview2) staffThumbs = Object.fromEntries(preview2.thumbs(STAFFS.map((s) => s.id), 200, 200).map((u, i) => [STAFFS[i].id, u]));
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
  function custItems(profile2, isAdmin) {
    const lvl = levelOf(profile2.xp);
    const best = Math.max(profile2.bestStreak ?? 0, profile2.streak ?? 0);
    const time = resolveTime(getTimePref());
    if (custTab === "staff") {
      return STAFFS.map((s) => ({
        id: s.id,
        name: s.name,
        blurb: s.blurb,
        locked: !isAdmin && !staffUnlocked(s.id, best, profile2.unlocks),
        lock: s.season ? `${monthName(s.season)} goals` : s.streak ? `${s.streak}-day streak` : "",
        lockedToast: s.season ? `The ${s.name} is the ${monthName(s.season)} reward \u2014 complete that month's goals (see Progress)${s.season === thisMonth() ? " \u2014 it's on now!" : ""}` : `Log in ${s.streak} days in a row to unlock the ${s.name} (your best: ${best})`,
        equipped: (profile2.staff ?? "verdant") === s.id,
        tile: () => {
          if (staffThumbs[s.id]) {
            const img = document.createElement("img");
            img.src = staffThumbs[s.id];
            img.alt = "";
            return img;
          }
          const g = el4("div", "pixel-staff");
          g.innerHTML = pixelStaffSvg(s.id);
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
        locked: !isAdmin && lvl < b.level,
        lock: `Level ${b.level}`,
        lockedToast: `Reach level ${b.level} to unlock ${b.name}`,
        equipped: profile2.background === b.id,
        tile: () => {
          const d = el4("div", "bg-thumb");
          d.innerHTML = backgroundThumb(b.id, time);
          return d;
        },
        equip: () => api.setBackground(b.id)
      }));
    }
    return FLAMES.map((f2) => ({
      id: f2.id,
      name: `${f2.name} flames`,
      blurb: f2.season ? `${monthName(f2.season)} reward: complete that month's goals (Progress page). Wraps you at 5 in a row and during your Omnipotence.` : "Wraps you at 5 correct casts in a row (Reading, Writing, Rapid, Boss) and while your Omnipotence (hero power) is active in Deck Duel. Everyone sees your colour.",
      locked: !isAdmin && !flameUnlocked(f2.id, profile2.xp, profile2.unlocks),
      lock: f2.season ? `${monthName(f2.season)} goals` : `Level ${f2.level}`,
      lockedToast: f2.season ? `${f2.name} flames are the ${monthName(f2.season)} reward \u2014 complete that month's goals (see Progress)${f2.season === thisMonth() ? " \u2014 it's on now!" : ""}` : `Reach level ${f2.level} to unlock ${f2.name} flames`,
      equipped: (profile2.flame ?? "blue") === f2.id,
      tile: () => {
        const d = el4("span", "flame-dot big");
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
    omni: () => "Omnipotence: the flames of a 5\xD7 combo in battle, and of your Omnipotence (hero power) in Deck Duel. More colours unlock as you level up."
  };
  function renderCustomize() {
    if (!cust) return;
    const { profile: profile2, isAdmin, onTimeChange } = cust;
    for (const b of document.querySelectorAll("#custTabs .cust-tab")) {
      const on = b.dataset.tab === custTab;
      b.classList.toggle("on", on);
      b.setAttribute("aria-selected", String(on));
    }
    const items = custItems(profile2, isAdmin);
    const sel = items.find((i) => i.id === picked2[custTab]) ?? items.find((i) => i.equipped) ?? items[0];
    $5("custSub").textContent = CUST_SUB[custTab](profile2);
    const times = $5("bgTimes");
    times.hidden = custTab !== "arena";
    if (custTab === "arena") {
      const pref = getTimePref();
      times.replaceChildren(...TIMES.map((t) => {
        const b = el4("button", "pill" + (t.id === pref ? " on" : ""), t.id === "auto" ? `Cycle (now: ${resolveTime(pref)})` : t.id === "day" ? "Day" : t.id === "sunset" ? "Sunset" : "Night");
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
    $5("custGrid").className = `cust-grid ${custTab}`;
    $5("custGrid").replaceChildren(...items.map((it) => {
      const b = el4("button", "cust-item" + (it === sel ? " sel" : "") + (it.equipped ? " equipped" : "") + (it.locked ? " locked" : ""));
      b.setAttribute("aria-pressed", String(it === sel));
      const pic = el4("div", "ci-pic");
      pic.append(it.tile());
      b.append(pic, el4("div", "ci-name", it.name), el4("div", "ci-state", it.equipped ? "\u2713 Equipped" : it.locked ? `Locked \xB7 ${it.lock}` : "Unlocked"));
      b.onclick = () => {
        picked2[custTab] = it.id;
        renderCustomize();
      };
      b.ondblclick = () => void equip(it);
      return b;
    }));
    const canvas = $5("staffCanvas");
    const stage2 = $5("custStage2");
    const showCanvas = custTab === "staff" && !!preview2;
    canvas.hidden = !showCanvas;
    stage2.hidden = showCanvas;
    $5("custStage").dataset.tab = custTab;
    if (custTab === "staff") {
      if (preview2) preview2.show(sel.id);
      else {
        const g = el4("div", "pixel-staff big");
        g.innerHTML = pixelStaffSvg(sel.id);
        stage2.replaceChildren(g);
      }
    } else if (custTab === "arena") {
      stage2.innerHTML = backgroundThumb(sel.id, resolveTime(getTimePref()));
    } else {
      const w = el4("div", "wizard me onfire");
      paintFlame(w, sel.id);
      const sprite = el4("div", "sprite");
      sprite.innerHTML = avatarSvg(avatarFor(profile2.studyLevels), "me", profile2.staff);
      w.append(el4("div", "aura"), sprite);
      const badge = el4("div", "combo-hud hot omni-badge");
      badge.style.setProperty("--flame", FLAMES.find((f2) => f2.id === sel.id).color);
      badge.append(el4("b", "", "\xD75"), el4("span", "", "COMBO"));
      stage2.replaceChildren(w, badge);
    }
    const btn = el4("button", "big cust-equip", sel.equipped ? "\u2713 Equipped" : sel.locked ? sel.lock.startsWith("Level") ? `Unlocks at ${sel.lock.replace("Level", "level")}` : sel.lock.endsWith("goals") ? `Unlocks with the ${sel.lock}` : `Unlocks at a ${sel.lock}` : "Equip");
    btn.disabled = sel.equipped;
    btn.classList.toggle("locked", sel.locked);
    btn.onclick = () => void equip(sel);
    const info = [el4("h3", "", sel.name), el4("p", "sub", sel.blurb)];
    if (custTab === "staff") {
      const row = el4("div", "cust-2d");
      const who = el4("div", "c2-char");
      who.innerHTML = avatarSvg(avatarFor(profile2.studyLevels), "me", sel.id);
      const st = el4("div", "pixel-staff");
      st.innerHTML = pixelStaffSvg(sel.id);
      row.append(who, st, el4("span", "hint", "2D arena"));
      info.push(row);
    }
    $5("custInfo").replaceChildren(...info, btn);
  }

  // src/client/progressui.ts
  var $6 = $;
  var el5 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  var DAY_MS = 864e5;
  var shift = (day, n) => new Date(Date.parse(day) + n * DAY_MS).toISOString().slice(0, 10);
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
  async function openProgress(myUnlocks = []) {
    unlocks = myUnlocks;
    show("progress");
    $6("progGrid").replaceChildren(el5("p", "hint", "Loading\u2026"));
    try {
      page = await api.progress();
    } catch (e) {
      toast(e.message);
      return;
    }
    const busiest = LEVELS.map((l) => [l, page.mastery[l].filter(([, m]) => m > 0).length]).sort((a, b) => b[1] - a[1])[0];
    if (busiest && busiest[1] > 0) level = busiest[0];
    render3();
  }
  function render3() {
    if (!page) return;
    renderWeek(page.activity);
    $6("progMonth").replaceChildren(...monthNodes(page.month));
    renderHeatmap(page.activity);
    renderAchievements($6("progAch"), unlocks);
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
    const now = sum(7, 0), before = sum(14, 7);
    const stat = (label, v, prev) => {
      const d = v - prev;
      const box = el5("div", "pw-stat");
      box.append(
        el5("b", "", v.toLocaleString()),
        el5("span", "", label),
        el5("small", d > 0 ? "up" : d < 0 ? "down" : "", prev || v ? `${d > 0 ? "+" : ""}${d.toLocaleString()} vs last week` : "\u2014")
      );
      return box;
    };
    const grid = el5("div", "pw-grid");
    grid.append(stat("days active", now.days, before.days), stat("cards passed", now.reviews, before.reviews), stat("games", now.games, before.games), stat("wins", now.wins, before.wins), stat("XP", now.xp, before.xp));
    const bars = el5("div", "pw-bars");
    const max = Math.max(1, ...Array.from({ length: 7 }, (_, i) => score(activity.find((a) => a.day === shift(t, i - 6)))));
    for (let i = -6; i <= 0; i++) {
      const day = shift(t, i);
      const a = activity.find((x) => x.day === day);
      const bar = el5("div", "pw-bar");
      const fill = el5("i");
      fill.style.height = `${Math.round(score(a) / max * 100)}%`;
      bar.title = `${day}: ${a ? `${a.reviews} cards, ${a.games} games` : "nothing"}`;
      bar.append(fill, el5("span", "", (/* @__PURE__ */ new Date(`${day}T12:00:00`)).toLocaleDateString(locale(), { weekday: "narrow" })));
      bars.append(bar);
    }
    $6("progWeek").replaceChildren(el5("h3", "", "This week"), grid, bars);
  }
  var score = (a) => a ? a.reviews + a.games * 5 + (a.login ? 1 : 0) : 0;
  function monthNodes(m) {
    const [kind, id] = m.reward.split(":");
    const reward = kind === "flame" ? FLAMES.find((f2) => f2.id === id) : STAFFS.find((s) => s.id === id);
    const sw = el5("span", `reward-img ${kind}`);
    if (kind === "flame") {
      const w = el5("div", "wizard me onfire");
      paintFlame(w, id);
      const sprite = el5("div", "sprite");
      sprite.innerHTML = wizardSvg("me");
      w.append(el5("div", "aura"), sprite);
      sw.append(w);
    } else sw.innerHTML = pixelStaffSvg(id);
    sw.title = `${reward?.name}${kind === "flame" ? " flames" : ""}`;
    const monthName2 = (/* @__PURE__ */ new Date(`${m.month}-15T12:00:00`)).toLocaleDateString(locale(), { month: "long" });
    const head = el5("h3", "", `${monthName2}: ${m.name} season`);
    const rw = el5("div", "reward-line");
    rw.append(sw, el5("span", "", m.unlocked ? `Unlocked: ${reward?.name}${kind === "flame" ? " flames" : ""} \u2014 equip it in Customize` : `Reward: ${reward?.name}${kind === "flame" ? " flames" : ""} (only this month)`));
    const goals = el5("div", "goals");
    for (const g of m.goals) {
      const row = el5("div", "goal" + (g.value >= g.target ? " done" : ""));
      const bar = el5("div", "goal-bar");
      const fill = el5("i");
      fill.style.width = `${Math.round(g.value / g.target * 100)}%`;
      bar.append(fill);
      row.append(el5("span", "goal-label", `${g.value >= g.target ? "\u2713 " : ""}${g.label}`), el5("span", "goal-num", `${g.value} / ${g.target}`), bar);
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
    const max = Math.max(1, ...calActivity.map(score));
    const [y, m] = calMonth.split("-").map(Number);
    const first = `${calMonth}-01`;
    const days2 = new Date(Date.UTC(y, m, 0)).getUTCDate();
    const lead = ((/* @__PURE__ */ new Date(`${first}T12:00:00Z`)).getUTCDay() + 6) % 7;
    const box = $6("progHeat");
    const oldest = shift(t, -182).slice(0, 7);
    const prev = el5("button", "pill cal-nav", "\u2039");
    const next3 = el5("button", "pill cal-nav", "\u203A");
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
    const title = el5("b", "cal-title", new Date(Date.UTC(y, m - 1, 15)).toLocaleDateString(locale(), { month: "long", year: "numeric", timeZone: "UTC" }));
    const head = el5("div", "cal-head");
    head.append(prev, title, next3);
    const grid = el5("div", "cal-grid");
    grid.append(el5("span", "cal-wd wk", "Wk"));
    for (let i = 0; i < 7; i++) grid.append(el5("span", "cal-wd", new Date(Date.UTC(2024, 0, 1 + i, 12)).toLocaleDateString(locale(), { weekday: "short", timeZone: "UTC" })));
    let active2 = 0;
    const cells = lead + days2, rows = Math.ceil(cells / 7);
    for (let r2 = 0; r2 < rows; r2++) {
      const firstOfRow = shift(first, r2 * 7 - lead);
      grid.append(el5("span", "cal-wk", isoWeek(firstOfRow)));
      for (let c = 0; c < 7; c++) {
        const i = r2 * 7 + c - lead;
        if (i < 0 || i >= days2) {
          grid.append(el5("span", "cal-day blank"));
          continue;
        }
        const day = shift(first, i);
        const cell = el5("span", "cal-day", i + 1);
        if (day > t) cell.classList.add("future");
        else {
          const a = byDay.get(day);
          const sc = score(a);
          if (sc > 0) active2++;
          cell.dataset.l = String(sc === 0 ? 0 : Math.min(4, 1 + Math.floor(sc / max * 3.999)));
          cell.title = `${(/* @__PURE__ */ new Date(`${day}T12:00:00`)).toLocaleDateString(locale(), { weekday: "short", month: "short", day: "numeric" })}: ${a ? `${a.reviews} cards passed, ${a.games} games${a.wins ? ` (${a.wins} won)` : ""}` : "no activity"}`;
        }
        if (day === t) cell.classList.add("today");
        grid.append(cell);
      }
    }
    box.replaceChildren(head, grid);
    $6("progHeatSub").textContent = `${active2} active days this month`;
  }
  function renderMastery() {
    if (!page) return;
    const tabs = $6("progLevels");
    tabs.replaceChildren(...LEVELS.map((l) => {
      const words2 = page.mastery[l];
      const known = words2.filter(([, m]) => m >= 3).length;
      const b = el5("button", "cust-tab" + (l === level ? " on" : ""), `${LEVEL_LABEL[l]} \xB7 ${known}/${words2.length}`);
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", String(l === level));
      b.onclick = () => {
        level = l;
        renderMastery();
      };
      return b;
    }));
    const words = page.mastery[level];
    const counts2 = [0, 0, 0, 0, 0];
    for (const [, m] of words) counts2[m]++;
    $6("progLegend").replaceChildren(...MASTERY.map((m, i) => {
      const item = el5("span", "ml-item");
      item.append(el5("i", m.cls), el5("span", "", `${m.label} \xB7 ${counts2[i]}`));
      return item;
    }));
    const grid = $6("progGrid");
    const frag = document.createDocumentFragment();
    for (const [kanji, m] of words) {
      const c = el5("span", `mg ${MASTERY[m].cls}`);
      c.title = `${kanji} \u2014 ${MASTERY[m].label}`;
      frag.append(c);
    }
    grid.replaceChildren(frag);
  }
  $6("progressBack").onclick = () => show("menu");

  // src/client/dailyui.ts
  var $7 = $;
  var el6 = (tag, cls = "", text) => {
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
    $7("dailyMain").replaceChildren(el6("p", "hint", "Loading\u2026"));
    try {
      renderOverview(await api.daily());
    } catch (e) {
      toast(e.message);
    }
  }
  function renderBoard(o) {
    const list = $7("dailyBoard");
    if (!o.board.length) {
      list.replaceChildren(el6("li", "hint", "Nobody has played today yet \u2014 be the first!"));
      return;
    }
    list.replaceChildren(...o.board.map((r2, i) => {
      const li = el6("li", r2.id === me2 ? "me" : "");
      li.append(el6("span", "db-rank", i + 1), el6("span", "db-name", r2.name), el6("span", "db-score", `${r2.correct}/${o.total}`), el6("span", "db-time", secs2(r2.ms)));
      return li;
    }));
  }
  function renderOverview(o) {
    renderBoard(o);
    const main = $7("dailyMain");
    const date = `Challenge of ${(/* @__PURE__ */ new Date(`${o.day}T12:00:00Z`)).toLocaleDateString(locale(), { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" })}`;
    if (o.mine) {
      const words = el6("div", "daily-words");
      for (const w of o.words ?? []) {
        const row = el6("div", "dw");
        const k = el6("span", "dw-k", w.kanji);
        k.lang = "ja";
        const r2 = el6("span", "dw-r", w.reading);
        r2.lang = "ja";
        row.append(el6("span", "dw-l", LEVEL_LABEL[w.level]), k, r2, el6("span", "dw-m", w.meaning));
        words.append(row);
      }
      main.replaceChildren(
        el6("p", "sub", date),
        el6("div", "daily-score", `${o.mine.correct} / ${o.total}`),
        el6("p", "center", `${secs2(o.mine.ms)} \xB7 rank ${o.rank} today`),
        el6("p", "hint center", `10 new words ${nextReset()}.`),
        el6("h4", "", "Today's words"),
        words
      );
      return;
    }
    const start = el6("button", "big", o.inProgress ? "Continue" : "Start");
    start.onclick = () => void begin();
    main.replaceChildren(
      el6("p", "sub", date),
      el6("h3", "", "Ten words, the same for everyone today"),
      el6("p", "", `Two words each from N5 to N1, easiest first. Type the reading (kana or romaji) and press Enter \u2014 ${o.wordMs / 1e3} s per word. One try a day: most correct wins, then fastest.`),
      el6("p", "hint", `Every correct word gives 30 XP (+100 for a perfect 10). New words ${nextReset()}.`),
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
  function renderPlay(last) {
    if (!word) return;
    const main = $7("dailyMain");
    const dots = el6("div", "daily-dots");
    for (let i = 0; i < word.total; i++) dots.append(el6("i", i < results.length ? results[i] ? "ok" : "no" : i === word.index ? "now" : ""));
    const k = el6("div", "daily-kanji", word.kanji);
    k.lang = "ja";
    const bar = el6("div", "timer thin");
    const fill = el6("div");
    bar.append(fill);
    const input2 = el6("input", "daily-input");
    input2.lang = "ja";
    input2.autocomplete = "off";
    input2.spellcheck = false;
    input2.placeholder = "reading (\u304B\u306A or romaji)";
    input2.addEventListener("paste", (e) => e.preventDefault());
    const skip2 = el6("button", "pill", "Skip");
    const fb = el6("div", "daily-fb");
    if (last) {
      fb.className = `daily-fb ${last.correct ? "ok" : "no"}`;
      const kk = el6("span", "rk", last.kanji);
      kk.lang = "ja";
      const rr = el6("span", "rr", last.reading);
      rr.lang = "ja";
      fb.append(el6("b", "", last.correct ? "\u2713" : "\u2717"), kk, rr, el6("span", "", last.meaning));
    }
    main.replaceChildren(el6("div", "daily-head", `Word ${word.index + 1} of ${word.total} \xB7 ${LEVEL_LABEL[word.level]}`), dots, k, bar, input2, skip2, fb);
    input2.focus();
    const t0 = performance.now(), limit = word.timeLimitMs;
    clearInterval(timer2);
    timer2 = window.setInterval(() => {
      const left = Math.max(0, limit - (performance.now() - t0));
      fill.style.width = `${left / limit * 100}%`;
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
        toast(`Daily challenge: ${r2.done.correct}/10 \xB7 rank ${r2.done.rank} of ${r2.done.players}${r2.done.xp ? ` \xB7 +${r2.done.xp} XP` : ""}`, 6e3);
        if (r2.done.correct === 10) sfx.go();
      }
    } catch (e) {
      busy2 = false;
      toast(e.message);
      void openDaily(me2);
    }
  }
  $7("dailyBack").onclick = () => {
    clearInterval(timer2);
    word = null;
    show("menu");
  };

  // src/client/friendsui.ts
  var $8 = $;
  var el7 = (tag, cls = "", text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== void 0) e.textContent = String(text);
    return e;
  };
  var friends2 = [];
  var fetchedAt = 0;
  var hooks3;
  function initFriends(h3) {
    hooks3 = h3;
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
    $8("friendMsg").textContent = "";
    await refresh(true);
    render4();
  }
  function render4() {
    const list = $8("friendList");
    const incoming = friends2.filter((f2) => f2.status === "incoming");
    const accepted = friends2.filter((f2) => f2.status === "accepted").sort((a, b) => Number(b.online) - Number(a.online) || a.username.localeCompare(b.username));
    const outgoing = friends2.filter((f2) => f2.status === "outgoing");
    const section = (title, rows) => {
      if (!rows.length) return [];
      const s = el7("div", "fl-section");
      s.append(el7("h3", "", title), ...rows);
      return [s];
    };
    const row = (f2, actions) => {
      const r2 = el7("div", "fl-row" + (f2.online ? " online" : ""));
      const who = el7("div", "fl-who");
      const name = el7("span", "fl-name", f2.username);
      markProfile(name, { id: f2.id, name: f2.username, bot: null });
      who.append(el7("i", "dot"), name, el7("small", "", f2.status === "accepted" ? f2.online ? f2.activity ?? "Online" : "Offline" : f2.status === "incoming" ? "wants to be friends" : "request sent"));
      r2.append(who, el7("div", "fl-actions"));
      r2.lastElementChild.append(...actions);
      return r2;
    };
    const btn = (text, cls, fn) => {
      const b = el7("button", `pill ${cls}`, text);
      b.onclick = async () => {
        b.disabled = true;
        try {
          friends2 = (await fn()).friends;
          fetchedAt = Date.now();
          updateBadge();
          render4();
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
    list.replaceChildren(...nodes.length ? nodes : [el7("p", "hint", "No friends yet \u2014 add someone by their player name above.")]);
  }
  $8("friendAdd").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input2 = $8("friendName");
    const name = input2.value.trim();
    if (!name) return;
    try {
      const r2 = await api.addFriend(name);
      friends2 = r2.friends;
      fetchedAt = Date.now();
      $8("friendMsg").textContent = r2.result === "accepted" ? `You and ${name} are now friends!` : r2.result === "exists" ? `You already asked ${name}.` : `Request sent to ${name}.`;
      input2.value = "";
      render4();
    } catch (err) {
      $8("friendMsg").textContent = err.message;
    }
  });
  $8("friendsBack").onclick = () => show("menu");
  $8("friendsRefresh").onclick = () => void openFriends();
  var INVITE_COOLDOWN_MS = 1e4;
  var invitedAt = /* @__PURE__ */ new Map();
  var lobbyIds = [];
  var cooldownTimer = 0;
  async function renderLobbyInvites(isLobby, inRoom2 = lobbyIds) {
    const box = $8("lobbyInvite");
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
    box.replaceChildren(el7("h4", "", "Invite friends"), ...online.map((f2) => {
      const r2 = el7("div", "li-row");
      const playing2 = !!f2.activity?.startsWith("Playing");
      const wait = INVITE_COOLDOWN_MS - (Date.now() - (invitedAt.get(f2.id) ?? 0));
      if (wait > 0) soonest = Math.min(soonest, wait);
      const b = el7("button", "pill primary", playing2 ? "In a game" : wait > 0 ? `Invited \xB7 ${Math.ceil(wait / 1e3)}s` : invitedAt.has(f2.id) ? "Invite again" : "Invite");
      b.disabled = playing2 || wait > 0;
      b.title = playing2 ? "They are playing \u2014 invite them when their game is over" : "";
      b.onclick = () => {
        hooks3.send({ type: "invite", friendId: f2.id });
        invitedAt.set(f2.id, Date.now());
        void renderLobbyInvites(true);
      };
      r2.append(el7("i", "dot"), el7("span", "", f2.username), el7("small", "hint", f2.activity ?? ""), b);
      return r2;
    }));
    if (soonest < Infinity) cooldownTimer = window.setTimeout(() => {
      if (!box.hidden) void renderLobbyInvites(true);
    }, Math.min(1e3, soonest));
  }
  function onInvite(msg) {
    const box = $8("inviteBox");
    const join2 = el7("button", "big", "Join");
    const no = el7("button", "pill", "Decline");
    const close = () => {
      box.hidden = true;
      clearTimeout(t);
    };
    join2.onclick = () => {
      close();
      hooks3.join(msg.code);
    };
    no.onclick = close;
    box.replaceChildren(el7("b", "", `${msg.from} invites you`), el7("span", "", `to ${MODE_LABEL[msg.mode]} \u2014 room ${msg.code}`), el7("div", "ib-actions"));
    box.lastElementChild.append(join2, no);
    box.hidden = false;
    sfx.go();
    attention(`${msg.from} invites you`, `Join their ${MODE_LABEL[msg.mode]} room`);
    const t = window.setTimeout(close, 6e4);
  }
  function onFriendEvent(msg) {
    toast(msg.event === "request" ? `${msg.from} wants to be your friend \u2014 see Friends` : `${msg.from} accepted your friend request`, 5e3);
    void refresh(true).then(() => {
      if (currentScreen() === "friends") render4();
    });
  }

  // src/client/main.ts
  applyUiZoom();
  var user = null;
  var profile = null;
  var you = "";
  var code = "";
  var mode2 = "reading";
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
      if (kanaBeginner()) return ["KANA"];
      return lv.length ? lv : ["N3", "N2"];
    } catch {
      return kanaBeginner() ? ["KANA"] : ["N3", "N2"];
    }
  };
  var socket = new GameSocket(onMessage, (s) => {
    setNetStatus(s === "reconnecting" ? "Reconnecting\u2026" : null);
  });
  var actorOf = (id) => id === "boss" ? "boss" : id === you ? "me" : mode2 === "boss" ? `ally:${id}` : "opp";
  var nameOf = (id) => players.find((p) => p.id === id)?.name ?? "Someone";
  var GAME_SCREENS2 = /* @__PURE__ */ new Set(["prep", "battle", "deck"]);
  onScreen2((s) => {
    setScene(GAME_SCREENS2.has(s) ? "game" : "menu");
    arenaScreen(s);
    const title = $("modeTitle");
    title.hidden = !["prep", "battle", "deck"].includes(s);
    document.body.classList.toggle("mode-shown", !title.hidden);
    if (s !== "battle" && document.activeElement?.id === "answer") document.activeElement.blur();
    if (!title.hidden) title.replaceChildren(modeBadge(s === "deck" ? "deck" : mode2), document.createTextNode(MODE_LABEL[s === "deck" ? "deck" : mode2]));
    if (s === "menu" && profile) void refreshProfile();
    if (s !== "lobby") void renderLobbyInvites(false);
    railScreen(s);
    setGameKb(s === "battle" && mode2 !== "writing");
    tutorialScreen(s);
    if (!GAME_SCREENS2.has(s)) setTimeout(() => applyBackground(true), 0);
  });
  var NO_BG_CHANGE = /* @__PURE__ */ new Set(["prep", "battle", "deck"]);
  var shownTime = "";
  function applyBackground(fade = false) {
    const bg2 = profile?.background ?? "forest";
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
  var writeShape = "";
  var prevStaff = null;
  function applyProfile(p) {
    const before = profile?.unlocks ?? null;
    if (user) celebrateNew(user.id, p.unlocks);
    if (before) {
      for (const r2 of p.unlocks ?? []) if (!before.includes(r2) && !r2.startsWith("flag:")) {
        const [kind, id] = r2.split(":");
        const name = kind === "flame" ? `${FLAMES.find((f2) => f2.id === id)?.name} flames` : STAFFS.find((x) => x.id === id)?.name;
        toast(`Monthly goals complete! ${name} unlocked \u2014 equip it in Customize.`, 7e3);
      }
    }
    profile = p;
    setProfile(p);
    $("kanaRow").hidden = $("kanaInfo").hidden = false;
    $("kanaMastered").checked = !kanaBeginner();
    setModeAccess(p.level, user?.role === "admin");
    if (!p.tutorialDone && !tutorialShown && user && !inRoom) {
      tutorialShown = true;
      startTutorial();
    }
    void dailyPending().then((open) => {
      $("dailyBadge").hidden = !open;
    });
    refreshFriendsBadge();
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
      signedIn2(u);
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
  function signedIn2(u) {
    user = u;
    setUser(u);
    setRailUser(true);
    socket.start(getToken());
    if (!inRoom) show("menu");
    if (!profile) void refreshProfile();
    else applyProfile(profile);
  }
  function showAuth(message = "") {
    user = null;
    profile = null;
    inRoom = false;
    setUser(null);
    setRailUser(false);
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
        resetQueue();
        you = msg.you;
        code = msg.code;
        mode2 = msg.mode;
        inRoom = true;
        setError("");
        break;
      case "left":
        backToMenu();
        if (pendingJoin) {
          socket.send({ type: "join", code: pendingJoin, levels: savedLevels() });
          pendingJoin = "";
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
        players = msg.players;
        mode2 = msg.mode;
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
        showPrep(msg.pool, msg.durationMs, mode2);
        setReady(msg.readyIds.length, players.length, msg.readyIds.includes(you));
        break;
      case "prep_ready":
        setReady(msg.readyIds.length, players.length, msg.readyIds.includes(you));
        break;
      case "battle_start":
        players = msg.players;
        mode2 = msg.mode;
        showBattle(msg.mode, players, msg.boss, you, msg.countdownMs, msg.durationMs, (n) => n > 0 ? sfx.tick() : sfx.go());
        break;
      case "challenge":
        challengeId = msg.id;
        arena()?.channel(0);
        showChallenge({ kanji: msg.kanji, answer: msg.answer, timeLimitMs: msg.timeLimitMs, meaning: msg.meaning, reading: msg.reading, charCount: msg.charCount, flashMs: msg.flashMs });
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
        if (mode2 === "writing") setCharSlots(charCount, written.map(() => ""), false, writeShape);
        setFeedback(msg);
        if (msg.correct) {
          const kana = /[a-z]/i.test(msg.reading) ? msg.kanji : msg.reading;
          void speak(kana).then(() => sfx.correct(msg.combo));
          if (mode2 !== "deck") comboMilestone(msg.combo, profile?.unlocks);
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
    const render5 = () => renderFighters(players, you, msg.boss);
    switch (e.kind) {
      case "hit": {
        const caster = actorOf(e.playerId);
        const target = actorOf(e.targetId);
        const friendly = caster !== "opp";
        void castSpell(caster, target, e.kanji, e.damage, friendly, !!e.crit).then(() => {
          render5();
          if (target === "me") sfx.hurt();
          else if (caster === "me") sfx.impact();
        });
        if (e.playerId !== you) logLine(`${nameOf(e.playerId)} cast for ${e.damage}${e.crit ? " (CRIT!)" : ""}${e.combo >= 2 ? ` (\xD7${e.combo})` : ""}:`, e.kanji);
        break;
      }
      case "miss":
        fizzle(actorOf(e.playerId));
        render5();
        if (e.playerId !== you) logLine(`${nameOf(e.playerId)} fumbled:`, e.kanji);
        break;
      case "claw":
        clawHit(actorOf(e.playerId), e.damage);
        if (e.playerId === you) sfx.claw();
        setTimeout(render5, 200);
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
        setTimeout(render5, 450);
        logLine(immune.length ? `Fire breath! ${e.damage} damage \u2014 ${immune.map(nameOf).join(", ")} immune (on fire)` : `Fire breath! Everyone takes ${e.damage}`);
        break;
      }
    }
  }
  var pad = new HandwritingPad($("pad"), () => shareInk());
  var twitchAt = 0;
  pad.onDraw = () => {
    shareInk();
    if (mode2 !== "deck") arena()?.channel(Math.min(1, 0.45 + pad.strokeCount * 0.12));
    gemBack();
    if (Date.now() - twitchAt > 140) {
      twitchAt = Date.now();
      arena()?.twitch();
    }
  };
  var inkTimer = 0;
  var inkAt = 0;
  function shareInk() {
    if (mode2 !== "deck" || !writing) return;
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
    pad.setCells(charCount);
    setEraser(false);
    arena()?.channel(0.35);
    if (mode2 === "deck") mountWriteArea("dkWrite");
    setCharSlots(charCount, [], true, writeShape);
    const ime = $("imeInput");
    ime.value = "";
    if (mode2 === "deck") {
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
    if (mode2 !== "deck") arena()?.channel(0);
    lockInput();
    if (mode2 === "deck") hideWriteArea();
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
      const res = authTab === "login" ? await api.login(username, password) : await api.register(username, password);
      setToken(res.token);
      $("authPass").value = "";
      signedIn2(res.user);
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
  $("progressBtn").onclick = () => void openProgress(profile?.unlocks ?? []);
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
  initTutorial({
    firstBattle: () => socket.send({ type: "create", mode: "reading", levels: kanaBeginner() ? ["KANA"] : ["KANA", "N5"], tutorial: true }),
    kana: async (mastered) => {
      try {
        applyProfile((await api.setKana(mastered)).profile);
      } catch (e) {
        toast(e.message);
      }
      if (!mastered) store.set("kb:levels", JSON.stringify(["KANA"]));
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
    if (profile) openCustomize(profile, user?.role === "admin", () => applyBackground(true));
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
      });
    } catch (e) {
      setError(e.message);
    }
  }
  $("adminBtn").onclick = () => void openAdmin();
  $("adminRefresh").onclick = () => void openAdmin();
  setInterval(() => {
    if (currentScreen() === "admin" && user?.role === "admin") void openAdmin();
  }, 15e3);
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
      setGameKb(currentScreen() === "battle" && mode2 !== "writing");
    };
  }
  $("kanaMastered").onchange = async (e) => {
    const box = e.target;
    try {
      applyProfile((await api.setKana(box.checked)).profile);
      toast(box.checked ? "Kanji levels unlocked \u2014 pick N5 in Study spells to start!" : "Back to \u304B\u306A only: kanji levels are locked.", 5e3);
      if (!box.checked) store.set("kb:levels", JSON.stringify(["KANA"]));
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
      mode2 = "deck";
      beginWriting(castId, kanji);
    },
    stopWriting: () => stopWriting()
  });
  $("rematch").onclick = () => socket.send({ type: "rematch" });
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
    const open = async (el8) => {
      const id = el8.dataset.profile;
      if (shownFor === id && !$("otherPop").hidden) {
        hideProfileCard();
        shownFor = "";
        return;
      }
      shownFor = id;
      const name = el8.dataset.name ?? el8.textContent ?? "";
      const bot = el8.dataset.bot ?? /\(AI (N\d)\)$/.exec(name)?.[1];
      if (bot) return showProfileCard(el8, { bot, name });
      showProfileCard(el8, "loading");
      try {
        const { profile: profile2 } = await api.player(id);
        if (shownFor === id) showProfileCard(el8, profile2);
      } catch {
        if (shownFor === id) showProfileCard(el8, "missing");
      }
    };
    addEventListener("click", (e) => {
      const el8 = e.target.closest("[data-profile]");
      if (el8) {
        e.stopPropagation();
        void open(el8);
        return;
      }
      if (!$("otherPop").contains(e.target)) {
        hideProfileCard();
        shownFor = "";
      }
    }, true);
    addEventListener("keydown", (e) => {
      const el8 = e.target.closest?.("[data-profile]");
      if (el8 && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        void open(el8);
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
    const pop = $("profilePop");
    $("whoBtn").onclick = (e) => {
      e.stopPropagation();
      pop.hidden = !pop.hidden;
      $("whoBtn").setAttribute("aria-expanded", String(!pop.hidden));
      if (!pop.hidden) void refreshProfile();
    };
    addEventListener("click", (e) => {
      if (!pop.hidden && !pop.contains(e.target) && !$("whoBtn").contains(e.target)) pop.hidden = true;
    });
    $("picInput").onchange = async (e) => {
      const file = e.target.files?.[0];
      e.target.value = "";
      if (!file) return;
      try {
        const { profile: profile2 } = await api.setAvatar(await squarePicture(file));
        setProfile(profile2);
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
