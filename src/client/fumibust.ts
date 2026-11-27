// 0.9.9.9.9.6 (round 5): Master Fumi as a 2.5D portrait — head, neck and shoulders, drawn in layers (the owner: "the
// tutorial wizard is the arena's 2D one; I need the 2.5D one where I see only his head and neck and his facial
// expressions"). Each layer sits at its own depth (robe and back hair behind, the face, the beard and moustache in
// front, the hat in front of all), so the head turns as the pointer moves. His face moves: he blinks, his mouth moves
// as he talks, and his brows, eyes and mouth change with his mood — glad (eyes closed in a smile), amazed (wide eyes,
// round mouth), thinking (a raised brow, eyes up, a flat mouth), a bow (eyes closed, calm).
// The moods are set on the guide's box (data-mood, tutorguide.ts); the CSS shows the right eyes / mouth / brows.

/** the portrait, as an svg (one per guide) */
export function fumiBust(): string {
  return `<svg class="fumi" viewBox="0 0 200 240" aria-hidden="true">
  <defs>
    <linearGradient id="fuRobe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a5fd0"/><stop offset="1" stop-color="#1d2f78"/></linearGradient>
    <linearGradient id="fuHat" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a6fe0"/><stop offset=".6" stop-color="#2a45a8"/><stop offset="1" stop-color="#1a2c70"/></linearGradient>
    <radialGradient id="fuSkin" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#ffe0c4"/><stop offset=".7" stop-color="#f3c49c"/><stop offset="1" stop-color="#d99d72"/></radialGradient>
    <linearGradient id="fuHair" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d9dcef"/></linearGradient>
    <linearGradient id="fuGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0b8"/><stop offset=".5" stop-color="#f2c45a"/><stop offset="1" stop-color="#b07a1c"/></linearGradient>
  </defs>
  <g class="fu-l fu-back">
    <path class="fu-robe" d="M14 240c6-44 40-66 86-66s80 22 86 66z" fill="url(#fuRobe)"/>
    <path d="M72 176c10 12 46 12 56 0l8 6c-14 18-58 18-72 0z" fill="url(#fuGold)"/>
    <path class="fu-hairback" d="M58 86c-16 24-20 66-12 104 8 10 22 14 30 8l48 0c8 6 22 2 30-8 8-38 4-80-12-104z" fill="url(#fuHair)"/>
  </g>
  <g class="fu-l fu-mid">
    <rect x="88" y="150" width="24" height="28" rx="8" fill="#e6b28a"/>
    <ellipse cx="62" cy="114" rx="7" ry="11" fill="#eab48c"/><ellipse cx="138" cy="114" rx="7" ry="11" fill="#eab48c"/>
    <ellipse class="fu-face" cx="100" cy="112" rx="38" ry="44" fill="url(#fuSkin)"/>
    <ellipse class="fu-cheek" cx="78" cy="126" rx="8" ry="5" fill="#ff9aa2" opacity=".45"/><ellipse class="fu-cheek" cx="122" cy="126" rx="8" ry="5" fill="#ff9aa2" opacity=".45"/>
    <g class="fu-eyes">
      <g class="fu-eyes-open">
        <ellipse cx="85" cy="108" rx="7.5" ry="8.5" fill="#fff"/><ellipse cx="115" cy="108" rx="7.5" ry="8.5" fill="#fff"/>
        <g class="fu-iris"><circle cx="86" cy="109" r="4.6" fill="#2b4fb8"/><circle cx="116" cy="109" r="4.6" fill="#2b4fb8"/><circle cx="86" cy="109" r="2.2" fill="#101830"/><circle cx="116" cy="109" r="2.2" fill="#101830"/><circle cx="87.6" cy="107" r="1.3" fill="#fff"/><circle cx="117.6" cy="107" r="1.3" fill="#fff"/></g>
      </g>
      <g class="fu-eyes-happy" fill="none" stroke="#3a2a1c" stroke-width="3.2" stroke-linecap="round"><path d="M78 110q7-8 14 0"/><path d="M108 110q7-8 14 0"/></g>
      <g class="fu-eyes-calm" fill="none" stroke="#3a2a1c" stroke-width="3" stroke-linecap="round"><path d="M78 108q7 5 14 0"/><path d="M108 108q7 5 14 0"/></g>
    </g>
    <g class="fu-brows" fill="#f4f4fb" stroke="#c9cbe0" stroke-width="1">
      <path class="fu-brow fu-brow-l" d="M72 96c6-7 16-8 22-3-7 0-14 2-22 5z"/>
      <path class="fu-brow fu-brow-r" d="M128 96c-6-7-16-8-22-3 7 0 14 2 22 5z"/>
    </g>
    <ellipse cx="100" cy="122" rx="7" ry="8.5" fill="#e3a47c"/>
  </g>
  <g class="fu-l fu-front">
    <path class="fu-beard" d="M64 128c2 30 12 64 36 92 24-28 34-62 36-92-8 10-20 16-36 16s-28-6-36-16z" fill="url(#fuHair)"/>
    <path d="M78 196c6 8 14 16 22 24 8-8 16-16 22-24" fill="none" stroke="#cfd2e6" stroke-width="2"/>
    <g class="fu-mouth">
      <path class="fu-m fu-m-smile" d="M90 140q10 8 20 0" fill="none" stroke="#7a3b2e" stroke-width="3" stroke-linecap="round"/>
      <ellipse class="fu-m fu-m-talk" cx="100" cy="142" rx="7" ry="5" fill="#7a2e2a"/>
      <path class="fu-m fu-m-grin" d="M86 138q14 16 28 0z" fill="#7a2e2a" stroke="#5a1e1a" stroke-width="1.5" stroke-linejoin="round"/>
      <ellipse class="fu-m fu-m-o" cx="100" cy="142" rx="5" ry="6.5" fill="#7a2e2a"/>
      <path class="fu-m fu-m-flat" d="M91 141h18" stroke="#7a3b2e" stroke-width="3" stroke-linecap="round"/>
    </g>
    <path class="fu-tache" d="M100 131c-6-4-18-4-26 4 4 4 12 6 18 3 4-2 6-4 8-7 2 3 4 5 8 7 6 3 14 1 18-3-8-8-20-8-26-4z" fill="url(#fuHair)" stroke="#cfd2e6" stroke-width="1"/>
  </g>
  <g class="fu-l fu-hat">
    <path d="M46 80c-6-2-8 4-2 8 30 12 82 12 112 0 6-4 4-10-2-8-36 12-72 12-108 0z" fill="url(#fuHat)" stroke="#16245e" stroke-width="1.5"/>
    <path d="M58 80c8-30 24-54 52-72 10-6 24-6 34 2-14-2-26 6-32 18 8 18 14 34 20 52-24 8-50 8-74 0z" fill="url(#fuHat)" stroke="#16245e" stroke-width="1.5"/>
    <path d="M58 74c24 8 50 8 74 0l2 8c-26 8-52 8-78 0z" fill="url(#fuGold)"/>
    <path class="fu-star" d="M96 38l3.6 7.4 8.2 1.2-6 5.8 1.4 8.2-7.2-3.9-7.3 3.9 1.4-8.2-6-5.8 8.2-1.2z" fill="url(#fuGold)" stroke="#9a6a18" stroke-width=".8"/>
  </g>
</svg>`;
}
