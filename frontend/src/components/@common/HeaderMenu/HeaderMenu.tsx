import React, { FC, useState } from 'react';

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

    const handleHeaderMenuToggle = () => {
        setHeaderMenuToggle((state) => !state);
    }

    const renderHeaderMenu = headerMenuListData.map(({label, to}: IHeaderMenuListData, index: number) => {
        return (
            <HeaderMenuItem key={index}>
                <HeaderMenuItemLink to={to} onClick={handleHeaderMenuToggle}>{label}</HeaderMenuItemLink>
            </HeaderMenuItem>
        )
    });

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
