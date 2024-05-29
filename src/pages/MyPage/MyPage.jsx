import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bell from '../../assets/bell.svg';
import Chip from '../../components/Chip/Chip';
import RentalCard from '../../components/RentalCard/RentalCard';
import BackToolbar from '../../components/Toolbar/BackToolbar/BackToolbar';
import styles from './MyPage.module.css';

const name = '비우다';
const alertList = [
  '알림',
  '알림',
  '알림',
  '알림',
  '알림',
  '알림',
  '알림',
  '알림',
  '알림',
  '알림',
];

export default function MyPage() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <BackToolbar title='마이페이지' onPrev={() => navigate(-1)} />
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.profile}>
            <div className={styles.name}>{name}님</div>
            <Chip />
          </div>
          <Link to='/'>
            <div className={styles.bell}>
              <img src={bell} alt='알림종' />
              <p className={styles.alertCount}>{alertList.length}</p>
            </div>
          </Link>
        </div>
        <RentalCard />
        <div className={styles.menu}></div>
      </div>
    </section>
  );
}
