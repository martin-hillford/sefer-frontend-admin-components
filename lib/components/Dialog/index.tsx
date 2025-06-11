import { Overlay } from '../Overlay';
import { ReactNode } from 'react';
import styled from 'styled-components';

type DialogProp = {
    children : ReactNode,
    speed?: number
    layer? : number;
}

export const Dialog = (props : DialogProp) => {
  const { children, speed, layer } = props;
  return (
    <Overlay layer={layer} speed={speed}>
      <Container>
        <Background>
          {children}
        </Background>
      </Container>
    </Overlay>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center;     /* center items horizontally, in this case */
`;

const Background = styled.div`
    background-color: white;
    min-width: 400px;
`;
