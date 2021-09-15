import React from 'react';
import Header from '../../components/Header/Header';
import MixerCard from '../../components/MixerCard/MixerCard';
import NavBar from '../../components/NavBar/NavBar';
import style from './../MixerPage/MixerPage.module.css';

const MixerCardMockData = [
  { gearname: 'Moog Matriarch', channel: '19/20' },
  { gearname: 'SH101', channel: '8' },
  { gearname: '808', channel: '4' },
  { gearname: 'Moog Matriarch', channel: '19/20' },
  { gearname: 'SH101', channel: '8' },
  { gearname: '808', channel: '4' },
  { gearname: 'Moog Matriarch', channel: '19/20' },
  { gearname: 'SH101', channel: '8' },
  { gearname: '808', channel: '4' },
  { gearname: 'Moog Matriarch', channel: '19/20' },
  { gearname: 'SH101', channel: '8' },
  { gearname: '808', channel: '4' },
];

export default function MixerPage(): JSX.Element {
  return (
    <div className={style.pageContainer}>
      <Header text="Mixer" className={style.header} />

      <main className={style.main}>
        {MixerCardMockData.map((item) => (
          <MixerCard gearname={item.gearname} channel={item.channel} />
        ))}
      </main>
      <nav>
        <NavBar selected="Mixer" />
      </nav>
    </div>
  );
}
