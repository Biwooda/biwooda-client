import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { BackToolbar } from '@/components/Toolbar';
import { Caution } from '@/components/Caution';

import styles from './RentalPage.module.css';

export default function RentalPage() {
  const { state: umbrellaRackId } = useLocation();
  const navigate = useNavigate();

  console.log(umbrellaRackId);

  return (
    <section className={styles.container}>
      <BackToolbar title='대여하기' onPrev={() => navigate(-1)} />
      <div className={styles.wrapper}>
        <Caution init={false} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
