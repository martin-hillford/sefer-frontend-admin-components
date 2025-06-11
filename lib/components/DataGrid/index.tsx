import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type DataGridProps = {
    left : React.ReactNode,
    right : React.ReactNode,
}

export const DataGrid = (props : DataGridProps) => {
  const { left, right } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCount] = useState(Number.MIN_VALUE);

  useEffect(() => {
    const handleResize = () => { setCount(c => c + 1); };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, [left, right]);

  const dimensions = getDimensions();

  return (
    <Container $width={dimensions.base}>
      <Left $width={dimensions.left} $padding={dimensions.padding}>
        <div>
          {left}
        </div>
      </Left>
      <Right $width={dimensions.right} $padding={dimensions.padding}>
        <div>
          {right}
        </div>
      </Right>
    </Container>
  );
};

const getDimensions = () => {
  const baseWidth = document.documentElement.clientWidth - 103;
  if (window.innerWidth <= 991) return { left: baseWidth, right: baseWidth, base: baseWidth, padding: false };
  const left = Math.floor(baseWidth * 0.6666666666);
  const right = Math.floor(baseWidth * 0.333333333);
  return { left, right, base: baseWidth, padding: true };
};

const Container = styled.div<{ $width : number }>`
    width: ${p => `${p.$width}px`};
    flex-wrap: wrap;
    display: flex;
`;

const Left = styled.div<{ $width : number, $padding: boolean }>`
    flex : 0 0 ${p => `${p.$width}px`};
    padding-right: ${p => (p.$padding ? '11.5px' : 0)};
    > div {
        width : ${p => (p.$padding ? `${p.$width - 11.5}px` : `${p.$width}px`)};
        display: block;
    }
`;

const Right = styled.div<{ $width : number, $padding: boolean }>`
    flex : 0 0 ${p => `${p.$width}px`};
    display: flex;
    padding-left: ${p => (p.$padding ? '11.5px' : 0)};
    > div {
        width : ${p => (p.$padding ? `${p.$width - 11.5}px` : `${p.$width}px`)};
        display: block;
    }
`;
