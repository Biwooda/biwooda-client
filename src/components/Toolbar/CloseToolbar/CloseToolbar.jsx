import { useNavigate } from 'react-router-dom';

import { useDrawerContext } from 'contexts/DrawerContext';

import Icon from 'components/Icon/Icon';

import styles from './CloseToolbar.module.css';

export default function CloseToolbar({ title }) {
  const { toggleDrawer } = useDrawerContext();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <div className={styles.box} />
      <div className={styles.title}>{title}</div>
      <div
        className={styles.close}
        role='button'
        tabIndex='0'
        onClick={() => {
          toggleDrawer();
          navigate('/');
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            toggleDrawer();
            navigate('/');
          }
        }}
      >
        <Icon id='x' fill='#3E4E5B' width={24} height={24} />
      </div>
    </nav>
  );
}
