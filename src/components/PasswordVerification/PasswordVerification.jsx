import React from 'react';
import FeedbackMessage from '../../components/FeedbackMessage/FeedbackMessage';
import PasswordField from '../../components/PasswordField/PasswordField';
import { SIGN_UP_FEEDBACK_MESSAGE } from '../../constants';
import { checkPasswordFormat } from '../../utils/checkFormat';
import styles from './PasswordVerification.module.css';

export default function PasswordVerification({ formData }) {
  return (
    <div className={styles.passwordFieldset}>
      <PasswordField
        name='password'
        label='비밀번호'
        value={formData.password}
        placeholder='비밀번호를 입력해주세요'
      >
        <FeedbackMessage
          message={
            checkPasswordFormat(formData.password)
              ? SIGN_UP_FEEDBACK_MESSAGE.passwordPass
              : SIGN_UP_FEEDBACK_MESSAGE.passwordFail
          }
          condition={checkPasswordFormat(formData.password)}
        />
      </PasswordField>
      <PasswordField
        name='repassword'
        label='비밀번호 재입력'
        value={formData.repassword}
        placeholder='비밀번호를 재입력해주세요'
      >
        <FeedbackMessage
          message={
            formData.password === formData.repassword
              ? SIGN_UP_FEEDBACK_MESSAGE.repasswordPass
              : SIGN_UP_FEEDBACK_MESSAGE.repasswordFail
          }
          condition={formData.password === formData.repassword}
        />
      </PasswordField>
    </div>
  );
}
