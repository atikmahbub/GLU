import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, IconButton } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { Search, Menu } from '@material-ui/icons';

export interface propsType {
    name: string;
    link: string;
}

interface props {
    menuList?: propsType[];
    handler?: ()=> void
}
const NavigationMenu: React.FunctionComponent<props> = ({ menuList, handler }) => {
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
                        <IconButton className="icon-button">
                            <Search className="icon" />
                        </IconButton>
                    </li>
                    {menuList.map((item: propsType) => (
                        <li key={uuidv4()}>
                            <Link to={item.link}>
                                <Button>{item.name}</Button>
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
        <div className="menu__type2__container">
            <div className="navigation">
                <ul>{getMenuList()}</ul>
                <Typography className="heading">Glu</Typography>
            </div>
        </div>
    );
};

export default NavigationMenu;
