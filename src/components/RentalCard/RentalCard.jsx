import { Link } from 'react-router-dom';

import { useAuthContext } from '@/contexts/AuthContext';

import { Icon } from '@/components/Icon';

import styles from './RentalCard.module.css';

export default function RentalCard() {
  const { user, ticket: ticketInfo } = useAuthContext();

  if (!user) return null;

  const { due, overdue, ticket } = ticketInfo;

  return (
    <div className={styles.card}>
      <div className={`${styles.info} ${overdue && styles.overdue}`}>
        <div className={styles.state}>
          <Icon
            id={overdue ? 'waterdropFull' : 'symbol'}
            fill={overdue ? '#FF6644' : '#38B9FF'}
            width={18}
            height={18}
          />
          {overdue ? '미반납' : `${ticket} 이용중`}
        </div>
        <div className={styles.due}>
          <span className={styles.date}>{due}</span>
          까지 이용 가능합니다
        </div>
      </div>
      <Link to='/rental-history'>
        <div className={styles.move}>
          <Icon id='rightArrow' fill='#000000' width={18} height={18} />
        </div>
      </Link>
    </div>
  );
}
