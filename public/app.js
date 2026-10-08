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

  // src/client/ui.ts
  var $ = (id) => document.getElementById(id);
  var SCREENS = ["menu", "lobby", "game", "results"];
  var show = (screen) => SCREENS.forEach((s) => $(s).hidden = s !== screen);
  var setError = (text) => {
    $("error").textContent = text;
  };
  function showLobby(code) {
    $("code").textContent = code;
    show("lobby");
  }
  function renderFighters(players2, you2) {
    $("fighters").replaceChildren(
      ...players2.map((p) => {
        const el = document.createElement("div");
        el.className = "fighter" + (p.id === you2 ? " me" : "");
        const name = document.createElement("div");
        name.className = "name";
        name.textContent = p.id === you2 ? `${p.name} (you)` : p.name;
        const bar = document.createElement("div");
        bar.className = "hp";
        const fill = document.createElement("div");
        fill.style.width = `${p.hp}%`;
        bar.append(fill);
        const num = document.createElement("div");
        num.className = "hpnum";
        num.textContent = `${p.hp} HP`;
        el.append(name, bar, num);
        return el;
      })
    );
  }
  function setFeedback(text, kind = "") {
    const el = $("feedback");
    el.textContent = text;
    el.className = "feedback " + kind;
  }
  var raf = 0;
  var stopTimer = () => cancelAnimationFrame(raf);
  function runTimer(durationMs) {
    stopTimer();
    const start = performance.now();
    const tick = () => {
      const left = Math.max(0, 1 - (performance.now() - start) / durationMs);
      $("timerBar").style.width = `${left * 100}%`;
      if (left > 0) raf = requestAnimationFrame(tick);
    };
    tick();
  }
  function getReady() {
    show("game");
    $("roundInfo").textContent = "Get ready\u2026";
    $("kanji").textContent = "\u2026";
    $("answer").disabled = true;
    setFeedback("");
  }
  function startRound(number, kanji, durationMs) {
    show("game");
    $("roundInfo").textContent = `Round ${number}`;
    $("kanji").textContent = kanji;
    const input = $("answer");
    input.disabled = false;
    input.value = "";
    input.focus();
    setFeedback("");
    runTimer(durationMs);
  }
  function endRound(entry, winnerId, you2) {
    stopTimer();
    $("answer").disabled = true;
    const reveal = `${entry.kanji} = ${entry.romaji} (${entry.meaning})`;
    if (winnerId === you2) setFeedback(`You hit! ${reveal}`, "good");
    else if (winnerId) setFeedback(`Opponent was faster. ${reveal}`, "bad");
    else setFeedback(`Time's up! ${reveal}`, "bad");
  }
  function showResults(players2, you2, winnerId, history) {
    const opp = players2.find((p) => p.id !== you2);
    $("resultTitle").textContent = winnerId === you2 ? "\u{1F3C6} Victory!" : "\u{1F480} Defeat";
    $("thOpp").textContent = opp?.name ?? "Opponent";
    $("resultRows").innerHTML = history.map((r, i) => {
      const mark = (id) => id && r.outcomes[id] === "correct" ? '<span class="ok">\u2713 correct</span>' : '<span class="no">\u2717 wrong</span>';
      return `<tr><td>${i + 1}</td><td class="k">${r.entry.kanji}</td>
        <td>${r.entry.romaji}<small>${r.entry.kana}</small></td><td>${r.entry.meaning}</td>
        <td>${mark(you2)}</td><td>${mark(opp?.id)}</td></tr>`;
    }).join("");
    show("results");
  }

  // src/client/main.ts
  var you = "";
  var players = [];
  var socket = new GameSocket(onMessage, () => setError("Disconnected from server"));
  function onMessage(msg) {
    switch (msg.type) {
      case "joined":
        you = msg.you;
        players = msg.players;
        showLobby(msg.code);
        break;
      case "lobby":
        players = msg.players;
        renderFighters(players, you);
        getReady();
        break;
      case "round":
        renderFighters(msg.players, you);
        startRound(msg.number, msg.kanji, msg.durationMs);
        break;
      case "wrong":
        setFeedback("Not quite \u2014 try again!", "bad");
        break;
      case "round_end":
        renderFighters(msg.players, you);
        endRound(msg.entry, msg.winnerId, you);
        break;
      case "game_over":
        stopTimer();
        setTimeout(() => showResults(msg.players, you, msg.winnerId, msg.history), 2e3);
        break;
      case "error":
        setError(msg.message);
        break;
    }
  }
  var nameValue = () => $("name").value.trim() || "Player";
  $("create").onclick = () => socket.send({ type: "create", name: nameValue() });
  $("join").onclick = () => socket.send({ type: "join", code: $("joinCode").value, name: nameValue() });
  $("again").onclick = () => location.reload();
  $("answer").addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const input = e.currentTarget;
    if (!input.value.trim()) return;
    socket.send({ type: "answer", text: input.value });
    input.value = "";
  });
})();
