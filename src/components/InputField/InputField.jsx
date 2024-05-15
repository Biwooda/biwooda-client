import React from 'react';
import CodeField from './CodeField/CodeField';
import PasswordField from './PasswordField/PasswordField';
import TextField from './TextField/TextField';

export default function InputField({ children }) {
  return <>{children}</>;
}

InputField.Text = TextField;
InputField.Password = PasswordField;
InputField.Code = CodeField;
