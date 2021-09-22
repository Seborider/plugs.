import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import GearCard from '../../components/GearCard/GearCard';
import NavBar from '../../components/NavBar/NavBar';
import style from './SearchPage.module.css';
import type { Gear } from '../../../types';

type MockData = {
  iconType: 'Synth' | 'Effect' | 'Drum';
  name: string;
  connections: { channel: string; connection: string }[];
};

const GearCardMockData: MockData[] = [
  {
    iconType: 'Drum',
    name: '!!!PLACEHOLDER!!!',
    connections: [
      { channel: 'Channel 3', connection: 'Output to' },
      { channel: 'MacBook', connection: 'MIDI from' },
      { channel: 'Port 13', connection: 'USB Port' },
    ],
  },
];

export default function SearchPage(): JSX.Element {
  const [results, setResults] = useState<Gear[]>([]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const response = await fetch(`/api/gear/${name}`);
    const result = await response.json();
    setResults(result);
  }

  async function deleteGear(name: string) {
    await fetch(`/api/gear/${name}`, {
      method: 'DELETE',
    });
  }

  return (
    <div className={style.pageContainer}>
      <Header
        text="Search"
        withInputBar
        type="search"
        className={style.header}
        onChange={console.log}
        onSubmit={handleSubmit}
      />

      <main className={style.main}>
        {results.map((item) => (
          <GearCard
            iconType={item.iconType}
            name={item.name}
            connections={item.connections}
            onDeleteClick={() => deleteGear(item.name)}
            // key={item._id}
          />
        ))}
      </main>
      <NavBar selected="Search" />
    </div>
  );
}
