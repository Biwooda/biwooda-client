import { Icon } from '@/components/Icon';

import styles from './KakaoPayButton.module.css';

export default function KakaoPayButton({ onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      <div className={styles.icon}>
        <Icon id='kakao' width={27} height={27} />
      </div>
      <div className={styles.text}>카카오로 결제할게요</div>
    </div>
  );
}
