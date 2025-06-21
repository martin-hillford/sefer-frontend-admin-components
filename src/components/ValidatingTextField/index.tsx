import { ValidationResult } from "../../types/ValidationResult";
import { ErrorText } from '../ErrorText';
import { TextFieldProps, TextField } from '../TextField';

type Props = TextFieldProps & {
    result : ValidationResult
}

export const ValidatingTextField = (props : Props) => {
  const { onChange, name, onBlur, onKeyUp, result } = props;
  const onChangeHandler = (value : string) => {
    if (onChange) onChange(name, value);
  };

  const onBlurHandler = (value : string) => {
    if (onBlur) onBlur(name, value);
  };

  const onKeyUpHandler = (value : string) => {
    if (onKeyUp) onKeyUp(name, value);
  };

  const error = !!(props?.result?.valid);
  return (
    <>
      <TextField {...props} onChange={onChangeHandler} error={error} onBlur={onBlurHandler} onKeyUp={onKeyUpHandler} />
      {!!props?.result?.valid && <ErrorText>{result.messages}</ErrorText> }
    </>
  );
};
