import React from 'react';
import type { ReactNode } from 'react';
import Logo from '../Logo/Logo';
import BurgerButton from '../BurgerButton/BurgerButton';
import BackButton from '../BackButton/BackButton';
import InputBar from '../InputBar/InputBar';
import Typography from '../Typography/Typography';
import styles from './Header.module.css';

type HeaderProps = {
  children?: ReactNode;
  withLogo?: boolean;
  withBackButton?: boolean;
  withBurgerButton?: boolean;
  withInputBar?: boolean;
  type?: 'search' | 'add';
  className?: string;
};

export default function Header({
  children,
  withLogo,
  withBackButton,
  withBurgerButton,
  withInputBar,
  className,
  type,
}: HeaderProps): JSX.Element {
  return (
    <header
      className={`${styles.headerContainer} ${className} ${
        withLogo ? styles.headerContainer : styles.headerContainer__NoLogo
      }`}
    >
      {withLogo && (
        <div className={styles.logo}>
          <Logo />
        </div>
      )}
      {withBurgerButton && (
        <div className={styles.burgerButton}>
          <BurgerButton />
        </div>
      )}
      {withBackButton && (
        <div className={styles.backButton}>
          <BackButton />
        </div>
      )}
      {children && (
        <div className={styles.headline}>
          <Typography size="l">{children}</Typography>
        </div>
      )}
      {withInputBar && (
        <div className={styles.inputBar}>
          <InputBar type={type} />
        </div>
      )}
    </header>
  );
}
