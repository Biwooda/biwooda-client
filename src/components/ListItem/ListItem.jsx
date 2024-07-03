import styles from './ListItem.module.css';

export default function ListItem({ first, children }) {
  return (
    <div className={`${styles.listItem} ${first && styles.checkFirst}`}>
      {children}
    </div>
  );
}
