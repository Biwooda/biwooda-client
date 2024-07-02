import React from 'react';
import getTextColorByBackgroundColor from '../../utils/getTextColorByBackgroundColor';
import Icon from '../Icon/Icon';
import styles from './LoginButton.module.css';

export default function LoginButton({
  label,
  icon,
  backgroundColor = '#ffffff',
  color,
  onClick,
  children,
}) {
  return (
    <div
      className={styles.button}
      onClick={onClick}
      style={{
        backgroundColor,
        ...(backgroundColor !== '#ffffff' && { border: 'none' }),
      }}
    >
      <div className={styles.icon}>
        <Icon {...icon} />
      </div>
      <div
        className={styles.text}
        style={{
          color: color ?? getTextColorByBackgroundColor(backgroundColor),
        }}
      >
        {children}
      </div>
    </div>
  );
}
