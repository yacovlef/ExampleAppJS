import React, { FC } from 'react';

import Spinner from '../Spinner';

import { IButtonProps } from './buttom.type';

import { ButtonStyle } from './style.button';

const Button: FC<IButtonProps> = ({ loading, children, ...props }) => {
    const renderChildren = loading ? <Spinner size='small' /> : children;

    return <ButtonStyle {...props}>{renderChildren}</ButtonStyle>;
}

export default Button;
