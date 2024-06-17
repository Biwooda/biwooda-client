import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCalendar from '../../../components/CustomCalendar/CustomCalendar';
import RoundButton from '../../../components/RoundButton/RoundButton';
import styles from './RentalCalendar.module.css';

export default function RentalCalendar() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [rentalPeriod, setRentalPeriod] = useState([today, today]);
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h2 className={styles.title}>대여 날짜 선택하기</h2>
        <div className={styles.calendar}>
          <div className={styles.label}>대여하고자 하는 날을 클릭!</div>
          <CustomCalendar selectEndDate={setRentalPeriod} />
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.cancel}>
          <RoundButton type='white' onClick={() => navigate(-1)}>
            취소
          </RoundButton>
        </div>
        <div className={styles.next}>
          <RoundButton
            onClick={() => navigate('/rental/pay', { state: rentalPeriod })}
          >
            선택완료
          </RoundButton>
        </div>
      </div>
    </>
  );
}
