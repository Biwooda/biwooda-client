import { createContext, useState, useContext } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Snackbar } from '@/components/Snackbar';

import { SNACK_TYPE } from '@/constants';

const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
  const [snackbarList, setSnackbarList] = useState([]);

  const addSnack = (snack) => {
    if (snackbarList.find((item) => item.message === snack.message)) {
      removeSnack(snack);
    }
    setSnackbarList((prev) => [...prev, { id: uuidv4(), ...snack }]);
  };

  const removeSnack = (snack) => {
    setSnackbarList((prev) =>
      prev.filter((item) => item.message !== snack.message)
    );
  };

  return (
    <SnackbarContext.Provider value={{ addSnack, removeSnack }}>
      {children}
      {snackbarList.length > 0 &&
        snackbarList.map((snack) => {
          const { id, message, onClick, buttonText } = snack;

          if (snack.type === SNACK_TYPE.text) {
            return (
              <Snackbar.Text key={id} snack={snack}>
                {message}
              </Snackbar.Text>
            );
          }

          if (snack.type === SNACK_TYPE.action) {
            return (
              <Snackbar.Action key={id} snack={snack}>
                {message}
              </Snackbar.Action>
            );
          }

          if (snack.type === SNACK_TYPE.longAction) {
            return (
              <Snackbar.LongAction
                key={id}
                snack={snack}
                buttonText={buttonText}
                onClick={onClick}
              >
                {message}
              </Snackbar.LongAction>
            );
          }

          if (snack.type === SNACK_TYPE.desicion) {
            return (
              <Snackbar.Decision key={id} snack={snack} onClick={onClick}>
                {message}
              </Snackbar.Decision>
            );
          }
        })}
    </SnackbarContext.Provider>
  );
}

export function useSnackContext() {
  return useContext(SnackbarContext);
}
