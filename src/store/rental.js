import { create } from 'zustand';

export const useRentalStore = create((set) => ({
  rentalInfo: {
    lockerCode: undefined,
    price: undefined,
    itemName: undefined,
    num: 1,
    diffDays: undefined,
    rentalPeriod: undefined,
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
    updateRentalInfo: ({ diffDays, rentalPeriod }) =>
      set(({ rentalInfo }) => ({
        rentalInfo: { ...rentalInfo, diffDays, rentalPeriod },
      })),
  },
}));
