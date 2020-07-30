import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';

const Banner: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subjects' },
        { link: '', name: 'Messages' },
    ];
    return (
        <div className="banner">
            <NavigationMenu menuList={menu} customClass="banner__links" />
        </div>
    );
};

export default Banner;
