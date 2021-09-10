import React from 'react';
import style from './GearInput.module.css';

// export type GearInputProps = {};

export default function GearInput(): JSX.Element {
  return (
    <section className={style.container}>
      <label className={style.switch}>
        <input type="checkbox" />
        <span className={`${style.slider} ${style.round}`}></span>
      </label>

      <form>
        <input type="text" placeholder="asd" className={style.input} />
      </form>
    </section>
  );
}
