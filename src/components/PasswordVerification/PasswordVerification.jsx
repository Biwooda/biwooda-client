import React from 'react';
import FeedbackMessage from '../../components/FeedbackMessage/FeedbackMessage';
import PasswordField from '../../components/PasswordField/PasswordField';
import { SIGN_UP_FEEDBACK_MESSAGE } from '../../constants';
import { checkPasswordFormat } from '../../utils/checkFormat';
import styles from './PasswordVerification.module.css';

export default function PasswordVerification({ data }) {
  return (
    <div className={styles.passwordFieldset}>
      <PasswordField
        name='password'
        label='비밀번호'
        value={data.password}
        placeholder='비밀번호를 입력해주세요'
      >
        <FeedbackMessage
          message={
            checkPasswordFormat(data.password)
              ? SIGN_UP_FEEDBACK_MESSAGE.passwordPass
              : SIGN_UP_FEEDBACK_MESSAGE.passwordFail
          }
          condition={checkPasswordFormat(data.password)}
        />
      </PasswordField>
      <PasswordField
        name='rePassword'
        label='비밀번호 재입력'
        value={data.rePassword}
        placeholder='비밀번호를 재입력해주세요'
      >
        <FeedbackMessage
          message={
            data.password === data.repassword
              ? SIGN_UP_FEEDBACK_MESSAGE.repasswordPass
              : SIGN_UP_FEEDBACK_MESSAGE.repasswordFail
          }
          condition={data.password === data.repassword}
        />
      </PasswordField>
    </div>
  );
}
