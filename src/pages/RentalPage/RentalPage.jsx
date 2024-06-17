import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Caution from '../../components/Caution/Caution';
import BackToolbar from '../../components/Toolbar/BackToolbar/BackToolbar';
import styles from './RentalPage.module.css';

export default function RentalPage() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <BackToolbar title='대여하기' onPrev={() => navigate(-1)} />
      <div className={styles.wrapper}>
        <Caution init={false} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
