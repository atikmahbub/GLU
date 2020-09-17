import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';
import PageFooter from '../../components/PageFooter';
import LeftGrid from './LeftGrid';
import RightGrid from './RightGrid';

const useStyles = makeStyles({
    body: {
        padding: '3rem 3.125rem 0 3.125rem',
    },
});

const Index = () => {
    const classes = useStyles();
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];

    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={"show"} reverseButtons={'yes'} background="primary">
            <div className={classes.body}>
                <Grid container spacing={4}>
                    <LeftGrid />
                    <RightGrid />
                </Grid>
            </div>
            <div className="commonFooter">
                <PageFooter />
            </div>
        </NavigationMenu>
    );
};

export default Index;
