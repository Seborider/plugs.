import React from 'react';
import Header from '../../components/Header/Header';
import GearCard from '../../components/GearCard/GearCard';
import NavBar from '../../components/NavBar/NavBar';
import type { Gear } from '../../../types';
import style from './HomePage.module.css';
import useFetch from '../../hooks/useFetch';

export default function HomePage(): JSX.Element {
  const { data: gear, refetch } = useFetch<Gear[]>('/api/gear');
  async function deleteGear(name: string) {
    await fetch(`/api/gear/${name}`, {
      method: 'DELETE',
    });
    refetch();
  }

  return (
    <div className={style.pageContainer}>
      <Header withLogo withBurgerButton className={style.header} />

      <main className={style.main}>
        {gear &&
          gear.map((item) => (
            <GearCard
              iconType={item.iconType}
              name={item.name}
              connections={item.connections}
              onDeleteClick={() => deleteGear(item.name)}
            />
          ))}
      </main>
      <nav>
        <NavBar selected="Home" />
      </nav>
    </div>
  );
}
