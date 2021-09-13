import React from 'react';
import Typography from '../Typography/Typography';
import style from './MixerCard.module.css';

export default function MixerCard(): JSX.Element {
  return (
    <section className={style.cardWrapper}>
      <div>
        <Typography size="m" color="dark" children="Moog Matriarch" />
      </div>
      <div>
        <Typography size="m" color="red" children="19/20" />
      </div>
    </section>
  );
}
