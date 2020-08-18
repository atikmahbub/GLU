import React from 'react';
import { Typography } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import BackgroundTemplate from '../../components/BackgroundTemplate';
// interface props{
//     mainHeading:string,
//     subHeading1:string,
//     subHeading2:string
// }
const TempComp: React.FunctionComponent<props> = () => {
    const menu = [
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    return (
        <div className="temp_container">
            <NavigationMenu menuList={menu} />
            <div className="main_container p-0">
                <BackgroundTemplate imgSrc={commonImg.ladyProfile} />
            </div>
            <div className="wrapper">
                <div className="section">
                    <h1 className="availbility">Limited Availablitiy</h1>
                    <div className="description">
                        <p className="description__text">
                            I am an American author, life coach, and philanthropist. Known for my infomercials,
                            seminars, and self-help books including the books Unlimited Power and Awaken the Giant
                            Within. In 2015 and 2016 I was listed on the Worth Magazine Power 100 list.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TempComp;
