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

export const AddGear = (): JSX.Element => <GearInput />;
