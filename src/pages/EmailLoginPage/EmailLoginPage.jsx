import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/back_arrow.svg';
import emailLg from '../../assets/email_lg.svg';
import FeedbackMessage from '../../components/FeedbackMessage/FeedbackMessage';
import PasswordField from '../../components/PasswordField/PasswordField';
import TextField from '../../components/TextField/TextField';
import Title from '../../components/Title/Title';
import { LOGIN_FEEDBACK_MESSAGE } from '../../constants/message';
import { checkEmailFormat, checkPasswordFormat } from '../../utils/checkFormat';
import styles from './EmailLoginPage.module.css';

export default function EmailLoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();
  return (
    <section className={styles.container} onChange={handleChange}>
      <div className={styles.back}>
        <img src={backArrow} alt='back' onClick={() => navigate(-1)} />
      </div>
      <Title
        icon={emailLg}
        title='이메일로 로그인하기'
        description='이메일과 비밀번호로 로그인해봐요'
      />
      <div className={styles.loginForm}>
        <div>
          <div className={styles.fieldset}>
            <TextField
              label='이메일'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='이메일을 입력해주세요'
            >
              <FeedbackMessage
                message={
                  checkEmailFormat(formData.email)
                    ? LOGIN_FEEDBACK_MESSAGE.emailPass
                    : LOGIN_FEEDBACK_MESSAGE.emailFail
                }
                condition={checkEmailFormat(formData.email)}
              />
            </TextField>
            <PasswordField
              label='비밀번호'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='비밀번호를 입력해주세요'
            >
              <FeedbackMessage
                message={
                  checkPasswordFormat(formData.password)
                    ? LOGIN_FEEDBACK_MESSAGE.passwordPass
                    : LOGIN_FEEDBACK_MESSAGE.passwordFail
                }
                condition={checkPasswordFormat(formData.password)}
              />
            </PasswordField>
          </div>
          <div className={styles.info}>
            비밀번호를 잊으셨나요?
            <a className={styles.reset} href='/'>
              비밀번호 재설정하기
            </a>
          </div>
        </div>
        <div>
          <button
            className={styles.loginButton}
            disabled={
              !(
                checkEmailFormat(formData.email) &&
                checkPasswordFormat(formData.password)
              )
            }
          >
            이메일로 로그인하기
          </button>
        </div>
      </div>
    </section>
  );
}
