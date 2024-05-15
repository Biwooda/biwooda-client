import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../../components/CTAButton/CTAButton';
import FeedbackMessage from '../../components/FeedbackMessage/FeedbackMessage';
import InputField from '../../components/InputField/InputField';
import {
  EMAIL_LOGIN_PAGE_TITLE,
  LOGIN_FEEDBACK_MESSAGE,
} from '../../constants';
import { checkEmailFormat, checkPasswordFormat } from '../../utils/checkFormat';
import SubPage from '../SubPage/SubPage';
import styles from './EmailLoginPage.module.css';

export default function EmailLoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <SubPage title={EMAIL_LOGIN_PAGE_TITLE}>
      <div>
        <div className={styles.fieldset}>
          <InputField.Text
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
          </InputField.Text>
          <InputField.Password
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
          </InputField.Password>
        </div>
        <div className={styles.info}>
          비밀번호를 잊으셨나요?
          <Link to='/reset-password' className={styles.reset}>
            비밀번호 재설정하기
          </Link>
        </div>
      </div>
      <div>
        <CTAButton
          text='이메일로 로그인하기'
          disabled={
            !(
              checkEmailFormat(formData.email) &&
              checkPasswordFormat(formData.password)
            )
          }
        />
      </div>
    </SubPage>
  );
}
