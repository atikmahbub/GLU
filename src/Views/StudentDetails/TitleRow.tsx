import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    title: string;
}
const TitleRow: React.FunctionComponent<props> = ({ title }) => {
    return (
        <div className="title-row">
            <Typography className="title">{title}</Typography>
        </div>
    );
};

export default TitleRow;
