import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { use100vh } from 'react-div-100vh';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGridContainer from '../../CardsGridContainer';
import CardsGrid from '../../CardsGrid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import CurrencyButton from '../../../components/Wallet/CurrencyButton';
import { UserType } from '../types';
import PageFooter from '../../../components/PageFooter';

const useStyles = makeStyles({
    root: {
        minHeight: ({ height }: any) => height,
    },
    rightContainer: {
        position: 'relative',
    },
    titleContainer: {
        marginBottom: '2.5rem',
    },
    title: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
    buttonAdd: {
        marginRight: '0.625rem',
        cursor: 'pointer',
        fontSize: '1.75rem',
    },
    link: {
        fontSize: '1.125rem',
        display: 'flex',
        '&:hover': {
            textDecoration: 'none',
        },
    },
    linkContainer: {
        marginBottom: '4.6875rem',
    },
    current: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    currency: {
        verticalAlign: '0.6em',
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    }
});

interface INoActivity extends UserType {}

const NoActivity: FC<INoActivity> = ({ userType }) => {
    const height = use100vh();
    const classes = useStyles({ height });
    return (
        <CardsGridContainer rootClassName={classes.root} paddingBottom={false}>
            <Grid container direction="column" justify="space-between">
                <CardsGrid rows={2}>
                    <Grid container>
                        <TitlePrimary variant="h4">Wallet</TitlePrimary>
                    </Grid>
                    <Grid container>
                        <Grid container direction="column" className={classes.rightContainer}>
                            <CurrencyButton />
                            <Grid container className={classes.titleContainer}>
                                <Grid container item xs={11}>
                                    <Typography variant="h2" className={classes.title}>
                                        Looks like you need to add some money.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.linkContainer}>
                                <Link to={`/${userType}/wallet/top-on`} className={classes.link}>
                                    <i className={classNames('icon-Add', classes.buttonAdd)} />
                                    Add money
                                </Link>
                            </Grid>
                            <Grid container direction="column">
                                <TitlePrimary>
                                    0<span className={classes.currency}>AED</span>
                                </TitlePrimary>
                                <Typography className={classes.current}>Current Balance</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardsGrid>
                <PageFooter padding={false} />
            </Grid>
        </CardsGridContainer>
    );
};

export default NoActivity;
