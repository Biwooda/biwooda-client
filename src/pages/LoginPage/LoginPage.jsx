import { Link } from 'react-router-dom';

import Icon from 'components/Icon/Icon';
import LoginButton from 'components/LoginButton/LoginButton';
import Title from 'components/Title/Title';
import Umbrella from 'components/Umbrella/Umbrella';

import styles from './LoginPage.module.css';

const LOGIN_BUTTONS = [
  {
    icon: {
      id: 'kakao',
      fill: '',
      width: 27,
      height: 27,
    },
  },
  {
    icon: {
      id: 'naver',
      fill: '#ffffff',
      width: 27,
      height: 27,
    },
  },
  {
    icon: {
      id: 'email',
      fill: '#38B9FF',
      width: 27,
      height: 27,
    },
  },
];

export default function LoginPage() {
  return (
    <section className={styles.login}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Icon id='logo' width={130} height={31} />
        </div>
        <Title
          title='시작해볼까요?'
          description='공유 우산 서비스 비우다와 함께해요'
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.loginButtons}>
          <LoginButton
            label='kakao'
            icon={LOGIN_BUTTONS[0].icon}
            backgroundColor='#FEE500'
            onLogin={() => {
              console.log('kakao');
            }}
          >
            카카오로 로그인하기
          </LoginButton>
          <LoginButton
            label='naver'
            icon={LOGIN_BUTTONS[1].icon}
            backgroundColor='#03C75A'
            onLogin={() => {
              console.log('naver');
            }}
          >
            네이버로 로그인하기
          </LoginButton>
          <Link to='/login/email'>
            <LoginButton
              label='email'
              icon={LOGIN_BUTTONS[2].icon}
              color='#1CAFFF'
            >
              이메일로 로그인하기
            </LoginButton>
          </Link>
        </div>
        <div className={styles.info}>
          비우다가 처음이신가요?
          <Link to='/sign-up' className={styles.signUp}>
            회원가입하기
          </Link>
        </div>
      </div>
      <Umbrella />
    </section>
  );
}
