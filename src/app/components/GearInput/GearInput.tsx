import React from 'react';
import Typography from '../Typography/Typography';
import style from './GearInput.module.css';

// export type GearInputProps = {};

export default function GearInput(): JSX.Element {
  return (
    <section>
      <div>
        <label className={style.switch}>
          <input type="checkbox" />
          <span className={`${style.slider} ${style.round}`}></span>
        </label>
      </div>
    </section>
  );
}
