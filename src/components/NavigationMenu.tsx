import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import { Button, Typography, IconButton, Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { Search, Menu } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { BigMenu } from './BigMenu';
import commonImg from '../Assets/images';

export interface propsType {
    name: string;
    link: string;
}

interface props {
    menuList?: propsType[];
    customClass?: string;
    handler?: () => void;
    handlerNotification?: () => void;
    showMenuOptions?: boolean;
    rootClassName?: string;
    containerClassName?: string
}
const NavigationMenu: React.FunctionComponent<props> = ({ menuList, handler, customClass, showMenuOptions, rootClassName, containerClassName, handlerNotification }) => {
    const getMenuList = () => {
        if (menuList) {
            return (
                <>
                    <li>
                        <IconButton className="icon-button" onClick={handler}>
                            <Menu className="icon" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className="icon-button" onClick={handlerNotification}>
                            <NotificationsNoneIcon className="icon" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className="icon-button">
                            <Search className="icon" />
                        </IconButton>
                    </li>

                    {menuList.map((item: propsType) => (
                        <li key={uuidv4()}>
                            <Link to={item.link}>
                                <Button className="link">{item.name}</Button>
                            </Link>
                        </li>
                    ))}
                </>
            );
        } else {
            return (
                <>
                    <li>
                        <Link to="/signup">
                            <Button className="outline-rec">Sign Up</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <Button>Sign In</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/help-support">
                            <Button>Help</Button>
                        </Link>
                    </li>
                </>
            );
        }
    };
    return (
        <div className={classNames(rootClassName, 'menu__type2__container')}>
            <div className={classNames(containerClassName, 'navigation')}>
                <ul className={customClass}>{getMenuList()}</ul>
                <Typography className={`heading ${customClass}`}>Glu</Typography>
            </div>
            {showMenuOptions && <BigMenu />}
        </div>
    );
};

export default NavigationMenu;
