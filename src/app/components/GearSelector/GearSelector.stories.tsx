import React from 'react';
import GearSelector from './GearSelector';

export default {
  title: 'Component/GearSelector',
  Component: GearSelector,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: '!padded',
  },
};

export const SelectSynthesizer = (): JSX.Element => (
  <GearSelector withSynth selected={'Synth'} onTypeClick={console.log} />
);

export const SelectEffect = (): JSX.Element => (
  <GearSelector withEffect selected={'Effect'} onTypeClick={console.log} />
);

export const SelectDrumMachine = (): JSX.Element => (
  <GearSelector withDrum selected={'Drum'} onTypeClick={console.log} />
);
