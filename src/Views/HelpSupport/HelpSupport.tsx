import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import ManageAccount from './ManageAccount';
import Individual from './Individual';
import ProfileSetting from './ProfileSetting';
import Footer from '../Footer/Footer';

const HelpSupport: React.FunctionComponent = () => {
    return (
        <div className="help__support__container">
            <NavigationMenu />
            <ManageAccount/>
            <hr className="line" />
            <Individual/>
            <div className="video__player__container">
                <div className="row">
                    <div className="col-md-2 mb-4">
                        <Typography className="title">00.00/ 05.20</Typography>
                    </div>
                    <div className="col-md-10 mb-4">
                        <img className="img" src={commonImg.smilegirl} alt="" />
                    </div>
                </div>
            </div>
            <ProfileSetting/>
            <Footer/>
        </div>
    );
};

export default HelpSupport;
