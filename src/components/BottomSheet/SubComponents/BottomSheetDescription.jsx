import { Link } from 'react-router-dom';

import Icon from 'components/Icon/Icon';

import styles from './BottomSheetDescription.module.css';

export default function BottomSheetDescription({
  children,
  hasArrowButton,
  to,
}) {
  return (
    <div className={styles.container}>
      <pre className={styles.description}>{children}</pre>
      {hasArrowButton && (
        <Link to={to} className={styles.arrowButton}>
          <Icon id='rightArrow' stroke='#92A5B3' width={18} height={18} />
        </Link>
      )}
    </div>
  );
}
