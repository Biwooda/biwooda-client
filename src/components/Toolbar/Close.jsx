import close from '../../assets/close.svg';
import styles from './Close.module.css';

export default function Close({ title, onClose }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.box}></div>
      <div className={styles.title}>{title}</div>
      <img
        className={styles.close}
        src={close}
        alt='close_icon'
        onClick={onClose}
      />
    </nav>
  );
}
