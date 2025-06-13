import styled from 'styled-components';
import { Colors } from "../../types/Colors";

export const Navbar = styled.div<{ $collapsed: boolean }>`
    height: 100vh;
    z-index: 5;
    width: ${props => (props.$collapsed ? '58px' : '200px')};
    -webkit-transition: width 0.5s ease;
    -moz-transition: width 0.5s ease;
    -o-transition: width 0.5s ease;
    transition: width 0.5s ease;
    position: absolute;
    overflow: hidden;
    background-color: ${Colors.Blue};
    color: white;
`;
