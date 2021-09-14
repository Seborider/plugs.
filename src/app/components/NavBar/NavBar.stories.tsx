import React from 'react';
import NavBar from './NavBar';

export default {
  title: 'Component/NavBar',
  component: NavBar,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: '!padded',
  },
};

export const NavBarAdd = (): JSX.Element => (
  <NavBar selected="Add" onTypeClick={console.log} />
);
export const NavBarSearch = (): JSX.Element => (
  <NavBar selected="Search" onTypeClick={console.log} />
);
export const NavBarHome = (): JSX.Element => (
  <NavBar selected="Home" onTypeClick={console.log} />
);
export const NavBarMixer = (): JSX.Element => (
  <NavBar selected="Mixer" onTypeClick={console.log} />
);
