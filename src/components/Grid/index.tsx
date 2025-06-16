import { ReactNode } from 'react';
import styled from 'styled-components';

type GridProps = {
    wrap? : boolean
    children : ReactNode

}

export const Grid = (props : GridProps) => {
  const { wrap, children } = props;
  return <Base $flexWrap={wrap}>{children}</Base>;
};

const Base = styled.div<{$flexWrap? : boolean}>`
    display: flex;
    flex-wrap: ${p => (p.$flexWrap !== false ? 'wrap' : 'nowrap')};
`;
