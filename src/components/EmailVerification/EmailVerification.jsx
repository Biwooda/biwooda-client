import React, { useState } from 'react';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import FeedbackMessage from '../../components/FeedbackMessage/FeedbackMessage';
import { SIGN_UP_FEEDBACK_MESSAGE } from '../../constants';
import useTimer from '../../hooks/useTimer';
import { checkEmailFormat } from '../../utils/checkFormat';
import toTime from '../../utils/convertNumberToTime';
import InputField from '../InputField/InputField';
import styles from './EmailVerification.module.css';

export default function EmailVerification({ data, onChange }) {
  const [time, startTimer, clearTimer] = useTimer(180);
  const [isDisabled, setDisabled] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const [verification, setVerification] = useState(false);
  const onChangeEmail = (event) => {
    onChange(event);
    setDisabled(false);
  };

  const onSendCode = () => {
    setDisabled(true);
    setIsSended(true);
    startTimer();
  };

  const onResendCode = () => {
    setVerification(false);
    startTimer();
  };

  const checkCode = (event) => {
    onChange(event);
    if (event.target.value === '1111') {
      setVerification(true);
      clearTimer();
    }
  };

  return (
    <div className={styles.codeFieldset}>
      <div>
        <InputField.Text
          name='email'
          label='이메일'
          value={data.email}
          placeholder='이메일을 입력해주세요'
          onChange={onChangeEmail}
        >
          <FeedbackMessage
            message={
              checkEmailFormat(data.email)
                ? SIGN_UP_FEEDBACK_MESSAGE.emailPass
                : SIGN_UP_FEEDBACK_MESSAGE.emailFail
            }
            condition={checkEmailFormat(data.email)}
          />
        </InputField.Text>
        <div className={styles.codeButton}>
          <div className={styles.sendCodeButton}>
            <DefaultButton
              text='이메일로 인증번호 전송'
              onClick={onSendCode}
              disabled={!checkEmailFormat(data.email) || isDisabled}
            />
          </div>
          {isDisabled && (
            <div className={styles.resendCodeButton}>
              <DefaultButton text='재발송' onClick={onResendCode} />
            </div>
          )}
        </div>
      </div>
      <InputField.Code
        name='code'
        label='인증번호'
        value={data.code}
        placeholder='인증번호를 입력해주세요'
        isSended={isSended}
        onChange={checkCode}
      >
        <FeedbackMessage
          message={
            verification
              ? '확인 완료'
              : `${toTime(time)}안에 인증번호를 입력해주세요`
          }
          condition={verification}
        />
      </InputField.Code>
    </div>
  );
}
