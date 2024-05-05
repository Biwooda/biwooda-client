import React from 'react';
import styles from './Title.module.css';

export default function Title({ icon, title, description }) {
  return (
    <div>
      <div className={styles.titleContainer}>
        {icon && <img src={icon} alt='icon' />}
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
