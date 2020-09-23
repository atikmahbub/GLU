import React, { FC, memo } from 'react';
import Div100vh from 'react-div-100vh';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        // background: ({ img }: any) => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img}) center / cover`,
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
        // lineheight: '7.5rem',
        fontStyle: 'CircularXXTrial',
        opacity: 1,
        fontWeight: 500,
    },
    favoriteBox: {
        // marginLeft: "7px",
        width: '100px',
        color: '#5F5F5F',
    },
    favoriteText: {
        fontSize: '1.25rem',
    },

});

export interface IWhiteBannerCarousal {
    text: string;
}

const IndividualSubjectBannerCard: FC<IWhiteBannerCarousal> = ({ text }) => {
    const classes = useStyles({ text });
    return (
        <Grid container direction="column" justify="flex-end" component={Div100vh} className={classes.root}>
                    <Typography className={classes.heading}>
                         {text}
                    </Typography>
                    <Typography className={classes.heading}> 
                    </Typography>

                    <Typography className={classes.heading}>
                          We have 71 Tutors
                    </Typography>

                    <Typography className={classes.heading}>
                         and 308 Classes
                    </Typography>
                    <Grid container className={classes.favoriteBox}>
                        <FavoriteBorder />
                        <Typography style={{ marginLeft: '7px' }} className={classes.favoriteText}>Favorite</Typography>
                    </Grid>
        </Grid>
    );
};

export default memo(IndividualSubjectBannerCard);
