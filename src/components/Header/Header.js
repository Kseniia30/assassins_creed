import { Container } from 'components/Common/styled/Common.styled';
import { gameLogo } from 'data/images';
import { Link } from 'react-router-dom';
import {
    HeaderItem,
    HeaderLink,
    HeaderList,
    HeaderMobileBtn,
    HeaderStyledBox,
    Logo,
} from './Header.styled';
import { GiHoodedAssassin } from 'react-icons/gi';
import { useState } from 'react';
import { Modal } from 'components/Backdrop/Backdrop';
import { HeaderMobileMenu } from './HeaderMobileMenu';

export const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = evt => {
        setShowModal(!showModal);
    };

    return (
        <Container>
            <HeaderStyledBox>
                <Link to="/">
                    <Logo src={gameLogo} alt="logo" />
                </Link>
                <HeaderMobileBtn type="button" onClick={toggleModal}>
                    <GiHoodedAssassin
                        style={{ height: '40px', width: '40px', color: '#fff' }}
                    />
                </HeaderMobileBtn>
                <HeaderList>
                    <HeaderItem>
                        <HeaderLink to="/">Home</HeaderLink>
                    </HeaderItem>
                    <HeaderItem>
                        <HeaderLink to="/games">Games</HeaderLink>
                    </HeaderItem>
                    <HeaderItem>
                        <HeaderLink to="/books">Books</HeaderLink>
                    </HeaderItem>
                    <HeaderItem>
                        <HeaderLink to="/films">Films</HeaderLink>
                    </HeaderItem>
                </HeaderList>
            </HeaderStyledBox>
            {showModal && (
                <Modal onClose={toggleModal}>
                    <HeaderMobileMenu onClose={toggleModal} />
                </Modal>
            )}
        </Container>
    );
};
