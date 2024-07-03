import React from 'react';
import Icon from 'components/Icon/Icon';
import ListItem from 'components/ListItem/ListItem';
import BackToolbar from 'components/Toolbar/BackToolbar/BackToolbar';
import styles from './InboxPage.module.css';

const datas = [
  {
    key: 1,
    category: '이벤트',
    title: '당일 반납하면 그대로 되돌려준다! 역대급 혜택이...',
    date: '23.06.23 13:08:25',
  },
  {
    key: 2,
    category: '긴급공지',
    title: '무인 기기와 서버에서 문제가 발생하였습니다.',
    date: '23.02.04 17:01:11',
  },
  {
    key: 3,
    category: '이벤트',
    title: '비우다를 소개해! 친구에게 공유하면 50% 할인 받을 수 있습니다.',
    date: '23.03.29 09:04:11',
  },
];

export default function InboxPage() {
  return (
    <section className={styles.container}>
      <div className={styles.toolbar}>
        <BackToolbar title='알림함'>
          <Icon id='trash' fill='#3E4E5B' width={36} height={36} />
        </BackToolbar>
      </div>
      {datas.length > 0 ? (
        <>
          <div className={styles.blueline}>알림함</div>
          <div>
            {datas.map(({ key, category, title, date }) => (
              <ListItem key={key} first>
                <div className={`${styles.category} ${styles.clip}`}>
                  {category}
                </div>
                <div className={`${styles.title} ${styles.clip}`}>{title}</div>
                <div className={styles.date}>{date}</div>
              </ListItem>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.none}>보관된 알림이 없습니다</div>
      )}
    </section>
  );
}
