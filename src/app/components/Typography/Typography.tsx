import React from 'react';
import styles from './Typography.module.css';

export type TypographyProps = {
  size: 's' | 'm' | 'l';
  color?: 'light' | 'dark';
  children: React.ReactNode;
};

export default function Typography({
  size,
  children,
  color,
}: TypographyProps): JSX.Element {
  if (size === 's') {
    return <h3 className={styles.headlineS}>{children}</h3>;
  } else if (size === 'm') {
    return (
      <h2
        className={
          color === 'light' ? styles.headlineMLight : styles.headlineMDark
        }
        color={color}
      >
        {children}
      </h2>
    );
  } else {
    return <h1 className={styles.headlineL}>{children}</h1>;
  }
}
