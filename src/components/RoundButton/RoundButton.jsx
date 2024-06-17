import React from 'react';
import styles from './RoundButton.module.css';

export default function RoundButton({ type, onClick, children }) {
  return (
    <button
      className={`${styles.button} ${type === 'white' && styles.white}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
