import React from 'react';
import { Typography } from '@material-ui/core';

const MadeBy = () => {
    return (
        // <div>
            <div className="row">
                <div className="col-9">
                    <Typography className="build-by">
                        Made &nbsp;by&nbsp; <span><a href="https://madebysix.com/">Six</a></span> &nbsp;&nbsp;&nbsp; Build&nbsp; by&nbsp;
                        <span><a href="https://www.antino.io/">Antino Labs</a></span>
                    </Typography>
                </div>
                <div className="col-3">
                    <Typography className="glu">Glu 2020</Typography>
                </div>
            </div>
        // </div>
    );
};

export default MadeBy;
