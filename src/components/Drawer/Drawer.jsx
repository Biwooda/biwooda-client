import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import GoToLogin from '../GoToLogin/GoToLogin';
import Icon from '../Icon/Icon';
import CloseToolbar from '../Toolbar/CloseToolbar/CloseToolbar';
import styles from './Drawer.module.css';

export default function Drawer() {
  const { user, setUser } = useUserContext();

  return (
    <section className={styles.container}>
      <CloseToolbar />
      <div
        className={styles.banner}
        style={{
          background:
            user && 'linear-gradient(90deg, #38b9ff 2.26%, #0bff99 100.81%)',
        }}
      >
        {user ? (
          <div className={styles.title}>
            {user.nickname}님
            <br />
            반갑습니다
          </div>
        ) : (
          <>
            <div className={styles.title}>
              <Icon id='waterdrop' fill='white' width={24} height={24} />
              로그인 후 이용해주세요
            </div>
            <GoToLogin />
          </>
        )}
      </div>
      <div className={styles.menu}>
        <Link to='/notice' className={styles.item}>
          <Icon id='notice' fill='#516875' width={36} height={36} />
          공지사항
        </Link>
        <Link to='/guideline' className={styles.item}>
          <Icon id='docs' fill='#516875' width={36} height={36} />
          서비스 이용안내
        </Link>
        <Link to='/customer-support' className={styles.item}>
          <Icon id='help' fill='#516875' width={36} height={36} />
          고객센터
        </Link>
        <Link to='/' className={styles.item}>
          <Icon id='question' fill='#516875' width={36} height={36} />
          FAQ
        </Link>
        {user && (
          <div className={styles.item} onClick={() => setUser(null)}>
            <Icon id='logout' fill='#516875' width={36} height={36} />
            로그아웃
          </div>
        )}
      </div>
    </section>
  );
}
