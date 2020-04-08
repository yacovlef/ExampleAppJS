import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { COLORDARK, COLOR } from '../../../constants/color';

const HeaderWrapper = styled.header`
    background-color: ${COLORDARK};

    flex: 0 0 auto;
`;

const HeaderLayout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`;

const HeaderLogo = styled(NavLink)`
    text-decoration: none;
    text-align: center;
    font-size: 2rem;
    color: ${COLOR};
`;

export {
    HeaderWrapper,
    HeaderLayout,
    HeaderLogo
}
