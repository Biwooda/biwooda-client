import React from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import BackToolBar from '../../components/Toolbar/BackToolbar/BackToolbar';
import styles from './ServiceTime.module.css';

export default function ServiceTime() {
  return (
    <section className={styles.container}>
      <BackToolBar title='서비스 운영시간' />
      <div className={styles.content}>
        <p>
          비우다는 <span className={styles.emphasis}>24시간</span> 준비되어
          있어요!
          <br />
          공유 우산을 대여해볼까요?
        </p>
      </div>
      <CTAButton>공유 우산 대여하러 가기</CTAButton>
    </section>
  );
}
