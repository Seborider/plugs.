import React from 'react';
import MixerIcon from '../assets/MixerIcon';
import style from './MixerButton.module.css';

type MixerButtonProps = {
  isHighlighted?: boolean;
  className?: string;
};

export default function MixerButton({
  isHighlighted,
  className,
}: MixerButtonProps): JSX.Element {
  return (
    <button className={`${style.mixerButton} ${className}`}>
      <MixerIcon
        fill={
          isHighlighted
            ? 'var(--primary-accent)'
            : 'var(--navigation-icon-color)'
        }
      />
    </button>
  );
}
