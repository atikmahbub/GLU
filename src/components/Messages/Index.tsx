import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import UserCard from './UserCard';

const useStyles = makeStyles({
    body: {
        position: 'relative',
        backgroundColor: '#5E5558',
        minWidth: '100%',
        height: '100vh',
        border: '2px solid #5E5558',
        fontFamily: 'CircularXXWeb-Book',
        paddingBottom: "50px",
    },
    elements: {
        paddingTop: '9.25rem',
    },
    title: {
        fontFamily: 'CircularXXWeb-Book',
        fontSize: '2.625rem',
        lineHeight: '2.812rem',
        backgroundColor: 'white',
    },
    userListContainer: {
        backgroundColor: 'white',
    },
    rightHeading: {
        fontFamily: 'CircularXXWeb-Book',
        fontSize: '5rem',
        lineHeight: '5rem',
    },
    iconAndMessageContainer:{
        marginTop: "36px",
    },
    newMessage: {
        fontSize: "1.125rem",
        color: "#2267FF",
        marginLeft: "10px",
    },


});
export default function Index() {
    const classes = useStyles();

    return (
        <Container className={classes.body}>
            <Grid container className={classes.elements}>
                <Grid item className={classes.title} xs={6}>Messages</Grid>
                <Grid item className={classes.userListContainer} xs={6}>
                    <Typography className={classes.rightHeading}>
                        Looks like you need <br /> to start talking.
                    </Typography>
                    <Grid container className={classes.iconAndMessageContainer} alignItems="center">
                        <i className="icon-Message" style={{ fontSize: "30px" }} />
                        <Typography className={classes.newMessage}>New Message</Typography>
                    </Grid>
                    <Grid container style={{marginTop: "80px"}}>
                        <Grid container xs={6}>
                            <UserCard/>
                        </Grid>
                        <Grid container xs={6}>
                            <UserCard/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </Container>
    )
}
