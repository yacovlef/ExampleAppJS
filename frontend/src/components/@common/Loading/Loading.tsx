import styled, { css, keyframes } from 'styled-components';

import { ILoadingProps } from './loading.type';

import { COLORLIGHT, COLORDARK } from '../../../constants/color';

const loadingAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Loading = styled.div<ILoadingProps>`
    margin: 0 auto;

    width: 100px;
    height: 100px;

    ${({ size }) => size === 'small' && css`
        width: 1.25rem;
        height: 1.25rem;
    `}

    border: 1px solid ${COLORLIGHT};
    border-top: 1px solid ${COLORDARK};
    border-radius: 50%;

    animation: ${loadingAnimation} 1s linear infinite;
`;

export default Loading;
