import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useBottomSheetContext } from 'contexts/BottomSheetContext';

import BottomSheetButton from './SubComponents/BottomSheetButton';
import BottomSheetDescription from './SubComponents/BottomSheetDescription';
import BottomSheetLabel from './SubComponents/BottomSheetLabel';
import BottomSheetTitle from './SubComponents/BottomSheetTitle';

import styles from './BottomSheet.module.css';

function BottomSheetMain({ children }) {
  const { closeBottomSheet } = useBottomSheetContext();
  const bottomSheetPortal = document.getElementById('App');
  const stopPropagation = (event) => event.stopPropagation();

  // if (!idOpen) {
  //   return null;
  // }

  if (!bottomSheetPortal) {
    return null;
  }

  useEffect(() => {
    document.addEventListener('click', closeBottomSheet);

    return () => {
      document.removeEventListener('click', closeBottomSheet);
    };
  }, []);

  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={styles.bottomSheet} onClick={stopPropagation}>
      <div className={styles.header}>
        <span className={styles.handler} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>,
    bottomSheetPortal
  );
}

const BottomSheet = Object.assign(BottomSheetMain, {
  Title: BottomSheetTitle,
  Label: BottomSheetLabel,
  Description: BottomSheetDescription,
  Button: BottomSheetButton,
});

export default BottomSheet;
