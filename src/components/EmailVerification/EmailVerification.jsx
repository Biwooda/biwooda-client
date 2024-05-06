import React from 'react';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import FeedbackMessage from '../../components/FeedbackMessage/FeedbackMessage';
import TextField from '../../components/TextField/TextField';
import { SIGN_UP_FEEDBACK_MESSAGE } from '../../constants';
import { checkEmailFormat } from '../../utils/checkFormat';
import styles from './EmailVerification.module.css';

export default function EmailVerification({ formData, setStep }) {
  return (
    <div className={styles.codeFieldset}>
      <div>
        <TextField
          name='email'
          label='이메일'
          value={formData.email}
          placeholder='이메일을 입력해주세요'
        >
          <FeedbackMessage
            message={
              checkEmailFormat(formData.email)
                ? SIGN_UP_FEEDBACK_MESSAGE.emailPass
                : SIGN_UP_FEEDBACK_MESSAGE.emailFail
            }
            condition={checkEmailFormat(formData.email)}
          />
        </TextField>
        <div className={styles.codeButton}>
          <div className={styles.sendCodeButton}>
            <DefaultButton
              text='이메일로 인증번호 전송'
              disabled={!checkEmailFormat(formData.email)}
            />
          </div>
          <div className={styles.resendCodeButton}>
            <DefaultButton text='재발송' />
          </div>
        </div>
      </div>
      <TextField
        name='code'
        label='인증번호'
        value={formData.code}
        placeholder='인증번호를 입력해주세요'
      >
        <FeedbackMessage message='확인 완료' condition={true} />
      </TextField>
    </div>
  );
}