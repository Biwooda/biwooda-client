import React from 'react';
import { Link } from 'react-router-dom';
import fullWaterDropOrange from '../../assets/full_water_drop_orange.svg';
import rightArrowXs from '../../assets/right_arrow_xs.svg';
import symbolSm from '../../assets/symbol_sm.svg';
import { useUserContext } from '../../contexts/UserContext';
import styles from './RentalCard.module.css';

export default function RentalCard() {
  const { user } = useUserContext();
  if (!user || !user?.rentalState) return null;
  const { due, overdue, ticket } = user;

  return (
    <div className={styles.card}>
      <div className={`${styles.info} ${overdue && styles.overdue}`}>
        <div className={styles.state}>
          <img src={overdue ? fullWaterDropOrange : symbolSm} alt='symbol' />
          {overdue ? '미반납' : `${ticket} 이용중`}
        </div>
        <div className={styles.due}>
          <span className={styles.date}>{due}</span>까지 이용 가능합니다
        </div>
      </div>
      <Link to='/rental-history'>
        <div className={styles.move}>
          <img src={rightArrowXs} alt='이동' />
        </div>
      </Link>
    </div>
  );
}
