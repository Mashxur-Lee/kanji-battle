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
  var SCREENS = ["auth", "menu", "queue", "admin", "modes", "lobby", "prep", "battle", "results", "study", "review", "customize", "deck"];
  var screenListener = () => {
  };
  var onScreen = (fn) => {
    screenListener = fn;
  };
  var currentScreen = () => SCREENS.find((s) => !$(s).hidden);
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
  function paintNet(el) {
    const rtt = rtts.get(el.dataset.net ?? "");
    const q = netQuality(rtt);
    el.className = `net q${q}`;
    el.title = rtt == null ? "Connection: offline / measuring\u2026" : `Connection: ${["", "poor", "medium", "good"][q]} (${rtt} ms)`;
  }
  function netBars(playerId) {
    const el = h("span", "net");
    el.dataset.net = playerId;
    el.innerHTML = "<i></i><i></i><i></i>";
    paintNet(el);
    return el;
  }
  function setNet(map) {
    for (const [id, rtt] of Object.entries(map)) rtts.set(id, rtt);
    document.querySelectorAll(".net[data-net]").forEach(paintNet);
  }
  function setProfile(p) {
    if (!p) return;
    const lx = levelXp(p.xp);
    $("whoLevel").textContent = `Lv ${lx.level} \xB7 ${lx.into.toLocaleString()}/${lx.need.toLocaleString()} XP`;
    $("whoCrit").textContent = `\u2726 ${critText(p.crit)} crit`;
    $("whoCrit").title = "Crit chance today: 1% + 1% for every spell you learn today (max 50%). Resets at midnight.";
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
  function setAudioButtons(radio, sfx2) {
    const set = (id, on, icon, label) => {
      $(id).setAttribute("aria-pressed", String(on));
      $(id).replaceChildren(h("span", "ico", icon), h("span", "lbl", ` ${label} ${on ? "on" : "off"}`));
    };
    set("radioBtn", radio, "\u266A", "Music");
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
  function showAdmin(users, me, db, onToggle) {
    const banned = users.filter((u) => u.banned).length;
    $("adminInfo").textContent = `${users.length} accounts \xB7 ${banned} banned`;
    const st = $("adminStorage");
    st.className = "storage " + (db.persistent ? "ok" : "warn");
    st.textContent = db.storage === "postgres" ? "\u2713 Accounts, XP and study sets are saved in the Postgres database \u2014 updates and restarts keep them." : db.persistent ? `Saved to a local file (${db.storage}).` : "\u26A0 No database connected: accounts, XP and study sets are saved on the server disk, which Render wipes on every deploy and restart. Set DATABASE_URL (Neon) in Render \u2192 Environment.";
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
          h("td", "num", `Lv ${u.level ?? 0}`),
          h("td", "num", (u.xp ?? 0).toLocaleString()),
          h("td", "num", `${u.learned ?? 0} / ${u.cards ?? 0}`),
          h("td", "num", critText(u.crit ?? 0)),
          h("td", "", new Date(u.createdAt).toLocaleDateString()),
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
        ["\u{1F441}\uFE0F", "The kanji flashes for 3.5 s, then only its reading + meaning stay."],
        ["\u{1F58C}\uFE0F", "Write the whole word on the pad, left to right (one cell per character) \u2014 or type it with a Japanese keyboard."],
        ["\u2705", "Only kanji count (kana only at the \u304B\u306A level). Messy is fine \u2014 it\u2019s judged by shape."],
        ["\u2694\uFE0F", "Right = damage, with the same combo and speed bonus as Reading."]
      ]
    },
    boss: {
      title: "How Boss Elimination works",
      pic: () => append(h("div", "g-pic"), h("span", "g-emoji", "\u{1F9D9}\u{1F9D9}\u{1F9D9}\u{1F9D9}"), h("span", "g-arrow", "\u2694"), h("span", "g-emoji", "\u{1F409}")),
      steps: [
        ["\u{1F465}", "Up to 4 players (friends or AI) against the Black Dragon. Its HP grows with the party."],
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
  function renderModeGuide(mode2) {
    if (mode2 === "deck") return;
    const g = GUIDES[mode2];
    const ol = h("ol", "g-flow");
    for (const [icon, text] of g.steps) ol.append(append(h("li"), h("span", "g-ic", icon), h("span", "", text)));
    $("modeGuide").replaceChildren(
      h("h3", "", g.title),
      g.pic(),
      ol,
      h("p", "g-foot", "Crit: 1% + 1% per spell learned today (max 50%). Playing with AI gives half XP; a forfeit gives none.")
    );
  }
  function showLobby(code2, mode2, players2, you2, hostId, maxPlayers, minPlayers2) {
    $("code").textContent = code2;
    $("lobbyMode").textContent = MODE_LABEL[mode2];
    $("lobbyPlayers").replaceChildren(
      ...players2.map((p) => {
        const li = h("li");
        const av = h("span", "who-av");
        av.innerHTML = avatarSvg(p.avatar, p.id === you2 ? "me" : "opp");
        li.append(av, h("span", "who", p.id === you2 ? `${p.name} (you)` : p.name));
        if (p.bot) li.append(h("span", "tag ai", `\u{1F916} AI \xB7 knows ${p.bot}`));
        else li.append(netBars(p.id), h("span", "lv", `Lv ${p.level}`));
        if (p.bot && you2 === hostId) {
          const x = h("button", "pill rm-bot", "\u2715", { title: "Remove this AI" });
          x.dataset.removeBot = p.id;
          li.append(x);
        }
        if (p.crit > 0 && !p.bot) li.append(h("span", "critv", `\u2726 ${critText(p.crit)} crit`));
        if (p.id === hostId) li.append(h("span", "tag", "host"));
        if (!p.online) li.append(h("span", "tag off", "away \u2014 seat kept"));
        if (mode2 === "deck") li.append(h("span", "tag " + (p.ready ? "ready" : "notready"), p.ready ? "\u2713 Ready" : "Not ready"));
        else if (p.bot) li.append(append(h("div", "meta"), h("span", "", levelsText(p.levels)), h("span", "hpv", `\u2764 ${p.maxHp} HP`)));
        else if (!p.bot) li.append(append(h("div", "meta"), h("span", "", levelsText(p.levels)), h("span", "hpv", `\u2764 ${p.maxHp} HP`)));
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
    $("addBot").hidden = !isHost || players2.length >= maxPlayers;
    const deck2 = mode2 === "deck";
    $("levels").hidden = deck2;
    $("deckGuide").hidden = !deck2;
    $("modeGuide").hidden = deck2;
    if (!deck2) renderModeGuide(mode2);
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
    $("start").textContent = mode2 === "boss" ? players2.length === 1 ? "Start solo" : `Start \u2014 party of ${players2.length}` : "Start battle";
    $("lobbyStatus").textContent = !canStart ? "Share the code with a friend, or add an AI player to start." : isHost ? mode2 === "boss" && players2.length < maxPlayers ? `Start now, or wait for more teammates (up to ${maxPlayers}).` : "" : "Waiting for the host to start\u2026";
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
  function partyPanel(el, players2, you2) {
    const ordered = [...players2].sort((a, b) => a.id === you2 ? -1 : b.id === you2 ? 1 : 0);
    el.replaceChildren(...ordered.map((p) => {
      const row = h("div", "party-row" + (p.id === you2 ? " me" : "") + (p.hp <= 0 ? " down" : ""));
      const name = append(
        h("div", "pname"),
        h("span", "n", p.id === you2 ? `${p.name} (you)` : p.name),
        netBars(p.id),
        h("span", "lv", `Lv ${p.level}`),
        h("span", "combo", p.combo >= 2 ? `\xD7${p.combo}${p.combo >= 5 ? " \u{1F525}" : ""}` : "")
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
  function fighterCard(el, p, label, emptyText) {
    if (!p) {
      el.replaceChildren(h("div", "name", emptyText));
      return;
    }
    const name = append(h("div", "name"), append(h("span", "n", label), netBars(p.id), h("span", "lv", `Lv ${p.level}`), h("span", "critv", p.crit > 0 ? ` \u2726${critText(p.crit)}` : "")), h("span", "combo", p.combo >= 2 ? `\xD7${p.combo} combo${p.combo >= 5 ? " \u{1F525}" : ""}` : ""));
    el.replaceChildren(name, hpBar(p.hp, p.maxHp, `${p.name} HP`), append(h("div", "hpnum", `${p.hp} / ${p.maxHp} HP`), h("span", "lvs", `\xB7 ${levelsText(p.levels)}${p.online ? "" : " \xB7 away"}`)));
  }
  var battleMode = "reading";
  function renderFighters(players2, you2, boss) {
    const me = players2.find((p) => p.id === you2);
    const other = players2.find((p) => p.id !== you2);
    $("meCard").classList.toggle("party", battleMode === "boss");
    $("oppCard").hidden = battleMode === "boss";
    if (battleMode === "boss") {
      partyPanel($("meCard"), players2, you2);
      const bar = $("bossBar");
      if (boss) bar.replaceChildren(h("div", "bname", `\u{1F409} ${boss.name}`), thickBar(boss.hp, boss.maxHp, "enemy", `${boss.hp} / ${boss.maxHp}`));
      for (const p of players2) if (p.id !== you2) allyEl(p.id)?.classList.toggle("onfire", p.combo >= 5);
    } else {
      fighterCard($("meCard"), me, me ? `${me.name} (you)` : "", "");
      fighterCard($("oppCard"), other, other?.name ?? "", "Opponent left");
      $("wizOpp").classList.toggle("onfire", (other?.combo ?? 0) >= 5);
    }
    $("wizMe").classList.toggle("onfire", (me?.combo ?? 0) >= 5);
  }
  var allyEl = (id) => document.querySelector(`#allies .wizard[data-pid="${CSS.escape(id)}"]`);
  var actorEl = (a) => a.startsWith("ally:") ? allyEl(a.slice(5)) ?? $("wizMe") : $(a === "me" ? "wizMe" : a === "opp" ? "wizOpp" : "dragon");
  function retrigger(el, cls, ms) {
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), ms);
  }
  function setupArena(mode2, players2, you2) {
    battleMode = mode2;
    const boss = mode2 === "boss";
    const others = players2.filter((p) => p.id !== you2);
    $("wizOpp").hidden = boss;
    $("dragon").hidden = !boss;
    const meP = players2.find((p) => p.id === you2);
    for (const [id, side, p] of [["wizMe", "me", meP], ["wizOpp", "opp", others[0]]]) {
      const w = $(id);
      w.className = `wizard ${side}`;
      w.querySelector(".sprite").innerHTML = avatarSvg(p?.avatar ?? "wizard", side);
    }
    $("allies").replaceChildren(...(boss ? others : []).map((p) => {
      const w = h("div", "wizard ally");
      w.dataset.pid = p.id;
      const sprite = h("div", "sprite");
      sprite.innerHTML = avatarSvg(p.avatar, "ally");
      w.append(h("div", "aura"), sprite, h("div", "ground"));
      return w;
    }));
    $("arena").dataset.party = String(boss ? players2.length : 0);
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
  function breathFire(damage, victims, immune = []) {
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
      for (const v of immune) floatText(actorEl(v), "IMMUNE", "immune");
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
  function setCharSlots(total, _written, active) {
    $("charSlots").replaceChildren(h("span", "slots-hint", total > 1 ? `Write all ${total} characters, left to right` : "Write the character"));
    $("padNext").textContent = "Cast \u2726";
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
    const allies = Object.keys(stats).filter((id) => id !== you2);
    cmp.classList.toggle("multi", allies.length > 1);
    if (allies.length > 1) {
      cmp.style.gridTemplateColumns = `auto repeat(${allies.length + 1}, minmax(0, 1fr))`;
      const nameOf2 = (id) => players2.find((p) => p.id === id)?.name ?? "Ally";
      cmp.replaceChildren(h("div"), h("div", "h me", "You"), ...allies.map((id) => h("div", "h", nameOf2(id))));
      for (const [label, fmt] of rows) cmp.append(h("div", "lbl", label), h("div", "v", fmt(me)), ...allies.map((id) => h("div", "v", fmt(stats[id]))));
    } else {
      cmp.style.gridTemplateColumns = "";
      cmp.replaceChildren(h("div", "h me", "You"), h("div"), h("div", "h r", other ? otherName : ""));
      for (const [label, fmt] of rows) cmp.append(h("div", "v", fmt(me)), h("div", "lbl", label), h("div", "v r", other ? fmt(other) : ""));
    }
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

  // src/client/queue.ts
  var QUEUE_MODES = ["reading", "writing", "rapid", "boss"];
  var KEY = "kb:queue";
  var load = () => {
    try {
      return { modes: ["reading", "rapid"], levels: ["N5"], ...JSON.parse(localStorage.getItem(KEY) ?? "{}") };
    } catch {
      return { modes: ["reading", "rapid"], levels: ["N5"] };
    }
  };
  var save = (s) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch {
    }
  };
  var send = () => {
  };
  var tick = 0;
  var searching = false;
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
  function remember() {
    save({ modes: picked("qModes"), levels: picked("qLevels") });
  }
  function initQueue(sender) {
    send = sender;
    $("queueBack").onclick = () => {
      if (searching) send({ type: "queue_cancel" });
      stopSearching();
      show("menu");
    };
    $("qFind").onclick = () => {
      const modes = picked("qModes"), levels = picked("qLevels");
      if (!modes.length) return toast("Tick at least one mode");
      if (!levels.length) return toast("Tick at least one level");
      send({ type: "queue", modes, levels });
    };
    $("qDeck").onclick = () => send({ type: "queue", modes: ["deck"] });
    $("qCancel").onclick = () => send({ type: "queue_cancel" });
  }
  function openQueue() {
    const s = load();
    $("qModes").replaceChildren(...QUEUE_MODES.map((m) => chip(m, MODE_LABEL[m], s.modes.includes(m), "qm")));
    $("qLevels").replaceChildren(...LEVELS.map((l) => chip(l, LEVEL_LABEL[l], s.levels.includes(l), "ql")));
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
  function onQueue(msg) {
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
    $("qInfo").textContent = `${(msg.modes ?? []).map((m) => MODE_LABEL[m]).join(" \xB7 ")} \u2014 ${others > 0 ? `${others} other player${others === 1 ? "" : "s"} searching` : "no one else searching yet"}`;
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
    for (let f = 0; f < 4; f++) {
      const y0 = 11 + 2 * f;
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
  var VERSION = "0.7";

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
    review: (vocabId, rating) => call("POST", "/api/study/review", { vocabId, rating, today: today(), tz: (/* @__PURE__ */ new Date()).getTimezoneOffset() }),
    users: () => call("GET", "/api/admin/users"),
    setBanned: (id, banned) => call("POST", `/api/admin/users/${encodeURIComponent(id)}/ban`, { banned })
  };

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
    const on = prefs.radio && prefs.musicVol > 0 && document.visibilityState === "visible";
    const want = on ? scene === "menu" ? menuTheme : battleTheme : null;
    for (const t of [menuTheme, battleTheme]) t === want ? t.fadeIn() : t.fadeOut();
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
  function noise(at, dur, gain, cutoff, type = "lowpass", bus = sfxBus, swell = false) {
    const c = ctx;
    const buf = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (swell ? (i / data.length) ** 2 : 1 - i / data.length);
    const src = c.createBufferSource();
    src.buffer = buf;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.value = cutoff;
    const g = c.createGain();
    g.gain.value = gain;
    src.connect(f).connect(g).connect(bus);
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
  function makeTrack(bpm, bus, play) {
    const STEP = 60 / bpm / 2;
    let timer;
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
        if (timer !== void 0) return;
        nextTime = ctx.currentTime + 0.12;
        step = 0;
        schedule();
        timer = window.setInterval(schedule, 150);
      },
      fadeOut() {
        if (!ctx || timer === void 0 || stopTimer !== void 0) return;
        bus().gain.cancelScheduledValues(ctx.currentTime);
        bus().gain.setTargetAtTime(0, ctx.currentTime, 0.45);
        stopTimer = window.setTimeout(() => {
          clearInterval(timer);
          timer = void 0;
          stopTimer = void 0;
        }, 2200);
      }
    };
  }
  function strings(notes, at, dur, bus, level = 0.035, cutoff = 1100) {
    const c = ctx;
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = cutoff;
    const g = c.createGain();
    g.gain.setValueAtTime(1e-4, at);
    g.gain.exponentialRampToValueAtTime(level, at + 0.9);
    g.gain.setValueAtTime(level, at + dur - 0.6);
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
  function horn(n, at, dur, bus, level = 0.05) {
    const c = ctx;
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(350, at);
    lp.frequency.linearRampToValueAtTime(1300, at + Math.min(0.5, dur * 0.5));
    lp.frequency.linearRampToValueAtTime(600, at + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(1e-4, at);
    g.gain.exponentialRampToValueAtTime(level, at + 0.12);
    g.gain.setValueAtTime(level * 0.85, at + dur * 0.75);
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
  var CARD_COLORS = ["lightblue", "blue", "yellow", "green", "red"];
  var CARD_SPECS = {
    lightblue: { label: "Bolt", kind: "attack", amount: 100, cost: 10 },
    blue: { label: "Frost", kind: "attack", amount: 120, cost: 25 },
    yellow: { label: "Mana", kind: "mana", amount: 60, cost: 0 },
    green: { label: "Heal", kind: "heal", amount: 100, cost: 40 },
    red: { label: "Inferno", kind: "attack", amount: 250, cost: 70 }
  };
  var DECK_CHARACTERS = ["goblin", "knight", "witch", "wizard"];
  var CHARACTER_INFO = {
    goblin: { name: "Goblin", power: "Frenzy: play 2 cards in a row this turn. 100 mana, then 4 turns cooldown." },
    knight: { name: "Knight", power: "Bulwark: take 30% less damage and heal 30% more for 2 turns. 100 mana, then 4 turns cooldown." },
    witch: { name: "Witch", power: "Sight: see the kanji and reading of all your cards for 2 turns (and the kanji stays visible while casting). 100 mana, then 4 turns cooldown." },
    wizard: { name: "Wizard", power: "Arcane reserve (passive): out of cards \u2192 draw 2 random cards before a new draft; out of mana \u2192 +30 mana. Once each.", passive: true }
  };
  var DECK_RULES = {
    hp: 1e3,
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
    castMs: 38500,
    // then write its kanji: 3.5 s flash + 35 s
    castFlashMs: 3500,
    matchMs: 8 * 6e4,
    // then overtime
    overtimeCardMs: 38500,
    // 3.5 s flash + 35 s
    knightDamageTaken: 0.7,
    knightHealBonus: 1.3,
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
  function initDeck(hk) {
    hooks = hk;
    $2("dkAbility").onclick = () => hooks.send({ type: "deck_ability" });
    $2("dkChatForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const input = $2("dkChatInput");
      const text = input.value.trim();
      if (text) hooks.send({ type: "chat", text });
      input.value = "";
    });
    renderGuide($2("deckGuide"));
  }
  var seenChat = /* @__PURE__ */ new Set();
  function chatMessages(msgs) {
    const log = $2("dkChatLog");
    for (const m of msgs) {
      if (seenChat.has(m.id)) continue;
      seenChat.add(m.id);
      const line = h2("div", "chat-line" + (m.from === hooks.me() ? " mine" : ""));
      line.append(h2("b", "", m.from === hooks.me() ? "You" : m.name), h2("span", "", m.text));
      log.append(line);
      if (m.from !== hooks.me() && view && view.phase !== "over") sfx.flip();
    }
    while (log.children.length > 60) log.firstElementChild.remove();
    log.scrollTop = log.scrollHeight;
  }
  function clearChat() {
    seenChat.clear();
    $2("dkChatLog").replaceChildren();
  }
  function renderGuide(el) {
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
      ["\u270D\uFE0F", `The kanji shows for ${DECK_RULES.castFlashMs / 1e3} s, then only the reading + meaning stay. Write it (pad or Japanese keyboard) within ${(DECK_RULES.castMs - DECK_RULES.castFlashMs) / 1e3} s.`],
      ["\u2705", `Right \u2192 the spell hits / heals / gives mana, and you get ${DECK_RULES.manaRefund * 100}% of its mana back. Wrong or too slow \u2192 the card rips.`],
      ["\u{1F4DC}", "While your opponent plays, you can read the list of kanji in your hand (not which card is which)."],
      ["\u{1F504}", "Out of cards \u2192 Round 2 draft. HP, mana and powers stay."],
      ["\u23F0", `After ${DECK_RULES.matchMs / 6e4} min: overtime \u2014 the leftover cards are shown one by one, first to write it uses it.`]
    ]) {
      const li = h2("li");
      li.append(h2("span", "g-ic", icon), h2("span", "", t));
      flow.append(li);
    }
    el.replaceChildren(
      h2("h3", "", "How Deck Duel works"),
      sec("Goal", p(`Both start with ${DECK_RULES.hp} HP and ${DECK_RULES.maxMana} mana (+${DECK_RULES.manaPerTurn} each turn). Bring your opponent to 0. Holding cards you can't pay for = you lose.`)),
      sec("Cards", cards),
      sec("A turn", flow),
      sec(`Heroes \u2014 power button bottom-left: ${DECK_RULES.abilityCost} mana, then ${DECK_RULES.abilityCooldown} turns cooldown`, heroes),
      sec("Rewards", p("Win 4000 XP \xB7 lose 1500 XP \xB7 forfeit 0 XP."))
    );
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
    el.replaceChildren(av, name, hp, mana, counts2);
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
    const cd = me.abilityCooldown;
    ab.append(h2("span", "ab-name", ch ? CHARACTER_INFO[ch].passive ? "Passive" : cd > 0 ? `Ready in ${cd} turn${cd === 1 ? "" : "s"}` : `Power \xB7 ${DECK_RULES.abilityCost}\u25C6` : ""));
    if (ch && !CHARACTER_INFO[ch].passive && cd > 0) ab.append(h2("span", "ab-cd", String(cd)));
    ab.title = ch ? CHARACTER_INFO[ch].power : "";
    ab.classList.toggle("passive", !!ch && !!CHARACTER_INFO[ch].passive);
    ab.classList.toggle("active", me.abilityActive > 0);
    ab.disabled = !ch || !!CHARACTER_INFO[ch].passive || cd > 0 || me.mana < DECK_RULES.abilityCost || !myTurn || !!v.casting;
    renderCast(v);
    renderList(v);
  }
  function renderList(v) {
    const box = $2("dkList");
    const head = h2("h4", "", "Your kanji");
    if (!v.deckList) {
      box.replaceChildren(head, h2("p", "hint", v.phase === "overtime" ? "Overtime \u2014 all cards are on the table." : "Hidden on your turn. While your opponent plays, the kanji in your hand show up here."));
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
  var append2 = (el, ...kids) => {
    el.append(...kids);
    return el;
  };
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
    overlay.replaceChildren(backButton(v), title, grid, h2("p", "sub", `Same HP (${DECK_RULES.hp}) for both. ${DECK_RULES.maxMana} mana, +${DECK_RULES.manaPerTurn} every turn. ${DECK_RULES.chooseMs / 1e3} s to choose a card (its mana is paid right away), then the kanji shows for ${DECK_RULES.castFlashMs / 1e3} s and you have ${(DECK_RULES.castMs - DECK_RULES.castFlashMs) / 1e3} s to write it. Hero power: ${DECK_RULES.abilityCost} mana, ${DECK_RULES.abilityCooldown} turns cooldown. Out of cards \u2192 a new draft round. Cards: light blue 100 dmg (10\u25C6) \xB7 blue 120 (25\u25C6) \xB7 yellow +60\u25C6 \xB7 green heal 100 (40\u25C6) \xB7 red 250 (70\u25C6).`));
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
    overlay.replaceChildren(backButton(v), head, status, board, h2("p", "hint", "You only see the colour \u2014 the kanji stays hidden until the card is played."));
  }
  function backButton(v) {
    const b = h2("button", "back dk-back", "\u2190 Back to lobby");
    b.hidden = v.round > 1;
    b.onclick = () => hooks.send({ type: "back_to_lobby" });
    return b;
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
    if (e.refund) fb.append(h2("span", "refund", ` +${e.refund}\u25C6 back`));
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
      __publicField(this, "cells", 1);
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
    $3("studyCrit").textContent = `\u2726 ${critText(s.profile.crit)} crit today \xB7 ${s.profile.learnedToday} learned today (+1% each, max 50%) \xB7 ${s.profile.learned} learned in total`;
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
      const tile2 = document.createElement("button");
      tile2.className = "bg-tile" + (profile2.background === b.id ? " on" : "") + (locked ? " locked" : "");
      tile2.innerHTML = backgroundThumb(b.id);
      const name = document.createElement("div");
      name.className = "bg-name";
      name.textContent = `${b.name}${profile2.background === b.id ? " \u2713" : ""}`;
      tile2.append(name);
      if (locked) {
        const lock = document.createElement("div");
        lock.className = "lock";
        lock.textContent = `\u{1F512} Level ${b.level}`;
        tile2.append(lock);
      }
      tile2.onclick = async () => {
        if (locked) return toast(`Reach level ${b.level} to unlock ${b.name}`);
        try {
          const { profile: p } = await api.setBackground(b.id);
          onProfile(p);
          openCustomize(p);
        } catch (e) {
          toast(e.message);
        }
      };
      return tile2;
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
  var actorOf = (id) => id === "boss" ? "boss" : id === you ? "me" : mode === "boss" ? `ally:${id}` : "opp";
  var nameOf = (id) => players.find((p) => p.id === id)?.name ?? "Someone";
  var GAME_SCREENS = /* @__PURE__ */ new Set(["prep", "battle", "deck"]);
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
        const immune = e.immune ?? [];
        const victims = players.filter((p) => !immune.includes(p.id) && (p.hp > 0 || p.hp + e.damage > 0)).map((p) => actorOf(p.id));
        breathFire(e.damage, victims, immune.map((id) => actorOf(id)));
        if (immune.includes(you)) toast("\u{1F525} You are on fire \u2014 immune to dragon breath!");
        sfx.fire();
        setTimeout(render2, 450);
        logLine(immune.length ? `\u{1F525} Fire breath! ${e.damage} damage \u2014 ${immune.map(nameOf).join(", ")} immune (on fire)` : `\u{1F525} Fire breath! Everyone takes ${e.damage}`);
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
    pad.setCells(charCount);
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
    written = [pad.take()];
    submitDrawing();
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
  $("queueBtn").onclick = () => {
    setError("");
    openQueue();
  };
  initQueue((m) => socket.send(m));
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
  $("version").textContent = `v${VERSION}`;
  $("pad").style.cursor = brushCursor();
  initDeck({
    send: (m) => socket.send(m),
    me: () => you,
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
  {
    const panel = $("volPanel");
    const music = $("musicVol"), fx = $("sfxVol");
    const show2 = () => {
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
      show2();
    };
    music.oninput = () => {
      setMusicVolume(Number(music.value) / 100);
      show2();
    };
    fx.oninput = () => {
      setSfxVolume(Number(fx.value) / 100);
      show2();
    };
    fx.onchange = () => previewSfx();
    addEventListener("click", (e) => {
      if (!panel.hidden && !panel.contains(e.target)) panel.hidden = true;
    });
  }
  var firstGesture = () => unlock();
  addEventListener("pointerdown", firstGesture, { once: true });
  addEventListener("keydown", firstGesture, { once: true });
  void boot();
})();
