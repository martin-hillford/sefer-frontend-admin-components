import styled from 'styled-components';

const ListItem = styled.li`
    color: #444444;
    padding: 6px 20px;
    text-decoration: none;
    background-color: white;
    display: block;
    clear: both;
    font-weight: normal;
    line-height: 1.846;
    white-space: nowrap;
`;

const Caret = styled.span<{$disabled:boolean}>`
    font-size: 10px;
    line-height: 1.846;
    padding-left:8px;
    padding-top:2px;
    color: ${p => (p.$disabled ? '#828282' : '#444444')};
`;

const Container = styled.div<{$disabled:boolean}>`

    position: relative;

    button {
        box-shadow: none;
        border: 1px solid #E5E5E5;
        background-color: ${p => (p.$disabled ? '#EAEAEA' : 'white')};
        color: #444444;
        outline: 0;
        transition: all 0.4s;
        display: flex;
        margin-bottom: 0;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: ${p => (p.$disabled ? 'default' : 'pointer')};
        background-image: none;
        white-space: nowrap;
        padding: 6px 16px;
        font-size: 13px;
        line-height: 1.846;
        border-radius: 3px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-weight:400;
    }

    button:hover {
        background-color: ${p => (p.$disabled ? '#EAEAEA' : '#F0F0F0')};
        cursor: ${p => (p.$disabled ? 'default' : 'pointer')};
    }
`;

export const Placeholder = styled.span`
  color: #999999;
`;

export const Wrapper = styled.ul`
    margin: 0;
    padding: 0;
    left: inherit;
    box-shadow: none !important;
    border: 1px solid #E5E5E5;
    position: absolute;
    top: 100%;
    z-index: 1000;
    float: left;
    min-width: 160px;
    list-style: none;
    font-size: 13px;
    text-align: left;
    background-color: white;
    border-radius: 3px;
    background-clip: padding-box;
    max-height: 200px;
    overflow: auto;

    cursor: pointer;

    li:hover {
        background-color: #F0F0F0;
    }
`;
const DropDownStyled = { ListItem, Caret, Container, Wrapper };
export default DropDownStyled;
