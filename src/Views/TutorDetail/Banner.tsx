import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
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
            <img src={commonImg.Stocksy_comp_2414754} className="banner__image" alt="girl" />
            <h1 className="banner__heading">Ray Smith Maths Tutor</h1>
        </div>
    );
};

export default Banner;
