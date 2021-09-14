import React from 'react';
import SearchIcon from '../assets/SearchIcon';
import style from './SearchButton.module.css';

type SearchButtonProps = {
  isHighlighted?: boolean;
  className?: string;
};

export default function SearchButton({
  isHighlighted,
  className,
}: SearchButtonProps): JSX.Element {
  return (
    <button className={`${style.searchButton} ${className}`}>
      <SearchIcon
        fill={
          isHighlighted
            ? 'var(--primary-accent)'
            : 'var(--navigation-icon-color)'
        }
      />
    </button>
  );
}
