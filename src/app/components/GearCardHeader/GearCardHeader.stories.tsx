import React from 'react';
import GearCardHeader from './GearCardHeader';

export default {
  title: 'Component/GearCardHeader',
  component: GearCardHeader,
};

export const Drum = (): JSX.Element => (
  <GearCardHeader name="808" type="Drum" />
);
export const Effect = (): JSX.Element => (
  <GearCardHeader name="Big Sky" type="Effect" />
);
export const Synth = (): JSX.Element => (
  <GearCardHeader name="Moog" type="Synth" />
);
