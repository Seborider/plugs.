import React from 'react';
import type { ReactNode } from 'react';
import Logo from '../Logo/Logo';
import BurgerButton from '../BurgerButton/BurgerButton';
import BackButton from '../BackButton/BackButton';
import InputBar from '../InputBar/InputBar';
import Typography from '../Typography/Typography';
import styles from './Header.module.css';

type HeaderProps = {
  text?: ReactNode;
  withLogo?: boolean;
  withBackButton?: boolean;
  withBurgerButton?: boolean;
  withInputBar?: boolean;
  type?: 'search' | 'add';
  className?: string;
  isHighlighted?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onClick?: () => void;
};

export default function Header({
  text,
  withLogo,
  withBackButton,
  withBurgerButton,
  withInputBar,
  className,
  type,
  isHighlighted,
  value,
  onChange,
  onClick,
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
          <BurgerButton isHighlighted={isHighlighted} onClick={onClick} />
        </div>
      )}
      {withBackButton && (
        <div className={styles.backButton}>
          <BackButton isHighlighted={isHighlighted} />
        </div>
      )}
      {text && (
        <div className={styles.headline}>
          <Typography size="l">{text}</Typography>
        </div>
      )}
      {withInputBar && onChange && (
        <div className={styles.inputBar}>
          <InputBar type={type} value={value} onChange={onChange} />
        </div>
      )}
    </header>
  );
}
