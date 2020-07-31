import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
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
            <img src={commonImg.orangetopgirlcrop} className="banner__image" alt="girl" />
            <h1 className="banner__heading">Ray Smith Maths Tutor</h1>
            <div className="banner__favourite">
                <FavoriteBorderIcon className="banner__favouriteIcon" />
                <span className="banner__favouriteText">Favouite</span>
            </div>
            <div className="banner__ratingBox">
                <h1 className="banner__ratingBox__Grade">Grade: Primary, Secondary</h1>
                <StarIcon className="banner__ratingBox__Icon" />
                <span className="banner__ratingBox__Text">5/5</span>
            </div>
        </div>
    );
};

export default Banner;
