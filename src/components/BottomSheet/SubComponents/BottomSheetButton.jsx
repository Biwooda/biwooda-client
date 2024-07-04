import styles from './BottomSheetButton.module.css';

export default function BottomSheetButton({ children, isWhite }) {
  return (
    <button className={`${styles.button} ${isWhite && styles.white}`}>
      {children}
    </button>
  );
}
