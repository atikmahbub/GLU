import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import NavigationMenu from '../../components/NavigationMenu';
import { studentMenus } from '../../Helper/studentMenus';

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

type StudentsPageContainerProps = {
    rootClassName?: string;
    contentClassName?: string;
    children: ReactNode;
};

const StudentsPageContainer: FC<StudentsPageContainerProps> = ({ rootClassName, contentClassName, children }) => {
    const classes = useStyles();
    return (
        <NavigationMenu
            menuList={studentMenus}
            containerClassName={classes.navigationContainer}
        >
            <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
                <Grid container direction="column" className={classNames(classes.content, contentClassName)}>
                    {children}
                </Grid>
            </Grid>
        </NavigationMenu>
    );
};

export default StudentsPageContainer;
