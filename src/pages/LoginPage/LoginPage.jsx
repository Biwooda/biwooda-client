import React from 'react';
import { Link } from 'react-router-dom';
import emailLogo from '../../assets/email.svg';
import kakaoLogo from '../../assets/kakao.svg';
import naverLogo from '../../assets/naver.svg';
import LoginButton from '../../components/LoginButton/LoginButton';
import Logo from '../../components/Logo/Logo';
import Title from '../../components/Title/Title';
import Umbrella from '../../components/Umbrella/Umbrella';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <section className={styles.login}>
      <div className={styles.top}>
        <Logo />
        <Title
          title='시작해볼까요?'
          description='공유 우산 서비스 비우다와 함께해요'
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.loginButtons}>
          <LoginButton
            label='kakao'
            icon={kakaoLogo}
            backgroundColor='#FEE500'
            onClick={() => {
              console.log('kakao');
            }}
          >
            카카오로 로그인하기
          </LoginButton>
          <LoginButton
            label='naver'
            icon={naverLogo}
            backgroundColor='#03C75A'
            onClick={() => {
              console.log('naver');
            }}
          >
            네이버로 로그인하기
          </LoginButton>
          <Link to='/login/email'>
            <LoginButton label='email' icon={emailLogo} color='#1CAFFF'>
              이메일로 로그인하기
            </LoginButton>
          </Link>
        </div>
        <div className={styles.info}>
          비우다가 처음이신가요?
          <Link to='/sign-up' className={styles.signUp}>
            회원가입하기
          </Link>
        </div>
      </div>
      <Umbrella />
    </section>
  );
}
