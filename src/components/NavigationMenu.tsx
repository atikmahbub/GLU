import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

const NavigationMenu: React.FunctionComponent = () => {
    return (
        <div className="menu__type2__container">
        <div className="navigation">
            <ul>
                <li>
                    <Link to=""><Button className="outline-rec">Sign Up</Button></Link>
                </li>
                <li>
                    <Link to=""><Button>Sign In</Button></Link>
                </li>
                <li>
                    <Link to=""><Button>Help</Button></Link>
                </li>
            </ul>
            <Typography className="heading">Glu</Typography>
        </div>
    </div>
    );
}

export default NavigationMenu;
