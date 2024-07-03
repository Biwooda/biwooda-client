import React from 'react';
import Icon from 'components/Icon/Icon';
import styles from './KakaoPayButton.module.css';

export default function KakaoPayButton() {
  return (
    <div className={styles.button}>
      <div className={styles.icon}>
        <Icon id='kakao' width={27} height={27} />
      </div>
      <div className={styles.text}>카카오로 결제할게요</div>
    </div>
  );
}
