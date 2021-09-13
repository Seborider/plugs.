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
  <GearInput onClick={console.log} placeholder="Output to" />
);
export const AddGearInput = (): JSX.Element => (
  <GearInput onClick={console.log} placeholder="Input from" />
);
export const AddGearMidiOut = (): JSX.Element => (
  <GearInput onClick={console.log} placeholder="MIDI Out to" />
);
export const AddGearMidiIn = (): JSX.Element => (
  <GearInput onClick={console.log} placeholder="MIDI In from" />
);
export const AddGearUSBPort = (): JSX.Element => (
  <GearInput onClick={console.log} placeholder="USB Port" />
);
