import React from 'react';
import styles from './InputBar.module.css';

export type InputBarProps = {
  type?: 'search' | 'add';
};

export default function InputBar({ type }: InputBarProps): JSX.Element {
  return (
    <form>
      <input
        type={type === 'search' ? 'search' : 'text'}
        placeholder={type === 'search' ? 'search' : 'add gear'}
        className={styles.input}
      />
    </form>
  );
}
