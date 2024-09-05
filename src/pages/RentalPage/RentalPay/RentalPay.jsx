import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useRentalStore } from '@/store';
import { format } from 'date-fns';

import { KakaoPayButton } from '@/components/KakaoPayButton';
import { RoundButton } from '@/components/RoundButton';

import { FEE } from '@/constants';

import styles from './RentalPay.module.css';

export default function RentalPay() {
  const { updatePass } = useRentalStore((state) => state.actions);
  const {
    state: { rentalPeriod, diffDays },
  } = useLocation();
  const [isPayButtonClicked, setIsPayButtonClicked] = useState(false);

  const navigate = useNavigate();

  return (
    <>
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
          {isPayButtonClicked ? ' 결제' : '입니다.'}
        </div>
      </div>
      {isPayButtonClicked ? (
        <KakaoPayButton />
      ) : (
        <div className={styles.buttons}>
          <div className={styles.cancel}>
            <RoundButton type='white' onClick={() => navigate(-1)}>
              취소
            </RoundButton>
          </div>
          <div className={styles.next}>
            <RoundButton
              onClick={() => {
                updatePass({
                  price: FEE[diffDays - 1],
                  itemName: `${diffDays}days`,
                });
                setIsPayButtonClicked(true);
              }}
            >
              네, 결제할게요!
            </RoundButton>
          </div>
        </div>
      )}
    </>
  );
}
