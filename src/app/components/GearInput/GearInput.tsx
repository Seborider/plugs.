import React, { useState } from 'react';
import style from './GearInput.module.css';

export type GearInputProps = {
  placeholder:
    | 'Output to'
    | 'Input from'
    | 'MIDI Out to'
    | 'MIDI In from'
    | 'USB Port';
  onClick: (type: boolean) => void;
};

export default function GearInput({
  placeholder,
}: GearInputProps): JSX.Element {
  const [toggle, setToggle] = useState(false);

  return (
    <section className={style.container}>
      <label className={style.switch}>
        <input
          type="checkbox"
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
        />
        <span className={`${style.slider} ${style.round}`}></span>
      </label>

      <form className={style.formWrapper}>
        <input type="text" placeholder={placeholder} className={style.input} />
      </form>
    </section>
  );
}
