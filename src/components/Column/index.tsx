import styled from 'styled-components';

export const Column = styled.div<{$side : string, $flex? : string }>`
    width: 100%;
    height: auto;

    @media (min-width: 1024px) {
        width: 50%;
        height: 100%;
    }
    flex-grow: 1;
    padding-right: ${p => (p.$side === 'left' ? '15px' : '0')};
    padding-left: ${p => (p.$side === 'right' ? '15px' : '0')};

    display: flex;
    flex-direction: ${p => (p.$flex === 'row' ? 'row' : 'column')};
`;
