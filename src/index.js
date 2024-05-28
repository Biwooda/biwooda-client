import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import CautionPage from './pages/CautionPage/CautionPage';
import EmailLoginPage from './pages/EmailLoginPage/EmailLoginPage';
import GuidelinePage from './pages/GuidelinePage/GuidelinePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import NoticePage from './pages/NoticePage/NoticePage';
import RentalReturnGuidePage from './pages/RentalReturnGuidePage/RentalReturnGuidePage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import ServiceTime from './pages/ServiceTime/ServiceTime';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/login/email',
        element: <EmailLoginPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
      {
        path: '/reset-password',
        element: <ResetPasswordPage />,
      },
      {
        path: '/notice',
        element: <NoticePage />,
      },
      {
        path: '/guideline',
        element: <GuidelinePage />,
      },
      {
        path: '/rental-return-guide',
        element: <RentalReturnGuidePage />,
      },
      {
        path: '/caution',
        element: <CautionPage />,
      },
      {
        path: '/service-time',
        element: <ServiceTime />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
