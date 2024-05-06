import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/back_arrow.svg';
import symbolLg from '../../assets/symbol_lg.svg';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import FeedbackMessage from '../../components/FeedbackMessage/FeedbackMessage';
import PasswordField from '../../components/PasswordField/PasswordField';
import TextField from '../../components/TextField/TextField';
import Title from '../../components/Title/Title';
import { SIGN_UP_FEEDBACK_MESSAGE } from '../../constants/message';
import { checkEmailFormat, checkPasswordFormat } from '../../utils/checkFormat';
import styles from './SignUpPage.module.css';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    code: '',
    password: '',
    rePassword: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <img src={backArrow} alt='back' onClick={() => navigate(-1)} />
      </div>
      <Title
        icon={symbolLg}
        title='회원가입하기'
        description='빠르게 회원가입해봐요'
      />
      <div className={styles.signUpForm} onChange={handleChange}>
        <div className={styles.codeFieldset}>
          <TextField
            name='email'
            label='이메일'
            value={formData.email}
            placeholder='이메일을 입력해주세요'
          >
            <FeedbackMessage
              message={
                checkEmailFormat(formData.email)
                  ? SIGN_UP_FEEDBACK_MESSAGE.emailPass
                  : SIGN_UP_FEEDBACK_MESSAGE.emailFail
              }
              condition={checkEmailFormat(formData.email)}
            />
          </TextField>
          <div className={styles.codeButton}>
            <div className={styles.sendCodeButton}>
              <DefaultButton
                text='이메일로 인증번호 전송'
                disabled={!checkEmailFormat(formData.email)}
              />
            </div>
            <div className={styles.resendCodeButton}>
              <DefaultButton text='재발송' />
            </div>
          </div>
          <TextField
            name='code'
            label='인증번호'
            value={formData.code}
            placeholder='인증번호를 입력해주세요'
          >
            <FeedbackMessage message='확인 완료' condition={true} />
          </TextField>
        </div>
        <div className={styles.passwordFieldset}>
          <PasswordField
            name='password'
            label='비밀번호'
            value={formData.password}
            placeholder='비밀번호를 입력해주세요'
          >
            <FeedbackMessage
              message={
                checkPasswordFormat(formData.password)
                  ? SIGN_UP_FEEDBACK_MESSAGE.passwordPass
                  : SIGN_UP_FEEDBACK_MESSAGE.passwordFail
              }
              condition={checkPasswordFormat(formData.password)}
            />
          </PasswordField>
          <PasswordField
            name='repassword'
            label='비밀번호 재입력'
            value={formData.repassword}
            placeholder='비밀번호를 재입력해주세요'
          >
            <FeedbackMessage
              message={
                formData.password === formData.repassword
                  ? SIGN_UP_FEEDBACK_MESSAGE.repasswordPass
                  : SIGN_UP_FEEDBACK_MESSAGE.repasswordFail
              }
              condition={formData.password === formData.repassword}
            />
          </PasswordField>
        </div>
        <DefaultButton text='이메일 회원가입 완료하기' />
      </div>
    </section>
  );
}
