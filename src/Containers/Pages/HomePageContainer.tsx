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
import PageFooter from '../../components/PageFooter';
import { UserTypes } from '../../Types/user';
import { createMenuList } from '../../Helper/menus';
import {
    bannerCards,
    bannerCards2,
    bannerCards3, calendarSubjectsCards,
    recommendedCards,
    recommendedCards2,
    tutorCards,
} from '../../data/homepage';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';

const useStyles = makeStyles({
    recommendedRoot: {
        paddingTop: '8.4375rem',
    },
});

interface IHomePageContainer {
    userType: UserTypes;
}

const HomePageContainer: FC<IHomePageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMemo(() => createMenuList(userType), [userType])

    return (
        <NavigationMenu
            absolute
            colorWhite
            menuList={menuList}
            background="transparent"
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
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
                link={`/${userType}/previous-classes`}
                data={recommendedCards}
                rootClassName={classes.recommendedRoot}
            />
            <BannerCarousel cards={bannerCards2} />
            <UpcomingClassCard
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607715/blackbluetop_ggjltn.jpg"
                date="24/07/20"
                startTime="3pm"
                endTime="4.30pm"
                subject="English."
                description="How to structure"
                name="Jeff Lee"
                subTitle="AED200"
            />
            <CalendarDateSubjectsCard date="July 2020" cards={calendarSubjectsCards} paddingBottom={false} />
            <RecommendedContainer
                padding
                title="Upcoming Classes"
                link={`/${userType}/upcoming-classes`}
                data={recommendedCards2}
                rootClassName={classes.recommendedRoot}
            />
            <FeaturedTutorsCard
                imgSmallTitle="Maths - Harry Stannard"
                imgSmall="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607714/blueshirtman_gkcohw.jpg"
                imgBigTitle="Languages - Johny Duke"
                imgBig="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607729/smillingmanspects_qewo8x.jpg"
            />
            <BannerCarousel cards={bannerCards3} />
            <RecommendedContainer
                padding
                title="Tutors"
                link={`/${userType}/tutors`}
                data={tutorCards}
                rootClassName={classes.recommendedRoot}
            />
            <PageFooter />
        </NavigationMenu>
    );
};

export default HomePageContainer;
