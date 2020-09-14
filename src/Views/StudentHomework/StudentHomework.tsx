import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import MadeBy from '../Footer/MadeBy';
import { makeStyles } from '@material-ui/core';
import StudentHomeworkHeader from './StudentHomeworkHeader';
import StudentHomeworkSubmission from './StudentHomeworkSubmission';
import StudentHomeworkFeedback from './StudentHomeworkFeedback';

const useStyles = makeStyles({
    body: {
        padding: '3.0625rem',
    },
    topMarg: {
        marginTop: '6.28125rem',
    },
    footerTopMargin: {
        marginTop: '3.28125rem',
    },
});

const StudentHomework = () => {
    const classes = useStyles();
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];

    return (
        <NavigationMenu menuList={menu} background="secondary">
            <StudentHomeworkHeader />
            <div className={classes.body}>
                <hr className={classes.topMarg} />
                <StudentHomeworkSubmission />
                <hr className={classes.topMarg} />
                <StudentHomeworkFeedback />
            </div>
            <div className={`footer ${classes.footerTopMargin}`}>
                <MadeBy />
            </div>
        </NavigationMenu>
    );
};

export default StudentHomework;
