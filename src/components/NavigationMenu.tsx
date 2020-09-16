import React, { FC, ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { BigMenu } from './BigMenu';
import DrawerProvider from '../Providers/DrawerProvider';
import Notifications from './Notifications';
import TopDrawerMenu from './TopDrawerMenu';
import IconButton from './Button/IconButton';
import ButtonPrimary from './Button/ButtonPrimary';
import useToggle from '../Hooks/useToggle';
import { getColor } from '../Helper/styles';

const useStyles = makeStyles(({ transitions }) => ({
    root: {
        color: '#000',
    },
    rootColorWhite: {
        color: '#fff',
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
        backgroundColor: ({ background, topMenuDrawer }: any) => (topMenuDrawer ? '#fff' : getColor(background)),
        transition: ({ topMenuDrawer }: any) =>
            !topMenuDrawer ? transitions.create(['background-color'], { duration: 400 }) : 'none',
        padding: 'calc(1.6875rem - 12px) 3.125rem',
        paddingLeft: 'calc(3.125rem - 12px)',
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        marginBottom: 0,
    },
    listItem: {
        marginRight: '1.875rem',
        '&:last-child': {
            marginRight: 0,
        },
    },
    button: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
        color: 'inherit',
        '&:hover': {
            color: 'inherit',
            backgroundColor: 'transparent',
        },
    },
    iconButton: {
        color: 'inherit',
        fontSize: '1.25rem',
    },
    iconButtonLast: {
        marginRight: '0.625rem',
    },
    logo: {
        fontSize: '2.1875rem',
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
                        <IconButton className={classes.iconButton} onClick={openMenuDrawer}>
                            <i className="icon-Burger_Nav" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.iconButton} onClick={openNotificationDrawer}>
                            <i className="icon-Notifications_Nav" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classNames(classes.iconButton, classes.iconButtonLast)}>
                            <i className="icon-Search_Nav" />
                        </IconButton>
                    </li>
                    {menuList.map(({ link, name }: propsType, index) => (
                        <li key={index} className={classes.listItem}>
                            <ButtonPrimary className={classes.button} component={Link} to={link}>
                                {name}
                            </ButtonPrimary>
                        </li>
                    ))}
                </>
            );
        }
        return (
            <>
                <li className={classes.listItem}>
                    <ButtonPrimary variant="outlined" className={classes.button} component={Link} to="/signup">
                        Sign Up
                    </ButtonPrimary>
                </li>
                <li className={classes.listItem}>
                    <ButtonPrimary className={classes.button} component={Link} to="/login">
                        Sign In
                    </ButtonPrimary>
                </li>
                <li className={classes.listItem}>
                    <ButtonPrimary className={classes.button} component={Link} to="/help-support">
                        Help
                    </ButtonPrimary>
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
                    className={classNames(classes.root, rootClassName, {
                        [classes.rootAbsolute]: absolute,
                        [classes.rootColorWhite]: colorWhite && !topMenuDrawer,
                    })}
                >
                    <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                        className={classNames(classes.container, containerClassName)}
                    >
                        <ul className={classNames(classes.list, customClass)}>{renderMenuList}</ul>
                        <Typography className={classNames(classes.logo, customClass)}>Glu</Typography>
                    </Grid>
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
