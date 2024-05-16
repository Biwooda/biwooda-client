import React from 'react';
import CloseToolbar from '../../components/Toolbar/CloseToolbar/CloseToolbar';
import styles from './NoticePage.module.css';

export default function NoticePage() {
  return (
    <section className={styles.container}>
      <CloseToolbar title='공지사항' />
      <div className={styles.listTitleContainer}>
        <div>카테고리</div>
        <div>제목</div>
        <div>게시일자</div>
      </div>
    </section>
  );
}
