import styled from 'styled-components';

export const Line = styled.div<{$margin? : number}>`
    margin-top: ${p => (p.$margin ? p.$margin : 23)}px;
    margin-bottom: ${p => (p.$margin ? p.$margin : 23)}px;
    height: 1px;
    border-top: 1px solid #eeeeee;
`;
