import { Oval } from 'react-loader-spinner';

import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <Oval color='#38B9FF' secondaryColor='#ffffff' width='80' height='80' />
    </div>
  );
}
