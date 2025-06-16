import { ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export const Overlay = (props : { children? : ReactNode, speed?: number, onClick? : Function, layer? : number }) => {
  const { children, speed, layer, onClick } = props;
  const [show, setShow] = useState(!speed || speed < 10);

  const domNode = document.getElementById('modal');
  if (!domNode) return null;

  const onAnimationEnd = () => { if (!show) setShow(true); };

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  return ReactDOM.createPortal(
    <Container $layer={layer ?? 10} onClick={onClickHandler} $speed={speed ?? 500} onAnimationEnd={onAnimationEnd}>
      {show && children}
    </Container>,
    document.body
  );
};

const Container = styled.div<{$speed : number, $layer : number}>`
    z-index: ${p => p.$layer};
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: absolute;
    background-color: rgba(152,152,152,.5);
    top:0;
    @keyframes blur {
        0% { background-color: rgba(152,152,152,0); }
        100% { background-color: rgba(152,152,152,.5); }
    }
    animation: blur ${p => p.$speed}ms ease-in;
    padding:20px;
`;
