import { create } from 'zustand';

export const useRentalStore = create((set) => ({
  rentalInfo: {
    lockerCode: undefined,
    price: undefined,
    itemName: undefined,
    num: 1,
  },
  actions: {
    updateLockerCode: (lockerCode) =>
      set(({ rentalInfo }) => ({
        rentalInfo: { ...rentalInfo, lockerCode },
      })),
    updatePass: ({ price, itemName }) =>
      set(({ rentalInfo }) => ({
        rentalInfo: { ...rentalInfo, price, itemName },
      })),
  },
}));
