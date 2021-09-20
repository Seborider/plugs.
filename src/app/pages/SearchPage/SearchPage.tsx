import React from 'react';
import Header from '../../components/Header/Header';
import GearCard from '../../components/GearCard/GearCard';
import NavBar from '../../components/NavBar/NavBar';
import style from './SearchPage.module.css';

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
  return (
    <div className={style.pageContainer}>
      <Header
        text="Search"
        withInputBar
        type="search"
        className={style.header}
        onChange={console.log}
      />
      <main className={style.main}>
        {GearCardMockData.map((item) => (
          <GearCard
            iconType={item.iconType}
            name={item.name}
            connections={item.connections}
          />
        ))}
      </main>
      <NavBar selected="Search" />
    </div>
  );
}
