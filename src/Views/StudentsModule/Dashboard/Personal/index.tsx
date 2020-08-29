import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ClassesCarousel from './ClassesCarousel';
import WhiteCard from '../../../../components/Cards/WhiteCard';
import ProfileCard from '../../../../components/Cards/ProfileCard';
import Schedule from '../../../../components/Schedule';

const useStyles = makeStyles({
    cardsWrapper: {
        paddingBottom: '9.375rem',
    },
    container: {
        marginBottom: '3.125rem',
        '&:last-child': {
            marginBottom: 0,
        },
    },
    upcomingClassCardTitle: {
        marginBottom: '5rem',
    },
    calendarCardTitle: {
        marginBottom: '10.875rem',
    },
    profileCardRoot: {
        width: 'calc(100% + (3.125rem * 2))',
        marginLeft: '-3.125rem',
        marginBottom: '9.375rem',
    },
});

const Personal: FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid container direction="column" className={classes.cardsWrapper}>
                <Grid container className={classes.container}>
                    <WhiteCard
                        size={6}
                        title={'Upcoming\nClasses'}
                        titleRightLink="See upcoming"
                        titleRightLinkTo="/students/"
                        content={<ClassesCarousel />}
                        titleClassName={classes.upcomingClassCardTitle}
                    />
                    <WhiteCard size={3} title="Previous Classes" description="Purchased" value="57" />
                    <WhiteCard size={3} title="Whiteboard" description={'Try out what the class\nwill be like'} />
                </Grid>
                <Grid container className={classes.container} justify="space-between">
                    <WhiteCard size={3} title="Wallet" description="Balance" value="AED320" />
                    <WhiteCard
                        size={6}
                        bigTitle
                        title={'Thursday 30th\nJuly\n2020'}
                        titleRightLink="See calendar"
                        titleRightLinkTo="/students/"
                        description="Upcoming classes"
                        value="4"
                        titleClassName={classes.calendarCardTitle}
                    />
                </Grid>
            </Grid>
            <ProfileCard
                name="Frank Howard"
                address="Dubai, UAE"
                phone="(+971) 4 554 0350"
                rootClassName={classes.profileCardRoot}
            />
            <Schedule title="Your Day" time="11.15am" />
        </Grid>
    );
};

export default Personal;
