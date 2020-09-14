import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { makeStyles } from '@material-ui/core';
import LeftGrid from './LeftGrid';
import RightGrid from './RightGrid';
import MadeBy from '../Footer/MadeBy';

const useStyles = makeStyles({
    footer: {
        marginTop: '5rem',
        position: 'absolute',
        top: '213rem',
    },
    mainPadding: {
        padding: '3.125rem',

        '&::after': {
            content: '',
            clear: 'both',
            display: 'table',
        },
    },
    topMarg: {
        marginTop: '10rem',
        marginBottom: '3rem',
    },
    mainGrid: {
        position: 'relative',
    },
});

const TutorEdit = () => {
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
                <LeftGrid />
                <RightGrid />
            </div>
            <div className={`footer ${classes.footer}`}>
                <MadeBy />
            </div>
        </NavigationMenu>
    );
};

export default TutorEdit;
