import styled, { css, keyframes } from 'styled-components';

import { ISpinnerProps } from './spinner.type';

import { GRAYLIGHT, GRAYDARK } from '../../../constants/color';

const loadingSpinnerAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div<ISpinnerProps>`
    width: 100px;
    height: 100px;

    ${({ size }) => size === 'small' && css`
        width: 16px;
        height: 16px;
    `}

    border: 1px solid ${GRAYLIGHT};
    border-top: 1px solid ${GRAYDARK};
    border-radius: 50%;

    animation: ${loadingSpinnerAnimation} 1s linear infinite;
`;

export default Spinner;
