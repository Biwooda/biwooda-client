import styles from './BottomSheetTitle.module.css';

export default function BottomSheetTitle({ children, isCenter }) {
  return (
    <h3 className={`${styles.title} ${isCenter && styles.center}`}>
      {children}
    </h3>
  );
}
