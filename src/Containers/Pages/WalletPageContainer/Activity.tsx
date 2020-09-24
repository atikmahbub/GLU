import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGridContainer from '../../CardsGridContainer';
import CardsGrid from '../../CardsGrid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import PercentCard from '../../../components/Cards/PercentCard';
import CurrencyButton from '../../../components/Wallet/CurrencyButton';
import BarChart from '../../../components/Charts/BarChart';
import ColumnsContainer from '../../ColumnsContainer';
import WalletActivityAccordion from '../../../components/Accordions/WalletActivityAccordion';
import SeeAll from '../../../components/Typographies/SeeAll';
import { activity, barChart } from '../../../data/wallet';
import { UserTypes } from '../../../Types/user';

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
        position: 'relative',
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
});

interface IActivity {
    userType: UserTypes;
}

const Activity: FC<IActivity> = ({ userType }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <CardsGridContainer background="secondary">
                <CardsGrid rows={2}>
                    <Grid container>
                        <Grid container direction="column">
                            <Grid container alignItems="center">
                                <TitlePrimary>Wallet</TitlePrimary>
                                <Link to={`/${userType}/wallet/top-on`} className={classes.link}>
                                    <i className={classNames('icon-Add', classes.buttonAdd)} />
                                </Link>
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
        </Grid>
    );
};

export default Activity;
