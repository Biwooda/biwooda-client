import emailLogo from '../assets/email.svg';
import kakaoLogo from '../assets/kakao.svg';
import naverLogo from '../assets/naver.svg';

export const buttonStyles = [
  {
    id: 1,
    icon: kakaoLogo,
    backgroundColor: '#FEE500',
    text: '카카오 로그인하기',
  },
  {
    id: 2,
    icon: naverLogo,
    backgroundColor: '#59C150',
    text: '네이버로 로그인하기',
  },
  { id: 3, icon: emailLogo, text: '이메일로 로그인하기' },
];

export default buttonStyles;
