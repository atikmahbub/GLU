import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router';
import NavigationMenu from '../../../components/NavigationMenu';
import CardsGridContainer from '../../CardsGridContainer';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import TutorProfileCard from '../../../components/Cards/TutorProfileCard';
import Availability from './Availability';
import FeaturedTutorsCard from '../../../components/Cards/FeaturedTutorsCard';
import RecommendedContainer from '../../RecommendedContainer';
import PageFooter from '../../../components/PageFooter';
import About from './About';
import Reviews from './Reviews';
import useScrollTop from '../../../Hooks/useScrollTop';
import { UserTypes } from '../../../Types/user';
import { liveClasses, recordedClasses } from '../../../data/tutorProfile';
import { tutorCards } from '../../../data/homepage';
import useToggle from '../../../Hooks/useToggle';
import useMenuList from '../../../Hooks/useMenuList';
import ClassPurchaseDrawer from '../../Menus/ClassPurchaseDrawer';

interface ITutorProfilePageContainer {
    userType: UserTypes;
}

const TutorProfilePageContainer: FC<ITutorProfilePageContainer> = ({ userType }) => {
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);
    const menuList = useMenuList(userType);
    const { id } = useParams();
    useScrollTop(id);

    return (
        <NavigationMenu
            absolute
            colorWhite
            background="transparent"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <ClassPurchaseDrawer open={classPurchaseDrawer} onClose={toggleClassPurchaseDrawer} userType={userType} />
            <TutorProfileCard
                name="Jen Holden"
                city="London"
                country="UK"
                rating="5/5"
                description="Primary, Secondary"
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596608142/gluschool/smilegirl_ellmdm.jpg"
            />
            <Availability />
            <FeaturedTutorsCard
                title="Essential Classes"
                imgSmall="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607722/photo_ag2uaz.jpg"
                imgSmallTitle={'Natural selection and evolution.\nBiology, Jen Holden'}
                imgSmallSubtitle="AED200 / 75mins"
                imgBig="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607723/payingpadgirl_kvm5nm.jpg"
                imgBigTitle={'Natural selection and evolution.\nBiology, Jen Holden'}
                imgBigSubtitle="AED200 / 75mins"
            />
            <CardsGridContainer>
                <RecommendedContainer
                    title="Live Classes"
                    link={`/${userType}/live-classes`}
                    data={liveClasses}
                    marginBottom={false}
                    cardTitleClick={toggleClassPurchaseDrawer}
                />
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false}>
                <RecommendedContainer
                    title="Recorded Classes"
                    link={`/${userType}/recorded-classes`}
                    data={recordedClasses}
                    marginBottom={false}
                />
            </CardsGridContainer>
            <About />
            <Reviews />
            <CardsGridContainer background="secondary">
                <RecommendedContainer
                    title="Similar Tutors"
                    link={`/${userType}/tutors`}
                    cardTitleLink={`/${userType}/tutor/`}
                    data={tutorCards}
                    marginBottom={false}
                />
            </CardsGridContainer>
            <PageFooter background="secondary" />
        </NavigationMenu>
    );
};

export default TutorProfilePageContainer;
