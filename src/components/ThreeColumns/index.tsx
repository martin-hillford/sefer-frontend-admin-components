import styled from 'styled-components';

const Row = styled.div<{$condensed? : boolean, $withBottom? : boolean}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: 1024px) {
        flex-direction: row;

        & > div:first-child {
            padding-right: ${p => (p.$condensed ? 8 : 20)}px;
        }

        & > :nth-of-type(2) {
            padding-left: ${p => (p.$condensed ? 4 : 10)}px;
            padding-right: ${p => (p.$condensed ? 4 : 10)}px;
        }

        & > div:last-child {
            padding-left: ${p => (p.$condensed ? 8 : 20)}px;
        }

        margin-bottom: ${p => (p.$withBottom ? p.$condensed ? 8 : 20 : 0)}px;
    }
`;

const Column = styled.div`
    flex-wrap: wrap;
    flex: 0 0 100%;
    display: block;
    height: min-content;

    @media (min-width: 1024px) {
        flex: 0 0 33.33%;
        flex-wrap: nowrap;
    }
`;

export const ThreeColumns = { Row, Column }
