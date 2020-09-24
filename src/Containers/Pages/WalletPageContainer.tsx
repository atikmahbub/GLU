import React, { FC, useMemo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import BarChart from '../../components/Charts/BarChart';
import PercentCard from '../../components/Cards/PercentCard';
import ColumnsContainer from '../ColumnsContainer';
import WalletActivityAccordion from '../../components/Accordions/WalletActivityAccordion';
import SeeAll from '../../components/Typographies/SeeAll';
import PageFooter from '../../components/PageFooter';
import { createMenuList } from '../../Helper/menus';
import { UserTypes } from '../../Types/user';
import { activity, barChart } from '../../data/wallet';
import CurrencyButton from '../../components/Wallet/CurrencyButton';

const useStyles = makeStyles({
    title: {
        fontSize: '5rem',
        lineHeight: '5rem',
        display: 'flex',
        alignItems: 'center',
    },
    titleSmall: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
    buttonAdd: {
        marginLeft: '1.25rem',
        cursor: 'pointer',
        fontSize: '1.75rem',
    },
    chartContainer: {
        paddingTop: '5rem',
    },
    percentCardsContainer: {
        flexGrow: 1,
    },
    rightContainer: {
        position: 'relative'
    }
});

interface IWalletPageContainer {
    userType: UserTypes;
}

const WalletPageContainer: FC<IWalletPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMemo(() => createMenuList(userType), [userType]);
    return (
        <NavigationMenu
            absolute
            background="secondary"
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer background="secondary">
                <CardsGrid rows={2}>
                    <Grid container>
                        <Grid container direction="column">
                            <Grid container alignItems="center">
                                <TitlePrimary>Wallet</TitlePrimary>
                                <i className={classNames('icon-Add', classes.buttonAdd)} />
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                className={classes.percentCardsContainer}
                            >
                                <PercentCard
                                    icon={false}
                                    marginBottom
                                    value="150"
                                    dif="AED-1,230"
                                    title="Monthly spend"
                                />
                                <PercentCard icon={false} value="1,380" dif="AED" title="Average spend" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container direction="column" className={classes.rightContainer}>
                            <CurrencyButton />
                            <Grid container justify="space-between">
                                <Grid container direction="column">
                                    <Typography className={classes.title}>Current Balance</Typography>
                                    <Typography className={classes.title}>
                                        1,320<span className={classes.titleSmall}>AED</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.chartContainer}>
                                <BarChart column {...barChart} />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTopVariant={2}>
                <ColumnsContainer
                    rightContentPaddingTop={false}
                    leftContent={
                        <Grid container>
                            <TitlePrimary>Recent Activity</TitlePrimary>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            <Grid container direction="column">
                                {activity.map((card, index) => (
                                    <WalletActivityAccordion key={index} {...card} />
                                ))}
                            </Grid>
                            <Grid>
                                <SeeAll to="/" />
                            </Grid>
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

export default WalletPageContainer;
