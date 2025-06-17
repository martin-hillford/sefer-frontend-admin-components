import styled from 'styled-components';

export const NavBlock = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const BottomNavBlock = styled(NavBlock)`
    bottom: 15px;
    display: block;
    position: absolute;
`;

export const SubMenu = styled.li<{ $collapsed: boolean }>`

    display: ${p => (p.$collapsed ? 'none' : 'inherit')};

    ul {
        list-style-type: none;
        padding-inline-start: 48px;
    }

    ul li {
        padding-bottom: 11px;
        padding-top: 11px;
        max-height: 36px;
        overflow: hidden;
    }

    a {
        color: white;
        text-decoration: none;
        font-size: 14px;
        line-height: 18px;
        height: 18px;
    }
`;
