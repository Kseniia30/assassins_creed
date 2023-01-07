import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;

    @media screen and (min-width: 768px) {
        width: 768px;
        padding-left: 15px;
        padding-right: 15px;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        padding-left: 10px;
        padding-right: 10px;
    }
`;