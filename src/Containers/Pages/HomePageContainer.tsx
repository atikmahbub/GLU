import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import BannerCarousel from '../../components/Carousels/BannerCarousel';
import NextClassCard from '../../components/Cards/NextClassCard';
import FeaturedSubjectsCard from '../../components/Cards/FeaturedSubjectsCard';
import RecommendedContainer from '../RecommendedContainer';
import UpcomingClassCard from '../../components/Cards/UpcomingClassCard';
import FeaturedTutorsCard from '../../components/Cards/FeaturedTutorsCard';
import CalendarDateSubjectsCard from '../../components/Cards/CalendarDateSubjectsCard';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import PageFooter from '../../components/PageFooter';
import { Async, HomePageCardsData, UserType } from './types';
import ClassPurchaseDrawer from '../Menus/ClassPurchaseDrawer';
import useToggle from '../../Hooks/useToggle';
import useMenuList from '../../Hooks/useMenuList';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';

const useStyles = makeStyles({
    recommendedRoot: {
        paddingTop: '8.4375rem',
    },
});

interface IHomePageContainer extends UserType, Async {
    cardsData: HomePageCardsData;
}

const HomePageContainer: FC<IHomePageContainer> = ({ userType, isLoading, cardsData }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);

    return (
        <NavigationMenu
            absolute
            colorWhite
            userType={userType}
            menuList={menuList}
            background="transparent"
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <ClassPurchaseDrawer open={classPurchaseDrawer} onClose={toggleClassPurchaseDrawer} userType={userType} />
            <BannerCarousel cards={cardsData.bannerCarousel} />
            <NextClassCard {...cardsData.nextClass} />
            <FeaturedSubjectsCard {...cardsData.featuredSubjects} />
            <RecommendedContainer
                padding
                title="Recorded Classes"
                link={`/${userType}/recorded-classes`}
                data={cardsData.recordedClasses}
                rootClassName={classes.recommendedRoot}
                cardTitleClick={toggleClassPurchaseDrawer}
            />
            <BannerCarousel cards={cardsData.bannerCarouselCenter} />
            <UpcomingClassCard {...cardsData.upcomingClass} />
            {cardsData.calendar && <CalendarDateSubjectsCard {...cardsData.calendar} paddingBottom={false} />}
            <RecommendedContainer
                padding
                title="Live Classes"
                link={`/${userType}/live-classes`}
                data={cardsData.liveClasses}
                cardTitleClick={toggleClassPurchaseDrawer}
                rootClassName={classes.recommendedRoot}
            />
            <FeaturedTutorsCard {...cardsData.featuredTutors} />
            <BannerCarousel cards={cardsData.bannerCarouselBottom} />
            <RecommendedContainer
                padding
                title="Tutors"
                link={`/${userType}/tutors`}
                cardTitleLink={`/${userType}/tutor/`}
                data={cardsData.tutors}
                rootClassName={classes.recommendedRoot}
            />
            <PageFooter />
        </NavigationMenu>
    );
};

export default HomePageContainer;
