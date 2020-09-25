import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DateSubjectCard from './DateSubjectCard';
import AspectRatioImgCard from './AspectRationImgCard';

const useStyles = makeStyles({
    root: {
        paddingBottom: '5rem',
    },
    imgContainer: {
        marginBottom: '4.3125rem',
    },
});

const ClassCard: FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container justify="flex-end">
                <Grid item xs={6} className={classes.imgContainer}>
                    <AspectRatioImgCard
                        img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1597322212/gluschool/tutorDashboard_plnp4i.jpg"
                        ratio="77%"
                    />
                </Grid>
            </Grid>
            <DateSubjectCard
                date="15/07/20"
                startTime="10am"
                endTime="10.45am"
                subject="French."
                description="How does language"
                subTitle="45mins"
                name="Harriet Earl"
            />
        </Grid>
    );
};

export default ClassCard;
