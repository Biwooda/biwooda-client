import React from 'react';
import getTextColorByBackgroundColor from '../../utils/getTextColorByBackgroundColor';
import styles from './LoginButton.module.css';

export default function LoginButton({
  icon,
  text,
  backgroundColor = '#ffffff',
}) {
  return (
    <div
      className={styles.button}
      style={{
        backgroundColor,
        ...(backgroundColor !== '#ffffff' && { border: 'none' }),
      }}
    >
      <div className={styles.icon}>
        <img src={icon} alt={text} />
      </div>
      <div
        className={styles.text}
        style={{ color: getTextColorByBackgroundColor(backgroundColor) }}
      >
        {text}
      </div>
    </div>
  );
}
