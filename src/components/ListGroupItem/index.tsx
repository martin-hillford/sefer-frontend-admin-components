// noinspection CssUnusedSymbol

import styled from 'styled-components';
import { CSSProperties, DragEventHandler, ReactNode } from 'react';
import { Colors} from "../../types/Colors";

type Props = {
    active?: boolean | undefined,
    draggable?: boolean | undefined,
    selectable?: boolean | undefined,
    error?: boolean
    children: ReactNode,
    style?: CSSProperties,
    onClick?: () => void,
    onDragStart? : DragEventHandler<HTMLDivElement>
    onDrop? : DragEventHandler<HTMLDivElement>,
    onDragOver? : DragEventHandler<HTMLDivElement>
    onDragLeave? : DragEventHandler<HTMLDivElement>
}

export const ListGroupItem = (props: Props) => {
  const { active, draggable, children, style, error, selectable } = props;
  const { onDragStart, onDragLeave, onDrop, onClick, onDragOver  } = props;
  return (
      <Item
          className="list-group-item"
          $active={active}
          $error={error}
          $selectable={selectable}
          draggable={!!draggable}
          style={style}
          onDragStart={onDragStart}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onClick={onClick}
          children={children}
      />
  );
};

type StyledProps = {
    $active?: boolean | undefined,
    $selectable?: boolean | undefined,
    $error?: boolean
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
  if (props.$error === true) return '#ffffff';
  return props.$active ? Colors.Blue : '#ffffff';
};

const getColor = (props: StyledProps) => {
  if (props.$error === true) return Colors.Red;
  return props.$active ? '#ffffff' : 'inherit';
};
