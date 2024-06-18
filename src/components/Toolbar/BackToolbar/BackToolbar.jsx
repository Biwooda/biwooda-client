import backArrow from '../../../assets/back_arrow.svg';
import styles from './BackToolbar.module.css';

export default function BackToolbar({ title, onPrev, children }) {
  return (
    <nav className={styles.nav}>
      <img
        className={styles.back}
        src={backArrow}
        alt='back_icon'
        onClick={onPrev}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.box}>{children}</div>
    </nav>
  );
}
