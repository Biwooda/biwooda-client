import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import BackToolbar from '../../components/Toolbar/BackToolbar/BackToolbar';
import styles from './RentalPage.module.css';

export default function RentalPage() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <BackToolbar title='대여하기' onPrev={() => navigate(-1)} />
      <div>주의사항</div>
      <Outlet />
    </section>
  );
}
