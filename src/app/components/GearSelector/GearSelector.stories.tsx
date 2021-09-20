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
  <GearSelector selected={'Synth'} onChange={console.log} />
);

export const SelectEffect = (): JSX.Element => (
  <GearSelector selected={'Effect'} onChange={console.log} />
);

export const SelectDrumMachine = (): JSX.Element => (
  <GearSelector selected={'Drum'} onChange={console.log} />
);
