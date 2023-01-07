import { FooterBox } from 'components/Common/FooterSection';
import { HeaderBox } from 'components/Common/HeaderSection';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const Layout = () => {
    return (
        <div>
            <HeaderBox>
                <Header />
            </HeaderBox>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <FooterBox>
                <Footer />
            </FooterBox>
        </div>
    );
};
