import React from 'react';
import { Link } from 'react-router-dom';
import biwoodaLogo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import mypageIcon from '../../assets/mypage.svg';
import { useUserContext } from '../../contexts/UserContext';
import RentalCard from '../RentalCard/RentalCard';
import styles from './Navbar.module.css';

export default function Navbar({ toggleDrawer }) {
  const { user } = useUserContext();

  return (
    <nav className={styles.nav}>
      <div className={styles.menu} onClick={toggleDrawer}>
        <img src={menu} alt='menu_icon' />
      </div>
      <div className={styles.logo}>
        <img src={biwoodaLogo} alt='logo' />
      </div>
      <Link to='/mypage' className={styles.mypage}>
        <img src={mypageIcon} alt='mypage_icon' />
      </Link>
      {user.rentalState && (
        <div className={styles.card}>
          <RentalCard />
        </div>
      )}
    </nav>
  );
}
