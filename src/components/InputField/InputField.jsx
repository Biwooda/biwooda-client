import React from 'react';
import CodeField from 'components/InputField/CodeField/CodeField';
import PasswordField from 'components/InputField/PasswordField/PasswordField';
import TextField from 'components/InputField/TextField/TextField';

export default function InputField({ children }) {
  return <>{children}</>;
}

InputField.Text = TextField;
InputField.Password = PasswordField;
InputField.Code = CodeField;
