import React from 'react';
import { Link } from 'react-router-dom';
import guidelines from '../../assets/guidelines.svg';
import notice from '../../assets/notice.svg';
import serviceCenter from '../../assets/service_center.svg';
import CloseToolbar from '../../components/Toolbar/CloseToolbar/CloseToolbar';
import styles from './GuidelinePage.module.css';

export default function GuidelinePage() {
  return (
    <section>
      <CloseToolbar title='이용안내' />
      <div className={styles.listTitleContainer}>이용안내</div>
      <div className={styles.menu}>
        <Link to='/rental-return-guide/' className={styles.item}>
          <img src={notice} alt='notice_icon' />
          대여&반납 방법
        </Link>
        <Link to='/caution' className={styles.item}>
          <img src={guidelines} alt='guidelines_icon' />
          이용 시 주의사항
        </Link>
        <Link to='/service-time' className={styles.item}>
          <img src={serviceCenter} alt='service_center_icon' />
          서비스 운영시간
        </Link>
      </div>
    </section>
  );
}
