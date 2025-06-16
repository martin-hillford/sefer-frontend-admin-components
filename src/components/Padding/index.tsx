import styled from "styled-components";

export const Padding = styled.div<{$padding : number}>`
    padding: ${p => p.$padding}px;
`
