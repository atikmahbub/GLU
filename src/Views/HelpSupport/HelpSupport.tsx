import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import ManageAccount from './ManageAccount';
import Individual from './Individual';
import ProfileSetting from './ProfileSetting';
import Footer from '../Footer/Footer';
import VideoLectureContainer from '../../components/VideoLectureContainer';

const HelpSupport: React.FunctionComponent = () => {
    return (
        <div className="help__support__container">
            <NavigationMenu />
            <ManageAccount/>
            <hr className="line" />
            <Individual/>
            <VideoLectureContainer/>
            <ProfileSetting/>
            <Footer/>
        </div>
    );
};

export default HelpSupport;
