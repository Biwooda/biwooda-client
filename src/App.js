import { Outlet } from 'react-router-dom';
import './App.css';
import { DrawerContextProvider } from './contexts/DrawerContext';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <DrawerContextProvider>
        <div className='App'>
          <Outlet />
        </div>
      </DrawerContextProvider>
    </UserContextProvider>
  );
}

export default App;
