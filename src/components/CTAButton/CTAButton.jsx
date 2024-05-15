import React from 'react';
import styles from './CTAButton.module.css';

export default function CTAButton({ text, onClick, disabled }) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      <div className={styles.text}>{text}</div>
    </button>
  );
}
