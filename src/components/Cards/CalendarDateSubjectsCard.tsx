import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TitlePrimary from '../Typographies/TitlePrimary';
import DateSubjectCard from './DateSubjectCard';
import { DateSubjectCardElement } from './types';

const useStyles = makeStyles({
    root: {
        padding: ({ padding }: any) => (padding ? '6.25rem 3.125rem' : 0),
        paddingBottom: ({ paddingBottom }: any) => (paddingBottom ? '6.25rem' : 0),
        background: ({ background }: any) => (background === 'primary' ? '#fff' : '#F7F7F7'),
    },
    content: {
        borderTop: '1px solid rgba(0, 0, 0, 0.25)',
        paddingTop: '3.25rem',
    },
    leftColumn: {
        paddingRight: '3.125rem',
    },
    cardsContainer: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.25)',
        paddingLeft: ({ cardsContainerPaddingBig }: any) => cardsContainerPaddingBig ? '3.125rem' : '1.5625rem',
        paddingRight: '1.5625rem',
    },
    card: {
        paddingBottom: '4.6875rem',
        marginBottom: '2.1875rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderBottom: 0,
            marginBottom: 0,
        },
    },
});

interface ICalendarDateSubjectsCard {
    title?: string;
    date?: string;
    time?: string;
    cards: DateSubjectCardElement[];
    padding?: boolean;
    paddingBottom?: boolean;
    cardsContainerPaddingBig?: boolean;
    background?: 'primary' | 'secondary';
}

const CalendarDateSubjectsCard: FC<ICalendarDateSubjectsCard> = ({
    title = 'Calendar',
    date,
    time,
    cards,
    padding,
    paddingBottom,
    cardsContainerPaddingBig,
    background,
}) => {
    const classes = useStyles({ padding, paddingBottom, background, cardsContainerPaddingBig });
    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.content}>
                <Grid container item xs={6} className={classes.leftColumn}>
                    <Grid container item xs={6}>
                        <TitlePrimary>{title}</TitlePrimary>
                    </Grid>
                    <Grid container justify="space-between" item xs={6}>
                        <TitlePrimary>{date}</TitlePrimary>
                        {time && <TitlePrimary>{time}</TitlePrimary>}
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
    );
};

CalendarDateSubjectsCard.defaultProps = {
    cards: [],
    padding: true,
    paddingBottom: true,
    background: 'primary',
};

export default memo(CalendarDateSubjectsCard);
