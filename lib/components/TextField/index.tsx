import { DataContext } from '../../types/DataContext';
import { Property } from '../Property';
import { InputBase } from '../InputBase';

export type TextFieldProps = {
    placeholder? : string,
    name : string,
    onChange? : Function,
    onBlur? : Function,
    onKeyUp? : Function,
    value? : string | number | undefined | null
    error? : boolean | undefined | null | string
    autoComplete? : string | undefined
    dataContext? : DataContext<any> | undefined
    label? : string | undefined
    type? : string | undefined
    maxWidth? : boolean
    default? : boolean
}

export const TextField = (props : TextFieldProps) => {
  const { type = 'text', dataContext, name, label, maxWidth, onChange } = props;

  const cloned = { ...props };

  if (dataContext) {
    cloned.value = dataContext.getValue(name);
    cloned.onChange = dataContext.getOnChangeHandler();
    cloned.error = dataContext.getError(name);
  }

  if (!cloned.value) cloned.value = '';

  const onChangeHandler = (val : string) => {
    const value = parseValue(val);
    if (dataContext) dataContext.getOnChangeHandler()(value, name);
    else if (onChange) onChange(value, name);
  };

  const parseValue = (value : string) => {
    if (type !== 'number') return value;
    const number = parseFloat(value.replace(/\D/g, ''));
    if (!Number.isNaN(number)) return number;
    return null;
  };

  const inputBase = <InputBase {...cloned} type={type} onChange={onChangeHandler} />;

  if (!label) return inputBase;
  return (
    <Property maxWidth={maxWidth} label={label} dataContext={dataContext} name={name}>
      {inputBase}
    </Property>
  );
};
