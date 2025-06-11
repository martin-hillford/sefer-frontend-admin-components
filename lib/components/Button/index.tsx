import React from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { useThemeVariant } from "../../hooks/useThemeVariant";
import { ButtonProps } from "./ButtonProps";
import { buttonStyle } from "./buttonStyle";

export const Button = (props : ButtonProps) => {
  const { variant, children, link, href, label, disabled, show, target, icon } = props;
  const theme = useThemeVariant(variant);

  const btnIcon = icon ? <Icon>{icon}</Icon> : null;

  if (show === false) return null;

  return (
    <ThemeProvider theme={theme}>
      {!link && !href && <ButtonBase {...props}>{btnIcon}{children}{label}</ButtonBase> }
      {link && disabled && <ButtonBase {...props}>{btnIcon}{children}{label}</ButtonBase> }
      {link && !disabled && <LinkBase to={link}>{btnIcon}{children}</LinkBase> }
      {href && <HrefBase target={target} href={href}>{btnIcon}{children}</HrefBase> }
    </ThemeProvider>
  );
};

export const Icon = styled.span`
    padding-right: 3px;
    display: inline-block;
    margin-top:-2px;
    margin-left:-6px;
    padding-left: 3px;
    height: 24px;
`;

export const ButtonBase = styled.button<{disabled? : boolean, $active? : boolean}>`
    ${buttonStyle};
    opacity: ${p => (p.disabled ? 0.65 : 1)};
    cursor : ${p => (p.disabled ? 'default' : 'pointer')};
    pointer-events: ${p => (p.disabled ? 'none' : 'auto')};
    background-color: ${p => getBackgroundColor(p.theme, p.disabled, p.$active)}; /* to overcome setting from a */
`;

export const LinkBase = styled(Link)`
    ${buttonStyle}
`;

export const HrefBase = styled.a`
    ${buttonStyle}
`;

const getBackgroundColor = (theme : any, disabled? : boolean, active? : boolean) => {
    if (disabled) return theme.disabled;
    if (active) return theme.backgroundHover;
    return theme.background;
};
