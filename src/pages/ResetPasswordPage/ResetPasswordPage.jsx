import React, { useState } from 'react';
import CTAButton from '../../components/CTAButton/CTAButton.jsx';
import EmailVerification from '../../components/EmailVerification/EmailVerification.jsx';
import PasswordVerification from '../../components/PasswordVerification/PasswordVerification.jsx';
import { RESET_PASSWORD_PAGE_TITLE } from '../../constants/index.js';
import useFunnel from '../../hooks/useFunnel';
import { checkEmailFormat, checkPasswordFormat } from '../../utils/checkFormat';
import SubPage from '../SubPage/SubPage';

export default function ResetPasswordPage() {
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
  const [Funnel, setStep] = useFunnel('code');

  return (
    <Funnel>
      <Funnel.Step name='code'>
        <SubPage title={RESET_PASSWORD_PAGE_TITLE.step1}>
          <EmailVerification data={formData} onChange={handleChange} />
          <CTAButton
            text='확인'
            onClick={() => setStep('password')}
            disabled={!checkEmailFormat(formData.email) || !formData.code}
          />
        </SubPage>
      </Funnel.Step>
      <Funnel.Step name='password'>
        <SubPage title={RESET_PASSWORD_PAGE_TITLE.step2}>
          <PasswordVerification data={formData} onChange={handleChange} />
          <CTAButton
            text='비밀번호 재설정 완료'
            disabled={
              !checkPasswordFormat(formData.password) ||
              formData.password !== formData.rePassword
            }
          />
        </SubPage>
      </Funnel.Step>
    </Funnel>
  );
}
