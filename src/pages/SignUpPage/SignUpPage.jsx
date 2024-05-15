import React, { useState } from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import EmailVerification from '../../components/EmailVerification/EmailVerification';
import PasswordVerification from '../../components/PasswordVerification/PasswordVerification';
import { SIGN_UP_PAGE_TITLE } from '../../constants';
import useFunnel from '../../hooks/useFunnel';
import SubPage from '../../pages/SubPage/SubPage';
import { checkEmailFormat, checkPasswordFormat } from '../../utils/checkFormat';

export default function SignUpPage() {
  const [Funnel, setStep] = useFunnel('code');
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
    <Funnel>
      <Funnel.Step name='code'>
        <SubPage title={SIGN_UP_PAGE_TITLE.step1}>
          <EmailVerification data={formData} onChange={handleChange} />
          <CTAButton
            text='확인'
            onClick={() => setStep('password')}
            disabled={!checkEmailFormat(formData.email) || !formData.code}
          />
        </SubPage>
      </Funnel.Step>
      <Funnel.Step name='password'>
        <SubPage title={SIGN_UP_PAGE_TITLE.step2}>
          <PasswordVerification data={formData} onChange={handleChange} />
          <CTAButton
            text='이메일 회원가입 완료하기'
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
