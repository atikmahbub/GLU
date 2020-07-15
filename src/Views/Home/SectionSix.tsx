import React from 'react';
import { Typography, Button } from '@material-ui/core';

const SectionSix = () => {
    return (
        <div className="section-six">
                <div className="row">
                    <div className="col-lg-6">
                        <Typography className="title">Waiting List</Typography>
                        <Typography className="msg">Sign up and join the movement</Typography>
                    </div>
                    <div className="col-lg-6">
                        <Typography className="email-address">Email Address</Typography>
                        <div className="email-container">
                            <input className="email" placeholder="Enter your email" />
                            <Button className="subscribe">Subscribe</Button>
                        </div>
                        <hr className="email-line" />
                    </div>
                </div>
            </div>
    );
}

export default SectionSix;
