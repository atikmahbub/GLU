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
}
const NavigationMenu: React.FunctionComponent<props> = ({ menuList }) => {
    const getMenuList = () => {
        if (menuList) {
            return (
                <>
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
                        <Link to="">
                            <Button className="outline-rec">Sign Up</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <Button>Sign In</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
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
                <ul>
                    <li>
                        <IconButton className="icon-button">
                            <Menu className="icon" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className="icon-button">
                            <Search className="icon" />
                        </IconButton>
                    </li>
                    {getMenuList()}
                </ul>
                <Typography className="heading">Glu</Typography>
            </div>
        </div>
    );
};

export default NavigationMenu;
