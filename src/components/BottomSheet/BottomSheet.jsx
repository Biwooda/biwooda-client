import React from 'react';
import styles from './BottomSheet.module.css';

export default function BottomSheet({ children }) {
  return (
    <div className={styles.bottomSheet}>
      <div className={styles.header}>
        <span className={styles.handler}></span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
