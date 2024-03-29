import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getTeacherDetails } from '../Redux/Actions/teacherAction';
import { connect } from 'react-redux';

interface props {
    imgSrc?: any;
}
const BackgroundTemplate: React.FunctionComponent<props> = ({ imgSrc, getTeacherDetails }) => {
    useEffect(() => {
        getTeacherDetails();
    }, []);
    return (
        <div className="main_container2_subcontainer">
            <div className="img_container">
                <div className="row">
                    <div className="col-6 p-0">
                        <div className="main_container_dashboard_col6">
                            <Typography className="card_text">Profile</Typography>
                        </div>
                    </div>
                    <div className="col-6 p-0">
                        <div className="main_container_dashboard_col7">
                            <div className="image_link">
                                <Link style={{ color: 'white', textDecoration: 'none' }} to="/tutor/profile">
                                    <Typography className="subtext">See</Typography>
                                </Link>
                            </div>
                            <img src={imgSrc} className=" img-class img-fluid" width="393px" height="393px" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="main_container_dashboard_col8">
                        <Typography className="text">Ray Stafford</Typography>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div className="main_container_dashboard_col9">
                        <Typography className="text">{`Dubai, UAE`}</Typography>
                        <Typography className="text">{`(+971) 4 554 0350`}</Typography>
                        <Link style={{ textDecoration: 'none' }} to="/tutor/tutor-edit">
                            <Typography className="subtext">Edit Profile</Typography>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { getTeacherDetails })(BackgroundTemplate);
