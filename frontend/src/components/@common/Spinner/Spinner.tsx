import styled, { keyframes } from 'styled-components';

import { GRAYLIGHT, GRAYDARK } from '../../../constants/color';

const loadingSpinnerAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
    width: 100px;
    height: 100px;

    border: 1px solid ${GRAYLIGHT};
    border-top: 1px solid ${GRAYDARK};
    border-radius: 50%;

    animation: ${loadingSpinnerAnimation} 1s linear infinite;
`;

export default Spinner;
