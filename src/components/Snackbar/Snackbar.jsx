import React from 'react';
import styles from './Snackbar.module.css';

export default function Snackbar({ children }) {
  return <div className={styles.snackbar}>{children}</div>;
}

function WithText({ children }) {
  return (
    <Snackbar>
      <div className={styles.text}>{children}</div>
    </Snackbar>
  );
}

function WithActionButton({ onClick, children }) {
  return (
    <Snackbar>
      <div className={styles.actionContainer}>
        <div className={styles.text}>{children}</div>
        <button
          className={`${styles.actionButton} ${styles.blueButton}`}
          onClick={onClick}
        >
          확인
        </button>
      </div>
    </Snackbar>
  );
}

function WithLongActionButton({ buttonText, onClick, children }) {
  return (
    <Snackbar>
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

function WithTwoActionButton({ onClick, children }) {
  return (
    <Snackbar>
      <div className={styles.decisionContainer}>
        <div className={styles.text}>{children}</div>
        <div className={styles.actionButtonDiv}>
          <button
            className={`${styles.actionButton} ${styles.greyButton}`}
            onClick={() => {}}
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
