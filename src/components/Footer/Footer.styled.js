import styled from 'styled-components';

export const FooterStyledBox = styled.div`
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
`;
export const UbisoftLogo = styled.img`
    width: 55px;
    border-radius: 10px;
    margin-right: 5px;
    @media screen and (min-width: 768px) {
        width: 71px;
    }
`;

export const FooterList = styled.ul`
    display: flex;
    margin-left: 20px;

    @media screen and (min-width: 768px) {
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;

export const FooterItem = styled.li`
    :not(:last-child) {
        margin-right: 10px;
    }

    @media screen and (min-width: 768px) {
        :not(:last-child) {
            margin-right: 20px;
        }
    }
`;

export const FooterLink = styled.a`
    color: #2196f3;

    :hover,
    :focus {
        color: red;
    }
`;
