import { useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { BackToolbar } from '@/components/Toolbar';

import styles from './CustomerSupportPage.module.css';

export default function CustomerSupportPage() {
  const [tab, setTab] = useState('Tab1');
  const underlineRef = useRef();

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.toolbar}>
          <BackToolbar title='고객센터' />
        </div>
        <div className={styles.tabBar}>
          <div className={styles.tabs}>
            <Link
              to='/customer-support'
              className={`${styles.tab} ${tab === 'Tab1' && styles.selected}`}
              onClick={() => {
                underlineRef.current.style.transform = 'translateX(calc(33%))';
                setTab('Tab1');
              }}
            >
              문의하기
            </Link>
            <Link
              to='/customer-support/contact-history'
              className={`${styles.tab} ${tab === 'Tab2' && styles.selected}`}
              onClick={() => {
                underlineRef.current.style.transform = 'translateX(200%)';
                setTab('Tab2');
              }}
            >
              문의내역
            </Link>
          </div>
          <div className={styles.underline} ref={underlineRef} />
        </div>
      </div>
      <Outlet />
    </section>
  );
}
