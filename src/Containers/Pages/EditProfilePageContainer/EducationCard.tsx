import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import { EducationCardElement } from '../../../components/Cards/types';

const useStyles = makeStyles({
    root: {
        padding: '3.125rem 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderBottom: 0
        }
    },
    button: {
        fontSize: '1.25rem',
        marginRight: '1.875rem',
        '&:last-child': {
            marginRight: 0
        }
    },
    titleContainer: {
        marginBottom: '1.5625rem'
    },
})

interface IEducationCard extends EducationCardElement {}

const EducationCard: FC<IEducationCard> = ({ type, name, level, subjects }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container justify="space-between" className={classes.titleContainer}>
                <TextPrimary>{type === 'current' ? 'Current Education' : 'Previous Education'}</TextPrimary>
                <Grid container justify="flex-end" item xs={6}>
                    <ButtonPrimary color="secondary" className={classes.button}>Edit</ButtonPrimary>
                    <ButtonPrimary color="secondary" className={classes.button}>Delete</ButtonPrimary>
                </Grid>
            </Grid>
            <Grid container direction="column">
                <TitlePrimary>{name}</TitlePrimary>
                <TitlePrimary>{level}</TitlePrimary>
                <TitlePrimary>{subjects}</TitlePrimary>
            </Grid>
        </Grid>
    )
}

export default EducationCard
