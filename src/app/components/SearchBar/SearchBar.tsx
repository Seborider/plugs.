import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(): JSX.Element {
  return (
    <form>
      <input type="search" placeholder="Search" className={styles.search} />
    </form>
  );
}
