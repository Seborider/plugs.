import React from 'react';
import InputBar from './InputBar';

export default {
  title: 'Component/InputBar',
  component: InputBar,
};

export const AddBar = (): JSX.Element => <InputBar type={'add'} />;
export const SearchBar = (): JSX.Element => <InputBar type={'search'} />;
