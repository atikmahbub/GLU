import React from 'react';
import { IconButton, Button, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const MenuContainer: React.FunctionComponent = () => {
    return (
        <div className="menus-container">
            <div className="left">
                <ul>
                    <li>
                        <IconButton>
                            <Menu />
                        </IconButton>
                    </li>
                    <li>
                        <Button>Sign In</Button>
                    </li>
                    <li>
                        <Button>Sign Up</Button>
                    </li>
                </ul>
            </div>
            <div className="right">
                <Typography className="title">Glu</Typography>
            </div>
        </div>
    );
};

export default MenuContainer;
