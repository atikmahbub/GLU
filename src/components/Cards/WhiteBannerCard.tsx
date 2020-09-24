import React, { FC, memo } from 'react';
import Div100vh from 'react-div-100vh';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        backgroundColor: "white",
        padding: '0 3.125rem',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading:{
        margin: 0,
        padding: 0,
        fontSize: '7.5rem',
        lineheight: '7.5rem',
        fontStyle: 'CircularXXTrial',
        opacity: 1,
        fontWeight: 500,
    },
    favoriteBox: {
        width: '100px',
        color: '#5F5F5F',
    },
    favoriteText: {
        fontSize: '1.25rem',
    },

});

export interface IWhiteBannerCarousal {
    subject: string;
    tutorsCount: number,
    classesCount: number,
}

const IndividualSubjectBannerCard: FC<IWhiteBannerCarousal> = ({ subject, tutorsCount, classesCount }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="flex-end" component={Div100vh} className={classes.root}>
            <Typography className={classes.heading}>
                    {subject} 
            </Typography>
            <Typography className={classes.heading}> 
            </Typography>

            <Typography className={classes.heading}>
                    We have {tutorsCount}  Tutors
            </Typography>

            <Typography className={classes.heading}>
                    and {classesCount} Classes
            </Typography>
            <Grid container className={classes.favoriteBox}>
                <FavoriteBorder />
                <Typography style={{ marginLeft: '7px' }} className={classes.favoriteText}>Favorite</Typography>
            </Grid>
        </Grid>
    );
};

export default memo(IndividualSubjectBannerCard);
