import { useRef } from 'react';

import styles from './Select.module.css';

export default function Select({ value, setValue, options = [] }) {
  const selectRef = useRef();
  const selectOption = ({ target }) => {
    selectRef.current.classList.remove(styles.active);
    setValue((prev) => ({ ...prev, category: target.innerText }));
  };

  return (
    <div ref={selectRef} className={styles.select}>
      <label htmlFor='category'>카테고리</label>
      <div>
        <div className={styles.label}>
          <button
            id='category'
            className={`${value ?? styles.placeholder}`}
            onClick={() => selectRef.current.classList.toggle(styles.active)}
          >
            {value ?? '카테고리를 선택해주세요'}
          </button>
        </div>
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li
              key={option}
              className={styles.optionItem}
              role='option'
              aria-selected={value.category === option}
              onClick={selectOption}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  selectOption(event);
                }
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
