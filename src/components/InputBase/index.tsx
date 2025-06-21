// noinspection CssInvalidPseudoSelector

import styled, { css } from 'styled-components';
import { ErrorText } from '../ErrorText';
import { ChangeEvent, useEffect, useState } from 'react';
import { Colors } from '../../types/Colors';

const uuid = () => crypto.randomUUID();

export type InputBaseProps = {
    type : string,
    placeholder? : string,
    name : string,
    onChange? : Function,
    onBlur? : Function,
    onKeyUp? : Function,
    value? : string | number | undefined | null,
    error? : boolean | undefined | null | string
    autoComplete? : string | undefined,
    default? : boolean
}

const setParseValue = (type : string, setValue : Function, value : string | undefined | null | number) => {
  if (type !== 'number') setValue(value);
  else if (!value) setValue(value);
  else if (!isString(value)) setValue(value);
  else setValue((value as string).replace(/\D/g, ''));
};

export const InputBase = (props : InputBaseProps) => {
  // Make the input a controlled component
  const { value, onChange, name, type, autoComplete, error, onKeyUp, onBlur, placeholder } = props;
  const [stateValue, setValue] = useState<string | number | undefined | null>(value ?? '');

  useEffect(() => {
    if (value === undefined) return;
    setParseValue(type, setValue, value);
  }, [value, type]);

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    setParseValue(type, setValue, event?.target?.value);
    if (onChange) onChange(event.target.value, event.target, name);
  };

  const onBlurHandler = (event : ChangeEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(event.target.value, event.target, name);
  };

  const onKeyUpHandler = (event : ChangeEvent<HTMLInputElement>) => {
    if (onKeyUp) onKeyUp(event.target.value, event, name);
  };

  const inputType = type === 'password' ? 'password' : 'text';

  const properties = {
    placeholder,
    name: autoComplete || uuid(),
    onChange: handleChange,
    onBlur: onBlurHandler,
    onKeyUp: onKeyUpHandler,
    autoComplete: autoComplete || uuid(),
    value: stateValue,
    $error: !!error,
    $efault: props.default
  };

  return (
    <>
      {type !== 'textarea' && <StyledInput type={inputType} {...properties} /> }
      {type === 'textarea' && <StyledArea type="text" {...properties} /> }
      {(error) ? <ErrorText>{error}</ErrorText> : null}
    </>
  );
};

const isString = (value: any) => typeof value === 'string' || value instanceof String;

const getBorderColor = (p : any, focus : boolean) => {
  if (p.$default && p.$error) return `border: 1px solid ${Colors.Red};`;
  if (p.$default && focus) return `border: 1px solid ${Colors.Blue};`;
  if (p.$default) return 'border: 1px solid #666666;';
  return '';
};

const sharedStyle = css<any>`
    margin-bottom: 4px;
    width: 100%;
    font-size: 13px;
    border-radius:0;
    font-family: 'ecs-font', sans-serif;
    border: none;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -webkit-font-smoothing: antialiased;
    word-spacing: normal;
    padding: 2px 5px;
    background-color: ${p => (p.$default ? 'white' : 'transparent')};
    color: #666666;
    line-height: 1.846;
    box-shadow: inset 0 -1px 0 ${p => (p.$error ? Colors.Red : '#dddddd')};

    ${p => (p.$default ? 'box-shadow: none;' : '')}
    ${p => getBorderColor(p, false)}

    &:focus {
        border: none;
        box-shadow: inset 0 -2px 0 ${p => (p.$error ? Colors.Red : Colors.Blue)};
        ${p => (p.$default ? 'box-shadow: none;' : '')}
        outline-style: none;
        ${p => getBorderColor(p, true)}
    }

    &:-internal-autofill-selected {
        border: none;
        outline-style: none;
        background-color: #F9F9F9;
        ${p => (p.$default ? 'box-shadow: none;' : '')}
        ${p => getBorderColor(p, false)}
    }

    ::placeholder {
        color: #dddddd;
        opacity:1;
    }
`;

export const StyledInput = styled.input<any>`
    height:37px;
    ${sharedStyle}
`;

export const StyledArea = styled.textarea<any>`
    height:120px;
    margin-top: ${p => (p.$default ? 0 : 8)}px;
    ${sharedStyle}
`;
