import React from 'react';
import { makeStyles } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import NavigationMenu from '../../components/NavigationMenu';
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
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const classes = useStyles();

    return (
        <NavigationMenu menuList={menu}>
            <div className={classes.mainPadding}>
                <ReviewHeader name="class" />
                <hr className={classes.topMarg} />
                <ClassReviewRating />
            </div>

            <div className={`footer ${classes.footer}`}>
                <MadeBy />
            </div>
        </NavigationMenu>
    );
};

export default ClassReview;
