import styles from './BottomSheetLabel.module.css';

export default function BottomSheetLabel({ children }) {
  return <span className={styles.label}>{children}</span>;
}
