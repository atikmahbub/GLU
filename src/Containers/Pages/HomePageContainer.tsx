import React, { FC, useMemo } from 'react';
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
import { HomePageCardsData } from './types';
import { UserTypes } from '../../Types/user';
import { createMenuList } from '../../Helper/menus';

const useStyles = makeStyles({
    recommendedRoot: {
        paddingTop: '8.4375rem',
    },
});

interface IHomePageContainer {
    userType: UserTypes;
    cardsData: HomePageCardsData;
}

const HomePageContainer: FC<IHomePageContainer> = ({ userType, cardsData }) => {
    const classes = useStyles();
    const menuList = useMemo(() => createMenuList(userType), [userType]);
    return (
        <NavigationMenu
            absolute
            colorWhite
            menuList={menuList}
            background="transparent"
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <BannerCarousel cards={cardsData.bannerCarousel} />
            <NextClassCard {...cardsData.nextClass} />
            <FeaturedSubjectsCard {...cardsData.featuredSubjects} />
            <RecommendedContainer
                padding
                title="Recorded Classes"
                link={`/${userType}/recorded-classes`}
                data={cardsData.recordedClasses}
                rootClassName={classes.recommendedRoot}
            />
            <BannerCarousel cards={cardsData.bannerCarouselCenter} />
            <UpcomingClassCard {...cardsData.upcomingClass} />
            {cardsData.calendar && (
                <CalendarDateSubjectsCard {...cardsData.calendar} paddingBottom={false} />
            )}
            <RecommendedContainer
                padding
                title="Live Classes"
                link={`/${userType}/live-classes`}
                data={cardsData.liveClasses}
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
