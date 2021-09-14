import React from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '../assets/DeleteIcon';
import EditIcon from '../assets/EditIcon';
import style from './GearCardEdit.module.css';

export default function GearCardButtonSection(): JSX.Element {
  return (
    <section className={style.container}>
      <div>
        <Link to="">
          <DeleteIcon fill="var(--primary-accent)" />
        </Link>
      </div>
      <div>
        <Link to="">
          <EditIcon stroke="var(--primary-accent)" />
        </Link>
      </div>
    </section>
  );
}
