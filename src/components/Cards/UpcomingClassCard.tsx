import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AspectRatioImgCard from './AspectRationImgCard';
import TitlePrimary from '../Typographies/TitlePrimary';
import DateSubjectCard from './DateSubjectCard';
import IconCircle from '../Icons/IconCircle';

const useStyles = makeStyles({
    root: {
        padding: '9.375rem 3.125rem',
        background: '#F7F7F7',
    },
    content: {
        paddingLeft: '10.4375rem',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
    },
    iconAdd: {
        fontSize: '1.5rem',
        cursor: 'pointer',
    },
});

const UpcomingClassCard: FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container item xs={5}>
                <AspectRatioImgCard
                    img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607715/blackbluetop_ggjltn.jpg"
                    ratio="76%"
                />
            </Grid>
            <Grid container item xs={7} className={classes.content}>
                <Grid container direction="column" justify="space-between">
                    <Grid container>
                        <TitlePrimary className={classes.title}>
                            <IconCircle />
                            Upcoming Class
                        </TitlePrimary>
                    </Grid>
                    <Grid container>
                        <Grid container item xs={10}>
                            <DateSubjectCard
                                date="24/07/20"
                                startTime="3pm"
                                endTime="4.30pm"
                                subject="English."
                                description="How to structure"
                                name="Jeff Lee"
                                subTitle="AED200"
                            />
                        </Grid>
                        <Grid container justify="flex-end" item xs={2}>
                            <i className={classNames('icon-Add', classes.iconAdd)} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(UpcomingClassCard);
