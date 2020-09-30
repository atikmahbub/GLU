import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGrid from '../CardsGrid';
import ImageCard from '../../components/Cards/ImageCard';
import FilterContainer from '../FilterContainer';
import CardsGridContainer from '../CardsGridContainer';
import { classesFiltersData } from '../../data/filters';
import PageFooter from '../../components/PageFooter';
import ShowMoreCard from '../../components/Cards/ShowMoreCard';
import useMenuList from '../../Hooks/useMenuList';
import FullHeightContainer from '../FullHeightContainer';
import { Async, PaginationPage, RecordedClassesPage, UserType } from './types';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import ClassPurchaseDrawer from '../Menus/ClassPurchaseDrawer';
import useToggle from '../../Hooks/useToggle';

interface IRecordedClassesPageContainer extends UserType, RecordedClassesPage, Async, PaginationPage {
    purchased?: boolean;
}

const RecordedClassesPageContainer: FC<IRecordedClassesPageContainer> = ({
    data,
    total,
    current,
    userType,
    isLoading,
    purchased,
}) => {
    const menuList = useMenuList(userType);
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);

    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <ClassPurchaseDrawer
                open={classPurchaseDrawer}
                onClose={toggleClassPurchaseDrawer}
                userType={userType}
                purchased={purchased}
            />
            <FullHeightContainer container direction="column" justify="space-between">
                <Grid container direction="column">
                    <CardsGridContainer paddingBottom={false}>
                        <FilterContainer
                            sort={false}
                            title="Recorded Classes"
                            initialFilterLabel="Filter"
                            filtersData={classesFiltersData}
                            value={null}
                            onFilterChange={() => {}}
                        >
                            <CardsGrid>
                                {data.map((card, index) => (
                                    <ImageCard onTitleClick={toggleClassPurchaseDrawer} key={index} {...card} />
                                ))}
                            </CardsGrid>
                        </FilterContainer>
                    </CardsGridContainer>
                    <ShowMoreCard current={current} total={total} />
                </Grid>
                <PageFooter />
            </FullHeightContainer>
        </NavigationMenu>
    );
};

RecordedClassesPageContainer.defaultProps = {
    data: [],
};

export default RecordedClassesPageContainer;
