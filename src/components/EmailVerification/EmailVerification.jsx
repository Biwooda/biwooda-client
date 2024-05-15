import React, { useState } from 'react';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import FeedbackMessage from '../../components/FeedbackMessage/FeedbackMessage';
import TextField from '../../components/TextField/TextField';
import { SIGN_UP_FEEDBACK_MESSAGE } from '../../constants';
import { checkEmailFormat } from '../../utils/checkFormat';
import styles from './EmailVerification.module.css';

export default function EmailVerification({ data, onChange }) {
  const [isSended, setIsSended] = useState(false);
  const handleChange = (event) => {
    setIsSended(false);
    onChange(event);
  };

  return (
    <div className={styles.codeFieldset}>
      <div>
        <TextField
          name='email'
          label='이메일'
          value={data.email}
          placeholder='이메일을 입력해주세요'
          onChange={handleChange}
        >
          <FeedbackMessage
            message={
              checkEmailFormat(data.email)
                ? SIGN_UP_FEEDBACK_MESSAGE.emailPass
                : SIGN_UP_FEEDBACK_MESSAGE.emailFail
            }
            condition={checkEmailFormat(data.email)}
          />
        </TextField>
        <div className={styles.codeButton}>
          <div className={styles.sendCodeButton}>
            <DefaultButton
              text='이메일로 인증번호 전송'
              onClick={() => setIsSended(true)}
              disabled={!checkEmailFormat(data.email) || isSended}
            />
          </div>
          {isSended && (
            <div className={styles.resendCodeButton}>
              <DefaultButton text='재발송' />
            </div>
          )}
        </div>
      </div>
      <TextField
        name='code'
        label='인증번호'
        value={data.code}
        placeholder='인증번호를 입력해주세요'
        onChange={onChange}
      >
        <FeedbackMessage message='확인 완료' condition={true} />
      </TextField>
    </div>
  );
}
