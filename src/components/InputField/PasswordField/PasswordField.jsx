import { useState } from 'react';

import { Icon } from '@/components/Icon';

import styles from './PasswordField.module.css';

export default function PasswordField({
  label,
  name,
  value,
  onChange,
  placeholder,
  children,
}) {
  const [isViewd, setIsViewd] = useState(false);
  const handleViewPassword = () => setIsViewd((prev) => !prev);

  return (
    <div>
      <div className={styles.label}>
        <label htmlFor={name}>{label}</label>
        {value && children}
      </div>
      <div className={styles.field}>
        <input
          id={name}
          className={styles.password}
          type={isViewd ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          tabIndex='-1'
        />
        <div
          className={styles.eyesIcon}
          role='button'
          tabIndex='0'
          onClick={handleViewPassword}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleViewPassword();
            }
          }}
        >
          <Icon
            id={isViewd ? 'eye' : 'eyeClosed'}
            stroke='#38B9FF'
            fill='#38B9FF'
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
