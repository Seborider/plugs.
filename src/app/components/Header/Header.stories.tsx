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
export const SearchHeader = (): JSX.Element => (
  <Header withInputBar children={'Search'} type={'search'}></Header>
);
export const AddHeader = (): JSX.Element => (
  <Header withInputBar children={'Add'} type={'add'}></Header>
);
export const MixerHeader = (): JSX.Element => (
  <Header children={'Mixer'}></Header>
);
export const EditHeader = (): JSX.Element => (
  <Header children={'Edit'} withBackButton></Header>
);
