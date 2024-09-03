export const checkEmailFormat = (value) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

export const checkPasswordFormat = (value) =>
  /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()-_+=])[a-z0-9!@#$%^&*()-_+=]{8,}$/.test(
    value
  );
