import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import GearCard from '../../components/GearCard/GearCard';
import NavBar from '../../components/NavBar/NavBar';
import type { Gear } from '../../../types';
import style from './HomePage.module.css';

export default function HomePage(): JSX.Element {
  const [gear, setGear] = useState<Gear[]>([]);

  async function fetchGear() {
    console.log('Hallo Dima');
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
      <Header withLogo withBurgerButton className={style.header} />

      <main className={style.main}>
        {gear.map((item) => (
          <GearCard
            iconType={item.iconType}
            name={item.name}
            connections={item.connections}
          />
        ))}
      </main>
      <nav>
        <NavBar selected="Home" />
      </nav>
    </div>
  );
}
