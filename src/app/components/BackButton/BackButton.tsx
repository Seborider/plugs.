import React from 'react';
import BackButtonIcon from '../assets/BackButtonIcon';
import styles from './BackButton.module.css';

type BackButtonProps = {
  isHighlighted?: boolean;
  className?: string;
};

export default function BackButton({
  isHighlighted,
  className,
}: BackButtonProps): JSX.Element {
  return (
    <button className={`${styles.backButton} ${className}`}>
      <BackButtonIcon
        fill={
          isHighlighted
            ? 'var(--primary-accent)'
            : 'var(--navigation-icon-color)'
        }
      />
    </button>
  );
}
