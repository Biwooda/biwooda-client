import { useRentalStore } from '@/store';

import { format } from 'date-fns';

import { FEE } from '@/constants';

import styles from './PayInfo.module.css';

export default function PayInfo({ text }) {
  const { rentalPeriod, diffDays } = useRentalStore(
    (state) => state.rentalInfo
  );

  return (
    <div>
      <h2 className={styles.title}>대여 비용 알려드려요</h2>
      <div className={styles.period}>
        {format(rentalPeriod[0], 'yyyy.MM.dd')}
        부터 {format(rentalPeriod[1], 'yyyy.MM.dd')}
        까지
      </div>
      <div className={styles.fee}>
        총 {diffDays}
        일(
        {FEE[diffDays - 1].toLocaleString()}
        원)
        {text}
      </div>
    </div>
  );
}
