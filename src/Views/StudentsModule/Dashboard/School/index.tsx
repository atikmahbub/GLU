import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import WhiteCard from '../../../../components/Cards/WhiteCard';
import LineChart from '../../../../components/Charts/LineChart';
import ProfileCard from '../../../../components/Cards/ProfileCard';
import Schedule from '../../../../components/Schedule';

const useStyles = makeStyles({
    container: {
        marginBottom: '3.125rem',
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

const School: FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid container direction="column">
                <Grid container className={classes.container}>
                    <WhiteCard
                        size={6}
                        title={'Class Reports\nMar-Aug'}
                        titleRightLink="See reports"
                        titleRightLinkTo="/students/reports"
                        content={<LineChart />}
                    />
                    <WhiteCard size={3} title="School Timetable" description="Classes" value="5" />
                    <WhiteCard size={3} title="School Info" description="Secondary" value="Dubai, UAE" />
                </Grid>
                <Grid container className={classes.container}>
                    <WhiteCard size={3} title="Homework" description="Assignment" value="34" />
                    <WhiteCard size={3} title="Recommended" description="Total" value="12" />
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
                <Grid container justify="flex-end" className={classes.container}>
                    <WhiteCard
                        size={3}
                        title="Whiteboard"
                        description={'Try out what the class\nwill be like'}
                        forcePadding
                    />
                    <WhiteCard
                        size={3}
                        title="School Bus Tracking"
                        description={'Try out what the class\nwill be like'}
                    />
                </Grid>
            </Grid>
            <ProfileCard
                name="Frank Howard"
                address="Dubai, UAE"
                phone="(+971) 4 554 0350"
                rootClassName={classes.profileCardRoot}
            />
            <Schedule title="This Morning" time="9.21am" />
        </Grid>
    );
};

export default School;
