import React from 'react';
import type { MixerGear } from '../../../types';
import Header from '../../components/Header/Header';
import MixerCard from '../../components/MixerCard/MixerCard';
import NavBar from '../../components/NavBar/NavBar';
import useFetch from '../../hooks/useFetch';
import style from './../MixerPage/MixerPage.module.css';

export default function MixerPage(): JSX.Element {
  const { data: gear } = useFetch<MixerGear[]>('/api/gear');

  return (
    <div className={style.pageContainer}>
      <Header text="Mixer" className={style.header} />

      <main className={style.main}>
        {gear &&
          gear.map((item) => (
            <MixerCard
              name={item.name}
              connection={item.connections[0]?.channel}
              key={item.name}
            />
          ))}
      </main>
      <nav>
        <NavBar selected="Mixer" />
      </nav>
    </div>
  );
}
