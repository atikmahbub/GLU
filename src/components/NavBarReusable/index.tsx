import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, IconButton } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { Search, Menu } from '@material-ui/icons';
import { BigMenu } from '../BigMenu'
import './styles.scss';

export interface propsType {
    name: string;
    link: string;
}

interface props {
    menuList?: propsType[];
    customClass?: string;
    handler?: () => void;
    showMenuOptions?: boolean;
}
const NavBarReusable: React.FunctionComponent<props> = ({ menuList, handler, customClass, showMenuOptions }) => {
    const getMenuList = () => {
        if (menuList) {
            return (
                <>
                    <li>
                        <IconButton className="nav-icon-button" onClick={handler}>
                            <Menu className="icon-breadcrumb" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className="nav-icon-button">
                            <Search className="icon-search" />
                        </IconButton>
                    </li>
                    {menuList.map((item: propsType) => (
                        <li key={uuidv4()}>
                            <Link to={item.link}>
                                <Button className="link">{item.name}</Button>
                            </Link>
                        </li>
                    ))
                    }
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
        <div className="menu__navigation__container">
            <div className="navigation__overlap">
                <ul>{getMenuList()}</ul>
                <Typography className={`heading ${customClass}`}>Glu</Typography>
            </div>
            {showMenuOptions && <BigMenu />}

        </div>
    );
};

export default NavBarReusable;
