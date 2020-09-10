import React from 'react';
import { makeStyles } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import NavigationMenuReusable from '../../components/NavigationMenuReusable';
import ReviewHeader from './ReviewHeader';
import TutorReviewRating from './TutorReviewRating';

const useStyles = makeStyles({
    footer: {
        marginTop: '5rem',
    },
    mainPadding: {
        padding: '3.0625rem',
    },
    topMarg: {
        marginTop: '10rem',
        marginBottom: '3rem',
    },
});

const TutorReview = () => {
    const classes = useStyles();

    return (
        <div>
            <NavigationMenuReusable />
            <div className={classes.mainPadding}>
                <ReviewHeader name="tutor" />
                <hr className={classes.topMarg} />
                <TutorReviewRating />
            </div>

            <div className={`footer ${classes.footer}`}>
                <MadeBy />
            </div>
        </div>
    );
};

export default TutorReview;
