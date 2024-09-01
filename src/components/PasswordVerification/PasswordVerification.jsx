import { FeedbackMessage } from '@/components/FeedbackMessage';
import { InputField } from '@/components/InputField';

import { checkPasswordFormat } from '@/utils/checkFormat';

import { SIGN_UP_FEEDBACK_MESSAGE } from '@/constants';

import styles from './PasswordVerification.module.css';

export default function PasswordVerification({ data, onChange }) {
  return (
    <div className={styles.passwordFieldset}>
      <InputField.Password
        name='password'
        label='비밀번호'
        value={data.password}
        placeholder='비밀번호를 입력해주세요'
        onChange={onChange}
      >
        <FeedbackMessage
          message={
            checkPasswordFormat(data.password)
              ? SIGN_UP_FEEDBACK_MESSAGE.passwordPass
              : SIGN_UP_FEEDBACK_MESSAGE.passwordFail
          }
          condition={checkPasswordFormat(data.password)}
        />
      </InputField.Password>
      <InputField.Password
        name='rePassword'
        label='비밀번호 재입력'
        value={data.rePassword}
        placeholder='비밀번호를 재입력해주세요'
        onChange={onChange}
      >
        <FeedbackMessage
          message={
            data.password === data.rePassword
              ? SIGN_UP_FEEDBACK_MESSAGE.repasswordPass
              : SIGN_UP_FEEDBACK_MESSAGE.repasswordFail
          }
          condition={data.password === data.rePassword}
        />
      </InputField.Password>
    </div>
  );
}
