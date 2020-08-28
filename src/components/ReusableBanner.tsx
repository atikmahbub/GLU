import React from 'react';
import {  Typography } from '@material-ui/core';
const ReusableBanner: React.FunctionComponent = () => {
    return (
        <>
            <div className="reusable_banner">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <Typography className="text1">Set Class</Typography>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="tutor_class_subcontainer_col1">
                            <Typography className="text2">Create and publish an upcoming class.</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReusableBanner;
