import React from 'react';
import DrumMachineIcon from '../assets/DrumMachineIcon';
import SynthesizerIcon from '../assets/SynthesizerIcon';
import EffectIcon from '../assets/EffectIcon';
import Typography from '../Typography/Typography';
import style from './GearCardHeader.module.css';

type GearCardHeaderProps = {
  iconType: 'Drum' | 'Effect' | 'Synth';
  name: string;
};

const IconStateMap = {
  Synth: <SynthesizerIcon fill="var(--navigation-icon-color)" />,
  Effect: <EffectIcon fill="var(--navigation-icon-color)" />,
  Drum: <DrumMachineIcon fill="var(--navigation-icon-color)" />,
};

export default function GearCardHeader({
  iconType,
  name,
}: GearCardHeaderProps): JSX.Element {
  return (
    <header className={style.header}>
      <div>{IconStateMap[iconType]}</div>
      <div>
        <Typography size="m" color="green" children={name} />
      </div>
    </header>
  );
}
