import React, { FC } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import FilterContainer from '../FilterContainer';
import CardsGrid from '../CardsGrid';
import ImageCard from '../../components/Cards/ImageCard';
import UpcomingClassCard from '../../components/Cards/UpcomingClassCard';
import CardsGridContainer from '../CardsGridContainer';
import PageFooter from '../../components/PageFooter';
import ShowMoreCard from '../../components/Cards/ShowMoreCard';
import ClassPurchaseDrawer from '../Menus/ClassPurchaseDrawer';
import useMenuList from '../../Hooks/useMenuList';
import useToggle from '../../Hooks/useToggle';
import { cards2, classesFiltersData } from '../../data/filters';
import { UserType } from './types';

interface ILiveClassesPageContainer extends UserType {}

const LiveClassesPageContainer: FC<ILiveClassesPageContainer> = ({ userType }) => {
    const menuList = useMenuList(userType);
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);

    return (
        <NavigationMenu
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <ClassPurchaseDrawer open={classPurchaseDrawer} onClose={toggleClassPurchaseDrawer} userType={userType} />
            <FilterContainer
                padding
                sort={false}
                title="Live Classes"
                initialFilterLabel="Filter"
                filtersData={classesFiltersData}
            >
                <CardsGrid>
                    {cards2.map((card, index) => (
                        <ImageCard key={index} {...card} onTitleClick={toggleClassPurchaseDrawer} />
                    ))}
                </CardsGrid>
            </FilterContainer>
            <UpcomingClassCard
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607717/earringgirl_vgkxfl.jpg"
                date="24/07/20"
                startTime="3pm"
                endTime="4.30pm"
                subject="English."
                description="How to structure narrative in fiction."
                name="Jeff Lee"
                subTitle="AED200"
                addButton={false}
            />
            <CardsGridContainer>
                <CardsGrid>
                    {cards2.map((card, index) => (
                        <ImageCard key={index} {...card} onTitleClick={toggleClassPurchaseDrawer} />
                    ))}
                </CardsGrid>
            </CardsGridContainer>
            <UpcomingClassCard
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607717/earringgirl_vgkxfl.jpg"
                date="24/07/20"
                startTime="3pm"
                endTime="4.30pm"
                subject="English."
                description="How to structure narrative in fiction."
                name="Jeff Lee"
                subTitle="AED200"
                addButton={false}
            />
            <CardsGridContainer>
                <CardsGrid>
                    {cards2.map((card, index) => (
                        <ImageCard key={index} {...card} onTitleClick={toggleClassPurchaseDrawer} />
                    ))}
                </CardsGrid>
            </CardsGridContainer>
            <ShowMoreCard paddingTop={false} current={50} total={5488} />
            <PageFooter />
        </NavigationMenu>
    );
};

export default LiveClassesPageContainer;
