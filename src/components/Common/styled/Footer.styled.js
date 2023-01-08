import styled from 'styled-components';
import headerBgc from 'images/headerBgc.jpg';

export const FooterTag = styled.footer`
    position: relative;
    background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 20px;
        background-image: linear-gradient(
            to top,
            rgb(0, 0, 0),
            rgba(34, 75, 106, 0.7)
        );
    }

    @media screen and (min-width: 768px) {
        background-image: url(${headerBgc});
    }
`;
