import React from 'react';
import Caution from 'components/Caution/Caution';
import BackToolbar from 'components/Toolbar/BackToolbar/BackToolbar';
import styles from './CautionPage.module.css';

export default function CautionPage() {
  return (
    <section className={styles.container}>
      <BackToolbar title='이용 시 주의사항' />
      <Caution init={true} />
    </section>
  );
}
