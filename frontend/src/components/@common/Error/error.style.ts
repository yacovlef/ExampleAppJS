import styled, { css } from 'styled-components';

import { IErrorProps } from './error.type';

import { GRAYDARK, RED } from '../../../constants/color';

const ErrorLayout = styled.div<IErrorProps>`
    text-align: center;

    font-size: 1.5rem;
    color: ${GRAYDARK};
    padding: 1rem 0;

    ${({ size }) => size === 'small' && css`
        font-size: 1rem;
        color: ${RED};
        padding: 0;
    `}
`;

const ErrorTitle = styled.span``;

export {
    ErrorLayout,
    ErrorTitle
};
