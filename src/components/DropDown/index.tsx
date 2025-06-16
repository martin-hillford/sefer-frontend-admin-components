import { TriangleDown, TriangleUp } from '../../icons';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { DataContext } from "../../types/DataContext";
import { Property } from "../Property";
import { AutoSuggest } from "./AuoSuggest";
import { default as Styled, Placeholder } from './DropDownStyled';

export interface DropDownOption<T> {
    label: string | ReactNode, value: T
}

type Props<T> = {
    name: string,
    value?: number | string,
    options: DropDownOption<T>[]
    onChange?: (value: T) => void
    dataContext?: DataContext<any> | undefined
    label?: string | undefined
    disabled?: boolean
    placeholder?: string
    searchable?: boolean
}

export function DropDown<T>(props: Props<T>) {
  const { name, value, options, onChange, dataContext, disabled, label, placeholder, searchable = false } = props;
  const [search, setSearch] = useState<string | undefined>();
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && event.target && !ref.current.contains(event.target as Node)) setExpanded(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => { document.removeEventListener('click', handleClickOutside, true); };
  });

  const onClick = (index: number) => {
    const value = options[index].value
    if (dataContext) dataContext.setValue(name, value);
    else if (onChange) onChange(value);
    setSearch(undefined);
    setExpanded(false);
  };

  const val = dataContext ? dataContext.getValue(name) : value;
  const selected = options?.find(o => o.value === val)?.label;

  const filtered = searchable && search
    ? options.filter(o => o.label?.toString()?.toLowerCase().includes(search.toLowerCase()))
    : options;

  const content = (
    <Styled.Container ref={ref} $disabled={disabled === true}>
      <Button expanded={expanded || !!search} setExpanded={setExpanded} disabled={disabled === true}>
        <AutoSuggest
          search={search}
          setSearch={setSearch}
          selected={selected}
          placeholder={placeholder}
          enabled={searchable}
          disabled={false}
        />
        <Value
          selected={selected}
          placeholder={placeholder}
          autoSuggest={searchable}
        />
      </Button>
      {expanded && <Options options={filtered} onClick={onClick} />}
    </Styled.Container>
  );

  if (label && dataContext) return <Property name={name} dataContext={dataContext} label={label}>{content}</Property>;
  if (label) return <Property label={label}>{content}</Property>;
  return content;
}

function Options<T>(props: { options: DropDownOption<T>[], onClick: (index: number) => void }) {
  const { onClick, options } = props;
  return (
    <Styled.Wrapper>
      {options.map((option,index) => <Option key={index} index={index} option={option} onClick={onClick} />)}
    </Styled.Wrapper>
  );
}

const Value = (props: { autoSuggest: boolean, placeholder: string | undefined, selected: ReactNode | undefined }) => {
  const { autoSuggest, placeholder, selected } = props;
  if (autoSuggest) return null;
  return (
    <>
      {selected}
      {!selected && <Placeholder>{placeholder}</Placeholder>}
    </>
  );
};

function Option<T>(props: { option: DropDownOption<T>, index: number, onClick: (index: number) => void}) {
  const { option, onClick, index } = props;
  return <Styled.ListItem onClick={() => onClick(index)}>{option.label}</Styled.ListItem>;
}

const Button = (props: { disabled: boolean, expanded: boolean, setExpanded: Function, children: ReactNode }) => {
  const { disabled, setExpanded, expanded, children } = props;
  const isExpanded = expanded && !disabled;

  return (
    <button type="button" onClick={() => setExpanded(!isExpanded)} disabled={disabled}>
      <span>{children}</span>
      <Styled.Caret $disabled={disabled}>
        {!isExpanded && <TriangleDown size={10} />}
        {isExpanded && <TriangleUp size={10} />}
      </Styled.Caret>
    </button>
  );
};
