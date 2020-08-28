import React, { FC, useCallback, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import Notifications from './Notifications';
import Drawer from '../../components/Drawer';
import routes from '../../Routes/Students';

const useStyles = makeStyles({
    root: {
        background: '#F7F7F7',
        minHeight: '100vh',
    },
    navigationContainer: {
        backgroundColor: '#F7F7F7 !important',
    },
    content: {
        padding: '3.75rem 3.125rem',
    },
});

const navigations = [
    { name: 'Home', link: '/students/' },
    { name: 'Dashboard', link: '/students/dashboard' },
    { name: 'Subject', link: '/students/' },
    { name: 'Messages', link: '/students/' },
];

const StudentsModule: FC = () => {
    const classes = useStyles();
    const [isDrawer, setDrawer] = useState(false);

    const toggleDrawer = useCallback(() => {
        setDrawer((prevState) => !prevState);
    }, []);

    return (
        <Grid container direction="column" className={classes.root}>
            <NavigationMenu
                handler={toggleDrawer}
                menuList={navigations}
                containerClassName={classes.navigationContainer}
            />
            <Drawer open={isDrawer} onClose={toggleDrawer}>
                <Notifications />
            </Drawer>
            <Grid container direction="column" className={classes.content}>
                <Switch>
                    {routes.map((route, index) => (
                        <Route key={index} {...route} />
                    ))}
                    <Redirect to="/students/" />
                </Switch>
            </Grid>
        </Grid>
    );
};

export default StudentsModule;
