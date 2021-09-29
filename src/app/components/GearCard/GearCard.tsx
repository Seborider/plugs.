import React from 'react';
import GearCardHeader from '../GearCardHeader/GearCardHeader';
import GearCardButtonSection from '../GearCardButtonSection/GearCardButtonSection';
import GearCardConnection from '../GearCardConnection/GearCardConnection';
import style from './GearCard.module.css';

type GearCardProps = {
  iconType: 'Synth' | 'Effect' | 'Drum';
  name: string;
  connections: { channel: string; connection: string }[];
  onDeleteClick?: () => void;
  value?: string;
};

export default function GearCard({
  iconType,
  name,
  connections,
  onDeleteClick,
}: GearCardProps): JSX.Element {
  return (
    <article className={style.card}>
      <div className={style.cardWrapper}>
        <div className={style.header}>
          <GearCardHeader iconType={iconType} name={name} />
        </div>
        <div className={style.cardBody}>
          {connections.map((connection) => (
            <GearCardConnection
              connection={connection.connection}
              channel={connection.channel}
              key={connection.channel}
            />
          ))}
        </div>
        <GearCardButtonSection onDeleteClick={onDeleteClick && onDeleteClick} />
      </div>
    </article>
  );
}
