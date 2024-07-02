import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    nickname: 'snow',
    rentalState: true,
    overdue: false,
    due: '2024.07.03',
    ticket: '1일권',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
