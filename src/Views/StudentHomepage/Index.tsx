import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import NextClass from './NextClass';
import FeatureSubject from './FeatureSubject';
import PreviousClasses from './PreviousClasses';
import ImageOverlay from '../../components/ImageOverlay';
import commonImg from '../../Assets/images';
import UpcomingClass from './UpcomingClass';
import CalenderContainer from './CalenderContainer';
import TotalUpcomingClasses from './TotalUpcomingClasses';
import FeatureTutor from './FeatureTutor';
import Tutors from './Tutors';
import Footer from '../Footer/Footer';

const Index: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subjects' },
        { link: '', name: 'Messages' },
    ];
    return (
        <div className="homepage__wrapper">
            <div className="banner">
                <NavigationMenu menuList={menu} />
                <Typography className="large__text">Charlie Ray</Typography>
                <div className="overy-heading">
                    <Typography className="small__heading">AED200 / 45mins</Typography>
                    <Typography className="large__heading">
                        Maths. <br /> An introduction to <br /> trigonometry
                    </Typography>
                </div>
            </div>
            <NextClass />
            <FeatureSubject />
            <PreviousClasses />
            <ImageOverlay
                image={commonImg.earringgirl}
                msg={
                    <>
                        Maths. <br /> An introduction to <br /> trigonometry
                    </>
                }
                title="AED200 / 45mins"
            />
            <UpcomingClass />
            <CalenderContainer />
            <TotalUpcomingClasses />
            <FeatureTutor />
            <ImageOverlay
                image={commonImg.earringgirl}
                msg={
                    <>
                        ICT. <br /> 13 Upcoming Classes <br /> 97 Previous Classes
                    </>
                }
                title="AED200 / 45mins"
            />
            <Tutors />
            <Footer/>
        </div>
    );
};

export default Index;
