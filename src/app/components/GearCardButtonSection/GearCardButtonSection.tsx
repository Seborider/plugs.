import React from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '../assets/DeleteIcon';
import EditIcon from '../assets/EditIcon';
import style from './GearCardButtonSection.module.css';

type GearCardButtonSectionProps = {
  onClick: () => void;
};

export default function GearCardButtonSection({
  onClick,
}: GearCardButtonSectionProps): JSX.Element {
  return (
    <section className={style.container}>
      <button className={style.button} type="submit" onClick={onClick}>
        <DeleteIcon fill="var(--primary-accent)" />
      </button>
      <div>
        <Link to="">
          <EditIcon stroke="var(--primary-accent)" />
        </Link>
      </div>
    </section>
  );
}
