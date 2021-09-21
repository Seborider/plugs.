import React from 'react';
import Typography from '../Typography/Typography';
import style from './MixerCard.module.css';

type MixerCardProps = {
  name: string;
  connection: string;
};

export default function MixerCard({
  name,
  connection,
}: MixerCardProps): JSX.Element {
  return (
    <section className={style.cardWrapper}>
      <Typography size="m" color="dark" children={name} />

      <Typography size="m" color="red" children={connection} />
    </section>
  );
}
