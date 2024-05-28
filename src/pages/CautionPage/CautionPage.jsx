import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import caution from '../../assets/caution.svg';
import downArrow from '../../assets/down_arrow.svg';
import upArrow from '../../assets/up_arrow.svg';
import BackToolbar from '../../components/Toolbar/BackToolbar/BackToolbar';
import styles from './CautionPage.module.css';

export default function CautionPage() {
  const [isOpen, setIsOpen] = useState(true);
  const boxRef = useRef();
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <BackToolbar title='이용 시 주의사항' onPrev={() => navigate(-1)} />
      <div className={styles.content}>
        <div className={styles.label}>
          <img src={caution} alt='caution' />
          <div>잠깐 대여 전 확인하세요</div>
          <img
            src={isOpen ? upArrow : downArrow}
            alt='arrow icon'
            onClick={() => {
              setIsOpen((prev) => !prev);
              boxRef.current.style = `opacity: ${isOpen ? 0 : 1}`;
            }}
          />
        </div>
        <div className={styles.box} ref={boxRef}>
          <div className={styles.text}>
            <p>
              <span className={styles.emphasis}>*</span>모든 대여는 시간이 아닌{' '}
              <span className={styles.emphasis}>‘일’로 카운트</span>
              됩니다
              <p className={styles.example}>
                ex) 2일권으로 화요일에 대여했을 시, 다음 날인 수요일 자정까지만
                반납하면 추가금이 없음
              </p>
            </p>
            <p>
              <span className={styles.emphasis}>*</span>우산 대여 및 반납은
              24시간 가능합니다
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
    </section>
  );
}
