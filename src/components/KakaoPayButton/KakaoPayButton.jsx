import React from 'react';
import kakaoLogo from '../../assets/kakao.svg';
import styles from './KakaoPayButton.module.css';

export default function KakaoPayButton() {
  return (
    <div className={styles.button}>
      <div className={styles.icon}>
        <img src={kakaoLogo} alt={'kakao'} />
      </div>
      <div className={styles.text}>카카오로 결제할게요</div>
    </div>
  );
}
