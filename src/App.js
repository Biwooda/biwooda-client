import { Outlet } from 'react-router-dom';
import './App.css';
import { DrawerContextProvider } from './contexts/DrawerContext';

function App() {
  return (
    <DrawerContextProvider>
      <div className='App'>
        <Outlet />
      </div>
    </DrawerContextProvider>
  );
}

export default App;
