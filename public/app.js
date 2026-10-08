"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

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

  // src/shared/protocol.ts
  var JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"];

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
  function showLobby(code2, players2, you2, hostId, settings, maxPlayers) {
    $("code").textContent = code2;
    const list = $("lobbyPlayers");
    list.replaceChildren(
      ...players2.map((p) => {
        const li = h("li");
        li.append(h("span", "", p.id === you2 ? `${p.name} (you)` : p.name));
        if (p.id === hostId) li.append(h("span", "tag", "host"));
        return li;
      }),
      ...Array.from({ length: Math.max(0, maxPlayers - players2.length) }, () => h("li", "empty", "Waiting for opponent\u2026"))
    );
    const isHost = you2 === hostId;
    const fs = $("levels");
    fs.disabled = !isHost;
    $("levelChips").replaceChildren(
      ...JLPT_LEVELS.map((lv) => {
        const on = settings.levels.includes(lv);
        const label = h("label", "chip" + (on ? " on" : ""), lv);
        const box = h("input", "", void 0, { type: "checkbox", value: lv });
        box.checked = on;
        label.prepend(box);
        return label;
      })
    );
    $("levelsHint").textContent = isHost ? "Pick one or more. 10 words are drawn from these levels." : "The host picks the levels.";
    const full = players2.length >= maxPlayers;
    $("start").hidden = !isHost;
    $("start").disabled = !full;
    $("lobbyStatus").textContent = !full ? "Share the code \u2014 the battle can start once your opponent joins." : isHost ? "" : "Waiting for the host to start\u2026";
    show("lobby");
  }
  var selectedLevels = () => [...document.querySelectorAll("#levelChips input")].filter((i) => i.checked).map((i) => i.value);
  function showPrep(pool, durationMs) {
    $("studyGrid").replaceChildren(
      ...pool.map((w) => append(h("div", "card"), h("div", "lv", w.jlpt), h("div", "k", w.kanji, { lang: "ja" }), h("div", "r", w.reading, { lang: "ja" }), h("div", "m", w.meaning)))
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
    el.replaceChildren(name, bar, h("div", "hpnum", `${p.hp} / ${p.maxHp} HP`));
  }
  function renderFighters(players2, you2) {
    fighterCard($("meCard"), players2.find((p) => p.id === you2), true);
    fighterCard($("oppCard"), players2.find((p) => p.id !== you2), false);
  }
  function flashHit(targetIsMe, damage) {
    const card = $(targetIsMe ? "meCard" : "oppCard");
    card.classList.remove("hit");
    void card.offsetWidth;
    card.classList.add("hit");
    const f = h("div", "float" + (targetIsMe ? " taken" : ""), `\u2212${damage}`);
    f.style.left = targetIsMe ? "10%" : "80%";
    f.style.top = "64px";
    $("battle").style.position = "relative";
    $("battle").append(f);
    setTimeout(() => f.remove(), 1e3);
  }
  function showBattle(players2, you2, countdownMs, battleMs) {
    clearStudy();
    renderFighters(players2, you2);
    $("kanji").textContent = "";
    setFeedback(null);
    $("log").textContent = "";
    const input = $("answer");
    input.disabled = true;
    input.value = "";
    $("battleClock").textContent = clockText(battleMs);
    show("battle");
    const cd = $("countdown");
    cd.hidden = false;
    countdown("cd", countdownMs, (left) => {
      cd.textContent = left > 0 ? String(Math.ceil(left / 1e3)) : "\u6226\uFF01";
      if (left <= 0) setTimeout(() => cd.hidden = true, 500);
    });
    setTimeout(() => countdown("battle", battleMs, (left) => $("battleClock").textContent = clockText(left)), countdownMs);
  }
  function showChallenge(kanji, timeLimitMs) {
    const k = $("kanji");
    k.classList.remove("cast");
    k.textContent = kanji;
    setFeedback(null);
    const input = $("answer");
    input.disabled = false;
    input.value = "";
    input.focus();
    countdown("challenge", timeLimitMs, (_l, frac) => $("challengeBar").style.width = `${frac * 100}%`);
  }
  function lockInput() {
    stopCountdown("challenge");
    $("answer").disabled = true;
  }
  function setFeedback(f) {
    const el = $("feedback");
    if (!f) {
      el.replaceChildren();
      el.className = "feedback";
      return;
    }
    el.className = "feedback " + (f.correct ? "good" : "bad");
    if (f.correct) {
      $("kanji").classList.add("cast");
      const combo = f.combo >= 2 ? ` \xB7 \xD7${f.combo} combo` : "";
      el.replaceChildren(h("span", "big", `\u2713 ${f.kanji}\uFF01 CAST \u2014 ${f.damage} damage`), h("span", "", `${secs(f.responseMs ?? 0)}${combo}`));
    } else {
      el.replaceChildren(
        h("span", "big", f.timedOut ? "\u2717 Too slow!" : "\u2717 MISS!"),
        append(h("span", "reveal"), h("span", "rk", f.kanji, { lang: "ja" }), h("span", "rr", f.reading, { lang: "ja" }), h("span", "", f.meaning))
      );
    }
  }
  function logOpponent(text, kanji) {
    const el = $("log");
    el.replaceChildren(h("span", "", text));
    if (kanji) el.append(h("span", "k", ` ${kanji}`, { lang: "ja" }));
  }
  var REASONS = { ko: "Knock-out", time: "Time up \u2014 most HP wins", forfeit: "Opponent left the battle" };
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

  // src/client/main.ts
  var you = "";
  var code = "";
  var players = [];
  var challengeId = 0;
  var readyIds = [];
  var socket = new GameSocket(onMessage, () => {
    setError("Disconnected from server \u2014 refresh to play again.");
    show("menu");
  });
  function onMessage(msg) {
    switch (msg.type) {
      case "joined":
        you = msg.you;
        code = msg.code;
        setError("");
        break;
      case "lobby":
        players = msg.players;
        showLobby(code, msg.players, you, msg.hostId, msg.settings, msg.maxPlayers);
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
        showBattle(players, you, msg.countdownMs, msg.durationMs);
        break;
      case "challenge":
        challengeId = msg.id;
        showChallenge(msg.kanji, msg.timeLimitMs);
        break;
      case "answer_result":
        if (msg.challengeId !== challengeId) break;
        lockInput();
        setFeedback(msg);
        break;
      case "battle_update": {
        players = msg.players;
        renderFighters(players, you);
        const e = msg.event;
        if (e.kind === "hit") flashHit(e.targetId === you, e.damage);
        if (e.playerId !== you) {
          const name = players.find((p) => p.id === e.playerId)?.name ?? "Opponent";
          if (e.kind === "hit") logOpponent(`${name} cast for ${e.damage}${e.combo >= 2 ? ` (\xD7${e.combo})` : ""}:`, e.kanji);
          else logOpponent(`${name} fumbled:`, e.kanji);
        }
        break;
      }
      case "game_over":
        players = msg.players;
        lockInput();
        renderFighters(players, you);
        setTimeout(() => showResults(msg.players, you, msg.winnerId, msg.reason, msg.stats), msg.reason === "forfeit" ? 300 : 1500);
        break;
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
  try {
    $("name").value = localStorage.getItem("kb:name") ?? "";
  } catch {
  }
  var rememberName = () => {
    try {
      localStorage.setItem("kb:name", nameValue());
    } catch {
    }
  };
  $("create").onclick = () => {
    rememberName();
    socket.send({ type: "create", name: nameValue() });
  };
  var join = () => {
    rememberName();
    socket.send({ type: "join", code: $("joinCode").value, name: nameValue() });
  };
  $("join").onclick = join;
  $("joinCode").addEventListener("keydown", (e) => {
    if (e.key === "Enter") join();
  });
  $("levelChips").addEventListener("change", (e) => {
    const levels = selectedLevels();
    if (levels.length > 0) socket.send({ type: "settings", levels });
    else e.target.checked = true;
  });
  $("start").onclick = () => socket.send({ type: "start" });
  $("ready").onclick = () => socket.send({ type: "ready" });
  $("rematch").onclick = () => socket.send({ type: "rematch" });
  $("leave").onclick = () => location.reload();
  $("answer").addEventListener("keydown", (e) => {
    if (e.key !== "Enter" || e.isComposing || e.keyCode === 229) return;
    const input = e.currentTarget;
    if (!input.value.trim() || input.disabled) return;
    socket.send({ type: "answer", challengeId, text: input.value });
    input.disabled = true;
  });
})();
