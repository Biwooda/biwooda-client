import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useRentalStore } from '@/store';

import { rental } from '@/apis';

import { Loading } from '@/components/Loading';
import { RoundButton } from '@/components/RoundButton';

import { KakaoPayButton, PayInfo } from '@/pages/RentalPage/components';

import styles from './RentalPay.module.css';

export default function RentalPay() {
  const rentalInfo = useRentalStore((state) => state.rentalInfo);
  const [pending, setPending] = useState();

  console.log(pending);

  const pay = async () => {
    try {
      setPending(true);
      const { data } = await rental(rentalInfo);
      console.log(data);
      window.location.href = data.next_redirect_mobile_url;
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  };

  if (pending) {
    return <Loading />;
  }

  return (
    <>
      <PayInfo text='결제' />
      <KakaoPayButton onClick={pay} />
    </>
  );
}
