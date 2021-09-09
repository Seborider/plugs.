import React from 'react';
import BackButton from './BackButton';

export default {
  title: 'Component/BackButton',
  component: BackButton,
};

export const BackButtonInactive = (): JSX.Element => <BackButton />;
export const BackButtonActive = (): JSX.Element => <BackButton isHighlighted />;
