export type Gear = {
  iconType: 'Synth' | 'Effect' | 'Drum';
  name: string;
  connections: { channel: string; connection: string }[];
};

export type MixerGear = {
  name: string;
  connections: { channel: string; connection: string }[];
};
