import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    nickname: 'snow',
    rentalState: true,
    overdue: false,
    due: '2024.07.03',
    ticket: '1일권',
  });

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    []
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
