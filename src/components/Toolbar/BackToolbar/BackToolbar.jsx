import { useNavigate } from 'react-router-dom';
import backArrow from '../../../assets/back_arrow.svg';
import styles from './BackToolbar.module.css';

export default function BackToolbar({ title, children }) {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <img
        className={styles.back}
        src={backArrow}
        alt='back_icon'
        onClick={() => navigate(-1)}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.box}>{children}</div>
    </nav>
  );
}
