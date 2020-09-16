import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TitlePrimary from '../Typographies/TitlePrimary';
import DateSubjectCard from './DateSubjectCard';
import { DateSubjectCardElement } from './types';

const useStyles = makeStyles({
    root: {
        padding: '6.25rem 3.125rem',
        paddingBottom: ({ paddingBottom }: any) => paddingBottom ? '6.25rem' : 0,
    },
    content: {
        borderTop: '1px solid rgba(0, 0, 0, 0.25)',
        paddingTop: '3.25rem'
    },
    cardsContainer: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.25)',
        paddingLeft: '1.5625rem',
        paddingRight: '1.5625rem'
    },
    card: {
        paddingBottom: '4.6875rem',
        marginBottom: '2.1875rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderBottom: 0,
            marginBottom: 0
        }
    }
})

interface ICalendarDateSubjectsCard {
    date: string;
    cards: DateSubjectCardElement[];
    paddingBottom?: boolean;
}

const CalendarDateSubjectsCard: FC<ICalendarDateSubjectsCard> = ({ date, cards, paddingBottom }) => {
    const classes = useStyles({ paddingBottom })
    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.content}>
                <Grid container item xs={6}>
                    <Grid container item xs={6}>
                        <TitlePrimary>Calendar</TitlePrimary>
                    </Grid>
                    <Grid container item xs={6}>
                        <TitlePrimary>{date}</TitlePrimary>
                    </Grid>
                </Grid>
                <Grid container item xs={6} className={classes.cardsContainer}>
                    <Grid container direction="column">
                        {cards.map((card, index) => (
                            <Grid container className={classes.card} key={index}>
                                <DateSubjectCard {...card} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

CalendarDateSubjectsCard.defaultProps = {
    cards: [],
    paddingBottom: true
}

export default memo(CalendarDateSubjectsCard)
