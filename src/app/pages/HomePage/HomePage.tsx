import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import GearCard from '../../components/GearCard/GearCard';
import NavBar from '../../components/NavBar/NavBar';
import type { Gear } from '../../../types';
import style from './HomePage.module.css';
import useFetch from '../../hooks/useFetch';
import Typography from '../../components/Typography/Typography';

export default function HomePage(): JSX.Element {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState<Gear>();

  const { data: gear, refetch } = useFetch<Gear[]>('/api/gear');
  async function deleteGear(name: string) {
    await fetch(`/api/gear/${name}`, {
      method: 'DELETE',
    });
    refetch();
    setShowDeleteModal(false);
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
              onDeleteClick={() => (
                setDeleteItem(item), setShowDeleteModal(true)
              )}
              key={item.name}
            />
          ))}
        {showDeleteModal && (
          <section className={style.deleteModal}>
            <Typography size="s" color="white">
              Delete gear?
            </Typography>
            <div>
              <button onClick={() => setShowDeleteModal(false)}>
                <Typography size="s" color="dark">
                  No
                </Typography>
              </button>
              <button onClick={() => deleteGear(deleteItem.name)}>
                <Typography size="s" color="dark">
                  Yes
                </Typography>
              </button>
            </div>
          </section>
        )}
      </main>

      <nav>
        <NavBar selected="Home" />
      </nav>
    </div>
  );
}
// () => deleteGear(item.name);
