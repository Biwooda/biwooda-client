import { Outlet } from 'react-router-dom';

import { DrawerContextProvider } from '@/contexts/DrawerContext';
import { AuthContextProvider } from '@/contexts/AuthContext.jsx';

import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <DrawerContextProvider>
        <div id='App'>
          <Outlet />
        </div>
      </DrawerContextProvider>
    </AuthContextProvider>
  );
}

export default App;
