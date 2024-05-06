import React from 'react';
import styles from './DefaultButton.module.css';

export default function DefaultButton({ text, disabled }) {
  return (
    <button className={styles.button} disabled={disabled}>
      <div className={styles.text}>{text}</div>
    </button>
  );
}
