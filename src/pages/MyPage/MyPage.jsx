import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../components/Chip/Chip';
import GoToLogin from '../../components/GoToLogin/GoToLogin';
import Icon from '../../components/Icon/Icon';
import RentalCard from '../../components/RentalCard/RentalCard';
import BackToolbar from '../../components/Toolbar/BackToolbar/BackToolbar';
import { useUserContext } from '../../contexts/UserContext';
import styles from './MyPage.module.css';

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
  const { user } = useUserContext();

  return (
    <section className={styles.container}>
      <BackToolbar title='마이페이지' />
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.profile}>
            {user ? (
              <div className={styles.name}>{user?.nickname}님</div>
            ) : (
              <GoToLogin />
            )}
            <Chip />
          </div>
          <Link to='/inbox'>
            <div className={styles.bell}>
              <Icon id='bell' fill='#38B9FF' width={36} height={36} />
              <p className={styles.alertCount}>{alertList.length}</p>
            </div>
          </Link>
        </div>
        <RentalCard />
        <div className={styles.menu}>
          <Link to='/rental-history' className={styles.item}>
            <Icon id='list' fill='#38B9FF' width={36} height={36} />
            비우다 이용 내역
          </Link>
          <div className={styles.item} onClick={() => {}}>
            <Icon
              id='out'
              stroke='#38B9FF'
              fill='#38B9FF'
              width={36}
              height={36}
            />
            회원 탈퇴하기
          </div>
        </div>
      </div>
    </section>
  );
}
