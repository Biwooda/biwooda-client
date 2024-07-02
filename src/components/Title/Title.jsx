import React from 'react';
import Icon from '../Icon/Icon';
import styles from './Title.module.css';

export default function Title({ icon, title, description }) {
  return (
    <div>
      <div className={styles.titleContainer}>
        {icon && <Icon {...icon} />}
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
