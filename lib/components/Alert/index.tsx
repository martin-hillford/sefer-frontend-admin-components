import { Dispatch, MouseEventHandler, ReactNode, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ColorDef, getVariantColors } from '../../types/Colors';
import { Overlay } from '../Overlay';

const closeAlert = (setShow : Dispatch<SetStateAction<boolean>>, onClosed? : Function) => {
  setShow(false);
  if (onClosed) onClosed();
};

interface AlertProps {
    variant : 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'selected',
    children : ReactNode,
    hide? : string | boolean,
    closable? : boolean,
    onClosed? : Function,
    timeout? : number,
}

/**
 * An Alert is will show a message with an alert
 */
export const Alert = (props : AlertProps & { overlay? : boolean}) => {
  const { overlay } = props;
  if (overlay !== true) return <AlertContent {...props} />;

  return (
    <Overlay>
      <AlertContent {...props} />
    </Overlay>
  );
};

export const AlertContent = (props : AlertProps) => {
  const { variant, children, hide = 'auto', closable = false, onClosed, timeout = 4800 } = props;
  const [show, setShow] = useState(true);

  const onClose = () => {
    closeAlert(setShow, onClosed);
  };

  useEffect(() => {
    if (hide !== 'auto') return () => {};
    const close = () => { closeAlert(setShow, onClosed); };
    const timer = setTimeout(close, timeout);
    return () => { clearTimeout(timer); };
  }, [hide, onClosed, timeout]);

  const colors = getVariantColors(variant);
  return (
    <Base $show={show} $colors={colors}>
      { !closable && children }
      { closable && <Closable onClose={onClose}>{children}</Closable> }
    </Base>
  );
};

const Closable = ({ onClose, children } : { onClose : MouseEventHandler, children : ReactNode}) => (
  <Container>
    <Text>{children}</Text>
    <Button onClick={onClose}>×</Button>
  </Container>
);

const Container = styled.div`
    width:100%;
    display: flex;
`;

const Text = styled.div`
    flex: 1 1 auto;
    padding-right:10px;
`;

const Button = styled.div`
    flex: 0 0 auto;
    font-size: 30px;
    font-weight: 300;
    line-height: 24px;
    opacity: 0.6;
    cursor: pointer;
`;

const Base = styled.div<{$show:boolean, $colors: ColorDef}>`
    padding: 15px;
    margin-bottom: 23px;
    border: 1px solid transparent;
    border-radius: 3px;
    background-color : ${props => props.$colors.background} ;
    color : ${props => props.$colors.text} ;
    transition: all 0.2s;
    display : ${props => (props.$show ? 'block' : 'none')};
    width:100%;
`;
