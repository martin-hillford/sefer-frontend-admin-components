import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
    children : ReactNode,
    buttons? : ReactNode
}

export const EntityForm = ({ buttons, children } : Props) => {
  const hasButtons = !!buttons;
  return (
    <>
      <Body $hasButtons={hasButtons}>
        {children}
      </Body>
      {hasButtons && <Buttons>{buttons}</Buttons>}
    </>
  );
};

const Body = styled.div<{$hasButtons : boolean}>`
    @media (min-width: 1024px ) {
        height: ${p => (p.$hasButtons ? 'calc(100vh - 309px)' : 'calc(100vh - 255px)')};
        overflow: auto;
    }
`;

const Buttons = styled.div`
    margin-top:5px;
    padding-top:11px;
    @media (min-width: 1024px ) { height:50px; }
    border-top: 1px solid #dddddd;
    overflow: hidden;
`;
