import React, { FC } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { createMenuList } from '../../Helper/menus';
import TopDrawerMenuContent from '../Menus/TopDrawerMenuContent';
import BannerCarousel from '../../components/Carousels/BannerCarousel';
import NextClassCard from '../../components/Cards/NextClassCard';
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
            <NextClassCard
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607726/jump_frcudj.jpg"
                date="19/07/20"
                startDate="9am"
                endDate="10.15am"
                subject="PE."
                description="Creating a running"
                time="75mins"
                name="Harriet Earl"
            />
        </NavigationMenu>
    );
};

export default HomePageContainer;
