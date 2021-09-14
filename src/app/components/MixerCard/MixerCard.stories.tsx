import React from 'react';
import MixerCard from './MixerCard';

export default {
  title: 'Component/MixerCard',
  Component: MixerCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: '!padded',
  },
};

export const MixCard = (): JSX.Element => (
  <MixerCard gearname="Moog" channel="2" />
);
