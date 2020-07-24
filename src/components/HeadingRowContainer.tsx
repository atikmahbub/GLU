import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface props{
    title: string,
    link: string
}
const HeadingRowContainer: React.FunctionComponent<props> = ({title, link}) => {
    return (
        <div className="heading-row-container">
        <Typography className="title">{title}</Typography>
        <Link to="" className="subtitle">
            {link}
        </Link>
    </div>
    );
}

export default HeadingRowContainer;
