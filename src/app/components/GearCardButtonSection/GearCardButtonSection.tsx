import React from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '../assets/DeleteIcon';
import EditIcon from '../assets/EditIcon';
import style from './GearCardButtonSection.module.css';

type GearCardButtonSectionProps = {
  onDeleteClick?: () => void;
  name: string;
};

export default function GearCardButtonSection({
  onDeleteClick,
  name,
}: GearCardButtonSectionProps): JSX.Element {
  return (
    <section className={style.container}>
      <button className={style.button} type="submit" onClick={onDeleteClick}>
        <DeleteIcon fill="var(--primary-accent)" />
      </button>

      <Link to={`/edit/${name}`}>
        <EditIcon stroke="var(--primary-accent)" />
      </Link>
    </section>
  );
}
