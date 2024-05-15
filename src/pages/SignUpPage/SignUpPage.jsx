import React, { useRef, useState } from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import EmailVerification from '../../components/EmailVerification/EmailVerification';
import PasswordVerification from '../../components/PasswordVerification/PasswordVerification';
import { SIGN_UP_PAGE_TITLE } from '../../constants';
import SubPage from '../../pages/SubPage/SubPage';
import { checkPasswordFormat } from '../../utils/checkFormat';
import styles from './SignUpPage.module.css';

export default function SignUpPage() {
  const scrollRef = useRef();
  const [formData, setFormData] = useState({
    email: '',
    code: '',
    password: '',
    rePassword: '',
  });
  const [code, setCode] = useState();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SubPage title={SIGN_UP_PAGE_TITLE.step1}>
      <div className={styles.container}>
        <div className={styles.emailFieldset}>
          <EmailVerification
            data={formData}
            code={code}
            setCode={setCode}
            onChange={(event) => {
              handleChange(event);
              const { name, value } = event.target;

              if (name === 'code' && value === code) {
                setTimeout(() => {
                  scrollRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }, 150);
              }
            }}
          />
        </div>
        <div className={styles.passwordFieldset} ref={scrollRef}>
          <PasswordVerification data={formData} onChange={handleChange} />
        </div>
      </div>
      {checkPasswordFormat(formData.password) &&
        formData.password === formData.rePassword &&
        formData.code === code && (
          <CTAButton
            text='이메일 회원가입 완료하기'
            onClick={() => console.log('success sign up!')}
          />
        )}
    </SubPage>
  );
}
