import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
interface props{
    heading?:string;
    image?:any;
    date?:string;
    startTime?:string;
    endTime?:string;
    activityDesc?:string;
    button1?:string;
    button2?:string;
}
const ActivityBanner: React.FunctionComponent<props> = ({heading,image,date,startTime,endTime,activityDesc,button1,button2}) => {

    return (
        <>
        <div className="reusable_activity_banner">
                    <div className="activity_banner">
                        <div className="sec1">
                            <Typography className="activity_text">{heading}</Typography>
                        </div>
                        <div className="sec2">
                            <img src={image} height="393px" width="535px" className="img-fluid" />
                        </div>
                        <div className="sec3">
                            <Typography className="activity_text">{date}</Typography>
                            <Typography className="activity_text">{`${startTime}-`}</Typography>
                            <Typography className="activity_text">{endTime}</Typography>
                        </div>
                        <div className="sec4">
                            <Typography className="activity_bigtext">
                                {activityDesc}
                            </Typography>
                            <div className="edit_delete_container">
                                <Typography className="activity_smalltext pr-3">{button1}</Typography>
                                <Typography className="activity_smalltext">{button2}</Typography>
                            </div>
                        </div>
                    </div>
                </div>
        </>
        
           
    );
};

export default ActivityBanner;
