import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../../types/Colors';

export type HeaderProps = {
    variant?: "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";
    children: ReactNode,
    inline?: boolean,
    error?: boolean,
    padding?: boolean
    color?: string
}

export const Header = (props: HeaderProps) => {
  const { children, error, color, inline, padding, variant } = props;

  const styleProps = { $padding: padding, $error: error, $color: color, $inline: inline }
  switch (variant) {
    case "xx-large":
      return <H1 {...styleProps}>{children}</H1>;
    case "x-large":
      return <H2 {...styleProps}>{children}</H2>;
    case "large":
      return <H4 {...styleProps}>{children}</H4>;
    case "small":
      return <H5 {...styleProps}>{children}</H5>;
    case "x-small":
      return <H6 {...styleProps}>{children}</H6>;
    default:
      return <H3 {...styleProps}>{children}</H3>;
  }
};

const getColor = (error: boolean | undefined, color: string | undefined) => {
  if (error) return Colors.Red;
  return color ?? '#444444';
};

interface StyleProps {
    $inline?: boolean,
    $error?: boolean,
    $padding?: boolean
    $color?: string
}

const sharedStyle = css<StyleProps>`
    padding-left: ${props => (props.$padding ? '20px' : '0')};
    line-height: 1.1;
    color: ${p => getColor(p.$error, p.$color)};
    border-bottom-width: 1px;
    border-bottom-style: ${props => (props.$inline ? 'none' : 'solid')};
    border-bottom-color: ${props => (props.$error ? Colors.Red : '#E5E5E5')};
    font-family: 'ecs-font', sans-serif;
    font-weight: 400;
`;

const H1 = styled.h1<StyleProps>`
    ${sharedStyle};
    margin: 0.67em 0;
    font-size: 26px;
`;

const H2 = styled.h2<StyleProps>`
    ${sharedStyle};
    font-size: 20px !important;
    margin-top: 2px;
    margin-bottom: 12px;
`;

const H3 = styled.h3<StyleProps>`
    ${sharedStyle};
    margin-bottom: 23px;
    padding-bottom: 3px;
    margin-top: 15px;
    font-size: 20px;
`;

const H4 = styled.h4<StyleProps>`
    ${sharedStyle};
    margin-bottom: 12px;
    margin-top: 12px;
    font-size: 16px;
`;

const H5 = styled.h5<StyleProps>`
    ${sharedStyle};
    margin-bottom: 12px;
    margin-top: 12px;
    font-size: 15px;
`;

const H6 = styled.h6<StyleProps>`
    margin: 0;
    line-height: 1.1;
    font-size: 14px;
`;
