import React from 'react';
import { useNavigate } from 'react-router-dom';
import Caution from '../../components/Caution/Caution';
import BackToolbar from '../../components/Toolbar/BackToolbar/BackToolbar';
import styles from './CautionPage.module.css';

export default function CautionPage() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <BackToolbar title='이용 시 주의사항' onPrev={() => navigate(-1)} />
      <Caution init={true} />
    </section>
  );
}
