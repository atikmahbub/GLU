import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
import TitlePrimary from '../Typographies/TitlePrimary';
import BarChart from '../Charts/BarChart';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    root: {
        borderTop: '1px solid rgba(0, 0, 0, 0.25)'
    },
    accordionRoot: {
        width: 'inherit',
        boxShadow: 'none'
    },
    accordionSummary: {
        width: 'inherit',
        '& .MuiAccordionSummary-content': {
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 0,
            padding: '2.25rem 0'
        }
    },
    accordionDetails: {
        paddingTop: '1.25rem',
        paddingBottom: '5rem'
    },
    detailsTitleContainer: {
        marginBottom: '3.6875rem'
    },
    detailsInfoTitle: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        marginBottom: '1.1875rem'
    },
    detailsInfoText: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        color: '#5F5F5F',
        marginBottom: '2.1875rem'
    },
    readMoreText: {
        color: colors.primary,
        cursor: 'pointer',
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        marginBottom: '4.6875rem'
    }
})

type ExamResultCardProps = {
    title: string;
    date: string;
    description: string;
    notesTitle: string;
    notesText: string;
}

const ExamResultCard: FC<ExamResultCardProps> = ({ title, date, description, notesTitle, notesText }) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Accordion square className={classes.accordionRoot}>
                <AccordionSummary className={classes.accordionSummary}>
                    <TitlePrimary>{title}</TitlePrimary>
                    <AddIcon />
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                    <Grid container direction="column">
                        <Grid container className={classes.detailsTitleContainer}>
                            <Grid container direction="column" item xs={4}>
                                <TitlePrimary>Date</TitlePrimary>
                                <TitlePrimary>{date}</TitlePrimary>
                            </Grid>
                            <Grid container direction="column" item xs={8}>
                                <TitlePrimary>Tutor</TitlePrimary>
                                <TitlePrimary>{description}</TitlePrimary>
                            </Grid>
                        </Grid>
                        <Grid container direction="column">
                            <Typography className={classes.detailsInfoTitle}>{notesTitle}</Typography>
                            <Typography className={classes.detailsInfoText}>
                                {notesText}
                            </Typography>
                            <Typography className={classes.readMoreText}>Read more</Typography>
                        </Grid>
                        <Grid>
                            <BarChart chartWidth={410} chartHeight={170} />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Grid>
    )
}

export default memo(ExamResultCard)
