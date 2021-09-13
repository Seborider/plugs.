import React from 'react';
import DrumMachineIcon from '../assets/DrumMachineIcon';
import SynthesizerIcon from '../assets/SynthesizerIcon';
import EffectIcon from '../assets/EffectIcon';
import Typography from '../Typography/Typography';
import style from './GearCardHeader.module.css';

type GearCardHeaderProps = {
  type: 'Drum' | 'Effect' | 'Synth';
  name: string;
};

export default function GearCardHeader({
  type,
  name,
}: GearCardHeaderProps): JSX.Element {
  if (type === 'Synth') {
    return (
      <header className={style.header}>
        <div>
          <SynthesizerIcon fill="var(--navigation-icon-color)" />
        </div>
        <div>
          <Typography size="m" color="green" children={name} />
        </div>
      </header>
    );
  } else if (type === 'Effect') {
    return (
      <header className={style.header}>
        <div>
          <EffectIcon fill="var(--navigation-icon-color)" />
        </div>
        <div>
          <Typography size="m" color="green" children={name} />
        </div>
      </header>
    );
  } else {
    return (
      <header className={style.header}>
        <div>
          <DrumMachineIcon fill="var(--navigation-icon-color)" />
        </div>
        <div>
          <Typography size="m" color="green" children={name} />
        </div>
      </header>
    );
  }
}
