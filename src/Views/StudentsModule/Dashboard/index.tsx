import React, { FC, useCallback, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Tabs from './Tabs';
import School from './School';
import Personal from './Personal';
import NavigationMenu from '../../../components/NavigationMenu';
import Drawer from '../../../components/Drawer';
import Notifications from '../Notifications';

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

const StudentsDashboard: FC = () => {
    const classes = useStyles();
    const [isDrawer, setDrawer] = useState(false);

    const toggleDrawer = useCallback(() => {
        setDrawer((prevState) => !prevState);
    }, []);

    const [activeTab, setActiveTab] = useState('personal');
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
                <Grid container direction="column">
                    <Tabs value={activeTab} onChange={setActiveTab} />
                    {activeTab === 'school' && <School />}
                    {activeTab === 'personal' && <Personal />}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default StudentsDashboard;
