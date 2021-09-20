import type { Gear } from '../../types';
import { getGearCollection } from './database';

export async function addGear(gear: Gear): Promise<void> {
  const items = getGearCollection();
  items.insertOne(gear);
}
