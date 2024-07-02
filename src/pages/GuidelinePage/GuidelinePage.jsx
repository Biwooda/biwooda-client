import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import CloseToolbar from '../../components/Toolbar/CloseToolbar/CloseToolbar';
import styles from './GuidelinePage.module.css';

export default function GuidelinePage() {
  return (
    <section>
      <CloseToolbar title='이용안내' />
      <div className={styles.listTitleContainer}>이용안내</div>
      <div className={styles.menu}>
        <Link to='/rental-return-guide/' className={styles.item}>
          <Icon id='notice' fill='#516875' width={36} height={36} />
          대여&반납 방법
        </Link>
        <Link to='/caution' className={styles.item}>
          <Icon id='docs' fill='#516875' width={36} height={36} />
          이용 시 주의사항
        </Link>
        <Link to='/service-time' className={styles.item}>
          <Icon id='help' fill='#516875' width={36} height={36} />
          서비스 운영시간
        </Link>
      </div>
    </section>
  );
}
