import React from 'react';
import GearCard from './GearCard';

export default {
  title: 'Component/GearCard',
  component: GearCard,
};

const oneConnections = [{ channel: 'Channel 12', connection: 'Output to' }];

const twoConnections = [
  { channel: 'Brute', connection: 'MIDI to' },
  { channel: 'Channel 12', connection: 'Output to' },
];

const threeConnections = [
  { channel: 'NDLR', connection: 'MIDI from' },
  { channel: 'Brute', connection: 'MIDI to' },
  { channel: 'Channel 12', connection: 'Output to' },
];

const fourConnections = [
  { channel: 'Brute', connection: 'Input from' },
  { channel: 'Brute', connection: 'MIDI to' },
  { channel: 'Brute', connection: 'MIDI from' },
  { channel: 'Channel 12', connection: 'Output to' },
];

const fiveConnections = [
  { channel: 'NDLR', connection: 'MIDI from' },
  { channel: 'Brute', connection: 'Input from' },
  { channel: 'Brute', connection: 'MIDI to' },
  { channel: 'Brute', connection: 'MIDI from' },
  { channel: 'Channel 12', connection: 'Output to' },
];
export const CardWithOneConnection = (): JSX.Element => (
  <GearCard iconType="Drum" name="808" connections={oneConnections} />
);

export const CardWithTwoConnections = (): JSX.Element => (
  <GearCard iconType="Drum" name="808" connections={twoConnections} />
);
export const CardWithThreeConnections = (): JSX.Element => (
  <GearCard iconType="Drum" name="808" connections={threeConnections} />
);
export const CardWithFourConnections = (): JSX.Element => (
  <GearCard iconType="Drum" name="808" connections={fourConnections} />
);
export const CardWithFiveConnections = (): JSX.Element => (
  <GearCard iconType="Drum" name="808" connections={fiveConnections} />
);
