import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import MenuContainer from '../../components/MenuContainer';
import SlidingMenu from '../../components/SlidingMenu';
import BannerTop from './BannerTop';
import HelpGuides from './HelpGuides';

const Support = () => {
    const menuList  = ['Accounts', 'Payment', 'Settings', 'Features', 'Tips And Advice', 'Whiteboard', 'Tutors'];
    const [menuShow, setMenuShow] = useState(false);
    const handleMenu = () => {
        setMenuShow(!menuShow);
    }
    return (
        <div className="content-wrapper">
            <div className="header-banner">
            <SlidingMenu show={menuShow} handler={()=>handleMenu()} menus={menuList}/>
            <MenuContainer handleMenu={()=>handleMenu()}/>
            <BannerTop/>
            </div>
            <HelpGuides/>
        </div>
    );
};

export default Support;
