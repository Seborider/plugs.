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
      <div>
        <Typography size="m" color="dark" children={gearname} />
      </div>
      <div>
        <Typography size="m" color="red" children={channel} />
      </div>
    </section>
  );
}
