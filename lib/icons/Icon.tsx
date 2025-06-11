import { ReactNode } from "react";
import styled from 'styled-components';
import { IconProps } from './IconsProps';

export const Icon = ({size, children} : IconProps & { children: ReactNode}) =>
    <Span $size={size}>{children}</Span>

const Span = styled.span<{ $size:number | undefined |null }>`
    display: inline-block;
    height: ${p => p.$size ?? 20}px;
    width: ${p => p.$size ?? 20}px;

    svg {
      height: ${p => p.$size ?? 20}px;
      width: ${p => p.$size ?? 20}px;
    }
`;
