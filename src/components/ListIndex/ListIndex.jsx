import styles from './ListIndex.module.css';

export default function ListIndex({ children }) {
  return <div className={styles.listTitleContainer}>{children}</div>;
}
