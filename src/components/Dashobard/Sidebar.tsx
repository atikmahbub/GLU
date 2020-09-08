import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { ArrowForwardIos } from '@material-ui/icons';
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../../Styles/colors';

export interface sidebarItems {
    menuName: string;
    icon: HTMLElement;
    isExpandable: boolean;
    isOpen: boolean;
    menuList: [
        {
            menuName: string;
            icon: HTMLElement;
            isExpandable: boolean;
            routeName: string;
        }
    ];
    routeName: string;
}
interface sidebarProps {
    NavigationMenu: sidebarItems[];
}
const Sidebar: React.FunctionComponent<sidebarProps> = ({ NavigationMenu }) => {
    const routes = useHistory();
    const { url } = useRouteMatch();
    const { pathname } = useLocation();
    const [sidebarMenu, setSidebarMenu] = useState(NavigationMenu);

    const handleSubMenu = (index: number) => {
        let menu = [...sidebarMenu];
        menu[index].isOpen = !menu[index].isOpen;
        setSidebarMenu(menu);
    };

    const handleSubSubMenu = (index: number) => {
        let menu: any[] = [...sidebarMenu];
        menu[index].menuList[0].isOpen = !menu[index].menuList[0].isOpen;
        setSidebarMenu(menu);
    };

    const handleArrowAngle = (menu: any, type: string): React.ReactNode => {
        if (menu.isExpandable) {
            return (
                <ArrowForwardIos
                    style={{
                        transform: menu.isOpen ? 'rotate(90deg)' : 'rotate(0)',
                        transition: 'All 0.2s',
                        fontSize: type === 'main' ? 15 : 10,
                    }}
                    className="arrows"
                />
            );
        } else {
            return null;
        }
    };

    return (
        <div className="dashboard-sidebar">
            <div className="logo-container">
                <Typography variant="h3" className="logo">
                    Glu
                </Typography>
            </div>
            <ul>
                {sidebarMenu.map((menu: any, index: number) => (
                    <li key={uuidv4()}>
                        <div
                            onClick={() => {
                                !menu.isExpandable &&
                                    routes.push({
                                        pathname: menu.routeName,
                                        state: { breadcrumb: menu.routeName },
                                    });
                                handleSubMenu(index);
                            }}>
                            {menu.menuName}
                            {handleArrowAngle(menu, 'main')}
                        </div>
                        <ul style={{ display: menu.isOpen ? 'block' : 'none' }}>
                            {menu.menuList.map((submenu: sidebarItems) => (
                                <li
                                    key={uuidv4()}
                                    style={{
                                        backgroundColor:
                                            pathname === `${url}${submenu.routeName}` ? '#f3f7ff' : '#fff',
                                    }}>
                                    <div
                                        onClick={() => {
                                            !submenu.isExpandable &&
                                                routes.push({
                                                    pathname: `${url}${submenu.routeName}`,
                                                    state: {
                                                        breadcrumb: `${url}${submenu.routeName}`,
                                                    },
                                                });
                                            handleSubSubMenu(index);
                                        }}>
                                        {submenu.menuName}
                                        {submenu.isExpandable && handleArrowAngle(submenu, 'sub')}
                                    </div>
                                    <ul style={{ display: submenu.isOpen ? 'block' : 'none' }}>
                                        {submenu.menuList.map((childSubmenu) => (
                                            <li
                                                key={uuidv4()}
                                                style={{
                                                    backgroundColor:
                                                        pathname === `${url}${childSubmenu.routeName}`
                                                            ? 'rgba(0,0,0,0.23)'
                                                            : '',
                                                }}>
                                                <div
                                                    onClick={() =>
                                                        !childSubmenu.isExpandable &&
                                                        routes.push({
                                                            pathname: `${url}${childSubmenu.routeName}`,
                                                            state: {
                                                                breadcrumb: `${url}${childSubmenu.routeName}`,
                                                            },
                                                        })
                                                    }>
                                                    {childSubmenu.menuName}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
