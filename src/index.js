import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import CautionPage from './pages/CautionPage/CautionPage';
import Contact from './pages/CustomerSupportPage/Contact/Contact';
import ContactHistory from './pages/CustomerSupportPage/ContactHistory/ContactHistory';
import CustomerSupportPage from './pages/CustomerSupportPage/CustomerSupportPage';
import EmailLoginPage from './pages/EmailLoginPage/EmailLoginPage';
import GuidelinePage from './pages/GuidelinePage/GuidelinePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import MyPage from './pages/MyPage/MyPage';
import NoticePage from './pages/NoticePage/NoticePage';
import RentalHistoryPage from './pages/RentalHistoryPage/RentalHistoryPage';
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
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/rental-history',
        element: <RentalHistoryPage />,
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
      {
        path: '/customer-support',
        element: <CustomerSupportPage />,
        children: [
          {
            index: true,
            element: <Contact />,
          },
          {
            path: 'contact-history',
            element: <ContactHistory />,
          },
        ],
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
