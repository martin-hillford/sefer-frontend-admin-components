import styled from 'styled-components';

export const Flex = styled.div<{ $align? : boolean }>`
    ${p => (p.$align === true ? 'align-items: center;' : '')}
    display: flex;
`;
