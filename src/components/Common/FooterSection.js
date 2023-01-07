import PropTypes from 'prop-types';
import { FooterTag } from './styled/Footer.styled';

export const FooterBox = ({ children }) => {
    return <FooterTag>{children}</FooterTag>;
};

FooterBox.propTypes = {
    children: PropTypes.element,
};
