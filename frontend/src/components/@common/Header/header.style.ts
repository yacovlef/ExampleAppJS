import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { GRAYDARK, GRAY } from '../../../constants/color';

const HeaderWrapper = styled.header`
    background-color: ${GRAYDARK};

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
    font-size: 3rem;
    color: ${GRAY};
`;

export {
    HeaderWrapper,
    HeaderLayout,
    HeaderLogo
}
