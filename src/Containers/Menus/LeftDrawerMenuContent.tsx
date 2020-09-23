import React, { FC, memo, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import { Typography } from '@material-ui/core';
import { UserTypes } from '../../Types/user';
import { createLeftDrawerMenuList, createLeftDrawerMenuListSecondary } from '../../Helper/menus';
import { menuListItem } from '../../Interfaces/menuTypes';
import { resetTokenAndLocalStorage } from '../../Utility/API';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    button: {
        fontSize: '1rem',
        marginRight: '1.25rem',
    },
    buttonSignOut: {
        color: '#5F5F5F',
    },
    menuList: {
        marginBottom: '1.75rem',
    },
    link: {
        fontSize: '5rem',
        lineHeight: '5rem',
        color: 'unset',
        textDecoration: 'none !important',
        '&:hover': {
            color: 'unset',
        },
    },
    linkSmall: {
        fontSize: '1.5625rem',
        lineHeight: '2.0625rem',
    },
});

interface ILeftDrawerMenuContent {
    userType: UserTypes;
}

const LeftDrawerMenuContent: FC<ILeftDrawerMenuContent> = ({ userType }) => {
    const classes = useStyles();
    const menuList: menuListItem[] = useMemo(() => createLeftDrawerMenuList(userType), [userType]);
    const menuListSecondary: menuListItem[] = useMemo(() => createLeftDrawerMenuListSecondary(userType), [userType]);
    const history = useHistory();
    const resetAuth = () => {
        resetTokenAndLocalStorage();
        history.push('/');
    };
    return (
        <Grid container direction="column" justify="space-between" className={classes.root}>
            <Grid container direction="column">
                <Grid container direction="column" className={classes.menuList}>
                    {menuList.map(({ name, link = '/' }, index) => (
                        <Typography key={index} className={classes.link} component={Link} to={link}>
                            {name}
                        </Typography>
                    ))}
                </Grid>
                <Grid container direction="column">
                    {menuListSecondary.map(({ name, link = '/' }, index) => (
                        <Typography
                            key={index}
                            className={classNames(classes.link, classes.linkSmall)}
                            component={Link}
                            to={link}
                        >
                            {name}
                        </Typography>
                    ))}
                </Grid>
            </Grid>
            <Grid container>
                <ButtonPrimary className={classes.button}>Harrison Marshall</ButtonPrimary>
                <ButtonPrimary className={classNames(classes.button, classes.buttonSignOut)} onClick={resetAuth}>
                    Sign out
                </ButtonPrimary>
            </Grid>
        </Grid>
    );
};

export default memo(LeftDrawerMenuContent);
