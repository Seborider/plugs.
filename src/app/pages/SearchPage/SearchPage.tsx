import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import GearCard from '../../components/GearCard/GearCard';
import NavBar from '../../components/NavBar/NavBar';
import style from './SearchPage.module.css';
import useSearch from '../../hooks/useSearch';
import type { Gear } from '../../../types';
import Typography from '../../components/Typography/Typography';

export default function SearchPage(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState<Gear>();
  const { gear } = useSearch(searchValue);

  function handleChange(value: string) {
    setSearchValue(value);
  }

  async function deleteGear(name: string) {
    await fetch(`/api/gear/${name}`, {
      method: 'DELETE',
    });
    setSearchValue('');
    setShowDeleteModal(false);
  }

  return (
    <div className={style.pageContainer}>
      <Header
        text="Search"
        withInputBar
        type="search"
        className={style.header}
        onChange={handleChange}
        value={searchValue}
      />

      <main className={style.main}>
        {gear &&
          gear.map((singleGear) => (
            <GearCard
              iconType={singleGear.iconType}
              name={singleGear.name}
              connections={singleGear.connections}
              onDeleteClick={() => (
                setDeleteItem(singleGear), setShowDeleteModal(true)
              )}
              key={singleGear.name}
            />
          ))}
        {showDeleteModal && (
          <section className={style.deleteModal}>
            <Typography size="m" color="white">
              Delete gear?
              <div className={style.line}></div>
            </Typography>
            <div className={style.buttonWrapper}>
              <button
                onClick={() => setShowDeleteModal(false)}
                className={style.button}
              >
                <Typography size="s" color="dark">
                  No
                </Typography>
              </button>
              <button
                onClick={() => deleteItem && deleteGear(deleteItem.name)}
                className={style.button}
              >
                <Typography size="s" color="dark">
                  Yes
                </Typography>
              </button>
            </div>
          </section>
        )}
      </main>

      <NavBar selected="Search" />
    </div>
  );
}
