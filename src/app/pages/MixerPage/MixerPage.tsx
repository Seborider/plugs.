import React, { useEffect, useState } from 'react';
import type { MixerGear } from '../../../types';
import Header from '../../components/Header/Header';
import MixerCard from '../../components/MixerCard/MixerCard';
import NavBar from '../../components/NavBar/NavBar';
import style from './../MixerPage/MixerPage.module.css';

export default function MixerPage(): JSX.Element {
  const [gear, setGear] = useState<MixerGear[]>([]);

  async function fetchGear() {
    const response = await fetch('/api/gear', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const gear = await response.json();
    setGear(gear);
  }

  useEffect(() => {
    fetchGear();
  }, []);

  return (
    <div className={style.pageContainer}>
      <Header text="Mixer" className={style.header} />

      <main className={style.main}>
        {gear.map((item) => (
          <MixerCard
            name={item.name}
            connection={item.connections[0]?.channel}
          />
        ))}
      </main>
      <nav>
        <NavBar selected="Mixer" />
      </nav>
    </div>
  );
}
