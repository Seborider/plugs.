import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchIcon from '../assets/SearchIcon';
import HomeIcon from '../assets/HomeIcon';
import MixerIcon from '../assets/MixerIcon';
import AddIcon from '../assets/AddIcon';

type NavBarProps = {
  selected: 'Search' | 'Home' | 'Mixer' | 'Add';

  className?: string;
};

export default function NavBar({
  selected,

  className,
}: NavBarProps): JSX.Element {
  const active = {
    fill: 'var(--primary-accent)',
    stroke: 'var(--primary-accent)',
  };

  const inactive = {
    stroke: 'var(--navigation-icon-color)',
    fill: 'var(--navigation-icon-color)',
  };
  return (
    <nav className={`${style.navContainer} ${className}`}>
      <Link to="/search" className={style.link}>
        <SearchIcon {...(selected === 'Search' ? active : inactive)} />
      </Link>

      <Link to="/" className={style.link}>
        <HomeIcon {...(selected === 'Home' ? active : inactive)} />
      </Link>

      <Link to="/mixer" className={style.link}>
        <MixerIcon {...(selected === 'Mixer' ? active : inactive)} />
      </Link>

      <Link to="" className={style.link}>
        <AddIcon {...(selected === 'Add' ? active : inactive)} />
      </Link>
    </nav>
  );
}
