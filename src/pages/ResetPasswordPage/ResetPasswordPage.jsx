import React, { useState } from 'react';
import DefaultButton from '../../components/DefaultButton/DefaultButton.jsx';
import EmailVerification from '../../components/EmailVerification/EmailVerification.jsx';
import PasswordVerification from '../../components/PasswordVerification/PasswordVerification.jsx';
import { RESET_PASSWORD_PAGE_TITLE } from '../../constants/index.js';
import useFunnel from '../../hooks/useFunnel';
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
          <DefaultButton text='확인' onClick={() => setStep('password')} />
        </SubPage>
      </Funnel.Step>
      <Funnel.Step name='password'>
        <SubPage title={RESET_PASSWORD_PAGE_TITLE.step2}>
          <PasswordVerification data={formData} onChange={handleChange} />
          <DefaultButton
            text='비밀번호 재설정 완료'
            onClick={() => setStep('code')}
          />
        </SubPage>
      </Funnel.Step>
    </Funnel>
  );
}
