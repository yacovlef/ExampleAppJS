import styled, { css } from 'styled-components';

import { IErrorProps } from './error.type';

import { GRAYDARK, RED } from '../../../constants/color';

const ErrorLayout = styled.div`
    text-align: center;
`;

const ErrorTitle = styled.span<IErrorProps>`
    color: ${GRAYDARK};
    font-size: 2rem;

    ${({ size }) => size === 'small' && css`
        color: ${RED};
        font-size: 1.25rem;
    `}
`;

export {
    ErrorLayout,
    ErrorTitle
};
