import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchIcon from '../assets/SearchIcon';
import HomeIcon from '../assets/HomeIcon';
import MixerIcon from '../assets/MixerIcon';
import AddIcon from '../assets/AddIcon';

export type NavBarProps = {
  selected: 'Search' | 'Home' | 'Mixer' | 'Add';
  onTypeClick: (type: string) => void;
  className?: string;
};

export default function NavBar({
  selected,
  onTypeClick,
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
      <Link
        to=""
        className={style.button}
        onChange={() => onTypeClick('Search')}
      >
        <SearchIcon {...(selected === 'Search' ? active : inactive)} />
      </Link>

      <Link to="" className={style.button} onChange={() => onTypeClick('Home')}>
        <HomeIcon {...(selected === 'Home' ? active : inactive)} />
      </Link>

      <Link
        to=""
        className={style.button}
        onChange={() => onTypeClick('Mixer')}
      >
        <MixerIcon {...(selected === 'Mixer' ? active : inactive)} />
      </Link>

      <Link to="" className={style.button} onChange={() => onTypeClick('Add')}>
        <AddIcon {...(selected === 'Add' ? active : inactive)} />
      </Link>
    </nav>
  );
}
