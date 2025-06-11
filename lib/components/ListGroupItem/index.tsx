// noinspection CssUnusedSymbol

import styled from 'styled-components';
import { CSSProperties, ReactNode } from 'react';
import { Colors } from '../../types/Colors';

type Props = {
    active?: boolean | undefined,
    dragged?: boolean | undefined,
    selectable?: boolean | undefined,
    error?: boolean
    onClick?: () => void,
    children: ReactNode,
    style?: CSSProperties,

}

export const ListGroupItem = (props: Props) => {
  const { children, onClick, style, dragged, error, selectable, active } = props;
  const styledProps = { onClick, style, $error : error, $active: active, $selectable: selectable, $dragged: dragged };
  return <Item {...styledProps} className="list-group-item">{children}</Item>;
};

type StyledProps = {
    $active?: boolean | undefined,
    $dragged?: boolean | undefined,
    $selectable?: boolean | undefined,
    $error?: boolean
    onClick?: () => void,
    style?: CSSProperties,
}


const Item = styled.div<StyledProps>`
    background-color: ${p => getBackgroundColor(p)};
    border: 1px solid ${p => getBorderColor(p)};
    padding: 15px;
    user-select: none;
    color: ${p => getColor(p)};
    cursor: ${p => (p.$selectable ? 'pointer' : 'default')};

    &.drag-over {
        background-color: #EEEEEE;
    }
`;

const getBorderColor = (props: StyledProps) => {
  if (props.$error === true) return Colors.Red;
  return '#dddddd';
};

const getBackgroundColor = (props: StyledProps) => {
  if (props.$dragged === true) return 'transparent';
  if (props.$error === true) return '#ffffff';
  return props.$active ? Colors.Blue : '#ffffff';
};

const getColor = (props: StyledProps) => {
  if (props.$dragged === true) return 'transparent';
  if (props.$error === true) return Colors.Red;
  return props.$active ? '#ffffff' : 'inherit';
};
