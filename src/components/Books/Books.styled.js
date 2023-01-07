import styled from 'styled-components';

export const BookList = styled.ul`
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin-top: -10px;
        margin-right: -10px;
    }

    @media screen and (min-width: 1200px) {
        margin-top: -15px;
        margin-right: -15px;
    }
`;

export const BookItem = styled.li`
    border: 1px solid black;
    border-radius: 10px;

    :not(:last-child) {
        margin-bottom: 15px;
    }

    @media screen and (min-width: 768px) {
        :not(:last-child) {
            margin-bottom: 0;
        }

        margin-top: 10px;
        margin-right: 10px;
        width: calc(100% / 3 - 20px);
    }

    @media screen and (min-width: 1200px) {
        margin-top: 15px;
        margin-right: 15px;
        width: calc(100% / 4 - 30px);
    }
`;

export const BookImg = styled.img`
    border-radius: 10px;
    width: 240px;
    height: auto;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 15px;
        width: 280px;
    }

    @media screen and (min-width: 1200px) {
        width: 300px;
    }
`;

export const BookTitle = styled.h2`
    margin-bottom: 10px;
`;

export const BookAuthor = styled.h3`
    margin-bottom: 15px;
`;
