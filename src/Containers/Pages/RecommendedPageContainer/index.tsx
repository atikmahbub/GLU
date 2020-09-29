import React, { FC } from 'react';
import { UserType } from '../types';
import NavigationMenu from '../../../components/NavigationMenu';
import useMenuList from '../../../Hooks/useMenuList';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../../CardsGridContainer';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import CardsGrid from '../../CardsGrid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import UpcomingClassCard from '../UpcomingClassesPageContainer/UpcomingClassCard';
import { recommendedClasses } from '../../../data/upcomingClasses';
import PageFooter from '../../../components/PageFooter';

const useStyles = makeStyles({
    titleContainer: {
        paddingBottom: '2.5rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        gap: '0',
    },
    cardsContainer: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderBottom: 0,
        },
    },
    cardsTitleContainer: {
        paddingTop: '3.125rem',
    },
})

interface IRecommendedPageContainer extends UserType {}

const RecommendedPageContainer: FC<IRecommendedPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            userType={userType}
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer>
                <CardsGrid rows={2} rootClassName={classes.titleContainer}>
                    <Grid container>
                        <TitlePrimary>Recommended</TitlePrimary>
                    </Grid>
                    <Grid container>
                        <TitlePrimary>Suggested Classes</TitlePrimary>
                    </Grid>
                </CardsGrid>
                <Grid container direction="column">
                    <Grid container direction="column" className={classes.cardsContainer}>
                        <Grid container>
                            <Grid container item xs={3} className={classes.cardsTitleContainer}>
                                <TitlePrimary>June</TitlePrimary>
                            </Grid>
                            <Grid container direction="column" item xs={9}>
                                {recommendedClasses.slice(0, 2).map((card, index) => (
                                    <UpcomingClassCard key={index} {...card} />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" className={classes.cardsContainer}>
                        <Grid container>
                            <Grid container item xs={3} className={classes.cardsTitleContainer}>
                                <TitlePrimary>August</TitlePrimary>
                            </Grid>
                            <Grid container direction="column" item xs={9}>
                                {recommendedClasses.map((card, index) => (
                                    <UpcomingClassCard key={index} {...card} />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

export default RecommendedPageContainer;
