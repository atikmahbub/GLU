import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import { useLocation } from 'react-router';

const EmailVerification = () => {
    const [token, setToken] = useState('');
    const route = useLocation();
    useEffect(() => {
        const getToken = route.search.split('ref=');
        if (getToken[1]) {
            setToken(getToken[1]);
        }
    });
    return (
        <div className="email_verification_container">
            <div className="logo-container">
                <Typography className="logo">Glu</Typography>
            </div>
            <div className="center_content">
                <Typography variant="h1" className="heading">
                    Subscription Verified
                </Typography>
                <Typography variant="h1" className="sub-heading">
                    Your email address has been confirmed.
                </Typography>
            </div>
            <div className="footer">
                <MadeBy showTC={true} />
            </div>
        </div>
    );
};

export default EmailVerification;
