import Icon from 'components/Icon/Icon';

import getTextColorByBackgroundColor from 'utils/getTextColorByBackgroundColor';

import styles from './LoginButton.module.css';

export default function LoginButton({
  icon,
  backgroundColor = '#ffffff',
  color,
  onLogin,
  children,
}) {
  return (
    <div
      className={styles.button}
      role='button'
      tabIndex='0'
      onClick={onLogin}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          onLogin();
        }
      }}
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
