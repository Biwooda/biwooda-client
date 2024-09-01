import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import BottomSheetButton from './SubComponents/BottomSheetButton.jsx';
import BottomSheetButtons from './SubComponents/BottomSheetButtons.jsx';
import BottomSheetDescription from './SubComponents/BottomSheetDescription.jsx';
import BottomSheetLabel from './SubComponents/BottomSheetLabel.jsx';
import BottomSheetTitle from './SubComponents/BottomSheetTitle.jsx';

import styles from './BottomSheet.module.css';

function BottomSheetMain({ children, isOpen, setIsOpen }) {
  const bottomSheetPortal = document.getElementById('bottomSheet');

  useEffect(() => {
    const close = (event) => {
      if (!event.target.closest(`.${styles.bottomSheet}`)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', close);
    }

    return () => {
      document.removeEventListener('click', close);
    };
  }, [isOpen, setIsOpen]);

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
