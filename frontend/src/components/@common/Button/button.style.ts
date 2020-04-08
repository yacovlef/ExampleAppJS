import styled, { css } from 'styled-components';

import { IButtonStyleProps } from './button.type';

import { COLORDARK } from '../../../constants/color';

const ButtonStyle = styled.button<IButtonStyleProps>`
    border: 1px solid ${COLORDARK};
    border-radius: 2.5px;
    color: ${COLORDARK};
    background-color: transparent;

    cursor: pointer;

    &:hover {
        color: white;
        background-color: ${COLORDARK}
    }

    ${({ size }) => size === 'large' && css`
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
