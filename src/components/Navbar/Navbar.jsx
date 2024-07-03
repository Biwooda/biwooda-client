import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import { useUserContext } from 'contexts/UserContext';
import RentalCard from 'components/RentalCard/RentalCard';
import styles from './Navbar.module.css';

export default function Navbar({ toggleDrawer }) {
  const { user } = useUserContext();

  return (
    <nav className={styles.nav}>
      <div className={styles.menu} onClick={toggleDrawer}>
        <Icon id='hamburger' fill='#38B9FF' width={36} height={36} />
      </div>
      <div className={styles.logo}>
        <Icon id='logo' width={130} height={31} />
      </div>
      <Link to='/mypage' className={styles.mypage}>
        <Icon id='person' fill='#38B9FF' width={36} height={36} />
      </Link>
      {user?.rentalState && (
        <div className={styles.card}>
          <RentalCard />
        </div>
      )}
    </nav>
  );
}
