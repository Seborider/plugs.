import React from 'react';
import SaveIcon from '../assets/SaveIcon';
import Typography from '../Typography/Typography';
import style from './SaveButton.module.css';

export type SaveButtonProps = {
  text: string;
};

export default function SaveButton({ text }: SaveButtonProps): JSX.Element {
  return (
    <div className={style.saveWrapper}>
      <Typography size="s" color="light">
        {text}
      </Typography>
      <div className={style.line}></div>
      <button className={style.button}>
        <SaveIcon fill={'var(--primary-light)'} />
      </button>
    </div>
  );
}
