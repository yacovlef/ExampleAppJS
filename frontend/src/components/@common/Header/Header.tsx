import React, { FC } from 'react';

import HeaderMenu from '../HeaderMenu';

import {
    HeaderWrapper,
    HeaderLayout,
    HeaderLogo
} from './header.style';

import { GRAYLIGHT } from '../../../constants/color';

import Container from '../Container';

const Header: FC = () => {
    const { REACT_APP_TITLE } = process.env;

    return (
        <HeaderWrapper>
            <Container>
                <HeaderLayout>
                    <HeaderLogo exact to="/" activeStyle={{color: GRAYLIGHT}}>
                        {REACT_APP_TITLE}
                    </HeaderLogo>

                    <HeaderMenu />
                </HeaderLayout>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
