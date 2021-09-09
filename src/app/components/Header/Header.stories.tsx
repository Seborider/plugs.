import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  Component: Header,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: '!padded',
  },
};

export const LogoHeader = (): JSX.Element => (
  <Header withLogo withBurgerButton />
);

export const LogoHeaderModal = (): JSX.Element => (
  <Header withLogo withBurgerButton isHighlighted />
);
export const SearchHeader = (): JSX.Element => (
  <Header withInputBar text={'Search'} type={'search'}></Header>
);
export const AddHeader = (): JSX.Element => (
  <Header withInputBar text={'Add'} type={'add'}></Header>
);
export const MixerHeader = (): JSX.Element => <Header text={'Mixer'}></Header>;
export const EditHeader = (): JSX.Element => (
  <Header text={'Edit'} withBackButton></Header>
);
