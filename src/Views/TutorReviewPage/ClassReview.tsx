import React from 'react';
import { makeStyles } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import NavigationMenuReusable from '../../components/NavigationMenuReusable';
import ReviewHeader from './ReviewHeader';
import ClassReviewRating from './ClassReviewRating';

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

const ClassReview = () => {
    const classes = useStyles();

    return (
        <div>
            <NavigationMenuReusable />
            <div className={classes.mainPadding}>
                <ReviewHeader name="class" />
                <hr className={classes.topMarg} />
                <ClassReviewRating />
            </div>

            <div className={`footer ${classes.footer}`}>
                <MadeBy />
            </div>
        </div>
    );
};

export default ClassReview;
