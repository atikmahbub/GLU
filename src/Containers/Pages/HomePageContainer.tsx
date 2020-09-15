import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import TopDrawerMenuContent from '../Menus/TopDrawerMenuContent';
import BannerCarousel from '../../components/Carousels/BannerCarousel';
import NextClassCard from '../../components/Cards/NextClassCard';
import FeaturedSubjectsCard from '../../components/Cards/FeaturedSubjectsCard';
import RecommendedContainer from '../RecommendedContainer';
import UpcomingClassCard from '../../components/Cards/UpcomingClassCard';
import FeaturedTutorsCard from '../../components/Cards/FeaturedTutorsCard';
import { createMenuList } from '../../Helper/menus';
import {
    bannerCards,
    bannerCards2,
    bannerCards3,
    recommendedCards,
    recommendedCards2,
    tutorCards,
} from '../../data/homepage';
import PageFooter from '../../components/PageFooter';

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
                link="/"
                data={tutorCards}
                rootClassName={classes.recommendedRoot}
            />
            <PageFooter />
        </NavigationMenu>
    );
};

export default HomePageContainer;
