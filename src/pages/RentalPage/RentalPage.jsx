import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCalendar from '../../components/CustomCalendar/CustomCalendar';
import BackToolbar from '../../components/Toolbar/BackToolbar/BackToolbar';
import styles from './RentalPage.module.css';

export default function RentalPage() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <BackToolbar title='대여하기' onPrev={() => navigate(-1)} />
      <CustomCalendar />
    </section>
  );
}
