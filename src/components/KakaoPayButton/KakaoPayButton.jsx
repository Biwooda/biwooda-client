import { useNavigate } from 'react-router-dom';
import { useRentalStore } from '@/store';

import { rental } from '@/apis';

import { Icon } from '@/components/Icon';

import styles from './KakaoPayButton.module.css';

export default function KakaoPayButton() {
  const navigate = useNavigate();
  const rentalInfo = useRentalStore((state) => state.rentalInfo);
  const pay = async () => {
    try {
      const { data } = await rental(rentalInfo);
      console.log(data);
      window.location.href = data.next_redirect_mobile_url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.button} onClick={pay}>
      <div className={styles.icon}>
        <Icon id='kakao' width={27} height={27} />
      </div>
      <div className={styles.text}>카카오로 결제할게요</div>
    </div>
  );
}
