import React from 'react';
import { Link } from 'react-router-dom';
import accountDeletion from '../../assets/account_deletion.svg';
import bell from '../../assets/bell.svg';
import history from '../../assets/history.svg';
import Chip from '../../components/Chip/Chip';
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
            <div className={styles.name}>{user.nickname}님</div>
            <Chip />
          </div>
          <Link to='/inbox'>
            <div className={styles.bell}>
              <img src={bell} alt='알림종' />
              <p className={styles.alertCount}>{alertList.length}</p>
            </div>
          </Link>
        </div>
        <RentalCard />
        <div className={styles.menu}>
          <Link to='/rental-history' className={styles.item}>
            <img src={history} alt='notice_icon' />
            비우다 이용 내역
          </Link>
          <div className={styles.item} onClick={() => {}}>
            <img src={accountDeletion} alt='회원탈퇴' />
            회원 탈퇴하기
          </div>
        </div>
      </div>
    </section>
  );
}
