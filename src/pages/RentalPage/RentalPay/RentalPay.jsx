import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useRentalStore } from '@/store';

import { rental } from '@/apis';

import useSnackbar from '@/hooks/useSnackbar.jsx';

import { Loading } from '@/components/Loading';
import { RoundButton } from '@/components/RoundButton';

import { KakaoPayButton, PayInfo } from '@/pages/RentalPage/components';

import styles from './RentalPay.module.css';
import { SNACK_TYPE } from '@/constants/snack.js';

export default function RentalPay() {
  const rentalInfo = useRentalStore((state) => state.rentalInfo);
  const { snack } = useSnackbar();
  const [pending, setPending] = useState();

  const pay = async () => {
    try {
      setPending(true);
      const { data } = await rental(rentalInfo);
      console.log(data);
      window.location.href = data.next_redirect_mobile_url;
    } catch (error) {
      console.log(error);
      snack({ message: '서버 에러, 새로고침 해주세요', type: SNACK_TYPE.text });
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
