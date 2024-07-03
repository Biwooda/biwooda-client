import styles from './CTAButton.module.css';

export default function CTAButton({ children, type, onClick, disabled }) {
  return (
    <button
      className={`${styles.button} ${type === 'white' && styles.white}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className={styles.text}>{children}</div>
    </button>
  );
}
