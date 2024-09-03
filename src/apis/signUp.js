import { defaultAxios } from '@/axios/index.js';

export const verifyEmail = async ({ email }) => {
  const response = await defaultAxios.post('/auth/verify-email', {
    email,
  });
  return response;
};
