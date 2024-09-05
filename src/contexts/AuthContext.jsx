import { createContext, useContext, useEffect, useState } from 'react';
import {
  handleEmailLogin,
  handleKakaoLogin,
  onUserStateChange,
  logout,
} from '@/apis/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [ticket, setTicket] = useState({
    nickname: 'snow',
    rentalState: true,
    overdue: false,
    due: '2024.07.03',
    ticket: '1일권',
  });

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        uid: user?.uid,
        ticket,
        handleEmailLogin,
        handleKakaoLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
