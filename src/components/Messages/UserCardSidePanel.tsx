import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Container } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

type Props = {
    key: number,
    image: string,
    userName: string,
    onlineStatus: string,
}

const useStyles = makeStyles({
    userContainer: {
        marginTop: "30px"
    },
    imageContainer: {
        height: '42px',
        width: '42px',
        marginTop: '6px',
        marginRight: '25px',
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    userName: {
        fontSize: '25px',
        lineHeight: '30px',
    },
    onlineStatus: {
        fontSize: '18px',
        lineHeight: '25px',
        color: '#5F5F5F',
    },
    onlineDotContainer:{
        height: '11px',
        width: '11px',
        marginRight: 0,
        backgroundColor: '#00A800',
        marginLeft: '187px',
        marginTop: 'auto',
        marginBottom: 'auto',
        borderRadius: '50%',
    },
});



const UserCardSidePanel: FC<Props> = ({ key, image, userName, onlineStatus }) => {
    const classes = useStyles();
    return (
        <>
            {/* <Grid key={key} container item xs={6} className={classes.userContainer}> */}

                <Grid className={classes.imageContainer}>
                    <img className={classes.image} src={image} />
                </Grid>
                <Grid>
                    <Typography className={classes.userName}> {userName}</Typography>
                    <Typography className={classes.onlineStatus}>{onlineStatus}</Typography>
                </Grid>
                <Grid container className={classes.onlineDotContainer} alignItems="center"/>
            {/* </Grid> */}
        </>
    )
}

export default UserCardSidePanel;
