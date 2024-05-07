import React from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/back_arrow.svg';
import Title from '../../components/Title/Title.jsx';
import styles from './SubPage.module.css';

export default function SubPage({ title, children }) {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <img src={backArrow} alt='back' onClick={() => navigate(-1)} />
      </div>
      <Title
        icon={title.icon}
        title={title.title}
        description={title.description}
      />
      <div className={styles.content}>{children}</div>
    </section>
  );
}
