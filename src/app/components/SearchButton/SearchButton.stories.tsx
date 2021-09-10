import React from 'react';
import SearchButton from './SearchButton';

export default {
  title: 'Component/SearchButton',
  component: SearchButton,
};

export const SearchButtonInactive = (): JSX.Element => <SearchButton />;
export const SearchButtonActive = (): JSX.Element => (
  <SearchButton isHighlighted />
);
