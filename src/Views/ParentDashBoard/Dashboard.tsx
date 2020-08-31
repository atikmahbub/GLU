import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SlidingPushDrawerContent from '../../Views/ParentsHomePage/SlidingPushDrawerContent';
import SlidingDrawerContent from '../../Views/ParentsHomePage/SlidingDrawerContent';
import Tabs from './Tabs';
import Personal from './Personal';
import School from './School';
import Drawer from './Drawer';


const ParentDashboard: React.FunctionComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openPushDrawer, setOpenPushDrawer] = useState(false);
    const [activeTab, setActiveTab] = useState('personal');

    const navigations = [
        { link: '/parent/homepage', name: 'Home' },
        { link: 'parent/dashboard', name: 'Dashboard' },
        { link: '', name: 'Subject' },
        { link: '', name: 'Messages' },
    ];

    const handleDrawer = () => {
        // const drawer = document.getElementById('menu__drawer');
        // drawer.style.zIndex = "25";
        setOpenPushDrawer(false);
        setOpenDrawer(!openDrawer);
    };

    const handlePushDrawer = () => {
        setOpenDrawer(false);
        setOpenPushDrawer(!openPushDrawer);
    };

    return (
        <div className="parent_dashboard_container">
            <div className="navigation__menu">
                <NavigationMenu menuList={navigations} handler={handleDrawer} handlerNotification={handlePushDrawer}/>
            </div>
          <div className="main_container">
            <div className="title__container">
                <Tabs value={activeTab} onChange={setActiveTab} />
                <div className="dropdown">
                    <Typography variant="h5">
                        Child 1
                        </Typography>
                    <Typography variant="h5">
                        <ExpandMoreIcon
                            style={{ fontSize: "3rem" }} />
                    </Typography>
                </div>
            </div>
            {activeTab === 'school' &&
                <div className="school__container">
                    <School />
                </div>

            }

            {activeTab === 'personal' &&
                <Personal />
            }
            <div className="drawer">
                <Drawer 
                    open={openDrawer} 
                    onClose={handleDrawer}
                    width="68.875rem"
                    heading={true}>
                    <SlidingDrawerContent />
                </Drawer>
            </div>

            <div className="drawer push__drawer">
                    <Drawer 
                        open={openPushDrawer} 
                        onClose={handlePushDrawer}
                        width="32.312rem"
                        heading={false}>
                        <SlidingPushDrawerContent />
                    </Drawer>
            </div>
            <div className="main_container_4">
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </div>
        </div>
    );
};
export default ParentDashboard;