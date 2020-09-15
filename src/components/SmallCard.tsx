import React from 'react';
import { Typography } from '@material-ui/core';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import StarRateSharpIcon from '@material-ui/icons/StarRateSharp';
import { Link } from 'react-router-dom';
interface props {
    mainHeading?: string;
    subHeading1?: string;
    subHeading2?: string;
    linkurl?: string;
}
const SmallCard: React.FunctionComponent<props> = ({ mainHeading, subHeading1, subHeading2, linkurl }) => {
    return (
        <div className="small__card">
            <Link style={{ textDecoration: 'none' }} to={linkurl}>
                <Typography className="heading">{mainHeading}</Typography>
            </Link>
            <Typography className="title first__title">{subHeading1}</Typography>

            <Typography className="title second_title">
                {mainHeading === 'Reviews' && <StarRateSharpIcon style={{ color: 'black', marginRight: '0.5rem' }} />}
                {mainHeading === 'Availablity' && (
                    <FiberManualRecordSharpIcon style={{ color: '#2267FF', marginRight: '0.5rem' }} />
                )}
                {subHeading2}
            </Typography>
        </div>
    );
};

export default SmallCard;
