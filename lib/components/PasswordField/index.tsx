import { TextField, TextFieldProps } from '../TextField';

export const PasswordField = (props : TextFieldProps) => {
  const { value = '' } = props;
  return <TextField {...props} value={value} type="password" />;
};
