import React from 'react';
import Header from '../../components/Header/Header';
import GearCard from '../../components/GearCard/GearCard';
import NavBar from '../../components/NavBar/NavBar';
import style from './HomePage.module.css';

type MockData = {
  iconType: 'Synth' | 'Effect' | 'Drum';
  name: string;
  connections: { channel: string; connection: string }[];
};

const GearCardMockData: MockData[] = [
  {
    iconType: 'Drum',
    name: 'DrumBrute',
    connections: [
      { channel: 'Channel 3', connection: 'Output to' },
      { channel: 'MacBook', connection: 'MIDI from' },
      { channel: 'Port 13', connection: 'USB Port' },
    ],
  },
  {
    iconType: 'Effect',
    name: 'Big Sky',
    connections: [
      { channel: 'Channel 12', connection: 'Output to' },
      { channel: 'Port 13', connection: 'USB Port' },
    ],
  },
  {
    iconType: 'Synth',
    name: 'Matriach',
    connections: [
      { channel: 'Channel 20', connection: 'Output to' },
      { channel: 'MacBook', connection: 'MIDI from' },
      { channel: 'DrumBrute', connection: 'MIDI to' },
      { channel: 'Port 3', connection: 'USB Port' },
      { channel: 'NDLR', connection: 'Input' },
    ],
  },
  {
    iconType: 'Drum',
    name: '808',
    connections: [
      { channel: 'Channel 6', connection: 'Output to' },
      { channel: 'MacBook', connection: 'MIDI from' },
      { channel: 'Port 10', connection: 'USB Port' },
      { channel: 'Sequencer', connection: 'Input from' },
    ],
  },
  {
    iconType: 'Drum',
    name: 'DrumBrute',
    connections: [
      { channel: 'Channel 3', connection: 'Output to' },
      { channel: 'MacBook', connection: 'MIDI from' },
      { channel: 'Port 13', connection: 'USB Port' },
    ],
  },
  {
    iconType: 'Synth',
    name: 'Matriach',
    connections: [
      { channel: 'Channel 20', connection: 'Output to' },
      { channel: 'MacBook', connection: 'MIDI from' },
      { channel: 'DrumBrute', connection: 'MIDI to' },
      { channel: 'Port 3', connection: 'USB Port' },
      { channel: 'NDLR', connection: 'Input' },
    ],
  },
];

export default function HomePage(): JSX.Element {
  return (
    <div className={style.pageContainer}>
      <Header withLogo withBurgerButton className={style.header} />

      <main className={style.main}>
        {GearCardMockData.map((item) => (
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
