import React from 'react';
import GearInput from './GearInput';

export default {
  title: 'Component/GearInput',
  component: GearInput,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: '!padded',
  },
};

export const AddGearOutput = (): JSX.Element => (
  <GearInput
    onClick={console.log}
    placeholder="Output to"
    onChange={console.log}
  />
);
export const AddGearInput = (): JSX.Element => (
  <GearInput
    onClick={console.log}
    placeholder="Input from"
    onChange={console.log}
  />
);
export const AddGearMidiOut = (): JSX.Element => (
  <GearInput
    onClick={console.log}
    placeholder="MIDI Out to"
    onChange={console.log}
  />
);
export const AddGearMidiIn = (): JSX.Element => (
  <GearInput
    onClick={console.log}
    placeholder="MIDI In from"
    onChange={console.log}
  />
);
export const AddGearUSBPort = (): JSX.Element => (
  <GearInput
    onClick={console.log}
    placeholder="USB Port"
    onChange={console.log}
  />
);
