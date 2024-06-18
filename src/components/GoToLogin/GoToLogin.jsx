import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../assets/right_arrow.svg';
import styles from './GoToLogin.module.css';

export default function GoToLogin() {
  return (
    <Link to='/login' className={styles.loginButton}>
      <img src={rightArrow} alt='right_arrow' />
      로그인하러 가기
    </Link>
  );
}
