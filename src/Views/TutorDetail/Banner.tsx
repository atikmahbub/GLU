import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import IconTextRow from '../../components/IconTextRow';
import { FavoriteBorder } from '@material-ui/icons';
import IconTextWrapper from "../../Containers/IconTextWrapper";

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
            <div className="banner__heading__container">
            <h1 className="banner__heading__container__text">Ray Smith <br/> Maths Tutor</h1>
            <IconTextWrapper>
            <IconTextRow icon={<FavoriteBorder className="banner__heart__icon"/>} title="Favorite"/>
            </IconTextWrapper>
            </div>
        </div>
    );
};

export default Banner;
