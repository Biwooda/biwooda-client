import styles from './BottomSheetButtons.module.css';

export default function BottomSheetButtons({ children }) {
  return <div className={styles.buttons}>{children}</div>;
}
