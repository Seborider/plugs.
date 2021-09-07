import React from 'react';
import BurgerButton from './BurgerButton';

export default {
  title: 'Component/BurgerButton',
  component: BurgerButton,
};

export const BurgerButtonInactive = (): JSX.Element => <BurgerButton />;
export const BurgerButtonActive = (): JSX.Element => (
  <BurgerButton isHighlighted />
);
