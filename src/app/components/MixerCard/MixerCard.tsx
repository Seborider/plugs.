import React from 'react';
import Typography from '../Typography/Typography';
import style from './MixerCard.module.css';

export default function MixerCard(): JSX.Element {
  return (
    <section className={style.cardWrapper}>
      <Typography size="m" color="dark" children="Moog Matriarch" />

      <Typography size="m" color="red" children="19/20" />
    </section>
  );
}
