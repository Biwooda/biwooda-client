import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useRentalStore } from '@/store';

import { CustomCalendar } from '@/components/CustomCalendar';
import { RoundButton } from '@/components/RoundButton';

import styles from './RentalCalendar.module.css';

export default function RentalCalendar() {
  const { state: lockerCode } = useLocation();
  const navigate = useNavigate();
  const { updateLockerCode, updateRentalInfo, updatePass } = useRentalStore(
    (state) => state.actions
  );

  useEffect(() => {
    updateLockerCode(lockerCode);
  }, [lockerCode]);

  return (
    <>
      <div>
        <h2 className={styles.title}>대여 날짜 선택하기</h2>
        <div className={styles.calendar}>
          <div className={styles.label}>대여하고자 하는 날을 클릭!</div>
          <CustomCalendar />
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.cancel}>
          <RoundButton type='white' onClick={() => navigate(-1)}>
            취소
          </RoundButton>
        </div>
        <Link to='/rental/check' className={styles.next}>
          <RoundButton>선택완료</RoundButton>
        </Link>
      </div>
    </>
  );
}
