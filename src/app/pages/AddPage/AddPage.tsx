import React from 'react';
import Header from '../../components/Header/Header';
import GearSelector from '../../components/GearSelector/GearSelector';
import GearInput from '../../components/GearInput/GearInput';
import NavBar from '../../components/NavBar/NavBar';
import style from './AddPage.module.css';

export default function AddPage(): JSX.Element {
  return (
    <div className={style.pageContainer}>
      <Header text="Add" withInputBar type="add" />
      <main className={style.main}>
        <GearSelector onTypeClick={console.log} />
        <GearInput placeholder="Output to" onClick={console.log} />
        <GearInput placeholder="Input from" onClick={console.log} />
        <GearInput placeholder="MIDI Out to" onClick={console.log} />
        <GearInput placeholder="MIDI In from" onClick={console.log} />
        <GearInput placeholder="USB Port" onClick={console.log} />
      </main>
      <nav>
        <NavBar selected="Add" />
      </nav>
    </div>
  );
}
