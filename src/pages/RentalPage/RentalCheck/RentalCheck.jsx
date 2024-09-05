import { Link } from 'react-router-dom';

import { RoundButton } from '@/components/RoundButton';

import { PayInfo } from '@/pages/RentalPage/components';

import styles from './RentalCheck.module.css';

export default function RentalCheck() {
  return (
    <>
      <PayInfo text='입니다.' />
      <div className={styles.buttons}>
        <div className={styles.cancel}>
          <RoundButton type='white' onClick={() => navigate(-1)}>
            취소
          </RoundButton>
        </div>
        <Link to='/rental/pay' className={styles.next}>
          <RoundButton>네, 결제할게요!</RoundButton>
        </Link>
      </div>
    </>
  );
}
