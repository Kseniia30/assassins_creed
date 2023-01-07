import { HeaderLink, HeaderMobileList } from './Header.styled';

export const HeaderMobileMenu = () => {
    return (
        <HeaderMobileList>
            <li>
                <HeaderLink to="/">Home</HeaderLink>
            </li>
            <li>
                <HeaderLink to="/games">Games</HeaderLink>
            </li>
            <li>
                <HeaderLink to="/books">Books</HeaderLink>
            </li>
            <li>
                <HeaderLink to="/films">Films</HeaderLink>
            </li>
        </HeaderMobileList>
    );
};
