import React from 'react';
import Cable_1 from '../assets/cables/Cable1_Icon';
import Cable_2 from '../assets/cables/Cable2_Icon';
import Cable_3 from '../assets/cables/Cable3_Icon';
import Cable_4 from '../assets/cables/Cable4_Icon';
import Cable_5 from '../assets/cables/Cable5_Icon';
import Cable_6 from '../assets/cables/Cable6_Icon';
import Cable_7 from '../assets/cables/Cable7_Icon';
import Typography from '../Typography/Typography';
import style from './GearCardConnection.module.css';

type GearCardConnectionProps = {
  connection: string;
  channel: string;
};

function getRandomCable(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const cables = [
  <Cable_1 fill="var(--navigation-icon-color)" />,
  <Cable_2 fill="var(--navigation-icon-color)" />,
  <Cable_3 fill="var(--navigation-icon-color)" />,
  <Cable_4 fill="var(--navigation-icon-color)" />,
  <Cable_5 fill="var(--navigation-icon-color)" />,
  <Cable_6 fill="var(--navigation-icon-color)" />,
  <Cable_7 fill="var(--navigation-icon-color)" />,
];

export default function GearCardConnection({
  connection,
  channel,
}: GearCardConnectionProps): JSX.Element {
  return (
    <section className={style.container}>
      <Typography size="s" color="dark" children={connection} />
      <div className={style.middle}>{cables[getRandomCable(0, 6)]}</div>
      <div className={style.right}>
        <Typography size="s" color="dark" children={channel} />
      </div>
    </section>
  );
}
