import React from 'react';
import type { ReactNode } from 'react';
import Logo from '../Logo/Logo';
import BurgerButton from '../BurgerButton/BurgerButton';
import styles from './Header.module.css';

type HeaderProps = {
  children?: ReactNode;
  withBackButton?: boolean;
  withInputSearch?: boolean;
  withInputAdd?: boolean;
  className?: string;
};

export default function Header({
  children,
  withBackButton = false,
  withInputSearch = false,
  withInputAdd = false,
  className,
}: HeaderProps): JSX.Element {
  return (
    <header>
      {!children && (
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.burgerButton}>
            <BurgerButton />
          </div>
        </div>
      )}

      <h1>{children}</h1>
    </header>
  );
}
