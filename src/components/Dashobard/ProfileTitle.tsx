import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';

const ProfileTitle = () => {
    return (
        <CardContainer>
            <div className="top_container">
                <div className="image_title_cotainer">
                    <img className="profile" src={commonImg.blueshirtman} alt="" />
                    <div className="title_container">
                        <Typography className="heading">Olivia Preston</Typography>
                        <Typography className="title">2666 Junior Avenue, Atlanta, GA, 30303</Typography>
                    </div>
                </div>
                <div className="button_container">
                    <Typography className="blue-text">Print</Typography>
                    <Typography className="blue-text visible">Visit details</Typography>
                </div>
            </div>
        </CardContainer>
    );
};

export default ProfileTitle;
