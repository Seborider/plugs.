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

export async function readSingleGear(name: string): Promise<Gear | null> {
  const gearCollection = getGearCollection();
  const singleGear = await gearCollection.findOne({ name });
  return singleGear;
}

export async function deleteGear(name: string): Promise<void> {
  const gearCollection = getGearCollection();
  await gearCollection.deleteOne({ name });
}

export async function findGear(searchName: string): Promise<Gear[] | null> {
  const gearCollection = getGearCollection();
  const result = await gearCollection
    .find<Gear>({ name: { $regex: new RegExp(searchName, 'i') } })
    .toArray();
  return result;
}

export async function editGear(name: string, gear: Gear): Promise<void> {
  const gearCollection = getGearCollection();
  await gearCollection.updateOne({ name }, { $set: gear });
}
