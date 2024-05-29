import React from 'react';
import ListIndex from '../../components/ListIndex/ListIndex';
import ListItem from '../../components/ListItem/ListItem';
import CloseToolbar from '../../components/Toolbar/CloseToolbar/CloseToolbar';
import styles from './NoticePage.module.css';

const datas = [
  {
    category: '이벤트',
    title: '당일 반납하면 그대로 되돌려준다! 역대급 혜택이...',
    date: '23.06.23 13:08:25',
  },
  {
    category: '긴급공지',
    title: '무인 기기와 서버에서 문제가 발생하였습니다.',
    date: '23.02.04 17:01:11',
  },
];

export default function NoticePage() {
  return (
    <section>
      <CloseToolbar title='공지사항' />
      <ListIndex>
        <div className={styles.category}>카테고리</div>
        <div className={styles.title}>제목</div>
        <div className={styles.date}>게시일자</div>
      </ListIndex>
      <div>
        {datas.map(({ category, title, date }) => (
          <ListItem first>
            <div className={`${styles.category} ${styles.clip}`}>
              {category}
            </div>
            <div className={`${styles.title} ${styles.clip}`}>{title}</div>
            <div className={styles.date}>{date}</div>
          </ListItem>
        ))}
      </div>
    </section>
  );
}
