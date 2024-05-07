import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/back_arrow.svg';
import symbolLg from '../../assets/symbol_lg.svg';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import EmailVerification from '../../components/EmailVerification/EmailVerification';
import PasswordVerification from '../../components/PasswordVerification/PasswordVerification';
import Title from '../../components/Title/Title';
import useFunnel from '../../hooks/useFunnel';
import styles from './SignUpPage.module.css';

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
        <Funnel>
          <Funnel.Step name='code'>
            <EmailVerification formData={formData} />
            <DefaultButton
              text='이메일 회원가입 완료하기'
              onClick={() => setStep('password')}
            />
          </Funnel.Step>
          <Funnel.Step name='password'>
            <PasswordVerification formData={formData} />
            <DefaultButton
              text='이메일 회원가입 완료하기'
              onClick={() => setStep('code')}
            />
          </Funnel.Step>
        </Funnel>
      </div>
    </section>
  );
}
