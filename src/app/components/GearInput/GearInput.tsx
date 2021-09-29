import React from 'react';
import style from './GearInput.module.css';

export type GearInputProps = {
  placeholder:
    | 'Output to'
    | 'Input from'
    | 'MIDI Out to'
    | 'MIDI In from'
    | 'USB Port'
    | string;
  value?: string;
  onClick: () => void;
  onChange: (value: string) => void;
  className?: string;
  type?: string;
  checked?: boolean;
};

export default function GearInput({
  placeholder,
  value,
  onChange,
  onClick,
  checked,
}: GearInputProps): JSX.Element {
  return (
    <section className={style.container}>
      <label className={style.switch}>
        <input checked={checked} type="checkbox" onClick={onClick} />
        <span className={`${style.slider} ${style.round}`}></span>
      </label>

      <div className={style.formWrapper}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          className={style.input}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </section>
  );
}
