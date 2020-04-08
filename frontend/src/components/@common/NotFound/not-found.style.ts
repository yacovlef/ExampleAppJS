import styled from 'styled-components';

import { COLORDARK } from '../../../constants/color';

const NotFoundLayout = styled.div`
    padding: 1rem;
    text-align: center;
`;

const NotFoundTitle = styled.span`
    color: ${COLORDARK};
    font-size: 1.5rem;
`;

export {
    NotFoundLayout,
    NotFoundTitle
};
