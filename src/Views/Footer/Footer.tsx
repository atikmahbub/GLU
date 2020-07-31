import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
                        <Typography className="title">info@glulearning.com</Typography>
                        <Typography className="title">info@glulearning.com</Typography>
                        <Typography className="title">+971 4 554 0350</Typography>
                    </div>
                </div>
                <div className="col-md-3">
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
            <div className="row">
                <div className="col-md-6">
                    <Typography className="build-by">
                        Made &nbsp;by&nbsp; <span>Six</span> &nbsp;&nbsp;&nbsp; Build&nbsp; by&nbsp;
                        <span>someone</span>
                    </Typography>
                </div>
                <div className="col-md-6">
                    <Typography className="glu">Glu 2020</Typography>
                </div>
            </div>
        </div>
    );
};

export default Footer;
