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

export const NavBarAdd = (): JSX.Element => <NavBar selected="Add" />;
export const NavBarSearch = (): JSX.Element => <NavBar selected="Search" />;
export const NavBarHome = (): JSX.Element => <NavBar selected="Home" />;
export const NavBarMixer = (): JSX.Element => <NavBar selected="Mixer" />;
