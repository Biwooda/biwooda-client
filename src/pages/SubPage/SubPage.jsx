import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import Title from 'components/Title/Title.jsx';
import styles from './SubPage.module.css';

export default function SubPage({ title, children }) {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.back} onClick={() => navigate(-1)}>
        <Icon id='back' stroke='#3E4E5B' width={36} height={36} />
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
