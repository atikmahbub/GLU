import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { makeStyles, Typography } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import Header from './Header';
import UpcomingClasses from './UpcomingClass';
import PrevClasses from './PreviousClass';
import PageFooter from './../../components/PageFooter';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#F7F7F7',
    },
    head: {
        padding: '0 3.125rem',
        paddingTop: '1rem',
        backgroundColor: '#F7F7F7',
    },
    body1: {
        padding: '0 3.125rem',
    },
    body2: {
        backgroundColor: '#F7F7F7',
        padding: '0 3.125rem',
    },

    headerText: {
        fontSize: '2.265rem',
    },
});

const TutorUpcomingClass = () => {
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
                <div className={classes.body1}>
                    <UpcomingClasses />
                </div>
                <div className={classes.body2}>
                    <PrevClasses />
                </div>
                <div className={classes.footer}>
                    <PageFooter />
                </div>
            </NavigationMenu>
        </div>
    );
};

export default TutorUpcomingClass;