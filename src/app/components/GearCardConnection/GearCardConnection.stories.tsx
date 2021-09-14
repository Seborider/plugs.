import React from 'react';
import GearCardConnection from './GearCardConnection';

export default {
  title: 'Component/GearCardConnection',
  component: GearCardConnection,
  parameters: {
    layout: '!padded',
  },
};

export const Cable = (): JSX.Element => (
  <GearCardConnection connection="Output to" channel="19/20" />
);
