import React, { useState } from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import EmailVerification from '../../components/EmailVerification/EmailVerification';
import PasswordVerification from '../../components/PasswordVerification/PasswordVerification';
import { SIGN_UP_PAGE_TITLE } from '../../constants';
import SubPage from '../../pages/SubPage/SubPage';
import { checkPasswordFormat } from '../../utils/checkFormat';
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SubPage title={SIGN_UP_PAGE_TITLE.step1}>
      <div className={styles.container}>
        <EmailVerification data={formData} onChange={handleChange} />
        <div className={styles.passwordFieldset}>
          <PasswordVerification data={formData} onChange={handleChange} />
        </div>
      </div>
      <CTAButton
        text='이메일 회원가입 완료하기'
        onClick={() => console.log('success sign up!')}
        disabled={
          !checkPasswordFormat(formData.password) ||
          formData.password !== formData.rePassword
        }
      />
    </SubPage>
  );
}
