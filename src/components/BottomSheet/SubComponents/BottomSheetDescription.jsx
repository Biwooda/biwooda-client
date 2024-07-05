import { Link } from 'react-router-dom';

import Icon from 'components/Icon/Icon';

import styles from './BottomSheetDescription.module.css';

export default function BottomSheetDescription({
  children,
  hasArrowButton,
  to,
  hasCheckbox,
  isCheck,
  checkText,
  handleCheckbox,
}) {
  return (
    <div className={`${styles.container} ${hasCheckbox && styles.hasCheck}`}>
      <pre className={styles.description}>{children}</pre>
      {hasArrowButton && (
        <Link to={to} className={styles.arrowButton}>
          <Icon id='rightArrow' stroke='#92A5B3' width={18} height={18} />
        </Link>
      )}
      {hasCheckbox && (
        <label htmlFor='checkbox'>
          <input
            id='checkbox'
            type='checkbox'
            className={styles.checkbox}
            checked={isCheck}
            onChange={handleCheckbox}
          />
          <span className={styles.text}>{checkText}</span>
        </label>
      )}
    </div>
  );
}
