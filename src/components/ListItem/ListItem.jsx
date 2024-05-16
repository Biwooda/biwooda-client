import React from 'react';
import styles from './ListItem.module.css';

export default function ListItem({ category, title, date }) {
  return (
    <div className={styles.listItem}>
      <div className={styles.category}>{category}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
}
