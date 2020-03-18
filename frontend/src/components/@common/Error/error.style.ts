import styled, { css } from 'styled-components';

import { IErrorProps } from './error.type';

import { GRAYDARK, GRAY } from '../../../constants/color';

const ErrorStyle = styled.div<IErrorProps>`
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;

    color: ${GRAYDARK};
    font-size: 3rem;

    ${({ size }) => size === 'small' && css`
        width: 1.25rem;
        height: 1.25rem;

        font-size: 0.9rem;
    `}

    border: 1px solid ${GRAY};
    border-radius: 50%;
`;

export {
    ErrorStyle
};
