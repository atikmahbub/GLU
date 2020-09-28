import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ClassesCarousel from './ClassesCarousel';
import WhiteCard from '../../../../components/Cards/WhiteCard';
import ProfileCard from '../../../../components/Cards/ProfileCard';
import CardsGridContainer from '../../../CardsGridContainer';
import CalendarDateSubjectsCard from '../../../../components/Cards/CalendarDateSubjectsCard';
import { calendarSubjectsCards } from '../../../../data/homepage';
import { DashboardPersonal, UserType } from '../../types';

const useStyles = makeStyles({
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
});

interface IPersonal extends DashboardPersonal, UserType {}

const Personal: FC<IPersonal> = ({ userType, previousClasses, upcomingClasses }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <CardsGridContainer background="secondary" paddingTop={false}>
                <Grid container className={classes.container}>
                    <WhiteCard
                        size={6}
                        title={'Upcoming\nClasses'}
                        titleRightLink="See upcoming"
                        titleRightLinkTo="/students/upcoming-classes"
                        content={<ClassesCarousel />}
                        titleClassName={classes.upcomingClassCardTitle}
                    />
                    <WhiteCard
                        size={3}
                        title="Previous Classes"
                        description="Purchased"
                        isLoading={previousClasses.isLoading}
                        value={previousClasses.count}
                        titleLink={`/${userType}/recorded-classes`}
                    />
                    <WhiteCard size={3} title="Whiteboard" description={'Try out what the class\nwill be like'} />
                </Grid>
                <Grid container className={classes.container} justify="space-between">
                    <WhiteCard
                        size={3}
                        title="Wallet"
                        description="Balance"
                        value="AED320"
                        titleLink={`/${userType}/wallet`}
                    />
                    <WhiteCard
                        size={6}
                        bigTitle
                        title={'Thursday 30th\nJuly\n2020'}
                        titleRightLink="See calendar"
                        titleRightLinkTo={`/${userType}/calendar`}
                        description="Upcoming classes"
                        value={upcomingClasses.count}
                        isLoading={upcomingClasses.isLoading}
                        titleClassName={classes.calendarCardTitle}
                    />
                </Grid>
            </CardsGridContainer>
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

export default Personal;
