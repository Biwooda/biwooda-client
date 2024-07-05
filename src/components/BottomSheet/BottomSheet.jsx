import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useBottomSheetContext } from 'contexts/BottomSheetContext';

import BottomSheetButton from './SubComponents/BottomSheetButton';
import BottomSheetButtons from './SubComponents/BottomSheetButtons';
import BottomSheetDescription from './SubComponents/BottomSheetDescription';
import BottomSheetLabel from './SubComponents/BottomSheetLabel';
import BottomSheetTitle from './SubComponents/BottomSheetTitle';

import styles from './BottomSheet.module.css';

function BottomSheetMain({ children }) {
  const { isOpen, closeBottomSheet } = useBottomSheetContext();
  const bottomSheetPortal = document.getElementById('bottomSheet');

  useEffect(() => {
    const close = (event) => {
      if (!event.target.closest(`.${styles.bottomSheet}`)) {
        closeBottomSheet();
      }
    };

    if (isOpen) {
      document.addEventListener('click', close);
    }

    return () => {
      document.removeEventListener('click', close);
    };
  }, [isOpen, closeBottomSheet]);

  if (!isOpen || !bottomSheetPortal) {
    return null;
  }

  return createPortal(
    <div className={styles.bottomSheet}>
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
  Buttons: BottomSheetButtons,
});

export default BottomSheet;
