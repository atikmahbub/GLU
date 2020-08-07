import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import MadeBy from './MadeBy';
import { Icons } from '../../Assets/Icons';

const Footer: React.FunctionComponent = () => {
    const [email, setEmail] = useState('');
    const [isVerified, setEmailVerify] = useState(false);
    const [isEmailEnter, setEmailEnter] = useState('');

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailEnter(e.target.value);
        let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailReg.test(e.target.value)) {
            setEmail(e.target.value);
            setEmailVerify(true);
        } else {
            setEmailVerify(false);
        }
    };

    return (
        <div className="footer">
            <hr className="line" />
            <div className="row">
                <div className="col-md-8 col-lg-5 mr-auto">
                    <div className="email-container">
                        <Typography className="join-glu">Join the Glu news</Typography>
                        <input
                            type="text"
                            className="email"
                            placeholder="Email Address"
                            onChange={handleEmail}
                            style={
                                !isEmailEnter
                                    ? {}
                                    : isVerified
                                    ? { borderBottom: '1px solid #2ecc71' }
                                    : { borderBottom: '1px solid #e74c3c' }
                            }
                        />
                        <Typography className="subscribe">Subscribe</Typography>
                    </div>
                </div>
                <div className="col-md-3 col-lg-4">
                    <div className="address-container address-padding">
                        <Typography className="title">Contact</Typography>
                        <Typography className="title">info@glulearning.com</Typography>
                        <Typography className="title">+971 4 554 0350</Typography>
                    </div>
                </div>
                <div className="col-md-1 col-lg-2 position-relative">
                    <div className="three__piller__container">
                        <img src={Icons.threePiller} alt="three piller" />
                    </div>
                    {/* <div className="address-container">
                        <Link className="links" to="">
                            Insagram
                        </Link>
                        <Link className="links" to="">
                            Facebook
                        </Link>
                        <Link className="links" to="">
                            Twitter
                        </Link>
                    </div> */}
                </div>
            </div>
            <div className="breaker"></div>
            <MadeBy />
        </div>
    );
};

export default Footer;
