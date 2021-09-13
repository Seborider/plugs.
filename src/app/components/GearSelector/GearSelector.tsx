import React from 'react';
import DrumMachineIcon from '../assets/DrumMachineIcon';
import SynthesizerIcon from '../assets/SynthesizerIcon';
import EffectIcon from '../assets/EffectIcon';
import style from './GearSelector.module.css';
import Typography from '../Typography/Typography';

export type GearSelectorProps = {
  selected: 'Drum' | 'Effect' | 'Synth';
  onTypeClick: (type: string) => void;
  className?: string;
  withSynth?: boolean;
  withEffect?: boolean;
  withDrum?: boolean;
};

export default function GearSelector({
  selected,
  onTypeClick,
  className,
  withSynth,
  withEffect,
  withDrum,
}: GearSelectorProps): JSX.Element {
  const active = {
    fill: 'var(--primary-accent)',
    stroke: 'var(--primary-accent)',
  };

  const inactive = {
    stroke: 'var(--primary-light)',
    fill: 'var(--primary-light)',
  };
  return (
    <section className={style.pageWrapper}>
      <div className={style.typographyWrapper}>
        <Typography size="s" color="light" children="Select gear style" />
        <div className={style.line}></div>
      </div>

      <form className={`${style.formWrapper} ${className}`}>
        <label className={`${withSynth ? style.iconBackground : ''}`}>
          <div className={style.icon}>
            <SynthesizerIcon {...(selected === 'Synth' ? active : inactive)} />
          </div>
          <input
            type="radio"
            onChange={() => onTypeClick('Synth')}
            name={'GearSelector'}
          />
        </label>

        <label className={`${withEffect ? style.iconBackground : ''}`}>
          <div className={style.icon}>
            <EffectIcon {...(selected === 'Effect' ? active : inactive)} />
          </div>
          <input
            type="radio"
            onChange={() => onTypeClick('Effect')}
            name={'GearSelector'}
          />
        </label>

        <label className={`${withDrum ? style.iconBackground : ''}`}>
          <div className={style.icon}>
            <DrumMachineIcon {...(selected === 'Drum' ? active : inactive)} />
          </div>
          <input
            type="radio"
            onChange={() => onTypeClick('Drum')}
            name={'GearSelector'}
          />
        </label>
      </form>

      <div className={style.optionsWrapper}>
        <Typography size="s" color="light" children="Select options" />
        <div className={style.line}></div>
      </div>
    </section>
  );
}
