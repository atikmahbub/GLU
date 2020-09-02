import React, { FC, ReactNode, useCallback, useState } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import DrawerProvider from '../../Providers/DrawerProvider';
import Notifications from './Notifications';

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

type StudentsPageContainerProps = {
    rootClassName?: string;
    contentClassName?: string;
    children: ReactNode;
};

const StudentsPageContainer: FC<StudentsPageContainerProps> = ({ rootClassName, contentClassName, children }) => {
    const classes = useStyles();
    const [isDrawer, setDrawer] = useState(false);

    const toggleDrawer = useCallback(() => {
        setDrawer((prevState) => !prevState);
    }, []);

    return (
        <DrawerProvider open={isDrawer} onClose={toggleDrawer} drawerContent={<Notifications />}>
            <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
                <NavigationMenu
                    handlerNotification={toggleDrawer}
                    menuList={navigations}
                    containerClassName={classes.navigationContainer}
                />
                <Grid container direction="column" className={classNames(classes.content, contentClassName)}>
                    {children}
                </Grid>
            </Grid>
        </DrawerProvider>
    );
};

export default StudentsPageContainer;
