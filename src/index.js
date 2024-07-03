import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import CautionPage from 'pages/CautionPage/CautionPage';
import Contact from 'pages/CustomerSupportPage/Contact/Contact';
import ContactHistory from 'pages/CustomerSupportPage/ContactHistory/ContactHistory';
import CustomerSupportPage from 'pages/CustomerSupportPage/CustomerSupportPage';
import EmailLoginPage from 'pages/EmailLoginPage/EmailLoginPage';
import GuidelinePage from 'pages/GuidelinePage/GuidelinePage';
import InboxPage from 'pages/InboxPage/InboxPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MainPage from 'pages/MainPage/MainPage';
import MyPage from 'pages/MyPage/MyPage';
import NoticePage from 'pages/NoticePage/NoticePage';
import QrScanner from 'pages/QrScanner/QrScanner';
import RentalHistoryPage from 'pages/RentalHistoryPage/RentalHistoryPage';
import RentalCalendar from 'pages/RentalPage/RentalCalendar/RentalCalendar';
import RentalPage from 'pages/RentalPage/RentalPage';
import RentalPay from 'pages/RentalPage/RentalPay/RentalPay';
import RentalReturnGuidePage from 'pages/RentalReturnGuidePage/RentalReturnGuidePage';
import ResetPasswordPage from 'pages/ResetPasswordPage/ResetPasswordPage';
import ServiceTime from 'pages/ServiceTime/ServiceTime';
import SignUpPage from 'pages/SignUpPage/SignUpPage';

import reportWebVitals from 'reportWebVitals';

import App from './App';
import './index.css';

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
        path: '/rental',
        element: <RentalPage />,
        children: [
          {
            path: 'calendar',
            element: <RentalCalendar />,
          },
          {
            path: 'pay',
            element: <RentalPay />,
          },
        ],
      },
      {
        path: '/rental-history',
        element: <RentalHistoryPage />,
      },
      {
        path: '/inbox',
        element: <InboxPage />,
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
      {
        path: '/qr-scan',
        element: <QrScanner />,
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

reportWebVitals();
