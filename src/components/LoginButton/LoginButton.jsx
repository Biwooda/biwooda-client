import React from 'react';
import getTextColorByBackgroundColor from '../../utils/getTextColorByBackgroundColor';
import styles from './LoginButton.module.css';

export default function LoginButton({ children }) {
  return <div className={styles.loginButtons}>{children}</div>;
}

function Button({
  label,
  icon,
  backgroundColor = '#ffffff',
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
        <img src={icon} alt={label} />
      </div>
      <div
        className={styles.text}
        style={{ color: getTextColorByBackgroundColor(backgroundColor) }}
      >
        {children}
      </div>
    </div>
  );
}

LoginButton.Button = Button;
