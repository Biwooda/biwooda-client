import React, { useState } from 'react';
import closedEyes from '../../assets/close_eyes.svg';
import openEyes from '../../assets/open_eyes.svg';
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
            className={styles.password}
            type='text'
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
          <img
            className={styles.eyesIcon}
            src={openEyes}
            alt='opendEyes'
            onClick={handleClick}
          />
        </div>
      ) : (
        <div className={styles.field}>
          <input
            className={styles.password}
            type='password'
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
          <img
            className={styles.eyesIcon}
            src={closedEyes}
            alt='closedEyes'
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
}
