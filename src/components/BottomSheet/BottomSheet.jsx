import React, { useCallback } from 'react';
import styles from './BottomSheet.module.css';

export default function BottomSheet() {
  const BottomSheetWrapper = useCallback(
    ({ children }) => (
      <div
        className={styles.bottomSheet}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={styles.header}>
          <span className={styles.handler}></span>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    ),
    []
  );

  return { BottomSheetWrapper };
}
