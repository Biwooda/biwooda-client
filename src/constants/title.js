import emailLg from '../assets/email_lg.svg';
import symbolLg from '../assets/symbol_lg.svg';
import waterdropLg from '../assets/waterdrop_lg.svg';

const EMAIL_LOGIN_PAGE_TITLE = {
  icon: emailLg,
  title: '이메일로 로그인하기',
  description: '이메일과 비밀번호로 로그인해봐요',
};

const SIGN_UP_PAGE_TITLE = {
  step1: {
    icon: symbolLg,
    title: '회원가입하기',
    description: '빠르게 회원가입해봐요',
  },
  step2: {
    icon: symbolLg,
    title: '회원가입하기',
    description: '이제 비밀번호를 정하기만 하면 가입 완료!',
  },
};

const RESET_PASSWORD_PAGE_TITLE = {
  step1: {
    icon: waterdropLg,
    title: '비밀번호 재설정',
    description: '회원가입 시 사용했던 이메일을 입력해주세요',
  },
  step2: {
    icon: waterdropLg,
    title: '비밀번호 재설정',
    description: '새로 사용할 비밀번호를 입력해주세요',
  },
};

export {
  EMAIL_LOGIN_PAGE_TITLE,
  RESET_PASSWORD_PAGE_TITLE,
  SIGN_UP_PAGE_TITLE,
};
