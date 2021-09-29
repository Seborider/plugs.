import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import GearCard from '../../components/GearCard/GearCard';
import NavBar from '../../components/NavBar/NavBar';
import type { Gear } from '../../../types';
import style from './HomePage.module.css';
import useFetch from '../../hooks/useFetch';
import Typography from '../../components/Typography/Typography';
import BurgerButton from '../../components/BurgerButton/BurgerButton';
import { Link } from 'react-router-dom';

export default function HomePage(): JSX.Element {
  const [isModalOpen, setModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState<Gear>();

  const { data: gear, refetch } = useFetch<Gear[]>('/api/gear');
  async function deleteGear(name: string) {
    await fetch(`/api/gear/${name}`, {
      method: 'DELETE',
    });
    refetch();
    setShowDeleteModal(false);
  }

  function modalClick() {
    setModal(!isModalOpen);
  }

  return (
    <div className={style.pageContainer}>
      <Header
        withLogo
        withBurgerButton
        className={style.header}
        onClick={modalClick}
      />

      <main className={style.main}>
        {gear &&
          gear.map((item) => (
            <GearCard
              iconType={item.iconType}
              name={item.name}
              connections={item.connections}
              onDeleteClick={() => (
                setDeleteItem(item), setShowDeleteModal(true)
              )}
              key={item.name}
            />
          ))}
        {showDeleteModal && (
          <section className={style.deleteModal}>
            <Typography size="m" color="white">
              Delete gear?
              <div className={style.line}></div>
            </Typography>
            <div className={style.buttonWrapper}>
              <button
                onClick={() => setShowDeleteModal(false)}
                className={style.button}
              >
                <Typography size="s" color="dark">
                  No
                </Typography>
              </button>
              <button
                onClick={() => deleteItem && deleteGear(deleteItem.name)}
                className={style.button}
              >
                <Typography size="s" color="dark">
                  Yes
                </Typography>
              </button>
            </div>
          </section>
        )}
        {gear?.length === 0 && (
          <>
            <Link to="/add" className={style.emptyPage}>
              Add Gear
            </Link>
            <div className={style.line}></div>
          </>
        )}
      </main>

      <section>
        {isModalOpen === true && (
          <div className={style.modal}>
            <article>
              <header className={style.modalHeader}>
                <div className={style.burgerButton}>
                  <BurgerButton onClick={modalClick} />
                </div>
                <Typography
                  size="m"
                  color="white"
                  children="About"
                  className={style.modalHeader}
                />
                <div className={style.line}></div>
              </header>
              <div className={style.modalText}>
                <Typography
                  size="s"
                  color="light"
                  children={
                    <>
                      <p>
                        Plugs. lets you organize your home studio: With plugs.
                        finding what is where in your home studio was never
                        easier!{' '}
                      </p>
                      <p>
                        plugs. lets you define, where you plugged what, which
                        cable goes where, and which output is connected to which
                        input, and vice versa.
                      </p>
                      <p>
                        Just look for your instrument itself, edit your
                        everchanging and expanding gear setup on the go, or see
                        your mixer for a quick overview.
                      </p>
                    </>
                  }
                />
              </div>
            </article>
            <article>
              <header className={style.modalHeader}>
                <Typography size="m" color="white" children="Contact" />
                <div className={style.line}></div>
              </header>
              <div className={style.modalText}>
                <Typography
                  size="s"
                  color="light"
                  children={
                    <a href="mailto:mayer.sebobo@gmail.com?subject=plugs">
                      mail@plugs.com
                    </a>
                  }
                />
              </div>
            </article>
          </div>
        )}
      </section>
      <nav>
        <NavBar selected="Home" />
      </nav>
    </div>
  );
}
