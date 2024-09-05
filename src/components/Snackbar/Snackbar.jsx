import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useSnackContext } from '@/contexts/SnackbarContext.jsx';

import styles from './Snackbar.module.css';

export default function Snackbar({ snack, children }) {
  const { removeSnack } = useSnackContext();
  const snackRef = useRef();

  useEffect(() => {
    const fadeOut = setTimeout(() => {
      snackRef.current.style.opacity = '0';
    }, 3000);

    const unmount = setTimeout(() => {
      removeSnack(snack);
    }, 3500);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(unmount);
    };
  }, [snack, snackRef, removeSnack]);

  const root = document.getElementById('snack');

  return createPortal(
    <div ref={snackRef} className={styles.snackbar}>
      {children}
    </div>,
    root
  );

  return;
}

function WithText({ snack, children }) {
  return (
    <Snackbar snack={snack}>
      <div className={styles.text}>{children}</div>
    </Snackbar>
  );
}

function WithActionButton({ snack, children }) {
  const { removeSnack } = useSnackContext();

  return (
    <Snackbar snack={snack}>
      <div className={styles.actionContainer}>
        <div className={styles.text}>{children}</div>
        <button
          className={`${styles.actionButton} ${styles.blueButton}`}
          onClick={() => removeSnack(snack)}
        >
          확인
        </button>
      </div>
    </Snackbar>
  );
}

function WithLongActionButton({ snack, buttonText, onClick, children }) {
  return (
    <Snackbar snack={snack}>
      <div className={styles.longActionContainer}>
        <div className={styles.text}>{children}</div>
        <div className={styles.actionButtonDiv}>
          <button
            className={`${styles.actionButton} ${styles.blueButton}`}
            onClick={onClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Snackbar>
  );
}

function WithTwoActionButton({ snack, onClick, children }) {
  return (
    <Snackbar snack={snack}>
      <div className={styles.decisionContainer}>
        <div className={styles.text}>{children}</div>
        <div className={styles.actionButtonDiv}>
          <button
            className={`${styles.actionButton} ${styles.greyButton}`}
            onClick={onClick}
          >
            아니요
          </button>
          <button
            className={`${styles.actionButton} ${styles.blueButton}`}
            onClick={() => {}}
          >
            네, 삭제합니다
          </button>
        </div>
      </div>
    </Snackbar>
  );
}

Snackbar.Text = WithText;
Snackbar.Action = WithActionButton;
Snackbar.LongAction = WithLongActionButton;
Snackbar.Decision = WithTwoActionButton;
