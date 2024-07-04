import { createPortal } from 'react-dom';

import BottomSheetButton from './SubComponents/BottomSheetButton';
import BottomSheetDescription from './SubComponents/BottomSheetDescription';
import BottomSheetLabel from './SubComponents/BottomSheetLabel';
import BottomSheetTitle from './SubComponents/BottomSheetTitle';

import styles from './BottomSheet.module.css';

function BottomSheetMain({ children }) {
  const bottomSheetPortal = document.getElementById('App');

  if (!bottomSheetPortal) {
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
});

export default BottomSheet;
