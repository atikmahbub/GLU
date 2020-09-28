import React, { FC } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import FilterContainer from '../FilterContainer';
import CardsGrid from '../CardsGrid';
import ImageCard from '../../components/Cards/ImageCard';
import PageFooter from '../../components/PageFooter';
import ShowMoreCard from '../../components/Cards/ShowMoreCard';
import ClassPurchaseDrawer from '../Menus/ClassPurchaseDrawer';
import useMenuList from '../../Hooks/useMenuList';
import useToggle from '../../Hooks/useToggle';
import { classesFiltersData } from '../../data/filters';
import { Async, LiveClassesPage, UserType } from './types';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';

interface ILiveClassesPageContainer extends UserType, LiveClassesPage, Async {}

const LiveClassesPageContainer: FC<ILiveClassesPageContainer> = ({ userType, data, isLoading }) => {
    const menuList = useMenuList(userType);
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);

    return (
        <NavigationMenu
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <ClassPurchaseDrawer open={classPurchaseDrawer} onClose={toggleClassPurchaseDrawer} userType={userType} />
            <FilterContainer
                padding
                sort={false}
                title="Live Classes"
                initialFilterLabel="Filter"
                filtersData={classesFiltersData}
            >
                <CardsGrid>
                    {data.map((card, index) => (
                        <ImageCard key={index} {...card} onTitleClick={toggleClassPurchaseDrawer} />
                    ))}
                </CardsGrid>
            </FilterContainer>
            <ShowMoreCard paddingTop={false} current={50} total={5488} />
            <PageFooter />
        </NavigationMenu>
    );
};

export default LiveClassesPageContainer;
