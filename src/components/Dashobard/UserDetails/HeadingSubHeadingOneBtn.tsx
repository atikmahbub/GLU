import React from 'react';
import { Grid, makeStyles, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { colors } from '../../../Styles/colors';

const useStyles = makeStyles({
    parent: {
        padding: '2.437rem 3.125rem',
        marginBottom: '0.65rem',
        backgroundColor: colors.white,
    },
    title: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        color: colors.black,
        fontWeight: 500,
    },
    subtitle: {
        fontSize: '1.125rem',
        lineHeight: '1.562rem',
        color: '#5F5F5F',
        fontWeight: 500,
    },
    link: {
        textDecoration: 'none!important',
        fontSize: '1.25rem',
        lineHeight: '1.562rem',
    },
});

interface props {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    linkTo: string;
}
const HeadingSubHeadingOneBtn: React.FunctionComponent<props> = ({ title, subtitle, buttonText, linkTo }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.parent} alignItems="center" justify="space-between">
            <Box component="div">
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.subtitle}>{subtitle}</Typography>
            </Box>
            <Typography className={classes.link} component={Link} to={linkTo}>
                {buttonText}
            </Typography>
        </Grid>
    );
};

export default HeadingSubHeadingOneBtn;
