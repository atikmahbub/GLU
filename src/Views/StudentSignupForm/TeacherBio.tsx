import React from 'react';
import { Typography } from '@material-ui/core';

const TeacherBio: React.FunctionComponent = () => {
    return (
        <div className="info__container">
            <Typography className="text mb-2">Long Bio</Typography>
            <textarea rows={5} className="text-area"/>
        </div>
    );
};

export default TeacherBio;
