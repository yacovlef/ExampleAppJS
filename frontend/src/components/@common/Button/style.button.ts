import styled, { css } from 'styled-components';

import { IButtonStyleProps } from './buttom.type';

import { GRAYDARK } from '../../../constants/color';

const ButtonStyle = styled.button<IButtonStyleProps>`
    border: 1px solid ${GRAYDARK};
    border-radius: 2.5px;
    color: ${GRAYDARK};
    background-color: transparent;

    cursor: pointer;

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

export {
    ButtonStyle
};
