import styled from 'styled-components';

export const GamesList = styled.ul`
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin-top: -20px;
        margin-right: -20px;
    }

    @media screen and (min-width: 1200px) {
        margin-top: -30px;
        margin-right: -30px;
    }
`;

export const GamesItem = styled.li`
    :not(:last-child) {
        margin-bottom: 15px;
    }

    @media screen and (min-width: 768px) {
        :not(:last-child) {
            margin-bottom: 0;
        }

        margin-top: 20px;
        margin-right: 20px;
        width: calc(100% / 2 - 20px);
    }

    @media screen and (min-width: 1200px) {
        margin-top: 30px;
        margin-right: 30px;
        width: calc(100% / 3 - 30px);
    }
`;

export const GameImg = styled.img`
    width: 280px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 15px;
        width: 350px;
    }

    @media screen and (min-width: 1200px) {
        width: 370px;
    }
`;

export const GameTitle = styled.h3``;
