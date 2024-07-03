import React, { useRef, useState } from 'react';
import CTAButton from 'components/CTAButton/CTAButton.jsx';
import EmailVerification from 'components/EmailVerification/EmailVerification.jsx';
import PasswordVerification from 'components/PasswordVerification/PasswordVerification.jsx';
import { RESET_PASSWORD_PAGE_TITLE } from 'constants/index.js';
import { checkPasswordFormat } from 'utils/checkFormat';
import SubPage from 'pages/SubPage/SubPage';
import styles from './ResetPasswordPage.module.css';

export default function ResetPasswordPage() {
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
  const scrollRef = useRef();

  return (
    <SubPage
      title={
        formData.code !== code
          ? RESET_PASSWORD_PAGE_TITLE.step1
          : RESET_PASSWORD_PAGE_TITLE.step2
      }
    >
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
                }, 300);
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
            disabled={
              !checkPasswordFormat(formData.password) ||
              formData.password !== formData.rePassword
            }
          >
            비밀번호 재설정 완료
          </CTAButton>
        )}
    </SubPage>
  );
}
