import { useNavigate } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import { useDrawerContext } from 'contexts/DrawerContext';
import styles from './CloseToolbar.module.css';

export default function CloseToolbar({ title }) {
  const { toggleDrawer } = useDrawerContext();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <div className={styles.box}></div>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.close}
        onClick={() => {
          toggleDrawer();
          navigate('/');
        }}
      >
        <Icon id='x' fill='#3E4E5B' width={24} height={24} />
      </div>
    </nav>
  );
}
