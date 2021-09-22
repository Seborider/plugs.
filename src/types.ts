import type { ObjectId } from 'bson';

export type Gear = {
  iconType: 'Synth' | 'Effect' | 'Drum';
  name: string;
  connections: { channel: string; connection: string }[];
  _id: ObjectId;
};

export type MixerGear = {
  name: string;
  connections: { channel: string; connection: string }[];
  _id: ObjectId;
};
