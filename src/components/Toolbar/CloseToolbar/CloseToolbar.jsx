import { useNavigate } from 'react-router-dom';
import close from '../../../assets/close.svg';
import { useDrawerContext } from '../../../contexts/DrawerContext';
import styles from './CloseToolbar.module.css';

export default function CloseToolbar({ title }) {
  const { toggleDrawer } = useDrawerContext();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <div className={styles.box}></div>
      <div className={styles.title}>{title}</div>
      <img
        className={styles.close}
        src={close}
        alt='close_icon'
        onClick={() => {
          toggleDrawer();
          navigate('/');
        }}
      />
    </nav>
  );
}
