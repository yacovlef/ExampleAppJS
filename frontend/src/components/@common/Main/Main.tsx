import React, { FC } from 'react';

import Container from '../Container';

import { MainWrapper } from './main.style';

import { IProps } from './main.type';

const Main: FC<IProps> = ({ children }) => {
    return (
        <MainWrapper>
            <Container>
                {children}
            </Container>
        </MainWrapper>
    );
};

export default Main;
