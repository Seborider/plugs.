import React from 'react';
import MixerButton from './MixerButton';

export default {
  title: 'Component/MixerButton',
  component: MixerButton,
};

export const MixerButtonInactive = (): JSX.Element => <MixerButton />;
export const MixerButtonActive = (): JSX.Element => (
  <MixerButton isHighlighted />
);
