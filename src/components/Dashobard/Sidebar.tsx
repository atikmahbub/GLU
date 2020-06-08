import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ArrowForwardIos } from '@material-ui/icons';

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
    const {url} = useRouteMatch();
    const [sidebarMenu, setSidebarMenu] = useState(NavigationMenu);
    const handleSubMenu = (index: number) => {
        let menu = [...sidebarMenu];
        menu[index].isOpen = !menu[index].isOpen;
        console.log(index, menu);
        setSidebarMenu(menu);
    };

    return (
        <div className="dashboard-sidebar">
            <div className="logo-container">
                <Typography variant="h3" className="logo">
                    Glu.
                </Typography>
                <div className="bottom-line"></div>
            </div>
            <ul>
                {sidebarMenu.map((menu: any, index: number) => (
                    <li
                        onClick={() => {
                            handleSubMenu(index);
                        }}>
                        <Button
                            startIcon={menu.icon}
                            onClick={() => {
                                !menu.isExpandable && routes.push({pathname:menu.routeName, state:{icon: String(menu.icon), breadcrumb:menu.routeName} });
                            }}>
                            {menu.menuName}
                            {menu.isExpandable ? (
                                <ArrowForwardIos
                                    style={{
                                        transform: menu.isOpen ? 'rotate(90deg)' : 'rotate(0)',
                                        transition: 'All 0.2s',
                                    }}
                                    className="arrows"
                                />
                            ) : null}
                        </Button>
                        <ul style={{ display: menu.isOpen ? 'block' : 'none' }}>
                            {menu.menuList.map((submenu: sidebarItems) => (
                                <li onClick={() => {}}>
                                    <Button onClick={() => !submenu.isExpandable && routes.push({pathname:`${url}${submenu.routeName}`, state:{icon: String(menu.icon), breadcrumb: `${url}${submenu.routeName}`} })}>
                                        {submenu.menuName}
                                    </Button>
                                    <ul style={{ display: 'none' }}>
                                        {submenu.menuList.map((childSubmenu) => (
                                            <li>
                                                <Button
                                                    onClick={() =>
                                                        !childSubmenu.isExpandable &&
                                                        routes.push(childSubmenu.routeName)
                                                    }>
                                                    {childSubmenu.menuName}
                                                </Button>
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
