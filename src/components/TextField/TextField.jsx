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
      <input
        id={name}
        className={styles.field}
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
