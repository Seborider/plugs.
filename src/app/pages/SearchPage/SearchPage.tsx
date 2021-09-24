import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import GearCard from '../../components/GearCard/GearCard';
import NavBar from '../../components/NavBar/NavBar';
import style from './SearchPage.module.css';
import useSearch from '../../hooks/useSearch';

export default function SearchPage(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const { gear } = useSearch(searchValue);

  function handleChange(value: string) {
    setSearchValue(value);
  }

  async function deleteGear(name: string) {
    await fetch(`/api/gear/${name}`, {
      method: 'DELETE',
    });
    setSearchValue('');
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

      {gear && (
        <main className={style.main}>
          {gear.map((singleGear) => (
            <GearCard
              iconType={singleGear.iconType}
              name={singleGear.name}
              connections={singleGear.connections}
              onDeleteClick={() => deleteGear(singleGear.name)}
            />
          ))}
        </main>
      )}
      <NavBar selected="Search" />
    </div>
  );
}
