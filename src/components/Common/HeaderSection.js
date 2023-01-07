import PropTypes from 'prop-types';
import { HeaderTag } from './styled/Header.styled';

export const HeaderBox = ({ children }) => {
    return <HeaderTag>{children}</HeaderTag>;
};

HeaderBox.propTypes = {
    children: PropTypes.element,
};
