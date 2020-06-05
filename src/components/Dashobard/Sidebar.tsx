import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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
                <Typography className="slogan">Great learning umbrella.</Typography>
                <div className="bottom-line"></div>
            </div>
            <ul>
                {sidebarMenu.map((menu: any, index: number) => (
                    <li
                        onClick={() => {
                            handleSubMenu(index);
                        }}>
                        <Button
                            onClick={() => {
                                !menu.isExpandable && routes.push(menu.routeName);
                            }}>
                            {menu.icon}
                            {menu.menuName}
                        </Button>
                        <ul style={{ display: menu.isOpen ? 'block' : 'none' }}>
                            {menu.menuList.map((submenu: sidebarItems, i: number) => (
                                <li onClick={() => {}}>
                                    <Button onClick={() => !submenu.isExpandable && routes.push(submenu.routeName)}>
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
