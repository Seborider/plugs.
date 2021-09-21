import type { Gear } from '../types';
import { getGearCollection } from './database';

export async function addGear(gear: Gear): Promise<void> {
  const items = getGearCollection();
  await items.insertOne(gear);
}

export async function readGear(): Promise<Gear[]> {
  const gearCollection = getGearCollection();
  const gear = await gearCollection.find().toArray();
  return gear;
}
