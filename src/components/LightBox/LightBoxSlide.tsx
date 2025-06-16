import { Overlay } from '../Overlay';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const LightBoxSlide = (props : { src? : string | string[], layer? : number, alt? : string, onClose : () => any }) => {
  const { src, alt, layer, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const onKeyUp = (event : any) => {
      if (event.key === 'Escape') onSlideUp();
    };

    document.addEventListener('keyup', onKeyUp);
    return () => document.removeEventListener('keyup', onKeyUp);
  }, [onClose]);

  if (!src || src.length === 0) return null;

  const image = Array.isArray(src) ? src[0] : src;

  const onSlideUp = () => {
    setIsClosing(true);
  };

  const content = <Box><FullImage onClick={onSlideUp} alt={alt} src={image} /></Box>;
  return (
    <Overlay onClick={onSlideUp} layer={layer}>
      {!isClosing && <Container children={content} /> }
      {isClosing && <ReverseContainer onAnimationEnd={onClose} children={content} /> }
    </Overlay>
  );
};

const Box = styled.div`
    background-color: white;
    border: 1px solid rgba(0,0,0,.1)!important;
    max-width: calc(100vw - 30px);
    padding: 15px;
    width: fit-content;
`;

const FullImage = styled.img`
    max-height: calc(100vh - 100px);
    max-width: calc(100vw - 100px);
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    z-index:2;
    padding: 15px;

    @keyframes slide {
        from { transform: translateY(-100%);  }
        to { transform: translateY(0%); }
    }

    animation-timing-function: ease-in-out;
    animation: slide .5s forwards;
`;

const ReverseContainer = styled(Container)`
    animation: slide 1.0s reverse;
`;
