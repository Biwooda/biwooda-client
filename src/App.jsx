import { Outlet } from 'react-router-dom';

import { DrawerContextProvider } from '@/contexts/DrawerContext';
import { UserContextProvider } from '@/contexts/UserContext';

import './App.css';

function App() {
  return (
    <UserContextProvider>
      <DrawerContextProvider>
        <div id='App'>
          <Outlet />
        </div>
      </DrawerContextProvider>
    </UserContextProvider>
  );
}

export default App;
