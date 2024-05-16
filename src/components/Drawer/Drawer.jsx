import React from 'react';
import close from '../../assets/close.svg';
import faq from '../../assets/faq.svg';
import guidelines from '../../assets/guidelines.svg';
import logout from '../../assets/logout.svg';
import notice from '../../assets/notice.svg';
import rightArrow from '../../assets/right_arrow.svg';
import serviceCenter from '../../assets/service_center.svg';
import waterdropSm from '../../assets/waterdrop_sm.svg';
import styles from './Drawer.module.css';

export default function Drawer({
  isLogin,
  nickname,
  setOpenDrawer,
  setIsLogin,
}) {
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <img
          src={close}
          alt='close_icon'
          onClick={() => setOpenDrawer(false)}
        />
      </nav>
      <div
        className={styles.banner}
        style={{
          background:
            isLogin && 'linear-gradient(90deg, #38b9ff 2.26%, #0bff99 100.81%)',
        }}
      >
        {isLogin ? (
          <div className={styles.title} style={{ width: '6.25rem' }}>
            {nickname}님 반갑습니다
          </div>
        ) : (
          <>
            <div className={styles.title}>
              <img src={waterdropSm} alt='icon' />
              로그인 후 이용해주세요
            </div>
            <button
              className={styles.loginButton}
              onClick={() => setIsLogin(true)}
            >
              <img src={rightArrow} alt='right_arrow' />
              로그인하러 가기
            </button>
          </>
        )}
      </div>
      <div className={styles.menu}>
        <div className={styles.item}>
          <img src={notice} alt='notice_icon' />
          공지사항
        </div>
        <div className={styles.item}>
          <img src={guidelines} alt='guidelines_icon' />
          서비스 이용안내
        </div>
        <div className={styles.item}>
          <img src={serviceCenter} alt='service_center_icon' />
          고객센터
        </div>
        <div className={styles.item}>
          <img src={faq} alt='faq_icon' />
          FAQ
        </div>
        {isLogin && (
          <div className={styles.item} onClick={() => setIsLogin(false)}>
            <img src={logout} alt='logout_icon' />
            로그아웃
          </div>
        )}
      </div>
    </section>
  );
}
