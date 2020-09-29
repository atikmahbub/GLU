import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import AspectRatioImgCard from '../../../components/Cards/AspectRationImgCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DateSubjectCard from '../../../components/Cards/DateSubjectCard';

const useStyles = makeStyles({
    root: {
        padding: '3.125rem 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderBottom: 0
        }
    },
    imgContainer: {
        paddingRight: '9.35rem',
    },
});

const UpcomingClassCard: FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container xs={4} className={classes.imgContainer}>
                <AspectRatioImgCard
                    ratio="76%"
                    img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607731/vrplayerboy_fyrdco.jpg"
                />
            </Grid>
            <Grid container xs={8}>
                <DateSubjectCard
                    subject="English"
                    subTitle="AED200"
                    name="Jen Holden"
                    description="How to structure narrative in fiction."
                    date="24/07/20"
                    startTime="3pm"
                    endTime="4.30pm"
                />
            </Grid>
        </Grid>
    );
};

export default UpcomingClassCard;
