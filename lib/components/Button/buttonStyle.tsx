import { css } from "styled-components";

export const buttonStyle = css`
    box-shadow: none;
    border: 1px solid ${p => p.theme.border}; /* to overcome setting from a */
    color: ${p => p.theme.text}; /* to overcome setting from a */
    text-transform: uppercase;
    transition: all 0.4s;
    display: flex;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    white-space: nowrap;
    padding: 6px 10px;
    font-size: 13px;
    font-family: 'Helvetica Neue',serif;
    line-height: 1.846;
    border-radius: 3px;
    text-decoration: none;
    user-select: none;
    
    &:hover {
        border: 1px solid ${p => p.theme.borderHover}; /* to overcome setting from a */
        background-color: ${p => p.theme.backgroundHover}; /* to overcome setting from a */
        color: ${p => p.theme.textHover}; /* to overcome setting from a */
    }

    &:focus {
        outline-style: none;
    }
`;

