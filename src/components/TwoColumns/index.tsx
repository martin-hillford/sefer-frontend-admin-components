import styled from 'styled-components';

export const TwoColumns = styled.div`
    display:flex;
    flex-wrap: wrap;
    @media (min-width: 1024px) {
        width: 100%;
        height: calc(100vh - 190px)
    }
    flex-direction: row;
`;
