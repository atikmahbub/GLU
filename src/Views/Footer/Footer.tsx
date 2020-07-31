import React from 'react';
import { Typography, Button } from '@material-ui/core';
import MadeBy from './MadeBy';
import commonImg from '../../Assets/images';
import { Icons } from '../../Assets/Icons';

const Footer: React.FunctionComponent = () => {
    return (
        <div className="footer">
            <hr className="line" />
            <div className="row">
                <div className="col-md-5">
                    <div className="email-container">
                        <Typography className="join-glu">Join the Glu news</Typography>
                        <input type="text" className="email" placeholder="Emai Address" />
                        <Button className="subscribe">Subscribe</Button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="address-container address-padding">
                        <Typography className="title">Contact</Typography>
                        <Typography className="title">info@glulearning.com</Typography>
                        <Typography className="title">+971 4 554 0350</Typography>
                    </div>
                </div>
                <div className="col-md-3 position-relative">
                    <div className="three__piller__container">
                        <img src={Icons.threePiller} alt="three piller"/>
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
            <MadeBy/>
        </div>
    );
};

export default Footer;
