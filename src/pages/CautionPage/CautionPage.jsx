import { Caution } from '@/components/Caution';
import { BackToolbar } from '@/components/Toolbar';

import styles from './CautionPage.module.css';

export default function CautionPage() {
  return (
    <section className={styles.container}>
      <BackToolbar title='이용 시 주의사항' />
      <Caution init />
    </section>
  );
}
