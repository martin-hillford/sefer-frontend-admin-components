// noinspection CssUnusedSymbol

import { ReactNode } from 'react';
import styled from 'styled-components';

export const MenuHeader = styled.li<{$collapsed : boolean}>`
    color:white;
    box-sizing: border-box;
    font-size: 14px;
    display: block;
    padding-top:10px;
    user-select: none;

    .menu-label {
        display : ${props => (props.$collapsed ? 'none' : 'inherit')};
        padding-left: 16px;
    }

    div {
        padding: 8px 14px;
        cursor:pointer;
    }

    a, div {
        padding: 8px 14px;
        cursor:pointer;
        color:white;
        text-decoration:none;
        height: 32px;
        width: 200px;
        display: flex;
        line-height: 16px;
    }
`;

export const Label = ({ children } : { children : ReactNode }) => (
  <span className="menu-label">{children}</span>
);
