import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import GearSelector from '../../components/GearSelector/GearSelector';
import GearInput from '../../components/GearInput/GearInput';
import SaveButton from '../../components/SaveButton/SaveButton';
import NavBar from '../../components/NavBar/NavBar';
import style from './AddPage.module.css';

export default function AddPage(): JSX.Element {
  const [selectedGear, setSelectedGear] = useState<'Drum' | 'Synth' | 'Effect'>(
    'Synth'
  );

  return (
    <div className={style.pageContainer}>
      <Header text="Add" withInputBar type="add" className={style.header} />
      <main className={style.main}>
        <GearSelector selected={selectedGear} onChange={setSelectedGear} />
        <GearInput placeholder="Output to" onClick={() => console.log('Ya')} />
        <GearInput placeholder="Input from" onClick={console.log} />
        <GearInput placeholder="MIDI Out to" onClick={console.log} />
        <GearInput placeholder="MIDI In from" onClick={console.log} />
        <GearInput placeholder="USB Port" onClick={console.log} />
        <SaveButton text="Save" />
      </main>
      <nav>
        <NavBar selected="Add" />
      </nav>
    </div>
  );
}
