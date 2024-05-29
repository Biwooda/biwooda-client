import React, { useRef } from 'react';
import styles from './Select.module.css';

export default function Select({ value, setValue, options = [] }) {
  const selectRef = useRef();
  const selectOption = ({ target }) => {
    selectRef.current.classList.remove(styles.active);
    setValue((prev) => ({ ...prev, category: target.innerText }));
  };

  return (
    <div ref={selectRef} className={styles.select}>
      <label>카테고리</label>
      <div>
        <div className={styles.label}>
          <button
            className={`${value ?? styles.placeholder}`}
            onClick={({ target }) =>
              selectRef.current.classList.toggle(styles.active)
            }
          >
            {value ?? '카테고리를 선택해주세요'}
          </button>
        </div>
        <ul className={styles.optionList} onClick={selectOption}>
          {options.map((option) => (
            <li key={option} className={styles.optionItem} onClick={() => {}}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
