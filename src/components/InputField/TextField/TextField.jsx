import React from 'react';
import styles from './TextField.module.css';

export default function TextField({
  label,
  name,
  value,
  placeholder,
  onChange,
  children,
}) {
  return (
    <div>
      <div className={styles.label}>
        <label htmlFor={name}>{label}</label>
        {value && children}
      </div>
      <div className={styles.field}>
        <input
          id={name}
          className={styles.text}
          type='text'
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          tabindex='-1'
        />
      </div>
    </div>
  );
}