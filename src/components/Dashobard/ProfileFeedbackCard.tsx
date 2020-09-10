import React from 'react';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';
import { useHistory } from 'react-router';
import classNames from 'classnames';

const useStyles = makeStyles({
    root: {
        padding: '2.875rem 1.875rem',
    },
    spacingBottom: {
        marginBottom: '2.5rem',
    },
    parentBorder: {
        borderBottom: `1px solid ${colors.borderGray}`,
        paddingBottom: '1rem',
        marginBottom: '1rem'
    },
    heading: {
        fontSize: '1.875rem',
        lineHeight: '2.187rem',
        color: colors.black,
        fontWeight: 500,
    },
    imageWidth: {
        width: '80%',
    },
    image: {
        width: '3.75rem',
        height: '3.75rem',
        objectFit: 'cover',
        marginRight: '1.25rem',
    },
    title: {
        fontSize: '1.25rem',
        lineHeight: '1.437rem',
        color: colors.black,
    },
    link: {
        fontSize: '1rem',
        color: colors.primary,
    },
    percent: {
        fontSize: '1.25rem',
        lineHeight: '1.562rem',
    },
});

type dataType = { image: string; title: string; linkName: string; linkTo: string; percent: string };
interface props {
    headingOne: string;
    headingTwo?: string;
    data: Array<dataType>;
}
const ProfileFeedbackCard: React.FunctionComponent<props> = ({ headingOne, headingTwo, data }) => {
    const classes = useStyles();
    const routes = useHistory();
    const handleRoute = (link: string) => {
        if (link !== '' && link !== undefined) {
            routes.push(link);
        }
    };
    return (
        <Box component="div" className={classes.root}>
            <Typography className={classes.heading}>{headingOne}</Typography>
            <Typography className={classNames(classes.heading, classes.spacingBottom)}>{headingTwo}</Typography>
            {data.map((item: dataType) => (
                <Grid container alignItems="center" justify="space-between" className={classes.parentBorder}>
                    <Grid container alignItems="center" justify="flex-start" className={classes.imageWidth}>
                        <img src={item.image} className={classes.image} alt="" />
                        <Box component="div">
                            <Typography className={classes.title}>{item.title}</Typography>
                            <Typography className={classes.link} onClick={() => handleRoute(item.linkTo)}>
                                {item.linkName}
                            </Typography>
                        </Box>
                    </Grid>
                    <Typography className={classes.percent}>{item.percent}</Typography>
                </Grid>
            ))}
        </Box>
    );
};

export default ProfileFeedbackCard;
