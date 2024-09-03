import CodeField from './CodeField/CodeField.jsx';
import PasswordField from './PasswordField/PasswordField.jsx';
import TextField from './TextField/TextField.jsx';

export default function InputField({ children }) {
  return { children };
}

InputField.Text = TextField;
InputField.Password = PasswordField;
InputField.Code = CodeField;
