import React from 'react';
import BurgerButtonIcon from '../assets/BurgerButtonIcon';
import styles from './BurgerButton.module.css';

type BurgerButtonProps = {
  isHighlighted?: boolean;
  className?: string;
};

export default function BurgerButton({
  isHighlighted,
  className,
}: BurgerButtonProps): JSX.Element {
  return (
    <button className={`${styles.burgerButton} ${className}`}>
      <BurgerButtonIcon
        fill={
          isHighlighted
            ? 'var(--primary-accent)'
            : 'var(--navigation-icon-color)'
        }
      />
    </button>
  );
}
