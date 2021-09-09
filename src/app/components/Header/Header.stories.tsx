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
  <Header children={'Search'} withInputBar type={'search'}></Header>
);
export const AddHeader = (): JSX.Element => (
  <Header children={'Add'} withInputBar type={'add'}></Header>
);
export const MixerHeader = (): JSX.Element => <Header>Mixer</Header>;
export const EditHeader = (): JSX.Element => (
  <Header withBackButton>Edit</Header>
);