import React from 'react';
import styles from './InputBar.module.css';

export default function InputBar(): JSX.Element {
  return (
    <form>
      <input type="text" placeholder="Add gear" className={styles.input} />
    </form>
  );
}
