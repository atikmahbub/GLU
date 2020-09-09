import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import MadeBy from '../Footer/MadeBy';

const TutorClass: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
 
    return (
        <NavigationMenu menuList={menu}>
            
            {/* <div className="profile_footer">
                    <div className="footer">
                        <MadeBy />
                    </div>
                </div>
            */}
        </NavigationMenu>
    );
};

export default TutorClass;
