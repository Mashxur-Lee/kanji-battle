// 0.9.9.9.9.5: the swords — five blades unlocked by level, each better than the last (Iron Blade → Knight's Longsword →
// Ember Saber → Moonlit Katana → Dragonfang). They are "staffs" to the rest of the game (the same Staff: a group, a
// "gem", a glow, a colour, materials, update), so the hand, the hits, the tints and the previews all work; what differs
// is the gem — a small light at the tip of the blade that lights up as you cast — and how they are swung (arena3d:
// they shake while you write instead of drawing the ∞, and a cast is a slash whose wave flies at the enemy).
// Staff units: the hand grips at y ≈ -0.24 (charkit.holdStaff lifts the staff 0.24 above the palm); the blade points up.
import * as THREE from 'three';
import type { Staff } from './staffs3d';

export interface SwordDef { id: string; level: number; gem: string; blade: string; edge: string; guard: string; grip: string; tip: number; width: number; curve: number; wavy?: boolean; runes?: string; katana?: boolean; fang?: boolean }
/** the five, weakest first */
export const SWORD_LOOKS: Record<string, SwordDef> = {
  iron: { id: 'iron', level: 3, gem: '#dfe8ff', blade: '#8b929c', edge: '#c9ced6', guard: '#6d5a3a', grip: '#4a2f1c', tip: 0.86, width: 0.105, curve: 0 },
  longsword: { id: 'longsword', level: 6, gem: '#7cc4ff', blade: '#b9c3cf', edge: '#eef3fa', guard: '#c7ccd6', grip: '#2a3550', tip: 1.02, width: 0.112, curve: 0, runes: '#6fb8ff' },
  saber: { id: 'saber', level: 10, gem: '#ff8a2a', blade: '#5a4a46', edge: '#ffb070', guard: '#b8862e', grip: '#3a1a12', tip: 0.98, width: 0.125, curve: 0.12, runes: '#ff6a1a' },
  katana: { id: 'katana', level: 15, gem: '#9ff6ff', blade: '#d6e2ec', edge: '#ffffff', guard: '#2a2c34', grip: '#1c2236', tip: 1.1, width: 0.08, curve: 0.16, katana: true, runes: '#7ff0ff' },
  dragonfang: { id: 'dragonfang', level: 20, gem: '#ffd34a', blade: '#2a2236', edge: '#ffcf5a', guard: '#8a5a1a', grip: '#2a0f0f', tip: 1.13, width: 0.135, curve: 0.05, wavy: true, fang: true, runes: '#c06bff' },
};
export const isSword = (id: string | null | undefined) => !!id && id in SWORD_LOOKS;

// (0.9.9.9.9.5: held by the handle — the hand is at y = 0: the handle's middle there, the guard above the fist)
const LIFT = 0.24, GRIP_Y = -0.24 + LIFT, GUARD_Y = -0.06 + LIFT;
const tipOf = (d: SwordDef) => d.tip + LIFT;

/** the blade's outline (x across, y along), from the guard to the tip; curved swords bend towards +x */
function bladeShape(d: SwordDef) {
  const L = tipOf(d) - GUARD_Y, w = d.width / 2, n = 18;
  const bend = (t: number) => d.curve * L * t * t;
  const half = (t: number) => {
    let h = w * (t < 0.82 ? 1 - 0.18 * t : (1 - 0.18 * 0.82) * (1 - (t - 0.82) / 0.18) ** (d.katana ? 0.6 : 0.9));
    if (d.wavy) h *= 1 + 0.22 * Math.sin(t * Math.PI * 7) * (1 - t);
    if (d.katana) h *= t < 0.9 ? 1 : 1;
    return Math.max(0, h);
  };
  const s = new THREE.Shape();
  s.moveTo(-w + bend(0), 0);
  for (let i = 0; i <= n; i++) { const t = i / n; s.lineTo(bend(t) - half(t) * (d.katana ? 0.55 : 1), t * L); }
  for (let i = n; i >= 0; i--) { const t = i / n; s.lineTo(bend(t) + half(t) * (d.katana ? 1.45 : 1), t * L); }
  s.closePath();
  return s;
}

export function buildSword(id: string, glowTex: THREE.Texture): Staff {
  const d = SWORD_LOOKS[id] ?? SWORD_LOOKS.iron;
  const group = new THREE.Group();
  const materials: THREE.MeshStandardMaterial[] = [];
  // (steel that shines by the arena's own light: very metallic steel only mirrors its surroundings, and the arenas have
  // little to mirror — the blades came out black)
  const mat = (c: string, o: Partial<THREE.MeshStandardMaterialParameters> = {}) => { const m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.4, metalness: 0.3, ...o }); materials.push(m); return m; };

  // the blade: a flat outline with bevelled edges (a diamond section), the steel darker in the middle, bright at the edge
  const bladeGeo = new THREE.ExtrudeGeometry(bladeShape(d), { depth: 0.006, bevelEnabled: true, bevelThickness: 0.009, bevelSize: d.width * 0.18, bevelSegments: 1, curveSegments: 4 });
  bladeGeo.translate(0, GUARD_Y + 0.02, -0.003);
  const bladeMat = mat(d.blade, { roughness: 0.32, metalness: 0.35, emissive: new THREE.Color(d.runes ?? '#000000'), emissiveIntensity: 0 });
  const blade = new THREE.Mesh(bladeGeo, bladeMat);
  group.add(blade);
  // the edge: a thin bright line along both sides (a second, slightly bigger outline behind the blade)
  const edgeGeo = new THREE.ExtrudeGeometry(bladeShape({ ...d, width: d.width * 1.5 }) /* (beyond the blade's bevel, which widens it by a third) */, { depth: 0.002, bevelEnabled: false, curveSegments: 4 });
  edgeGeo.translate(0, GUARD_Y + 0.02, -0.001);
  const edgeMat = mat(d.edge, { roughness: 0.25, metalness: 0.3, emissive: new THREE.Color(d.edge), emissiveIntensity: 0.3 });
  group.add(new THREE.Mesh(edgeGeo, edgeMat));
  // runes / a fuller down the middle of the better blades — they glow as you cast
  let runeMat: THREE.MeshStandardMaterial | null = null;
  if (d.runes) {
    runeMat = new THREE.MeshStandardMaterial({ color: '#111111', emissive: new THREE.Color(d.runes), emissiveIntensity: 0.6, roughness: 0.5 });
    const L = tipOf(d) - GUARD_Y;
    const runeGeo = new THREE.BoxGeometry(d.width * 0.1, L * 0.62, 0.022);
    const r = new THREE.Mesh(runeGeo, runeMat);
    r.position.set(d.curve * L * 0.18, GUARD_Y + 0.06 + L * 0.31, 0);
    r.rotation.z = -Math.atan(d.curve * 0.7);
    group.add(r);
  }
  // the guard
  const guardMat = mat(d.guard, { roughness: 0.35, metalness: 0.45 });
  if (d.katana) {
    const tsuba = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.018, 24), guardMat);
    tsuba.position.y = GUARD_Y; group.add(tsuba);
  } else if (d.fang) {
    // wings swept up like a dragon's
    for (const sx of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.24, 5), guardMat);
      wing.position.set(sx * 0.13, GUARD_Y + 0.05, 0); wing.rotation.z = -sx * 0.9; group.add(wing);
    }
    const knot = new THREE.Mesh(new THREE.IcosahedronGeometry(0.05, 0), guardMat); knot.position.y = GUARD_Y; group.add(knot);
  } else {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(d.id === 'iron' ? 0.24 : 0.3, 0.035, 0.05), guardMat);
    bar.position.y = GUARD_Y; group.add(bar);
    if (d.id !== 'iron') for (const sx of [-1, 1]) { const end = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), guardMat); end.position.set(sx * 0.15, GUARD_Y, 0); group.add(end); }
  }
  // the grip (wrapped) and the pommel
  const gripMat = mat(d.grip, { roughness: 0.8, metalness: 0.05 });
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.3, 10, 6), gripMat);
  grip.position.y = GRIP_Y; group.add(grip);
  for (let i = 0; i < 6; i++) { const ring = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.006, 5, 12), gripMat); ring.rotation.x = Math.PI / 2; ring.position.y = GRIP_Y - 0.13 + i * 0.052; group.add(ring); }
  const pommel = new THREE.Mesh(d.fang ? new THREE.OctahedronGeometry(0.05, 0) : new THREE.SphereGeometry(0.042, 12, 10), guardMat);
  pommel.position.y = GRIP_Y - 0.18; group.add(pommel);

  // the "gem": a small light at the tip of the blade — what the cast's wave comes from, what lights up as you cast
  const color = new THREE.Color(d.gem);
  const gemMat = new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: color, emissiveIntensity: 0.4, transparent: true, opacity: 0.6, depthWrite: false, roughness: 0.1 });
  const gem = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 10), gemMat);
  gem.position.set(d.curve * (tipOf(d) - GUARD_Y), tipOf(d), 0);
  gem.renderOrder = 1;
  group.add(gem);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: color.getHex(), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.35 }));
  glow.scale.setScalar(0.2);
  glow.position.copy(gem.position);
  group.add(glow);

  let clock = Math.random() * 10;
  return {
    group, gem, gemMat, glow, color, materials,
    update(_time, dt, charge, fury = 0) {
      clock += dt;
      // the runes and the edge wake up with the charge (and a little with the enemy's fall), a slow pulse at rest
      const pulse = 0.5 + 0.5 * Math.sin(clock * 2.2);
      const wake = Math.max(charge, fury * 0.4);
      if (runeMat) runeMat.emissiveIntensity = 0.3 + 0.2 * pulse + wake * 2.5;
      bladeMat.emissiveIntensity = wake * 0.25;
      edgeMat.emissiveIntensity = 0.3 + wake * 0.9;
      gemMat.opacity = 0.35 + 0.65 * wake;
    },
  };
}
