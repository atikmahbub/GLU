import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import WhiteCard from '../../../../components/Cards/WhiteCard';
import LineChart from '../../../../components/Charts/LineChart';
import ProfileCard from '../../../../components/Cards/ProfileCard';
import CardsGridContainer from '../../../CardsGridContainer';
import CalendarDateSubjectsCard from '../../../../components/Cards/CalendarDateSubjectsCard';
import { calendarSubjectsCards } from '../../../../data/homepage';
import { UserTypes } from '../../../../Types/user';

const useStyles = makeStyles({
    container: {
        marginBottom: '3.125rem',
    },
    calendarCardTitle: {
        marginBottom: '10.875rem',
    },
});

interface ISchool {
    userType: UserTypes;
}

const School: FC<ISchool> = ({ userType }) => {
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
                        <WhiteCard size={3} title="School Info" description="Secondary" value="Dubai, UAE" />
                    </Grid>
                    <Grid container className={classes.container}>
                        <WhiteCard size={3} title="Homework" description="Assignment" titleLink={`/${userType}/homework`} value="34" />
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
                </CardsGridContainer>
            </Grid>
            <ProfileCard
                name="Frank Howard"
                address="Dubai, UAE"
                phone="(+971) 4 554 0350"
                email="frankhwrd@gmail.com"
            />
            <CardsGridContainer background="secondary">
                <CalendarDateSubjectsCard
                    background="secondary"
                    padding={false}
                    paddingBottom={false}
                    title="Your Morning"
                    time="9.21am"
                    cards={calendarSubjectsCards}
                    cardsContainerPaddingBig
                />
            </CardsGridContainer>
        </Grid>
    );
};

export default School;
