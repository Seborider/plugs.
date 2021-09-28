import React from 'react';
import BurgerButtonIcon from '../assets/BurgerButtonIcon';
import styles from './BurgerButton.module.css';

type BurgerButtonProps = {
  isHighlighted?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function BurgerButton({
  isHighlighted,
  className,
  onClick,
}: BurgerButtonProps): JSX.Element {
  return (
    <button className={`${styles.burgerButton} ${className}`} onClick={onClick}>
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
