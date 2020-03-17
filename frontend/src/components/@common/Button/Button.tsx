import React, { FC } from 'react';

import Loading from '../Loading';

import { IButtonProps } from './buttom.type';

import { ButtonStyle } from './style.button';

const Button: FC<IButtonProps> = ({ loading, children, ...props }) => {
    return (
        <ButtonStyle {...props}>
            {loading ? (
                <Loading size='small' />
            ) : children}
        </ButtonStyle>
    );       
}

export default Button;
