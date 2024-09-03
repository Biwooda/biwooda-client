import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';

import styles from './BackToolbar.module.css';

export default function BackToolbar({ title, children }) {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <div
        className={styles.back}
        role='button'
        tabIndex='0'
        onClick={() => navigate(-1)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            navigate(-1);
          }
        }}
      >
        <Icon id='back' stroke='#3E4E5B' width={36} height={36} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.box}>{children}</div>
    </nav>
  );
}
