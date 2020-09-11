import React, { FC, ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button, Typography, IconButton } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Search, Menu } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { BigMenu } from './BigMenu';
import DrawerProvider from '../Providers/DrawerProvider';
import Notifications from './Notifications';
import TopDrawerMenu from './TopDrawerMenu';
import { getColor } from '../Helper/studentModule';
import useToggle from '../Hooks/useToggle';

const useStyles = makeStyles(({ transitions }) => ({
    root: {
        '& .navigation': {
            backgroundColor: ({ background, topMenuDrawer }: any) => (topMenuDrawer ? '#fff' : getColor(background)),
            transition: ({ topMenuDrawer }: any) =>
                !topMenuDrawer ? transitions.create(['background-color'], { duration: 400, }) : 'none',
        },
    },
    rootAbsolute: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1299,
    },
    container: {
        position: 'relative',
        zIndex: 1299,
    },
    rootColorWhite: {
        '& .navigation ul li a .link': {
            color: '#fff',
        },
        '& .navigation .icon-button .icon': {
            color: '#fff',
        },
        '& .navigation .heading': {
            color: '#fff',
        },
        '& .navigation ul li a button': {
            color: '#fff',
        },
    },
    button: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
}));

export interface propsType {
    name: string;
    link: string;
}

interface INavigationMenu {
    menuList?: propsType[];
    customClass?: string;
    showMenuOptions?: boolean;
    rootClassName?: string;
    containerClassName?: string;
    absolute?: boolean;
    colorWhite?: boolean;
    background?: 'primary' | 'secondary' | 'transparent' | 'brown';
    menuDrawerWidth?: number | string;
    menuDrawerAnimation?: boolean;
    MenuDrawerComponent?: ReactNode;
    TopDrawerMenuComponent?: ReactNode;
}

const NavigationMenu: FC<INavigationMenu> = ({
    menuList,
    customClass,
    showMenuOptions,
    rootClassName,
    containerClassName,
    absolute,
    colorWhite,
    children,
    background,
    menuDrawerWidth,
    menuDrawerAnimation,
    MenuDrawerComponent,
    TopDrawerMenuComponent,
}) => {
    const [notificationsDrawer, setNotificationsDrawer] = useState(false);
    const [menuDrawer, setMenuDrawer] = useState(false);
    const [topMenuDrawer, toggleTopMenuDrawer] = useToggle(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const classes = useStyles({ background, topMenuDrawer });

    const openNotificationDrawer = useCallback(() => {
        setNotificationsDrawer(true);
    }, []);

    const openMenuDrawer = useCallback(() => {
        if (TopDrawerMenuComponent) {
            return toggleTopMenuDrawer();
        }
        if (MenuDrawerComponent) {
            setMenuDrawer(true);
        }
    }, [MenuDrawerComponent, TopDrawerMenuComponent]);

    const closeDrawers = useCallback(() => {
        setNotificationsDrawer(false);
        setMenuDrawer(false);
    }, []);

    const renderMenuList = useMemo(() => {
        if (menuList) {
            return (
                <>
                    <li>
                        <IconButton className="icon-button" onClick={openMenuDrawer}>
                            <Menu className="icon" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className="icon-button" onClick={openNotificationDrawer}>
                            <NotificationsNoneIcon className="icon" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className="icon-button">
                            <Search className="icon" />
                        </IconButton>
                    </li>
                    {menuList.map((item: propsType, index) => (
                        <li key={index}>
                            <Link to={item.link}>
                                <Button disableRipple className={classNames('link', classes.button)}>
                                    {item.name}
                                </Button>
                            </Link>
                        </li>
                    ))}
                </>
            );
        }
        return (
            <>
                <li>
                    <Link to="/signup">
                        <Button disableRipple className="outline-rec">
                            Sign Up
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <Button disableRipple className={classes.button}>
                            Sign In
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/help-support">
                        <Button disableRipple className={classes.button}>
                            Help
                        </Button>
                    </Link>
                </li>
            </>
        );
    }, [classes, menuList, openNotificationDrawer, openMenuDrawer]);

    const drawerOptions = useMemo(() => {
        return {
            open: notificationsDrawer || menuDrawer,
            onClose: closeDrawers,
            drawerWidth: menuDrawer ? menuDrawerWidth : undefined,
            animation: menuDrawer ? menuDrawerAnimation : true,
            drawerContent: menuDrawer ? MenuDrawerComponent : <Notifications />,
        };
    }, [notificationsDrawer, menuDrawer, closeDrawers, notificationsDrawer, MenuDrawerComponent, menuDrawerWidth]);

    return (
        <DrawerProvider {...drawerOptions}>
            <div>
                <div
                    ref={containerRef}
                    className={classNames(classes.root, rootClassName, 'menu__type2__container', {
                        [classes.rootAbsolute]: absolute,
                        [classes.rootColorWhite]: colorWhite && !topMenuDrawer,
                    })}
                >
                    <div className={classNames(classes.container, containerClassName, 'navigation')}>
                        <ul className={customClass}>{renderMenuList}</ul>
                        <Typography className={classNames('heading', customClass)}>Glu</Typography>
                    </div>
                    {showMenuOptions && <BigMenu />}
                    {TopDrawerMenuComponent && (
                        <TopDrawerMenu open={topMenuDrawer} onClose={closeDrawers} containerRef={containerRef}>
                            {TopDrawerMenuComponent}
                        </TopDrawerMenu>
                    )}
                </div>
                <div>{children}</div>
            </div>
        </DrawerProvider>
    );
};

NavigationMenu.defaultProps = {
    background: 'primary',
};

export default NavigationMenu;
