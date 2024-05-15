import React from 'react';
import biwoodaLogo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import mypageIcon from '../../assets/mypage.svg';
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
    <section>
      <nav className={styles.nav}>
        <div className={styles.menu}>
          <img src={menu} alt='menu_icon' />
        </div>
        <div className={styles.logo}>
          <img src={biwoodaLogo} alt='logo' />
        </div>
        <div className={styles.mypage}>
          <img src={mypageIcon} alt='mypage_icon' />
        </div>
      </nav>
    </section>
  );
}
