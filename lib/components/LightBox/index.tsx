import { useState } from 'react';
import styled from 'styled-components';
import { LightBoxSlide } from './LightBoxSlide';

export const LightBox = (props : { src? : string, alt? : string, border? : boolean }) => {
  const { src, alt, border = true } = props;
  const [showBox, setShowBox] = useState(false);

  if (!src) return null;

  return (
    <>
      <Image $border={border} onClick={() => setShowBox(true)} alt={alt} src={src} />
      {showBox && <LightBoxSlide {...props} onClose={() => { setShowBox(false); }} /> }
    </>
  );
};

const Image = styled.img<{$border:boolean}>`
    border: ${p => (p.$border ? 1 : 0)}px solid rgba(0,0,0,.1)!important;
    cursor: pointer;
    max-height: 200px;
`;
