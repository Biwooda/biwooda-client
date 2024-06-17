import React from 'react';
import styles from './CTAButton.module.css';

export default function CTAButton({ children, onClick, disabled }) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      <div className={styles.text}>{children}</div>
    </button>
  );
}
