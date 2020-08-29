import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
interface props{
    mainHeading?:string,
    subHeading1?:string,
    subHeading2?:string,
    linkurl?:string,
}
const SmallCard: React.FunctionComponent<props> = ({mainHeading,subHeading1,subHeading2,linkurl}) => {
    return (
        
        <div className="small__card">
            <Link to={linkurl}>
            <Typography className="heading">{mainHeading}</Typography>
            </Link>
            <Typography className="title first__title">{subHeading1}</Typography>
            
            <Typography className="title second_title">{subHeading2}</Typography>
        </div>
        
    );
};

export default SmallCard;
