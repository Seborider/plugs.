import React from 'react';
import styles from './InputBar.module.css';

type InputBar = {
  input?: 'Search' | 'Add';
};

export default function InputBar({ input }: InputBar): JSX.Element {
  return (
    <form>
      {input === 'Search' && (
        <input type="search" placeholder="Search" className={styles.input} />
      )}
      {input === 'Add' && (
        <input type="text" placeholder="Add gear" className={styles.input} />
      )}
    </form>
  );
}
