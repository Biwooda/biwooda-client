import React from 'react';
import BlueLabel from '../../../components/BlueLabel/BlueLabel';
import ListItem from '../../../components/ListItem/ListItem';
import styles from './ContactHistory.module.css';

const datas = [
  {
    order: '1',
    title: '분실신고 문의 드립니다.',
    date: '23.06.23 13:08:25',
    state: '처리중',
  },
  {
    order: '2',
    title: '분실신고 문의드립니다.',
    date: '23.01.07 16:15:31',
    state: '처리완료',
  },
];

export default function ContactHistory() {
  return (
    <section>
      <BlueLabel>
        <div className={styles.order}>순번</div>
        <div className={styles.title}>제목</div>
        <div className={styles.date}>문의 일자</div>
        <div className={styles.state}>처리상태</div>
      </BlueLabel>
      <div>
        {datas.map(({ order, title, date, state }) => (
          <ListItem>
            <div className={styles.order}>{order}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>{date}</div>
            <div className={styles.state}>{date}</div>
          </ListItem>
        ))}
      </div>
    </section>
  );
}
