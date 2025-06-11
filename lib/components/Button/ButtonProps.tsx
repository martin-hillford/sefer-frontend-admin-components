import React from "react";
import { jsx } from "storybook/theming";
import JSX = jsx.JSX;

export type ButtonProps = {
    children? : React.ReactNode,
    variant? : "default" | "primary" | "success" | "info" | "warning" | "danger" | "selected"
    onClick? : React.MouseEventHandler<HTMLButtonElement>,
    icon? : React.ReactNode | JSX.Element,
    disabled? : boolean,
    link? : string,
    active? : boolean,
    href? : string,
    label? : string,
    target? : string
    show? : boolean
}
