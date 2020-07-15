import React from 'react';
import { Typography } from '@material-ui/core';

const SectionThree = () => {
    return (
        <div className="section-three">
        <div className="row">
            <div className="col-lg-6">
                <div className="left-part">
                    <div className="mobile"></div>
                </div>
            </div>
            <div className="col-lg-6 d-flex">
                <div className="right-part">
                    <Typography className="title">
                        An innovative web based app that bridges the gap between school, teachers, parents and
                        students. A platform that allows for a more collaborative learning experience for
                        everyone involved.
                    </Typography>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SectionThree;
