import React from 'react';
import styles from './InputBar.module.css';

export type InputBarProps = {
  type?: 'search' | 'add';
  value?: string;
  onChange: (value: string) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function InputBar({
  type,
  value,
  onChange,
}: InputBarProps): JSX.Element {
  return (
    <input
      type={type === 'search' ? 'search' : 'text'}
      placeholder={type === 'search' ? 'search' : 'add gear'}
      className={styles.input}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
