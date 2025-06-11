import styled from 'styled-components';

export const GridColumn = styled.div<{$size : number, $align? : string}>`
    flex: 100%;
    justify-content: ${p => (p.$align === 'right' ? 'flex-end' : 'flex-start')};
    @media (min-width: 720px ) { flex: ${p => p.$size}%; }
`;
