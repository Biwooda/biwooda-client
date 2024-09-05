import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useRentalStore } from '@/store';

import { CustomCalendar } from '@/components/CustomCalendar';
import { RoundButton } from '@/components/RoundButton';

import styles from './RentalCalendar.module.css';

const today = new Date();
today.setHours(0, 0, 0, 0);

export default function RentalCalendar() {
  const { state: lockerCode } = useLocation();
  const navigate = useNavigate();
  const { updateLockerCode } = useRentalStore((state) => state.actions);

  const [rentalPeriod, setRentalPeriod] = useState([today, today]);
  const [diffDays, setDiffDays] = useState(1);

  useEffect(() => {
    updateLockerCode(lockerCode);
  }, [lockerCode]);

  return (
    <>
      <div>
        <h2 className={styles.title}>대여 날짜 선택하기</h2>
        <div className={styles.calendar}>
          <div className={styles.label}>대여하고자 하는 날을 클릭!</div>
          <CustomCalendar
            selectEndDate={(period) => {
              const [start, end] = period;
              const diffDays = Math.ceil(
                (end - start) / (1000 * 60 * 60 * 24) + 1
              );

              setRentalPeriod(period);
              setDiffDays(diffDays);
            }}
          />
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
            onClick={() =>
              navigate('/rental/pay', { state: { rentalPeriod, diffDays } })
            }
          >
            선택완료
          </RoundButton>
        </div>
      </div>
    </>
  );
}
