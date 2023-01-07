import styled from 'styled-components';

export const HomeMainInfoBox = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

export const HomeTitle = styled.h1`
    text-align: center;
`;

export const ImageList = styled.ul`
    margin-bottom: 15px;

    @media screen and (min-width: 768px) {
        width: 30%;
        margin-right: 10px;
        margin-left: 10px;
    }
`;

export const ImageListItem = styled.li`
    :not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Image = styled.img`
    border-radius: 10px;
    width: 280px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 768px) {
        width: 300px;
        margin-right: 0;
        margin-left: 0;
    }

    @media screen and (min-width: 768px) {
        width: 320px;
    }
`;

export const HomeText = styled.p`
    text-align: justify;
    text-indent: 30px;

    @media screen and (min-width: 768px) {
        width: 70%;
    }
`;

export const DevelopmentText = styled.p`
    text-align: justify;
    text-indent: 30px;
`;

export const DevelopmentTextBox = styled.div`
    @media screen and (min-width: 768px) {
        width: 70%;
    }
`;

export const AdditionalImgList = styled.ul`
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

export const AdditionalListItem = styled.li`
    :not(:last-child) {
        margin-bottom: 20px;
    }

    @media screen and (min-width: 768px) {
        :not(:last-child) {
            margin-bottom: 0;
            margin-right: 30px;
        }
    }
`;

export const AdditionalImg = styled.img`
    border-radius: 10px;
    width: 280px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 768px) {
        height: 235px;
        width: max-content;
        margin-right: 0;
        margin-left: 0;
    }
`;
