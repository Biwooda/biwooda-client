const LOGIN_FEEDBACK_MESSAGE = {
  emailPass: '올바른 이메일입니다',
  emailFail: '올바른 형태의 이메일이 아닙니다',
  passwordPass: '올바른 비밀번호',
  passwordFail: '영소문자/숫자/특수문자 조합 8자리 이상',
};

const SIGN_UP_FEEDBACK_MESSAGE = {
  emailPass: '이메일 확인 완료',
  emailFail: '올바른 형태의 이메일이 아닙니다',
  code: (time) => `${time} 안에 인증번호를 입력해주세요`,
  codePass: '확인 완료',
  passwordPass: '가능한 비밀번호입니다',
  passwordFail: '8자리 이상의 비밀번호를 만들어주세요',
};

export { LOGIN_FEEDBACK_MESSAGE, SIGN_UP_FEEDBACK_MESSAGE };
