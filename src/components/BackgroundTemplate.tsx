import React from 'react';
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
const SmallCard: React.FunctionComponent = ({imgSrc }) => {
    return (
        <div className="main_container2">
            <div className="main_container2_subcontainer">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="main_container_dashboard_col6">
                            <Typography className="card_text">Profile</Typography>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="main_container_dashboard_col7">
                            <div className="image_link">
                                <Link to="">
                                    <Typography className="subtext">See</Typography>
                                </Link>
                            </div>

                            <img
                                src={imgSrc}
                                className=" img-class img-fluid"
                                width="393px"
                                height="393px"
                                alt=""
                            />
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
                            <Typography className="subtext">Edit Profile</Typography>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SmallCard;
