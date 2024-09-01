import { Link } from 'react-router-dom';

import { useAuthContext } from '@/contexts/AuthContext.jsx';

import { Icon } from '@/components/Icon';
import { RentalCard } from '@/components/RentalCard';

import styles from './Navbar.module.css';

export default function Navbar({ toggleDrawer }) {
  const { ticket } = useAuthContext();

  return (
    <nav className={styles.nav}>
      {/* <div
        className={styles.menu}
        role='button'
        tabIndex='0'
        onClick={toggleDrawer}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            toggleDrawer();
          }
        }}
      >
        <Icon id='hamburger' fill='#38B9FF' width={36} height={36} />
      </div> */}
      <div className={styles.logo}>
        <Icon id='logo' width={130} height={31} />
      </div>
      {/* <Link to='/mypage' className={styles.mypage}>
        <Icon id='person' fill='#38B9FF' width={36} height={36} />
      </Link> */}
      {ticket?.rentalState && (
        <div className={styles.card}>
          <RentalCard />
        </div>
      )}
    </nav>
  );
}
