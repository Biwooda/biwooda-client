import { createContext, useContext, useMemo, useState } from 'react';

const DrawerContext = createContext();

export function DrawerContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const value = useMemo(
    () => ({
      isOpen,
      toggleDrawer,
    }),
    []
  );

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
}

export function useDrawerContext() {
  return useContext(DrawerContext);
}
