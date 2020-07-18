import React from 'react';
import { IconButton, Button, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';


interface props{
    handleMenu: () => void
}
const MenuContainer: React.FunctionComponent<props> = ({handleMenu}) => {
    const routes = useHistory();
    const handleSignin = () => {
        routes.push('/login')
    }
    const handleSignup = () => {
        routes.push('/signup')
    }
    return (
        <div className="menus-container">
            <div className="left">
                <ul>
                    <li>
                        <IconButton onClick={handleMenu}>
                            <Menu />
                        </IconButton>
                    </li>
                    <li>
                        <Button onClick={handleSignin}>Sign In</Button>
                    </li>
                    <li>
                        <Button onClick={handleSignup}>Sign Up</Button>
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
