import { Container } from 'components/Common/styled/Common.styled';
import { contacts } from 'data/contacts';
import { UbisoftLofo } from 'data/images';
import {
    FooterItem,
    FooterLink,
    FooterList,
    FooterStyledBox,
    UbisoftLogo,
} from './Footer.styled';

export const Footer = () => {
    return (
        <Container>
            <FooterStyledBox>
                <UbisoftLogo src={UbisoftLofo} alt="Ubisoft" />
                <p>:</p>
                <FooterList>
                    {contacts.map(contact => {
                        const { id, link, icon } = contact;
                        return (
                            <FooterItem key={id}>
                                <FooterLink
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>{icon}</div>
                                </FooterLink>
                            </FooterItem>
                        );
                    })}
                </FooterList>
            </FooterStyledBox>
        </Container>
    );
};
