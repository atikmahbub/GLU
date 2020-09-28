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

interface IRecordedClassesPageContainer extends UserType, RecordedClassesPage, Async, PaginationPage {}

const RecordedClassesPageContainer: FC<IRecordedClassesPageContainer> = ({
    data,
    total,
    current,
    userType,
    isLoading,
}) => {
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <FullHeightContainer container direction="column" justify="space-between">
                <Grid container direction="column">
                    <CardsGridContainer paddingBottom={false}>
                        <FilterContainer
                            sort={false}
                            title="Recorded Classes"
                            initialFilterLabel="Filter"
                            filtersData={classesFiltersData}
                        >
                            <CardsGrid>
                                {data.map((card, index) => (
                                    <ImageCard key={index} {...card} />
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
    data: []
}

export default RecordedClassesPageContainer;
