import styled from 'styled-components';

export const BookModalBox = styled.div`
    text-align: center;

    @media screen and (min-width: 768px) {
        display: flex;
        margin-top: 30px;
    }
`;
export const BookModalImg = styled.img`
    border-radius: 10px;
    width: 150px;
    height: max-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 10px;
        width: 200px;
        margin-top: 20px;
    }

    @media screen and (min-width: 1200px) {
        width: 220px;
        margin-right: 20px;
        margin-top: 0;
    }
`;

export const BookAuthor = styled.h3`
    margin-bottom: 15px;
`;

export const BookDescription = styled.p`
    text-align: justify;
    text-indent: 10px;
    margin-bottom: 15px;
`;

export const ReadLink = styled.a`
    justify-content: center;
    display: flex;
    align-items: center;
`;
