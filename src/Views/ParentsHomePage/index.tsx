import React from 'react';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
// import Sidebar from '../../components/Dashobard/Sidebar';
// import Header from './Header';
import { Switch, Route } from 'react-router-dom';
// import { getNavigationMenu } from '../../Routes/SidebarRoutes';
import { Typography } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import ImageOverlay from '../../components/ImageOverlay';
import commonImg from '../../Assets/images';
import { parentsRoutes } from '../../Routes/Parents/routes';

import {v4 as uuidv4} from "uuid";
const index: React.FunctionComponent = () => {
    // useEffect(()=>{
    //     const element = document.getElementsByTagName('html');
    //     console.log(element);
    //     element[0].style.fontSize="16px";
    // },[])
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
        </div>
    );
};

export default index;
