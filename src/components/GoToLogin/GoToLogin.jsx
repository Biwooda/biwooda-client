import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import styles from './GoToLogin.module.css';

export default function GoToLogin() {
  return (
    <Link to='/login' className={styles.loginButton}>
      <Icon id='rightArrow' stroke='#657D8B' width={18} height={18} />
      로그인하러 가기
    </Link>
  );
}
