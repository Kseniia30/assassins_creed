import { HeaderLink, HeaderMobileList } from './Header.styled';
import PropTypes from 'prop-types';

export const HeaderMobileMenu = ({ onClose }) => {
    return (
        <HeaderMobileList>
            <li>
                <HeaderLink to="/" onClick={onClose}>
                    Home
                </HeaderLink>
            </li>
            <li>
                <HeaderLink to="/games" onClick={onClose}>
                    Games
                </HeaderLink>
            </li>
            <li>
                <HeaderLink to="/books" onClick={onClose}>
                    Books
                </HeaderLink>
            </li>
            <li>
                <HeaderLink to="/films" onClick={onClose}>
                    Films
                </HeaderLink>
            </li>
        </HeaderMobileList>
    );
};

HeaderMobileMenu.propTypes = {
    onClose: PropTypes.func,
};
