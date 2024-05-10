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
        <LoginButton>
          <LoginButton.Button
            label='kakao'
            icon={kakaoLogo}
            backgroundColor='#FEE500'
            onClick={() => {
              console.log('kakao');
            }}
          >
            카카오로 로그인하기
          </LoginButton.Button>
          <LoginButton.Button
            label='naver'
            icon={naverLogo}
            backgroundColor='#59C150'
            onClick={() => {
              console.log('naver');
            }}
          >
            네이버로 로그인하기
          </LoginButton.Button>
          <Link to='/login/email'>
            <LoginButton.Button label='email' icon={emailLogo}>
              이메일로 로그인하기
            </LoginButton.Button>
          </Link>
        </LoginButton>
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
