import React from 'react';
import AddButton from './AddButton';

export default {
  title: 'Component/AddButton',
  component: AddButton,
};

export const AddButtonActive = (): JSX.Element => <AddButton isHighlighted />;
export const AddButtonInactive = (): JSX.Element => <AddButton />;
