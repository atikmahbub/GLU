import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import WhiteCard from '../../../../components/Cards/WhiteCard';
import LineChart from '../../../../components/Charts/LineChart';
import ProfileCard from '../../../../components/Cards/ProfileCard';
import CardsGridContainer from '../../../CardsGridContainer';
import CalendarDateSubjectsCard from '../../../../components/Cards/CalendarDateSubjectsCard';
import { DashboardSchool, UserType } from '../../types';
import { getCurrentTime } from '../../../../Helper/date';

const useStyles = makeStyles({
    container: {
        marginBottom: '3.125rem',
    },
    calendarCardTitle: {
        marginBottom: '10.875rem',
    },
});

interface ISchool extends DashboardSchool, UserType {}

const School: FC<ISchool> = ({ userType, homework, upcomingClasses, profile, dateSubjectCards }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid container direction="column">
                <CardsGridContainer background="secondary" paddingTop={false}>
                    <Grid container className={classes.container}>
                        <WhiteCard
                            size={6}
                            title={'Class Reports\nMar-Aug'}
                            titleRightLink="See reports"
                            titleRightLinkTo="/students/reports"
                            content={<LineChart />}
                        />
                        <WhiteCard size={3} title="School Timetable" description="Classes" value="5" />
                        <WhiteCard size={3} title="School Info" titleLink={`/${userType}/school/info`} description="Secondary" value="Dubai, UAE" />
                    </Grid>
                    <Grid container className={classes.container}>
                        <WhiteCard
                            size={3}
                            title="Homework"
                            description="Assignment"
                            titleLink={`/${userType}/homework`}
                            value={homework.count}
                            isLoading={homework.isLoading}
                        />
                        <WhiteCard size={3} title="Recommended" description="Total" value="12" />
                        <WhiteCard
                            size={6}
                            bigTitle
                            title={'Thursday 30th\nJuly\n2020'}
                            titleRightLink="See calendar"
                            titleRightLinkTo={`/${userType}/calendar`}
                            description="Upcoming classes"
                            isLoading={upcomingClasses.isLoading}
                            value={upcomingClasses.count}
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
                </CardsGridContainer>
            </Grid>
            <ProfileCard seeLink={`/${userType}/profile`} editLink={`/${userType}/profile/edit`} {...profile} />
            <CardsGridContainer background="secondary">
                <CalendarDateSubjectsCard
                    background="secondary"
                    padding={false}
                    paddingBottom={false}
                    title="Your Morning"
                    time={getCurrentTime()}
                    cards={dateSubjectCards}
                    cardsContainerPaddingBig
                />
            </CardsGridContainer>
        </Grid>
    );
};

export default School;
