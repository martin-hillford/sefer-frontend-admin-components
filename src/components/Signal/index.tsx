import styled from 'styled-components';

export const Signal = (props : { state : 'green' | 'orange' | 'red' }) => {
  const { state } = props;
  switch (state) {
    case 'green': return <Circle $color="#228B36" />;
    case 'orange': return <Circle $color="#FFA500" />;
    default: return <Circle $color="#FF0000" />;
  }
};

const Circle = styled.div<{$color:string}>`
    border: 1px solid ${p => p.$color};
    background-color: ${p => p.$color};
    height: 6px;
    border-radius: 50%;
    width: 6px;
    display: inline-block;
`;
