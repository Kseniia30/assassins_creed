import styled from 'styled-components';
import headerBgc from 'images/headerBgc.jpg';

export const HeaderTag = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 20px;
        background-image: linear-gradient(
            to bottom,
            rgb(0, 0, 0),
            rgba(0, 0, 0, 0.1)
        );
    }

    @media screen and (min-width: 768px) {
        background-image: url(${headerBgc});
    }
`;

//
