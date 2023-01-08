import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyledBox = styled.div`
    display: flex;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
        justify-content: normal;
    }
`;

export const Logo = styled.img`
    width: 100px;
    height: auto;

    @media screen and (min-width: 768px) {
        width: 200px;
        margin-right: 300px;
    }
`;

export const HeaderList = styled.ul`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

export const HeaderItem = styled.li`
    :not(:last-child) {
        margin-right: 30px;
    }
`;

export const HeaderLink = styled(NavLink)`
    font-family: 'Dosis', sans-serif;
    font-weight: 700;
    color: #0f82a7;

    &.active {
        color: #8f8fd0;
    }

    :hover:not(.active),
    :focus:not(.active) {
        color: #c05353;
    }

    @media screen and (min-width: 768px) {
        font-size: 28px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 32px;
    }
`;

export const HeaderMobileBtn = styled.button`
    border-radius: 10px;
    border: 1px solid black;
    background-color: transparent;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const HeaderMobileList = styled.ul`
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://images2.alphacoders.com/401/40102.jpg');
    border-radius: 10px;
    padding: 30px 40px 100px;
    margin-top: 20px;
`;
