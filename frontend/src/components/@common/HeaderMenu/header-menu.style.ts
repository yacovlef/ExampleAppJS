import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { IHeaderMenuListProps } from './header-menu.type';

import { ReactComponent as MenuOpen } from '../../../images/menu_open.svg';
import { ReactComponent as MenuClose } from '../../../images/close.svg';

import { GRAYDARK, GRAY } from '../../../constants/color';

const HeaderMenuLayout = styled.nav``;

const HeaderMenuToggleOpen = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
`;

const HeaderMenuToggleOpenImage = styled(MenuOpen)`
    cursor: pointer;
    
    width: 3rem;
    height: 3rem;
    fill: ${GRAY};
`;

const HeaderMenuToggleClose = styled.div`
    margin: 0.5rem;

    position: fixed;
    top: 10px;
    right: 0;

    @media (min-width: 768px) {
        display: none;
    }
`;

const HeaderMenuToggleCloseImage = styled(MenuClose)`
    cursor: pointer;
    
    width: 3rem;
    height: 3rem;
    fill: ${GRAY};
`;

const HeaderMenuList = styled.ul<IHeaderMenuListProps>`
    display: flex;

    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        ${({ headerMenuToggle }) => !headerMenuToggle && css`
            display: none;
        `}

        padding-top: 3rem;

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        
        flex-direction: column;

        background-color: ${GRAYDARK}
    }
`;

const HeaderMenuItem = styled.li`
    display: block;
    padding: 0 0.5rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        text-align: center;
        padding: 0.5rem 0;
        font-size: 2rem;
    }
`;

const HeaderMenuItemLink = styled(NavLink)`
    color: ${GRAY};
    text-decoration: none;
`;

export {
    HeaderMenuLayout,
    HeaderMenuToggleOpen,
    HeaderMenuToggleOpenImage,
    HeaderMenuToggleClose,
    HeaderMenuToggleCloseImage,
    HeaderMenuList,
    HeaderMenuItem,
    HeaderMenuItemLink
}
