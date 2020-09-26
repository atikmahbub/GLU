import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../CardsGridContainer';
import ColumnsContainer from '../ColumnsContainer';
import FullHeightContainer from '../FullHeightContainer';
import FilterContainer from '../FilterContainer';
import HomeworkCard from '../../components/Cards/HomeworkCard';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import useMenuList from '../../Hooks/useMenuList';
import { classesFiltersData } from '../../data/filters';
import PageFooter from '../../components/PageFooter';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';
import { HomeworkPage, UserType } from './types';
import { HomeworkCardElement } from '../../components/Cards/types';

const useStyles = makeStyles({
    filterContainer: {
        marginBottom: '3.75rem',
    },
    counterTitle: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    counter: {
        marginBottom: '1.875rem',
    },
    rightTitle: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
    rightTitleContainer: {
        marginBottom: '1.875rem',
    },
});

interface IHomeworkPageContainer extends UserType, HomeworkPage {
    isLoading: boolean;
}

const HomeworkPageContainer: FC<IHomeworkPageContainer> = ({
    userType,
    isLoading,
    incompleteCount,
    overdueCount,
    totalCount,
    homeworks,
    overdueHomework,
}) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);

    const filteredHomeworks: HomeworkCardElement[] = [...homeworks, ...overdueHomework];

    return (
        <NavigationMenu
            absolute
            userType={userType}
            background="primary"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <FullHeightContainer justify="space-between">
                <CardsGridContainer>
                    <ColumnsContainer
                        topBorder={false}
                        leftContent={
                            <Grid container direction="column">
                                <Grid container className={classes.filterContainer}>
                                    <FilterContainer
                                        title="Homework"
                                        sort={false}
                                        filtersData={classesFiltersData}
                                        initialFilterLabel="Filter"
                                    />
                                </Grid>
                                <Grid container direction="column" className={classes.counter}>
                                    <TitlePrimary>{incompleteCount}</TitlePrimary>
                                    <Typography className={classes.counterTitle}>Incomplete</Typography>
                                </Grid>
                                <Grid container direction="column">
                                    <TitlePrimary>{overdueCount}</TitlePrimary>
                                    <Typography className={classes.counterTitle}>Overdue</Typography>
                                </Grid>
                            </Grid>
                        }
                        rightContent={
                            <Grid container direction="column">
                                <Grid container direction="column" className={classes.rightTitleContainer}>
                                    <Typography className={classes.rightTitle}>Total Assignments</Typography>
                                    <Typography className={classes.rightTitle}>{totalCount}</Typography>
                                </Grid>
                                <Grid container>
                                    {filteredHomeworks.map((homework, index) => (
                                        <HomeworkCard
                                            {...homework}
                                            titleLink={`/${userType}/homework/${homework.id}`}
                                            key={index}
                                        />
                                    ))}
                                </Grid>
                            </Grid>
                        }
                    />
                </CardsGridContainer>
                <PageFooter />
            </FullHeightContainer>
        </NavigationMenu>
    );
};

export default HomeworkPageContainer;
