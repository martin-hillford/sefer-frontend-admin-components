import { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface Props {
    search: string | undefined;
    setSearch: (value: string | undefined) => void;
    selected: ReactNode | undefined;
    placeholder: string | undefined;
    enabled: boolean;
    disabled: boolean;
}

export const AutoSuggest = (props: Props) => {
  const [hasFocused, setHasFocused] = useState(false);
  const { enabled, search, disabled, setSearch, placeholder, selected } = props;
  const value = (hasFocused ? search : selected?.toString()) ?? '';

  if (!enabled) return null;
  return (
    <Input
      onFocus={() => setHasFocused(true)}
      onBlur={() => setHasFocused(false)}
      placeholder={selected?.toString() ?? placeholder}
      value={value}
      disabled={disabled}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

const Input = styled.input<{ disabled: boolean }>`
    border: none;
    outline-width: 0;
    background-color: transparent;
`;
