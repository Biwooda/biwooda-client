import { Outlet } from 'react-router-dom';

import { BottomSheetContextProvider } from 'contexts/BottomSheetContext';
import { DrawerContextProvider } from 'contexts/DrawerContext';
import { UserContextProvider } from 'contexts/UserContext';

import './App.css';

function App() {
  return (
    <UserContextProvider>
      <BottomSheetContextProvider>
        <DrawerContextProvider>
          <div id='App'>
            <Outlet />
          </div>
        </DrawerContextProvider>
      </BottomSheetContextProvider>
    </UserContextProvider>
  );
}

export default App;
