import React from 'react';
import Typography from '../Typography/Typography';
import style from './MixerCard.module.css';

type MixerCardProps = {
  gearname: string;
  channel: string;
};

export default function MixerCard({
  gearname,
  channel,
}: MixerCardProps): JSX.Element {
  return (
    <section className={style.cardWrapper}>
      <Typography size="m" color="dark" children={gearname} />

      <Typography size="m" color="red" children={channel} />
    </section>
  );
}
