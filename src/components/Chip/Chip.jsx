import React from 'react';
import fullWaterDrop from '../../assets/full_water_drop.svg';
import symbol from '../../assets/symbol_sm_white.svg';
import { useUserContext } from '../../contexts/UserContext';
import styles from './Chip.module.css';

export default function Chip() {
  const { user } = useUserContext();
  if (!user || !user?.rentalState) return null;
  const { overdue } = user;

  return (
    <div className={`${styles.tag} ${overdue && styles.overdue}`}>
      <img src={overdue ? fullWaterDrop : symbol} alt='아이콘' />
      {overdue ? '미반납중' : '대여중'}
    </div>
  );
}
