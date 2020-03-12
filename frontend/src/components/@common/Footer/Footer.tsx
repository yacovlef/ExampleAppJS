import React, { FC } from 'react';

import Container from '../Container';

import { FooterWrapper, FooterLayout } from './footer.style';

const Footer: FC = () => {
    const { REACT_APP_TITLE } = process.env;

    return (
        <FooterWrapper>
            <Container>
                <FooterLayout>
                    &copy; {new Date().getFullYear()} {REACT_APP_TITLE}
                </FooterLayout>
            </Container>
        </FooterWrapper>
    );
}

export default Footer;
