import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import Icon from '../Icon/Icon';
import styles from './Chip.module.css';

export default function Chip() {
  const { user } = useUserContext();
  if (!user || !user?.rentalState) return null;
  const { overdue } = user;

  return (
    <div className={`${styles.tag} ${overdue && styles.overdue}`}>
      <Icon
        id={overdue ? 'waterdropFull' : 'symbol'}
        fill='#ffffff'
        width={18}
        height={18}
      />
      {overdue ? '미반납중' : '대여중'}
    </div>
  );
}
