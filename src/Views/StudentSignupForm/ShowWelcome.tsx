import { makeStyles, Typography } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import NavigationMenu from '../../components/NavigationMenu';
import WelcomeText from '../../components/WelcomeText';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    title: {
        fontSize: '1rem',
        color: colors.white,
        marginLeft: '1.9rem'
    },
    link: {
        color: '#B4CBFF',
        marginLeft: '2px'
    },
});

const ShowWelcome = () => {
    const classes = useStyles();
    const routes = useLocation();
    const [name, setName] = useState('');
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any)?.state?.hasOwnProperty('userName')) {
                setName((routes as any).state.userName);
            }
        }
    }, []);
    return (
        <NavigationMenu background="transparent" colorWhite absolute>
            <div className="signup__setup welcome__page">
                <WelcomeText title={`Thank You ${name}!`} />
            </div>
            <Typography className={classes.title}>
                Account verified. Get started and 
                <Link to="/login" className={classes.link}>
                    Sign In
                </Link>
            </Typography>
        </NavigationMenu>
    );
};

export default ShowWelcome;
