import React from 'react';
import HomeIcon from '../assets/HomeIcon';
import style from './HomeButton.module.css';

type HomeButtonProps = {
  isHighlighted?: boolean;
  className?: string;
};

export default function HomeButton({
  isHighlighted,
  className,
}: HomeButtonProps): JSX.Element {
  return (
    <button className={`${style.homeButton} ${className}`}>
      <HomeIcon
        fill={
          isHighlighted
            ? 'var(--primary-accent)'
            : 'var(--navigation-icon-color)'
        }
      />
    </button>
  );
}
