import React from 'react';
import fullWaterDrop from '../../assets/full_water_drop.svg';
import symbol from '../../assets/symbol_sm_white.svg';
import { useUserContext } from '../../contexts/UserContext';
import styles from './Chip.module.css';

export default function Chip() {
  const { user } = useUserContext();
  if (!user.rentalState) return null;

  return (
    <div className={`${styles.tag} ${user.overdue && styles.overdue}`}>
      <img src={user.overdue ? fullWaterDrop : symbol} alt='아이콘' />
      {user.overdue ? '미반납중' : '대여중'}
    </div>
  );
}
