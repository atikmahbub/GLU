import React from 'react';
import { Typography, Button } from '@material-ui/core';

const BannerTop = () => {
    return (
        <div className="support-header-banner">
            <div className="row w-100">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                    <div className="search-container">
                        <Typography className="title">
                            Ask us anything and <br />
                            we'll do our best to <br />
                            find your answers.
                        </Typography>
                        <div className="email-container">
                            <input type="text" placeholder="Search" className="email" />
                            <Button className="go">Go</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;