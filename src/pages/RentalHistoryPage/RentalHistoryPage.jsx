import { BackToolbar } from '@/components/Toolbar';
import { ListIndex } from '@/components/ListIndex';
import { ListItem } from '@/components/ListItem';

import styles from './RentalHistoryPage.module.css';

const datas = [
  {
    key: 1,
    ticket: '당일권',
    rentalDate: '23.06.23 13.08.25',
    dueDate: '23.06.23 13.08.25',
    location: '숙명여대 명신관',
    lateFee: '300원',
    fee: '',
  },
  {
    key: 2,
    ticket: '당일권',
    rentalDate: '23.06.23 13.08.25',
    dueDate: '23.06.23 13.08.25',
    location: '숙명여대 순헌관',
    lateFee: 'n원',
    fee: '800원',
  },
  {
    key: 3,
    ticket: '당일권',
    rentalDate: '23.06.23 13.08.25',
    dueDate: '23.06.23 13.08.25',
    location: '숙명여대 순헌관',
    lateFee: '300원',
    fee: '800원',
  },
  {
    key: 4,
    ticket: '당일권',
    rentalDate: '23.06.23 13.08.25',
    dueDate: '23.06.23 13.08.25',
    location: '숙명여대 순헌관',
    lateFee: '300원',
    fee: '800원',
  },
];

export default function RentalHistoryPage() {
  return (
    <section>
      <div className={styles.toolbar}>
        <BackToolbar title='이용 내역' />
      </div>
      <ListIndex>
        <div className={styles.ticket}>이용권</div>
        <div className={styles.rentalDate}>대여일시</div>
        <div className={styles.dueDate}>반납일시</div>
        <div className={styles.location}>대여장소</div>
        <div className={styles.lateFee}>초과금</div>
        <div className={styles.fee}>결제금액</div>
      </ListIndex>
      <div>
        {datas.map(
          ({ key, ticket, rentalDate, dueDate, location, lateFee, fee }) => (
            <ListItem key={key}>
              <div className={styles.ticket}>{ticket}</div>
              <div className={styles.rentalDate}>{rentalDate}</div>
              <div className={styles.dueDate}>{dueDate}</div>
              <div className={styles.location}>{location}</div>
              <div className={styles.lateFee}>{lateFee}</div>
              <div className={styles.fee}>{fee}</div>
            </ListItem>
          )
        )}
      </div>
    </section>
  );
}
