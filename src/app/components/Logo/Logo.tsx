import React from 'react';
import LogoIcon from '../assets/LogoIcon';
import styles from './Logo.module.css';

export default function Logo(): JSX.Element {
  return <LogoIcon className={styles.logo} fill={'var(--primary-accent)'} />;
}
