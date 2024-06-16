import React from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '../../components/CTAButton/CTAButton';
import CustomCalendar from '../../components/CustomCalendar/CustomCalendar';
import styles from './RentalPage.module.css';

export default function RentalCalendar() {
  const navigate = useNavigate();

  return (
    <div>
      <CustomCalendar />
      <div className={styles.buttons}>
        <div className={styles.cancel}>
          <CTAButton text='취소' onClick={() => navigate(-1)} />
        </div>
        <div className={styles.next}>
          <CTAButton text='선택완료' onClick={() => navigate('/rental/pay')} />
        </div>
      </div>
    </div>
  );
}
