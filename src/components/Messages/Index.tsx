import React, { FC } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import UserCard from './UserCard';
import userData from './data';

const useStyles = makeStyles({
    body: {
        position: 'relative',
        backgroundColor: 'white',
        minWidth: '100%',
        height: '100vh',
        fontFamily: 'CircularXXWeb-Book',
        paddingBottom: "50px",
    },
    elements: {
        paddingTop: '9.25rem',
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '2.812rem',
        backgroundColor: 'white',
    },
    userListContainer: {
        backgroundColor: 'white',
    },
    rightHeading: {
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
const Index: FC = () => {
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
                    <Grid container style={{marginTop: "40px"}}>
                        {userData.map(({ id, img, userName, onlineStatus }: any)=> (
                                <UserCard key={id} image={img} userName={userName} onlineStatus={onlineStatus}/>
                        ))}
                    </Grid>
                </Grid>

            </Grid>

        </Container>
    )
}

export default Index;
