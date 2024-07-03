import umbrella from 'assets/umbrella.svg';

import styles from './Umbrella.module.css';

export default function Umbrella() {
  return (
    <>
      <div className={styles.umbrella}>
        <img src={umbrella} alt='umbrella' />
      </div>
      <div className={styles.dim} />
    </>
  );
}
