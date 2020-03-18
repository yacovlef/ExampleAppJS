import React, { FC } from 'react';

import Loading from '../Loading';
import Error from '../Error';

import { IButtonProps } from './buttom.type';

import { ButtonStyle } from './style.button';

const Button: FC<IButtonProps> = ({ loading, error, children, ...props }) => {

    return (
        <ButtonStyle {...props}>
            {loading ? (
                <Loading size='small' />
            ) : null}

            {error ? (
                <Error size='small' />
            ) : null}

            {!loading && !error ? (
                children
            ) : null}
        </ButtonStyle>
    );       
}

export default Button;
