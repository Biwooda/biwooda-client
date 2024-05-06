import React from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/back_arrow.svg';
import symbolLg from '../../assets/symbol_lg.svg';
import Title from '../../components/Title/Title';
import styles from './SignUpPage.module.css';

export default function SignUpPage() {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <img src={backArrow} alt='back' onClick={() => navigate(-1)} />
      </div>
      <Title
        icon={symbolLg}
        title='회원가입하기'
        description='빠르게 회원가입해봐요'
      />
    </section>
  );
}
