import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button, Typography, IconButton } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Search, Menu } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { BigMenu } from './BigMenu';
import DrawerProvider from '../Providers/DrawerProvider';
import Notifications from './Notifications';

const useStyles = makeStyles({
    rootAbsolute: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
    },
    rootTransparent: {
        '& .navigation': {
            backgroundColor: 'transparent',
        }
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
    handler?: () => void;
    showMenuOptions?: boolean;
    rootClassName?: string;
    containerClassName?: string;
    absolute?: boolean;
    transparent?: boolean;
    colorWhite?: boolean;
}

const NavigationMenu: React.FunctionComponent<props> = ({
    menuList,
    handler,
    customClass,
    showMenuOptions,
    rootClassName,
    containerClassName,
    absolute,
    transparent,
    colorWhite,
    children,
}) => {
    const classes = useStyles();
    const [notificationsDrawer, setNotificationsDrawer] = useState(false);

    const toggleNotificationDrawer = useCallback(() => {
        setNotificationsDrawer((prevState) => !prevState);
    }, []);

    const renderMenuList = useMemo(() => {
        if (menuList) {
            return (
                <>
                    <li>
                        <IconButton className="icon-button" onClick={handler}>
                            <Menu className="icon" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className="icon-button" onClick={toggleNotificationDrawer}>
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
    }, [classes, menuList, handler, toggleNotificationDrawer]);

    return (
        <DrawerProvider open={notificationsDrawer} onClose={toggleNotificationDrawer} drawerContent={<Notifications />}>
            <div>
                <div
                    className={classNames(rootClassName, 'menu__type2__container', {
                        [classes.rootAbsolute]: absolute,
                        [classes.rootTransparent]: transparent,
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

export default NavigationMenu;
