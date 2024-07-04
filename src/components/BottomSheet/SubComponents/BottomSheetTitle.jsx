import styles from './BottomSheetTitle.module.css';

export default function BottomSheetTitle({ children }) {
  return <h3 className={styles.title}>{children}</h3>;
}
