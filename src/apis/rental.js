import { authAxios } from '@/axios';

export const rental = async ({ lockerCode, price, itemName, num }) => {
  const response = await authAxios.post('/payment/ready', {
    lockerCode,
    price,
    itemName,
    num,
  });
  return response;
};
