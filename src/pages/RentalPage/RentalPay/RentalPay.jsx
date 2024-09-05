import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { RoundButton } from '@/components/RoundButton';

import { KakaoPayButton, PayInfo } from '@/pages/RentalPage/components';

import styles from './RentalPay.module.css';

export default function RentalPay() {
  return (
    <>
      <PayInfo text='결제' />
      <KakaoPayButton />
    </>
  );
}
