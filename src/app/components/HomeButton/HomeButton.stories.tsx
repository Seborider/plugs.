import React from 'react';
import HomeButton from './HomeButton';

export default {
  title: 'Component/HomeButton',
  component: HomeButton,
};

export const HomeButtonInactive = (): JSX.Element => <HomeButton />;
export const HomeButtonActive = (): JSX.Element => <HomeButton isHighlighted />;
