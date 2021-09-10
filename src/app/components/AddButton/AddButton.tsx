import React from 'react';
import AddIcon from '../assets/AddIcon';
import style from './AddButton.module.css';

type AddButtonProps = {
  isHighlighted?: boolean;
  className?: string;
};

export default function AddButton({
  isHighlighted,
  className,
}: AddButtonProps): JSX.Element {
  return (
    <button className={`${style.addButton} ${className}`}>
      <AddIcon
        fill={
          isHighlighted
            ? 'var(--primary-accent)'
            : 'var(--navigation-icon-color)'
        }
      />
    </button>
  );
}
