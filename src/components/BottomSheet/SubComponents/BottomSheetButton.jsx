import styles from './BottomSheetButton.module.css';

export default function BottomSheetButton({ onClick, children, isWhite }) {
  return (
    <button
      className={`${styles.button} ${isWhite && styles.white}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
