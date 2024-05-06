import React from 'react';
import styles from './DefaultButton.module.css';

export default function DefaultButton({ text, onClick, disabled }) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      <div className={styles.text}>{text}</div>
    </button>
  );
}
