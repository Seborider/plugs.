import React from 'react';
import GearCardHeader from './GearCardHeader';

export default {
  title: 'Component/GearCardHeader',
  component: GearCardHeader,
};

export const Drum = (): JSX.Element => (
  <GearCardHeader name="808" iconType="Drum" />
);
export const Effect = (): JSX.Element => (
  <GearCardHeader name="Big Sky" iconType="Effect" />
);
export const Synth = (): JSX.Element => (
  <GearCardHeader name="Moog" iconType="Synth" />
);
