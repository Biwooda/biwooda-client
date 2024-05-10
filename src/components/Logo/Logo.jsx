import React from 'react';
import biwoodaLogo from '../../assets/logo.svg';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={biwoodaLogo} alt='logo' />
    </div>
  );
}
