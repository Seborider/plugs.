import React from 'react';
import DrumMachineIcon from '../assets/DrumMachineIcon';
import SynthesizerIcon from '../assets/SynthesizerIcon';
import EffectIcon from '../assets/EffectIcon';
import style from './GearSelector.module.css';
import Typography from '../Typography/Typography';

export type GearSelectorProps = {
  selected: 'Drum' | 'Effect' | 'Synth';
  className?: string;
  onChange: (icon: 'Drum' | 'Effect' | 'Synth') => void;
};

export default function GearSelector({
  selected,
  className,
  onChange,
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
        <Typography size="s" color="light">
          Select gear style
        </Typography>
        <div className={style.line}></div>
      </div>

      <form className={`${style.formWrapper} ${className}`}>
        <label
          className={`${selected === 'Synth' ? style.iconBackground : ''}`}
        >
          <div className={style.icon}>
            <SynthesizerIcon {...(selected === 'Synth' ? active : inactive)} />
          </div>
          <input
            type="radio"
            onChange={() => onChange('Synth')}
            name={'GearSelector'}
            value="Synth"
            checked={selected === 'Synth'}
          />
        </label>

        <label
          className={`${selected === 'Effect' ? style.iconBackground : ''}`}
        >
          <div className={style.icon}>
            <EffectIcon {...(selected === 'Effect' ? active : inactive)} />
          </div>
          <input
            type="radio"
            onChange={() => onChange('Effect')}
            name={'GearSelector'}
            value="Effect"
            checked={selected === 'Effect'}
          />
        </label>
        <label className={`${selected === 'Drum' ? style.iconBackground : ''}`}>
          <div className={style.icon}>
            <DrumMachineIcon {...(selected === 'Drum' ? active : inactive)} />
          </div>
          <input
            type="radio"
            onChange={() => onChange('Drum')}
            name={'GearSelector'}
            value="Drum"
            checked={selected === 'Drum'}
          />
        </label>
      </form>

      <div className={style.optionsWrapper}>
        <Typography size="s" color="light">
          Select Options
        </Typography>
        <div className={style.line}></div>
      </div>
    </section>
  );
}
