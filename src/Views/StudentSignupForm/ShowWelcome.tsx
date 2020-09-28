import { makeStyles, Typography } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import NavigationMenu from '../../components/NavigationMenu';
import WelcomeText from '../../components/WelcomeText';
import { sendVerififcationEmailAPIcall } from '../../Redux/Actions/registerAction';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    title: {
        fontSize: '1rem',
        color: colors.white,
        marginLeft: '1.9rem',
    },
    link: {
        color: '#B4CBFF',
        marginLeft: '2px',
    },
});

const ShowWelcome = () => {
    const classes = useStyles();
    const routes = useLocation();
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any)?.state?.hasOwnProperty('userName')) {
                const getState = (routes as any).state;
                setName(getState?.userName);
                if (getState?.emailData?.whoIam === 'parent') {
                    getState?.emailData?.child.map((item: any, i: number) => {
                        const data = {
                            email: item.email,
                            token: getState?.childToken[i],
                            parent: {
                                name: getState?.userName,
                            },
                        };
                        dispatch(sendVerififcationEmailAPIcall(data));
                    });
                } else {
                    const getToken = getState?.emailData?.token.split('Bearer ')[1];
                    const data = {
                        email: getState?.emailData?.email,
                        token: getToken,
                    };
                    dispatch(sendVerififcationEmailAPIcall(data));
                }
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
