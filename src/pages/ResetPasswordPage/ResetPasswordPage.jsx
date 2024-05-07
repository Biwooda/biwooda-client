import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/back_arrow.svg';
import waterdropLg from '../../assets/waterdrop_lg.svg';
import DefaultButton from '../../components/DefaultButton/DefaultButton.jsx';
import EmailVerification from '../../components/EmailVerification/EmailVerification.jsx';
import PasswordVerification from '../../components/PasswordVerification/PasswordVerification.jsx';
import Title from '../../components/Title/Title.jsx';
import useFunnel from '../../hooks/useFunnel';
import styles from './ResetPasswordPage.module.css';

export default function ResetPasswordPage() {
  const [Funnel, setStep] = useFunnel('code');
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
        icon={waterdropLg}
        title='비밀번호 재설정'
        description={'회원가입 입력했던 이메일을 입력해주세요'}
      />
      <div className={styles.resetPasswordForm} onChange={handleChange}>
        <Funnel>
          <Funnel.Step name='code'>
            <EmailVerification formData={formData} />
            <DefaultButton text='확인' onClick={() => setStep('password')} />
          </Funnel.Step>
          <Funnel.Step name='password'>
            <PasswordVerification formData={formData} />
            <DefaultButton
              text='비밀번호 재설정 완료'
              onClick={() => setStep('code')}
            />
          </Funnel.Step>
        </Funnel>
      </div>
    </section>
  );
}
