import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { makeStyles, Typography } from '@material-ui/core';
import Header from './Header';
import PageFooter from './../../components/PageFooter';
import UpcomingClass from '../TutorUpcomingClass/UpcomingClass';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#F7F7F7',
    },
    head: {
        padding: '0 3.125rem',
        paddingTop: '1rem',
        backgroundColor: '#F7F7F7',
        paddingBottom: '9.06rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    body: {
        padding: '0 3.125rem',
    },
    body2: {
        backgroundColor: '#F7F7F7',
        padding: '0 3.125rem',
    },

    headerText: {
        fontSize: '2.265rem',
        fontFamily: 'CircularXXWeb-Book',
    },
});

const TutorExtraCurr = () => {
    const classes = useStyles();
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];

    return (
        <div>
            <NavigationMenu background="secondary" menuList={menu}>
                <div className={classes.head}>
                    <Header />
                </div>
                <div className={classes.body}>
                    <UpcomingClass />
                </div>

                <div className="commonFooter">
                    <PageFooter />
                </div>
            </NavigationMenu>
        </div>
    );
};

export default TutorExtraCurr;
