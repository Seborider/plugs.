import React from 'react';
import LogoIcon from '../assets/LogoIcon';
import styles from './Logo.module.css';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps): JSX.Element {
  return <LogoIcon className={styles.logo} fill={'var(--primary-accent)'} />;
}
