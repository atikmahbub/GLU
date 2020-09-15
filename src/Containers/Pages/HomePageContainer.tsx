import React, { FC } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { createMenuList } from '../../Helper/menus';
import TopDrawerMenuContent from '../Menus/TopDrawerMenuContent';
import BannerCarousel from '../../components/Carousels/BannerCarousel';
import { bannerCards } from '../../data/homepage';

const HomePageContainer: FC = () => {
    return (
        <NavigationMenu
            absolute
            colorWhite
            background="transparent"
            menuList={createMenuList('students')}
            TopDrawerMenuComponent={<TopDrawerMenuContent />}
        >
            <BannerCarousel cards={bannerCards} />
        </NavigationMenu>
    );
};

export default HomePageContainer;
