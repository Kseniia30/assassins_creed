import styled from 'styled-components';

export const FilmModalInfoBox = styled.div`
    text-align: center;

    @media screen and (min-width: 768px) {
        text-align: left;
        display: flex;
        margin-top: 30px;
    }
`;

export const Poster = styled.img`
    border-radius: 10px;
    width: 150px;
    height: max-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 30px;
        width: 220px;
        margin-top: 20px;
    }

    @media screen and (min-width: 1200px) {
        width: 240px;
        margin-right: 40px;
        margin-top: 0;
    }
`;

export const FilmOverview = styled.p`
    text-align: justify;
    text-indent: 10px;
    margin-bottom: 15px;
`;

export const GenresList = styled.ul`
    list-style-type: disclosure-closed;
    margin-bottom: 15px;
    text-align: left;
`;
