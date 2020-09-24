import React, { FC, useMemo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import BannerCarousel from '../../components/Carousels/BannerCarousel';
import WhiteBannerCarousel from '../../components/Carousels/WhiteBannerCarousel';
import RecommendedContainer from '../RecommendedContainer';
import UpcomingClassCard from '../../components/Cards/UpcomingClassCard';
import FeaturedTutorsCard from '../../components/Cards/FeaturedTutorsCard';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import PageFooter from '../../components/PageFooter';
import { IndividualSubjectCardData } from './types';
import { UserTypes } from '../../Types/user';
import { createMenuList } from '../../Helper/menus';

const useStyles = makeStyles({
    recommendedRoot: {
        paddingTop: '8.4375rem',
    },
});

interface IIndividualSubjectContainer{
    userType: UserTypes;
    cardsData: IndividualSubjectCardData;
}

const IndividualSubjectContainer: FC<IIndividualSubjectContainer> = ({ userType, cardsData }) => {
    const classes = useStyles();
    const menuList = useMemo(() => createMenuList(userType), [userType]);
    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <WhiteBannerCarousel cards={cardsData.whiteBannerCarousel} />
            <BannerCarousel cards={cardsData.individualSubjectBannerCard}/>
            <UpcomingClassCard {...cardsData.upcomingClass} />
            <RecommendedContainer
                padding
                title="Live Classes"
                link={`/${userType}/live-classes`}
                data={cardsData.liveClasses}
                rootClassName={classes.recommendedRoot}
            />
            <BannerCarousel cards={cardsData.bannerCarouselBottom} />
            <RecommendedContainer
                padding
                title="Recorded Classes"
                link={`/${userType}/recorded-classes`}
                data={cardsData.recordedClasses}
                rootClassName={classes.recommendedRoot}
            />
            <FeaturedTutorsCard {...cardsData.featuredTutors} />
            <RecommendedContainer
                padding
                title="Tutors"
                link={`/${userType}/tutors`}
                cardTitleLink={`/${userType}/tutors/tutor`}
                data={cardsData.tutors}
                rootClassName={classes.recommendedRoot}
            />
            <PageFooter />
        </NavigationMenu>
    );
};

export default IndividualSubjectContainer;
