import React, { useState } from 'react';
import caution from '../../assets/caution.svg';
import downArrow from '../../assets/down_arrow.svg';
import upArrow from '../../assets/up_arrow.svg';
import styles from './Caution.module.css';

export default function Caution({ init }) {
  const [isOpen, setIsOpen] = useState(init);

  return (
    <div className={styles.content}>
      <div className={styles.label}>
        <img src={caution} alt='caution' />
        <div>잠깐 대여 전 확인하세요</div>
        <img
          src={isOpen ? upArrow : downArrow}
          alt='arrow icon'
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className={`${styles.box} ${isOpen && styles.opend}`}>
        <div className={styles.text}>
          <p>
            <span className={styles.emphasis}>*</span>모든 대여는 시간이 아닌{' '}
            <span className={styles.emphasis}>‘일’로 카운트</span>
            됩니다
            <span className={styles.example}>
              ex) 2일권으로 화요일에 대여했을 시, 다음 날인 수요일 자정까지만
              반납하면 추가금이 없음
            </span>
          </p>
          <p>
            <span className={styles.emphasis}>*</span>우산 대여 및 반납은 24시간
            가능합니다
          </p>
          <p>
            <span className={styles.emphasis}>*</span>반납 시{' '}
            <span>추가요금</span>은 대여 시의 결제수단으로{' '}
            <span className={styles.emphasis}>자동으로 결제</span>됩니다
          </p>
          <p>
            <span className={styles.emphasis}>*</span>미반납 시 자동으로 분실
            처리되며, 다음과 같이 추가 금액이 과금됩니다
          </p>
          <p>
            <span className={styles.emphasis}>*</span>우산 분실 처리 후 우산은
            개인소유입니다
          </p>
        </div>
      </div>
    </div>
  );
}
