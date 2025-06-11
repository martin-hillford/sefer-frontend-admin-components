import styled from 'styled-components';

export type TextProps = {
    $margin? : boolean,
    $justify? : boolean,
}

export const Text = styled.p<TextProps>`
    margin: ${props => (props.$margin === false ? 0 : 'default')};
    text-align : ${props => (props.$justify ? 'justify' : 'auto')};
    font-size: 13px;
`;
