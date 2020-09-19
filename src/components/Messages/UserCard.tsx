import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import OneImage from './images/one'

const useStyles = makeStyles({
    imageContainer:{
        height: '42px',
        width: '42px',
        marginTop: '6px',
        marginRight: '25px',
    },
    image:{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    userName:{
        fontSize: '25px',
        lineHeight: '30px',
    },
    onlineStatus:{        
        fontSize: '18px',
        lineHeight: '25px',
        color: '#5F5F5F',
    }
})

export default function userCard() {
    const classes = useStyles();
    return (
        <>
       
            <Grid className={classes.imageContainer}>
                    <img className={classes.image} src='https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607729/tablegirl_yg2bzv.jpg'/>
            </Grid>
            <Grid>
                <Typography className={classes.userName}> Mat Oliver</Typography>
                <Typography className={classes.onlineStatus}>online</Typography>
            </Grid>

        </>
    )
}
