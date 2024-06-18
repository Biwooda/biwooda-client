import React from 'react';
import fullWaterDrop from '../../assets/full_water_drop.svg';
import symbol from '../../assets/symbol_sm_white.svg';
import styles from './Chip.module.css';

const rentalState = true;
const overdue = true;

export default function Chip() {
  if (!rentalState) return null;

  return (
    <div className={`${styles.tag} ${overdue && styles.overdue}`}>
      <img src={overdue ? fullWaterDrop : symbol} alt='아이콘' />
      {overdue ? '미반납중' : '대여중'}
    </div>
  );
}
