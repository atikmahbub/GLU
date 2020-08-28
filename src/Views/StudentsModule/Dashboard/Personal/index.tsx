import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '../Card';
import ClassCard from './ClassCard';

const useStyles = makeStyles({
    container: {
        marginBottom: '3.125rem',
    },
    upcomingClassCardTitle: {
        marginBottom: '5rem'
    }
});

const Personal: FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid container className={classes.container}>
                <Card
                    size={6}
                    title={'Upcoming\nClasses'}
                    titleRightLink="See upcoming"
                    titleRightLinkTo="/students/"
                    content={<ClassCard />}
                    titleClassName={classes.upcomingClassCardTitle}
                />
                <Card size={3} title="Previous Classes" description="Purchased" value="57" />
                <Card size={3} title="Whiteboard" description={'Try out what the class\nwill be like'} />
            </Grid>
            <Grid container className={classes.container} justify="space-between">
                <Card size={3} title="Wallet" description="Balance" value="AED320" />
                <Card
                    size={6}
                    bigTitle
                    title={'Thursday 30th\nJuly\n2020'}
                    titleRightLink="See calendar"
                    titleRightLinkTo="/students/"
                    description="Upcoming classes"
                    value="4"
                />
            </Grid>
        </Grid>
    );
};

export default Personal;
