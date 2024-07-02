import React, { useState } from 'react';
import Icon from '../../../components/Icon/Icon';
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
  const handleClick = () => setIsViewd((prev) => !prev);

  return (
    <div>
      <div className={styles.label}>
        <label htmlFor={name}>{label}</label>
        {value && children}
      </div>
      {isViewd ? (
        <div className={styles.field}>
          <input
            id={name}
            className={styles.password}
            type='text'
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            tabIndex='-1'
          />
          <div className={styles.eyesIcon} onClick={handleClick}>
            <Icon
              id='eye'
              stroke='#38B9FF'
              fill='#38B9FF'
              width={24}
              height={24}
            />
          </div>
        </div>
      ) : (
        <div className={styles.field}>
          <input
            id={name}
            className={styles.password}
            type='password'
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            tabIndex='-1'
          />
          <div className={styles.eyesIcon} onClick={handleClick}>
            <Icon
              id='eyeClosed'
              stroke='#38B9FF'
              fill='#38B9FF'
              width={24}
              height={24}
            />
          </div>
        </div>
      )}
    </div>
  );
}
