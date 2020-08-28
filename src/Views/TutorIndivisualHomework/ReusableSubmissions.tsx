import React from 'react';

import { Typography } from '@material-ui/core';
interface props{
    name?:string;
    isSubmitted?:string;
    date?:string;
    time?:string;
    isEdit?:string;
}
const ReusableSubmissions: React.FunctionComponent<props> = ({name,isSubmitted,date,time,isEdit}) => {
    return (
        <>
            
                <div className="row">
                    <div className="col-md-5">
                        <Typography className="leftText ">
                            {name}<br></br> {isSubmitted}
                        </Typography>
                    </div>
                    <div className="col-md-7">
                        <div className="mark_or_edit submissions_dateTime">
                            <Typography className="leftText">{date}</Typography>
                            <Typography className="resources_subtext">{isEdit}</Typography>
                        </div>
                        <div className="col-md-12 p-0">
                            <Typography className="leftText">{time}</Typography>
                        </div>
                    </div>
                </div>
            
        </>
    );
};

export default ReusableSubmissions;
