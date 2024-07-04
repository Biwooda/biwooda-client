import { createContext, useContext, useMemo, useState } from 'react';

const BottomSheetContext = createContext();

export function BottomSheetContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeBottomSheet = () => setIsOpen(false);
  const openBottomSheet = () => setIsOpen(true);

  const value = useMemo(
    () => ({
      isOpen,
      openBottomSheet,
      closeBottomSheet,
    }),
    [isOpen]
  );

  return (
    <BottomSheetContext.Provider value={value}>
      {children}
    </BottomSheetContext.Provider>
  );
}

export function useBottomSheetContext() {
  return useContext(BottomSheetContext);
}
