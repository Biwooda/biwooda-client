import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/contexts/AuthContext';

import { SubPage } from '@/pages/SubPage';

import { CTAButton } from '@/components/CTAButton';
import { FeedbackMessage } from '@/components/FeedbackMessage';
import { InputField } from '@/components/InputField';
import { Snackbar } from '@/components/Snackbar';

import { checkEmailFormat, checkPasswordFormat } from '@/utils/checkFormat';

import { EMAIL_LOGIN_PAGE_TITLE, LOGIN_FEEDBACK_MESSAGE } from '@/constants';

import styles from './EmailLoginPage.module.css';

export default function EmailLoginPage() {
  const { handleEmailLogin } = useAuthContext();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

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
          onClick={() => {
            handleEmailLogin({
              email: formData.email,
              password: formData.password,
            });
            // setUser({
            //   nickname: formData.email.split('@')[0],
            //   rentalState: false,
            //   // overdue: false,
            //   // due: '2024.06.27 20:00',
            //   // ticket: '2일권',
            // });
            <Snackbar.Action>로그인에 성공했습니다.</Snackbar.Action>;
            navigate('/');
          }}
          disabled={
            !(
              checkEmailFormat(formData.email) &&
              checkPasswordFormat(formData.password)
            )
          }
        >
          이메일로 로그인하기
        </CTAButton>
      </div>
    </SubPage>
  );
}
