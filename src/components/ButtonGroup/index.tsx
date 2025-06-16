import styled from 'styled-components';

export const ButtonGroup = styled.div<{$pull? : string}>`
    display:flex;
    justify-content : ${props => ((props.$pull === 'right') ? 'flex-end' : 'flex-start')};
    flex-wrap: wrap;

    & > :first-child {
        margin-left: 0;
    }

    & > :first-child:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-right-width: 0;
    }

    & > :last-child:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }

    & > *:not(:first-child):not(:last-child)  {
        border-radius: 0;
        border-right-width: 0;
    }
`;
