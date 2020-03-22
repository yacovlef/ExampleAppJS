import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IAuthRootState } from '../../Auth/auth.type';

import { authLogoutAction } from '../../Auth/auth.action';

import { IHeaderMenuListData } from './header-menu.type'

import { headerMenuListData } from './header.menu.data';

import {
    HeaderMenuLayout,
    HeaderMenuToggleOpen,
    HeaderMenuToggleOpenImage,
    HeaderMenuToggleClose,
    HeaderMenuToggleCloseImage,
    HeaderMenuList,
    HeaderMenuItem,
    HeaderMenuItemLink
} from './header-menu.style';

const HeaderMenu: FC = () => {
    const [headerMenuToggle, setHeaderMenuToggle] = useState(false);

    const { user } = useSelector(({ auth }: IAuthRootState) => auth);

    const dispatch = useDispatch();

    const handleHeaderMenuToggle = () => {
        setHeaderMenuToggle((state) => !state);
    }

    const renderHeaderMenu = user
        ? headerMenuListData.map(({label, to}: IHeaderMenuListData, index: number) => {
            return (
                <HeaderMenuItem key={index}>
                    <HeaderMenuItemLink to={to} onClick={handleHeaderMenuToggle}>{label}</HeaderMenuItemLink>
                </HeaderMenuItem>
            )
        }) : null;

    if (renderHeaderMenu && user) {
        renderHeaderMenu.push(
            <HeaderMenuItem key={renderHeaderMenu.length}>
                <HeaderMenuItemLink to="#" onClick={() => {
                    dispatch(authLogoutAction());
                    handleHeaderMenuToggle()}}>{user.email} (Выход)</HeaderMenuItemLink>
            </HeaderMenuItem>
        );
    }

    return (
        <HeaderMenuLayout>
            <HeaderMenuToggleOpen onClick={handleHeaderMenuToggle}>
                <HeaderMenuToggleOpenImage />
            </HeaderMenuToggleOpen>

            <HeaderMenuList headerMenuToggle={headerMenuToggle}>
                <HeaderMenuToggleClose onClick={handleHeaderMenuToggle}>
                    <HeaderMenuToggleCloseImage />
                </HeaderMenuToggleClose>

                {renderHeaderMenu}
            </HeaderMenuList>
        </HeaderMenuLayout>
    );
}

export default HeaderMenu;
