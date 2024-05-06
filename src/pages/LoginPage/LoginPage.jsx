import React from 'react';
import { Link } from 'react-router-dom';
import biwoodaLogo from '../../assets/logo.svg';
import umbrella from '../../assets/umbrella.svg';
import LoginButton from '../../components/LoginButton/LoginButton';
import Title from '../../components/Title/Title';
import { buttonStyles } from '../../constants';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <section className={styles.login}>
      <div className={styles.umbrella}>
        <img src={umbrella} alt='umbrella' />
      </div>
      <div className={styles.dim}></div>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src={biwoodaLogo} alt='logo' />
        </div>
        <Title
          title='시작해볼까요?'
          description='공유 우산 서비스 비우다와 함께해요'
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.login_buttons}>
          {buttonStyles.map((style) => (
            <Link to='/login/email'>
              <LoginButton key={style.id} {...style} />
            </Link>
          ))}
        </div>
        <div className={styles.info}>
          비우다가 처음이신가요?
          <Link to='/sign-up' className={styles.signUp}>
            회원가입하기
          </Link>
        </div>
      </div>
    </section>
  );
}
