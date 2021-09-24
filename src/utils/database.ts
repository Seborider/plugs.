import type { Collection } from 'mongodb';
import { MongoClient } from 'mongodb';
import type { Gear } from '../types';

let client: MongoClient;

export async function connectDatabase(url: string): Promise<void> {
  client = new MongoClient(url);
  await client.connect();
}

export function getCollection<T>(name: string): Collection<T> {
  return client.db().collection<T>(name);
}

export function getGearCollection(): Collection<Gear> {
  return getCollection<Gear>('gear');
}
