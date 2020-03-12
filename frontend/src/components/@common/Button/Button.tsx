import styled, { css } from 'styled-components';

import { IButtonProps } from './buttom.type';

import { GRAYDARK } from '../../../constants/color';

const Button = styled.button<IButtonProps>`
    border: 1px solid ${GRAYDARK};
    border-radius: 2.5px;
    color: ${GRAYDARK};
    background-color: transparent;

    &:hover {
        color: white;
        background-color: ${GRAYDARK}
    }

    ${({ size }) => size === 'large' && css`
        font-size: 1.25rem;
        padding: 0.5rem;
    `}

    ${({ block }) => block && css`
        width: 100%;
    `}

    @media (max-width: 768px) {
        ${({ responsive }) => responsive && css`
            width: 100%;
        `}
    }
`;

export default Button;
