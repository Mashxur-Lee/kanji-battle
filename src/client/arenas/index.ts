// The five arenas built from the Blender scripts, by background id.
import type { Env } from './kit';
import { buildCastle } from './castle';
import { buildForest } from './forest';
import { buildPlains } from './plains';
import { buildSwamp } from './swamp';
import { buildWorldTree } from './worldtree';

export type { Env } from './kit';
export type ArenaTime = 'day' | 'sunset' | 'night';
const BUILDERS: Record<string, (time: ArenaTime, lite: boolean) => Env> = {
  forest: buildForest,
  plains: buildPlains,
  swamp: buildSwamp,
  worldtree: buildWorldTree,
  castle: buildCastle,
};
export function buildEnv(id: string, time: ArenaTime, lite: boolean): Env | null {
  const b = BUILDERS[id];
  return b ? b(time, lite) : null;
}
