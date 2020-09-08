import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button, Typography, IconButton } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Search, Menu } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { BigMenu } from './BigMenu';
import DrawerProvider from '../Providers/DrawerProvider';
import Notifications from './Notifications';

const getBackground = (background: string) => {
    switch (background) {
        case 'primary':
            return '#fff'
        case 'secondary':
            return  '#F7F7F7'
        case 'transparent':
            return 'transparent'
        case 'brown':
            return '#76726E'
        default:
            return '#fff'
    }
}
import { getColor } from '../Helper/studentModule';

const useStyles = makeStyles({
    root: {
        '& .navigation': {
            backgroundColor: ({ background }: any) => getColor(background)
        }
    },
    rootAbsolute: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
    },
    rootColorWhite: {
        '& .navigation ul li a .link': {
            color: '#fff'
        },
        '& .navigation .icon-button .icon': {
            color: '#fff'
        },
        '& .navigation .heading': {
            color: '#fff'
        },
        '& .navigation ul li a button': {
            color: "#fff"
        }
    },
    button: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
});

export interface propsType {
    name: string;
    link: string;
}

interface props {
    menuList?: propsType[];
    customClass?: string;
    showMenuOptions?: boolean;
    rootClassName?: string;
    containerClassName?: string;
    absolute?: boolean;
    colorWhite?: boolean;
    background?: 'primary' | 'secondary' | 'transparent',
    menuDrawerWidth?: number | string;
    menuDrawerAnimation?: boolean;
    MenuDrawerComponent?: ReactNode;
}

const NavigationMenu: React.FunctionComponent<props> = ({
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
    MenuDrawerComponent
}) => {
    const classes = useStyles({ background });
    const [notificationsDrawer, setNotificationsDrawer] = useState(false);
    const [menuDrawer, setMenuDrawer] = useState(false)

    const openNotificationDrawer = useCallback(() => {
        setNotificationsDrawer(true);
    }, [])

    const openMenuDrawer = useCallback(() => {
        MenuDrawerComponent && setMenuDrawer(true)
    }, [MenuDrawerComponent])

    const closeDrawers = useCallback(() => {
        setNotificationsDrawer(false);
        setMenuDrawer(false);
    }, [])

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
            drawerContent: menuDrawer ? MenuDrawerComponent :  <Notifications />
        }
    }, [notificationsDrawer, menuDrawer, closeDrawers, notificationsDrawer, MenuDrawerComponent, menuDrawerWidth])

    return (
        <DrawerProvider {...drawerOptions}>
            <div>
                <div
                    className={classNames(classes.root, rootClassName, 'menu__type2__container', {
                        [classes.rootAbsolute]: absolute,
                        [classes.rootColorWhite]: colorWhite
                    })}
                >
                    <div className={classNames(containerClassName, 'navigation')}>
                        <ul className={customClass}>{renderMenuList}</ul>
                        <Typography className={`heading ${customClass}`}>Glu</Typography>
                    </div>
                    {showMenuOptions && <BigMenu />}
                </div>
                <div>{children}</div>
            </div>
        </DrawerProvider>
    );
};

NavigationMenu.defaultProps = {
    background: 'primary'
}

export default NavigationMenu;
