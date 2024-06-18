import React from 'react';
import { Link } from 'react-router-dom';
import faq from '../../assets/faq.svg';
import guidelines from '../../assets/guidelines.svg';
import logout from '../../assets/logout.svg';
import notice from '../../assets/notice.svg';
import serviceCenter from '../../assets/service_center.svg';
import waterdropSm from '../../assets/waterdrop_sm.svg';
import { useUserContext } from '../../contexts/UserContext';
import GoToLogin from '../GoToLogin/GoToLogin';
import CloseToolbar from '../Toolbar/CloseToolbar/CloseToolbar';
import styles from './Drawer.module.css';

export default function Drawer() {
  const { user, setUser } = useUserContext();

  return (
    <section className={styles.container}>
      <CloseToolbar />
      <div
        className={styles.banner}
        style={{
          background:
            user && 'linear-gradient(90deg, #38b9ff 2.26%, #0bff99 100.81%)',
        }}
      >
        {user ? (
          <div className={styles.title}>
            {user.nickname}님
            <br />
            반갑습니다
          </div>
        ) : (
          <>
            <div className={styles.title}>
              <img src={waterdropSm} alt='icon' />
              로그인 후 이용해주세요
            </div>
            <GoToLogin />
          </>
        )}
      </div>
      <div className={styles.menu}>
        <Link to='/notice' className={styles.item}>
          <img src={notice} alt='notice_icon' />
          공지사항
        </Link>
        <Link to='/guideline' className={styles.item}>
          <img src={guidelines} alt='guidelines_icon' />
          서비스 이용안내
        </Link>
        <Link to='/customer-support' className={styles.item}>
          <img src={serviceCenter} alt='service_center_icon' />
          고객센터
        </Link>
        <Link to='/' className={styles.item}>
          <img src={faq} alt='faq_icon' />
          FAQ
        </Link>
        {user && (
          <div className={styles.item} onClick={() => setUser(null)}>
            <img src={logout} alt='logout_icon' />
            로그아웃
          </div>
        )}
      </div>
    </section>
  );
}
