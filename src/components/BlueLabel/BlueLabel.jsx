import React from 'react';
import styles from './BlueLabel.module.css';

export default function BlueLabel({ children }) {
  return <div className={styles.listTitleContainer}>{children}</div>;
}
