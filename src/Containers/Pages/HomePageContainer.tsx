import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import TopDrawerMenuContent from '../Menus/TopDrawerMenuContent';
import BannerCarousel from '../../components/Carousels/BannerCarousel';
import NextClassCard from '../../components/Cards/NextClassCard';
import FeaturedSubjectsCard from '../../components/Cards/FeaturesSubjectsCard';
import RecommendedContainer from '../RecommendedContainer';
import { createMenuList } from '../../Helper/menus';
import { bannerCards, bannerCards2, recommendedCards, recommendedCards2 } from '../../data/homepage';
import UpcomingClassCard from '../../components/Cards/UpcomingClassCard';

const useStyles = makeStyles({
    recommendedRoot: {
        paddingTop: '8.4375rem',
    },
});

const HomePageContainer: FC = () => {
    const classes = useStyles();
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
                startTime="9am"
                endTime="10.15am"
                subject="PE."
                description="Creating a running"
                subTitle="75mins"
                name="Harriet Earl"
            />
            <FeaturedSubjectsCard
                imgBigTitle="Business Studies"
                imgBig="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607716/chairwithman_p09ojq.jpg"
                imgSmallTitle="Computer Science"
                imgSmall="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607731/vrplayerboy_fyrdco.jpg"
            />
            <RecommendedContainer
                padding
                title="Previous Classes"
                link="/"
                data={recommendedCards}
                rootClassName={classes.recommendedRoot}
            />
            <BannerCarousel cards={bannerCards2} />
            <UpcomingClassCard />
            <RecommendedContainer
                padding
                title="Upcoming Classes"
                link="/"
                data={recommendedCards2}
                rootClassName={classes.recommendedRoot}
            />
        </NavigationMenu>
    );
};

export default HomePageContainer;
